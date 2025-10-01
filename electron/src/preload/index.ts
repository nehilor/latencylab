import { contextBridge, ipcRenderer } from 'electron'

// Define the API interface for type safety
interface ElectronAPI {
  ping: () => Promise<string>
}

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  ping: () => ipcRenderer.invoke('ping')
} as ElectronAPI)
