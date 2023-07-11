"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamGame = void 0;
const cells_1 = require("../Board/Cells/cells");
const RollDice_1 = require("./RollDice");
exports.TeamGame = {
    setup: ({ ctx }) => ({
        // collect winning things here
        pocket: Array(ctx.numPlayers).fill(0),
        // position of players on the board
        locations: Array(ctx.numPlayers).fill(0),
        // the boards fields
        //TODO: maybe randomize this
        cells: cells_1.cellsData,
        dice: 0,
    }),
    turn: {
        minMoves: 1,
        maxMoves: 1,
    },
    moves: { rollDice: RollDice_1.rollDice },
};
//# sourceMappingURL=Game.js.map