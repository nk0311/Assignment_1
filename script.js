"use strict";

function changeColor() {

	
	let color = document.body.style.color;
	if (color === 'aqua') {
		document.body.style.color = 'yellow';
	} 
	else if(color === 'yellow')
	{
		document.body.style.color = 'black';
	}
	else  {
		document.body.style.color = 'aqua';
	}
}