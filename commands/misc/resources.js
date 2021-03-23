module.exports = {
  name: "resources",
  category: "Misc",
  description:
    "Links you to important resources to help BIPOC and LGBTQ+ communities.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Here is a list of resources to help BIPOC and LGBTQ+ communities. If you have more resources, please DM Kéllee. https://kellee.carrd.co/`
    );
  },
};
