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

var IconClockSmallOutline = function IconClockSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_clock', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M9.415,7.817 L7.5,6.712 L7.5,4 C7.5,3.724 7.276,3.5 7,3.5 C6.724,3.5 6.5,3.724 6.5,4 L6.5,7.289 L8.915,8.683 C8.994,8.729 9.08,8.75 9.165,8.75 C9.337,8.75 9.505,8.661 9.598,8.5 C9.736,8.261 9.654,7.955 9.415,7.817 M7,12 C4.243,12 2,9.757 2,7 C2,4.243 4.243,2 7,2 C9.757,2 12,4.243 12,7 C12,9.757 9.757,12 7,12 M7,1 C3.686,1 1,3.687 1,7 C1,10.314 3.686,13 7,13 C10.313,13 13,10.314 13,7 C13,3.687 10.313,1 7,1',
          id: 'icon'
        })
      )
    )
  );
};

exports.default = IconClockSmallOutline;