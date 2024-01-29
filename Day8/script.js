const canvas=document.querySelector('canvas')
const ctx=canvas.getContext('2d')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing=false;
let xPoint=0;
let yPoint=0;
let width=1;
let hue=1;

const draw = (e) => {
    if(!isDrawing) return;
    ctx.lineWidth=width;
    ctx.strokeStyle=`hsl(${hue} 100% 50%)`
    ctx.beginPath();
    ctx.moveTo(xPoint, yPoint);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [xPoint,yPoint]=[e.offsetX,e.offsetY]
    width+=0.5;
    if(width>=110)
        width=110;
    hue++;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing=true;
    [xPoint,yPoint]=[e.offsetX,e.offsetY]
    width=1;
})
canvas.addEventListener('mouseout',() => isDrawing=false)
canvas.addEventListener('mouseup',() => {
    isDrawing=false;
    width=1;
})
canvas.addEventListener('mousemove',draw)