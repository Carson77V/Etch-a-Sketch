// create a 16x16 grid
function createGrid(){
    // select the div where the grib will be placed
    const grid = document.querySelector('.grid');

    // the loop generates a 16x16 grid
    for (let i = 0; i < 8; i++){
            // create a new row
            const row = document.createElement('div');
            row.classList.add('row');
            grid.appendChild(row);

            for (let i = 0; i < 8; i++){
                // this creates one block in the grid
                const gridBlock = document.createElement('div');
                gridBlock.classList.add('gridBlock');
    
                // appends gridBlock to the grid div
                row.appendChild(gridBlock);
            }
            colorGrid();
        }
    }

createGrid();

// this function creates the event listener to hover over each grid block
function colorGrid(){
    // selects the parent class of the grid blocks
    const container = document.querySelector('.grid');
    // when mouse is on block do function
    container.addEventListener('mouseover', function(e){
        // if the block has a class named gribBlock then color the block
        if(e.target.classList.contains('gridBlock')){
            // the add a new class to the targeted block and change color 
            e.target.classList.add('colored');
            e.target.setAttribute('style', 'background-color: blue;');
        }
    })
}

