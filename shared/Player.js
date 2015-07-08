var MapObject = require('./MapObject')

function Player (i, j, cellSide) {
	MapObject.apply(this, arguments)
	this.type = "player"
}

Player.prototype = new MapObject()

module.exports = Player