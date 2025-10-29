import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "laboratory instruments supplier, scientific equipment, heating instruments, industrial furnaces, microbiology instruments, thermocouples, Servo Scientific Supplier",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  structuredData
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = {
      description,
      keywords,
      'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      'og:type': ogType,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage.startsWith('http') ? ogImage : `https://www.nextcraft.co.in${ogImage}`,
      'og:url': canonical || '',
      'og:site_name': 'Servo Scientific Suppliers',
      'og:locale': 'en_IN',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage.startsWith('http') ? ogImage : `https://www.nextcraft.co.in${ogImage}`,
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
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(s => s.remove());
      
      // Add new structured data (supports array of schemas)
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData]);

  return null;
};

export default SEOHead;
