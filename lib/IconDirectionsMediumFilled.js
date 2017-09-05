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

var IconDirectionsMediumFilled = function IconDirectionsMediumFilled(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        d: 'M12.8594,13.4268 C12.7654,13.5068 12.6504,13.5458 12.5364,13.5458 C12.3944,13.5458 12.2534,13.4868 12.1544,13.3688 C11.9754,13.1588 12.0014,12.8438 12.2124,12.6648 L14.1734,10.9998 L10.5004,10.9998 C10.2244,10.9998 10.0004,11.2248 10.0004,11.4998 L10.0004,15.4998 C10.0004,15.7768 9.7764,15.9998 9.5004,15.9998 C9.2234,15.9998 9.0004,15.7768 9.0004,15.4998 L9.0004,11.4998 C9.0004,10.6728 9.6724,9.9998 10.5004,9.9998 L14.1734,9.9998 L12.2124,8.3348 C12.0014,8.1558 11.9754,7.8408 12.1544,7.6308 C12.3334,7.4198 12.6484,7.3938 12.8594,7.5728 L16.3084,10.4998 L12.8594,13.4268 Z M21.5864,10.5858 L13.4144,2.4138 C12.6334,1.6328 11.3664,1.6328 10.5864,2.4138 L2.4144,10.5858 C1.6334,11.3668 1.6334,12.6328 2.4144,13.4138 L10.5864,21.5858 C11.3664,22.3668 12.6334,22.3668 13.4144,21.5858 L21.5864,13.4138 C22.3664,12.6328 22.3664,11.3668 21.5864,10.5858 L21.5864,10.5858 Z',
        id: 'path-1'
      })
    ),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '24x24_directions_filled' },
        _react2.default.createElement(
          'mask',
          { id: 'mask-2', fill: '#fff' },
          _react2.default.createElement('use', { xlinkHref: '#path-1' })
        ),
        _react2.default.createElement('use', { id: 'Fill-2', fill: '#000', xlinkHref: '#path-1' })
      )
    )
  );
};

exports.default = IconDirectionsMediumFilled;