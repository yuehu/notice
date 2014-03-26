# notice

A notification message component.

Showcase at <http://yuehu.github.io/notice/>.

## Installation

Install with [component(1)](http://component.io):

    $ component install yuehu/notice

## API

```js
var notice = require('notice');
```

### notice(options, cb)

Show & auto dismiss an message.

```js
notice('Show a message');
```

### options

1. **message**: `notice({message: 'Show a message'})`
2. **type**: warn or error.
3. **url**: A message with this url.
4. **duration**: dismiss after the duration, default is 4000ms.

---

```js
new notice.Notice(options)
```

### .show()

Show message.

### .clear()

Clear message.

## License

  MIT
