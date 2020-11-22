
window.addEventListener("load", function (event) {

    "use strict";

    let keyDownUp = function (e) {
        controller.keyDownUp(e.type, e.keyCode);
    };

    let resize = function (e) {
        display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
        display.render();
    };

    let render = function () {
        display.drawMap(game.world.map, game.world.columns);
        display.drawPlayer(game.world.player, game.world.player.color1, game.world.player.color2);
        display.render();
    };

    let update = function () {
        if (controller.left.active) { game.world.player.moveLeft(); }
        if (controller.right.active) { game.world.player.moveRight(); }
        if (controller.up.active) { game.world.player.jump(); controller.up.active = false; }
        
        game.update();
    };

    // Controller object will handle user input
    let controller = new Controller();
    // Display object will handle size of window and canvas
    let display = new Display(document.querySelector("canvas"));
    // Game object will hold the logic of the game
    let game = new Game();
    // The engine is where the above three sections can interact
    let engine = new Engine(1000 / 30, render, update);

    // Initialize
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;

    display.tile_sheet.image.addEventListener("load", function (event) {
        resize();
        engine.start();
    }, { once: true });

    display.tile_sheet.image.src = "rabbit-platformer.png";

    window.addEventListener("resize",resize);
    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);

    resize();
    engine.start();
});