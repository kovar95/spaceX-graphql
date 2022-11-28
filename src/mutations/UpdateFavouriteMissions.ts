import { GraphQLNonNull, GraphQLString } from "graphql";
import User from "../models/user";
import GraphQLMission from "../services/spaceX/outputs/Mission";

export default {
  type: GraphQLMission,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    userName: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(
    _: unknown,
    { id, userName }: { id: string; userName: string }
  ) {
    const user = await User.findOne({ name: userName });

    const favouriteMissions = user?.favouriteMissions ?? [];

    let newFavMissions: string[];

    if (favouriteMissions.includes(id)) {
      newFavMissions = favouriteMissions.filter(
        (missionId) => missionId !== id
      );
    } else {
      newFavMissions = [...favouriteMissions, id];
    }

    if (user) {
      user.favouriteMissions = newFavMissions;
      user.save();
    }
    return {
      id,
      isFavourite: newFavMissions.includes(id),
    };
  },
};
