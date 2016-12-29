const electron = require('electron')
// const systemPreferences = electron.systemPreferences
const app = electron.app
const globalShortcut = electron.globalShortcut

app.on('ready', () => {
  console.log('meow')
  globalShortcut.register('alt+space', () => {
    console.log('alt+space is pressed')
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
