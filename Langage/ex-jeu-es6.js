// 1 - Method properties
// http://es6-features.org/#MethodProperties
const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

// 2 - Class
// http://es6-features.org/#ClassDefinition
class Jeu {
  constructor(options = {}) {
    // 3 - Default params
    // http://es6-features.org/#DefaultParameterValues
    // options = options || {};

    // 4 (facultatif) - Destructurer min et max
    // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
    //const min = options.min || 0;
    //const max = (options.max !== undefined) ? options.max : 100;
    const {min = 0, max = 100} = options;

    this._nbAlea = Random.getIntInclusive(min, max);

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      // 5 - Template String
      // http://es6-features.org/#StringInterpolation
      console.log(`Vous avez déjà joué : ${this._essais.join(' | ')}`)
    }

    this._rl.question('Quel est le nombre ? ', (saisie) => {

      // 6 - Passer par l'objet Number pour parseInt et isNaN
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number
      const nbSaisi = Number.parseInt(saisie);

      if (Number.isNaN(nbSaisi)) {
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
  }
}

const jeu = new Jeu({
  min: 0,
  max: 50
});

jeu.jouer();

