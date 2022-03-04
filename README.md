# [React-color-picker](https://github.com/superstar0914/color-picker-app)

[![Npm Version][npm-version-image]][npm-version-url]
[![Build Status][travis-svg]][travis-url]
[![download][downloads-image]][downloads-image]

* **13 Different Pickers** - Sketch, Photoshop, Chrome and many more

* **Make Your Own** - Use the building block components to make your own

## Demo

<!-- ![Demo](https://giphy.com/channel/superstar0914/color-picker-custom) -->

[**Live Demo**](https://github.com/superstar0914/color-picker-app)

## Installation & Usage

```sh
npm install react-color --save
```

### Include the Component

```js
import React from 'react'
import { SketchPicker } from 'react-color'

class Component extends React.Component {

  render() {
    return <SketchPicker />
  }
}
```
You can import `AlphaPicker` `BlockPicker` `ChromePicker` `CirclePicker` `CompactPicker` `GithubPicker` `HuePicker` `MaterialPicker` `PhotoshopPicker` `SketchPicker` `SliderPicker` `SwatchesPicker` `TwitterPicker` respectively.

> 100% inline styles via [ReactCSS](http://reactcss.com/)

[travis-svg]: https://travis-ci.org/casesandberg/react-color.svg
[travis-url]: https://travis-ci.org/casesandberg/react-color
[license-image]: http://img.shields.io/npm/l/react-color.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/react-color.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-color
[npm-version-image]: https://img.shields.io/npm/v/react-color.svg
[npm-version-url]: https://www.npmjs.com/package/react-color
