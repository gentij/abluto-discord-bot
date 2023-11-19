const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("zagar")
    .setDescription("Replies with number of zagars!"),
  async execute(interaction) {
    await interaction.reply(
      "Per momentin gjenden perafershisht 10 zagare ne vicinitet"
    );
  },
};
