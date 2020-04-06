'use strict'

describe('defenderWeaponTech', function() {
  let defenderTechLevel;
  beforeEach(function() {
    defenderTechLevel = new DefenderTechLevel();
  });

  it('starts at level 1', function() {
    expect(defenderTechLevel.getCurrentLevel()).toEqual(1);
  });

  it('increases in level with levelUp', function() {
    defenderTechLevel.levelUp();
    expect(defenderTechLevel.getCurrentLevel()).toEqual(2);
  })

  it('descreases in level with levelDown', function() {
    defenderTechLevel.levelUp();
    defenderTechLevel.levelDown();
    expect(defenderTechLevel.getCurrentLevel()).toEqual(1);
  })

});
