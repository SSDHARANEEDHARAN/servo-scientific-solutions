import React, { useEffect, useRef, useState } from 'react';

const TrustedPartners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Partner logos data (25 partners)
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+6" },
    { name: "Partner 7", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+7" },
    { name: "Partner 8", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+8" },
    { name: "Partner 9", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+9" },
    { name: "Partner 10", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+10" },
    { name: "Partner 11", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+11" },
    { name: "Partner 12", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+12" },
    { name: "Partner 13", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+13" },
    { name: "Partner 14", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+14" },
    { name: "Partner 15", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+15" },
    { name: "Partner 16", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+16" },
    { name: "Partner 17", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+17" },
    { name: "Partner 18", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+18" },
    { name: "Partner 19", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+19" },
    { name: "Partner 20", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+20" },
    { name: "Partner 21", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+21" },
    { name: "Partner 22", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+22" },
    { name: "Partner 23", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+23" },
    { name: "Partner 24", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+24" },
    { name: "Partner 25", logo: "https://via.placeholder.com/150x80/1e40af/ffffff?text=Partner+25" },
  ];

  // Duplicate partners for infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const itemWidth = 200; // Width of each item including gap
    let currentPosition = 0;

    const scrollInterval = setInterval(() => {
      currentPosition += itemWidth;
      
      // Reset to start when reaching the end of first set
      if (currentPosition >= itemWidth * partners.length) {
        scrollContainer.style.transition = 'none';
        currentPosition = 0;
        scrollContainer.scrollLeft = 0;
        
        // Re-enable transition after reset
        setTimeout(() => {
          scrollContainer.style.transition = 'scroll 0.8s ease-in-out';
        }, 50);
      } else {
        scrollContainer.scrollTo({
          left: currentPosition,
          behavior: 'smooth'
        });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, [isPaused, partners.length]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-[180px] h-[100px] bg-background rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center p-4 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            div::-webkit-scrollbar {
              display: none;
            }
          `
        }} />
      </div>
    </section>
  );
};

export default TrustedPartners;
