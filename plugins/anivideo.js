const { izumi,mode, getJson } = require("../lib/");
const config = require("../config");
izumi ({
    pattern: "naruto",
    fromMe: mode,
    desc: "random Naruto anime videos",
    type: "AnimeVideo",
}, async (message, match) => {
  const { result } = await getJson(apiUrl + 'api/anime/naruto?apikey=izumi-v3');
  message.sendFromUrl(result.url, {
    contextInfo: {
      mentionedJid: [message.sender],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363298577467093@newsletter',
        newsletterName: "Iᴢᴜᴍɪ-ᴠ3",
        serverMessageId: -1
      }
    },
    caption: `${config.CAPTION}`
  });
});

izumi ({
    pattern: "anime",
    fromMe: mode,
    desc: "random  anime videos",
    type: "AnimeVideo",
}, async (message, match) => {
const { result } = await getJson(apiUrl + 'api/anime/anivideo?apikey=izumi-v3');
  message.sendFromUrl(result.url, {
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363298577467093@newsletter',
        newsletterName: "Iᴢᴜᴍɪ-ᴠ3",
        serverMessageId: -1
      }
    },
    caption: `${config.CAPTION}`
  });
});
 izumi ({
    pattern: "mstatus",
    fromMe: mode,
    desc: "random Malayalam status videos",
    type: "media",
}, async (message, match) => {
const { result } = await getJson(apiUrl + 'api/randomvideo/msts?apikey=izumi-v3')
  message.sendFromUrl(result.url, {
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363298577467093@newsletter',
        newsletterName: "Iᴢᴜᴍɪ-ᴠ3",
        serverMessageId: -1
      }
    },
    caption: `${config.CAPTION}`
  });
});
