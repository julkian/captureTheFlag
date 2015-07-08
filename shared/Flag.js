var Pickup = require('./Pickup.js')

function Flag(i, j, cellSide, owner) {
	Pickup.apply(this, arguments)
	this.type = 'flag'
	this.owner = owner
}

Flag.prototype = new Pickup()

module.exports = Flag