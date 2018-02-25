const config = require('./config.json');
const Command = require('command');
module.exports = function tuwang(dispatch) {
const command = Command(dispatch)
let enabled = config.toggle;
let color = config.noColor;
let	cid = null
dispatch.hook('S_LOGIN', 1, (event) => {({cid} = event)});
//Chat channel example
/*dispatch.toClient('S_CHAT', 1, {
channel: 24,
uthorID: 0,
unk1: 0,
gm: 0,
unk2: 0,
authorName: '',
message: 'PINK'})*/

command.add('tuwang', () => {
enabled = !enabled
command.message(`Tuwang is now ${enabled ? 'enabled' : 'disabled'}.`)})

command.add('tucolor', () => {
color = !color
command.message(`No color is now ${color ? 'enabled' : 'disabled'}.`)})

dispatch.hook('S_DUNGEON_EVENT_MESSAGE', 1, (event) => {
if(!enabled) return;
if(event.message.includes('700102016'))
command.message('_________')
})

dispatch.hook('S_ACTION_STAGE', 3, (event) => {
if(!enabled) return;
if(event.target = cid)
if(event.skill === 1181680719 || event.skill === 1181680720)
if(event.templateId === 1001)
if(!color) command.message('<font color="#fc76d4">PINK</font>')
else command.message('PINK')
})

dispatch.hook('S_ACTION_STAGE', 3, (event) => {
if(!enabled) return;
if(event.target = cid)
if(event.skill === 1181680719 || event.skill === 1181680720)
if(event.templateId === 1002)
if(!color) command.message('<font color="#76fc78">GREEN</font>')
else command.message('GREEN')
})

dispatch.hook('S_ACTION_STAGE', 3, (event) => {
if(!enabled) return;
if(event.target = cid)
if(event.skill === 1181680719 || event.skill === 1181680720)
if(event.templateId === 1003)
if(!color) command.message('<font color="#fc7676">RED</font>')
else command.message('RED')
})

dispatch.hook('S_ACTION_STAGE', 3, (event) => {
if(!enabled) return;
if(event.target = cid)
if(event.skill === 1181680719 || event.skill === 1181680720)
if(event.templateId === 1004)
if(!color) command.message('<font color="#7676fc">BLUE</font>')
else command.message('BLUE')
})
}

