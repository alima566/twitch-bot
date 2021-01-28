const userPokemonsSchema = require("@schemas/userPokemonsSchema");

module.exports = {
  commands: "pokemons",
  description: "Tells you what Pokémons you have caught.",
  cooldown: 15,
  callback: async (client, channel, message, userstate, args) => {
    const obj = {
      channel: channel.slice(1),
      user: userstate.username,
    };

    const result = await userPokemonsSchema.find(obj);
    if (!result.length) {
      return client.say(
        channel,
        `/me ${userstate.username}, you have not caught any Pokémon's yet.`
      );
    } else {
      const totalPokemons = result[0].pokemons.name.length;
      const pokemons = result[0].pokemons.name
        .map((m) => m)
        .slice(0, 5)
        .join(", ");

      return client.say(
        channel,
        `/me ${
          userstate.username
        }, you have caught a total of ${totalPokemons} Pokémon${
          totalPokemons !== 1 ? "s" : ""
        }! Here is your Pokédex: ${pokemons}.`
      );
    }
  },
};
