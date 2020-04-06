$(document).ready(function() {
  let defenderTechLevel = new DefenderTechLevel();
  updateLevel();

  $('#level-up').on('click', function() {
    defenderTechLevel.levelUp();
    updateLevel();
  })

  $('#level-down').on('click', function() {
    defenderTechLevel.levelDown();
    updateLevel();
  })

  function updateLevel() {
    $('#defender-tech-level').text(defenderTechLevel.level);
  };

})
