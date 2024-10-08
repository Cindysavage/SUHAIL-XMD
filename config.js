const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250171691128";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_21_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldWWHhlMllSZ0wzL1I4SDg1ckVvOVNLdGRTeGpnQ3JpcmlDZDMzdjczSUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtyeWlmM2hCUkw2WENRWkk1VFlCNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQyZDc2NzMtYWIxNC00MTBmLTg5NGYtYTFmY2ViYWUzYzE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDI1MSxcbiAgICAgIDMyLFxuICAgICAgMjI5LFxuICAgICAgMzQsXG4gICAgICAxMDUsXG4gICAgICAyMDEsXG4gICAgICAzLFxuICAgICAgMTQ4LFxuICAgICAgMTUyLFxuICAgICAgNzEsXG4gICAgICAyNDgsXG4gICAgICAyMzksXG4gICAgICAxMDcsXG4gICAgICAxMDUsXG4gICAgICAxODgsXG4gICAgICAyMjksXG4gICAgICAyMjQsXG4gICAgICAyMzMsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTMzLFxuICAgICAgMTIwLFxuICAgICAgMTg1LFxuICAgICAgMTUwLFxuICAgICAgMzEsXG4gICAgICAyMzgsXG4gICAgICA5MixcbiAgICAgIDE1MSxcbiAgICAgIDgxLFxuICAgICAgMTQxLFxuICAgICAgMTE2LFxuICAgICAgODIsXG4gICAgICAyMzAsXG4gICAgICA0MyxcbiAgICAgIDE3NyxcbiAgICAgIDIwNSxcbiAgICAgIDEzNyxcbiAgICAgIDE1MCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5HQ1k1V01FXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU3MTY5MTEyODo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM1OTE0NjQyNzg0MzI0OjY5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfkprwn5G4IFF1ZWVuIFRpZHnwn6aL8J+SlVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iRzFwRUdFTGpLa3JnR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGFkQkFhbzBHeUJLZ2xRMUZRcEE5dFZJcktHbHZLREozam1XRWxwTWJsQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlN0REVlNYT2pTSDJCcjg1L2VhaGlweFdqNjJObnUxU2FxMGtrSmpZWlc4S0NhTXc4dlk0dGVJbDZUMjdUd21jVVFPZGdmU2FKT1k0NlFqVldXanBCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrUWJhMEU5U2VMaUc2MDdvL2RxOHZaRmVwWDJXdGlZWFZFNVpkbDg3SGY2aGg5ZnVyZUR0cGFWcm9lNmRVQVlmenJtVC9jY1BmeHp6Q3pJaVJxVHFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU3MTY5MTEyODo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MzU3NjkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2R5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqWVM3dFl5ZlZyZ1FVQTNKejY0REowZ1RLeFZOVHhVOExKRG13MXVkcFZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDc2ODIzOTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyODMxNTc3MjQ0OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "💚👸Queen tidy🦋💕",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
