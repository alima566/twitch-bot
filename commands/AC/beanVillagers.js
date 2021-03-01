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
  name: "beanvillagers",
  category: "AC",
  description: "Lists out all of Bean's current villagers.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Bean island's villagers are: ${villagers.sort().join(", ")}`
    );
  },
};
