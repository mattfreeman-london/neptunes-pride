$(document).ready(function() {
  let defenderTechLevel = new DefenderTechLevel();
  updateLevel();

  function updateLevel() {
    $('#defender-tech-level').text(defenderTechLevel.level);
  };
  
})
