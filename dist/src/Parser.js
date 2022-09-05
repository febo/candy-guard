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
exports.parseData = void 0;
const types_1 = require("./generated/types");
const bn_js_1 = require("bn.js");
const beet = __importStar(require("@metaplex-foundation/beet"));
const log_1 = require("./utils/log");
const GUARDS_COUNT = 9;
function determineGuards(buffer) {
    const enabled = new bn_js_1.BN(beet.u64.read(buffer, 0)).toNumber();
    const guards = [];
    for (let i = 0; i < GUARDS_COUNT; i++) {
        guards.push(!!((1 << i) & enabled));
    }
    const [botTaxEnabled, liveDateEnabled, lamportsEnabled, splTokenEnabled, thirdPartySignerEnabled, whitelistEnabled, gatekeeperEnabled, endSettingsEnabled, allowListEnabled, mintLimitEnabled,] = guards;
    return {
        botTaxEnabled,
        liveDateEnabled,
        lamportsEnabled,
        splTokenEnabled,
        thirdPartySignerEnabled,
        whitelistEnabled,
        gatekeeperEnabled,
        endSettingsEnabled,
        allowListEnabled,
        mintLimitEnabled,
    };
}
function parseData(buffer) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const guards = determineGuards(buffer);
    const { botTaxEnabled, liveDateEnabled, lamportsEnabled, splTokenEnabled, thirdPartySignerEnabled, whitelistEnabled, gatekeeperEnabled, endSettingsEnabled, allowListEnabled, } = guards;
    (0, log_1.logDebug)('Guards: %O', guards);
    let cursor = 8;
    let data = {};
    if (botTaxEnabled) {
        const [botTax, offset] = types_1.botTaxBeet.deserialize(buffer, cursor);
        data['botTax'] = botTax;
        cursor = offset;
    }
    if (liveDateEnabled) {
        const [liveDate, offset] = types_1.liveDateBeet.deserialize(buffer, cursor);
        data['liveDate'] = liveDate;
        cursor = offset;
    }
    if (lamportsEnabled) {
        const [lamports, offset] = types_1.lamportsBeet.deserialize(buffer, cursor);
        data['lamports'] = lamports;
        cursor = offset;
    }
    if (splTokenEnabled) {
        const [splToken, offset] = types_1.splTokenBeet.deserialize(buffer, cursor);
        data['splToken'] = splToken;
        cursor = offset;
    }
    if (thirdPartySignerEnabled) {
        const [thirdPartySigner, offset] = types_1.thirdPartySignerBeet.deserialize(buffer, cursor);
        data['thirdPartySigner'] = thirdPartySigner;
        cursor = offset;
    }
    if (whitelistEnabled) {
        const [whitelist, offset] = types_1.whitelistBeet.deserialize(buffer, cursor);
        data['whitelist'] = whitelist;
        cursor = offset;
    }
    if (gatekeeperEnabled) {
        const [gatekeeper, offset] = types_1.gatekeeperBeet.deserialize(buffer, cursor);
        data['gatekeeper'] = gatekeeper;
        cursor = offset;
    }
    if (endSettingsEnabled) {
        const [endSettings, offset] = types_1.endSettingsBeet.deserialize(buffer, cursor);
        data['endSettings'] = endSettings;
        cursor = offset;
    }
    if (allowListEnabled) {
        const [allowList, offset] = types_1.allowListBeet.deserialize(buffer, cursor);
        data['allowList'] = allowList;
        cursor = offset;
    }
    return {
        default: {
            botTax: (_a = data['botTax']) !== null && _a !== void 0 ? _a : null,
            liveDate: (_b = data['liveDate']) !== null && _b !== void 0 ? _b : null,
            lamports: (_c = data['lamports']) !== null && _c !== void 0 ? _c : null,
            splToken: (_d = data['splToken']) !== null && _d !== void 0 ? _d : null,
            thirdPartySigner: (_e = data['thirdPartySigner']) !== null && _e !== void 0 ? _e : null,
            whitelist: (_f = data['whitelist']) !== null && _f !== void 0 ? _f : null,
            gatekeeper: (_g = data['gateKeeper']) !== null && _g !== void 0 ? _g : null,
            endSettings: (_h = data['endSettings']) !== null && _h !== void 0 ? _h : null,
            allowList: (_j = data['allowList']) !== null && _j !== void 0 ? _j : null,
            mintLimit: (_k = data['mintLimit']) !== null && _k !== void 0 ? _k : null,
        },
        groups: null,
    };
}
exports.parseData = parseData;
//# sourceMappingURL=Parser.js.map