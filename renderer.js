// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// const remote = require('electron').remote;
const { remote, ipcRenderer } = require('electron');

const image = document.getElementById('image');
// image.addEventListener('load', () => {
//   console.log('loaded');
//   // console.log(image.src);
//   if (image.src === 'file:///C:/Users/1048596/web/electron-quick-start/amemura.jpg') {
//     // ipcRenderer.send('set-content-size', 1550, 1061);
//     // image.src = '';
//     remote.getCurrentWindow().setContentSize(1550, 1061);
//     remote.getCurrentWindow().center();
//     console.log(2);
//   } else if (image.src == 'file:///C:/Users/1048596/web/electron-quick-start/akko.jpg') {
//     // $("#image").load('./akko.jpg', function() {
//     //   alert($(this).width());
//     // }).attr('src', './akko.jpg');
//     // ipcRenderer.send('set-content-size', 500, 610);
//     // image.src = './akko.jpg';
//     // remote.getCurrentWindow().setContentSize(500, 610);
//     // remote.getCurrentWindow().center();
//   }
// });
// image.onload = () => {
//   alert(image.width);
// }


window.addEventListener('keydown', (e) => {
  // const browser = remote.getCurrentWindow();

  if (e.keyCode === 39) {
    // ipcRenderer.send('set-content-size', 1550, 1061);
    // image.src = './amemura.jpg';
    image.src = '';
    remote.getCurrentWindow().setContentSize(1550, 1061);
    remote.getCurrentWindow().center();
  } else if (e.keyCode === 37) {
    // ipcRenderer.send('set-content-size', 500, 610);
    image.src = './akko.jpg';
    remote.getCurrentWindow().setContentSize(500, 610);
    remote.getCurrentWindow().center();
  }
});
