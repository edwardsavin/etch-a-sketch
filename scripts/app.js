const container = document.querySelector("#container");

function createGrid(number) {
  const numberColumns = number;
  const numberRows = number;

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

  const column = document.querySelectorAll(".column");
  const row = document.querySelectorAll(".row");

  // Fill the hovered squares
  (function hoverOver() {
    for (let i = 0; i < column.length; i++) {
      column[i].onmouseover = function () {
        column[i].classList.add("hovered");
      };
    }
  })();
}

// Clear the old grid and change it with user userGridNumber
function changeGrid() {
  userGridNumber = prompt(
    "Please enter the desired number of squares per side:",
    16
  );

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (userGridNumber < 1) {
    alert("Please enter a number higher than 0");
    changeGrid();
  } else if (userGridNumber > 99) {
    alert("Please enter a number lower than 100");
    changeGrid();
  } else {
    createGrid(userGridNumber);
  }
}

createGrid(16);
