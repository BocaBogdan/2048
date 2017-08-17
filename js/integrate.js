const hammer = new Hammer(document.body);
hammer.get('swipe').set({direction: Hammer.DIRECTION_ALL});
hammer.on('swipe', function () {
    console.log(arguments[0].direction);
    switch (arguments[0].direction) {
        case 8:
            game.moveUp();
            userView.printGameMatrix();
            break;
        case 16:
            game.moveDown();
            userView.printGameMatrix();
            break;
        case 2:
            game.moveLeft();
            userView.printGameMatrix();
            break;
        case 4:
            game.moveRight();
            userView.printGameMatrix();
            break;
    }
});
arrow.onKeyUpPresed = function () {
    game.moveUp();
    userView.printGameMatrix();
};

arrow.onKeyDownPresed = function () {
    game.moveDown();
    userView.printGameMatrix();
};

arrow.onKeyLeftPresed = function () {
    game.moveLeft();
    userView.printGameMatrix();
};

arrow.onKeyRightPresed = function () {
    game.moveRight();
    userView.printGameMatrix();
};

