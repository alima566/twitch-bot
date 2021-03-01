const { getRandomElement } = require("@utils/functions");
const { countdownTeams, cd } = require("@utils/countdown");

const tetrisTeams = ["blue", "red", "yellow", "green"];

module.exports = {
  name: "teams",
  category: "Mod",
  description: "Randomly selects a Team to go on.",
  isModOnly: true,
  execute: ({ client, channel }) => {
    const index = getRandomElement(tetrisTeams);
    const team = tetrisTeams[index];
    let botColor = "";
    switch (team) {
      case "blue":
        botColor = "DodgerBlue";
        break;
      case "red":
        botColor = "FireBrick";
        break;
      case "yellow":
        botColor = "GoldenRod";
        break;
      case "green":
        botColor = "SpringGreen";
        break;
      default:
        botColor = "HotPink";
        break;
    }

    if (!cd.cdStarted) {
      cd.cdStarted = true;
      client.say(channel, `/color ${botColor}`);
      client.say(channel, `/me Let's go on the ${team} team!`);
      countdownTeams(client, channel, 20, team.charAt(0));
    } else {
      return client.say(
        channel,
        `/me I can only do one countdown at a time kellee1Glare`
      );
    }
  },
};
