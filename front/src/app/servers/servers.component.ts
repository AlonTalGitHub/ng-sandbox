import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  @Input('srvElements') serverElements : { id: string, type:string, name:string, content:string }[] = [];
  @Output('clickEvent') clickEvent = new EventEmitter<{ id: string, type:string, name:string, content:string }>();

  onUpdateClicked(elementData:  { id: string, type:string, name:string, content:string }) {
    this.clickEvent.emit(elementData);
    console.log('servers element: ' + elementData);
  }
}

