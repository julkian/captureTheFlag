
function Map (width, height, cellSide) {
	this.width = width
	this.height = height
	this.rows = width/cellSide
	this.columns = height/cellSide
	this.map = new Array(this.rows)
	for(var i = 0; i < this.rows; ++i) {
		this.map[i] = new Array(this.columns)
		for(var j = 0; j < this.columns; ++j) {
			this.map[i][j] = { pos: {x: cellSide*i, y: cellSide*j} }
		}
	}
	this.cellSide = cellSide
}

Map.prototype.getCell = function (i, j) {
	if ( i >= 0 && i < this.rows)
		if ( j >= 0 && j < this.columns)
			return this.map[i][j]
	return null
}

Map.prototype.setCell = function (i, j, content) {
	if ( i >= 0 && i < this.rows) {
		if ( j >= 0 && j < this.columns) {
			this.map[i][j].object = content
			return true
		}
	}
	return null
}

Map.prototype.getCellSide = function () {
	return this.cellSide
}

//generates a stringified object that only contains the cells that are occupied for some object
Map.prototype.generatePacket = function () {
	var packet = {}
	packet.rows = this.rows
	packet.columns = this.columns
	packet.width = this.width
	packet.height = this.height
	packet.occupiedCells = []
	for (var i = 0; i < this.rows; ++i) {
		for (var j = 0; j < this.columns; ++j)
			if (this.map[i][j].object) {		//if the cell is occupied
				packet.occupiedCells.push(this.map[i][j].object)
			}
	}
}

module.exports = Map
