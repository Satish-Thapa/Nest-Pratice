export class CustomLogger {
  log(message: string) {
    console.log('[CustomLogger]', message);
  }
}

export const CUSTOM_LOGGER_PROVIDER = {
  provide: 'CUSTOM_LOGGER',
  useClass: CustomLogger,
};