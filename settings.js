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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FmUTNpOE5UKzFpYUovOHNrOERnMGRGd3k2Z3hRUjY0d1V3MHdMRFBHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHVXL1FCNWVOTm5VbjdVY0VWc3pOSjhFbW5tZjZseDlIT2lDWFdyMVQwOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SXdFRUt2MG1qTkpERHoxTE9jdGplci8ydGF5SkFaNXhYZGhDay9DZms4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwR2NJODdkNlpRQ3dTY2pOVXhTb2NiVXBqajJqdGNTVElGR29zcXpQVW5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBZExIVFBYb0Mxa1ArMCtjOUJFN2JPSy9QNDhVR0c3WEMwbC8wTXhySDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5BMis0RGhTNFlMMFFmd1QvT0JvR0xVMHM2aXkwdEptNVVycFJ5MG05VU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJNTVc0Y0xQd0ZSY3dBZ0NIS2podW9DWlVLU1VTTlVWUFIwdW5OSURGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVl5ZU51Tit2QTlvZjc1ZXFhS0tSZDNqRTFBNHNhV0E5eWJvdnk0cEt3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1sTHpXNCtvSlM3bTZVK1JBWmNoL1ZpVmhLa0FPMkp5WERpaHRVNUVBSENTWWVIVnVIdFBBNGVReVhnWE8xM2RmeitqZE5iS21ydERmcXVVTWhTeUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJiVWc5SmdZeHJOUkNLNEtjaW5RNHJqMzlnOVVkb1QvN3pyQy9vZHNBVWVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTE3MzQ2NzAyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVDOTEyRjJDMEJBODZCQjg3OEM1N0REODIwN0I1MzEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjUyNDIwMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTczNDY3MDI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNUMxNEI1QjJGQkVFNjYxNUNGMjA4NkE0OEM4MkVGMCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2NTI0MjAwfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik01QVc5MThSIiwibWUiOnsiaWQiOiI5ODkxNzM0NjcwMjg6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvKRcblxuXG7vvKFcblxuXG7vvLJcblxuXG7vvKtcblxuXG5cbu+8s1xuXG5cbu+8tVxuXG5cbu+8slxuXG5cbu+8uVxuXG5cbu+8oSIsImxpZCI6IjEzMDA0MzY5MDg5NzQyMTozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWVEaVZZUW1JcXN5Z1lZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSnlqaDFHd1YyTVlhbTJMRTFsY0FaODRtYWV6TVBZSy8wZnlsSzFJRWYxdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidG5aY2NkZjZDcHdqS243NjdwT1Qva0Q2VjB3Y3NtRXhKeWtUOGhQeEpBSFpZekpRWlQrVUxYQjB6TXIrYTI2VFFZaS8zdTE4ODQvSFN6ei96TlNtQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImkxcjgwYk9oOTRUdm9mMUhGNUZQVmVJZ0xhWDVQK203aks1NnY1Nk1yMWNGbS83czE5ZFRjMFRwVHdJd3BCNnlWQjdiTDhNQ2ZGMm5hLzhsQmdWd0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMwMDQzNjkwODk3NDIxOjNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNjbzRkUnNGZGpHR3B0aXhOWlhBR2ZPSm1uc3pEMkN2OUg4cFN0U0JIOWMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZ2dOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NjUyNDE5NywibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFERU4ifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

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
