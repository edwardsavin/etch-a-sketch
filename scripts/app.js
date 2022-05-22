const container = document.querySelector("#grid-container");
const body = document.body;

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

  // Fill the hovered squares
  (function hoverOver() {
    for (let i = 0; i < column.length; i++) {
      column[i].onmouseover = function () {
        if (body.classList.contains("rainbow-background")) {
          column[i].style.backgroundColor = rainbowPencil();
          column[i].classList.add("hovered");
        } else {
          column[i].style.backgroundColor = "black";
          column[i].classList.add("hovered");
        }
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

  if (userGridNumber === null) {
    return;
  } else if (userGridNumber > 99) {
    alert("Please enter a number lower than 100");
    changeGrid();
  } else if (userGridNumber < 1) {
    alert("Please enter a number higher than 0");
    changeGrid();
  } else {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(userGridNumber);
  }
}

function clearGrid() {
  numberRows = document.querySelectorAll(".row").length;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid(numberRows);
}

// Change pencil color to rainbow and change background color to rainbow
function rainbowMode() {
  if (body.classList.contains("rainbow-background")) {
    body.classList.remove("rainbow-background");
    document.getElementById("title").classList.remove("rainbow-text");
  } else {
    body.classList.add("rainbow-background");
    document.getElementById("title").classList.add("rainbow-text");
  }
}

// Randomly select a rainbow color
function rainbowPencil() {
  const colors = [
    "#ff2400",
    "#e81d1d",
    "#e8b71d",
    "#e3e81d",
    "#1de840",
    "#1ddde8",
    "#2b1de8",
    "#dd00f3",
    "#dd00f3",
  ];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  return randomColor;
}

createGrid(16);
