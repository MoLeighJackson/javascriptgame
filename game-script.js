// create gameboard
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// style gameboard
canvas.width  = 800;
canvas.height = 800;
canvas.setAttribute("style", "border: 3px dash red;");

// get 2D context
var context = canvas.getContext('2d');

// create player square and map square
var map = {x:0, y:0, width: 200, height: 200, color: "green" };
var player = {x:0, y:0, width: 25, height: 25, color: "purple" };

// draw map
context.fillStyle = map.color;
context.fillRect (map.x,map.y,map.width,map.height);

// draw player
context.fillStyle = player.color;
context.fillRect (player.x,player.y,player.width,player.height);
