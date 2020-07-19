"use strict";

var ui = new class {
  byteView;
  linesOnScreen;
  viewingBytes;
  menuIsOpen = false;
  constructor() {
    this.byteView = document.getElementById("byteView");
    this.linesOnScreen = (window.innerHeight / (window.innerWidth / 42));
    this.viewingBytes = [];
  }
  formatByteData(i, { pos, hex, txt }) {
    return `<tr id="B${i}"><td>${pos}</td><td>${hex}</td><td>${txt}</td></tr>`;
  }
  refreshByteView() {
    this.byteView.innerHTML = "";
    for (let i = 0; i < this.linesOnScreen; i++) {
      if (i <= bytes.getLength() - 1) {
        this.byteView.innerHTML += this.formatByteData(i, bytes.getByte(i));
        this.viewingBytes.push(Number(i));
      }
    }
  }
  updateByteView(velocity) {
    this.scroll = true;
    if (velocity > 0 && this.viewingBytes[this.viewingBytes.length - 1] < bytes.getLength()) {
      console.warn(`las el is ${this.viewingBytes[this.viewingBytes.length - 1]}\nDate length is ${bytes.getLength()}`)
      document.getElementById(`B${this.viewingBytes[0]}`).remove();
      this.viewingBytes.shift();
      let i = this.viewingBytes[this.viewingBytes.length - 1] + 1;
      this.byteView.innerHTML += this.formatByteData(i, bytes.getByte(i));
      this.viewingBytes.push(i);
    }
    else if (velocity < 0 && this.viewingBytes[0] > 0) {
      document.getElementById(`B${this.viewingBytes[this.viewingBytes.length - 1]}`).remove();
      this.viewingBytes.pop();
      let i = this.viewingBytes[0] - 1;
      this.byteView.innerHTML = this.formatByteData(i, bytes.getByte(i)) + this.byteView.innerHTML;
      this.viewingBytes.unshift(i);
    }
    this.byteView.scrollIntoView({ block: "start", behavior: "smooth" });
    for (let el of document.getElementsByClassName("selection")) {
      el.classList.remove("selection");
    }
  }
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      document.getElementById("menu").classList.add("open");
      document.getElementById("menuButton").classList.add("open");
    }
    else {
      document.getElementById("menu").classList.remove("open");
      document.getElementById("menuButton").classList.remove("open");
    }
  }
}