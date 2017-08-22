function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const nbAlea = getRandomIntInclusive(0, 100);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const essais = [];

const jouer = function() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' | '))
  }

  rl.question('Quel est le nombre ? ', (saisie) => {

    const nbSaisi = parseInt(saisie);

    if (isNaN(nbSaisi)) {
      console.log('Erreur : il faut saisi un nombre');
      return jouer();
    }

    essais.push(nbSaisi);

    if (nbSaisi < nbAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (nbSaisi > nbAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
};

jouer();

