import { Client } from 'boardgame.io/react';
import { TeamGame } from './Game/Game';
import { TeamGameBoard } from './Board/Board';

export default Client({ game: TeamGame, board: TeamGameBoard });

