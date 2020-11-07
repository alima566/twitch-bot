const loadCommands = require("@commands/loadCommands");
module.exports = {
  commands: "commands",
  description: "A list of KelleeBot commands",
  cooldown: 15,
  callback: async (client, channel) => {
    const commands = await loadCommands(client);
    for (const [key, value] of commands.entries()) {
      if (value.commands !== "commands" && !value.isModOnly) {
        console.log(value.commands);
      }
    }
  },
};
