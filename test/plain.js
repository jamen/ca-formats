
const decode = require('../lib/decode')
const test = require('tape')
const patterns = require('./pattern.json')
const { readFileSync } = require('fs')
const { join } = require('path')

test('plaintext cells', t => {
  t.plan(3)

  let files = patterns.names
    .map(x => readFileSync(join(__dirname, `fixtures/${x}.cells`), 'utf8'))

  t.same(decode.plain(files[0]), patterns.rpentomino, 'r-pentomino')
  t.same(decode.plain(files[1]), patterns.pulsar, 'pulsar')
  t.same(decode.plain(files[2]), patterns.gospergun, 'gosper\'s glider gun')
})
