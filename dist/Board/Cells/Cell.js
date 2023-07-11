"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./cell.scss");
const Cell = ({ index, cell, player }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'cell' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'header ' + cell.value }, { children: cell.name })), (0, jsx_runtime_1.jsx)("span", { children: player ? ' Player: ' + player : ' (no player here)' })] }), index));
};
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map