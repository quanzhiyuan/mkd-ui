# Mkd UI

> Mobile UI elements for **Vue 2.0**

- [Homepage](http://quanzhiyuan.github.io/mkd-ui)
- [Documentation](http://mint-ui.github.io/docs)

## Installation
```shell
npm i mkd-ui -S

```

## Usage

Import all components.

```javascript
import Vue from 'vue'
import Mkd from 'mkd-ui'
import 'mkd-ui/lib/style.css'

Vue.use(mkd)
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'mkd-ui'

Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
```


Equals to

```javascript
import Vue from 'vue'
import Mkd from 'mkd-ui'
import 'mkd-ui/lib/style.css'

Vue.use(Mkd)

// import specified component

import MkdRadio from 'mkd-ui/lib/radio'
import 'mkd-ui/lib/radio/style.css'

Vue.component(MkdRadio.name, MkdRadio)
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```

## 
```shell
npm run dev
```



## License
MIT
