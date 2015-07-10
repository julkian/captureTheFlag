var port = process.env.PORT || 9000
var io = require('socket.io')(port)

var Player = require('../shared/Player.js')
var Obstacle = require('../shared/Obstacle.js')
var Map = require('../shared/Map.js')
var Flag = require('../shared/Flag.js')

//vars for the game
var map = new Map(800, 600, 50) //800x600 with a cellSide of 50
var nPlayers = 0
var p1Id = p2Id = null

var initGame = function () {
	//creating obstacles
	for (var i = 7; i < 9; ++i)
		for (var j = 5; j < 7; ++j)
			map.setCell(i, j, new Obstacle(i, j, map.getCellSide()))
	//putting players
	//p1
		map.setCell(8, 0, new Player(8, 0, map.getCellSide(), 1))
	//p2
		map.setCell(7, 11, new Player(7, 11, map.getCellSide(), 2))
	//creating flags
	//p1 flag
		map.setCell(7, 0, new Flag(7, 0, map.getCellSide(), 'player1'))
	//p2flag
		map.setCell(8, 11, new Flag(8, 11, map.getCellSide(), 'player2'))
}
initGame()

console.log('connected to port', port, 'and game started')

io.on('connection', function (socket) {
	console.log('connection id', socket.id)
//	if (nPlayers < 2) {
		var packet = map.generatePacket();
		if (nPlayers === 0) {
			p1Id = socket.id
			packet.player = 'player1'	//to tell the client if is player 1 or 2
		} else if (nPlayers === 1) {
			p2Id = socket.id
			packet.player = 'player2'	//to tell the client if is player 1 or 2
		}
		packet = JSON.stringify(packet)
		socket.emit('initClient', packet)
		++nPlayers
//	}
})