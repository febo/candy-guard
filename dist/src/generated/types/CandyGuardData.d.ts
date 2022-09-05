import * as beet from '@metaplex-foundation/beet';
import { GuardSet } from './GuardSet';
export declare type CandyGuardData = {
    default: GuardSet;
    groups: beet.COption<GuardSet[]>;
};
export declare const candyGuardDataBeet: beet.FixableBeetArgsStruct<CandyGuardData>;
