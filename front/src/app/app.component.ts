import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { createId } from "../utils/utils";
import {ServersService} from "./servers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServersService]
})
export class AppComponent implements OnInit {
  serverElements : { id: string, type: string, name: string, content: string }[] = [];
  @Input() inputServer: { name: string, content: string } = { name: '', content: ''};

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.serverElements = this.serversService.serverElements;
  }

  onSelectInput(inputData: { serverName: string, serverContent: string }) {
    this.inputServer.name = inputData.serverName;
    this.inputServer.content = inputData.serverContent;
  }

  onServerUpdated(serverData: { id: string, type: string, name: string, content: string }) {
    const serverIndex = this.serverElements.findIndex(serverElement => serverElement.id == serverData.id);
    this.serverElements[serverIndex].name = this.inputServer.name;
    this.serverElements[serverIndex].content = this.inputServer.content;
  }
}
