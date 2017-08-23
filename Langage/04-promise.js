const fs = require('fs');
const util = require('util');

const logSync = (logPath, msg) => {
  fs.appendFileSync(logPath, msg + '\n');
};

const logsSync = () => {
  try {
    fs.statSync('logs');
  }
  catch (err) {
    fs.mkdirSync('logs');
  }
  try {
    logSync('logs/app.log', 'Ligne 1');
    logSync('logs/app.log', 'Ligne 2');
    logSync('logs/app.log', 'Ligne 3');
    logSync('logs/app.log', 'Ligne 4');
    logSync('logs/app.log', 'Ligne 5');
  }
  catch (err) {
    console.log(err.message);
  }
};

// logsSync();

const logAsync = (logPath, msg, cb) => {
  fs.appendFile(logPath, msg + '\n', cb);
};

const logsAsync = () => {
  const next = () => {
    logAsync('logs/app.log', 'Ligne 1', (err) => {
      if (err) {
        return console.log(err.message);
      }
      logAsync('logs/app.log', 'Ligne 2', (err) => {
        if (err) {
          return console.log(err.message);
        }
        logAsync('logs/app.log', 'Ligne 3', (err) => {
          if (err) {
            return console.log(err.message);
          }
          logAsync('logs/app.log', 'Ligne 4', (err) => {
            if (err) {
              return console.log(err.message);
            }
            logAsync('logs/app.log', 'Ligne 5', (err) => {
              if (err) {
                return console.log(err.message);
              }

            });
          });
        });
      });
    });
  };

  fs.stat('logs', (err) => {
    if (err) {
      fs.mkdir('logs', () => {
        next();
      })
    }
    else {
      next();
    }
  });
};

// logsAsync();

const statPromise = util.promisify(fs.stat);
const mkdirPromise = util.promisify(fs.mkdir);
const logPromise = util.promisify(logAsync);
/*
const logPromise = (logPath, msg, cb) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(logPath, msg + '\n', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
*/

const logsPromise = () => {
  statPromise('logs')
    .catch(() => mkdirPromise('logs'))
    .then(() => logPromise('logs/app.log', 'Ligne 1'))
    .then(() => logPromise('logs/app.log', 'Ligne 2'))
    .then(() => logPromise('logs/app.log', 'Ligne 3'))
    .then(() => logPromise('logs/app.log', 'Ligne 4'))
    .then(() => logPromise('logs/app.log', 'Ligne 5'))
    .catch((err) => {
      console.log(err.message);
    })
};

// logsPromise();

const logsES8 = async function () {
  try {
    await statPromise('logs');
  }
  catch (err) {
    await mkdirPromise('logs');
  }
  try {
    await logPromise('logs/app.log', 'Ligne 1');
    await logPromise('logs/app.log', 'Ligne 2');
    await logPromise('logs/app.log', 'Ligne 3');
    await logPromise('logs/app.log', 'Ligne 4');
    await logPromise('logs/app.log', 'Ligne 5');
  }
  catch (err) {
    console.log(err.message);
  }
};

logsES8();
