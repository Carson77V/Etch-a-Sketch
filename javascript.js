// create a 16x16 grid
function createGrid(){
    // select the div where the grib will be placed
    const grid = document.querySelector('.grid');

    // the loop generates a 16x16 grid
    for (let i = 0; i < 16; i++){
        // this creates one block in the grid
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('gridBlock');

        // appends gridBlock to the grid div
        grid.appendChild(gridBlock);
    }
}

createGrid();