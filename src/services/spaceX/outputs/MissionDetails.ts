import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";

export default new GraphQLObjectType({
  name: "MissionDetails",
  fields: {
    flightNumber: {
      type: GraphQLInt,
    },
    missionName: {
      type: GraphQLString,
    },
    launchDate: {
      type: GraphQLString,
    },
    iconUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    details: {
      type: GraphQLString,
    },
    launchSuccess: {
      type: GraphQLBoolean,
    },
    photosLinks: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
  },
});
