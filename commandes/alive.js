"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../framework/zokou");

zokou(
  { nomCom: "pi", reaction: "👊", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/7ttvmj.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/7ttvmj.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/wdap4t.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029Vb2NqkvBPzjPEvFiYa0R"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💫 Always Active 🔥\n\n✨ Contact: ${contactName}\n🙏 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
            title: `💦 Message from: ${contactName}\n🔥E.n.b Md Alive🔥`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");





zokou(
  { nomCom: "po", reaction: "🌟", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/7ttvmj.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/7ttvmj.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/wdap4t.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029Vb2NqkvBPzjPEvFiYa0R"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💥 Always Active 💥\n\n🎙️ Contact: ${contactName}\n🎙️ [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
            title: `🌟 Message from: ${contactName}\n🔥 E.n.b Md Alive 🔥`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);
