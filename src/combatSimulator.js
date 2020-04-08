function battle(defenderWeaponTech, defenderShips, attackerWeaponTech, attackerShips) {
  while (defenderShips >= 1 && attackerShips >= 1) {
    defenderWeaponTech += 1
    attackerShips = attackerShips - defenderWeaponTech;
    if (attackerShips <= 0) {
      return('Defender wins with ' + defenderShips + ' ships left.')
      break;
    };
    defenderShips = defenderShips - attackerWeaponTech;
    if (defenderShips <=0) {
      return('Attacker wins with ' + attackerShips + ' ships left.')
      break;
    };
  };
};
