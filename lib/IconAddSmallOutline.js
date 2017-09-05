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

var IconAddSmallOutline = function IconAddSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_add', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M7.5,6.5 L7.5,2 L6.5,2 L6.5,6.5 L2,6.5 L2,7.5 L6.5,7.5 L6.5,12 L7.5,12 L7.5,7.5 L12,7.5 L12,6.5 L7.5,6.5 Z',
          id: 'icon'
        })
      )
    )
  );
};

exports.default = IconAddSmallOutline;