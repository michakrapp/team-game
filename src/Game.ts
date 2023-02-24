import type { Game } from "boardgame.io";

export interface TeamGameState {
    // aka 'G', your game's state
    pocket: number[],
    cells: string[],
    locations: number[],
}

export const TeamGame: Game<TeamGameState> = {
    setup: ({ ctx }) => ({ 
        // collect winning things here
        pocket: Array(ctx.numPlayers).fill(0),

        // position of players on the board
        locations: Array(ctx.numPlayers).fill(0),
        
        // the boards fields
        //TODO: maybe randomize this
        cells: [
            'special',
            'red',
            'blue',
            'green',

            'special',
            'red',
            'blue',
            'green',
            'red',
            'blue',
            'green',

            'special',
            'red',
            'blue',
            'green',

            'special',
            'red',
            'blue',
            'green',
            'red',
            'blue',
            'green',
        ],
    }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        rollDice: ({ G, ctx, events }) => {
            // roll random dice (6)
            const dice = Math.floor( 6 * Math.random() ) + 1;

            // get current player location
            const currentLocation = G.locations[parseInt(ctx.currentPlayer)] ?? 0;

            // move player to new location and save
            const newLocation = currentLocation + dice - 1;
            console.log(dice + ' => ' + G.cells[newLocation]);
            
            G.locations[parseInt(ctx.currentPlayer)] = newLocation;

            //TODO: play card from location
            //...

            // end game if player reached the end
            if (newLocation > G.cells.length) {
                //TODO: calculate winner
                events.endGame({ winner: ctx.currentPlayer });
            }
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
