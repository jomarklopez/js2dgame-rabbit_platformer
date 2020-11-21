var render = function () {
    display.renderColor(game.color);
    display.render();
};

var update = function () {
    game.update();
};

// Controller object will handle user input
var controller = new Controller();
// Display object will handle size of window and canvas
var display = new Display(document.querySelector("canvas"));
// Game object will hold the logic of the game
var game = new Game();
// The engine is where the above three sections can interact
var engine = new engine(1000 / 30, render, update);

// Initialize

window.addEventListener("resize", display.handleResize);
window.addEventListener("keydown", controller.handleKeyDownUp);
window.addEventListener("keyup", controller.handleKeyDownUp);

display.resize();
engine.start();