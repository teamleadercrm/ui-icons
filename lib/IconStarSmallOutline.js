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

var IconStarSmallOutline = function IconStarSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_star', fill: '#000' },
        _react2.default.createElement('polygon', {
          id: 'Page-1',
          points: '6.96066667 1.49993333 5.45733333 5.09129061 2 5.59662731 4.5 8.04264362 3.91 11.5 6.96066667 9.4899866 10.1186667 11.4279995 9.5 8.04264362 12 5.59662731 8.542 5.09129061'
        })
      )
    )
  );
};

exports.default = IconStarSmallOutline;