import { GraphQLNonNull, GraphQLString } from "graphql";
import GraphQLUser from "../outputs/User";
import User from "../models/user";

export default {
  type: new GraphQLNonNull(GraphQLUser),
  args: {
    userName: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(_: unknown, { userName }: { userName: string }) {
    const existingUser = await User.findOne({ name: userName });

    if (existingUser) {
      return existingUser;
    } else {
      const newUser = new User({
        name,
        favouriteMissions: [],
      });
      return await newUser.save();
    }
  },
};
