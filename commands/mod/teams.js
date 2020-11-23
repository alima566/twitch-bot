const constants = require("@utils/constants");
const countdown = require("@utils/countdown");

const tetrisTeams = ["blue", "red", "yellow", "green"];

module.exports = {
  commands: "teams",
  description: "Randomly selects a Team to go on.",
  isModOnly: true,
  callback: (client, channel, message, userstate, args) => {
    if (userstate.mod || constants.isBroadcaster(userstate.username)) {
      const index = constants.getRandomElement(tetrisTeams);
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

      if (!countdown.cd.cdStarted) {
        countdown.cd.cdStarted = true;
        client.say(channel, `/color ${botColor}`);
        client.say(channel, `/me Let's go on the ${team} team!`);
        countdown.countdownTeams(client, channel, team.charAt(0));
      } else {
        client.say(
          channel,
          `/me I can only do one countdown at a time kellee1Glare`
        );
        return;
      }
    }
  },
};
