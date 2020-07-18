"use strict";

var fileHandler = new class {
  load(files) {
    let fileData = new Blob([files[0]]);
    // Pass getBuffer to promise.
    var promise = new Promise(this.getBuffer(fileData));
    // Wait for promise to be resolved, or log error.
    promise.then(function (data) {
      let table = document.createElement("table");
      let tr = document.createElement("tr");
      let bytes = new ByteBuffer(data);
      bytes.getDisplay(tr);
      ui.byteView.innerHTML = "";
      table.appendChild(tr);
      ui.byteView.appendChild(table);
    }).catch(function (err) {
      console.error(err);
    });
  }

  getBuffer(fileData) {
    return function (resolve) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(fileData);
      reader.onload = function () {
        var arrayBuffer = reader.result
        var bytes = new Uint8Array(arrayBuffer);
        resolve(bytes);
      }
    }
  }
}