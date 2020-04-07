let defenderWeaponTech = 1;
let defenderShips = 10;

let attackerWeaponTech = 1;
let attackerShips = 10;

let turn = 0;

function defence(defenderWeaponTech, attackerShips) {
  return attackerShips - defenderWeaponTech;
};

function attack(attackerWeaponTech, defenderShips) {
  return (defenderShips - attackerWeaponTech);
};

function counter(turn) {
  return turn += 1;
};
