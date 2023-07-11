"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplayerClient = void 0;
const multiplayer_1 = require("boardgame.io/multiplayer");
const react_1 = require("boardgame.io/react");
const Board_1 = require("../Board/Board");
const Game_1 = require("../Game/Game");
exports.MultiplayerClient = (0, react_1.Client)({
    game: Game_1.TeamGame,
    board: Board_1.TeamGameBoard,
    multiplayer: (0, multiplayer_1.SocketIO)({ server: 'localhost:8000' }),
});
//# sourceMappingURL=MultiplayerClient.js.map