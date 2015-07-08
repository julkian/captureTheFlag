var MapObject = require('./MapObject')

function Obstacle (i, j, cellSide) {
	MapObject.apply(this, arguments)
	this.type = "obstacle"
}

/* ECMAScript 5
Obstacle.prototype = Object.create(MapObject.prototype);
Obstacle.prototype.constructor = Obstacle;
*/

Obstacle.prototype = new MapObject()

module.exports = Obstacle;