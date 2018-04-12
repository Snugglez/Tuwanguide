const config = require('./config.json')
const Command = require('command')
module.exports = function tuwang (dispatch) {
  const command = Command(dispatch)
  let enabled = config.enabled
  let color = config.color
  let attachedHooks = []
  let hooks = {
    'S_DUNGEON_EVENT_MESSAGE': {
      'version': 1,
      'function': dungeonEventHandler
    },
    'S_ACTION_STAGE': {
      'version': 4,
      'function': actionStageHandler
    }
  }

  command.add('tuwang', () => {
    if (enabled) disable()
    else enable()
    command.message(`Tuwang is now ${enabled ? 'enabled' : 'disabled'}.`)
  })

  command.add('tucolor', () => {
    color = !color
    command.message(`Color is now ${color ? 'enabled' : 'disabled'}.`)
  })

  function enable () {
    for (let key in hooks) {
      let hook = hooks[key]
      attachedHooks.push(dispatch.hook(key, hook.version, hook.function))
    }
    enabled = true
  }

  function disable () {
    for (let hook of attachedHooks) dispatch.unhook(hook)
    enabled = false
  }

  function dungeonEventHandler (event) {
    if (event.message.includes('700102016')) { command.message('_________') }
    // 700102017 for the start message
  }

  function actionStageHandler (event) {
    if (!(event.skill === 1181680719 || event.skill === 1181680720)) return
    switch (event.templateId) {
      case 1001:
        if (color) command.message('<font color="#fc76d4">PINK</font>')
        else command.message('PINK')
        break

      case 1002:
        if (color) command.message('<font color="#76fc78">GREEN</font>')
        else command.message('GREEN')
        break

      case 1003:
        if (color) command.message('<font color="#fc7676">RED</font>')
        else command.message('RED')
        break

      case 1004:
        if (color) command.message('<font color="#7676fc">BLUE</font>')
        else command.message('BLUE')
        break
    }
  }

}
