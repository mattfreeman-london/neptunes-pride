# Combat Simulator

Combat simulator for the Neptune's Pride online game found at https://np.ironhelmet.com/#landing.

When two enemy carriers meet at a star, a combat takes place.

Combats are fought automatically and are instant. A summary of the battle is placed in your event log to review next time you log in.

If two players approach an unoccupied star and are due to arrive at the same time, the ship that has traveled the shortest distance will claim the star first and will receive the defenders bonus

The defender is the player who owns the star at the time of the combat. The defender strikes first and with +1 Weapons Tech bonus.

Starting with the defender, each player takes turns destroying enemy ships until only one player has ships remaining.

Each player destroys a number of ships equal to their Weapons Technology each round.

When players have more than one carrier in combat, damage is applied roughly evenly to each carrier involved.

let defenderWeaponTech = 1;
let defenderShips = 10;

let attackerWeaponTech = 1;
let attackerShips = 1;

function defend(defenderWeaponTech, attackerShips) {
  attackerShips = attackerShips - defenderWeaponTech;
};

function attack(attackerWeaponTech, defenderShips) {
  defenderShips = (defenderShips - attackerWeaponTech);
};

function battle(defenderWeaponTech, defenderShips, attackerWeaponTech, attackerShips) {
  while (defenderShips >= 1 || attackerShips >= 1) {
    console.log(attackerShips)
    defend(defenderWeaponTech, attackerShips)
    console.log(attackerShips -1)
    if (attackerShips <= 0) {
      console.log(`Defender wins with #{defenderShips} left.`)
      break;
    };
    attack(attackerWeaponTech, defenderShips);
    if (defenderShips <=0) {
      console.log(`Attacker wins with #{attackerShips} left.`)
      break;
    };
  };
};
