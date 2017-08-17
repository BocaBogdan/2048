const userView = {
    init() {
        document.querySelector('button').addEventListener('click', function (event) {
            console.log('remove Button');
            document.querySelector('.btn').remove();
            userView.printGameMatrix();
        });
    },
    printGameMatrix(){
        const main = document.createElement('main');
        for(let j =0;j<4;j++){
            const row = document.createElement('div');
            for(let i=0;i<4;i++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if(game.matrix[i][j] !==0) {
                    cell.innerText = game.matrix[i][j];
                }
                row.appendChild(cell);
            }
            main.appendChild(row);
        }
        document.body.appendChild(main);
    },
    clean() {
        document.querySelector('main').remove();
    }
};

userView.init();