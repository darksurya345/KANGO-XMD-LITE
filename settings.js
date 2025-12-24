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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0czR2FLblQ4MXNzZ0tGeElmajNFUW1VSnU2RWRacEhDOXdZR2ZIWjMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3NFaVpSWXR3WUNWM0gyQ2RjWCtCNm9mLzVDTmZpYW9zVFBmdUFkc2Rnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTVRyd2hjbmV2WmtBV3IvU3ZkVmdTdmRER0oxMlEyQlE5UDF1aS9icjB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFNE1mcCsrdjkwcGFQa2grd1A5MzN2eDhiQTBGbkRJanlubm1iQ0w1bG1rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDUFYvMEtLWDFMY3RsZU90MmJuQnY5dlk3WVNFK0JaTlpMNVFocmJYV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5HQXpKK2dFTzJqeEVMdEh0R00wQ29nY3UrcWFoTXZWbEQ5SFBFWVRUa1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZsTlRJMGNGZlV0Y1VVK1JWeGNGTEpodWJpSkIwbmcvTXZNK0xQdmUwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXk3N0N0NlpqNGdKVFArSkVBN3hjU3FuNFZUOHlMZTcyNUc0SENOTzVVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhwQkFkR3BiVWVoK3JUQkRlMFdSK29kRy9UbW5EWGx6YjA4cmR0ZlhjR1BBazRjcVNCTDQrSm9LcUhkVExnbll5Nk1TOUJqV3A0ejQ2SGJnTm9aM2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJGdk1abVFka2psd2JHWkw2d1Ria3l3WHdTTndmT1ZxQnkzdlNPVnNjV3NZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0OTEyMTEyNjk5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUwNDFBMTM1MTA5MzAxQkFGNDJGRTBEMzIzNzA2MTUiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjU2MTI2NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjQ5MTIxMTI2OTk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTA3NkJDQjk0MENEM0I1REE2RDBCNTQzM0UwNjY2MCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2NTYxMjY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDkxMjExMjY5OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MDZCQkZFQzg4ODk5NTE0N0JBMjAxOTJFMTA5RUZEIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY1NjEyNjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0OTEyMTEyNjk5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU4RDY0Rjc1NzE3MzY3NjVDNEI3QTY4Q0RGQzQ2REIiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjU2MTI2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjQ5MTIxMTI2OTk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTZGQjRENkM2RkEyQTlGQTA1MkQxNDk2QTJBRjQ1RCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2NTYxMjY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDkxMjExMjY5OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1RDRBRDBFRTAwMDM5RDVERkFEMTY3RkRFQjU0QTJCIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY1NjEyNzB9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MiwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNTY5OTdIQlkiLCJtZSI6eyJpZCI6IjI0OTEyMTEyNjk5NzozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRhcmsiLCJsaWQiOiI3MDA5NDU3MDkxNzkxNDozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS254bVBzSEVPU3Jyc29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidVZGUW1xdnZ5dXFVcGd2SUJTTTJlN3ZBZDFmTGMyYWVDeG12Q1lOWnozYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN3JXUWttNVNvRCtSQTJiRmVlTmJYaFRmY1Y1WnI3STlmbEk1SFQ2MUhjc0JyMjNoeG0xUTArZUYrOHp3VmRyY09rZVNJdTdUZ1JIbGJOWjA3UzR2Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6InEyOTd6OW1NU2JrZjlaNEk2WXg2d2tITnV2ME5WeFZocGpyZXpheUdiR1oweU9wWkVwT0NoMVJWL2JsUllYZjY5VllsNVE4R24rc0JjM2VIWHZ2V2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNzAwOTQ1NzA5MTc5MTQ6M0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmxSVUpxcjc4cnFsS1lMeUFVak5udTd3SGRYeTNObW5nc1pyd21EV2M5MyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2NTYxMjY0LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcxOCJ9' 
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
