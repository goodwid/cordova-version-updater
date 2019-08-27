const chalk = require('chalk');

const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe('  ' + msg, fn);

const matchers = (exp) => ({
  toBe: (assertion) => {
    if(exp === assertion) {
      console.log(chalk.green('pass'));
      return true;
    } else {
      console.log(chalk.red('fail'));
      return false;
    }
  }
});

const expect = (exp) => matchers(exp);

module.exports = {
  describe,
  it,
  expect
};
