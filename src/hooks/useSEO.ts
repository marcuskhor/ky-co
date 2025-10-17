import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const useSEO = ({ title, description, keywords, canonicalUrl }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update or create canonical URL
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (linkCanonical) {
        linkCanonical.href = canonicalUrl;
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        linkCanonical.href = canonicalUrl;
        document.head.appendChild(linkCanonical);
      }
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    if (canonicalUrl) {
      updateOGTag('og:url', canonicalUrl);
    }

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    };

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    if (canonicalUrl) {
      updateTwitterTag('twitter:url', canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);
};
