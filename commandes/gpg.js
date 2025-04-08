const {
  exec
} = require("child_process");
const {
  zokou
} = require("../framework/zokou");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require('../bdd/antilien');
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require('../bdd/antibot');
const {
  search,
  download
} = require('aptoide-scraper');
const fs = require('fs-extra');
const conf = require("../set");
const {


// Common function for fetching GPT responses
const fetchGptResponse = async (url, query) => {
  try {
    const response = await axios.get(url + encodeURIComponent(query));
    const data = response.data;
    if (data && data.status) {
      return data.BK9;
    } else {
      throw new Error('Failed to retrieve GPT response.');
    }
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    return 'Something went wrong. Unable to fetch GPT response.';
  }
};

// General handler for AI commands
const handleAiCommand = async (dest, zk, params, url, usageExample) => {
  const { repondre, arg } = params;
  const alpha = arg.join(" ").trim();

  if (!alpha) {
    return repondre(usageExample);
  }

  const text = alpha;

  try {
    const response = await fetchGptResponse(url,text);

    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
          title: conf.BOT,
          body: "Keep learning",
          thumbnailUrl: conf.URL,
          sourceUrl: "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
};

  default: axios
} = require("axios");
const {
  getBinaryNodeChild,
  getBinaryNodeChildren
} = require("@whiskeysockets/baileys")['default'];
  zokou({
  'nomCom': 'add1',
  'categorie': "Group",
  'reaction': '🪄'
}, async (_0x24f18e, _0x4375b2, _0x500bd4) => {
  let {
    repondre: _0x132613,
    verifAdmin: _0x2dac04,
    msgRepondu: _0x5e0fe4,
    infosGroupe: _0x554e14,
    auteurMsgRepondu: _0x10e456,
    verifGroupe: _0x44fbb9,
    auteurMessage: _0x416a0c,
    superUser: _0x1ad6e8,
    idBot: _0x3a1d08,
    arg: _0x3e9fea
  } = _0x500bd4;
  if (!_0x44fbb9) {
    return _0x132613("*This command works in groups only!*");
  }
  if (!_0x1ad6e8) {
    _0x132613("You are too weak to do that");
    return;
    }
    ;
  if (!_0x2dac04) {
    _0x132613("You are not an admin here!");
    return;
  }
  ;
  let _0x1fd727;
  try {
    _0x1fd727 = await _0x4375b2.groupMetadata(_0x24f18e);
  } catch (_0x23156a) {
    return _0x132613("Failed to fetch group metadata.");
  }
  let _0xc8dec2 = _0x1fd727.participants;
  if (!_0x3e9fea[0x0]) {
    return _0x132613("Provide number to be added. Example:\nadd 254XXXXX747");
  }
  let _0x4cb0cb = _0x3e9fea.join(" ");
  const _0x5abc4d = _0xc8dec2.map(_0xd268e8 => _0xd268e8.id);
  let _0xee4f6b = [];
  let _0x4ae008 = [];
  try {
    const _0x190ed5 = await Promise.all(_0x4cb0cb.split(',').map(_0xd59024 => _0xd59024.replace(/[^0-9]/g, '')).filter(_0x50909e => _0x50909e.length > 0x4 && _0x50909e.length < 0x14).map(async _0x59d2ca => [_0x59d2ca, await _0x4375b2.onWhatsApp(_0x59d2ca + "@s.whatsapp.net")]));
    _0x190ed5.forEach(([_0xd9f32a, _0x2639c9]) => {
      const _0x1a902c = _0xd9f32a + "@s.whatsapp.net";
      if (_0x5abc4d.includes(_0x1a902c)) {
        _0x4ae008.push(_0x1a902c);
      } else if (_0x2639c9[0x0]?.["exists"]) {
        _0xee4f6b.push(_0xd9f32a + "@c.us");
      }
    });
  } catch (_0x13e463) {
    return _0x132613("Error validating phone numbers.");
  }
  for (const _0x4eef69 of _0x4ae008) {
    _0x132613("That user is already in this group!");
  }
  let _0x366035;
  try {
    if (_0xee4f6b.length > 0x0) {
      _0x366035 = await _0x4375b2.query({
        'tag': 'iq',
        'attrs': {
          'type': 'set',
          'xmlns': "w:g2",
          'to': _0x24f18e
        },
        'content': _0xee4f6b.map(_0x2bfc5b => ({
          'tag': "add",
          'attrs': {},
          'content': [{
            'tag': "participant",
            'attrs': {
              'jid': _0x2bfc5b
    }
              }]
        }))
      });
      for (const _0x3c35cc of _0xee4f6b) {
        _0x132613("Successfully added @" + _0x3c35cc.split('@')[0x0]);
      }
    }
  } catch (_0x4e3a9f) {
    return _0x132613("Failed to add user to the group!");
  }
  let _0x3f6faa;
  try {
    _0x3f6faa = await _0x4375b2.profilePictureUrl(_0x24f18e, "image")["catch"](() => "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg");
  } catch (_0x6d1bf4) {
    _0x3f6faa = "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg";
  }
  let _0x4d0c6a = Buffer.alloc(0x0);
  if (_0x3f6faa) {
    try {
      const _0x54d4d5 = await fetch(_0x3f6faa);
      if (_0x54d4d5.ok) {
        _0x4d0c6a = await _0x54d4d5.buffer();
      } else {
        console.error("Failed to fetch profile picture:", _0x54d4d5.statusText);
      }
    } catch (_0x3cebff) {
      console.error("Error fetching profile picture:", _0x3cebff);
    }
  }
  const _0x9b3264 = _0x366035?.["content"]["find"](_0x494271 => _0x494271.tag === "add");
  const _0x267a0b = _0x9b3264?.["content"]['filter'](_0x265691 => _0x265691.attrs.error == 0x193);
  let _0x36611d;
  try {
    _0x36611d = await _0x4375b2.groupInviteCode(_0x24f18e);
  } catch (_0x1031b3) {
    return _0x132613("Failed to generate group invite code.");
  }
  for (const _0x116dc4 of _0x267a0b || []) {
    const _0x4766bc = _0x116dc4.attrs.jid;
    const _0x5488b4 = _0x116dc4.content.find(_0x31f672 => _0x31f672.tag === "add_request");
    const _0x4f92a4 = _0x5488b4.attrs.code;
    const _0x19afe6 = _0x5488b4.attrs.expiration;
    const _0x794f96 = "I cannot add @" + _0x4766bc.split('@')[0x0] + " due to privacy settings, Let me send an invite link instead.";
    await _0x132613(_0x794f96);
    let _0x599fb8 = "You have been invited to join the group " + _0x1fd727.subject + ":\n\nhttps://chat.whatsapp.com/" + _0x36611d + "\n\n*POWERED BY POPKID_MD*";
    await _0x4375b2.sendMessage(_0x4766bc, {
      'image': {
        'url': _0x3f6faa
      },
      'caption': _0x599fb8
    }, {
      'quoted': _0x5e0fe4
    });
  }
});

zokou({
  'nomCom': "broadcast1",
  'aliases': ['bc', "cast"],
  'reaction': '📑',
  'categorie': 'General'
}, async (_0x323461, _0x4cdb8c, _0x4c87e6) => {
  const {
    ms: _0x54b6b4,
    repondre: _0xb269b7,
    arg: _0x17b399,
    nomAuteurMessage: _0x271224,
    superUser: _0x291ccf
  } = _0x4c87e6;
  let _0x1360fc = _0x17b399.join(" ");
  if (!_0x17b399[0x0]) {
    _0xb269b7("After the command *broadcast*, type your message to be sent to all groups you are in🕯️,,,.");
    return;
  }
  if (!_0x291ccf) {
    _0xb269b7("hey you!! fuck off i can't broadcast your message");
    return;
  }
  let _0x52c320 = await _0x4cdb8c.groupFetchAllParticipating();
  let _0x254221 = Object.entries(_0x52c320).slice(0x0).map(_0x35bfa1 => _0x35bfa1[0x1]);
  let _0x115598 = _0x254221.map(_0x6b0f9 => _0x6b0f9.id);
  await _0xb269b7("*POPKID_XTECH is sending this message to all groups you are in*...");
  for (let _0x398282 of _0x115598) {
    let _0x25a35f = "Njabulo Jb Broadcast\n\n❗*message* : " + _0x1360fc + "\n\n️‼️ *Author*: " + _0x271224;
    await _0x4cdb8c.sendMessage(_0x398282, {
      'image': {
        'url': "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg"
      },
      'caption': '' + _0x25a35f
    }

  if (!alpha) {
    return repondre("Please provide a song name.");
  }

  const text = alpha;
  try {
    const model = 'gpt-4-turbo-2024-04-09';
    const messages = [
      { role: 'user', content: text },
      { role: 'system', content: 'You are an assistant in WhatsApp. You are called Keith. You respond to user commands.' }
    ];

    const response = await ai.generate(model, messages);

    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
          title: conf.BOT,
          body: "keep learning wit Njabulo J ",
          thumbnailUrl: conf.URL,
          sourceUrl: "https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F",
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
});
  
