const { zokou } = require("../framework/zokou");
const axios = require("axios");
const moment = require("moment");

zokou({
    nomCom: "repo1",
    aliases: ["source", "script", "botinfo"],
    categorie: "General",
    reaction: "🦋",
    desc: "Show bot repository information"
}, async (dest, zk, commandOptions) => {
    const { repondre, prefixe, auteurMessage } = commandOptions;
    const repoUrl = "https://api.github.com/repos/NjabuloJ/Njabulo-Jb"; // Your repo URL
    const botName = conf.BOT || "QUEEN-M"; // From your config

    try {
        // Fetch repository data
        const { data } = await axios.get(repoUrl);
        
        // Format dates nicely
        const created = moment(data.created_at).format("DD/MM/YYYY HH:mm");
        const updated = moment(data.updated_at).format("DD/MM/YYYY HH:mm");

        // Create the cage-formatted message
        const infoMessage = `
*╭───────────────━⊷*
*║ Information*
*╰───────────────━⊷*
        
🔹 *Repository:* ${data.name}
🔹 *Owner:* ${data.owner.login}
🔹 *Stars:* ⭐ ${data.stargazers_count}
🔹 *Forks:* 🍴 ${data.forks_count}
🔹 *Watchers:* 👀 ${data.watchers_count}
🔹 *Created:* 📅 ${created}
🔹 *Updated:* 🔄 ${updated}
🔹 *License:* 📜 ${data.license?.name || "None"}
        
*╭───────────────━⊷*
*║ Links*
*╰───────────────━⊷*
        
🌐 *Repo URL:* ${data.html_url
*Support by starring the repository!* ⭐`;

        // Send with attractive formatting
        await zk.sendMessage(dest, {
            image: { url: "https://files.catbox.moe/mmm8ns.jpg" }, // Your thumbnail
            caption: infoMessage,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363345407274799@newsletter",
                    newsletterName: "NJABULO JB",
                    serverMessageId: -1,
                },
                externalAdReply: {
                    title: "🦋ɴᴊᴀʙᴜʟᴏ ᴊʙ🦋",
                    body: "message on",
                    thumbnailUrl: "https://files.catbox.moe/mmm8ns.jpg",
                    sourceUrl: data.html_url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: commandOptions.ms });

    } catch (error) {
        console.error("Repo command error:", error);
        repondre("🚫 Error fetching repository data. Please try again later.");
    }
});
