import { Ctx } from "boardgame.io";

interface ControlsProps {
    ctx: Ctx,
    moves: Record<string, (...args: any[]) => void>,
    isActive: boolean,
}

export const Controls = ({ctx, moves, isActive }: ControlsProps) => {
    return (
        <button
                disabled={ctx.gameover || !isActive}
                onClick={() => moves.rollDice()}
        >Roll the dice</button>
    );
}