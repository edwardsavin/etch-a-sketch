const container = document.querySelector("#container");

function createGrid() {
  const numberColumns = 16;
  const numberRows = 16;

  // Create numberRows of rows
  /* Inside each row create numberColumns of equal squares,
  the total of squares are considered a column*/
  for (let i = 0; i < numberRows; i++) {
    const createRow = document.createElement("div");
    container.appendChild(createRow);
    createRow.className = "row";
    for (let j = 0; j < numberColumns; j++) {
      const createColumn = document.createElement("div");
      createRow.appendChild(createColumn);
      createColumn.className = "column";
    }
  }
}

createGrid();

const column = document.querySelectorAll(".column");
const row = document.querySelectorAll(".row");

// Fill the hovered squares
function hoverOver() {
  for (let i = 0; i < column.length; i++) {
    column[i].onmouseover = function () {
      column[i].classList.add("hovered");
    };
  }
}

hoverOver();