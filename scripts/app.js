const container = document.querySelector("#container");

function createGrid() {
  const numberColumns = 16;
  const numberRows = 16;

  // Create numberRows of rows
  /* Inside each row create numberColumns of equal squares,
  the total of squares are considered a column*/
  for (let i = 0; i < numberRows; i++) {
    const row = document.createElement("div");
    container.appendChild(row);
    row.className = "row";
    for (let j = 0; j < numberColumns; j++) {
      const column = document.createElement("div");
      row.appendChild(column);
      column.className = "column";
    }
  }
}

createGrid();
