var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var bankOne = [{
  keyCode: 81,
  key: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{
  keyCode: 87,
  key: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{
  keyCode: 69,
  key: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{
  keyCode: 65,
  key: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{
  keyCode: 83,
  key: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{
  keyCode: 68,
  key: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{
  keyCode: 90,
  key: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{
  keyCode: 88,
  key: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{
  keyCode: 67,
  key: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];var



App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', { id: 'container' },
          React.createElement('div', { id: 'drum-machine' },
            bankOne.map(function (items, index) {return React.createElement(Button, { pr: bankOne[index], key: bankOne[index].key });})),

          React.createElement('div', { id: 'display' }, 'waiting...')));


    } }]);return App;}(React.Component);var


Button = function (_React$Component2) {_inherits(Button, _React$Component2);
  function Button(props) {_classCallCheck(this, Button);var _this2 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this,
    props));
    _this2.play = _this2.play.bind(_this2);
    _this2.handleKey = _this2.handleKey.bind(_this2);return _this2;
  }_createClass(Button, [{ key: 'componentDidMount', value: function componentDidMount()

    {
      document.addEventListener('keypress', this.handleKey);
    } }, { key: 'handleKey', value: function handleKey(

    e) {
      var x = e.code.split("").splice(3, 1).toString();
      var y = bankOne.find(function (index) {return index.key === x;});
      //console.log(x, "keyCode");
      if (y) {
        document.getElementById(x).play();
        document.getElementById('display').innerHTML = y.id;
      }
    } }, { key: 'play', value: function play(

    e) {
      e.preventDefault();
      //console.log(this.props.pr.url);
      document.getElementById(this.props.pr.key).play();
      document.getElementById('display').innerHTML = this.props.pr.id;
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('button', { className: 'drum-pad', id: this.props.pr.id, onClick: this.play }, this.props.pr.key,
            React.createElement('audio', { src: this.props.pr.url, id: this.props.pr.key, className: 'clip' }, ' '))));



    } }]);return Button;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));