import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges
} from '@angular/core';
import {ServersService} from "../servers.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})
export class FormComponent implements OnChanges {
  @Output('selectInput') selectInput = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Input() nameInput: string = '';
  @Input() contactInput: string = '';

  constructor(private serversService: ServersService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onAddServer(name: string, content: string) {
    this.serversService.serverAdded(name, content);
  }

  onAddBlueprint(name: string, content: string) {
    this.serversService.blueprintAdded(name, content);
  }

  onChange(event: any) {
      console.log(event.target.value)
    setTimeout(() => { this.selectInput.emit( {
        serverName: this.nameInput,
        serverContent: this.contactInput
      })
    }, 1);
  }


}
