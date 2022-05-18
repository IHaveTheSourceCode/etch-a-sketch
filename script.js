// function that makes grid and appends it into container
const container = document.querySelector(".grid-container");
// defines base grid size
let grid_size = 16;

function setGrid(grid_size) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(" + grid_size + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + grid_size + ", 1fr)";
  for (let i = 0; i < grid_size ** 2; i++) {
    let div = document.createElement("div");
    div.classList.add("img-div");
    div.style.cssText =
      "border-left: 1px solid black; border-top: 1px solid black";
    container.append(div);
    div.addEventListener("mouseover", function () {
      fillCells(div);
    });
  }
}

// adds event to every grid cells that fills it with block
// when holding mousedown
function fillCells(div) {
  div.style.backgroundImage = "url(/images/blocks-flat/yellow_wool.png)";
  div.style.backgroundSize = "cover";
}

setGrid(grid_size);

// range slider changes grid_size, .cube and .size_value on input
const slider = document.querySelector(".slider");
const cube = document.querySelector(".cube");
let size_value = document.querySelector(".size-value");

function resetGrid() {
  document.querySelectorAll(".img-div").forEach((div) => div.remove());
}

size_value.textContent = slider.value + "x" + slider.value;
cube.style.height = `${100 + parseInt(slider.value)}px`;
cube.style.width = `${100 + parseInt(slider.value)}px`;

slider.oninput = function () {
  size_value.textContent = slider.value + "x" + slider.value;
  cube.style.width = `${100 + parseInt(slider.value)}px`;
  cube.style.height = `${100 + parseInt(slider.value)}px`;
  grid_size = slider.value;
  resetGrid();
  setGrid(grid_size);
  fillCells();
};
// adds event to every 3D block which returns
// .tooltip-text textContent on click
const images = document.querySelectorAll(".tooltip-image");
const block_names = document.querySelectorAll(".tooltiptext");

function allocate(images, block_name) {
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      return block_names[i].textContent;
    });
  }
}
allocate(images, block_names);

// gets 2D block by name of 3D block
let chosen_block = "";

function get_block() {}

// changes opacity to 1 and img:active to some background color

// changes opacity to 1 and img:active to some background colro

//turns the lines on/off
