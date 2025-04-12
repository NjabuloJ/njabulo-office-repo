"use strict";
const { zokou } = require("../framework/zokou");
const axios = require("axios");
const moment = require("moment");

zokou({ 
    nomCom: "lkl", 
    categorie: "General", 
    reaction: "🦋", 
    nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {
    const { pushname, repondre } = commandeOptions;
    const githubRepo = 'https://api.github.com/repos/NjabuloJ/Njabulo-Jb';
    const img = 'https://files.catbox.moe/iw6h5w.jpg';

    try {
        const response = await axios.get(githubRepo);
        const data = response.data;

        const created = moment(data.created_at).format("DD/MM/YYYY");
        const updated = moment(data.updated_at).format("DD/MM/YYYY");

        const gitdata = `

       *╭────────────━⊷*
       *┋* *ɴᴀᴍᴇ:   ɴᴊᴀʙᴜʟᴏ ᴊʙ*
       *┋* *ᴏᴡɴᴇʀ:    ɴᴊᴀʙᴜʟᴏᴊ*
       *┋* *sᴛᴀʀs:*  ${data.stargazers_count}
       *┋* *ғᴏʀᴋs:*  ${data.forks_count}
       *┋* *ᴡᴀᴛᴄʜᴇʀs:*  ${data.watchers}
       *┋* *ᴜᴘᴅᴀᴛᴇᴅ:*  ${updated}
       *╰────────────━⊷*
1️⃣ *REPO LINK:*
2️⃣ ${data.html_url}

3️⃣ *SESSION:* https://shorturl.at/9WfYs
4️⃣ *CHANNEL:* https://shorturl.at/q8ZuS

*THANKS FOR SUPPORTING NJABULO JB!* ✨`;

        await zk.sendMessage(dest, { 
            image: { url: img }, 
            caption: gitdata,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363288304618280@newsletter",
                    newsletterName: "NJABULO JB",
                    serverMessageId: -1,
                },
                forwardingScore: 999,
                externalAdReply: {
                    title: "Njabulo Jb GitHub",
                    body: "Official Repository",
                    thumbnailUrl: img,
                    sourceUrl: data.html_url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

        // Send audio with caption
        await zk.sendMessage(dest, { 
            audio: { 
                url: "https://files.catbox.moe/raje26.mp3" // Replace with your audio URL
            }, 
            mimetype: 'audio/mp4', 
            ptt: true, // Set to true if you want it as a voice note
            caption: "NJABULO-JB SONG",
            contextInfo: {
             isForwarded: true,
               forwardedNewsletterMessageInfo: {
             newsletterJid: "120363345407274799@newsletter",
              newsletterName: "NJABULO JB",
               serverMessageId: -1
               },
                forwardingScore: 999,
                externalAdReply: {
               body: "🦋ɴᴊᴀʙᴜʟᴏ ᴊʙ🦋",
               thumbnailUrl: "https://files.catbox.moe/mmm8ns.jpg",
               sourceUrl: 'https://whatsapp.com/channel/0029VawO6hgF6sn7k3SuVU3z',
               rendersmallThumbnail: false
                }
            }
        });

    } catch (e) {
        console.log("Error fetching data:", error);
        repondre("❌ Error fetching repository data. Please try again later.");
    }
});
