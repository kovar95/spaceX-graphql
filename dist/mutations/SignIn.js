"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const User_1 = __importDefault(require("../outputs/User"));
const user_1 = __importDefault(require("../models/user"));
exports.default = {
    type: new graphql_1.GraphQLNonNull(User_1.default),
    args: {
        userName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    async resolve(_, { userName }) {
        const existingUser = await user_1.default.findOne({ name: userName });
        if (existingUser) {
            return existingUser;
        }
        else {
            const newUser = new user_1.default({
                name,
                favouriteMissions: [],
            });
            return await newUser.save();
        }
    },
};
//# sourceMappingURL=SignIn.js.map