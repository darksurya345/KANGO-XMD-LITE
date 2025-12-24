//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9QL00wUm8zNTNDSVRxNEw1WHpBcG9IWVBaQVYyQ2pLR2JrU3VUcWlIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUY2UUhBWE1PTGxRcUhWcjJQOWlsZVpmRFpZRTdsSXRCSW9wTWVhS0RDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRDVabXZJRlgyWWhwKzFsZFBPaVJoYVV6ZE5OYkcrUUFaSGhuV05wNW1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaaDBwVEpRZkxGdE9lY0RidHBiNGx2eld2dGovZnRtemRuYXV6bUlvNm40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllER016bDNiQStIUHR4d3cyY2pCN2dlUkZnbGhxZklZOU5rSVNJQUg1Rmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8vUlowM1I5U1lSZXlXNUhjSVRnc3YwekRKeTUvZ1BvZWhYVlEwakF4blk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0doTklZUzZ4UUtDMDFERFZTa0gxUTFyb2N6VXdTczhWZ3A3alk4L3lWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZvbUxUWSs5NHV4UEovVk5qWlFTbkdseEFtaHZGYWh0RGNOY0lwTzRFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLSUE3eWZMNThVaDdNK1BBZ0dVbUd2NXBGa2dURnR1dDR6QmZKZm9TbGg1RGlMVmpJbFZOUXNTMFMvWElGNEJLQ3hqaE5GMU15aXZ1SE54NUdjdUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiZXJNTEIwbk83UkpNdWNuWERPcHdIbzN6bmI3QkRBaXVtek83TzZFb0dxZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxNzM0NjcwMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MUIwMTYxRDQ4NkMyMjhERTlGQUM3MUE5QzMxNENEIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY1OTY3OTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTE3MzQ2NzAyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUyNjVGQkIwODhDNDQ0NjE5MUYyRTIxNkU3REJCMjMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjU5Njc5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTczNDY3MDI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTNFQkVBMTc4MDk1OENFOTU0REI4NzRENTUzQ0RCNiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2NTk2ODAwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxNzM0NjcwMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1QzhGNkQ3RDFEREYxQjJFQzE0MjVBN0UzMjU1MTgyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY1OTY4MDF9XSwibmV4dFByZUtleUlkIjo4MTQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTQsImFjY291bnRTeW5jQ291bnRlciI6MywiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWk1BTkFZWE0iLCJtZSI6eyJpZCI6Ijk4OTE3MzQ2NzAyODo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+8pFxuXG5cbu+8oVxuXG5cbu+8slxuXG5cbu+8q1xuXG5cblxu77yzXG5cblxu77y1XG5cblxu77yyXG5cblxu77y5XG5cblxu77yhIiwibGlkIjoiMTMwMDQzNjkwODk3NDIxOjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcURpVllRcjhHd3lnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKeWpoMUd3VjJNWWFtMkxFMWxjQVo4NG1hZXpNUFlLLzBmeWxLMUlFZjF3PSIsImFjY291bnRTaWduYXR1cmUiOiIxaGJmcVk4OVA5aU0xZjFLVFBXY21HYXNPWHY1RWsxRzRPVlpnRGJFSnc1VW9GejdzekFNNG1NeUZ5TDdyTTl0aEh6dy9GT2ZIWUREYnNBSUxhbXBBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXFEQWx4TjA2d01mNUJkaWlrV09MMVR2SDBSV0xQRmRIUitjck9qL2xGTFp4bFBPamZ4ODh2SEdkbnd6S0pnOXlnRnI0cWVoRnBmYkx5bE50ZVJDQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzAwNDM2OTA4OTc0MjE6NkBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2NvNGRSc0ZkakdHcHRpeE5aWEFHZk9KbW5zekQyQ3Y5SDhwU3RTQkg5YyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2NTk2Nzk2LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlJUyJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '989173467028' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['917797099719', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'DARK SURYA' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
