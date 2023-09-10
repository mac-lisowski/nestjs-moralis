# NestJS Moralis Module

Module to provide easy integration of [Moralis.io](https://moralis.io) API with NestJS.

## Installation

To install npm package run command below:

```
npm install --save nestjs-moralis
```

### Example

Below you can see examples of how to import `MoralisModule` into your NestJS application.

**Sync module registration**

```typescript
@Module({
  imports: [
    MoralisModule.register({
      apiKey: "MORALIS_API_KEY_HERE",
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ExampleModule {}
```

**Async module registration**

```typescript
@Module({
  imports: [
    MoralisModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          apiKey: configService.get<string>("MORALIS_API_KEY"),
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ExampleModule {}
```

**Use in your Service**

```typescript
import { EvmChain } from "@moralisweb3/common-evm-utils";

@Injectable()
export class ExampleService {
  constructor(private readonly moralisService: MoralisService) {}

  async getEvmWalletBalance(address: `0x${string}`, chain: EvmChain) {
    const response = await this.moralisService.EvmApi.balance.getNativeBalance({
      address,
      chain,
    });

    return response.toJSON();
  }
}
```

## Module config options

Module options include all config options available in Moralis plus additional properties defined below.

```typescript
export type MoralisModuleOptions = Partial<MoralisConfigValues> & {
  /**
   * @dev set to true if module should be @Global
   */
  isGlobal?: boolean;
};
```
