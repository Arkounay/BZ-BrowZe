import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    ServerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
