const cdStarted = false;

module.exports = {
  cdStarted,
};

module.exports.countdown = (channel, seconds) => {
  let interval = setInterval(() => {
    if (seconds == 0) {
      client.say(channel, `/me Go! kellee1GG`);
      client.say(channel, `/color HotPink`);
      clearInterval(interval);
      //cdStarted = false;
    } else if (seconds == 20) {
      client.say(channel, `/me Countdown happening in 20 seconds...`);
    } else if (seconds == 10) {
      client.say(channel, `/me Countdown happening in 10 seconds...`);
    } else if (seconds == 6) {
      client.say(channel, `/me Ready kellee1Glare`);
    } else if (seconds <= 5) {
      client.say(channel, `/me ${seconds}`);
    }
    seconds--;
  }, 1000);
};

module.exports.countdownTeams = (channel, color) => {
  if (color.toLowerCase() === "r") {
    client.say(channel, `/color Firebrick`);
    client.say(channel, `/me Team Battle: Red Team`);
  } else if (color.toLowerCase() === "b") {
    client.say(channel, `/color DodgerBlue`);
    client.say(channel, `/me Team Battle: Blue Team`);
  } else if (color.toLowerCase() === "y") {
    client.say(channel, `/color GoldenRod`);
    client.say(channel, `/me Team Battle: Yellow Team`);
  } else if (color.toLowerCase() === "g") {
    client.say(channel, `/color SpringGreen`);
    client.say(channel, `/me Team Battle: Green Team`);
  }
  countdown(channel, 20);
};
