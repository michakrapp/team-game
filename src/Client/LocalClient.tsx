import { Local } from "boardgame.io/multiplayer";
import { Client } from "boardgame.io/react";
import { TeamGameBoard } from "../Board/Board";
import { TeamGame } from "../Game/Game";

// use in APP like
// <LocalClient playerID="0" />
// <LocalClient playerID="1" />

export const LocalClient = Client({
    game: TeamGame,
    board: TeamGameBoard,
    multiplayer: Local(),
});