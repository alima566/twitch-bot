module.exports = {
  commands: "help",
  description:
    "Links to a Google Docs with tips/suggestions on how you can improve your AC Island.",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(
      channel,
      `/me Stuck in AC and need some help? Check out this document: https://docs.google.com/document/d/1tQfQvL-RunGCGc_23opcwYpHmR-UvHr9NQn466c4HwA/edit?usp=sharing`
    );
    return;
  },
};
