"use strict";

class ByteBuffer {
  data = new Uint8Array()
  constructor(data) {
    this.data = new Uint8Array(data);
  }

  getLength() {
    return Math.ceil(this.data.length / 16);
  }

  getByte(index) {
    document.getElementById("scrollThumb").style.top = String((index / this.getLength()) * 100) + "%";
    let size = 16;
    let pos = `<span>${(index * size).toString(16).toUpperCase().padStart(8, "0")}</span>`;
    let hex = "";
    let txt = "";
    for (let i = index * size; i < size * (index + 1); i++) {
      try {
        let byte = this.data[i];
        hex += `<span id="hex${i}" onmouseover="select(${i})" onmouseout="unselect(${i})">${byte.toString(16).toUpperCase().padStart(2, "0")}</span>`;
        txt += `<span id="txt${i}" onmouseover="select(${i})" onmouseout="unselect(${i})">${byte <= 32 ? "&nbsp;" : String.fromCharCode(byte)}</span>`;
      }
      catch (ex) {
      }
    }
    return { pos, hex, txt };
  }
}