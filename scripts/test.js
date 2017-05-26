process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';
import jest from 'jest';
const argv = process.argv.slice(4);

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({ silent: true });

// Watch unless on CI or in coverage mode
if (!process.env.CI && !argv.includes('--coverage')) {
  argv.push('--watch');
}

jest.run(argv);
