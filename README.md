# js-array-predicates [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> A set of ultra performant predicates that make working with js arrays easier.

These predicates should handle large quantities of data with ease.

## Usage

### Using all predicates

```javascript
var p = require('array-predicates');
someArray.filter(p.byProp('foo'));
```
### Using select predicates

```javascript
var byProp = require('array-predicates/byProp');
someArray.filter(byProp('foo'));
```
## Available predicates

### .byProp(prop)

Matches array items that have the property

```javascript
someArray.filter(byProp('foo'));
```
### .byPropVal(prop, value)

Matches array items that have a property value loosely matching value.

```javascript
someArray.filter(byPropVal('foo', 5));
someArray.filter(byPropVal('foo', '5'));// returns the same items as before.
```
### .byPropValue(prop, value)

Matches array items that have a property value exactly matching value.

```javascript
someArray.filter(byPropValue('foo', 5));
someArray.filter(byPropValue('foo', '5'));// returns different items frome before.
```
### .byVal(value)

Matches array items that loosely match value.

```javascript
someArray.filter(byVal(5));
someArray.filter(byVal('5'));// returns the same items as before.
```
### .byValue(value)

Matches array items that exactly match value.

```javascript
someArray.filter(byValue(5));
someArray.filter(byValue('5'));// returns different items frome before.
```
##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2015 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/js-array-predicates.svg
[npm-url]: https://npmjs.org/package/js-array-predicates
[npm-image]: http://img.shields.io/npm/v/js-array-predicates.svg

[travis-url]: https://travis-ci.org/jsdevel/js-array-predicates
[travis-image]: http://img.shields.io/travis/jsdevel/js-array-predicates.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/js-array-predicates
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/js-array-predicates/master.svg
