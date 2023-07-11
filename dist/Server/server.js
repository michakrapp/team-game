const { TeamGame } = require('../Game/Game');
const { Server } = require('boardgame.io/dist/cjs/server');
const port = process.env.PORT || 8000;
const server = Server({
    games: [TeamGame],
    //origins: [Origins.LOCALHOST],
});
const lobbyConfig = {
    apiPort: 8080,
    apiCallback: () => console.log('Running Lobby API on port 8080...'),
};
server.run({ port: 8000, lobbyConfig });
/*
import { TeamGame } from '../Game/Game.ts';
//import { Server } from 'boardgame.io/dist/cjs/server';
import { Server } from 'boardgame.io/server';

const port = process.env.PORT || 8000;
const server = Server({
  games: [TeamGame],
  //origins: [Origins.LOCALHOST],
});

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log('Running Lobby API on port 8080...'),
};

server.run({ port: 8000, lobbyConfig });
*/
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
//# sourceMappingURL=server.js.map