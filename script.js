var c = document.getElementById( "house" );
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0,0,400,400);
ctx.beginPath();
ctx.moveTo(160,170);//point de départ(x, y)
ctx.quadraticCurveTo(200,80,240,170);/*(point x de la courbe, point y de la courbe,
  point d'arrivée x, point d'arrivée y)*/
  ctx.fillStyle="#ffffff";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(100,200);//point de départ(x, y)
  ctx.quadraticCurveTo(200,120,300,200);/*(point x de la courbe, point y de la courbe,
    point d'arrivée x, point d'arrivée y)*/
    ctx.fillStyle="#e0e1f3";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(100,200);//point de départ(x, y)
    ctx.quadraticCurveTo(200,280,300,200);/*(point x de la courbe, point y de la courbe,
      point d'arrivée x, point d'arrivée y)*/
      ctx.fillStyle="#e0e1f3";
      ctx.fill();
