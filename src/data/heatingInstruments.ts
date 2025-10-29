// Heating Instruments Product Data
export const heatingInstruments = {
  "Hot Air Oven": {
    name: "Hot Air Oven",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "50°C to 300°C",
      "Chamber Size": "450 x 450 x 450 mm",
      "Temperature Accuracy": "±2°C",
      "Power Rating": "3.5 kW",
      "Timer Range": "0-999 minutes",
      "Construction": "SS 304 Inner, MS Outer",
      "Insulation": "Glass Wool",
      "Controller": "Digital PID"
    },
    features: [
      "Uniform temperature distribution",
      "Digital temperature controller with timer",
      "Over temperature protection",
      "Powder coated exterior finish",
      "Double wall construction for energy efficiency",
      "Perforated shelves for better air circulation",
      "Door lock safety system",
      "Low maintenance and easy operation"
    ],
    description: "Our Hot Air Oven provides precise temperature control and uniform heat distribution for laboratory drying, sterilization, and heat treatment applications. Built with high-quality materials and advanced temperature control systems."
  },
  "Tray Dryer": {
    name: "Tray Dryer",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Ambient to 200°C",
      "Tray Capacity": "24 Trays",
      "Tray Size": "600 x 400 x 50 mm",
      "Power Rating": "15 kW",
      "Air Circulation": "Forced Air Circulation",
      "Construction": "SS 304 Inner, MS Outer",
      "Insulation": "Mineral Wool",
      "Controller": "Digital Temperature Controller"
    },
    features: [
      "Uniform drying throughout all trays",
      "Adjustable air circulation system",
      "Energy efficient heating system",
      "Easy loading and unloading",
      "Robust construction for industrial use",
      "Precise temperature control",
      "Low maintenance operation",
      "Safety interlocks and alarms"
    ],
    description: "Industrial tray dryer for efficient drying of pharmaceuticals, chemicals, and food products with excellent heat circulation and uniform temperature distribution."
  },
  "Vacuum Dryer": {
    name: "Vacuum Dryer",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Ambient to 250°C",
      "Vacuum Level": "Up to 760 mmHg",
      "Chamber Volume": "100 Liters",
      "Power Rating": "5 kW",
      "Heating": "Jacket Heating",
      "Construction": "SS 316L Chamber",
      "Vacuum Pump": "Rotary Vane Pump",
      "Controller": "PLC Based Control"
    },
    features: [
      "Gentle drying under vacuum conditions",
      "Suitable for heat-sensitive materials",
      "Reduced drying time and temperature",
      "Prevents oxidation during drying",
      "Easy cleaning and maintenance",
      "Automatic vacuum control",
      "Temperature uniformity ±3°C",
      "Solvent recovery capability"
    ],
    description: "Vacuum drying oven for heat-sensitive materials, providing gentle drying under controlled vacuum conditions with reduced temperature requirements."
  },
  "Hot Plate": {
    name: "Hot Plate",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "50°C to 350°C",
      "Plate Size": "200 x 200 mm",
      "Power Rating": "1.5 kW",
      "Material": "Aluminum Alloy Plate",
      "Controller": "Digital PID",
      "Display": "LED Digital",
      "Safety": "Over Heat Protection",
      "Accuracy": "±2°C"
    },
    features: [
      "Fast heating and cooling",
      "Digital temperature control",
      "Uniform heat distribution",
      "Chemical resistant surface",
      "Compact and portable",
      "Over temperature protection",
      "Easy operation",
      "Energy efficient"
    ],
    description: "Precision hot plate for laboratory heating applications with excellent temperature uniformity and control."
  },
  "Water Bath": {
    name: "Water Bath",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Ambient +5°C to 100°C",
      "Chamber Size": "300 x 200 x 150 mm",
      "Temperature Accuracy": "±0.5°C",
      "Power Rating": "2 kW",
      "Capacity": "9 Liters",
      "Construction": "SS 304 Inner Chamber",
      "Controller": "Digital Temperature Display",
      "Safety": "Over Temperature Cut-off"
    },
    features: [
      "Precise temperature control",
      "Digital display with timer",
      "Uniform heating throughout",
      "Corrosion resistant construction",
      "Energy efficient design",
      "Safety thermal cut-off",
      "Easy to clean and maintain",
      "Compact desktop design"
    ],
    description: "Laboratory water bath designed for consistent temperature heating applications in research, clinical, and industrial laboratories."
  }
};

export const heatingInstrumentsList = [
  "Hot Air Oven",
  "Tray Dryer", 
  "Vacuum Dryer",
  "Hot Plate",
  "Water Bath"
];