module.exports = {
  name: "bean",
  category: "AC",
  description:
    "Links to a Google Docs that has custom design codes that Bean uses.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Bean's custom designs: https://docs.google.com/document/d/1wBXPd7_KiKB-yZ_CLnI6WOMemdsFC4VGvdQBDtkLNSE/edit`
    );
  },
};
