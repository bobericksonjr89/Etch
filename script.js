function createGrid() {
    const changeSize = document.querySelector('button')
    changeSize.addEventListener('click', getSize);

    const gridDiv = document.querySelector('#grid-container');
    
    // creates grid with loops
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            gridDiv.appendChild(document.createElement("div")).classList.add("grid-box");
        }
    }

    const gridBlocks = document.querySelectorAll('.grid-box');
    gridBlocks.forEach(block => block.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "black";
    }))

}

function getSize() {
    document.querySelectorAll('.grid-box').forEach(block => block.style.backgroundColor = "white");
}

createGrid();