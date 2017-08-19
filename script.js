/**
 * Creates a random color
 * @return {String} Returns random hex code in the format of
 *                          #ABCDEF
 */
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
};

var clickedTime; var createdTime; var reactionTime; var bestTime;
var firstTime = true;

/**
 * Creates a circle or triangle with varying color and
 * 	position on page
 * @param  {String} shapeID Name of div id to be manipulated
 */
function makeShape(shapeID) {
	var time = Math.random()*2000;

	setTimeout(function() {

		document.getElementById(shapeID).style.backgroundColor = getRandomColor();

		if (Math.random() > 0.5)
			document.getElementById(shapeID).style.borderRadius = "50px";
		else
			document.getElementById(shapeID).style.borderRadius = "0";

		document.getElementById(shapeID).style.marginTop = Math.round(Math.random() * 300)+"px";

		document.getElementById(shapeID).style.marginLeft = 500 + Math.round(Math.random() * 300)+"px";

		document.getElementById(shapeID).style.display = "block";
		createdTime = Date.now();
		}, time);
};

document.getElementById("box").onclick = function() {
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime)/1000;
	if (firstTime) {
		bestTime = reactionTime;
		firstTime = false;
	}

	if (reactionTime < bestTime) {
		bestTime = reactionTime;
	}

	document.getElementById('time').innerHTML = reactionTime + " seconds";
	document.getElementById('bestTime').innerHTML = bestTime + " seconds";
	this.style.display = "none";
	makeShape("box");
};

makeShape("box");