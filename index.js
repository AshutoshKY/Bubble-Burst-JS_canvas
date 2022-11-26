window.onload = createCan;
function createCan() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.arc(200, 350, 150, 0, 2 * Math.PI, false);
    var grd = context.createRadialGradient(150, 100, 10, 160, 110, 100);
    grd.addColorStop(0, '#8ED6FF');   
    grd.addColorStop(1, '#004CB3');
    context.fillStyle = grd;
    context.fill();
    context.strokeStyle = "#FF0000";
    context.lineWidth = 3;
    context.stroke();

    x1=1400, y1=350, x2=1200, y2=350, t=0.9
    const arrow = {
        dx: x2 - x1,
        dy: y2 - y1
    };
    const middle = {
        x: arrow.dx * t + x1,
        y: arrow.dy * t + y1
    };
    const tip = {
        dx: x2 - middle.x,
        dy: y2 - middle.y
    };
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(middle.x, middle.y);
    context.moveTo(middle.x + 0.5 * tip.dy, middle.y - 0.5 * tip.dx);
    context.lineTo(middle.x - 0.5 * tip.dy, middle.y + 0.5 * tip.dx);
    context.lineTo(x2, y2);
    context.strokeStyle = "#000000";
    context.lineWidth = 3;
    context.closePath();
    context.stroke();
}

function hit(){
    newFunc();
}

function newFunc(){

    var elem = document.getElementById("main");
    elem.parentElement.removeChild(elem);

    var canvas = document.createElement('canvas');
    canvas.id = "myCanvas";
    canvas.width = 1500;
    canvas.height = 800;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    var break1 = document.createElement("br");
    body.appendChild(break1);
    var button = document.createElement('button');
    button.innerHTML = 'Hit';
    button.onclick = function(){
        newFunc();
    };
    var button2 = document.createElement('button');
    button2.innerHTML = 'Reset';
    button2.onclick = function(){
        document.location.reload();
    };

    document.body.appendChild(button);
    document.body.appendChild(button2);

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.arc(200, 350, 150, 0, 2 * Math.PI, false);
    var grd = context.createRadialGradient(150, 100, 10, 160, 110, 100);
    grd.addColorStop(0, '#6ECCAF');   
    grd.addColorStop(1, '#6ECCAF');
    context.fillStyle = grd;
    context.strokeStyle = "#FF0000";
    context.lineWidth = 3;
    context.fill();
    context.stroke();

    x1=550, y1=350, x2=350, y2=350, t=0.9
    const arrow = {
        dx: x2 - x1,
        dy: y2 - y1
    };
    const middle = {
        x: arrow.dx * t + x1,
        y: arrow.dy * t + y1
    };
    const tip = {
        dx: x2 - middle.x,
        dy: y2 - middle.y
    };
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(middle.x, middle.y);
    context.moveTo(middle.x + 0.5 * tip.dy, middle.y - 0.5 * tip.dx);
    context.lineTo(middle.x - 0.5 * tip.dy, middle.y + 0.5 * tip.dx);
    context.lineTo(x2, y2);
    context.lineWidth = 3;
    context.strokeStyle = "#000000";
    context.closePath();
    context.stroke();
}