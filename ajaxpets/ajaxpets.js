/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function () {

	window.addEventListener("load", init);

	/**
	 * TODO: What do we need to initialize?
	 */
	function init() {
		var radios = document.querySelectorAll('input[name=animal]');
		radios.forEach(element => {
			element.addEventListener("change", makeRequest);
		});
	}

	/**
	 * TODO: Fetch data from the CSE 154 ajax pets api!
	 */
	function makeRequest() {
		var value = document.querySelector('input[name=animal]:checked').value;
		fetch("https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php?animal=" + value)
		.then(checkStatus)
		.then(res => res.text())
		.then(processData)
		.catch(handleError);
	}

	/**
	 * TODO: Implement any other functions you need
	 */
	function processData(data)
	{
		console.log("Data arrived...");
		var links = data.split("\n");
		const picDiv = document.getElementById("pictures");
		picDiv.innerHTML = "";

		for (var i = 0; i < links.length; i++)
		{
			var img = document.createElement("img");
			img.src = links[i];
			picDiv.appendChild(img);
		}
	}

	function handleError(error)
	{
		console.log(error);
	}

	/* ------------------------------ Helper Functions  ------------------------------ */

	/**
	 * Helper function to return the response's result text if successful, otherwise
	 * returns the rejected Promise result with an error status and corresponding text
	 * @param {object} res - response to check for success/error
	 * @return {object} - valid response if response was successful, otherwise rejected
	 *                    Promise result
	 */
	async function checkStatus(res) {
		if (!res.ok) {
			throw new Error(await res.text());
		}
		return res;
	}

	/**
	 * Returns the element that has the ID attribute with the specified value.
	 * @param {string} id - element ID
	 * @return {object} DOM object associated with id.
	 */
	function id(id) {
		return document.getElementById(id);
	}

	/**
	 * Returns the first element that matches the given CSS selector.
	 * @param {string} query - CSS query selector.
	 * @returns {object[]} array of DOM objects matching the query.
	 */
	function qs(query) {
		return document.querySelector(query);
	}

	/**
	 * Returns the array of elements that match the given CSS selector.
	 * @param {string} query - CSS query selector
	 * @returns {object[]} array of DOM objects matching the query.
	 */
	function qsa(query) {
		return document.querySelectorAll(query);
	}
})();
