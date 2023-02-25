import type { BoardProps } from 'boardgame.io/react';
import type { TeamGameState } from '../Game';
import { Controls } from './Controls';
import { PlayerStatus } from './PlayerStatus';

interface TeamGameProps extends BoardProps<TeamGameState> {
  // Additional custom properties for your component
}

export const TeamGameBoard =({ G, ctx, moves }: TeamGameProps) => {
    // Your game board
    return (
        <main style={{ margin: '10px' }}>
            <h1>Team Game</h1>

            <PlayerStatus ctx={ctx} />

            <pre>(Positions: { G.locations.toString() })</pre>

            <Controls ctx={ctx} moves={moves} />

            <div
                style={{
                    marginTop: '10px',
                    border: '1px solid',
                    padding: '10px'
                }}
            >
                {G.cells.map((cell, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px dashed',
                            margin: '5px',
                        }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '5px',
                            backgroundColor: cell ?? 'white',
                            marginRight: '5px',
                        }}>{cell}</span>
                        <span> (no player here)</span>
                    </div>
                ))}
            </div>
        </main>
    );
}