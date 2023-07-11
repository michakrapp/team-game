import { TeamGame } from '../Game/Game';
import { Server } from 'boardgame.io/server';

const server = Server({
  games: [TeamGame],
  //origins: [Origins.LOCALHOST],
});

/*
// Add middleware to the create game route.
server.router.use('/games/:name/create', async (ctx, next) => {
  // Decide number of players etc. based on some other API.
  const { numPlayers, setupData } = await fetchDataFromSomeCustomAPI();
  // Set request body to be used by the create game route.
  ctx.request.body.numPlayers = numPlayers;
  ctx.request.body.setupData = setupData;
  next();
});
*/

/*
server.router.use('/games/:name/create', async (ctx, next) => {
  const { matchID } = await lobbyClient.createMatch('tic-tac-toe', {
    numPlayers: 2
  });
});
*/

const port = process.env.PORT || 8000;
const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log('Running Lobby API on port 8080...'),
};

//server.run({ port: 8000, lobbyConfig });
server.run(8000);

/*
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Server, LobbyAPI } from 'boardgame.io/server';
import { MyGame } from './my-game';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = Server({
  games: [MyGame],
});

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log('Lobby API running on port 8080'),
};
const lobby = new LobbyAPI(server, lobbyConfig);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Configure the lobby routes
app.use('/', lobby.router);
*/