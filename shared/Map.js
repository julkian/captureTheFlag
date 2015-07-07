
function Map (width, height, cellSide) {
	this.rows = width/cellSide
	this.columns = height/cellSide
	this.positions = new Array(rows)
	for(var i = 0; i < this.rows; ++i) {
		this.positions[i] = new Array(this.columns)
		for(var j = 0; j < this.columns; ++j) {
			this.positions[i][j] = {x: cellSide*i, y: cellSide*j}
		}
	}
	this.cellSide = cellSide
}

Map.prototype.getCell = function (i, j) {
	if ( i > 0 && i < this.rows)
		if ( j > 0 && j < this.columns)
			return this.positions[i][j]
	return null
}

/* Maybe not needed
Map.prototype.getCellX = function (i) {
	return this.cellSide*i
}

Map.prototype.getCellY = function (j) {
	return this.cellSide*j
}
*/
module.exports = Map