// Central product data export
import { heatingInstruments, heatingInstrumentsList } from './heatingInstruments';
import { industrialFurnace, industrialFurnaceList } from './industrialFurnace';
import { environmentalChamber, environmentalChamberList } from './environmentalChamber';
import { heater, heaterList } from './heater';
import { microbiologyInstruments, microbiologyInstrumentsList } from './microbiologyInstruments';
import { thermocouple, thermocoupleList } from './thermocouple';

// Combined product database
export const productDatabase = {
  ...heatingInstruments,
  ...industrialFurnace,
  ...environmentalChamber,
  ...heater,
  ...microbiologyInstruments,
  ...thermocouple
};

// Product categories with their respective items
export const productCategories = {
  "Heating Instruments": heatingInstrumentsList,
  "Industrial Furnace": industrialFurnaceList,
  "Environmental Chamber": environmentalChamberList,
  "Heater": heaterList,
  "Microbiology Instruments": microbiologyInstrumentsList,
  "Thermocouple": thermocoupleList
};

// Individual category exports for specific use cases
export {
  heatingInstruments,
  heatingInstrumentsList,
  industrialFurnace,
  industrialFurnaceList,
  environmentalChamber,
  environmentalChamberList,
  heater,
  heaterList,
  microbiologyInstruments,
  microbiologyInstrumentsList,
  thermocouple,
  thermocoupleList
};