import { Ctx } from 'boardgame.io';
import type { BoardProps } from 'boardgame.io/react';
import type { TeamGameState } from '../Game';

interface TeamGameProps extends BoardProps<TeamGameState> {
  // Additional custom properties for your component
}

const playerStatus = (ctx: Ctx): string | null => {
    if (!ctx.gameover) return `Current player: ${ ctx.currentPlayer }`;
    if (ctx.gameover.draw) return 'Draw';
    return `Player ${ctx.gameover.winner} wins!`;
  };

export const TeamGameBoard =({ G, ctx, moves }: TeamGameProps) => {
    // Your game board
    return (
        <main style={{ margin: '10px' }}>
            <h1>Team Game</h1>

            <p>{ playerStatus(ctx) }</p>

            <pre>(Positions: { G.locations.toString() })</pre>

            <button
                disabled={ctx.gameover}
                onClick={() => moves.rollDice()}
            >Roll the dice</button>

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