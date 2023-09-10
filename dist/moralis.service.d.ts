import { CommonEvmUtils } from '@moralisweb3/common-evm-utils';
import { Core } from '@moralisweb3/common-core';
import { Auth } from '@moralisweb3/auth';
import { Streams } from '@moralisweb3/streams';
import { EvmApi } from '@moralisweb3/evm-api';
import { AptosApi } from '@moralisweb3/aptos-api';
import { CommonSolUtils } from '@moralisweb3/common-sol-utils';
import { SolApi } from '@moralisweb3/sol-api';
import { MoralisModuleOptions } from './moralis-module-options.interface';
export declare class MoralisService {
    private options;
    private readonly logger;
    Core: Core;
    Auth: Auth;
    Streams: Streams;
    EvmApi: EvmApi;
    SolApi: SolApi;
    AptosApi: AptosApi;
    EvmUtils: CommonEvmUtils;
    SolUtils: CommonSolUtils;
    constructor(options: MoralisModuleOptions);
}
