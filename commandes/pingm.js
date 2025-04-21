const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { njabulo } = require(__dirname + "/../njabulojb/njabulo");
const os = require("os");
const moment = require("moment-timezone");
const set = require(__dirname + "/../set");

const THUMBNAIL_URL = "https://files.catbox.moe/omgszj.jpg"; // New image URL

moment.tz.setDefault(`${set.TZ}`);

const getTimeAndDate = () => {
    return {
        time: moment().format('HH:mm:ss'),
        date: moment().format('DD/MM/YYYY')
    };
};

// Ping Command
njabulo({ nomCom: "ping1", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms } = commandeOptions;
    const { time, date } = getTimeAndDate();
    const ping = Math.floor(Math.random() * 100) + 1; // Generate a random ping between 1ms - 100ms

    try {
        await zk.sendMessage(dest, { 
         text: "Njabulo jb",
            contextInfo: {
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter',
                  newsletterName: "NJABULO JB",
                  serverMessageId: 143,
                   },
                   forwardingScore: 999, // Score to indicate it has been forwarded
                   externalAdReply: {
                    title: "🦋ɴᴊᴀʙᴜʟᴏ ᴊʙ🦋",
                    body: `↪️ 𝘁𝗶𝗺𝗲 𝗽𝗶𝗻𝗴: ${ping}ms\n📅 *Date:* ${date}\n⏰ *Time:* ${time}`,
                    thumbnailUrl: THUMBNAIL_URL,
                    mediaType: 1,
                    renderSmallThumbnail: true // Small thumbnail rendering
                }
            }
        }, { quoted: ms });

    } catch (e) {
        console.log("❌ Ping Command Error: " + e);
        repondre("❌ Error: " + e);
    }
});
  
