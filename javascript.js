// create a 16x16 grid
function createGrid(){
    // select the div where the grib will be placed
    const grid = document.querySelector('.grid');

    // this creates one block in the grid
    const gridBlock = document.createElement('div');
    gridBlock.classList.add('gridBlock');
    gridBlock.setAttribute('style', 'border-style: solid; border-color: black');

    // appends gridBlock to the grid div
    grid.appendChild(gridBlock);
}

createGrid();