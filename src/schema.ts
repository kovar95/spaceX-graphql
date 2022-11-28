import { GraphQLObjectType, GraphQLSchema } from "graphql";
import _ from "lodash";
import MissionDetails from "./services/spaceX/queries/MissionDetails";
import SignIn from "./mutations/SignIn";
import UpdateFavouriteMissions from "./mutations/UpdateFavouriteMissions";
import MissionConnection from "./services/spaceX/queries/MissionConnection";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    missionDetails: MissionDetails,
    missionConnection: MissionConnection,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    signIn: SignIn,
    updateFavouriteMissions: UpdateFavouriteMissions,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
