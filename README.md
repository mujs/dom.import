domo.import
===========

Import html partials

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
var dom = require('domo').use({
  import: require('domo.import')
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
