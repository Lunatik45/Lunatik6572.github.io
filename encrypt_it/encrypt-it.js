/*
 * Starter file 
 */
(function () {
	"use strict";

	/**
	 * The starting point in our program, setting up a listener
	 * for the "load" event on the window, signalling the HTML DOM has been constructed
	 * on the page. When this event occurs, the attached function (init) will be called.
	 */
	window.addEventListener("load", init);

	/**
	 * TODO: Write a function comment using JSDoc.
	 */
	function init() {
		// Note: In this function, we usually want to set up our event handlers
		// for UI elements on the page.
		console.log("Window loaded!");
		document.getElementById("encrypt-it").addEventListener("click", handleClick);
	}

	// Add any other functions in this area (you should not implement your
	// entire program in the init function, for similar reasons that
	// you shouldn't write an entire Java program in the main method).
	function handleClick() {
		console.log("Button clicked!");
		const txt = document.getElementById("input-text").value;
		document.getElementById("result").innerText = shift(txt);
	}

	function shift(txt) {
		var splitTxt = txt.toLowerCase().split("");
		for (var i = 0; i < splitTxt.length; i++) {
			if (splitTxt[i] == "z") {
				splitTxt[i] = "a";
			} else if (splitTxt[i] >= 'a' && splitTxt[i] < 'z') {
				splitTxt[i] = String.fromCharCode(splitTxt[i].charCodeAt(0) + 1);
			}
		}
		return splitTxt.join("");
	}
})();
