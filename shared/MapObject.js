/*
* Class that will inherit every type of object that we are going to put on the Map class.
*/
function MapObject (i, j, cellSide) {
	this.i = i
	this.j = j
}

MapObject.prototype.getCoord = function () {
	return {i: this.i, j: this.j}
}

module.exports = MapObject