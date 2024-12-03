"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToUpperCase = ToUpperCase;
const class_transformer_1 = require("class-transformer");
function ToUpperCase() {
    return (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.toUpperCase() : value));
}
//# sourceMappingURL=toUpperCaseDecorator.js.map