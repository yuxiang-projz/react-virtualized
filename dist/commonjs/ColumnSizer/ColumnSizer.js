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
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */
var ColumnSizer = /*#__PURE__*/ (function(_React$PureComponent) {
  (0, _inherits2['default'])(ColumnSizer, _React$PureComponent);

  var _super = _createSuper(ColumnSizer);

  function ColumnSizer(props, context) {
    var _this;

    (0, _classCallCheck2['default'])(this, ColumnSizer);
    _this = _super.call(this, props, context);
    _this._registerChild = _this._registerChild.bind(
      (0, _assertThisInitialized2['default'])(_this),
    );
    return _this;
  }

  (0, _createClass2['default'])(ColumnSizer, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this$props = this.props,
          columnMaxWidth = _this$props.columnMaxWidth,
          columnMinWidth = _this$props.columnMinWidth,
          columnCount = _this$props.columnCount,
          width = _this$props.width;

        if (
          columnMaxWidth !== prevProps.columnMaxWidth ||
          columnMinWidth !== prevProps.columnMinWidth ||
          columnCount !== prevProps.columnCount ||
          width !== prevProps.width
        ) {
          if (this._registeredChild) {
            this._registeredChild.recomputeGridSize();
          }
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          children = _this$props2.children,
          columnMaxWidth = _this$props2.columnMaxWidth,
          columnMinWidth = _this$props2.columnMinWidth,
          columnCount = _this$props2.columnCount,
          width = _this$props2.width;
        var safeColumnMinWidth = columnMinWidth || 1;
        var safeColumnMaxWidth = columnMaxWidth
          ? Math.min(columnMaxWidth, width)
          : width;
        var columnWidth = width / columnCount;
        columnWidth = Math.max(safeColumnMinWidth, columnWidth);
        columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
        columnWidth = Math.floor(columnWidth);
        var adjustedWidth = Math.min(width, columnWidth * columnCount);
        return children({
          adjustedWidth: adjustedWidth,
          columnWidth: columnWidth,
          getColumnWidth: function getColumnWidth() {
            return columnWidth;
          },
          registerChild: this._registerChild,
        });
      },
    },
    {
      key: '_registerChild',
      value: function _registerChild(child) {
        if (child && typeof child.recomputeGridSize !== 'function') {
          throw Error(
            'Unexpected child type registered; only Grid/MultiGrid children are supported.',
          );
        }

        this._registeredChild = child;

        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      },
    },
  ]);
  return ColumnSizer;
})(React.PureComponent);

exports['default'] = ColumnSizer;
ColumnSizer.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        /**
         * Function responsible for rendering a virtualized Grid.
         * This function should implement the following signature:
         * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
         *
         * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
         * The :registerChild should be passed to the Grid's :ref property.
         * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
         */
        children: _propTypes['default'].func.isRequired,

        /** Optional maximum allowed column width */
        columnMaxWidth: _propTypes['default'].number,

        /** Optional minimum allowed column width */
        columnMinWidth: _propTypes['default'].number,

        /** Number of columns in Grid or Table child */
        columnCount: _propTypes['default'].number.isRequired,

        /** Width of Grid or Table child */
        width: _propTypes['default'].number.isRequired,
      }
    : {};
