"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLobby = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("boardgame.io/react");
const Board_1 = require("../Board/Board");
const Game_1 = require("../Game/Game");
const GameLobby = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.Lobby, { gameServer: `https://${window.location.hostname}:8000`, lobbyServer: `https://${window.location.hostname}:8000`, gameComponents: [{
                game: Game_1.TeamGame,
                board: Board_1.TeamGameBoard
            }] }));
};
exports.GameLobby = GameLobby;
//# sourceMappingURL=GameLobby.js.map