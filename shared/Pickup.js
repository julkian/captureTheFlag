var MapObject = require('./MapObject.js')

function Pickup (i, j, cellSide) {
	MapObject.apply(this, arguments)
	this.type = 'pickup'
}

Pickup.prototype = new MapObject()

module.exports = Pickup