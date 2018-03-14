import { Player, Server } from '../servers/server';
import { GameAuthentificationType } from '../servers/game-authentification-type.enum';
import { RemoteGameType } from './remote-game-type.enum';
import { RemoteServer } from './remote-server';

export class ServerConverter {

  public static convertRemoteServer(remoteServer: RemoteServer): Server {
    // game name
    let decodedName = (atob(remoteServer.n));
    const delimiter = decodedName.indexOf("\x00");
    if (delimiter > -1) {
      decodedName = decodedName.substr(0, delimiter);
    }

    // type
    let gameType: string;
    switch (remoteServer.gt) {
      case RemoteGameType.Deathmatch:
        gameType = 'Deathmatch';
        break;
      case RemoteGameType.Strat:
        gameType = 'Strategy';
        break;
      case RemoteGameType.Mpi:
        gameType = 'MPI';
        break;
      default:
        gameType = 'Unknown';
    }

    // players
    const players: Player[] = [];
    remoteServer.pl.forEach(player => {
      players.push(new Player(atob(player.n)));
    });

    // auth type
    let authType = GameAuthentificationType.Open;
    if (remoteServer.l === 1) {
      authType = GameAuthentificationType.Locked;
    } else if (remoteServer.k === 1) {
      authType = GameAuthentificationType.Password;
    }

    const res = new Server();
    res.id = remoteServer.g;
    res.name = decodedName;
    res.version = remoteServer.v;
    res.ping = remoteServer.pg;
    res.maxPing = remoteServer.pgm;
    res.maxPlayers = remoteServer.pm;
    res.gameType = gameType;
    res.mapName = remoteServer.m;
    res.gameTime = remoteServer.gtm;
    res.authentificationType = authType;
    res.players = players;
    res.mod = (remoteServer.mm === '0' ? 'Stock' : remoteServer.mm);

    return res;
  }

}
