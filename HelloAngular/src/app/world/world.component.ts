import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  public prenom: string;

  @Output()
  public onFormatChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateFormat(e) {
    this.onFormatChange.emit(e.target.value);
  }

}
