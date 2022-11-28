"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSources = void 0;
const SpaceXDataSource_1 = __importDefault(require("./spaceX/dataSources/SpaceXDataSource"));
const dataSources = () => {
    const spaceX = new SpaceXDataSource_1.default();
    return {
        spaceX,
    };
};
exports.dataSources = dataSources;
//# sourceMappingURL=DataSources.js.map