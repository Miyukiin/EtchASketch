
const gridContainer = document.querySelector("div.grid-container");

createGrid();

function createGrid(){
    for(let i=0; i<16;i++){
        let rowOfElements = document.createElement("div");
        rowOfElements.classList = "row-container";
        for(let i=0; i<16;i++){
            let gridElement = document.createElement("div");
            gridElement.classList = "grid-element";
            console.log(gridElement);
            rowOfElements.appendChild(gridElement);
        }
        gridContainer.appendChild(rowOfElements);
    }
}