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

