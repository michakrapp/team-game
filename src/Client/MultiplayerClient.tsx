import { SocketIO } from "boardgame.io/multiplayer";
import { Client } from "boardgame.io/react";
import { TeamGameBoard } from "../Board/Board";
import { TeamGame } from "../Game/Game";

export const MultiplayerClient = Client({
    game: TeamGame,
    board: TeamGameBoard,
    multiplayer: SocketIO({ server: 'localhost:8000' }),
});