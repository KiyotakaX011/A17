const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();

// Default values for global variables
global.available = process.env.AVAILABLE || true;
global.autoReadAll = process.env.AUTO_READ_ALL || false;
global.antitags = process.env.ANTITAGS || true;

// Auto functioner
global.autoTyping = process.env.AUTO_TYPING || false;
global.autoRecord = process.env.AUTO_RECORD || false;
global.groupevent = process.env.GROUPEVENT || false;
global.statusseen = process.env.STATUSSEEN || true;
global.autoreadgc = process.env.AUTOREADGC || true;


// Auth information
global.pairNumber = "917819037576";                         // Add your paining number with country code example "916297175943"; 
global.port = process.env.PORT || "10000";
global.auth = process.env.AUTH || "Pairing";                // Auth mode OR/Pairing.
global.sessionFile = process.env.SESSION_FILE || "A17-SESSION";
global.mongodb = process.env.MONGODB || "mongodb+srv://Rohit:<password>@cluster0.i2z06nv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";                 // Mongodb url.
global.website = "https://www.exenoz.tech"; 
global.github = "https://github.com/Kai0071";


// Default prefix
global.prefa = process.env.PREFIX ? process.env.PREFIX.split(",") : ["!"];


// Owner information
global.Owner = process.env.OWNER ? process.env.OWNER.split(",") : ["917819037576,918767585726"];
global.OwnerNumber = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(",") : ["917819037576,918767585726"];
global.ownertag = process.env.OWNER_TAG ? process.env.OWNER_TAG.split(",") : ["917819037576,918767585726"];
global.OwnerName = process.env.OWNER_NAME || "Rohit";
global.BotName = process.env.BOT_NAME || "Neha-Sama";
global.packname = process.env.PACK_NAME || "Oneesan ✨";
global.author = "Neha-Sama";
global.BotSourceCode = "https://github.com/KiyotakaX011/A17";
global.SupportGroupLink = "https://chat.whatsapp.com/GhRGdwfaMVDCoeAdzILfl";


//
global.openAiAPI = process.env.OPENAI_API || "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";
global.location = process.env.LOCATION || "West Bengal, India";
global.reactmoji = process.env.REACT_MOJI || "✨";
global.themeemoji = process.env.THEME_EMOJI || "👾";
global.vidmenu = { url: process.env.VID_MENU_URL || 'https://youtu.be/mtCbMn-gkOw?si=Kw0a2z-LKSGdAzX2' };


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.them = "https://youtu.be/mtCbMn-gkOw?si=Kw0a2z-LKSGdAzX2";


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


// Messages
global.mess = {
  jobdone: 'Here you go ototo ✨',
  useradmin: 'Baka! only group admin can use this🐸',
  botadmin: 'I am not *admin* to execute this🥀',
  botowner: 'Only Ototo can use this command, Baka!',
  grouponly: 'Use this command for *Groups*, Baka!🥀',
  privateonly: 'Use this command for *Private Chat*, Baka!🥀',
  botonly: 'Only I can use this command!🐸',
  waiting: 'Waitu overthinking...',
  nolink: 'Please provide me *link*, Baka!',
  error: 'Brain not braining!',
  banned: 'You are banned by ototo!😝',
  bangc: 'This gc is *banned* !🥀',
  nonsfw: 'Dont be pervert in front of Onee-san'

}
