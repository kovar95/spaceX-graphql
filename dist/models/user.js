"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    favouriteMissions: [String],
});
exports.default = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.js.map