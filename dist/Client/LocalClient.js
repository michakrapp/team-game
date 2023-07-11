"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalClient = void 0;
const multiplayer_1 = require("boardgame.io/multiplayer");
const react_1 = require("boardgame.io/react");
const Board_1 = require("../Board/Board");
const Game_1 = require("../Game/Game");
// use in APP like
// <LocalClient playerID="0" />
// <LocalClient playerID="1" />
exports.LocalClient = (0, react_1.Client)({
    game: Game_1.TeamGame,
    board: Board_1.TeamGameBoard,
    multiplayer: (0, multiplayer_1.Local)(),
});
//# sourceMappingURL=LocalClient.js.map