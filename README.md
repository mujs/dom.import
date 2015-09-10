dom.import
==========

A [dom plugin](https://github.com/mujs/dom) to import HTML partials

Usage
-----

**index.html**

```html
<body>
  <div class="template"></div>
</body>
```

**template.html**

```html
<h1>It works!</h1>
```

**script.js**

```js
var dom = require('dom').use({
  import: require('dom.import')
});

dom('.template').import('template.html');
```

**Result**

```html
<body>
  <div class="template">
    <h1>It works!</h1>
  </div>
</body>
```
