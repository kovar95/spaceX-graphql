"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const createMissionDetails_1 = __importDefault(require("../dataLoaders/createMissionDetails"));
class SpaceXDataSource extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.spacexdata.com/v4/";
    }
    async willSendRequest(request) {
        request.headers.set("Content-Type", "application/json");
    }
    async getAllLaunches(offset, limit) {
        const params = {
            options: {
                limit,
                offset,
            },
        };
        const response = await this.post(`launches/query`, params);
        return response;
    }
    async getLaunchDetails(id) {
        const response = await this.get(`launches/${encodeURIComponent(id)}`);
        return (0, createMissionDetails_1.default)(response);
    }
}
exports.default = SpaceXDataSource;
//# sourceMappingURL=SpaceXDataSource.js.map