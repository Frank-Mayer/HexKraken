"use strict";
var bytes = void (0);
let debug = true;
if (debug) {
}
else {
  // requireJS(["firebase/firebase-app.js", "firebase/init.js"]);
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
  requireJS(["fileHandler.js", "ui.js", "ByteBuffer.js", "events.js"]);
  requireCSS(["style.css", "menu.css", "byteView.css"]);
}