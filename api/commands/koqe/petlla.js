const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("petlla")
    .setDescription("Replies with petlla joke"),
  async execute(interaction) {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();

      await interaction.reply(data.value.replace(/Chuck Norris/g, "Petlla"));
    } catch (error) {
      console.log("error ", error);
    }
  },
};
