"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    name: String,
    genre: String,
    authorid: String,
});
exports.default = (0, mongoose_1.model)("Book", bookSchema);
//# sourceMappingURL=book.js.map