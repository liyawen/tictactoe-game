// 公共函数

const common = {

  // 获取当前场景
  curState: () => go.game.state.getCurrentState,

  // 绘制按钮
  addBtn: ({ x, y, callback, context, text }) => {
    // 向当前场景添加按钮
    const btn = common.curState().add.button(x, y, 'btn', callback, context, 0)
    // 创建文本标签
    const label = common.curState().make.text(btn.width / 2, btn.height / 2, text, {
      font: "36px", fill: "#ff5420"
    })
    // 将锚点定位在标签中间
    label.anchor = { x: 0.5, y: 0.5 }
    // 将标签加到按钮中
    btn.addChild(label)
    return btn
  },

}

module.exports = common