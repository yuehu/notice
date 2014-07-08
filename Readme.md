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

### Options

1. **message**: `notice({message: 'Show a message'})`
2. **type**: warn or error.
3. **url**: A message with this url.
4. **duration**: dismiss after the duration, default is 4000ms.
5. **closeEvent**: clear the message on the given event. Default is click.

### notice(options, cb)

Show & auto dismiss an message.

```js
notice('Show a message');
```

### Notice(options)

Create a notification.

### Notice#show()

Show message.

### Notice#clear()

Clear message.

### Notice#hide()

Alias for `Notice#clear()`.

## License

  MIT
