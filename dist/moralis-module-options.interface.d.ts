import { MoralisConfigValues } from 'moralis';
export type MoralisModuleOptions = Partial<MoralisConfigValues> & {
    isGlobal?: boolean;
};
