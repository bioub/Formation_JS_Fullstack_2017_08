const Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

const Jeu = function(options) {
  options = options || {};
  const min = options.min || 0;
  const max = (options.max !== undefined) ? options.max : 100;

  this._nbAlea = Random.getIntInclusive(min, max);

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  this._essais = [];
};

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    console.log('Vous avez déjà joué : ' + this._essais.join(' | '))
  }

  this._rl.question('Quel est le nombre ? ', (saisie) => {

    const nbSaisi = parseInt(saisie);

    if (isNaN(nbSaisi)) {
      console.log('Erreur : il faut saisi un nombre');
      return this.jouer();
    }

    this._essais.push(nbSaisi);

    if (nbSaisi < this._nbAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (nbSaisi > this._nbAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    this._rl.close();
  });
};

const jeu = new Jeu();

jeu.jouer();

