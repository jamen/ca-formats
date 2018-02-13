
var formats = {
  rle: function rle (str) {
    str = str.replace(/^#.*$/g, '')
    var cells = []
    var b = 0
    var x = 0
    var y = 0
    for (var i = 0; i < str.length; i++) {
      var char = str[i]
      var rs = b < i && str.slice(b, i)
      var r = rs ? parseInt(rs) : 1
      if (char === 'o') {
        for (var p = 0; p < r; p++) {
          cells.push(x++, y)
        }
      } else if (char === 'b') {
        x += r
      } else if (char === '$') {
        y += r
        x = 0
      } else if (char === 'x' || char === 'y') {
        i = str.indexOf('\n', i)
      }
      if (char === 'o' || char === 'b' || char === '$' || char === 'x' || char === 'y') {
        b = i + 1
      }
     }
    return cells
  },

  life: function (str) {
    var cells = []
    var b = 0
    var x = 0
    var y = 0

    var ver = str.slice(0, 10)
    str = str.replace(/^#.*$/g, '')

    if (ver === '#Life 1.06') {
      for (var i = 0; i <= str.length; i++) {
        let char = str[i]
        if (!char || char === '\n') {
          cells.push(x, parseInt(str.slice(b, i)))
          b = i + 1
        } else if (char === ' ') {
          x = parseInt(str.slice(b, i))
          b = i + 1
        }
      }
    } else if (ver === '#Life 1.05') {
      for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
          case '*': cells.push(x, y); break
          case '\n': x = 0, y++; break
        }
      }
    }

    return cells
  },

  plain: function (str) {
    str = str.replace(/^\!.*$/g, '')
    var cells = []
    var x = 0
    var y = 0
    for (var i = 0; i < str.length; i++) {
      switch (str[i]) {
        case 'O': cells.push(x, y); break
        case '\n': x = 0, y++; break
      }
    }
    return cells
  }
}

function decode (str, type) {
  if (!type) throw new Error('Unknown format ' + type)
  return formats[type](str)
}

module.exports = decode
