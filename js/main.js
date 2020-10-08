new hoverEffect({
	parent: document.querySelector('.distortion'),
	intensity: 0.3,
	image1: 'images/01.png',
	image2: 'images/02.png',
	displacementImage: 'images/diss.png',
	imagesRatio: 380 / 300,
});

//Text
gsap.from('h1', {
	opacity: 0,
	y: 300,
	duration: 2,
});

gsap.from('h2', {
	opacity: 0,
	x: 500,
	duration: 2.8,
});

gsap.from('h3', {
	opacity: 0,
	y: 300,
	duration: 2.5,
});

gsap.from('.caption', {
	opacity: 0,
	y: 300,
	duration: 2.8,
});

//Sponsor

gsap.from('.sponsor img', {
	opacity: 0,
	y: 150,
	duration: 2.8,
});

gsap.from('.sponsor p', {
	opacity: 0,
	y: 150,
	duration: 2.8,
});

//Distortion

gsap.from('.distortion', {
	opacity: 0,
	y: 150,
	duration: 2.8,
});

gsap.from('nav', {
	opacity: 0,
	y: 50,
	duration: 2.8,
});

//Overlay
gsap.to('.first', {
	opacity: 0,
	y: -1000,
	duration: 2,
});
gsap.to('.second', {
	opacity: 0,
	y: -1000,
	duration: 3,
});
gsap.to('.third', {
	opacity: 0,
	y: -1000,
	duration: 4,
});
