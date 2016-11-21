webpackHotUpdate(0,{

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Player = __webpack_require__(180);\n\nvar _Player2 = _interopRequireDefault(_Player);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import Library from '../library/SongCard'\n\nvar propTypes = {\n  currentSong: _react.PropTypes.string,\n  changeSong: _react.PropTypes.function\n};\n\nvar PlayerContainer = function (_React$Component) {\n  _inherits(PlayerContainer, _React$Component);\n\n  function PlayerContainer(props) {\n    _classCallCheck(this, PlayerContainer);\n\n    var _this = _possibleConstructorReturn(this, (PlayerContainer.__proto__ || Object.getPrototypeOf(PlayerContainer)).call(this, props));\n\n    _this.state = {};\n    _this.setCurrentSong = _this.setCurrentSong.bind(_this);\n    return _this;\n  }\n\n  _createClass(PlayerContainer, [{\n    key: 'setCurrentSong',\n    value: function setCurrentSong(e) {\n      this.props.changeSong(e.id);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Player2.default, { currentSong: this.props.currentSong })\n      );\n    }\n  }]);\n\n  return PlayerContainer;\n}(_react2.default.Component);\n\nexports.default = PlayerContainer;\n\n\nPlayerContainer.propTypes = propTypes;\n\nPlayerContainer.defaultProps = {\n  currentSong: 'ISurrender'\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXVkaW9wbGF5ZXIvUGxheWVyQ29udGFpbmVyLmpzPzMwNjQiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY3VycmVudFNvbmciLCJzdHJpbmciLCJjaGFuZ2VTb25nIiwiZnVuY3Rpb24iLCJQbGF5ZXJDb250YWluZXIiLCJwcm9wcyIsInN0YXRlIiwic2V0Q3VycmVudFNvbmciLCJiaW5kIiwiZSIsImlkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLGVBQWEsaUJBQVVDLE1BRFA7QUFFaEJDLGNBQVksaUJBQVVDO0FBRk4sQ0FBbEI7O0lBS3FCQyxlOzs7QUFDbkIsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBSGlCO0FBSWxCOzs7O21DQUVjQyxDLEVBQUc7QUFDaEIsV0FBS0osS0FBTCxDQUFXSCxVQUFYLENBQXNCTyxFQUFFQyxFQUF4QjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDBEQUFRLGFBQWEsS0FBS0wsS0FBTCxDQUFXTCxXQUFoQztBQURGLE9BREY7QUFLRDs7OztFQWpCMEMsZ0JBQU1XLFM7O2tCQUE5QlAsZTs7O0FBb0JyQkEsZ0JBQWdCTCxTQUFoQixHQUE0QkEsU0FBNUI7O0FBRUFLLGdCQUFnQlEsWUFBaEIsR0FBK0I7QUFDN0JaLGVBQWE7QUFEZ0IsQ0FBL0IiLCJmaWxlIjoiMTc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJ1xuLy8gaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vbGlicmFyeS9Tb25nQ2FyZCdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjdXJyZW50U29uZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hhbmdlU29uZzogUHJvcFR5cGVzLmZ1bmN0aW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgdGhpcy5zZXRDdXJyZW50U29uZyA9IHRoaXMuc2V0Q3VycmVudFNvbmcuYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0Q3VycmVudFNvbmcoZSkge1xuICAgIHRoaXMucHJvcHMuY2hhbmdlU29uZyhlLmlkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGxheWVyIGN1cnJlbnRTb25nPXt0aGlzLnByb3BzLmN1cnJlbnRTb25nfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblBsYXllckNvbnRhaW5lci5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcblxuUGxheWVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVudFNvbmc6ICdJU3VycmVuZGVyJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2F1ZGlvcGxheWVyL1BsYXllckNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})