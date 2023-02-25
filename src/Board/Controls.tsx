import { Ctx } from "boardgame.io";

interface ControlsProps {
    ctx: Ctx,
    moves: Record<string, (...args: any[]) => void>,
}

export const Controls = ({ctx, moves}: ControlsProps) => {
    return (
        <button
                disabled={ctx.gameover}
                onClick={() => moves.rollDice()}
        >Roll the dice</button>
    );
}