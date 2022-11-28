import { GraphQLNonNull, GraphQLID } from "graphql";
import { GraphqlContextType } from "../../DataSources";
import GraphQLMissionDetails from "../outputs/MissionDetails";
import { MissionDetails } from "../types/MissionDetails";

export default {
  type: GraphQLMissionDetails,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: unknown,
    { id }: { id: string },
    { dataSources }: GraphqlContextType
  ): Promise<MissionDetails> => await dataSources.spaceX.getLaunchDetails(id),
};
