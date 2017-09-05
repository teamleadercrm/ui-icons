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

var IconIosBackArrowMediumOutline = function IconIosBackArrowMediumOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_ios_back_arrow', fill: '#000' },
        _react2.default.createElement('polygon', {
          id: 'Back-Arrow',
          points: '8.24264 11.5607 16.682 3.12132 14.5607 1 5.06066 10.5 4 11.5607 5.06066 12.6213 14.5607 22.1213 16.682 20'
        })
      )
    )
  );
};

exports.default = IconIosBackArrowMediumOutline;