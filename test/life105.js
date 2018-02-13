
const decode = require('../lib/decode')
const test = require('tape')
const patterns = require('./pattern.json')
const { readFileSync } = require('fs')
const { join } = require('path')

test('life 1.05', t => {
  t.plan(3)

  let files = patterns.names
    .map(x => readFileSync(join(__dirname, `fixtures/${x}_105.lif`), 'utf8'))

  t.same(decode.life(files[0]), patterns.rpentomino, 'r-pentomino')
  t.same(decode.life(files[1]), patterns.pulsar, 'pulsar')
  t.same(decode.life(files[2]), patterns.gospergun, 'gosper\'s glider gun')
})
