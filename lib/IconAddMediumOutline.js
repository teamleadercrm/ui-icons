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

var IconAddMediumOutline = function IconAddMediumOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_add', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M12.5,11.5 L12.5,4 C12.5,3.724 12.276,3.5 12,3.5 C11.724,3.5 11.5,3.724 11.5,4 L11.5,11.5 L4,11.5 C3.724,11.5 3.5,11.724 3.5,12 C3.5,12.276 3.724,12.5 4,12.5 L11.5,12.5 L11.5,20 C11.5,20.276 11.724,20.5 12,20.5 C12.276,20.5 12.5,20.276 12.5,20 L12.5,12.5 L20,12.5 C20.276,12.5 20.5,12.276 20.5,12 C20.5,11.724 20.276,11.5 20,11.5 L12.5,11.5 Z',
          id: 'icon'
        })
      )
    )
  );
};

exports.default = IconAddMediumOutline;