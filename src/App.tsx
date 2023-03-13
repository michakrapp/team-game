import { Local } from 'boardgame.io/multiplayer';
import { Client, Lobby } from 'boardgame.io/react';
import { TeamGame } from './Game/Game';
import { TeamGameBoard } from './Board/Board';

/*
const App = () => {
  return(
    <Lobby
      //gameServer={`https://${window.location.hostname}:8000`},
      //lobbyServer={`https://${window.location.hostname}:8000`},
      gameComponents={[
        { game: TeamGame, board: TeamGameBoard }
      ]}
    />
  );
}
*/

const TeamGameClient = Client({
  game: TeamGame,
  board: TeamGameBoard,
  multiplayer: Local(),
});

const App = () => (
  <div>
    <TeamGameClient playerID="0" />
    <TeamGameClient playerID="1" />
  </div>
);

// export default Client({ game: TeamGame, board: TeamGameBoard });

export default App;