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

var IconCloseBadgedSmallOutline = function IconCloseBadgedSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_close_badged', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M7.61871843,7 L10.4029514,4.21576705 L9.78423295,3.59704862 L7,6.38128157 L4.21576705,3.59704862 L3.59704862,4.21576705 L6.38128157,7 L3.59704862,9.78423295 L4.21576705,10.4029514 L7,7.61871843 L9.78423295,10.4029514 L10.4029514,9.78423295 L7.61871843,7 Z M7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7,14 Z',
          id: 'icon'
        })
      )
    )
  );
};

exports.default = IconCloseBadgedSmallOutline;