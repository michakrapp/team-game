import type { Game } from "boardgame.io";
import { CellDataProps, cellsData } from "../Board/Cells/cells";
import { rollDice } from "./RollDice";

export interface TeamGameState {
    // aka 'G', your game's state
    pocket: number[],
    cells: CellDataProps[],
    locations: number[],
    dice: number,
}

export const TeamGame: Game<TeamGameState> = {
    // The name of the game.
    name: 'team-game',

    setup: ({ ctx }) => ({ 
        // collect winning things here
        pocket: Array(ctx.numPlayers).fill(0),

        // position of players on the board
        locations: Array(ctx.numPlayers).fill(0),
        
        // the boards fields
        //TODO: maybe randomize this
        cells: cellsData,

        dice: 0,
    }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: { rollDice },
};
