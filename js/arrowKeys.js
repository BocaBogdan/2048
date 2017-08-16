const arrow = {
    keyPressed(keyCode) {
        switch (keyCode) {
            case 37:
                this.onKeyLeftPresed();
                break;
            case 38:
                this.onKeyUpPresed();
                break;
            case 39:
                this.onKeyRightPresed();
                break;
            case 40:
                this.onKeyDownPresed();
                break;
        }
    },
    // this must be overwritten
    onKeyUpPresed() {},
    onKeyDownPresed() {},
    onKeyLeftPresed() {},
    onKeyRightPresed() {}
};

document.body.addEventListener('keydown', function () {
    arrow.keyPressed(event.keyCode);
});
