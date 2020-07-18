"use strict";

var ui = new class {
  byteView = document.getElementById("byteView");
  constructor() {
    this.byteView = document.getElementById("byteView");
  }
  updateByteView(bytes) {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    bytes.getDisplay(tr, 16);
    byteView.innerHTML = "";
    byteView.appendChild(table);
  }
}