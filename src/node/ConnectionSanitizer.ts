import {
  connectionFromArray,
  connectionArgs,
  Connection,
  toGlobalId,
} from "graphql-relay";
import { Mission } from "../services/spaceX/types/Mission";

const connectionFromPageCursored = (
  data: Mission[],
  hasNextPage: boolean,
  hasPrevPage: boolean,
  startingCursorNumber: number
): Connection<Mission> => {
  const missionsConnection = connectionFromArray<Mission>(data, connectionArgs);

  const edges = missionsConnection.edges.map((edge, index) => {
    const cursor = toGlobalId("arrayconnection", startingCursorNumber + index);
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

export { connectionFromPageCursored };
