import { Module } from '@nestjs/common';
import { CUSTOM_LOGGER_PROVIDER } from './custom-class.provider';
import { CUSTOM_VALUE_PROVIDER } from './custom-value.provider';
import { CUSTOM_FACTORY_PROVIDER } from './custom-factory.provider';
import { CUSTOM_EXISTING_PROVIDER } from './custom-existing.provider';

@Module({
  providers: [
    CUSTOM_LOGGER_PROVIDER,
    CUSTOM_VALUE_PROVIDER,
    CUSTOM_FACTORY_PROVIDER,
    CUSTOM_EXISTING_PROVIDER,
  ],
  exports: [
    CUSTOM_LOGGER_PROVIDER,
    CUSTOM_VALUE_PROVIDER,
    CUSTOM_FACTORY_PROVIDER,
    CUSTOM_EXISTING_PROVIDER,
  ],
})
export class CustomModule {}