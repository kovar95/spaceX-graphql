import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import "reflect-metadata";
import { connect } from "mongoose";
import schema from "./schema";
import cors from "cors";
import { dataSources } from "./services/DataSources";

const mongoDbUrl =
  process.env.MONGODB_URI ||
  "mongodb+srv://kovar95:Ml34SEGBEK4iGuZC@spacexcluster.67pvpam.mongodb.net/?retryWrites=true&w=majority";

const main = async () => {
  // create mongoose connection
  await connect(mongoDbUrl)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
      console.log(err);
    });

  const server = new ApolloServer({
    schema,
    dataSources,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  const app = express();

  // // allow cross-origin requests
  app.use(cors());

  await server.start();

  // @ts-ignore
  server.applyMiddleware({ app });

  const port = process.env.PORT || 5000;

  app.listen({ port }, () =>
    console.log(`🚀 Server ready and listening at PORT ==> ${port}`)
  );
};

main().catch((error) => {
  console.log(error, "error");
});
