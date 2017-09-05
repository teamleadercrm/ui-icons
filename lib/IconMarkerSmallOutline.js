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

var IconMarkerSmallOutline = function IconMarkerSmallOutline(props) {
  return _react2.default.createElement(
    _IconBase2.default,
    (0, _extends3.default)({ viewBox: '0 0 14 14' }, props),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: '14x14_marker', fillRule: 'nonzero', fill: '#000' },
        _react2.default.createElement('path', {
          d: 'M7.84505368,8.62132754 L8.15392871,8.46952793 C9.14214965,7.98385724 9.778,6.99413695 9.778,5.889 C9.778,4.29366983 8.48410039,3 6.889,3 C5.29389961,3 4,4.29366983 4,5.889 C4,6.99401945 4.63576612,7.98393023 5.62334727,8.46966361 L5.93190592,8.62142556 L6.88873632,10.595624 L7.84505368,8.62132754 Z M6.889,2 C9.036,2 10.778,3.741 10.778,5.889 C10.778,7.421 9.883,8.734 8.595,9.367 L7.32833739,11.9819975 C7.08469989,12.4849818 6.69218665,12.4829211 6.44940508,11.9819975 L5.182,9.367 C3.895,8.734 3,7.421 3,5.889 C3,3.741 4.742,2 6.889,2 Z',
          id: 'icon'
        })
      )
    )
  );
};

exports.default = IconMarkerSmallOutline;