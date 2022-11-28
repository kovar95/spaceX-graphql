"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const MissionDetails_1 = __importDefault(require("../outputs/MissionDetails"));
exports.default = {
    type: MissionDetails_1.default,
    args: {
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
        },
    },
    resolve: async (_, { id }, { dataSources }) => await dataSources.spaceX.getLaunchDetails(id),
};
//# sourceMappingURL=MissionDetails.js.map