import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";
import { toGlobalId } from "graphql-relay";
import { nodeInterface } from "../../../node/Node";
import { Mission } from "../types/Mission";

export default new GraphQLObjectType({
  name: "Mission",
  interfaces: [nodeInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }: Mission, _: any) => {
        return toGlobalId("mission", id);
      },
    },
    dbID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ id }: Mission, _: any) => {
        return id;
      },
    },
    flightNumber: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    missionName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    launchDate: {
      type: GraphQLString,
    },
    iconUrl: {
      type: GraphQLString,
    },
    isFavourite: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    previewImageUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    webcastLink: {
      type: GraphQLString,
    },
  },
});
