const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); //2d methods will be used

canvas.width = 64 * 16; //1024
canvas.height = 64 * 9; //576

c.fillStyle = `rgb(173, 216, 230)`; //canvas color
c.fillRect(0, 0, canvas.width, canvas.height); //x, y, width, height
