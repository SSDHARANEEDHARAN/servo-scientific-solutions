// Environmental Chamber Product Data
export const environmentalChamber = {
  "Salt Spray Chamber": {
    name: "Salt Spray Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "35°C ± 2°C",
      "Chamber Volume": "400 Liters",
      "Salt Solution": "5% NaCl Solution",
      "Spray Rate": "1-2 ml/80cm²/hour",
      "Construction": "PVC Lined Chamber",
      "Nozzles": "Glass Atomizing Nozzles",
      "Controller": "Digital Temperature Controller",
      "Standards": "ASTM B117, ISO 9227"
    },
    features: [
      "Uniform salt spray distribution",
      "Corrosion resistant construction",
      "Automatic solution replenishment",
      "Digital temperature control",
      "Built-in air saturation tower",
      "Easy specimen loading",
      "Meets international standards",
      "Low maintenance operation"
    ],
    description: "Salt spray test chamber for corrosion testing of metals and coatings per ASTM B117 and ISO 9227 international standards."
  },
  "Humidity Chamber": {
    name: "Humidity Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "5°C to 95°C",
      "Humidity Range": "10% to 98% RH",
      "Chamber Volume": "300 Liters",
      "Temperature Accuracy": "±0.5°C",
      "Humidity Accuracy": "±2% RH",
      "Construction": "SS 304 Inner Chamber",
      "Insulation": "PUF Insulation",
      "Controller": "Touchscreen PLC"
    },
    features: [
      "Precise humidity and temperature control",
      "Wide operating range",
      "Uniform conditions throughout chamber",
      "Programmable test cycles",
      "Data logging and monitoring",
      "Energy efficient operation",
      "Easy maintenance access",
      "Safety protection systems"
    ],
    description: "Environmental humidity chamber for testing materials under controlled temperature and humidity conditions with precise control and monitoring."
  },
  "Paint Corrosion Chamber": {
    name: "Paint Corrosion Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Ambient to 70°C",
      "Humidity Range": "85% to 98% RH",
      "Chamber Volume": "500 Liters",
      "UV Radiation": "UVA/UVB Lamps",
      "Condensation": "Water Spray System",
      "Construction": "Corrosion Resistant",
      "Controller": "Programmable Controller",
      "Cycle Options": "Multiple Test Cycles"
    },
    features: [
      "Combined UV and corrosion testing",
      "Accelerated weathering simulation",
      "Programmable test sequences",
      "Uniform exposure conditions",
      "Easy specimen handling",
      "Data recording capability",
      "Safety protection features",
      "Low operating costs"
    ],
    description: "Specialized chamber for testing paint and coating durability under accelerated corrosion and weathering conditions."
  },
  "Environmental Shaker": {
    name: "Environmental Shaker",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "-40°C to 180°C",
      "Vibration Force": "Up to 20 kN",
      "Frequency Range": "5 Hz to 2000 Hz",
      "Displacement": "Up to 51 mm",
      "Payload Capacity": "500 kg",
      "Chamber Volume": "200 Liters",
      "Controller": "Digital Vibration Controller",
      "Standards": "MIL-STD, ISTA, ASTM"
    },
    features: [
      "Combined environmental and vibration testing",
      "Wide temperature and frequency range",
      "Precise vibration control",
      "Multiple test standards supported",
      "Programmable test profiles",
      "Safety monitoring systems",
      "Data acquisition capability",
      "Robust construction"
    ],
    description: "Combined environmental and vibration testing system for comprehensive product reliability testing under real-world conditions."
  },
  "Cyclic Corrosion Chamber": {
    name: "Cyclic Corrosion Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Ambient to 60°C",
      "Humidity Range": "50% to 98% RH",
      "Chamber Volume": "600 Liters",
      "Salt Solution": "Various Solutions",
      "Cycle Programming": "Multi-step Cycles",
      "Construction": "PVDF Lined",
      "Controller": "Touchscreen Controller",
      "Standards": "ASTM G85, ISO 14993"
    },
    features: [
      "Advanced cyclic testing capability",
      "Multiple corrosive environments",
      "Programmable multi-step cycles",
      "Real-world condition simulation",
      "Automatic solution management",
      "Data logging and reporting",
      "Energy efficient operation",
      "Easy maintenance design"
    ],
    description: "Advanced cyclic corrosion testing chamber simulating real-world environmental conditions with programmable multi-step test cycles."
  },
  "Climate Chamber": {
    name: "Climate Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "-70°C to 180°C",
      "Humidity Range": "10% to 98% RH",
      "Chamber Volume": "1000 Liters",
      "Temperature Change Rate": "5°C/min",
      "Humidity Change Rate": "3% RH/min",
      "Construction": "SS 304 Inner Chamber",
      "Insulation": "Vacuum Insulated Panels",
      "Controller": "Advanced PLC System"
    },
    features: [
      "Extreme temperature and humidity range",
      "Rapid change rates",
      "Precise environmental control",
      "Large test volume capacity",
      "Energy efficient design",
      "Advanced programming capability",
      "Safety monitoring systems",
      "Remote monitoring options"
    ],
    description: "Precision climate chamber for comprehensive environmental testing with extreme temperature and humidity control capabilities."
  },
  "PP Tank": {
    name: "PP Tank",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Capacity": "100 to 10,000 Liters",
      "Material": "Polypropylene (PP)",
      "Temperature Range": "-10°C to 100°C",
      "Chemical Resistance": "Excellent",
      "Wall Thickness": "5-15 mm",
      "Fittings": "PP/PVDF Fittings",
      "Design": "Cylindrical/Rectangular",
      "Standards": "IS, ASTM Standards"
    },
    features: [
      "Excellent chemical resistance",
      "Lightweight and durable",
      "Corrosion free operation",
      "Easy installation and maintenance",
      "Custom sizes available",
      "UV stabilized material",
      "Seamless construction",
      "Cost effective solution"
    ],
    description: "Polypropylene tanks for chemical storage and corrosion testing applications with excellent chemical resistance and durability."
  }
};

export const environmentalChamberList = [
  "Salt Spray Chamber",
  "Humidity Chamber", 
  "Paint Corrosion Chamber",
  "Environmental Shaker",
  "Cyclic Corrosion Chamber",
  "Climate Chamber",
  "PP Tank"
];