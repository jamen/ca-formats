
# ca-formats (WIP)

Decodes [cellular automata][1] formats to `[x1, y1, ..., xn, yn]` values.  It currently supports the types `rle`, `plain`, and `life` (1.05 and 1.06).  

## Install

```sh
npm i ca-formats
```

## Usage

### `decode.rle(str) -> cells`

### `decode.life(str) -> cells`

### `decode.plain(str) -> cells`

Decodes a string of the given type into an array of interlaced cells.

```js
decode.plain('.OO\nOO\n.O')
// [ 1, 0, 2, 0, 0, 1, 1, 1, 1, 2 ]

decode.rle('b2o$2ob$bo!')
// [ 1, 0, 2, 0, 0, 1, 1, 1, 1, 2 ]
```

See [`test/`][2] for more examples.

[1]: https://en.wikipedia.org/wiki/Cellular_automaton
[2]: test/
