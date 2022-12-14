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
exports.candyGuardBeet = exports.CandyGuard = exports.candyGuardDiscriminator = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
const beet = __importStar(require("@metaplex-foundation/beet"));
exports.candyGuardDiscriminator = [44, 207, 199, 184, 112, 103, 34, 181];
class CandyGuard {
    constructor(base, bump, authority) {
        this.base = base;
        this.bump = bump;
        this.authority = authority;
    }
    static fromArgs(args) {
        return new CandyGuard(args.base, args.bump, args.authority);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return CandyGuard.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address) {
        const accountInfo = await connection.getAccountInfo(address);
        if (accountInfo == null) {
            throw new Error(`Unable to find CandyGuard account at ${address}`);
        }
        return CandyGuard.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('YootGoPnkafgM6C2vdVKE1QWctUVXA1ggSejgJnNQs7')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.candyGuardBeet);
    }
    static deserialize(buf, offset = 0) {
        return exports.candyGuardBeet.deserialize(buf, offset);
    }
    serialize() {
        return exports.candyGuardBeet.serialize({
            accountDiscriminator: exports.candyGuardDiscriminator,
            ...this,
        });
    }
    static get byteSize() {
        return exports.candyGuardBeet.byteSize;
    }
    static async getMinimumBalanceForRentExemption(connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(CandyGuard.byteSize, commitment);
    }
    static hasCorrectByteSize(buf, offset = 0) {
        return buf.byteLength - offset === CandyGuard.byteSize;
    }
    pretty() {
        return {
            base: this.base.toBase58(),
            bump: this.bump,
            authority: this.authority.toBase58(),
        };
    }
}
exports.CandyGuard = CandyGuard;
exports.candyGuardBeet = new beet.BeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['base', beetSolana.publicKey],
    ['bump', beet.u8],
    ['authority', beetSolana.publicKey],
], CandyGuard.fromArgs, 'CandyGuard');
//# sourceMappingURL=CandyGuard.js.map