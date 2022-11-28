"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
});
exports.default = (0, mongoose_1.model)("Author", authorSchema);
//# sourceMappingURL=author.js.map