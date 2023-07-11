"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStatus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const getPlayerStatus = (ctx) => {
    if (!ctx.gameover)
        return `Current player: ${ctx.currentPlayer}`;
    if (ctx.gameover.draw)
        return 'Draw';
    return `Player ${ctx.gameover.winner} wins!`;
};
const PlayerStatus = ({ ctx }) => {
    return ((0, jsx_runtime_1.jsx)("p", { children: getPlayerStatus(ctx) }));
};
exports.PlayerStatus = PlayerStatus;
//# sourceMappingURL=PlayerStatus.js.map