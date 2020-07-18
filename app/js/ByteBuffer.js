"use strict";

class ByteBuffer {
  data = new Uint8Array()
  constructor(data) {
    this.data = new Uint8Array(data);
  }

  getDisplay(parent, row = 16) {
    let hexCounter = document.createElement("td");
    let byteView = document.createElement("td");
    let plainTextView = document.createElement("td");

    let i = 1;
    for (let byte of this.data) {
      let span = document.createElement("span");
      span.innerText = byte.toString(16).toUpperCase().padStart(2, "0");
      span.classList.add("byte");
      byteView.appendChild(span);
      let plainSpan = document.createElement("span");
      plainSpan.classList.add("byte");
      let plainChar = byte < 32 ? "." : String.fromCharCode(byte);
      plainSpan.innerText = plainChar;
      plainTextView.appendChild(plainSpan);
      if (i % row === 0) {
        byteView.innerHTML += "<br>";
        plainTextView.innerHTML += "<br>";
      }
      if ((i - 1) % row === 0) {
        hexCounter.innerHTML += `<span>${(i - 1).toString(16).toUpperCase().padStart(8, "0")}</span><br>`;
      }
      if (i > 1023) break;
      i++;
    }

    parent.appendChild(hexCounter);
    parent.appendChild(byteView);
    parent.appendChild(plainTextView);
  }
}