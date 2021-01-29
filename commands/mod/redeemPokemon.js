const { getRandomElement } = require("@utils/constants");
const fetch = require("node-fetch");
const userPokemonsSchema = require("@schemas/userPokemonsSchema");

const pokeBalls = [
  "Master Ball",
  "Ultra Ball",
  "Great Ball",
  "Poke Ball",
  "Safari Ball",
  "Park Ball",
  "Sport Ball",
];

module.exports = {
  commands: "redeemPokemon",
  minArgs: 1,
  expectedArgs: "<User's @>",
  description: "Catch a pokemon.",
  isModOnly: true,
  callback: async (client, channel, message, userstate, args) => {
    const user = args.startsWith("@")
      ? args.replace("@", "").trim()
      : args.trim();
    const index = getRandomElement(pokeBalls);
    const pokedexNum = Math.floor(Math.random() * 899);
    const pokemon = await getRandomPokemon(pokedexNum);
    const pokeball = pokeBalls[index];

    const obj = {
      channel: channel.slice(1),
      user,
    };
    await userPokemonsSchema.findOneAndUpdate(
      obj,
      {
        ...obj,
        $addToSet: {
          pokemons: {
            pokedexNum,
            name: pokemon,
            caughtWith: pokeball,
            caughtOn: new Date(),
          },
        },
      },
      {
        upsert: true,
      }
    );
    const result = await userPokemonsSchema.find(obj);

    return client.say(
      channel,
      `/me ${user} has captured a ${pokemon} by using a ${pokeball}! PridePog PridePog Hope you take good care of your Pokémon! 2020Rivalry You have now caught a total of ${
        result[0].pokemons.name.length
      } Pokémon${result[0].pokemons.name.length !== 1 ? "s" : ""}!`
    );
  },
};

const getRandomPokemon = (pokedexNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexNumber}`
      );
      const result = await body.json();
      const pokemon = capFirstLetter(result.species.name);
      resolve(pokemon);
    } catch (e) {
      reject("An error has occurred. Please try again.");
    }
  });
};

const capFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
