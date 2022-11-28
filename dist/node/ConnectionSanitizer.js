"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionFromPageCursored = void 0;
const graphql_relay_1 = require("graphql-relay");
const connectionFromPageCursored = (data, hasNextPage, hasPrevPage, startingCursorNumber) => {
    const missionsConnection = (0, graphql_relay_1.connectionFromArray)(data, graphql_relay_1.connectionArgs);
    const edges = missionsConnection.edges.map((edge, index) => {
        const cursor = (0, graphql_relay_1.toGlobalId)("arrayconnection", startingCursorNumber + index);
        edge.cursor = cursor;
        return edge;
    });
    missionsConnection.edges = edges;
    missionsConnection.pageInfo.hasNextPage = hasNextPage;
    missionsConnection.pageInfo.hasPreviousPage = hasPrevPage;
    missionsConnection.pageInfo.endCursor = edges[edges.length - 1].cursor;
    missionsConnection.pageInfo.startCursor = edges[0].cursor;
    return missionsConnection;
};
exports.connectionFromPageCursored = connectionFromPageCursored;
//# sourceMappingURL=ConnectionSanitizer.js.map