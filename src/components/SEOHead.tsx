import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "laboratory instruments supplier, scientific equipment, heating instruments, industrial furnaces, microbiology instruments, thermocouples, Servo Scientific Supplier",
  canonical,
  ogImage = "/og-image.jpg",
  structuredData
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags with enhanced SEO
    const metaTags = {
      description,
      keywords,
      'author': 'Servo Scientific',
      'robots': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      'og:type': 'website',
      'og:site_name': 'Servo Scientific',
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:url': canonical || window.location.href,
      'og:locale': 'en_US',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
      'twitter:site': '@servoscientific',
    };

    Object.entries(metaTags).forEach(([key, value]) => {
      const attribute = key.startsWith('og:') || key.startsWith('twitter:') ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${key}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', value);
    });

    // Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null;
};

export default SEOHead;
