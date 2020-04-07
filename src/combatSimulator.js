let defenderWeaponTech = 1;
let defenderShips = 10;

let attackerWeaponTech = 1;
let attackerShips = 10;

function defence(defenderWeaponTech, attackerShips) {
  return attackerShips - defenderWeaponTech;
};

function attack(attackerWeaponTech, defenderShips) {
  return (defenderShips - attackerWeaponTech);
};
