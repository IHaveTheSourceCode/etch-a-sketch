// function that makes grid and appends it into container
const container = document.querySelector(".grid-container");
function setGrid(grid_size) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(" + grid_size + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + grid_size + ", 1fr)";
}

// defines base grid size
let grid_size = 16;
setGrid(grid_size);

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

// changes opacity to 1 and img:active to some background color

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

function get_block() {
  switch (allocate(images, block_names)) {
    case "grass":
      chosen_block = "/images/blocks-flat/grass";
    case "rock":
      chosen_block = "/images/blocks-flat/rock";
  }
}

// fills the grid
