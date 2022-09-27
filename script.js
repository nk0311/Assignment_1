"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'aqua') {
		document.body.style.color = 'orange';
	} else {
		document.body.style.color = 'aqua';
	}
}