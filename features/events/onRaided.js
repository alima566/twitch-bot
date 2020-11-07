const fetch = require("node-fetch");
module.exports = (client) => {
  client.on("raided", (channel, username, viewers) => {
    client.say(
      channel,
      `/me Incoming raid! PogChamp Thank you @${username} for raiding the channel with ${viewers} viewers! Welcome raiders!`
    );
    shoutout(client, channel, username);
  });
};

const shoutout = (client, channel, username) => {
  fetch(`https://beta.decapi.me/twitch/game/${username.toLowerCase()}`)
    .then((response) => response.text())
    .then((data) => {
      client.say(
        channel,
        `/me kellee1Love Be sure to show ${username} some love and follow them at https://www.twitch.tv/${username.toLowerCase()} They were last playing ${data} kellee1Love`
      );
      return;
    })
    .catch((err) => {
      console.log(err);
    });
};
