import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../servers/server';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {
  @Input() server: Server;

  ngOnInit() {
  }

}
