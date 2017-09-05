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

var IconMessageMediumFilled = function IconMessageMediumFilled(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_message_filled', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M12,3 C7.029,3 3,6.134 3,10 C3,12.427 4.589,14.563 7,15.819 L7,21 L12,17 C16.971,17 21,13.866 21,10 C21,6.134 16.971,3 12,3',
          id: 'Page-1'
        })
      )
    )
  );
};

exports.default = IconMessageMediumFilled;