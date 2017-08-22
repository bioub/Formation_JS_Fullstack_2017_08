// 1 - En JS on manipule des objets existants
console.log(typeof Math); // object
console.log(typeof console); // object
console.log(typeof process); // object
console.log(typeof document); // undefined

// 2 - Pour accéder au contenu
// Opérateur .
console.log(Math.PI);
// Opérateur []
console['log'](Math['PI']);
var method = 'log';
console[method]('Hello');

// 3 - Syntaxe Object Literal (cas ponctuel)
var coords = {
  x: 10,
  y: 20,
};

// 4 - JSON sérialisation d'un objet
// représation d'un objet (mémoire) -> string
var json = '{"x": 30, "y": 40}';
var coordsFromJSON = JSON.parse(json); // ES5 (IE8)
console.log(coordsFromJSON.x); // 30
console.log(JSON.stringify(coords)); // ES5 (IE8)

// En JSON uniquement :
// - primitifs: string, number, boolean
// - literal: string, object, array, regexp

// 5 - Les objets JS sont extensible
coords.z = 30;

console.log(Math.sum); // undefined
// ajouter des clés
Math.sum = (a, b) => a + b;
console.log(Math.sum); // function

// modifier des clés
Math.sum = (a, b) => Number(a) + Number(b);

// supprimer des clés
delete Math.sum;

// 6 - Il y a un objet appelé objet global
// Dans Node.js => variable global
// Dans le Navigateur => variable window
// En cours de standardisation (global)

console.log(typeof process);
console.log(typeof global.process);
console.log(typeof Math);
console.log(typeof global.Math);
console.log(typeof console);
console.log(typeof global.console);

// dans le navigateur
// window.alert('Hello');
// alert('Hello');

// Créer une variable globale :
function lambda() {
  global.prenom = 'Romain';
}
lambda();

console.log(prenom); // 'Romain'

// 7 - Boucler sur les clés d'un objet
for (let key in coords) {
  console.log(key); // x y z
  console.log(coords[key]); // 10 20 30
}

// Tous les objets globaux énumérables
for (let key in global) {
  if (typeof global[key] === 'object') {
    console.log(key);
  }
}

// 8 - Simuler une classe avec une fonction constructeur
var Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

console.log(typeof Contact); // function

var romain = new Contact('Romain', 'Bohdanowicz');
console.log(typeof romain); // object
console.log(romain.prenom); // 'Romain'
//console.log(romain.getNom()); // 'Bohdanowicz'
var eric = new Contact('Eric');
//console.log(romain.getNom === eric.getNom); // false

// Simuler l'appel à une méthode statique
console.log(Contact.getClass()); // Contact

// Appeler une méthode du prototype
console.log(romain.hello()); // Bonjour

// Appeler une méthode d'un prototype hérité
console.log(romain.prenom !== undefined); // true
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hello !== undefined); // true
console.log(romain.hasOwnProperty('hello')); // false



// Exemple options
const createInterface = function(options) {
  const input = options.input;
  const output = options.output || 'valeur par défaut';
};

createInterface({
  input: process.stdin,
  output: process.stdout,
});
