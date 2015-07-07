/*
* Capture The Flag (CTF)
* controller of the game that will init the game and treat the loop of it
*/

var PIXI = require('pixi/pixi.js')

var init = function () {
	// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
	// which will try to choose the best renderer for the environment you are in.
	var renderer = new PIXI.WebGLRenderer(800, 600);

	// The renderer will create a canvas element for you that you can then insert into the DOM.
	document.body.appendChild(renderer.view);
	
	// You need to create a root container that will hold the scene you want to draw.
	var stage = new PIXI.Container();

	//creating coins
	var coins = []
	var coinTexture = new PIXI.Texture.fromImage('coin.png');
	for (i = 0; i < 10; ++i) {
		var coin = new PIXI.Sprite(coinTexture);
		coin.position.x = Math.random()*800;
		coin.position.y = Math.random()*600;
		coin.scale.x = 0.5;
		coin.scale.y = 0.5;
		coin.anchor.set(0.5,0.5)
		coins.push(coin);
		stage.addChild(coin);
	}

	// This creates a texture from a 'bunny.png' image.
	var bunnyTexture = PIXI.Texture.fromImage('bunny.png');
	var bunny = new PIXI.Sprite(bunnyTexture);

	// Setup the position and scale of the bunny
	bunny.position.x = 400;
	bunny.position.y = 300;

	//          bunny.scale.x = 2;
	//          bunny.scale.y = 2;

	bunny.anchor.set(0.5,0.5);

	// Add the bunny to the scene we are building.
	stage.addChild(bunny);

	//keyboard utility
	var keyboard = new KeyboardJS(true); //true for debug feedback

	//mouse event
	var clicked = false,	//to check if whether the mouse has been clicked or not
		mouseX,
		mouseY;
	document.addEventListener("click", function (evt) {
		if ( !clicked ) {
			//clicked = true;
			mouseX = evt.pageX;
			mouseY = evt.pageY;
		}
	});

	// kick off the animation loop (defined below)
	animate();
}

//main loop of the game
var animate = function () {

}

init();