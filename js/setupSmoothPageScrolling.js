function setupSmoothPageScrolling() {
	document.getElementById('title-link').onclick = function(e) {
		e.preventDefault();
		document.getElementById('home').scrollIntoView({'behavior':'smooth'});
	};
	document.getElementById('home-link').onclick = function(e) {
		e.preventDefault();
		document.getElementById('home').scrollIntoView({'behavior':'smooth'});
	};
	document.getElementById('aboutus-link').onclick = function(e) {
		e.preventDefault();
		document.getElementById('aboutus').scrollIntoView({'behavior':'smooth'});
	};
	document.getElementById('contact-link').onclick = function(e) {
		e.preventDefault();
		document.getElementById('contact').scrollIntoView({'behavior':'smooth'});
	};
	document.getElementById('product-link').onclick = function(e) {
		e.preventDefault();
		document.getElementById('product').scrollIntoView({'behavior':'smooth'});
	};
	document.getElementById('footer-link').onclick = function(e) {
		e.preventDefault();
		document.getElementById('footer').scrollIntoView({'behavior':'smooth'});
	}
	document.getElementById('hamburger').onclick = function(e) {
		var c = document.getElementById('three-fifths').style.visibility;
		document.getElementById('three-fifths').style.visibility = (c === 'visible') ? 'hidden' : 'visible';
	};
};