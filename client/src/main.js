/* Requiring variables */
var serverURL = 'localhost:9000'
var socket = require('socket.io-client')(serverURL)
var keyboard = require('../../utility/Keyboard.js')
var Map = require('../../shared/Map.js')

/*Objects on the game*/
var map = new Map(800, 600, 50) //map of 800x600 and cellSide 50

//creating renderer
var renderer = new PIXI.autoDetectRenderer(800, 600)

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container();

//charging all textures
var p1Texture = PIXI.Texture.fromImage('./img/finn.png')
var p2Texture = PIXI.Texture.fromImage('./img/jake.png')
var flagTexture = PIXI.Texture.fromImage('./img/burrito.png')
var obstacleTexture = PIXI.Texture.fromImage('./img/rock.png')

var player 

socket.on('initClient', function (packet) {
	console.log('yoyo wasa men')
	packet = JSON.parse(packet)
	var cellSide = map.getCellSide()
	packet.occupiedCells.forEach(function (object) {
		var sprite = null
		switch(object.type) {
			case 'obstacle':
				sprite = new PIXI.Sprite(obstacleTexture)
			break
			case 'flag':
				sprite = new PIXI.Sprite(flagTexture)
			break
			case 'player1':
				sprite = new PIXI.Sprite(p1Texture)
			break
			case 'player2':
				sprite = new PIXI.Sprite(p2Texture)
			break
		}
		sprite.position = { x:object.i*cellSide, y: object.j*cellSide }
		console.log('type ' + object.type + ' position : (' + sprite.position.x + ', ' + sprite.position.y + ')')
		stage.addChild(sprite)
	})
	console.log(stage)
})

// kick off the animation loop (defined below)
animate();

function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    // move bunny using keyboard keys
    /*
    var hasMoved = bunny.moveUsingInput()
    if (hasMoved) {
      socket.emit('update_position', bunny.pos)
    }
    */

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}