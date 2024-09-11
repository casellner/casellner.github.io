const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); //2d methods will be used

//width and height from tutorial
canvas.width = 64 * 16; //1024
canvas.height = 64 * 9; //576

//fill document
//canvas.width = document.body.clientWidth;
//canvas.height = document.body.clientHeight;

c.fillStyle = `rgb(173, 216, 230)`; //canvas color
c.fillRect(0, 0, canvas.width, canvas.height); //x, y, width, height
