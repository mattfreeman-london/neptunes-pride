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

  it('has a minimum level of 1', function() {
    defenderTechLevel.levelDown();
    expect(defenderTechLevel.getCurrentLevel()).toEqual(1);
  })

});

describe('attackerWeaponTech', function() {
  let attackerTechLevel;
  beforeEach(function() {
    attackerTechLevel = new AttackerTechLevel();
  });

  it('starts at level 1', function() {
    expect(attackerTechLevel.getCurrentLevel()).toEqual(1);
  });

  it('increases in level with levelUp', function() {
    attackerTechLevel.levelUp();
    expect(attackerTechLevel.getCurrentLevel()).toEqual(2);
  })

  it('descreases in level with levelDown', function() {
    attackerTechLevel.levelUp();
    attackerTechLevel.levelDown();
    expect(attackerTechLevel.getCurrentLevel()).toEqual(1);
  })

  it('has a minimum level of 1', function() {
    attackerTechLevel.levelDown();
    expect(attackerTechLevel.getCurrentLevel()).toEqual(1);
  })

});
