module.exports = (client) => {
  client.on("reconnect", () => {
    console.log(`Reconnecting...`);
  });
};
