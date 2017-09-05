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

var IconContactMediumOutline = function IconContactMediumOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        d: 'M20,18.5 C20,19.327 19.327,20 18.5,20 L8,20 L8,4 L18.5,4 C19.327,4 20,4.673 20,5.5 L20,18.5 Z M6,20 L6,18.5 L6,17.5 L6,14.5 L6,13.5 L6,10.5 L6,9.5 L6,6.5 L6,5.5 L6,4 L7,4 L7,20 L6,20 Z M18.5,3 C19.878,3 21,4.122 21,5.5 L21,18.5 C21,19.878 19.878,21 18.5,21 L8,21 L5,21 L5,18.5 L3,18.5 L3,17.5 L5,17.5 L5,14.5 L3,14.5 L3,13.5 L5,13.5 L5,10.5 L3,10.5 L3,9.5 L5,9.5 L5,6.5 L3,6.5 L3,5.5 L5,5.5 L5,3 L8,3 L18.5,3 Z M12,10.25 C12,9.147 12.897,8.25 14,8.25 C15.103,8.25 16,9.147 16,10.25 C16,11.353 15.103,12.25 14,12.25 C12.897,12.25 12,11.353 12,10.25 Z M15.754,12.673 C16.505,12.127 17,11.248 17,10.25 C17,8.596 15.654,7.25 14,7.25 C12.346,7.25 11,8.596 11,10.25 C11,11.248 11.495,12.127 12.246,12.673 C10.921,13.325 10,14.676 10,16.25 L11,16.25 C11,14.596 12.346,13.25 14,13.25 C15.654,13.25 17,14.596 17,16.25 L18,16.25 C18,14.676 17.079,13.325 15.754,12.673 Z',
        id: 'path-1'
      })
    ),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_contact' },
        _react2.default.createElement(
          'mask',
          { id: 'mask-2', fill: '#fff' },
          _react2.default.createElement('use', { xlinkHref: '#path-1' })
        ),
        _react2.default.createElement('use', { id: 'mask', fill: '#000', xlinkHref: '#path-1' })
      )
    )
  );
};

exports.default = IconContactMediumOutline;