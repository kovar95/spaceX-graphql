import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import User from "../../../models/user";
import { GraphqlContextType } from "../../DataSources";
import { ApiMission } from "../apiTypes/ApiMission";
import createMission from "../dataLoaders/createMission";
import GraphQLMission from "../outputs/Mission";
import { Mission } from "../types/Mission";
import {
  connectionArgs,
  ConnectionArguments,
  Connection,
  connectionDefinitions,
  fromGlobalId,
} from "graphql-relay";
import { connectionFromPageCursored } from "../../../node/ConnectionSanitizer";

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;

const { connectionType: GraphQLMissionConnection } = connectionDefinitions({
  nodeType: GraphQLMission,
  connectionFields: {
    pageNumber: {
      type: GraphQLInt,
      description: "Number of page.",
      resolve: (connection) => {
        return connection.pageNumber;
      },
    },
  },
});

export default {
  type: GraphQLMissionConnection,
  args: {
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    ...connectionArgs,
  },
  resolve: async (
    _: unknown,
    { userName, ...connectionArgs }: { userName: string } & ConnectionArguments,
    { dataSources }: GraphqlContextType
  ): Promise<Connection<Mission>> => {
    const { first, after } = connectionArgs;
    const offset = after ? Number(fromGlobalId(after).id) : DEFAULT_OFFSET;
    const limit = first ?? DEFAULT_LIMIT;

    const allMissions = await dataSources.spaceX.getAllLaunches(offset, limit);
    const user = await User.findOne({ name: userName });
    const missions = allMissions.docs.map((mission: ApiMission) =>
      createMission(
        mission,
        user?.favouriteMissions?.includes(mission.id) ?? false
      )
    );

    const startingCursorNumber = allMissions.pagingCounter;

    const connectionCursored = connectionFromPageCursored(
      missions,
      allMissions.hasNextPage,
      allMissions.hasPrevPage,
      startingCursorNumber
    );

    return connectionCursored;
  },
};
