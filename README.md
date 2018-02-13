# react-svg-textures

<!-- [![Travis][build-badge]][build] -->
[![npm package][npm-badge]][npm]
<!-- [![Coveralls][coveralls-badge]][coveralls] -->

[Textures.js](http://riccardoscalco.github.io/textures/) ported to React. Fully isomorphic.

## Example

```javascript
import React from 'react'
import { render } from 'react-dom';
import { Lines } from 'react-svg-textures`;

render((
  <svg width={200} height={200}>
    <Lines
      id='pattern'
      strokeWidth={10}
      stroke='purple'
      size={10}
      orientation='diagonal'
      background='blue'
    />
    <circle cx={100} cy={100} r={5} fill='url(#pattern)' />
  </svg>
), container);
```

## Components

### Lines

```
import { Lines } from 'react-svg-textures`;
```

Prop | Type
-----------
size | number
strokeWidth | number
orientation | string
shapeRendering | string
stroke | string
background | string
id | string

### Circles

```
import { Circles } from 'react-svg-textures`;
```

Prop | Type
-----------
size | number
strokeWidth | number
stroke | string
background | string
id | string
complement | bool
radius | number

### Paths

```
import { Paths } from 'react-svg-textures`;
```

Prop | Type
-----------
size: PropTypes.number,
d | enum( 'squares', 'nylon', 'waves', 'woven', 'caps', 'crosses', 'hexagons') || function(size) => string
strokeWidth | number
shapeRendering | string
stroke | string
background | string
id | string

<!-- [build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo -->

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

<!-- [coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo -->
