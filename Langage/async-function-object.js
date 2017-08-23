const contact = {
  prenom: 'Romain',
  hello: function(autre) {
    console.log('Bonjour ' + autre + ' je suis ' + this.prenom);
  },
  helloAsync: function(autre) {
    setTimeout(this.hello.bind(this), 1000, autre);
  }
};

const hello = function(autre) {
  console.log('Bonjour ' + autre + ' je suis ' + this.prenom);
};

contact.hello('Jean');
hello.call(contact, 'Jean');
hello.apply(contact, ['Jean']);

// ES5
const helloContact = hello.bind(contact);
helloContact('Jean');

contact.helloAsync('Jean');
