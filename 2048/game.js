function isGameOver(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(grid[i][j] == 0){
                return false;
            }
            if(i !== 3 && grid[i][j] === grid[i+1][j]){
                return false;
            }
            if(j !== 3 && grid[i][j] === grid[i][j+1]){
                return false;
            }            
        }
    }
    return true;
}

function isGameWon(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(grid[i][j] == 2048) {
                return true;
            }
        }
    }
    return false;
}


// One "move"
function keyPressed() {
    let flipped = false;
    let rotated = false;
    let played = true;
    if (keyCode === DOWN_ARROW) {
        // DO NOTHING

    } else if (keyCode === UP_ARROW) {
        grid = flipGrid(grid);
        flipped = true;

    } else if (keyCode === RIGHT_ARROW) {
        grid = rotateGrid(grid);
        rotated = true;

    } else if (keyCode === LEFT_ARROW) {
        grid = rotateGrid(grid);
        grid = flipGrid(grid);
        rotated = true;
        flipped = true;

    } else {
        played = false;
    }

    if (played) {
        let past = copyGrid(grid);
        for (let i = 0; i < 4; i++) {
            grid[i] = operate(grid[i]);
        }
        let changed = compare(past, grid);

        if (flipped) {
            grid = flipGrid(grid);
        }
        if (rotated) {
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
        }

        if (changed) {
            addNumber();
        }

        updateCanvas();
        let gameover = isGameOver();
        if(gameover){
            console.log("GAME OVER");
        }

        let gamewon = isGameWon();
        if(gamewon){
            console.log("GAME WON");
        }
    }
}