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
const ConnectionSanitizer_1 = require("../../../node/ConnectionSanitizer");
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;
const { connectionType: GraphQLMissionConnection } = (0, graphql_relay_1.connectionDefinitions)({
    nodeType: Mission_1.default,
    connectionFields: {
        pageNumber: {
            type: graphql_1.GraphQLInt,
            description: "Number of page.",
            resolve: (connection) => {
                return connection.pageNumber;
            },
        },
    },
});
exports.default = {
    type: GraphQLMissionConnection,
    args: {
        userName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        ...graphql_relay_1.connectionArgs,
    },
    resolve: async (_, { userName, ...connectionArgs }, { dataSources }) => {
        const { first, after } = connectionArgs;
        const offset = after ? Number((0, graphql_relay_1.fromGlobalId)(after).id) : DEFAULT_OFFSET;
        const limit = first ?? DEFAULT_LIMIT;
        const allMissions = await dataSources.spaceX.getAllLaunches(offset, limit);
        const user = await user_1.default.findOne({ name: userName });
        const missions = allMissions.docs.map((mission) => (0, createMission_1.default)(mission, user?.favouriteMissions?.includes(mission.id) ?? false));
        const startingCursorNumber = allMissions.pagingCounter;
        const connectionCursored = (0, ConnectionSanitizer_1.connectionFromPageCursored)(missions, allMissions.hasNextPage, allMissions.hasPrevPage, startingCursorNumber);
        return connectionCursored;
    },
};
//# sourceMappingURL=MissionConnection.js.map