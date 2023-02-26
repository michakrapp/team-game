import { Ctx } from "boardgame.io";
import { TeamGameState } from "./Game";

export const rollDice = ({ G, ctx, events, random }: {G: TeamGameState, ctx: Ctx, events: any, random: any}) => {
    // roll random dice (6)
    const dice = random.D6();
    G.dice = dice;

    // get current player location
    const currentLocation = G.locations[parseInt(ctx.currentPlayer)] ?? 0;

    // move player to new location and save
    const newLocation = currentLocation + dice;
    
    G.locations[parseInt(ctx.currentPlayer)] = newLocation;

    // end game if player reached the end
    if (newLocation >= G.cells.length) {
        // calculate winner
        let pockets = [...G.pocket];
        let winner = pockets.indexOf(Math.max.apply(window,pockets));
        let highestPocket = G.pocket[winner];
        delete pockets[winner];
        let draw = pockets.filter(pocket => pocket === highestPocket).length > 0;
        if (draw) {
            events.endGame({ draw });
        } else {
            events.endGame({ winner: winner });
        }
        return; // ensure that game ends now
    }

    //TODO: play card from location
    let currentPlayerPocket = G.pocket[parseInt(ctx.currentPlayer)];
    G.pocket[parseInt(ctx.currentPlayer)] = currentPlayerPocket + G.cells[newLocation].id;

    //...
}