const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  id: Number,
  name: String,
  homepageURL: String,
  iconURL: String,
});

const Provider = mongoose.model("Provider", ProviderSchema);
module.exports = Provider;

const testUser = new Provider({
  id: 5234,
  name: "Mooki",
  homepageURL: ".gmail.com",
  iconURL: "www.gmail.com"
});

testUser.save()
