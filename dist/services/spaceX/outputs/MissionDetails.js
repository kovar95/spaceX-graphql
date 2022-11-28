"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLObjectType({
    name: "MissionDetails",
    fields: {
        flightNumber: {
            type: graphql_1.GraphQLInt,
        },
        missionName: {
            type: graphql_1.GraphQLString,
        },
        launchDate: {
            type: graphql_1.GraphQLString,
        },
        iconUrl: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        details: {
            type: graphql_1.GraphQLString,
        },
        launchSuccess: {
            type: graphql_1.GraphQLBoolean,
        },
        photosLinks: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLString))),
        },
    },
});
//# sourceMappingURL=MissionDetails.js.map