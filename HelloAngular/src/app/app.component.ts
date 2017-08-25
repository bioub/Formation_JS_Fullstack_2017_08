import { Component } from '@angular/core';

@Component({
  selector: 'hello-root',
  template: `
    <hello-world (onFormatChange)="updateFormat($event)"></hello-world>
    <hello-clock [format]="clockFormat"></hello-clock>
  `,
  styles: []
})
export class AppComponent {
  public clockFormat = 'HH:mm';

  updateFormat(newFormat) {
    this.clockFormat = newFormat;
  }
}
