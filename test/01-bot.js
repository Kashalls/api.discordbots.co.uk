/* eslint-env mocha */

const Bot = require('./../app/class/Bot');
const uuidv1 = require('uuid/v1');
const assert = require('assert');

describe('Bot Class', () => {
  let bot1;
  let token1;
  let bot2;
  const id1 = uuidv1();
  it('create a bot with ID', () => {
    bot1 = new Bot(id1);
  });
  it('post it to the database', (done) => {
    bot1.post().then(() => done());
  });
  it('reset the token', () => {
    token1 = bot1.token;
    bot1.resetToken();
  });
  it('post it to the database', (done) => {
    bot1.post().then(() => done());
  });
  it('check that the token has actually changed', () => {
    assert.notStrictEqual(token1, bot1.token);
  });
  it('set information on the bot and post it to the database', (done) => {
    bot1.name = 'Example Bot';
    bot1.invite = 'https://example.com/invite';
    bot1.prefix = 'exam';
    bot1.description = 'The example Lorem Ipsum that is sure to impress!';
    bot1.banner = 'background';
    bot1.avatar = 'https://terminal.ink/assets/images/avatar.png';
    bot1.addImage('background');
    bot1.addOwner('123456789', 3);
    bot1.post().then(() => done());
  });
  it('create an empty bot with the same ID', () => {
    bot2 = new Bot(id1);
  });
  it('get data from the database', (done) => {
    bot2.get().then(() => done());
  });
  it('check that the information has been saved', () => {
    assert.deepStrictEqual(bot1, bot2);
  });
});
