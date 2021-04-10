function createGrid(size) {
    const changeSize = document.querySelector('button')
    changeSize.addEventListener('click', getSize);

    const gridDiv = document.querySelector('#grid-container');
    // creates grid with loops for default size
    if (!size) {
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                gridDiv.appendChild(document.createElement("div")).classList.add("grid-box");
            }
        }
    } else { // if there is a user-inputed size
        let userBox;
        size = parseInt(size);
        const dimension = (600/size) - 2;
        const height = `${dimension}px`;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                userBox = gridDiv.appendChild(document.createElement('div'));
                userBox.classList.add("grid-box");
                userBox.style.width = height;
                userBox.style.height = height;
            }
        }
    }

    const gridBlocks = document.querySelectorAll('.grid-box');
    gridBlocks.forEach(block => block.addEventListener('mouseover', function(e) {
        if (!e.target.style.backgroundImage) {
            let randomColor = randomRGB();
            let backgroundColor = `linear-gradient(${randomColor}, ${randomColor})`;
            e.target.style.backgroundImage = backgroundColor;
            e.target.dataset.color = backgroundColor;
            e.target.dataset.times = "0";
            
        } else {
            if (e.target.dataset.times < 10) {
                e.target.dataset.times++;
            }
            let timesPassed = e.target.dataset.times;

            let backgroundColor = e.target.dataset.color;
            console.log(backgroundColor);

            let newColor;
            if (timesPassed < 10) {
                newColor = `linear-gradient(rgba(0, 0, 0, .${timesPassed}), rgba(0, 0, 0, .${timesPassed})), ` + backgroundColor;
            } else {
                newColor = "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), " + backgroundColor;
            }
            console.log(newColor);
            e.target.style.backgroundImage = newColor;
        }
    }))

}

function randomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgba(${red},${green},${blue}, 1)`;

}


function getSize() {
    document.querySelectorAll('.grid-box').forEach(block => block.style.backgroundColor = "white");

    let newSize = 0;
    while (newSize < 1 || newSize > 100) {
        newSize = prompt("How many squares wide? (up to 100)");
    }

    removeGrid();

    createGrid(newSize);
}

function removeGrid() {
    const gridDiv = document.querySelector('#grid-container');
    const gridBoxes = document.querySelectorAll('.grid-box');

    for (let i = 0; i < gridBoxes.length; i++) {
        gridDiv.removeChild(gridBoxes[i]);
    }
}

createGrid();