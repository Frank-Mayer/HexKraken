"use strict";

var fileHandler = new class {
  load(files) {
    let f = files[0];
    if (f.size > 10490000) {
      document.getElementById("fileMsg").innerText = "File to big";
      return;
    }
    ui.viewingBytes = new Array();
    document.getElementById("fileMsg").innerText = "";
    let fileData = new Blob([f]);
    document.getElementById("fileName").innerText = f.name;
    document.getElementById("fileSize").innerText = f.size + " Byte";
    document.getElementById("fileType").innerText = f.type === "" ? "unknown" : f.type;
    // Pass getBuffer to promise.
    var promise = new Promise(this.getBuffer(fileData));
    // Wait for promise to be resolved, or log error.
    promise.then(function (data) {
      bytes = new ByteBuffer(data);
      ui.refreshByteView();
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