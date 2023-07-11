import { Lobby } from 'boardgame.io/react';
import { TeamGame } from '../Game/Game';
import { TeamGameBoard } from '../Board/Board';

export const GameLobby = () => {
    return (
        <Lobby
            gameServer={`https://${window.location.hostname}:8000`}
            lobbyServer={`https://${window.location.hostname}:8080`}
            gameComponents={[{
                game: TeamGame,
                board: TeamGameBoard
            }]}
        />
    )
}