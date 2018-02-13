
const decode = require('../lib/decode')
const test = require('tape')
const patterns = require('./pattern.json')
const { readFileSync } = require('fs')
const { join } = require('path')

test('run-length encoding', t => {
  t.plan(3)

  let files = patterns.names
    .map(x => readFileSync(join(__dirname, `fixtures/${x}.rle`), 'utf8'))

  t.same(decode.rle(files[0]), patterns.rpentomino, 'r-pentomino')
  t.same(decode.rle(files[1]), patterns.pulsar, 'pulsar')
  t.same(decode.rle(files[2]), patterns.gospergun, 'gosper\'s glider gun')
})
