"use strict";
const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({ 
  nomCom: "repo1", 
  categorie: "General",
  reaction: "🔎",
  aliases: ["source", "script"],
  desc: "Show bot repository information",
  nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {
  const { repondre, prefixe } = commandeOptions;
  const githubRepo = 'https://api.github.com/repos/pkdriller/QUEEN-M';
  const thumbnailImg = 'https://files.catbox.moe/7tmps9.jpg';
  const channelThumbnail = 'https://files.catbox.moe/6e35pz.jpg';

  try {
    // Fetch repository data
    const response = await axios.get(githubRepo, { timeout: 10000 });
    const data = response.data;

    if (!data) {
      return repondre("Could not fetch data");
    }

    const repoInfo = {
      stars: data.stargazers_count,
      forks: data.forks_count,
      lastUpdate: new Date(data.updated_at).toLocaleDateString('en-GB'),
      owner: data.owner.login,
    };

    const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');

    // Enhanced cage design with channel information
    const gitdata = `
╭━━━〔 *Queen-M* 〕━━━┈⊷
┃★╭──────────────
┃★│ *Prefix : [ ${prefixe} ]*
┃★│ *Baileys : Multi Device*
┃★│ *Type : NodeJs*
┃★│ *Platform : Heroku*
┃★│ *Version : 1.0*
┃★│ *Owner : PkDriller*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
*╭───────────────━⊷*
*┃*   *ɴᴊᴀʙᴜʟᴏ ᴊʙ*
*╰───────────────━⊷*
*╭───────────────━⊷*
*┃*  *ɴᴊᴀʙᴜʟᴏ ᴊʙ ʀᴇᴘᴏ ɪɴғᴏ*
*┃* 🔹 *ɴᴀᴍᴇ:* ${data.name}
*┃* 🔹 *ᴏᴡɴᴇʀ:* ${data.owner.login}
*┃* 🔹 *sᴛᴀʀs:* ⭐ ${data.stargazers_count}
*┃* 🔹 *ғᴏʀᴋs:* 🍴 ${data.forks_count}
*┃* 🔹 *ᴡᴀᴛᴄʜᴇʀs:* 👀 ${data.watchers}
*┃* 🔹 *Created:* 📅 ${created}
*┃* 🔹 *Updated:* 🔄 ${updated}
*┃* 🔹 *License:* 📜 ${data.license?.name || "None"}
*┃* 🔹 *Repo Link:*
*┃* ${data.html_url}
*╰───────────────━⊷*`;
    await zk.sendMessage(dest, { 
      image: { url: thumbnailImg }, 
      caption: gitdata,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363288304618280@newsletter',
          newsletterName: "Queen-M",
          serverMessageId: -1,
        },
        forwardingScore: 999,
        externalAdReply: {
          title: "Queen-M",
          body: "Next Generation",
          thumbnailUrl: channelThumbnail,
          sourceUrl: 'https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.log("Error fetching data:", error);
    repondre("An error occurred while fetching repository data.");
  }
});
