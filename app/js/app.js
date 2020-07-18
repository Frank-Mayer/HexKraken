"use strict";

let debug = false;
if (debug) {
}
else {
  requireJS(["firebase/firebase-app.js", "firebase/init.js"]);
}

if (String(document.readyState) !== 'loading') {
  main();
}
else {
  document.addEventListener('DOMContentLoaded', function () {
    main();
  });
}

function main() {
  requireJS(["fileHandler.js", "ui.js", "ByteBuffer.js"]);
  requireCSS(["style.css", "menu.css", "byteView.css"]);

  new Vue({
    el: "#app",
    data: {},
    methods: {
      onFileChange(evt) {
        fileHandler.load(evt.target.files);
      }
    }
  });
}