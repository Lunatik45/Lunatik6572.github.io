const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting)
		{
			entry.target.classList.add("show");
		} 
		// else {
		// 	entry.target.classList.remove("show");
		// }
	})
});
hiddenElements.forEach((element) => {observer.observe(element)});


// Code for bg
const re = /\b[0-9A-F]{6}\b/gi
const applyBgBtn = document.getElementById('apply_bg_btn');
const resetBgBtn = document.getElementById('reset_bg_btn');
const textAreaBg = document.getElementById('bg_color');
applyBgBtn.addEventListener('click', () => {
	const val = textAreaBg.value;
	if (val.match(re))
	{
		let htmlDom = document.getElementsByTagName('html');
		let bodyDom = document.getElementsByTagName('body');
		htmlDom[0].style.backgroundColor = '#' + val;
		bodyDom[0].style.backgroundColor = '#' + val;
		window.localStorage.setItem('bg_color', val);
	}
});
resetBgBtn.addEventListener('click', () => {
	let htmlDom = document.getElementsByTagName('html');
	let bodyDom = document.getElementsByTagName('body');
	htmlDom[0].style.backgroundColor = '#131316';
	bodyDom[0].style.backgroundColor = '#131316';
	window.localStorage.removeItem('bg_color');
	textAreaBg.value = '';
})

// Restore previous applied bg color
let prev_bg;
if (prev_bg = window.localStorage.getItem('bg_color'))
{
	let htmlDom = document.getElementsByTagName('html');
	let bodyDom = document.getElementsByTagName('body');
	htmlDom[0].style.backgroundColor = '#' + prev_bg;
	bodyDom[0].style.backgroundColor = '#' + prev_bg;
}

