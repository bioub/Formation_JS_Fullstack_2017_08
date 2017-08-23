const readline = require('readline');
const Random = require('./random');
const chalk = require('chalk');

class Jeu {
  constructor(options = {}) {
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
      console.log(`Vous avez déjà joué : ${this._essais.join(' | ')}`)
    }

    this._rl.question('Quel est le nombre ? ', (saisie) => {
      const nbSaisi = Number.parseInt(saisie);

      if (Number.isNaN(nbSaisi)) {
        console.log(chalk.red('Erreur : il faut saisi un nombre'));
        return this.jouer();
      }

      this._essais.push(nbSaisi);

      if (nbSaisi < this._nbAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (nbSaisi > this._nbAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné'));
      this._rl.close();
    });
  }
}

module.exports = Jeu;
