
// r-pentomino, pulsar, gosper's glider gun

const test = require('tape')
const decode = require('../lib/decode.js')
const { readFileSync } = require('fs')
const { join } = require('path')

test('r-pentomino', t => {
  t.plan(4)

  var pattern = [
    1, 0,
    2, 0,
    0, 1,
    1, 1,
    1, 2
  ]

  let files = [
    'rpentomino.rle',
    'rpentomino_105.lif',
    'rpentomino_106.lif',
    'rpentomino.cells'
  ].map(x => readFileSync(join(__dirname, `fixtures/${x}`), 'utf8'))

  t.same(decode(files[0], 'rle'), pattern, 'rle')
  t.same(decode(files[1], 'life'), pattern, 'life105')
  t.same(decode(files[2], 'life'), pattern, 'life106')
  t.same(decode(files[3], 'plain'), pattern, 'plain')
})

test('pulsar', t => {
  t.plan(4)

  var pattern = [
    // TODO
  ]

  let files = [
    'pulsar.rle',
    'pulsar_105.lif',
    'pulsar_106.lif',
    'pulsar.cells'
  ].map(x => readFileSync(join(__dirname, `fixtures/${x}`), 'utf8'))

  t.same(decode(files[0], 'rle'), pattern, 'rle')
  t.same(decode(files[1], 'life'), pattern, 'life105')
  t.same(decode(files[2], 'life'), pattern, 'life106')
  t.same(decode(files[3], 'plain'), pattern, 'plain')
})

test('gosper\'s glider gun', t => {
  t.plan(4)

  var pattern = [
    // TODO
  ]

  let files = [
    'gosperglidergun.rle',
    'gosperglidergun_105.lif',
    'gosperglidergun_106.lif',
    'gosperglidergun.cells'
  ].map(x => readFileSync(join(__dirname, `fixtures/${x}`), 'utf8'))

  t.same(decode(files[0], 'rle'), pattern, 'rle')
  t.same(decode(files[1], 'life'), pattern, 'life105')
  t.same(decode(files[2], 'life'), pattern, 'life106')
  t.same(decode(files[3], 'plain'), pattern, 'plain')
})
