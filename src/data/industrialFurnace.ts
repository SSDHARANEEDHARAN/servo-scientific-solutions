// Industrial Furnace Product Data
export const industrialFurnace = {
  "High Temperature Furnace": {
    name: "High Temperature Furnace",
    category: "Industrial Furnace",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Up to 1800°C",
      "Chamber Size": "300 x 300 x 300 mm",
      "Heating Elements": "MoSi2 Elements",
      "Power Rating": "25 kW",
      "Atmosphere": "Air, Inert Gas",
      "Construction": "High Alumina Refractory",
      "Controller": "Programmable PID",
      "Ramp Rate": "Up to 20°C/min"
    },
    features: [
      "Ultra-high temperature capability",
      "Excellent temperature uniformity",
      "Programmable heating cycles",
      "Multiple atmosphere options",
      "Rapid heating and cooling",
      "Energy efficient insulation",
      "Safety interlocks system",
      "Data logging capability"
    ],
    description: "High temperature furnace for extreme heat treatment applications in metallurgy, ceramics, and materials research with temperatures up to 1800°C."
  },
  "Lab Furnace (1000/1450/1650)": {
    name: "Lab Furnace (1000/1450/1650)",
    category: "Industrial Furnace",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Up to 1650°C (Model Dependent)",
      "Chamber Size": "200 x 200 x 200 mm",
      "Heating Elements": "Silicon Carbide/MoSi2",
      "Power Rating": "5-15 kW",
      "Temperature Uniformity": "±5°C",
      "Construction": "Alumina Fiber Insulation",
      "Controller": "Digital PID with Ramp/Soak",
      "Atmosphere": "Air/Protective"
    },
    features: [
      "Multiple temperature range options",
      "Compact laboratory design",
      "Precise temperature control",
      "Fast heating rates",
      "Low thermal mass construction",
      "User-friendly interface",
      "Over-temperature protection",
      "Maintenance-free operation"
    ],
    description: "Laboratory furnace series with multiple temperature ranges (1000°C, 1450°C, 1650°C) for various heat treatment and research applications."
  },
  "Muffle Furnace": {
    name: "Muffle Furnace",
    category: "Industrial Furnace",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Up to 1200°C",
      "Chamber Size": "200 x 120 x 75 mm",
      "Heating Elements": "Kanthal Wire Elements",
      "Power Rating": "3 kW",
      "Temperature Uniformity": "±3°C",
      "Construction": "Ceramic Fiber Lined",
      "Controller": "Digital Temperature Controller",
      "Timer": "99 hours 59 minutes"
    },
    features: [
      "Excellent temperature uniformity",
      "Energy efficient design",
      "Easy sample loading",
      "Programmable timer function",
      "Over-temperature safety",
      "Compact benchtop design",
      "Low maintenance operation",
      "Durable construction"
    ],
    description: "Muffle furnace for ashing, annealing, and heat treatment applications with excellent temperature uniformity and reliable performance."
  }
};

export const industrialFurnaceList = [
  "High Temperature Furnace",
  "Lab Furnace (1000/1450/1650)",
  "Muffle Furnace"
];