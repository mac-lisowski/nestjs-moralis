import { Module } from '@nestjs/common';
import { MoralisService } from './moralis.service';
import { ConfigurableModuleClass } from './moralis.module-definition';

@Module({
  imports: [],
  providers: [MoralisService],
  exports: [MoralisService],
})
export class MoralisModule extends ConfigurableModuleClass {}
