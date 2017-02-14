var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// drawCompas function
function drawCompass() {
	drawStructure();
	drawHand();
	drawPoints();
	drawAllows();
}

// drawStructure function
function drawStructure(){

	ctx.beginPath();
	ctx.arc(185,185,150,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
}

// drawPoints function
function drawPoints() {
	
	ctx.font = '10pt Calibri';
	ctx.fillStyle = 'white';
	//north
	ctx.fillText("N",181,55);
	//west
	ctx.fillText("S",181,322);
	//east
	ctx.fillText("E",306,188);
	//south
	ctx.fillText("O",46,188)
}

// drawAllows function
function drawAllows() {

	ctx.beginPath();
	
 	//north
	ctx.moveTo(185,60);
	ctx.lineTo(165,165);
	ctx.moveTo(185,60);
	ctx.lineTo(205,165);
 	//west
	ctx.moveTo(185,310);
	ctx.lineTo(165,205);
	ctx.moveTo(185,310);
	ctx.lineTo(205,205);
	//south
	ctx.moveTo(60,185);
	ctx.lineTo(165,165);
	ctx.moveTo(60,185);
	ctx.lineTo(165,205);
	//east
	ctx.moveTo(300,185);
	ctx.lineTo(205,165);
	ctx.moveTo(300,185);
	ctx.lineTo(205,205);

	ctx.moveTo(100,90);
	ctx.lineTo(165,165);
	ctx.moveTo(270,90);
	ctx.lineTo(205,165);

	ctx.moveTo(270,280);
	ctx.lineTo(205,205);
	ctx.moveTo(100,280);
	ctx.lineTo(165,205);

	//style
 	ctx.setLineDash([2, 5]);
 	ctx.strokeStyle = '#FFA500';
	ctx.lineWidth = 3;
	ctx.stroke();
 	
 	ctx.closePath();
}

// drawHand function
function drawHand() {

 	ctx.beginPath();
 	ctx.strokeStyle = 'white';
 	ctx.lineWidth = 3;
 	ctx.fillStyle = 'white';

 	//hand
 	ctx.moveTo(185,185);
 	ctx.lineTo(310,140);

 	ctx.stroke();
 	//circle
 	ctx.beginPath();
 	ctx.arc(185,185,6,0,2*Math.PI);
 	ctx.fill();
}

drawCompass();
