"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const spok_1 = __importDefault(require("spok"));
const bn_js_1 = require("bn.js");
const setup_1 = require("./setup/");
const generated_1 = require("../src/generated");
const utils_1 = require("./utils");
const src_1 = require("../src");
const API = new setup_1.InitTransactions();
(0, setup_1.killStuckProcess)();
(0, tape_1.default)('initialize: new candy guard (no guards)', async (t) => {
    const { fstTxHandler, payerPair, connection } = await API.payer();
    const data = {
        default: {
            botTax: null,
            liveDate: null,
            lamports: null,
            splToken: null,
            thirdPartySigner: null,
            whitelist: null,
            gatekeeper: null,
            endSettings: null,
            allowList: null,
            mintLimit: null,
        },
        groups: null,
    };
    const { tx: transaction, candyGuard: address } = await API.initialize(t, data, payerPair, fstTxHandler);
    await transaction.assertSuccess(t);
    const candyGuard = await generated_1.CandyGuard.fromAccountAddress(connection, address);
    (0, spok_1.default)(t, candyGuard, {
        authority: (0, utils_1.spokSamePubkey)(payerPair.publicKey),
    });
    const accountInfo = await connection.getAccountInfo(address);
    const candyGuardData = (0, src_1.parseData)(accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data.subarray(utils_1.DATA_OFFSET));
    (0, spok_1.default)(t, candyGuardData, data);
});
(0, tape_1.default)('initialize: new candy guard (with guards)', async (t) => {
    const { fstTxHandler, payerPair, connection } = await API.payer();
    const data = {
        default: {
            botTax: {
                lamports: new bn_js_1.BN(100000000),
                lastInstruction: true,
            },
            liveDate: {
                date: 1662248678,
            },
            lamports: {
                amount: new bn_js_1.BN(100000000),
            },
            splToken: null,
            thirdPartySigner: {
                signerKey: payerPair.publicKey
            },
            whitelist: null,
            gatekeeper: null,
            endSettings: null,
            allowList: null,
            mintLimit: null,
        },
        groups: null
    };
    const { tx: transaction, candyGuard: address } = await API.initialize(t, data, payerPair, fstTxHandler);
    await transaction.assertSuccess(t);
    const candyGuard = await generated_1.CandyGuard.fromAccountAddress(connection, address);
    (0, spok_1.default)(t, candyGuard, {
        authority: (0, utils_1.spokSamePubkey)(payerPair.publicKey),
    });
    const accountInfo = await connection.getAccountInfo(address);
    const candyGuardData = (0, src_1.parseData)(accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data.subarray(utils_1.DATA_OFFSET));
    (0, spok_1.default)(t, candyGuardData.default.liveDate, {
        date: (0, utils_1.spokSameBignum)(data.default.liveDate.date),
    });
    (0, spok_1.default)(t, candyGuardData.default.lamports, {
        amount: (0, utils_1.spokSameBignum)(data.default.lamports.amount),
    });
    (0, spok_1.default)(t, candyGuardData.default.thirdPartySigner, {
        signerKey: (0, utils_1.spokSamePubkey)(payerPair.publicKey),
    });
});
//# sourceMappingURL=01-initialize.js.map