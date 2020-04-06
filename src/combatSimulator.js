'use strict'

class DefenderTechLevel {
  constructor() {
    this.MINIMUM_LEVEL = 1;
    this.level = 1;
  };

getCurrentLevel() {
  return this.level;
};

levelUp() {
  this.level += 1
};

levelDown() {
  if (this.isMinimumLevel()) {
    return;
  }
  this.level -= 1
};

isMinimumLevel() {
  return this.level === this.MINIMUM_LEVEL;
};

}
