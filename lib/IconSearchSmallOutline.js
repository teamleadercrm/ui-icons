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

var IconSearchSmallOutline = function IconSearchSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_search', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M8.25129325,8.25140395 L7.80036767,8.58405866 C7.15064814,9.07593302 6.48081859,9.31552817 5.6123888,9.30229984 C3.57449706,9.30229984 1.92247776,7.65030822 1.92247776,5.6123888 C1.92247776,3.57446938 3.57449706,1.92247776 5.6123888,1.92247776 C7.65028054,1.92247776 9.30229984,3.57446938 9.30229984,5.6123888 C9.31551895,6.48080014 9.0759607,7.15079574 8.58408633,7.80036767 L8.25129325,8.25140395 L8.25129325,8.25140395 Z M11.9115282,12.8900003 L8.3479966,9.32639496 C7.58264447,9.8910067 6.63649593,10.2247776 5.6123888,10.2247776 C3.06504026,10.2247776 1,8.15978346 1,5.6123888 C1,3.06499414 3.06504026,1 5.6123888,1 C8.15973734,1 10.2247776,3.06499414 10.2247776,5.6123888 C10.2247776,6.63644059 9.89103437,7.58279207 9.32637651,8.34807039 L12.2377163,11.2593364 L12.8900003,11.9116204 L12.2376241,12.5639045 L11.9115282,12.8900003 L11.9115282,12.8900003 Z',
          id: 'Search'
        })
      )
    )
  );
};

exports.default = IconSearchSmallOutline;