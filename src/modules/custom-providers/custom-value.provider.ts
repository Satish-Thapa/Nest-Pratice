export const CUSTOM_VALUE_PROVIDER = {
  provide: 'CUSTOM_VALUE',
  useValue: { key: 'value', log: () => console.log('Logging from value!') },
};