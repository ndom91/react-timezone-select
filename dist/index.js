var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// build/snowpack/pkg/common/index-8af8b000.js
function getDefaultExportFromCjs(x3) {
  return x3 && x3.__esModule && Object.prototype.hasOwnProperty.call(x3, "default") ? x3["default"] : x3;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i4 = 0; i4 < 10; i4++) {
      test2["_" + String.fromCharCode(i4)] = i4;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n4) {
      return test2[n4];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s3 = 1; s3 < arguments.length; s3++) {
    from = Object(arguments[s3]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i4 = 0; i4 < symbols.length; i4++) {
        if (propIsEnumerable.call(from, symbols[i4])) {
          to[symbols[i4]] = from[symbols[i4]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n4 = 60103, p4 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q3 = 60109, r4 = 60110, t4 = 60112;
  exports.Suspense = 60113;
  var u3 = 60115, v3 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w3 = Symbol.for;
    n4 = w3("react.element");
    p4 = w3("react.portal");
    exports.Fragment = w3("react.fragment");
    exports.StrictMode = w3("react.strict_mode");
    exports.Profiler = w3("react.profiler");
    q3 = w3("react.provider");
    r4 = w3("react.context");
    t4 = w3("react.forward_ref");
    exports.Suspense = w3("react.suspense");
    u3 = w3("react.memo");
    v3 = w3("react.lazy");
  }
  var x3 = typeof Symbol === "function" && Symbol.iterator;
  function y5(a4) {
    if (a4 === null || typeof a4 !== "object")
      return null;
    a4 = x3 && a4[x3] || a4["@@iterator"];
    return typeof a4 === "function" ? a4 : null;
  }
  function z3(a4) {
    for (var b4 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a4, c4 = 1; c4 < arguments.length; c4++)
      b4 += "&args[]=" + encodeURIComponent(arguments[c4]);
    return "Minified React error #" + a4 + "; visit " + b4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A4 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B4 = {};
  function C3(a4, b4, c4) {
    this.props = a4;
    this.context = b4;
    this.refs = B4;
    this.updater = c4 || A4;
  }
  C3.prototype.isReactComponent = {};
  C3.prototype.setState = function(a4, b4) {
    if (typeof a4 !== "object" && typeof a4 !== "function" && a4 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a4, b4, "setState");
  };
  C3.prototype.forceUpdate = function(a4) {
    this.updater.enqueueForceUpdate(this, a4, "forceUpdate");
  };
  function D4() {
  }
  D4.prototype = C3.prototype;
  function E3(a4, b4, c4) {
    this.props = a4;
    this.context = b4;
    this.refs = B4;
    this.updater = c4 || A4;
  }
  var F4 = E3.prototype = new D4();
  F4.constructor = E3;
  objectAssign(F4, C3.prototype);
  F4.isPureReactComponent = true;
  var G4 = {current: null}, H4 = Object.prototype.hasOwnProperty, I4 = {key: true, ref: true, __self: true, __source: true};
  function J3(a4, b4, c4) {
    var e4, d4 = {}, k3 = null, h4 = null;
    if (b4 != null)
      for (e4 in b4.ref !== void 0 && (h4 = b4.ref), b4.key !== void 0 && (k3 = "" + b4.key), b4)
        H4.call(b4, e4) && !I4.hasOwnProperty(e4) && (d4[e4] = b4[e4]);
    var g4 = arguments.length - 2;
    if (g4 === 1)
      d4.children = c4;
    else if (1 < g4) {
      for (var f4 = Array(g4), m4 = 0; m4 < g4; m4++)
        f4[m4] = arguments[m4 + 2];
      d4.children = f4;
    }
    if (a4 && a4.defaultProps)
      for (e4 in g4 = a4.defaultProps, g4)
        d4[e4] === void 0 && (d4[e4] = g4[e4]);
    return {$$typeof: n4, type: a4, key: k3, ref: h4, props: d4, _owner: G4.current};
  }
  function K3(a4, b4) {
    return {$$typeof: n4, type: a4.type, key: b4, ref: a4.ref, props: a4.props, _owner: a4._owner};
  }
  function L3(a4) {
    return typeof a4 === "object" && a4 !== null && a4.$$typeof === n4;
  }
  function escape(a4) {
    var b4 = {"=": "=0", ":": "=2"};
    return "$" + a4.replace(/[=:]/g, function(a5) {
      return b4[a5];
    });
  }
  var M4 = /\/+/g;
  function N4(a4, b4) {
    return typeof a4 === "object" && a4 !== null && a4.key != null ? escape("" + a4.key) : b4.toString(36);
  }
  function O5(a4, b4, c4, e4, d4) {
    var k3 = typeof a4;
    if (k3 === "undefined" || k3 === "boolean")
      a4 = null;
    var h4 = false;
    if (a4 === null)
      h4 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h4 = true;
          break;
        case "object":
          switch (a4.$$typeof) {
            case n4:
            case p4:
              h4 = true;
          }
      }
    if (h4)
      return h4 = a4, d4 = d4(h4), a4 = e4 === "" ? "." + N4(h4, 0) : e4, Array.isArray(d4) ? (c4 = "", a4 != null && (c4 = a4.replace(M4, "$&/") + "/"), O5(d4, b4, c4, "", function(a5) {
        return a5;
      })) : d4 != null && (L3(d4) && (d4 = K3(d4, c4 + (!d4.key || h4 && h4.key === d4.key ? "" : ("" + d4.key).replace(M4, "$&/") + "/") + a4)), b4.push(d4)), 1;
    h4 = 0;
    e4 = e4 === "" ? "." : e4 + ":";
    if (Array.isArray(a4))
      for (var g4 = 0; g4 < a4.length; g4++) {
        k3 = a4[g4];
        var f4 = e4 + N4(k3, g4);
        h4 += O5(k3, b4, c4, f4, d4);
      }
    else if (f4 = y5(a4), typeof f4 === "function")
      for (a4 = f4.call(a4), g4 = 0; !(k3 = a4.next()).done; )
        k3 = k3.value, f4 = e4 + N4(k3, g4++), h4 += O5(k3, b4, c4, f4, d4);
    else if (k3 === "object")
      throw b4 = "" + a4, Error(z3(31, b4 === "[object Object]" ? "object with keys {" + Object.keys(a4).join(", ") + "}" : b4));
    return h4;
  }
  function P4(a4, b4, c4) {
    if (a4 == null)
      return a4;
    var e4 = [], d4 = 0;
    O5(a4, e4, "", "", function(a5) {
      return b4.call(c4, a5, d4++);
    });
    return e4;
  }
  function Q3(a4) {
    if (a4._status === -1) {
      var b4 = a4._result;
      b4 = b4();
      a4._status = 0;
      a4._result = b4;
      b4.then(function(b5) {
        a4._status === 0 && (b5 = b5.default, a4._status = 1, a4._result = b5);
      }, function(b5) {
        a4._status === 0 && (a4._status = 2, a4._result = b5);
      });
    }
    if (a4._status === 1)
      return a4._result;
    throw a4._result;
  }
  var R4 = {current: null};
  function S4() {
    var a4 = R4.current;
    if (a4 === null)
      throw Error(z3(321));
    return a4;
  }
  var T4 = {ReactCurrentDispatcher: R4, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G4, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P4, forEach: function(a4, b4, c4) {
    P4(a4, function() {
      b4.apply(this, arguments);
    }, c4);
  }, count: function(a4) {
    var b4 = 0;
    P4(a4, function() {
      b4++;
    });
    return b4;
  }, toArray: function(a4) {
    return P4(a4, function(a5) {
      return a5;
    }) || [];
  }, only: function(a4) {
    if (!L3(a4))
      throw Error(z3(143));
    return a4;
  }};
  exports.Component = C3;
  exports.PureComponent = E3;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T4;
  exports.cloneElement = function(a4, b4, c4) {
    if (a4 === null || a4 === void 0)
      throw Error(z3(267, a4));
    var e4 = objectAssign({}, a4.props), d4 = a4.key, k3 = a4.ref, h4 = a4._owner;
    if (b4 != null) {
      b4.ref !== void 0 && (k3 = b4.ref, h4 = G4.current);
      b4.key !== void 0 && (d4 = "" + b4.key);
      if (a4.type && a4.type.defaultProps)
        var g4 = a4.type.defaultProps;
      for (f4 in b4)
        H4.call(b4, f4) && !I4.hasOwnProperty(f4) && (e4[f4] = b4[f4] === void 0 && g4 !== void 0 ? g4[f4] : b4[f4]);
    }
    var f4 = arguments.length - 2;
    if (f4 === 1)
      e4.children = c4;
    else if (1 < f4) {
      g4 = Array(f4);
      for (var m4 = 0; m4 < f4; m4++)
        g4[m4] = arguments[m4 + 2];
      e4.children = g4;
    }
    return {
      $$typeof: n4,
      type: a4.type,
      key: d4,
      ref: k3,
      props: e4,
      _owner: h4
    };
  };
  exports.createContext = function(a4, b4) {
    b4 === void 0 && (b4 = null);
    a4 = {$$typeof: r4, _calculateChangedBits: b4, _currentValue: a4, _currentValue2: a4, _threadCount: 0, Provider: null, Consumer: null};
    a4.Provider = {$$typeof: q3, _context: a4};
    return a4.Consumer = a4;
  };
  exports.createElement = J3;
  exports.createFactory = function(a4) {
    var b4 = J3.bind(null, a4);
    b4.type = a4;
    return b4;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a4) {
    return {$$typeof: t4, render: a4};
  };
  exports.isValidElement = L3;
  exports.lazy = function(a4) {
    return {$$typeof: v3, _payload: {_status: -1, _result: a4}, _init: Q3};
  };
  exports.memo = function(a4, b4) {
    return {$$typeof: u3, type: a4, compare: b4 === void 0 ? null : b4};
  };
  exports.useCallback = function(a4, b4) {
    return S4().useCallback(a4, b4);
  };
  exports.useContext = function(a4, b4) {
    return S4().useContext(a4, b4);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a4, b4) {
    return S4().useEffect(a4, b4);
  };
  exports.useImperativeHandle = function(a4, b4, c4) {
    return S4().useImperativeHandle(a4, b4, c4);
  };
  exports.useLayoutEffect = function(a4, b4) {
    return S4().useLayoutEffect(a4, b4);
  };
  exports.useMemo = function(a4, b4) {
    return S4().useMemo(a4, b4);
  };
  exports.useReducer = function(a4, b4, c4) {
    return S4().useReducer(a4, b4, c4);
  };
  exports.useRef = function(a4) {
    return S4().useRef(a4);
  };
  exports.useState = function(a4) {
    return S4().useState(a4);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/snowpack/pkg/react.js
var useMemo = react.useMemo;
var useState = react.useState;

// build/snowpack/pkg/common/index-36c3da37.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f4, g4, h4, k3;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l4 = performance;
    exports.unstable_now = function() {
      return l4.now();
    };
  } else {
    var p4 = Date, q3 = p4.now();
    exports.unstable_now = function() {
      return p4.now() - q3;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t4 = null, u3 = null, w3 = function() {
      if (t4 !== null)
        try {
          var a4 = exports.unstable_now();
          t4(true, a4);
          t4 = null;
        } catch (b4) {
          throw setTimeout(w3, 0), b4;
        }
    };
    f4 = function(a4) {
      t4 !== null ? setTimeout(f4, 0, a4) : (t4 = a4, setTimeout(w3, 0));
    };
    g4 = function(a4, b4) {
      u3 = setTimeout(a4, b4);
    };
    h4 = function() {
      clearTimeout(u3);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k3 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x3 = window.setTimeout, y5 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A4 = false, B4 = null, C3 = -1, D4 = 5, E3 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E3;
    };
    k3 = function() {
    };
    exports.unstable_forceFrameRate = function(a4) {
      0 > a4 || 125 < a4 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D4 = 0 < a4 ? Math.floor(1e3 / a4) : 5;
    };
    var F4 = new MessageChannel(), G4 = F4.port2;
    F4.port1.onmessage = function() {
      if (B4 !== null) {
        var a4 = exports.unstable_now();
        E3 = a4 + D4;
        try {
          B4(true, a4) ? G4.postMessage(null) : (A4 = false, B4 = null);
        } catch (b4) {
          throw G4.postMessage(null), b4;
        }
      } else
        A4 = false;
    };
    f4 = function(a4) {
      B4 = a4;
      A4 || (A4 = true, G4.postMessage(null));
    };
    g4 = function(a4, b4) {
      C3 = x3(function() {
        a4(exports.unstable_now());
      }, b4);
    };
    h4 = function() {
      y5(C3);
      C3 = -1;
    };
  }
  function H4(a4, b4) {
    var c4 = a4.length;
    a4.push(b4);
    a:
      for (; ; ) {
        var d4 = c4 - 1 >>> 1, e4 = a4[d4];
        if (e4 !== void 0 && 0 < I4(e4, b4))
          a4[d4] = b4, a4[c4] = e4, c4 = d4;
        else
          break a;
      }
  }
  function J3(a4) {
    a4 = a4[0];
    return a4 === void 0 ? null : a4;
  }
  function K3(a4) {
    var b4 = a4[0];
    if (b4 !== void 0) {
      var c4 = a4.pop();
      if (c4 !== b4) {
        a4[0] = c4;
        a:
          for (var d4 = 0, e4 = a4.length; d4 < e4; ) {
            var m4 = 2 * (d4 + 1) - 1, n4 = a4[m4], v3 = m4 + 1, r4 = a4[v3];
            if (n4 !== void 0 && 0 > I4(n4, c4))
              r4 !== void 0 && 0 > I4(r4, n4) ? (a4[d4] = r4, a4[v3] = c4, d4 = v3) : (a4[d4] = n4, a4[m4] = c4, d4 = m4);
            else if (r4 !== void 0 && 0 > I4(r4, c4))
              a4[d4] = r4, a4[v3] = c4, d4 = v3;
            else
              break a;
          }
      }
      return b4;
    }
    return null;
  }
  function I4(a4, b4) {
    var c4 = a4.sortIndex - b4.sortIndex;
    return c4 !== 0 ? c4 : a4.id - b4.id;
  }
  var L3 = [], M4 = [], N4 = 1, O5 = null, P4 = 3, Q3 = false, R4 = false, S4 = false;
  function T4(a4) {
    for (var b4 = J3(M4); b4 !== null; ) {
      if (b4.callback === null)
        K3(M4);
      else if (b4.startTime <= a4)
        K3(M4), b4.sortIndex = b4.expirationTime, H4(L3, b4);
      else
        break;
      b4 = J3(M4);
    }
  }
  function U4(a4) {
    S4 = false;
    T4(a4);
    if (!R4)
      if (J3(L3) !== null)
        R4 = true, f4(V4);
      else {
        var b4 = J3(M4);
        b4 !== null && g4(U4, b4.startTime - a4);
      }
  }
  function V4(a4, b4) {
    R4 = false;
    S4 && (S4 = false, h4());
    Q3 = true;
    var c4 = P4;
    try {
      T4(b4);
      for (O5 = J3(L3); O5 !== null && (!(O5.expirationTime > b4) || a4 && !exports.unstable_shouldYield()); ) {
        var d4 = O5.callback;
        if (typeof d4 === "function") {
          O5.callback = null;
          P4 = O5.priorityLevel;
          var e4 = d4(O5.expirationTime <= b4);
          b4 = exports.unstable_now();
          typeof e4 === "function" ? O5.callback = e4 : O5 === J3(L3) && K3(L3);
          T4(b4);
        } else
          K3(L3);
        O5 = J3(L3);
      }
      if (O5 !== null)
        var m4 = true;
      else {
        var n4 = J3(M4);
        n4 !== null && g4(U4, n4.startTime - b4);
        m4 = false;
      }
      return m4;
    } finally {
      O5 = null, P4 = c4, Q3 = false;
    }
  }
  var W3 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a4) {
    a4.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R4 || Q3 || (R4 = true, f4(V4));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P4;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J3(L3);
  };
  exports.unstable_next = function(a4) {
    switch (P4) {
      case 1:
      case 2:
      case 3:
        var b4 = 3;
        break;
      default:
        b4 = P4;
    }
    var c4 = P4;
    P4 = b4;
    try {
      return a4();
    } finally {
      P4 = c4;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W3;
  exports.unstable_runWithPriority = function(a4, b4) {
    switch (a4) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a4 = 3;
    }
    var c4 = P4;
    P4 = a4;
    try {
      return b4();
    } finally {
      P4 = c4;
    }
  };
  exports.unstable_scheduleCallback = function(a4, b4, c4) {
    var d4 = exports.unstable_now();
    typeof c4 === "object" && c4 !== null ? (c4 = c4.delay, c4 = typeof c4 === "number" && 0 < c4 ? d4 + c4 : d4) : c4 = d4;
    switch (a4) {
      case 1:
        var e4 = -1;
        break;
      case 2:
        e4 = 250;
        break;
      case 5:
        e4 = 1073741823;
        break;
      case 4:
        e4 = 1e4;
        break;
      default:
        e4 = 5e3;
    }
    e4 = c4 + e4;
    a4 = {id: N4++, callback: b4, priorityLevel: a4, startTime: c4, expirationTime: e4, sortIndex: -1};
    c4 > d4 ? (a4.sortIndex = c4, H4(M4, a4), J3(L3) === null && a4 === J3(M4) && (S4 ? h4() : S4 = true, g4(U4, c4 - d4))) : (a4.sortIndex = e4, H4(L3, a4), R4 || Q3 || (R4 = true, f4(V4)));
    return a4;
  };
  exports.unstable_wrapCallback = function(a4) {
    var b4 = P4;
    return function() {
      var c4 = P4;
      P4 = b4;
      try {
        return a4.apply(this, arguments);
      } finally {
        P4 = c4;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a4) {
  for (var b4 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a4, c4 = 1; c4 < arguments.length; c4++)
    b4 += "&args[]=" + encodeURIComponent(arguments[c4]);
  return "Minified React error #" + a4 + "; visit " + b4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a4, b4) {
  ea(a4, b4);
  ea(a4 + "Capture", b4);
}
function ea(a4, b4) {
  ca[a4] = b4;
  for (a4 = 0; a4 < b4.length; a4++)
    ba.add(b4[a4]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a4) {
  if (ia.call(ka, a4))
    return true;
  if (ia.call(ja, a4))
    return false;
  if (ha.test(a4))
    return ka[a4] = true;
  ja[a4] = true;
  return false;
}
function ma(a4, b4, c4, d4) {
  if (c4 !== null && c4.type === 0)
    return false;
  switch (typeof b4) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d4)
        return false;
      if (c4 !== null)
        return !c4.acceptsBooleans;
      a4 = a4.toLowerCase().slice(0, 5);
      return a4 !== "data-" && a4 !== "aria-";
    default:
      return false;
  }
}
function na(a4, b4, c4, d4) {
  if (b4 === null || typeof b4 === "undefined" || ma(a4, b4, c4, d4))
    return true;
  if (d4)
    return false;
  if (c4 !== null)
    switch (c4.type) {
      case 3:
        return !b4;
      case 4:
        return b4 === false;
      case 5:
        return isNaN(b4);
      case 6:
        return isNaN(b4) || 1 > b4;
    }
  return false;
}
function B(a4, b4, c4, d4, e4, f4, g4) {
  this.acceptsBooleans = b4 === 2 || b4 === 3 || b4 === 4;
  this.attributeName = d4;
  this.attributeNamespace = e4;
  this.mustUseProperty = c4;
  this.propertyName = a4;
  this.type = b4;
  this.sanitizeURL = f4;
  this.removeEmptyString = g4;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a4) {
  D[a4] = new B(a4, 0, false, a4, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a4) {
  var b4 = a4[0];
  D[b4] = new B(b4, 1, false, a4[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a4) {
  D[a4] = new B(a4, 2, false, a4.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a4) {
  D[a4] = new B(a4, 2, false, a4, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a4) {
  D[a4] = new B(a4, 3, false, a4.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a4) {
  D[a4] = new B(a4, 3, true, a4, null, false, false);
});
["capture", "download"].forEach(function(a4) {
  D[a4] = new B(a4, 4, false, a4, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a4) {
  D[a4] = new B(a4, 6, false, a4, null, false, false);
});
["rowSpan", "start"].forEach(function(a4) {
  D[a4] = new B(a4, 5, false, a4.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a4) {
  return a4[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a4) {
  var b4 = a4.replace(oa, pa);
  D[b4] = new B(b4, 1, false, a4, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a4) {
  var b4 = a4.replace(oa, pa);
  D[b4] = new B(b4, 1, false, a4, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a4) {
  var b4 = a4.replace(oa, pa);
  D[b4] = new B(b4, 1, false, a4, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a4) {
  D[a4] = new B(a4, 1, false, a4.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a4) {
  D[a4] = new B(a4, 1, false, a4.toLowerCase(), null, true, true);
});
function qa(a4, b4, c4, d4) {
  var e4 = D.hasOwnProperty(b4) ? D[b4] : null;
  var f4 = e4 !== null ? e4.type === 0 : d4 ? false : !(2 < b4.length) || b4[0] !== "o" && b4[0] !== "O" || b4[1] !== "n" && b4[1] !== "N" ? false : true;
  f4 || (na(b4, c4, e4, d4) && (c4 = null), d4 || e4 === null ? la(b4) && (c4 === null ? a4.removeAttribute(b4) : a4.setAttribute(b4, "" + c4)) : e4.mustUseProperty ? a4[e4.propertyName] = c4 === null ? e4.type === 3 ? false : "" : c4 : (b4 = e4.attributeName, d4 = e4.attributeNamespace, c4 === null ? a4.removeAttribute(b4) : (e4 = e4.type, c4 = e4 === 3 || e4 === 4 && c4 === true ? "" : "" + c4, d4 ? a4.setAttributeNS(d4, b4, c4) : a4.setAttribute(b4, c4))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E3 = Symbol.for;
  sa = E3("react.element");
  ta = E3("react.portal");
  ua = E3("react.fragment");
  wa = E3("react.strict_mode");
  xa = E3("react.profiler");
  ya = E3("react.provider");
  za = E3("react.context");
  Aa = E3("react.forward_ref");
  Ba = E3("react.suspense");
  Ca = E3("react.suspense_list");
  Da = E3("react.memo");
  Ea = E3("react.lazy");
  Fa = E3("react.block");
  E3("react.scope");
  Ga = E3("react.opaque.id");
  Ha = E3("react.debug_trace_mode");
  Ia = E3("react.offscreen");
  Ja = E3("react.legacy_hidden");
}
var E3;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a4) {
  if (a4 === null || typeof a4 !== "object")
    return null;
  a4 = Ka && a4[Ka] || a4["@@iterator"];
  return typeof a4 === "function" ? a4 : null;
}
var Ma;
function Na(a4) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c4) {
      var b4 = c4.stack.trim().match(/\n( *(at )?)/);
      Ma = b4 && b4[1] || "";
    }
  return "\n" + Ma + a4;
}
var Oa = false;
function Pa(a4, b4) {
  if (!a4 || Oa)
    return "";
  Oa = true;
  var c4 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b4)
      if (b4 = function() {
        throw Error();
      }, Object.defineProperty(b4.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b4, []);
        } catch (k3) {
          var d4 = k3;
        }
        Reflect.construct(a4, [], b4);
      } else {
        try {
          b4.call();
        } catch (k3) {
          d4 = k3;
        }
        a4.call(b4.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k3) {
        d4 = k3;
      }
      a4();
    }
  } catch (k3) {
    if (k3 && d4 && typeof k3.stack === "string") {
      for (var e4 = k3.stack.split("\n"), f4 = d4.stack.split("\n"), g4 = e4.length - 1, h4 = f4.length - 1; 1 <= g4 && 0 <= h4 && e4[g4] !== f4[h4]; )
        h4--;
      for (; 1 <= g4 && 0 <= h4; g4--, h4--)
        if (e4[g4] !== f4[h4]) {
          if (g4 !== 1 || h4 !== 1) {
            do
              if (g4--, h4--, 0 > h4 || e4[g4] !== f4[h4])
                return "\n" + e4[g4].replace(" at new ", " at ");
            while (1 <= g4 && 0 <= h4);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c4;
  }
  return (a4 = a4 ? a4.displayName || a4.name : "") ? Na(a4) : "";
}
function Qa(a4) {
  switch (a4.tag) {
    case 5:
      return Na(a4.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a4 = Pa(a4.type, false), a4;
    case 11:
      return a4 = Pa(a4.type.render, false), a4;
    case 22:
      return a4 = Pa(a4.type._render, false), a4;
    case 1:
      return a4 = Pa(a4.type, true), a4;
    default:
      return "";
  }
}
function Ra(a4) {
  if (a4 == null)
    return null;
  if (typeof a4 === "function")
    return a4.displayName || a4.name || null;
  if (typeof a4 === "string")
    return a4;
  switch (a4) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a4 === "object")
    switch (a4.$$typeof) {
      case za:
        return (a4.displayName || "Context") + ".Consumer";
      case ya:
        return (a4._context.displayName || "Context") + ".Provider";
      case Aa:
        var b4 = a4.render;
        b4 = b4.displayName || b4.name || "";
        return a4.displayName || (b4 !== "" ? "ForwardRef(" + b4 + ")" : "ForwardRef");
      case Da:
        return Ra(a4.type);
      case Fa:
        return Ra(a4._render);
      case Ea:
        b4 = a4._payload;
        a4 = a4._init;
        try {
          return Ra(a4(b4));
        } catch (c4) {
        }
    }
  return null;
}
function Sa(a4) {
  switch (typeof a4) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a4;
    default:
      return "";
  }
}
function Ta(a4) {
  var b4 = a4.type;
  return (a4 = a4.nodeName) && a4.toLowerCase() === "input" && (b4 === "checkbox" || b4 === "radio");
}
function Ua(a4) {
  var b4 = Ta(a4) ? "checked" : "value", c4 = Object.getOwnPropertyDescriptor(a4.constructor.prototype, b4), d4 = "" + a4[b4];
  if (!a4.hasOwnProperty(b4) && typeof c4 !== "undefined" && typeof c4.get === "function" && typeof c4.set === "function") {
    var e4 = c4.get, f4 = c4.set;
    Object.defineProperty(a4, b4, {configurable: true, get: function() {
      return e4.call(this);
    }, set: function(a5) {
      d4 = "" + a5;
      f4.call(this, a5);
    }});
    Object.defineProperty(a4, b4, {enumerable: c4.enumerable});
    return {getValue: function() {
      return d4;
    }, setValue: function(a5) {
      d4 = "" + a5;
    }, stopTracking: function() {
      a4._valueTracker = null;
      delete a4[b4];
    }};
  }
}
function Va(a4) {
  a4._valueTracker || (a4._valueTracker = Ua(a4));
}
function Wa(a4) {
  if (!a4)
    return false;
  var b4 = a4._valueTracker;
  if (!b4)
    return true;
  var c4 = b4.getValue();
  var d4 = "";
  a4 && (d4 = Ta(a4) ? a4.checked ? "true" : "false" : a4.value);
  a4 = d4;
  return a4 !== c4 ? (b4.setValue(a4), true) : false;
}
function Xa(a4) {
  a4 = a4 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a4 === "undefined")
    return null;
  try {
    return a4.activeElement || a4.body;
  } catch (b4) {
    return a4.body;
  }
}
function Ya(a4, b4) {
  var c4 = b4.checked;
  return objectAssign({}, b4, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c4 != null ? c4 : a4._wrapperState.initialChecked});
}
function Za(a4, b4) {
  var c4 = b4.defaultValue == null ? "" : b4.defaultValue, d4 = b4.checked != null ? b4.checked : b4.defaultChecked;
  c4 = Sa(b4.value != null ? b4.value : c4);
  a4._wrapperState = {initialChecked: d4, initialValue: c4, controlled: b4.type === "checkbox" || b4.type === "radio" ? b4.checked != null : b4.value != null};
}
function $a(a4, b4) {
  b4 = b4.checked;
  b4 != null && qa(a4, "checked", b4, false);
}
function ab(a4, b4) {
  $a(a4, b4);
  var c4 = Sa(b4.value), d4 = b4.type;
  if (c4 != null)
    if (d4 === "number") {
      if (c4 === 0 && a4.value === "" || a4.value != c4)
        a4.value = "" + c4;
    } else
      a4.value !== "" + c4 && (a4.value = "" + c4);
  else if (d4 === "submit" || d4 === "reset") {
    a4.removeAttribute("value");
    return;
  }
  b4.hasOwnProperty("value") ? bb(a4, b4.type, c4) : b4.hasOwnProperty("defaultValue") && bb(a4, b4.type, Sa(b4.defaultValue));
  b4.checked == null && b4.defaultChecked != null && (a4.defaultChecked = !!b4.defaultChecked);
}
function cb(a4, b4, c4) {
  if (b4.hasOwnProperty("value") || b4.hasOwnProperty("defaultValue")) {
    var d4 = b4.type;
    if (!(d4 !== "submit" && d4 !== "reset" || b4.value !== void 0 && b4.value !== null))
      return;
    b4 = "" + a4._wrapperState.initialValue;
    c4 || b4 === a4.value || (a4.value = b4);
    a4.defaultValue = b4;
  }
  c4 = a4.name;
  c4 !== "" && (a4.name = "");
  a4.defaultChecked = !!a4._wrapperState.initialChecked;
  c4 !== "" && (a4.name = c4);
}
function bb(a4, b4, c4) {
  if (b4 !== "number" || Xa(a4.ownerDocument) !== a4)
    c4 == null ? a4.defaultValue = "" + a4._wrapperState.initialValue : a4.defaultValue !== "" + c4 && (a4.defaultValue = "" + c4);
}
function db(a4) {
  var b4 = "";
  react.Children.forEach(a4, function(a5) {
    a5 != null && (b4 += a5);
  });
  return b4;
}
function eb(a4, b4) {
  a4 = objectAssign({children: void 0}, b4);
  if (b4 = db(b4.children))
    a4.children = b4;
  return a4;
}
function fb(a4, b4, c4, d4) {
  a4 = a4.options;
  if (b4) {
    b4 = {};
    for (var e4 = 0; e4 < c4.length; e4++)
      b4["$" + c4[e4]] = true;
    for (c4 = 0; c4 < a4.length; c4++)
      e4 = b4.hasOwnProperty("$" + a4[c4].value), a4[c4].selected !== e4 && (a4[c4].selected = e4), e4 && d4 && (a4[c4].defaultSelected = true);
  } else {
    c4 = "" + Sa(c4);
    b4 = null;
    for (e4 = 0; e4 < a4.length; e4++) {
      if (a4[e4].value === c4) {
        a4[e4].selected = true;
        d4 && (a4[e4].defaultSelected = true);
        return;
      }
      b4 !== null || a4[e4].disabled || (b4 = a4[e4]);
    }
    b4 !== null && (b4.selected = true);
  }
}
function gb(a4, b4) {
  if (b4.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b4, {value: void 0, defaultValue: void 0, children: "" + a4._wrapperState.initialValue});
}
function hb(a4, b4) {
  var c4 = b4.value;
  if (c4 == null) {
    c4 = b4.children;
    b4 = b4.defaultValue;
    if (c4 != null) {
      if (b4 != null)
        throw Error(y(92));
      if (Array.isArray(c4)) {
        if (!(1 >= c4.length))
          throw Error(y(93));
        c4 = c4[0];
      }
      b4 = c4;
    }
    b4 == null && (b4 = "");
    c4 = b4;
  }
  a4._wrapperState = {initialValue: Sa(c4)};
}
function ib(a4, b4) {
  var c4 = Sa(b4.value), d4 = Sa(b4.defaultValue);
  c4 != null && (c4 = "" + c4, c4 !== a4.value && (a4.value = c4), b4.defaultValue == null && a4.defaultValue !== c4 && (a4.defaultValue = c4));
  d4 != null && (a4.defaultValue = "" + d4);
}
function jb(a4) {
  var b4 = a4.textContent;
  b4 === a4._wrapperState.initialValue && b4 !== "" && b4 !== null && (a4.value = b4);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a4) {
  switch (a4) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a4, b4) {
  return a4 == null || a4 === "http://www.w3.org/1999/xhtml" ? lb(b4) : a4 === "http://www.w3.org/2000/svg" && b4 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a4;
}
var nb;
var ob = function(a4) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b4, c4, d4, e4) {
    MSApp.execUnsafeLocalFunction(function() {
      return a4(b4, c4, d4, e4);
    });
  } : a4;
}(function(a4, b4) {
  if (a4.namespaceURI !== kb.svg || "innerHTML" in a4)
    a4.innerHTML = b4;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b4.valueOf().toString() + "</svg>";
    for (b4 = nb.firstChild; a4.firstChild; )
      a4.removeChild(a4.firstChild);
    for (; b4.firstChild; )
      a4.appendChild(b4.firstChild);
  }
});
function pb(a4, b4) {
  if (b4) {
    var c4 = a4.firstChild;
    if (c4 && c4 === a4.lastChild && c4.nodeType === 3) {
      c4.nodeValue = b4;
      return;
    }
  }
  a4.textContent = b4;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a4) {
  rb.forEach(function(b4) {
    b4 = b4 + a4.charAt(0).toUpperCase() + a4.substring(1);
    qb[b4] = qb[a4];
  });
});
function sb(a4, b4, c4) {
  return b4 == null || typeof b4 === "boolean" || b4 === "" ? "" : c4 || typeof b4 !== "number" || b4 === 0 || qb.hasOwnProperty(a4) && qb[a4] ? ("" + b4).trim() : b4 + "px";
}
function tb(a4, b4) {
  a4 = a4.style;
  for (var c4 in b4)
    if (b4.hasOwnProperty(c4)) {
      var d4 = c4.indexOf("--") === 0, e4 = sb(c4, b4[c4], d4);
      c4 === "float" && (c4 = "cssFloat");
      d4 ? a4.setProperty(c4, e4) : a4[c4] = e4;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a4, b4) {
  if (b4) {
    if (ub[a4] && (b4.children != null || b4.dangerouslySetInnerHTML != null))
      throw Error(y(137, a4));
    if (b4.dangerouslySetInnerHTML != null) {
      if (b4.children != null)
        throw Error(y(60));
      if (!(typeof b4.dangerouslySetInnerHTML === "object" && "__html" in b4.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b4.style != null && typeof b4.style !== "object")
      throw Error(y(62));
  }
}
function wb(a4, b4) {
  if (a4.indexOf("-") === -1)
    return typeof b4.is === "string";
  switch (a4) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a4) {
  a4 = a4.target || a4.srcElement || window;
  a4.correspondingUseElement && (a4 = a4.correspondingUseElement);
  return a4.nodeType === 3 ? a4.parentNode : a4;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a4) {
  if (a4 = Cb(a4)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b4 = a4.stateNode;
    b4 && (b4 = Db(b4), yb(a4.stateNode, a4.type, b4));
  }
}
function Eb(a4) {
  zb ? Ab ? Ab.push(a4) : Ab = [a4] : zb = a4;
}
function Fb() {
  if (zb) {
    var a4 = zb, b4 = Ab;
    Ab = zb = null;
    Bb(a4);
    if (b4)
      for (a4 = 0; a4 < b4.length; a4++)
        Bb(b4[a4]);
  }
}
function Gb(a4, b4) {
  return a4(b4);
}
function Hb(a4, b4, c4, d4, e4) {
  return a4(b4, c4, d4, e4);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a4, b4, c4) {
  if (Lb)
    return a4(b4, c4);
  Lb = true;
  try {
    return Jb(a4, b4, c4);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a4, b4) {
  var c4 = a4.stateNode;
  if (c4 === null)
    return null;
  var d4 = Db(c4);
  if (d4 === null)
    return null;
  c4 = d4[b4];
  a:
    switch (b4) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d4 = !d4.disabled) || (a4 = a4.type, d4 = !(a4 === "button" || a4 === "input" || a4 === "select" || a4 === "textarea"));
        a4 = !d4;
        break a;
      default:
        a4 = false;
    }
  if (a4)
    return null;
  if (c4 && typeof c4 !== "function")
    throw Error(y(231, b4, typeof c4));
  return c4;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a4) {
    Pb = false;
  }
var Qb;
function Rb(a4, b4, c4, d4, e4, f4, g4, h4, k3) {
  var l4 = Array.prototype.slice.call(arguments, 3);
  try {
    b4.apply(c4, l4);
  } catch (n4) {
    this.onError(n4);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a4) {
  Sb = true;
  Tb = a4;
}};
function Xb(a4, b4, c4, d4, e4, f4, g4, h4, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a4, b4, c4, d4, e4, f4, g4, h4, k3) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l4 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l4);
  }
}
function Zb(a4) {
  var b4 = a4, c4 = a4;
  if (a4.alternate)
    for (; b4.return; )
      b4 = b4.return;
  else {
    a4 = b4;
    do
      b4 = a4, (b4.flags & 1026) !== 0 && (c4 = b4.return), a4 = b4.return;
    while (a4);
  }
  return b4.tag === 3 ? c4 : null;
}
function $b(a4) {
  if (a4.tag === 13) {
    var b4 = a4.memoizedState;
    b4 === null && (a4 = a4.alternate, a4 !== null && (b4 = a4.memoizedState));
    if (b4 !== null)
      return b4.dehydrated;
  }
  return null;
}
function ac(a4) {
  if (Zb(a4) !== a4)
    throw Error(y(188));
}
function bc(a4) {
  var b4 = a4.alternate;
  if (!b4) {
    b4 = Zb(a4);
    if (b4 === null)
      throw Error(y(188));
    return b4 !== a4 ? null : a4;
  }
  for (var c4 = a4, d4 = b4; ; ) {
    var e4 = c4.return;
    if (e4 === null)
      break;
    var f4 = e4.alternate;
    if (f4 === null) {
      d4 = e4.return;
      if (d4 !== null) {
        c4 = d4;
        continue;
      }
      break;
    }
    if (e4.child === f4.child) {
      for (f4 = e4.child; f4; ) {
        if (f4 === c4)
          return ac(e4), a4;
        if (f4 === d4)
          return ac(e4), b4;
        f4 = f4.sibling;
      }
      throw Error(y(188));
    }
    if (c4.return !== d4.return)
      c4 = e4, d4 = f4;
    else {
      for (var g4 = false, h4 = e4.child; h4; ) {
        if (h4 === c4) {
          g4 = true;
          c4 = e4;
          d4 = f4;
          break;
        }
        if (h4 === d4) {
          g4 = true;
          d4 = e4;
          c4 = f4;
          break;
        }
        h4 = h4.sibling;
      }
      if (!g4) {
        for (h4 = f4.child; h4; ) {
          if (h4 === c4) {
            g4 = true;
            c4 = f4;
            d4 = e4;
            break;
          }
          if (h4 === d4) {
            g4 = true;
            d4 = f4;
            c4 = e4;
            break;
          }
          h4 = h4.sibling;
        }
        if (!g4)
          throw Error(y(189));
      }
    }
    if (c4.alternate !== d4)
      throw Error(y(190));
  }
  if (c4.tag !== 3)
    throw Error(y(188));
  return c4.stateNode.current === c4 ? a4 : b4;
}
function cc(a4) {
  a4 = bc(a4);
  if (!a4)
    return null;
  for (var b4 = a4; ; ) {
    if (b4.tag === 5 || b4.tag === 6)
      return b4;
    if (b4.child)
      b4.child.return = b4, b4 = b4.child;
    else {
      if (b4 === a4)
        break;
      for (; !b4.sibling; ) {
        if (!b4.return || b4.return === a4)
          return null;
        b4 = b4.return;
      }
      b4.sibling.return = b4.return;
      b4 = b4.sibling;
    }
  }
  return null;
}
function dc(a4, b4) {
  for (var c4 = a4.alternate; b4 !== null; ) {
    if (b4 === a4 || b4 === c4)
      return true;
    b4 = b4.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a4, b4, c4, d4, e4) {
  return {blockedOn: a4, domEventName: b4, eventSystemFlags: c4 | 16, nativeEvent: e4, targetContainers: [d4]};
}
function sc(a4, b4) {
  switch (a4) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b4.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b4.pointerId);
  }
}
function tc(a4, b4, c4, d4, e4, f4) {
  if (a4 === null || a4.nativeEvent !== f4)
    return a4 = rc(b4, c4, d4, e4, f4), b4 !== null && (b4 = Cb(b4), b4 !== null && fc(b4)), a4;
  a4.eventSystemFlags |= d4;
  b4 = a4.targetContainers;
  e4 !== null && b4.indexOf(e4) === -1 && b4.push(e4);
  return a4;
}
function uc(a4, b4, c4, d4, e4) {
  switch (b4) {
    case "focusin":
      return kc = tc(kc, a4, b4, c4, d4, e4), true;
    case "dragenter":
      return lc = tc(lc, a4, b4, c4, d4, e4), true;
    case "mouseover":
      return mc = tc(mc, a4, b4, c4, d4, e4), true;
    case "pointerover":
      var f4 = e4.pointerId;
      nc.set(f4, tc(nc.get(f4) || null, a4, b4, c4, d4, e4));
      return true;
    case "gotpointercapture":
      return f4 = e4.pointerId, oc.set(f4, tc(oc.get(f4) || null, a4, b4, c4, d4, e4)), true;
  }
  return false;
}
function vc(a4) {
  var b4 = wc(a4.target);
  if (b4 !== null) {
    var c4 = Zb(b4);
    if (c4 !== null) {
      if (b4 = c4.tag, b4 === 13) {
        if (b4 = $b(c4), b4 !== null) {
          a4.blockedOn = b4;
          hc(a4.lanePriority, function() {
            scheduler.unstable_runWithPriority(a4.priority, function() {
              gc(c4);
            });
          });
          return;
        }
      } else if (b4 === 3 && c4.stateNode.hydrate) {
        a4.blockedOn = c4.tag === 3 ? c4.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a4.blockedOn = null;
}
function xc(a4) {
  if (a4.blockedOn !== null)
    return false;
  for (var b4 = a4.targetContainers; 0 < b4.length; ) {
    var c4 = yc(a4.domEventName, a4.eventSystemFlags, b4[0], a4.nativeEvent);
    if (c4 !== null)
      return b4 = Cb(c4), b4 !== null && fc(b4), a4.blockedOn = c4, false;
    b4.shift();
  }
  return true;
}
function zc(a4, b4, c4) {
  xc(a4) && c4.delete(b4);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a4 = jc[0];
    if (a4.blockedOn !== null) {
      a4 = Cb(a4.blockedOn);
      a4 !== null && ec(a4);
      break;
    }
    for (var b4 = a4.targetContainers; 0 < b4.length; ) {
      var c4 = yc(a4.domEventName, a4.eventSystemFlags, b4[0], a4.nativeEvent);
      if (c4 !== null) {
        a4.blockedOn = c4;
        break;
      }
      b4.shift();
    }
    a4.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a4, b4) {
  a4.blockedOn === b4 && (a4.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a4) {
  function b4(b5) {
    return Bc(b5, a4);
  }
  if (0 < jc.length) {
    Bc(jc[0], a4);
    for (var c4 = 1; c4 < jc.length; c4++) {
      var d4 = jc[c4];
      d4.blockedOn === a4 && (d4.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a4);
  lc !== null && Bc(lc, a4);
  mc !== null && Bc(mc, a4);
  nc.forEach(b4);
  oc.forEach(b4);
  for (c4 = 0; c4 < pc.length; c4++)
    d4 = pc[c4], d4.blockedOn === a4 && (d4.blockedOn = null);
  for (; 0 < pc.length && (c4 = pc[0], c4.blockedOn === null); )
    vc(c4), c4.blockedOn === null && pc.shift();
}
function Dc(a4, b4) {
  var c4 = {};
  c4[a4.toLowerCase()] = b4.toLowerCase();
  c4["Webkit" + a4] = "webkit" + b4;
  c4["Moz" + a4] = "moz" + b4;
  return c4;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a4) {
  if (Fc[a4])
    return Fc[a4];
  if (!Ec[a4])
    return a4;
  var b4 = Ec[a4], c4;
  for (c4 in b4)
    if (b4.hasOwnProperty(c4) && c4 in Gc)
      return Fc[a4] = b4[c4];
  return a4;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a4, b4) {
  for (var c4 = 0; c4 < a4.length; c4 += 2) {
    var d4 = a4[c4], e4 = a4[c4 + 1];
    e4 = "on" + (e4[0].toUpperCase() + e4.slice(1));
    Nc.set(d4, b4);
    Mc.set(d4, e4);
    da(e4, [d4]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a4) {
  if ((1 & a4) !== 0)
    return F = 15, 1;
  if ((2 & a4) !== 0)
    return F = 14, 2;
  if ((4 & a4) !== 0)
    return F = 13, 4;
  var b4 = 24 & a4;
  if (b4 !== 0)
    return F = 12, b4;
  if ((a4 & 32) !== 0)
    return F = 11, 32;
  b4 = 192 & a4;
  if (b4 !== 0)
    return F = 10, b4;
  if ((a4 & 256) !== 0)
    return F = 9, 256;
  b4 = 3584 & a4;
  if (b4 !== 0)
    return F = 8, b4;
  if ((a4 & 4096) !== 0)
    return F = 7, 4096;
  b4 = 4186112 & a4;
  if (b4 !== 0)
    return F = 6, b4;
  b4 = 62914560 & a4;
  if (b4 !== 0)
    return F = 5, b4;
  if (a4 & 67108864)
    return F = 4, 67108864;
  if ((a4 & 134217728) !== 0)
    return F = 3, 134217728;
  b4 = 805306368 & a4;
  if (b4 !== 0)
    return F = 2, b4;
  if ((1073741824 & a4) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a4;
}
function Sc(a4) {
  switch (a4) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a4) {
  switch (a4) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a4));
  }
}
function Uc(a4, b4) {
  var c4 = a4.pendingLanes;
  if (c4 === 0)
    return F = 0;
  var d4 = 0, e4 = 0, f4 = a4.expiredLanes, g4 = a4.suspendedLanes, h4 = a4.pingedLanes;
  if (f4 !== 0)
    d4 = f4, e4 = F = 15;
  else if (f4 = c4 & 134217727, f4 !== 0) {
    var k3 = f4 & ~g4;
    k3 !== 0 ? (d4 = Rc(k3), e4 = F) : (h4 &= f4, h4 !== 0 && (d4 = Rc(h4), e4 = F));
  } else
    f4 = c4 & ~g4, f4 !== 0 ? (d4 = Rc(f4), e4 = F) : h4 !== 0 && (d4 = Rc(h4), e4 = F);
  if (d4 === 0)
    return 0;
  d4 = 31 - Vc(d4);
  d4 = c4 & ((0 > d4 ? 0 : 1 << d4) << 1) - 1;
  if (b4 !== 0 && b4 !== d4 && (b4 & g4) === 0) {
    Rc(b4);
    if (e4 <= F)
      return b4;
    F = e4;
  }
  b4 = a4.entangledLanes;
  if (b4 !== 0)
    for (a4 = a4.entanglements, b4 &= d4; 0 < b4; )
      c4 = 31 - Vc(b4), e4 = 1 << c4, d4 |= a4[c4], b4 &= ~e4;
  return d4;
}
function Wc(a4) {
  a4 = a4.pendingLanes & -1073741825;
  return a4 !== 0 ? a4 : a4 & 1073741824 ? 1073741824 : 0;
}
function Xc(a4, b4) {
  switch (a4) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a4 = Yc(24 & ~b4), a4 === 0 ? Xc(10, b4) : a4;
    case 10:
      return a4 = Yc(192 & ~b4), a4 === 0 ? Xc(8, b4) : a4;
    case 8:
      return a4 = Yc(3584 & ~b4), a4 === 0 && (a4 = Yc(4186112 & ~b4), a4 === 0 && (a4 = 512)), a4;
    case 2:
      return b4 = Yc(805306368 & ~b4), b4 === 0 && (b4 = 268435456), b4;
  }
  throw Error(y(358, a4));
}
function Yc(a4) {
  return a4 & -a4;
}
function Zc(a4) {
  for (var b4 = [], c4 = 0; 31 > c4; c4++)
    b4.push(a4);
  return b4;
}
function $c(a4, b4, c4) {
  a4.pendingLanes |= b4;
  var d4 = b4 - 1;
  a4.suspendedLanes &= d4;
  a4.pingedLanes &= d4;
  a4 = a4.eventTimes;
  b4 = 31 - Vc(b4);
  a4[b4] = c4;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a4) {
  return a4 === 0 ? 32 : 31 - (bd(a4) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a4, b4, c4, d4) {
  Kb || Ib();
  var e4 = hd, f4 = Kb;
  Kb = true;
  try {
    Hb(e4, a4, b4, c4, d4);
  } finally {
    (Kb = f4) || Mb();
  }
}
function id(a4, b4, c4, d4) {
  ed(dd, hd.bind(null, a4, b4, c4, d4));
}
function hd(a4, b4, c4, d4) {
  if (fd) {
    var e4;
    if ((e4 = (b4 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a4))
      a4 = rc(null, a4, b4, c4, d4), jc.push(a4);
    else {
      var f4 = yc(a4, b4, c4, d4);
      if (f4 === null)
        e4 && sc(a4, d4);
      else {
        if (e4) {
          if (-1 < qc.indexOf(a4)) {
            a4 = rc(f4, a4, b4, c4, d4);
            jc.push(a4);
            return;
          }
          if (uc(f4, a4, b4, c4, d4))
            return;
          sc(a4, d4);
        }
        jd(a4, b4, d4, null, c4);
      }
    }
  }
}
function yc(a4, b4, c4, d4) {
  var e4 = xb(d4);
  e4 = wc(e4);
  if (e4 !== null) {
    var f4 = Zb(e4);
    if (f4 === null)
      e4 = null;
    else {
      var g4 = f4.tag;
      if (g4 === 13) {
        e4 = $b(f4);
        if (e4 !== null)
          return e4;
        e4 = null;
      } else if (g4 === 3) {
        if (f4.stateNode.hydrate)
          return f4.tag === 3 ? f4.stateNode.containerInfo : null;
        e4 = null;
      } else
        f4 !== e4 && (e4 = null);
    }
  }
  jd(a4, b4, d4, e4, c4);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a4, b4 = ld, c4 = b4.length, d4, e4 = "value" in kd ? kd.value : kd.textContent, f4 = e4.length;
  for (a4 = 0; a4 < c4 && b4[a4] === e4[a4]; a4++)
    ;
  var g4 = c4 - a4;
  for (d4 = 1; d4 <= g4 && b4[c4 - d4] === e4[f4 - d4]; d4++)
    ;
  return md = e4.slice(a4, 1 < d4 ? 1 - d4 : void 0);
}
function od(a4) {
  var b4 = a4.keyCode;
  "charCode" in a4 ? (a4 = a4.charCode, a4 === 0 && b4 === 13 && (a4 = 13)) : a4 = b4;
  a4 === 10 && (a4 = 13);
  return 32 <= a4 || a4 === 13 ? a4 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a4) {
  function b4(b5, d4, e4, f4, g4) {
    this._reactName = b5;
    this._targetInst = e4;
    this.type = d4;
    this.nativeEvent = f4;
    this.target = g4;
    this.currentTarget = null;
    for (var c4 in a4)
      a4.hasOwnProperty(c4) && (b5 = a4[c4], this[c4] = b5 ? b5(f4) : f4[c4]);
    this.isDefaultPrevented = (f4.defaultPrevented != null ? f4.defaultPrevented : f4.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b4.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a5 = this.nativeEvent;
    a5 && (a5.preventDefault ? a5.preventDefault() : typeof a5.returnValue !== "unknown" && (a5.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a5 = this.nativeEvent;
    a5 && (a5.stopPropagation ? a5.stopPropagation() : typeof a5.cancelBubble !== "unknown" && (a5.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b4;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a4) {
  return a4.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a4) {
  return a4.relatedTarget === void 0 ? a4.fromElement === a4.srcElement ? a4.toElement : a4.fromElement : a4.relatedTarget;
}, movementX: function(a4) {
  if ("movementX" in a4)
    return a4.movementX;
  a4 !== yd && (yd && a4.type === "mousemove" ? (wd = a4.screenX - yd.screenX, xd = a4.screenY - yd.screenY) : xd = wd = 0, yd = a4);
  return wd;
}, movementY: function(a4) {
  return "movementY" in a4 ? a4.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a4) {
  return "clipboardData" in a4 ? a4.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a4) {
  var b4 = this.nativeEvent;
  return b4.getModifierState ? b4.getModifierState(a4) : (a4 = Od[a4]) ? !!b4[a4] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a4) {
  if (a4.key) {
    var b4 = Md[a4.key] || a4.key;
    if (b4 !== "Unidentified")
      return b4;
  }
  return a4.type === "keypress" ? (a4 = od(a4), a4 === 13 ? "Enter" : String.fromCharCode(a4)) : a4.type === "keydown" || a4.type === "keyup" ? Nd[a4.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a4) {
  return a4.type === "keypress" ? od(a4) : 0;
}, keyCode: function(a4) {
  return a4.type === "keydown" || a4.type === "keyup" ? a4.keyCode : 0;
}, which: function(a4) {
  return a4.type === "keypress" ? od(a4) : a4.type === "keydown" || a4.type === "keyup" ? a4.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a4) {
    return "deltaX" in a4 ? a4.deltaX : "wheelDeltaX" in a4 ? -a4.wheelDeltaX : 0;
  },
  deltaY: function(a4) {
    return "deltaY" in a4 ? a4.deltaY : "wheelDeltaY" in a4 ? -a4.wheelDeltaY : "wheelDelta" in a4 ? -a4.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a4, b4) {
  switch (a4) {
    case "keyup":
      return $d.indexOf(b4.keyCode) !== -1;
    case "keydown":
      return b4.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a4) {
  a4 = a4.detail;
  return typeof a4 === "object" && "data" in a4 ? a4.data : null;
}
var ie = false;
function je(a4, b4) {
  switch (a4) {
    case "compositionend":
      return he(b4);
    case "keypress":
      if (b4.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a4 = b4.data, a4 === ee && fe ? null : a4;
    default:
      return null;
  }
}
function ke(a4, b4) {
  if (ie)
    return a4 === "compositionend" || !ae && ge(a4, b4) ? (a4 = nd(), md = ld = kd = null, ie = false, a4) : null;
  switch (a4) {
    case "paste":
      return null;
    case "keypress":
      if (!(b4.ctrlKey || b4.altKey || b4.metaKey) || b4.ctrlKey && b4.altKey) {
        if (b4.char && 1 < b4.char.length)
          return b4.char;
        if (b4.which)
          return String.fromCharCode(b4.which);
      }
      return null;
    case "compositionend":
      return de && b4.locale !== "ko" ? null : b4.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a4) {
  var b4 = a4 && a4.nodeName && a4.nodeName.toLowerCase();
  return b4 === "input" ? !!le[a4.type] : b4 === "textarea" ? true : false;
}
function ne(a4, b4, c4, d4) {
  Eb(d4);
  b4 = oe(b4, "onChange");
  0 < b4.length && (c4 = new td("onChange", "change", null, c4, d4), a4.push({event: c4, listeners: b4}));
}
var pe = null;
var qe = null;
function re(a4) {
  se(a4, 0);
}
function te(a4) {
  var b4 = ue(a4);
  if (Wa(b4))
    return a4;
}
function ve(a4, b4) {
  if (a4 === "change")
    return b4;
}
var we = false;
if (fa) {
  if (fa) {
    ye2 = "oninput" in document;
    if (!ye2) {
      ze2 = document.createElement("div");
      ze2.setAttribute("oninput", "return;");
      ye2 = typeof ze2.oninput === "function";
    }
    xe2 = ye2;
  } else
    xe2 = false;
  we = xe2 && (!document.documentMode || 9 < document.documentMode);
}
var xe2;
var ye2;
var ze2;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a4) {
  if (a4.propertyName === "value" && te(qe)) {
    var b4 = [];
    ne(b4, qe, a4, xb(a4));
    a4 = re;
    if (Kb)
      a4(b4);
    else {
      Kb = true;
      try {
        Gb(a4, b4);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a4, b4, c4) {
  a4 === "focusin" ? (Ae(), pe = b4, qe = c4, pe.attachEvent("onpropertychange", Be)) : a4 === "focusout" && Ae();
}
function De(a4) {
  if (a4 === "selectionchange" || a4 === "keyup" || a4 === "keydown")
    return te(qe);
}
function Ee(a4, b4) {
  if (a4 === "click")
    return te(b4);
}
function Fe(a4, b4) {
  if (a4 === "input" || a4 === "change")
    return te(b4);
}
function Ge(a4, b4) {
  return a4 === b4 && (a4 !== 0 || 1 / a4 === 1 / b4) || a4 !== a4 && b4 !== b4;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a4, b4) {
  if (He(a4, b4))
    return true;
  if (typeof a4 !== "object" || a4 === null || typeof b4 !== "object" || b4 === null)
    return false;
  var c4 = Object.keys(a4), d4 = Object.keys(b4);
  if (c4.length !== d4.length)
    return false;
  for (d4 = 0; d4 < c4.length; d4++)
    if (!Ie.call(b4, c4[d4]) || !He(a4[c4[d4]], b4[c4[d4]]))
      return false;
  return true;
}
function Ke(a4) {
  for (; a4 && a4.firstChild; )
    a4 = a4.firstChild;
  return a4;
}
function Le(a4, b4) {
  var c4 = Ke(a4);
  a4 = 0;
  for (var d4; c4; ) {
    if (c4.nodeType === 3) {
      d4 = a4 + c4.textContent.length;
      if (a4 <= b4 && d4 >= b4)
        return {node: c4, offset: b4 - a4};
      a4 = d4;
    }
    a: {
      for (; c4; ) {
        if (c4.nextSibling) {
          c4 = c4.nextSibling;
          break a;
        }
        c4 = c4.parentNode;
      }
      c4 = void 0;
    }
    c4 = Ke(c4);
  }
}
function Me(a4, b4) {
  return a4 && b4 ? a4 === b4 ? true : a4 && a4.nodeType === 3 ? false : b4 && b4.nodeType === 3 ? Me(a4, b4.parentNode) : "contains" in a4 ? a4.contains(b4) : a4.compareDocumentPosition ? !!(a4.compareDocumentPosition(b4) & 16) : false : false;
}
function Ne() {
  for (var a4 = window, b4 = Xa(); b4 instanceof a4.HTMLIFrameElement; ) {
    try {
      var c4 = typeof b4.contentWindow.location.href === "string";
    } catch (d4) {
      c4 = false;
    }
    if (c4)
      a4 = b4.contentWindow;
    else
      break;
    b4 = Xa(a4.document);
  }
  return b4;
}
function Oe(a4) {
  var b4 = a4 && a4.nodeName && a4.nodeName.toLowerCase();
  return b4 && (b4 === "input" && (a4.type === "text" || a4.type === "search" || a4.type === "tel" || a4.type === "url" || a4.type === "password") || b4 === "textarea" || a4.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a4, b4, c4) {
  var d4 = c4.window === c4 ? c4.document : c4.nodeType === 9 ? c4 : c4.ownerDocument;
  Te || Qe == null || Qe !== Xa(d4) || (d4 = Qe, "selectionStart" in d4 && Oe(d4) ? d4 = {start: d4.selectionStart, end: d4.selectionEnd} : (d4 = (d4.ownerDocument && d4.ownerDocument.defaultView || window).getSelection(), d4 = {anchorNode: d4.anchorNode, anchorOffset: d4.anchorOffset, focusNode: d4.focusNode, focusOffset: d4.focusOffset}), Se && Je(Se, d4) || (Se = d4, d4 = oe(Re, "onSelect"), 0 < d4.length && (b4 = new td("onSelect", "select", null, b4, c4), a4.push({event: b4, listeners: d4}), b4.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve2 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We2 = 0; We2 < Ve2.length; We2++)
  Nc.set(Ve2[We2], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a4, b4, c4) {
  var d4 = a4.type || "unknown-event";
  a4.currentTarget = c4;
  Yb(d4, b4, void 0, a4);
  a4.currentTarget = null;
}
function se(a4, b4) {
  b4 = (b4 & 4) !== 0;
  for (var c4 = 0; c4 < a4.length; c4++) {
    var d4 = a4[c4], e4 = d4.event;
    d4 = d4.listeners;
    a: {
      var f4 = void 0;
      if (b4)
        for (var g4 = d4.length - 1; 0 <= g4; g4--) {
          var h4 = d4[g4], k3 = h4.instance, l4 = h4.currentTarget;
          h4 = h4.listener;
          if (k3 !== f4 && e4.isPropagationStopped())
            break a;
          Ze(e4, h4, l4);
          f4 = k3;
        }
      else
        for (g4 = 0; g4 < d4.length; g4++) {
          h4 = d4[g4];
          k3 = h4.instance;
          l4 = h4.currentTarget;
          h4 = h4.listener;
          if (k3 !== f4 && e4.isPropagationStopped())
            break a;
          Ze(e4, h4, l4);
          f4 = k3;
        }
    }
  }
  if (Ub)
    throw a4 = Vb, Ub = false, Vb = null, a4;
}
function G(a4, b4) {
  var c4 = $e(b4), d4 = a4 + "__bubble";
  c4.has(d4) || (af(b4, a4, 2, false), c4.add(d4));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a4) {
  a4[bf] || (a4[bf] = true, ba.forEach(function(b4) {
    Ye.has(b4) || df(b4, false, a4, null);
    df(b4, true, a4, null);
  }));
}
function df(a4, b4, c4, d4) {
  var e4 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f4 = c4;
  a4 === "selectionchange" && c4.nodeType !== 9 && (f4 = c4.ownerDocument);
  if (d4 !== null && !b4 && Ye.has(a4)) {
    if (a4 !== "scroll")
      return;
    e4 |= 2;
    f4 = d4;
  }
  var g4 = $e(f4), h4 = a4 + "__" + (b4 ? "capture" : "bubble");
  g4.has(h4) || (b4 && (e4 |= 4), af(f4, a4, e4, b4), g4.add(h4));
}
function af(a4, b4, c4, d4) {
  var e4 = Nc.get(b4);
  switch (e4 === void 0 ? 2 : e4) {
    case 0:
      e4 = gd;
      break;
    case 1:
      e4 = id;
      break;
    default:
      e4 = hd;
  }
  c4 = e4.bind(null, b4, c4, a4);
  e4 = void 0;
  !Pb || b4 !== "touchstart" && b4 !== "touchmove" && b4 !== "wheel" || (e4 = true);
  d4 ? e4 !== void 0 ? a4.addEventListener(b4, c4, {capture: true, passive: e4}) : a4.addEventListener(b4, c4, true) : e4 !== void 0 ? a4.addEventListener(b4, c4, {passive: e4}) : a4.addEventListener(b4, c4, false);
}
function jd(a4, b4, c4, d4, e4) {
  var f4 = d4;
  if ((b4 & 1) === 0 && (b4 & 2) === 0 && d4 !== null)
    a:
      for (; ; ) {
        if (d4 === null)
          return;
        var g4 = d4.tag;
        if (g4 === 3 || g4 === 4) {
          var h4 = d4.stateNode.containerInfo;
          if (h4 === e4 || h4.nodeType === 8 && h4.parentNode === e4)
            break;
          if (g4 === 4)
            for (g4 = d4.return; g4 !== null; ) {
              var k3 = g4.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g4.stateNode.containerInfo, k3 === e4 || k3.nodeType === 8 && k3.parentNode === e4)
                  return;
              }
              g4 = g4.return;
            }
          for (; h4 !== null; ) {
            g4 = wc(h4);
            if (g4 === null)
              return;
            k3 = g4.tag;
            if (k3 === 5 || k3 === 6) {
              d4 = f4 = g4;
              continue a;
            }
            h4 = h4.parentNode;
          }
        }
        d4 = d4.return;
      }
  Nb(function() {
    var d5 = f4, e5 = xb(c4), g5 = [];
    a: {
      var h5 = Mc.get(a4);
      if (h5 !== void 0) {
        var k4 = td, x3 = a4;
        switch (a4) {
          case "keypress":
            if (od(c4) === 0)
              break a;
          case "keydown":
          case "keyup":
            k4 = Rd;
            break;
          case "focusin":
            x3 = "focus";
            k4 = Fd;
            break;
          case "focusout":
            x3 = "blur";
            k4 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k4 = Fd;
            break;
          case "click":
            if (c4.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k4 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k4 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k4 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k4 = Hd;
            break;
          case Lc:
            k4 = Xd;
            break;
          case "scroll":
            k4 = vd;
            break;
          case "wheel":
            k4 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k4 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k4 = Td;
        }
        var w3 = (b4 & 4) !== 0, z3 = !w3 && a4 === "scroll", u3 = w3 ? h5 !== null ? h5 + "Capture" : null : h5;
        w3 = [];
        for (var t4 = d5, q3; t4 !== null; ) {
          q3 = t4;
          var v3 = q3.stateNode;
          q3.tag === 5 && v3 !== null && (q3 = v3, u3 !== null && (v3 = Ob(t4, u3), v3 != null && w3.push(ef(t4, v3, q3))));
          if (z3)
            break;
          t4 = t4.return;
        }
        0 < w3.length && (h5 = new k4(h5, x3, null, c4, e5), g5.push({event: h5, listeners: w3}));
      }
    }
    if ((b4 & 7) === 0) {
      a: {
        h5 = a4 === "mouseover" || a4 === "pointerover";
        k4 = a4 === "mouseout" || a4 === "pointerout";
        if (h5 && (b4 & 16) === 0 && (x3 = c4.relatedTarget || c4.fromElement) && (wc(x3) || x3[ff]))
          break a;
        if (k4 || h5) {
          h5 = e5.window === e5 ? e5 : (h5 = e5.ownerDocument) ? h5.defaultView || h5.parentWindow : window;
          if (k4) {
            if (x3 = c4.relatedTarget || c4.toElement, k4 = d5, x3 = x3 ? wc(x3) : null, x3 !== null && (z3 = Zb(x3), x3 !== z3 || x3.tag !== 5 && x3.tag !== 6))
              x3 = null;
          } else
            k4 = null, x3 = d5;
          if (k4 !== x3) {
            w3 = Bd;
            v3 = "onMouseLeave";
            u3 = "onMouseEnter";
            t4 = "mouse";
            if (a4 === "pointerout" || a4 === "pointerover")
              w3 = Td, v3 = "onPointerLeave", u3 = "onPointerEnter", t4 = "pointer";
            z3 = k4 == null ? h5 : ue(k4);
            q3 = x3 == null ? h5 : ue(x3);
            h5 = new w3(v3, t4 + "leave", k4, c4, e5);
            h5.target = z3;
            h5.relatedTarget = q3;
            v3 = null;
            wc(e5) === d5 && (w3 = new w3(u3, t4 + "enter", x3, c4, e5), w3.target = q3, w3.relatedTarget = z3, v3 = w3);
            z3 = v3;
            if (k4 && x3)
              b: {
                w3 = k4;
                u3 = x3;
                t4 = 0;
                for (q3 = w3; q3; q3 = gf(q3))
                  t4++;
                q3 = 0;
                for (v3 = u3; v3; v3 = gf(v3))
                  q3++;
                for (; 0 < t4 - q3; )
                  w3 = gf(w3), t4--;
                for (; 0 < q3 - t4; )
                  u3 = gf(u3), q3--;
                for (; t4--; ) {
                  if (w3 === u3 || u3 !== null && w3 === u3.alternate)
                    break b;
                  w3 = gf(w3);
                  u3 = gf(u3);
                }
                w3 = null;
              }
            else
              w3 = null;
            k4 !== null && hf(g5, h5, k4, w3, false);
            x3 !== null && z3 !== null && hf(g5, z3, x3, w3, true);
          }
        }
      }
      a: {
        h5 = d5 ? ue(d5) : window;
        k4 = h5.nodeName && h5.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h5.type === "file")
          var J3 = ve;
        else if (me(h5))
          if (we)
            J3 = Fe;
          else {
            J3 = De;
            var K3 = Ce;
          }
        else
          (k4 = h5.nodeName) && k4.toLowerCase() === "input" && (h5.type === "checkbox" || h5.type === "radio") && (J3 = Ee);
        if (J3 && (J3 = J3(a4, d5))) {
          ne(g5, J3, c4, e5);
          break a;
        }
        K3 && K3(a4, h5, d5);
        a4 === "focusout" && (K3 = h5._wrapperState) && K3.controlled && h5.type === "number" && bb(h5, "number", h5.value);
      }
      K3 = d5 ? ue(d5) : window;
      switch (a4) {
        case "focusin":
          if (me(K3) || K3.contentEditable === "true")
            Qe = K3, Re = d5, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g5, c4, e5);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g5, c4, e5);
      }
      var Q3;
      if (ae)
        b: {
          switch (a4) {
            case "compositionstart":
              var L3 = "onCompositionStart";
              break b;
            case "compositionend":
              L3 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L3 = "onCompositionUpdate";
              break b;
          }
          L3 = void 0;
        }
      else
        ie ? ge(a4, c4) && (L3 = "onCompositionEnd") : a4 === "keydown" && c4.keyCode === 229 && (L3 = "onCompositionStart");
      L3 && (de && c4.locale !== "ko" && (ie || L3 !== "onCompositionStart" ? L3 === "onCompositionEnd" && ie && (Q3 = nd()) : (kd = e5, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K3 = oe(d5, L3), 0 < K3.length && (L3 = new Ld(L3, a4, null, c4, e5), g5.push({event: L3, listeners: K3}), Q3 ? L3.data = Q3 : (Q3 = he(c4), Q3 !== null && (L3.data = Q3))));
      if (Q3 = ce ? je(a4, c4) : ke(a4, c4))
        d5 = oe(d5, "onBeforeInput"), 0 < d5.length && (e5 = new Ld("onBeforeInput", "beforeinput", null, c4, e5), g5.push({event: e5, listeners: d5}), e5.data = Q3);
    }
    se(g5, b4);
  });
}
function ef(a4, b4, c4) {
  return {instance: a4, listener: b4, currentTarget: c4};
}
function oe(a4, b4) {
  for (var c4 = b4 + "Capture", d4 = []; a4 !== null; ) {
    var e4 = a4, f4 = e4.stateNode;
    e4.tag === 5 && f4 !== null && (e4 = f4, f4 = Ob(a4, c4), f4 != null && d4.unshift(ef(a4, f4, e4)), f4 = Ob(a4, b4), f4 != null && d4.push(ef(a4, f4, e4)));
    a4 = a4.return;
  }
  return d4;
}
function gf(a4) {
  if (a4 === null)
    return null;
  do
    a4 = a4.return;
  while (a4 && a4.tag !== 5);
  return a4 ? a4 : null;
}
function hf(a4, b4, c4, d4, e4) {
  for (var f4 = b4._reactName, g4 = []; c4 !== null && c4 !== d4; ) {
    var h4 = c4, k3 = h4.alternate, l4 = h4.stateNode;
    if (k3 !== null && k3 === d4)
      break;
    h4.tag === 5 && l4 !== null && (h4 = l4, e4 ? (k3 = Ob(c4, f4), k3 != null && g4.unshift(ef(c4, k3, h4))) : e4 || (k3 = Ob(c4, f4), k3 != null && g4.push(ef(c4, k3, h4))));
    c4 = c4.return;
  }
  g4.length !== 0 && a4.push({event: b4, listeners: g4});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a4, b4) {
  switch (a4) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b4.autoFocus;
  }
  return false;
}
function nf(a4, b4) {
  return a4 === "textarea" || a4 === "option" || a4 === "noscript" || typeof b4.children === "string" || typeof b4.children === "number" || typeof b4.dangerouslySetInnerHTML === "object" && b4.dangerouslySetInnerHTML !== null && b4.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a4) {
  a4.nodeType === 1 ? a4.textContent = "" : a4.nodeType === 9 && (a4 = a4.body, a4 != null && (a4.textContent = ""));
}
function rf(a4) {
  for (; a4 != null; a4 = a4.nextSibling) {
    var b4 = a4.nodeType;
    if (b4 === 1 || b4 === 3)
      break;
  }
  return a4;
}
function sf(a4) {
  a4 = a4.previousSibling;
  for (var b4 = 0; a4; ) {
    if (a4.nodeType === 8) {
      var c4 = a4.data;
      if (c4 === "$" || c4 === "$!" || c4 === "$?") {
        if (b4 === 0)
          return a4;
        b4--;
      } else
        c4 === "/$" && b4++;
    }
    a4 = a4.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a4) {
  return {$$typeof: Ga, toString: a4, valueOf: a4};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a4) {
  var b4 = a4[wf];
  if (b4)
    return b4;
  for (var c4 = a4.parentNode; c4; ) {
    if (b4 = c4[ff] || c4[wf]) {
      c4 = b4.alternate;
      if (b4.child !== null || c4 !== null && c4.child !== null)
        for (a4 = sf(a4); a4 !== null; ) {
          if (c4 = a4[wf])
            return c4;
          a4 = sf(a4);
        }
      return b4;
    }
    a4 = c4;
    c4 = a4.parentNode;
  }
  return null;
}
function Cb(a4) {
  a4 = a4[wf] || a4[ff];
  return !a4 || a4.tag !== 5 && a4.tag !== 6 && a4.tag !== 13 && a4.tag !== 3 ? null : a4;
}
function ue(a4) {
  if (a4.tag === 5 || a4.tag === 6)
    return a4.stateNode;
  throw Error(y(33));
}
function Db(a4) {
  return a4[xf] || null;
}
function $e(a4) {
  var b4 = a4[yf];
  b4 === void 0 && (b4 = a4[yf] = new Set());
  return b4;
}
var zf = [];
var Af = -1;
function Bf(a4) {
  return {current: a4};
}
function H(a4) {
  0 > Af || (a4.current = zf[Af], zf[Af] = null, Af--);
}
function I(a4, b4) {
  Af++;
  zf[Af] = a4.current;
  a4.current = b4;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a4, b4) {
  var c4 = a4.type.contextTypes;
  if (!c4)
    return Cf;
  var d4 = a4.stateNode;
  if (d4 && d4.__reactInternalMemoizedUnmaskedChildContext === b4)
    return d4.__reactInternalMemoizedMaskedChildContext;
  var e4 = {}, f4;
  for (f4 in c4)
    e4[f4] = b4[f4];
  d4 && (a4 = a4.stateNode, a4.__reactInternalMemoizedUnmaskedChildContext = b4, a4.__reactInternalMemoizedMaskedChildContext = e4);
  return e4;
}
function Ff(a4) {
  a4 = a4.childContextTypes;
  return a4 !== null && a4 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a4, b4, c4) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b4);
  I(N, c4);
}
function If(a4, b4, c4) {
  var d4 = a4.stateNode;
  a4 = b4.childContextTypes;
  if (typeof d4.getChildContext !== "function")
    return c4;
  d4 = d4.getChildContext();
  for (var e4 in d4)
    if (!(e4 in a4))
      throw Error(y(108, Ra(b4) || "Unknown", e4));
  return objectAssign({}, c4, d4);
}
function Jf(a4) {
  a4 = (a4 = a4.stateNode) && a4.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a4);
  I(N, N.current);
  return true;
}
function Kf(a4, b4, c4) {
  var d4 = a4.stateNode;
  if (!d4)
    throw Error(y(169));
  c4 ? (a4 = If(a4, b4, Df), d4.__reactInternalMemoizedMergedChildContext = a4, H(N), H(M), I(M, a4)) : H(N);
  I(N, c4);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a4) {
  switch (a4) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a4, b4) {
  a4 = fg(a4);
  return Nf(a4, b4);
}
function hg(a4, b4, c4) {
  a4 = fg(a4);
  return Of(a4, b4, c4);
}
function ig() {
  if (bg !== null) {
    var a4 = bg;
    bg = null;
    Pf(a4);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a4 = 0;
    try {
      var b4 = ag;
      gg(99, function() {
        for (; a4 < b4.length; a4++) {
          var c4 = b4[a4];
          do
            c4 = c4(true);
          while (c4 !== null);
        }
      });
      ag = null;
    } catch (c4) {
      throw ag !== null && (ag = ag.slice(a4 + 1)), Of(Uf, ig), c4;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a4, b4) {
  if (a4 && a4.defaultProps) {
    b4 = objectAssign({}, b4);
    a4 = a4.defaultProps;
    for (var c4 in a4)
      b4[c4] === void 0 && (b4[c4] = a4[c4]);
    return b4;
  }
  return b4;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a4) {
  var b4 = mg.current;
  H(mg);
  a4.type._context._currentValue = b4;
}
function sg(a4, b4) {
  for (; a4 !== null; ) {
    var c4 = a4.alternate;
    if ((a4.childLanes & b4) === b4)
      if (c4 === null || (c4.childLanes & b4) === b4)
        break;
      else
        c4.childLanes |= b4;
    else
      a4.childLanes |= b4, c4 !== null && (c4.childLanes |= b4);
    a4 = a4.return;
  }
}
function tg(a4, b4) {
  ng = a4;
  pg = og = null;
  a4 = a4.dependencies;
  a4 !== null && a4.firstContext !== null && ((a4.lanes & b4) !== 0 && (ug = true), a4.firstContext = null);
}
function vg(a4, b4) {
  if (pg !== a4 && b4 !== false && b4 !== 0) {
    if (typeof b4 !== "number" || b4 === 1073741823)
      pg = a4, b4 = 1073741823;
    b4 = {context: a4, observedBits: b4, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b4;
      ng.dependencies = {lanes: 0, firstContext: b4, responders: null};
    } else
      og = og.next = b4;
  }
  return a4._currentValue;
}
var wg = false;
function xg(a4) {
  a4.updateQueue = {baseState: a4.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a4, b4) {
  a4 = a4.updateQueue;
  b4.updateQueue === a4 && (b4.updateQueue = {baseState: a4.baseState, firstBaseUpdate: a4.firstBaseUpdate, lastBaseUpdate: a4.lastBaseUpdate, shared: a4.shared, effects: a4.effects});
}
function zg(a4, b4) {
  return {eventTime: a4, lane: b4, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a4, b4) {
  a4 = a4.updateQueue;
  if (a4 !== null) {
    a4 = a4.shared;
    var c4 = a4.pending;
    c4 === null ? b4.next = b4 : (b4.next = c4.next, c4.next = b4);
    a4.pending = b4;
  }
}
function Bg(a4, b4) {
  var c4 = a4.updateQueue, d4 = a4.alternate;
  if (d4 !== null && (d4 = d4.updateQueue, c4 === d4)) {
    var e4 = null, f4 = null;
    c4 = c4.firstBaseUpdate;
    if (c4 !== null) {
      do {
        var g4 = {eventTime: c4.eventTime, lane: c4.lane, tag: c4.tag, payload: c4.payload, callback: c4.callback, next: null};
        f4 === null ? e4 = f4 = g4 : f4 = f4.next = g4;
        c4 = c4.next;
      } while (c4 !== null);
      f4 === null ? e4 = f4 = b4 : f4 = f4.next = b4;
    } else
      e4 = f4 = b4;
    c4 = {baseState: d4.baseState, firstBaseUpdate: e4, lastBaseUpdate: f4, shared: d4.shared, effects: d4.effects};
    a4.updateQueue = c4;
    return;
  }
  a4 = c4.lastBaseUpdate;
  a4 === null ? c4.firstBaseUpdate = b4 : a4.next = b4;
  c4.lastBaseUpdate = b4;
}
function Cg(a4, b4, c4, d4) {
  var e4 = a4.updateQueue;
  wg = false;
  var f4 = e4.firstBaseUpdate, g4 = e4.lastBaseUpdate, h4 = e4.shared.pending;
  if (h4 !== null) {
    e4.shared.pending = null;
    var k3 = h4, l4 = k3.next;
    k3.next = null;
    g4 === null ? f4 = l4 : g4.next = l4;
    g4 = k3;
    var n4 = a4.alternate;
    if (n4 !== null) {
      n4 = n4.updateQueue;
      var A4 = n4.lastBaseUpdate;
      A4 !== g4 && (A4 === null ? n4.firstBaseUpdate = l4 : A4.next = l4, n4.lastBaseUpdate = k3);
    }
  }
  if (f4 !== null) {
    A4 = e4.baseState;
    g4 = 0;
    n4 = l4 = k3 = null;
    do {
      h4 = f4.lane;
      var p4 = f4.eventTime;
      if ((d4 & h4) === h4) {
        n4 !== null && (n4 = n4.next = {
          eventTime: p4,
          lane: 0,
          tag: f4.tag,
          payload: f4.payload,
          callback: f4.callback,
          next: null
        });
        a: {
          var C3 = a4, x3 = f4;
          h4 = b4;
          p4 = c4;
          switch (x3.tag) {
            case 1:
              C3 = x3.payload;
              if (typeof C3 === "function") {
                A4 = C3.call(p4, A4, h4);
                break a;
              }
              A4 = C3;
              break a;
            case 3:
              C3.flags = C3.flags & -4097 | 64;
            case 0:
              C3 = x3.payload;
              h4 = typeof C3 === "function" ? C3.call(p4, A4, h4) : C3;
              if (h4 === null || h4 === void 0)
                break a;
              A4 = objectAssign({}, A4, h4);
              break a;
            case 2:
              wg = true;
          }
        }
        f4.callback !== null && (a4.flags |= 32, h4 = e4.effects, h4 === null ? e4.effects = [f4] : h4.push(f4));
      } else
        p4 = {eventTime: p4, lane: h4, tag: f4.tag, payload: f4.payload, callback: f4.callback, next: null}, n4 === null ? (l4 = n4 = p4, k3 = A4) : n4 = n4.next = p4, g4 |= h4;
      f4 = f4.next;
      if (f4 === null)
        if (h4 = e4.shared.pending, h4 === null)
          break;
        else
          f4 = h4.next, h4.next = null, e4.lastBaseUpdate = h4, e4.shared.pending = null;
    } while (1);
    n4 === null && (k3 = A4);
    e4.baseState = k3;
    e4.firstBaseUpdate = l4;
    e4.lastBaseUpdate = n4;
    Dg |= g4;
    a4.lanes = g4;
    a4.memoizedState = A4;
  }
}
function Eg(a4, b4, c4) {
  a4 = b4.effects;
  b4.effects = null;
  if (a4 !== null)
    for (b4 = 0; b4 < a4.length; b4++) {
      var d4 = a4[b4], e4 = d4.callback;
      if (e4 !== null) {
        d4.callback = null;
        d4 = c4;
        if (typeof e4 !== "function")
          throw Error(y(191, e4));
        e4.call(d4);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a4, b4, c4, d4) {
  b4 = a4.memoizedState;
  c4 = c4(d4, b4);
  c4 = c4 === null || c4 === void 0 ? b4 : objectAssign({}, b4, c4);
  a4.memoizedState = c4;
  a4.lanes === 0 && (a4.updateQueue.baseState = c4);
}
var Kg = {isMounted: function(a4) {
  return (a4 = a4._reactInternals) ? Zb(a4) === a4 : false;
}, enqueueSetState: function(a4, b4, c4) {
  a4 = a4._reactInternals;
  var d4 = Hg(), e4 = Ig(a4), f4 = zg(d4, e4);
  f4.payload = b4;
  c4 !== void 0 && c4 !== null && (f4.callback = c4);
  Ag(a4, f4);
  Jg(a4, e4, d4);
}, enqueueReplaceState: function(a4, b4, c4) {
  a4 = a4._reactInternals;
  var d4 = Hg(), e4 = Ig(a4), f4 = zg(d4, e4);
  f4.tag = 1;
  f4.payload = b4;
  c4 !== void 0 && c4 !== null && (f4.callback = c4);
  Ag(a4, f4);
  Jg(a4, e4, d4);
}, enqueueForceUpdate: function(a4, b4) {
  a4 = a4._reactInternals;
  var c4 = Hg(), d4 = Ig(a4), e4 = zg(c4, d4);
  e4.tag = 2;
  b4 !== void 0 && b4 !== null && (e4.callback = b4);
  Ag(a4, e4);
  Jg(a4, d4, c4);
}};
function Lg(a4, b4, c4, d4, e4, f4, g4) {
  a4 = a4.stateNode;
  return typeof a4.shouldComponentUpdate === "function" ? a4.shouldComponentUpdate(d4, f4, g4) : b4.prototype && b4.prototype.isPureReactComponent ? !Je(c4, d4) || !Je(e4, f4) : true;
}
function Mg(a4, b4, c4) {
  var d4 = false, e4 = Cf;
  var f4 = b4.contextType;
  typeof f4 === "object" && f4 !== null ? f4 = vg(f4) : (e4 = Ff(b4) ? Df : M.current, d4 = b4.contextTypes, f4 = (d4 = d4 !== null && d4 !== void 0) ? Ef(a4, e4) : Cf);
  b4 = new b4(c4, f4);
  a4.memoizedState = b4.state !== null && b4.state !== void 0 ? b4.state : null;
  b4.updater = Kg;
  a4.stateNode = b4;
  b4._reactInternals = a4;
  d4 && (a4 = a4.stateNode, a4.__reactInternalMemoizedUnmaskedChildContext = e4, a4.__reactInternalMemoizedMaskedChildContext = f4);
  return b4;
}
function Ng(a4, b4, c4, d4) {
  a4 = b4.state;
  typeof b4.componentWillReceiveProps === "function" && b4.componentWillReceiveProps(c4, d4);
  typeof b4.UNSAFE_componentWillReceiveProps === "function" && b4.UNSAFE_componentWillReceiveProps(c4, d4);
  b4.state !== a4 && Kg.enqueueReplaceState(b4, b4.state, null);
}
function Og(a4, b4, c4, d4) {
  var e4 = a4.stateNode;
  e4.props = c4;
  e4.state = a4.memoizedState;
  e4.refs = Fg;
  xg(a4);
  var f4 = b4.contextType;
  typeof f4 === "object" && f4 !== null ? e4.context = vg(f4) : (f4 = Ff(b4) ? Df : M.current, e4.context = Ef(a4, f4));
  Cg(a4, c4, e4, d4);
  e4.state = a4.memoizedState;
  f4 = b4.getDerivedStateFromProps;
  typeof f4 === "function" && (Gg(a4, b4, f4, c4), e4.state = a4.memoizedState);
  typeof b4.getDerivedStateFromProps === "function" || typeof e4.getSnapshotBeforeUpdate === "function" || typeof e4.UNSAFE_componentWillMount !== "function" && typeof e4.componentWillMount !== "function" || (b4 = e4.state, typeof e4.componentWillMount === "function" && e4.componentWillMount(), typeof e4.UNSAFE_componentWillMount === "function" && e4.UNSAFE_componentWillMount(), b4 !== e4.state && Kg.enqueueReplaceState(e4, e4.state, null), Cg(a4, c4, e4, d4), e4.state = a4.memoizedState);
  typeof e4.componentDidMount === "function" && (a4.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a4, b4, c4) {
  a4 = c4.ref;
  if (a4 !== null && typeof a4 !== "function" && typeof a4 !== "object") {
    if (c4._owner) {
      c4 = c4._owner;
      if (c4) {
        if (c4.tag !== 1)
          throw Error(y(309));
        var d4 = c4.stateNode;
      }
      if (!d4)
        throw Error(y(147, a4));
      var e4 = "" + a4;
      if (b4 !== null && b4.ref !== null && typeof b4.ref === "function" && b4.ref._stringRef === e4)
        return b4.ref;
      b4 = function(a5) {
        var b5 = d4.refs;
        b5 === Fg && (b5 = d4.refs = {});
        a5 === null ? delete b5[e4] : b5[e4] = a5;
      };
      b4._stringRef = e4;
      return b4;
    }
    if (typeof a4 !== "string")
      throw Error(y(284));
    if (!c4._owner)
      throw Error(y(290, a4));
  }
  return a4;
}
function Rg(a4, b4) {
  if (a4.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b4) === "[object Object]" ? "object with keys {" + Object.keys(b4).join(", ") + "}" : b4));
}
function Sg(a4) {
  function b4(b5, c5) {
    if (a4) {
      var d5 = b5.lastEffect;
      d5 !== null ? (d5.nextEffect = c5, b5.lastEffect = c5) : b5.firstEffect = b5.lastEffect = c5;
      c5.nextEffect = null;
      c5.flags = 8;
    }
  }
  function c4(c5, d5) {
    if (!a4)
      return null;
    for (; d5 !== null; )
      b4(c5, d5), d5 = d5.sibling;
    return null;
  }
  function d4(a5, b5) {
    for (a5 = new Map(); b5 !== null; )
      b5.key !== null ? a5.set(b5.key, b5) : a5.set(b5.index, b5), b5 = b5.sibling;
    return a5;
  }
  function e4(a5, b5) {
    a5 = Tg(a5, b5);
    a5.index = 0;
    a5.sibling = null;
    return a5;
  }
  function f4(b5, c5, d5) {
    b5.index = d5;
    if (!a4)
      return c5;
    d5 = b5.alternate;
    if (d5 !== null)
      return d5 = d5.index, d5 < c5 ? (b5.flags = 2, c5) : d5;
    b5.flags = 2;
    return c5;
  }
  function g4(b5) {
    a4 && b5.alternate === null && (b5.flags = 2);
    return b5;
  }
  function h4(a5, b5, c5, d5) {
    if (b5 === null || b5.tag !== 6)
      return b5 = Ug(c5, a5.mode, d5), b5.return = a5, b5;
    b5 = e4(b5, c5);
    b5.return = a5;
    return b5;
  }
  function k3(a5, b5, c5, d5) {
    if (b5 !== null && b5.elementType === c5.type)
      return d5 = e4(b5, c5.props), d5.ref = Qg(a5, b5, c5), d5.return = a5, d5;
    d5 = Vg(c5.type, c5.key, c5.props, null, a5.mode, d5);
    d5.ref = Qg(a5, b5, c5);
    d5.return = a5;
    return d5;
  }
  function l4(a5, b5, c5, d5) {
    if (b5 === null || b5.tag !== 4 || b5.stateNode.containerInfo !== c5.containerInfo || b5.stateNode.implementation !== c5.implementation)
      return b5 = Wg(c5, a5.mode, d5), b5.return = a5, b5;
    b5 = e4(b5, c5.children || []);
    b5.return = a5;
    return b5;
  }
  function n4(a5, b5, c5, d5, f5) {
    if (b5 === null || b5.tag !== 7)
      return b5 = Xg(c5, a5.mode, d5, f5), b5.return = a5, b5;
    b5 = e4(b5, c5);
    b5.return = a5;
    return b5;
  }
  function A4(a5, b5, c5) {
    if (typeof b5 === "string" || typeof b5 === "number")
      return b5 = Ug("" + b5, a5.mode, c5), b5.return = a5, b5;
    if (typeof b5 === "object" && b5 !== null) {
      switch (b5.$$typeof) {
        case sa:
          return c5 = Vg(b5.type, b5.key, b5.props, null, a5.mode, c5), c5.ref = Qg(a5, null, b5), c5.return = a5, c5;
        case ta:
          return b5 = Wg(b5, a5.mode, c5), b5.return = a5, b5;
      }
      if (Pg(b5) || La(b5))
        return b5 = Xg(b5, a5.mode, c5, null), b5.return = a5, b5;
      Rg(a5, b5);
    }
    return null;
  }
  function p4(a5, b5, c5, d5) {
    var e5 = b5 !== null ? b5.key : null;
    if (typeof c5 === "string" || typeof c5 === "number")
      return e5 !== null ? null : h4(a5, b5, "" + c5, d5);
    if (typeof c5 === "object" && c5 !== null) {
      switch (c5.$$typeof) {
        case sa:
          return c5.key === e5 ? c5.type === ua ? n4(a5, b5, c5.props.children, d5, e5) : k3(a5, b5, c5, d5) : null;
        case ta:
          return c5.key === e5 ? l4(a5, b5, c5, d5) : null;
      }
      if (Pg(c5) || La(c5))
        return e5 !== null ? null : n4(a5, b5, c5, d5, null);
      Rg(a5, c5);
    }
    return null;
  }
  function C3(a5, b5, c5, d5, e5) {
    if (typeof d5 === "string" || typeof d5 === "number")
      return a5 = a5.get(c5) || null, h4(b5, a5, "" + d5, e5);
    if (typeof d5 === "object" && d5 !== null) {
      switch (d5.$$typeof) {
        case sa:
          return a5 = a5.get(d5.key === null ? c5 : d5.key) || null, d5.type === ua ? n4(b5, a5, d5.props.children, e5, d5.key) : k3(b5, a5, d5, e5);
        case ta:
          return a5 = a5.get(d5.key === null ? c5 : d5.key) || null, l4(b5, a5, d5, e5);
      }
      if (Pg(d5) || La(d5))
        return a5 = a5.get(c5) || null, n4(b5, a5, d5, e5, null);
      Rg(b5, d5);
    }
    return null;
  }
  function x3(e5, g5, h5, k4) {
    for (var l5 = null, t4 = null, u3 = g5, z3 = g5 = 0, q3 = null; u3 !== null && z3 < h5.length; z3++) {
      u3.index > z3 ? (q3 = u3, u3 = null) : q3 = u3.sibling;
      var n5 = p4(e5, u3, h5[z3], k4);
      if (n5 === null) {
        u3 === null && (u3 = q3);
        break;
      }
      a4 && u3 && n5.alternate === null && b4(e5, u3);
      g5 = f4(n5, g5, z3);
      t4 === null ? l5 = n5 : t4.sibling = n5;
      t4 = n5;
      u3 = q3;
    }
    if (z3 === h5.length)
      return c4(e5, u3), l5;
    if (u3 === null) {
      for (; z3 < h5.length; z3++)
        u3 = A4(e5, h5[z3], k4), u3 !== null && (g5 = f4(u3, g5, z3), t4 === null ? l5 = u3 : t4.sibling = u3, t4 = u3);
      return l5;
    }
    for (u3 = d4(e5, u3); z3 < h5.length; z3++)
      q3 = C3(u3, e5, z3, h5[z3], k4), q3 !== null && (a4 && q3.alternate !== null && u3.delete(q3.key === null ? z3 : q3.key), g5 = f4(q3, g5, z3), t4 === null ? l5 = q3 : t4.sibling = q3, t4 = q3);
    a4 && u3.forEach(function(a5) {
      return b4(e5, a5);
    });
    return l5;
  }
  function w3(e5, g5, h5, k4) {
    var l5 = La(h5);
    if (typeof l5 !== "function")
      throw Error(y(150));
    h5 = l5.call(h5);
    if (h5 == null)
      throw Error(y(151));
    for (var t4 = l5 = null, u3 = g5, z3 = g5 = 0, q3 = null, n5 = h5.next(); u3 !== null && !n5.done; z3++, n5 = h5.next()) {
      u3.index > z3 ? (q3 = u3, u3 = null) : q3 = u3.sibling;
      var w4 = p4(e5, u3, n5.value, k4);
      if (w4 === null) {
        u3 === null && (u3 = q3);
        break;
      }
      a4 && u3 && w4.alternate === null && b4(e5, u3);
      g5 = f4(w4, g5, z3);
      t4 === null ? l5 = w4 : t4.sibling = w4;
      t4 = w4;
      u3 = q3;
    }
    if (n5.done)
      return c4(e5, u3), l5;
    if (u3 === null) {
      for (; !n5.done; z3++, n5 = h5.next())
        n5 = A4(e5, n5.value, k4), n5 !== null && (g5 = f4(n5, g5, z3), t4 === null ? l5 = n5 : t4.sibling = n5, t4 = n5);
      return l5;
    }
    for (u3 = d4(e5, u3); !n5.done; z3++, n5 = h5.next())
      n5 = C3(u3, e5, z3, n5.value, k4), n5 !== null && (a4 && n5.alternate !== null && u3.delete(n5.key === null ? z3 : n5.key), g5 = f4(n5, g5, z3), t4 === null ? l5 = n5 : t4.sibling = n5, t4 = n5);
    a4 && u3.forEach(function(a5) {
      return b4(e5, a5);
    });
    return l5;
  }
  return function(a5, d5, f5, h5) {
    var k4 = typeof f5 === "object" && f5 !== null && f5.type === ua && f5.key === null;
    k4 && (f5 = f5.props.children);
    var l5 = typeof f5 === "object" && f5 !== null;
    if (l5)
      switch (f5.$$typeof) {
        case sa:
          a: {
            l5 = f5.key;
            for (k4 = d5; k4 !== null; ) {
              if (k4.key === l5) {
                switch (k4.tag) {
                  case 7:
                    if (f5.type === ua) {
                      c4(a5, k4.sibling);
                      d5 = e4(k4, f5.props.children);
                      d5.return = a5;
                      a5 = d5;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f5.type) {
                      c4(a5, k4.sibling);
                      d5 = e4(k4, f5.props);
                      d5.ref = Qg(a5, k4, f5);
                      d5.return = a5;
                      a5 = d5;
                      break a;
                    }
                }
                c4(a5, k4);
                break;
              } else
                b4(a5, k4);
              k4 = k4.sibling;
            }
            f5.type === ua ? (d5 = Xg(f5.props.children, a5.mode, h5, f5.key), d5.return = a5, a5 = d5) : (h5 = Vg(f5.type, f5.key, f5.props, null, a5.mode, h5), h5.ref = Qg(a5, d5, f5), h5.return = a5, a5 = h5);
          }
          return g4(a5);
        case ta:
          a: {
            for (k4 = f5.key; d5 !== null; ) {
              if (d5.key === k4)
                if (d5.tag === 4 && d5.stateNode.containerInfo === f5.containerInfo && d5.stateNode.implementation === f5.implementation) {
                  c4(a5, d5.sibling);
                  d5 = e4(d5, f5.children || []);
                  d5.return = a5;
                  a5 = d5;
                  break a;
                } else {
                  c4(a5, d5);
                  break;
                }
              else
                b4(a5, d5);
              d5 = d5.sibling;
            }
            d5 = Wg(f5, a5.mode, h5);
            d5.return = a5;
            a5 = d5;
          }
          return g4(a5);
      }
    if (typeof f5 === "string" || typeof f5 === "number")
      return f5 = "" + f5, d5 !== null && d5.tag === 6 ? (c4(a5, d5.sibling), d5 = e4(d5, f5), d5.return = a5, a5 = d5) : (c4(a5, d5), d5 = Ug(f5, a5.mode, h5), d5.return = a5, a5 = d5), g4(a5);
    if (Pg(f5))
      return x3(a5, d5, f5, h5);
    if (La(f5))
      return w3(a5, d5, f5, h5);
    l5 && Rg(a5, f5);
    if (typeof f5 === "undefined" && !k4)
      switch (a5.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a5.type) || "Component"));
      }
    return c4(a5, d5);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a4) {
  if (a4 === $g)
    throw Error(y(174));
  return a4;
}
function eh(a4, b4) {
  I(ch, b4);
  I(bh, a4);
  I(ah, $g);
  a4 = b4.nodeType;
  switch (a4) {
    case 9:
    case 11:
      b4 = (b4 = b4.documentElement) ? b4.namespaceURI : mb(null, "");
      break;
    default:
      a4 = a4 === 8 ? b4.parentNode : b4, b4 = a4.namespaceURI || null, a4 = a4.tagName, b4 = mb(b4, a4);
  }
  H(ah);
  I(ah, b4);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a4) {
  dh(ch.current);
  var b4 = dh(ah.current);
  var c4 = mb(b4, a4.type);
  b4 !== c4 && (I(bh, a4), I(ah, c4));
}
function hh(a4) {
  bh.current === a4 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a4) {
  for (var b4 = a4; b4 !== null; ) {
    if (b4.tag === 13) {
      var c4 = b4.memoizedState;
      if (c4 !== null && (c4 = c4.dehydrated, c4 === null || c4.data === "$?" || c4.data === "$!"))
        return b4;
    } else if (b4.tag === 19 && b4.memoizedProps.revealOrder !== void 0) {
      if ((b4.flags & 64) !== 0)
        return b4;
    } else if (b4.child !== null) {
      b4.child.return = b4;
      b4 = b4.child;
      continue;
    }
    if (b4 === a4)
      break;
    for (; b4.sibling === null; ) {
      if (b4.return === null || b4.return === a4)
        return null;
      b4 = b4.return;
    }
    b4.sibling.return = b4.return;
    b4 = b4.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a4, b4) {
  var c4 = nh(5, null, null, 0);
  c4.elementType = "DELETED";
  c4.type = "DELETED";
  c4.stateNode = b4;
  c4.return = a4;
  c4.flags = 8;
  a4.lastEffect !== null ? (a4.lastEffect.nextEffect = c4, a4.lastEffect = c4) : a4.firstEffect = a4.lastEffect = c4;
}
function oh(a4, b4) {
  switch (a4.tag) {
    case 5:
      var c4 = a4.type;
      b4 = b4.nodeType !== 1 || c4.toLowerCase() !== b4.nodeName.toLowerCase() ? null : b4;
      return b4 !== null ? (a4.stateNode = b4, true) : false;
    case 6:
      return b4 = a4.pendingProps === "" || b4.nodeType !== 3 ? null : b4, b4 !== null ? (a4.stateNode = b4, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a4) {
  if (lh) {
    var b4 = kh;
    if (b4) {
      var c4 = b4;
      if (!oh(a4, b4)) {
        b4 = rf(c4.nextSibling);
        if (!b4 || !oh(a4, b4)) {
          a4.flags = a4.flags & -1025 | 2;
          lh = false;
          jh = a4;
          return;
        }
        mh(jh, c4);
      }
      jh = a4;
      kh = rf(b4.firstChild);
    } else
      a4.flags = a4.flags & -1025 | 2, lh = false, jh = a4;
  }
}
function qh(a4) {
  for (a4 = a4.return; a4 !== null && a4.tag !== 5 && a4.tag !== 3 && a4.tag !== 13; )
    a4 = a4.return;
  jh = a4;
}
function rh(a4) {
  if (a4 !== jh)
    return false;
  if (!lh)
    return qh(a4), lh = true, false;
  var b4 = a4.type;
  if (a4.tag !== 5 || b4 !== "head" && b4 !== "body" && !nf(b4, a4.memoizedProps))
    for (b4 = kh; b4; )
      mh(a4, b4), b4 = rf(b4.nextSibling);
  qh(a4);
  if (a4.tag === 13) {
    a4 = a4.memoizedState;
    a4 = a4 !== null ? a4.dehydrated : null;
    if (!a4)
      throw Error(y(317));
    a: {
      a4 = a4.nextSibling;
      for (b4 = 0; a4; ) {
        if (a4.nodeType === 8) {
          var c4 = a4.data;
          if (c4 === "/$") {
            if (b4 === 0) {
              kh = rf(a4.nextSibling);
              break a;
            }
            b4--;
          } else
            c4 !== "$" && c4 !== "$!" && c4 !== "$?" || b4++;
        }
        a4 = a4.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a4.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a4 = 0; a4 < th.length; a4++)
    th[a4]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a4, b4) {
  if (b4 === null)
    return false;
  for (var c4 = 0; c4 < b4.length && c4 < a4.length; c4++)
    if (!He(a4[c4], b4[c4]))
      return false;
  return true;
}
function Ch(a4, b4, c4, d4, e4, f4) {
  xh = f4;
  R = b4;
  b4.memoizedState = null;
  b4.updateQueue = null;
  b4.lanes = 0;
  vh.current = a4 === null || a4.memoizedState === null ? Dh : Eh;
  a4 = c4(d4, e4);
  if (zh) {
    f4 = 0;
    do {
      zh = false;
      if (!(25 > f4))
        throw Error(y(301));
      f4 += 1;
      T = S = null;
      b4.updateQueue = null;
      vh.current = Fh;
      a4 = c4(d4, e4);
    } while (zh);
  }
  vh.current = Gh;
  b4 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b4)
    throw Error(y(300));
  return a4;
}
function Hh() {
  var a4 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a4 : T = T.next = a4;
  return T;
}
function Ih() {
  if (S === null) {
    var a4 = R.alternate;
    a4 = a4 !== null ? a4.memoizedState : null;
  } else
    a4 = S.next;
  var b4 = T === null ? R.memoizedState : T.next;
  if (b4 !== null)
    T = b4, S = a4;
  else {
    if (a4 === null)
      throw Error(y(310));
    S = a4;
    a4 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a4 : T = T.next = a4;
  }
  return T;
}
function Jh(a4, b4) {
  return typeof b4 === "function" ? b4(a4) : b4;
}
function Kh(a4) {
  var b4 = Ih(), c4 = b4.queue;
  if (c4 === null)
    throw Error(y(311));
  c4.lastRenderedReducer = a4;
  var d4 = S, e4 = d4.baseQueue, f4 = c4.pending;
  if (f4 !== null) {
    if (e4 !== null) {
      var g4 = e4.next;
      e4.next = f4.next;
      f4.next = g4;
    }
    d4.baseQueue = e4 = f4;
    c4.pending = null;
  }
  if (e4 !== null) {
    e4 = e4.next;
    d4 = d4.baseState;
    var h4 = g4 = f4 = null, k3 = e4;
    do {
      var l4 = k3.lane;
      if ((xh & l4) === l4)
        h4 !== null && (h4 = h4.next = {lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null}), d4 = k3.eagerReducer === a4 ? k3.eagerState : a4(d4, k3.action);
      else {
        var n4 = {
          lane: l4,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h4 === null ? (g4 = h4 = n4, f4 = d4) : h4 = h4.next = n4;
        R.lanes |= l4;
        Dg |= l4;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e4);
    h4 === null ? f4 = d4 : h4.next = g4;
    He(d4, b4.memoizedState) || (ug = true);
    b4.memoizedState = d4;
    b4.baseState = f4;
    b4.baseQueue = h4;
    c4.lastRenderedState = d4;
  }
  return [b4.memoizedState, c4.dispatch];
}
function Lh(a4) {
  var b4 = Ih(), c4 = b4.queue;
  if (c4 === null)
    throw Error(y(311));
  c4.lastRenderedReducer = a4;
  var d4 = c4.dispatch, e4 = c4.pending, f4 = b4.memoizedState;
  if (e4 !== null) {
    c4.pending = null;
    var g4 = e4 = e4.next;
    do
      f4 = a4(f4, g4.action), g4 = g4.next;
    while (g4 !== e4);
    He(f4, b4.memoizedState) || (ug = true);
    b4.memoizedState = f4;
    b4.baseQueue === null && (b4.baseState = f4);
    c4.lastRenderedState = f4;
  }
  return [f4, d4];
}
function Mh(a4, b4, c4) {
  var d4 = b4._getVersion;
  d4 = d4(b4._source);
  var e4 = b4._workInProgressVersionPrimary;
  if (e4 !== null)
    a4 = e4 === d4;
  else if (a4 = a4.mutableReadLanes, a4 = (xh & a4) === a4)
    b4._workInProgressVersionPrimary = d4, th.push(b4);
  if (a4)
    return c4(b4._source);
  th.push(b4);
  throw Error(y(350));
}
function Nh(a4, b4, c4, d4) {
  var e4 = U;
  if (e4 === null)
    throw Error(y(349));
  var f4 = b4._getVersion, g4 = f4(b4._source), h4 = vh.current, k3 = h4.useState(function() {
    return Mh(e4, b4, c4);
  }), l4 = k3[1], n4 = k3[0];
  k3 = T;
  var A4 = a4.memoizedState, p4 = A4.refs, C3 = p4.getSnapshot, x3 = A4.source;
  A4 = A4.subscribe;
  var w3 = R;
  a4.memoizedState = {refs: p4, source: b4, subscribe: d4};
  h4.useEffect(function() {
    p4.getSnapshot = c4;
    p4.setSnapshot = l4;
    var a5 = f4(b4._source);
    if (!He(g4, a5)) {
      a5 = c4(b4._source);
      He(n4, a5) || (l4(a5), a5 = Ig(w3), e4.mutableReadLanes |= a5 & e4.pendingLanes);
      a5 = e4.mutableReadLanes;
      e4.entangledLanes |= a5;
      for (var d5 = e4.entanglements, h5 = a5; 0 < h5; ) {
        var k4 = 31 - Vc(h5), v3 = 1 << k4;
        d5[k4] |= a5;
        h5 &= ~v3;
      }
    }
  }, [c4, b4, d4]);
  h4.useEffect(function() {
    return d4(b4._source, function() {
      var a5 = p4.getSnapshot, c5 = p4.setSnapshot;
      try {
        c5(a5(b4._source));
        var d5 = Ig(w3);
        e4.mutableReadLanes |= d5 & e4.pendingLanes;
      } catch (q3) {
        c5(function() {
          throw q3;
        });
      }
    });
  }, [b4, d4]);
  He(C3, c4) && He(x3, b4) && He(A4, d4) || (a4 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n4}, a4.dispatch = l4 = Oh.bind(null, R, a4), k3.queue = a4, k3.baseQueue = null, n4 = Mh(e4, b4, c4), k3.memoizedState = k3.baseState = n4);
  return n4;
}
function Ph(a4, b4, c4) {
  var d4 = Ih();
  return Nh(d4, a4, b4, c4);
}
function Qh(a4) {
  var b4 = Hh();
  typeof a4 === "function" && (a4 = a4());
  b4.memoizedState = b4.baseState = a4;
  a4 = b4.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a4};
  a4 = a4.dispatch = Oh.bind(null, R, a4);
  return [b4.memoizedState, a4];
}
function Rh(a4, b4, c4, d4) {
  a4 = {tag: a4, create: b4, destroy: c4, deps: d4, next: null};
  b4 = R.updateQueue;
  b4 === null ? (b4 = {lastEffect: null}, R.updateQueue = b4, b4.lastEffect = a4.next = a4) : (c4 = b4.lastEffect, c4 === null ? b4.lastEffect = a4.next = a4 : (d4 = c4.next, c4.next = a4, a4.next = d4, b4.lastEffect = a4));
  return a4;
}
function Sh(a4) {
  var b4 = Hh();
  a4 = {current: a4};
  return b4.memoizedState = a4;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a4, b4, c4, d4) {
  var e4 = Hh();
  R.flags |= a4;
  e4.memoizedState = Rh(1 | b4, c4, void 0, d4 === void 0 ? null : d4);
}
function Vh(a4, b4, c4, d4) {
  var e4 = Ih();
  d4 = d4 === void 0 ? null : d4;
  var f4 = void 0;
  if (S !== null) {
    var g4 = S.memoizedState;
    f4 = g4.destroy;
    if (d4 !== null && Bh(d4, g4.deps)) {
      Rh(b4, c4, f4, d4);
      return;
    }
  }
  R.flags |= a4;
  e4.memoizedState = Rh(1 | b4, c4, f4, d4);
}
function Wh(a4, b4) {
  return Uh(516, 4, a4, b4);
}
function Xh(a4, b4) {
  return Vh(516, 4, a4, b4);
}
function Yh(a4, b4) {
  return Vh(4, 2, a4, b4);
}
function Zh(a4, b4) {
  if (typeof b4 === "function")
    return a4 = a4(), b4(a4), function() {
      b4(null);
    };
  if (b4 !== null && b4 !== void 0)
    return a4 = a4(), b4.current = a4, function() {
      b4.current = null;
    };
}
function $h(a4, b4, c4) {
  c4 = c4 !== null && c4 !== void 0 ? c4.concat([a4]) : null;
  return Vh(4, 2, Zh.bind(null, b4, a4), c4);
}
function ai() {
}
function bi(a4, b4) {
  var c4 = Ih();
  b4 = b4 === void 0 ? null : b4;
  var d4 = c4.memoizedState;
  if (d4 !== null && b4 !== null && Bh(b4, d4[1]))
    return d4[0];
  c4.memoizedState = [a4, b4];
  return a4;
}
function ci(a4, b4) {
  var c4 = Ih();
  b4 = b4 === void 0 ? null : b4;
  var d4 = c4.memoizedState;
  if (d4 !== null && b4 !== null && Bh(b4, d4[1]))
    return d4[0];
  a4 = a4();
  c4.memoizedState = [a4, b4];
  return a4;
}
function di(a4, b4) {
  var c4 = eg();
  gg(98 > c4 ? 98 : c4, function() {
    a4(true);
  });
  gg(97 < c4 ? 97 : c4, function() {
    var c5 = wh.transition;
    wh.transition = 1;
    try {
      a4(false), b4();
    } finally {
      wh.transition = c5;
    }
  });
}
function Oh(a4, b4, c4) {
  var d4 = Hg(), e4 = Ig(a4), f4 = {lane: e4, action: c4, eagerReducer: null, eagerState: null, next: null}, g4 = b4.pending;
  g4 === null ? f4.next = f4 : (f4.next = g4.next, g4.next = f4);
  b4.pending = f4;
  g4 = a4.alternate;
  if (a4 === R || g4 !== null && g4 === R)
    zh = yh = true;
  else {
    if (a4.lanes === 0 && (g4 === null || g4.lanes === 0) && (g4 = b4.lastRenderedReducer, g4 !== null))
      try {
        var h4 = b4.lastRenderedState, k3 = g4(h4, c4);
        f4.eagerReducer = g4;
        f4.eagerState = k3;
        if (He(k3, h4))
          return;
      } catch (l4) {
      } finally {
      }
    Jg(a4, e4, d4);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a4, b4) {
  Hh().memoizedState = [a4, b4 === void 0 ? null : b4];
  return a4;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a4, b4, c4) {
  c4 = c4 !== null && c4 !== void 0 ? c4.concat([a4]) : null;
  return Uh(4, 2, Zh.bind(null, b4, a4), c4);
}, useLayoutEffect: function(a4, b4) {
  return Uh(4, 2, a4, b4);
}, useMemo: function(a4, b4) {
  var c4 = Hh();
  b4 = b4 === void 0 ? null : b4;
  a4 = a4();
  c4.memoizedState = [a4, b4];
  return a4;
}, useReducer: function(a4, b4, c4) {
  var d4 = Hh();
  b4 = c4 !== void 0 ? c4(b4) : b4;
  d4.memoizedState = d4.baseState = b4;
  a4 = d4.queue = {pending: null, dispatch: null, lastRenderedReducer: a4, lastRenderedState: b4};
  a4 = a4.dispatch = Oh.bind(null, R, a4);
  return [d4.memoizedState, a4];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a4) {
  var b4 = Qh(a4), c4 = b4[0], d4 = b4[1];
  Wh(function() {
    var b5 = wh.transition;
    wh.transition = 1;
    try {
      d4(a4);
    } finally {
      wh.transition = b5;
    }
  }, [a4]);
  return c4;
}, useTransition: function() {
  var a4 = Qh(false), b4 = a4[0];
  a4 = di.bind(null, a4[1]);
  Sh(a4);
  return [a4, b4];
}, useMutableSource: function(a4, b4, c4) {
  var d4 = Hh();
  d4.memoizedState = {refs: {getSnapshot: b4, setSnapshot: null}, source: a4, subscribe: c4};
  return Nh(d4, a4, b4, c4);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a4 = false, b4 = uf(function() {
      a4 || (a4 = true, c4("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c4 = Qh(b4)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c4("r:" + (tf++).toString(36));
    }, void 0, null));
    return b4;
  }
  b4 = "r:" + (tf++).toString(36);
  Qh(b4);
  return b4;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a4) {
  var b4 = Kh(Jh), c4 = b4[0], d4 = b4[1];
  Xh(function() {
    var b5 = wh.transition;
    wh.transition = 1;
    try {
      d4(a4);
    } finally {
      wh.transition = b5;
    }
  }, [a4]);
  return c4;
}, useTransition: function() {
  var a4 = Kh(Jh)[0];
  return [
    Th().current,
    a4
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a4) {
  var b4 = Lh(Jh), c4 = b4[0], d4 = b4[1];
  Xh(function() {
    var b5 = wh.transition;
    wh.transition = 1;
    try {
      d4(a4);
    } finally {
      wh.transition = b5;
    }
  }, [a4]);
  return c4;
}, useTransition: function() {
  var a4 = Lh(Jh)[0];
  return [
    Th().current,
    a4
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a4, b4, c4, d4) {
  b4.child = a4 === null ? Zg(b4, null, c4, d4) : Yg(b4, a4.child, c4, d4);
}
function gi(a4, b4, c4, d4, e4) {
  c4 = c4.render;
  var f4 = b4.ref;
  tg(b4, e4);
  d4 = Ch(a4, b4, c4, d4, f4, e4);
  if (a4 !== null && !ug)
    return b4.updateQueue = a4.updateQueue, b4.flags &= -517, a4.lanes &= ~e4, hi(a4, b4, e4);
  b4.flags |= 1;
  fi(a4, b4, d4, e4);
  return b4.child;
}
function ii(a4, b4, c4, d4, e4, f4) {
  if (a4 === null) {
    var g4 = c4.type;
    if (typeof g4 === "function" && !ji(g4) && g4.defaultProps === void 0 && c4.compare === null && c4.defaultProps === void 0)
      return b4.tag = 15, b4.type = g4, ki(a4, b4, g4, d4, e4, f4);
    a4 = Vg(c4.type, null, d4, b4, b4.mode, f4);
    a4.ref = b4.ref;
    a4.return = b4;
    return b4.child = a4;
  }
  g4 = a4.child;
  if ((e4 & f4) === 0 && (e4 = g4.memoizedProps, c4 = c4.compare, c4 = c4 !== null ? c4 : Je, c4(e4, d4) && a4.ref === b4.ref))
    return hi(a4, b4, f4);
  b4.flags |= 1;
  a4 = Tg(g4, d4);
  a4.ref = b4.ref;
  a4.return = b4;
  return b4.child = a4;
}
function ki(a4, b4, c4, d4, e4, f4) {
  if (a4 !== null && Je(a4.memoizedProps, d4) && a4.ref === b4.ref)
    if (ug = false, (f4 & e4) !== 0)
      (a4.flags & 16384) !== 0 && (ug = true);
    else
      return b4.lanes = a4.lanes, hi(a4, b4, f4);
  return li(a4, b4, c4, d4, f4);
}
function mi(a4, b4, c4) {
  var d4 = b4.pendingProps, e4 = d4.children, f4 = a4 !== null ? a4.memoizedState : null;
  if (d4.mode === "hidden" || d4.mode === "unstable-defer-without-hiding")
    if ((b4.mode & 4) === 0)
      b4.memoizedState = {baseLanes: 0}, ni(b4, c4);
    else if ((c4 & 1073741824) !== 0)
      b4.memoizedState = {baseLanes: 0}, ni(b4, f4 !== null ? f4.baseLanes : c4);
    else
      return a4 = f4 !== null ? f4.baseLanes | c4 : c4, b4.lanes = b4.childLanes = 1073741824, b4.memoizedState = {baseLanes: a4}, ni(b4, a4), null;
  else
    f4 !== null ? (d4 = f4.baseLanes | c4, b4.memoizedState = null) : d4 = c4, ni(b4, d4);
  fi(a4, b4, e4, c4);
  return b4.child;
}
function oi(a4, b4) {
  var c4 = b4.ref;
  if (a4 === null && c4 !== null || a4 !== null && a4.ref !== c4)
    b4.flags |= 128;
}
function li(a4, b4, c4, d4, e4) {
  var f4 = Ff(c4) ? Df : M.current;
  f4 = Ef(b4, f4);
  tg(b4, e4);
  c4 = Ch(a4, b4, c4, d4, f4, e4);
  if (a4 !== null && !ug)
    return b4.updateQueue = a4.updateQueue, b4.flags &= -517, a4.lanes &= ~e4, hi(a4, b4, e4);
  b4.flags |= 1;
  fi(a4, b4, c4, e4);
  return b4.child;
}
function pi(a4, b4, c4, d4, e4) {
  if (Ff(c4)) {
    var f4 = true;
    Jf(b4);
  } else
    f4 = false;
  tg(b4, e4);
  if (b4.stateNode === null)
    a4 !== null && (a4.alternate = null, b4.alternate = null, b4.flags |= 2), Mg(b4, c4, d4), Og(b4, c4, d4, e4), d4 = true;
  else if (a4 === null) {
    var g4 = b4.stateNode, h4 = b4.memoizedProps;
    g4.props = h4;
    var k3 = g4.context, l4 = c4.contextType;
    typeof l4 === "object" && l4 !== null ? l4 = vg(l4) : (l4 = Ff(c4) ? Df : M.current, l4 = Ef(b4, l4));
    var n4 = c4.getDerivedStateFromProps, A4 = typeof n4 === "function" || typeof g4.getSnapshotBeforeUpdate === "function";
    A4 || typeof g4.UNSAFE_componentWillReceiveProps !== "function" && typeof g4.componentWillReceiveProps !== "function" || (h4 !== d4 || k3 !== l4) && Ng(b4, g4, d4, l4);
    wg = false;
    var p4 = b4.memoizedState;
    g4.state = p4;
    Cg(b4, d4, g4, e4);
    k3 = b4.memoizedState;
    h4 !== d4 || p4 !== k3 || N.current || wg ? (typeof n4 === "function" && (Gg(b4, c4, n4, d4), k3 = b4.memoizedState), (h4 = wg || Lg(b4, c4, h4, d4, p4, k3, l4)) ? (A4 || typeof g4.UNSAFE_componentWillMount !== "function" && typeof g4.componentWillMount !== "function" || (typeof g4.componentWillMount === "function" && g4.componentWillMount(), typeof g4.UNSAFE_componentWillMount === "function" && g4.UNSAFE_componentWillMount()), typeof g4.componentDidMount === "function" && (b4.flags |= 4)) : (typeof g4.componentDidMount === "function" && (b4.flags |= 4), b4.memoizedProps = d4, b4.memoizedState = k3), g4.props = d4, g4.state = k3, g4.context = l4, d4 = h4) : (typeof g4.componentDidMount === "function" && (b4.flags |= 4), d4 = false);
  } else {
    g4 = b4.stateNode;
    yg(a4, b4);
    h4 = b4.memoizedProps;
    l4 = b4.type === b4.elementType ? h4 : lg(b4.type, h4);
    g4.props = l4;
    A4 = b4.pendingProps;
    p4 = g4.context;
    k3 = c4.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c4) ? Df : M.current, k3 = Ef(b4, k3));
    var C3 = c4.getDerivedStateFromProps;
    (n4 = typeof C3 === "function" || typeof g4.getSnapshotBeforeUpdate === "function") || typeof g4.UNSAFE_componentWillReceiveProps !== "function" && typeof g4.componentWillReceiveProps !== "function" || (h4 !== A4 || p4 !== k3) && Ng(b4, g4, d4, k3);
    wg = false;
    p4 = b4.memoizedState;
    g4.state = p4;
    Cg(b4, d4, g4, e4);
    var x3 = b4.memoizedState;
    h4 !== A4 || p4 !== x3 || N.current || wg ? (typeof C3 === "function" && (Gg(b4, c4, C3, d4), x3 = b4.memoizedState), (l4 = wg || Lg(b4, c4, l4, d4, p4, x3, k3)) ? (n4 || typeof g4.UNSAFE_componentWillUpdate !== "function" && typeof g4.componentWillUpdate !== "function" || (typeof g4.componentWillUpdate === "function" && g4.componentWillUpdate(d4, x3, k3), typeof g4.UNSAFE_componentWillUpdate === "function" && g4.UNSAFE_componentWillUpdate(d4, x3, k3)), typeof g4.componentDidUpdate === "function" && (b4.flags |= 4), typeof g4.getSnapshotBeforeUpdate === "function" && (b4.flags |= 256)) : (typeof g4.componentDidUpdate !== "function" || h4 === a4.memoizedProps && p4 === a4.memoizedState || (b4.flags |= 4), typeof g4.getSnapshotBeforeUpdate !== "function" || h4 === a4.memoizedProps && p4 === a4.memoizedState || (b4.flags |= 256), b4.memoizedProps = d4, b4.memoizedState = x3), g4.props = d4, g4.state = x3, g4.context = k3, d4 = l4) : (typeof g4.componentDidUpdate !== "function" || h4 === a4.memoizedProps && p4 === a4.memoizedState || (b4.flags |= 4), typeof g4.getSnapshotBeforeUpdate !== "function" || h4 === a4.memoizedProps && p4 === a4.memoizedState || (b4.flags |= 256), d4 = false);
  }
  return qi(a4, b4, c4, d4, f4, e4);
}
function qi(a4, b4, c4, d4, e4, f4) {
  oi(a4, b4);
  var g4 = (b4.flags & 64) !== 0;
  if (!d4 && !g4)
    return e4 && Kf(b4, c4, false), hi(a4, b4, f4);
  d4 = b4.stateNode;
  ei.current = b4;
  var h4 = g4 && typeof c4.getDerivedStateFromError !== "function" ? null : d4.render();
  b4.flags |= 1;
  a4 !== null && g4 ? (b4.child = Yg(b4, a4.child, null, f4), b4.child = Yg(b4, null, h4, f4)) : fi(a4, b4, h4, f4);
  b4.memoizedState = d4.state;
  e4 && Kf(b4, c4, true);
  return b4.child;
}
function ri(a4) {
  var b4 = a4.stateNode;
  b4.pendingContext ? Hf(a4, b4.pendingContext, b4.pendingContext !== b4.context) : b4.context && Hf(a4, b4.context, false);
  eh(a4, b4.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a4, b4, c4) {
  var d4 = b4.pendingProps, e4 = P.current, f4 = false, g4;
  (g4 = (b4.flags & 64) !== 0) || (g4 = a4 !== null && a4.memoizedState === null ? false : (e4 & 2) !== 0);
  g4 ? (f4 = true, b4.flags &= -65) : a4 !== null && a4.memoizedState === null || d4.fallback === void 0 || d4.unstable_avoidThisFallback === true || (e4 |= 1);
  I(P, e4 & 1);
  if (a4 === null) {
    d4.fallback !== void 0 && ph(b4);
    a4 = d4.children;
    e4 = d4.fallback;
    if (f4)
      return a4 = ui(b4, a4, e4, c4), b4.child.memoizedState = {baseLanes: c4}, b4.memoizedState = si, a4;
    if (typeof d4.unstable_expectedLoadTime === "number")
      return a4 = ui(b4, a4, e4, c4), b4.child.memoizedState = {baseLanes: c4}, b4.memoizedState = si, b4.lanes = 33554432, a4;
    c4 = vi({mode: "visible", children: a4}, b4.mode, c4, null);
    c4.return = b4;
    return b4.child = c4;
  }
  if (a4.memoizedState !== null) {
    if (f4)
      return d4 = wi(a4, b4, d4.children, d4.fallback, c4), f4 = b4.child, e4 = a4.child.memoizedState, f4.memoizedState = e4 === null ? {baseLanes: c4} : {baseLanes: e4.baseLanes | c4}, f4.childLanes = a4.childLanes & ~c4, b4.memoizedState = si, d4;
    c4 = xi(a4, b4, d4.children, c4);
    b4.memoizedState = null;
    return c4;
  }
  if (f4)
    return d4 = wi(a4, b4, d4.children, d4.fallback, c4), f4 = b4.child, e4 = a4.child.memoizedState, f4.memoizedState = e4 === null ? {baseLanes: c4} : {baseLanes: e4.baseLanes | c4}, f4.childLanes = a4.childLanes & ~c4, b4.memoizedState = si, d4;
  c4 = xi(a4, b4, d4.children, c4);
  b4.memoizedState = null;
  return c4;
}
function ui(a4, b4, c4, d4) {
  var e4 = a4.mode, f4 = a4.child;
  b4 = {mode: "hidden", children: b4};
  (e4 & 2) === 0 && f4 !== null ? (f4.childLanes = 0, f4.pendingProps = b4) : f4 = vi(b4, e4, 0, null);
  c4 = Xg(c4, e4, d4, null);
  f4.return = a4;
  c4.return = a4;
  f4.sibling = c4;
  a4.child = f4;
  return c4;
}
function xi(a4, b4, c4, d4) {
  var e4 = a4.child;
  a4 = e4.sibling;
  c4 = Tg(e4, {mode: "visible", children: c4});
  (b4.mode & 2) === 0 && (c4.lanes = d4);
  c4.return = b4;
  c4.sibling = null;
  a4 !== null && (a4.nextEffect = null, a4.flags = 8, b4.firstEffect = b4.lastEffect = a4);
  return b4.child = c4;
}
function wi(a4, b4, c4, d4, e4) {
  var f4 = b4.mode, g4 = a4.child;
  a4 = g4.sibling;
  var h4 = {mode: "hidden", children: c4};
  (f4 & 2) === 0 && b4.child !== g4 ? (c4 = b4.child, c4.childLanes = 0, c4.pendingProps = h4, g4 = c4.lastEffect, g4 !== null ? (b4.firstEffect = c4.firstEffect, b4.lastEffect = g4, g4.nextEffect = null) : b4.firstEffect = b4.lastEffect = null) : c4 = Tg(g4, h4);
  a4 !== null ? d4 = Tg(a4, d4) : (d4 = Xg(d4, f4, e4, null), d4.flags |= 2);
  d4.return = b4;
  c4.return = b4;
  c4.sibling = d4;
  b4.child = c4;
  return d4;
}
function yi(a4, b4) {
  a4.lanes |= b4;
  var c4 = a4.alternate;
  c4 !== null && (c4.lanes |= b4);
  sg(a4.return, b4);
}
function zi(a4, b4, c4, d4, e4, f4) {
  var g4 = a4.memoizedState;
  g4 === null ? a4.memoizedState = {isBackwards: b4, rendering: null, renderingStartTime: 0, last: d4, tail: c4, tailMode: e4, lastEffect: f4} : (g4.isBackwards = b4, g4.rendering = null, g4.renderingStartTime = 0, g4.last = d4, g4.tail = c4, g4.tailMode = e4, g4.lastEffect = f4);
}
function Ai(a4, b4, c4) {
  var d4 = b4.pendingProps, e4 = d4.revealOrder, f4 = d4.tail;
  fi(a4, b4, d4.children, c4);
  d4 = P.current;
  if ((d4 & 2) !== 0)
    d4 = d4 & 1 | 2, b4.flags |= 64;
  else {
    if (a4 !== null && (a4.flags & 64) !== 0)
      a:
        for (a4 = b4.child; a4 !== null; ) {
          if (a4.tag === 13)
            a4.memoizedState !== null && yi(a4, c4);
          else if (a4.tag === 19)
            yi(a4, c4);
          else if (a4.child !== null) {
            a4.child.return = a4;
            a4 = a4.child;
            continue;
          }
          if (a4 === b4)
            break a;
          for (; a4.sibling === null; ) {
            if (a4.return === null || a4.return === b4)
              break a;
            a4 = a4.return;
          }
          a4.sibling.return = a4.return;
          a4 = a4.sibling;
        }
    d4 &= 1;
  }
  I(P, d4);
  if ((b4.mode & 2) === 0)
    b4.memoizedState = null;
  else
    switch (e4) {
      case "forwards":
        c4 = b4.child;
        for (e4 = null; c4 !== null; )
          a4 = c4.alternate, a4 !== null && ih(a4) === null && (e4 = c4), c4 = c4.sibling;
        c4 = e4;
        c4 === null ? (e4 = b4.child, b4.child = null) : (e4 = c4.sibling, c4.sibling = null);
        zi(b4, false, e4, c4, f4, b4.lastEffect);
        break;
      case "backwards":
        c4 = null;
        e4 = b4.child;
        for (b4.child = null; e4 !== null; ) {
          a4 = e4.alternate;
          if (a4 !== null && ih(a4) === null) {
            b4.child = e4;
            break;
          }
          a4 = e4.sibling;
          e4.sibling = c4;
          c4 = e4;
          e4 = a4;
        }
        zi(b4, true, c4, null, f4, b4.lastEffect);
        break;
      case "together":
        zi(b4, false, null, null, void 0, b4.lastEffect);
        break;
      default:
        b4.memoizedState = null;
    }
  return b4.child;
}
function hi(a4, b4, c4) {
  a4 !== null && (b4.dependencies = a4.dependencies);
  Dg |= b4.lanes;
  if ((c4 & b4.childLanes) !== 0) {
    if (a4 !== null && b4.child !== a4.child)
      throw Error(y(153));
    if (b4.child !== null) {
      a4 = b4.child;
      c4 = Tg(a4, a4.pendingProps);
      b4.child = c4;
      for (c4.return = b4; a4.sibling !== null; )
        a4 = a4.sibling, c4 = c4.sibling = Tg(a4, a4.pendingProps), c4.return = b4;
      c4.sibling = null;
    }
    return b4.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a4, b4) {
  for (var c4 = b4.child; c4 !== null; ) {
    if (c4.tag === 5 || c4.tag === 6)
      a4.appendChild(c4.stateNode);
    else if (c4.tag !== 4 && c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === b4)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === b4)
        return;
      c4 = c4.return;
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
};
Ci = function() {
};
Di = function(a4, b4, c4, d4) {
  var e4 = a4.memoizedProps;
  if (e4 !== d4) {
    a4 = b4.stateNode;
    dh(ah.current);
    var f4 = null;
    switch (c4) {
      case "input":
        e4 = Ya(a4, e4);
        d4 = Ya(a4, d4);
        f4 = [];
        break;
      case "option":
        e4 = eb(a4, e4);
        d4 = eb(a4, d4);
        f4 = [];
        break;
      case "select":
        e4 = objectAssign({}, e4, {value: void 0});
        d4 = objectAssign({}, d4, {value: void 0});
        f4 = [];
        break;
      case "textarea":
        e4 = gb(a4, e4);
        d4 = gb(a4, d4);
        f4 = [];
        break;
      default:
        typeof e4.onClick !== "function" && typeof d4.onClick === "function" && (a4.onclick = jf);
    }
    vb(c4, d4);
    var g4;
    c4 = null;
    for (l4 in e4)
      if (!d4.hasOwnProperty(l4) && e4.hasOwnProperty(l4) && e4[l4] != null)
        if (l4 === "style") {
          var h4 = e4[l4];
          for (g4 in h4)
            h4.hasOwnProperty(g4) && (c4 || (c4 = {}), c4[g4] = "");
        } else
          l4 !== "dangerouslySetInnerHTML" && l4 !== "children" && l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && l4 !== "autoFocus" && (ca.hasOwnProperty(l4) ? f4 || (f4 = []) : (f4 = f4 || []).push(l4, null));
    for (l4 in d4) {
      var k3 = d4[l4];
      h4 = e4 != null ? e4[l4] : void 0;
      if (d4.hasOwnProperty(l4) && k3 !== h4 && (k3 != null || h4 != null))
        if (l4 === "style")
          if (h4) {
            for (g4 in h4)
              !h4.hasOwnProperty(g4) || k3 && k3.hasOwnProperty(g4) || (c4 || (c4 = {}), c4[g4] = "");
            for (g4 in k3)
              k3.hasOwnProperty(g4) && h4[g4] !== k3[g4] && (c4 || (c4 = {}), c4[g4] = k3[g4]);
          } else
            c4 || (f4 || (f4 = []), f4.push(l4, c4)), c4 = k3;
        else
          l4 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h4 = h4 ? h4.__html : void 0, k3 != null && h4 !== k3 && (f4 = f4 || []).push(l4, k3)) : l4 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f4 = f4 || []).push(l4, "" + k3) : l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l4) ? (k3 != null && l4 === "onScroll" && G("scroll", a4), f4 || h4 === k3 || (f4 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f4 = f4 || []).push(l4, k3));
    }
    c4 && (f4 = f4 || []).push("style", c4);
    var l4 = f4;
    if (b4.updateQueue = l4)
      b4.flags |= 4;
  }
};
Ei = function(a4, b4, c4, d4) {
  c4 !== d4 && (b4.flags |= 4);
};
function Fi(a4, b4) {
  if (!lh)
    switch (a4.tailMode) {
      case "hidden":
        b4 = a4.tail;
        for (var c4 = null; b4 !== null; )
          b4.alternate !== null && (c4 = b4), b4 = b4.sibling;
        c4 === null ? a4.tail = null : c4.sibling = null;
        break;
      case "collapsed":
        c4 = a4.tail;
        for (var d4 = null; c4 !== null; )
          c4.alternate !== null && (d4 = c4), c4 = c4.sibling;
        d4 === null ? b4 || a4.tail === null ? a4.tail = null : a4.tail.sibling = null : d4.sibling = null;
    }
}
function Gi(a4, b4, c4) {
  var d4 = b4.pendingProps;
  switch (b4.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b4.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d4 = b4.stateNode;
      d4.pendingContext && (d4.context = d4.pendingContext, d4.pendingContext = null);
      if (a4 === null || a4.child === null)
        rh(b4) ? b4.flags |= 4 : d4.hydrate || (b4.flags |= 256);
      Ci(b4);
      return null;
    case 5:
      hh(b4);
      var e4 = dh(ch.current);
      c4 = b4.type;
      if (a4 !== null && b4.stateNode != null)
        Di(a4, b4, c4, d4, e4), a4.ref !== b4.ref && (b4.flags |= 128);
      else {
        if (!d4) {
          if (b4.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a4 = dh(ah.current);
        if (rh(b4)) {
          d4 = b4.stateNode;
          c4 = b4.type;
          var f4 = b4.memoizedProps;
          d4[wf] = b4;
          d4[xf] = f4;
          switch (c4) {
            case "dialog":
              G("cancel", d4);
              G("close", d4);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d4);
              break;
            case "video":
            case "audio":
              for (a4 = 0; a4 < Xe.length; a4++)
                G(Xe[a4], d4);
              break;
            case "source":
              G("error", d4);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d4);
              G("load", d4);
              break;
            case "details":
              G("toggle", d4);
              break;
            case "input":
              Za(d4, f4);
              G("invalid", d4);
              break;
            case "select":
              d4._wrapperState = {wasMultiple: !!f4.multiple};
              G("invalid", d4);
              break;
            case "textarea":
              hb(d4, f4), G("invalid", d4);
          }
          vb(c4, f4);
          a4 = null;
          for (var g4 in f4)
            f4.hasOwnProperty(g4) && (e4 = f4[g4], g4 === "children" ? typeof e4 === "string" ? d4.textContent !== e4 && (a4 = ["children", e4]) : typeof e4 === "number" && d4.textContent !== "" + e4 && (a4 = ["children", "" + e4]) : ca.hasOwnProperty(g4) && e4 != null && g4 === "onScroll" && G("scroll", d4));
          switch (c4) {
            case "input":
              Va(d4);
              cb(d4, f4, true);
              break;
            case "textarea":
              Va(d4);
              jb(d4);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f4.onClick === "function" && (d4.onclick = jf);
          }
          d4 = a4;
          b4.updateQueue = d4;
          d4 !== null && (b4.flags |= 4);
        } else {
          g4 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
          a4 === kb.html && (a4 = lb(c4));
          a4 === kb.html ? c4 === "script" ? (a4 = g4.createElement("div"), a4.innerHTML = "<script></script>", a4 = a4.removeChild(a4.firstChild)) : typeof d4.is === "string" ? a4 = g4.createElement(c4, {is: d4.is}) : (a4 = g4.createElement(c4), c4 === "select" && (g4 = a4, d4.multiple ? g4.multiple = true : d4.size && (g4.size = d4.size))) : a4 = g4.createElementNS(a4, c4);
          a4[wf] = b4;
          a4[xf] = d4;
          Bi(a4, b4, false, false);
          b4.stateNode = a4;
          g4 = wb(c4, d4);
          switch (c4) {
            case "dialog":
              G("cancel", a4);
              G("close", a4);
              e4 = d4;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a4);
              e4 = d4;
              break;
            case "video":
            case "audio":
              for (e4 = 0; e4 < Xe.length; e4++)
                G(Xe[e4], a4);
              e4 = d4;
              break;
            case "source":
              G("error", a4);
              e4 = d4;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a4);
              G("load", a4);
              e4 = d4;
              break;
            case "details":
              G("toggle", a4);
              e4 = d4;
              break;
            case "input":
              Za(a4, d4);
              e4 = Ya(a4, d4);
              G("invalid", a4);
              break;
            case "option":
              e4 = eb(a4, d4);
              break;
            case "select":
              a4._wrapperState = {wasMultiple: !!d4.multiple};
              e4 = objectAssign({}, d4, {value: void 0});
              G("invalid", a4);
              break;
            case "textarea":
              hb(a4, d4);
              e4 = gb(a4, d4);
              G("invalid", a4);
              break;
            default:
              e4 = d4;
          }
          vb(c4, e4);
          var h4 = e4;
          for (f4 in h4)
            if (h4.hasOwnProperty(f4)) {
              var k3 = h4[f4];
              f4 === "style" ? tb(a4, k3) : f4 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a4, k3)) : f4 === "children" ? typeof k3 === "string" ? (c4 !== "textarea" || k3 !== "") && pb(a4, k3) : typeof k3 === "number" && pb(a4, "" + k3) : f4 !== "suppressContentEditableWarning" && f4 !== "suppressHydrationWarning" && f4 !== "autoFocus" && (ca.hasOwnProperty(f4) ? k3 != null && f4 === "onScroll" && G("scroll", a4) : k3 != null && qa(a4, f4, k3, g4));
            }
          switch (c4) {
            case "input":
              Va(a4);
              cb(a4, d4, false);
              break;
            case "textarea":
              Va(a4);
              jb(a4);
              break;
            case "option":
              d4.value != null && a4.setAttribute("value", "" + Sa(d4.value));
              break;
            case "select":
              a4.multiple = !!d4.multiple;
              f4 = d4.value;
              f4 != null ? fb(a4, !!d4.multiple, f4, false) : d4.defaultValue != null && fb(a4, !!d4.multiple, d4.defaultValue, true);
              break;
            default:
              typeof e4.onClick === "function" && (a4.onclick = jf);
          }
          mf(c4, d4) && (b4.flags |= 4);
        }
        b4.ref !== null && (b4.flags |= 128);
      }
      return null;
    case 6:
      if (a4 && b4.stateNode != null)
        Ei(a4, b4, a4.memoizedProps, d4);
      else {
        if (typeof d4 !== "string" && b4.stateNode === null)
          throw Error(y(166));
        c4 = dh(ch.current);
        dh(ah.current);
        rh(b4) ? (d4 = b4.stateNode, c4 = b4.memoizedProps, d4[wf] = b4, d4.nodeValue !== c4 && (b4.flags |= 4)) : (d4 = (c4.nodeType === 9 ? c4 : c4.ownerDocument).createTextNode(d4), d4[wf] = b4, b4.stateNode = d4);
      }
      return null;
    case 13:
      H(P);
      d4 = b4.memoizedState;
      if ((b4.flags & 64) !== 0)
        return b4.lanes = c4, b4;
      d4 = d4 !== null;
      c4 = false;
      a4 === null ? b4.memoizedProps.fallback !== void 0 && rh(b4) : c4 = a4.memoizedState !== null;
      if (d4 && !c4 && (b4.mode & 2) !== 0)
        if (a4 === null && b4.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d4 || c4)
        b4.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b4), a4 === null && cf(b4.stateNode.containerInfo), null;
    case 10:
      return rg(b4), null;
    case 17:
      return Ff(b4.type) && Gf(), null;
    case 19:
      H(P);
      d4 = b4.memoizedState;
      if (d4 === null)
        return null;
      f4 = (b4.flags & 64) !== 0;
      g4 = d4.rendering;
      if (g4 === null)
        if (f4)
          Fi(d4, false);
        else {
          if (V !== 0 || a4 !== null && (a4.flags & 64) !== 0)
            for (a4 = b4.child; a4 !== null; ) {
              g4 = ih(a4);
              if (g4 !== null) {
                b4.flags |= 64;
                Fi(d4, false);
                f4 = g4.updateQueue;
                f4 !== null && (b4.updateQueue = f4, b4.flags |= 4);
                d4.lastEffect === null && (b4.firstEffect = null);
                b4.lastEffect = d4.lastEffect;
                d4 = c4;
                for (c4 = b4.child; c4 !== null; )
                  f4 = c4, a4 = d4, f4.flags &= 2, f4.nextEffect = null, f4.firstEffect = null, f4.lastEffect = null, g4 = f4.alternate, g4 === null ? (f4.childLanes = 0, f4.lanes = a4, f4.child = null, f4.memoizedProps = null, f4.memoizedState = null, f4.updateQueue = null, f4.dependencies = null, f4.stateNode = null) : (f4.childLanes = g4.childLanes, f4.lanes = g4.lanes, f4.child = g4.child, f4.memoizedProps = g4.memoizedProps, f4.memoizedState = g4.memoizedState, f4.updateQueue = g4.updateQueue, f4.type = g4.type, a4 = g4.dependencies, f4.dependencies = a4 === null ? null : {lanes: a4.lanes, firstContext: a4.firstContext}), c4 = c4.sibling;
                I(P, P.current & 1 | 2);
                return b4.child;
              }
              a4 = a4.sibling;
            }
          d4.tail !== null && O() > Ji && (b4.flags |= 64, f4 = true, Fi(d4, false), b4.lanes = 33554432);
        }
      else {
        if (!f4)
          if (a4 = ih(g4), a4 !== null) {
            if (b4.flags |= 64, f4 = true, c4 = a4.updateQueue, c4 !== null && (b4.updateQueue = c4, b4.flags |= 4), Fi(d4, true), d4.tail === null && d4.tailMode === "hidden" && !g4.alternate && !lh)
              return b4 = b4.lastEffect = d4.lastEffect, b4 !== null && (b4.nextEffect = null), null;
          } else
            2 * O() - d4.renderingStartTime > Ji && c4 !== 1073741824 && (b4.flags |= 64, f4 = true, Fi(d4, false), b4.lanes = 33554432);
        d4.isBackwards ? (g4.sibling = b4.child, b4.child = g4) : (c4 = d4.last, c4 !== null ? c4.sibling = g4 : b4.child = g4, d4.last = g4);
      }
      return d4.tail !== null ? (c4 = d4.tail, d4.rendering = c4, d4.tail = c4.sibling, d4.lastEffect = b4.lastEffect, d4.renderingStartTime = O(), c4.sibling = null, b4 = P.current, I(P, f4 ? b4 & 1 | 2 : b4 & 1), c4) : null;
    case 23:
    case 24:
      return Ki(), a4 !== null && a4.memoizedState !== null !== (b4.memoizedState !== null) && d4.mode !== "unstable-defer-without-hiding" && (b4.flags |= 4), null;
  }
  throw Error(y(156, b4.tag));
}
function Li(a4) {
  switch (a4.tag) {
    case 1:
      Ff(a4.type) && Gf();
      var b4 = a4.flags;
      return b4 & 4096 ? (a4.flags = b4 & -4097 | 64, a4) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b4 = a4.flags;
      if ((b4 & 64) !== 0)
        throw Error(y(285));
      a4.flags = b4 & -4097 | 64;
      return a4;
    case 5:
      return hh(a4), null;
    case 13:
      return H(P), b4 = a4.flags, b4 & 4096 ? (a4.flags = b4 & -4097 | 64, a4) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a4), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a4, b4) {
  try {
    var c4 = "", d4 = b4;
    do
      c4 += Qa(d4), d4 = d4.return;
    while (d4);
    var e4 = c4;
  } catch (f4) {
    e4 = "\nError generating stack: " + f4.message + "\n" + f4.stack;
  }
  return {value: a4, source: b4, stack: e4};
}
function Ni(a4, b4) {
  try {
    console.error(b4.value);
  } catch (c4) {
    setTimeout(function() {
      throw c4;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a4, b4, c4) {
  c4 = zg(-1, c4);
  c4.tag = 3;
  c4.payload = {element: null};
  var d4 = b4.value;
  c4.callback = function() {
    Qi || (Qi = true, Ri = d4);
    Ni(a4, b4);
  };
  return c4;
}
function Si(a4, b4, c4) {
  c4 = zg(-1, c4);
  c4.tag = 3;
  var d4 = a4.type.getDerivedStateFromError;
  if (typeof d4 === "function") {
    var e4 = b4.value;
    c4.payload = function() {
      Ni(a4, b4);
      return d4(e4);
    };
  }
  var f4 = a4.stateNode;
  f4 !== null && typeof f4.componentDidCatch === "function" && (c4.callback = function() {
    typeof d4 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a4, b4));
    var c5 = b4.stack;
    this.componentDidCatch(b4.value, {componentStack: c5 !== null ? c5 : ""});
  });
  return c4;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a4) {
  var b4 = a4.ref;
  if (b4 !== null)
    if (typeof b4 === "function")
      try {
        b4(null);
      } catch (c4) {
        Wi(a4, c4);
      }
    else
      b4.current = null;
}
function Xi(a4, b4) {
  switch (b4.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b4.flags & 256 && a4 !== null) {
        var c4 = a4.memoizedProps, d4 = a4.memoizedState;
        a4 = b4.stateNode;
        b4 = a4.getSnapshotBeforeUpdate(b4.elementType === b4.type ? c4 : lg(b4.type, c4), d4);
        a4.__reactInternalSnapshotBeforeUpdate = b4;
      }
      return;
    case 3:
      b4.flags & 256 && qf(b4.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a4, b4, c4) {
  switch (c4.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b4 = c4.updateQueue;
      b4 = b4 !== null ? b4.lastEffect : null;
      if (b4 !== null) {
        a4 = b4 = b4.next;
        do {
          if ((a4.tag & 3) === 3) {
            var d4 = a4.create;
            a4.destroy = d4();
          }
          a4 = a4.next;
        } while (a4 !== b4);
      }
      b4 = c4.updateQueue;
      b4 = b4 !== null ? b4.lastEffect : null;
      if (b4 !== null) {
        a4 = b4 = b4.next;
        do {
          var e4 = a4;
          d4 = e4.next;
          e4 = e4.tag;
          (e4 & 4) !== 0 && (e4 & 1) !== 0 && (Zi(c4, a4), $i(c4, a4));
          a4 = d4;
        } while (a4 !== b4);
      }
      return;
    case 1:
      a4 = c4.stateNode;
      c4.flags & 4 && (b4 === null ? a4.componentDidMount() : (d4 = c4.elementType === c4.type ? b4.memoizedProps : lg(c4.type, b4.memoizedProps), a4.componentDidUpdate(d4, b4.memoizedState, a4.__reactInternalSnapshotBeforeUpdate)));
      b4 = c4.updateQueue;
      b4 !== null && Eg(c4, b4, a4);
      return;
    case 3:
      b4 = c4.updateQueue;
      if (b4 !== null) {
        a4 = null;
        if (c4.child !== null)
          switch (c4.child.tag) {
            case 5:
              a4 = c4.child.stateNode;
              break;
            case 1:
              a4 = c4.child.stateNode;
          }
        Eg(c4, b4, a4);
      }
      return;
    case 5:
      a4 = c4.stateNode;
      b4 === null && c4.flags & 4 && mf(c4.type, c4.memoizedProps) && a4.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c4.memoizedState === null && (c4 = c4.alternate, c4 !== null && (c4 = c4.memoizedState, c4 !== null && (c4 = c4.dehydrated, c4 !== null && Cc(c4))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a4, b4) {
  for (var c4 = a4; ; ) {
    if (c4.tag === 5) {
      var d4 = c4.stateNode;
      if (b4)
        d4 = d4.style, typeof d4.setProperty === "function" ? d4.setProperty("display", "none", "important") : d4.display = "none";
      else {
        d4 = c4.stateNode;
        var e4 = c4.memoizedProps.style;
        e4 = e4 !== void 0 && e4 !== null && e4.hasOwnProperty("display") ? e4.display : null;
        d4.style.display = sb("display", e4);
      }
    } else if (c4.tag === 6)
      c4.stateNode.nodeValue = b4 ? "" : c4.memoizedProps;
    else if ((c4.tag !== 23 && c4.tag !== 24 || c4.memoizedState === null || c4 === a4) && c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === a4)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === a4)
        return;
      c4 = c4.return;
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
}
function bj(a4, b4) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b4);
    } catch (f4) {
    }
  switch (b4.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a4 = b4.updateQueue;
      if (a4 !== null && (a4 = a4.lastEffect, a4 !== null)) {
        var c4 = a4 = a4.next;
        do {
          var d4 = c4, e4 = d4.destroy;
          d4 = d4.tag;
          if (e4 !== void 0)
            if ((d4 & 4) !== 0)
              Zi(b4, c4);
            else {
              d4 = b4;
              try {
                e4();
              } catch (f4) {
                Wi(d4, f4);
              }
            }
          c4 = c4.next;
        } while (c4 !== a4);
      }
      break;
    case 1:
      Vi(b4);
      a4 = b4.stateNode;
      if (typeof a4.componentWillUnmount === "function")
        try {
          a4.props = b4.memoizedProps, a4.state = b4.memoizedState, a4.componentWillUnmount();
        } catch (f4) {
          Wi(b4, f4);
        }
      break;
    case 5:
      Vi(b4);
      break;
    case 4:
      cj(a4, b4);
  }
}
function dj(a4) {
  a4.alternate = null;
  a4.child = null;
  a4.dependencies = null;
  a4.firstEffect = null;
  a4.lastEffect = null;
  a4.memoizedProps = null;
  a4.memoizedState = null;
  a4.pendingProps = null;
  a4.return = null;
  a4.updateQueue = null;
}
function ej(a4) {
  return a4.tag === 5 || a4.tag === 3 || a4.tag === 4;
}
function fj(a4) {
  a: {
    for (var b4 = a4.return; b4 !== null; ) {
      if (ej(b4))
        break a;
      b4 = b4.return;
    }
    throw Error(y(160));
  }
  var c4 = b4;
  b4 = c4.stateNode;
  switch (c4.tag) {
    case 5:
      var d4 = false;
      break;
    case 3:
      b4 = b4.containerInfo;
      d4 = true;
      break;
    case 4:
      b4 = b4.containerInfo;
      d4 = true;
      break;
    default:
      throw Error(y(161));
  }
  c4.flags & 16 && (pb(b4, ""), c4.flags &= -17);
  a:
    b:
      for (c4 = a4; ; ) {
        for (; c4.sibling === null; ) {
          if (c4.return === null || ej(c4.return)) {
            c4 = null;
            break a;
          }
          c4 = c4.return;
        }
        c4.sibling.return = c4.return;
        for (c4 = c4.sibling; c4.tag !== 5 && c4.tag !== 6 && c4.tag !== 18; ) {
          if (c4.flags & 2)
            continue b;
          if (c4.child === null || c4.tag === 4)
            continue b;
          else
            c4.child.return = c4, c4 = c4.child;
        }
        if (!(c4.flags & 2)) {
          c4 = c4.stateNode;
          break a;
        }
      }
  d4 ? gj(a4, c4, b4) : hj(a4, c4, b4);
}
function gj(a4, b4, c4) {
  var d4 = a4.tag, e4 = d4 === 5 || d4 === 6;
  if (e4)
    a4 = e4 ? a4.stateNode : a4.stateNode.instance, b4 ? c4.nodeType === 8 ? c4.parentNode.insertBefore(a4, b4) : c4.insertBefore(a4, b4) : (c4.nodeType === 8 ? (b4 = c4.parentNode, b4.insertBefore(a4, c4)) : (b4 = c4, b4.appendChild(a4)), c4 = c4._reactRootContainer, c4 !== null && c4 !== void 0 || b4.onclick !== null || (b4.onclick = jf));
  else if (d4 !== 4 && (a4 = a4.child, a4 !== null))
    for (gj(a4, b4, c4), a4 = a4.sibling; a4 !== null; )
      gj(a4, b4, c4), a4 = a4.sibling;
}
function hj(a4, b4, c4) {
  var d4 = a4.tag, e4 = d4 === 5 || d4 === 6;
  if (e4)
    a4 = e4 ? a4.stateNode : a4.stateNode.instance, b4 ? c4.insertBefore(a4, b4) : c4.appendChild(a4);
  else if (d4 !== 4 && (a4 = a4.child, a4 !== null))
    for (hj(a4, b4, c4), a4 = a4.sibling; a4 !== null; )
      hj(a4, b4, c4), a4 = a4.sibling;
}
function cj(a4, b4) {
  for (var c4 = b4, d4 = false, e4, f4; ; ) {
    if (!d4) {
      d4 = c4.return;
      a:
        for (; ; ) {
          if (d4 === null)
            throw Error(y(160));
          e4 = d4.stateNode;
          switch (d4.tag) {
            case 5:
              f4 = false;
              break a;
            case 3:
              e4 = e4.containerInfo;
              f4 = true;
              break a;
            case 4:
              e4 = e4.containerInfo;
              f4 = true;
              break a;
          }
          d4 = d4.return;
        }
      d4 = true;
    }
    if (c4.tag === 5 || c4.tag === 6) {
      a:
        for (var g4 = a4, h4 = c4, k3 = h4; ; )
          if (bj(g4, k3), k3.child !== null && k3.tag !== 4)
            k3.child.return = k3, k3 = k3.child;
          else {
            if (k3 === h4)
              break a;
            for (; k3.sibling === null; ) {
              if (k3.return === null || k3.return === h4)
                break a;
              k3 = k3.return;
            }
            k3.sibling.return = k3.return;
            k3 = k3.sibling;
          }
      f4 ? (g4 = e4, h4 = c4.stateNode, g4.nodeType === 8 ? g4.parentNode.removeChild(h4) : g4.removeChild(h4)) : e4.removeChild(c4.stateNode);
    } else if (c4.tag === 4) {
      if (c4.child !== null) {
        e4 = c4.stateNode.containerInfo;
        f4 = true;
        c4.child.return = c4;
        c4 = c4.child;
        continue;
      }
    } else if (bj(a4, c4), c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === b4)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === b4)
        return;
      c4 = c4.return;
      c4.tag === 4 && (d4 = false);
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
}
function ij(a4, b4) {
  switch (b4.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c4 = b4.updateQueue;
      c4 = c4 !== null ? c4.lastEffect : null;
      if (c4 !== null) {
        var d4 = c4 = c4.next;
        do
          (d4.tag & 3) === 3 && (a4 = d4.destroy, d4.destroy = void 0, a4 !== void 0 && a4()), d4 = d4.next;
        while (d4 !== c4);
      }
      return;
    case 1:
      return;
    case 5:
      c4 = b4.stateNode;
      if (c4 != null) {
        d4 = b4.memoizedProps;
        var e4 = a4 !== null ? a4.memoizedProps : d4;
        a4 = b4.type;
        var f4 = b4.updateQueue;
        b4.updateQueue = null;
        if (f4 !== null) {
          c4[xf] = d4;
          a4 === "input" && d4.type === "radio" && d4.name != null && $a(c4, d4);
          wb(a4, e4);
          b4 = wb(a4, d4);
          for (e4 = 0; e4 < f4.length; e4 += 2) {
            var g4 = f4[e4], h4 = f4[e4 + 1];
            g4 === "style" ? tb(c4, h4) : g4 === "dangerouslySetInnerHTML" ? ob(c4, h4) : g4 === "children" ? pb(c4, h4) : qa(c4, g4, h4, b4);
          }
          switch (a4) {
            case "input":
              ab(c4, d4);
              break;
            case "textarea":
              ib(c4, d4);
              break;
            case "select":
              a4 = c4._wrapperState.wasMultiple, c4._wrapperState.wasMultiple = !!d4.multiple, f4 = d4.value, f4 != null ? fb(c4, !!d4.multiple, f4, false) : a4 !== !!d4.multiple && (d4.defaultValue != null ? fb(c4, !!d4.multiple, d4.defaultValue, true) : fb(c4, !!d4.multiple, d4.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b4.stateNode === null)
        throw Error(y(162));
      b4.stateNode.nodeValue = b4.memoizedProps;
      return;
    case 3:
      c4 = b4.stateNode;
      c4.hydrate && (c4.hydrate = false, Cc(c4.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b4.memoizedState !== null && (jj = O(), aj(b4.child, true));
      kj(b4);
      return;
    case 19:
      kj(b4);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b4, b4.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a4) {
  var b4 = a4.updateQueue;
  if (b4 !== null) {
    a4.updateQueue = null;
    var c4 = a4.stateNode;
    c4 === null && (c4 = a4.stateNode = new Ui());
    b4.forEach(function(b5) {
      var d4 = lj.bind(null, a4, b5);
      c4.has(b5) || (c4.add(b5), b5.then(d4, d4));
    });
  }
}
function mj(a4, b4) {
  return a4 !== null && (a4 = a4.memoizedState, a4 === null || a4.dehydrated !== null) ? (b4 = b4.memoizedState, b4 !== null && b4.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a4) {
  a4 = a4.mode;
  if ((a4 & 2) === 0)
    return 1;
  if ((a4 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a4 = Gj;
    var b4 = 4186112 & ~Hj;
    b4 &= -b4;
    b4 === 0 && (a4 = 4186112 & ~a4, b4 = a4 & -a4, b4 === 0 && (b4 = 8192));
    return b4;
  }
  a4 = eg();
  (X & 4) !== 0 && a4 === 98 ? a4 = Xc(12, Gj) : (a4 = Sc(a4), a4 = Xc(a4, Gj));
  return a4;
}
function Jg(a4, b4, c4) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a4 = Kj(a4, b4);
  if (a4 === null)
    return null;
  $c(a4, b4, c4);
  a4 === U && (Hi |= b4, V === 4 && Ii(a4, W));
  var d4 = eg();
  b4 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a4) : (Mj(a4, c4), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d4 !== 98 && d4 !== 99 || (Cj === null ? Cj = new Set([a4]) : Cj.add(a4)), Mj(a4, c4));
  vj = a4;
}
function Kj(a4, b4) {
  a4.lanes |= b4;
  var c4 = a4.alternate;
  c4 !== null && (c4.lanes |= b4);
  c4 = a4;
  for (a4 = a4.return; a4 !== null; )
    a4.childLanes |= b4, c4 = a4.alternate, c4 !== null && (c4.childLanes |= b4), c4 = a4, a4 = a4.return;
  return c4.tag === 3 ? c4.stateNode : null;
}
function Mj(a4, b4) {
  for (var c4 = a4.callbackNode, d4 = a4.suspendedLanes, e4 = a4.pingedLanes, f4 = a4.expirationTimes, g4 = a4.pendingLanes; 0 < g4; ) {
    var h4 = 31 - Vc(g4), k3 = 1 << h4, l4 = f4[h4];
    if (l4 === -1) {
      if ((k3 & d4) === 0 || (k3 & e4) !== 0) {
        l4 = b4;
        Rc(k3);
        var n4 = F;
        f4[h4] = 10 <= n4 ? l4 + 250 : 6 <= n4 ? l4 + 5e3 : -1;
      }
    } else
      l4 <= b4 && (a4.expiredLanes |= k3);
    g4 &= ~k3;
  }
  d4 = Uc(a4, a4 === U ? W : 0);
  b4 = F;
  if (d4 === 0)
    c4 !== null && (c4 !== Zf && Pf(c4), a4.callbackNode = null, a4.callbackPriority = 0);
  else {
    if (c4 !== null) {
      if (a4.callbackPriority === b4)
        return;
      c4 !== Zf && Pf(c4);
    }
    b4 === 15 ? (c4 = Lj.bind(null, a4), ag === null ? (ag = [c4], bg = Of(Uf, jg)) : ag.push(c4), c4 = Zf) : b4 === 14 ? c4 = hg(99, Lj.bind(null, a4)) : (c4 = Tc(b4), c4 = hg(c4, Nj.bind(null, a4)));
    a4.callbackPriority = b4;
    a4.callbackNode = c4;
  }
}
function Nj(a4) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b4 = a4.callbackNode;
  if (Oj() && a4.callbackNode !== b4)
    return null;
  var c4 = Uc(a4, a4 === U ? W : 0);
  if (c4 === 0)
    return null;
  var d4 = c4;
  var e4 = X;
  X |= 16;
  var f4 = Pj();
  if (U !== a4 || W !== d4)
    wj(), Qj(a4, d4);
  do
    try {
      Rj();
      break;
    } catch (h4) {
      Sj(a4, h4);
    }
  while (1);
  qg();
  oj.current = f4;
  X = e4;
  Y !== null ? d4 = 0 : (U = null, W = 0, d4 = V);
  if ((tj & Hi) !== 0)
    Qj(a4, 0);
  else if (d4 !== 0) {
    d4 === 2 && (X |= 64, a4.hydrate && (a4.hydrate = false, qf(a4.containerInfo)), c4 = Wc(a4), c4 !== 0 && (d4 = Tj(a4, c4)));
    if (d4 === 1)
      throw b4 = sj, Qj(a4, 0), Ii(a4, c4), Mj(a4, O()), b4;
    a4.finishedWork = a4.current.alternate;
    a4.finishedLanes = c4;
    switch (d4) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a4);
        break;
      case 3:
        Ii(a4, c4);
        if ((c4 & 62914560) === c4 && (d4 = jj + 500 - O(), 10 < d4)) {
          if (Uc(a4, 0) !== 0)
            break;
          e4 = a4.suspendedLanes;
          if ((e4 & c4) !== c4) {
            Hg();
            a4.pingedLanes |= a4.suspendedLanes & e4;
            break;
          }
          a4.timeoutHandle = of(Uj.bind(null, a4), d4);
          break;
        }
        Uj(a4);
        break;
      case 4:
        Ii(a4, c4);
        if ((c4 & 4186112) === c4)
          break;
        d4 = a4.eventTimes;
        for (e4 = -1; 0 < c4; ) {
          var g4 = 31 - Vc(c4);
          f4 = 1 << g4;
          g4 = d4[g4];
          g4 > e4 && (e4 = g4);
          c4 &= ~f4;
        }
        c4 = e4;
        c4 = O() - c4;
        c4 = (120 > c4 ? 120 : 480 > c4 ? 480 : 1080 > c4 ? 1080 : 1920 > c4 ? 1920 : 3e3 > c4 ? 3e3 : 4320 > c4 ? 4320 : 1960 * nj(c4 / 1960)) - c4;
        if (10 < c4) {
          a4.timeoutHandle = of(Uj.bind(null, a4), c4);
          break;
        }
        Uj(a4);
        break;
      case 5:
        Uj(a4);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a4, O());
  return a4.callbackNode === b4 ? Nj.bind(null, a4) : null;
}
function Ii(a4, b4) {
  b4 &= ~uj;
  b4 &= ~Hi;
  a4.suspendedLanes |= b4;
  a4.pingedLanes &= ~b4;
  for (a4 = a4.expirationTimes; 0 < b4; ) {
    var c4 = 31 - Vc(b4), d4 = 1 << c4;
    a4[c4] = -1;
    b4 &= ~d4;
  }
}
function Lj(a4) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a4 === U && (a4.expiredLanes & W) !== 0) {
    var b4 = W;
    var c4 = Tj(a4, b4);
    (tj & Hi) !== 0 && (b4 = Uc(a4, b4), c4 = Tj(a4, b4));
  } else
    b4 = Uc(a4, 0), c4 = Tj(a4, b4);
  a4.tag !== 0 && c4 === 2 && (X |= 64, a4.hydrate && (a4.hydrate = false, qf(a4.containerInfo)), b4 = Wc(a4), b4 !== 0 && (c4 = Tj(a4, b4)));
  if (c4 === 1)
    throw c4 = sj, Qj(a4, 0), Ii(a4, b4), Mj(a4, O()), c4;
  a4.finishedWork = a4.current.alternate;
  a4.finishedLanes = b4;
  Uj(a4);
  Mj(a4, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a4 = Cj;
    Cj = null;
    a4.forEach(function(a5) {
      a5.expiredLanes |= 24 & a5.pendingLanes;
      Mj(a5, O());
    });
  }
  ig();
}
function Wj(a4, b4) {
  var c4 = X;
  X |= 1;
  try {
    return a4(b4);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
}
function Xj(a4, b4) {
  var c4 = X;
  X &= -2;
  X |= 8;
  try {
    return a4(b4);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
}
function ni(a4, b4) {
  I(rj, qj);
  qj |= b4;
  tj |= b4;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a4, b4) {
  a4.finishedWork = null;
  a4.finishedLanes = 0;
  var c4 = a4.timeoutHandle;
  c4 !== -1 && (a4.timeoutHandle = -1, pf(c4));
  if (Y !== null)
    for (c4 = Y.return; c4 !== null; ) {
      var d4 = c4;
      switch (d4.tag) {
        case 1:
          d4 = d4.type.childContextTypes;
          d4 !== null && d4 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d4);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d4);
          break;
        case 23:
        case 24:
          Ki();
      }
      c4 = c4.return;
    }
  U = a4;
  Y = Tg(a4.current, null);
  W = qj = tj = b4;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a4, b4) {
  do {
    var c4 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d4 = R.memoizedState; d4 !== null; ) {
          var e4 = d4.queue;
          e4 !== null && (e4.pending = null);
          d4 = d4.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c4 === null || c4.return === null) {
        V = 1;
        sj = b4;
        Y = null;
        break;
      }
      a: {
        var f4 = a4, g4 = c4.return, h4 = c4, k3 = b4;
        b4 = W;
        h4.flags |= 2048;
        h4.firstEffect = h4.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l4 = k3;
          if ((h4.mode & 2) === 0) {
            var n4 = h4.alternate;
            n4 ? (h4.updateQueue = n4.updateQueue, h4.memoizedState = n4.memoizedState, h4.lanes = n4.lanes) : (h4.updateQueue = null, h4.memoizedState = null);
          }
          var A4 = (P.current & 1) !== 0, p4 = g4;
          do {
            var C3;
            if (C3 = p4.tag === 13) {
              var x3 = p4.memoizedState;
              if (x3 !== null)
                C3 = x3.dehydrated !== null ? true : false;
              else {
                var w3 = p4.memoizedProps;
                C3 = w3.fallback === void 0 ? false : w3.unstable_avoidThisFallback !== true ? true : A4 ? false : true;
              }
            }
            if (C3) {
              var z3 = p4.updateQueue;
              if (z3 === null) {
                var u3 = new Set();
                u3.add(l4);
                p4.updateQueue = u3;
              } else
                z3.add(l4);
              if ((p4.mode & 2) === 0) {
                p4.flags |= 64;
                h4.flags |= 16384;
                h4.flags &= -2981;
                if (h4.tag === 1)
                  if (h4.alternate === null)
                    h4.tag = 17;
                  else {
                    var t4 = zg(-1, 1);
                    t4.tag = 2;
                    Ag(h4, t4);
                  }
                h4.lanes |= 1;
                break a;
              }
              k3 = void 0;
              h4 = b4;
              var q3 = f4.pingCache;
              q3 === null ? (q3 = f4.pingCache = new Oi(), k3 = new Set(), q3.set(l4, k3)) : (k3 = q3.get(l4), k3 === void 0 && (k3 = new Set(), q3.set(l4, k3)));
              if (!k3.has(h4)) {
                k3.add(h4);
                var v3 = Yj.bind(null, f4, l4, h4);
                l4.then(v3, v3);
              }
              p4.flags |= 4096;
              p4.lanes = b4;
              break a;
            }
            p4 = p4.return;
          } while (p4 !== null);
          k3 = Error((Ra(h4.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k3 = Mi(k3, h4);
        p4 = g4;
        do {
          switch (p4.tag) {
            case 3:
              f4 = k3;
              p4.flags |= 4096;
              b4 &= -b4;
              p4.lanes |= b4;
              var J3 = Pi(p4, f4, b4);
              Bg(p4, J3);
              break a;
            case 1:
              f4 = k3;
              var K3 = p4.type, Q3 = p4.stateNode;
              if ((p4.flags & 64) === 0 && (typeof K3.getDerivedStateFromError === "function" || Q3 !== null && typeof Q3.componentDidCatch === "function" && (Ti === null || !Ti.has(Q3)))) {
                p4.flags |= 4096;
                b4 &= -b4;
                p4.lanes |= b4;
                var L3 = Si(p4, f4, b4);
                Bg(p4, L3);
                break a;
              }
          }
          p4 = p4.return;
        } while (p4 !== null);
      }
      Zj(c4);
    } catch (va) {
      b4 = va;
      Y === c4 && c4 !== null && (Y = c4 = c4.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a4 = oj.current;
  oj.current = Gh;
  return a4 === null ? Gh : a4;
}
function Tj(a4, b4) {
  var c4 = X;
  X |= 16;
  var d4 = Pj();
  U === a4 && W === b4 || Qj(a4, b4);
  do
    try {
      ak();
      break;
    } catch (e4) {
      Sj(a4, e4);
    }
  while (1);
  qg();
  X = c4;
  oj.current = d4;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a4) {
  var b4 = ck(a4.alternate, a4, qj);
  a4.memoizedProps = a4.pendingProps;
  b4 === null ? Zj(a4) : Y = b4;
  pj.current = null;
}
function Zj(a4) {
  var b4 = a4;
  do {
    var c4 = b4.alternate;
    a4 = b4.return;
    if ((b4.flags & 2048) === 0) {
      c4 = Gi(c4, b4, qj);
      if (c4 !== null) {
        Y = c4;
        return;
      }
      c4 = b4;
      if (c4.tag !== 24 && c4.tag !== 23 || c4.memoizedState === null || (qj & 1073741824) !== 0 || (c4.mode & 4) === 0) {
        for (var d4 = 0, e4 = c4.child; e4 !== null; )
          d4 |= e4.lanes | e4.childLanes, e4 = e4.sibling;
        c4.childLanes = d4;
      }
      a4 !== null && (a4.flags & 2048) === 0 && (a4.firstEffect === null && (a4.firstEffect = b4.firstEffect), b4.lastEffect !== null && (a4.lastEffect !== null && (a4.lastEffect.nextEffect = b4.firstEffect), a4.lastEffect = b4.lastEffect), 1 < b4.flags && (a4.lastEffect !== null ? a4.lastEffect.nextEffect = b4 : a4.firstEffect = b4, a4.lastEffect = b4));
    } else {
      c4 = Li(b4);
      if (c4 !== null) {
        c4.flags &= 2047;
        Y = c4;
        return;
      }
      a4 !== null && (a4.firstEffect = a4.lastEffect = null, a4.flags |= 2048);
    }
    b4 = b4.sibling;
    if (b4 !== null) {
      Y = b4;
      return;
    }
    Y = b4 = a4;
  } while (b4 !== null);
  V === 0 && (V = 5);
}
function Uj(a4) {
  var b4 = eg();
  gg(99, dk.bind(null, a4, b4));
  return null;
}
function dk(a4, b4) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c4 = a4.finishedWork;
  if (c4 === null)
    return null;
  a4.finishedWork = null;
  a4.finishedLanes = 0;
  if (c4 === a4.current)
    throw Error(y(177));
  a4.callbackNode = null;
  var d4 = c4.lanes | c4.childLanes, e4 = d4, f4 = a4.pendingLanes & ~e4;
  a4.pendingLanes = e4;
  a4.suspendedLanes = 0;
  a4.pingedLanes = 0;
  a4.expiredLanes &= e4;
  a4.mutableReadLanes &= e4;
  a4.entangledLanes &= e4;
  e4 = a4.entanglements;
  for (var g4 = a4.eventTimes, h4 = a4.expirationTimes; 0 < f4; ) {
    var k3 = 31 - Vc(f4), l4 = 1 << k3;
    e4[k3] = 0;
    g4[k3] = -1;
    h4[k3] = -1;
    f4 &= ~l4;
  }
  Cj !== null && (d4 & 24) === 0 && Cj.has(a4) && Cj.delete(a4);
  a4 === U && (Y = U = null, W = 0);
  1 < c4.flags ? c4.lastEffect !== null ? (c4.lastEffect.nextEffect = c4, d4 = c4.firstEffect) : d4 = c4 : d4 = c4.firstEffect;
  if (d4 !== null) {
    e4 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g4 = Ne();
    if (Oe(g4)) {
      if ("selectionStart" in g4)
        h4 = {start: g4.selectionStart, end: g4.selectionEnd};
      else
        a:
          if (h4 = (h4 = g4.ownerDocument) && h4.defaultView || window, (l4 = h4.getSelection && h4.getSelection()) && l4.rangeCount !== 0) {
            h4 = l4.anchorNode;
            f4 = l4.anchorOffset;
            k3 = l4.focusNode;
            l4 = l4.focusOffset;
            try {
              h4.nodeType, k3.nodeType;
            } catch (va) {
              h4 = null;
              break a;
            }
            var n4 = 0, A4 = -1, p4 = -1, C3 = 0, x3 = 0, w3 = g4, z3 = null;
            b:
              for (; ; ) {
                for (var u3; ; ) {
                  w3 !== h4 || f4 !== 0 && w3.nodeType !== 3 || (A4 = n4 + f4);
                  w3 !== k3 || l4 !== 0 && w3.nodeType !== 3 || (p4 = n4 + l4);
                  w3.nodeType === 3 && (n4 += w3.nodeValue.length);
                  if ((u3 = w3.firstChild) === null)
                    break;
                  z3 = w3;
                  w3 = u3;
                }
                for (; ; ) {
                  if (w3 === g4)
                    break b;
                  z3 === h4 && ++C3 === f4 && (A4 = n4);
                  z3 === k3 && ++x3 === l4 && (p4 = n4);
                  if ((u3 = w3.nextSibling) !== null)
                    break;
                  w3 = z3;
                  z3 = w3.parentNode;
                }
                w3 = u3;
              }
            h4 = A4 === -1 || p4 === -1 ? null : {start: A4, end: p4};
          } else
            h4 = null;
      h4 = h4 || {start: 0, end: 0};
    } else
      h4 = null;
    lf = {focusedElem: g4, selectionRange: h4};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d4;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d4;
    do
      try {
        for (g4 = a4; Z !== null; ) {
          var t4 = Z.flags;
          t4 & 16 && pb(Z.stateNode, "");
          if (t4 & 128) {
            var q3 = Z.alternate;
            if (q3 !== null) {
              var v3 = q3.ref;
              v3 !== null && (typeof v3 === "function" ? v3(null) : v3.current = null);
            }
          }
          switch (t4 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h4 = Z;
              cj(g4, h4);
              var J3 = h4.alternate;
              dj(h4);
              J3 !== null && dj(J3);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v3 = lf;
    q3 = Ne();
    t4 = v3.focusedElem;
    g4 = v3.selectionRange;
    if (q3 !== t4 && t4 && t4.ownerDocument && Me(t4.ownerDocument.documentElement, t4)) {
      g4 !== null && Oe(t4) && (q3 = g4.start, v3 = g4.end, v3 === void 0 && (v3 = q3), "selectionStart" in t4 ? (t4.selectionStart = q3, t4.selectionEnd = Math.min(v3, t4.value.length)) : (v3 = (q3 = t4.ownerDocument || document) && q3.defaultView || window, v3.getSelection && (v3 = v3.getSelection(), h4 = t4.textContent.length, J3 = Math.min(g4.start, h4), g4 = g4.end === void 0 ? J3 : Math.min(g4.end, h4), !v3.extend && J3 > g4 && (h4 = g4, g4 = J3, J3 = h4), h4 = Le(t4, J3), f4 = Le(t4, g4), h4 && f4 && (v3.rangeCount !== 1 || v3.anchorNode !== h4.node || v3.anchorOffset !== h4.offset || v3.focusNode !== f4.node || v3.focusOffset !== f4.offset) && (q3 = q3.createRange(), q3.setStart(h4.node, h4.offset), v3.removeAllRanges(), J3 > g4 ? (v3.addRange(q3), v3.extend(f4.node, f4.offset)) : (q3.setEnd(f4.node, f4.offset), v3.addRange(q3))))));
      q3 = [];
      for (v3 = t4; v3 = v3.parentNode; )
        v3.nodeType === 1 && q3.push({element: v3, left: v3.scrollLeft, top: v3.scrollTop});
      typeof t4.focus === "function" && t4.focus();
      for (t4 = 0; t4 < q3.length; t4++)
        v3 = q3[t4], v3.element.scrollLeft = v3.left, v3.element.scrollTop = v3.top;
    }
    fd = !!kf;
    lf = kf = null;
    a4.current = c4;
    Z = d4;
    do
      try {
        for (t4 = a4; Z !== null; ) {
          var K3 = Z.flags;
          K3 & 36 && Yi(t4, Z.alternate, Z);
          if (K3 & 128) {
            q3 = void 0;
            var Q3 = Z.ref;
            if (Q3 !== null) {
              var L3 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q3 = L3;
                  break;
                default:
                  q3 = L3;
              }
              typeof Q3 === "function" ? Q3(q3) : Q3.current = q3;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e4;
  } else
    a4.current = c4;
  if (xj)
    xj = false, yj = a4, zj = b4;
  else
    for (Z = d4; Z !== null; )
      b4 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K3 = Z, K3.sibling = null, K3.stateNode = null), Z = b4;
  d4 = a4.pendingLanes;
  d4 === 0 && (Ti = null);
  d4 === 1 ? a4 === Ej ? Dj++ : (Dj = 0, Ej = a4) : Dj = 0;
  c4 = c4.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c4, void 0, (c4.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a4, O());
  if (Qi)
    throw Qi = false, a4 = Ri, Ri = null, a4;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a4 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a4, Z) && dc(Z, Ij) && (Jj = true));
    var b4 = Z.flags;
    (b4 & 256) !== 0 && Xi(a4, Z);
    (b4 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a4 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a4, fk);
  }
  return false;
}
function $i(a4, b4) {
  Aj.push(b4, a4);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a4, b4) {
  Bj.push(b4, a4);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a4 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b4 = X;
  X |= 32;
  var c4 = Bj;
  Bj = [];
  for (var d4 = 0; d4 < c4.length; d4 += 2) {
    var e4 = c4[d4], f4 = c4[d4 + 1], g4 = e4.destroy;
    e4.destroy = void 0;
    if (typeof g4 === "function")
      try {
        g4();
      } catch (k3) {
        if (f4 === null)
          throw Error(y(330));
        Wi(f4, k3);
      }
  }
  c4 = Aj;
  Aj = [];
  for (d4 = 0; d4 < c4.length; d4 += 2) {
    e4 = c4[d4];
    f4 = c4[d4 + 1];
    try {
      var h4 = e4.create;
      e4.destroy = h4();
    } catch (k3) {
      if (f4 === null)
        throw Error(y(330));
      Wi(f4, k3);
    }
  }
  for (h4 = a4.current.firstEffect; h4 !== null; )
    a4 = h4.nextEffect, h4.nextEffect = null, h4.flags & 8 && (h4.sibling = null, h4.stateNode = null), h4 = a4;
  X = b4;
  ig();
  return true;
}
function gk(a4, b4, c4) {
  b4 = Mi(c4, b4);
  b4 = Pi(a4, b4, 1);
  Ag(a4, b4);
  b4 = Hg();
  a4 = Kj(a4, 1);
  a4 !== null && ($c(a4, 1, b4), Mj(a4, b4));
}
function Wi(a4, b4) {
  if (a4.tag === 3)
    gk(a4, a4, b4);
  else
    for (var c4 = a4.return; c4 !== null; ) {
      if (c4.tag === 3) {
        gk(c4, a4, b4);
        break;
      } else if (c4.tag === 1) {
        var d4 = c4.stateNode;
        if (typeof c4.type.getDerivedStateFromError === "function" || typeof d4.componentDidCatch === "function" && (Ti === null || !Ti.has(d4))) {
          a4 = Mi(b4, a4);
          var e4 = Si(c4, a4, 1);
          Ag(c4, e4);
          e4 = Hg();
          c4 = Kj(c4, 1);
          if (c4 !== null)
            $c(c4, 1, e4), Mj(c4, e4);
          else if (typeof d4.componentDidCatch === "function" && (Ti === null || !Ti.has(d4)))
            try {
              d4.componentDidCatch(b4, a4);
            } catch (f4) {
            }
          break;
        }
      }
      c4 = c4.return;
    }
}
function Yj(a4, b4, c4) {
  var d4 = a4.pingCache;
  d4 !== null && d4.delete(b4);
  b4 = Hg();
  a4.pingedLanes |= a4.suspendedLanes & c4;
  U === a4 && (W & c4) === c4 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a4, 0) : uj |= c4);
  Mj(a4, b4);
}
function lj(a4, b4) {
  var c4 = a4.stateNode;
  c4 !== null && c4.delete(b4);
  b4 = 0;
  b4 === 0 && (b4 = a4.mode, (b4 & 2) === 0 ? b4 = 1 : (b4 & 4) === 0 ? b4 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b4 = Yc(62914560 & ~Gj), b4 === 0 && (b4 = 4194304)));
  c4 = Hg();
  a4 = Kj(a4, b4);
  a4 !== null && ($c(a4, b4, c4), Mj(a4, c4));
}
var ck;
ck = function(a4, b4, c4) {
  var d4 = b4.lanes;
  if (a4 !== null)
    if (a4.memoizedProps !== b4.pendingProps || N.current)
      ug = true;
    else if ((c4 & d4) !== 0)
      ug = (a4.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b4.tag) {
        case 3:
          ri(b4);
          sh();
          break;
        case 5:
          gh(b4);
          break;
        case 1:
          Ff(b4.type) && Jf(b4);
          break;
        case 4:
          eh(b4, b4.stateNode.containerInfo);
          break;
        case 10:
          d4 = b4.memoizedProps.value;
          var e4 = b4.type._context;
          I(mg, e4._currentValue);
          e4._currentValue = d4;
          break;
        case 13:
          if (b4.memoizedState !== null) {
            if ((c4 & b4.child.childLanes) !== 0)
              return ti(a4, b4, c4);
            I(P, P.current & 1);
            b4 = hi(a4, b4, c4);
            return b4 !== null ? b4.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d4 = (c4 & b4.childLanes) !== 0;
          if ((a4.flags & 64) !== 0) {
            if (d4)
              return Ai(a4, b4, c4);
            b4.flags |= 64;
          }
          e4 = b4.memoizedState;
          e4 !== null && (e4.rendering = null, e4.tail = null, e4.lastEffect = null);
          I(P, P.current);
          if (d4)
            break;
          else
            return null;
        case 23:
        case 24:
          return b4.lanes = 0, mi(a4, b4, c4);
      }
      return hi(a4, b4, c4);
    }
  else
    ug = false;
  b4.lanes = 0;
  switch (b4.tag) {
    case 2:
      d4 = b4.type;
      a4 !== null && (a4.alternate = null, b4.alternate = null, b4.flags |= 2);
      a4 = b4.pendingProps;
      e4 = Ef(b4, M.current);
      tg(b4, c4);
      e4 = Ch(null, b4, d4, a4, e4, c4);
      b4.flags |= 1;
      if (typeof e4 === "object" && e4 !== null && typeof e4.render === "function" && e4.$$typeof === void 0) {
        b4.tag = 1;
        b4.memoizedState = null;
        b4.updateQueue = null;
        if (Ff(d4)) {
          var f4 = true;
          Jf(b4);
        } else
          f4 = false;
        b4.memoizedState = e4.state !== null && e4.state !== void 0 ? e4.state : null;
        xg(b4);
        var g4 = d4.getDerivedStateFromProps;
        typeof g4 === "function" && Gg(b4, d4, g4, a4);
        e4.updater = Kg;
        b4.stateNode = e4;
        e4._reactInternals = b4;
        Og(b4, d4, a4, c4);
        b4 = qi(null, b4, d4, true, f4, c4);
      } else
        b4.tag = 0, fi(null, b4, e4, c4), b4 = b4.child;
      return b4;
    case 16:
      e4 = b4.elementType;
      a: {
        a4 !== null && (a4.alternate = null, b4.alternate = null, b4.flags |= 2);
        a4 = b4.pendingProps;
        f4 = e4._init;
        e4 = f4(e4._payload);
        b4.type = e4;
        f4 = b4.tag = hk(e4);
        a4 = lg(e4, a4);
        switch (f4) {
          case 0:
            b4 = li(null, b4, e4, a4, c4);
            break a;
          case 1:
            b4 = pi(null, b4, e4, a4, c4);
            break a;
          case 11:
            b4 = gi(null, b4, e4, a4, c4);
            break a;
          case 14:
            b4 = ii(null, b4, e4, lg(e4.type, a4), d4, c4);
            break a;
        }
        throw Error(y(306, e4, ""));
      }
      return b4;
    case 0:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), li(a4, b4, d4, e4, c4);
    case 1:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), pi(a4, b4, d4, e4, c4);
    case 3:
      ri(b4);
      d4 = b4.updateQueue;
      if (a4 === null || d4 === null)
        throw Error(y(282));
      d4 = b4.pendingProps;
      e4 = b4.memoizedState;
      e4 = e4 !== null ? e4.element : null;
      yg(a4, b4);
      Cg(b4, d4, null, c4);
      d4 = b4.memoizedState.element;
      if (d4 === e4)
        sh(), b4 = hi(a4, b4, c4);
      else {
        e4 = b4.stateNode;
        if (f4 = e4.hydrate)
          kh = rf(b4.stateNode.containerInfo.firstChild), jh = b4, f4 = lh = true;
        if (f4) {
          a4 = e4.mutableSourceEagerHydrationData;
          if (a4 != null)
            for (e4 = 0; e4 < a4.length; e4 += 2)
              f4 = a4[e4], f4._workInProgressVersionPrimary = a4[e4 + 1], th.push(f4);
          c4 = Zg(b4, null, d4, c4);
          for (b4.child = c4; c4; )
            c4.flags = c4.flags & -3 | 1024, c4 = c4.sibling;
        } else
          fi(a4, b4, d4, c4), sh();
        b4 = b4.child;
      }
      return b4;
    case 5:
      return gh(b4), a4 === null && ph(b4), d4 = b4.type, e4 = b4.pendingProps, f4 = a4 !== null ? a4.memoizedProps : null, g4 = e4.children, nf(d4, e4) ? g4 = null : f4 !== null && nf(d4, f4) && (b4.flags |= 16), oi(a4, b4), fi(a4, b4, g4, c4), b4.child;
    case 6:
      return a4 === null && ph(b4), null;
    case 13:
      return ti(a4, b4, c4);
    case 4:
      return eh(b4, b4.stateNode.containerInfo), d4 = b4.pendingProps, a4 === null ? b4.child = Yg(b4, null, d4, c4) : fi(a4, b4, d4, c4), b4.child;
    case 11:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), gi(a4, b4, d4, e4, c4);
    case 7:
      return fi(a4, b4, b4.pendingProps, c4), b4.child;
    case 8:
      return fi(a4, b4, b4.pendingProps.children, c4), b4.child;
    case 12:
      return fi(a4, b4, b4.pendingProps.children, c4), b4.child;
    case 10:
      a: {
        d4 = b4.type._context;
        e4 = b4.pendingProps;
        g4 = b4.memoizedProps;
        f4 = e4.value;
        var h4 = b4.type._context;
        I(mg, h4._currentValue);
        h4._currentValue = f4;
        if (g4 !== null)
          if (h4 = g4.value, f4 = He(h4, f4) ? 0 : (typeof d4._calculateChangedBits === "function" ? d4._calculateChangedBits(h4, f4) : 1073741823) | 0, f4 === 0) {
            if (g4.children === e4.children && !N.current) {
              b4 = hi(a4, b4, c4);
              break a;
            }
          } else
            for (h4 = b4.child, h4 !== null && (h4.return = b4); h4 !== null; ) {
              var k3 = h4.dependencies;
              if (k3 !== null) {
                g4 = h4.child;
                for (var l4 = k3.firstContext; l4 !== null; ) {
                  if (l4.context === d4 && (l4.observedBits & f4) !== 0) {
                    h4.tag === 1 && (l4 = zg(-1, c4 & -c4), l4.tag = 2, Ag(h4, l4));
                    h4.lanes |= c4;
                    l4 = h4.alternate;
                    l4 !== null && (l4.lanes |= c4);
                    sg(h4.return, c4);
                    k3.lanes |= c4;
                    break;
                  }
                  l4 = l4.next;
                }
              } else
                g4 = h4.tag === 10 ? h4.type === b4.type ? null : h4.child : h4.child;
              if (g4 !== null)
                g4.return = h4;
              else
                for (g4 = h4; g4 !== null; ) {
                  if (g4 === b4) {
                    g4 = null;
                    break;
                  }
                  h4 = g4.sibling;
                  if (h4 !== null) {
                    h4.return = g4.return;
                    g4 = h4;
                    break;
                  }
                  g4 = g4.return;
                }
              h4 = g4;
            }
        fi(a4, b4, e4.children, c4);
        b4 = b4.child;
      }
      return b4;
    case 9:
      return e4 = b4.type, f4 = b4.pendingProps, d4 = f4.children, tg(b4, c4), e4 = vg(e4, f4.unstable_observedBits), d4 = d4(e4), b4.flags |= 1, fi(a4, b4, d4, c4), b4.child;
    case 14:
      return e4 = b4.type, f4 = lg(e4, b4.pendingProps), f4 = lg(e4.type, f4), ii(a4, b4, e4, f4, d4, c4);
    case 15:
      return ki(a4, b4, b4.type, b4.pendingProps, d4, c4);
    case 17:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), a4 !== null && (a4.alternate = null, b4.alternate = null, b4.flags |= 2), b4.tag = 1, Ff(d4) ? (a4 = true, Jf(b4)) : a4 = false, tg(b4, c4), Mg(b4, d4, e4), Og(b4, d4, e4, c4), qi(null, b4, d4, true, a4, c4);
    case 19:
      return Ai(a4, b4, c4);
    case 23:
      return mi(a4, b4, c4);
    case 24:
      return mi(a4, b4, c4);
  }
  throw Error(y(156, b4.tag));
};
function ik(a4, b4, c4, d4) {
  this.tag = a4;
  this.key = c4;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b4;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d4;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a4, b4, c4, d4) {
  return new ik(a4, b4, c4, d4);
}
function ji(a4) {
  a4 = a4.prototype;
  return !(!a4 || !a4.isReactComponent);
}
function hk(a4) {
  if (typeof a4 === "function")
    return ji(a4) ? 1 : 0;
  if (a4 !== void 0 && a4 !== null) {
    a4 = a4.$$typeof;
    if (a4 === Aa)
      return 11;
    if (a4 === Da)
      return 14;
  }
  return 2;
}
function Tg(a4, b4) {
  var c4 = a4.alternate;
  c4 === null ? (c4 = nh(a4.tag, b4, a4.key, a4.mode), c4.elementType = a4.elementType, c4.type = a4.type, c4.stateNode = a4.stateNode, c4.alternate = a4, a4.alternate = c4) : (c4.pendingProps = b4, c4.type = a4.type, c4.flags = 0, c4.nextEffect = null, c4.firstEffect = null, c4.lastEffect = null);
  c4.childLanes = a4.childLanes;
  c4.lanes = a4.lanes;
  c4.child = a4.child;
  c4.memoizedProps = a4.memoizedProps;
  c4.memoizedState = a4.memoizedState;
  c4.updateQueue = a4.updateQueue;
  b4 = a4.dependencies;
  c4.dependencies = b4 === null ? null : {lanes: b4.lanes, firstContext: b4.firstContext};
  c4.sibling = a4.sibling;
  c4.index = a4.index;
  c4.ref = a4.ref;
  return c4;
}
function Vg(a4, b4, c4, d4, e4, f4) {
  var g4 = 2;
  d4 = a4;
  if (typeof a4 === "function")
    ji(a4) && (g4 = 1);
  else if (typeof a4 === "string")
    g4 = 5;
  else
    a:
      switch (a4) {
        case ua:
          return Xg(c4.children, e4, f4, b4);
        case Ha:
          g4 = 8;
          e4 |= 16;
          break;
        case wa:
          g4 = 8;
          e4 |= 1;
          break;
        case xa:
          return a4 = nh(12, c4, b4, e4 | 8), a4.elementType = xa, a4.type = xa, a4.lanes = f4, a4;
        case Ba:
          return a4 = nh(13, c4, b4, e4), a4.type = Ba, a4.elementType = Ba, a4.lanes = f4, a4;
        case Ca:
          return a4 = nh(19, c4, b4, e4), a4.elementType = Ca, a4.lanes = f4, a4;
        case Ia:
          return vi(c4, e4, f4, b4);
        case Ja:
          return a4 = nh(24, c4, b4, e4), a4.elementType = Ja, a4.lanes = f4, a4;
        default:
          if (typeof a4 === "object" && a4 !== null)
            switch (a4.$$typeof) {
              case ya:
                g4 = 10;
                break a;
              case za:
                g4 = 9;
                break a;
              case Aa:
                g4 = 11;
                break a;
              case Da:
                g4 = 14;
                break a;
              case Ea:
                g4 = 16;
                d4 = null;
                break a;
              case Fa:
                g4 = 22;
                break a;
            }
          throw Error(y(130, a4 == null ? a4 : typeof a4, ""));
      }
  b4 = nh(g4, c4, b4, e4);
  b4.elementType = a4;
  b4.type = d4;
  b4.lanes = f4;
  return b4;
}
function Xg(a4, b4, c4, d4) {
  a4 = nh(7, a4, d4, b4);
  a4.lanes = c4;
  return a4;
}
function vi(a4, b4, c4, d4) {
  a4 = nh(23, a4, d4, b4);
  a4.elementType = Ia;
  a4.lanes = c4;
  return a4;
}
function Ug(a4, b4, c4) {
  a4 = nh(6, a4, null, b4);
  a4.lanes = c4;
  return a4;
}
function Wg(a4, b4, c4) {
  b4 = nh(4, a4.children !== null ? a4.children : [], a4.key, b4);
  b4.lanes = c4;
  b4.stateNode = {containerInfo: a4.containerInfo, pendingChildren: null, implementation: a4.implementation};
  return b4;
}
function jk(a4, b4, c4) {
  this.tag = b4;
  this.containerInfo = a4;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c4;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a4, b4, c4) {
  var d4 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d4 == null ? null : "" + d4, children: a4, containerInfo: b4, implementation: c4};
}
function lk(a4, b4, c4, d4) {
  var e4 = b4.current, f4 = Hg(), g4 = Ig(e4);
  a:
    if (c4) {
      c4 = c4._reactInternals;
      b: {
        if (Zb(c4) !== c4 || c4.tag !== 1)
          throw Error(y(170));
        var h4 = c4;
        do {
          switch (h4.tag) {
            case 3:
              h4 = h4.stateNode.context;
              break b;
            case 1:
              if (Ff(h4.type)) {
                h4 = h4.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h4 = h4.return;
        } while (h4 !== null);
        throw Error(y(171));
      }
      if (c4.tag === 1) {
        var k3 = c4.type;
        if (Ff(k3)) {
          c4 = If(c4, k3, h4);
          break a;
        }
      }
      c4 = h4;
    } else
      c4 = Cf;
  b4.context === null ? b4.context = c4 : b4.pendingContext = c4;
  b4 = zg(f4, g4);
  b4.payload = {element: a4};
  d4 = d4 === void 0 ? null : d4;
  d4 !== null && (b4.callback = d4);
  Ag(e4, b4);
  Jg(e4, g4, f4);
  return g4;
}
function mk(a4) {
  a4 = a4.current;
  if (!a4.child)
    return null;
  switch (a4.child.tag) {
    case 5:
      return a4.child.stateNode;
    default:
      return a4.child.stateNode;
  }
}
function nk(a4, b4) {
  a4 = a4.memoizedState;
  if (a4 !== null && a4.dehydrated !== null) {
    var c4 = a4.retryLane;
    a4.retryLane = c4 !== 0 && c4 < b4 ? c4 : b4;
  }
}
function ok(a4, b4) {
  nk(a4, b4);
  (a4 = a4.alternate) && nk(a4, b4);
}
function pk() {
  return null;
}
function qk(a4, b4, c4) {
  var d4 = c4 != null && c4.hydrationOptions != null && c4.hydrationOptions.mutableSources || null;
  c4 = new jk(a4, b4, c4 != null && c4.hydrate === true);
  b4 = nh(3, null, null, b4 === 2 ? 7 : b4 === 1 ? 3 : 0);
  c4.current = b4;
  b4.stateNode = c4;
  xg(b4);
  a4[ff] = c4.current;
  cf(a4.nodeType === 8 ? a4.parentNode : a4);
  if (d4)
    for (a4 = 0; a4 < d4.length; a4++) {
      b4 = d4[a4];
      var e4 = b4._getVersion;
      e4 = e4(b4._source);
      c4.mutableSourceEagerHydrationData == null ? c4.mutableSourceEagerHydrationData = [b4, e4] : c4.mutableSourceEagerHydrationData.push(b4, e4);
    }
  this._internalRoot = c4;
}
qk.prototype.render = function(a4) {
  lk(a4, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a4 = this._internalRoot, b4 = a4.containerInfo;
  lk(null, a4, null, function() {
    b4[ff] = null;
  });
};
function rk(a4) {
  return !(!a4 || a4.nodeType !== 1 && a4.nodeType !== 9 && a4.nodeType !== 11 && (a4.nodeType !== 8 || a4.nodeValue !== " react-mount-point-unstable "));
}
function sk(a4, b4) {
  b4 || (b4 = a4 ? a4.nodeType === 9 ? a4.documentElement : a4.firstChild : null, b4 = !(!b4 || b4.nodeType !== 1 || !b4.hasAttribute("data-reactroot")));
  if (!b4)
    for (var c4; c4 = a4.lastChild; )
      a4.removeChild(c4);
  return new qk(a4, 0, b4 ? {hydrate: true} : void 0);
}
function tk(a4, b4, c4, d4, e4) {
  var f4 = c4._reactRootContainer;
  if (f4) {
    var g4 = f4._internalRoot;
    if (typeof e4 === "function") {
      var h4 = e4;
      e4 = function() {
        var a5 = mk(g4);
        h4.call(a5);
      };
    }
    lk(b4, g4, a4, e4);
  } else {
    f4 = c4._reactRootContainer = sk(c4, d4);
    g4 = f4._internalRoot;
    if (typeof e4 === "function") {
      var k3 = e4;
      e4 = function() {
        var a5 = mk(g4);
        k3.call(a5);
      };
    }
    Xj(function() {
      lk(b4, g4, a4, e4);
    });
  }
  return mk(g4);
}
ec = function(a4) {
  if (a4.tag === 13) {
    var b4 = Hg();
    Jg(a4, 4, b4);
    ok(a4, 4);
  }
};
fc = function(a4) {
  if (a4.tag === 13) {
    var b4 = Hg();
    Jg(a4, 67108864, b4);
    ok(a4, 67108864);
  }
};
gc = function(a4) {
  if (a4.tag === 13) {
    var b4 = Hg(), c4 = Ig(a4);
    Jg(a4, c4, b4);
    ok(a4, c4);
  }
};
hc = function(a4, b4) {
  return b4();
};
yb = function(a4, b4, c4) {
  switch (b4) {
    case "input":
      ab(a4, c4);
      b4 = c4.name;
      if (c4.type === "radio" && b4 != null) {
        for (c4 = a4; c4.parentNode; )
          c4 = c4.parentNode;
        c4 = c4.querySelectorAll("input[name=" + JSON.stringify("" + b4) + '][type="radio"]');
        for (b4 = 0; b4 < c4.length; b4++) {
          var d4 = c4[b4];
          if (d4 !== a4 && d4.form === a4.form) {
            var e4 = Db(d4);
            if (!e4)
              throw Error(y(90));
            Wa(d4);
            ab(d4, e4);
          }
        }
      }
      break;
    case "textarea":
      ib(a4, c4);
      break;
    case "select":
      b4 = c4.value, b4 != null && fb(a4, !!c4.multiple, b4, false);
  }
};
Gb = Wj;
Hb = function(a4, b4, c4, d4, e4) {
  var f4 = X;
  X |= 4;
  try {
    return gg(98, a4.bind(null, b4, c4, d4, e4));
  } finally {
    X = f4, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a4, b4) {
  var c4 = X;
  X |= 2;
  try {
    return a4(b4);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
};
function uk(a4, b4) {
  var c4 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b4))
    throw Error(y(200));
  return kk(a4, b4, null, c4);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a4) {
  a4 = cc(a4);
  return a4 === null ? null : a4.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a4) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a4) {
  if (a4 == null)
    return null;
  if (a4.nodeType === 1)
    return a4;
  var b4 = a4._reactInternals;
  if (b4 === void 0) {
    if (typeof a4.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a4)));
  }
  a4 = cc(b4);
  a4 = a4 === null ? null : a4.stateNode;
  return a4;
};
var flushSync = function(a4, b4) {
  var c4 = X;
  if ((c4 & 48) !== 0)
    return a4(b4);
  X |= 1;
  try {
    if (a4)
      return gg(99, a4.bind(null, b4));
  } finally {
    X = c4, ig();
  }
};
var hydrate = function(a4, b4, c4) {
  if (!rk(b4))
    throw Error(y(200));
  return tk(null, a4, b4, true, c4);
};
var render = function(a4, b4, c4) {
  if (!rk(b4))
    throw Error(y(200));
  return tk(null, a4, b4, false, c4);
};
var unmountComponentAtNode = function(a4) {
  if (!rk(a4))
    throw Error(y(40));
  return a4._reactRootContainer ? (Xj(function() {
    tk(null, null, a4, false, function() {
      a4._reactRootContainer = null;
      a4[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a4, b4) {
  return uk(a4, b4, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a4, b4, c4, d4) {
  if (!rk(c4))
    throw Error(y(200));
  if (a4 == null || a4._reactInternals === void 0)
    throw Error(y(38));
  return tk(a4, b4, c4, false, d4);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});

// build/snowpack/pkg/spacetime.js
var e = (e22, t22, a22) => {
  const [n22, r22] = e22.split("/"), [o22, i22] = r22.split(":");
  return Date.UTC(a22, n22 - 1, o22, i22) - 36e5 * t22;
};
var t = (t22, a22, n22, r22, o22) => {
  const i22 = new Date(t22).getUTCFullYear(), s22 = e(a22, o22, i22), u22 = e(n22, r22, i22);
  return t22 >= s22 && t22 < u22;
};
var a = (e22) => {
  let a22 = e22.timezones[e22.tz];
  if (a22 === void 0)
    return console.warn("Warning: couldn't find timezone " + e22.tz), 0;
  if (a22.dst === void 0)
    return a22.offset;
  let n22 = a22.offset, r22 = a22.offset + 1;
  a22.hem === "n" && (r22 = n22 - 1);
  let o22 = a22.dst.split("->");
  return t(e22.epoch, o22[0], o22[1], n22, r22) === true ? n22 : r22;
};
var n = ["africa", "america", "asia", "atlantic", "australia", "brazil", "canada", "chile", "europe", "indian", "mexico", "pacific", "antarctica", "etc"];
var r;
var o = (r = Object.freeze({__proto__: null, default: {"9|s": "2/dili,2/jayapura", "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau", "9.5|s|04/04:03->10/03:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna", "9.5|s": "4/darwin,4/north", "8|s|03/08:01->10/04:00": "12/casey", "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west", "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator", "8.75|s": "4/eucla", "7|s": "12/davis,2/jakarta,9/christmas", "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/saigon,2/tomsk,2/vientiane,2/ho_chi_minh", "6|s": "12/vostok", "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu", "6.5|n": "2/rangoon,9/cocos,2/yangon", "5|s": "12/mawson,9/kerguelen", "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/baku,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad", "5.75|n": "2/katmandu,2/kathmandu", "5.5|n": "2/calcutta,2/colombo,2/kolkata", "4|s": "9/reunion", "4|n": "2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius", "4.5|n|03/22:00->09/21:24": "2/tehran", "4.5|n": "2/kabul", "3|s": "12/syowa,9/antananarivo", "3|n|03/28:03->10/31:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia", "3|n|03/28:02->10/31:03": "8/chisinau,8/tiraspol", "3|n|03/28:00->10/30:24": "2/beirut", "3|n|03/27:00->10/30:01": "2/gaza,2/hebron", "3|n|03/26:02->10/31:02": "2/jerusalem,2/tel_aviv", "3|n|03/26:00->10/29:01": "2/amman", "3|n|03/26:00->10/28:24": "2/damascus", "3|n": "0/addis_ababa,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,0/asmara,2/istanbul", "2|s|03/28:02->10/31:02": "12/troll", "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane", "2|n|03/28:02->10/31:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen", "2|n": "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad", "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek", "1|n|04/11:03->05/16:02": "0/casablanca,0/el_aaiun", "1|n|03/28:01->10/31:02": "3/canary,3/faeroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faroe,8/belfast", "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis", "14|n": "11/kiritimati", "13|s|04/04:04->09/26:03": "11/apia", "13|s|01/15:02->11/05:03": "11/tongatapu", "13|n": "11/enderbury,11/fakaofo", "12|s|04/04:03->09/26:02": "12/mcmurdo,11/auckland,12/south_pole", "12|s|01/17:03->11/14:02": "11/fiji", "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis", "12.75|s|04/04:03->09/26:02": "11/chatham", "11|s|04/04:03->10/03:02": "12/macquarie", "11|s": "11/bougainville", "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/ponape,11/pohnpei", "11.5|n|04/04:03->10/03:02": "11/norfolk", "10|s|04/04:03->10/03:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria", "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland", "10|n": "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/truk,11/chuuk,11/yap", "10.5|s|04/04:01->10/03:02": "4/lord_howe,4/lhi", "0|n|03/28:00->10/31:01": "1/scoresbysund,3/azores", "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/gmt-0,13/gmt+0,13/gmt0,13/greenwich,13/uct,13/universal,13/zulu", "-9|n|03/14:02->11/07:02": "1/adak,1/atka,us/aleutian", "-9|n": "11/gambier", "-9.5|n": "11/marquesas", "-8|n|03/14:02->11/07:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska", "-8|n": "11/pitcairn", "-7|n|03/14:02->11/07:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific", "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon", "-7|n": "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona", "-6|s|04/03:22->09/04:22": "11/easter,7/easterisland", "-6|n|04/04:02->10/31:02": "1/chihuahua,1/mazatlan,10/bajasur", "-6|n|03/14:02->11/07:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,us/mountain", "-6|n": "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan", "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre", "-5|n|04/04:02->10/31:02": "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general", "-5|n|03/14:02->11/07:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke", "-5|n|03/12:03->11/05:01": "1/north_dakota", "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan", "-4|s|05/13:23->08/13:01": "12/palmer", "-4|s|04/03:24->09/05:00": "1/santiago,7/continental", "-4|s|03/27:24->10/03:00": "1/asuncion", "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba", "-4|s": "1/la_paz,1/manaus,5/west", "-4|n|03/14:02->11/07:02": "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan", "-4|n|03/14:00->11/07:01": "1/havana", "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky", "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin", "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/comodrivadavia,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/rosario,5/east", "-3|n|03/14:02->11/07:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic", "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem", "-2|n|03/27:22->10/30:23": "1/godthab,1/nuuk", "-2|n|03/14:02->11/07:02": "1/miquelon", "-2|n": "1/noronha,3/south_georgia,5/denoronha", "-2.5|n|03/14:02->11/07:02": "1/st_johns,6/newfoundland", "-1|n": "3/cape_verde", "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa", "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii"}})) && r.default || r;
var i = {};
Object.keys(o).forEach((e22) => {
  let t22 = e22.split("|"), a22 = {offset: Number(t22[0]), hem: t22[1]};
  t22[2] && (a22.dst = t22[2]), o[e22].split(",").forEach((e32) => {
    e32 = e32.replace(/(^[0-9]+)\//, (e4, t32) => (t32 = Number(t32), n[t32] + "/")), i[e32] = a22;
  });
}), i.utc = {offset: 0, hem: "n"};
for (let e22 = -14; e22 <= 14; e22 += 0.5) {
  let t22 = e22;
  t22 > 0 && (t22 = "+" + t22);
  let a22 = "etc/gmt" + t22;
  i[a22] = {offset: -1 * e22, hem: "n"}, a22 = "utc/gmt" + t22, i[a22] = {offset: -1 * e22, hem: "n"};
}
var s = i;
var u = /(\-?[0-9]+)h(rs)?/i;
var l = /(\-?[0-9]+)/;
var h = /utc([\-+]?[0-9]+)/i;
var c = /gmt([\-+]?[0-9]+)/i;
var d = function(e22) {
  return (e22 = Number(e22)) >= -13 && e22 <= 13 ? "etc/gmt" + (e22 = ((e22 *= -1) > 0 ? "+" : "") + e22) : null;
};
var m = function(e22) {
  let t22 = e22.match(u);
  if (t22 !== null)
    return d(t22[1]);
  if (t22 = e22.match(h), t22 !== null)
    return d(t22[1]);
  if (t22 = e22.match(c), t22 !== null) {
    let e32 = -1 * Number(t22[1]);
    return d(e32);
  }
  return t22 = e22.match(l), t22 !== null ? d(t22[1]) : null;
};
var p = (() => {
  let e22 = (() => {
    if (typeof Intl == "undefined" || Intl.DateTimeFormat === void 0)
      return null;
    let e32 = Intl.DateTimeFormat();
    if (e32 === void 0 || e32.resolvedOptions === void 0)
      return null;
    let t22 = e32.resolvedOptions().timeZone;
    return t22 ? t22.toLowerCase() : null;
  })();
  return e22 === null ? "utc" : e22;
})();
var f = Object.keys(s).reduce((e22, t22) => {
  let a22 = t22.split("/")[1] || "";
  return a22 = a22.replace(/_/g, " "), e22[a22] = t22, e22;
}, {});
var y2;
var g = (e22, t22) => {
  if (!e22)
    return p;
  typeof e22 != "string" && console.error("Timezone must be a string - recieved: '", e22, "'\n");
  let a22 = e22.trim();
  if (a22 = a22.toLowerCase(), t22.hasOwnProperty(a22) === true)
    return a22;
  if (a22 = ((e32) => (e32 = (e32 = (e32 = (e32 = (e32 = e32.replace(/ time/g, "")).replace(/ (standard|daylight|summer)/g, "")).replace(/\b(east|west|north|south)ern/g, "$1")).replace(/\b(africa|america|australia)n/g, "$1")).replace(/\beuropean/g, "europe")).replace(/\islands/g, "island"))(a22), t22.hasOwnProperty(a22) === true)
    return a22;
  if (f.hasOwnProperty(a22) === true)
    return f[a22];
  if (/[0-9]/.test(a22) === true) {
    let e32 = m(a22);
    if (e32)
      return e32;
  }
  throw new Error("Spacetime: Cannot find timezone named: '" + e22 + "'. Please enter an IANA timezone id.");
};
var b = (function(e22, t22) {
  t22.isLeapYear = (e32) => e32 % 4 == 0 && e32 % 100 != 0 || e32 % 400 == 0, t22.isDate = (e32) => Object.prototype.toString.call(e32) === "[object Date]" && !isNaN(e32.valueOf()), t22.isArray = (e32) => Object.prototype.toString.call(e32) === "[object Array]", t22.isObject = (e32) => Object.prototype.toString.call(e32) === "[object Object]", t22.isBoolean = (e32) => Object.prototype.toString.call(e32) === "[object Boolean]", t22.zeroPad = (e32, t32 = 2) => (e32 += "").length >= t32 ? e32 : new Array(t32 - e32.length + 1).join("0") + e32, t22.titleCase = (e32) => e32 ? e32[0].toUpperCase() + e32.substr(1) : "", t22.ordinal = (e32) => {
    let t32 = e32 % 10, a22 = e32 % 100;
    return t32 === 1 && a22 !== 11 ? e32 + "st" : t32 === 2 && a22 !== 12 ? e32 + "nd" : t32 === 3 && a22 !== 13 ? e32 + "rd" : e32 + "th";
  }, t22.toCardinal = (e32) => (e32 = (e32 = String(e32)).replace(/([0-9])(st|nd|rd|th)$/i, "$1"), parseInt(e32, 10)), t22.normalize = (e32 = "") => (e32 = (e32 = (e32 = (e32 = e32.toLowerCase().trim()).replace(/ies$/, "y")).replace(/s$/, "")).replace(/-/g, "")) === "day" || e32 === "days" ? "date" : e32 === "min" || e32 === "mins" ? "minute" : e32, t22.getEpoch = (e32) => typeof e32 == "number" ? e32 : t22.isDate(e32) ? e32.getTime() : e32.epoch ? e32.epoch : null, t22.beADate = (e32, a22) => t22.isObject(e32) === false ? a22.clone().set(e32) : e32, t22.formatTimezone = (e32, a22 = "") => {
    const n22 = e32 > 0 ? "+" : "-", r22 = Math.abs(e32);
    return `${n22}${t22.zeroPad(parseInt("" + r22, 10))}${a22}${t22.zeroPad(r22 % 1 * 60)}`;
  };
}(y2 = {exports: {}}, y2.exports), y2.exports);
b.isLeapYear, b.isDate, b.isArray, b.isObject, b.isBoolean, b.zeroPad, b.titleCase, b.ordinal, b.toCardinal, b.normalize, b.getEpoch, b.beADate, b.formatTimezone;
var k = {year: new Date().getFullYear(), month: 0, date: 1};
var w = {parseArray: (e22, t22, a22) => {
  if (t22.length === 0)
    return e22;
  let n22 = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
  for (let r22 = 0; r22 < n22.length; r22++) {
    let o22 = t22[r22] || a22[n22[r22]] || k[n22[r22]] || 0;
    e22 = e22[n22[r22]](o22);
  }
  return e22;
}, parseObject: (e22, t22, a22) => {
  if (Object.keys(t22).length === 0)
    return e22;
  t22 = Object.assign({}, k, a22, t22);
  let n22 = Object.keys(t22);
  for (let r22 = 0; r22 < n22.length; r22++) {
    let o22 = n22[r22];
    if (e22[o22] === void 0 || typeof e22[o22] != "function")
      continue;
    if (t22[o22] === null || t22[o22] === void 0 || t22[o22] === "")
      continue;
    let i22 = t22[o22] || a22[o22] || k[o22] || 0;
    e22 = e22[o22](i22);
  }
  return e22;
}, parseNumber: function(e22, t22) {
  return t22 > 0 && t22 < 25e8 && e22.silent === false && (console.warn("  - Warning: You are setting the date to January 1970."), console.warn("       -   did input seconds instead of milliseconds?")), e22.epoch = t22, e22;
}};
var v = function(e22) {
  return e22.epoch = Date.now(), Object.keys(e22._today || {}).forEach((t22) => {
    typeof e22[t22] == "function" && (e22 = e22[t22](e22._today[t22]));
  }), e22;
};
var z = {now: (e22) => v(e22), today: (e22) => v(e22), tonight: (e22) => e22 = (e22 = v(e22)).hour(18), tomorrow: (e22) => e22 = (e22 = (e22 = v(e22)).add(1, "day")).startOf("day"), yesterday: (e22) => e22 = (e22 = (e22 = v(e22)).subtract(1, "day")).startOf("day"), christmas: (e22) => {
  let t22 = v(e22).year();
  return e22 = e22.set([t22, 11, 25, 18, 0, 0]);
}, "new years": (e22) => {
  let t22 = v(e22).year();
  return e22 = e22.set([t22, 11, 31, 18, 0, 0]);
}};
z["new years eve"] = z["new years"];
var _ = z;
var j = function(e22) {
  return e22 = (e22 = (e22 = (e22 = e22.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "")).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, "")).replace(/ +/g, " ").trim();
};
var O2 = {millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5};
O2.date = O2.day, O2.month = 25488e5, O2.week = 6048e5, O2.year = 3154e7, Object.keys(O2).forEach((e22) => {
  O2[e22 + "s"] = O2[e22];
});
var $ = O2;
var D2 = (e22, t22, a22, n22, r22) => {
  let o22 = e22.d[a22]();
  if (o22 === t22)
    return;
  let i22 = r22 === null ? null : e22.d[r22](), s22 = e22.epoch, u22 = t22 - o22;
  e22.epoch += $[n22] * u22, n22 === "day" && Math.abs(u22) > 28 && t22 < 28 && (e22.epoch += $.hour), r22 !== null && i22 !== e22.d[r22]() && (e22.epoch = s22);
  const l22 = $[n22] / 2;
  for (; e22.d[a22]() < t22; )
    e22.epoch += l22;
  for (; e22.d[a22]() > t22; )
    e22.epoch -= l22;
  r22 !== null && i22 !== e22.d[r22]() && (e22.epoch = s22);
};
var M2 = {year: {valid: (e22) => e22 > -4e3 && e22 < 4e3, walkTo: (e22, t22) => D2(e22, t22, "getFullYear", "year", null)}, month: {valid: (e22) => e22 >= 0 && e22 <= 11, walkTo: (e22, t22) => {
  let a22 = e22.d, n22 = a22.getMonth(), r22 = e22.epoch, o22 = a22.getFullYear();
  if (n22 === t22)
    return;
  let i22 = t22 - n22;
  for (e22.epoch += $.day * (28 * i22), o22 !== e22.d.getFullYear() && (e22.epoch = r22); e22.d.getMonth() < t22; )
    e22.epoch += $.day;
  for (; e22.d.getMonth() > t22; )
    e22.epoch -= $.day;
}}, date: {valid: (e22) => e22 > 0 && e22 <= 31, walkTo: (e22, t22) => D2(e22, t22, "getDate", "day", "getMonth")}, hour: {valid: (e22) => e22 >= 0 && e22 < 24, walkTo: (e22, t22) => D2(e22, t22, "getHours", "hour", "getDate")}, minute: {valid: (e22) => e22 >= 0 && e22 < 60, walkTo: (e22, t22) => D2(e22, t22, "getMinutes", "minute", "getHours")}, second: {valid: (e22) => e22 >= 0 && e22 < 60, walkTo: (e22, t22) => {
  e22.epoch = e22.seconds(t22).epoch;
}}, millisecond: {valid: (e22) => e22 >= 0 && e22 < 1e3, walkTo: (e22, t22) => {
  e22.epoch = e22.milliseconds(t22).epoch;
}}};
var P2 = (e22, t22) => {
  let a22 = Object.keys(M2), n22 = e22.clone();
  for (let r22 = 0; r22 < a22.length; r22++) {
    let o22 = a22[r22], i22 = t22[o22];
    if (i22 === void 0 && (i22 = n22[o22]()), typeof i22 == "string" && (i22 = parseInt(i22, 10)), !M2[o22].valid(i22))
      return e22.epoch = null, void (e22.silent === false && console.warn("invalid " + o22 + ": " + i22));
    M2[o22].walkTo(e22, i22);
  }
};
var q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var S2 = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
var E = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var T2 = () => S2;
var N2 = () => E;
var C = () => function() {
  const e22 = {sep: 8};
  for (let t22 = 0; t22 < S2.length; t22++)
    e22[S2[t22]] = t22;
  for (let t22 = 0; t22 < E.length; t22++)
    e22[E[t22]] = t22;
  return e22;
}();
var I2 = (e22) => {
  S2 = e22.short || S2, E = e22.long || E;
};
var A = (e22, t22) => {
  if (!t22)
    return e22;
  t22 !== "Z" && t22 !== "z" || (t22 = "+0000");
  let a22 = 0;
  /^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t22) && (/:00/.test(t22) === true && (t22 = t22.replace(/:00/, "")), /:30/.test(t22) === true && (t22 = t22.replace(/:30/, ".5"))), /^[\+-]?[0-9]{4}$/.test(t22) && (t22 = t22.replace(/30$/, ".5")), a22 = parseFloat(t22), Math.abs(a22) > 100 && (a22 /= 100), a22 *= -1, a22 >= 0 && (a22 = "+" + a22);
  let n22 = "etc/gmt" + a22;
  return e22.timezones[n22] && (e22.tz = n22), e22;
};
var Y2 = (e22, t22 = "") => {
  let a22 = (t22 = t22.replace(/^\s+/, "").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
  if (a22 !== null) {
    let n22 = Number(a22[1]);
    if (n22 < 0 || n22 > 24)
      return e22.startOf("day");
    let r22 = Number(a22[2]);
    if (a22[2].length < 2 || r22 < 0 || r22 > 59)
      return e22.startOf("day");
    a22[4] > 999 && (a22[4] = parseInt(("" + a22[4]).substring(0, 3), 10)), e22 = (e22 = (e22 = (e22 = e22.hour(n22)).minute(r22)).seconds(a22[3] || 0)).millisecond(a22[4] || 0);
    let o22 = t22.match(/[\b0-9](am|pm)\b/);
    return o22 !== null && o22[1] && (e22 = e22.ampm(o22[1])), e22;
  }
  if (a22 = t22.match(/([0-9]+) ?(am|pm)/), a22 !== null && a22[1]) {
    let t32 = Number(a22[1]);
    return t32 > 12 || t32 < 1 ? e22.startOf("day") : e22 = (e22 = (e22 = e22.hour(a22[1] || 0)).ampm(a22[2])).startOf("hour");
  }
  return e22 = e22.startOf("day");
};
var x = b.isLeapYear;
var L = C();
var F2 = {parseOffset: A, parseTime: Y2, parseYear: (e22 = "", t22) => {
  if (e22 = e22.trim(), /^'[0-9][0-9]$/.test(e22) === true) {
    let t32 = Number(e22.replace(/'/, ""));
    return t32 > 50 ? 1900 + t32 : 2e3 + t32;
  }
  let a22 = parseInt(e22, 10);
  return !a22 && t22 && (a22 = t22.year), a22 = a22 || new Date().getFullYear(), a22;
}, parseMonth: function(e22) {
  return e22 = e22.toLowerCase().trim(), L[e22];
}, validate: (e22) => {
  if (q.hasOwnProperty(e22.month) !== true)
    return false;
  if (e22.month === 1)
    return !!(x(e22.year) && e22.date <= 29) || e22.date <= 28;
  let t22 = q[e22.month] || 0;
  return e22.date <= t22;
}};
var {validate: B2, parseTime: Z2, parseYear: H2, parseMonth: Q, parseOffset: G2} = F2;
var U2 = [{reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i, parse: (e22, t22) => {
  let a22 = {year: t22[1], month: parseInt(t22[2], 10) - 1, date: t22[3]};
  return B2(a22) === false ? (e22.epoch = null, e22) : (G2(e22, t22[5]), P2(e22, a22), e22 = Z2(e22, t22[4]));
}}, {reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e22, t22) => {
  let a22 = {year: t22[1], month: parseInt(t22[2], 10) - 1, date: parseInt(t22[3], 10)};
  return a22.month >= 12 && (a22.date = parseInt(t22[2], 10), a22.month = parseInt(t22[3], 10) - 1), B2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = Z2(e22, t22[4]));
}}, {reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e22, t22) => {
  let a22 = {year: H2(t22[1], e22._today), month: Q(t22[2]), date: b.toCardinal(t22[3] || "")};
  return B2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = Z2(e22, t22[4]));
}}];
var {validate: V2, parseTime: W2, parseYear: J, parseMonth: K} = F2;
var R2 = [{reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e22, t22) => {
  let a22 = parseInt(t22[1], 10) - 1, n22 = parseInt(t22[2], 10);
  (e22.british || a22 >= 12) && (n22 = parseInt(t22[1], 10), a22 = parseInt(t22[2], 10) - 1);
  let r22 = {date: n22, month: a22, year: J(t22[3], e22._today) || new Date().getFullYear()};
  return V2(r22) === false ? (e22.epoch = null, e22) : (P2(e22, r22), e22 = W2(e22, t22[4]));
}}, {reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e22, t22) => {
  let a22 = {year: J(t22[3], e22._today), month: K(t22[1]), date: b.toCardinal(t22[2] || "")};
  return V2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = W2(e22, t22[4]));
}}, {reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i, parse: (e22, t22) => {
  let a22 = {year: J(t22[3], e22._today), month: K(t22[1]), date: b.toCardinal(t22[2] || "")};
  return V2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = W2(e22, t22[4]));
}}, {reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i, parse: (e22, t22) => {
  let a22 = {year: J(t22[5], e22._today), month: K(t22[1]), date: b.toCardinal(t22[2] || "")};
  return V2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = W2(e22, t22[3]));
}}];
var {validate: X2, parseTime: ee2, parseYear: te2, parseMonth: ae2} = F2;
var ne2 = [{reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i, parse: (e22, t22) => {
  let a22 = {year: te2(t22[3], e22._today), month: ae2(t22[2]), date: b.toCardinal(t22[1] || "")};
  return X2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = ee2(e22, t22[4]));
}}, {reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e22, t22) => {
  let a22 = {year: te2(t22[3], e22._today), month: ae2(t22[2]), date: b.toCardinal(t22[1])};
  return a22.month && X2(a22) !== false ? (P2(e22, a22), e22 = ee2(e22, t22[4])) : (e22.epoch = null, e22);
}}, {reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e22, t22) => {
  let a22 = {date: Number(t22[1]), month: ae2(t22[2]), year: Number(t22[3])};
  return X2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = e22.startOf("day"), e22 = ee2(e22, t22[4]));
}}];
var {validate: re2, parseTime: oe2, parseYear: ie2, parseMonth: se2} = F2;
var ue2 = [].concat(U2, R2, ne2, [{reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i, parse: (e22, t22) => {
  let a22 = {year: t22[1], month: parseInt(t22[2], 10) - 1, date: 1};
  return re2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = oe2(e22, t22[4]));
}}, {reg: /^([a-z]+) ([0-9]{4})$/i, parse: (e22, t22) => {
  let a22 = {year: ie2(t22[2], e22._today), month: se2(t22[1]), date: e22._today.date || 1};
  return re2(a22) === false ? (e22.epoch = null, e22) : (P2(e22, a22), e22 = oe2(e22, t22[4]));
}}, {reg: /^(q[0-9])( of)?( [0-9]{4})?/i, parse: (e22, t22) => {
  let a22 = t22[1] || "";
  e22 = e22.quarter(a22);
  let n22 = t22[3] || "";
  return n22 && (n22 = n22.trim(), e22 = e22.year(n22)), e22;
}}, {reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i, parse: (e22, t22) => {
  let a22 = t22[1] || "";
  e22 = e22.season(a22);
  let n22 = t22[3] || "";
  return n22 && (n22 = n22.trim(), e22 = e22.year(n22)), e22;
}}, {reg: /^[0-9,]+ ?b\.?c\.?$/i, parse: (e22, t22) => {
  let a22 = t22[0] || "";
  a22 = a22.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
  let n22 = new Date(), r22 = {year: parseInt(a22.trim(), 10), month: n22.getMonth(), date: n22.getDate()};
  return re2(r22) === false ? (e22.epoch = null, e22) : (P2(e22, r22), e22 = oe2(e22));
}}, {reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i, parse: (e22, t22) => {
  let a22 = t22[0] || "";
  a22 = a22.replace(/,/g, "");
  let n22 = new Date(), r22 = {year: parseInt(a22.trim(), 10), month: n22.getMonth(), date: n22.getDate()};
  return re2(r22) === false ? (e22.epoch = null, e22) : (P2(e22, r22), e22 = oe2(e22));
}}, {reg: /^[0-9]{4}( ?a\.?d\.?)?$/i, parse: (e22, t22) => {
  let a22 = e22._today;
  a22.month && !a22.date && (a22.date = 1);
  let n22 = new Date(), r22 = {year: ie2(t22[0], a22), month: a22.month || n22.getMonth(), date: a22.date || n22.getDate()};
  return re2(r22) === false ? (e22.epoch = null, e22) : (P2(e22, r22), e22 = oe2(e22));
}}]);
var le2 = function(e22, t22, a22) {
  for (let n22 = 0; n22 < ue2.length; n22++) {
    let r22 = t22.match(ue2[n22].reg);
    if (r22) {
      let t32 = ue2[n22].parse(e22, r22, a22);
      if (t32 !== null && t32.isValid())
        return t32;
    }
  }
  return e22.silent === false && console.warn("Warning: couldn't parse date-string: '" + t22 + "'"), e22.epoch = null, e22;
};
var {parseArray: he2, parseObject: ce2, parseNumber: de2} = w;
var me2 = {year: new Date().getFullYear(), month: 0, date: 1};
var pe2 = (e22, t22) => {
  let a22 = e22._today || me2;
  if (typeof t22 == "number")
    return de2(e22, t22);
  if (e22.epoch = Date.now(), e22._today && b.isObject(e22._today) && Object.keys(e22._today).length > 0) {
    let t32 = ce2(e22, a22, me2);
    t32.isValid() && (e22.epoch = t32.epoch);
  }
  return t22 == null || t22 === "" ? e22 : b.isDate(t22) === true ? (e22.epoch = t22.getTime(), e22) : b.isArray(t22) === true ? e22 = he2(e22, t22, a22) : b.isObject(t22) === true ? t22.epoch ? (e22.epoch = t22.epoch, e22.tz = t22.tz, e22) : e22 = ce2(e22, t22, a22) : typeof t22 != "string" ? e22 : (t22 = j(t22), _.hasOwnProperty(t22) === true ? e22 = _[t22](e22) : le2(e22, t22));
};
var fe2 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var ye = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var ge2 = {short: () => fe2, long: () => ye, set: (e22) => {
  fe2 = e22.short || fe2, ye = e22.long || ye;
}, aliases: {mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6, su: 7, tues: 2, weds: 3, wedn: 3, thur: 4, thurs: 4}};
var be2 = true;
var ke2 = () => be2;
var we2 = (e22) => {
  be2 = e22;
};
var ve2 = (e22) => {
  let t22 = e22.timezone().current.offset;
  return t22 ? b.formatTimezone(t22, ":") : "Z";
};
var ze = (e22) => ke2() ? b.titleCase(e22) : e22;
var _e = {day: (e22) => ze(e22.dayName()), "day-short": (e22) => ze(ge2.short()[e22.day()]), "day-number": (e22) => e22.day(), "day-ordinal": (e22) => b.ordinal(e22.day()), "day-pad": (e22) => b.zeroPad(e22.day()), date: (e22) => e22.date(), "date-ordinal": (e22) => b.ordinal(e22.date()), "date-pad": (e22) => b.zeroPad(e22.date()), month: (e22) => ze(e22.monthName()), "month-short": (e22) => ze(T2()[e22.month()]), "month-number": (e22) => e22.month(), "month-ordinal": (e22) => b.ordinal(e22.month()), "month-pad": (e22) => b.zeroPad(e22.month()), "iso-month": (e22) => b.zeroPad(e22.month() + 1), year: (e22) => {
  let t22 = e22.year();
  return t22 > 0 ? t22 : (t22 = Math.abs(t22), t22 + " BC");
}, "year-short": (e22) => {
  let t22 = e22.year();
  return t22 > 0 ? "'" + String(e22.year()).substr(2, 4) : (t22 = Math.abs(t22), t22 + " BC");
}, "iso-year": (e22) => {
  let t22 = e22.year(), a22 = t22 < 0, n22 = b.zeroPad(Math.abs(t22), 4);
  return a22 && (n22 = b.zeroPad(n22, 6), n22 = "-" + n22), n22;
}, time: (e22) => e22.time(), "time-24": (e22) => `${e22.hour24()}:${b.zeroPad(e22.minute())}`, hour: (e22) => e22.hour12(), "hour-pad": (e22) => b.zeroPad(e22.hour12()), "hour-24": (e22) => e22.hour24(), "hour-24-pad": (e22) => b.zeroPad(e22.hour24()), minute: (e22) => e22.minute(), "minute-pad": (e22) => b.zeroPad(e22.minute()), second: (e22) => e22.second(), "second-pad": (e22) => b.zeroPad(e22.second()), ampm: (e22) => e22.ampm(), quarter: (e22) => "Q" + e22.quarter(), season: (e22) => e22.season(), era: (e22) => e22.era(), json: (e22) => e22.json(), timezone: (e22) => e22.timezone().name, offset: (e22) => ve2(e22), numeric: (e22) => `${e22.year()}/${b.zeroPad(e22.month() + 1)}/${b.zeroPad(e22.date())}`, "numeric-us": (e22) => `${b.zeroPad(e22.month() + 1)}/${b.zeroPad(e22.date())}/${e22.year()}`, "numeric-uk": (e22) => `${b.zeroPad(e22.date())}/${b.zeroPad(e22.month() + 1)}/${e22.year()}`, "mm/dd": (e22) => `${b.zeroPad(e22.month() + 1)}/${b.zeroPad(e22.date())}`, iso: (e22) => `${e22.format("iso-year")}-${b.zeroPad(e22.month() + 1)}-${b.zeroPad(e22.date())}T${b.zeroPad(e22.h24())}:${b.zeroPad(e22.minute())}:${b.zeroPad(e22.second())}.${b.zeroPad(e22.millisecond(), 3)}${ve2(e22)}`, "iso-short": (e22) => {
  let t22 = b.zeroPad(e22.month() + 1), a22 = b.zeroPad(e22.date());
  return `${e22.year()}-${t22}-${a22}`;
}, "iso-utc": (e22) => new Date(e22.epoch).toISOString(), nice: (e22) => `${T2()[e22.month()]} ${b.ordinal(e22.date())}, ${e22.time()}`, "nice-24": (e22) => `${T2()[e22.month()]} ${b.ordinal(e22.date())}, ${e22.hour24()}:${b.zeroPad(e22.minute())}`, "nice-year": (e22) => `${T2()[e22.month()]} ${b.ordinal(e22.date())}, ${e22.year()}`, "nice-day": (e22) => `${ge2.short()[e22.day()]} ${ze(T2()[e22.month()])} ${b.ordinal(e22.date())}`, "nice-full": (e22) => `${e22.dayName()} ${ze(e22.monthName())} ${b.ordinal(e22.date())}, ${e22.time()}`, "nice-full-24": (e22) => `${e22.dayName()} ${ze(e22.monthName())} ${b.ordinal(e22.date())}, ${e22.hour24()}:${b.zeroPad(e22.minute())}`};
var je2 = {"day-name": "day", "month-name": "month", "iso 8601": "iso", "time-h24": "time-24", "time-12": "time", "time-h12": "time", tz: "timezone", "day-num": "day-number", "month-num": "month-number", "month-iso": "iso-month", "year-iso": "iso-year", "nice-short": "nice", "nice-short-24": "nice-24", mdy: "numeric-us", dmy: "numeric-uk", ymd: "numeric", "yyyy/mm/dd": "numeric", "mm/dd/yyyy": "numeric-us", "dd/mm/yyyy": "numeric-us", "little-endian": "numeric-uk", "big-endian": "numeric", "day-nice": "nice-day"};
Object.keys(je2).forEach((e22) => _e[e22] = _e[je2[e22]]);
var Oe2 = (e22, t22 = "") => {
  if (e22.isValid() !== true)
    return "";
  if (_e.hasOwnProperty(t22)) {
    let a22 = _e[t22](e22) || "";
    return t22 !== "json" && (a22 = String(a22), t22 !== "ampm" && (a22 = ze(a22))), a22;
  }
  if (t22.indexOf("{") !== -1) {
    let a22 = /\{(.+?)\}/g;
    return t22 = t22.replace(a22, (t32, a32) => {
      if (a32 = a32.toLowerCase().trim(), _e.hasOwnProperty(a32)) {
        let t4 = String(_e[a32](e22));
        return a32 !== "ampm" ? ze(t4) : t4;
      }
      return "";
    });
  }
  return e22.format("iso-short");
};
var $e2 = b.zeroPad;
var De2 = b.formatTimezone;
var Me2 = {G: (e22) => e22.era(), GG: (e22) => e22.era(), GGG: (e22) => e22.era(), GGGG: (e22) => e22.era() === "AD" ? "Anno Domini" : "Before Christ", y: (e22) => e22.year(), yy: (e22) => parseInt(String(e22.year()).substr(2, 4), 10), yyy: (e22) => e22.year(), yyyy: (e22) => e22.year(), yyyyy: (e22) => "0" + e22.year(), Q: (e22) => e22.quarter(), QQ: (e22) => e22.quarter(), QQQ: (e22) => e22.quarter(), QQQQ: (e22) => e22.quarter(), M: (e22) => e22.month() + 1, MM: (e22) => $e2(e22.month() + 1), MMM: (e22) => e22.format("month-short"), MMMM: (e22) => e22.format("month"), w: (e22) => e22.week(), ww: (e22) => $e2(e22.week()), d: (e22) => e22.date(), dd: (e22) => $e2(e22.date()), D: (e22) => e22.dayOfYear(), DD: (e22) => $e2(e22.dayOfYear()), DDD: (e22) => $e2(e22.dayOfYear(), 3), E: (e22) => e22.format("day-short"), EE: (e22) => e22.format("day-short"), EEE: (e22) => e22.format("day-short"), EEEE: (e22) => e22.format("day"), EEEEE: (e22) => e22.format("day")[0], e: (e22) => e22.day(), ee: (e22) => e22.day(), eee: (e22) => e22.format("day-short"), eeee: (e22) => e22.format("day"), eeeee: (e22) => e22.format("day")[0], a: (e22) => e22.ampm().toUpperCase(), aa: (e22) => e22.ampm().toUpperCase(), aaa: (e22) => e22.ampm().toUpperCase(), aaaa: (e22) => e22.ampm().toUpperCase(), h: (e22) => e22.h12(), hh: (e22) => $e2(e22.h12()), H: (e22) => e22.hour(), HH: (e22) => $e2(e22.hour()), m: (e22) => e22.minute(), mm: (e22) => $e2(e22.minute()), s: (e22) => e22.second(), ss: (e22) => $e2(e22.second()), A: (e22) => e22.epoch - e22.startOf("day").epoch, z: (e22) => e22.timezone().name, zz: (e22) => e22.timezone().name, zzz: (e22) => e22.timezone().name, zzzz: (e22) => e22.timezone().name, Z: (e22) => De2(e22.timezone().current.offset), ZZ: (e22) => De2(e22.timezone().current.offset), ZZZ: (e22) => De2(e22.timezone().current.offset), ZZZZ: (e22) => De2(e22.timezone().current.offset, ":")};
var Pe2 = (e22, t22, a22) => {
  let n22 = e22, r22 = t22;
  for (let o22 = 0; o22 < a22; o22 += 1)
    Me2[n22] = Me2[r22], n22 += e22, r22 += t22;
};
Pe2("q", "Q", 4), Pe2("L", "M", 4), Pe2("Y", "y", 4), Pe2("c", "e", 4), Pe2("k", "H", 2), Pe2("K", "h", 2), Pe2("S", "s", 2), Pe2("v", "z", 4), Pe2("V", "Z", 4);
var qe2 = (e22, t22) => {
  let a22 = t22.split("");
  return a22 = function(e32) {
    for (let t32 = 0; t32 < e32.length; t32 += 1)
      if (e32[t32] === "'")
        for (let a32 = t32 + 1; a32 < e32.length; a32 += 1) {
          if (e32[a32] && (e32[t32] += e32[a32]), e32[a32] === "'") {
            e32[a32] = null;
            break;
          }
          e32[a32] = null;
        }
    return e32.filter((e4) => e4);
  }(a22), a22 = function(e32) {
    for (let t32 = 0; t32 < e32.length; t32 += 1) {
      let a32 = e32[t32];
      for (let n22 = t32 + 1; n22 < e32.length && e32[n22] === a32; n22 += 1)
        e32[t32] += e32[n22], e32[n22] = null;
    }
    return (e32 = e32.filter((e4) => e4)).map((e4) => (e4 === "''" && (e4 = "'"), e4));
  }(a22), a22.reduce((t32, a32) => (Me2[a32] !== void 0 ? t32 += Me2[a32](e22) || "" : (/^'.{1,}'$/.test(a32) && (a32 = a32.replace(/'/g, "")), t32 += a32), t32), "");
};
var Se2 = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"];
var Ee2 = function(e22, t22) {
  let a22 = e22.clone().startOf(t22), n22 = e22.clone().endOf(t22).epoch - a22.epoch, r22 = (e22.epoch - a22.epoch) / n22;
  return parseFloat(r22.toFixed(2));
};
var Te2 = (e22, t22) => {
  if (t22)
    return t22 = b.normalize(t22), Ee2(e22, t22);
  let a22 = {};
  return Se2.forEach((t32) => {
    a22[t32] = Ee2(e22, t32);
  }), a22;
};
var Ne2 = (e22, t22) => {
  let a22 = e22.progress();
  return (t22 = b.normalize(t22)) === "quarterhour" && (t22 = "quarterHour"), a22[t22] !== void 0 ? (a22[t22] > 0.5 && (e22 = e22.add(1, t22)), e22 = e22.startOf(t22)) : e22.silent === false && console.warn("no known unit '" + t22 + "'"), e22;
};
var Ce2 = (e22, t22, a22) => {
  let n22 = 0;
  for (e22 = e22.clone(); e22.isBefore(t22); )
    e22 = e22.add(1, a22), n22 += 1;
  return e22.isAfter(t22, a22) && (n22 -= 1), n22;
};
var Ie2 = (e22, t22, a22) => e22.isBefore(t22) ? Ce2(e22, t22, a22) : -1 * Ce2(t22, e22, a22);
var Ae2 = function(e22, t22) {
  let a22 = t22.epoch - e22.epoch, n22 = {milliseconds: a22, seconds: parseInt(a22 / 1e3, 10)};
  n22.minutes = parseInt(n22.seconds / 60, 10), n22.hours = parseInt(n22.minutes / 60, 10);
  let r22 = e22.clone();
  return n22.years = ((e32, t32) => {
    let a32 = t32.year() - e32.year();
    return (e32 = e32.year(t32.year())).isAfter(t32) && (a32 -= 1), a32;
  })(r22, t22), r22 = e22.add(n22.years, "year"), n22.months = 12 * n22.years, r22 = e22.add(n22.months, "month"), n22.months += Ie2(r22, t22, "month"), n22.weeks = 52 * n22.years, r22 = e22.add(n22.weeks, "week"), n22.weeks += Ie2(r22, t22, "week"), n22.days = 7 * n22.weeks, r22 = e22.add(n22.days, "day"), n22.days += Ie2(r22, t22, "day"), n22;
};
var Ye2 = function(e22, t22, a22) {
  t22 = b.beADate(t22, e22);
  let n22 = false;
  if (e22.isAfter(t22)) {
    let a32 = e22;
    e22 = t22, t22 = a32, n22 = true;
  }
  let r22 = Ae2(e22, t22);
  return n22 && (r22 = function(e32) {
    return Object.keys(e32).forEach((t32) => {
      e32[t32] *= -1;
    }), e32;
  }(r22)), a22 ? (a22 = b.normalize(a22), /s$/.test(a22) !== true && (a22 += "s"), a22 === "dates" && (a22 = "days"), r22[a22]) : r22;
};
var xe = {months: {almost: 10, over: 4}, days: {almost: 25, over: 10}, hours: {almost: 20, over: 8}, minutes: {almost: 50, over: 20}, seconds: {almost: 50, over: 20}};
function Le2(e22, t22) {
  return e22 === 1 && (t22 = t22.slice(0, -1)), e22 + " " + t22;
}
var Fe2 = (e22, t22) => {
  const a22 = function(e32, t32) {
    const a32 = e32.isBefore(t32), n32 = a32 ? t32 : e32;
    let r32 = a32 ? e32 : t32;
    r32 = r32.clone();
    const o3 = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
    return Object.keys(o3).forEach((e4) => {
      if (r32.isSame(n32, e4))
        return;
      let t4 = r32.diff(n32, e4);
      r32 = r32.add(t4, e4), o3[e4] = t4;
    }), a32 && Object.keys(o3).forEach((e4) => {
      o3[e4] !== 0 && (o3[e4] *= -1);
    }), o3;
  }(e22, t22 = b.beADate(t22, e22));
  if (Object.keys(a22).every((e32) => !a22[e32]) === true)
    return {diff: a22, rounded: "now", qualified: "now", precise: "now"};
  let n22, r22, o22, i22 = [];
  return Object.keys(a22).forEach((e32, t32, o3) => {
    const s22 = Math.abs(a22[e32]);
    if (s22 === 0)
      return;
    const u22 = Le2(s22, e32);
    if (i22.push(u22), !n22) {
      if (n22 = r22 = u22, t32 > 4)
        return;
      const i32 = o3[t32 + 1], l22 = Math.abs(a22[i32]);
      l22 > xe[i32].almost ? (n22 = Le2(s22 + 1, e32), r22 = "almost " + n22) : l22 > xe[i32].over && (r22 = "over " + u22);
    }
  }), o22 = i22.splice(0, 2).join(", "), e22.isAfter(t22) === true ? (n22 += " ago", r22 += " ago", o22 += " ago") : (n22 = "in " + n22, r22 = "in " + r22, o22 = "in " + o22), {diff: a22, rounded: n22, qualified: r22, precise: o22};
};
var Be2 = {north: [["spring", 2, 1], ["summer", 5, 1], ["fall", 8, 1], ["autumn", 8, 1], ["winter", 11, 1]], south: [["fall", 2, 1], ["autumn", 2, 1], ["winter", 5, 1], ["spring", 8, 1], ["summer", 11, 1]]};
var Ze2 = [null, [0, 1], [3, 1], [6, 1], [9, 1]];
var He2 = {minute: (e22) => (P2(e22, {second: 0, millisecond: 0}), e22), quarterhour: (e22) => {
  let t22 = e22.minutes();
  return e22 = t22 >= 45 ? e22.minutes(45) : t22 >= 30 ? e22.minutes(30) : t22 >= 15 ? e22.minutes(15) : e22.minutes(0), P2(e22, {second: 0, millisecond: 0}), e22;
}, hour: (e22) => (P2(e22, {minute: 0, second: 0, millisecond: 0}), e22), day: (e22) => (P2(e22, {hour: 0, minute: 0, second: 0, millisecond: 0}), e22), week: (e22) => {
  let t22 = e22.clone();
  return (e22 = e22.day(e22._weekStart)).isAfter(t22) && (e22 = e22.subtract(1, "week")), P2(e22, {hour: 0, minute: 0, second: 0, millisecond: 0}), e22;
}, month: (e22) => (P2(e22, {date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}), e22), quarter: (e22) => {
  let t22 = e22.quarter();
  return Ze2[t22] && P2(e22, {month: Ze2[t22][0], date: Ze2[t22][1], hour: 0, minute: 0, second: 0, millisecond: 0}), e22;
}, season: (e22) => {
  let t22 = e22.season(), a22 = "north";
  e22.hemisphere() === "South" && (a22 = "south");
  for (let n22 = 0; n22 < Be2[a22].length; n22++)
    if (Be2[a22][n22][0] === t22) {
      let r22 = e22.year();
      return t22 === "winter" && e22.month() < 3 && (r22 -= 1), P2(e22, {year: r22, month: Be2[a22][n22][1], date: Be2[a22][n22][2], hour: 0, minute: 0, second: 0, millisecond: 0}), e22;
    }
  return e22;
}, year: (e22) => (P2(e22, {month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}), e22), decade: (e22) => {
  let t22 = (e22 = e22.startOf("year")).year(), a22 = 10 * parseInt(t22 / 10, 10);
  return e22 = e22.year(a22);
}, century: (e22) => {
  let t22 = (e22 = e22.startOf("year")).year(), a22 = 100 * parseInt(t22 / 100, 10);
  return e22 = e22.year(a22);
}};
He2.date = He2.day;
var Qe2 = (e22, t22) => {
  let a22 = e22.clone();
  return t22 = b.normalize(t22), He2[t22] ? He2[t22](a22) : t22 === "summer" || t22 === "winter" ? (a22 = a22.season(t22), He2.season(a22)) : a22;
};
var Ge2 = (e22, t22) => {
  let a22 = e22.clone();
  return t22 = b.normalize(t22), He2[t22] ? (a22 = He2[t22](a22), a22 = a22.add(1, t22), a22 = a22.subtract(1, "millisecond"), a22) : a22;
};
var Ue2 = function(e22, t22 = "", a22) {
  if (!t22 || !a22)
    return [];
  if (t22 = b.normalize(t22), a22 = e22.clone().set(a22), e22.isAfter(a22)) {
    let t32 = e22;
    e22 = a22, a22 = t32;
  }
  let n22 = e22.clone();
  !function(e32) {
    return !!ge2.short().find((t32) => t32 === e32) || !!ge2.long().find((t32) => t32 === e32);
  }(t22) ? n22 = n22.next(t22) : (n22 = n22.next(t22), t22 = "week");
  let r22 = [];
  for (; n22.isBefore(a22); )
    r22.push(n22), n22 = n22.add(1, t22);
  return r22;
};
var Ve = (e22) => {
  let a22 = e22.timezones, n22 = e22.tz;
  if (a22.hasOwnProperty(n22) === false && (n22 = g(e22.tz, a22)), n22 === null)
    return e22.silent === false && console.warn("Warn: could not find given or local timezone - '" + e22.tz + "'"), {current: {epochShift: 0}};
  let r22 = a22[n22], o22 = {name: (i22 = n22, i22 = (i22 = (i22 = i22[0].toUpperCase() + i22.substr(1)).replace(/\/gmt/, "/GMT")).replace(/[\/_]([a-z])/gi, (e32) => e32.toUpperCase())), hasDst: Boolean(r22.dst), default_offset: r22.offset, hemisphere: r22.hem === "s" ? "South" : "North", current: {}};
  var i22, s22;
  if (o22.hasDst) {
    let e32 = (s22 = r22.dst) ? s22.split("->") : [];
    o22.change = {start: e32[0], back: e32[1]};
  }
  let u22 = r22.offset, l22 = u22;
  return o22.hasDst === true && (l22 = o22.hemisphere === "North" ? u22 - 1 : r22.offset + 1), o22.hasDst === false ? (o22.current.offset = u22, o22.current.isDST = false) : t(e22.epoch, o22.change.start, o22.change.back, u22, l22) === true ? (o22.current.offset = u22, o22.current.isDST = o22.hemisphere === "North") : (o22.current.offset = l22, o22.current.isDST = o22.hemisphere === "South"), o22;
};
var We = ["century", "decade", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"];
var Je2 = {set: function(e22, t22) {
  let a22 = this.clone();
  return a22 = pe2(a22, e22), t22 && (this.tz = g(t22)), a22;
}, timezone: function() {
  return Ve(this);
}, isDST: function() {
  return Ve(this).current.isDST;
}, hasDST: function() {
  return Ve(this).hasDst;
}, offset: function() {
  return 60 * Ve(this).current.offset;
}, hemisphere: function() {
  return Ve(this).hemisphere;
}, format: function(e22) {
  return Oe2(this, e22);
}, unixFmt: function(e22) {
  return qe2(this, e22);
}, startOf: function(e22) {
  return Qe2(this, e22);
}, endOf: function(e22) {
  return Ge2(this, e22);
}, leapYear: function() {
  let e22 = this.year();
  return b.isLeapYear(e22);
}, progress: function(e22) {
  return Te2(this, e22);
}, nearest: function(e22) {
  return Ne2(this, e22);
}, diff: function(e22, t22) {
  return Ye2(this, e22, t22);
}, since: function(e22) {
  return e22 || (e22 = this.clone().set()), Fe2(this, e22);
}, next: function(e22) {
  return this.add(1, e22).startOf(e22);
}, last: function(e22) {
  return this.subtract(1, e22).startOf(e22);
}, isValid: function() {
  return !(!this.epoch && this.epoch !== 0) && !isNaN(this.d.getTime());
}, goto: function(e22) {
  let t22 = this.clone();
  return t22.tz = g(e22, t22.timezones), t22;
}, every: function(e22, t22) {
  if (typeof e22 == "object" && typeof t22 == "string") {
    let a22 = t22;
    t22 = e22, e22 = a22;
  }
  return Ue2(this, e22, t22);
}, isAwake: function() {
  let e22 = this.hour();
  return !(e22 < 8 || e22 > 22);
}, isAsleep: function() {
  return !this.isAwake();
}, log: function() {
  return console.log(""), console.log(Oe2(this, "nice-short")), this;
}, logYear: function() {
  return console.log(""), console.log(Oe2(this, "full-short")), this;
}, json: function() {
  return We.reduce((e22, t22) => (e22[t22] = this[t22](), e22), {});
}, debug: function() {
  let e22 = this.timezone(), t22 = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
  return t22 += "\n     - " + this.format("time"), console.log("\n\n", t22 + "\n     - " + e22.name + " (" + e22.current.offset + ")"), this;
}, from: function(e22) {
  return (e22 = this.clone().set(e22)).since(this);
}, fromNow: function() {
  return this.clone().set(Date.now()).since(this);
}, weekStart: function(e22) {
  if (typeof e22 == "number")
    return this._weekStart = e22, this;
  if (typeof e22 == "string") {
    e22 = e22.toLowerCase().trim();
    let t22 = ge2.short().indexOf(e22);
    t22 === -1 && (t22 = ge2.long().indexOf(e22)), t22 === -1 && (t22 = 1), this._weekStart = t22;
  } else
    console.warn("Spacetime Error: Cannot understand .weekStart() input:", e22);
  return this;
}};
Je2.inDST = Je2.isDST, Je2.round = Je2.nearest, Je2.each = Je2.every;
var Ke2 = Je2;
var Re2 = b.isLeapYear;
var Xe2 = (e22) => (typeof e22 == "string" && (e22 = parseInt(e22, 10)), e22);
var et = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
var tt = (e22, t22, a22) => {
  let n22 = et.indexOf(a22), r22 = et.slice(n22, et.length);
  for (let a32 = 0; a32 < r22.length; a32++) {
    let n32 = t22[r22[a32]]();
    e22[r22[a32]](n32);
  }
  return e22;
};
var at = function(e22, t22, a22, n22) {
  return a22 === true && e22.isBefore(t22) ? e22 = e22.add(1, n22) : a22 === false && e22.isAfter(t22) && (e22 = e22.minus(1, n22)), e22;
};
var nt = (e22, t22) => {
  t22 = Xe2(t22);
  let a22 = e22.millisecond() - t22;
  return e22.epoch - a22;
};
var rt = (e22, t22, a22) => {
  t22 = Xe2(t22);
  let n22 = e22.clone(), r22 = (e22.second() - t22) * $.second;
  return e22.epoch = e22.epoch - r22, (e22 = at(e22, n22, a22, "minute")).epoch;
};
var ot = (e22, t22, a22) => {
  t22 = Xe2(t22);
  let n22 = e22.clone(), r22 = (e22.minute() - t22) * $.minute;
  return e22.epoch -= r22, tt(e22, n22, "second"), (e22 = at(e22, n22, a22, "hour")).epoch;
};
var it = (e22, t22, a22) => {
  (t22 = Xe2(t22)) >= 24 ? t22 = 24 : t22 < 0 && (t22 = 0);
  let n22 = e22.clone(), r22 = e22.hour() - t22, o22 = r22 * $.hour;
  return e22.epoch -= o22, e22.date() !== n22.date() && (e22 = n22.clone(), r22 > 1 && (r22 -= 1), r22 < 1 && (r22 += 1), o22 = r22 * $.hour, e22.epoch -= o22), P2(e22, {hour: t22}), tt(e22, n22, "minute"), (e22 = at(e22, n22, a22, "day")).epoch;
};
var st = (e22, t22, a22) => {
  let n22 = t22.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
  if (!n22) {
    if (n22 = t22.match(/([0-9]{1,2}) ?(am|pm)/), !n22)
      return e22.epoch;
    n22.splice(2, 0, "0"), n22.splice(3, 0, "");
  }
  let r22 = false, o22 = parseInt(n22[1], 10), i22 = parseInt(n22[2], 10);
  i22 >= 60 && (i22 = 59), o22 > 12 && (r22 = true), r22 === false && (n22[4] === "am" && o22 === 12 && (o22 = 0), n22[4] === "pm" && o22 < 12 && (o22 += 12)), n22[3] = n22[3] || "", n22[3] = n22[3].replace(/:/, "");
  let s22 = parseInt(n22[3], 10) || 0, u22 = e22.clone();
  return e22 = (e22 = (e22 = (e22 = e22.hour(o22)).minute(i22)).second(s22)).millisecond(0), (e22 = at(e22, u22, a22, "day")).epoch;
};
var ut = (e22, t22, a22) => {
  if ((t22 = Xe2(t22)) > 28) {
    let a32 = e22.month(), n32 = q[a32];
    a32 === 1 && t22 === 29 && Re2(e22.year()) && (n32 = 29), t22 > n32 && (t22 = n32);
  }
  t22 <= 0 && (t22 = 1);
  let n22 = e22.clone();
  return P2(e22, {date: t22}), (e22 = at(e22, n22, a22, "month")).epoch;
};
var lt = (e22, t22, a22) => {
  typeof t22 == "string" && (t22 = C()[t22.toLowerCase()]), (t22 = Xe2(t22)) >= 12 && (t22 = 11), t22 <= 0 && (t22 = 0);
  let n22 = e22.date();
  n22 > q[t22] && (n22 = q[t22]);
  let r22 = e22.clone();
  return P2(e22, {month: t22, date: n22}), (e22 = at(e22, r22, a22, "year")).epoch;
};
var ht = (e22, t22) => (typeof t22 == "string" && /^'[0-9]{2}$/.test(t22) && (t22 = t22.replace(/'/, "").trim(), t22 = (t22 = Number(t22)) > 30 ? 1900 + t22 : 2e3 + t22), t22 = Xe2(t22), P2(e22, {year: t22}), e22.epoch);
var ct = (e22, t22, a22) => {
  let n22 = e22.clone();
  return t22 = Xe2(t22), (e22 = (e22 = (e22 = e22.month(0)).date(1)).day("monday")).monthName() === "december" && e22.date() >= 28 && (e22 = e22.add(1, "week")), t22 -= 1, e22 = e22.add(t22, "weeks"), (e22 = at(e22, n22, a22, "year")).epoch;
};
var dt = (e22, t22, a22) => {
  t22 = Xe2(t22);
  let n22 = e22.clone();
  return (t22 -= 1) <= 0 ? t22 = 0 : t22 >= 365 && (t22 = 364), e22 = (e22 = e22.startOf("year")).add(t22, "day"), tt(e22, n22, "hour"), (e22 = at(e22, n22, a22, "year")).epoch;
};
var mt = {millisecond: function(e22) {
  if (e22 !== void 0) {
    let t22 = this.clone();
    return t22.epoch = nt(t22, e22), t22;
  }
  return this.d.getMilliseconds();
}, second: function(e22, t22) {
  if (e22 !== void 0) {
    let a22 = this.clone();
    return a22.epoch = rt(a22, e22, t22), a22;
  }
  return this.d.getSeconds();
}, minute: function(e22, t22) {
  if (e22 !== void 0) {
    let a22 = this.clone();
    return a22.epoch = ot(a22, e22, t22), a22;
  }
  return this.d.getMinutes();
}, hour: function(e22, t22) {
  let a22 = this.d;
  if (e22 !== void 0) {
    let a32 = this.clone();
    return a32.epoch = it(a32, e22, t22), a32;
  }
  return a22.getHours();
}, hourFloat: function(e22, t22) {
  if (e22 !== void 0) {
    let a32 = this.clone(), n32 = e22 % 1;
    n32 *= 60;
    let r32 = parseInt(e22, 10);
    return a32.epoch = it(a32, r32, t22), a32.epoch = ot(a32, n32, t22), a32;
  }
  let a22 = this.d, n22 = a22.getHours(), r22 = a22.getMinutes();
  return r22 /= 60, n22 + r22;
}, hour12: function(e22, t22) {
  let a22 = this.d;
  if (e22 !== void 0) {
    let a32 = this.clone(), n32 = (e22 = "" + e22).match(/^([0-9]+)(am|pm)$/);
    if (n32) {
      let e32 = parseInt(n32[1], 10);
      n32[2] === "pm" && (e32 += 12), a32.epoch = it(a32, e32, t22);
    }
    return a32;
  }
  let n22 = a22.getHours();
  return n22 > 12 && (n22 -= 12), n22 === 0 && (n22 = 12), n22;
}, time: function(e22, t22) {
  if (e22 !== void 0) {
    let a22 = this.clone();
    return e22 = e22.toLowerCase().trim(), a22.epoch = st(a22, e22, t22), a22;
  }
  return `${this.h12()}:${b.zeroPad(this.minute())}${this.ampm()}`;
}, ampm: function(e22, t22) {
  let a22 = "am", n22 = this.hour();
  if (n22 >= 12 && (a22 = "pm"), typeof e22 != "string")
    return a22;
  let r22 = this.clone();
  return e22 = e22.toLowerCase().trim(), n22 >= 12 && e22 === "am" ? (n22 -= 12, r22.hour(n22, t22)) : n22 < 12 && e22 === "pm" ? (n22 += 12, r22.hour(n22, t22)) : r22;
}, dayTime: function(e22, t22) {
  if (e22 !== void 0) {
    const a32 = {morning: "7:00am", breakfast: "7:00am", noon: "12:00am", lunch: "12:00pm", afternoon: "2:00pm", evening: "6:00pm", dinner: "6:00pm", night: "11:00pm", midnight: "23:59pm"};
    let n22 = this.clone();
    return e22 = (e22 = e22 || "").toLowerCase(), a32.hasOwnProperty(e22) === true && (n22 = n22.time(a32[e22], t22)), n22;
  }
  let a22 = this.hour();
  return a22 < 6 ? "night" : a22 < 12 ? "morning" : a22 < 17 ? "afternoon" : a22 < 22 ? "evening" : "night";
}, iso: function(e22) {
  return e22 !== void 0 ? this.set(e22) : this.format("iso");
}};
var pt = {date: function(e22, t22) {
  if (e22 !== void 0) {
    let a22 = this.clone();
    return (e22 = parseInt(e22, 10)) && (a22.epoch = ut(a22, e22, t22)), a22;
  }
  return this.d.getDate();
}, day: function(e22, t22) {
  if (e22 === void 0)
    return this.d.getDay();
  let a22 = this.clone(), n22 = e22;
  typeof e22 == "string" && (e22 = e22.toLowerCase(), ge2.aliases.hasOwnProperty(e22) ? n22 = ge2.aliases[e22] : (n22 = ge2.short().indexOf(e22), n22 === -1 && (n22 = ge2.long().indexOf(e22))));
  let r22 = this.d.getDay() - n22;
  t22 === true && r22 > 0 && (r22 -= 7), t22 === false && r22 < 0 && (r22 += 7);
  let o22 = this.subtract(r22, "days");
  return P2(o22, {hour: a22.hour(), minute: a22.minute(), second: a22.second()}), o22;
}, dayName: function(e22, t22) {
  if (e22 === void 0)
    return ge2.long()[this.day()];
  let a22 = this.clone();
  return a22 = a22.day(e22, t22), a22;
}};
var ft = (e22) => e22 = (e22 = (e22 = e22.minute(0)).second(0)).millisecond(1);
var yt = {dayOfYear: function(e22, t22) {
  if (e22 !== void 0) {
    let a32 = this.clone();
    return a32.epoch = dt(a32, e22, t22), a32;
  }
  let a22, n22 = 0, r22 = this.d.getMonth();
  for (let e32 = 1; e32 <= r22; e32++)
    a22 = new Date(), a22.setDate(1), a22.setFullYear(this.d.getFullYear()), a22.setHours(1), a22.setMinutes(1), a22.setMonth(e32), a22.setHours(-2), n22 += a22.getDate();
  return n22 + this.d.getDate();
}, week: function(e22, t22) {
  if (e22 !== void 0) {
    let a32 = this.clone();
    return a32.epoch = ct(this, e22, t22), a32 = ft(a32), a32;
  }
  let a22 = this.clone();
  a22 = a22.month(0), a22 = a22.date(1), a22 = ft(a22), a22 = a22.day("monday"), a22.monthName() === "december" && a22.date() >= 28 && (a22 = a22.add(1, "week"));
  let n22 = 1;
  a22.date() === 1 && (n22 = 0), a22 = a22.minus(1, "second");
  const r22 = this.epoch;
  if (a22.epoch > r22)
    return 1;
  let o22 = 0, i22 = 4 * this.month();
  for (a22.epoch += $.week * i22, o22 += i22; o22 <= 52; o22++) {
    if (a22.epoch > r22)
      return o22 + n22;
    a22 = a22.add(1, "week");
  }
  return 52;
}, month: function(e22, t22) {
  if (e22 !== void 0) {
    let a22 = this.clone();
    return a22.epoch = lt(a22, e22, t22), a22;
  }
  return this.d.getMonth();
}, monthName: function(e22, t22) {
  if (e22 !== void 0) {
    let a22 = this.clone();
    return a22 = a22.month(e22, t22), a22;
  }
  return N2()[this.month()];
}, quarter: function(e22, t22) {
  if (e22 !== void 0 && (typeof e22 == "string" && (e22 = e22.replace(/^q/i, ""), e22 = parseInt(e22, 10)), Ze2[e22])) {
    let a32 = this.clone(), n22 = Ze2[e22][0];
    return a32 = a32.month(n22, t22), a32 = a32.date(1, t22), a32 = a32.startOf("day"), a32;
  }
  let a22 = this.d.getMonth();
  for (let e32 = 1; e32 < Ze2.length; e32++)
    if (a22 < Ze2[e32][0])
      return e32 - 1;
  return 4;
}, season: function(e22, t22) {
  let a22 = "north";
  if (this.hemisphere() === "South" && (a22 = "south"), e22 !== void 0) {
    let n32 = this.clone();
    for (let r22 = 0; r22 < Be2[a22].length; r22++)
      e22 === Be2[a22][r22][0] && (n32 = n32.month(Be2[a22][r22][1], t22), n32 = n32.date(1), n32 = n32.startOf("day"));
    return n32;
  }
  let n22 = this.d.getMonth();
  for (let e32 = 0; e32 < Be2[a22].length - 1; e32++)
    if (n22 >= Be2[a22][e32][1] && n22 < Be2[a22][e32 + 1][1])
      return Be2[a22][e32][0];
  return "winter";
}, year: function(e22) {
  if (e22 !== void 0) {
    let t22 = this.clone();
    return t22.epoch = ht(t22, e22), t22;
  }
  return this.d.getFullYear();
}, era: function(e22) {
  if (e22 !== void 0) {
    let t22 = this.clone();
    e22 = e22.toLowerCase();
    let a22 = t22.d.getFullYear();
    return e22 === "bc" && a22 > 0 && (t22.epoch = ht(t22, -1 * a22)), e22 === "ad" && a22 < 0 && (t22.epoch = ht(t22, -1 * a22)), t22;
  }
  return this.d.getFullYear() < 0 ? "BC" : "AD";
}, decade: function(e22) {
  if (e22 !== void 0) {
    if (!(e22 = (e22 = (e22 = String(e22)).replace(/([0-9])'?s$/, "$1")).replace(/([0-9])(th|rd|st|nd)/, "$1")))
      return console.warn("Spacetime: Invalid decade input"), this;
    e22.length === 2 && /[0-9][0-9]/.test(e22) && (e22 = "19" + e22);
    let t22 = Number(e22);
    return isNaN(t22) ? this : (t22 = 10 * Math.floor(t22 / 10), this.year(t22));
  }
  return this.startOf("decade").year();
}, century: function(e22) {
  if (e22 !== void 0) {
    typeof e22 == "string" && (e22 = (e22 = (e22 = e22.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (e32, t4, a22) => (a22.match(/b\.?c\.?/i) && (t4 = "-" + t4), t4))).replace(/c$/, ""));
    let t32 = Number(e22);
    return isNaN(e22) ? (console.warn("Spacetime: Invalid century input"), this) : (t32 === 0 && (t32 = 1), t32 = t32 >= 0 ? 100 * (t32 - 1) : 100 * (t32 + 1), this.year(t32));
  }
  let t22 = this.startOf("century").year();
  return t22 = Math.floor(t22 / 100), t22 < 0 ? t22 - 1 : t22 + 1;
}, millenium: function(e22) {
  if (e22 !== void 0) {
    if (typeof e22 == "string" && (e22 = e22.replace(/([0-9])(th|rd|st|nd)/, "$1"), e22 = Number(e22), isNaN(e22)))
      return console.warn("Spacetime: Invalid millenium input"), this;
    e22 > 0 && (e22 -= 1);
    let t32 = 1e3 * e22;
    return t32 === 0 && (t32 = 1), this.year(t32);
  }
  let t22 = Math.floor(this.year() / 1e3);
  return t22 >= 0 && (t22 += 1), t22;
}};
var gt = Object.assign({}, mt, pt, yt);
gt.milliseconds = gt.millisecond, gt.seconds = gt.second, gt.minutes = gt.minute, gt.hours = gt.hour, gt.hour24 = gt.hour, gt.h12 = gt.hour12, gt.h24 = gt.hour24, gt.days = gt.day;
var bt = (e22) => {
  Object.keys(gt).forEach((t22) => {
    e22.prototype[t22] = gt[t22];
  });
};
var kt = b.isLeapYear;
var wt = function(e22, t22) {
  return e22 === 1 && kt(t22) ? 29 : q[e22];
};
var vt = (e22, t22) => {
  if (e22.month > 0) {
    let a22 = parseInt(e22.month / 12, 10);
    e22.year = t22.year() + a22, e22.month = e22.month % 12;
  } else if (e22.month < 0) {
    let a22 = Math.floor(Math.abs(e22.month) / 13, 10);
    a22 = Math.abs(a22) + 1, e22.year = t22.year() - a22, e22.month = e22.month % 12, e22.month = e22.month + 12, e22.month === 12 && (e22.month = 0);
  }
  return e22;
};
var zt = (e22, t22, a22) => {
  let n22 = t22.year(), r22 = t22.month(), o22 = wt(r22, n22);
  for (; a22 > o22; )
    a22 -= o22, r22 += 1, r22 >= 12 && (r22 -= 12, n22 += 1), o22 = wt(r22, n22);
  return e22.month = r22, e22.date = a22, e22;
};
var _t = (e22, t22, a22) => {
  e22.year = t22.year(), e22.month = t22.month();
  let n22 = t22.date();
  for (e22.date = n22 - Math.abs(a22); e22.date < 1; ) {
    e22.month -= 1, e22.month < 0 && (e22.month = 11, e22.year -= 1);
    let t32 = wt(e22.month, e22.year);
    e22.date += t32;
  }
  return e22;
};
var jt = ["millisecond", "second", "minute", "hour", "date", "month"];
var Ot = {second: jt.slice(0, 1), minute: jt.slice(0, 2), quarterhour: jt.slice(0, 2), hour: jt.slice(0, 3), date: jt.slice(0, 4), month: jt.slice(0, 4), quarter: jt.slice(0, 4), season: jt.slice(0, 4), year: jt, decade: jt, century: jt};
Ot.week = Ot.hour, Ot.season = Ot.date, Ot.quarter = Ot.date;
var $t = {year: true, quarter: true, season: true, month: true, week: true, day: true};
var Dt = {month: true, quarter: true, season: true, year: true};
var Mt = (e22) => {
  e22.prototype.add = function(e32, t22) {
    let a22 = this.clone();
    if (!t22 || e32 === 0)
      return a22;
    let n22 = this.clone();
    if ((t22 = b.normalize(t22)) === "millisecond")
      return a22.epoch += e32, a22;
    t22 === "fortnight" && (e32 *= 2, t22 = "week"), $[t22] ? a22.epoch += $[t22] * e32 : t22 === "week" || t22 === "weekend" ? a22.epoch += $.day * (7 * e32) : t22 === "quarter" || t22 === "season" ? a22.epoch += $.month * (3 * e32) : t22 === "quarterhour" && (a22.epoch += 15 * $.minute * e32);
    let r22 = {};
    if (Ot[t22] && Ot[t22].forEach((e4) => {
      r22[e4] = n22[e4]();
    }), $t[t22]) {
      const e4 = n22.timezone().current.offset - a22.timezone().current.offset;
      a22.epoch += 3600 * e4 * 1e3;
    }
    if (t22 === "month" && (r22.month = n22.month() + e32, r22 = vt(r22, n22)), t22 === "week") {
      let t32 = n22.date() + 7 * e32;
      t32 <= 28 && t32 > 1 && (r22.date = t32);
    }
    if (t22 === "weekend" && a22.dayName() !== "saturday")
      a22 = a22.day("saturday", true);
    else if (t22 === "date") {
      if (e32 < 0)
        r22 = _t(r22, n22, e32);
      else {
        let t32 = n22.date() + e32;
        r22 = zt(r22, n22, t32);
      }
      e32 !== 0 && n22.isSame(a22, "day") && (r22.date = n22.date() + e32);
    } else if (t22 === "quarter") {
      if (r22.month = n22.month() + 3 * e32, r22.year = n22.year(), r22.month < 0) {
        let e4 = Math.floor(r22.month / 12), t32 = r22.month + 12 * Math.abs(e4);
        r22.month = t32, r22.year += e4;
      } else if (r22.month >= 12) {
        let e4 = Math.floor(r22.month / 12);
        r22.month = r22.month % 12, r22.year += e4;
      }
      r22.date = n22.date();
    } else if (t22 === "year") {
      let t32 = n22.year() + e32, r32 = a22.year();
      (r32 < t32 || r32 > t32) && (a22.epoch += $.day);
    } else
      t22 === "decade" ? r22.year = a22.year() + 10 : t22 === "century" && (r22.year = a22.year() + 100);
    if (Dt[t22]) {
      let e4 = q[r22.month];
      r22.date = n22.date(), r22.date > e4 && (r22.date = e4);
    }
    return Object.keys(r22).length > 1 && P2(a22, r22), a22;
  }, e22.prototype.subtract = function(e32, t22) {
    return this.clone().add(-1 * e32, t22);
  }, e22.prototype.minus = e22.prototype.subtract, e22.prototype.plus = e22.prototype.add;
};
var Pt = {millisecond: (e22) => e22.epoch, second: (e22) => [e22.year(), e22.month(), e22.date(), e22.hour(), e22.minute(), e22.second()].join("-"), minute: (e22) => [e22.year(), e22.month(), e22.date(), e22.hour(), e22.minute()].join("-"), hour: (e22) => [e22.year(), e22.month(), e22.date(), e22.hour()].join("-"), day: (e22) => [e22.year(), e22.month(), e22.date()].join("-"), week: (e22) => [e22.year(), e22.week()].join("-"), month: (e22) => [e22.year(), e22.month()].join("-"), quarter: (e22) => [e22.year(), e22.quarter()].join("-"), year: (e22) => e22.year()};
Pt.date = Pt.day;
var qt = (e22) => {
  e22.prototype.isSame = function(t22, a22, n22 = true) {
    let r22 = this;
    if (!a22)
      return null;
    if (typeof t22 == "string" && typeof a22 == "object") {
      let e32 = t22;
      t22 = a22, a22 = e32;
    }
    return typeof t22 != "string" && typeof t22 != "number" || (t22 = new e22(t22, this.timezone.name)), a22 = a22.replace(/s$/, ""), n22 === true && r22.tz !== t22.tz && ((t22 = t22.clone()).tz = r22.tz), Pt[a22] ? Pt[a22](r22) === Pt[a22](t22) : null;
  };
};
var St = (e22) => {
  const t22 = {isAfter: function(e32) {
    e32 = b.beADate(e32, this);
    let t32 = b.getEpoch(e32);
    return t32 === null ? null : this.epoch > t32;
  }, isBefore: function(e32) {
    e32 = b.beADate(e32, this);
    let t32 = b.getEpoch(e32);
    return t32 === null ? null : this.epoch < t32;
  }, isEqual: function(e32) {
    e32 = b.beADate(e32, this);
    let t32 = b.getEpoch(e32);
    return t32 === null ? null : this.epoch === t32;
  }, isBetween: function(e32, t32, a22 = false) {
    e32 = b.beADate(e32, this), t32 = b.beADate(t32, this);
    let n22 = b.getEpoch(e32);
    if (n22 === null)
      return null;
    let r22 = b.getEpoch(t32);
    return r22 === null ? null : a22 ? this.isBetween(e32, t32) || this.isEqual(e32) || this.isEqual(t32) : n22 < this.epoch && this.epoch < r22;
  }};
  Object.keys(t22).forEach((a22) => {
    e22.prototype[a22] = t22[a22];
  });
};
var Et = (e22) => {
  const t22 = {i18n: (e32) => {
    b.isObject(e32.days) && ge2.set(e32.days), b.isObject(e32.months) && I2(e32.months), b.isBoolean(e32.useTitleCase) && we2(e32.useTitleCase);
  }};
  Object.keys(t22).forEach((a22) => {
    e22.prototype[a22] = t22[a22];
  });
};
var Tt = s;
var Nt = function(e22, t22, n22 = {}) {
  this.epoch = null, this.tz = g(t22, Tt), this.silent = n22.silent || true, this.british = n22.dmy || n22.british, this._weekStart = 1, n22.weekStart !== void 0 && (this._weekStart = n22.weekStart), this._today = {}, n22.today !== void 0 && (this._today = n22.today), Object.defineProperty(this, "d", {get: function() {
    let e32 = a(this), t32 = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e32;
    t32 = 60 * t32 * 1e3;
    let n32 = this.epoch + t32;
    return new Date(n32);
  }}), Object.defineProperty(this, "timezones", {get: () => Tt, set: (e32) => (Tt = e32, e32)});
  let r22 = pe2(this, e22);
  this.epoch = r22.epoch;
};
Object.keys(Ke2).forEach((e22) => {
  Nt.prototype[e22] = Ke2[e22];
}), Nt.prototype.clone = function() {
  return new Nt(this.epoch, this.tz, {silent: this.silent, weekStart: this._weekStart, today: this._today, parsers: this.parsers});
}, Nt.prototype.toLocalDate = function() {
  return new Date(this.epoch);
}, bt(Nt), Mt(Nt), qt(Nt), St(Nt), Et(Nt);
var Ct = Nt;
var It = (e22, t22) => {
  let a22 = new Ct(null), n22 = new Ct(null);
  a22 = a22.time(e22), n22 = t22 ? n22.time(t22) : a22.add(59, "minutes");
  let r22 = a22.hour(), o22 = n22.hour();
  return Object.keys(a22.timezones).filter((e32) => {
    if (e32.indexOf("/") === -1)
      return false;
    let t32 = new Ct(null, e32), i22 = t32.hour();
    return i22 >= r22 && i22 <= o22 && (!(i22 === r22 && t32.minute() < a22.minute()) && !(i22 === o22 && t32.minute() > n22.minute()));
  });
};
var At = (e22, t22, a22) => new Ct(e22, t22, a22);
var Yt = function(e22) {
  let t22 = e22._today || {};
  return Object.keys(t22).forEach((a22) => {
    e22 = e22[a22](t22[a22]);
  }), e22;
};
At.now = (e22, t22) => {
  let a22 = new Ct(new Date().getTime(), e22, t22);
  return a22 = Yt(a22), a22;
}, At.today = (e22, t22) => {
  let a22 = new Ct(new Date().getTime(), e22, t22);
  return a22 = Yt(a22), a22.startOf("day");
}, At.tomorrow = (e22, t22) => {
  let a22 = new Ct(new Date().getTime(), e22, t22);
  return a22 = Yt(a22), a22.add(1, "day").startOf("day");
}, At.yesterday = (e22, t22) => {
  let a22 = new Ct(new Date().getTime(), e22, t22);
  return a22 = Yt(a22), a22.subtract(1, "day").startOf("day");
}, At.extend = function(e22 = {}) {
  return Object.keys(e22).forEach((t22) => {
    Ct.prototype[t22] = e22[t22];
  }), this;
}, At.timezones = function() {
  return new Ct().timezones;
}, At.max = function(e22, t22) {
  let a22 = new Ct(null, e22, t22);
  return a22.epoch = 864e13, a22;
}, At.min = function(e22, t22) {
  let a22 = new Ct(null, e22, t22);
  return a22.epoch = -864e13, a22;
}, At.whereIts = It, At.version = "6.16.0", At.plugin = At.extend;
var xt = At;
var spacetime_default = xt;

// build/snowpack/pkg/react-select.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i4 = 0; i4 < document.styleSheets.length; i4++) {
    if (document.styleSheets[i4].ownerNode === tag) {
      return document.styleSheets[i4];
    }
  }
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? true : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e4) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var e2 = "-ms-";
var r2 = "-moz-";
var a2 = "-webkit-";
var c2 = "comm";
var n2 = "rule";
var t2 = "decl";
var i2 = "@import";
var p2 = "@keyframes";
var k2 = Math.abs;
var d2 = String.fromCharCode;
function m2(e22, r22) {
  return (((r22 << 2 ^ z2(e22, 0)) << 2 ^ z2(e22, 1)) << 2 ^ z2(e22, 2)) << 2 ^ z2(e22, 3);
}
function g2(e22) {
  return e22.trim();
}
function x2(e22, r22) {
  return (e22 = r22.exec(e22)) ? e22[0] : e22;
}
function y3(e22, r22, a22) {
  return e22.replace(r22, a22);
}
function j2(e22, r22) {
  return e22.indexOf(r22);
}
function z2(e22, r22) {
  return e22.charCodeAt(r22) | 0;
}
function C2(e22, r22, a22) {
  return e22.slice(r22, a22);
}
function A2(e22) {
  return e22.length;
}
function M3(e22) {
  return e22.length;
}
function O3(e22, r22) {
  return r22.push(e22), e22;
}
function S3(e22, r22) {
  return e22.map(r22).join("");
}
var q2 = 1;
var B3 = 1;
var D3 = 0;
var E2 = 0;
var F3 = 0;
var G3 = "";
function H3(e22, r22, a22, c22, n22, t22, s22) {
  return {value: e22, root: r22, parent: a22, type: c22, props: n22, children: t22, line: q2, column: B3, length: s22, return: ""};
}
function I3(e22, r22, a22) {
  return H3(e22, r22.root, r22.parent, a22, r22.props, r22.children, 0);
}
function J2() {
  return F3;
}
function K2() {
  F3 = E2 > 0 ? z2(G3, --E2) : 0;
  if (B3--, F3 === 10)
    B3 = 1, q2--;
  return F3;
}
function L2() {
  F3 = E2 < D3 ? z2(G3, E2++) : 0;
  if (B3++, F3 === 10)
    B3 = 1, q2++;
  return F3;
}
function N3() {
  return z2(G3, E2);
}
function P3() {
  return E2;
}
function Q2(e22, r22) {
  return C2(G3, e22, r22);
}
function R3(e22) {
  switch (e22) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function T3(e22) {
  return q2 = B3 = 1, D3 = A2(G3 = e22), E2 = 0, [];
}
function U3(e22) {
  return G3 = "", e22;
}
function V3(e22) {
  return g2(Q2(E2 - 1, _2(e22 === 91 ? e22 + 2 : e22 === 40 ? e22 + 1 : e22)));
}
function X3(e22) {
  while (F3 = N3())
    if (F3 < 33)
      L2();
    else
      break;
  return R3(e22) > 2 || R3(F3) > 3 ? "" : " ";
}
function Z3(e22, r22) {
  while (--r22 && L2())
    if (F3 < 48 || F3 > 102 || F3 > 57 && F3 < 65 || F3 > 70 && F3 < 97)
      break;
  return Q2(e22, P3() + (r22 < 6 && N3() == 32 && L2() == 32));
}
function _2(e22) {
  while (L2())
    switch (F3) {
      case e22:
        return E2;
      case 34:
      case 39:
        return _2(e22 === 34 || e22 === 39 ? e22 : F3);
      case 40:
        if (e22 === 41)
          _2(e22);
        break;
      case 92:
        L2();
        break;
    }
  return E2;
}
function ee3(e22, r22) {
  while (L2())
    if (e22 + F3 === 47 + 10)
      break;
    else if (e22 + F3 === 42 + 42 && N3() === 47)
      break;
  return "/*" + Q2(r22, E2 - 1) + "*" + d2(e22 === 47 ? e22 : L2());
}
function re3(e22) {
  while (!R3(N3()))
    L2();
  return Q2(e22, E2);
}
function ae3(e22) {
  return U3(ce3("", null, null, null, [""], e22 = T3(e22), 0, [0], e22));
}
function ce3(e22, r22, a22, c22, n22, t22, s22, u22, i22) {
  var f22 = 0;
  var o22 = 0;
  var l22 = s22;
  var v22 = 0;
  var h22 = 0;
  var p22 = 0;
  var b22 = 1;
  var w22 = 1;
  var $2 = 1;
  var k22 = 0;
  var m22 = "";
  var g22 = n22;
  var x22 = t22;
  var j22 = c22;
  var z22 = m22;
  while (w22)
    switch (p22 = k22, k22 = L2()) {
      case 34:
      case 39:
      case 91:
      case 40:
        z22 += V3(k22);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z22 += X3(p22);
        break;
      case 92:
        z22 += Z3(P3() - 1, 7);
        continue;
      case 47:
        switch (N3()) {
          case 42:
          case 47:
            O3(te3(ee3(L2(), P3()), r22, a22), i22);
            break;
          default:
            z22 += "/";
        }
        break;
      case 123 * b22:
        u22[f22++] = A2(z22) * $2;
      case 125 * b22:
      case 59:
      case 0:
        switch (k22) {
          case 0:
          case 125:
            w22 = 0;
          case 59 + o22:
            if (h22 > 0 && A2(z22) - l22)
              O3(h22 > 32 ? se3(z22 + ";", c22, a22, l22 - 1) : se3(y3(z22, " ", "") + ";", c22, a22, l22 - 2), i22);
            break;
          case 59:
            z22 += ";";
          default:
            O3(j22 = ne3(z22, r22, a22, f22, o22, n22, u22, m22, g22 = [], x22 = [], l22), t22);
            if (k22 === 123)
              if (o22 === 0)
                ce3(z22, r22, j22, j22, g22, t22, l22, u22, x22);
              else
                switch (v22) {
                  case 100:
                  case 109:
                  case 115:
                    ce3(e22, j22, j22, c22 && O3(ne3(e22, j22, j22, 0, 0, n22, u22, m22, n22, g22 = [], l22), x22), n22, x22, l22, u22, c22 ? g22 : x22);
                    break;
                  default:
                    ce3(z22, j22, j22, j22, [""], x22, l22, u22, x22);
                }
        }
        f22 = o22 = h22 = 0, b22 = $2 = 1, m22 = z22 = "", l22 = s22;
        break;
      case 58:
        l22 = 1 + A2(z22), h22 = p22;
      default:
        if (b22 < 1) {
          if (k22 == 123)
            --b22;
          else if (k22 == 125 && b22++ == 0 && K2() == 125)
            continue;
        }
        switch (z22 += d2(k22), k22 * b22) {
          case 38:
            $2 = o22 > 0 ? 1 : (z22 += "\f", -1);
            break;
          case 44:
            u22[f22++] = (A2(z22) - 1) * $2, $2 = 1;
            break;
          case 64:
            if (N3() === 45)
              z22 += V3(L2());
            v22 = N3(), o22 = A2(m22 = z22 += re3(P3())), k22++;
            break;
          case 45:
            if (p22 === 45 && A2(z22) == 2)
              b22 = 0;
        }
    }
  return t22;
}
function ne3(e22, r22, a22, c22, t22, s22, u22, i22, f22, o22, l22) {
  var v22 = t22 - 1;
  var h22 = t22 === 0 ? s22 : [""];
  var p22 = M3(h22);
  for (var b22 = 0, w22 = 0, $2 = 0; b22 < c22; ++b22)
    for (var d22 = 0, m22 = C2(e22, v22 + 1, v22 = k2(w22 = u22[b22])), x22 = e22; d22 < p22; ++d22)
      if (x22 = g2(w22 > 0 ? h22[d22] + " " + m22 : y3(m22, /&\f/g, h22[d22])))
        f22[$2++] = x22;
  return H3(e22, r22, a22, t22 === 0 ? n2 : i22, f22, o22, l22);
}
function te3(e22, r22, a22) {
  return H3(e22, r22, a22, c2, d2(J2()), C2(e22, 2, -2), 0);
}
function se3(e22, r22, a22, c22) {
  return H3(e22, r22, a22, t2, C2(e22, 0, c22), C2(e22, c22 + 1, -1), c22);
}
function ue3(c22, n22) {
  switch (m2(c22, n22)) {
    case 5103:
      return a2 + "print-" + c22 + c22;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a2 + c22 + c22;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a2 + c22 + r2 + c22 + e2 + c22 + c22;
    case 6828:
    case 4268:
      return a2 + c22 + e2 + c22 + c22;
    case 6165:
      return a2 + c22 + e2 + "flex-" + c22 + c22;
    case 5187:
      return a2 + c22 + y3(c22, /(\w+).+(:[^]+)/, a2 + "box-$1$2" + e2 + "flex-$1$2") + c22;
    case 5443:
      return a2 + c22 + e2 + "flex-item-" + y3(c22, /flex-|-self/, "") + c22;
    case 4675:
      return a2 + c22 + e2 + "flex-line-pack" + y3(c22, /align-content|flex-|-self/, "") + c22;
    case 5548:
      return a2 + c22 + e2 + y3(c22, "shrink", "negative") + c22;
    case 5292:
      return a2 + c22 + e2 + y3(c22, "basis", "preferred-size") + c22;
    case 6060:
      return a2 + "box-" + y3(c22, "-grow", "") + a2 + c22 + e2 + y3(c22, "grow", "positive") + c22;
    case 4554:
      return a2 + y3(c22, /([^-])(transform)/g, "$1" + a2 + "$2") + c22;
    case 6187:
      return y3(y3(y3(c22, /(zoom-|grab)/, a2 + "$1"), /(image-set)/, a2 + "$1"), c22, "") + c22;
    case 5495:
    case 3959:
      return y3(c22, /(image-set\([^]*)/, a2 + "$1$`$1");
    case 4968:
      return y3(y3(c22, /(.+:)(flex-)?(.*)/, a2 + "box-pack:$3" + e2 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a2 + c22 + c22;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y3(c22, /(.+)-inline(.+)/, a2 + "$1$2") + c22;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A2(c22) - 1 - n22 > 6)
        switch (z2(c22, n22 + 1)) {
          case 109:
            if (z2(c22, n22 + 4) !== 45)
              break;
          case 102:
            return y3(c22, /(.+:)(.+)-([^]+)/, "$1" + a2 + "$2-$3$1" + r2 + (z2(c22, n22 + 3) == 108 ? "$3" : "$2-$3")) + c22;
          case 115:
            return ~j2(c22, "stretch") ? ue3(y3(c22, "stretch", "fill-available"), n22) + c22 : c22;
        }
      break;
    case 4949:
      if (z2(c22, n22 + 1) !== 115)
        break;
    case 6444:
      switch (z2(c22, A2(c22) - 3 - (~j2(c22, "!important") && 10))) {
        case 107:
          return y3(c22, ":", ":" + a2) + c22;
        case 101:
          return y3(c22, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a2 + (z2(c22, 14) === 45 ? "inline-" : "") + "box$3$1" + a2 + "$2$3$1" + e2 + "$2box$3") + c22;
      }
      break;
    case 5936:
      switch (z2(c22, n22 + 11)) {
        case 114:
          return a2 + c22 + e2 + y3(c22, /[svh]\w+-[tblr]{2}/, "tb") + c22;
        case 108:
          return a2 + c22 + e2 + y3(c22, /[svh]\w+-[tblr]{2}/, "tb-rl") + c22;
        case 45:
          return a2 + c22 + e2 + y3(c22, /[svh]\w+-[tblr]{2}/, "lr") + c22;
      }
      return a2 + c22 + e2 + c22 + c22;
  }
  return c22;
}
function ie3(e22, r22) {
  var a22 = "";
  var c22 = M3(e22);
  for (var n22 = 0; n22 < c22; n22++)
    a22 += r22(e22[n22], n22, e22, r22) || "";
  return a22;
}
function fe3(e22, r22, a22, s22) {
  switch (e22.type) {
    case i2:
    case t2:
      return e22.return = e22.return || e22.value;
    case c2:
      return "";
    case n2:
      e22.value = e22.props.join(",");
  }
  return A2(a22 = ie3(e22.children, s22)) ? e22.return = e22.value + "{" + a22 + "}" : "";
}
function oe3(e22) {
  var r22 = M3(e22);
  return function(a22, c22, n22, t22) {
    var s22 = "";
    for (var u22 = 0; u22 < r22; u22++)
      s22 += e22[u22](a22, c22, n22, t22) || "";
    return s22;
  };
}
function le3(e22) {
  return function(r22) {
    if (!r22.root) {
      if (r22 = r22.return)
        e22(r22);
    }
  };
}
function ve3(c22, s22, u22, i22) {
  if (!c22.return)
    switch (c22.type) {
      case t2:
        c22.return = ue3(c22.value, c22.length);
        break;
      case p2:
        return ie3([I3(y3(c22.value, "@", "@" + a2), c22, "")], i22);
      case n2:
        if (c22.length)
          return S3(c22.props, function(n22) {
            switch (x2(n22, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ie3([I3(y3(n22, /:(read-\w+)/, ":" + r2 + "$1"), c22, "")], i22);
              case "::placeholder":
                return ie3([I3(y3(n22, /:(plac\w+)/, ":" + a2 + "input-$1"), c22, ""), I3(y3(n22, /:(plac\w+)/, ":" + r2 + "$1"), c22, ""), I3(y3(n22, /:(plac\w+)/, e2 + "input-$1"), c22, "")], i22);
            }
            return "";
          });
    }
}
function memoize(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character = 44;
  do {
    switch (R3(character)) {
      case 0:
        if (character === 38 && N3() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += re3(E2 - 1);
        break;
      case 2:
        parsed[index2] += V3(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index2] = N3() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += d2(character);
    }
  } while (character = L2());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return U3(toRules(T3(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || !element.length) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i4 = 0, k3 = 0; i4 < rules.length; i4++) {
    for (var j4 = 0; j4 < parentRules.length; j4++, k3++) {
      element.props[k3] = points[i4] ? rules[i4].replace(/&\f/g, parentRules[j4]) : parentRules[j4] + " " + rules[i4];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [ve3];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function(node) {
      var attrib = node.getAttribute("data-emotion").split(" ");
      if (attrib[0] !== key) {
        return;
      }
      for (var i4 = 1; i4 < attrib.length; i4++) {
        inserted[attrib[i4]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [fe3, le3(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe3(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return ie3(ae3(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b2 = typeof Symbol === "function" && Symbol.for;
var c$1 = b2 ? Symbol.for("react.element") : 60103;
var d$1 = b2 ? Symbol.for("react.portal") : 60106;
var e$1 = b2 ? Symbol.for("react.fragment") : 60107;
var f2 = b2 ? Symbol.for("react.strict_mode") : 60108;
var g$1 = b2 ? Symbol.for("react.profiler") : 60114;
var h2 = b2 ? Symbol.for("react.provider") : 60109;
var k$1 = b2 ? Symbol.for("react.context") : 60110;
var l2 = b2 ? Symbol.for("react.async_mode") : 60111;
var m$1 = b2 ? Symbol.for("react.concurrent_mode") : 60111;
var n$1 = b2 ? Symbol.for("react.forward_ref") : 60112;
var p$1 = b2 ? Symbol.for("react.suspense") : 60113;
var q$1 = b2 ? Symbol.for("react.suspense_list") : 60120;
var r$1 = b2 ? Symbol.for("react.memo") : 60115;
var t$1 = b2 ? Symbol.for("react.lazy") : 60116;
var v2 = b2 ? Symbol.for("react.block") : 60121;
var w2 = b2 ? Symbol.for("react.fundamental") : 60117;
var x$1 = b2 ? Symbol.for("react.responder") : 60118;
var y$1 = b2 ? Symbol.for("react.scope") : 60119;
function z$1(a4) {
  if (typeof a4 === "object" && a4 !== null) {
    var u3 = a4.$$typeof;
    switch (u3) {
      case c$1:
        switch (a4 = a4.type, a4) {
          case l2:
          case m$1:
          case e$1:
          case g$1:
          case f2:
          case p$1:
            return a4;
          default:
            switch (a4 = a4 && a4.$$typeof, a4) {
              case k$1:
              case n$1:
              case t$1:
              case r$1:
              case h2:
                return a4;
              default:
                return u3;
            }
        }
      case d$1:
        return u3;
    }
  }
}
function A$1(a4) {
  return z$1(a4) === m$1;
}
var AsyncMode = l2;
var ConcurrentMode = m$1;
var ContextConsumer = k$1;
var ContextProvider = h2;
var Element = c$1;
var ForwardRef = n$1;
var Fragment = e$1;
var Lazy = t$1;
var Memo = r$1;
var Portal = d$1;
var Profiler = g$1;
var StrictMode = f2;
var Suspense = p$1;
var isAsyncMode = function(a4) {
  return A$1(a4) || z$1(a4) === l2;
};
var isConcurrentMode = A$1;
var isContextConsumer = function(a4) {
  return z$1(a4) === k$1;
};
var isContextProvider = function(a4) {
  return z$1(a4) === h2;
};
var isElement = function(a4) {
  return typeof a4 === "object" && a4 !== null && a4.$$typeof === c$1;
};
var isForwardRef = function(a4) {
  return z$1(a4) === n$1;
};
var isFragment = function(a4) {
  return z$1(a4) === e$1;
};
var isLazy = function(a4) {
  return z$1(a4) === t$1;
};
var isMemo = function(a4) {
  return z$1(a4) === r$1;
};
var isPortal = function(a4) {
  return z$1(a4) === d$1;
};
var isProfiler = function(a4) {
  return z$1(a4) === g$1;
};
var isStrictMode = function(a4) {
  return z$1(a4) === f2;
};
var isSuspense = function(a4) {
  return z$1(a4) === p$1;
};
var isValidElementType = function(a4) {
  return typeof a4 === "string" || typeof a4 === "function" || a4 === e$1 || a4 === m$1 || a4 === g$1 || a4 === f2 || a4 === p$1 || a4 === q$1 || typeof a4 === "object" && a4 !== null && (a4.$$typeof === t$1 || a4.$$typeof === r$1 || a4.$$typeof === h2 || a4.$$typeof === k$1 || a4.$$typeof === n$1 || a4.$$typeof === w2 || a4.$$typeof === x$1 || a4.$$typeof === y$1 || a4.$$typeof === v2);
};
var typeOf = z$1;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h4 = 0;
  var k3, i4 = 0, len = str.length;
  for (; len >= 4; ++i4, len -= 4) {
    k3 = str.charCodeAt(i4) & 255 | (str.charCodeAt(++i4) & 255) << 8 | (str.charCodeAt(++i4) & 255) << 16 | (str.charCodeAt(++i4) & 255) << 24;
    k3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16);
    k3 ^= k3 >>> 24;
    h4 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16) ^ (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h4 ^= (str.charCodeAt(i4 + 2) & 255) << 16;
    case 2:
      h4 ^= (str.charCodeAt(i4 + 1) & 255) << 8;
    case 1:
      h4 ^= str.charCodeAt(i4) & 255;
      h4 = (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16);
  }
  h4 ^= h4 >>> 13;
  h4 = (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16);
  return ((h4 ^ h4 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i4 = 0; i4 < obj.length; i4++) {
      string += handleInterpolation(mergedProps, registered, obj[i4]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i4 = 1; i4 < args.length; i4++) {
    styles += handleInterpolation(mergedProps, registered, args[i4]);
    if (stringMode) {
      styles += strings[i4];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
};
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.forwardRef(function(props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.createContext({});
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, typeof cssProp === "function" || Array.isArray(cssProp) ? react.useContext(ThemeContext) : void 0);
  var rules = insertStyles(cache, serialized, typeof type === "string");
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = /* @__PURE__ */ react.createElement(type, newProps);
  return ele;
});
var _extends_1 = createCommonjsModule(function(module) {
  function _extends2() {
    module.exports = _extends2 = Object.assign || function(target) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends2.apply(this, arguments);
  }
  module.exports = _extends2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty2.call(props, "css")) {
    return react.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i4 = 2; i4 < argsLength; i4++) {
    createElementArgArray[i4] = args[i4];
  }
  return react.createElement.apply(null, createElementArgArray);
};
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i4 = 0;
  var cls = "";
  for (; i4 < len; i4++) {
    var arg = args[i4];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k3 in arg) {
            if (arg[k3] && k3) {
              toAdd && (toAdd += " ");
              toAdd += k3;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css4, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css4(registeredStyles);
}
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var css4 = function css5() {
    if (hasRendered && false) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    {
      insertStyles(cache, serialized, false);
    }
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && false) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css4, classnames(args));
  };
  var content = {
    css: css4,
    cx,
    theme: react.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return ele;
});
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i4;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i4 = 0; i4 < sourceSymbolKeys.length; i4++) {
      key = sourceSymbolKeys[i4];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});
var AutosizeInput_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _extends2 = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _createClass2 = function() {
    function defineProperties(target, props) {
      for (var i4 = 0; i4 < props.length; i4++) {
        var descriptor = props[i4];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _react2 = _interopRequireDefault(react);
  var _propTypes2 = _interopRequireDefault(propTypes);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _objectWithoutProperties2(obj, keys) {
    var target = {};
    for (var i4 in obj) {
      if (keys.indexOf(i4) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i4))
        continue;
      target[i4] = obj[i4];
    }
    return target;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn2(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var sizerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    height: 0,
    overflow: "scroll",
    whiteSpace: "pre"
  };
  var INPUT_PROPS_BLACKLIST = ["extraWidth", "injectStyles", "inputClassName", "inputRef", "inputStyle", "minWidth", "onAutosize", "placeholderIsMinWidth"];
  var cleanInputProps = function cleanInputProps2(inputProps) {
    INPUT_PROPS_BLACKLIST.forEach(function(field) {
      return delete inputProps[field];
    });
    return inputProps;
  };
  var copyStyles = function copyStyles2(styles, node) {
    node.style.fontSize = styles.fontSize;
    node.style.fontFamily = styles.fontFamily;
    node.style.fontWeight = styles.fontWeight;
    node.style.fontStyle = styles.fontStyle;
    node.style.letterSpacing = styles.letterSpacing;
    node.style.textTransform = styles.textTransform;
  };
  var isIE = typeof window !== "undefined" && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;
  var generateId = function generateId2() {
    return isIE ? "_" + Math.random().toString(36).substr(2, 12) : void 0;
  };
  var AutosizeInput2 = function(_Component) {
    _inherits2(AutosizeInput3, _Component);
    _createClass2(AutosizeInput3, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var id2 = props.id;
        return id2 !== state.prevId ? {inputId: id2 || generateId(), prevId: id2} : null;
      }
    }]);
    function AutosizeInput3(props) {
      _classCallCheck2(this, AutosizeInput3);
      var _this = _possibleConstructorReturn2(this, (AutosizeInput3.__proto__ || Object.getPrototypeOf(AutosizeInput3)).call(this, props));
      _this.inputRef = function(el) {
        _this.input = el;
        if (typeof _this.props.inputRef === "function") {
          _this.props.inputRef(el);
        }
      };
      _this.placeHolderSizerRef = function(el) {
        _this.placeHolderSizer = el;
      };
      _this.sizerRef = function(el) {
        _this.sizer = el;
      };
      _this.state = {
        inputWidth: props.minWidth,
        inputId: props.id || generateId(),
        prevId: props.id
      };
      return _this;
    }
    _createClass2(AutosizeInput3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        this.copyInputStyles();
        this.updateInputWidth();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.inputWidth !== this.state.inputWidth) {
          if (typeof this.props.onAutosize === "function") {
            this.props.onAutosize(this.state.inputWidth);
          }
        }
        this.updateInputWidth();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "copyInputStyles",
      value: function copyInputStyles() {
        if (!this.mounted || !window.getComputedStyle) {
          return;
        }
        var inputStyles = this.input && window.getComputedStyle(this.input);
        if (!inputStyles) {
          return;
        }
        copyStyles(inputStyles, this.sizer);
        if (this.placeHolderSizer) {
          copyStyles(inputStyles, this.placeHolderSizer);
        }
      }
    }, {
      key: "updateInputWidth",
      value: function updateInputWidth() {
        if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === "undefined") {
          return;
        }
        var newInputWidth = void 0;
        if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
          newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
        } else {
          newInputWidth = this.sizer.scrollWidth + 2;
        }
        var extraWidth = this.props.type === "number" && this.props.extraWidth === void 0 ? 16 : parseInt(this.props.extraWidth) || 0;
        newInputWidth += extraWidth;
        if (newInputWidth < this.props.minWidth) {
          newInputWidth = this.props.minWidth;
        }
        if (newInputWidth !== this.state.inputWidth) {
          this.setState({
            inputWidth: newInputWidth
          });
        }
      }
    }, {
      key: "getInput",
      value: function getInput() {
        return this.input;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.input.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.input.blur();
      }
    }, {
      key: "select",
      value: function select() {
        this.input.select();
      }
    }, {
      key: "renderStyles",
      value: function renderStyles() {
        var injectStyles = this.props.injectStyles;
        return isIE && injectStyles ? _react2.default.createElement("style", {dangerouslySetInnerHTML: {
          __html: "input#" + this.state.inputId + "::-ms-clear {display: none;}"
        }}) : null;
      }
    }, {
      key: "render",
      value: function render2() {
        var sizerValue = [this.props.defaultValue, this.props.value, ""].reduce(function(previousValue, currentValue) {
          if (previousValue !== null && previousValue !== void 0) {
            return previousValue;
          }
          return currentValue;
        });
        var wrapperStyle = _extends2({}, this.props.style);
        if (!wrapperStyle.display)
          wrapperStyle.display = "inline-block";
        var inputStyle3 = _extends2({
          boxSizing: "content-box",
          width: this.state.inputWidth + "px"
        }, this.props.inputStyle);
        var inputProps = _objectWithoutProperties2(this.props, []);
        cleanInputProps(inputProps);
        inputProps.className = this.props.inputClassName;
        inputProps.id = this.state.inputId;
        inputProps.style = inputStyle3;
        return _react2.default.createElement("div", {className: this.props.className, style: wrapperStyle}, this.renderStyles(), _react2.default.createElement("input", _extends2({}, inputProps, {ref: this.inputRef})), _react2.default.createElement("div", {ref: this.sizerRef, style: sizerStyle}, sizerValue), this.props.placeholder ? _react2.default.createElement("div", {ref: this.placeHolderSizerRef, style: sizerStyle}, this.props.placeholder) : null);
      }
    }]);
    return AutosizeInput3;
  }(react.Component);
  AutosizeInput2.propTypes = {
    className: _propTypes2.default.string,
    defaultValue: _propTypes2.default.any,
    extraWidth: _propTypes2.default.oneOfType([
      _propTypes2.default.number,
      _propTypes2.default.string
    ]),
    id: _propTypes2.default.string,
    injectStyles: _propTypes2.default.bool,
    inputClassName: _propTypes2.default.string,
    inputRef: _propTypes2.default.func,
    inputStyle: _propTypes2.default.object,
    minWidth: _propTypes2.default.oneOfType([
      _propTypes2.default.number,
      _propTypes2.default.string
    ]),
    onAutosize: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    placeholderIsMinWidth: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    value: _propTypes2.default.any
  };
  AutosizeInput2.defaultProps = {
    minWidth: 1,
    injectStyles: true
  };
  exports.default = AutosizeInput2;
});
var AutosizeInput = /* @__PURE__ */ getDefaultExportFromCjs(AutosizeInput_1);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i4 = 0; i4 < props.length; i4++) {
    var descriptor = props[i4];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _setPrototypeOf(o3, p4) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p5) {
    o4.__proto__ = p5;
    return o4;
  };
  return _setPrototypeOf(o3, p4);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = arguments[i4] != null ? arguments[i4] : {};
    if (i4 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _getPrototypeOf(o3) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o4) {
    return o4.__proto__ || Object.getPrototypeOf(o4);
  };
  return _getPrototypeOf(o3);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e4) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var noop = function noop2() {
};
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === "-") {
    return prefix + name;
  } else {
    return prefix + "__" + name;
  }
}
function classNames(prefix, state, className) {
  var arr = [className];
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function(i4) {
    return i4;
  }).map(function(i4) {
    return String(i4).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (Array.isArray(value))
    return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null)
    return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]);
  return _objectSpread2({}, innerProps);
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement;
  if (style.position === "fixed")
    return docEl;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return docEl;
}
function easeOutCubic(t4, b4, c4, d4) {
  return c4 * ((t4 = t4 / d4 - 1) * t4 * t4 + 1) + b4;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e4) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e4) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w$1 = typeof window !== "undefined" ? window : {};
if (w$1.addEventListener && w$1.removeEventListener) {
  w$1.addEventListener("p", noop, options);
  w$1.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function getMenuPlacement(_ref3) {
  var maxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, placement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, theme = _ref3.theme;
  var spacing2 = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight
  };
  if (!menuEl || !menuEl.offsetParent)
    return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (placement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (placement === "auto" || isFixedPosition) {
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing2.controlHeight, maxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (placement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(placement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p4) {
  return p4 === "auto" ? "bottom" : p4;
};
var menuCSS = function menuCSS2(_ref22) {
  var _ref3;
  var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _ref3 = {
    label: "menu"
  }, _defineProperty(_ref3, alignToControl(placement), "100%"), _defineProperty(_ref3, "backgroundColor", colors2.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius2), _defineProperty(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), _defineProperty(_ref3, "marginBottom", spacing2.menuGutter), _defineProperty(_ref3, "marginTop", spacing2.menuGutter), _defineProperty(_ref3, "position", "absolute"), _defineProperty(_ref3, "width", "100%"), _defineProperty(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /* @__PURE__ */ react.createContext({
  getPortalPlacement: null
});
var MenuPlacer = /* @__PURE__ */ function(_Component) {
  _inherits(MenuPlacer2, _Component);
  var _super = _createSuper(MenuPlacer2);
  function MenuPlacer2() {
    var _this;
    _classCallCheck(this, MenuPlacer2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };
    _this.getPlacement = function(ref) {
      var _this$props = _this.props, minMenuHeight = _this$props.minMenuHeight, maxMenuHeight = _this$props.maxMenuHeight, menuPlacement = _this$props.menuPlacement, menuPosition = _this$props.menuPosition, menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView, theme = _this$props.theme;
      if (!ref)
        return;
      var isFixedPosition = menuPosition === "fixed";
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll,
        isFixedPosition,
        theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement)
        getPortalPlacement(state);
      _this.setState(state);
    };
    _this.getUpdatedProps = function() {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement,
        maxHeight: _this.state.maxHeight
      });
    };
    return _this;
  }
  _createClass(MenuPlacer2, [{
    key: "render",
    value: function render2() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);
  return MenuPlacer2;
}(react.Component);
MenuPlacer.contextType = PortalPlacementContext;
var Menu = function Menu2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("menu", props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};
var menuListCSS = function menuListCSS2(_ref4) {
  var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight,
    overflowY: "auto",
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2,
    position: "relative",
    WebkitOverflowScrolling: "touch"
  };
};
var MenuList = function MenuList2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends({
    css: getStyles("menuList", props),
    className: cx({
      "menu-list": true,
      "menu-list--is-multi": isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5) {
  var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
  return {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px"),
    textAlign: "center"
  };
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("noOptionsMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--no-options": true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: "No options"
};
var LoadingMessage = function LoadingMessage2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("loadingMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--loading": true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: "Loading..."
};
var menuPortalCSS = function menuPortalCSS2(_ref6) {
  var rect = _ref6.rect, offset = _ref6.offset, position = _ref6.position;
  return {
    left: rect.left,
    position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /* @__PURE__ */ function(_Component2) {
  _inherits(MenuPortal2, _Component2);
  var _super2 = _createSuper(MenuPortal2);
  function MenuPortal2() {
    var _this2;
    _classCallCheck(this, MenuPortal2);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };
    _this2.getPortalPlacement = function(_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement);
      if (placement !== initialPlacement) {
        _this2.setState({
          placement
        });
      }
    };
    return _this2;
  }
  _createClass(MenuPortal2, [{
    key: "render",
    value: function render2() {
      var _this$props2 = this.props, appendTo = _this$props2.appendTo, children = _this$props2.children, className = _this$props2.className, controlElement = _this$props2.controlElement, cx = _this$props2.cx, innerProps = _this$props2.innerProps, menuPlacement = _this$props2.menuPlacement, position = _this$props2.menuPosition, getStyles = _this$props2.getStyles;
      var isFixed = position === "fixed";
      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }
      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset,
        position,
        rect
      };
      var menuWrapper = jsx("div", _extends({
        css: getStyles("menuPortal", state),
        className: cx({
          "menu-portal": true
        }, className)
      }, innerProps), children);
      return jsx(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /* @__PURE__ */ reactDom.createPortal(menuWrapper, appendTo) : menuWrapper);
    }
  }]);
  return MenuPortal2;
}(react.Component);
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : null,
    pointerEvents: isDisabled ? "none" : null,
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles("container", props),
    className: cx({
      "--is-disabled": isDisabled,
      "--is-rtl": isRtl
    }, className)
  }, innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref22) {
  var spacing2 = _ref22.theme.spacing;
  return {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px"),
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  };
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, className = props.className, cx = props.cx, innerProps = props.innerProps, isMulti = props.isMulti, getStyles = props.getStyles, hasValue = props.hasValue;
  return jsx("div", _extends({
    css: getStyles("valueContainer", props),
    className: cx({
      "value-container": true,
      "value-container--is-multi": isMulti,
      "value-container--has-value": hasValue
    }, className)
  }, innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, className = props.className, cx = props.cx, innerProps = props.innerProps, getStyles = props.getStyles;
  return jsx("div", _extends({
    css: getStyles("indicatorsContainer", props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};
var _templateObject;
var _ref2 = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
};
var Svg = function Svg2(_ref3) {
  var size = _ref3.size, props = _objectWithoutProperties(_ref3, ["size"]);
  return jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return {
    label: "indicatorContainer",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  };
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("dropdownIndicator", props),
    className: cx({
      indicator: true,
      "dropdown-indicator": true
    }, className)
  }, innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("clearIndicator", props),
    className: cx({
      indicator: true,
      "clear-indicator": true
    }, className)
  }, innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return {
    label: "indicatorSeparator",
    alignSelf: "stretch",
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, {
    css: getStyles("indicatorSeparator", props),
    className: cx({
      "indicator-separator": true
    }, className)
  }));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5) {
  var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return {
    label: "loadingIndicator",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  };
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : null,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
};
var LoadingIndicator = function LoadingIndicator2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles("loadingIndicator", props),
    className: cx({
      indicator: true,
      "loading-indicator": true
    }, className)
  }, innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};
var css$1 = function css2(_ref3) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return {
    label: "control",
    alignItems: "center",
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : null,
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  };
};
var Control = function Control2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, className = props.className, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef,
    css: getStyles("control", props),
    className: cx({
      control: true,
      "control--is-disabled": isDisabled,
      "control--is-focused": isFocused,
      "control--menu-is-open": menuIsOpen
    }, className)
  }, innerProps), children);
};
var groupCSS = function groupCSS2(_ref3) {
  var spacing2 = _ref3.theme.spacing;
  return {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends({
    css: getStyles("group", props),
    className: cx({
      group: true
    }, className)
  }, innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref22) {
  var spacing2 = _ref22.theme.spacing;
  return {
    label: "group",
    color: "#999",
    cursor: "default",
    display: "block",
    fontSize: "75%",
    fontWeight: "500",
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  };
};
var GroupHeading = function GroupHeading2(props) {
  var getStyles = props.getStyles, cx = props.cx, className = props.className;
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, ["data"]);
  return jsx("div", _extends({
    css: getStyles("groupHeading", props),
    className: cx({
      "group-heading": true
    }, className)
  }, innerProps));
};
var inputCSS = function inputCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    visibility: isDisabled ? "hidden" : "visible",
    color: colors2.neutral80
  };
};
var inputStyle = function inputStyle2(isHidden) {
  return {
    label: "input",
    background: 0,
    border: 0,
    fontSize: "inherit",
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: "inherit"
  };
};
var Input = function Input2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, innerProps = _objectWithoutProperties(_cleanCommonProps, ["innerRef", "isDisabled", "isHidden"]);
  return jsx("div", {
    css: getStyles("input", props)
  }, jsx(AutosizeInput, _extends({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var multiValueCSS = function multiValueCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return {
    label: "multiValue",
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    display: "flex",
    margin: spacing2.baseUnit / 2,
    minWidth: 0
  };
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref22) {
  var _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
  return {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? "ellipsis" : null,
    whiteSpace: "nowrap"
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return {
    alignItems: "center",
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused && colors2.dangerLight,
    display: "flex",
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", innerProps, children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, className = props.className, components2 = props.components, cx = props.cx, data = props.data, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(ClassNames, null, function(_ref6) {
    var css4 = _ref6.css, emotionCx = _ref6.cx;
    return jsx(Container, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css4(getStyles("multiValue", props)), cx({
          "multi-value": true,
          "multi-value--is-disabled": isDisabled
        }, className))
      }, innerProps),
      selectProps
    }, jsx(Label, {
      data,
      innerProps: {
        className: emotionCx(css4(getStyles("multiValueLabel", props)), cx({
          "multi-value__label": true
        }, className))
      },
      selectProps
    }, children), jsx(Remove, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css4(getStyles("multiValueRemove", props)), cx({
          "multi-value__remove": true
        }, className))
      }, removeProps),
      selectProps
    }));
  });
};
MultiValue.defaultProps = {
  cropWithEllipsis: true
};
var optionCSS = function optionCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "option",
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    ":active": {
      backgroundColor: !isDisabled && (isSelected ? colors2.primary : colors2.primary50)
    }
  };
};
var Option = function Option2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("option", props),
    className: cx({
      option: true,
      "option--is-disabled": isDisabled,
      "option--is-focused": isFocused,
      "option--is-selected": isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};
var placeholderCSS = function placeholderCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "placeholder",
    color: colors2.neutral50,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  };
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("placeholder", props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};
var css$1$1 = function css3(_ref3) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "singleValue",
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing2.baseUnit * 2, "px)"),
    overflow: "hidden",
    position: "absolute",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    top: "50%",
    transform: "translateY(-50%)"
  };
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles("singleValue", props),
    className: cx({
      "single-value": true,
      "single-value--is-disabled": isDisabled
    }, className)
  }, innerProps), children);
};
var components = {
  ClearIndicator,
  Control,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input,
  LoadingIndicator,
  Menu,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  Placeholder,
  SelectContainer,
  SingleValue,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
    arr2[i4] = arr[i4];
  }
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n4 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n4 === "Object" && o3.constructor)
    n4 = o3.constructor.name;
  if (n4 === "Map" || n4 === "Set")
    return Array.from(o3);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
    return _arrayLikeToArray(o3, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i4 = 0; i4 < newInputs.length; i4++) {
    if (!isEqual(newInputs[i4], lastInputs[i4])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var _ref = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, isDisabled = props.isDisabled, tabSelectsValue = props.tabSelectsValue, context = props.context;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, _props$focused = props.focused, focused = _props$focused === void 0 ? {} : _props$focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu") {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? "selected" : "focused").concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = react.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = react.useMemo(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, removedValue = ariaSelection.removedValue, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var onChangeProps = _objectSpread2({
        isDisabled: selected && isOptionDisabled3(selected),
        label: selected ? getOptionLabel4(selected) : ""
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, isOptionDisabled3, getOptionLabel4, messages]);
  var ariaFocused = react.useMemo(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused),
        isSelected,
        options: options2,
        context: focused === focusedOption ? "menu" : "value",
        selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, options2, selectValue]);
  var ariaResults = react.useMemo(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2]);
  var ariaGuidance = react.useMemo(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption),
        isMulti,
        isSearchable,
        tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  return jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && jsx(react.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext)));
};
var diacritics = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d4) {
  return d4.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var i$1 = 0; i$1 < diacritics.length; i$1++) {
  diacritic = diacritics[i$1];
  for (j$1 = 0; j$1 < diacritic.letters.length; j$1++) {
    diacriticToBase[diacritic.letters[j$1]] = diacritic.base;
  }
}
var diacritic;
var j$1;
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match) {
    return diacriticToBase[match];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify = _ignoreCase$ignoreAcc.stringify, trim = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
function DummyInput(_ref3) {
  _ref3.in;
  _ref3.out;
  _ref3.onExited;
  _ref3.appear;
  _ref3.enter;
  _ref3.exit;
  var innerRef = _ref3.innerRef;
  _ref3.emotion;
  var props = _objectWithoutProperties(_ref3, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);
  return jsx("input", _extends({
    ref: innerRef
  }, props, {
    css: /* @__PURE__ */ css({
      label: "dummyInput",
      background: 0,
      border: 0,
      fontSize: "inherit",
      outline: 0,
      padding: 0,
      width: 1,
      color: "transparent",
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(0)"
    }, "", "")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = react.useRef(false);
  var isTop = react.useRef(false);
  var touchStart = react.useRef(0);
  var scrollTarget = react.useRef(null);
  var handleEventDelta = react.useCallback(function(event, delta) {
    if (scrollTarget.current === null)
      return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave)
        onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave)
        onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, []);
  var onWheel = react.useCallback(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = react.useCallback(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = react.useCallback(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = react.useCallback(function(el) {
    if (!el)
      return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    if (typeof el.addEventListener === "function") {
      el.addEventListener("wheel", onWheel, notPassive);
    }
    if (typeof el.addEventListener === "function") {
      el.addEventListener("touchstart", onTouchStart, notPassive);
    }
    if (typeof el.addEventListener === "function") {
      el.addEventListener("touchmove", onTouchMove, notPassive);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = react.useCallback(function(el) {
    if (!el)
      return;
    if (typeof el.removeEventListener === "function") {
      el.removeEventListener("wheel", onWheel, false);
    }
    if (typeof el.removeEventListener === "function") {
      el.removeEventListener("touchstart", onTouchStart, false);
    }
    if (typeof el.removeEventListener === "function") {
      el.removeEventListener("touchmove", onTouchMove, false);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  react.useEffect(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e4) {
  e4.preventDefault();
}
function allowTouchMove(e4) {
  e4.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = react.useRef({});
  var scrollTarget = react.useRef(null);
  var addScrollLock = react.useCallback(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, []);
  var removeScrollLock = react.useCallback(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, []);
  react.useEffect(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var blurSelectInput = function blurSelectInput2() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2$1 = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(react.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel2(option) {
  return option.label;
};
var getOptionValue = function getOptionValue2(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$1$1,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel,
  getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: "0",
  tabSelectsValue: true
};
function toCategorizedOption(props, option, selectValue, index2) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel$1(props, option);
  var value = getOptionValue$1(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index: index2
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if (groupOrOption.options) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(function(categorizedOption) {
    return !!categorizedOption;
  });
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getOptionLabel$1 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue$1 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1)
    return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue$1(props, option);
  return selectValue.some(function(i4) {
    return getOptionValue$1(props, i4) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0)
    return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = /* @__PURE__ */ function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = "";
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue) {
      var action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "set-value";
      var option = arguments.length > 2 ? arguments[2] : void 0;
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti;
      _this.onInputChange("", {
        action: "set-value"
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(selectValue.filter(function(i4) {
          return _this.getOptionValue(i4) !== candidate;
        }), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), "select-option", newValue);
        } else {
          _this.setValue(newValue, "select-option");
        }
      } else {
        _this.ariaOnChange(newValue, {
          action: "select-option",
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i4) {
        return _this.getOptionValue(i4) !== candidate;
      });
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(_this.props.isMulti ? [] : null, {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;
      _this.onChange(newValue, {
        action: "pop-value",
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel$1(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue$1(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getElementId = function(element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled)
        return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
      event.stopPropagation();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.stopPropagation();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref22) {
      var touches = _ref22.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change"
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur"
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled)
        return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue)
            return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue)
              return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing)
            return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption)
              return;
            if (_this.isComposing)
              return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close"
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption)
            return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen)
            return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen)
            return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen)
            return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen)
            return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (isFocused && !isDisabled && prevProps.isDisabled || isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close"
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef)
        return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef)
        return;
      this.inputRef.blur();
    }
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti)
        return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length)
        return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length)
        return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0)
          nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1)
          nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      if (!this.props.theme) {
        return defaultTheme;
      }
      if (typeof this.props.theme === "function") {
        return this.props.theme(defaultTheme);
      }
      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0)
        return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue,
          selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
  }, {
    key: "startListeningComposition",
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener("compositionstart", this.onCompositionStart, false);
        document.addEventListener("compositionend", this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener("touchstart", this.onTouchStart, false);
        document.addEventListener("touchmove", this.onTouchMove, false);
        document.addEventListener("touchend", this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form;
      var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var commonProps = this.commonProps;
      var id2 = inputId || this.getElementId("input");
      var ariaAttributes = {
        "aria-autocomplete": "list",
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"]
      };
      if (!isSearchable) {
        return /* @__PURE__ */ react.createElement(DummyInput, _extends({
          id: id2,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex,
          form,
          value: ""
        }, ariaAttributes));
      }
      return /* @__PURE__ */ react.createElement(Input3, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id2,
        innerRef: this.getInputRef,
        isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex,
        form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state4 = this.state, selectValue = _this$state4.selectValue, focusedValue = _this$state4.focusedValue, isFocused = _this$state4.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ react.createElement(Placeholder3, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused
        }), placeholder);
      }
      if (isMulti) {
        var selectValues = selectValue.map(function(opt, index2) {
          var isOptionFocused = opt === focusedValue;
          return /* @__PURE__ */ react.createElement(MultiValue3, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key: "".concat(_this3.getOptionValue(opt)).concat(index2),
            index: index2,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e4) {
                e4.preventDefault();
                e4.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
        return selectValues;
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ react.createElement(SingleValue3, _extends({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ react.createElement(ClearIndicator3, _extends({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading)
        return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ react.createElement(LoadingIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ react.createElement(IndicatorSeparator3, _extends({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ react.createElement(DropdownIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal2 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen)
        return null;
      var render2 = function render3(props, id2) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id2);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /* @__PURE__ */ react.createElement(Option3, _extends({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ react.createElement(Group3, _extends({}, commonProps, {
              key: groupId,
              data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render2(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render2(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null)
          return null;
        menuUI = /* @__PURE__ */ react.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null)
          return null;
        menuUI = /* @__PURE__ */ react.createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ react.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ react.createElement(Menu3, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading,
          placement
        }), /* @__PURE__ */ react.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ react.createElement(MenuList3, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ react.createElement(MenuPortal2, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled)
        return;
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /* @__PURE__ */ react.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i4) {
            return /* @__PURE__ */ react.createElement("input", {
              key: "i-".concat(i4),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ react.createElement("input", {
            name,
            type: "hidden"
          });
          return /* @__PURE__ */ react.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ react.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state5 = this.state, ariaSelection = _this$state5.ariaSelection, focusedOption = _this$state5.focusedOption, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused, selectValue = _this$state5.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ react.createElement(LiveRegion, _extends({}, commonProps, {
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render2() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className = _this$props14.className, id2 = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ react.createElement(SelectContainer3, _extends({}, commonProps, {
        className,
        innerProps: {
          id: id2,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ react.createElement(Control3, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ react.createElement(ValueContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ react.createElement(IndicatorsContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue;
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var selectValue = cleanValue(value);
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props
      });
    }
  }]);
  return Select2;
}(react.Component);
Select.defaultProps = defaultProps;
var defaultProps$1 = {
  defaultInputValue: "",
  defaultMenuIsOpen: false,
  defaultValue: null
};
var manageState = function manageState2(SelectComponent) {
  var _class, _temp;
  return _temp = _class = /* @__PURE__ */ function(_Component) {
    _inherits(StateManager, _Component);
    var _super = _createSuper(StateManager);
    function StateManager() {
      var _this;
      _classCallCheck(this, StateManager);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== void 0 ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== void 0 ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== void 0 ? _this.props.value : _this.props.defaultValue
      };
      _this.onChange = function(value, actionMeta) {
        _this.callProp("onChange", value, actionMeta);
        _this.setState({
          value
        });
      };
      _this.onInputChange = function(value, actionMeta) {
        var newValue = _this.callProp("onInputChange", value, actionMeta);
        _this.setState({
          inputValue: newValue !== void 0 ? newValue : value
        });
      };
      _this.onMenuOpen = function() {
        _this.callProp("onMenuOpen");
        _this.setState({
          menuIsOpen: true
        });
      };
      _this.onMenuClose = function() {
        _this.callProp("onMenuClose");
        _this.setState({
          menuIsOpen: false
        });
      };
      return _this;
    }
    _createClass(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== void 0 ? this.props[key] : this.state[key];
      }
    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === "function") {
          var _this$props;
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render2() {
        var _this2 = this;
        var _this$props2 = this.props;
        _this$props2.defaultInputValue;
        _this$props2.defaultMenuIsOpen;
        _this$props2.defaultValue;
        var props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);
        return /* @__PURE__ */ react.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref3) {
            _this2.select = _ref3;
          },
          inputValue: this.getProp("inputValue"),
          menuIsOpen: this.getProp("menuIsOpen"),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp("value")
        }));
      }
    }]);
    return StateManager;
  }(react.Component), _class.defaultProps = defaultProps$1, _temp;
};
var arrayLikeToArray = createCommonjsModule(function(module) {
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
      arr2[i4] = arr[i4];
    }
    return arr2;
  }
  module.exports = _arrayLikeToArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var arrayWithoutHoles = createCommonjsModule(function(module) {
  function _arrayWithoutHoles2(arr) {
    if (Array.isArray(arr))
      return arrayLikeToArray(arr);
  }
  module.exports = _arrayWithoutHoles2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var iterableToArray = createCommonjsModule(function(module) {
  function _iterableToArray2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  module.exports = _iterableToArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var unsupportedIterableToArray = createCommonjsModule(function(module) {
  function _unsupportedIterableToArray2(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return arrayLikeToArray(o3, minLen);
    var n4 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n4 === "Object" && o3.constructor)
      n4 = o3.constructor.name;
    if (n4 === "Map" || n4 === "Set")
      return Array.from(o3);
    if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
      return arrayLikeToArray(o3, minLen);
  }
  module.exports = _unsupportedIterableToArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var nonIterableSpread = createCommonjsModule(function(module) {
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var toConsumableArray = createCommonjsModule(function(module) {
  function _toConsumableArray2(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }
  module.exports = _toConsumableArray2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var objectWithoutPropertiesLoose = createCommonjsModule(function(module) {
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i4;
    for (i4 = 0; i4 < sourceKeys.length; i4++) {
      key = sourceKeys[i4];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  module.exports = _objectWithoutPropertiesLoose2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var objectWithoutProperties = createCommonjsModule(function(module) {
  function _objectWithoutProperties2(source, excluded) {
    if (source == null)
      return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i4;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i4 = 0; i4 < sourceSymbolKeys.length; i4++) {
        key = sourceSymbolKeys[i4];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  module.exports = _objectWithoutProperties2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var taggedTemplateLiteral = createCommonjsModule(function(module) {
  function _taggedTemplateLiteral2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  module.exports = _taggedTemplateLiteral2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _typeof_1 = createCommonjsModule(function(module) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _typeof2(obj);
  }
  module.exports = _typeof2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var defineProperty = createCommonjsModule(function(module) {
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty2;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var index = manageState(Select);
var react_select_default = index;

// build/snowpack/pkg/timezone-soft.js
var t3 = function(t22, n22) {
  let e22 = Math.min(t22.length, n22.length);
  for (; e22 > 0; ) {
    const o22 = t22.slice(0, e22);
    if (o22 === n22.slice(0, e22))
      return o22;
    e22 -= 1;
  }
  return "";
};
var n3 = function(t22) {
  t22.sort();
  for (let n22 = 1; n22 < t22.length; n22++)
    t22[n22 - 1] === t22[n22] && t22.splice(n22, 1);
};
var e3 = function() {
  this.counts = {};
};
var o2 = {init: function(t22) {
  this.counts[t22] === void 0 && (this.counts[t22] = 0);
}, add: function(t22, n22) {
  n22 === void 0 && (n22 = 1), this.init(t22), this.counts[t22] += n22;
}, countOf: function(t22) {
  return this.init(t22), this.counts[t22];
}, highest: function(t22) {
  let n22 = [];
  const e22 = Object.keys(this.counts);
  for (let t32 = 0; t32 < e22.length; t32++) {
    const o22 = e22[t32];
    n22.push([o22, this.counts[o22]]);
  }
  return n22.sort(function(t32, n32) {
    return n32[1] - t32[1];
  }), t22 && (n22 = n22.slice(0, t22)), n22;
}};
Object.keys(o2).forEach(function(t22) {
  e3.prototype[t22] = o2[t22];
});
var s2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var i3 = s2.split("").reduce(function(t22, n22, e22) {
  return t22[n22] = e22, t22;
}, {});
var r3 = function(t22) {
  if (s2[t22] !== void 0)
    return s2[t22];
  let n22 = 1, e22 = 36, o22 = "";
  for (; t22 >= e22; t22 -= e22, n22++, e22 *= 36)
    ;
  for (; n22--; ) {
    const n32 = t22 % 36;
    o22 = String.fromCharCode((n32 < 10 ? 48 : 55) + n32) + o22, t22 = (t22 - n32) / 36;
  }
  return o22;
};
var u2 = function(t22) {
  if (i3[t22] !== void 0)
    return i3[t22];
  let n22 = 0, e22 = 1, o22 = 36, s22 = 1;
  for (; e22 < t22.length; n22 += o22, e22++, o22 *= 36)
    ;
  for (let e32 = t22.length - 1; e32 >= 0; e32--, s22 *= 36) {
    let o3 = t22.charCodeAt(e32) - 48;
    o3 > 10 && (o3 -= 7), n22 += o3 * s22;
  }
  return n22;
};
var c3 = ";";
var h3 = ":";
var f3 = ",";
var l3 = "!";
var d3 = 36;
var p3 = function(t22, n22) {
  let e22 = "", o22 = "";
  t22.isTerminal(n22) && (e22 += l3);
  const s22 = t22.nodeProps(n22);
  for (let i22 = 0; i22 < s22.length; i22++) {
    const u22 = s22[i22];
    if (typeof n22[u22] == "number") {
      e22 += o22 + u22, o22 = f3;
      continue;
    }
    if (t22.syms[n22[u22]._n]) {
      e22 += o22 + u22 + t22.syms[n22[u22]._n], o22 = "";
      continue;
    }
    let c22 = r3(n22._n - n22[u22]._n - 1 + t22.symCount);
    n22[u22]._g && c22.length >= n22[u22]._g.length && n22[n22[u22]._g] === 1 ? (c22 = n22[u22]._g, e22 += o22 + u22 + c22, o22 = f3) : (e22 += o22 + u22 + c22, o22 = "");
  }
  return e22;
};
var g3 = function(t22, n22) {
  if (t22.visited(n22))
    return;
  const e22 = t22.nodeProps(n22, true);
  for (let o22 = 0; o22 < e22.length; o22++) {
    const s22 = e22[o22], i22 = n22._n - n22[s22]._n - 1;
    i22 < d3 && t22.histRel.add(i22), t22.histAbs.add(n22[s22]._n, r3(i22).length - 1), g3(t22, n22[s22]);
  }
};
var a3 = function(t22, n22) {
  if (n22._n !== void 0)
    return;
  const e22 = t22.nodeProps(n22, true);
  for (let o22 = 0; o22 < e22.length; o22++)
    a3(t22, n22[e22[o22]]);
  n22._n = t22.pos++, t22.nodes.unshift(n22);
};
var y4 = function(t22) {
  t22.nodes = [], t22.nodeCount = 0, t22.syms = {}, t22.symCount = 0, t22.pos = 0, t22.optimize(), t22.histAbs = new e3(), t22.histRel = new e3(), a3(t22, t22.root), t22.nodeCount = t22.nodes.length, t22.prepDFS(), g3(t22, t22.root), t22.symCount = function(t32) {
    t32.histAbs = t32.histAbs.highest(d3);
    const n22 = [];
    n22[-1] = 0;
    let e22 = 0, o22 = 0;
    const s22 = 3 + r3(t32.nodeCount).length;
    for (let i22 = 0; i22 < d3 && t32.histAbs[i22] !== void 0; i22++)
      n22[i22] = t32.histAbs[i22][1] - s22 - t32.histRel.countOf(d3 - i22 - 1) + n22[i22 - 1], n22[i22] >= e22 && (e22 = n22[i22], o22 = i22 + 1);
    return o22;
  }(t22);
  for (let n22 = 0; n22 < t22.symCount; n22++)
    t22.syms[t22.histAbs[n22][0]] = r3(n22);
  for (let n22 = 0; n22 < t22.nodeCount; n22++)
    t22.nodes[n22] = p3(t22, t22.nodes[n22]);
  for (let n22 = t22.symCount - 1; n22 >= 0; n22--)
    t22.nodes.unshift(r3(n22) + h3 + r3(t22.nodeCount - t22.histAbs[n22][0] - 1));
  return t22.nodes.join(c3);
};
var m3 = new RegExp("[0-9A-Z,;!:|¦]");
var b3 = {insertWords: function(t22) {
  if (t22 !== void 0) {
    typeof t22 == "string" && (t22 = t22.split(/[^a-zA-Z]+/));
    for (let n22 = 0; n22 < t22.length; n22++)
      t22[n22] = t22[n22].toLowerCase();
    n3(t22);
    for (let n22 = 0; n22 < t22.length; n22++)
      t22[n22].match(m3) === null && this.insert(t22[n22]);
  }
}, insert: function(n22) {
  this._insert(n22, this.root);
  const e22 = this.lastWord;
  this.lastWord = n22;
  if (t3(n22, e22) === e22)
    return;
  const o22 = this.uniqueNode(e22, n22, this.root);
  o22 && this.combineSuffixNode(o22);
}, _insert: function(n22, e22) {
  let o22, s22;
  if (n22.length === 0)
    return;
  const i22 = Object.keys(e22);
  for (let r22 = 0; r22 < i22.length; r22++) {
    const u22 = i22[r22];
    if (o22 = t3(n22, u22), o22.length !== 0) {
      if (u22 === o22 && typeof e22[u22] == "object")
        return void this._insert(n22.slice(o22.length), e22[u22]);
      if (u22 === n22 && typeof e22[u22] == "number")
        return;
      return s22 = {}, s22[u22.slice(o22.length)] = e22[u22], this.addTerminal(s22, n22 = n22.slice(o22.length)), delete e22[u22], e22[o22] = s22, void this.wordCount++;
    }
  }
  this.addTerminal(e22, n22), this.wordCount++;
}, addTerminal: function(t22, n22) {
  if (n22.length <= 1)
    return void (t22[n22] = 1);
  const e22 = {};
  t22[n22[0]] = e22, this.addTerminal(e22, n22.slice(1));
}, nodeProps: function(t22, n22) {
  const e22 = [];
  for (const o22 in t22)
    o22 !== "" && o22[0] !== "_" && (n22 && typeof t22[o22] != "object" || e22.push(o22));
  return e22.sort(), e22;
}, optimize: function() {
  this.combineSuffixNode(this.root), this.prepDFS(), this.countDegree(this.root), this.prepDFS(), this.collapseChains(this.root);
}, combineSuffixNode: function(t22) {
  if (t22._c)
    return t22;
  let n22 = [];
  this.isTerminal(t22) && n22.push("!");
  const e22 = this.nodeProps(t22);
  for (let o3 = 0; o3 < e22.length; o3++) {
    const s22 = e22[o3];
    typeof t22[s22] == "object" ? (t22[s22] = this.combineSuffixNode(t22[s22]), n22.push(s22), n22.push(t22[s22]._c)) : n22.push(s22);
  }
  n22 = n22.join("-");
  const o22 = this.suffixes[n22];
  return o22 || (this.suffixes[n22] = t22, t22._c = this.cNext++, t22);
}, prepDFS: function() {
  this.vCur++;
}, visited: function(t22) {
  return t22._v === this.vCur || (t22._v = this.vCur, false);
}, countDegree: function(t22) {
  if (t22._d === void 0 && (t22._d = 0), t22._d++, this.visited(t22))
    return;
  const n22 = this.nodeProps(t22, true);
  for (let e22 = 0; e22 < n22.length; e22++)
    this.countDegree(t22[n22[e22]]);
}, collapseChains: function(t22) {
  let n22, e22, o22, s22;
  if (!this.visited(t22)) {
    for (e22 = this.nodeProps(t22), s22 = 0; s22 < e22.length; s22++)
      n22 = e22[s22], o22 = t22[n22], typeof o22 == "object" && (this.collapseChains(o22), o22._g === void 0 || o22._d !== 1 && o22._g.length !== 1 || (delete t22[n22], n22 += o22._g, t22[n22] = o22[o22._g]));
    e22.length !== 1 || this.isTerminal(t22) || (t22._g = n22);
  }
}, isTerminal: function(t22) {
  return !!t22[""];
}, uniqueNode: function(t22, n22, e22) {
  const o22 = this.nodeProps(e22, true);
  for (let s22 = 0; s22 < o22.length; s22++) {
    const i22 = o22[s22];
    if (i22 === t22.slice(0, i22.length))
      return i22 !== n22.slice(0, i22.length) ? e22[i22] : this.uniqueNode(t22.slice(i22.length), n22.slice(i22.length), e22[i22]);
  }
}, pack: function() {
  return y4(this);
}};
Object.keys(b3).forEach(function(t22) {
});
var j3 = function(t22, n22, e22) {
  const o22 = u2(n22);
  return o22 < t22.symCount ? t22.syms[o22] : e22 + o22 + 1 - t22.symCount;
};
var A3 = function(t22) {
  const n22 = {nodes: t22.split(";"), syms: [], symCount: 0};
  return t22.match(":") && function(t32) {
    const n32 = new RegExp("([0-9A-Z]+):([0-9A-Z]+)");
    for (let e22 = 0; e22 < t32.nodes.length; e22++) {
      const o22 = n32.exec(t32.nodes[e22]);
      if (!o22) {
        t32.symCount = e22;
        break;
      }
      t32.syms[u2(o22[1])] = u2(o22[2]);
    }
    t32.nodes = t32.nodes.slice(t32.symCount, t32.nodes.length);
  }(n22), function(t32) {
    const n32 = [], e22 = (o22, s22) => {
      let i22 = t32.nodes[o22];
      i22[0] === "!" && (n32.push(s22), i22 = i22.slice(1));
      const r22 = i22.split(/([A-Z0-9,]+)/g);
      for (let i32 = 0; i32 < r22.length; i32 += 2) {
        const u22 = r22[i32], c22 = r22[i32 + 1];
        if (!u22)
          continue;
        const h22 = s22 + u22;
        if (c22 === "," || c22 === void 0) {
          n32.push(h22);
          continue;
        }
        const f22 = j3(t32, c22, o22);
        e22(f22, h22);
      }
    };
    return e22(0, ""), n32;
  }(n22);
};
var O4 = function(t22) {
  const n22 = t22.split("|").reduce((t32, n32) => {
    const e32 = n32.split("¦");
    return t32[e32[0]] = e32[1], t32;
  }, {}), e22 = {};
  return Object.keys(n22).forEach(function(t32) {
    const o22 = A3(n22[t32]);
    t32 === "true" && (t32 = true);
    for (let n32 = 0; n32 < o22.length; n32++) {
      const s22 = o22[n32];
      e22.hasOwnProperty(s22) === true ? Array.isArray(e22[s22]) === false ? e22[s22] = [e22[s22], t32] : e22[s22].push(t32) : e22[s22] = t32;
    }
  }), e22;
};
var pckd = "Africa/Abidjan¦a2bouake,daloa,san ped1t0yamoussouk1;g,ogo;ro;b0frica/timbuktu;idjan,obo|Africa/Algiers¦a5b3c2dz,oran,s1t0;ebessa,iaret;etif,idi bel abbes;hlef,onstantine;a0iskra,lida,oumerdas;b ezzouar,tna;lg0nnaba;eria,iers|Africa/Cairo¦a4bani suwayf,c3damanhur,eg2giza,halw6i1kafr ad dawwar,luxor,new c3port said,qina,s0tanta,zagazig;hibin al kawm,ohag,uez;dku,smail6;!ypt;airo;l2s0;w0yut;an; 1exandr0;ia;fayyum,m0;a0inya;hallah al kubra,nsurah|Africa/El_Aaiun¦e0laayoune,western sahara;h,l aaiun|Africa/Ceuta¦ceuta0;!melilla|Africa/Accra¦a2gh1kumasi,ta0;koradi,male;!ana;ccra,tsiaman|Africa/Bissau¦b1g0;uinea b0w;issau|Africa/Nairobi¦africa7e2kisumu,m1na0thika,yt;irobi,kuru;ayotte,ombasa;. africa standard 3a0ldoret;st0t; africa0ern africa;! 0;time; eastern,/asmera|Africa/Monrovia¦l0monrov1;iber0r;ia|Africa/Tripoli¦a3benghazi,l1misrat4t0zawi2;arhuna,ripoli;ib0y;ya;l khums,z zawiy0;ah|Africa/Casablanca¦a9casablanca,f8kenit7m4oujda angad,rabat,sa2t0;angier,e0;ma5touan;fi,le0;! al jadida;a1ekn3o0;hammedia,rocco;!rrakesh;ra;es;gadir,l hoceima|Africa/Maputo¦beira,c4ma2na1quelimane,z0;imbabwe,w;ca1mpu1;puto,to0;la;entral africa time,himoio|Africa/Windhoek¦africa central,na0windhoek;!mibia0;! standard time|Africa/Lagos¦aYbWcVeUgTiPjOkaMlKmHnFoCport harcourt,sBuAw0zarG;. central africa6a5est0; 0ern1;africa1central0; africa;! 0;s2t3;rCst,t;! s0;tandard t0;ime;gep,muah5yo;a9hagamu,okoto;kFn1w0yo;er5o;do,itsha;g,iger0newi;ia;a0in5ubi;idugu0kurdi;ri;agos,ek0;ki;du0no,tsi0;na;imeEos;badan,jebu ode,k1l0seAwo;a orangun,esa,or6;eAi7ot ekp0;ene;ombe,usau;bute ikorodu,fon alaaye,nugu;alabar,hakwama;auchi,en0;in;b2do1frica western,ku0tani;re; ekiti;a,eoku1u0;ja;ta|Africa/Khartoum¦a6c5el 4k2ny3omdurm1port sud1s0wad medani;d,inga,ud0;an;ass0hartoum,osti;ala;dae2fasher,obeid;at,entral africa;d damaz0l qadarif;in|Africa/Juba¦juba,s0winejok;outh sudan,s|Africa/Sao_Tome¦s0;ao tome,t|Africa/Ndjamena¦chad,n0td;'d0d0;jamena|Africa/Tunis¦sfax,t0;n,unis0;!ia|Africa/Johannesburg¦africa southern,bEcAd9east londBjohannesHk7newcastDp6r5s2tembisa,uitenhage,v1w0za;elkom,itbank;anderbijlpark,ereeniging;ast,o0prings;uth africa0weto;! standard time;andBichards bay,oodepoort;aarl,ietermaritzAort elizabeth,retoria;lerk0ruger0;sdorp;iepsloot,urb5;a1enturi0;on;pe town,rletonvil0;le;enoni,loemfontein,o1rakp0;an;ks0tshabelo;burg|America/Argentina/Buenos_Aires¦argentina/buenos aires|America/Argentina/Cordoba¦a0;merica/0rgentina/c1;c0rosario;ordoba|America/Argentina/Salta¦argentina/salta|America/Argentina/Jujuy¦a0;meric0rgentin0;a/jujuy|America/Argentina/Tucuman¦argentina/tucuman|America/Argentina/Catamarca¦a0;merica/0rgentina/c1;argentina/comodrivadavia,c0;atamarca|America/Argentina/La_Rioja¦argentina/la rioja|America/Argentina/San_Juan¦argentina/san juan|America/Argentina/Mendoza¦a0;meric0rgentin0;a/mendoza|America/Argentina/San_Luis¦argentina/san luis|America/Argentina/Rio_Gallegos¦argentina/rio gallegos|America/Argentina/Ushuaia¦argentina/ushuaia|America/Barbados¦b0;arbados,b|America/La_Paz¦bo1cochabamba,la paz,oruro,s0;anta cruz de la sierra,ucre;!livia0t;! time|America/Noronha¦atlantic islands,brazil/den0fernando de noronha standard time,n0;oronha|America/Belem¦ananindeua,belem,macapa,par0;auapebas,á (east) amapá|America/Fortaleza¦ca2fortaleza,imperatriz,j1m0natal,sao luis,teresina;aracanau,ossoro;oao pessoa,uazeiro do norte;mpina grande,ucaia|America/Recife¦caruaru,jaboatao2olinda,p0recife;aulista,e0;rnambuco,trolina;! dos guararapes|America/Araguaina¦araguaina,palmas,tocantins|America/Maceio¦a0maceio;lagoassergipe,racaju|America/Bahia¦bahia,camacari,feira de santa0itabu0salvador,vitoria da conquista;na|America/Sao_Paulo¦a14b0Tc0Md0Je0Hf0Fg0Ahortol09i05j02l01mXnVosasco,pLriFs4ta3uber2v0;i0olta redon18;amao,la velha,tor14;a0Ml06;boao da ser00uba0Y;a2e1oroNu0;maLzano;rXte lago0L;nt4o 0;bernardo do campo,carl03jo0leopolLpaulo,vicE;ao de meriti,se0;! do0; rio p8s camp00;a 1o0; andDs;barbara d'oes0Nluz0Rmar0R;beirao 3o0;! 0;cla0de janei0g6ver7;ro;das nev07p0;reto;asso fun8e7iraci6lanalti0Mo4r0;aia g1esidente prud0;en0E;ran0;de;nta grossa,rto aleg0;re;caW;lotYtro0D;do;iteroi,ov0;aJo hamburgo;a1o0;gi das cruzSntes clarD;ri0ua;l05n6;imei2ondri06;acarei,oinville,u0;iz de fo0ndi9;ra;ndaia2patin1ta0;bor6pevi,quaquece1;ga;tuG;andW;o3ravat2uaru0;ja,lh0;os;ai;iQvernador valadarC;loria5oz do0ran2; iguacu;. south america Gast south ameri0mbu;ca;i0uque de caxi8;adema,vi0;noL;a1o0uriti2;ntagem,tI;choeiro de itapemirBmp1no3rapicui0scavel,xias do sul;ba;in1os dos goytacaz0;es;as;a9e5lumenau,r0;!a0st,t;silia1zil0;!/east;! 0;standard time;l1t0;im;ford roxo,o horizon0;te;rueri,uru;lvora4merica3na2parecida de goi0;an0;ia;polis;na;da|America/Campo_Grande¦campo grande,mato grosso do sul|America/Cuiaba¦cuiaba,mato grosso,varzea grande|America/Santarem¦pará (west),santarem|America/Porto_Velho¦porto velho,rondônia|America/Boa_Vista¦amazon1boa vista,central brazil0roraima;!ian0;! standard time|America/Manaus¦am0brazil/west,manaus;azonas (east),t|America/Eirunepe¦a0eirunepe;cre standard time,mazonas (west)|America/Rio_Branco¦a0brazil/a0rio branco;cre|America/Nassau¦b0nassau;ahamas,s|America/Belize¦b0;elize,z|America/St_Johns¦canada/newfoundland,n0st johns;d2ewfoundland0st,t;! 0;labrador (southeast),standard time;dt,t|America/Halifax¦a2canada/atlantic,halifax,n1p0;ei,rince edward island;ew brunswick,ova scotia;dt,st,tlantic0;! - ns (most areas) pe|America/Glace_Bay¦atlantic - ns (cape breton),glace bay|America/Moncton¦atlantic - new brunswick,moncton|America/Goose_Bay¦atlantic - labrador (most areas),goose bay|America/Blanc-Sablon¦ast - qc (lower north shore),blanc sablon|America/Toronto¦america/moBb9ca7eastern - onqc (most areas),gatineau,hamilAkitchener,l4m3nepe2o0quebec,richmond hill,toronto,vaugh2windsor;n5sh0tt0;awa;an;arkham,ississauga,o7;av7on0;don on0gueuil;tario;!nada0;!/eastern;arrie,ramp0;ton;ntre0;al|America/Nipigon¦nipigon|America/Thunder_Bay¦eastern - on (thunder bay),thunder bay|America/Iqaluit¦eastern - nu (most east areas),iqaluit|America/Pangnirtung¦eastern - nu (pangnirtung),pangnirtung|America/Atikokan¦atikokan,est - on (atikokan) nu (coral h)|America/Winnipeg¦c0m1winnipeg;anada/central,entral - on (west) m0;anitoba|America/Rainy_River¦central - on (rainy rft frances),rainy river|America/Resolute¦central - nu (resolute),resolute|America/Rankin_Inlet¦central - nu (central),rankin inlet|America/Regina¦c1regina,saskat0;c1oon;anada/saskatc0st - sk (most areas);hewan|America/Swift_Current¦cst - sk (midwest),swift current|America/Edmonton¦alberta,ca0edmonton,mountain - ab bc (e) sk (w);lgary,nada/mountain|America/Cambridge_Bay¦cambridge bay,mountain - nu (west)|America/Yellowknife¦mountain - nt (central),yellowknife|America/Inuvik¦inuvik,mountain - nt (west)|America/Creston¦creston,mst - bc (creston)|America/Dawson_Creek¦dawson creek,mst - bc (dawson crft st john)|America/Fort_Nelson¦fort nelson,mst - bc (ft nelson)|America/Whitehorse¦canada/yukon,pacific - yukon (south),whitehorse|America/Dawson¦dawson,pacific - yukon (north)|America/Vancouver¦b2canada/pacific,ladn1okanagan,pacific - bc (most areas),surrey,v0yukon;ancouv0ictor2;er;ritish columb0urnaby;ia|America/Santiago¦a7c4iquique,la pintana,puente alto,rancagua,san3t1v0;alparaiso,ina del mar;alca0emuco;!huano; bernardo,tiago;hile1l0oncepcion;!st,t;! (most areas),/continental;ntofagasta,rica|America/Punta_Arenas¦punta arenas,region of magallanes|America/Bogota¦armenGbBc7dosquebradas,floridablanca,i6m5neiva,p3s1v0;alledupar,illavicencio;anta marCincelejo,o0;acha,ledad;a0erei9opayan;lmi8sto;anizales,edellin,onterA;bague,taguei;a2o0ucu6;!lombia0st,t;! standard time;li,rtagena;arran3ello,ogo2u0;caramanga,enaventu0;ra;ta;cabermeja,quilla;ia|America/Costa_Rica¦c0;osta rica,r|America/Havana¦arroyo naranjo,b7c2diez de octubre,guantan9h1las tunas,pinar del rio,sant0;a clara,iago de cuba;avana,olguin;amaguey,i2u0;!ba0;! standard time;e0udad camilo cie0;nfueg1;ay1oyer0;os;amo|America/Curacao¦curacao,s0;t maarten,x|America/Santo_Domingo¦bella vista,do5la romana,san0; pedro de macoris,t0;iago de los caballeros,o domingo0;! 0;e0oe0;ste;!minican republic|America/Guayaquil¦cuenca,ec1guayaquil,ma0quito,santo domingo de los colorados;chala,nta;!uador0;! 0;(mainland),time|America/Cayenne¦cayenne,french guiana1gf0;!t;! time|America/Nuuk¦america/godthab,nuuk|America/Danmarkshavn¦danmarkshavn,national park (east coast)|America/Scoresbysund¦e1greenland eastern,scoresbysund0;!/ittoqqortoormiit;ast greenland1g0;st,t;! standard time|America/Thule¦thule0;!/pituffik|America/Guatemala¦g0mixco,villa nueva;t,uatemala|America/Guyana¦g0;eorgetown,uyana1y0;!t;! time|America/Tegucigalpa¦h0san pedro sula,tegucigalpa;n,onduras|America/Port-au-Prince¦c2p0;etionville,ort 0;au prince,de paix;arrefour,roix des bouquets|America/Jamaica¦j1k0new k0;ingston;amaica,m|America/Martinique¦m0;artinique,q|America/Mexico_City¦a0Gb0EcVduran09ecatepec de morel07guQhPiNjalis0Ileon de los alda03mInHoGpEqDs9t4uruap01v2x1yucat01za0;catec09pop00;alapa de enriqu0Ki0Gochimil0G;e0illahermosa;nustiano carranza,racruz;a3e7la1o0uxt00;luRnaZ;huac,l0quepaque,xcaY;nepantXpT;bas09maulip01pachuW;an0oledad de graciano sanch0C; luis potosi,t0;a maria chimal0iago de q1;huN;ueretaD;achuca de soFoza rica de6ue0;bPrto vallarZ;axaGjo de agua;aucalpan02icolas rome9uevo le01;agdalena contrerRexico3i1orel0x;ia,os;choFguel0; h3;! city,/general;rap5xtapalu9zta0;cSpalapa;idalJ;a1erre0stavo adolfo made0;ro;dalajara,naj0;ua0;to;eFhiCiudad Ao3u0;au1ernava0;ca;htemoc,titlan izcalli;a4l2yo0;ac0;an;i0onia del valle;ma;cChui0tzacoalc2;la;lopez mate0nezahualcoyotl;os;ap1lpancin0;go;as;laya,ntral 0;mexic0time;an,o;enito6uenavis0;ta;capulco3guascalientes,lvaro obreg2zcapotz0;al0;co;on; de0; juar0;ez|America/Cancun¦cancun,eastern standard time - quintana roo|America/Merida¦c0merida;ampeche,entral time - campecheyucatán|America/Monterrey¦c5g4mon3sa1t0victoria de durango;ampico,orreon;ltillo,n0; nicolas de los garza,ta catarina;clova,terrey;omez palacio,uadalupe;entral time - durango coahuilanuevo leóntamaulipas (most areas),iudad 0;apodaca,general escobedo,madero,victoria|America/Matamoros¦central time us - coahuilanuevo leóntamaulipas (us border),heroica m0m0nuevo laredo,reynosa;atamoros|America/Mazatlan¦culiac1los mochis,m0tepic;azatl0exico/bajasur,ountain time - baja california surnayaritsinaloa;an|America/Chihuahua¦chihuahua,m0;exic1ountain 0;mexico,standard time (mexico),time - chihuahua (most areas);an pacific standard time,o pacific|America/Ojinaga¦ciudad juarez,mountain time us - chihuahua (us border),ojinaga|America/Hermosillo¦ciudad obregon,hermosillo,mountain standard time - sonora,nogales|America/Tijuana¦america/e1e1mexic0pacific time us - baja california,tijuana;ali,o/bajanorte;nsenada|America/Bahia_Banderas¦bahia0central time - bahía de0; banderas|America/Managua¦man1ni0;!car0;agua|America/Panama¦pa0san miguelito;!nama|America/Lima¦arequiAc6huanc9i5juliaca,lima,p2sant1t0;acna,rujillo;a anita   los ficus,iago de sur5;e0iura,ucall7;!ru0t;! standard time;ca,quitos;allao,hi1us0;co;cl0mbote;ayo;pa|America/Miquelon¦m8p6s0;aint pierre1t0; pierre a3. pierre & miquelon s2;! 0;a1s0;tandard time;nd1;ierre0m; m0;iquelon|America/Puerto_Rico¦atlantic standard time,bayamon,p0;r,uerto rico|America/Asuncion¦asuncion,c3p0san lorenzo;araguay1y0;!st,t;! standard time;apiata,iudad del este|America/Paramaribo¦paramaribo,s0;r1uriname0;! time;!t|America/El_Salvador¦el1s0;an0oyapango,v; salvador|America/Grand_Turk¦grand turk,t0;c,urks and caicos|America/Port_of_Spain¦america/virg0port of spa0;in|America/New_York¦a0Pb0Mc0Fd0Ee0Af06g04hialeah,i01jZkYlexingtonXmTnMoKpIquHrDsAt7u5v3w0yonkers;ashington1est 0inston salem,orcD;raEvirgin03;! dc;ermont,irginia0;! beach;nited states,s0;!/0J;a0enne1he bronx,oleD;llaha0mpa;ssee;outh 1t0;. petersburg,aten3;bo0AcC;a2hode1ichmo04och0;ester; is01;lei2;eens,intana roo;ennsylvanMhiladelphMittsbur0rovidence;gh;hio,rlan0;do;ew3or1y0;!c;folk,th c0;aroliD; 0ark,port news;hampshiWje8york0;! staS;a1eads,i0;ami,chig1;ine,nhatt0ryLssachusetts;an;! fayetN;entucky,nox9;acks2e0;rsey;ndia1r0;on5;na;eorg0reensboro;ia;ayette1l0ort lauderda2;!orida;vil0;le;ast0dt,st; flatbush,ern0;! 0;(most areas),standard time;elawa9urham;ape coral,h3incinnati,leve1o0;lumbus,nnecticut;la0;nd;a0esapeake;rlot0ttanooga;te;altimo1o0rooklyn,uffalo;st3;re;kr1merica 0tlanta;eastern;on|America/Detroit¦detroit,eastern - mi (most areas),grand rapids,us/michigan|America/Kentucky/Louisville¦america0kentucky0;/louisville|America/Kentucky/Monticello¦kentucky/monticello|America/Indiana/Indianapolis¦americ0indian0us/east-indiana;a/indianapolis|America/Indiana/Vincennes¦indiana/vincennes|America/Indiana/Winamac¦indiana/winamac|America/Indiana/Marengo¦indiana/marengo|America/Indiana/Petersburg¦indiana/petersburg|America/Indiana/Vevay¦indiana/vevay|America/Chicago¦aVbScQdPfort worth,gOhNiLkZlImBn7o6plano,s3t1us/02wi0;chiFsconsV;ex0ulsa;!as;a0hreveport,ou4t 1;int 0n antonio;louGpaul;klahoWmaha,verland park;ashLe1or0;th dako7;braska,w 0;orleans,south me6;adisMe5i1o0;biHntgomery;lwaukee,nne1ss0;issippi,ouri;apol6so0;ta;mph4;aredo,i0ouisiana,ubb1;ncoln,ttle r0;ock;llino0owa,rving;is;oustAunts5;arland,rand prairie;allAes moines;dt,entral0hicago,orpus christi,st;! (most areas);aton rouge,rowns0;vil0;le;laba7m5r1ust0;in;k1lingt0;on;ans0;as;arillo,erica 0;central;ma|America/Indiana/Tell_City¦indiana/tell city|America/Indiana/Knox¦indiana/knox,us/indiana-starke|America/Menominee¦central - mi (wisconsin border),menominee|America/North_Dakota/Center¦north dakota/center|America/North_Dakota/New_Salem¦north dakota/new salem|America/North_Dakota/Beulah¦north dakota/beulah|America/Denver¦a1colorado springs,denver,el paso,m0navajo,salt lake,us/mountain;dt,ountain (most areas),st;lbuquerque,merica/shiprock,urora|America/Boise¦america mountain,boise,mountain0;! 0;- id (south) or (east),standard time|America/Phoenix¦a8c7g5idaho,m4n3phoenix,s2t1u0wyoming;s/a7tah;empe,ucson;cottsd3inaloa,onora;ayarit,ew mexico;aryv1esa,onta4st - arizona (except navajo);ilbert,lend0;ale;handler,olorado;rizo0;na|America/Los_Angeles¦aZbaXcVfRgarden grove,hOirviNlJmoGnFoCp8r7s0tacoma,us/00washington state;a1eattle,f,p0tocktPunrise manor;okaLringF;cramenFn0; 1ta 0;aPclariR;bernardiNdiego,fran0jo4;!cisco;ancho cucamonga,eLiver5;a0dt,ort5st;cific1radi0;se;! standard time;ak1cean0regDxnard;side;land;evada,orth las6;des1reno0; valley;to;a1o0;ng4s angeles;!s0; vegas;ne;enders1untington0; beach;on;onta2re0;mont,s0;no;na;a2hula vis0;ta;ja ca0kersfield;lifornia;merica 0naheim;pacific|America/Anchorage¦a0us/alaska;h4k4laska0nchorage;! 1n0;! s1;(most areas),s0;tandard time;dt,st|America/Juneau¦alaska - juneau area,juneau|America/Sitka¦alaska - sitka area,sitka|America/Metlakatla¦alaska - annette island,metlakatla|America/Yakutat¦alaska - y0y0;akutat|America/Nome¦alaska (west),nome|America/Adak¦a0hawaii standard time,us/aleutian;dak,leutian islands,merica/atka|America/Montevideo¦montevideo2u0;ruguay1y0;!st,t;! standard time|America/Caracas¦alto barinJbarIcCguaAm7p6san5turmeEv0;alencia,e0;!nezuela0t;! 0n;standard t0t0;ime; cristobal,ta teresa del tuy;eta4uerto la cruz;a0ucumpiz;raca0turin;ibo,y;ren8ti0;re;a4iudad 2o1u0;a,m2;ro;bolivar,guay0;ana;bim1rac1;in0quisimeto,uta;as|Asia/Dubai¦a4dubai,g2musaff1om0ras al khaim1sharj1;!an;ah;st,ulf0;! standard time;bu dhabi,jman|Asia/Kabul¦af1herat,jalalabad,ka0mazar e sharif;bul,ndahar;!ghanistan0t;! 0;standard t0t0;ime|Asia/Yerevan¦a0caucasus1yerevan;m,rmenia0;! standard time|Asia/Baku¦az0baku,ganja,lankaran,sumqayit;!erbaijan0t;! standard time|Asia/Dhaka¦asia/dacca,bDcBd9jess8khul7mymensingh,na4pa3ra2s1t0;angail,ungi;aid8hib4ylhet;jshahi,ng7;b3ltan,r naogaon;gar5r0t3;ayan0singdi;ganj;na;ore;haka,inaj0;pur;hattogram,o0;milla,x's bazar;a0d,ogra;gerhat,ngladesh0rishal;! standard time|Asia/Brunei¦b0;dt,n1runei0;! darussalam time;!t|Asia/Thimphu¦asia/thimbu,b0thimphu;hutan0t;! time|Asia/Shanghai¦0:3I;1:38;2:36;3:39;4:3C;a3Eb31c2Nd2He30f2Cg26h1Qji1Ek1Bl0Ym0Wn0Tordos,p0Pq0Lrizh10s08t01wSxLyEz5;aoCh6i5ouc3unyi;bo,go0;a7en6ouk2u5; c3h33maWzh2;g2Vj1Izh2;b1Ung5o3D;jiakou5zh2;! shi xuanhua qu;ya0z27;an9i7u5;ci,e18n5;c3fu;b4c9n5ya0;cZgk2;c3g5ji,t2S;j17qu1sh16zh2;i6uc5;ha0;a6n5uyi0;di,gt2Nh1Fi0pu,t2Nx13ya0;m17n5;!g5ni0t0Eya0;t1ya0;aBe9u5;h6so0w1Bx5zh2;i,ue;a5u;i,n;i0Hn5;sh1zh2;fang5nxi1;di1;a8i6ong5;chuans0XhDli02sh1;an5eli0;j4sh0Z;i6ng5;gu,sh1;an,hec1Wyu1zh2;anmi0hAi8u5;i5zh2;h5zh2;ua;c5pi0;hu1;a7en6i5uangya14;jiaz15qi,y1;gli,ya0zh0G;n6o5s0I;gu1xi0;g5t2;h1Rqiu,rKyu;i5uan1J;aFn5o14qih0N;g5huangdH;dGh1N;an0Ting7rc,u5;ti1yang5;! H;ding0QxZ;an5eijYingbo;ch5ji0ni0to0ya0;a0o0;entoug2ianRuda5;njU;aEi8u5;anc3o6qi5;ao;he,ya0;a7jPn5upansh01;fTxia 5yi;chengguanI;n0Do5;c3y5;a0u1;i0Wn5ohek2;g5zh2;fa0;ai6un5;mi0sh1;fe0yu1;'1aAe9l4n6u5xi;jCt0W;an,c3g5i0zh2;de5li0zh2;zhE;ya0;musi,n8o5xi0;j6z5;uo;ia0;g5shF;m7xi;aFeBkt,ohhot,u5;a6i0Dlan ergi,m5n1;en;i7ng5y4;ga0s5;hi;'1b8n1;bi,f7ga0ng5ze;sh5ya0;ui;ei;i7n5rb4;d1g5;u,zh2;c3k2l5;ar;a9u5;an6i5li;l4ya0zh2;g5k2;do0yu1zh2;nsu,opi0;en7o6u5;ji1shQx4zh2;sh1;d2g5;hua0;a6eNong5;gu1hT;d6lian5ndo0qi0to0;!g;o5uk2;nghP;angHh5n,t;aAen7i5oYuG;fe0na5;! standard K;g5zh2;d5zho0;e,u;ng6o5;ya0zh2;ch7de,sh6zh5;i,ou;a,u;un;zh2;aBe5;i6n5;gbu,xi;'1h7jing5;! 5;time;ai;i7o5yan nur;di0t2;ou;c3sh1y4;an;he0;nAsia/5;ch6harb4;in;o5ungki0;ng5;qi0;da,qi0sh5ya0;an,un;ng|Asia/Urumqi¦a6changji,huoche5k3shihezi,turp2urumqi,xin1zh0;anjia4ongsh1;jiang time,yu0;an;a0orla;ramay,s2;ng;ksu,ral,sia/kas0;hgar|Asia/Nicosia¦cy0nicosia;!prus0;! (most areas)|Asia/Famagusta¦famagusta,northern cyprus|Asia/Tbilisi¦ge1kuta0tbil0;isi;!orgia0t;! 1n0;! 0;standard time|Asia/Hong_Kong¦h0kowloon,tsuen wan;k2ong0; kong0kong;! standard time;!st|Asia/Jakarta¦bScQdepPiNjKkediri,lJmGpArengasdengklPs4t2w0yogyakM;est0ib; indonesia,ern indonesia time;a0egal;n4sikmal3;ema4itubondo,outh tan3u0;kabumi,medaRra0;b0kF;aya;ge0;raN;a4e1robolinggo,urw0;akAokerto;ka1ma0rcut;laJtangsiantar;long2nbaru;daHl3mulaHruH;a1ed0;an;diun,laE;embaD;a0ember;k0mbi,vasumatra;arta;d,ndonesia0;! western;ok;i0urug;ampea,bino5leungsir,mahi,putat,rebon;a1e0injai,ogor;kasi,ngkulu;nd0tam;a0u1; aceh,r lampu0;ng|Asia/Pontianak¦borneo (westcentral),pontianak,tanjung pinang|Asia/Makassar¦b6c4denpa3indonesia central,k2l1ma0palu,samarinda,wita;kas2nado,taram;abuan bajo,oa jan7;endari,upang;sar;entral indonesia0ity of bal3;! time;a0orneo (eastsouth) sulawesi/celebesbalinusa tengarra timor (west);l0njarmasin;ikpap0;an|Asia/Jayapura¦ambon,east0indonesia eastern,jayapura,new guinea (west papua / irian jaya) malukus/moluccas,wit; indonesia,ern indonesia time|Asia/Jerusalem¦ashdod,beersheba,haifa,i2j0petah tiqwa,rishon leziyyon,tel aviv,west je1;e0mt;rusalem;d1l,srael0;! standard time;dt,t|Asia/Kolkata¦0:3C;1:3K;2:2D;3:3L;4:3I;5:38;a36b2Ec25d1Xe1Vf1Tg1Gh1Di19j14k0Ql0Lm0Dn06odis3KpWquthbull5rOsGtAu9v6warang2Nyamun1Q;a7el1Vi6;jayawa2Wsakha0IzianagD;doda2Prana12;daip0jja24lhasn1ttar pradesh;a9eYh8iru6umk0;chirap0Nnelve2p6vottiy0;a39p0;ane,iruvananthapur0Ooothuku2Zriss0;mb6njo1Y;ar0M;aCecunder4hAi9lst,o8r1Gu6;jan37r6;at,endr1D;l5nip2O;k3liguLngrau2rK;ahj20i6ri2Pya0M;mo1Nvaji08;har1Ylem,mbh25ng2t05ug0Z;a7e0Foh6;iJtak;ebare2iAj8m6nc1Htl0Burke37;ag6g6p0;und09;a6kot;hmund27sth2B;ch0p0;aAimp9roddat0u6;ducher24n6rn18;a6e;sa;ri;li,n8rbha7t6;ia2Vna;ni;chku2Ti6;ha2Gp22;a8e7izam4o6;i1Wwrang5;l0Tw del0Z;di2Kg8i0Fjaf2Fn6re2Oshik,vi mumb16;ded,g6;i,loi j1W;ercoil,p0;a9eerut,irz5o8u6yso0Z;lugu,mb11rwa1Jzaffar6;n1p0;nghyr,rad4;chili8d7harasht1Gleg08n6thu1Gu;ga0Jip0;hya,ur0W;patnH;a8u6;cknow,dhia6;na;l bahadur6t0; n1;aEhaCo9u6;kat7lt6rno1P;a2i;pal2;l6rXta,zhikode;h5ka1Kl6;am;nd6ragp0;wa;kina14l9marPnp0r6shmir,tih3;i7na6ol ba19;l,tW;mn1;lakuric04y12;a7han6odOunagadh;si;b0Sip0l7m6;mu,n1shedp0;andh3gHna;chalkaranji,mph0Jn6st;!d6;ia6o01;! standard time,n;a7is3ospet,u6;b2g2;o0Ip0ridw3;aDhazi4oAreater noi0Nu7wali6y05;or;jar0PlbarRnt0rg7wa6;ha12;aon;rak7sa6;ba;hp0;juw9n6ya;dh7g6;an1;in1;aka;ar6iroz4;id4rukh4;l6taw0M;loG;aBe9h7indigul,ombPurg6;!ap0;anb0Uul6;ia;hra dun,l6was;hi;rbhan6vange9;ga;a09h9o6uttack;ch7imbato6;re;in;a7enn6;ai;nd6pM;a6i0C;!nn1;aOeLhCiAor8rahm5u6;landshahr,rh6;anp0;iv2;li;d3har sharif,j5kan07l6;asp0imoD;aBi8op7u6;baneshw3sav6;al;l7wan6;di,i;ai,wa7;g7ratp0tpa6vn1yand3;ra;alp0;l6ngaluru;gaum,la6;ry;hBli,r7thin6;da;a7ddham6eilly;an;n1s6;at;a7rai6;gh;ramp0;gQhmLizawl,jmKkoRlHmDnant5rrBs7urang4va6;di;ans8ia/ca6;lcut6;ta;ol;ah;ap0;arnath,batt0r6;ava6its3oA;ti;ur;appuz7i6lah4w3;garh;ha;er;adn1ed4;ab6;ad;ag3;ar;arta6ra;la|Asia/Baghdad¦a4ba3dihok,erbil,i2k1mosul,na0ramadi;jaf,sirB;arbala,irkuk,uwait;q,raq;ghdad,sr9;bu ghurayb,d diw6l 5rab0s sulaym6;! 3i0;a0c;!n0;! 0;standard time;amar2basrah al qadim2falluj2hill2kut,mawsil al jadid2;an0;iy0;ah|Asia/Tehran¦aRbNgorgXhamWiKkCmaBn8orumiy7pasragad branch,q4rasht,s2t1varam6yazd,za0;hedWnjW;abHehrV;a0hirSirjU;bzevar,nandEri,v3;a0om;rchak,zv0;in;eh;a0eyshabur;jaf0zar0;ab4;layer,shh3;a4erman3ho0;meyni sErram0wy;ab0sD;ad;!shah;h1r0;aj;riz;r0sfahC;!an0dt,st;! standard time;a2irjand,o0uk9;jnu0ruje0;rd;b3ndar abbas;b4hv3m2r1zads0;hahr;ak,dabil;ol;az;ad0;an|Asia/Amman¦amm1irbid,jo0russeifa,wadi as sir,zarqa;!rd0;an|Asia/Tokyo¦0:11;1:19;a17ch15fu0Ygifu13h0Ni0Hj0EkYmSnLoJsEt8u7waka04y2;a5o2;k2no;kaic1Ao2;ha0Xsu0;maJo;ji,tsun0E;aka6o2sukuba;k4makom04y2;a0So2;hNna0ta;oro02us0Pyo04;m0Irazu0sa1tsu1;a4endZhi3o0u2;i0Yzu0;monose1zuo0;ita0Lk2ppoKsebo;ai,u05;dawa04i0Uka2sa0t0D;ya0Iza1;a5eyaga0Oi2umazu;i3shi2; tokyo0Hnomiya ha0F;ga0P;g2ha,ra0F;a2oW;no,o0sa1;a4i2orio0;na2to,yaza1;mirinkan,to;chiCeb3tsu2;do,m7ya06;as0H;aAi8o6u2y5;mam4r3shi2;ro;ashi1e,uG;oto;be,c0Bfu,ri2shigaJ;yaY;shiwa2takyushu;da;gosUkogawacho honmJmirenjaku,na7s4wa2;g2sa1;oe,uc05;hiZu2;g2kabe;ai;zaW;apan2dt,oetIp,st;! standard ti2;me;bara1chi3ta2wa1zu2;mi;ha4n2;omi2;ya;ra;a7i2oncho;meAr3t2;acP;a3os2;a1hiB;kaLtsu0;chi4kodate,mam2;at2;su;nohe,o2;ji;ji7ku2;i5o0s2ya3;hi2;ma;ka; sB;!sa5;i2ofu;ba,g4;geoshimo,k5mag3njo,omori,sahika2tsugi;wa;asa1;ki;as3i2;ta;hi|Asia/Bishkek¦bishkek,k0osh;g2yrgy0;stan,zstan0;! time;!t|Asia/Pyongyang¦chongjin,h5k3n2pyongya8s0won6;ariw0inui8unch'0;on;amp'o,orth korea;a0p;eso3nggye;a1ungnam,ye0;san;e1mhu0;ng;ju|Asia/Seoul¦anPbuMchHdaeGgChwaseoQiBjeAk7m6pohaFrok,s2u1wonJy0;aCeosu;ijeongbuPlsL;e1outh korea,u0;nEwH;joAo0;ngnamLul;asGokpo;imhae,orea0r,st,wangmyo7;! 0n 0;standard time;ju,on8;cCksBn6;angneu2oyaDu1wa0;ng5;mi,ns8riC;ng;gu,je4;angw3eon2in1un0;che2;ju;an,gju6;on;c1s0;an;heon2;san1ya0;ng0; si|Asia/Almaty¦a8central asia6east kazakhstan7k2nur sultan,p1s0taraz,ust kamenogorsk;emey,hymkent;avlodar,etropavl;a0z;ragandy,zakhstan0;! 0;(most areas),eastern;! standard0; time;lm0stana;aty,t|Asia/Qyzylorda¦kyzyl1qyzylorda0;!/kyzylorda/kzyl-0;orda|Asia/Qostanay¦k0q0;ostanay|Asia/Aqtobe¦a0;k1qt0;o1öbe/ak0;to0;be|Asia/Aqtau¦a1kazakhstan western,mangghystaū/mankis2west asia0;! standard3;lma1q0;tau; ata,-ata0; time|Asia/Atyrau¦atyra0;u,ū/atirau/gur'yev|Asia/Oral¦oral,west kazakhstan|Asia/Beirut¦bei2e1l0ra's bay2;b,ebanon;astern european standard time,urope eastern;rut|Asia/Colombo¦colombo,dehiwala mount lavinia,lk,moratuwa,sri lanka|Asia/Yangon¦asia/rango3b2kyain seikgyi township,m0nay pyi taw,pathein,sittwe,yang3;a0eiktila,m,onywa,yanmar;ndalay,wlamyine;ago,urma;on|Asia/Ulaanbaatar¦m2ula0;anbaatar0n bator,t;! standard time;n,ongolia0;! (most areas)|Asia/Hovd¦bayan-ölgiigovi-altaihovduvszavkhan,hov3w0;. mongolia 4est0; 0ern 0;mongolia;d0t;! 0;standard time|Asia/Choibalsan¦choibalsan,dornodsükhbaatar|Asia/Macau¦asia/macao,m0;acau,o|Asia/Kuala_Lumpur¦alor setar,bukit mertajEgeorge town,ipoh,johor bahDk8m4petali3s0taipiC;e1hah alDu0;ba1ngai petani;pa9remb7;ng jaya;ala0y;cca,ysia0;! 0;(peninsula),time;ampung baru suba3la3ota bha4ua0;la 1nt0;an;lumpur,terengganu;ng;ru;am|Asia/Kuching¦k2miri,s0tawau;a0ibu;bahsarawak,ndakan;ota kinabalu,uching|Asia/Kathmandu¦asia/kat3biratnagar,kath3n1p0;atan,okhara;epal,p0;!t;mandu|Asia/Manila¦an04bWcRdaPgeneral santOiMlJmCnaBoAp4quezIsan1ta0zamboanga;clobZguig,rlac,ytE; 1t0;a ro2ol;fernando,jose del monte,pab01;a3h1uerto prince0;sa;!ilippine0t; standard time,s;gadiRnalanoy,s0;ay,ig;longapo,rmoc;ga,votQ;a0eycauayN;balacat,gugpo poblaci4kati,l3n0;da1ila,silingLtamp0;ay;luyong,ue;ingDol6;on;a1egaspi,i0ucena;bertad,pa;pu lapu,s p4;l0mus;igCoiH;os;smar0v5;inB;a0ebu,otabato;b1gayan de oro,in5l0;amba,ooc6;anatu5uy0;ao;a4inan2u0;d0tu2;ta;!gon0;an;co1guio,tang0;as;lod,or;geles,tipo0;lo|Asia/Karachi¦bKchiniJdera ghaziHfaisalGgujraFhyderGislamGjhang sadr,kDlaCm7nawabshah,okaAp4quetta,ra3s0;a1h0ialkIukkM;ahkHekhupu8;ddiqDhiwal,rgodha;him yarDwalpindi;akistan1eshawar,k0;!t;! standard time;a3i1u0;lt9zaffar7;ngo0rpur khas;ra;lir cantonment,rd6;hore,rkana;a0otli;moke,rachi,s8;n5t;abad; kh0;an;ot;a1himber,ure0;wala;hawalp0ttagram;ur|Asia/Gaza¦gaza1p0;alestine,s;! strip|Asia/Hebron¦east jerusalem,hebron,west bank|Asia/Qatar¦ar rayyan,doha,qa0;!tar|Asia/Yekaterinburg¦chelyabin7eka5k4magnitogor7nizhn3or2perm,s1tyumen,ufa,yek0zlatoust;a4t;terlitamak,urgut;enburg,sk;evartov3y tagil;amensk ural'skiy,urgan;terinburg0;! standard time;sk|Asia/Omsk¦oms0;k0t;! standard time|Asia/Novosibirsk¦n0siber4;. central asia 4o0;rth central as2v0;osibirsk0t;! 1;ia;standard time|Asia/Barnaul¦b0;arnaul,iysk|Asia/Tomsk¦tomsk|Asia/Novokuznetsk¦kemerovo,novokuznet0prokop'yev0;sk|Asia/Krasnoyarsk¦kra0north asia1;snoyarsk0t;! standard time|Asia/Irkutsk¦angar2brat2irk0north asia east1ulan ude;t,utsk0;! standard time;sk|Asia/Chita¦chita|Asia/Yakutsk¦blagoveshchensk,yak0;t,utsk0;! standard time|Asia/Khandyga¦khandyga|Asia/Vladivostok¦k2vla0;divostok0t;! standard time;habarovsk0omsomolsk on amur;! vtoroy|Asia/Ust-Nera¦ust nera|Asia/Magadan¦mag0;adan0t;! standard time|Asia/Sakhalin¦sak0yuzhno sakhalinsk;halin0t;! standard time|Asia/Srednekolymsk¦chokurdakh,sre0;dnekolymsk0t;! standard time|Asia/Kamchatka¦kamchatka,pet0;ropavlovsk0t; kamchatsky,-kamchatski standard time|Asia/Anadyr¦ana0;dyr0t;! standard time|Asia/Riyadh¦a6burayd5dammam,ha4jedd5khamis mushait,me3najran,riyadh,sultan5ta2y0;anbu,e0;!men;'if,buk;cca,dina;'il,far al batin;ah;bha,l 0;hufuf,jubayl,kharj,mubarraz|Asia/Singapore¦s0woodlands;g1ingapore0;! standard time;!t|Asia/Damascus¦a4d3h2latak1sy0;!r0;ia;am2oms;amascus,eir ez zor;leppo,r raqq0;ah|Asia/Bangkok¦bangkok,ch8h6indochina3mueang nontha9na2pak kret,s0udon thani;amut prakan,e asia0i racha,outh east asia;! standard t3;khon ratchasima,m dinh;! 0;(most areas),t0;ime;a0ue;iphong,noi,t y2;iang m1on 0;buri;ai|Asia/Dushanbe¦dushanbe,t0;ajikistan1j0;!t;! time|Asia/Dili¦dili,east timor1tl0;!t;! time|Asia/Ashgabat¦as4t0;m2urkmen0;a3istan0;! standard time;!st,t;hga0ia/ashkhabad;bat|Asia/Taipei¦banqiao,h7k5roc,t0;a0w;i0oyu2;ch3n1pei0w1;! standard time;an;aohsi0eel0;ung;sinchu,ualien|Asia/Samarkand¦bukhara,nukus,qarshi,samarkand,uzbekistan 0;(west),standard time|Asia/Tashkent¦andij2namangan,qo`q2tashkent,uz0;!bekistan0t;! (east);on|Asia/Ho_Chi_Minh¦asia/saig4bien hoa,can tho,da 2ho chi minh,nha tr3qui nh4rach gia,sa dec,thi xa phu my,v0;ietnam0n,ung tau;! (south);lat,n0;ang;on|Atlantic/Bermuda¦b0;ermuda,m|Atlantic/Cape_Verde¦c0;a1v0;!t;bo verde,pe verde0;! standard time|Atlantic/Canary¦canary0las palmas de gran canaria,santa cruz de tenerife;! islands|Atlantic/Stanley¦f0stanley;alkland1k0;!st;! island0;!s0;! summer time|Atlantic/Faroe¦atlantic/faeroe,f0;aroe0o;! islands|Atlantic/South_Georgia¦gs,south georgia0;! time|Atlantic/Reykjavik¦i0reykjavik;celand,s|Atlantic/Madeira¦madeira0;! islands|Atlantic/Azores¦azo0hmt;res0st,t;! standard time|Australia/Lord_Howe¦australia/lhi,l0;h2ord howe0;! 0;island,standard time;dt,st|Australia/Hobart¦australia/1hobart,tasmania0;! (most areas);currie,tasmania|Australia/Melbourne¦australia/victoria,geelong,melbourne|Australia/Sydney¦au0c4new south wales (most areas),sydney,wollongong;!s0; east3tralia0;! eastern,/0n eastern 4;act,c0nsw;anberra;!ern0;! 0;standard time|Australia/Broken_Hill¦australia/yancowinna,broken hill,new south wales (yancowinna)|Australia/Brisbane¦a1brisbane,gold co3logan,queensland0townsville;! (most areas);e2ustralia0;/queensland,n e0;ast;dt,st|Australia/Lindeman¦lindeman,queensland (whitsunday islands)|Australia/Adelaide¦a2cen0south1;. australia 4tral0; australia;c3delaide,ustralia0; central,/south,n central0;! 0;standard time;dt,st|Australia/Darwin¦australia/north,darwin,northern territory|Australia/Perth¦a3perth,w0;. australia6est0; australia,ern australia0;! (most areas);ustralia1w0;dt,st; western,/west,n west0;!ern0; standard time|Australia/Eucla¦a0cw5eucla,western australia (eucla);cw6us0; central w2tralia0; centralwestern,n central western0;! 2;. 1e0;st;standard time;dt,st|Indian/Cocos¦c0;c3ocos0;! island0;!s0;! time;!t|Indian/Christmas¦c0;hristmas1x0;!t;! island0;! time|Indian/Chagos¦british indian ocean territory,c4i0;ndian 1o0;!t;c1ocean0;! time;hagos|Indian/Mauritius¦m0port louis;auritius1u0;!t;! standard time|Indian/Maldives¦m0;aldives1v0;!t;! time|Indian/Reunion¦r0;e1éunion0; time,crozetscattered islands;t,union|Indian/Mahe¦mahe,s0;c,eychelles0;! time|Indian/Kerguelen¦french southern2kerguelen1tf0;!t;!st paul islandamsterdam island;! 0;& antarctic time,and antarctic0;! lands|Europe/Andorra¦a0;d,ndorra|Europe/Tirane¦al1tiran0;a,e;!bania|Europe/Vienna¦a0donaustadt,favoriten,graz,linz,vienna;t,ustria|Europe/Brussels¦antwerpen,b0charleroi,gent,liege;e0russels;!lgium|Europe/Sofia¦b0plovdiv,sof2varna;g,u0;lgar0rgas;ia|Europe/Minsk¦b2h1m0viteb3;ahilyow,in2;omyel,rodna;abruy0elarus,rest,y;sk|Europe/Zurich¦geneve,li0swiss time,zurich;!echtenstein|Europe/Prague¦brno,ostrava,prague,s0;k,lovakia|Europe/Berlin¦a00bScQdOeMfrLgeJhaEkClAm4n3oberhaus04rostoBs1w0;andsbek,iesbad03uppert8;a0tuttgaL;arbrueck01xony;eue neustadt,uernbeY;a3e2iddle european,oenchengladba1u0;enst9ni0;ch;st,t;gdeSinz,nnheim,rienth0;al;eipzJuebe0;ck;a0iKoeln,rL;rlsruhe,ssJ;gPlle (saale),m1nnov0rM;er;burg0m;! 0;mitte,nord;lsenkirJrmany0;! (most areas);ankfurt am maDeiF;imsbuettArfu0ssH;rt;e,ortmund,resdFu0;esseldorf,isB;e0hemnitz;ntral europe,st,t;avaria,erl6iel5o2r0;aunschwe0emA;ig;chum0nn;! hord0;el;efeld;in;a2ltona,ugs0;bu0;rg;ch0;en|Europe/Copenhagen¦arhus,copenhagen,d0;enmark,k|Europe/Tallinn¦e0tallinn;e,stonia|Europe/Madrid¦aMbJcHeGfuenDgCjerez de la frontera,lBm8ovieFp6s1terrassa,v0zaragoza;alladol9igo;a1evilla,pain0;! (mainland);badell,n0; sebastian,t0; marti,ander,s montjuic;a0uente de vallecas;lma,mpD;a0ostolGurcF;dr0laga;id;atiEeganD;asteiz / vitorBijon,ran1;carral el par1labr0;ada;do;ixample,lche,s;a0iudad lineal;rabanchel,stello de la pla7;a0ilbao,urgos;da0rce0sque;lo4; coru3l0;cala de henar1icante,mer0;ia;es;na|Europe/Helsinki¦espoo,fi1helsinki,t0vantaa;ampere,urku;!nland|Europe/Paris¦bordeaux,ceDeurope central,frBl9m8n6paris,r3s0toulouE;aint 1t0; 0rasbourg;etienne;e1omance0;! A;ims,nn1;ant0i5ormandy;es;arsei1ontpellier;e havre,i0yon;lle;!an0;ce;ntral european 1rgy pontoi0;se;standard time|Europe/London¦a0Hb05c02dZeXgUhSiPjeOkingston upon hull,lJmHnBoxTp9reading,s1w0yF;arwick05igan,olverha7;heffield,o3t2u1w0;an4iH;ffolk,nderland,sUttM;afOoke on tre05;meUuth0;a1end on 0;sea;mptH;ly0orts0restG;mouth;ew4o0;r0ttinghamO;th0wD; y0amptonM;orkQ;castle upon tyne,port;ancheLi0;dlan4lton keynes;ancaMdn,e2i1o0ut6;nd5;ncolnKverP;e0icesterE;ds;!rsQ;psw1slingt0;on;ich;ampDert0;fordC;b1l0mt standard time;asgow,oucesterA;!-eA;dinburgh,s0urope/belI;sex;erby1o0udlF;rset;!sh5;a1ity of westmin0oventry,rawlC;ster;mbridge1rdiff;e8ir7lack5r2st,uckingham0;sh0;ire;adford,e1i0;st2tish;nt;po0;ol;kenhead,mingham;l1xl0;ey;fast;berdeen,rchway|Europe/Gibraltar¦gi0;!braltar|Europe/Athens¦athens,gr0thessaloniki;!eece|Europe/Budapest¦budapest,debrecen,hu0;!ngary|Europe/Dublin¦cork,dublin,eire,i0;e,reland|Europe/Rome¦b9c8florence,genoa,m7naples,p4rome,sicily,t2v0;a0eroA;!tican city;aran2rieste,u0;rin,scany;a1ra0;to;dova,lermo;essi3ilan;atan1orsica;ari,olog1resc0;ia;na|Europe/Vilnius¦k1l0vilnius;ithuania,t;aunas,laipeda|Europe/Luxembourg¦lu0;!xembourg|Europe/Riga¦e1kalt,l0riga;atvia,v;ast europe,e0;st,t|Europe/Monaco¦m0;c,onaco|Europe/Chisinau¦chisinau,europe/tiraspol,m0;d,oldova|Europe/Malta¦m0;alta,t|Europe/Amsterdam¦a3eindhov2groning2n1rot4t0utrecht;he hague,ilburg;etherlands,l;en;lmere stad,ms0;terdam|Europe/Oslo¦berg1oslo,s0;j,valbard and jan may0;en|Europe/Warsaw¦bDczestochowa,g9k7l5mokot8p3radFs2torun,w0zabrze;ars0rocl0;aw;osnowiec,zczec3;l,o0raga poludnie;land,znan;odz,ubl0;in;ato2iel3rak0;ow;d2li0;wi0;ce;ansk,ynia;i2y0;dgoszcz,t0;om;alystok,elsko biala|Europe/Lisbon¦amadora,europe western,lisbon,p2we0;st0t;! europe,ern european standard time;ort0t;o,ugal0;! (mainland)|Europe/Bucharest¦b3c2gala1iasi,oradea,ploies1ro0timisoara;!mania;ti;luj napoca,onstanta,raiova;ra0ucharest;ila,sov|Europe/Belgrade¦belgrade,n1pristina,s0;i,lovenia;is,ovi sad|Europe/Kaliningrad¦kaliningrad|Europe/Moscow¦ar0Cb09c06dzerzh05fet,grozn04ivano03kXlipet0EmQnMorel,pJrFs8t6v2w-su,y0zelenograd;a0oshkar oV;roslavl,sene01;asyl'evsky ostrHelikiLladi2o0ykhino zhulebS;l0ronezh;gograOogda;kavkaz,m07;a0uPver;ganrog,mbC;a4ever3hakhty,molen05ochi,t0yktyvkQ; 4a0;ryy osk0vrop0;ol;nRodvS;int 0rW;petersburg;ostov na donu,u1y0;azKbO;!ssia0;!n9;e1odolUsk0;ov;nza,trozavodS;a2izhn0ovorossiyR;ekamQi0;y novM;berezhnyye chelny,l'chik;a3dst,oscow1s0urmJ;d,k;! standar0;d time;khachka1r'0;ino;la;a2himki,ostroma,rasno0urG;d0gvargeisky;ar;l1z0;an;ininsk5uga;vo;yy;in8;entraln1he0;boksary,repovets;iy;el1ry0;an3;gorod;khangel'1mav0;ir;sk|Europe/Simferopol¦simferopol|Europe/Kirov¦kirov|Europe/Volgograd¦vol0;gograd,t,zhskiy|Europe/Astrakhan¦astrakhan|Europe/Saratov¦balakovo,saratov|Europe/Ulyanovsk¦ulyanovsk|Europe/Samara¦izhevsk,s0togliatti on the volga;am0yzran;ara0t;! standard time|Europe/Stockholm¦goeteborg,malmoe,s0;e,tockholm,weden|Europe/Istanbul¦a00bUcSdQeNgMiKkImDosmCs6t1u0v07zeytinburnu;eskuedYmrB;arsus,r3urkey0;! 0;standard t0t0;ime;!abzon,t;a3i1ultan0;beyJgazi;sIv0;as,erek;msun,n0;cakt5liurfa;aniye;a1er0uratpaH;kezefendi,sin;l0niF;atOt0;epe;a0irikkale,onMutahM;hramanmaras,rabaglFyseP;stanbul,zmi0;r,t;aziantep,ebze;lazig,rzurum,s0;en0kiC;l8yurt;eniz0iyarbakB;li;ankaCor0;lu,um;a1ur0;sa;gcil2hcelievl1likes5sak4t0;ikent,m9;er;ar;d5n2rnavutkoey,ta0;seh0;ir;kara,ta0;k0l0;ya;a1iyam0;an;na,paza0;ri|Europe/Kiev¦bila tserkHcherEdChorlBivano frankivDk7l6m4odessa,poltaHrivne,sumy,ternopil,u2vinnyts1z0;aporizhzh0hytomyr;ya;a,kraine0;! (most areas);a0ykolayB;ki5riupol;ut6v9;amyanske,h1iev,r0y8;emenchuk,opyv1yvyy rih;ark6erson,mel0;nytskyy;ivka;nipro,onet0;sk;kasy,ni0;h0vtsi;iv;va|Europe/Uzhgorod¦ruthenia,uzhgorod|Europe/Zaporozhye¦luhansk,sevastopol,zaporozh0;'ye/zaporizhia lugansk/luhansk (east),ye|Antarctica/Casey¦casey0;! time|Antarctica/Davis¦a1davis0;! time;ntarctica,q|Antarctica/DumontDUrville¦dumont0;-d0d1;'0’urville time;urville|Antarctica/Mawson¦mawson0;! time|Antarctica/Palmer¦chile standard time,palmer|Antarctica/Rothera¦rothera|Antarctica/Syowa¦syowa0;! time|Antarctica/Troll¦troll0;! research station|Antarctica/Vostok¦vost0;!ok0;! time|Antarctica/Macquarie¦macquarie0;! island|Pacific/Pago_Pago¦pa0samoamidway,us1;cific0go pago;/samoa|Pacific/Rarotonga¦c0rarotonga;k2ook0;! islands0;! standard time;!t|Pacific/Easter¦chile/easterisland,e0;as0mt;st,t0;!er0;! island0;! standard time|Pacific/Galapagos¦gal0;apagos,t,ápagos islands|Pacific/Fiji¦f0;iji1j0;!st,t;! standard time|Pacific/Chuuk¦chuuk1pacific/0;truk,y1;!/truky0;ap|Pacific/Pohnpei¦f3micro4p0;acific/1f,ohnpei0;!/0;ponape;m,rench poly0;nesia|Pacific/Kosrae¦kosrae0;! time|Pacific/Guam¦ch1guam,mp,northern mariana islands,west0; pacific1ern pacific;amorro0st;! standard time|Pacific/Tarawa¦gilbert islands0tarawa;! time|Pacific/Enderbury¦enderbury,phoenix islands0;! time|Pacific/Kiritimati¦ki3line islands0;! 0;standard t0t0;ime;!ri0;bati,timati0;! island|Pacific/Majuro¦m0;a0h;juro,rshall islands0;! (most areas)|Pacific/Kwajalein¦kwajalein,marshall islands time|Pacific/Noumea¦n0;c,ew caledonia0oumea;! standard time|Pacific/Nauru¦n0;auru0r;! time|Pacific/Niue¦n0;iue1u0;!t;! time|Pacific/Auckland¦auckland,christchurch,manukau,n0wellington;ew zealand1orth shore,z0;!dt,mt,st;! 0;standard t0t0;ime|Pacific/Chatham¦cha0nz-chat;dt,st,tham0;! 0;islands0s1;! s0;tandard time|Pacific/Tahiti¦society islands,tahiti0;! time|Pacific/Marquesas¦marquesas0;! 0;islands,standard t0t0;ime|Pacific/Gambier¦gambier0;! 0;islands,time|Pacific/Port_Moresby¦p0;apua new guinea0g,ort moresby;! (most areas)|Pacific/Bougainville¦bougainville,guinea0papua new guinea time;!n|Pacific/Pitcairn¦p0;itcairn0n;! time|Pacific/Palau¦p0;alau0w;! time|Pacific/Guadalcanal¦guadalcanal,s0;b,olomon0;! islands0;! time|Pacific/Fakaofo¦fakaofo,t0;k1okelau0;! time;!t|Pacific/Tongatapu¦nuku'alofa,to0;!nga0;! standard time,tapu|Pacific/Funafuti¦funafuti,t0;uvalu0v;! time|Pacific/Wake¦u2wake0;! island0;! time;m,s minor outlying islands|Pacific/Honolulu¦aleutian2h0pacific/johnston,us/hawaii;awaii0onolulu,st;! aleutian,-aleutian 1;! 0;standard time|Pacific/Efate¦efate,v0;anuatu0u;! standard time|Pacific/Wallis¦w0;allis0f;! 0;& futuna time,and futuna|Pacific/Apia¦apia,s2w0;est0s; samoa time,ern s0;amoa|ETC/GMT¦gmt|Etc/GMT¦coordinated universal1greenwich0;! mean0; time|Etc/UTC¦etc/uct,u0zulu;ct,niversal,tc|America/Argentina¦arNbKcHformosa,jGla EmBneuquen,pAquilmJr9sa1t0;ierra del fuego (tLucumán (tm);lta6n0; 2t0;a 0iago del estero;cruz (sc),fe;juan1luis0miguel de tucuman,salvador de jujuy;! (sl);! (sj);! (salpnqrn);esistencia,osario;araDilar,osadas;ar del p3e0oron;ndoza0rlo;! (mz);p0rioja (lr);lata;ose c paz,ujuy (jy);atamarca (ct) chubut (ch),or0;doba,rient0;es;ahia blanca,uenos aires0;! (bac0;f);!genti0;na|Australia/Currie¦tasmania (king island)|America/Godthab¦g3w0;est greenland1g0;st,t;! s3;l,reenland0;! 0;(most areas),s0western;tandard time|America/Kentucky¦eastern - ky (0louisville;louisville area),wayne)|America/Indiana¦central 3eastern - in (0fort wayne,indianapolis;crawfor1dadukmn),most areas),p0switzerlan1;i3ulaski);d);- in (0standard time;perry),star0;ke)|America/North_Dakota¦central - nd (0;m0oliv1;erc0orton rural);er)|Africa/Kinshasa¦c3ki2m0;a0bandaka;sina,tadi;kwit,nshasa;d,ongo|Africa/Luanda¦huambo,l0n'dalatando;obito,uanda|Africa/Addis_Ababa¦addis ababa,dire dawa,mek'ele,nazret|Africa/Dar_es_Salaam¦arusha,d1m0tanga,zanzibar;beya,orogoro,wanza;ar es salaam,odoma|Africa/Mogadishu¦berbera,hargeysa,jamaame,kismayo,m0;arka,ogadishu|Africa/Dakar¦dakar,pikine,t0;hies0ouba;! nones|Asia/Aden¦a0ibb,mukalla,sanaa,taiz;den,l hudaydah|Africa/Conakry¦c0;amayenne,onakry|Asia/Phnom_Penh¦ict,phnom penh,takeo|Africa/Harare¦bulawayo,chitungwiza,har0mut0;are|Indian/Antananarivo¦ant0toamasina;ananarivo,sirabe|Africa/Lubumbashi¦b3k2l1m0tshikapa;buji mayi,wene ditu;ikasi,ubumbashi;ananga,isanga1olwezi;e0ukavu;ni|Africa/Kampala¦kampala|Africa/Douala¦b1douala,edea,gar2kousseri,loum,m0ngaoundere,yaounde;ar1okolo;a1ert0;oua;foussam,menda|Africa/Bamako¦bamako|Africa/Brazzaville¦brazzaville,pointe noire|Africa/Lusaka¦k0lusaka,ndola;ab0it0;we|Africa/Ouagadougou¦bobo dioulasso,ouagadougou|Africa/Freetown¦freetown|Asia/Muscat¦muscat,seeb|Africa/Porto-Novo¦abomey calavi,coton0djoug0porto novo;ou|Africa/Niamey¦niamey,zinder|Africa/Lome¦lome|Africa/Kigali¦kigali|Europe/Zagreb¦split,zagreb|Europe/Sarajevo¦banja luka,sarajevo|Africa/Nouakchott¦nouakchott|Africa/Blantyre¦blantyre,lilongwe,mzuzu|Asia/Kuwait¦al ahmadi|Africa/Djibouti¦djibouti|Africa/Libreville¦libreville|Africa/Asmara¦asmara|Africa/Bangui¦bangui|Europe/Skopje¦skopje|Europe/Bratislava¦bratislava,kosice|Africa/Banjul¦serekunda|Africa/Bujumbura¦bujumbura|Europe/Ljubljana¦ljubljana|Europe/Podgorica¦podgorica|Africa/Gaborone¦gaborone|Asia/Vientiane¦vientiane|Asia/Saigon¦ho chi minh city|America/Port_Of_Spain¦vi0;!rgin islands|America/Port-au-prince¦h0;aiti,t|Pacific/Norfolk¦n0;f,orfolk 0;island0s1;! s0;tandard time|America/Buenos_Aires¦ar0;gentina standard time,st,t|Pacific/Midway¦s0;amoa standard time,dt,st|Asia/Katmandu¦nepal 0;standard t0t0;ime|Asia/Rangoon¦myanmar 0;standard t0t0;ime|Pacific/Truk¦chuuk time,truk|Pacific/Ponape¦ponape0;! time|America/Santa_Isabel¦mexico northwest,northwest mexico standard time,pacific 0;mexico,standard time (mexico)|Brazil/Acre¦act|Asia/Thimbu¦btt";
var misc = {
  "gmt+0": "etc/Gmt",
  "gmt-0": "etc/Gmt",
  gmt0: "etc/Gmt",
  "etc/gmt+0": "Etc/Gmt",
  "etc/gmt-0": "Etc/Gmt",
  "etc/gmt0": "Etc/Gmt",
  "msk-01 - kaliningrad": "Europe/Kaliningrad",
  "msk+00 - moscow area": "Europe/Moscow",
  "msk+00 - crimea": "Europe/Simferopol",
  "msk+00 - volgograd": "Europe/Volgograd",
  "msk+00 - kirov": "Europe/Kirov",
  "msk+01 - astrakhan": "Europe/Astrakhan",
  "msk+01 - saratov": "Europe/Saratov",
  "msk+01 - ulyanovsk": "Europe/Ulyanovsk",
  "msk+01 - samaraudmurtia": "Europe/Samara",
  "msk+02 - urals": "Asia/Yekaterinburg",
  "msk+03 - omsk": "Asia/Omsk",
  "msk+04 - novosibirsk": "Asia/Novosibirsk",
  "msk+04 - altai": "Asia/Barnaul",
  "msk+04 - tomsk": "Asia/Tomsk",
  "msk+04 - kemerovo": "Asia/Novokuznetsk",
  "msk+04 - krasnoyarsk area": "Asia/Krasnoyarsk",
  "msk+05 - irkutskburyatia": "Asia/Irkutsk",
  "msk+06 - zabaykalsky": "Asia/Chita",
  "msk+06 - lena river": "Asia/Yakutsk",
  "msk+06 - tomponskyust-maysky": "Asia/Khandyga",
  "msk+07 - amur river": "Asia/Vladivostok",
  "msk+07 - oymyakonsky": "Asia/Ust-Nera",
  "msk+08 - magadan": "Asia/Magadan",
  "msk+08 - sakhalin island": "Asia/Sakhalin",
  "msk+08 - sakha (e) north kuril is": "Asia/Srednekolymsk",
  "msk+09 - kamchatka": "Asia/Kamchatka",
  "msk+09 - bering sea": "Asia/Anadyr",
  "antarctica/south_pole": "Pacific/Auckland",
  "america/buenos_aires": "America/Argentina/Buenos_Aires",
  "america/coral_harbour": "America/Atikokan",
  "america/fort_wayne": "America/Indiana/Indianapolis",
  "america/knox_in": "America/Indiana/Knox",
  "america/porto_acre": "America/Rio_Branco",
  "america/santa_isabel": "America/Tijuana",
  "asia/tel_aviv": "Asia/Jerusalem",
  "asia/ujung_pandang": "Asia/Makassar",
  "asia/ulan_bator": "Asia/Ulaanbaatar",
  "atlantic/jan_mayen": "Europe/Oslo"
};
var isOffset = /(\-?[0-9]+)h(rs)?/i;
var isNumber = /(\-?[0-9]+)/;
var utcOffset = /utc([\-+]?[0-9]+)/i;
var gmtOffset = /gmt([\-+]?[0-9]+)/i;
var toIana = function(num) {
  num = Number(num);
  if (num > -13 && num < 13) {
    num = num * -1;
    num = (num > 0 ? "+" : "") + num;
    return "Etc/GMT" + num;
  }
  return null;
};
var parseOffset = function(tz) {
  let m22 = tz.match(isOffset);
  if (m22 !== null) {
    return toIana(m22[1]);
  }
  m22 = tz.match(utcOffset);
  if (m22 !== null) {
    return toIana(m22[1]);
  }
  m22 = tz.match(gmtOffset);
  if (m22 !== null) {
    let num = Number(m22[1]) * -1;
    return toIana(num);
  }
  m22 = tz.match(isNumber);
  if (m22 !== null) {
    return toIana(m22[1]);
  }
  return null;
};
var lexicon = O4(pckd);
lexicon = Object.assign(lexicon, misc);
Object.keys(lexicon).filter((k3) => {
  let val = lexicon[k3];
  if (typeof val === "string") {
    val = val.toLowerCase();
    if (lexicon[val] === void 0) {
      lexicon[val] = lexicon[k3];
    }
  }
});
var normalizeOne = (tz) => {
  tz = tz.replace(/^in /g, "");
  tz = tz.replace(/ time/g, "");
  tz = tz.replace(/ (standard|daylight|summer)/g, "");
  tz = tz.replace(/ - .*/g, "");
  tz = tz.replace(/, .*/g, "");
  return tz.trim();
};
var normalizeTwo = function(tz) {
  tz = tz.replace(/\b(east|west|north|south)ern/g, "$1");
  tz = tz.replace(/\b(africa|america|australia)n/g, "$1");
  tz = tz.replace(/\beuropean/g, "europe");
  tz = tz.replace(/\islands/g, "island");
  tz = tz.replace(/.*\//g, "");
  return tz.trim();
};
var normalizeThree = function(tz) {
  tz = tz.replace(/\(.*\)/, "");
  return tz.trim();
};
var find = function(str) {
  if (!str) {
    return null;
  }
  str = str.toLowerCase().trim();
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  if (/[0-9]/.test(str)) {
    let etc = parseOffset(str);
    if (etc) {
      return [etc];
    }
  }
  str = normalizeOne(str);
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  let tmp = str + " time";
  if (lexicon.hasOwnProperty(tmp)) {
    return lexicon[tmp];
  }
  tmp = str + " standard time";
  if (lexicon.hasOwnProperty(tmp)) {
    return lexicon[tmp];
  }
  str = normalizeTwo(str);
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  str = normalizeThree(str);
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  tmp = str + " time";
  if (lexicon.hasOwnProperty(tmp)) {
    return lexicon[tmp];
  }
  tmp = str + " standard time";
  if (lexicon.hasOwnProperty(tmp)) {
    return lexicon[tmp];
  }
  return null;
};
var metas = [
  {
    name: "India Time",
    abbr: null,
    aliases: [
      "india",
      "indian",
      "india standard time",
      "chennai",
      "kolkata",
      "mumbai",
      "new delhi"
    ],
    ids: ["Asia/Kolkata", "Asia/Calcutta", "Asia/Colombo"],
    std: {
      name: "India Standard Time",
      abbr: "IST",
      offset: 5.5
    },
    dst: {},
    long: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    hem: "n"
  },
  {
    name: "China Time",
    abbr: null,
    aliases: ["china", "china standard time", "beijing", "chongqing", "hong kong", "urumqi"],
    ids: ["Asia/Shanghai", "Asia/Macau", "Asia/Urumqi"],
    std: {
      abbr: "CST",
      name: "China Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    hem: "n"
  },
  {
    name: "Central European Time",
    abbr: null,
    aliases: [
      "europe central",
      "romance standard time",
      "brussels",
      "copenhagen",
      "madrid",
      "paris",
      "romance"
    ],
    ids: [
      "Europe/Paris",
      "Africa/Ceuta",
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Belgrade",
      "Europe/Berlin",
      "Europe/Bratislava",
      "Europe/Brussels",
      "Europe/Budapest",
      "Europe/Busingen",
      "Europe/Copenhagen",
      "Europe/Gibraltar",
      "Europe/Ljubljana",
      "Europe/Luxembourg",
      "Europe/Madrid",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Sarajevo",
      "Europe/Skopje",
      "Europe/Stockholm",
      "Europe/Tirane",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Warsaw",
      "Europe/Zagreb",
      "Europe/Zurich"
    ],
    std: {
      abbr: "CET",
      name: "Central European Standard Time",
      offset: 1
    },
    dst: {
      abbr: "CEST",
      name: "Central European Summer Time",
      offset: 2
    },
    long: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: [
      "America/Puerto_Rico",
      "America/Montserrat",
      "America/Port_of_Spain",
      "America/Santo_Domingo",
      "America/St_Barthelemy",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Tortola",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Kralendijk",
      "America/Lower_Princes",
      "America/Marigot",
      "America/Martinique",
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Curacao",
      "America/Dominica"
    ],
    std: {
      name: "Atlantic Standard Time",
      abbr: "AST",
      offset: -4
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Greenwich Mean Time",
    abbr: null,
    aliases: ["gmt", "zulu", "utc", "coordinated universal time"],
    ids: [
      "Etc/GMT",
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao_Tome",
      "America/Danmarkshavn",
      "Atlantic/Reykjavik",
      "Atlantic/St_Helena",
      "Etc/UTC"
    ],
    std: {
      name: "Greenwich Mean Time",
      abbr: "GMT",
      offset: 0
    },
    dst: {},
    long: "(UTC) Coordinated Universal Time",
    hem: "n"
  },
  {
    name: "Eastern European Time",
    abbr: null,
    aliases: ["europe eastern"],
    ids: [
      "Asia/Beirut",
      "Asia/Famagusta",
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    dst: {
      abbr: "EEST",
      name: "Eastern European Summer Time",
      offset: 3
    },
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: [
      "America/Indiana",
      "America/North_Dakota",
      "America/Belize",
      "America/Costa_Rica",
      "America/El_Salvador",
      "America/Guatemala",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Managua",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Regina",
      "America/Swift_Current",
      "America/Tegucigalpa"
    ],
    std: {
      name: "Central Standard Time",
      abbr: "CST",
      offset: -6
    },
    hem: "n"
  },
  {
    name: "Eastern Time",
    abbr: "ET",
    aliases: ["america eastern", "eastern standard time", "eastern"],
    ids: [
      "America/New_York",
      "America/Detroit",
      "America/Grand_Turk",
      "America/Indianapolis",
      "America/Iqaluit",
      "America/Louisville",
      "America/Nassau",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
      "America/Montreal",
      "America/Kentucky"
    ],
    std: {
      name: "Eastern Standard Time",
      abbr: "EST",
      offset: -5
    },
    dst: {
      name: "Eastern Daylight Time",
      abbr: "EDT",
      offset: -4
    },
    long: "(UTC-05:00) Eastern Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Argentina Time",
    abbr: "ART",
    aliases: ["argentina", "arst", "argentina standard time", "buenos aires"],
    ids: [
      "America/Buenos_Aires",
      "America/Argentina/La_Rioja",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza",
      "Antarctica/Rothera",
      "America/Argentina"
    ],
    std: {
      name: "Argentina Standard Time",
      abbr: "ART",
      offset: -3
    },
    dst: {},
    long: "(UTC-03:00) City of Buenos Aires",
    hem: "s"
  },
  {
    name: "",
    dupe: true,
    ids: [
      "America/Coral_Harbour",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Vevay",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Kentucky/Monticello",
      "America/Cancun",
      "America/Cayman",
      "America/Jamaica",
      "America/Panama"
    ],
    std: {
      name: "Eastern Standard Time",
      abbr: "EST",
      offset: -5
    },
    hem: "n"
  },
  {
    name: "East Africa Time",
    abbr: null,
    aliases: [
      "africa eastern",
      "e. africa standard time",
      "nairobi",
      "east africa",
      "eastern africa"
    ],
    ids: [
      "Africa/Nairobi",
      "Africa/Addis_Ababa",
      "Africa/Asmera",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Kampala",
      "Africa/Mogadishu",
      "Indian/Comoro",
      "Indian/Mayotte"
    ],
    std: {
      name: "East Africa Time",
      abbr: "EAT",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Nairobi",
    hem: "n"
  },
  {
    name: "West Africa Time",
    abbr: "WAT",
    aliases: [
      "africa western",
      "wast",
      "western africa",
      "w. central africa standard time",
      "west central africa",
      "w. central africa"
    ],
    ids: [
      "Africa/Lagos",
      "Africa/Bangui",
      "Africa/Douala",
      "Africa/Libreville",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo"
    ],
    std: {
      name: "West Africa Standard Time",
      abbr: "WAT",
      offset: 1
    },
    long: "(UTC+01:00) West Central Africa",
    hem: "n"
  },
  {
    name: "Moscow Time",
    abbr: null,
    aliases: ["moscow", "russian standard time", "st. petersburg", "russian", "volgograd time"],
    ids: [
      "Europe/Moscow",
      "Europe/Astrakhan",
      "Europe/Minsk",
      "Europe/Simferopol",
      "Europe/Ulyanovsk",
      "Europe/Kirov",
      "Europe/Volgograd",
      "Asia/Volgograd"
    ],
    std: {
      abbr: "MSK",
      name: "Moscow Standard Time",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Moscow, St. Petersburg",
    hem: "n"
  },
  {
    name: "Brasilia Time",
    abbr: null,
    aliases: ["brasilia", "e. south america standard time", "east south america"],
    ids: [
      "America/Sao_Paulo",
      "America/Araguaina",
      "America/Bahia",
      "America/Belem",
      "America/Fortaleza",
      "America/Maceio",
      "America/Recife",
      "America/Santarem"
    ],
    std: {
      abbr: "BRT",
      name: "Brasilia Standard Time",
      offset: -3
    },
    dst: {},
    long: "(UTC-03:00) Brasilia",
    hem: "s"
  },
  {
    name: "Mountain Time",
    abbr: "MT",
    aliases: ["america mountain", "mountain standard time", "mountain"],
    ids: [
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife"
    ],
    std: {
      name: "Mountain Standard Time",
      abbr: "MST",
      offset: -7
    },
    dst: {
      name: "Mountain Daylight Time",
      abbr: "MDT",
      offset: -6
    },
    long: "(UTC-07:00) Mountain Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Central Time",
    abbr: "CT",
    aliases: ["america central", "central standard time", "central"],
    ids: [
      "America/Chicago",
      "America/Matamoros",
      "America/Menominee",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg"
    ],
    std: {
      name: "Central Standard Time",
      abbr: "CST",
      offset: -6
    },
    dst: {
      name: "Central Daylight Time",
      abbr: "CDT",
      offset: -5
    },
    long: "(UTC-06:00) Central Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Central Africa Time",
    abbr: null,
    aliases: ["africa central", "namibia standard time", "windhoek", "namibia"],
    ids: [
      "Africa/Windhoek",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo"
    ],
    std: {
      name: "Central Africa Time",
      abbr: "CAT",
      offset: 2
    },
    dst: {},
    long: "(UTC+02:00) Windhoek",
    hem: "s"
  },
  {
    name: "Arabian Time",
    abbr: null,
    aliases: ["arabian", "arab standard time", "kuwait", "riyadh", "arab", "arabia", "arabic"],
    ids: ["Asia/Baghdad", "Asia/Aden", "Asia/Bahrain", "Asia/Kuwait", "Asia/Qatar", "Asia/Riyadh"],
    std: {
      abbr: "AST",
      name: "Arabian Standard Time",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Kuwait, Riyadh",
    hem: "n"
  },
  {
    name: "Alaska Time",
    abbr: "AKT",
    aliases: ["alaska", "alaskan standard time", "alaskan"],
    ids: [
      "America/Anchorage",
      "America/Juneau",
      "America/Metlakatla",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ],
    std: {
      name: "Alaska Standard Time",
      abbr: "AKST",
      offset: -9
    },
    dst: {
      name: "Alaska Daylight Time",
      abbr: "AKDT",
      offset: -8
    },
    long: "(UTC-09:00) Alaska",
    hem: "n"
  },
  {
    name: "Atlantic Time",
    abbr: "AT",
    aliases: ["atlantic", "atlantic standard time"],
    ids: [
      "America/Halifax",
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ],
    std: {
      name: "Atlantic Standard Time",
      abbr: "AST",
      offset: -4
    },
    dst: {
      name: "Atlantic Daylight Time",
      abbr: "ADT",
      offset: -3
    },
    long: "(UTC-04:00) Atlantic Time (Canada)",
    hem: "n"
  },
  {
    name: "British Time",
    abbr: null,
    aliases: ["gmt", "gmt standard time", "dublin", "edinburgh", "lisbon", "london"],
    ids: [
      "Europe/London",
      "Europe/Dublin",
      "Europe/Guernsey",
      "Europe/Isle_of_Man",
      "Europe/Jersey"
    ],
    std: {
      name: "Greenwich Mean Time",
      abbr: "GMT",
      offset: 0
    },
    dst: {
      name: "British Summer Time",
      abbr: "BST",
      offset: 1
    },
    long: "(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
    hem: "n"
  },
  {
    name: "Central Africa Time",
    dupe: true,
    ids: ["Africa/Blantyre", "Africa/Bujumbura", "Africa/Juba", "Africa/Khartoum", "Africa/Kigali"],
    std: {
      name: "Central Africa Time",
      abbr: "CAT",
      offset: 2
    },
    dst: {},
    hem: "n"
  },
  {
    name: "West Kazakhstan Time",
    abbr: null,
    aliases: [
      "kazakhstan western",
      "west asia standard time",
      "ashgabat",
      "tashkent",
      "west asia",
      "alma ata"
    ],
    ids: ["Asia/Aqtau", "Asia/Aqtobe", "Asia/Atyrau", "Asia/Oral", "Asia/Qyzylorda"],
    std: {
      abbr: "ALMT",
      name: "Alma-Ata Time",
      offset: 5
    },
    dst: {},
    long: "(UTC+05:00) Ashgabat, Tashkent",
    hem: "n"
  },
  {
    name: "Eastern Australia Time",
    abbr: "AET",
    aliases: [
      "australia eastern",
      "aus eastern standard time",
      "canberra",
      "melbourne",
      "sydney",
      "aus eastern",
      "aus east"
    ],
    ids: [
      "Australia/Sydney",
      "Antarctica/Macquarie",
      "Australia/Currie",
      "Australia/Hobart",
      "Australia/Melbourne"
    ],
    std: {
      name: "Australian Eastern Standard Time",
      abbr: "AEST",
      offset: 10
    },
    dst: {
      name: "Australian Eastern Daylight Time",
      abbr: "AEDT",
      offset: 11
    },
    long: "(UTC+10:00) Canberra, Melbourne, Sydney",
    hem: "s"
  },
  {
    name: "Western European Time",
    abbr: null,
    aliases: ["europe western"],
    ids: ["Europe/Lisbon", "Atlantic/Canary", "Atlantic/Faeroe", "Atlantic/Madeira"],
    std: {
      abbr: "WET",
      name: "Western European Standard Time",
      offset: 0
    },
    dst: {
      abbr: "WEST",
      name: "Western European Summer Time",
      offset: 1
    },
    hem: "n"
  },
  {
    name: "Indochina Time",
    abbr: null,
    aliases: [
      "indochina",
      "se asia standard time",
      "bangkok",
      "hanoi",
      "jakarta",
      "se asia",
      "south east asia"
    ],
    ids: ["Asia/Bangkok", "Asia/Phnom_Penh", "Asia/Saigon", "Asia/Vientiane"],
    std: {
      abbr: "ICT",
      name: "Indochina Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    abbr: "MT",
    std: {
      name: "Mountain Standard Time",
      abbr: "MST",
      offset: -7
    },
    ids: ["America/Phoenix", "America/Creston", "America/Dawson_Creek", "America/Fort_Nelson"],
    hem: "n"
  },
  {
    name: "Central Mexico Time",
    long: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    aliases: ["guadalajara", "mexico city", "monterrey", "central mexico", "central mexican"],
    ids: ["America/Mexico_City", "America/Merida", "America/Monterrey", "America/Bahia_Banderas"],
    std: {
      name: "Central Standard Time",
      abbr: "CST",
      offset: -6
    },
    dst: {
      name: "Central Daylight Time",
      abbr: "CDT",
      offset: -5
    },
    hem: "n"
  },
  {
    name: "West Africa Time",
    dupe: true,
    ids: ["Africa/Luanda", "Africa/Kinshasa", "Africa/Brazzaville"],
    std: {
      name: "West Africa Standard Time",
      abbr: "WAT",
      offset: 1
    },
    hem: "s"
  },
  {
    name: "",
    dupe: true,
    ids: ["Africa/Cairo", "Africa/Tripoli", "Europe/Kaliningrad"],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "South Africa Time",
    abbr: null,
    aliases: [
      "africa southern",
      "south africa standard time",
      "harare",
      "pretoria",
      "south africa"
    ],
    ids: ["Africa/Johannesburg", "Africa/Maseru", "Africa/Mbabane"],
    std: {
      name: "South Africa Standard Time",
      abbr: "SAST",
      offset: 2
    },
    dst: {},
    long: "(UTC+02:00) Harare, Pretoria",
    hem: "s"
  },
  {
    name: "Krasnoyarsk Time",
    abbr: null,
    aliases: ["krasnoyarsk", "north asia standard time", "north asia"],
    ids: ["Asia/Krasnoyarsk", "Asia/Novokuznetsk", "Asia/Barnaul"],
    std: {
      abbr: "KRAT",
      name: "Krasnoyarsk Standard Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Krasnoyarsk",
    hem: "n"
  },
  {
    name: "Yakutsk Time",
    abbr: null,
    aliases: ["yakutsk", "yakutsk standard time"],
    ids: ["Asia/Yakutsk", "Asia/Chita", "Asia/Khandyga"],
    std: {
      abbr: "YAKT",
      name: "Yakutsk Standard Time",
      offset: 9
    },
    dst: {},
    long: "(UTC+09:00) Yakutsk",
    hem: "n"
  },
  {
    name: "Pacific Time",
    abbr: "PT",
    aliases: ["america pacific", "pacific standard time", "pacific"],
    ids: ["America/Los_Angeles", "America/Tijuana", "America/Vancouver"],
    std: {
      name: "Pacific Standard Time",
      abbr: "PST",
      offset: -8
    },
    dst: {
      name: "Pacific Daylight Time",
      abbr: "PDT",
      offset: -7
    },
    long: "(UTC-08:00) Pacific Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Amazon Time",
    abbr: null,
    aliases: [
      "amazon",
      "central brazilian standard time",
      "cuiaba",
      "central brazilian",
      "central brazil"
    ],
    ids: ["America/Boa_Vista", "America/Manaus", "America/Porto_Velho"],
    std: {
      abbr: "AMT",
      name: "Amazon Standard Time",
      offset: -4
    },
    dst: {},
    long: "(UTC-04:00) Cuiaba",
    hem: "n"
  },
  {
    name: "Morocco Standard Time",
    offset: 1,
    long: "(UTC+00:00) Casablanca",
    aliases: ["casablanca", "morocco"],
    ids: ["Africa/Casablanca", "Africa/El_Aaiun"],
    std: {
      abbr: "WET",
      name: "Western European Standard Time",
      offset: 1
    },
    dst: {
      abbr: "WEST",
      name: "Western European Summer Time",
      offset: 0
    },
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: ["Africa/Algiers", "Africa/Tunis"],
    std: {
      abbr: "CET",
      name: "Central European Standard Time",
      offset: 1
    },
    dst: {
      abbr: "CEST",
      name: "Central European Summer Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: ["Asia/Gaza", "Asia/Hebron"],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: ["Asia/Damascus", "Asia/Amman"],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "Gulf Time",
    abbr: null,
    aliases: ["gulf", "arabian standard time", "abu dhabi", "muscat", "arabian"],
    ids: ["Asia/Dubai", "Asia/Muscat"],
    std: {
      name: "Gulf Standard Time",
      abbr: "GST",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Abu Dhabi, Muscat",
    hem: "n"
  },
  {
    name: "Samara Time",
    abbr: null,
    aliases: ["samara", "russia time zone 3", "izhevsk"],
    ids: ["Europe/Samara", "Europe/Saratov"],
    std: {
      abbr: "SAMT",
      name: "Samara Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Izhevsk, Samara",
    hem: "n"
  },
  {
    name: "Uzbekistan Time",
    abbr: null,
    aliases: ["uzbekistan"],
    ids: ["Asia/Samarkand", "Asia/Tashkent"],
    std: {
      abbr: "UZT",
      name: "Uzbekistan Standard Time",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "East Kazakhstan Time",
    abbr: null,
    aliases: ["kazakhstan eastern", "central asia standard time", "astana", "central asia"],
    ids: ["Asia/Almaty", "Asia/Qostanay"],
    std: {
      abbr: "ALMT",
      name: "East Kazakhstan Time",
      offset: 6
    },
    dst: {},
    long: "(UTC+06:00) Astana",
    hem: "n"
  },
  {
    name: "Omsk Time",
    abbr: null,
    aliases: ["omsk", "omsk standard time"],
    ids: ["Asia/Omsk", "Asia/Tomsk"],
    std: {
      abbr: "OMST",
      name: "Omsk Standard Time",
      offset: 6
    },
    dst: {},
    long: "(UTC+06:00) Omsk",
    hem: "n"
  },
  {
    name: "Western Indonesia Time",
    abbr: null,
    aliases: ["indonesia western"],
    ids: ["Asia/Jakarta", "Asia/Pontianak"],
    std: {
      name: "Western Indonesia Time",
      abbr: "WIB",
      offset: 7
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Ulaanbaatar Time",
    abbr: null,
    aliases: ["mongolia", "ulaanbaatar standard time", "ulaanbaatar"],
    ids: ["Asia/Ulaanbaatar", "Asia/Choibalsan"],
    std: {
      abbr: "ULAT",
      name: "Ulaanbaatar Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Ulaanbaatar",
    hem: "n"
  },
  {
    name: "Malaysia Time",
    abbr: null,
    aliases: ["malaysia"],
    ids: ["Asia/Kuala_Lumpur", "Asia/Kuching"],
    std: {
      name: "Malaysia Time",
      abbr: "MYT",
      offset: 8
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Korean Time",
    abbr: null,
    aliases: ["korea", "korea standard time", "seoul"],
    ids: ["Asia/Seoul", "Asia/Pyongyang"],
    std: {
      abbr: "KST",
      name: "Korean Standard Time",
      offset: 9
    },
    dst: {},
    long: "(UTC+09:00) Seoul",
    hem: "n"
  },
  {
    name: "Central Australia Time",
    abbr: "ACT",
    aliases: ["australia central", "cen. australia standard time", "adelaide", "central australia"],
    ids: ["Australia/Adelaide", "Australia/Broken_Hill"],
    std: {
      name: "Australian Central Standard Time",
      abbr: "ACST",
      offset: 9.5
    },
    dst: {
      name: "Australian Central Daylight Time",
      abbr: "ACDT",
      offset: 10.5
    },
    long: "(UTC+09:30) Adelaide",
    hem: "s"
  },
  {
    name: "Brisbane Time",
    dupe: true,
    ids: ["Australia/Brisbane", "Australia/Lindeman"],
    std: {
      name: "Australian Eastern Standard Time",
      abbr: "AEST",
      offset: 10
    },
    hem: "s"
  },
  {
    name: "Vladivostok Time",
    abbr: null,
    aliases: ["vladivostok", "vladivostok standard time"],
    ids: ["Asia/Vladivostok", "Asia/Ust-Nera"],
    std: {
      abbr: "VLAT",
      name: "Vladivostok Standard Time",
      offset: 10
    },
    dst: {},
    long: "(UTC+10:00) Vladivostok",
    hem: "n"
  },
  {
    name: "Chamorro Time",
    abbr: null,
    aliases: [
      "chamorro",
      "west pacific standard time",
      "guam",
      "port moresby",
      "west pacific",
      "western pacific"
    ],
    ids: ["Pacific/Guam", "Pacific/Saipan"],
    std: {
      name: "Chamorro Standard Time",
      abbr: "ChST",
      offset: 10
    },
    dst: {},
    long: "(UTC+10:00) Guam, Port Moresby",
    hem: "n"
  },
  {
    name: "Papua New Guinea Time",
    abbr: null,
    aliases: ["papua new guinea", "guinea", "guinean"],
    ids: ["Pacific/Bougainville", "Pacific/Port_Moresby"],
    std: {
      abbr: "PGT",
      name: "Papua New Guinea Time",
      offset: 11
    },
    dst: {},
    hem: "s"
  },
  {
    name: "New Zealand Time",
    abbr: "NZT",
    aliases: ["new zealand", "new zealand standard time", "auckland", "wellington"],
    ids: ["Pacific/Auckland", "Antarctica/McMurdo"],
    std: {
      name: "New Zealand Standard Time",
      abbr: "NZST",
      offset: 12
    },
    dst: {
      name: "New Zealand Daylight Time",
      abbr: "NZDT",
      offset: 13
    },
    long: "(UTC+12:00) Auckland, Wellington",
    hem: "s"
  },
  {
    name: "Marshall Islands Time",
    abbr: null,
    aliases: ["marshall islands"],
    ids: ["Pacific/Kwajalein", "Pacific/Majuro"],
    std: {
      abbr: "MHT",
      name: "Marshall Islands Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Samoa Time",
    abbr: "SST",
    aliases: ["samoa", "samoa standard time"],
    ids: ["Pacific/Midway", "Pacific/Pago_Pago"],
    std: {
      abbr: "SST",
      name: "Samoa Standard Time",
      offset: -11
    },
    dst: {},
    long: "(UTC+13:00) Samoa",
    hem: "n"
  },
  {
    name: "Hawaii-Aleutian Time",
    abbr: "HAT",
    aliases: ["hawaii aleutian", "aleutian standard time", "aleutian"],
    ids: ["Pacific/Honolulu", "Pacific/Johnston"],
    std: {
      name: "Hawaii-Aleutian Standard Time",
      abbr: "HAST",
      offset: -9
    },
    dst: {
      name: "Hawaii-Aleutian Daylight Time",
      abbr: "HADT",
      offset: -8
    },
    long: "(UTC-09:00) Aleutian Islands",
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    std: {
      name: "Mountain Standard Time",
      abbr: "MST",
      offset: -7
    },
    ids: ["America/Dawson", "America/Whitehorse"],
    hem: "n"
  },
  {
    name: "Mexican Pacific Time",
    abbr: "HPMX",
    aliases: [
      "mexico pacific",
      "mountain standard time (mexico)",
      "chihuahua",
      "la paz",
      "mazatlan",
      "mountain mexico"
    ],
    ids: ["America/Chihuahua", "America/Mazatlan"],
    std: {
      name: "Mexican Pacific Standard Time",
      abbr: "HNPMX",
      offset: -7
    },
    dst: {
      name: "Mexican Pacific Daylight Time",
      abbr: "HEPMX",
      offset: -6
    },
    long: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    hem: "n"
  },
  {
    name: "Colombia Time",
    abbr: "COT",
    aliases: ["colombia", "cost"],
    ids: ["America/Bogota", "Pacific/Galapagos"],
    std: {
      name: "Colombia Standard Time",
      abbr: "COT",
      offset: -5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Acre Time",
    abbr: null,
    aliases: ["acre"],
    ids: ["America/Eirunepe", "America/Rio_Branco"],
    std: {
      abbr: "ACT",
      name: "Acre Standard Time",
      offset: -5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: ["America/Campo_Grande", "America/Cuiaba"],
    std: {
      abbr: "AMT",
      name: "Amazon Standard Time",
      offset: -4
    },
    hem: "s"
  },
  {
    name: "",
    dupe: true,
    ids: ["Antarctica/Palmer", "America/Punta_Arenas"],
    std: {
      name: "Chile Standard Time",
      abbr: "CLT",
      offset: -3
    },
    hem: "s"
  },
  {
    name: "Troll Time",
    dupe: true,
    abbr: null,
    aliases: ["troll research station"],
    ids: ["Antarctica/Troll"],
    std: {
      name: "Greenwich Mean Time",
      abbr: "GMT",
      offset: 0
    },
    dst: {},
    hem: "s"
  },
  {
    name: "East Greenland Time",
    abbr: "HEG",
    aliases: ["greenland eastern"],
    ids: ["America/Scoresbysund"],
    std: {
      name: "East Greenland Standard Time",
      abbr: "HNEG",
      offset: 0
    },
    dst: {
      name: "East Greenland Summer Time",
      abbr: "HEEG",
      offset: 1
    },
    hem: "n"
  },
  {
    name: "Israel Time",
    abbr: null,
    aliases: ["israel", "israel standard time", "jerusalem"],
    ids: ["Asia/Jerusalem"],
    std: {
      abbr: "IST",
      name: "Israel Standard Time",
      offset: 2
    },
    dst: {
      name: "Israel Daylight Time",
      offset: 3
    },
    long: "(UTC+02:00) Jerusalem",
    hem: "n"
  },
  {
    name: "East Africa Time",
    dupe: true,
    ids: ["Indian/Antananarivo"],
    std: {
      name: "East Africa Time",
      abbr: "EAT",
      offset: 3
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Syowa Time",
    abbr: null,
    aliases: ["syowa"],
    ids: ["Antarctica/Syowa"],
    std: {
      abbr: "SYOT",
      name: "Syowa Time",
      offset: 3
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Turkey Time",
    abbr: "TRT",
    aliases: ["turkey", "turkey standard time", "istanbul"],
    ids: ["Europe/Istanbul"],
    std: {
      name: "Turkey Time",
      abbr: "TRT",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Istanbul",
    hem: "n"
  },
  {
    name: "Iran Time",
    abbr: null,
    aliases: ["iran", "iran standard time", "tehran"],
    ids: ["Asia/Tehran"],
    std: {
      abbr: "IRST",
      name: "Iran Standard Time",
      offset: 3.5
    },
    dst: {
      abbr: "IRDT",
      name: "Iran Daylight Time",
      offset: 4.5
    },
    long: "(UTC+03:30) Tehran",
    hem: "n"
  },
  {
    name: "Azerbaijan Time",
    abbr: null,
    aliases: ["azerbaijan", "azerbaijan standard time", "baku"],
    ids: ["Asia/Baku"],
    std: {
      abbr: "AZT",
      name: "Azerbaijan Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Baku",
    hem: "n"
  },
  {
    name: "Georgia Time",
    abbr: "GET",
    aliases: ["georgia", "georgian standard time", "tbilisi", "georgian"],
    ids: ["Asia/Tbilisi"],
    std: {
      abbr: "GET",
      name: "Georgia Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Tbilisi",
    hem: "n"
  },
  {
    name: "Armenia Time",
    abbr: "AMT",
    aliases: ["armenia", "caucasus standard time", "yerevan", "caucasus"],
    ids: ["Asia/Yerevan"],
    std: {
      abbr: "AMT",
      name: "Armenia Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Yerevan",
    hem: "n"
  },
  {
    name: "Seychelles Time",
    abbr: null,
    aliases: ["seychelles"],
    ids: ["Indian/Mahe"],
    std: {
      abbr: "SCT",
      name: "Seychelles Time",
      offset: 4
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Mauritius Time",
    abbr: null,
    aliases: ["mauritius", "mauritius standard time", "port louis"],
    ids: ["Indian/Mauritius"],
    std: {
      abbr: "MUT",
      name: "Mauritius Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Port Louis",
    hem: "n"
  },
  {
    name: "Réunion Time",
    abbr: null,
    aliases: ["reunion"],
    ids: ["Indian/Reunion"],
    std: {
      abbr: "RET",
      name: "Réunion Time",
      offset: 4
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Afghanistan Time",
    abbr: null,
    aliases: ["afghanistan", "afghanistan standard time", "kabul"],
    ids: ["Asia/Kabul"],
    std: {
      abbr: "AFT",
      name: "Afghanistan Time",
      offset: 4.5
    },
    dst: {},
    long: "(UTC+04:30) Kabul",
    hem: "n"
  },
  {
    name: "Mawson Time",
    abbr: null,
    aliases: ["mawson"],
    ids: ["Antarctica/Mawson"],
    std: {
      abbr: "MAWT",
      name: "Mawson Time",
      offset: 5
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Turkmenistan Time",
    abbr: "TMT",
    aliases: ["turkmenistan", "tmst"],
    ids: ["Asia/Ashgabat"],
    std: {
      name: "Turkmenistan Standard Time",
      abbr: "TMT",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tajikistan Time",
    abbr: null,
    aliases: ["tajikistan"],
    ids: ["Asia/Dushanbe"],
    std: {
      abbr: "TJT",
      name: "Tajikistan Time",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Pakistan Time",
    abbr: null,
    aliases: ["pakistan", "pakistan standard time", "islamabad", "karachi"],
    ids: ["Asia/Karachi"],
    std: {
      abbr: "PKT",
      name: "Pakistan Standard Time",
      offset: 5
    },
    dst: {},
    long: "(UTC+05:00) Islamabad, Karachi",
    hem: "n"
  },
  {
    name: "Yekaterinburg Time",
    abbr: "YEKT",
    aliases: ["yekaterinburg", "ekaterinburg standard time", "ekaterinburg"],
    ids: ["Asia/Yekaterinburg"],
    std: {
      abbr: "YEKT",
      name: "Yekaterinburg Standard Time",
      offset: 5
    },
    dst: {},
    long: "(UTC+05:00) Ekaterinburg",
    hem: "n"
  },
  {
    name: "French Southern & Antarctic Time",
    abbr: null,
    aliases: ["french southern"],
    ids: ["Indian/Kerguelen"],
    std: {
      abbr: "TFT",
      name: "French Southern & Antarctic Time",
      offset: 5
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Maldives Time",
    abbr: null,
    aliases: ["maldives"],
    ids: ["Indian/Maldives"],
    std: {
      abbr: "MVT",
      name: "Maldives Time",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Nepal Time",
    abbr: null,
    aliases: ["nepal", "nepal standard time", "kathmandu"],
    ids: ["Asia/Katmandu"],
    std: {
      abbr: "NPT",
      name: "Nepal Time",
      offset: 5.75
    },
    dst: {},
    long: "(UTC+05:45) Kathmandu",
    hem: "n"
  },
  {
    name: "Vostok Time",
    abbr: null,
    aliases: ["vostok"],
    ids: ["Antarctica/Vostok"],
    std: {
      abbr: "MSK+4",
      name: "Vostok Time",
      offset: 6
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Kyrgyzstan Time",
    abbr: null,
    aliases: ["kyrgystan"],
    ids: ["Asia/Bishkek"],
    std: {
      abbr: "KGT",
      name: "Kyrgyzstan Time",
      offset: 6
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Bangladesh Time",
    abbr: "BST",
    aliases: ["bangladesh", "bangladesh standard time", "dhaka"],
    ids: ["Asia/Dhaka"],
    std: {
      abbr: "BST",
      name: "Bangladesh Standard Time",
      offset: 6
    },
    dst: {},
    long: "(UTC+06:00) Dhaka",
    hem: "n"
  },
  {
    name: "Bhutan Time",
    abbr: null,
    aliases: ["bhutan"],
    ids: ["Asia/Thimphu"],
    std: {
      name: "Bhutan Time",
      abbr: "BT",
      offset: 6
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Indian Ocean Time",
    abbr: null,
    aliases: ["indian ocean", "indian chagos"],
    ids: ["Indian/Chagos"],
    std: {
      abbr: "IOT",
      name: "Indian Ocean Time",
      offset: 6
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Myanmar Time",
    abbr: null,
    aliases: ["myanmar", "myanmar standard time"],
    ids: ["Asia/Rangoon"],
    std: {
      abbr: "MMT",
      name: "Myanmar Time",
      offset: 6.5
    },
    dst: {},
    long: "(UTC+06:30) Yangon (Rangoon)",
    hem: "n"
  },
  {
    name: "Cocos Islands Time",
    abbr: null,
    aliases: ["cocos"],
    ids: ["Indian/Cocos"],
    std: {
      abbr: "CCT",
      name: "Cocos Islands Time",
      offset: 6.5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Davis Time",
    abbr: null,
    aliases: ["davis"],
    ids: ["Antarctica/Davis"],
    std: {
      abbr: "DAVT",
      name: "Davis Time",
      offset: 7
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Hovd Time",
    abbr: null,
    aliases: ["hovd", "w. mongolia standard time", "west mongolia", "western mongolia"],
    ids: ["Asia/Hovd"],
    std: {
      abbr: "HOVT",
      name: "Hovd Standard Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Hovd",
    hem: "n"
  },
  {
    name: "Novosibirsk Time",
    abbr: null,
    aliases: ["novosibirsk", "n. central asia standard time", "north central asia"],
    ids: ["Asia/Novosibirsk"],
    std: {
      abbr: "NOVT",
      name: "Novosibirsk Standard Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Novosibirsk",
    hem: "n"
  },
  {
    name: "Christmas Island Time",
    abbr: null,
    aliases: ["christmas"],
    ids: ["Indian/Christmas"],
    std: {
      abbr: "CXT",
      name: "Christmas Island Time",
      offset: 7
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Brunei Darussalam Time",
    abbr: null,
    aliases: ["brunei"],
    ids: ["Asia/Brunei"],
    std: {
      abbr: "BNT",
      name: "Brunei Darussalam Time",
      offset: 8
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Hong Kong Time",
    abbr: "HKT",
    aliases: ["hong kong", "hkst"],
    ids: ["Asia/Hong_Kong"],
    std: {
      name: "Hong Kong Standard Time",
      abbr: "HKT",
      offset: 8
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Irkutsk Time",
    abbr: null,
    aliases: ["irkutsk", "north asia east standard time", "north asia east"],
    ids: ["Asia/Irkutsk"],
    std: {
      abbr: "IRKT",
      name: "Irkutsk Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Irkutsk",
    hem: "n"
  },
  {
    name: "Central Indonesia Time",
    abbr: null,
    aliases: ["indonesia central"],
    ids: ["Asia/Makassar"],
    std: {
      name: "Central Indonesia Time",
      abbr: "WITA",
      offset: 8
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Philippine Time",
    abbr: null,
    aliases: ["philippines"],
    ids: ["Asia/Manila"],
    std: {
      abbr: "PHST",
      name: "Philippine Standard Time",
      offset: 8
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Singapore Time",
    abbr: null,
    aliases: ["singapore", "singapore standard time", "kuala lumpur"],
    ids: ["Asia/Singapore"],
    std: {
      name: "Singapore Standard Time",
      abbr: "SGT",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Kuala Lumpur, Singapore",
    hem: "s"
  },
  {
    name: "Taipei Time",
    abbr: null,
    aliases: ["taipei", "taipei standard time"],
    ids: ["Asia/Taipei"],
    std: {
      abbr: "CST",
      name: "Taipei Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Taipei",
    hem: "n"
  },
  {
    name: "Western Australia Time",
    abbr: "AWT",
    aliases: [
      "australia western",
      "awdt",
      "w. australia standard time",
      "perth",
      "western australia",
      "west australia"
    ],
    ids: ["Australia/Perth"],
    std: {
      name: "Australian Western Standard Time",
      abbr: "AWST",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Perth",
    hem: "s"
  },
  {
    name: "Australian Central Western Time",
    abbr: "ACWT",
    aliases: [
      "australia centralwestern",
      "acwdt",
      "aus central w. standard time",
      "eucla",
      "aus central west"
    ],
    ids: ["Australia/Eucla"],
    std: {
      name: "Australian Central Western Standard Time",
      abbr: "ACWST",
      offset: 8.75
    },
    dst: {},
    long: "(UTC+08:45) Eucla",
    hem: "s"
  },
  {
    name: "East Timor Time",
    abbr: "TLT",
    aliases: ["east timor"],
    ids: ["Asia/Dili"],
    std: {
      abbr: "TLT",
      name: "East Timor Time",
      offset: 9
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Eastern Indonesia Time",
    abbr: null,
    aliases: ["indonesia eastern"],
    ids: ["Asia/Jayapura"],
    std: {
      name: "Eastern Indonesia Time",
      abbr: "WIT",
      offset: 9
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Japan Time",
    abbr: null,
    aliases: ["japan", "jdt", "tokyo standard time", "osaka", "sapporo", "tokyo"],
    ids: ["Asia/Tokyo"],
    std: {
      name: "Japan Standard Time",
      abbr: "JST",
      offset: 9
    },
    dst: {},
    long: "(UTC+09:00) Osaka, Sapporo, Tokyo",
    hem: "n"
  },
  {
    name: "Palau Time",
    abbr: null,
    aliases: ["palau"],
    ids: ["Pacific/Palau"],
    std: {
      abbr: "PWT",
      name: "Palau Time",
      offset: 9
    },
    dst: {},
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: ["Australia/Darwin"],
    std: {
      name: "Australian Central Standard Time",
      abbr: "ACST",
      offset: 9.5
    },
    hem: "s"
  },
  {
    name: "Dumont-d’Urville Time",
    abbr: null,
    aliases: ["dumontdurville"],
    ids: ["Antarctica/DumontDUrville"],
    std: {
      abbr: "CLST",
      name: "Dumont-d’Urville Time",
      offset: 10
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Chuuk Time",
    abbr: null,
    aliases: ["truk"],
    ids: ["Pacific/Truk"],
    std: {
      abbr: "CHUT",
      name: "Chuuk Time",
      offset: 10
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Lord Howe Time",
    abbr: "LHT",
    aliases: ["lord howe", "lord howe standard time"],
    ids: ["Australia/Lord_Howe"],
    std: {
      name: "Lord Howe Standard Time",
      abbr: "LHST",
      offset: 10.5
    },
    dst: {
      name: "Lord Howe Daylight Time",
      abbr: "LHDT",
      offset: 11.5
    },
    long: "(UTC+10:30) Lord Howe Island",
    hem: "s"
  },
  {
    name: "Casey Time",
    abbr: "CAST",
    aliases: ["casey"],
    ids: ["Antarctica/Casey"],
    std: {
      abbr: "CAST",
      name: "Casey Time",
      offset: 11
    },
    dst: {
      name: "Casey Summer Time",
      offset: 8
    },
    hem: "s"
  },
  {
    name: "Magadan Time",
    abbr: null,
    aliases: ["magadan", "magadan standard time"],
    ids: ["Asia/Magadan"],
    std: {
      abbr: "MAGT",
      name: "Magadan Standard Time",
      offset: 11
    },
    dst: {},
    long: "(UTC+11:00) Magadan",
    hem: "n"
  },
  {
    name: "Sakhalin Time",
    abbr: null,
    aliases: ["sakhalin", "sakhalin standard time"],
    ids: ["Asia/Sakhalin"],
    std: {
      abbr: "SAKT",
      name: "Sakhalin Standard Time",
      offset: 11
    },
    dst: {},
    long: "(UTC+11:00) Sakhalin",
    hem: "n"
  },
  {
    name: "Srednekolymsk Time",
    abbr: "SRET",
    aliases: ["srednekolymsk", "russia time zone 10", "chokurdakh"],
    ids: ["Asia/Srednekolymsk"],
    std: {
      abbr: "SRET",
      name: "Srednekolymsk Standard Time",
      offset: 11
    },
    dst: {},
    long: "(UTC+11:00) Chokurdakh",
    hem: "n"
  },
  {
    name: "Vanuatu Time",
    abbr: null,
    aliases: ["vanuatu"],
    ids: ["Pacific/Efate"],
    std: {
      abbr: "VUT",
      name: "Vanuatu Standard Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Solomon Islands Time",
    abbr: null,
    aliases: ["solomon"],
    ids: ["Pacific/Guadalcanal"],
    std: {
      abbr: "SBT",
      name: "Solomon Islands Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Kosrae Time",
    abbr: null,
    aliases: ["kosrae"],
    ids: ["Pacific/Kosrae"],
    std: {
      abbr: "KOST",
      name: "Kosrae Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "New Caledonia Time",
    abbr: null,
    aliases: ["new caledonia"],
    ids: ["Pacific/Noumea"],
    std: {
      abbr: "NCT",
      name: "New Caledonia Standard Time",
      offset: 11
    },
    dst: {
      name: "New Caledonia Summer Time"
    },
    hem: "n"
  },
  {
    name: "Ponape Time",
    abbr: null,
    aliases: ["ponape"],
    ids: ["Pacific/Ponape"],
    std: {
      abbr: "PONT",
      name: "Ponape Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Anadyr Time",
    abbr: null,
    aliases: ["anadyr", "russia time zone 11", "petropavlovsk kamchatsky"],
    ids: ["Asia/Anadyr"],
    std: {
      abbr: "ANAT",
      name: "Anadyr Standard Time",
      offset: 12
    },
    dst: {},
    long: "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky",
    hem: "n"
  },
  {
    name: "Petropavlovsk-Kamchatski Time",
    abbr: null,
    aliases: ["kamchatka", "russia time zone 11", "anadyr", "petropavlovsk kamchatsky"],
    ids: ["Asia/Kamchatka"],
    std: {
      abbr: "PETT",
      name: "Petropavlovsk-Kamchatski Standard Time",
      offset: 12
    },
    dst: {},
    long: "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky",
    hem: "n"
  },
  {
    name: "Fiji Time",
    abbr: "FJT",
    aliases: ["fiji", "fiji standard time"],
    ids: ["Pacific/Fiji"],
    std: {
      abbr: "FJT",
      name: "Fiji Standard Time",
      offset: 12
    },
    dst: {
      abbr: "FJT",
      name: "Fiji Summer Time",
      offset: 13
    },
    long: "(UTC+12:00) Fiji",
    hem: "s"
  },
  {
    name: "Tuvalu Time",
    abbr: "TVT",
    aliases: ["tuvalu"],
    ids: ["Pacific/Funafuti"],
    std: {
      abbr: "TVT",
      name: "Tuvalu Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Nauru Time",
    abbr: null,
    aliases: ["nauru"],
    ids: ["Pacific/Nauru"],
    std: {
      abbr: "NRT",
      name: "Nauru Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Norfolk Island Time",
    abbr: null,
    aliases: ["norfolk", "norfolk standard time", "norfolk island"],
    ids: ["Pacific/Norfolk"],
    std: {
      abbr: "NFT",
      name: "Norfolk Island Standard Time",
      offset: 12
    },
    dst: {
      abbr: "NFDT",
      name: "Norfolk Island Daylight Time",
      offset: 11
    },
    long: "(UTC+11:00) Norfolk Island",
    hem: "n"
  },
  {
    name: "Gilbert Islands Time",
    abbr: null,
    aliases: ["gilbert islands"],
    ids: ["Pacific/Tarawa"],
    std: {
      abbr: "GILT",
      name: "Gilbert Islands Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Wake Island Time",
    abbr: null,
    aliases: ["wake"],
    ids: ["Pacific/Wake"],
    std: {
      abbr: "WAKT",
      name: "Wake Island Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Wallis & Futuna Time",
    abbr: null,
    aliases: ["wallis"],
    ids: ["Pacific/Wallis"],
    std: {
      abbr: "WFT",
      name: "Wallis & Futuna Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Chatham Time",
    abbr: "CHAT",
    aliases: ["chatham", "chatham islands standard time", "chatham islands"],
    ids: ["Pacific/Chatham"],
    std: {
      name: "Chatham Standard Time",
      abbr: "CHAST",
      offset: 12.75
    },
    dst: {
      name: "Chatham Daylight Time",
      abbr: "CHADT",
      offset: 13.75
    },
    long: "(UTC+12:45) Chatham Islands",
    hem: "s"
  },
  {
    name: "West Samoa Time",
    abbr: "WST",
    aliases: ["apia"],
    ids: ["Pacific/Apia"],
    std: {
      abbr: "WST",
      name: "West Samoa Time",
      offset: 13
    },
    dst: {
      abbr: "WST",
      name: "West Samoa Summer Time",
      offset: 14
    },
    hem: "s"
  },
  {
    name: "Phoenix Islands Time",
    abbr: null,
    aliases: ["phoenix islands"],
    ids: ["Pacific/Enderbury"],
    std: {
      abbr: "PHOT",
      name: "Phoenix Islands Time",
      offset: 13
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tokelau Time",
    abbr: null,
    aliases: ["tokelau"],
    ids: ["Pacific/Fakaofo"],
    std: {
      abbr: "TKT",
      name: "Tokelau Time",
      offset: 13
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tonga Time",
    abbr: null,
    aliases: ["tonga", "tonga standard time", "nuku'alofa"],
    ids: ["Pacific/Tongatapu"],
    std: {
      abbr: "TOT",
      name: "Tonga Standard Time",
      offset: 13
    },
    dst: {
      name: "Tonga Summer Time",
      offset: 14
    },
    long: "(UTC+13:00) Nuku'alofa",
    hem: "s"
  },
  {
    name: "Line Islands Time",
    abbr: null,
    aliases: ["line islands", "line islands standard time", "kiritimati island"],
    ids: ["Pacific/Kiritimati"],
    std: {
      abbr: "LINT",
      name: "Line Islands Time",
      offset: 14
    },
    dst: {},
    long: "(UTC+14:00) Kiritimati Island",
    hem: "n"
  },
  {
    name: "Niue Time",
    abbr: null,
    aliases: ["niue"],
    ids: ["Pacific/Niue"],
    std: {
      abbr: "NUT",
      name: "Niue Time",
      offset: -11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Cook Islands Time",
    abbr: "CKT",
    aliases: ["cook"],
    ids: ["Pacific/Rarotonga"],
    std: {
      abbr: "CKT",
      name: "Cook Islands Standard Time",
      offset: -10
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tahiti Time",
    abbr: null,
    aliases: ["tahiti"],
    ids: ["Pacific/Tahiti"],
    std: {
      abbr: "TAHT",
      name: "Tahiti Time",
      offset: -10
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Marquesas Time",
    abbr: null,
    aliases: ["marquesas", "marquesas standard time"],
    ids: ["Pacific/Marquesas"],
    std: {
      abbr: "MART",
      name: "Marquesas Time",
      offset: -9.5
    },
    dst: {},
    long: "(UTC-09:30) Marquesas Islands",
    hem: "n"
  },
  {
    name: "Aleutian Standard Time",
    iso: "(UTC-10:00) Aleutian Islands",
    aliases: ["aleutian"],
    ids: ["America/Adak"],
    abbr: "HST",
    std: {
      name: "Hawaii Standard Time",
      abbr: "HST",
      offset: -10
    },
    dst: {
      name: "Hawaii Daylight Time",
      abbr: "HDT",
      offset: -9
    },
    hem: "n"
  },
  {
    name: "Gambier Time",
    abbr: null,
    aliases: ["gambier", "utc-09", "coordinated universal time-09"],
    ids: ["Pacific/Gambier"],
    std: {
      abbr: "GAMT",
      name: "Gambier Time",
      offset: -9
    },
    dst: {},
    long: "(UTC-09:00) Coordinated Universal Time-09",
    hem: "n"
  },
  {
    name: "Pitcairn Time",
    abbr: null,
    aliases: ["pitcairn", "utc-08", "coordinated universal time-08"],
    ids: ["Pacific/Pitcairn"],
    std: {
      abbr: "PST",
      name: "Pitcairn Time",
      offset: -8
    },
    dst: {},
    long: "(UTC-08:00) Coordinated Universal Time-08",
    hem: "n"
  },
  {
    name: "",
    dupe: true,
    ids: ["America/Hermosillo"],
    std: {
      name: "Mexican Pacific Standard Time",
      abbr: "HNPMX",
      offset: -7
    },
    hem: "n"
  },
  {
    name: "Northwest Mexico Time",
    abbr: "HNOMX",
    aliases: [
      "mexico northwest",
      "pacific standard time (mexico)",
      "baja california",
      "pacific mexico"
    ],
    ids: ["America/Santa_Isabel"],
    std: {
      name: "Northwest Mexico Standard Time",
      abbr: "HNNOMX",
      offset: -6
    },
    dst: {
      name: "Northwest Mexico Daylight Time",
      abbr: "HENOMX",
      offset: -5
    },
    long: "(UTC-08:00) Baja California",
    hem: "n"
  },
  {
    name: "Easter Island Time",
    abbr: null,
    aliases: ["easter", "easter island standard time", "easter island"],
    ids: ["Pacific/Easter"],
    std: {
      name: "Easter Island Standard Time",
      abbr: "EAST",
      offset: -6
    },
    dst: {
      name: "Easter Island Summer Time",
      abbr: "EASST",
      offset: -5
    },
    long: "(UTC-06:00) Easter Island",
    hem: "s"
  },
  {
    name: "Ecuador Time",
    abbr: null,
    aliases: ["ecuador"],
    ids: ["America/Guayaquil"],
    std: {
      name: "Ecuador Time",
      abbr: "ECT",
      offset: -5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Cuba Time",
    abbr: "HCU",
    aliases: ["cuba", "cuba standard time", "havana"],
    ids: ["America/Havana"],
    std: {
      name: "Cuba Standard Time",
      abbr: "HNCU",
      offset: -5
    },
    dst: {
      name: "Cuba Daylight Time",
      abbr: "HECU",
      offset: -4
    },
    long: "(UTC-05:00) Havana",
    hem: "n"
  },
  {
    name: "Peru Time",
    abbr: null,
    aliases: ["peru"],
    ids: ["America/Lima"],
    std: {
      abbr: "PET",
      name: "Peru Standard Time",
      offset: -5
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Paraguay Time",
    abbr: null,
    aliases: ["paraguay", "paraguay standard time", "asuncion"],
    ids: ["America/Asuncion"],
    std: {
      abbr: "PYT",
      name: "Paraguay Standard Time",
      offset: -4
    },
    dst: {
      name: "Paraguay Summer Time",
      offset: -3
    },
    long: "(UTC-04:00) Asuncion",
    hem: "s"
  },
  {
    name: "Venezuela Time",
    abbr: null,
    aliases: ["venezuela", "venezuelan", "venezuela standard time", "caracas"],
    ids: ["America/Caracas"],
    std: {
      name: "Venezuela Time",
      abbr: "VET",
      offset: -4
    },
    dst: {},
    long: "(UTC-04:00) Caracas",
    hem: "n"
  },
  {
    name: "Guyana Time",
    abbr: null,
    aliases: ["guyana"],
    ids: ["America/Guyana"],
    std: {
      name: "Guyana Time",
      abbr: "GYT",
      offset: -4
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Bolivia Time",
    abbr: null,
    aliases: ["bolivia"],
    ids: ["America/La_Paz"],
    std: {
      name: "Bolivia Time",
      abbr: "BOT",
      offset: -4
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Newfoundland Time",
    abbr: "HTN",
    aliases: ["newfoundland", "newfoundland standard time"],
    ids: ["America/St_Johns"],
    std: {
      name: "Newfoundland Standard Time",
      abbr: "HNTN",
      offset: -3.5
    },
    dst: {
      name: "Newfoundland Daylight Time",
      abbr: "HETN",
      offset: -2.5
    },
    long: "(UTC-03:30) Newfoundland",
    hem: "n"
  },
  {
    name: "French Guiana Time",
    abbr: null,
    aliases: ["french guiana"],
    ids: ["America/Cayenne"],
    std: {
      name: "French Guiana Time",
      abbr: "GFT",
      offset: -3
    },
    dst: {},
    hem: "n"
  },
  {
    name: "West Greenland Time",
    abbr: "HOG",
    aliases: ["greenland western", "greenland standard time", "greenland"],
    ids: ["America/Godthab"],
    std: {
      name: "West Greenland Standard Time",
      abbr: "HNOG",
      offset: -3
    },
    dst: {
      name: "West Greenland Summer Time",
      abbr: "HEOG",
      offset: -2
    },
    long: "(UTC-03:00) Greenland",
    hem: "n"
  },
  {
    name: "St. Pierre & Miquelon Time",
    abbr: "HPM",
    aliases: [
      "pierre miquelon",
      "saint pierre standard time",
      "saint pierre and miquelon",
      "saint pierre"
    ],
    ids: ["America/Miquelon"],
    std: {
      name: "St. Pierre & Miquelon Standard Time",
      abbr: "HNPM",
      offset: -3
    },
    dst: {
      name: "St. Pierre & Miquelon Daylight Time",
      abbr: "HEPM",
      offset: -2
    },
    long: "(UTC-03:00) Saint Pierre and Miquelon",
    hem: "n"
  },
  {
    name: "Uruguay Time",
    abbr: "UYT",
    aliases: ["uruguay", "uyst", "montevideo standard time", "montevideo"],
    ids: ["America/Montevideo"],
    std: {
      name: "Uruguay Standard Time",
      abbr: "UYT",
      offset: -3
    },
    dst: {},
    long: "(UTC-03:00) Montevideo",
    hem: "s"
  },
  {
    name: "Suriname Time",
    abbr: null,
    aliases: ["suriname"],
    ids: ["America/Paramaribo"],
    std: {
      name: "Suriname Time",
      abbr: "SRT",
      offset: -3
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Chile Time",
    abbr: "CLT",
    aliases: ["chile"],
    ids: ["America/Santiago"],
    std: {
      name: "Chile Standard Time",
      abbr: "CLT",
      offset: -3
    },
    dst: {
      name: "Chile Summer Time",
      abbr: "CLST",
      offset: -4
    },
    hem: "s"
  },
  {
    name: "Falkland Islands Time",
    abbr: "FKT",
    aliases: ["falkland"],
    ids: ["Atlantic/Stanley"],
    std: {
      abbr: "FKST",
      name: "Falkland Islands Summer Time",
      offset: -3
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Fernando de Noronha Time",
    abbr: null,
    aliases: ["noronha"],
    ids: ["America/Noronha"],
    std: {
      abbr: "FNT",
      name: "Fernando de Noronha Standard Time",
      offset: -2
    },
    dst: {},
    hem: "n"
  },
  {
    name: "South Georgia Time",
    abbr: null,
    aliases: ["south georgia"],
    ids: ["Atlantic/South_Georgia"],
    std: {
      abbr: "GST",
      name: "South Georgia Time",
      offset: -2
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Azores Time",
    abbr: "AZOT",
    aliases: ["azores", "azores standard time"],
    ids: ["Atlantic/Azores"],
    std: {
      abbr: "AZOT",
      name: "Azores Standard Time",
      offset: -1
    },
    dst: {
      name: "Azores Summer Time",
      abbr: "AZOST",
      offset: 0
    },
    long: "(UTC-01:00) Azores",
    hem: "n"
  },
  {
    name: "Cape Verde Time",
    abbr: null,
    aliases: ["cape verde", "cape verde standard time", "cabo verde"],
    ids: ["Atlantic/Cape_Verde"],
    std: {
      abbr: "CVT",
      name: "Cape Verde Standard Time",
      offset: -1
    },
    dst: {},
    long: "(UTC-01:00) Cabo Verde Is.",
    hem: "n"
  }
];
var offsets = {
  "asia/dili": "+9",
  "pacific/palau": "+9",
  "australia/west": "+8",
  "asia/ulan_bator": "+8/+7",
  "asia/choibalsan": "+8",
  "asia/chongqing": "+8",
  "asia/chungking": "+8",
  "asia/harbin": "+8",
  "asia/irkutsk": "+8",
  "asia/macao": "+8",
  "asia/ujung_pandang": "+8",
  "antarctica/davis": "+7",
  "indian/christmas": "+7",
  "asia/ho_chi_minh": "+7",
  "asia/hovd": "+7",
  "asia/novosibirsk": "+7",
  "asia/tomsk": "+7",
  "antarctica/vostok": "+6",
  "asia/dacca": "+6",
  "asia/dhaka": "+6",
  "asia/kashgar": "+6",
  "asia/omsk": "+6",
  "asia/thimbu": "+6",
  "asia/thimphu": "+6",
  "asia/urumqi": "+6",
  "indian/cocos": "+6.5",
  "antarctica/mawson": "+5",
  "indian/kerguelen": "+5",
  "asia/ashkhabad": "+5",
  "asia/dushanbe": "+5",
  "asia/yekaterinburg": "+5",
  "asia/kathmandu": "+5.75",
  "indian/reunion": "+4",
  "indian/mahe": "+4",
  "atlantic/jan_mayen": "+2/+1",
  "atlantic/faroe": "+1/0",
  "pacific/kiritimati": "+14",
  "pacific/apia": "+13/+12",
  "pacific/tongatapu": "+13/+12",
  "pacific/enderbury": "+13",
  "pacific/fakaofo": "+13",
  "antarctica/south_pole": "+12/+11",
  "pacific/norfolk": "+11.5/+10.5",
  "australia/lhi": "+10.5/+9.5",
  "etc/greenwich": "0",
  "etc/utc": "0",
  "etc/universal": "0",
  "etc/zulu": "0",
  "america/atka": "-9/-10",
  "pacific/gambier": "-9",
  "pacific/marquesas": "-9.5",
  "pacific/pitcairn": "-8",
  "america/ensenada": "-7/-8",
  "america/santa_isabel": "-7/-8",
  "mexico/bajanorte": "-7/-8",
  "canada/yukon": "-7/-8",
  "canada/east-saskatchewan": "-6",
  "antarctica/rothera": "-3",
  "atlantic/stanley": "-3",
  "america/nuuk": "-3/-4",
  "america/cayenne": "-3",
  "america/paramaribo": "-3",
  "america/rosario": "-3",
  "america/godthab": "-2/-3",
  "america/miquelon": "-2/-3",
  "america/noronha": "-2",
  "atlantic/south_georgia": "-2",
  "atlantic/cape_verde": "-1",
  "pacific/niue": "-11",
  "pacific/samoa": "-11",
  "pacific/rarotonga": "-10",
  "pacific/tahiti": "-10"
};
var titleCase = function(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
var display = function(id2) {
  if (!id2) {
    return null;
  }
  let meta = metas.find((obj) => {
    return obj.ids.find((tz) => {
      return tz === id2;
    });
  });
  if (!meta) {
    let offset = offsets[id2.toLowerCase()];
    if (offset !== void 0) {
      let abbr = `UTC${offset}`;
      let parts = id2.split(/\//);
      let name = titleCase(parts[parts.length - 1]);
      name = name.replace(/_/g, " ");
      name += " Time";
      meta = {
        std: {name, abbr},
        offset: null
      };
    } else {
      let abbr = id2.replace(/^etc\//i, "");
      meta = {
        std: {name: id2, abbr},
        offset: null
      };
    }
  }
  return {
    iana: id2,
    standard: meta.std || null,
    daylight: meta.dst || null
  };
};
var version2 = "1.1.0";
var soft = function(str) {
  let ids = find(str) || [];
  if (typeof ids === "string") {
    ids = [ids];
  }
  ids = ids.map((id2) => display(id2));
  return ids;
};
soft.prototype.version = version2;
var timezone_soft_default = soft;

// build/snowpack/link/react-timezone-select/src/timezone-list.js
var allTimezones = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Honolulu": "Hawaii",
  "America/Juneau": "Alaska",
  "America/Boise": "Mountain Time",
  "America/Dawson": "Dawson, Yukon",
  "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
  "America/Phoenix": "Arizona",
  "America/Chicago": "Central Time",
  "America/Regina": "Saskatchewan",
  "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
  "America/Belize": "Central America",
  "America/Detroit": "Eastern Time",
  "America/Bogota": "Bogota, Lima, Quito",
  "America/Caracas": "Caracas, La Paz",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Sao_Paulo": "Brasilia",
  "America/Tijuana": "Tijuana",
  "America/Montevideo": "Montevideo",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Los_Angeles": "Pacific Time",
  "Atlantic/Azores": "Azores",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  GMT: "UTC",
  "Europe/London": "Edinburgh, London",
  "Europe/Dublin": "Dublin",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca, Monrovia",
  "Atlantic/Canary": "Canary Islands",
  "Europe/Belgrade": "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
  "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
  "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
  "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  "Africa/Algiers": "West Central Africa",
  "Europe/Bucharest": "Bucharest",
  "Africa/Cairo": "Cairo",
  "Europe/Helsinki": "Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius",
  "Europe/Athens": "Athens, Minsk",
  "Asia/Jerusalem": "Jerusalem",
  "Africa/Harare": "Harare, Pretoria",
  "Europe/Moscow": "Istanbul, Moscow, St. Petersburg, Volgograd",
  "Asia/Kuwait": "Kuwait, Riyadh",
  "Africa/Nairobi": "Nairobi",
  "Asia/Baghdad": "Baghdad",
  "Asia/Tehran": "Tehran",
  "Asia/Dubai": "Abu Dhabi, Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Ekaterinburg",
  "Asia/Karachi": "Islamabad, Karachi, Tashkent",
  "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Colombo": "Sri Jayawardenepura",
  "Asia/Almaty": "Almaty, Novosibirsk",
  "Asia/Rangoon": "Yangon Rangoon",
  "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR, Urumqi",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
  "Asia/Taipei": "Taipei",
  "Australia/Perth": "Perth",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Asia/Yakutsk": "Yakutsk",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Brisbane": "Brisbane",
  "Australia/Hobart": "Hobart",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Guam": "Guam, Port Moresby",
  "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
  "Asia/Kamchatka": "Kamchatka, Marshall Islands",
  "Pacific/Fiji": "Fiji Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Pacific/Tongatapu": "Nuku'alofa"
};
var timezone_list_default = allTimezones;

// build/snowpack/link/react-timezone-select/src/index.js
var LabelType;
(function(LabelType2) {
  LabelType2["ORIGINAL"] = "original";
  LabelType2["ALTNAME"] = "altName";
  LabelType2["ABBREV"] = "abbrev";
})(LabelType || (LabelType = {}));
function TimezoneSelect({
  value,
  onBlur,
  onChange: onChange2,
  labelStyle = "original",
  timezones,
  ...props
}) {
  if (!timezones)
    timezones = timezone_list_default;
  const getOptions = react.useMemo(() => {
    return Object.entries(timezones).reduce((selectOptions, zone) => {
      const now = spacetime_default.now(zone[0]);
      const tz = now.timezone();
      const tzStrings = timezone_soft_default(zone[0]);
      let label = "";
      let abbr = now.isDST() ? tzStrings[0].daylight?.abbr : tzStrings[0].standard?.abbr;
      let altName = now.isDST() ? tzStrings[0].daylight?.name : tzStrings[0].standard?.name;
      const min = tz.current.offset * 60;
      const hr = `${min / 60 ^ 0}:` + (min % 60 === 0 ? "00" : Math.abs(min % 60));
      const prefix = `(GMT${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`;
      switch (labelStyle) {
        case "original":
          label = prefix;
          break;
        case "altName":
          label = `${prefix} ${altName?.length ? `(${altName})` : ""}`;
          break;
        case "abbrev":
          label = `${prefix} ${abbr?.length < 5 ? `(${abbr})` : ""}`;
          break;
        default:
          label = `${prefix}`;
      }
      selectOptions.push({
        value: tz.name,
        label,
        offset: tz.current.offset,
        abbrev: abbr,
        altName
      });
      return selectOptions;
    }, []).sort((a4, b4) => a4.offset - b4.offset);
  }, [labelStyle, timezones]);
  const handleChange = (tz) => {
    onChange2 && onChange2(tz);
  };
  const findFuzzyTz = (zone) => {
    let currentTime = spacetime_default.now("GMT");
    try {
      currentTime = spacetime_default.now(zone);
    } catch (err) {
      return;
    }
    return getOptions.filter((tz) => tz.offset === currentTime.timezone().current.offset).map((tz) => {
      let score = 0;
      if (currentTime.timezones[tz.value.toLowerCase()] && !!currentTime.timezones[tz.value.toLowerCase()].dst === currentTime.timezone().hasDst) {
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substr(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 8;
        }
        if (tz.label.toLowerCase().indexOf(currentTime.tz.substr(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 4;
        }
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substr(0, currentTime.tz.indexOf("/")))) {
          score += 2;
        }
        score += 1;
      } else if (tz.value === "GMT") {
        score += 1;
      }
      return {tz, score};
    }).sort((a4, b4) => b4.score - a4.score).map(({tz}) => tz)[0];
  };
  const parseTimezone = (zone) => {
    if (typeof zone === "object" && zone.value && zone.label)
      return zone;
    if (typeof zone === "string") {
      return getOptions.find((tz) => tz.value === zone) || zone.indexOf("/") !== -1 && findFuzzyTz(zone);
    } else if (zone.value && !zone.label) {
      return getOptions.find((tz) => tz.value === zone.value);
    }
  };
  return /* @__PURE__ */ react.createElement(react_select_default, {
    value: parseTimezone(value),
    onChange: handleChange,
    options: getOptions,
    onBlur,
    ...props
  });
}

// build/dist/Timezone.js
var Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = react.useState("Europe/Rome");
  const [labelStyle, setLabelStyle] = react.useState("original");
  const handleLabelChange = (event) => {
    setLabelStyle(event.target.value);
  };
  const [datetime, setDatetime] = useState(spacetime_default.now());
  useMemo(() => {
    const tzValue = typeof selectedTimezone === "string" ? selectedTimezone : selectedTimezone.value;
    setDatetime(datetime.goto(tzValue));
  }, [selectedTimezone]);
  return /* @__PURE__ */ react.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ react.createElement("h2", null, "react-timezone-select"), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("a", {
    href: "https://ndo.dev",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "author"
  }, "ndom91"))), /* @__PURE__ */ react.createElement("div", {
    style: {
      display: "flex",
      width: "min(100%, 400px)",
      justifyContent: "space-around",
      marginTop: "50px"
    },
    onChange: handleLabelChange
  }, /* @__PURE__ */ react.createElement("span", null, "Label Style:"), /* @__PURE__ */ react.createElement("label", {
    htmlFor: "original"
  }, /* @__PURE__ */ react.createElement("input", {
    type: "radio",
    id: "original",
    name: "labelStyle",
    value: LabelType.ORIGINAL,
    defaultChecked: labelStyle === "original"
  }), "original"), /* @__PURE__ */ react.createElement("label", {
    htmlFor: "altName"
  }, /* @__PURE__ */ react.createElement("input", {
    type: "radio",
    id: "altName",
    name: "labelStyle",
    value: LabelType.ALTNAME
  }), "altName"), /* @__PURE__ */ react.createElement("label", {
    htmlFor: "abbrev"
  }, /* @__PURE__ */ react.createElement("input", {
    type: "radio",
    id: "abbrev",
    name: "labelStyle",
    value: LabelType.ABBREV
  }), "abbrev")), /* @__PURE__ */ react.createElement("div", {
    className: "select-wrapper"
  }, /* @__PURE__ */ react.createElement(TimezoneSelect, {
    value: selectedTimezone,
    onChange: setSelectedTimezone,
    labelStyle,
    onBlur: () => console.log("Blur!"),
    timezones: {
      ...timezone_list_default,
      "America/Lima": "Pittsburgh",
      "Europe/Berlin": "Frankfurt"
    }
  })), /* @__PURE__ */ react.createElement("div", {
    className: "code"
  }, /* @__PURE__ */ react.createElement("div", null, "Current Date / Time in", " ", typeof selectedTimezone === "string" ? selectedTimezone.split("/")[1] : selectedTimezone.value.split("/")[1], ":", " ", /* @__PURE__ */ react.createElement("pre", null, datetime.unixFmt("dd.MM.YY HH:mm:ss"))), /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(selectedTimezone, null, 2))));
};
var Timezone_default = Timezone;

// build/dist/App.js
function App({}) {
  return /* @__PURE__ */ react.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ react.createElement(Timezone_default, null));
}
var App_default = App;

// build/dist/index.js
import.meta.env = env_exports;
reactDom.render(/* @__PURE__ */ react.createElement(App_default, null), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map
