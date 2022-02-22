'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

var React = _interopRequireWildcard(require('react'));

var ReactDOMServer = _interopRequireWildcard(require('react-dom/server'));

var _WindowScroller = _interopRequireDefault(require('./WindowScroller'));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/**
 * @jest-environment node
 */
test('should render content with default widths and heights initially', function() {
  var rendered = ReactDOMServer.renderToString(
    /*#__PURE__*/ React.createElement(
      _WindowScroller['default'],
      {
        serverHeight: 100,
        serverWidth: 200,
      },
      function(_ref) {
        var height = _ref.height,
          width = _ref.width;
        return /*#__PURE__*/ React.createElement(
          'div',
          null,
          'height:'.concat(height, ';width:').concat(width),
        );
      },
    ),
  );
  expect(rendered).toContain('height:100');
  expect(rendered).toContain('width:200');
});
