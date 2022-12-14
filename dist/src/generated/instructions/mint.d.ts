import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare type MintInstructionArgs = {
    mintArgs: Uint8Array;
    label: beet.COption<string>;
};
export declare const mintStruct: beet.FixableBeetArgsStruct<MintInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type MintInstructionAccounts = {
    candyGuard: web3.PublicKey;
    candyMachineProgram: web3.PublicKey;
    candyMachine: web3.PublicKey;
    candyMachineAuthorityPda: web3.PublicKey;
    payer: web3.PublicKey;
    nftMetadata: web3.PublicKey;
    nftMint: web3.PublicKey;
    nftMintAuthority: web3.PublicKey;
    nftMasterEdition: web3.PublicKey;
    collectionAuthorityRecord: web3.PublicKey;
    collectionMint: web3.PublicKey;
    collectionMetadata: web3.PublicKey;
    collectionMasterEdition: web3.PublicKey;
    collectionUpdateAuthority: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
    recentSlothashes: web3.PublicKey;
    instructionSysvarAccount: web3.PublicKey;
};
export declare const mintInstructionDiscriminator: number[];
export declare function createMintInstruction(accounts: MintInstructionAccounts, args: MintInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
