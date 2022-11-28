"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_1 = __importDefault(require("../../../models/user"));
const createMission_1 = __importDefault(require("../dataLoaders/createMission"));
const Mission_1 = __importDefault(require("../outputs/Mission"));
const graphql_relay_1 = require("graphql-relay");
exports.default = {
    type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(Mission_1.default)),
    args: {
        userName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        ...graphql_relay_1.connectionArgs,
    },
    resolve: async (_, { userName, ...connectionArgs }, { dataSources }) => {
        const allMissions = await dataSources.spaceX.getAllLaunches();
        const user = await user_1.default.findOne({ name: userName });
        console.log(user);
        const missions = allMissions.map((mission) => (0, createMission_1.default)(mission, user?.favouriteMissions?.includes(mission.id) ?? false));
        const test = (0, graphql_relay_1.connectionFromArray)(missions, connectionArgs);
        console.log(test);
        return missions;
    },
};
//# sourceMappingURL=Missions.js.map