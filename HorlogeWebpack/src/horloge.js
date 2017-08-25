import format from 'date-fns/format'

export class Horloge {
  constructor(container) {
    this._container = container;
  }

  update() {
    this._container.innerText = format(new Date(), 'hh:mm:ss');
  }

  start() {
    setInterval(this.update.bind(this), 1000);
  }
}
