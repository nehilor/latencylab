"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  // Add your API methods here
  ping: () => electron.ipcRenderer.invoke("ping")
});
