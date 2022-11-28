"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_1 = __importDefault(require("../models/user"));
const Mission_1 = __importDefault(require("../services/spaceX/outputs/Mission"));
exports.default = {
    type: Mission_1.default,
    args: {
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        userName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    async resolve(_, { id, userName }) {
        const user = await user_1.default.findOne({ name: userName });
        const favouriteMissions = user?.favouriteMissions ?? [];
        let newFavMissions;
        if (favouriteMissions.includes(id)) {
            newFavMissions = favouriteMissions.filter((missionId) => missionId !== id);
        }
        else {
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
//# sourceMappingURL=UpdateFavouriteMissions.js.map