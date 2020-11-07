module.exports = (client) => {
  client.on("disconnected", (reason) => {
    console.log(`Disconnected: ${reason}`);
  });
};
