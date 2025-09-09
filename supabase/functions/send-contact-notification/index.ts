import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing contact form notification...");
    
    const { 
      first_name, 
      last_name, 
      email, 
      phone, 
      company, 
      service_interest, 
      message 
    }: ContactNotificationRequest = await req.json();

    const fullName = `${first_name} ${last_name}`;
    
    // Send notification to business owner
    const businessNotification = await resend.emails.send({
      from: "KY & CO Contact Form <onboarding@resend.dev>",
      to: ["m.khor@hotmail.com"],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${service_interest ? `<p><strong>Service of Interest:</strong> ${service_interest}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="margin-top: 20px; color: #666;">
          This email was sent from your KY & CO website contact form.
        </p>
      `,
    });

    // Send auto-reply to customer
    const customerReply = await resend.emails.send({
      from: "KY & CO <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting KY & CO",
      html: `
        <h1>Thank you for your inquiry, ${first_name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Your Message:</h3>
          <p style="color: #666;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p>Our team typically responds within 24 hours during business days.</p>
        
        <div style="margin-top: 30px; padding: 20px; background: #e8f4fd; border-radius: 8px;">
          <h3>Contact Information:</h3>
          <p><strong>Phone:</strong> 012-731 2618</p>
          <p><strong>Email:</strong> ad.kyco@hotmail.com</p>
          <p><strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>
        
        <p style="margin-top: 20px;">
          Best regards,<br>
          <strong>KY & CO Team</strong><br>
          Professional Audit & Advisory Services
        </p>
      `,
    });

    console.log("Business notification sent:", businessNotification);
    console.log("Customer auto-reply sent:", customerReply);

    return new Response(JSON.stringify({ 
      success: true,
      businessNotification,
      customerReply
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);