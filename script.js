// defines base grid size
let grid_size = 16;

// function that makes grid and appends it into container
const container = document.querySelector(".grid-container");
function setGrid(grid_size) {
  // display: grid
  // grid-template: repeat(grid_size, 1fr) / repeat(grid_size, 1fr)
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(16, 1fr)";
  container.style.gridTemplateRows = "repeat(16, 1fr)";
}

// changes opacity to 1 and img:active to some background colro

// range slider changes grid_size, .cube and .size_value on input
const slider = document.querySelector(".slider");
const cube = document.querySelector(".cube");
let size_value = document.querySelector(".size-value");

size_value.textContent = slider.value + "x" + slider.value;
cube.style.height = `${100 + parseInt(slider.value)}px`;
cube.style.width = `${100 + parseInt(slider.value)}px`;

slider.oninput = function () {
  size_value.textContent = slider.value + "x" + slider.value;
  cube.style.width = `${100 + parseInt(slider.value)}px`;
  cube.style.height = `${100 + parseInt(slider.value)}px`;
  grid_size = slider.value;
  setGrid(grid_size);
  console.log(grid_size);
};
