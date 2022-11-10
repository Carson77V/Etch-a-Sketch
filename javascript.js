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
colorGrid();

// this function creates the event listener to hover over each grid block
function colorGrid(){
    // selects the parent class of the grid blocks
    const container = document.querySelector('.grid');
    // when mouse is on block do function
    container.addEventListener('mouseover', function(e){
        // if the block has a class named gribBlock then color the block
        if(e.target.classList.contains('gridBlock')){
            console.log("it worked!");
        }
    })
}

