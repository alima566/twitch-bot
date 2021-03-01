const mongoose = require("mongoose");
const commandPrefixSchema = mongoose.Schema({
  // Channel name
  _id: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("channel-prefixes", commandPrefixSchema);
