
export class Horloge {
  constructor(container) {
    this._container = container;
  }

  update() {
    this._container.innerText = new Date();
  }

  start() {
    setInterval(this.update.bind(this), 1000);
  }
}
