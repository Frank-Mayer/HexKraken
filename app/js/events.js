"use strict";

function select(index) {
  if (ui.scroll === true) {
    ui.scroll = false;
    return;
  }
  document.getElementById(`hex${index}`).classList.add("selection");
  document.getElementById(`txt${index}`).classList.add("selection");
}

function unselect(index) {
  document.getElementById(`hex${index}`).classList.remove("selection");
  document.getElementById(`txt${index}`).classList.remove("selection");
}

function onFileChange(evt) {
  fileHandler.load(evt.target.files);
}

document.getElementById("file").addEventListener("change", onFileChange);

document.addEventListener('keydown', (evt) => {
  if (evt.key === "ArrowDown") {
    evt.preventDefault();
    ui.updateByteView(1);
  }
  else if (evt.key === "ArrowUp") {
    evt.preventDefault();
    ui.updateByteView(-1);
  }
}, false);


document.getElementById("app").addEventListener("wheel", (evt) => {
  let velocity = Math.round(evt.deltaY);
  if (Math.abs(velocity) > 1.5) {
    evt.preventDefault();
    ui.updateByteView(velocity);
  }
});

document.getElementById("menuButton").addEventListener("click", () => { ui.toggleMenu() });