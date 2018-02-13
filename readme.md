
# ca-formats (WIP)

Decodes [cellular automata][1] formats to `[x1, y1, ..., xn, yn]` values.  It currently supports the types `rle`, `plain`, and `life` (1.05 and 1.06).  

## Install

```sh
npm i ca-formats
```

## Usage

### `decode(str, type?) -> cells`

- `str` is the source string to decode
- `type` is which format you are decoding.  defaults to rle. 
