"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_relay_1 = require("graphql-relay");
const Node_1 = require("../../../node/Node");
exports.default = new graphql_1.GraphQLObjectType({
    name: "Mission",
    interfaces: [Node_1.nodeInterface],
    fields: {
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
            resolve: ({ id }, _) => {
                return (0, graphql_relay_1.toGlobalId)("mission", id);
            },
        },
        dbID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            resolve: ({ id }, _) => {
                return id;
            },
        },
        flightNumber: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
        },
        missionName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        launchDate: {
            type: graphql_1.GraphQLString,
        },
        iconUrl: {
            type: graphql_1.GraphQLString,
        },
        isFavourite: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
        },
        previewImageUrl: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        webcastLink: {
            type: graphql_1.GraphQLString,
        },
    },
});
//# sourceMappingURL=Mission.js.map