"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamGameBoard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Cell_1 = require("./Cells/Cell");
const Controls_1 = require("./Controls");
const PlayerStatus_1 = require("./PlayerStatus");
require("./board.scss");
const TeamGameBoard = ({ G, ctx, moves, isActive }) => {
    // Your game board
    return ((0, jsx_runtime_1.jsxs)("main", Object.assign({ style: { margin: '10px' } }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Team Game" }), (0, jsx_runtime_1.jsx)(PlayerStatus_1.PlayerStatus, { ctx: ctx }), (0, jsx_runtime_1.jsx)(Controls_1.Controls, { ctx: ctx, moves: moves, isActive: isActive }), (0, jsx_runtime_1.jsxs)("span", { children: [" Dice: ", G.dice] }), (0, jsx_runtime_1.jsxs)("pre", { children: ["(Positions: ", G.locations.toString(), ")"] }), (0, jsx_runtime_1.jsxs)("pre", { children: ["(Pockets: ", G.pocket.toString(), ")"] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'board' }, { children: G.cells.map((cell, index) => {
                    let player = Object.keys(G.locations).filter((key) => G.locations[parseInt(key)] === index);
                    return ((0, jsx_runtime_1.jsx)(Cell_1.Cell, { index: index, cell: cell, player: player.join(',') }));
                }) }))] })));
};
exports.TeamGameBoard = TeamGameBoard;
//# sourceMappingURL=Board.js.map