"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MoralisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoralisService = void 0;
const common_1 = require("@nestjs/common");
const moralis_1 = require("moralis");
const moralis_module_definition_1 = require("./moralis.module-definition");
let MoralisService = MoralisService_1 = class MoralisService {
    constructor(options) {
        this.options = options;
        this.logger = new common_1.Logger(MoralisService_1.name);
        this.Core = moralis_1.default.Core;
        this.EvmApi = moralis_1.default.EvmApi;
        this.Auth = moralis_1.default.Auth;
        this.Streams = moralis_1.default.Streams;
        this.SolApi = moralis_1.default.SolApi;
        this.AptosApi = moralis_1.default.AptosApi;
        this.EvmUtils = moralis_1.default.EvmUtils;
        this.SolUtils = moralis_1.default.SolUtils;
        (async () => {
            const moralisConfigOptions = Object.assign({}, options);
            delete moralisConfigOptions.isGlobal;
            await moralis_1.default.start({
                ...moralisConfigOptions,
            });
        })();
    }
};
exports.MoralisService = MoralisService;
exports.MoralisService = MoralisService = MoralisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(moralis_module_definition_1.MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [Object])
], MoralisService);
//# sourceMappingURL=moralis.service.js.map