exports.run = function(client, message) {

  if (client.parties.hasOwnProperty(message.author)) {
    let boss = client.parties[message.author].boss;
    delete client.parties[message.author];
    return message.channel.send(`Disband party for boss <${boss}>`);
  }

  return message.channel.send(`You are not the leader of a party.`);
}


exports.conf = {
  enabled: true,
  permLevel: 1
};

exports.help = {
  name: 'disband',
  description: 'disbands the current party. Must be a party leader.',
  usage: 'disband'
};