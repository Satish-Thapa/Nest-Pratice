// logger.provider.ts
export const LOGGER = {
  provide: 'LOGGER',
  useValue: console,
};
export const LOGGER_PROVIDER = {
  provide: 'LOGGER_PROVIDER',
  useFactory: () => {
    return {
      log: (message: string) => console.log(message),
      error: (message: string) => console.error(message),
      warn: (message: string) => console.warn(message),
      debug: (message: string) => console.debug(message),
    };
  },
};
