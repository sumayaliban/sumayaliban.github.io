$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(150, 650, 50, 50, "red");
  createPlatform(250, 575, 50, 50, "purple")
  createPlatform(350, 500, 50, 50,  "yellow")
  createPlatform(450, 650, 50, 50,  "green")
  createPlatform(650, 550, 200, 50,   "pink")
  



    // TODO 3 - Create Collectables
createCollectable("grace", 350, 450, 1.0, 1.0);
createCollectable("steve", 200, 349, 1.0, 1.0)
createCollectable("max", 500, 200, 1.0, 1.0)


    
    // TODO 4 - Create Cannons
createCannon("right", 550, 2000);
createCannon("left", 450, 1000)
createCannon("bottom", 550, 1000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
