// create a grid with a size of the parameter
function createGrid(size){
    // select the div where the grib will be placed
    const grid = document.querySelector('.grid');

    // the loop generates a 16x16 grid
    for (let i = 0; i < size; i++){
            // create a new row
            const row = document.createElement('div');
            row.classList.add('row');
            grid.appendChild(row);

            for (let i = 0; i < size; i++){
                // this creates one block in the grid
                const gridBlock = document.createElement('div');
                gridBlock.classList.add('gridBlock');
    
                // appends gridBlock to the grid div
                row.appendChild(gridBlock);
            }
            colorGrid();
    }
}

createGrid(16);

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

// function prompts user to enter a new number to change grid size
function changeGrid(){
    let size = prompt("Enter grid size (less than 100)", "16");
    if (+size > 100 || +size < 1){
        alert("Invalid input! Enter a number between 1 and 100");
    }

}

// this function deletes the current grid
function deleteGrid(){

}

