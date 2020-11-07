const villagers = [
  "Mitzi",
  "Francine",
  "Genji",
  "Dobie",
  "Molly",
  "Apollo",
  "Stitches",
  "Marshal",
  "Deirdre",
  "Bob",
];

module.exports = {
  commands: "beanvillagers",
  description: "Lists out all of Bean's current villagers.",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(
      channel,
      `/me Bean island's villagers are: ${villagers.sort().join(", ")}`
    );
    return;
  },
};
