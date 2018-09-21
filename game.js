import './js/libs/weapp-adapter'
window.p2 = require('./js/libs/p2')
window.PIXI = require('./js/libs/pixi')
window.Phaser = require('./js/libs/phaser-split')

// 定义全局常量
window.WIDTH = 750  // 游戏宽度
window.SCALE = WIDTH / canvas.width   // 游戏宽度/canvas宽度
window.HEIGHT = canvas.height * SCALE // 游戏高度

// go: Global Oject 用于在 state 之间共享数据和方法
window.go = {
  game: null,         // 游戏实例
  usrInfo: null,      // 玩家信息
  opponentInfo: null, // 对手信息
  common: require('js/common'),       // 公共函数
  server: null,       // 与服务器的交互
  launchRoomId: null, // 进入主菜单时需要加入的房间Id
  battle: null,       // 对战状态  
}

// 初始化游戏
const config = {
  width: WIDTH,
  height: HEIGHT,
  renderer: Phaser.CANVAS,  // 渲染器，使用canvas
  canvas: canvas,           // 将游戏绘制在adapter为我们创建的canvas上  ？？
}

// 创建游戏
const game = new Phaser.Game(config)
go.game = game

//注册游戏场景
game.state.add('start', require('./js/states/start'))   // 添加start游戏场景
game.state.add('menu', require('./js/states/menu'))  // 添加这一行
game.state.start('start')                            // 启动start游戏场景
