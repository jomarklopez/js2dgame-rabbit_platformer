const Controller = function () {
    this.up = new Controller.ButtonInput();
    this.left = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();

    this.keyDownUp = function (type, keyCode) {
        let down = (type == "keydown") ? true : false;

        switch (keyCode) {
            case 37: this.left.getInput(down); break;
            case 32: this.up.getInput(down); break;
            case 39: this.right.getInput(down); break;
        }
    };
}

Controller.ButtonInput = function () {
    this.active = this.down = false;
};

Controller.ButtonInput.prototype = {
    constructor: Controller.ButtonInput,
    getInput: function (down) {
        if (this.down != down) this.active = down;
        this.down = down;
    }
};

Controller.prototype = {
    constructor: Controller
};