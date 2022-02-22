'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck'),
);

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass'),
);

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits'),
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf'),
);

var _propTypes = _interopRequireDefault(require('prop-types'));

var React = _interopRequireWildcard(require('react'));

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

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2['default'])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2['default'])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2['default'])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */
var ScrollSync = /*#__PURE__*/ (function(_React$PureComponent) {
  (0, _inherits2['default'])(ScrollSync, _React$PureComponent);

  var _super = _createSuper(ScrollSync);

  function ScrollSync(props, context) {
    var _this;

    (0, _classCallCheck2['default'])(this, ScrollSync);
    _this = _super.call(this, props, context);
    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0,
    };
    _this._onScroll = _this._onScroll.bind(
      (0, _assertThisInitialized2['default'])(_this),
    );
    return _this;
  }

  (0, _createClass2['default'])(ScrollSync, [
    {
      key: 'render',
      value: function render() {
        var children = this.props.children;
        var _this$state = this.state,
          clientHeight = _this$state.clientHeight,
          clientWidth = _this$state.clientWidth,
          scrollHeight = _this$state.scrollHeight,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop,
          scrollWidth = _this$state.scrollWidth;
        return children({
          clientHeight: clientHeight,
          clientWidth: clientWidth,
          onScroll: this._onScroll,
          scrollHeight: scrollHeight,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollWidth: scrollWidth,
        });
      },
    },
    {
      key: '_onScroll',
      value: function _onScroll(_ref) {
        var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;
        this.setState({
          clientHeight: clientHeight,
          clientWidth: clientWidth,
          scrollHeight: scrollHeight,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollWidth: scrollWidth,
        });
      },
    },
  ]);
  return ScrollSync;
})(React.PureComponent);

exports['default'] = ScrollSync;
ScrollSync.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        /**
         * Function responsible for rendering 2 or more virtualized components.
         * This function should implement the following signature:
         * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
         */
        children: _propTypes['default'].func.isRequired,
      }
    : {};
