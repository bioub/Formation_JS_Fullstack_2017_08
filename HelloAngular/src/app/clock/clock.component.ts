import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hello-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public now: Date;
  @Input() public format: string = 'HH:mm:ss';

  constructor() { }

  ngOnInit() {
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    this.now = new Date();
  }

}
