import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges, Output, EventEmitter
} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: []
})
export class ServerComponent implements OnInit, OnChanges {
  @Input('srvElement') element!: { id: string, type: string, name: string, content: string };
  @Input() name!: string;
  @Input() content!: string;
  @Output('updateClick') updateClick = new EventEmitter<{ id: string, type: string, name: string, content: string }>();


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
  }

  updateClicked(elementData: { id: string, type: string, name: string, content: string }) {
    this.updateClick.emit(elementData);

  }

}
