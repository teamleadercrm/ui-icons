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

var IconMeetingSmallOutline = function IconMeetingSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_meeting', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M9,1 C9.552,1 10,1.448 10,2 C11.103,2 12,2.897 12,4 L12,10 C12,11.103 11.103,12 10,12 L4,12 C2.897,12 2,11.103 2,10 L2,4 C2,2.897 2.897,2 4,2 C4,1.448 4.448,1 5,1 C5.552,1 6,1.448 6,2 L8,2 C8,1.448 8.448,1 9,1 Z M11,10 L11,4 L3,4 L3,10 C3,10.552 3.448,11 4,11 L10,11 C10.552,11 11,10.552 11,10 Z',
          id: 'Combined-Shape'
        })
      )
    )
  );
};

exports.default = IconMeetingSmallOutline;