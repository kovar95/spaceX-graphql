"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const MissionDetails_1 = __importDefault(require("./services/spaceX/queries/MissionDetails"));
const SignIn_1 = __importDefault(require("./mutations/SignIn"));
const UpdateFavouriteMissions_1 = __importDefault(require("./mutations/UpdateFavouriteMissions"));
const MissionConnection_1 = __importDefault(require("./services/spaceX/queries/MissionConnection"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        missionDetails: MissionDetails_1.default,
        missionConnection: MissionConnection_1.default,
    },
});
const RootMutation = new graphql_1.GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        signIn: SignIn_1.default,
        updateFavouriteMissions: UpdateFavouriteMissions_1.default,
    },
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
//# sourceMappingURL=schema.js.map