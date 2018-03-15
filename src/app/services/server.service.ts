import { Injectable } from '@angular/core';
import { Player, Server } from '../servers/server';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { RemoteServer } from '../api-interfaces/remote-server';
import { ServerConverter } from '../api-interfaces/server-converter';

@Injectable()
export class ServerService {
  private serversUrl = 'https://outerark.com/bz-browze/servers/';

  constructor(private http: HttpClient) { }

  /**
   * Retrieves, converts and sorts servers from remote API
   */
  getServers(): Observable<Server[]> {
    return this.http.get<any>(this.serversUrl).pipe(
      tap(_ => console.log('fetched servers')),
      map(apiRes => {
        const res: Server[] = [];
        const serverList: RemoteServer[] = <RemoteServer[]> apiRes.GET;
        for (const remoteServer of serverList) {
          res.push(ServerConverter.convertRemoteServer(remoteServer));
        }
        return res;
      }),
      map(array => {
        return array.sort((a: Server, b: Server) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
      }),
      catchError(this.handleError('getServers', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Display no servers
      return of(result as T);
    };
  }

}
