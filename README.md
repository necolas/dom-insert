# dom-insert

[![Build Status](https://secure.travis-ci.org/necolas/dom-insert.png?branch=master)](http://travis-ci.org/necolas/dom-insert)

DOM insertion methods.

## Installation

```
npm install dom-insert
```

## API

Available methods:

* `after(element, content)`: insert content after.
* `before(element, content)`: insert content before.
* `append(element, content)`: append content to.
* `prepend(element, content)`: prepend content to.

Each method accepts:

* `element` {Element}: DOM element
* `content` {String|Node|NodeList|Array<Node>}: the HTML string, Node, or Node collection to insert.

### Examples

```js
var domInsert = require('dom-insert');
var foo = document.querySelector('.foo');

domInsert.after(foo, '<div>After foo</div>');
domInsert.before(foo, document.querySelectorAll('.bar'));
domInsert.append(foo, document.querySelector('.bar'));
domInsert.prepend(foo, [ document.createElement('div'), document.createElement('div') ]);
```

## Browser support

* Google Chrome
* Firefox
* Internet Explorer 9+
* Safari
* Opera
