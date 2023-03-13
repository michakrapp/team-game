import type { BoardProps } from 'boardgame.io/react';
import type { TeamGameState } from '../Game/Game';
import { Cell } from './Cells/Cell';
import { Controls } from './Controls';
import { PlayerStatus } from './PlayerStatus';
import './board.scss';

interface TeamGameProps extends BoardProps<TeamGameState> {
  // Additional custom properties for your component
}

export const TeamGameBoard =({ G, ctx, moves, isActive }: TeamGameProps) => {
    // Your game board
    return (
        <main style={{ margin: '10px' }}>
            <h1>Team Game</h1>

            <PlayerStatus ctx={ctx} />

            <Controls ctx={ctx} moves={moves} isActive={isActive} />
            <span> Dice: {G.dice}</span>

            <pre>(Positions: { G.locations.toString() })</pre>

            <pre>(Pockets: { G.pocket.toString() })</pre>

            <div className='board'>
                { G.cells.map( (cell, index) => {
                    let player = Object.keys(G.locations).filter( (key) => G.locations[parseInt(key)] === index);

                    return (
                        <Cell 
                            index={index}
                            cell={cell}
                            player={ player.join(',') } 
                        />
                    );
                })}
            </div>
        </main>
    );
}