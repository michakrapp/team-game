import { Ctx } from "boardgame.io";

const getPlayerStatus = (ctx: Ctx): string | null => {
    if (!ctx.gameover) return `Current player: ${ ctx.currentPlayer }`;
    if (ctx.gameover.draw) return 'Draw';
    
    return `Player ${ctx.gameover.winner} wins!`;
};

interface PlayerStatusProps {
    ctx: Ctx,
}

export const PlayerStatus = ({ctx}: PlayerStatusProps) => {
    return (<p>{ getPlayerStatus(ctx) }</p>);
};