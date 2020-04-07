'use strict'

let  = 1;
let defenderShips = 10;

let attackerWeaponTech = 1;
let attackerShips = 10;

defenderWeaponTech += 1;

function defence(defenderWeaponTech, attackerShips) {
  return (defenderWeaponTech - attackerShips);
};

function attack(attackerWeaponTech, defenderShips) {
  return (attackerWeaponTech - defenderShips);
};
