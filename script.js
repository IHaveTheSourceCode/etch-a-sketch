const container = document.querySelector(".grid-container");
// defines base grid size
let grid_size = 16;
// defines value of color picker input and presence of pickaxe
let color;
let pickaxe_bool;

// function that makes grid and appends it into container
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
  if (chosen_block != undefined) {
    div.style.backgroundColor = pickaxe;
    div.style.backgroundImage =
      "url(/images/blocks-flat/" + chosen_block.replace(/ /g, "") + ".png";
    div.style.backgroundSize = "cover";
  } else if (color != undefined) {
    div.style.backgroundColor = color;
    div.style.backgroundImage = "url()";
  } else if (pickaxe_bool != undefined) {
    div.style.backgroundColor = pickaxe_bool;
    div.style.backgroundImage = "url()";
  }
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
};

// adds event to every 3D block which returns
// .tooltip-text textContent on click
const tooltips = Array.from(document.querySelectorAll(".tooltip"));
let chosen_block;

function get_block() {
  tooltips.forEach((tooltip) =>
    tooltip.addEventListener("click", function () {
      chosen_block = tooltip.textContent.trim();
      color = undefined;
      pickaxe_bool = undefined;
    })
  );
}
get_block();

//turns the grid lines on/off
const lines_btn = document.querySelector(".lines-btn");
lines_btn.addEventListener("click", function () {
  if (lines_btn.textContent == "Hide lines") {
    document
      .querySelectorAll(".img-div")
      .forEach((div) => (div.style.border = "none"));
    lines_btn.textContent = "Show lines";
    lines_btn.style.backgroundColor = "gray";
    document.querySelector(".grid-container").style.boxShadow = "none";
  } else {
    lines_btn.textContent = "Hide lines";
    lines_btn.style.backgroundColor = "#9ca09c";
    document
      .querySelectorAll(".img-div")
      .forEach(
        (div) =>
          (div.style.cssText =
            "border-left: 1px solid black; border-top: 1px solid black")
      );
    document.querySelector(".grid-container").style.boxShadow =
      "1px 1px 0px black";
  }
});

// changes background of the page
const background_switcher = document.querySelector(".toggle-background");
let background = "light";
background_switcher.addEventListener("click", function () {
  if (background == "light") {
    background = "dark";
    background_switcher.textContent = "Dark mode";
    document.body.style.backgroundImage = "url(/images/themes/theme-dark.jpg)";
    document.querySelector(".header-title").style.color = "white";
    document.querySelector(".grid-container").style.boxShadow =
      "1px 1px 0px white";
    document
      .querySelectorAll(".img-div")
      .forEach((image) => (image.style.borderColor = " white"));
  } else {
    background = "light";
    background_switcher.textContent = "Light mode";
    document.body.style.backgroundImage = "url(/images/themes/theme-light.jpg)";
    document.querySelector(".header-title").style.color = "black";
    document.querySelector(".grid-container").style.boxShadow =
      "1px 1px 0px black";
    document
      .querySelectorAll(".img-div")
      .forEach((image) => (image.style.borderColor = " black"));
  }
});

// pickaxe tool that will delete blocks
function pickaxe() {
  document.querySelector(".pickaxe").addEventListener("click", function () {
    pickaxe_bool = "rgb(1, 1, 1, 0.0)"; //transparent color
    chosen_block = undefined;
    color = undefined;
    console.log("test");
  });
}
pickaxe();

// color picker
const color_picker = document.querySelector(".color-picker");
color_picker.addEventListener("input", function () {
  color = color_picker.value;
  pickaxe_bool = undefined;
  chosen_block = undefined;
});
