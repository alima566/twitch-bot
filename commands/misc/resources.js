module.exports = {
  name: "resources",
  category: "Misc",
  description:
    "Links you to important resources to help BIPOC and LGBTQ+ communities.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    client.say(
      channel,
      `/me Below is a list of resources to help BIPOC and LGBTQ+ communities. If you have more resources, please DM Kéllee.`
    );
    client.say(
      channel,
      `/me Riot Safety & Black History: https://moreblminfo.carrd.co/`
    );
    client.say(
      channel,
      `/me Ways to Help: https://blacklivesmatters.carrd.co/`
    );
    client.say(
      channel,
      `/me Anti-Asian Violence Resources: https://anti-asianviolenceresources.carrd.co/`
    );
    client.say(
      channel,
      `/me Mental Health Resources for BIPOC: https://axidbipocmentalhealth.carrd.co/`
    );
    client.say(
      channel,
      `/me LGBTQ+ Carrd Master List: https://lgbtqtopics.carrd.co/`
    );
    client.say(
      channel,
      `/me Be An Activist: https://changeforthebetter.carrd.co/`
    );
  },
};
