// Init babel-register to start parsing the ES6 files.
require('babel-register');
const script = process.argv.slice(2)[1];
if (script === 'build') process.env.NODE_ENV = 'production';
require(`./${script}`);
