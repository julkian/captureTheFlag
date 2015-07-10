var MapObject = require('./MapObject')

function Player (i, j, cellSide, playerNum) {
	MapObject.apply(this, arguments)
	this.type = "player" + playerNum
}

Player.prototype = new MapObject()

module.exports = Player