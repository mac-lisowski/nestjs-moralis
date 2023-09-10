"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoralisModule = void 0;
const common_1 = require("@nestjs/common");
const moralis_service_1 = require("./moralis.service");
const moralis_module_definition_1 = require("./moralis.module-definition");
let MoralisModule = class MoralisModule extends moralis_module_definition_1.ConfigurableModuleClass {
};
exports.MoralisModule = MoralisModule;
exports.MoralisModule = MoralisModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [moralis_service_1.MoralisService],
        exports: [moralis_service_1.MoralisService],
    })
], MoralisModule);
//# sourceMappingURL=moralis.module.js.map