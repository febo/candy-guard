"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMintInstruction = exports.mintInstructionDiscriminator = exports.mintStruct = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
exports.mintStruct = new beet.FixableBeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['mintArgs', beet.bytes],
    ['label', beet.coption(beet.utf8String)],
], 'MintInstructionArgs');
exports.mintInstructionDiscriminator = [51, 57, 225, 47, 182, 146, 137, 166];
function createMintInstruction(accounts, args, programId = new web3.PublicKey('YootGoPnkafgM6C2vdVKE1QWctUVXA1ggSejgJnNQs7')) {
    var _a, _b, _c;
    const [data] = exports.mintStruct.serialize({
        instructionDiscriminator: exports.mintInstructionDiscriminator,
        ...args,
    });
    const keys = [
        {
            pubkey: accounts.candyGuard,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.candyMachineProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.candyMachine,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.candyMachineAuthorityPda,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.payer,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.nftMetadata,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.nftMint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.nftMintAuthority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: accounts.nftMasterEdition,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionAuthorityRecord,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionMint,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionMetadata,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionMasterEdition,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionUpdateAuthority,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.tokenMetadataProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.systemProgram) !== null && _b !== void 0 ? _b : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_c = accounts.rent) !== null && _c !== void 0 ? _c : web3.SYSVAR_RENT_PUBKEY,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.recentSlothashes,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.instructionSysvarAccount,
            isWritable: false,
            isSigner: false,
        },
    ];
    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}
exports.createMintInstruction = createMintInstruction;
//# sourceMappingURL=mint.js.map