export const CUSTOM_FACTORY_PROVIDER = {
  provide: 'CUSTOM_FACTORY',
  useFactory: () => {
    return {
      now: () => new Date().toISOString(),
    };
  },
};