/* Requiring variables */
var serverURL = 'localhost:9000'
var socket = require('socket.io-client')(serverURL)
var keyboard = require('../utility/Keyboar.js')
var Hero = require('../shared/Hero.js')
var Map = require('../shared/Map.js')

/*Objects on the game*/
var hero = new Hero()
var map = new Map(800, 600, 50) //map of 800x600 and cellSide 50

//creating renderer
var renderer = new PIXI.WebGLRender(800, 600)
