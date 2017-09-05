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

var IconCheckmarkSmallOutline = function IconCheckmarkSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_checkmark', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M5.85725,10.5565 L2.29325,6.9925 C1.90225,6.6015 1.90225,5.9695 2.29325,5.5785 C2.68425,5.1875 3.31625,5.1875 3.70725,5.5785 L5.85725,7.7285 L10.29325,3.2925 C10.68425,2.9025 11.31625,2.9025 11.70725,3.2925 C12.09825,3.6835 12.09825,4.3165 11.70725,4.7065 L5.85725,10.5565 Z',
          id: 'Fill-1'
        })
      )
    )
  );
};

exports.default = IconCheckmarkSmallOutline;