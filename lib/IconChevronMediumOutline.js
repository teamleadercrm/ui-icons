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

var IconChevronMediumOutline = function IconChevronMediumOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_chevron', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M8.183,17.9109 C7.939,18.1549 7.939,18.5509 8.183,18.7949 C8.427,19.0389 8.823,19.0389 9.067,18.7949 L15.871,11.9889 L9.067,5.1829 C8.823,4.9389 8.427,4.9389 8.183,5.1829 C7.939,5.4269 7.939,5.8229 8.183,6.0669 L14.104,11.9889 L8.183,17.9109 Z',
          id: 'Fill-1'
        })
      )
    )
  );
};

exports.default = IconChevronMediumOutline;