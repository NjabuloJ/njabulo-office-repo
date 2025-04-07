"use strict";
const { zokou } = require("../framework/zokou");
const axios = require("axios");
const moment = require("moment");

    // Generate greeting based on time of day
    const hour = moment().hour();
    let greeting = "🌅Good Morning my brother 🌄";
    if (hour >= 12 && hour < 18) {
        greeting = "🌄Good afternnon! Stay energized! 🌿";
    } else if (hour >= 18) {
        greeting = "🌇Good Everning! Hope you had a great day! 🌙";
    } else if (hour >= 22 || hour < 5) {
        greeting = "Good Night 🌌";

zokou({ 
    nomCom: "reo", 
    categorie: "General", 
    reaction: "🔎", 
    nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {
    const { pushname, repondre } = commandeOptions;
    const githubRepo = 'https://api.github.com/repos/NjabuloJ/Njabulo-Jb';
    const img = 'https://files.catbox.moe/xfn913.jpg';

    try {
        const response = await axios.get(githubRepo);
        const data = response.data;

        const created = moment(data.created_at).format("DD/MM/YYYY");
        const updated = moment(data.updated_at).format("DD/MM/YYYY");

        const gitdata = `
*╔═══════════════════╗*
*║   NJABULO JB      ║*
*╚═══════════════════╝*
*${greeting}*
*╔═══════════════════╗*
*║  REPOSITORY INFO  ║*
*╠═══════════════════╣*
*║* 🔹 *Name:* ${data.name}
*║* 🔹 *Owner:* ${data.owner.login}
*║* 🔹 *Stars:* ⭐ ${data.stargazers_count}
*║* 🔹 *Forks:* 🍴 ${data.forks_count}
*║* 🔹 *Watchers:* 👀 ${data.watchers}
*║* 🔹 *Created:* 📅 ${created}
*║* 🔹 *Updated:* 🔄 ${updated}
*║* 🔹 *License:* 📜 ${data.license?.name || "None"}
*║*
*║* 🔹 *Repo Link:*
*║* ${data.html_url}
*╚═══════════════════╝*

🔹 *Session:* https://shorturl.at/9WfYs
🔹 *Channel:* https://shorturl.at/q8ZuS

*Thanks for supporting Njabulo Jb!* ✨`;

        await zk.sendMessage(dest, { 
            image: { url: img }, 
            caption: gitdata,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363288304618280@newsletter",
                    newsletterName: "Njabulo Jb Updates",
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

    } catch (error) {
        console.log("Error fetching data:", error);
        repondre("❌ Error fetching repository data. Please try again later.");
    }
});
