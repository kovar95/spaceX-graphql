"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeField = exports.nodeInterface = exports.typeResolver = exports.idFetcher = void 0;
const graphql_relay_1 = require("graphql-relay");
const graphql_relay_2 = require("graphql-relay");
const nodeTypes = ["optionDescriptor", "financialImpact", "booking"];
const idFetcher = async (id, { dataSources }) => {
    return {
        id,
    };
};
exports.idFetcher = idFetcher;
const typeResolver = ({ id }) => {
    return (0, graphql_relay_2.fromGlobalId)(id).type;
};
exports.typeResolver = typeResolver;
const { nodeInterface, nodeField } = (0, graphql_relay_1.nodeDefinitions)(exports.idFetcher, exports.typeResolver);
exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;
//# sourceMappingURL=Node.js.map