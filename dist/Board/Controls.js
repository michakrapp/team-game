"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Controls = ({ ctx, moves, isActive }) => {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ disabled: ctx.gameover || !isActive, onClick: () => moves.rollDice() }, { children: "Roll the dice" })));
};
exports.Controls = Controls;
//# sourceMappingURL=Controls.js.map