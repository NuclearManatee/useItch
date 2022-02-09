"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItchProvider;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireWildcard(require("react"));

var _ItchContext = _interopRequireDefault(require("./ItchContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ItchProvider(props) {
  const {
    itchIoClientId,
    scope,
    redirect_uri
  } = props;
  const [isLogged, setIsLogged] = (0, _react.useState)(false);
  const [isLoading, setIsLoading] = (0, _react.useState)(false);
  const [userData, setUserData] = (0, _react.useState)({});
  const [accessToken, setAccessToken] = (0, _react.useState)(""); //useEffect for URI callback

  (0, _react.useEffect)(() => {
    if (window.location.href.startsWith(redirect_uri) && window.location.hash) {
      setIsLoading(true);
      setAccessToken(window.location.hash.replace("#access_token=", ""));
      window.history.replaceState({}, "", redirect_uri);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (accessToken !== "") {
      console.log("useEffect for fetching data");
      fetch("https://itch.io/api/1/" + accessToken + "/me").then(response => response.json().then(data => setUserData(data.user))).catch(error => console.log(error)).finally(() => setIsLoading(false));
    }
  }, [accessToken]);
  (0, _react.useEffect)(() => {
    if (!isLoading && accessToken !== "") setIsLogged(true);
  }, [isLoading, accessToken]);

  function logIn() {
    window.location.href = "https://itch.io/user/oauth?client_id=" + itchIoClientId + "&scope=" + encodeURIComponent(scope) + "&response_type=token" + "&redirect_uri=" + encodeURIComponent(redirect_uri);
  }

  function logOut() {
    console.log("log out");
    setIsLogged(false);
    setAccessToken("");
    setUserData({});
  }

  const itchUser = {
    isLogged: isLogged,
    isLoading: isLoading,
    logIn: logIn,
    logOut: logOut,
    data: userData
  };
  const value = {
    user: itchUser
  };
  console.log("value is");
  console.log(value);
  return /*#__PURE__*/_react.default.createElement(_ItchContext.default.Provider, {
    value: value
  }, props.children);
}