
var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var colors=["#ff0000","#ff4000","#ff8000","#ffbf00","#ffff00","#bfff00","#80ff00","#40ff00","#00ff00","#00ff40","#00ff80","#00ffbf","#00ffff","#00bfff","#0080ff","#0040ff","#0000ff","#4000ff","#8000ff","#bf00ff","#ff00ff","#ff00bf","#ff0080","#ff0040","#ff000",'#002200','#ff00ff','#00ff00','#0000ff'];

function circle(x, y, r){
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fillStyle = colors[(Math.round(Math.random()*25))];
		ctx.fill();
		ctx.stroke();
}

alert("Your Game is Over! :)");

for (var i = 0; i < 10000; i++) {
		setTimeout(()=>{
		x = Math.round(Math.random()*1300); 
		y = Math.round(Math.random()*1300);

		circle(x,y,10)
	},1000)
}
		

for (var i = 0; i < 5000; i++) {
		setTimeout(()=>{
		x = Math.round(Math.random()*1300); 
		y = Math.round(Math.random()*1300);
		r = Math.round(Math.random()*100);

		circle(x,y,r)
	},100)
}
for (var i = 0; i < 5000; i++) {
		setTimeout(()=>{
		x = Math.round(Math.random()*1300); 
		y = Math.round(Math.random()*1300);
		circle(x,y,i)
	},1000)
}
