'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TrixEditor = (function (_React$Component) {
  _inherits(TrixEditor, _React$Component);

  function TrixEditor() {
    var _this = this;

    _classCallCheck(this, TrixEditor);

    _get(Object.getPrototypeOf(TrixEditor.prototype), 'constructor', this).apply(this, arguments);

    this._id = this._generateId();

    this._handleChange = function (e) {
      _this.props.onChange(e);
    };
  }

  _createClass(TrixEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._editor = document.getElementById('editor-' + this._id);
      this._editor.addEventListener('trix-initialize', this._handleChange);
      this._editor.addEventListener('trix-change', this._handleChange);
    }
  }, {
    key: 'componentWillunmount',
    value: function componentWillunmount() {
      this._editor.removeEventListener('trix-initialize', this._handleChange);
      this._editor.removeEventListener('trix-change', this._handleChange);
    }
  }, {
    key: '_generateId',
    value: function _generateId() {
      var timestamp = Date.now();
      var uniqueNumber = 0;

      (function () {
        // If created at same millisecond as previous
        if (timestamp <= uniqueNumber) {
          timestamp = ++uniqueNumber;
        } else {
          uniqueNumber = timestamp;
        }
      })();

      return 'T' + timestamp;
    }
  }, {
    key: 'render',
    value: function render() {
      var toolbar = this.props.toolbar;

      var inputProps = {};

      if (toolbar) inputProps['toolbar'] = toolbar;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('trix-editor', {
          id: 'editor-' + this._id,
          input: 'input-' + this._id
        }),
        _react2['default'].createElement('input', _extends({
          type: 'hidden',
          id: 'input-' + this._id,
          value: this.props.value
        }, inputProps))
      );
    }
  }], [{
    key: 'propTypes',
    value: {},
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      onChange: function onChange() {
        return null;
      }
    },
    enumerable: true
  }]);

  return TrixEditor;
})(_react2['default'].Component);

exports['default'] = TrixEditor;
module.exports = exports['default'];