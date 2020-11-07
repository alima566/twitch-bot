const fetch = require("node-fetch");
module.exports = {
  commands: "dadadvice",
  description: "KelleeBot gives you a random dad advice.",
  cooldown: 15,
  callback: (client, channel) => {
    fetch(`https://api.adviceslip.com/advice`) //`https://api.scorpstuff.com/advice.php`)
      .then((response) => response.json())
      .then((data) => {
        client.say(channel, `/me ${data["slip"]["advice"]}`);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
