const fetch = require("node-fetch");
const { log } = require("@utils/utils");

module.exports = (client, channel, username, viewers) => {
  client.say(
    channel,
    `/me Incoming raid! PogChamp Thank you @${username} for raiding the channel with ${viewers} viewer${
      viewers !== 1 ? "s" : ""
    }! Welcome raiders!`
  );
  shoutout(client, channel, username);
};

const shoutout = (client, channel, username) => {
  fetch(`https://beta.decapi.me/twitch/game/${username.toLowerCase()}`)
    .then((resp) => resp.text())
    .then((data) => {
      return client.say(
        channel,
        `/me kellee1Love Be sure to show ${username} some love and follow them at https://www.twitch.tv/${username.toLowerCase()} They were last playing ${data} kellee1Love`
      );
    })
    .catch((e) => {
      log("ERROR", "./events/raided.js", e.message);
    });
};
