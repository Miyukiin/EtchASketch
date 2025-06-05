
const gridContainer = document.querySelector("div.grid-container");
const recreateGridButton = document.querySelector("button.recreate-grid-button");
const numOfSquaresInputBox = document.querySelector("input.num-of-squares");

createGrid(16);

recreateGridButton.addEventListener("click", (e) => {
    let userInputValue = parseInt(numOfSquaresInputBox.value)
    if (userInputValue <= 100){
        removeGrid();
        createGrid(userInputValue);
        return;
    }
    alert("Sorry! Max input is 100.")
})

function createGrid(numOfSquares){
    for(let i=0; i<numOfSquares;i++){
        let rowOfElements = document.createElement("div");
        rowOfElements.classList = "row-container";
        for(let i=0; i<numOfSquares;i++){
            let gridElement = document.createElement("div");
            gridElement.classList = "grid-element";
            gridElement.addEventListener("mouseover", (e) => {
                gridElement.classList.add("grid-element-hover");
            })
            rowOfElements.appendChild(gridElement);
        }
        gridContainer.appendChild(rowOfElements);
    }
}

function removeGrid(){
    const rows = document.querySelectorAll("div.row-container");
    rows.forEach(element => {element.remove()});
}