const textarea = document.getElementById("textarea1");
const biggerBtn = document.getElementById("bigger");
const mooBtn = document.getElementById("moo");

biggerBtn.addEventListener('click', () => textarea.style.fontSize = "24pt");
mooBtn.addEventListener('click', () => {
	textarea.value = textarea.value.toUpperCase();
	var sentences = textarea.value.split(".");
	textarea.value = sentences.join("-Moo.");
});

function fancifyText() {
	textarea.style.fontWeight = "bold";
	textarea.style.color = "blue";
	textarea.style.textDecoration = "underline";
}

function resetText() {
	textarea.setAttribute('style', '');
}