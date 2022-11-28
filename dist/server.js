"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const mongoose_1 = require("mongoose");
const schema_1 = __importDefault(require("./schema"));
const cors_1 = __importDefault(require("cors"));
const DataSources_1 = require("./services/DataSources");
const mongoDbUrl = process.env.MONGODB_URI ||
    "mongodb+srv://kovar95:Ml34SEGBEK4iGuZC@spacexcluster.67pvpam.mongodb.net/?retryWrites=true&w=majority";
const main = async () => {
    await (0, mongoose_1.connect)(mongoDbUrl)
        .then(() => console.log("DB Connected"))
        .catch((err) => {
        console.log(err);
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema: schema_1.default,
        dataSources: DataSources_1.dataSources,
        plugins: [apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    await server.start();
    server.applyMiddleware({ app });
    const port = process.env.PORT || 5000;
    app.listen({ port }, () => console.log(`🚀 Server ready and listening at PORT ==> ${port}`));
};
main().catch((error) => {
    console.log(error, "error");
});
//# sourceMappingURL=server.js.map