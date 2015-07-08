var port = process.env.PORT || 9000
var io = require('socket.io')(port)

var Player = require('../shared/Player.js')
var Obstacle = require('../shared/Obstacle.js')
var Map = require('../shared/Map.js')
var Flag = require('../shared/Flag.js')

//vars for the game
var map = new Map(800, 600, 50) //800x600 with a cellSide of 50
var nPlayers = 0

var initGame = function () {
	//creating obstacles
	for (var i = 7; i < 9; ++i)
		for (var j = 5; j < 7; ++j)
			map.setCell(i, j, new Obstacle(i, j, map.getCellSide()))
	//creating flags
	
}
initGame()

for (var i = 0; i < map.rows; ++i) {
	for (var j = 0; j < map.columns; ++j) {
		console.log(map.getCell(i, j))
	}
	console.log('')
}

io.on('connection', function (socket) {
	console.log('connection id', socket.id)
	if (nPlayers < 2) {
		if (nPlayers === 0) {

		} else if (nPlayers === 1) {

		}
		++nPlayers		
	}
	socket.emit('getMap')
})