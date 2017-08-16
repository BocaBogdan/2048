const game = {
    matrix: [],
    init() {
        this.makeMatrix();
        this.initMatrix();
        this.doRandom();
    },
    makeMatrix() {
        for (let i = 0; i < 4; i++) {
            this.matrix[i] = [];
        }
    },
    initMatrix() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.matrix[i][j] = 0;
            }
        }
    },
    doRandom() {
        let freeCell = this.countFreeCell();
        if (freeCell > 4) {
            freeCell = 4;
        } else {
            freeCell--;
        }
        const random = Math.floor(Math.random() * freeCell) + 1;
        for (let i = 0; i < random; i++) {
            let iRandom, jRandom;
            do {
                iRandom = Math.floor(Math.random() * 4);
                jRandom = Math.floor(Math.random() * 4);
            } while (this.matrix[iRandom][jRandom] !== 0);
            this.matrix[iRandom][jRandom] = 2;
        }
    },
    countFreeCell() {
        let freeCell = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.matrix[i][j] === 0)
                    freeCell++;
            }
        }
        return freeCell;
    },
    moveLeft() {
        userView.clean();
        this.shiftMatrixLeft();
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.matrix[i][j + 1] === this.matrix[i][j]) {
                    this.matrix[i][j] *= 2;
                    this.matrix[i][j + 1] = 0;
                }
            }
        }
        this.shiftMatrixLeft();
        this.doRandom();
    },
    shiftMatrixLeft() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.matrix[i][j] !== 0) {
                    let k = j;
                    while (this.matrix[i][k - 1] === 0) {
                        let aux = this.matrix[i][k];
                        this.matrix[i][k] = this.matrix[i][k - 1];
                        this.matrix[i][k - 1] = aux;
                        k--;
                    }
                }
            }
        }
    },

    moveRight() {
        userView.clean();
        this.shiftMatrixRight();
        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                if (this.matrix[i][j - 1] === this.matrix[i][j]) {
                    this.matrix[i][j] *= 2;
                    this.matrix[i][j - 1] = 0;
                }
            }
        }
        this.shiftMatrixRight();
        this.doRandom();
    },
    shiftMatrixRight() {
        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                if (this.matrix[i][j] !== 0) {
                    let k = j;
                    while (this.matrix[i][k + 1] === 0) {
                        let aux = this.matrix[i][k];
                        this.matrix[i][k] = this.matrix[i][k + 1];
                        this.matrix[i][k + 1] = aux;
                        k++;
                    }
                }
            }
        }
    },
    moveUp() {
        userView.clean();
        this.shiftMatrixUp();
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                if (this.matrix[i + 1] && this.matrix[i + 1][j] === this.matrix[i][j]) {
                    this.matrix[i][j] *= 2;
                    this.matrix[i + 1][j] = 0;
                }
            }
        }
        this.shiftMatrixUp();
        this.doRandom();
    },
    shiftMatrixUp() {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                if (this.matrix[i][j] !== 0) {
                    let k = i;
                    while (this.matrix[k - 1] && this.matrix[k - 1][j] === 0) {
                        let aux = this.matrix[k][j];
                        this.matrix[k][j] = this.matrix[k - 1][j];
                        this.matrix[k - 1][j] = aux;
                        k--;
                    }
                }
            }
        }
    },
    moveDown() {
        userView.clean();
        this.shiftMatrixDown();
        for (let j = 3; j >= 0; j--) {
            for (let i = 3; i >= 0; i--) {
                if (this.matrix[i - 1] && this.matrix[i - 1][j] === this.matrix[i][j]) {
                    this.matrix[i][j] *= 2;
                    this.matrix[i - 1][j] = 0;
                }
            }
        }
        this.shiftMatrixDown();
        this.doRandom();
    },
    shiftMatrixDown() {
        for (let j = 3; j >= 0; j--) {
            for (let i = 3; i >= 0; i--) {
                if (this.matrix[i][j] !== 0) {
                    let k = i;
                    while (this.matrix[k + 1] && this.matrix[k + 1][j] === 0) {
                        let aux = this.matrix[k][j];
                        this.matrix[k][j] = this.matrix[k + 1][j];
                        this.matrix[k + 1][j] = aux;
                        k++;
                    }
                }
            }
        }
    },
    printMatrix() {
        for (let i = 0; i < 4; i++) {
            console.log(this.matrix[i][0] + '|' + this.matrix[i][1] + '|' + this.matrix[i][2] + '|' + this.matrix[i][3]);
        }
    }
};

game.init();
