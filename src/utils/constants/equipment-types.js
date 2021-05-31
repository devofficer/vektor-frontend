
const EQUIPMENT_TYPE = Object.freeze({
  PROCESS: 'PROCESS',
  UTILITIES: 'UTILITIES',
  ANALYTICS: 'ANALYTICS',
  AUTOMATION: 'AUTOMATION',
  COMPUTER_SYSTEMS: 'COMPUTER_SYSTEMS',
})

const EQUIPMENT_TYPES = [
  {
    LABEL: EQUIPMENT_TYPE.PROCESS,
    VALUE: EQUIPMENT_TYPE.PROCESS,
  },
  {
    LABEL: EQUIPMENT_TYPE.UTILITIES,
    VALUE: EQUIPMENT_TYPE.UTILITIES,
  },
  {
    LABEL: EQUIPMENT_TYPE.ANALYTICS,
    VALUE: EQUIPMENT_TYPE.ANALYTICS,
  },
  {
    LABEL: EQUIPMENT_TYPE.AUTOMATION,
    VALUE: EQUIPMENT_TYPE.AUTOMATION,
  },
  {
    LABEL: EQUIPMENT_TYPE.COMPUTER_SYSTEMS,
    VALUE: EQUIPMENT_TYPE.COMPUTER_SYSTEMS,
  },
];

export {
  EQUIPMENT_TYPE,
  EQUIPMENT_TYPES
};