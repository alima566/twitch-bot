const constants = require("@utils/constants");

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
  commands: "hug",
  minArgs: 0,
  description: "Hugs another user",
  cooldown: 15,
  callback: (client, channel, message, userstate, args) => {
    const user = args.startsWith("@")
      ? args.replace("@", "").trim()
      : args.trim();
    if (args.length === 0) {
      client.say(
        channel,
        `/me ${userstate.username} hugs themselves because they didn't specify who to hug.`
      );
      return;
    }

    if (
      (userstate.username.toLowerCase() === "kelleeluna" ||
        userstate.username.toLowerCase() === "pineappleontilt") &&
      user.toLowerCase() === "iaraaron"
    ) {
      client.say(
        channel,
        `/me ${userstate.username} gives ${user} a great big hug. I love you ʕっ•ᴥ•ʔっ kellee1Love`
      );
      return;
    }

    if (
      user.toLowerCase() === "iaraaron" ||
      constants.replaceChars(user).includes("aaron")
    ) {
      var index = constants.getRandomElement(aaronHugResponses);
      var response = aaronHugResponses[index].replace(
        "<username>",
        userstate.username
      );
      client.say(channel, `/me ${response}`);
      return;
    }

    if (
      userstate.username.toLowerCase() === user.toLowerCase() ||
      user.toLowerCase() === "me"
    ) {
      client.say(
        channel,
        `/me ${userstate.username} gives themselves a hug because they are lonely.`
      );
      return;
    }

    if (user.toLowerCase() === process.env.BOT_USERNAME.toLowerCase()) {
      var index = constants.getRandomElement(kelleebotHugResponses);
      var response = kelleebotHugResponses[index].replace(
        "<username>",
        userstate.username
      );
      client.say(channel, `/me ${response}`);
      return;
    }

    if (user.toLowerCase() === "nightbot") {
      var index = constants.getRandomElement(nightbotHugResponses);
      var response = nightbotHugResponses[index].replace(
        "<username>",
        userstate.username
      );
      client.say(channel, `/me ${response}`);
      return;
    }

    client.say(
      channel,
      `/me kellee1Love ${userstate.username} hugs ${user} PrideFlower. I love you ʕっ•ᴥ•ʔっ kellee1Love`
    );
    return;
  },
};
