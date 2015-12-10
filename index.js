'use strict';

/**
 * random config
 */
module.exports = configs => {
  return configs[randomNumber(0, configs.length - 1)];
};

function randomNumber(min, max) {
  if (typeof min != 'number' || typeof max != 'number') {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
