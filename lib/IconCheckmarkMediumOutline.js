'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconCheckmarkMediumOutline = function IconCheckmarkMediumOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_checkmark', fill: '#000' },
        _react2.default.createElement('polygon', { id: 'Page-1', points: '20.385 6 9.425 16.96 2.707 10.243 2 10.95 9.425 18.374 21.092 6.707' })
      )
    )
  );
};

exports.default = IconCheckmarkMediumOutline;