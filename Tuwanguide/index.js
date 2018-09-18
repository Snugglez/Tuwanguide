const config = require('./config.json')
module.exports = function tuwang (d) {
let enabled = config.enabled
let color = config.color

d.command.add("tu", {
on() {
enabled = true
d.command.message(`[enabled]`)
},
off() {
enabled = false
d.command.message(`[disabled]`)
},
color() {
color = !color
d.command.message(`Color is now [${color ? 'enabled' : 'disabled'}]`)
},
$default() {
d.command.message("Command list")
d.command.message(" ")
d.command.message("tu on/off")
d.command.message("--Toggles tuwanguide on or off")
d.command.message(" ")
d.command.message("tu color")
d.command.message("--Toggles color mode on or off")
}
})

d.hook('S_DUNGEON_EVENT_MESSAGE', 2, (e) => {
if (e.message.includes('700102016')) { d.command.message('_________') }
// 700102017 for the start message
})

d.hook('S_ACTION_STAGE', (d.base.majorPatchVersion >= 75) ? 8 : 7, (e) => {
if (!(e.skill.id === 1103 || e.skill.id === 1104)) return
switch (e.templateId) {
case 1001:
if (color) d.command.message('<font color="#fc76d4">PINK</font>')
else d.command.message('PINK')
break
case 1002:
if (color) d.command.message('<font color="#76fc78">GREEN</font>')
else d.command.message('GREEN')
break
case 1003:
if (color) d.command.message('<font color="#fc7676">RED</font>')
else d.command.message('RED')
break
case 1004:
if (color) d.command.message('<font color="#7676fc">BLUE</font>')
else d.command.message('BLUE')
break
}
})
}
