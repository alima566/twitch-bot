const consoleColors = {
  SUCCESS: "\u001b[32m",
  WARNING: "\u001b[33m",
  ERROR: "\u001b[31m",
};

module.exports.log = (type, path, text) => {
  console.log(
    `\u001b[36;1m<KelleeBot>\u001b[0m\u001b[34m [${path}]\u001b[0m - ${consoleColors[type]}${text}\u001b[0m`
  );
};

module.exports.setCooldown = (cooldownType, cooldownString) => {
  let cooldowns = [];
  if (cooldownType > 0) {
    cooldowns.push(cooldownString);
    setTimeout(() => {
      cooldowns = cooldowns.filter((string) => {
        return string !== cooldownString;
      });
    }, 1000 * cooldownType);
  }
  return cooldowns;
};
