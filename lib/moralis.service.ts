import { Inject, Injectable, Logger } from '@nestjs/common';
import Moralis from 'moralis';
import { CommonEvmUtils } from '@moralisweb3/common-evm-utils';
import { Core } from '@moralisweb3/common-core';
import { Auth } from '@moralisweb3/auth';
import { Streams } from '@moralisweb3/streams';
import { EvmApi } from '@moralisweb3/evm-api';
import { AptosApi } from '@moralisweb3/aptos-api';
import { CommonSolUtils } from '@moralisweb3/common-sol-utils';
import { SolApi } from '@moralisweb3/sol-api';
import { MODULE_OPTIONS_TOKEN } from './moralis.module-definition';
import { MoralisModuleOptions } from './moralis-module-options.interface';

@Injectable()
export class MoralisService {
  private readonly logger = new Logger(MoralisService.name);

  Core: Core;
  Auth: Auth;
  Streams: Streams;
  EvmApi: EvmApi;
  SolApi: SolApi;
  AptosApi: AptosApi;
  EvmUtils: CommonEvmUtils;
  SolUtils: CommonSolUtils;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: MoralisModuleOptions,
  ) {
    this.Core = Moralis.Core;
    this.EvmApi = Moralis.EvmApi;
    this.Auth = Moralis.Auth;
    this.Streams = Moralis.Streams;
    this.SolApi = Moralis.SolApi;
    this.AptosApi = Moralis.AptosApi;
    this.EvmUtils = Moralis.EvmUtils;
    this.SolUtils = Moralis.SolUtils;

    (async () => {
      const moralisConfigOptions = Object.assign({}, options);

      delete moralisConfigOptions.isGlobal;

      await Moralis.start({
        ...moralisConfigOptions,
      });
    })();
  }
}
