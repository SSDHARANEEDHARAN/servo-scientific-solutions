import React from 'react';

const brands = [
  { name: "TechnoLab", logo: "TL" },
  { name: "SciencePro", logo: "SP" },
  { name: "IndustrialMax", logo: "IM" },
  { name: "PrecisionTech", logo: "PT" },
  { name: "QualityFirst", logo: "QF" },
  { name: "ReliableSys", logo: "RS" }
];

const BrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-technical-gray mb-4">
            Trusted Partner Brands
          </h2>
          <p className="text-technical-gray">
            Working with leading manufacturers to deliver excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-card rounded-xl flex items-center justify-center shadow-card group-hover:shadow-professional transition-all duration-300">
                <span className="text-2xl font-bold text-professional-blue">
                  {brand.logo}
                </span>
              </div>
              <h3 className="text-sm font-medium text-technical-gray group-hover:text-professional-blue transition-colors">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;