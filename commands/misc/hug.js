const { replaceChars, getRandomElement } = require("@utils/functions");

const aaronHugResponses = [
  "iaraaron runs away because <username> just tried to hug him! No hugging iaraaron allowed! kellee1Glare",
  "iaraaron requests that <username> stay at least 6 feet away from him during these times. Hug rejected.",
  "Did you really just try to hug iaraaron? You wanna get banned? kellee1Glare",
  "iaraaron is social distancing and does not want <username> invading his bubble. Please do not try to hug him again.",
];

const kelleebotHugResponses = [
  "<username> please don't hug me. I don't like to be touched.",
  "I'm a bot. I don't need your hugs, <username>.",
  "Get your dirty stinking hands off of me, <username>.",
  "A hug? For me? No, thanks.",
];

const nightbotHugResponses = [
  "We DON'T hug Nightbot around here. kellee1Glare",
  "Really, <username>? You're gonna hug Nightbot and not me?",
  "You really think Nightbot deserves a hug? kellee1Glare",
  "Nightbot is NOT worthy of your hugs or anybody else's. Don't hug Nightbot again.",
];

module.exports = {
  name: "hug",
  category: "Misc",
  description: "Hugs another user",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel, userstate, args }) => {
    if (args.length === 0) {
      client.say(
        channel,
        `/me ${userstate["display-name"]} hugs themselves because they didn't specify who to hug.`
      );
      return;
    }

    let user = args[0].startsWith("@")
      ? args[0].replace("@", "").trim()
      : args[0].trim();

    if (
      (userstate.username.toLowerCase() === "kelleeluna" ||
        userstate.username.toLowerCase() === "pineappleontilt") &&
      user === "iaraaron"
    ) {
      return client.say(
        channel,
        `/me ${userstate["display-name"]} gives ${user} a great big hug. I love you ʕっ•ᴥ•ʔっ kellee1Love`
      );
    }

    if (user === "iaraaron" || replaceChars(user).includes("aaron")) {
      const index = getRandomElement(aaronHugResponses);
      const response = aaronHugResponses[index].replace(
        /<username>/g,
        userstate["display-name"]
      );
      return client.say(channel, `/me ${response}`);
    }

    if (userstate.username.toLowerCase() === user || user === "me") {
      return client.say(
        channel,
        `/me ${userstate["display-name"]} gives themselves a hug because they are lonely.`
      );
    }

    if (user === process.env.BOT_USERNAME.toLowerCase()) {
      const index = getRandomElement(kelleebotHugResponses);
      const response = kelleebotHugResponses[index].replace(
        /<username>/g,
        userstate["display-name"]
      );
      return client.say(channel, `/me ${response}`);
    }

    return client.say(
      channel,
      `/me kellee1Love ${userstate["display-name"]} hugs ${user} PrideFlower. I love you ʕっ•ᴥ•ʔっ kellee1Love`
    );
  },
};
