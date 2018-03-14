import { Component, OnInit } from '@angular/core';
import { Server } from './server';
import { ServerService } from '../services/server.service';
import { GameAuthentificationType } from './game-authentification-type.enum';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[];
  selectedServer: Server;

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.getServers();
    setInterval(() => this.getServers(), 2000);
  }

  onSelect(server: Server): void {
    this.selectedServer = server;
  }

  getServers(): void {
    this.serverService.getServers().subscribe((servers) => {
      this.servers = servers;

      if (this.selectedServer) {
        const matchingServer = servers.filter(server => (server.id === this.selectedServer.id));
        if (matchingServer.length > 0) {
          this.selectedServer = matchingServer[0];
        } else {
          this.selectedServer = null;
        }
      }
    });
  }

  identify(index: number, server: Server) {
    return server.id;
  }

  getAuthentificationIconClass(server: Server): string | null {
    switch (server.authentificationType) {
      case GameAuthentificationType.Password:
        return 'fa fa-lock';
      case GameAuthentificationType.Locked:
        return 'fa fa-ban';
      default:
        return null;
    }
  }

}
