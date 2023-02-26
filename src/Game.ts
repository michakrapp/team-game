import type { Game } from "boardgame.io";
import { CellDataProps, cellsData } from "./Board/Cells/cells";

export interface TeamGameState {
    // aka 'G', your game's state
    pocket: number[],
    cells: CellDataProps[],
    locations: number[],
    dice: number,
}

export const TeamGame: Game<TeamGameState> = {
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

    moves: {
        rollDice: ({ G, ctx, events }) => {
            // roll random dice (6)
            const dice = Math.floor( Math.random() * 6 ) + 1;
            G.dice = dice;

            // get current player location
            const currentLocation = G.locations[parseInt(ctx.currentPlayer)] ?? 0;

            // move player to new location and save
            const newLocation = currentLocation + dice;
            
            G.locations[parseInt(ctx.currentPlayer)] = newLocation;

            // end game if player reached the end
            if (newLocation >= G.cells.length) {
                //TODO: calculate winner
                events.endGame({ winner: ctx.currentPlayer });
                return;
            }

            //TODO: play card from location
            //...
            let currentPlayerPocket = G.pocket[parseInt(ctx.currentPlayer)];
            G.pocket[parseInt(ctx.currentPlayer)] = currentPlayerPocket + G.cells[newLocation].id;
        },
    },

    endIf: ({ G, ctx }) => {
        if (IsEnd(G.locations, G.cells.length)) {
            //TODO: will be called on any state changes !?

            //TODO: calculate winner by biggest pocket
            //return { winner: ctx.currentPlayer };
        }
    },
};

function IsEnd(locations: (number | null)[], max: number) {
    return locations.filter((location) => location && location > max).length > 0;
}
