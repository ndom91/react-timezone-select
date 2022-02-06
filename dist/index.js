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

// build/snowpack/pkg/common/index-ae389540.js
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
    var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
      return test2[n3];
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
  var from2;
  var to = toObject(target);
  var symbols;
  for (var s3 = 1; s3 < arguments.length; s3++) {
    from2 = Object(arguments[s3]);
    for (var key in from2) {
      if (hasOwnProperty.call(from2, key)) {
        to[key] = from2[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from2);
      for (var i4 = 0; i4 < symbols.length; i4++) {
        if (propIsEnumerable.call(from2, symbols[i4])) {
          to[symbols[i4]] = from2[symbols[i4]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n3 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q3 = 60109, r3 = 60110, t3 = 60112;
  exports.Suspense = 60113;
  var u3 = 60115, v3 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w3 = Symbol.for;
    n3 = w3("react.element");
    p3 = w3("react.portal");
    exports.Fragment = w3("react.fragment");
    exports.StrictMode = w3("react.strict_mode");
    exports.Profiler = w3("react.profiler");
    q3 = w3("react.provider");
    r3 = w3("react.context");
    t3 = w3("react.forward_ref");
    exports.Suspense = w3("react.suspense");
    u3 = w3("react.memo");
    v3 = w3("react.lazy");
  }
  var x3 = typeof Symbol === "function" && Symbol.iterator;
  function y4(a3) {
    if (a3 === null || typeof a3 !== "object")
      return null;
    a3 = x3 && a3[x3] || a3["@@iterator"];
    return typeof a3 === "function" ? a3 : null;
  }
  function z3(a3) {
    for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a3, c3 = 1; c3 < arguments.length; c3++)
      b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
    return "Minified React error #" + a3 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A3 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B4 = {};
  function C3(a3, b3, c3) {
    this.props = a3;
    this.context = b3;
    this.refs = B4;
    this.updater = c3 || A3;
  }
  C3.prototype.isReactComponent = {};
  C3.prototype.setState = function(a3, b3) {
    if (typeof a3 !== "object" && typeof a3 !== "function" && a3 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a3, b3, "setState");
  };
  C3.prototype.forceUpdate = function(a3) {
    this.updater.enqueueForceUpdate(this, a3, "forceUpdate");
  };
  function D4() {
  }
  D4.prototype = C3.prototype;
  function E3(a3, b3, c3) {
    this.props = a3;
    this.context = b3;
    this.refs = B4;
    this.updater = c3 || A3;
  }
  var F4 = E3.prototype = new D4();
  F4.constructor = E3;
  objectAssign(F4, C3.prototype);
  F4.isPureReactComponent = true;
  var G4 = {current: null}, H4 = Object.prototype.hasOwnProperty, I4 = {key: true, ref: true, __self: true, __source: true};
  function J3(a3, b3, c3) {
    var e3, d3 = {}, k3 = null, h3 = null;
    if (b3 != null)
      for (e3 in b3.ref !== void 0 && (h3 = b3.ref), b3.key !== void 0 && (k3 = "" + b3.key), b3)
        H4.call(b3, e3) && !I4.hasOwnProperty(e3) && (d3[e3] = b3[e3]);
    var g3 = arguments.length - 2;
    if (g3 === 1)
      d3.children = c3;
    else if (1 < g3) {
      for (var f3 = Array(g3), m3 = 0; m3 < g3; m3++)
        f3[m3] = arguments[m3 + 2];
      d3.children = f3;
    }
    if (a3 && a3.defaultProps)
      for (e3 in g3 = a3.defaultProps, g3)
        d3[e3] === void 0 && (d3[e3] = g3[e3]);
    return {$$typeof: n3, type: a3, key: k3, ref: h3, props: d3, _owner: G4.current};
  }
  function K3(a3, b3) {
    return {$$typeof: n3, type: a3.type, key: b3, ref: a3.ref, props: a3.props, _owner: a3._owner};
  }
  function L3(a3) {
    return typeof a3 === "object" && a3 !== null && a3.$$typeof === n3;
  }
  function escape(a3) {
    var b3 = {"=": "=0", ":": "=2"};
    return "$" + a3.replace(/[=:]/g, function(a4) {
      return b3[a4];
    });
  }
  var M4 = /\/+/g;
  function N4(a3, b3) {
    return typeof a3 === "object" && a3 !== null && a3.key != null ? escape("" + a3.key) : b3.toString(36);
  }
  function O4(a3, b3, c3, e3, d3) {
    var k3 = typeof a3;
    if (k3 === "undefined" || k3 === "boolean")
      a3 = null;
    var h3 = false;
    if (a3 === null)
      h3 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h3 = true;
          break;
        case "object":
          switch (a3.$$typeof) {
            case n3:
            case p3:
              h3 = true;
          }
      }
    if (h3)
      return h3 = a3, d3 = d3(h3), a3 = e3 === "" ? "." + N4(h3, 0) : e3, Array.isArray(d3) ? (c3 = "", a3 != null && (c3 = a3.replace(M4, "$&/") + "/"), O4(d3, b3, c3, "", function(a4) {
        return a4;
      })) : d3 != null && (L3(d3) && (d3 = K3(d3, c3 + (!d3.key || h3 && h3.key === d3.key ? "" : ("" + d3.key).replace(M4, "$&/") + "/") + a3)), b3.push(d3)), 1;
    h3 = 0;
    e3 = e3 === "" ? "." : e3 + ":";
    if (Array.isArray(a3))
      for (var g3 = 0; g3 < a3.length; g3++) {
        k3 = a3[g3];
        var f3 = e3 + N4(k3, g3);
        h3 += O4(k3, b3, c3, f3, d3);
      }
    else if (f3 = y4(a3), typeof f3 === "function")
      for (a3 = f3.call(a3), g3 = 0; !(k3 = a3.next()).done; )
        k3 = k3.value, f3 = e3 + N4(k3, g3++), h3 += O4(k3, b3, c3, f3, d3);
    else if (k3 === "object")
      throw b3 = "" + a3, Error(z3(31, b3 === "[object Object]" ? "object with keys {" + Object.keys(a3).join(", ") + "}" : b3));
    return h3;
  }
  function P4(a3, b3, c3) {
    if (a3 == null)
      return a3;
    var e3 = [], d3 = 0;
    O4(a3, e3, "", "", function(a4) {
      return b3.call(c3, a4, d3++);
    });
    return e3;
  }
  function Q3(a3) {
    if (a3._status === -1) {
      var b3 = a3._result;
      b3 = b3();
      a3._status = 0;
      a3._result = b3;
      b3.then(function(b4) {
        a3._status === 0 && (b4 = b4.default, a3._status = 1, a3._result = b4);
      }, function(b4) {
        a3._status === 0 && (a3._status = 2, a3._result = b4);
      });
    }
    if (a3._status === 1)
      return a3._result;
    throw a3._result;
  }
  var R4 = {current: null};
  function S4() {
    var a3 = R4.current;
    if (a3 === null)
      throw Error(z3(321));
    return a3;
  }
  var T4 = {ReactCurrentDispatcher: R4, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G4, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P4, forEach: function(a3, b3, c3) {
    P4(a3, function() {
      b3.apply(this, arguments);
    }, c3);
  }, count: function(a3) {
    var b3 = 0;
    P4(a3, function() {
      b3++;
    });
    return b3;
  }, toArray: function(a3) {
    return P4(a3, function(a4) {
      return a4;
    }) || [];
  }, only: function(a3) {
    if (!L3(a3))
      throw Error(z3(143));
    return a3;
  }};
  exports.Component = C3;
  exports.PureComponent = E3;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T4;
  exports.cloneElement = function(a3, b3, c3) {
    if (a3 === null || a3 === void 0)
      throw Error(z3(267, a3));
    var e3 = objectAssign({}, a3.props), d3 = a3.key, k3 = a3.ref, h3 = a3._owner;
    if (b3 != null) {
      b3.ref !== void 0 && (k3 = b3.ref, h3 = G4.current);
      b3.key !== void 0 && (d3 = "" + b3.key);
      if (a3.type && a3.type.defaultProps)
        var g3 = a3.type.defaultProps;
      for (f3 in b3)
        H4.call(b3, f3) && !I4.hasOwnProperty(f3) && (e3[f3] = b3[f3] === void 0 && g3 !== void 0 ? g3[f3] : b3[f3]);
    }
    var f3 = arguments.length - 2;
    if (f3 === 1)
      e3.children = c3;
    else if (1 < f3) {
      g3 = Array(f3);
      for (var m3 = 0; m3 < f3; m3++)
        g3[m3] = arguments[m3 + 2];
      e3.children = g3;
    }
    return {
      $$typeof: n3,
      type: a3.type,
      key: d3,
      ref: k3,
      props: e3,
      _owner: h3
    };
  };
  exports.createContext = function(a3, b3) {
    b3 === void 0 && (b3 = null);
    a3 = {$$typeof: r3, _calculateChangedBits: b3, _currentValue: a3, _currentValue2: a3, _threadCount: 0, Provider: null, Consumer: null};
    a3.Provider = {$$typeof: q3, _context: a3};
    return a3.Consumer = a3;
  };
  exports.createElement = J3;
  exports.createFactory = function(a3) {
    var b3 = J3.bind(null, a3);
    b3.type = a3;
    return b3;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a3) {
    return {$$typeof: t3, render: a3};
  };
  exports.isValidElement = L3;
  exports.lazy = function(a3) {
    return {$$typeof: v3, _payload: {_status: -1, _result: a3}, _init: Q3};
  };
  exports.memo = function(a3, b3) {
    return {$$typeof: u3, type: a3, compare: b3 === void 0 ? null : b3};
  };
  exports.useCallback = function(a3, b3) {
    return S4().useCallback(a3, b3);
  };
  exports.useContext = function(a3, b3) {
    return S4().useContext(a3, b3);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a3, b3) {
    return S4().useEffect(a3, b3);
  };
  exports.useImperativeHandle = function(a3, b3, c3) {
    return S4().useImperativeHandle(a3, b3, c3);
  };
  exports.useLayoutEffect = function(a3, b3) {
    return S4().useLayoutEffect(a3, b3);
  };
  exports.useMemo = function(a3, b3) {
    return S4().useMemo(a3, b3);
  };
  exports.useReducer = function(a3, b3, c3) {
    return S4().useReducer(a3, b3, c3);
  };
  exports.useRef = function(a3) {
    return S4().useRef(a3);
  };
  exports.useState = function(a3) {
    return S4().useState(a3);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/snowpack/pkg/react.js
var Children = react.Children;
var Component = react.Component;
var Fragment = react.Fragment;
var Profiler = react.Profiler;
var PureComponent = react.PureComponent;
var StrictMode = react.StrictMode;
var Suspense = react.Suspense;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var cloneElement = react.cloneElement;
var createContext = react.createContext;
var createElement = react.createElement;
var createFactory = react.createFactory;
var createRef = react.createRef;
var forwardRef = react.forwardRef;
var isValidElement = react.isValidElement;
var lazy = react.lazy;
var memo = react.memo;
var useCallback = react.useCallback;
var useContext = react.useContext;
var useDebugValue = react.useDebugValue;
var useEffect = react.useEffect;
var useImperativeHandle = react.useImperativeHandle;
var useLayoutEffect = react.useLayoutEffect;
var useMemo = react.useMemo;
var useReducer = react.useReducer;
var useRef = react.useRef;
var useState = react.useState;
var version = react.version;

// build/snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f3, g3, h3, k3;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l3 = performance;
    exports.unstable_now = function() {
      return l3.now();
    };
  } else {
    var p3 = Date, q3 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q3;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t3 = null, u3 = null, w3 = function() {
      if (t3 !== null)
        try {
          var a3 = exports.unstable_now();
          t3(true, a3);
          t3 = null;
        } catch (b3) {
          throw setTimeout(w3, 0), b3;
        }
    };
    f3 = function(a3) {
      t3 !== null ? setTimeout(f3, 0, a3) : (t3 = a3, setTimeout(w3, 0));
    };
    g3 = function(a3, b3) {
      u3 = setTimeout(a3, b3);
    };
    h3 = function() {
      clearTimeout(u3);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k3 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x3 = window.setTimeout, y4 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A3 = false, B4 = null, C3 = -1, D4 = 5, E3 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E3;
    };
    k3 = function() {
    };
    exports.unstable_forceFrameRate = function(a3) {
      0 > a3 || 125 < a3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D4 = 0 < a3 ? Math.floor(1e3 / a3) : 5;
    };
    var F4 = new MessageChannel(), G4 = F4.port2;
    F4.port1.onmessage = function() {
      if (B4 !== null) {
        var a3 = exports.unstable_now();
        E3 = a3 + D4;
        try {
          B4(true, a3) ? G4.postMessage(null) : (A3 = false, B4 = null);
        } catch (b3) {
          throw G4.postMessage(null), b3;
        }
      } else
        A3 = false;
    };
    f3 = function(a3) {
      B4 = a3;
      A3 || (A3 = true, G4.postMessage(null));
    };
    g3 = function(a3, b3) {
      C3 = x3(function() {
        a3(exports.unstable_now());
      }, b3);
    };
    h3 = function() {
      y4(C3);
      C3 = -1;
    };
  }
  function H4(a3, b3) {
    var c3 = a3.length;
    a3.push(b3);
    a:
      for (; ; ) {
        var d3 = c3 - 1 >>> 1, e3 = a3[d3];
        if (e3 !== void 0 && 0 < I4(e3, b3))
          a3[d3] = b3, a3[c3] = e3, c3 = d3;
        else
          break a;
      }
  }
  function J3(a3) {
    a3 = a3[0];
    return a3 === void 0 ? null : a3;
  }
  function K3(a3) {
    var b3 = a3[0];
    if (b3 !== void 0) {
      var c3 = a3.pop();
      if (c3 !== b3) {
        a3[0] = c3;
        a:
          for (var d3 = 0, e3 = a3.length; d3 < e3; ) {
            var m3 = 2 * (d3 + 1) - 1, n3 = a3[m3], v3 = m3 + 1, r3 = a3[v3];
            if (n3 !== void 0 && 0 > I4(n3, c3))
              r3 !== void 0 && 0 > I4(r3, n3) ? (a3[d3] = r3, a3[v3] = c3, d3 = v3) : (a3[d3] = n3, a3[m3] = c3, d3 = m3);
            else if (r3 !== void 0 && 0 > I4(r3, c3))
              a3[d3] = r3, a3[v3] = c3, d3 = v3;
            else
              break a;
          }
      }
      return b3;
    }
    return null;
  }
  function I4(a3, b3) {
    var c3 = a3.sortIndex - b3.sortIndex;
    return c3 !== 0 ? c3 : a3.id - b3.id;
  }
  var L3 = [], M4 = [], N4 = 1, O4 = null, P4 = 3, Q3 = false, R4 = false, S4 = false;
  function T4(a3) {
    for (var b3 = J3(M4); b3 !== null; ) {
      if (b3.callback === null)
        K3(M4);
      else if (b3.startTime <= a3)
        K3(M4), b3.sortIndex = b3.expirationTime, H4(L3, b3);
      else
        break;
      b3 = J3(M4);
    }
  }
  function U4(a3) {
    S4 = false;
    T4(a3);
    if (!R4)
      if (J3(L3) !== null)
        R4 = true, f3(V4);
      else {
        var b3 = J3(M4);
        b3 !== null && g3(U4, b3.startTime - a3);
      }
  }
  function V4(a3, b3) {
    R4 = false;
    S4 && (S4 = false, h3());
    Q3 = true;
    var c3 = P4;
    try {
      T4(b3);
      for (O4 = J3(L3); O4 !== null && (!(O4.expirationTime > b3) || a3 && !exports.unstable_shouldYield()); ) {
        var d3 = O4.callback;
        if (typeof d3 === "function") {
          O4.callback = null;
          P4 = O4.priorityLevel;
          var e3 = d3(O4.expirationTime <= b3);
          b3 = exports.unstable_now();
          typeof e3 === "function" ? O4.callback = e3 : O4 === J3(L3) && K3(L3);
          T4(b3);
        } else
          K3(L3);
        O4 = J3(L3);
      }
      if (O4 !== null)
        var m3 = true;
      else {
        var n3 = J3(M4);
        n3 !== null && g3(U4, n3.startTime - b3);
        m3 = false;
      }
      return m3;
    } finally {
      O4 = null, P4 = c3, Q3 = false;
    }
  }
  var W4 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a3) {
    a3.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R4 || Q3 || (R4 = true, f3(V4));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P4;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J3(L3);
  };
  exports.unstable_next = function(a3) {
    switch (P4) {
      case 1:
      case 2:
      case 3:
        var b3 = 3;
        break;
      default:
        b3 = P4;
    }
    var c3 = P4;
    P4 = b3;
    try {
      return a3();
    } finally {
      P4 = c3;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W4;
  exports.unstable_runWithPriority = function(a3, b3) {
    switch (a3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a3 = 3;
    }
    var c3 = P4;
    P4 = a3;
    try {
      return b3();
    } finally {
      P4 = c3;
    }
  };
  exports.unstable_scheduleCallback = function(a3, b3, c3) {
    var d3 = exports.unstable_now();
    typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d3 + c3 : d3) : c3 = d3;
    switch (a3) {
      case 1:
        var e3 = -1;
        break;
      case 2:
        e3 = 250;
        break;
      case 5:
        e3 = 1073741823;
        break;
      case 4:
        e3 = 1e4;
        break;
      default:
        e3 = 5e3;
    }
    e3 = c3 + e3;
    a3 = {id: N4++, callback: b3, priorityLevel: a3, startTime: c3, expirationTime: e3, sortIndex: -1};
    c3 > d3 ? (a3.sortIndex = c3, H4(M4, a3), J3(L3) === null && a3 === J3(M4) && (S4 ? h3() : S4 = true, g3(U4, c3 - d3))) : (a3.sortIndex = e3, H4(L3, a3), R4 || Q3 || (R4 = true, f3(V4)));
    return a3;
  };
  exports.unstable_wrapCallback = function(a3) {
    var b3 = P4;
    return function() {
      var c3 = P4;
      P4 = b3;
      try {
        return a3.apply(this, arguments);
      } finally {
        P4 = c3;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a3) {
  for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a3, c3 = 1; c3 < arguments.length; c3++)
    b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
  return "Minified React error #" + a3 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a3, b3) {
  ea(a3, b3);
  ea(a3 + "Capture", b3);
}
function ea(a3, b3) {
  ca[a3] = b3;
  for (a3 = 0; a3 < b3.length; a3++)
    ba.add(b3[a3]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a3) {
  if (ia.call(ka, a3))
    return true;
  if (ia.call(ja, a3))
    return false;
  if (ha.test(a3))
    return ka[a3] = true;
  ja[a3] = true;
  return false;
}
function ma(a3, b3, c3, d3) {
  if (c3 !== null && c3.type === 0)
    return false;
  switch (typeof b3) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3)
        return false;
      if (c3 !== null)
        return !c3.acceptsBooleans;
      a3 = a3.toLowerCase().slice(0, 5);
      return a3 !== "data-" && a3 !== "aria-";
    default:
      return false;
  }
}
function na(a3, b3, c3, d3) {
  if (b3 === null || typeof b3 === "undefined" || ma(a3, b3, c3, d3))
    return true;
  if (d3)
    return false;
  if (c3 !== null)
    switch (c3.type) {
      case 3:
        return !b3;
      case 4:
        return b3 === false;
      case 5:
        return isNaN(b3);
      case 6:
        return isNaN(b3) || 1 > b3;
    }
  return false;
}
function B(a3, b3, c3, d3, e3, f3, g3) {
  this.acceptsBooleans = b3 === 2 || b3 === 3 || b3 === 4;
  this.attributeName = d3;
  this.attributeNamespace = e3;
  this.mustUseProperty = c3;
  this.propertyName = a3;
  this.type = b3;
  this.sanitizeURL = f3;
  this.removeEmptyString = g3;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a3) {
  D[a3] = new B(a3, 0, false, a3, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a3) {
  var b3 = a3[0];
  D[b3] = new B(b3, 1, false, a3[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a3) {
  D[a3] = new B(a3, 2, false, a3.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a3) {
  D[a3] = new B(a3, 2, false, a3, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a3) {
  D[a3] = new B(a3, 3, false, a3.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a3) {
  D[a3] = new B(a3, 3, true, a3, null, false, false);
});
["capture", "download"].forEach(function(a3) {
  D[a3] = new B(a3, 4, false, a3, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a3) {
  D[a3] = new B(a3, 6, false, a3, null, false, false);
});
["rowSpan", "start"].forEach(function(a3) {
  D[a3] = new B(a3, 5, false, a3.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a3) {
  return a3[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a3) {
  var b3 = a3.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a3, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a3) {
  var b3 = a3.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a3, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a3) {
  var b3 = a3.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a3, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a3) {
  D[a3] = new B(a3, 1, false, a3.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a3) {
  D[a3] = new B(a3, 1, false, a3.toLowerCase(), null, true, true);
});
function qa(a3, b3, c3, d3) {
  var e3 = D.hasOwnProperty(b3) ? D[b3] : null;
  var f3 = e3 !== null ? e3.type === 0 : d3 ? false : !(2 < b3.length) || b3[0] !== "o" && b3[0] !== "O" || b3[1] !== "n" && b3[1] !== "N" ? false : true;
  f3 || (na(b3, c3, e3, d3) && (c3 = null), d3 || e3 === null ? la(b3) && (c3 === null ? a3.removeAttribute(b3) : a3.setAttribute(b3, "" + c3)) : e3.mustUseProperty ? a3[e3.propertyName] = c3 === null ? e3.type === 3 ? false : "" : c3 : (b3 = e3.attributeName, d3 = e3.attributeNamespace, c3 === null ? a3.removeAttribute(b3) : (e3 = e3.type, c3 = e3 === 3 || e3 === 4 && c3 === true ? "" : "" + c3, d3 ? a3.setAttributeNS(d3, b3, c3) : a3.setAttribute(b3, c3))));
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
function La(a3) {
  if (a3 === null || typeof a3 !== "object")
    return null;
  a3 = Ka && a3[Ka] || a3["@@iterator"];
  return typeof a3 === "function" ? a3 : null;
}
var Ma;
function Na(a3) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c3) {
      var b3 = c3.stack.trim().match(/\n( *(at )?)/);
      Ma = b3 && b3[1] || "";
    }
  return "\n" + Ma + a3;
}
var Oa = false;
function Pa(a3, b3) {
  if (!a3 || Oa)
    return "";
  Oa = true;
  var c3 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b3)
      if (b3 = function() {
        throw Error();
      }, Object.defineProperty(b3.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b3, []);
        } catch (k3) {
          var d3 = k3;
        }
        Reflect.construct(a3, [], b3);
      } else {
        try {
          b3.call();
        } catch (k3) {
          d3 = k3;
        }
        a3.call(b3.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k3) {
        d3 = k3;
      }
      a3();
    }
  } catch (k3) {
    if (k3 && d3 && typeof k3.stack === "string") {
      for (var e3 = k3.stack.split("\n"), f3 = d3.stack.split("\n"), g3 = e3.length - 1, h3 = f3.length - 1; 1 <= g3 && 0 <= h3 && e3[g3] !== f3[h3]; )
        h3--;
      for (; 1 <= g3 && 0 <= h3; g3--, h3--)
        if (e3[g3] !== f3[h3]) {
          if (g3 !== 1 || h3 !== 1) {
            do
              if (g3--, h3--, 0 > h3 || e3[g3] !== f3[h3])
                return "\n" + e3[g3].replace(" at new ", " at ");
            while (1 <= g3 && 0 <= h3);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c3;
  }
  return (a3 = a3 ? a3.displayName || a3.name : "") ? Na(a3) : "";
}
function Qa(a3) {
  switch (a3.tag) {
    case 5:
      return Na(a3.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a3 = Pa(a3.type, false), a3;
    case 11:
      return a3 = Pa(a3.type.render, false), a3;
    case 22:
      return a3 = Pa(a3.type._render, false), a3;
    case 1:
      return a3 = Pa(a3.type, true), a3;
    default:
      return "";
  }
}
function Ra(a3) {
  if (a3 == null)
    return null;
  if (typeof a3 === "function")
    return a3.displayName || a3.name || null;
  if (typeof a3 === "string")
    return a3;
  switch (a3) {
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
  if (typeof a3 === "object")
    switch (a3.$$typeof) {
      case za:
        return (a3.displayName || "Context") + ".Consumer";
      case ya:
        return (a3._context.displayName || "Context") + ".Provider";
      case Aa:
        var b3 = a3.render;
        b3 = b3.displayName || b3.name || "";
        return a3.displayName || (b3 !== "" ? "ForwardRef(" + b3 + ")" : "ForwardRef");
      case Da:
        return Ra(a3.type);
      case Fa:
        return Ra(a3._render);
      case Ea:
        b3 = a3._payload;
        a3 = a3._init;
        try {
          return Ra(a3(b3));
        } catch (c3) {
        }
    }
  return null;
}
function Sa(a3) {
  switch (typeof a3) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a3;
    default:
      return "";
  }
}
function Ta(a3) {
  var b3 = a3.type;
  return (a3 = a3.nodeName) && a3.toLowerCase() === "input" && (b3 === "checkbox" || b3 === "radio");
}
function Ua(a3) {
  var b3 = Ta(a3) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a3.constructor.prototype, b3), d3 = "" + a3[b3];
  if (!a3.hasOwnProperty(b3) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
    var e3 = c3.get, f3 = c3.set;
    Object.defineProperty(a3, b3, {configurable: true, get: function() {
      return e3.call(this);
    }, set: function(a4) {
      d3 = "" + a4;
      f3.call(this, a4);
    }});
    Object.defineProperty(a3, b3, {enumerable: c3.enumerable});
    return {getValue: function() {
      return d3;
    }, setValue: function(a4) {
      d3 = "" + a4;
    }, stopTracking: function() {
      a3._valueTracker = null;
      delete a3[b3];
    }};
  }
}
function Va(a3) {
  a3._valueTracker || (a3._valueTracker = Ua(a3));
}
function Wa(a3) {
  if (!a3)
    return false;
  var b3 = a3._valueTracker;
  if (!b3)
    return true;
  var c3 = b3.getValue();
  var d3 = "";
  a3 && (d3 = Ta(a3) ? a3.checked ? "true" : "false" : a3.value);
  a3 = d3;
  return a3 !== c3 ? (b3.setValue(a3), true) : false;
}
function Xa(a3) {
  a3 = a3 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a3 === "undefined")
    return null;
  try {
    return a3.activeElement || a3.body;
  } catch (b3) {
    return a3.body;
  }
}
function Ya(a3, b3) {
  var c3 = b3.checked;
  return objectAssign({}, b3, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c3 != null ? c3 : a3._wrapperState.initialChecked});
}
function Za(a3, b3) {
  var c3 = b3.defaultValue == null ? "" : b3.defaultValue, d3 = b3.checked != null ? b3.checked : b3.defaultChecked;
  c3 = Sa(b3.value != null ? b3.value : c3);
  a3._wrapperState = {initialChecked: d3, initialValue: c3, controlled: b3.type === "checkbox" || b3.type === "radio" ? b3.checked != null : b3.value != null};
}
function $a(a3, b3) {
  b3 = b3.checked;
  b3 != null && qa(a3, "checked", b3, false);
}
function ab(a3, b3) {
  $a(a3, b3);
  var c3 = Sa(b3.value), d3 = b3.type;
  if (c3 != null)
    if (d3 === "number") {
      if (c3 === 0 && a3.value === "" || a3.value != c3)
        a3.value = "" + c3;
    } else
      a3.value !== "" + c3 && (a3.value = "" + c3);
  else if (d3 === "submit" || d3 === "reset") {
    a3.removeAttribute("value");
    return;
  }
  b3.hasOwnProperty("value") ? bb(a3, b3.type, c3) : b3.hasOwnProperty("defaultValue") && bb(a3, b3.type, Sa(b3.defaultValue));
  b3.checked == null && b3.defaultChecked != null && (a3.defaultChecked = !!b3.defaultChecked);
}
function cb(a3, b3, c3) {
  if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
    var d3 = b3.type;
    if (!(d3 !== "submit" && d3 !== "reset" || b3.value !== void 0 && b3.value !== null))
      return;
    b3 = "" + a3._wrapperState.initialValue;
    c3 || b3 === a3.value || (a3.value = b3);
    a3.defaultValue = b3;
  }
  c3 = a3.name;
  c3 !== "" && (a3.name = "");
  a3.defaultChecked = !!a3._wrapperState.initialChecked;
  c3 !== "" && (a3.name = c3);
}
function bb(a3, b3, c3) {
  if (b3 !== "number" || Xa(a3.ownerDocument) !== a3)
    c3 == null ? a3.defaultValue = "" + a3._wrapperState.initialValue : a3.defaultValue !== "" + c3 && (a3.defaultValue = "" + c3);
}
function db(a3) {
  var b3 = "";
  react.Children.forEach(a3, function(a4) {
    a4 != null && (b3 += a4);
  });
  return b3;
}
function eb(a3, b3) {
  a3 = objectAssign({children: void 0}, b3);
  if (b3 = db(b3.children))
    a3.children = b3;
  return a3;
}
function fb(a3, b3, c3, d3) {
  a3 = a3.options;
  if (b3) {
    b3 = {};
    for (var e3 = 0; e3 < c3.length; e3++)
      b3["$" + c3[e3]] = true;
    for (c3 = 0; c3 < a3.length; c3++)
      e3 = b3.hasOwnProperty("$" + a3[c3].value), a3[c3].selected !== e3 && (a3[c3].selected = e3), e3 && d3 && (a3[c3].defaultSelected = true);
  } else {
    c3 = "" + Sa(c3);
    b3 = null;
    for (e3 = 0; e3 < a3.length; e3++) {
      if (a3[e3].value === c3) {
        a3[e3].selected = true;
        d3 && (a3[e3].defaultSelected = true);
        return;
      }
      b3 !== null || a3[e3].disabled || (b3 = a3[e3]);
    }
    b3 !== null && (b3.selected = true);
  }
}
function gb(a3, b3) {
  if (b3.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b3, {value: void 0, defaultValue: void 0, children: "" + a3._wrapperState.initialValue});
}
function hb(a3, b3) {
  var c3 = b3.value;
  if (c3 == null) {
    c3 = b3.children;
    b3 = b3.defaultValue;
    if (c3 != null) {
      if (b3 != null)
        throw Error(y(92));
      if (Array.isArray(c3)) {
        if (!(1 >= c3.length))
          throw Error(y(93));
        c3 = c3[0];
      }
      b3 = c3;
    }
    b3 == null && (b3 = "");
    c3 = b3;
  }
  a3._wrapperState = {initialValue: Sa(c3)};
}
function ib(a3, b3) {
  var c3 = Sa(b3.value), d3 = Sa(b3.defaultValue);
  c3 != null && (c3 = "" + c3, c3 !== a3.value && (a3.value = c3), b3.defaultValue == null && a3.defaultValue !== c3 && (a3.defaultValue = c3));
  d3 != null && (a3.defaultValue = "" + d3);
}
function jb(a3) {
  var b3 = a3.textContent;
  b3 === a3._wrapperState.initialValue && b3 !== "" && b3 !== null && (a3.value = b3);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a3) {
  switch (a3) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a3, b3) {
  return a3 == null || a3 === "http://www.w3.org/1999/xhtml" ? lb(b3) : a3 === "http://www.w3.org/2000/svg" && b3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a3;
}
var nb;
var ob = function(a3) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b3, c3, d3, e3) {
    MSApp.execUnsafeLocalFunction(function() {
      return a3(b3, c3, d3, e3);
    });
  } : a3;
}(function(a3, b3) {
  if (a3.namespaceURI !== kb.svg || "innerHTML" in a3)
    a3.innerHTML = b3;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
    for (b3 = nb.firstChild; a3.firstChild; )
      a3.removeChild(a3.firstChild);
    for (; b3.firstChild; )
      a3.appendChild(b3.firstChild);
  }
});
function pb(a3, b3) {
  if (b3) {
    var c3 = a3.firstChild;
    if (c3 && c3 === a3.lastChild && c3.nodeType === 3) {
      c3.nodeValue = b3;
      return;
    }
  }
  a3.textContent = b3;
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
Object.keys(qb).forEach(function(a3) {
  rb.forEach(function(b3) {
    b3 = b3 + a3.charAt(0).toUpperCase() + a3.substring(1);
    qb[b3] = qb[a3];
  });
});
function sb(a3, b3, c3) {
  return b3 == null || typeof b3 === "boolean" || b3 === "" ? "" : c3 || typeof b3 !== "number" || b3 === 0 || qb.hasOwnProperty(a3) && qb[a3] ? ("" + b3).trim() : b3 + "px";
}
function tb(a3, b3) {
  a3 = a3.style;
  for (var c3 in b3)
    if (b3.hasOwnProperty(c3)) {
      var d3 = c3.indexOf("--") === 0, e3 = sb(c3, b3[c3], d3);
      c3 === "float" && (c3 = "cssFloat");
      d3 ? a3.setProperty(c3, e3) : a3[c3] = e3;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a3, b3) {
  if (b3) {
    if (ub[a3] && (b3.children != null || b3.dangerouslySetInnerHTML != null))
      throw Error(y(137, a3));
    if (b3.dangerouslySetInnerHTML != null) {
      if (b3.children != null)
        throw Error(y(60));
      if (!(typeof b3.dangerouslySetInnerHTML === "object" && "__html" in b3.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b3.style != null && typeof b3.style !== "object")
      throw Error(y(62));
  }
}
function wb(a3, b3) {
  if (a3.indexOf("-") === -1)
    return typeof b3.is === "string";
  switch (a3) {
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
function xb(a3) {
  a3 = a3.target || a3.srcElement || window;
  a3.correspondingUseElement && (a3 = a3.correspondingUseElement);
  return a3.nodeType === 3 ? a3.parentNode : a3;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a3) {
  if (a3 = Cb(a3)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b3 = a3.stateNode;
    b3 && (b3 = Db(b3), yb(a3.stateNode, a3.type, b3));
  }
}
function Eb(a3) {
  zb ? Ab ? Ab.push(a3) : Ab = [a3] : zb = a3;
}
function Fb() {
  if (zb) {
    var a3 = zb, b3 = Ab;
    Ab = zb = null;
    Bb(a3);
    if (b3)
      for (a3 = 0; a3 < b3.length; a3++)
        Bb(b3[a3]);
  }
}
function Gb(a3, b3) {
  return a3(b3);
}
function Hb(a3, b3, c3, d3, e3) {
  return a3(b3, c3, d3, e3);
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
function Nb(a3, b3, c3) {
  if (Lb)
    return a3(b3, c3);
  Lb = true;
  try {
    return Jb(a3, b3, c3);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a3, b3) {
  var c3 = a3.stateNode;
  if (c3 === null)
    return null;
  var d3 = Db(c3);
  if (d3 === null)
    return null;
  c3 = d3[b3];
  a:
    switch (b3) {
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
        (d3 = !d3.disabled) || (a3 = a3.type, d3 = !(a3 === "button" || a3 === "input" || a3 === "select" || a3 === "textarea"));
        a3 = !d3;
        break a;
      default:
        a3 = false;
    }
  if (a3)
    return null;
  if (c3 && typeof c3 !== "function")
    throw Error(y(231, b3, typeof c3));
  return c3;
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
  } catch (a3) {
    Pb = false;
  }
var Qb;
function Rb(a3, b3, c3, d3, e3, f3, g3, h3, k3) {
  var l3 = Array.prototype.slice.call(arguments, 3);
  try {
    b3.apply(c3, l3);
  } catch (n3) {
    this.onError(n3);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a3) {
  Sb = true;
  Tb = a3;
}};
function Xb(a3, b3, c3, d3, e3, f3, g3, h3, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a3, b3, c3, d3, e3, f3, g3, h3, k3) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l3 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l3);
  }
}
function Zb(a3) {
  var b3 = a3, c3 = a3;
  if (a3.alternate)
    for (; b3.return; )
      b3 = b3.return;
  else {
    a3 = b3;
    do
      b3 = a3, (b3.flags & 1026) !== 0 && (c3 = b3.return), a3 = b3.return;
    while (a3);
  }
  return b3.tag === 3 ? c3 : null;
}
function $b(a3) {
  if (a3.tag === 13) {
    var b3 = a3.memoizedState;
    b3 === null && (a3 = a3.alternate, a3 !== null && (b3 = a3.memoizedState));
    if (b3 !== null)
      return b3.dehydrated;
  }
  return null;
}
function ac(a3) {
  if (Zb(a3) !== a3)
    throw Error(y(188));
}
function bc(a3) {
  var b3 = a3.alternate;
  if (!b3) {
    b3 = Zb(a3);
    if (b3 === null)
      throw Error(y(188));
    return b3 !== a3 ? null : a3;
  }
  for (var c3 = a3, d3 = b3; ; ) {
    var e3 = c3.return;
    if (e3 === null)
      break;
    var f3 = e3.alternate;
    if (f3 === null) {
      d3 = e3.return;
      if (d3 !== null) {
        c3 = d3;
        continue;
      }
      break;
    }
    if (e3.child === f3.child) {
      for (f3 = e3.child; f3; ) {
        if (f3 === c3)
          return ac(e3), a3;
        if (f3 === d3)
          return ac(e3), b3;
        f3 = f3.sibling;
      }
      throw Error(y(188));
    }
    if (c3.return !== d3.return)
      c3 = e3, d3 = f3;
    else {
      for (var g3 = false, h3 = e3.child; h3; ) {
        if (h3 === c3) {
          g3 = true;
          c3 = e3;
          d3 = f3;
          break;
        }
        if (h3 === d3) {
          g3 = true;
          d3 = e3;
          c3 = f3;
          break;
        }
        h3 = h3.sibling;
      }
      if (!g3) {
        for (h3 = f3.child; h3; ) {
          if (h3 === c3) {
            g3 = true;
            c3 = f3;
            d3 = e3;
            break;
          }
          if (h3 === d3) {
            g3 = true;
            d3 = f3;
            c3 = e3;
            break;
          }
          h3 = h3.sibling;
        }
        if (!g3)
          throw Error(y(189));
      }
    }
    if (c3.alternate !== d3)
      throw Error(y(190));
  }
  if (c3.tag !== 3)
    throw Error(y(188));
  return c3.stateNode.current === c3 ? a3 : b3;
}
function cc(a3) {
  a3 = bc(a3);
  if (!a3)
    return null;
  for (var b3 = a3; ; ) {
    if (b3.tag === 5 || b3.tag === 6)
      return b3;
    if (b3.child)
      b3.child.return = b3, b3 = b3.child;
    else {
      if (b3 === a3)
        break;
      for (; !b3.sibling; ) {
        if (!b3.return || b3.return === a3)
          return null;
        b3 = b3.return;
      }
      b3.sibling.return = b3.return;
      b3 = b3.sibling;
    }
  }
  return null;
}
function dc(a3, b3) {
  for (var c3 = a3.alternate; b3 !== null; ) {
    if (b3 === a3 || b3 === c3)
      return true;
    b3 = b3.return;
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
function rc(a3, b3, c3, d3, e3) {
  return {blockedOn: a3, domEventName: b3, eventSystemFlags: c3 | 16, nativeEvent: e3, targetContainers: [d3]};
}
function sc(a3, b3) {
  switch (a3) {
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
      nc.delete(b3.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b3.pointerId);
  }
}
function tc(a3, b3, c3, d3, e3, f3) {
  if (a3 === null || a3.nativeEvent !== f3)
    return a3 = rc(b3, c3, d3, e3, f3), b3 !== null && (b3 = Cb(b3), b3 !== null && fc(b3)), a3;
  a3.eventSystemFlags |= d3;
  b3 = a3.targetContainers;
  e3 !== null && b3.indexOf(e3) === -1 && b3.push(e3);
  return a3;
}
function uc(a3, b3, c3, d3, e3) {
  switch (b3) {
    case "focusin":
      return kc = tc(kc, a3, b3, c3, d3, e3), true;
    case "dragenter":
      return lc = tc(lc, a3, b3, c3, d3, e3), true;
    case "mouseover":
      return mc = tc(mc, a3, b3, c3, d3, e3), true;
    case "pointerover":
      var f3 = e3.pointerId;
      nc.set(f3, tc(nc.get(f3) || null, a3, b3, c3, d3, e3));
      return true;
    case "gotpointercapture":
      return f3 = e3.pointerId, oc.set(f3, tc(oc.get(f3) || null, a3, b3, c3, d3, e3)), true;
  }
  return false;
}
function vc(a3) {
  var b3 = wc(a3.target);
  if (b3 !== null) {
    var c3 = Zb(b3);
    if (c3 !== null) {
      if (b3 = c3.tag, b3 === 13) {
        if (b3 = $b(c3), b3 !== null) {
          a3.blockedOn = b3;
          hc(a3.lanePriority, function() {
            scheduler.unstable_runWithPriority(a3.priority, function() {
              gc(c3);
            });
          });
          return;
        }
      } else if (b3 === 3 && c3.stateNode.hydrate) {
        a3.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a3.blockedOn = null;
}
function xc(a3) {
  if (a3.blockedOn !== null)
    return false;
  for (var b3 = a3.targetContainers; 0 < b3.length; ) {
    var c3 = yc(a3.domEventName, a3.eventSystemFlags, b3[0], a3.nativeEvent);
    if (c3 !== null)
      return b3 = Cb(c3), b3 !== null && fc(b3), a3.blockedOn = c3, false;
    b3.shift();
  }
  return true;
}
function zc(a3, b3, c3) {
  xc(a3) && c3.delete(b3);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a3 = jc[0];
    if (a3.blockedOn !== null) {
      a3 = Cb(a3.blockedOn);
      a3 !== null && ec(a3);
      break;
    }
    for (var b3 = a3.targetContainers; 0 < b3.length; ) {
      var c3 = yc(a3.domEventName, a3.eventSystemFlags, b3[0], a3.nativeEvent);
      if (c3 !== null) {
        a3.blockedOn = c3;
        break;
      }
      b3.shift();
    }
    a3.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a3, b3) {
  a3.blockedOn === b3 && (a3.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a3) {
  function b3(b4) {
    return Bc(b4, a3);
  }
  if (0 < jc.length) {
    Bc(jc[0], a3);
    for (var c3 = 1; c3 < jc.length; c3++) {
      var d3 = jc[c3];
      d3.blockedOn === a3 && (d3.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a3);
  lc !== null && Bc(lc, a3);
  mc !== null && Bc(mc, a3);
  nc.forEach(b3);
  oc.forEach(b3);
  for (c3 = 0; c3 < pc.length; c3++)
    d3 = pc[c3], d3.blockedOn === a3 && (d3.blockedOn = null);
  for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
    vc(c3), c3.blockedOn === null && pc.shift();
}
function Dc(a3, b3) {
  var c3 = {};
  c3[a3.toLowerCase()] = b3.toLowerCase();
  c3["Webkit" + a3] = "webkit" + b3;
  c3["Moz" + a3] = "moz" + b3;
  return c3;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a3) {
  if (Fc[a3])
    return Fc[a3];
  if (!Ec[a3])
    return a3;
  var b3 = Ec[a3], c3;
  for (c3 in b3)
    if (b3.hasOwnProperty(c3) && c3 in Gc)
      return Fc[a3] = b3[c3];
  return a3;
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
function Pc(a3, b3) {
  for (var c3 = 0; c3 < a3.length; c3 += 2) {
    var d3 = a3[c3], e3 = a3[c3 + 1];
    e3 = "on" + (e3[0].toUpperCase() + e3.slice(1));
    Nc.set(d3, b3);
    Mc.set(d3, e3);
    da(e3, [d3]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a3) {
  if ((1 & a3) !== 0)
    return F = 15, 1;
  if ((2 & a3) !== 0)
    return F = 14, 2;
  if ((4 & a3) !== 0)
    return F = 13, 4;
  var b3 = 24 & a3;
  if (b3 !== 0)
    return F = 12, b3;
  if ((a3 & 32) !== 0)
    return F = 11, 32;
  b3 = 192 & a3;
  if (b3 !== 0)
    return F = 10, b3;
  if ((a3 & 256) !== 0)
    return F = 9, 256;
  b3 = 3584 & a3;
  if (b3 !== 0)
    return F = 8, b3;
  if ((a3 & 4096) !== 0)
    return F = 7, 4096;
  b3 = 4186112 & a3;
  if (b3 !== 0)
    return F = 6, b3;
  b3 = 62914560 & a3;
  if (b3 !== 0)
    return F = 5, b3;
  if (a3 & 67108864)
    return F = 4, 67108864;
  if ((a3 & 134217728) !== 0)
    return F = 3, 134217728;
  b3 = 805306368 & a3;
  if (b3 !== 0)
    return F = 2, b3;
  if ((1073741824 & a3) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a3;
}
function Sc(a3) {
  switch (a3) {
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
function Tc(a3) {
  switch (a3) {
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
      throw Error(y(358, a3));
  }
}
function Uc(a3, b3) {
  var c3 = a3.pendingLanes;
  if (c3 === 0)
    return F = 0;
  var d3 = 0, e3 = 0, f3 = a3.expiredLanes, g3 = a3.suspendedLanes, h3 = a3.pingedLanes;
  if (f3 !== 0)
    d3 = f3, e3 = F = 15;
  else if (f3 = c3 & 134217727, f3 !== 0) {
    var k3 = f3 & ~g3;
    k3 !== 0 ? (d3 = Rc(k3), e3 = F) : (h3 &= f3, h3 !== 0 && (d3 = Rc(h3), e3 = F));
  } else
    f3 = c3 & ~g3, f3 !== 0 ? (d3 = Rc(f3), e3 = F) : h3 !== 0 && (d3 = Rc(h3), e3 = F);
  if (d3 === 0)
    return 0;
  d3 = 31 - Vc(d3);
  d3 = c3 & ((0 > d3 ? 0 : 1 << d3) << 1) - 1;
  if (b3 !== 0 && b3 !== d3 && (b3 & g3) === 0) {
    Rc(b3);
    if (e3 <= F)
      return b3;
    F = e3;
  }
  b3 = a3.entangledLanes;
  if (b3 !== 0)
    for (a3 = a3.entanglements, b3 &= d3; 0 < b3; )
      c3 = 31 - Vc(b3), e3 = 1 << c3, d3 |= a3[c3], b3 &= ~e3;
  return d3;
}
function Wc(a3) {
  a3 = a3.pendingLanes & -1073741825;
  return a3 !== 0 ? a3 : a3 & 1073741824 ? 1073741824 : 0;
}
function Xc(a3, b3) {
  switch (a3) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a3 = Yc(24 & ~b3), a3 === 0 ? Xc(10, b3) : a3;
    case 10:
      return a3 = Yc(192 & ~b3), a3 === 0 ? Xc(8, b3) : a3;
    case 8:
      return a3 = Yc(3584 & ~b3), a3 === 0 && (a3 = Yc(4186112 & ~b3), a3 === 0 && (a3 = 512)), a3;
    case 2:
      return b3 = Yc(805306368 & ~b3), b3 === 0 && (b3 = 268435456), b3;
  }
  throw Error(y(358, a3));
}
function Yc(a3) {
  return a3 & -a3;
}
function Zc(a3) {
  for (var b3 = [], c3 = 0; 31 > c3; c3++)
    b3.push(a3);
  return b3;
}
function $c(a3, b3, c3) {
  a3.pendingLanes |= b3;
  var d3 = b3 - 1;
  a3.suspendedLanes &= d3;
  a3.pingedLanes &= d3;
  a3 = a3.eventTimes;
  b3 = 31 - Vc(b3);
  a3[b3] = c3;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a3) {
  return a3 === 0 ? 32 : 31 - (bd(a3) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a3, b3, c3, d3) {
  Kb || Ib();
  var e3 = hd, f3 = Kb;
  Kb = true;
  try {
    Hb(e3, a3, b3, c3, d3);
  } finally {
    (Kb = f3) || Mb();
  }
}
function id(a3, b3, c3, d3) {
  ed(dd, hd.bind(null, a3, b3, c3, d3));
}
function hd(a3, b3, c3, d3) {
  if (fd) {
    var e3;
    if ((e3 = (b3 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a3))
      a3 = rc(null, a3, b3, c3, d3), jc.push(a3);
    else {
      var f3 = yc(a3, b3, c3, d3);
      if (f3 === null)
        e3 && sc(a3, d3);
      else {
        if (e3) {
          if (-1 < qc.indexOf(a3)) {
            a3 = rc(f3, a3, b3, c3, d3);
            jc.push(a3);
            return;
          }
          if (uc(f3, a3, b3, c3, d3))
            return;
          sc(a3, d3);
        }
        jd(a3, b3, d3, null, c3);
      }
    }
  }
}
function yc(a3, b3, c3, d3) {
  var e3 = xb(d3);
  e3 = wc(e3);
  if (e3 !== null) {
    var f3 = Zb(e3);
    if (f3 === null)
      e3 = null;
    else {
      var g3 = f3.tag;
      if (g3 === 13) {
        e3 = $b(f3);
        if (e3 !== null)
          return e3;
        e3 = null;
      } else if (g3 === 3) {
        if (f3.stateNode.hydrate)
          return f3.tag === 3 ? f3.stateNode.containerInfo : null;
        e3 = null;
      } else
        f3 !== e3 && (e3 = null);
    }
  }
  jd(a3, b3, d3, e3, c3);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a3, b3 = ld, c3 = b3.length, d3, e3 = "value" in kd ? kd.value : kd.textContent, f3 = e3.length;
  for (a3 = 0; a3 < c3 && b3[a3] === e3[a3]; a3++)
    ;
  var g3 = c3 - a3;
  for (d3 = 1; d3 <= g3 && b3[c3 - d3] === e3[f3 - d3]; d3++)
    ;
  return md = e3.slice(a3, 1 < d3 ? 1 - d3 : void 0);
}
function od(a3) {
  var b3 = a3.keyCode;
  "charCode" in a3 ? (a3 = a3.charCode, a3 === 0 && b3 === 13 && (a3 = 13)) : a3 = b3;
  a3 === 10 && (a3 = 13);
  return 32 <= a3 || a3 === 13 ? a3 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a3) {
  function b3(b4, d3, e3, f3, g3) {
    this._reactName = b4;
    this._targetInst = e3;
    this.type = d3;
    this.nativeEvent = f3;
    this.target = g3;
    this.currentTarget = null;
    for (var c3 in a3)
      a3.hasOwnProperty(c3) && (b4 = a3[c3], this[c3] = b4 ? b4(f3) : f3[c3]);
    this.isDefaultPrevented = (f3.defaultPrevented != null ? f3.defaultPrevented : f3.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b3.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a4 = this.nativeEvent;
    a4 && (a4.preventDefault ? a4.preventDefault() : typeof a4.returnValue !== "unknown" && (a4.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a4 = this.nativeEvent;
    a4 && (a4.stopPropagation ? a4.stopPropagation() : typeof a4.cancelBubble !== "unknown" && (a4.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b3;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a3) {
  return a3.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a3) {
  return a3.relatedTarget === void 0 ? a3.fromElement === a3.srcElement ? a3.toElement : a3.fromElement : a3.relatedTarget;
}, movementX: function(a3) {
  if ("movementX" in a3)
    return a3.movementX;
  a3 !== yd && (yd && a3.type === "mousemove" ? (wd = a3.screenX - yd.screenX, xd = a3.screenY - yd.screenY) : xd = wd = 0, yd = a3);
  return wd;
}, movementY: function(a3) {
  return "movementY" in a3 ? a3.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a3) {
  return "clipboardData" in a3 ? a3.clipboardData : window.clipboardData;
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
function Pd(a3) {
  var b3 = this.nativeEvent;
  return b3.getModifierState ? b3.getModifierState(a3) : (a3 = Od[a3]) ? !!b3[a3] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a3) {
  if (a3.key) {
    var b3 = Md[a3.key] || a3.key;
    if (b3 !== "Unidentified")
      return b3;
  }
  return a3.type === "keypress" ? (a3 = od(a3), a3 === 13 ? "Enter" : String.fromCharCode(a3)) : a3.type === "keydown" || a3.type === "keyup" ? Nd[a3.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a3) {
  return a3.type === "keypress" ? od(a3) : 0;
}, keyCode: function(a3) {
  return a3.type === "keydown" || a3.type === "keyup" ? a3.keyCode : 0;
}, which: function(a3) {
  return a3.type === "keypress" ? od(a3) : a3.type === "keydown" || a3.type === "keyup" ? a3.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a3) {
    return "deltaX" in a3 ? a3.deltaX : "wheelDeltaX" in a3 ? -a3.wheelDeltaX : 0;
  },
  deltaY: function(a3) {
    return "deltaY" in a3 ? a3.deltaY : "wheelDeltaY" in a3 ? -a3.wheelDeltaY : "wheelDelta" in a3 ? -a3.wheelDelta : 0;
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
function ge(a3, b3) {
  switch (a3) {
    case "keyup":
      return $d.indexOf(b3.keyCode) !== -1;
    case "keydown":
      return b3.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a3) {
  a3 = a3.detail;
  return typeof a3 === "object" && "data" in a3 ? a3.data : null;
}
var ie = false;
function je(a3, b3) {
  switch (a3) {
    case "compositionend":
      return he(b3);
    case "keypress":
      if (b3.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a3 = b3.data, a3 === ee && fe ? null : a3;
    default:
      return null;
  }
}
function ke(a3, b3) {
  if (ie)
    return a3 === "compositionend" || !ae && ge(a3, b3) ? (a3 = nd(), md = ld = kd = null, ie = false, a3) : null;
  switch (a3) {
    case "paste":
      return null;
    case "keypress":
      if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
        if (b3.char && 1 < b3.char.length)
          return b3.char;
        if (b3.which)
          return String.fromCharCode(b3.which);
      }
      return null;
    case "compositionend":
      return de && b3.locale !== "ko" ? null : b3.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a3) {
  var b3 = a3 && a3.nodeName && a3.nodeName.toLowerCase();
  return b3 === "input" ? !!le[a3.type] : b3 === "textarea" ? true : false;
}
function ne(a3, b3, c3, d3) {
  Eb(d3);
  b3 = oe(b3, "onChange");
  0 < b3.length && (c3 = new td("onChange", "change", null, c3, d3), a3.push({event: c3, listeners: b3}));
}
var pe = null;
var qe = null;
function re(a3) {
  se(a3, 0);
}
function te(a3) {
  var b3 = ue(a3);
  if (Wa(b3))
    return a3;
}
function ve(a3, b3) {
  if (a3 === "change")
    return b3;
}
var we = false;
if (fa) {
  if (fa) {
    ye3 = "oninput" in document;
    if (!ye3) {
      ze3 = document.createElement("div");
      ze3.setAttribute("oninput", "return;");
      ye3 = typeof ze3.oninput === "function";
    }
    xe3 = ye3;
  } else
    xe3 = false;
  we = xe3 && (!document.documentMode || 9 < document.documentMode);
}
var xe3;
var ye3;
var ze3;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a3) {
  if (a3.propertyName === "value" && te(qe)) {
    var b3 = [];
    ne(b3, qe, a3, xb(a3));
    a3 = re;
    if (Kb)
      a3(b3);
    else {
      Kb = true;
      try {
        Gb(a3, b3);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a3, b3, c3) {
  a3 === "focusin" ? (Ae(), pe = b3, qe = c3, pe.attachEvent("onpropertychange", Be)) : a3 === "focusout" && Ae();
}
function De(a3) {
  if (a3 === "selectionchange" || a3 === "keyup" || a3 === "keydown")
    return te(qe);
}
function Ee(a3, b3) {
  if (a3 === "click")
    return te(b3);
}
function Fe(a3, b3) {
  if (a3 === "input" || a3 === "change")
    return te(b3);
}
function Ge(a3, b3) {
  return a3 === b3 && (a3 !== 0 || 1 / a3 === 1 / b3) || a3 !== a3 && b3 !== b3;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a3, b3) {
  if (He(a3, b3))
    return true;
  if (typeof a3 !== "object" || a3 === null || typeof b3 !== "object" || b3 === null)
    return false;
  var c3 = Object.keys(a3), d3 = Object.keys(b3);
  if (c3.length !== d3.length)
    return false;
  for (d3 = 0; d3 < c3.length; d3++)
    if (!Ie.call(b3, c3[d3]) || !He(a3[c3[d3]], b3[c3[d3]]))
      return false;
  return true;
}
function Ke(a3) {
  for (; a3 && a3.firstChild; )
    a3 = a3.firstChild;
  return a3;
}
function Le(a3, b3) {
  var c3 = Ke(a3);
  a3 = 0;
  for (var d3; c3; ) {
    if (c3.nodeType === 3) {
      d3 = a3 + c3.textContent.length;
      if (a3 <= b3 && d3 >= b3)
        return {node: c3, offset: b3 - a3};
      a3 = d3;
    }
    a: {
      for (; c3; ) {
        if (c3.nextSibling) {
          c3 = c3.nextSibling;
          break a;
        }
        c3 = c3.parentNode;
      }
      c3 = void 0;
    }
    c3 = Ke(c3);
  }
}
function Me(a3, b3) {
  return a3 && b3 ? a3 === b3 ? true : a3 && a3.nodeType === 3 ? false : b3 && b3.nodeType === 3 ? Me(a3, b3.parentNode) : "contains" in a3 ? a3.contains(b3) : a3.compareDocumentPosition ? !!(a3.compareDocumentPosition(b3) & 16) : false : false;
}
function Ne() {
  for (var a3 = window, b3 = Xa(); b3 instanceof a3.HTMLIFrameElement; ) {
    try {
      var c3 = typeof b3.contentWindow.location.href === "string";
    } catch (d3) {
      c3 = false;
    }
    if (c3)
      a3 = b3.contentWindow;
    else
      break;
    b3 = Xa(a3.document);
  }
  return b3;
}
function Oe(a3) {
  var b3 = a3 && a3.nodeName && a3.nodeName.toLowerCase();
  return b3 && (b3 === "input" && (a3.type === "text" || a3.type === "search" || a3.type === "tel" || a3.type === "url" || a3.type === "password") || b3 === "textarea" || a3.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a3, b3, c3) {
  var d3 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
  Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Oe(d3) ? d3 = {start: d3.selectionStart, end: d3.selectionEnd} : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = {anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset}), Se && Je(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b3 = new td("onSelect", "select", null, b3, c3), a3.push({event: b3, listeners: d3}), b3.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve3 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We3 = 0; We3 < Ve3.length; We3++)
  Nc.set(Ve3[We3], 0);
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
function Ze(a3, b3, c3) {
  var d3 = a3.type || "unknown-event";
  a3.currentTarget = c3;
  Yb(d3, b3, void 0, a3);
  a3.currentTarget = null;
}
function se(a3, b3) {
  b3 = (b3 & 4) !== 0;
  for (var c3 = 0; c3 < a3.length; c3++) {
    var d3 = a3[c3], e3 = d3.event;
    d3 = d3.listeners;
    a: {
      var f3 = void 0;
      if (b3)
        for (var g3 = d3.length - 1; 0 <= g3; g3--) {
          var h3 = d3[g3], k3 = h3.instance, l3 = h3.currentTarget;
          h3 = h3.listener;
          if (k3 !== f3 && e3.isPropagationStopped())
            break a;
          Ze(e3, h3, l3);
          f3 = k3;
        }
      else
        for (g3 = 0; g3 < d3.length; g3++) {
          h3 = d3[g3];
          k3 = h3.instance;
          l3 = h3.currentTarget;
          h3 = h3.listener;
          if (k3 !== f3 && e3.isPropagationStopped())
            break a;
          Ze(e3, h3, l3);
          f3 = k3;
        }
    }
  }
  if (Ub)
    throw a3 = Vb, Ub = false, Vb = null, a3;
}
function G(a3, b3) {
  var c3 = $e(b3), d3 = a3 + "__bubble";
  c3.has(d3) || (af(b3, a3, 2, false), c3.add(d3));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a3) {
  a3[bf] || (a3[bf] = true, ba.forEach(function(b3) {
    Ye.has(b3) || df(b3, false, a3, null);
    df(b3, true, a3, null);
  }));
}
function df(a3, b3, c3, d3) {
  var e3 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f3 = c3;
  a3 === "selectionchange" && c3.nodeType !== 9 && (f3 = c3.ownerDocument);
  if (d3 !== null && !b3 && Ye.has(a3)) {
    if (a3 !== "scroll")
      return;
    e3 |= 2;
    f3 = d3;
  }
  var g3 = $e(f3), h3 = a3 + "__" + (b3 ? "capture" : "bubble");
  g3.has(h3) || (b3 && (e3 |= 4), af(f3, a3, e3, b3), g3.add(h3));
}
function af(a3, b3, c3, d3) {
  var e3 = Nc.get(b3);
  switch (e3 === void 0 ? 2 : e3) {
    case 0:
      e3 = gd;
      break;
    case 1:
      e3 = id;
      break;
    default:
      e3 = hd;
  }
  c3 = e3.bind(null, b3, c3, a3);
  e3 = void 0;
  !Pb || b3 !== "touchstart" && b3 !== "touchmove" && b3 !== "wheel" || (e3 = true);
  d3 ? e3 !== void 0 ? a3.addEventListener(b3, c3, {capture: true, passive: e3}) : a3.addEventListener(b3, c3, true) : e3 !== void 0 ? a3.addEventListener(b3, c3, {passive: e3}) : a3.addEventListener(b3, c3, false);
}
function jd(a3, b3, c3, d3, e3) {
  var f3 = d3;
  if ((b3 & 1) === 0 && (b3 & 2) === 0 && d3 !== null)
    a:
      for (; ; ) {
        if (d3 === null)
          return;
        var g3 = d3.tag;
        if (g3 === 3 || g3 === 4) {
          var h3 = d3.stateNode.containerInfo;
          if (h3 === e3 || h3.nodeType === 8 && h3.parentNode === e3)
            break;
          if (g3 === 4)
            for (g3 = d3.return; g3 !== null; ) {
              var k3 = g3.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g3.stateNode.containerInfo, k3 === e3 || k3.nodeType === 8 && k3.parentNode === e3)
                  return;
              }
              g3 = g3.return;
            }
          for (; h3 !== null; ) {
            g3 = wc(h3);
            if (g3 === null)
              return;
            k3 = g3.tag;
            if (k3 === 5 || k3 === 6) {
              d3 = f3 = g3;
              continue a;
            }
            h3 = h3.parentNode;
          }
        }
        d3 = d3.return;
      }
  Nb(function() {
    var d4 = f3, e4 = xb(c3), g4 = [];
    a: {
      var h4 = Mc.get(a3);
      if (h4 !== void 0) {
        var k4 = td, x3 = a3;
        switch (a3) {
          case "keypress":
            if (od(c3) === 0)
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
            if (c3.button === 2)
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
        var w3 = (b3 & 4) !== 0, z3 = !w3 && a3 === "scroll", u3 = w3 ? h4 !== null ? h4 + "Capture" : null : h4;
        w3 = [];
        for (var t3 = d4, q3; t3 !== null; ) {
          q3 = t3;
          var v3 = q3.stateNode;
          q3.tag === 5 && v3 !== null && (q3 = v3, u3 !== null && (v3 = Ob(t3, u3), v3 != null && w3.push(ef(t3, v3, q3))));
          if (z3)
            break;
          t3 = t3.return;
        }
        0 < w3.length && (h4 = new k4(h4, x3, null, c3, e4), g4.push({event: h4, listeners: w3}));
      }
    }
    if ((b3 & 7) === 0) {
      a: {
        h4 = a3 === "mouseover" || a3 === "pointerover";
        k4 = a3 === "mouseout" || a3 === "pointerout";
        if (h4 && (b3 & 16) === 0 && (x3 = c3.relatedTarget || c3.fromElement) && (wc(x3) || x3[ff]))
          break a;
        if (k4 || h4) {
          h4 = e4.window === e4 ? e4 : (h4 = e4.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
          if (k4) {
            if (x3 = c3.relatedTarget || c3.toElement, k4 = d4, x3 = x3 ? wc(x3) : null, x3 !== null && (z3 = Zb(x3), x3 !== z3 || x3.tag !== 5 && x3.tag !== 6))
              x3 = null;
          } else
            k4 = null, x3 = d4;
          if (k4 !== x3) {
            w3 = Bd;
            v3 = "onMouseLeave";
            u3 = "onMouseEnter";
            t3 = "mouse";
            if (a3 === "pointerout" || a3 === "pointerover")
              w3 = Td, v3 = "onPointerLeave", u3 = "onPointerEnter", t3 = "pointer";
            z3 = k4 == null ? h4 : ue(k4);
            q3 = x3 == null ? h4 : ue(x3);
            h4 = new w3(v3, t3 + "leave", k4, c3, e4);
            h4.target = z3;
            h4.relatedTarget = q3;
            v3 = null;
            wc(e4) === d4 && (w3 = new w3(u3, t3 + "enter", x3, c3, e4), w3.target = q3, w3.relatedTarget = z3, v3 = w3);
            z3 = v3;
            if (k4 && x3)
              b: {
                w3 = k4;
                u3 = x3;
                t3 = 0;
                for (q3 = w3; q3; q3 = gf(q3))
                  t3++;
                q3 = 0;
                for (v3 = u3; v3; v3 = gf(v3))
                  q3++;
                for (; 0 < t3 - q3; )
                  w3 = gf(w3), t3--;
                for (; 0 < q3 - t3; )
                  u3 = gf(u3), q3--;
                for (; t3--; ) {
                  if (w3 === u3 || u3 !== null && w3 === u3.alternate)
                    break b;
                  w3 = gf(w3);
                  u3 = gf(u3);
                }
                w3 = null;
              }
            else
              w3 = null;
            k4 !== null && hf(g4, h4, k4, w3, false);
            x3 !== null && z3 !== null && hf(g4, z3, x3, w3, true);
          }
        }
      }
      a: {
        h4 = d4 ? ue(d4) : window;
        k4 = h4.nodeName && h4.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h4.type === "file")
          var J3 = ve;
        else if (me(h4))
          if (we)
            J3 = Fe;
          else {
            J3 = De;
            var K3 = Ce;
          }
        else
          (k4 = h4.nodeName) && k4.toLowerCase() === "input" && (h4.type === "checkbox" || h4.type === "radio") && (J3 = Ee);
        if (J3 && (J3 = J3(a3, d4))) {
          ne(g4, J3, c3, e4);
          break a;
        }
        K3 && K3(a3, h4, d4);
        a3 === "focusout" && (K3 = h4._wrapperState) && K3.controlled && h4.type === "number" && bb(h4, "number", h4.value);
      }
      K3 = d4 ? ue(d4) : window;
      switch (a3) {
        case "focusin":
          if (me(K3) || K3.contentEditable === "true")
            Qe = K3, Re = d4, Se = null;
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
          Ue(g4, c3, e4);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g4, c3, e4);
      }
      var Q3;
      if (ae)
        b: {
          switch (a3) {
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
        ie ? ge(a3, c3) && (L3 = "onCompositionEnd") : a3 === "keydown" && c3.keyCode === 229 && (L3 = "onCompositionStart");
      L3 && (de && c3.locale !== "ko" && (ie || L3 !== "onCompositionStart" ? L3 === "onCompositionEnd" && ie && (Q3 = nd()) : (kd = e4, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K3 = oe(d4, L3), 0 < K3.length && (L3 = new Ld(L3, a3, null, c3, e4), g4.push({event: L3, listeners: K3}), Q3 ? L3.data = Q3 : (Q3 = he(c3), Q3 !== null && (L3.data = Q3))));
      if (Q3 = ce ? je(a3, c3) : ke(a3, c3))
        d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e4 = new Ld("onBeforeInput", "beforeinput", null, c3, e4), g4.push({event: e4, listeners: d4}), e4.data = Q3);
    }
    se(g4, b3);
  });
}
function ef(a3, b3, c3) {
  return {instance: a3, listener: b3, currentTarget: c3};
}
function oe(a3, b3) {
  for (var c3 = b3 + "Capture", d3 = []; a3 !== null; ) {
    var e3 = a3, f3 = e3.stateNode;
    e3.tag === 5 && f3 !== null && (e3 = f3, f3 = Ob(a3, c3), f3 != null && d3.unshift(ef(a3, f3, e3)), f3 = Ob(a3, b3), f3 != null && d3.push(ef(a3, f3, e3)));
    a3 = a3.return;
  }
  return d3;
}
function gf(a3) {
  if (a3 === null)
    return null;
  do
    a3 = a3.return;
  while (a3 && a3.tag !== 5);
  return a3 ? a3 : null;
}
function hf(a3, b3, c3, d3, e3) {
  for (var f3 = b3._reactName, g3 = []; c3 !== null && c3 !== d3; ) {
    var h3 = c3, k3 = h3.alternate, l3 = h3.stateNode;
    if (k3 !== null && k3 === d3)
      break;
    h3.tag === 5 && l3 !== null && (h3 = l3, e3 ? (k3 = Ob(c3, f3), k3 != null && g3.unshift(ef(c3, k3, h3))) : e3 || (k3 = Ob(c3, f3), k3 != null && g3.push(ef(c3, k3, h3))));
    c3 = c3.return;
  }
  g3.length !== 0 && a3.push({event: b3, listeners: g3});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a3, b3) {
  switch (a3) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b3.autoFocus;
  }
  return false;
}
function nf(a3, b3) {
  return a3 === "textarea" || a3 === "option" || a3 === "noscript" || typeof b3.children === "string" || typeof b3.children === "number" || typeof b3.dangerouslySetInnerHTML === "object" && b3.dangerouslySetInnerHTML !== null && b3.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a3) {
  a3.nodeType === 1 ? a3.textContent = "" : a3.nodeType === 9 && (a3 = a3.body, a3 != null && (a3.textContent = ""));
}
function rf(a3) {
  for (; a3 != null; a3 = a3.nextSibling) {
    var b3 = a3.nodeType;
    if (b3 === 1 || b3 === 3)
      break;
  }
  return a3;
}
function sf(a3) {
  a3 = a3.previousSibling;
  for (var b3 = 0; a3; ) {
    if (a3.nodeType === 8) {
      var c3 = a3.data;
      if (c3 === "$" || c3 === "$!" || c3 === "$?") {
        if (b3 === 0)
          return a3;
        b3--;
      } else
        c3 === "/$" && b3++;
    }
    a3 = a3.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a3) {
  return {$$typeof: Ga, toString: a3, valueOf: a3};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a3) {
  var b3 = a3[wf];
  if (b3)
    return b3;
  for (var c3 = a3.parentNode; c3; ) {
    if (b3 = c3[ff] || c3[wf]) {
      c3 = b3.alternate;
      if (b3.child !== null || c3 !== null && c3.child !== null)
        for (a3 = sf(a3); a3 !== null; ) {
          if (c3 = a3[wf])
            return c3;
          a3 = sf(a3);
        }
      return b3;
    }
    a3 = c3;
    c3 = a3.parentNode;
  }
  return null;
}
function Cb(a3) {
  a3 = a3[wf] || a3[ff];
  return !a3 || a3.tag !== 5 && a3.tag !== 6 && a3.tag !== 13 && a3.tag !== 3 ? null : a3;
}
function ue(a3) {
  if (a3.tag === 5 || a3.tag === 6)
    return a3.stateNode;
  throw Error(y(33));
}
function Db(a3) {
  return a3[xf] || null;
}
function $e(a3) {
  var b3 = a3[yf];
  b3 === void 0 && (b3 = a3[yf] = new Set());
  return b3;
}
var zf = [];
var Af = -1;
function Bf(a3) {
  return {current: a3};
}
function H(a3) {
  0 > Af || (a3.current = zf[Af], zf[Af] = null, Af--);
}
function I(a3, b3) {
  Af++;
  zf[Af] = a3.current;
  a3.current = b3;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a3, b3) {
  var c3 = a3.type.contextTypes;
  if (!c3)
    return Cf;
  var d3 = a3.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b3)
    return d3.__reactInternalMemoizedMaskedChildContext;
  var e3 = {}, f3;
  for (f3 in c3)
    e3[f3] = b3[f3];
  d3 && (a3 = a3.stateNode, a3.__reactInternalMemoizedUnmaskedChildContext = b3, a3.__reactInternalMemoizedMaskedChildContext = e3);
  return e3;
}
function Ff(a3) {
  a3 = a3.childContextTypes;
  return a3 !== null && a3 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a3, b3, c3) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b3);
  I(N, c3);
}
function If(a3, b3, c3) {
  var d3 = a3.stateNode;
  a3 = b3.childContextTypes;
  if (typeof d3.getChildContext !== "function")
    return c3;
  d3 = d3.getChildContext();
  for (var e3 in d3)
    if (!(e3 in a3))
      throw Error(y(108, Ra(b3) || "Unknown", e3));
  return objectAssign({}, c3, d3);
}
function Jf(a3) {
  a3 = (a3 = a3.stateNode) && a3.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a3);
  I(N, N.current);
  return true;
}
function Kf(a3, b3, c3) {
  var d3 = a3.stateNode;
  if (!d3)
    throw Error(y(169));
  c3 ? (a3 = If(a3, b3, Df), d3.__reactInternalMemoizedMergedChildContext = a3, H(N), H(M), I(M, a3)) : H(N);
  I(N, c3);
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
function fg(a3) {
  switch (a3) {
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
function gg(a3, b3) {
  a3 = fg(a3);
  return Nf(a3, b3);
}
function hg(a3, b3, c3) {
  a3 = fg(a3);
  return Of(a3, b3, c3);
}
function ig() {
  if (bg !== null) {
    var a3 = bg;
    bg = null;
    Pf(a3);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a3 = 0;
    try {
      var b3 = ag;
      gg(99, function() {
        for (; a3 < b3.length; a3++) {
          var c3 = b3[a3];
          do
            c3 = c3(true);
          while (c3 !== null);
        }
      });
      ag = null;
    } catch (c3) {
      throw ag !== null && (ag = ag.slice(a3 + 1)), Of(Uf, ig), c3;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a3, b3) {
  if (a3 && a3.defaultProps) {
    b3 = objectAssign({}, b3);
    a3 = a3.defaultProps;
    for (var c3 in a3)
      b3[c3] === void 0 && (b3[c3] = a3[c3]);
    return b3;
  }
  return b3;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a3) {
  var b3 = mg.current;
  H(mg);
  a3.type._context._currentValue = b3;
}
function sg(a3, b3) {
  for (; a3 !== null; ) {
    var c3 = a3.alternate;
    if ((a3.childLanes & b3) === b3)
      if (c3 === null || (c3.childLanes & b3) === b3)
        break;
      else
        c3.childLanes |= b3;
    else
      a3.childLanes |= b3, c3 !== null && (c3.childLanes |= b3);
    a3 = a3.return;
  }
}
function tg(a3, b3) {
  ng = a3;
  pg = og = null;
  a3 = a3.dependencies;
  a3 !== null && a3.firstContext !== null && ((a3.lanes & b3) !== 0 && (ug = true), a3.firstContext = null);
}
function vg(a3, b3) {
  if (pg !== a3 && b3 !== false && b3 !== 0) {
    if (typeof b3 !== "number" || b3 === 1073741823)
      pg = a3, b3 = 1073741823;
    b3 = {context: a3, observedBits: b3, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b3;
      ng.dependencies = {lanes: 0, firstContext: b3, responders: null};
    } else
      og = og.next = b3;
  }
  return a3._currentValue;
}
var wg = false;
function xg(a3) {
  a3.updateQueue = {baseState: a3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a3, b3) {
  a3 = a3.updateQueue;
  b3.updateQueue === a3 && (b3.updateQueue = {baseState: a3.baseState, firstBaseUpdate: a3.firstBaseUpdate, lastBaseUpdate: a3.lastBaseUpdate, shared: a3.shared, effects: a3.effects});
}
function zg(a3, b3) {
  return {eventTime: a3, lane: b3, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a3, b3) {
  a3 = a3.updateQueue;
  if (a3 !== null) {
    a3 = a3.shared;
    var c3 = a3.pending;
    c3 === null ? b3.next = b3 : (b3.next = c3.next, c3.next = b3);
    a3.pending = b3;
  }
}
function Bg(a3, b3) {
  var c3 = a3.updateQueue, d3 = a3.alternate;
  if (d3 !== null && (d3 = d3.updateQueue, c3 === d3)) {
    var e3 = null, f3 = null;
    c3 = c3.firstBaseUpdate;
    if (c3 !== null) {
      do {
        var g3 = {eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null};
        f3 === null ? e3 = f3 = g3 : f3 = f3.next = g3;
        c3 = c3.next;
      } while (c3 !== null);
      f3 === null ? e3 = f3 = b3 : f3 = f3.next = b3;
    } else
      e3 = f3 = b3;
    c3 = {baseState: d3.baseState, firstBaseUpdate: e3, lastBaseUpdate: f3, shared: d3.shared, effects: d3.effects};
    a3.updateQueue = c3;
    return;
  }
  a3 = c3.lastBaseUpdate;
  a3 === null ? c3.firstBaseUpdate = b3 : a3.next = b3;
  c3.lastBaseUpdate = b3;
}
function Cg(a3, b3, c3, d3) {
  var e3 = a3.updateQueue;
  wg = false;
  var f3 = e3.firstBaseUpdate, g3 = e3.lastBaseUpdate, h3 = e3.shared.pending;
  if (h3 !== null) {
    e3.shared.pending = null;
    var k3 = h3, l3 = k3.next;
    k3.next = null;
    g3 === null ? f3 = l3 : g3.next = l3;
    g3 = k3;
    var n3 = a3.alternate;
    if (n3 !== null) {
      n3 = n3.updateQueue;
      var A3 = n3.lastBaseUpdate;
      A3 !== g3 && (A3 === null ? n3.firstBaseUpdate = l3 : A3.next = l3, n3.lastBaseUpdate = k3);
    }
  }
  if (f3 !== null) {
    A3 = e3.baseState;
    g3 = 0;
    n3 = l3 = k3 = null;
    do {
      h3 = f3.lane;
      var p3 = f3.eventTime;
      if ((d3 & h3) === h3) {
        n3 !== null && (n3 = n3.next = {
          eventTime: p3,
          lane: 0,
          tag: f3.tag,
          payload: f3.payload,
          callback: f3.callback,
          next: null
        });
        a: {
          var C3 = a3, x3 = f3;
          h3 = b3;
          p3 = c3;
          switch (x3.tag) {
            case 1:
              C3 = x3.payload;
              if (typeof C3 === "function") {
                A3 = C3.call(p3, A3, h3);
                break a;
              }
              A3 = C3;
              break a;
            case 3:
              C3.flags = C3.flags & -4097 | 64;
            case 0:
              C3 = x3.payload;
              h3 = typeof C3 === "function" ? C3.call(p3, A3, h3) : C3;
              if (h3 === null || h3 === void 0)
                break a;
              A3 = objectAssign({}, A3, h3);
              break a;
            case 2:
              wg = true;
          }
        }
        f3.callback !== null && (a3.flags |= 32, h3 = e3.effects, h3 === null ? e3.effects = [f3] : h3.push(f3));
      } else
        p3 = {eventTime: p3, lane: h3, tag: f3.tag, payload: f3.payload, callback: f3.callback, next: null}, n3 === null ? (l3 = n3 = p3, k3 = A3) : n3 = n3.next = p3, g3 |= h3;
      f3 = f3.next;
      if (f3 === null)
        if (h3 = e3.shared.pending, h3 === null)
          break;
        else
          f3 = h3.next, h3.next = null, e3.lastBaseUpdate = h3, e3.shared.pending = null;
    } while (1);
    n3 === null && (k3 = A3);
    e3.baseState = k3;
    e3.firstBaseUpdate = l3;
    e3.lastBaseUpdate = n3;
    Dg |= g3;
    a3.lanes = g3;
    a3.memoizedState = A3;
  }
}
function Eg(a3, b3, c3) {
  a3 = b3.effects;
  b3.effects = null;
  if (a3 !== null)
    for (b3 = 0; b3 < a3.length; b3++) {
      var d3 = a3[b3], e3 = d3.callback;
      if (e3 !== null) {
        d3.callback = null;
        d3 = c3;
        if (typeof e3 !== "function")
          throw Error(y(191, e3));
        e3.call(d3);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a3, b3, c3, d3) {
  b3 = a3.memoizedState;
  c3 = c3(d3, b3);
  c3 = c3 === null || c3 === void 0 ? b3 : objectAssign({}, b3, c3);
  a3.memoizedState = c3;
  a3.lanes === 0 && (a3.updateQueue.baseState = c3);
}
var Kg = {isMounted: function(a3) {
  return (a3 = a3._reactInternals) ? Zb(a3) === a3 : false;
}, enqueueSetState: function(a3, b3, c3) {
  a3 = a3._reactInternals;
  var d3 = Hg(), e3 = Ig(a3), f3 = zg(d3, e3);
  f3.payload = b3;
  c3 !== void 0 && c3 !== null && (f3.callback = c3);
  Ag(a3, f3);
  Jg(a3, e3, d3);
}, enqueueReplaceState: function(a3, b3, c3) {
  a3 = a3._reactInternals;
  var d3 = Hg(), e3 = Ig(a3), f3 = zg(d3, e3);
  f3.tag = 1;
  f3.payload = b3;
  c3 !== void 0 && c3 !== null && (f3.callback = c3);
  Ag(a3, f3);
  Jg(a3, e3, d3);
}, enqueueForceUpdate: function(a3, b3) {
  a3 = a3._reactInternals;
  var c3 = Hg(), d3 = Ig(a3), e3 = zg(c3, d3);
  e3.tag = 2;
  b3 !== void 0 && b3 !== null && (e3.callback = b3);
  Ag(a3, e3);
  Jg(a3, d3, c3);
}};
function Lg(a3, b3, c3, d3, e3, f3, g3) {
  a3 = a3.stateNode;
  return typeof a3.shouldComponentUpdate === "function" ? a3.shouldComponentUpdate(d3, f3, g3) : b3.prototype && b3.prototype.isPureReactComponent ? !Je(c3, d3) || !Je(e3, f3) : true;
}
function Mg(a3, b3, c3) {
  var d3 = false, e3 = Cf;
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? f3 = vg(f3) : (e3 = Ff(b3) ? Df : M.current, d3 = b3.contextTypes, f3 = (d3 = d3 !== null && d3 !== void 0) ? Ef(a3, e3) : Cf);
  b3 = new b3(c3, f3);
  a3.memoizedState = b3.state !== null && b3.state !== void 0 ? b3.state : null;
  b3.updater = Kg;
  a3.stateNode = b3;
  b3._reactInternals = a3;
  d3 && (a3 = a3.stateNode, a3.__reactInternalMemoizedUnmaskedChildContext = e3, a3.__reactInternalMemoizedMaskedChildContext = f3);
  return b3;
}
function Ng(a3, b3, c3, d3) {
  a3 = b3.state;
  typeof b3.componentWillReceiveProps === "function" && b3.componentWillReceiveProps(c3, d3);
  typeof b3.UNSAFE_componentWillReceiveProps === "function" && b3.UNSAFE_componentWillReceiveProps(c3, d3);
  b3.state !== a3 && Kg.enqueueReplaceState(b3, b3.state, null);
}
function Og(a3, b3, c3, d3) {
  var e3 = a3.stateNode;
  e3.props = c3;
  e3.state = a3.memoizedState;
  e3.refs = Fg;
  xg(a3);
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? e3.context = vg(f3) : (f3 = Ff(b3) ? Df : M.current, e3.context = Ef(a3, f3));
  Cg(a3, c3, e3, d3);
  e3.state = a3.memoizedState;
  f3 = b3.getDerivedStateFromProps;
  typeof f3 === "function" && (Gg(a3, b3, f3, c3), e3.state = a3.memoizedState);
  typeof b3.getDerivedStateFromProps === "function" || typeof e3.getSnapshotBeforeUpdate === "function" || typeof e3.UNSAFE_componentWillMount !== "function" && typeof e3.componentWillMount !== "function" || (b3 = e3.state, typeof e3.componentWillMount === "function" && e3.componentWillMount(), typeof e3.UNSAFE_componentWillMount === "function" && e3.UNSAFE_componentWillMount(), b3 !== e3.state && Kg.enqueueReplaceState(e3, e3.state, null), Cg(a3, c3, e3, d3), e3.state = a3.memoizedState);
  typeof e3.componentDidMount === "function" && (a3.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a3, b3, c3) {
  a3 = c3.ref;
  if (a3 !== null && typeof a3 !== "function" && typeof a3 !== "object") {
    if (c3._owner) {
      c3 = c3._owner;
      if (c3) {
        if (c3.tag !== 1)
          throw Error(y(309));
        var d3 = c3.stateNode;
      }
      if (!d3)
        throw Error(y(147, a3));
      var e3 = "" + a3;
      if (b3 !== null && b3.ref !== null && typeof b3.ref === "function" && b3.ref._stringRef === e3)
        return b3.ref;
      b3 = function(a4) {
        var b4 = d3.refs;
        b4 === Fg && (b4 = d3.refs = {});
        a4 === null ? delete b4[e3] : b4[e3] = a4;
      };
      b3._stringRef = e3;
      return b3;
    }
    if (typeof a3 !== "string")
      throw Error(y(284));
    if (!c3._owner)
      throw Error(y(290, a3));
  }
  return a3;
}
function Rg(a3, b3) {
  if (a3.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b3) === "[object Object]" ? "object with keys {" + Object.keys(b3).join(", ") + "}" : b3));
}
function Sg(a3) {
  function b3(b4, c4) {
    if (a3) {
      var d4 = b4.lastEffect;
      d4 !== null ? (d4.nextEffect = c4, b4.lastEffect = c4) : b4.firstEffect = b4.lastEffect = c4;
      c4.nextEffect = null;
      c4.flags = 8;
    }
  }
  function c3(c4, d4) {
    if (!a3)
      return null;
    for (; d4 !== null; )
      b3(c4, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a4, b4) {
    for (a4 = new Map(); b4 !== null; )
      b4.key !== null ? a4.set(b4.key, b4) : a4.set(b4.index, b4), b4 = b4.sibling;
    return a4;
  }
  function e3(a4, b4) {
    a4 = Tg(a4, b4);
    a4.index = 0;
    a4.sibling = null;
    return a4;
  }
  function f3(b4, c4, d4) {
    b4.index = d4;
    if (!a3)
      return c4;
    d4 = b4.alternate;
    if (d4 !== null)
      return d4 = d4.index, d4 < c4 ? (b4.flags = 2, c4) : d4;
    b4.flags = 2;
    return c4;
  }
  function g3(b4) {
    a3 && b4.alternate === null && (b4.flags = 2);
    return b4;
  }
  function h3(a4, b4, c4, d4) {
    if (b4 === null || b4.tag !== 6)
      return b4 = Ug(c4, a4.mode, d4), b4.return = a4, b4;
    b4 = e3(b4, c4);
    b4.return = a4;
    return b4;
  }
  function k3(a4, b4, c4, d4) {
    if (b4 !== null && b4.elementType === c4.type)
      return d4 = e3(b4, c4.props), d4.ref = Qg(a4, b4, c4), d4.return = a4, d4;
    d4 = Vg(c4.type, c4.key, c4.props, null, a4.mode, d4);
    d4.ref = Qg(a4, b4, c4);
    d4.return = a4;
    return d4;
  }
  function l3(a4, b4, c4, d4) {
    if (b4 === null || b4.tag !== 4 || b4.stateNode.containerInfo !== c4.containerInfo || b4.stateNode.implementation !== c4.implementation)
      return b4 = Wg(c4, a4.mode, d4), b4.return = a4, b4;
    b4 = e3(b4, c4.children || []);
    b4.return = a4;
    return b4;
  }
  function n3(a4, b4, c4, d4, f4) {
    if (b4 === null || b4.tag !== 7)
      return b4 = Xg(c4, a4.mode, d4, f4), b4.return = a4, b4;
    b4 = e3(b4, c4);
    b4.return = a4;
    return b4;
  }
  function A3(a4, b4, c4) {
    if (typeof b4 === "string" || typeof b4 === "number")
      return b4 = Ug("" + b4, a4.mode, c4), b4.return = a4, b4;
    if (typeof b4 === "object" && b4 !== null) {
      switch (b4.$$typeof) {
        case sa:
          return c4 = Vg(b4.type, b4.key, b4.props, null, a4.mode, c4), c4.ref = Qg(a4, null, b4), c4.return = a4, c4;
        case ta:
          return b4 = Wg(b4, a4.mode, c4), b4.return = a4, b4;
      }
      if (Pg(b4) || La(b4))
        return b4 = Xg(b4, a4.mode, c4, null), b4.return = a4, b4;
      Rg(a4, b4);
    }
    return null;
  }
  function p3(a4, b4, c4, d4) {
    var e4 = b4 !== null ? b4.key : null;
    if (typeof c4 === "string" || typeof c4 === "number")
      return e4 !== null ? null : h3(a4, b4, "" + c4, d4);
    if (typeof c4 === "object" && c4 !== null) {
      switch (c4.$$typeof) {
        case sa:
          return c4.key === e4 ? c4.type === ua ? n3(a4, b4, c4.props.children, d4, e4) : k3(a4, b4, c4, d4) : null;
        case ta:
          return c4.key === e4 ? l3(a4, b4, c4, d4) : null;
      }
      if (Pg(c4) || La(c4))
        return e4 !== null ? null : n3(a4, b4, c4, d4, null);
      Rg(a4, c4);
    }
    return null;
  }
  function C3(a4, b4, c4, d4, e4) {
    if (typeof d4 === "string" || typeof d4 === "number")
      return a4 = a4.get(c4) || null, h3(b4, a4, "" + d4, e4);
    if (typeof d4 === "object" && d4 !== null) {
      switch (d4.$$typeof) {
        case sa:
          return a4 = a4.get(d4.key === null ? c4 : d4.key) || null, d4.type === ua ? n3(b4, a4, d4.props.children, e4, d4.key) : k3(b4, a4, d4, e4);
        case ta:
          return a4 = a4.get(d4.key === null ? c4 : d4.key) || null, l3(b4, a4, d4, e4);
      }
      if (Pg(d4) || La(d4))
        return a4 = a4.get(c4) || null, n3(b4, a4, d4, e4, null);
      Rg(b4, d4);
    }
    return null;
  }
  function x3(e4, g4, h4, k4) {
    for (var l4 = null, t3 = null, u3 = g4, z3 = g4 = 0, q3 = null; u3 !== null && z3 < h4.length; z3++) {
      u3.index > z3 ? (q3 = u3, u3 = null) : q3 = u3.sibling;
      var n4 = p3(e4, u3, h4[z3], k4);
      if (n4 === null) {
        u3 === null && (u3 = q3);
        break;
      }
      a3 && u3 && n4.alternate === null && b3(e4, u3);
      g4 = f3(n4, g4, z3);
      t3 === null ? l4 = n4 : t3.sibling = n4;
      t3 = n4;
      u3 = q3;
    }
    if (z3 === h4.length)
      return c3(e4, u3), l4;
    if (u3 === null) {
      for (; z3 < h4.length; z3++)
        u3 = A3(e4, h4[z3], k4), u3 !== null && (g4 = f3(u3, g4, z3), t3 === null ? l4 = u3 : t3.sibling = u3, t3 = u3);
      return l4;
    }
    for (u3 = d3(e4, u3); z3 < h4.length; z3++)
      q3 = C3(u3, e4, z3, h4[z3], k4), q3 !== null && (a3 && q3.alternate !== null && u3.delete(q3.key === null ? z3 : q3.key), g4 = f3(q3, g4, z3), t3 === null ? l4 = q3 : t3.sibling = q3, t3 = q3);
    a3 && u3.forEach(function(a4) {
      return b3(e4, a4);
    });
    return l4;
  }
  function w3(e4, g4, h4, k4) {
    var l4 = La(h4);
    if (typeof l4 !== "function")
      throw Error(y(150));
    h4 = l4.call(h4);
    if (h4 == null)
      throw Error(y(151));
    for (var t3 = l4 = null, u3 = g4, z3 = g4 = 0, q3 = null, n4 = h4.next(); u3 !== null && !n4.done; z3++, n4 = h4.next()) {
      u3.index > z3 ? (q3 = u3, u3 = null) : q3 = u3.sibling;
      var w4 = p3(e4, u3, n4.value, k4);
      if (w4 === null) {
        u3 === null && (u3 = q3);
        break;
      }
      a3 && u3 && w4.alternate === null && b3(e4, u3);
      g4 = f3(w4, g4, z3);
      t3 === null ? l4 = w4 : t3.sibling = w4;
      t3 = w4;
      u3 = q3;
    }
    if (n4.done)
      return c3(e4, u3), l4;
    if (u3 === null) {
      for (; !n4.done; z3++, n4 = h4.next())
        n4 = A3(e4, n4.value, k4), n4 !== null && (g4 = f3(n4, g4, z3), t3 === null ? l4 = n4 : t3.sibling = n4, t3 = n4);
      return l4;
    }
    for (u3 = d3(e4, u3); !n4.done; z3++, n4 = h4.next())
      n4 = C3(u3, e4, z3, n4.value, k4), n4 !== null && (a3 && n4.alternate !== null && u3.delete(n4.key === null ? z3 : n4.key), g4 = f3(n4, g4, z3), t3 === null ? l4 = n4 : t3.sibling = n4, t3 = n4);
    a3 && u3.forEach(function(a4) {
      return b3(e4, a4);
    });
    return l4;
  }
  return function(a4, d4, f4, h4) {
    var k4 = typeof f4 === "object" && f4 !== null && f4.type === ua && f4.key === null;
    k4 && (f4 = f4.props.children);
    var l4 = typeof f4 === "object" && f4 !== null;
    if (l4)
      switch (f4.$$typeof) {
        case sa:
          a: {
            l4 = f4.key;
            for (k4 = d4; k4 !== null; ) {
              if (k4.key === l4) {
                switch (k4.tag) {
                  case 7:
                    if (f4.type === ua) {
                      c3(a4, k4.sibling);
                      d4 = e3(k4, f4.props.children);
                      d4.return = a4;
                      a4 = d4;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f4.type) {
                      c3(a4, k4.sibling);
                      d4 = e3(k4, f4.props);
                      d4.ref = Qg(a4, k4, f4);
                      d4.return = a4;
                      a4 = d4;
                      break a;
                    }
                }
                c3(a4, k4);
                break;
              } else
                b3(a4, k4);
              k4 = k4.sibling;
            }
            f4.type === ua ? (d4 = Xg(f4.props.children, a4.mode, h4, f4.key), d4.return = a4, a4 = d4) : (h4 = Vg(f4.type, f4.key, f4.props, null, a4.mode, h4), h4.ref = Qg(a4, d4, f4), h4.return = a4, a4 = h4);
          }
          return g3(a4);
        case ta:
          a: {
            for (k4 = f4.key; d4 !== null; ) {
              if (d4.key === k4)
                if (d4.tag === 4 && d4.stateNode.containerInfo === f4.containerInfo && d4.stateNode.implementation === f4.implementation) {
                  c3(a4, d4.sibling);
                  d4 = e3(d4, f4.children || []);
                  d4.return = a4;
                  a4 = d4;
                  break a;
                } else {
                  c3(a4, d4);
                  break;
                }
              else
                b3(a4, d4);
              d4 = d4.sibling;
            }
            d4 = Wg(f4, a4.mode, h4);
            d4.return = a4;
            a4 = d4;
          }
          return g3(a4);
      }
    if (typeof f4 === "string" || typeof f4 === "number")
      return f4 = "" + f4, d4 !== null && d4.tag === 6 ? (c3(a4, d4.sibling), d4 = e3(d4, f4), d4.return = a4, a4 = d4) : (c3(a4, d4), d4 = Ug(f4, a4.mode, h4), d4.return = a4, a4 = d4), g3(a4);
    if (Pg(f4))
      return x3(a4, d4, f4, h4);
    if (La(f4))
      return w3(a4, d4, f4, h4);
    l4 && Rg(a4, f4);
    if (typeof f4 === "undefined" && !k4)
      switch (a4.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a4.type) || "Component"));
      }
    return c3(a4, d4);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a3) {
  if (a3 === $g)
    throw Error(y(174));
  return a3;
}
function eh(a3, b3) {
  I(ch, b3);
  I(bh, a3);
  I(ah, $g);
  a3 = b3.nodeType;
  switch (a3) {
    case 9:
    case 11:
      b3 = (b3 = b3.documentElement) ? b3.namespaceURI : mb(null, "");
      break;
    default:
      a3 = a3 === 8 ? b3.parentNode : b3, b3 = a3.namespaceURI || null, a3 = a3.tagName, b3 = mb(b3, a3);
  }
  H(ah);
  I(ah, b3);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a3) {
  dh(ch.current);
  var b3 = dh(ah.current);
  var c3 = mb(b3, a3.type);
  b3 !== c3 && (I(bh, a3), I(ah, c3));
}
function hh(a3) {
  bh.current === a3 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a3) {
  for (var b3 = a3; b3 !== null; ) {
    if (b3.tag === 13) {
      var c3 = b3.memoizedState;
      if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
        return b3;
    } else if (b3.tag === 19 && b3.memoizedProps.revealOrder !== void 0) {
      if ((b3.flags & 64) !== 0)
        return b3;
    } else if (b3.child !== null) {
      b3.child.return = b3;
      b3 = b3.child;
      continue;
    }
    if (b3 === a3)
      break;
    for (; b3.sibling === null; ) {
      if (b3.return === null || b3.return === a3)
        return null;
      b3 = b3.return;
    }
    b3.sibling.return = b3.return;
    b3 = b3.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a3, b3) {
  var c3 = nh(5, null, null, 0);
  c3.elementType = "DELETED";
  c3.type = "DELETED";
  c3.stateNode = b3;
  c3.return = a3;
  c3.flags = 8;
  a3.lastEffect !== null ? (a3.lastEffect.nextEffect = c3, a3.lastEffect = c3) : a3.firstEffect = a3.lastEffect = c3;
}
function oh(a3, b3) {
  switch (a3.tag) {
    case 5:
      var c3 = a3.type;
      b3 = b3.nodeType !== 1 || c3.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
      return b3 !== null ? (a3.stateNode = b3, true) : false;
    case 6:
      return b3 = a3.pendingProps === "" || b3.nodeType !== 3 ? null : b3, b3 !== null ? (a3.stateNode = b3, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a3) {
  if (lh) {
    var b3 = kh;
    if (b3) {
      var c3 = b3;
      if (!oh(a3, b3)) {
        b3 = rf(c3.nextSibling);
        if (!b3 || !oh(a3, b3)) {
          a3.flags = a3.flags & -1025 | 2;
          lh = false;
          jh = a3;
          return;
        }
        mh(jh, c3);
      }
      jh = a3;
      kh = rf(b3.firstChild);
    } else
      a3.flags = a3.flags & -1025 | 2, lh = false, jh = a3;
  }
}
function qh(a3) {
  for (a3 = a3.return; a3 !== null && a3.tag !== 5 && a3.tag !== 3 && a3.tag !== 13; )
    a3 = a3.return;
  jh = a3;
}
function rh(a3) {
  if (a3 !== jh)
    return false;
  if (!lh)
    return qh(a3), lh = true, false;
  var b3 = a3.type;
  if (a3.tag !== 5 || b3 !== "head" && b3 !== "body" && !nf(b3, a3.memoizedProps))
    for (b3 = kh; b3; )
      mh(a3, b3), b3 = rf(b3.nextSibling);
  qh(a3);
  if (a3.tag === 13) {
    a3 = a3.memoizedState;
    a3 = a3 !== null ? a3.dehydrated : null;
    if (!a3)
      throw Error(y(317));
    a: {
      a3 = a3.nextSibling;
      for (b3 = 0; a3; ) {
        if (a3.nodeType === 8) {
          var c3 = a3.data;
          if (c3 === "/$") {
            if (b3 === 0) {
              kh = rf(a3.nextSibling);
              break a;
            }
            b3--;
          } else
            c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b3++;
        }
        a3 = a3.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a3.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a3 = 0; a3 < th.length; a3++)
    th[a3]._workInProgressVersionPrimary = null;
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
function Bh(a3, b3) {
  if (b3 === null)
    return false;
  for (var c3 = 0; c3 < b3.length && c3 < a3.length; c3++)
    if (!He(a3[c3], b3[c3]))
      return false;
  return true;
}
function Ch(a3, b3, c3, d3, e3, f3) {
  xh = f3;
  R = b3;
  b3.memoizedState = null;
  b3.updateQueue = null;
  b3.lanes = 0;
  vh.current = a3 === null || a3.memoizedState === null ? Dh : Eh;
  a3 = c3(d3, e3);
  if (zh) {
    f3 = 0;
    do {
      zh = false;
      if (!(25 > f3))
        throw Error(y(301));
      f3 += 1;
      T = S = null;
      b3.updateQueue = null;
      vh.current = Fh;
      a3 = c3(d3, e3);
    } while (zh);
  }
  vh.current = Gh;
  b3 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b3)
    throw Error(y(300));
  return a3;
}
function Hh() {
  var a3 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a3 : T = T.next = a3;
  return T;
}
function Ih() {
  if (S === null) {
    var a3 = R.alternate;
    a3 = a3 !== null ? a3.memoizedState : null;
  } else
    a3 = S.next;
  var b3 = T === null ? R.memoizedState : T.next;
  if (b3 !== null)
    T = b3, S = a3;
  else {
    if (a3 === null)
      throw Error(y(310));
    S = a3;
    a3 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a3 : T = T.next = a3;
  }
  return T;
}
function Jh(a3, b3) {
  return typeof b3 === "function" ? b3(a3) : b3;
}
function Kh(a3) {
  var b3 = Ih(), c3 = b3.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a3;
  var d3 = S, e3 = d3.baseQueue, f3 = c3.pending;
  if (f3 !== null) {
    if (e3 !== null) {
      var g3 = e3.next;
      e3.next = f3.next;
      f3.next = g3;
    }
    d3.baseQueue = e3 = f3;
    c3.pending = null;
  }
  if (e3 !== null) {
    e3 = e3.next;
    d3 = d3.baseState;
    var h3 = g3 = f3 = null, k3 = e3;
    do {
      var l3 = k3.lane;
      if ((xh & l3) === l3)
        h3 !== null && (h3 = h3.next = {lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null}), d3 = k3.eagerReducer === a3 ? k3.eagerState : a3(d3, k3.action);
      else {
        var n3 = {
          lane: l3,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h3 === null ? (g3 = h3 = n3, f3 = d3) : h3 = h3.next = n3;
        R.lanes |= l3;
        Dg |= l3;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e3);
    h3 === null ? f3 = d3 : h3.next = g3;
    He(d3, b3.memoizedState) || (ug = true);
    b3.memoizedState = d3;
    b3.baseState = f3;
    b3.baseQueue = h3;
    c3.lastRenderedState = d3;
  }
  return [b3.memoizedState, c3.dispatch];
}
function Lh(a3) {
  var b3 = Ih(), c3 = b3.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a3;
  var d3 = c3.dispatch, e3 = c3.pending, f3 = b3.memoizedState;
  if (e3 !== null) {
    c3.pending = null;
    var g3 = e3 = e3.next;
    do
      f3 = a3(f3, g3.action), g3 = g3.next;
    while (g3 !== e3);
    He(f3, b3.memoizedState) || (ug = true);
    b3.memoizedState = f3;
    b3.baseQueue === null && (b3.baseState = f3);
    c3.lastRenderedState = f3;
  }
  return [f3, d3];
}
function Mh(a3, b3, c3) {
  var d3 = b3._getVersion;
  d3 = d3(b3._source);
  var e3 = b3._workInProgressVersionPrimary;
  if (e3 !== null)
    a3 = e3 === d3;
  else if (a3 = a3.mutableReadLanes, a3 = (xh & a3) === a3)
    b3._workInProgressVersionPrimary = d3, th.push(b3);
  if (a3)
    return c3(b3._source);
  th.push(b3);
  throw Error(y(350));
}
function Nh(a3, b3, c3, d3) {
  var e3 = U;
  if (e3 === null)
    throw Error(y(349));
  var f3 = b3._getVersion, g3 = f3(b3._source), h3 = vh.current, k3 = h3.useState(function() {
    return Mh(e3, b3, c3);
  }), l3 = k3[1], n3 = k3[0];
  k3 = T;
  var A3 = a3.memoizedState, p3 = A3.refs, C3 = p3.getSnapshot, x3 = A3.source;
  A3 = A3.subscribe;
  var w3 = R;
  a3.memoizedState = {refs: p3, source: b3, subscribe: d3};
  h3.useEffect(function() {
    p3.getSnapshot = c3;
    p3.setSnapshot = l3;
    var a4 = f3(b3._source);
    if (!He(g3, a4)) {
      a4 = c3(b3._source);
      He(n3, a4) || (l3(a4), a4 = Ig(w3), e3.mutableReadLanes |= a4 & e3.pendingLanes);
      a4 = e3.mutableReadLanes;
      e3.entangledLanes |= a4;
      for (var d4 = e3.entanglements, h4 = a4; 0 < h4; ) {
        var k4 = 31 - Vc(h4), v3 = 1 << k4;
        d4[k4] |= a4;
        h4 &= ~v3;
      }
    }
  }, [c3, b3, d3]);
  h3.useEffect(function() {
    return d3(b3._source, function() {
      var a4 = p3.getSnapshot, c4 = p3.setSnapshot;
      try {
        c4(a4(b3._source));
        var d4 = Ig(w3);
        e3.mutableReadLanes |= d4 & e3.pendingLanes;
      } catch (q3) {
        c4(function() {
          throw q3;
        });
      }
    });
  }, [b3, d3]);
  He(C3, c3) && He(x3, b3) && He(A3, d3) || (a3 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n3}, a3.dispatch = l3 = Oh.bind(null, R, a3), k3.queue = a3, k3.baseQueue = null, n3 = Mh(e3, b3, c3), k3.memoizedState = k3.baseState = n3);
  return n3;
}
function Ph(a3, b3, c3) {
  var d3 = Ih();
  return Nh(d3, a3, b3, c3);
}
function Qh(a3) {
  var b3 = Hh();
  typeof a3 === "function" && (a3 = a3());
  b3.memoizedState = b3.baseState = a3;
  a3 = b3.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a3};
  a3 = a3.dispatch = Oh.bind(null, R, a3);
  return [b3.memoizedState, a3];
}
function Rh(a3, b3, c3, d3) {
  a3 = {tag: a3, create: b3, destroy: c3, deps: d3, next: null};
  b3 = R.updateQueue;
  b3 === null ? (b3 = {lastEffect: null}, R.updateQueue = b3, b3.lastEffect = a3.next = a3) : (c3 = b3.lastEffect, c3 === null ? b3.lastEffect = a3.next = a3 : (d3 = c3.next, c3.next = a3, a3.next = d3, b3.lastEffect = a3));
  return a3;
}
function Sh(a3) {
  var b3 = Hh();
  a3 = {current: a3};
  return b3.memoizedState = a3;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a3, b3, c3, d3) {
  var e3 = Hh();
  R.flags |= a3;
  e3.memoizedState = Rh(1 | b3, c3, void 0, d3 === void 0 ? null : d3);
}
function Vh(a3, b3, c3, d3) {
  var e3 = Ih();
  d3 = d3 === void 0 ? null : d3;
  var f3 = void 0;
  if (S !== null) {
    var g3 = S.memoizedState;
    f3 = g3.destroy;
    if (d3 !== null && Bh(d3, g3.deps)) {
      Rh(b3, c3, f3, d3);
      return;
    }
  }
  R.flags |= a3;
  e3.memoizedState = Rh(1 | b3, c3, f3, d3);
}
function Wh(a3, b3) {
  return Uh(516, 4, a3, b3);
}
function Xh(a3, b3) {
  return Vh(516, 4, a3, b3);
}
function Yh(a3, b3) {
  return Vh(4, 2, a3, b3);
}
function Zh(a3, b3) {
  if (typeof b3 === "function")
    return a3 = a3(), b3(a3), function() {
      b3(null);
    };
  if (b3 !== null && b3 !== void 0)
    return a3 = a3(), b3.current = a3, function() {
      b3.current = null;
    };
}
function $h(a3, b3, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a3]) : null;
  return Vh(4, 2, Zh.bind(null, b3, a3), c3);
}
function ai() {
}
function bi(a3, b3) {
  var c3 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d3 = c3.memoizedState;
  if (d3 !== null && b3 !== null && Bh(b3, d3[1]))
    return d3[0];
  c3.memoizedState = [a3, b3];
  return a3;
}
function ci(a3, b3) {
  var c3 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d3 = c3.memoizedState;
  if (d3 !== null && b3 !== null && Bh(b3, d3[1]))
    return d3[0];
  a3 = a3();
  c3.memoizedState = [a3, b3];
  return a3;
}
function di(a3, b3) {
  var c3 = eg();
  gg(98 > c3 ? 98 : c3, function() {
    a3(true);
  });
  gg(97 < c3 ? 97 : c3, function() {
    var c4 = wh.transition;
    wh.transition = 1;
    try {
      a3(false), b3();
    } finally {
      wh.transition = c4;
    }
  });
}
function Oh(a3, b3, c3) {
  var d3 = Hg(), e3 = Ig(a3), f3 = {lane: e3, action: c3, eagerReducer: null, eagerState: null, next: null}, g3 = b3.pending;
  g3 === null ? f3.next = f3 : (f3.next = g3.next, g3.next = f3);
  b3.pending = f3;
  g3 = a3.alternate;
  if (a3 === R || g3 !== null && g3 === R)
    zh = yh = true;
  else {
    if (a3.lanes === 0 && (g3 === null || g3.lanes === 0) && (g3 = b3.lastRenderedReducer, g3 !== null))
      try {
        var h3 = b3.lastRenderedState, k3 = g3(h3, c3);
        f3.eagerReducer = g3;
        f3.eagerState = k3;
        if (He(k3, h3))
          return;
      } catch (l3) {
      } finally {
      }
    Jg(a3, e3, d3);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a3, b3) {
  Hh().memoizedState = [a3, b3 === void 0 ? null : b3];
  return a3;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a3, b3, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a3]) : null;
  return Uh(4, 2, Zh.bind(null, b3, a3), c3);
}, useLayoutEffect: function(a3, b3) {
  return Uh(4, 2, a3, b3);
}, useMemo: function(a3, b3) {
  var c3 = Hh();
  b3 = b3 === void 0 ? null : b3;
  a3 = a3();
  c3.memoizedState = [a3, b3];
  return a3;
}, useReducer: function(a3, b3, c3) {
  var d3 = Hh();
  b3 = c3 !== void 0 ? c3(b3) : b3;
  d3.memoizedState = d3.baseState = b3;
  a3 = d3.queue = {pending: null, dispatch: null, lastRenderedReducer: a3, lastRenderedState: b3};
  a3 = a3.dispatch = Oh.bind(null, R, a3);
  return [d3.memoizedState, a3];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a3) {
  var b3 = Qh(a3), c3 = b3[0], d3 = b3[1];
  Wh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d3(a3);
    } finally {
      wh.transition = b4;
    }
  }, [a3]);
  return c3;
}, useTransition: function() {
  var a3 = Qh(false), b3 = a3[0];
  a3 = di.bind(null, a3[1]);
  Sh(a3);
  return [a3, b3];
}, useMutableSource: function(a3, b3, c3) {
  var d3 = Hh();
  d3.memoizedState = {refs: {getSnapshot: b3, setSnapshot: null}, source: a3, subscribe: c3};
  return Nh(d3, a3, b3, c3);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a3 = false, b3 = uf(function() {
      a3 || (a3 = true, c3("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c3 = Qh(b3)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c3("r:" + (tf++).toString(36));
    }, void 0, null));
    return b3;
  }
  b3 = "r:" + (tf++).toString(36);
  Qh(b3);
  return b3;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a3) {
  var b3 = Kh(Jh), c3 = b3[0], d3 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d3(a3);
    } finally {
      wh.transition = b4;
    }
  }, [a3]);
  return c3;
}, useTransition: function() {
  var a3 = Kh(Jh)[0];
  return [
    Th().current,
    a3
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a3) {
  var b3 = Lh(Jh), c3 = b3[0], d3 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d3(a3);
    } finally {
      wh.transition = b4;
    }
  }, [a3]);
  return c3;
}, useTransition: function() {
  var a3 = Lh(Jh)[0];
  return [
    Th().current,
    a3
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a3, b3, c3, d3) {
  b3.child = a3 === null ? Zg(b3, null, c3, d3) : Yg(b3, a3.child, c3, d3);
}
function gi(a3, b3, c3, d3, e3) {
  c3 = c3.render;
  var f3 = b3.ref;
  tg(b3, e3);
  d3 = Ch(a3, b3, c3, d3, f3, e3);
  if (a3 !== null && !ug)
    return b3.updateQueue = a3.updateQueue, b3.flags &= -517, a3.lanes &= ~e3, hi(a3, b3, e3);
  b3.flags |= 1;
  fi(a3, b3, d3, e3);
  return b3.child;
}
function ii(a3, b3, c3, d3, e3, f3) {
  if (a3 === null) {
    var g3 = c3.type;
    if (typeof g3 === "function" && !ji(g3) && g3.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
      return b3.tag = 15, b3.type = g3, ki(a3, b3, g3, d3, e3, f3);
    a3 = Vg(c3.type, null, d3, b3, b3.mode, f3);
    a3.ref = b3.ref;
    a3.return = b3;
    return b3.child = a3;
  }
  g3 = a3.child;
  if ((e3 & f3) === 0 && (e3 = g3.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e3, d3) && a3.ref === b3.ref))
    return hi(a3, b3, f3);
  b3.flags |= 1;
  a3 = Tg(g3, d3);
  a3.ref = b3.ref;
  a3.return = b3;
  return b3.child = a3;
}
function ki(a3, b3, c3, d3, e3, f3) {
  if (a3 !== null && Je(a3.memoizedProps, d3) && a3.ref === b3.ref)
    if (ug = false, (f3 & e3) !== 0)
      (a3.flags & 16384) !== 0 && (ug = true);
    else
      return b3.lanes = a3.lanes, hi(a3, b3, f3);
  return li(a3, b3, c3, d3, f3);
}
function mi(a3, b3, c3) {
  var d3 = b3.pendingProps, e3 = d3.children, f3 = a3 !== null ? a3.memoizedState : null;
  if (d3.mode === "hidden" || d3.mode === "unstable-defer-without-hiding")
    if ((b3.mode & 4) === 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, c3);
    else if ((c3 & 1073741824) !== 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, f3 !== null ? f3.baseLanes : c3);
    else
      return a3 = f3 !== null ? f3.baseLanes | c3 : c3, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = {baseLanes: a3}, ni(b3, a3), null;
  else
    f3 !== null ? (d3 = f3.baseLanes | c3, b3.memoizedState = null) : d3 = c3, ni(b3, d3);
  fi(a3, b3, e3, c3);
  return b3.child;
}
function oi(a3, b3) {
  var c3 = b3.ref;
  if (a3 === null && c3 !== null || a3 !== null && a3.ref !== c3)
    b3.flags |= 128;
}
function li(a3, b3, c3, d3, e3) {
  var f3 = Ff(c3) ? Df : M.current;
  f3 = Ef(b3, f3);
  tg(b3, e3);
  c3 = Ch(a3, b3, c3, d3, f3, e3);
  if (a3 !== null && !ug)
    return b3.updateQueue = a3.updateQueue, b3.flags &= -517, a3.lanes &= ~e3, hi(a3, b3, e3);
  b3.flags |= 1;
  fi(a3, b3, c3, e3);
  return b3.child;
}
function pi(a3, b3, c3, d3, e3) {
  if (Ff(c3)) {
    var f3 = true;
    Jf(b3);
  } else
    f3 = false;
  tg(b3, e3);
  if (b3.stateNode === null)
    a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2), Mg(b3, c3, d3), Og(b3, c3, d3, e3), d3 = true;
  else if (a3 === null) {
    var g3 = b3.stateNode, h3 = b3.memoizedProps;
    g3.props = h3;
    var k3 = g3.context, l3 = c3.contextType;
    typeof l3 === "object" && l3 !== null ? l3 = vg(l3) : (l3 = Ff(c3) ? Df : M.current, l3 = Ef(b3, l3));
    var n3 = c3.getDerivedStateFromProps, A3 = typeof n3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function";
    A3 || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h3 !== d3 || k3 !== l3) && Ng(b3, g3, d3, l3);
    wg = false;
    var p3 = b3.memoizedState;
    g3.state = p3;
    Cg(b3, d3, g3, e3);
    k3 = b3.memoizedState;
    h3 !== d3 || p3 !== k3 || N.current || wg ? (typeof n3 === "function" && (Gg(b3, c3, n3, d3), k3 = b3.memoizedState), (h3 = wg || Lg(b3, c3, h3, d3, p3, k3, l3)) ? (A3 || typeof g3.UNSAFE_componentWillMount !== "function" && typeof g3.componentWillMount !== "function" || (typeof g3.componentWillMount === "function" && g3.componentWillMount(), typeof g3.UNSAFE_componentWillMount === "function" && g3.UNSAFE_componentWillMount()), typeof g3.componentDidMount === "function" && (b3.flags |= 4)) : (typeof g3.componentDidMount === "function" && (b3.flags |= 4), b3.memoizedProps = d3, b3.memoizedState = k3), g3.props = d3, g3.state = k3, g3.context = l3, d3 = h3) : (typeof g3.componentDidMount === "function" && (b3.flags |= 4), d3 = false);
  } else {
    g3 = b3.stateNode;
    yg(a3, b3);
    h3 = b3.memoizedProps;
    l3 = b3.type === b3.elementType ? h3 : lg(b3.type, h3);
    g3.props = l3;
    A3 = b3.pendingProps;
    p3 = g3.context;
    k3 = c3.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c3) ? Df : M.current, k3 = Ef(b3, k3));
    var C3 = c3.getDerivedStateFromProps;
    (n3 = typeof C3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function") || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h3 !== A3 || p3 !== k3) && Ng(b3, g3, d3, k3);
    wg = false;
    p3 = b3.memoizedState;
    g3.state = p3;
    Cg(b3, d3, g3, e3);
    var x3 = b3.memoizedState;
    h3 !== A3 || p3 !== x3 || N.current || wg ? (typeof C3 === "function" && (Gg(b3, c3, C3, d3), x3 = b3.memoizedState), (l3 = wg || Lg(b3, c3, l3, d3, p3, x3, k3)) ? (n3 || typeof g3.UNSAFE_componentWillUpdate !== "function" && typeof g3.componentWillUpdate !== "function" || (typeof g3.componentWillUpdate === "function" && g3.componentWillUpdate(d3, x3, k3), typeof g3.UNSAFE_componentWillUpdate === "function" && g3.UNSAFE_componentWillUpdate(d3, x3, k3)), typeof g3.componentDidUpdate === "function" && (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate === "function" && (b3.flags |= 256)) : (typeof g3.componentDidUpdate !== "function" || h3 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h3 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 256), b3.memoizedProps = d3, b3.memoizedState = x3), g3.props = d3, g3.state = x3, g3.context = k3, d3 = l3) : (typeof g3.componentDidUpdate !== "function" || h3 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h3 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 256), d3 = false);
  }
  return qi(a3, b3, c3, d3, f3, e3);
}
function qi(a3, b3, c3, d3, e3, f3) {
  oi(a3, b3);
  var g3 = (b3.flags & 64) !== 0;
  if (!d3 && !g3)
    return e3 && Kf(b3, c3, false), hi(a3, b3, f3);
  d3 = b3.stateNode;
  ei.current = b3;
  var h3 = g3 && typeof c3.getDerivedStateFromError !== "function" ? null : d3.render();
  b3.flags |= 1;
  a3 !== null && g3 ? (b3.child = Yg(b3, a3.child, null, f3), b3.child = Yg(b3, null, h3, f3)) : fi(a3, b3, h3, f3);
  b3.memoizedState = d3.state;
  e3 && Kf(b3, c3, true);
  return b3.child;
}
function ri(a3) {
  var b3 = a3.stateNode;
  b3.pendingContext ? Hf(a3, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && Hf(a3, b3.context, false);
  eh(a3, b3.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a3, b3, c3) {
  var d3 = b3.pendingProps, e3 = P.current, f3 = false, g3;
  (g3 = (b3.flags & 64) !== 0) || (g3 = a3 !== null && a3.memoizedState === null ? false : (e3 & 2) !== 0);
  g3 ? (f3 = true, b3.flags &= -65) : a3 !== null && a3.memoizedState === null || d3.fallback === void 0 || d3.unstable_avoidThisFallback === true || (e3 |= 1);
  I(P, e3 & 1);
  if (a3 === null) {
    d3.fallback !== void 0 && ph(b3);
    a3 = d3.children;
    e3 = d3.fallback;
    if (f3)
      return a3 = ui(b3, a3, e3, c3), b3.child.memoizedState = {baseLanes: c3}, b3.memoizedState = si, a3;
    if (typeof d3.unstable_expectedLoadTime === "number")
      return a3 = ui(b3, a3, e3, c3), b3.child.memoizedState = {baseLanes: c3}, b3.memoizedState = si, b3.lanes = 33554432, a3;
    c3 = vi({mode: "visible", children: a3}, b3.mode, c3, null);
    c3.return = b3;
    return b3.child = c3;
  }
  if (a3.memoizedState !== null) {
    if (f3)
      return d3 = wi(a3, b3, d3.children, d3.fallback, c3), f3 = b3.child, e3 = a3.child.memoizedState, f3.memoizedState = e3 === null ? {baseLanes: c3} : {baseLanes: e3.baseLanes | c3}, f3.childLanes = a3.childLanes & ~c3, b3.memoizedState = si, d3;
    c3 = xi(a3, b3, d3.children, c3);
    b3.memoizedState = null;
    return c3;
  }
  if (f3)
    return d3 = wi(a3, b3, d3.children, d3.fallback, c3), f3 = b3.child, e3 = a3.child.memoizedState, f3.memoizedState = e3 === null ? {baseLanes: c3} : {baseLanes: e3.baseLanes | c3}, f3.childLanes = a3.childLanes & ~c3, b3.memoizedState = si, d3;
  c3 = xi(a3, b3, d3.children, c3);
  b3.memoizedState = null;
  return c3;
}
function ui(a3, b3, c3, d3) {
  var e3 = a3.mode, f3 = a3.child;
  b3 = {mode: "hidden", children: b3};
  (e3 & 2) === 0 && f3 !== null ? (f3.childLanes = 0, f3.pendingProps = b3) : f3 = vi(b3, e3, 0, null);
  c3 = Xg(c3, e3, d3, null);
  f3.return = a3;
  c3.return = a3;
  f3.sibling = c3;
  a3.child = f3;
  return c3;
}
function xi(a3, b3, c3, d3) {
  var e3 = a3.child;
  a3 = e3.sibling;
  c3 = Tg(e3, {mode: "visible", children: c3});
  (b3.mode & 2) === 0 && (c3.lanes = d3);
  c3.return = b3;
  c3.sibling = null;
  a3 !== null && (a3.nextEffect = null, a3.flags = 8, b3.firstEffect = b3.lastEffect = a3);
  return b3.child = c3;
}
function wi(a3, b3, c3, d3, e3) {
  var f3 = b3.mode, g3 = a3.child;
  a3 = g3.sibling;
  var h3 = {mode: "hidden", children: c3};
  (f3 & 2) === 0 && b3.child !== g3 ? (c3 = b3.child, c3.childLanes = 0, c3.pendingProps = h3, g3 = c3.lastEffect, g3 !== null ? (b3.firstEffect = c3.firstEffect, b3.lastEffect = g3, g3.nextEffect = null) : b3.firstEffect = b3.lastEffect = null) : c3 = Tg(g3, h3);
  a3 !== null ? d3 = Tg(a3, d3) : (d3 = Xg(d3, f3, e3, null), d3.flags |= 2);
  d3.return = b3;
  c3.return = b3;
  c3.sibling = d3;
  b3.child = c3;
  return d3;
}
function yi(a3, b3) {
  a3.lanes |= b3;
  var c3 = a3.alternate;
  c3 !== null && (c3.lanes |= b3);
  sg(a3.return, b3);
}
function zi(a3, b3, c3, d3, e3, f3) {
  var g3 = a3.memoizedState;
  g3 === null ? a3.memoizedState = {isBackwards: b3, rendering: null, renderingStartTime: 0, last: d3, tail: c3, tailMode: e3, lastEffect: f3} : (g3.isBackwards = b3, g3.rendering = null, g3.renderingStartTime = 0, g3.last = d3, g3.tail = c3, g3.tailMode = e3, g3.lastEffect = f3);
}
function Ai(a3, b3, c3) {
  var d3 = b3.pendingProps, e3 = d3.revealOrder, f3 = d3.tail;
  fi(a3, b3, d3.children, c3);
  d3 = P.current;
  if ((d3 & 2) !== 0)
    d3 = d3 & 1 | 2, b3.flags |= 64;
  else {
    if (a3 !== null && (a3.flags & 64) !== 0)
      a:
        for (a3 = b3.child; a3 !== null; ) {
          if (a3.tag === 13)
            a3.memoizedState !== null && yi(a3, c3);
          else if (a3.tag === 19)
            yi(a3, c3);
          else if (a3.child !== null) {
            a3.child.return = a3;
            a3 = a3.child;
            continue;
          }
          if (a3 === b3)
            break a;
          for (; a3.sibling === null; ) {
            if (a3.return === null || a3.return === b3)
              break a;
            a3 = a3.return;
          }
          a3.sibling.return = a3.return;
          a3 = a3.sibling;
        }
    d3 &= 1;
  }
  I(P, d3);
  if ((b3.mode & 2) === 0)
    b3.memoizedState = null;
  else
    switch (e3) {
      case "forwards":
        c3 = b3.child;
        for (e3 = null; c3 !== null; )
          a3 = c3.alternate, a3 !== null && ih(a3) === null && (e3 = c3), c3 = c3.sibling;
        c3 = e3;
        c3 === null ? (e3 = b3.child, b3.child = null) : (e3 = c3.sibling, c3.sibling = null);
        zi(b3, false, e3, c3, f3, b3.lastEffect);
        break;
      case "backwards":
        c3 = null;
        e3 = b3.child;
        for (b3.child = null; e3 !== null; ) {
          a3 = e3.alternate;
          if (a3 !== null && ih(a3) === null) {
            b3.child = e3;
            break;
          }
          a3 = e3.sibling;
          e3.sibling = c3;
          c3 = e3;
          e3 = a3;
        }
        zi(b3, true, c3, null, f3, b3.lastEffect);
        break;
      case "together":
        zi(b3, false, null, null, void 0, b3.lastEffect);
        break;
      default:
        b3.memoizedState = null;
    }
  return b3.child;
}
function hi(a3, b3, c3) {
  a3 !== null && (b3.dependencies = a3.dependencies);
  Dg |= b3.lanes;
  if ((c3 & b3.childLanes) !== 0) {
    if (a3 !== null && b3.child !== a3.child)
      throw Error(y(153));
    if (b3.child !== null) {
      a3 = b3.child;
      c3 = Tg(a3, a3.pendingProps);
      b3.child = c3;
      for (c3.return = b3; a3.sibling !== null; )
        a3 = a3.sibling, c3 = c3.sibling = Tg(a3, a3.pendingProps), c3.return = b3;
      c3.sibling = null;
    }
    return b3.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a3, b3) {
  for (var c3 = b3.child; c3 !== null; ) {
    if (c3.tag === 5 || c3.tag === 6)
      a3.appendChild(c3.stateNode);
    else if (c3.tag !== 4 && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b3)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
};
Ci = function() {
};
Di = function(a3, b3, c3, d3) {
  var e3 = a3.memoizedProps;
  if (e3 !== d3) {
    a3 = b3.stateNode;
    dh(ah.current);
    var f3 = null;
    switch (c3) {
      case "input":
        e3 = Ya(a3, e3);
        d3 = Ya(a3, d3);
        f3 = [];
        break;
      case "option":
        e3 = eb(a3, e3);
        d3 = eb(a3, d3);
        f3 = [];
        break;
      case "select":
        e3 = objectAssign({}, e3, {value: void 0});
        d3 = objectAssign({}, d3, {value: void 0});
        f3 = [];
        break;
      case "textarea":
        e3 = gb(a3, e3);
        d3 = gb(a3, d3);
        f3 = [];
        break;
      default:
        typeof e3.onClick !== "function" && typeof d3.onClick === "function" && (a3.onclick = jf);
    }
    vb(c3, d3);
    var g3;
    c3 = null;
    for (l3 in e3)
      if (!d3.hasOwnProperty(l3) && e3.hasOwnProperty(l3) && e3[l3] != null)
        if (l3 === "style") {
          var h3 = e3[l3];
          for (g3 in h3)
            h3.hasOwnProperty(g3) && (c3 || (c3 = {}), c3[g3] = "");
        } else
          l3 !== "dangerouslySetInnerHTML" && l3 !== "children" && l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && l3 !== "autoFocus" && (ca.hasOwnProperty(l3) ? f3 || (f3 = []) : (f3 = f3 || []).push(l3, null));
    for (l3 in d3) {
      var k3 = d3[l3];
      h3 = e3 != null ? e3[l3] : void 0;
      if (d3.hasOwnProperty(l3) && k3 !== h3 && (k3 != null || h3 != null))
        if (l3 === "style")
          if (h3) {
            for (g3 in h3)
              !h3.hasOwnProperty(g3) || k3 && k3.hasOwnProperty(g3) || (c3 || (c3 = {}), c3[g3] = "");
            for (g3 in k3)
              k3.hasOwnProperty(g3) && h3[g3] !== k3[g3] && (c3 || (c3 = {}), c3[g3] = k3[g3]);
          } else
            c3 || (f3 || (f3 = []), f3.push(l3, c3)), c3 = k3;
        else
          l3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h3 = h3 ? h3.__html : void 0, k3 != null && h3 !== k3 && (f3 = f3 || []).push(l3, k3)) : l3 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f3 = f3 || []).push(l3, "" + k3) : l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l3) ? (k3 != null && l3 === "onScroll" && G("scroll", a3), f3 || h3 === k3 || (f3 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f3 = f3 || []).push(l3, k3));
    }
    c3 && (f3 = f3 || []).push("style", c3);
    var l3 = f3;
    if (b3.updateQueue = l3)
      b3.flags |= 4;
  }
};
Ei = function(a3, b3, c3, d3) {
  c3 !== d3 && (b3.flags |= 4);
};
function Fi(a3, b3) {
  if (!lh)
    switch (a3.tailMode) {
      case "hidden":
        b3 = a3.tail;
        for (var c3 = null; b3 !== null; )
          b3.alternate !== null && (c3 = b3), b3 = b3.sibling;
        c3 === null ? a3.tail = null : c3.sibling = null;
        break;
      case "collapsed":
        c3 = a3.tail;
        for (var d3 = null; c3 !== null; )
          c3.alternate !== null && (d3 = c3), c3 = c3.sibling;
        d3 === null ? b3 || a3.tail === null ? a3.tail = null : a3.tail.sibling = null : d3.sibling = null;
    }
}
function Gi(a3, b3, c3) {
  var d3 = b3.pendingProps;
  switch (b3.tag) {
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
      return Ff(b3.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d3 = b3.stateNode;
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (a3 === null || a3.child === null)
        rh(b3) ? b3.flags |= 4 : d3.hydrate || (b3.flags |= 256);
      Ci(b3);
      return null;
    case 5:
      hh(b3);
      var e3 = dh(ch.current);
      c3 = b3.type;
      if (a3 !== null && b3.stateNode != null)
        Di(a3, b3, c3, d3, e3), a3.ref !== b3.ref && (b3.flags |= 128);
      else {
        if (!d3) {
          if (b3.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a3 = dh(ah.current);
        if (rh(b3)) {
          d3 = b3.stateNode;
          c3 = b3.type;
          var f3 = b3.memoizedProps;
          d3[wf] = b3;
          d3[xf] = f3;
          switch (c3) {
            case "dialog":
              G("cancel", d3);
              G("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d3);
              break;
            case "video":
            case "audio":
              for (a3 = 0; a3 < Xe.length; a3++)
                G(Xe[a3], d3);
              break;
            case "source":
              G("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d3);
              G("load", d3);
              break;
            case "details":
              G("toggle", d3);
              break;
            case "input":
              Za(d3, f3);
              G("invalid", d3);
              break;
            case "select":
              d3._wrapperState = {wasMultiple: !!f3.multiple};
              G("invalid", d3);
              break;
            case "textarea":
              hb(d3, f3), G("invalid", d3);
          }
          vb(c3, f3);
          a3 = null;
          for (var g3 in f3)
            f3.hasOwnProperty(g3) && (e3 = f3[g3], g3 === "children" ? typeof e3 === "string" ? d3.textContent !== e3 && (a3 = ["children", e3]) : typeof e3 === "number" && d3.textContent !== "" + e3 && (a3 = ["children", "" + e3]) : ca.hasOwnProperty(g3) && e3 != null && g3 === "onScroll" && G("scroll", d3));
          switch (c3) {
            case "input":
              Va(d3);
              cb(d3, f3, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f3.onClick === "function" && (d3.onclick = jf);
          }
          d3 = a3;
          b3.updateQueue = d3;
          d3 !== null && (b3.flags |= 4);
        } else {
          g3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
          a3 === kb.html && (a3 = lb(c3));
          a3 === kb.html ? c3 === "script" ? (a3 = g3.createElement("div"), a3.innerHTML = "<script></script>", a3 = a3.removeChild(a3.firstChild)) : typeof d3.is === "string" ? a3 = g3.createElement(c3, {is: d3.is}) : (a3 = g3.createElement(c3), c3 === "select" && (g3 = a3, d3.multiple ? g3.multiple = true : d3.size && (g3.size = d3.size))) : a3 = g3.createElementNS(a3, c3);
          a3[wf] = b3;
          a3[xf] = d3;
          Bi(a3, b3, false, false);
          b3.stateNode = a3;
          g3 = wb(c3, d3);
          switch (c3) {
            case "dialog":
              G("cancel", a3);
              G("close", a3);
              e3 = d3;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a3);
              e3 = d3;
              break;
            case "video":
            case "audio":
              for (e3 = 0; e3 < Xe.length; e3++)
                G(Xe[e3], a3);
              e3 = d3;
              break;
            case "source":
              G("error", a3);
              e3 = d3;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a3);
              G("load", a3);
              e3 = d3;
              break;
            case "details":
              G("toggle", a3);
              e3 = d3;
              break;
            case "input":
              Za(a3, d3);
              e3 = Ya(a3, d3);
              G("invalid", a3);
              break;
            case "option":
              e3 = eb(a3, d3);
              break;
            case "select":
              a3._wrapperState = {wasMultiple: !!d3.multiple};
              e3 = objectAssign({}, d3, {value: void 0});
              G("invalid", a3);
              break;
            case "textarea":
              hb(a3, d3);
              e3 = gb(a3, d3);
              G("invalid", a3);
              break;
            default:
              e3 = d3;
          }
          vb(c3, e3);
          var h3 = e3;
          for (f3 in h3)
            if (h3.hasOwnProperty(f3)) {
              var k3 = h3[f3];
              f3 === "style" ? tb(a3, k3) : f3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a3, k3)) : f3 === "children" ? typeof k3 === "string" ? (c3 !== "textarea" || k3 !== "") && pb(a3, k3) : typeof k3 === "number" && pb(a3, "" + k3) : f3 !== "suppressContentEditableWarning" && f3 !== "suppressHydrationWarning" && f3 !== "autoFocus" && (ca.hasOwnProperty(f3) ? k3 != null && f3 === "onScroll" && G("scroll", a3) : k3 != null && qa(a3, f3, k3, g3));
            }
          switch (c3) {
            case "input":
              Va(a3);
              cb(a3, d3, false);
              break;
            case "textarea":
              Va(a3);
              jb(a3);
              break;
            case "option":
              d3.value != null && a3.setAttribute("value", "" + Sa(d3.value));
              break;
            case "select":
              a3.multiple = !!d3.multiple;
              f3 = d3.value;
              f3 != null ? fb(a3, !!d3.multiple, f3, false) : d3.defaultValue != null && fb(a3, !!d3.multiple, d3.defaultValue, true);
              break;
            default:
              typeof e3.onClick === "function" && (a3.onclick = jf);
          }
          mf(c3, d3) && (b3.flags |= 4);
        }
        b3.ref !== null && (b3.flags |= 128);
      }
      return null;
    case 6:
      if (a3 && b3.stateNode != null)
        Ei(a3, b3, a3.memoizedProps, d3);
      else {
        if (typeof d3 !== "string" && b3.stateNode === null)
          throw Error(y(166));
        c3 = dh(ch.current);
        dh(ah.current);
        rh(b3) ? (d3 = b3.stateNode, c3 = b3.memoizedProps, d3[wf] = b3, d3.nodeValue !== c3 && (b3.flags |= 4)) : (d3 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d3), d3[wf] = b3, b3.stateNode = d3);
      }
      return null;
    case 13:
      H(P);
      d3 = b3.memoizedState;
      if ((b3.flags & 64) !== 0)
        return b3.lanes = c3, b3;
      d3 = d3 !== null;
      c3 = false;
      a3 === null ? b3.memoizedProps.fallback !== void 0 && rh(b3) : c3 = a3.memoizedState !== null;
      if (d3 && !c3 && (b3.mode & 2) !== 0)
        if (a3 === null && b3.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d3 || c3)
        b3.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b3), a3 === null && cf(b3.stateNode.containerInfo), null;
    case 10:
      return rg(b3), null;
    case 17:
      return Ff(b3.type) && Gf(), null;
    case 19:
      H(P);
      d3 = b3.memoizedState;
      if (d3 === null)
        return null;
      f3 = (b3.flags & 64) !== 0;
      g3 = d3.rendering;
      if (g3 === null)
        if (f3)
          Fi(d3, false);
        else {
          if (V !== 0 || a3 !== null && (a3.flags & 64) !== 0)
            for (a3 = b3.child; a3 !== null; ) {
              g3 = ih(a3);
              if (g3 !== null) {
                b3.flags |= 64;
                Fi(d3, false);
                f3 = g3.updateQueue;
                f3 !== null && (b3.updateQueue = f3, b3.flags |= 4);
                d3.lastEffect === null && (b3.firstEffect = null);
                b3.lastEffect = d3.lastEffect;
                d3 = c3;
                for (c3 = b3.child; c3 !== null; )
                  f3 = c3, a3 = d3, f3.flags &= 2, f3.nextEffect = null, f3.firstEffect = null, f3.lastEffect = null, g3 = f3.alternate, g3 === null ? (f3.childLanes = 0, f3.lanes = a3, f3.child = null, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g3.childLanes, f3.lanes = g3.lanes, f3.child = g3.child, f3.memoizedProps = g3.memoizedProps, f3.memoizedState = g3.memoizedState, f3.updateQueue = g3.updateQueue, f3.type = g3.type, a3 = g3.dependencies, f3.dependencies = a3 === null ? null : {lanes: a3.lanes, firstContext: a3.firstContext}), c3 = c3.sibling;
                I(P, P.current & 1 | 2);
                return b3.child;
              }
              a3 = a3.sibling;
            }
          d3.tail !== null && O() > Ji && (b3.flags |= 64, f3 = true, Fi(d3, false), b3.lanes = 33554432);
        }
      else {
        if (!f3)
          if (a3 = ih(g3), a3 !== null) {
            if (b3.flags |= 64, f3 = true, c3 = a3.updateQueue, c3 !== null && (b3.updateQueue = c3, b3.flags |= 4), Fi(d3, true), d3.tail === null && d3.tailMode === "hidden" && !g3.alternate && !lh)
              return b3 = b3.lastEffect = d3.lastEffect, b3 !== null && (b3.nextEffect = null), null;
          } else
            2 * O() - d3.renderingStartTime > Ji && c3 !== 1073741824 && (b3.flags |= 64, f3 = true, Fi(d3, false), b3.lanes = 33554432);
        d3.isBackwards ? (g3.sibling = b3.child, b3.child = g3) : (c3 = d3.last, c3 !== null ? c3.sibling = g3 : b3.child = g3, d3.last = g3);
      }
      return d3.tail !== null ? (c3 = d3.tail, d3.rendering = c3, d3.tail = c3.sibling, d3.lastEffect = b3.lastEffect, d3.renderingStartTime = O(), c3.sibling = null, b3 = P.current, I(P, f3 ? b3 & 1 | 2 : b3 & 1), c3) : null;
    case 23:
    case 24:
      return Ki(), a3 !== null && a3.memoizedState !== null !== (b3.memoizedState !== null) && d3.mode !== "unstable-defer-without-hiding" && (b3.flags |= 4), null;
  }
  throw Error(y(156, b3.tag));
}
function Li(a3) {
  switch (a3.tag) {
    case 1:
      Ff(a3.type) && Gf();
      var b3 = a3.flags;
      return b3 & 4096 ? (a3.flags = b3 & -4097 | 64, a3) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b3 = a3.flags;
      if ((b3 & 64) !== 0)
        throw Error(y(285));
      a3.flags = b3 & -4097 | 64;
      return a3;
    case 5:
      return hh(a3), null;
    case 13:
      return H(P), b3 = a3.flags, b3 & 4096 ? (a3.flags = b3 & -4097 | 64, a3) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a3), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a3, b3) {
  try {
    var c3 = "", d3 = b3;
    do
      c3 += Qa(d3), d3 = d3.return;
    while (d3);
    var e3 = c3;
  } catch (f3) {
    e3 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
  }
  return {value: a3, source: b3, stack: e3};
}
function Ni(a3, b3) {
  try {
    console.error(b3.value);
  } catch (c3) {
    setTimeout(function() {
      throw c3;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a3, b3, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  c3.payload = {element: null};
  var d3 = b3.value;
  c3.callback = function() {
    Qi || (Qi = true, Ri = d3);
    Ni(a3, b3);
  };
  return c3;
}
function Si(a3, b3, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  var d3 = a3.type.getDerivedStateFromError;
  if (typeof d3 === "function") {
    var e3 = b3.value;
    c3.payload = function() {
      Ni(a3, b3);
      return d3(e3);
    };
  }
  var f3 = a3.stateNode;
  f3 !== null && typeof f3.componentDidCatch === "function" && (c3.callback = function() {
    typeof d3 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a3, b3));
    var c4 = b3.stack;
    this.componentDidCatch(b3.value, {componentStack: c4 !== null ? c4 : ""});
  });
  return c3;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a3) {
  var b3 = a3.ref;
  if (b3 !== null)
    if (typeof b3 === "function")
      try {
        b3(null);
      } catch (c3) {
        Wi(a3, c3);
      }
    else
      b3.current = null;
}
function Xi(a3, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b3.flags & 256 && a3 !== null) {
        var c3 = a3.memoizedProps, d3 = a3.memoizedState;
        a3 = b3.stateNode;
        b3 = a3.getSnapshotBeforeUpdate(b3.elementType === b3.type ? c3 : lg(b3.type, c3), d3);
        a3.__reactInternalSnapshotBeforeUpdate = b3;
      }
      return;
    case 3:
      b3.flags & 256 && qf(b3.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a3, b3, c3) {
  switch (c3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b3 = c3.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a3 = b3 = b3.next;
        do {
          if ((a3.tag & 3) === 3) {
            var d3 = a3.create;
            a3.destroy = d3();
          }
          a3 = a3.next;
        } while (a3 !== b3);
      }
      b3 = c3.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a3 = b3 = b3.next;
        do {
          var e3 = a3;
          d3 = e3.next;
          e3 = e3.tag;
          (e3 & 4) !== 0 && (e3 & 1) !== 0 && (Zi(c3, a3), $i(c3, a3));
          a3 = d3;
        } while (a3 !== b3);
      }
      return;
    case 1:
      a3 = c3.stateNode;
      c3.flags & 4 && (b3 === null ? a3.componentDidMount() : (d3 = c3.elementType === c3.type ? b3.memoizedProps : lg(c3.type, b3.memoizedProps), a3.componentDidUpdate(d3, b3.memoizedState, a3.__reactInternalSnapshotBeforeUpdate)));
      b3 = c3.updateQueue;
      b3 !== null && Eg(c3, b3, a3);
      return;
    case 3:
      b3 = c3.updateQueue;
      if (b3 !== null) {
        a3 = null;
        if (c3.child !== null)
          switch (c3.child.tag) {
            case 5:
              a3 = c3.child.stateNode;
              break;
            case 1:
              a3 = c3.child.stateNode;
          }
        Eg(c3, b3, a3);
      }
      return;
    case 5:
      a3 = c3.stateNode;
      b3 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a3.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c3.memoizedState === null && (c3 = c3.alternate, c3 !== null && (c3 = c3.memoizedState, c3 !== null && (c3 = c3.dehydrated, c3 !== null && Cc(c3))));
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
function aj(a3, b3) {
  for (var c3 = a3; ; ) {
    if (c3.tag === 5) {
      var d3 = c3.stateNode;
      if (b3)
        d3 = d3.style, typeof d3.setProperty === "function" ? d3.setProperty("display", "none", "important") : d3.display = "none";
      else {
        d3 = c3.stateNode;
        var e3 = c3.memoizedProps.style;
        e3 = e3 !== void 0 && e3 !== null && e3.hasOwnProperty("display") ? e3.display : null;
        d3.style.display = sb("display", e3);
      }
    } else if (c3.tag === 6)
      c3.stateNode.nodeValue = b3 ? "" : c3.memoizedProps;
    else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a3) && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === a3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === a3)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function bj(a3, b3) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b3);
    } catch (f3) {
    }
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a3 = b3.updateQueue;
      if (a3 !== null && (a3 = a3.lastEffect, a3 !== null)) {
        var c3 = a3 = a3.next;
        do {
          var d3 = c3, e3 = d3.destroy;
          d3 = d3.tag;
          if (e3 !== void 0)
            if ((d3 & 4) !== 0)
              Zi(b3, c3);
            else {
              d3 = b3;
              try {
                e3();
              } catch (f3) {
                Wi(d3, f3);
              }
            }
          c3 = c3.next;
        } while (c3 !== a3);
      }
      break;
    case 1:
      Vi(b3);
      a3 = b3.stateNode;
      if (typeof a3.componentWillUnmount === "function")
        try {
          a3.props = b3.memoizedProps, a3.state = b3.memoizedState, a3.componentWillUnmount();
        } catch (f3) {
          Wi(b3, f3);
        }
      break;
    case 5:
      Vi(b3);
      break;
    case 4:
      cj(a3, b3);
  }
}
function dj(a3) {
  a3.alternate = null;
  a3.child = null;
  a3.dependencies = null;
  a3.firstEffect = null;
  a3.lastEffect = null;
  a3.memoizedProps = null;
  a3.memoizedState = null;
  a3.pendingProps = null;
  a3.return = null;
  a3.updateQueue = null;
}
function ej(a3) {
  return a3.tag === 5 || a3.tag === 3 || a3.tag === 4;
}
function fj(a3) {
  a: {
    for (var b3 = a3.return; b3 !== null; ) {
      if (ej(b3))
        break a;
      b3 = b3.return;
    }
    throw Error(y(160));
  }
  var c3 = b3;
  b3 = c3.stateNode;
  switch (c3.tag) {
    case 5:
      var d3 = false;
      break;
    case 3:
      b3 = b3.containerInfo;
      d3 = true;
      break;
    case 4:
      b3 = b3.containerInfo;
      d3 = true;
      break;
    default:
      throw Error(y(161));
  }
  c3.flags & 16 && (pb(b3, ""), c3.flags &= -17);
  a:
    b:
      for (c3 = a3; ; ) {
        for (; c3.sibling === null; ) {
          if (c3.return === null || ej(c3.return)) {
            c3 = null;
            break a;
          }
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        for (c3 = c3.sibling; c3.tag !== 5 && c3.tag !== 6 && c3.tag !== 18; ) {
          if (c3.flags & 2)
            continue b;
          if (c3.child === null || c3.tag === 4)
            continue b;
          else
            c3.child.return = c3, c3 = c3.child;
        }
        if (!(c3.flags & 2)) {
          c3 = c3.stateNode;
          break a;
        }
      }
  d3 ? gj(a3, c3, b3) : hj(a3, c3, b3);
}
function gj(a3, b3, c3) {
  var d3 = a3.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a3 = e3 ? a3.stateNode : a3.stateNode.instance, b3 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a3, b3) : c3.insertBefore(a3, b3) : (c3.nodeType === 8 ? (b3 = c3.parentNode, b3.insertBefore(a3, c3)) : (b3 = c3, b3.appendChild(a3)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b3.onclick !== null || (b3.onclick = jf));
  else if (d3 !== 4 && (a3 = a3.child, a3 !== null))
    for (gj(a3, b3, c3), a3 = a3.sibling; a3 !== null; )
      gj(a3, b3, c3), a3 = a3.sibling;
}
function hj(a3, b3, c3) {
  var d3 = a3.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a3 = e3 ? a3.stateNode : a3.stateNode.instance, b3 ? c3.insertBefore(a3, b3) : c3.appendChild(a3);
  else if (d3 !== 4 && (a3 = a3.child, a3 !== null))
    for (hj(a3, b3, c3), a3 = a3.sibling; a3 !== null; )
      hj(a3, b3, c3), a3 = a3.sibling;
}
function cj(a3, b3) {
  for (var c3 = b3, d3 = false, e3, f3; ; ) {
    if (!d3) {
      d3 = c3.return;
      a:
        for (; ; ) {
          if (d3 === null)
            throw Error(y(160));
          e3 = d3.stateNode;
          switch (d3.tag) {
            case 5:
              f3 = false;
              break a;
            case 3:
              e3 = e3.containerInfo;
              f3 = true;
              break a;
            case 4:
              e3 = e3.containerInfo;
              f3 = true;
              break a;
          }
          d3 = d3.return;
        }
      d3 = true;
    }
    if (c3.tag === 5 || c3.tag === 6) {
      a:
        for (var g3 = a3, h3 = c3, k3 = h3; ; )
          if (bj(g3, k3), k3.child !== null && k3.tag !== 4)
            k3.child.return = k3, k3 = k3.child;
          else {
            if (k3 === h3)
              break a;
            for (; k3.sibling === null; ) {
              if (k3.return === null || k3.return === h3)
                break a;
              k3 = k3.return;
            }
            k3.sibling.return = k3.return;
            k3 = k3.sibling;
          }
      f3 ? (g3 = e3, h3 = c3.stateNode, g3.nodeType === 8 ? g3.parentNode.removeChild(h3) : g3.removeChild(h3)) : e3.removeChild(c3.stateNode);
    } else if (c3.tag === 4) {
      if (c3.child !== null) {
        e3 = c3.stateNode.containerInfo;
        f3 = true;
        c3.child.return = c3;
        c3 = c3.child;
        continue;
      }
    } else if (bj(a3, c3), c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b3)
        return;
      c3 = c3.return;
      c3.tag === 4 && (d3 = false);
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function ij(a3, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c3 = b3.updateQueue;
      c3 = c3 !== null ? c3.lastEffect : null;
      if (c3 !== null) {
        var d3 = c3 = c3.next;
        do
          (d3.tag & 3) === 3 && (a3 = d3.destroy, d3.destroy = void 0, a3 !== void 0 && a3()), d3 = d3.next;
        while (d3 !== c3);
      }
      return;
    case 1:
      return;
    case 5:
      c3 = b3.stateNode;
      if (c3 != null) {
        d3 = b3.memoizedProps;
        var e3 = a3 !== null ? a3.memoizedProps : d3;
        a3 = b3.type;
        var f3 = b3.updateQueue;
        b3.updateQueue = null;
        if (f3 !== null) {
          c3[xf] = d3;
          a3 === "input" && d3.type === "radio" && d3.name != null && $a(c3, d3);
          wb(a3, e3);
          b3 = wb(a3, d3);
          for (e3 = 0; e3 < f3.length; e3 += 2) {
            var g3 = f3[e3], h3 = f3[e3 + 1];
            g3 === "style" ? tb(c3, h3) : g3 === "dangerouslySetInnerHTML" ? ob(c3, h3) : g3 === "children" ? pb(c3, h3) : qa(c3, g3, h3, b3);
          }
          switch (a3) {
            case "input":
              ab(c3, d3);
              break;
            case "textarea":
              ib(c3, d3);
              break;
            case "select":
              a3 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d3.multiple, f3 = d3.value, f3 != null ? fb(c3, !!d3.multiple, f3, false) : a3 !== !!d3.multiple && (d3.defaultValue != null ? fb(c3, !!d3.multiple, d3.defaultValue, true) : fb(c3, !!d3.multiple, d3.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b3.stateNode === null)
        throw Error(y(162));
      b3.stateNode.nodeValue = b3.memoizedProps;
      return;
    case 3:
      c3 = b3.stateNode;
      c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b3.memoizedState !== null && (jj = O(), aj(b3.child, true));
      kj(b3);
      return;
    case 19:
      kj(b3);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b3, b3.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a3) {
  var b3 = a3.updateQueue;
  if (b3 !== null) {
    a3.updateQueue = null;
    var c3 = a3.stateNode;
    c3 === null && (c3 = a3.stateNode = new Ui());
    b3.forEach(function(b4) {
      var d3 = lj.bind(null, a3, b4);
      c3.has(b4) || (c3.add(b4), b4.then(d3, d3));
    });
  }
}
function mj(a3, b3) {
  return a3 !== null && (a3 = a3.memoizedState, a3 === null || a3.dehydrated !== null) ? (b3 = b3.memoizedState, b3 !== null && b3.dehydrated === null) : false;
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
function Ig(a3) {
  a3 = a3.mode;
  if ((a3 & 2) === 0)
    return 1;
  if ((a3 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a3 = Gj;
    var b3 = 4186112 & ~Hj;
    b3 &= -b3;
    b3 === 0 && (a3 = 4186112 & ~a3, b3 = a3 & -a3, b3 === 0 && (b3 = 8192));
    return b3;
  }
  a3 = eg();
  (X & 4) !== 0 && a3 === 98 ? a3 = Xc(12, Gj) : (a3 = Sc(a3), a3 = Xc(a3, Gj));
  return a3;
}
function Jg(a3, b3, c3) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a3 = Kj(a3, b3);
  if (a3 === null)
    return null;
  $c(a3, b3, c3);
  a3 === U && (Hi |= b3, V === 4 && Ii(a3, W));
  var d3 = eg();
  b3 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a3) : (Mj(a3, c3), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d3 !== 98 && d3 !== 99 || (Cj === null ? Cj = new Set([a3]) : Cj.add(a3)), Mj(a3, c3));
  vj = a3;
}
function Kj(a3, b3) {
  a3.lanes |= b3;
  var c3 = a3.alternate;
  c3 !== null && (c3.lanes |= b3);
  c3 = a3;
  for (a3 = a3.return; a3 !== null; )
    a3.childLanes |= b3, c3 = a3.alternate, c3 !== null && (c3.childLanes |= b3), c3 = a3, a3 = a3.return;
  return c3.tag === 3 ? c3.stateNode : null;
}
function Mj(a3, b3) {
  for (var c3 = a3.callbackNode, d3 = a3.suspendedLanes, e3 = a3.pingedLanes, f3 = a3.expirationTimes, g3 = a3.pendingLanes; 0 < g3; ) {
    var h3 = 31 - Vc(g3), k3 = 1 << h3, l3 = f3[h3];
    if (l3 === -1) {
      if ((k3 & d3) === 0 || (k3 & e3) !== 0) {
        l3 = b3;
        Rc(k3);
        var n3 = F;
        f3[h3] = 10 <= n3 ? l3 + 250 : 6 <= n3 ? l3 + 5e3 : -1;
      }
    } else
      l3 <= b3 && (a3.expiredLanes |= k3);
    g3 &= ~k3;
  }
  d3 = Uc(a3, a3 === U ? W : 0);
  b3 = F;
  if (d3 === 0)
    c3 !== null && (c3 !== Zf && Pf(c3), a3.callbackNode = null, a3.callbackPriority = 0);
  else {
    if (c3 !== null) {
      if (a3.callbackPriority === b3)
        return;
      c3 !== Zf && Pf(c3);
    }
    b3 === 15 ? (c3 = Lj.bind(null, a3), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b3 === 14 ? c3 = hg(99, Lj.bind(null, a3)) : (c3 = Tc(b3), c3 = hg(c3, Nj.bind(null, a3)));
    a3.callbackPriority = b3;
    a3.callbackNode = c3;
  }
}
function Nj(a3) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b3 = a3.callbackNode;
  if (Oj() && a3.callbackNode !== b3)
    return null;
  var c3 = Uc(a3, a3 === U ? W : 0);
  if (c3 === 0)
    return null;
  var d3 = c3;
  var e3 = X;
  X |= 16;
  var f3 = Pj();
  if (U !== a3 || W !== d3)
    wj(), Qj(a3, d3);
  do
    try {
      Rj();
      break;
    } catch (h3) {
      Sj(a3, h3);
    }
  while (1);
  qg();
  oj.current = f3;
  X = e3;
  Y !== null ? d3 = 0 : (U = null, W = 0, d3 = V);
  if ((tj & Hi) !== 0)
    Qj(a3, 0);
  else if (d3 !== 0) {
    d3 === 2 && (X |= 64, a3.hydrate && (a3.hydrate = false, qf(a3.containerInfo)), c3 = Wc(a3), c3 !== 0 && (d3 = Tj(a3, c3)));
    if (d3 === 1)
      throw b3 = sj, Qj(a3, 0), Ii(a3, c3), Mj(a3, O()), b3;
    a3.finishedWork = a3.current.alternate;
    a3.finishedLanes = c3;
    switch (d3) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a3);
        break;
      case 3:
        Ii(a3, c3);
        if ((c3 & 62914560) === c3 && (d3 = jj + 500 - O(), 10 < d3)) {
          if (Uc(a3, 0) !== 0)
            break;
          e3 = a3.suspendedLanes;
          if ((e3 & c3) !== c3) {
            Hg();
            a3.pingedLanes |= a3.suspendedLanes & e3;
            break;
          }
          a3.timeoutHandle = of(Uj.bind(null, a3), d3);
          break;
        }
        Uj(a3);
        break;
      case 4:
        Ii(a3, c3);
        if ((c3 & 4186112) === c3)
          break;
        d3 = a3.eventTimes;
        for (e3 = -1; 0 < c3; ) {
          var g3 = 31 - Vc(c3);
          f3 = 1 << g3;
          g3 = d3[g3];
          g3 > e3 && (e3 = g3);
          c3 &= ~f3;
        }
        c3 = e3;
        c3 = O() - c3;
        c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
        if (10 < c3) {
          a3.timeoutHandle = of(Uj.bind(null, a3), c3);
          break;
        }
        Uj(a3);
        break;
      case 5:
        Uj(a3);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a3, O());
  return a3.callbackNode === b3 ? Nj.bind(null, a3) : null;
}
function Ii(a3, b3) {
  b3 &= ~uj;
  b3 &= ~Hi;
  a3.suspendedLanes |= b3;
  a3.pingedLanes &= ~b3;
  for (a3 = a3.expirationTimes; 0 < b3; ) {
    var c3 = 31 - Vc(b3), d3 = 1 << c3;
    a3[c3] = -1;
    b3 &= ~d3;
  }
}
function Lj(a3) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a3 === U && (a3.expiredLanes & W) !== 0) {
    var b3 = W;
    var c3 = Tj(a3, b3);
    (tj & Hi) !== 0 && (b3 = Uc(a3, b3), c3 = Tj(a3, b3));
  } else
    b3 = Uc(a3, 0), c3 = Tj(a3, b3);
  a3.tag !== 0 && c3 === 2 && (X |= 64, a3.hydrate && (a3.hydrate = false, qf(a3.containerInfo)), b3 = Wc(a3), b3 !== 0 && (c3 = Tj(a3, b3)));
  if (c3 === 1)
    throw c3 = sj, Qj(a3, 0), Ii(a3, b3), Mj(a3, O()), c3;
  a3.finishedWork = a3.current.alternate;
  a3.finishedLanes = b3;
  Uj(a3);
  Mj(a3, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a3 = Cj;
    Cj = null;
    a3.forEach(function(a4) {
      a4.expiredLanes |= 24 & a4.pendingLanes;
      Mj(a4, O());
    });
  }
  ig();
}
function Wj(a3, b3) {
  var c3 = X;
  X |= 1;
  try {
    return a3(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function Xj(a3, b3) {
  var c3 = X;
  X &= -2;
  X |= 8;
  try {
    return a3(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function ni(a3, b3) {
  I(rj, qj);
  qj |= b3;
  tj |= b3;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a3, b3) {
  a3.finishedWork = null;
  a3.finishedLanes = 0;
  var c3 = a3.timeoutHandle;
  c3 !== -1 && (a3.timeoutHandle = -1, pf(c3));
  if (Y !== null)
    for (c3 = Y.return; c3 !== null; ) {
      var d3 = c3;
      switch (d3.tag) {
        case 1:
          d3 = d3.type.childContextTypes;
          d3 !== null && d3 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d3);
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
          rg(d3);
          break;
        case 23:
        case 24:
          Ki();
      }
      c3 = c3.return;
    }
  U = a3;
  Y = Tg(a3.current, null);
  W = qj = tj = b3;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a3, b3) {
  do {
    var c3 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d3 = R.memoizedState; d3 !== null; ) {
          var e3 = d3.queue;
          e3 !== null && (e3.pending = null);
          d3 = d3.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c3 === null || c3.return === null) {
        V = 1;
        sj = b3;
        Y = null;
        break;
      }
      a: {
        var f3 = a3, g3 = c3.return, h3 = c3, k3 = b3;
        b3 = W;
        h3.flags |= 2048;
        h3.firstEffect = h3.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l3 = k3;
          if ((h3.mode & 2) === 0) {
            var n3 = h3.alternate;
            n3 ? (h3.updateQueue = n3.updateQueue, h3.memoizedState = n3.memoizedState, h3.lanes = n3.lanes) : (h3.updateQueue = null, h3.memoizedState = null);
          }
          var A3 = (P.current & 1) !== 0, p3 = g3;
          do {
            var C3;
            if (C3 = p3.tag === 13) {
              var x3 = p3.memoizedState;
              if (x3 !== null)
                C3 = x3.dehydrated !== null ? true : false;
              else {
                var w3 = p3.memoizedProps;
                C3 = w3.fallback === void 0 ? false : w3.unstable_avoidThisFallback !== true ? true : A3 ? false : true;
              }
            }
            if (C3) {
              var z3 = p3.updateQueue;
              if (z3 === null) {
                var u3 = new Set();
                u3.add(l3);
                p3.updateQueue = u3;
              } else
                z3.add(l3);
              if ((p3.mode & 2) === 0) {
                p3.flags |= 64;
                h3.flags |= 16384;
                h3.flags &= -2981;
                if (h3.tag === 1)
                  if (h3.alternate === null)
                    h3.tag = 17;
                  else {
                    var t3 = zg(-1, 1);
                    t3.tag = 2;
                    Ag(h3, t3);
                  }
                h3.lanes |= 1;
                break a;
              }
              k3 = void 0;
              h3 = b3;
              var q3 = f3.pingCache;
              q3 === null ? (q3 = f3.pingCache = new Oi(), k3 = new Set(), q3.set(l3, k3)) : (k3 = q3.get(l3), k3 === void 0 && (k3 = new Set(), q3.set(l3, k3)));
              if (!k3.has(h3)) {
                k3.add(h3);
                var v3 = Yj.bind(null, f3, l3, h3);
                l3.then(v3, v3);
              }
              p3.flags |= 4096;
              p3.lanes = b3;
              break a;
            }
            p3 = p3.return;
          } while (p3 !== null);
          k3 = Error((Ra(h3.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k3 = Mi(k3, h3);
        p3 = g3;
        do {
          switch (p3.tag) {
            case 3:
              f3 = k3;
              p3.flags |= 4096;
              b3 &= -b3;
              p3.lanes |= b3;
              var J3 = Pi(p3, f3, b3);
              Bg(p3, J3);
              break a;
            case 1:
              f3 = k3;
              var K3 = p3.type, Q3 = p3.stateNode;
              if ((p3.flags & 64) === 0 && (typeof K3.getDerivedStateFromError === "function" || Q3 !== null && typeof Q3.componentDidCatch === "function" && (Ti === null || !Ti.has(Q3)))) {
                p3.flags |= 4096;
                b3 &= -b3;
                p3.lanes |= b3;
                var L3 = Si(p3, f3, b3);
                Bg(p3, L3);
                break a;
              }
          }
          p3 = p3.return;
        } while (p3 !== null);
      }
      Zj(c3);
    } catch (va) {
      b3 = va;
      Y === c3 && c3 !== null && (Y = c3 = c3.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a3 = oj.current;
  oj.current = Gh;
  return a3 === null ? Gh : a3;
}
function Tj(a3, b3) {
  var c3 = X;
  X |= 16;
  var d3 = Pj();
  U === a3 && W === b3 || Qj(a3, b3);
  do
    try {
      ak();
      break;
    } catch (e3) {
      Sj(a3, e3);
    }
  while (1);
  qg();
  X = c3;
  oj.current = d3;
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
function bk(a3) {
  var b3 = ck(a3.alternate, a3, qj);
  a3.memoizedProps = a3.pendingProps;
  b3 === null ? Zj(a3) : Y = b3;
  pj.current = null;
}
function Zj(a3) {
  var b3 = a3;
  do {
    var c3 = b3.alternate;
    a3 = b3.return;
    if ((b3.flags & 2048) === 0) {
      c3 = Gi(c3, b3, qj);
      if (c3 !== null) {
        Y = c3;
        return;
      }
      c3 = b3;
      if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
        for (var d3 = 0, e3 = c3.child; e3 !== null; )
          d3 |= e3.lanes | e3.childLanes, e3 = e3.sibling;
        c3.childLanes = d3;
      }
      a3 !== null && (a3.flags & 2048) === 0 && (a3.firstEffect === null && (a3.firstEffect = b3.firstEffect), b3.lastEffect !== null && (a3.lastEffect !== null && (a3.lastEffect.nextEffect = b3.firstEffect), a3.lastEffect = b3.lastEffect), 1 < b3.flags && (a3.lastEffect !== null ? a3.lastEffect.nextEffect = b3 : a3.firstEffect = b3, a3.lastEffect = b3));
    } else {
      c3 = Li(b3);
      if (c3 !== null) {
        c3.flags &= 2047;
        Y = c3;
        return;
      }
      a3 !== null && (a3.firstEffect = a3.lastEffect = null, a3.flags |= 2048);
    }
    b3 = b3.sibling;
    if (b3 !== null) {
      Y = b3;
      return;
    }
    Y = b3 = a3;
  } while (b3 !== null);
  V === 0 && (V = 5);
}
function Uj(a3) {
  var b3 = eg();
  gg(99, dk.bind(null, a3, b3));
  return null;
}
function dk(a3, b3) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c3 = a3.finishedWork;
  if (c3 === null)
    return null;
  a3.finishedWork = null;
  a3.finishedLanes = 0;
  if (c3 === a3.current)
    throw Error(y(177));
  a3.callbackNode = null;
  var d3 = c3.lanes | c3.childLanes, e3 = d3, f3 = a3.pendingLanes & ~e3;
  a3.pendingLanes = e3;
  a3.suspendedLanes = 0;
  a3.pingedLanes = 0;
  a3.expiredLanes &= e3;
  a3.mutableReadLanes &= e3;
  a3.entangledLanes &= e3;
  e3 = a3.entanglements;
  for (var g3 = a3.eventTimes, h3 = a3.expirationTimes; 0 < f3; ) {
    var k3 = 31 - Vc(f3), l3 = 1 << k3;
    e3[k3] = 0;
    g3[k3] = -1;
    h3[k3] = -1;
    f3 &= ~l3;
  }
  Cj !== null && (d3 & 24) === 0 && Cj.has(a3) && Cj.delete(a3);
  a3 === U && (Y = U = null, W = 0);
  1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d3 = c3.firstEffect) : d3 = c3 : d3 = c3.firstEffect;
  if (d3 !== null) {
    e3 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g3 = Ne();
    if (Oe(g3)) {
      if ("selectionStart" in g3)
        h3 = {start: g3.selectionStart, end: g3.selectionEnd};
      else
        a:
          if (h3 = (h3 = g3.ownerDocument) && h3.defaultView || window, (l3 = h3.getSelection && h3.getSelection()) && l3.rangeCount !== 0) {
            h3 = l3.anchorNode;
            f3 = l3.anchorOffset;
            k3 = l3.focusNode;
            l3 = l3.focusOffset;
            try {
              h3.nodeType, k3.nodeType;
            } catch (va) {
              h3 = null;
              break a;
            }
            var n3 = 0, A3 = -1, p3 = -1, C3 = 0, x3 = 0, w3 = g3, z3 = null;
            b:
              for (; ; ) {
                for (var u3; ; ) {
                  w3 !== h3 || f3 !== 0 && w3.nodeType !== 3 || (A3 = n3 + f3);
                  w3 !== k3 || l3 !== 0 && w3.nodeType !== 3 || (p3 = n3 + l3);
                  w3.nodeType === 3 && (n3 += w3.nodeValue.length);
                  if ((u3 = w3.firstChild) === null)
                    break;
                  z3 = w3;
                  w3 = u3;
                }
                for (; ; ) {
                  if (w3 === g3)
                    break b;
                  z3 === h3 && ++C3 === f3 && (A3 = n3);
                  z3 === k3 && ++x3 === l3 && (p3 = n3);
                  if ((u3 = w3.nextSibling) !== null)
                    break;
                  w3 = z3;
                  z3 = w3.parentNode;
                }
                w3 = u3;
              }
            h3 = A3 === -1 || p3 === -1 ? null : {start: A3, end: p3};
          } else
            h3 = null;
      h3 = h3 || {start: 0, end: 0};
    } else
      h3 = null;
    lf = {focusedElem: g3, selectionRange: h3};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d3;
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
    Z = d3;
    do
      try {
        for (g3 = a3; Z !== null; ) {
          var t3 = Z.flags;
          t3 & 16 && pb(Z.stateNode, "");
          if (t3 & 128) {
            var q3 = Z.alternate;
            if (q3 !== null) {
              var v3 = q3.ref;
              v3 !== null && (typeof v3 === "function" ? v3(null) : v3.current = null);
            }
          }
          switch (t3 & 1038) {
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
              h3 = Z;
              cj(g3, h3);
              var J3 = h3.alternate;
              dj(h3);
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
    t3 = v3.focusedElem;
    g3 = v3.selectionRange;
    if (q3 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
      g3 !== null && Oe(t3) && (q3 = g3.start, v3 = g3.end, v3 === void 0 && (v3 = q3), "selectionStart" in t3 ? (t3.selectionStart = q3, t3.selectionEnd = Math.min(v3, t3.value.length)) : (v3 = (q3 = t3.ownerDocument || document) && q3.defaultView || window, v3.getSelection && (v3 = v3.getSelection(), h3 = t3.textContent.length, J3 = Math.min(g3.start, h3), g3 = g3.end === void 0 ? J3 : Math.min(g3.end, h3), !v3.extend && J3 > g3 && (h3 = g3, g3 = J3, J3 = h3), h3 = Le(t3, J3), f3 = Le(t3, g3), h3 && f3 && (v3.rangeCount !== 1 || v3.anchorNode !== h3.node || v3.anchorOffset !== h3.offset || v3.focusNode !== f3.node || v3.focusOffset !== f3.offset) && (q3 = q3.createRange(), q3.setStart(h3.node, h3.offset), v3.removeAllRanges(), J3 > g3 ? (v3.addRange(q3), v3.extend(f3.node, f3.offset)) : (q3.setEnd(f3.node, f3.offset), v3.addRange(q3))))));
      q3 = [];
      for (v3 = t3; v3 = v3.parentNode; )
        v3.nodeType === 1 && q3.push({element: v3, left: v3.scrollLeft, top: v3.scrollTop});
      typeof t3.focus === "function" && t3.focus();
      for (t3 = 0; t3 < q3.length; t3++)
        v3 = q3[t3], v3.element.scrollLeft = v3.left, v3.element.scrollTop = v3.top;
    }
    fd = !!kf;
    lf = kf = null;
    a3.current = c3;
    Z = d3;
    do
      try {
        for (t3 = a3; Z !== null; ) {
          var K3 = Z.flags;
          K3 & 36 && Yi(t3, Z.alternate, Z);
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
    X = e3;
  } else
    a3.current = c3;
  if (xj)
    xj = false, yj = a3, zj = b3;
  else
    for (Z = d3; Z !== null; )
      b3 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K3 = Z, K3.sibling = null, K3.stateNode = null), Z = b3;
  d3 = a3.pendingLanes;
  d3 === 0 && (Ti = null);
  d3 === 1 ? a3 === Ej ? Dj++ : (Dj = 0, Ej = a3) : Dj = 0;
  c3 = c3.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a3, O());
  if (Qi)
    throw Qi = false, a3 = Ri, Ri = null, a3;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a3 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a3, Z) && dc(Z, Ij) && (Jj = true));
    var b3 = Z.flags;
    (b3 & 256) !== 0 && Xi(a3, Z);
    (b3 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a3 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a3, fk);
  }
  return false;
}
function $i(a3, b3) {
  Aj.push(b3, a3);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a3, b3) {
  Bj.push(b3, a3);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a3 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b3 = X;
  X |= 32;
  var c3 = Bj;
  Bj = [];
  for (var d3 = 0; d3 < c3.length; d3 += 2) {
    var e3 = c3[d3], f3 = c3[d3 + 1], g3 = e3.destroy;
    e3.destroy = void 0;
    if (typeof g3 === "function")
      try {
        g3();
      } catch (k3) {
        if (f3 === null)
          throw Error(y(330));
        Wi(f3, k3);
      }
  }
  c3 = Aj;
  Aj = [];
  for (d3 = 0; d3 < c3.length; d3 += 2) {
    e3 = c3[d3];
    f3 = c3[d3 + 1];
    try {
      var h3 = e3.create;
      e3.destroy = h3();
    } catch (k3) {
      if (f3 === null)
        throw Error(y(330));
      Wi(f3, k3);
    }
  }
  for (h3 = a3.current.firstEffect; h3 !== null; )
    a3 = h3.nextEffect, h3.nextEffect = null, h3.flags & 8 && (h3.sibling = null, h3.stateNode = null), h3 = a3;
  X = b3;
  ig();
  return true;
}
function gk(a3, b3, c3) {
  b3 = Mi(c3, b3);
  b3 = Pi(a3, b3, 1);
  Ag(a3, b3);
  b3 = Hg();
  a3 = Kj(a3, 1);
  a3 !== null && ($c(a3, 1, b3), Mj(a3, b3));
}
function Wi(a3, b3) {
  if (a3.tag === 3)
    gk(a3, a3, b3);
  else
    for (var c3 = a3.return; c3 !== null; ) {
      if (c3.tag === 3) {
        gk(c3, a3, b3);
        break;
      } else if (c3.tag === 1) {
        var d3 = c3.stateNode;
        if (typeof c3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3))) {
          a3 = Mi(b3, a3);
          var e3 = Si(c3, a3, 1);
          Ag(c3, e3);
          e3 = Hg();
          c3 = Kj(c3, 1);
          if (c3 !== null)
            $c(c3, 1, e3), Mj(c3, e3);
          else if (typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3)))
            try {
              d3.componentDidCatch(b3, a3);
            } catch (f3) {
            }
          break;
        }
      }
      c3 = c3.return;
    }
}
function Yj(a3, b3, c3) {
  var d3 = a3.pingCache;
  d3 !== null && d3.delete(b3);
  b3 = Hg();
  a3.pingedLanes |= a3.suspendedLanes & c3;
  U === a3 && (W & c3) === c3 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a3, 0) : uj |= c3);
  Mj(a3, b3);
}
function lj(a3, b3) {
  var c3 = a3.stateNode;
  c3 !== null && c3.delete(b3);
  b3 = 0;
  b3 === 0 && (b3 = a3.mode, (b3 & 2) === 0 ? b3 = 1 : (b3 & 4) === 0 ? b3 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b3 = Yc(62914560 & ~Gj), b3 === 0 && (b3 = 4194304)));
  c3 = Hg();
  a3 = Kj(a3, b3);
  a3 !== null && ($c(a3, b3, c3), Mj(a3, c3));
}
var ck;
ck = function(a3, b3, c3) {
  var d3 = b3.lanes;
  if (a3 !== null)
    if (a3.memoizedProps !== b3.pendingProps || N.current)
      ug = true;
    else if ((c3 & d3) !== 0)
      ug = (a3.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b3.tag) {
        case 3:
          ri(b3);
          sh();
          break;
        case 5:
          gh(b3);
          break;
        case 1:
          Ff(b3.type) && Jf(b3);
          break;
        case 4:
          eh(b3, b3.stateNode.containerInfo);
          break;
        case 10:
          d3 = b3.memoizedProps.value;
          var e3 = b3.type._context;
          I(mg, e3._currentValue);
          e3._currentValue = d3;
          break;
        case 13:
          if (b3.memoizedState !== null) {
            if ((c3 & b3.child.childLanes) !== 0)
              return ti(a3, b3, c3);
            I(P, P.current & 1);
            b3 = hi(a3, b3, c3);
            return b3 !== null ? b3.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d3 = (c3 & b3.childLanes) !== 0;
          if ((a3.flags & 64) !== 0) {
            if (d3)
              return Ai(a3, b3, c3);
            b3.flags |= 64;
          }
          e3 = b3.memoizedState;
          e3 !== null && (e3.rendering = null, e3.tail = null, e3.lastEffect = null);
          I(P, P.current);
          if (d3)
            break;
          else
            return null;
        case 23:
        case 24:
          return b3.lanes = 0, mi(a3, b3, c3);
      }
      return hi(a3, b3, c3);
    }
  else
    ug = false;
  b3.lanes = 0;
  switch (b3.tag) {
    case 2:
      d3 = b3.type;
      a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2);
      a3 = b3.pendingProps;
      e3 = Ef(b3, M.current);
      tg(b3, c3);
      e3 = Ch(null, b3, d3, a3, e3, c3);
      b3.flags |= 1;
      if (typeof e3 === "object" && e3 !== null && typeof e3.render === "function" && e3.$$typeof === void 0) {
        b3.tag = 1;
        b3.memoizedState = null;
        b3.updateQueue = null;
        if (Ff(d3)) {
          var f3 = true;
          Jf(b3);
        } else
          f3 = false;
        b3.memoizedState = e3.state !== null && e3.state !== void 0 ? e3.state : null;
        xg(b3);
        var g3 = d3.getDerivedStateFromProps;
        typeof g3 === "function" && Gg(b3, d3, g3, a3);
        e3.updater = Kg;
        b3.stateNode = e3;
        e3._reactInternals = b3;
        Og(b3, d3, a3, c3);
        b3 = qi(null, b3, d3, true, f3, c3);
      } else
        b3.tag = 0, fi(null, b3, e3, c3), b3 = b3.child;
      return b3;
    case 16:
      e3 = b3.elementType;
      a: {
        a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2);
        a3 = b3.pendingProps;
        f3 = e3._init;
        e3 = f3(e3._payload);
        b3.type = e3;
        f3 = b3.tag = hk(e3);
        a3 = lg(e3, a3);
        switch (f3) {
          case 0:
            b3 = li(null, b3, e3, a3, c3);
            break a;
          case 1:
            b3 = pi(null, b3, e3, a3, c3);
            break a;
          case 11:
            b3 = gi(null, b3, e3, a3, c3);
            break a;
          case 14:
            b3 = ii(null, b3, e3, lg(e3.type, a3), d3, c3);
            break a;
        }
        throw Error(y(306, e3, ""));
      }
      return b3;
    case 0:
      return d3 = b3.type, e3 = b3.pendingProps, e3 = b3.elementType === d3 ? e3 : lg(d3, e3), li(a3, b3, d3, e3, c3);
    case 1:
      return d3 = b3.type, e3 = b3.pendingProps, e3 = b3.elementType === d3 ? e3 : lg(d3, e3), pi(a3, b3, d3, e3, c3);
    case 3:
      ri(b3);
      d3 = b3.updateQueue;
      if (a3 === null || d3 === null)
        throw Error(y(282));
      d3 = b3.pendingProps;
      e3 = b3.memoizedState;
      e3 = e3 !== null ? e3.element : null;
      yg(a3, b3);
      Cg(b3, d3, null, c3);
      d3 = b3.memoizedState.element;
      if (d3 === e3)
        sh(), b3 = hi(a3, b3, c3);
      else {
        e3 = b3.stateNode;
        if (f3 = e3.hydrate)
          kh = rf(b3.stateNode.containerInfo.firstChild), jh = b3, f3 = lh = true;
        if (f3) {
          a3 = e3.mutableSourceEagerHydrationData;
          if (a3 != null)
            for (e3 = 0; e3 < a3.length; e3 += 2)
              f3 = a3[e3], f3._workInProgressVersionPrimary = a3[e3 + 1], th.push(f3);
          c3 = Zg(b3, null, d3, c3);
          for (b3.child = c3; c3; )
            c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
        } else
          fi(a3, b3, d3, c3), sh();
        b3 = b3.child;
      }
      return b3;
    case 5:
      return gh(b3), a3 === null && ph(b3), d3 = b3.type, e3 = b3.pendingProps, f3 = a3 !== null ? a3.memoizedProps : null, g3 = e3.children, nf(d3, e3) ? g3 = null : f3 !== null && nf(d3, f3) && (b3.flags |= 16), oi(a3, b3), fi(a3, b3, g3, c3), b3.child;
    case 6:
      return a3 === null && ph(b3), null;
    case 13:
      return ti(a3, b3, c3);
    case 4:
      return eh(b3, b3.stateNode.containerInfo), d3 = b3.pendingProps, a3 === null ? b3.child = Yg(b3, null, d3, c3) : fi(a3, b3, d3, c3), b3.child;
    case 11:
      return d3 = b3.type, e3 = b3.pendingProps, e3 = b3.elementType === d3 ? e3 : lg(d3, e3), gi(a3, b3, d3, e3, c3);
    case 7:
      return fi(a3, b3, b3.pendingProps, c3), b3.child;
    case 8:
      return fi(a3, b3, b3.pendingProps.children, c3), b3.child;
    case 12:
      return fi(a3, b3, b3.pendingProps.children, c3), b3.child;
    case 10:
      a: {
        d3 = b3.type._context;
        e3 = b3.pendingProps;
        g3 = b3.memoizedProps;
        f3 = e3.value;
        var h3 = b3.type._context;
        I(mg, h3._currentValue);
        h3._currentValue = f3;
        if (g3 !== null)
          if (h3 = g3.value, f3 = He(h3, f3) ? 0 : (typeof d3._calculateChangedBits === "function" ? d3._calculateChangedBits(h3, f3) : 1073741823) | 0, f3 === 0) {
            if (g3.children === e3.children && !N.current) {
              b3 = hi(a3, b3, c3);
              break a;
            }
          } else
            for (h3 = b3.child, h3 !== null && (h3.return = b3); h3 !== null; ) {
              var k3 = h3.dependencies;
              if (k3 !== null) {
                g3 = h3.child;
                for (var l3 = k3.firstContext; l3 !== null; ) {
                  if (l3.context === d3 && (l3.observedBits & f3) !== 0) {
                    h3.tag === 1 && (l3 = zg(-1, c3 & -c3), l3.tag = 2, Ag(h3, l3));
                    h3.lanes |= c3;
                    l3 = h3.alternate;
                    l3 !== null && (l3.lanes |= c3);
                    sg(h3.return, c3);
                    k3.lanes |= c3;
                    break;
                  }
                  l3 = l3.next;
                }
              } else
                g3 = h3.tag === 10 ? h3.type === b3.type ? null : h3.child : h3.child;
              if (g3 !== null)
                g3.return = h3;
              else
                for (g3 = h3; g3 !== null; ) {
                  if (g3 === b3) {
                    g3 = null;
                    break;
                  }
                  h3 = g3.sibling;
                  if (h3 !== null) {
                    h3.return = g3.return;
                    g3 = h3;
                    break;
                  }
                  g3 = g3.return;
                }
              h3 = g3;
            }
        fi(a3, b3, e3.children, c3);
        b3 = b3.child;
      }
      return b3;
    case 9:
      return e3 = b3.type, f3 = b3.pendingProps, d3 = f3.children, tg(b3, c3), e3 = vg(e3, f3.unstable_observedBits), d3 = d3(e3), b3.flags |= 1, fi(a3, b3, d3, c3), b3.child;
    case 14:
      return e3 = b3.type, f3 = lg(e3, b3.pendingProps), f3 = lg(e3.type, f3), ii(a3, b3, e3, f3, d3, c3);
    case 15:
      return ki(a3, b3, b3.type, b3.pendingProps, d3, c3);
    case 17:
      return d3 = b3.type, e3 = b3.pendingProps, e3 = b3.elementType === d3 ? e3 : lg(d3, e3), a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2), b3.tag = 1, Ff(d3) ? (a3 = true, Jf(b3)) : a3 = false, tg(b3, c3), Mg(b3, d3, e3), Og(b3, d3, e3, c3), qi(null, b3, d3, true, a3, c3);
    case 19:
      return Ai(a3, b3, c3);
    case 23:
      return mi(a3, b3, c3);
    case 24:
      return mi(a3, b3, c3);
  }
  throw Error(y(156, b3.tag));
};
function ik(a3, b3, c3, d3) {
  this.tag = a3;
  this.key = c3;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b3;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a3, b3, c3, d3) {
  return new ik(a3, b3, c3, d3);
}
function ji(a3) {
  a3 = a3.prototype;
  return !(!a3 || !a3.isReactComponent);
}
function hk(a3) {
  if (typeof a3 === "function")
    return ji(a3) ? 1 : 0;
  if (a3 !== void 0 && a3 !== null) {
    a3 = a3.$$typeof;
    if (a3 === Aa)
      return 11;
    if (a3 === Da)
      return 14;
  }
  return 2;
}
function Tg(a3, b3) {
  var c3 = a3.alternate;
  c3 === null ? (c3 = nh(a3.tag, b3, a3.key, a3.mode), c3.elementType = a3.elementType, c3.type = a3.type, c3.stateNode = a3.stateNode, c3.alternate = a3, a3.alternate = c3) : (c3.pendingProps = b3, c3.type = a3.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
  c3.childLanes = a3.childLanes;
  c3.lanes = a3.lanes;
  c3.child = a3.child;
  c3.memoizedProps = a3.memoizedProps;
  c3.memoizedState = a3.memoizedState;
  c3.updateQueue = a3.updateQueue;
  b3 = a3.dependencies;
  c3.dependencies = b3 === null ? null : {lanes: b3.lanes, firstContext: b3.firstContext};
  c3.sibling = a3.sibling;
  c3.index = a3.index;
  c3.ref = a3.ref;
  return c3;
}
function Vg(a3, b3, c3, d3, e3, f3) {
  var g3 = 2;
  d3 = a3;
  if (typeof a3 === "function")
    ji(a3) && (g3 = 1);
  else if (typeof a3 === "string")
    g3 = 5;
  else
    a:
      switch (a3) {
        case ua:
          return Xg(c3.children, e3, f3, b3);
        case Ha:
          g3 = 8;
          e3 |= 16;
          break;
        case wa:
          g3 = 8;
          e3 |= 1;
          break;
        case xa:
          return a3 = nh(12, c3, b3, e3 | 8), a3.elementType = xa, a3.type = xa, a3.lanes = f3, a3;
        case Ba:
          return a3 = nh(13, c3, b3, e3), a3.type = Ba, a3.elementType = Ba, a3.lanes = f3, a3;
        case Ca:
          return a3 = nh(19, c3, b3, e3), a3.elementType = Ca, a3.lanes = f3, a3;
        case Ia:
          return vi(c3, e3, f3, b3);
        case Ja:
          return a3 = nh(24, c3, b3, e3), a3.elementType = Ja, a3.lanes = f3, a3;
        default:
          if (typeof a3 === "object" && a3 !== null)
            switch (a3.$$typeof) {
              case ya:
                g3 = 10;
                break a;
              case za:
                g3 = 9;
                break a;
              case Aa:
                g3 = 11;
                break a;
              case Da:
                g3 = 14;
                break a;
              case Ea:
                g3 = 16;
                d3 = null;
                break a;
              case Fa:
                g3 = 22;
                break a;
            }
          throw Error(y(130, a3 == null ? a3 : typeof a3, ""));
      }
  b3 = nh(g3, c3, b3, e3);
  b3.elementType = a3;
  b3.type = d3;
  b3.lanes = f3;
  return b3;
}
function Xg(a3, b3, c3, d3) {
  a3 = nh(7, a3, d3, b3);
  a3.lanes = c3;
  return a3;
}
function vi(a3, b3, c3, d3) {
  a3 = nh(23, a3, d3, b3);
  a3.elementType = Ia;
  a3.lanes = c3;
  return a3;
}
function Ug(a3, b3, c3) {
  a3 = nh(6, a3, null, b3);
  a3.lanes = c3;
  return a3;
}
function Wg(a3, b3, c3) {
  b3 = nh(4, a3.children !== null ? a3.children : [], a3.key, b3);
  b3.lanes = c3;
  b3.stateNode = {containerInfo: a3.containerInfo, pendingChildren: null, implementation: a3.implementation};
  return b3;
}
function jk(a3, b3, c3) {
  this.tag = b3;
  this.containerInfo = a3;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c3;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a3, b3, c3) {
  var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d3 == null ? null : "" + d3, children: a3, containerInfo: b3, implementation: c3};
}
function lk(a3, b3, c3, d3) {
  var e3 = b3.current, f3 = Hg(), g3 = Ig(e3);
  a:
    if (c3) {
      c3 = c3._reactInternals;
      b: {
        if (Zb(c3) !== c3 || c3.tag !== 1)
          throw Error(y(170));
        var h3 = c3;
        do {
          switch (h3.tag) {
            case 3:
              h3 = h3.stateNode.context;
              break b;
            case 1:
              if (Ff(h3.type)) {
                h3 = h3.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h3 = h3.return;
        } while (h3 !== null);
        throw Error(y(171));
      }
      if (c3.tag === 1) {
        var k3 = c3.type;
        if (Ff(k3)) {
          c3 = If(c3, k3, h3);
          break a;
        }
      }
      c3 = h3;
    } else
      c3 = Cf;
  b3.context === null ? b3.context = c3 : b3.pendingContext = c3;
  b3 = zg(f3, g3);
  b3.payload = {element: a3};
  d3 = d3 === void 0 ? null : d3;
  d3 !== null && (b3.callback = d3);
  Ag(e3, b3);
  Jg(e3, g3, f3);
  return g3;
}
function mk(a3) {
  a3 = a3.current;
  if (!a3.child)
    return null;
  switch (a3.child.tag) {
    case 5:
      return a3.child.stateNode;
    default:
      return a3.child.stateNode;
  }
}
function nk(a3, b3) {
  a3 = a3.memoizedState;
  if (a3 !== null && a3.dehydrated !== null) {
    var c3 = a3.retryLane;
    a3.retryLane = c3 !== 0 && c3 < b3 ? c3 : b3;
  }
}
function ok(a3, b3) {
  nk(a3, b3);
  (a3 = a3.alternate) && nk(a3, b3);
}
function pk() {
  return null;
}
function qk(a3, b3, c3) {
  var d3 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
  c3 = new jk(a3, b3, c3 != null && c3.hydrate === true);
  b3 = nh(3, null, null, b3 === 2 ? 7 : b3 === 1 ? 3 : 0);
  c3.current = b3;
  b3.stateNode = c3;
  xg(b3);
  a3[ff] = c3.current;
  cf(a3.nodeType === 8 ? a3.parentNode : a3);
  if (d3)
    for (a3 = 0; a3 < d3.length; a3++) {
      b3 = d3[a3];
      var e3 = b3._getVersion;
      e3 = e3(b3._source);
      c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b3, e3] : c3.mutableSourceEagerHydrationData.push(b3, e3);
    }
  this._internalRoot = c3;
}
qk.prototype.render = function(a3) {
  lk(a3, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a3 = this._internalRoot, b3 = a3.containerInfo;
  lk(null, a3, null, function() {
    b3[ff] = null;
  });
};
function rk(a3) {
  return !(!a3 || a3.nodeType !== 1 && a3.nodeType !== 9 && a3.nodeType !== 11 && (a3.nodeType !== 8 || a3.nodeValue !== " react-mount-point-unstable "));
}
function sk(a3, b3) {
  b3 || (b3 = a3 ? a3.nodeType === 9 ? a3.documentElement : a3.firstChild : null, b3 = !(!b3 || b3.nodeType !== 1 || !b3.hasAttribute("data-reactroot")));
  if (!b3)
    for (var c3; c3 = a3.lastChild; )
      a3.removeChild(c3);
  return new qk(a3, 0, b3 ? {hydrate: true} : void 0);
}
function tk(a3, b3, c3, d3, e3) {
  var f3 = c3._reactRootContainer;
  if (f3) {
    var g3 = f3._internalRoot;
    if (typeof e3 === "function") {
      var h3 = e3;
      e3 = function() {
        var a4 = mk(g3);
        h3.call(a4);
      };
    }
    lk(b3, g3, a3, e3);
  } else {
    f3 = c3._reactRootContainer = sk(c3, d3);
    g3 = f3._internalRoot;
    if (typeof e3 === "function") {
      var k3 = e3;
      e3 = function() {
        var a4 = mk(g3);
        k3.call(a4);
      };
    }
    Xj(function() {
      lk(b3, g3, a3, e3);
    });
  }
  return mk(g3);
}
ec = function(a3) {
  if (a3.tag === 13) {
    var b3 = Hg();
    Jg(a3, 4, b3);
    ok(a3, 4);
  }
};
fc = function(a3) {
  if (a3.tag === 13) {
    var b3 = Hg();
    Jg(a3, 67108864, b3);
    ok(a3, 67108864);
  }
};
gc = function(a3) {
  if (a3.tag === 13) {
    var b3 = Hg(), c3 = Ig(a3);
    Jg(a3, c3, b3);
    ok(a3, c3);
  }
};
hc = function(a3, b3) {
  return b3();
};
yb = function(a3, b3, c3) {
  switch (b3) {
    case "input":
      ab(a3, c3);
      b3 = c3.name;
      if (c3.type === "radio" && b3 != null) {
        for (c3 = a3; c3.parentNode; )
          c3 = c3.parentNode;
        c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
        for (b3 = 0; b3 < c3.length; b3++) {
          var d3 = c3[b3];
          if (d3 !== a3 && d3.form === a3.form) {
            var e3 = Db(d3);
            if (!e3)
              throw Error(y(90));
            Wa(d3);
            ab(d3, e3);
          }
        }
      }
      break;
    case "textarea":
      ib(a3, c3);
      break;
    case "select":
      b3 = c3.value, b3 != null && fb(a3, !!c3.multiple, b3, false);
  }
};
Gb = Wj;
Hb = function(a3, b3, c3, d3, e3) {
  var f3 = X;
  X |= 4;
  try {
    return gg(98, a3.bind(null, b3, c3, d3, e3));
  } finally {
    X = f3, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a3, b3) {
  var c3 = X;
  X |= 2;
  try {
    return a3(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
};
function uk(a3, b3) {
  var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b3))
    throw Error(y(200));
  return kk(a3, b3, null, c3);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a3) {
  a3 = cc(a3);
  return a3 === null ? null : a3.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a3) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = vk;
var createPortal = uk;
var findDOMNode = function(a3) {
  if (a3 == null)
    return null;
  if (a3.nodeType === 1)
    return a3;
  var b3 = a3._reactInternals;
  if (b3 === void 0) {
    if (typeof a3.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a3)));
  }
  a3 = cc(b3);
  a3 = a3 === null ? null : a3.stateNode;
  return a3;
};
var flushSync = function(a3, b3) {
  var c3 = X;
  if ((c3 & 48) !== 0)
    return a3(b3);
  X |= 1;
  try {
    if (a3)
      return gg(99, a3.bind(null, b3));
  } finally {
    X = c3, ig();
  }
};
var hydrate = function(a3, b3, c3) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a3, b3, true, c3);
};
var render = function(a3, b3, c3) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a3, b3, false, c3);
};
var unmountComponentAtNode = function(a3) {
  if (!rk(a3))
    throw Error(y(40));
  return a3._reactRootContainer ? (Xj(function() {
    tk(null, null, a3, false, function() {
      a3._reactRootContainer = null;
      a3[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a3, b3) {
  return uk(a3, b3, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a3, b3, c3, d3) {
  if (!rk(c3))
    throw Error(y(200));
  if (a3 == null || a3._reactInternals === void 0)
    throw Error(y(38));
  return tk(a3, b3, c3, false, d3);
};
var version2 = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version: version2
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
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1 = reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var createPortal$1 = reactDom.createPortal;
var react_dom_default = reactDom;
var findDOMNode$1 = reactDom.findDOMNode;
var flushSync$1 = reactDom.flushSync;
var hydrate$1 = reactDom.hydrate;
var render$1 = reactDom.render;
var unmountComponentAtNode$1 = reactDom.unmountComponentAtNode;
var unstable_batchedUpdates$1 = reactDom.unstable_batchedUpdates;
var unstable_createPortal$1 = reactDom.unstable_createPortal;
var unstable_renderSubtreeIntoContainer$1 = reactDom.unstable_renderSubtreeIntoContainer;
var version$1 = reactDom.version;

// build/snowpack/pkg/spacetime.js
var e = (e23, t23, a23) => {
  const [n23, r23] = e23.split("/"), [o23, i23] = r23.split(":");
  return Date.UTC(a23, n23 - 1, o23, i23) - 36e5 * t23;
};
var t = (t23, a23, n23, r23, o23) => {
  const i23 = new Date(t23).getUTCFullYear(), s23 = e(a23, o23, i23), u23 = e(n23, r23, i23);
  return t23 >= s23 && t23 < u23;
};
var a = (e23) => {
  let a23 = e23.timezones[e23.tz];
  if (a23 === void 0)
    return console.warn("Warning: couldn't find timezone " + e23.tz), 0;
  if (a23.dst === void 0)
    return a23.offset;
  let n23 = a23.offset, r23 = a23.offset + 1;
  a23.hem === "n" && (r23 = n23 - 1);
  let o23 = a23.dst.split("->");
  return t(e23.epoch, o23[0], o23[1], n23, r23) === true ? n23 : r23;
};
var n = ["africa", "america", "asia", "atlantic", "australia", "brazil", "canada", "chile", "europe", "indian", "mexico", "pacific", "antarctica", "etc"];
var r;
var o = (r = Object.freeze({__proto__: null, default: {"9|s": "2/dili,2/jayapura", "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau", "9.5|s|04/04:03->10/03:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna", "9.5|s": "4/darwin,4/north", "8|s|03/08:01->10/04:00": "12/casey", "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west", "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator", "8.75|s": "4/eucla", "7|s": "12/davis,2/jakarta,9/christmas", "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/saigon,2/tomsk,2/vientiane,2/ho_chi_minh", "6|s": "12/vostok", "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu", "6.5|n": "2/rangoon,9/cocos,2/yangon", "5|s": "12/mawson,9/kerguelen", "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/baku,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad", "5.75|n": "2/katmandu,2/kathmandu", "5.5|n": "2/calcutta,2/colombo,2/kolkata", "4|s": "9/reunion", "4|n": "2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius", "4.5|n|03/22:00->09/21:24": "2/tehran", "4.5|n": "2/kabul", "3|s": "12/syowa,9/antananarivo", "3|n|03/28:03->10/31:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia", "3|n|03/28:02->10/31:03": "8/chisinau,8/tiraspol", "3|n|03/28:00->10/30:24": "2/beirut", "3|n|03/27:00->10/30:01": "2/gaza,2/hebron", "3|n|03/26:02->10/31:02": "2/jerusalem,2/tel_aviv", "3|n|03/26:00->10/29:01": "2/amman", "3|n|03/26:00->10/28:24": "2/damascus", "3|n": "0/addis_ababa,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,0/asmara,2/istanbul", "2|s|03/28:02->10/31:02": "12/troll", "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane", "2|n|03/28:02->10/31:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen", "2|n": "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad", "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek", "1|n|04/11:03->05/16:02": "0/casablanca,0/el_aaiun", "1|n|03/28:01->10/31:02": "3/canary,3/faeroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faroe,8/belfast", "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis", "14|n": "11/kiritimati", "13|s|04/04:04->09/26:03": "11/apia", "13|s|01/15:02->11/05:03": "11/tongatapu", "13|n": "11/enderbury,11/fakaofo", "12|s|04/04:03->09/26:02": "12/mcmurdo,11/auckland,12/south_pole", "12|s|01/17:03->11/14:02": "11/fiji", "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis", "12.75|s|04/04:03->09/26:02": "11/chatham", "11|s|04/04:03->10/03:02": "12/macquarie", "11|s": "11/bougainville", "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/ponape,11/pohnpei", "11.5|n|04/04:03->10/03:02": "11/norfolk", "10|s|04/04:03->10/03:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria", "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland", "10|n": "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/truk,11/chuuk,11/yap", "10.5|s|04/04:01->10/03:02": "4/lord_howe,4/lhi", "0|n|03/28:00->10/31:01": "1/scoresbysund,3/azores", "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/gmt-0,13/gmt+0,13/gmt0,13/greenwich,13/uct,13/universal,13/zulu", "-9|n|03/14:02->11/07:02": "1/adak,1/atka,us/aleutian", "-9|n": "11/gambier", "-9.5|n": "11/marquesas", "-8|n|03/14:02->11/07:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska", "-8|n": "11/pitcairn", "-7|n|03/14:02->11/07:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific", "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon", "-7|n": "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona", "-6|s|04/03:22->09/04:22": "11/easter,7/easterisland", "-6|n|04/04:02->10/31:02": "1/chihuahua,1/mazatlan,10/bajasur", "-6|n|03/14:02->11/07:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,us/mountain", "-6|n": "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan", "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre", "-5|n|04/04:02->10/31:02": "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general", "-5|n|03/14:02->11/07:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke", "-5|n|03/12:03->11/05:01": "1/north_dakota", "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan", "-4|s|05/13:23->08/13:01": "12/palmer", "-4|s|04/03:24->09/05:00": "1/santiago,7/continental", "-4|s|03/27:24->10/03:00": "1/asuncion", "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba", "-4|s": "1/la_paz,1/manaus,5/west", "-4|n|03/14:02->11/07:02": "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan", "-4|n|03/14:00->11/07:01": "1/havana", "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky", "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin", "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/comodrivadavia,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/rosario,5/east", "-3|n|03/14:02->11/07:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic", "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem", "-2|n|03/27:22->10/30:23": "1/godthab,1/nuuk", "-2|n|03/14:02->11/07:02": "1/miquelon", "-2|n": "1/noronha,3/south_georgia,5/denoronha", "-2.5|n|03/14:02->11/07:02": "1/st_johns,6/newfoundland", "-1|n": "3/cape_verde", "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa", "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii"}})) && r.default || r;
var i = {};
Object.keys(o).forEach((e23) => {
  let t23 = e23.split("|"), a23 = {offset: Number(t23[0]), hem: t23[1]};
  t23[2] && (a23.dst = t23[2]), o[e23].split(",").forEach((e3) => {
    e3 = e3.replace(/(^[0-9]+)\//, (e4, t3) => (t3 = Number(t3), n[t3] + "/")), i[e3] = a23;
  });
}), i.utc = {offset: 0, hem: "n"};
for (let e23 = -14; e23 <= 14; e23 += 0.5) {
  let t23 = e23;
  t23 > 0 && (t23 = "+" + t23);
  let a23 = "etc/gmt" + t23;
  i[a23] = {offset: -1 * e23, hem: "n"}, a23 = "utc/gmt" + t23, i[a23] = {offset: -1 * e23, hem: "n"};
}
var s = i;
var u = /(\-?[0-9]+)h(rs)?/i;
var l = /(\-?[0-9]+)/;
var h = /utc([\-+]?[0-9]+)/i;
var c = /gmt([\-+]?[0-9]+)/i;
var d = function(e23) {
  return (e23 = Number(e23)) >= -13 && e23 <= 13 ? "etc/gmt" + (e23 = ((e23 *= -1) > 0 ? "+" : "") + e23) : null;
};
var m = function(e23) {
  let t23 = e23.match(u);
  if (t23 !== null)
    return d(t23[1]);
  if (t23 = e23.match(h), t23 !== null)
    return d(t23[1]);
  if (t23 = e23.match(c), t23 !== null) {
    let e3 = -1 * Number(t23[1]);
    return d(e3);
  }
  return t23 = e23.match(l), t23 !== null ? d(t23[1]) : null;
};
var p = (() => {
  let e23 = (() => {
    if (typeof Intl == "undefined" || Intl.DateTimeFormat === void 0)
      return null;
    let e3 = Intl.DateTimeFormat();
    if (e3 === void 0 || e3.resolvedOptions === void 0)
      return null;
    let t23 = e3.resolvedOptions().timeZone;
    return t23 ? t23.toLowerCase() : null;
  })();
  return e23 === null ? "utc" : e23;
})();
var f = Object.keys(s).reduce((e23, t23) => {
  let a23 = t23.split("/")[1] || "";
  return a23 = a23.replace(/_/g, " "), e23[a23] = t23, e23;
}, {});
var y2;
var g = (e23, t23) => {
  if (!e23)
    return p;
  typeof e23 != "string" && console.error("Timezone must be a string - recieved: '", e23, "'\n");
  let a23 = e23.trim();
  if (a23 = a23.toLowerCase(), t23.hasOwnProperty(a23) === true)
    return a23;
  if (a23 = ((e3) => (e3 = (e3 = (e3 = (e3 = (e3 = e3.replace(/ time/g, "")).replace(/ (standard|daylight|summer)/g, "")).replace(/\b(east|west|north|south)ern/g, "$1")).replace(/\b(africa|america|australia)n/g, "$1")).replace(/\beuropean/g, "europe")).replace(/\islands/g, "island"))(a23), t23.hasOwnProperty(a23) === true)
    return a23;
  if (f.hasOwnProperty(a23) === true)
    return f[a23];
  if (/[0-9]/.test(a23) === true) {
    let e3 = m(a23);
    if (e3)
      return e3;
  }
  throw new Error("Spacetime: Cannot find timezone named: '" + e23 + "'. Please enter an IANA timezone id.");
};
var b = (function(e23, t23) {
  t23.isLeapYear = (e3) => e3 % 4 == 0 && e3 % 100 != 0 || e3 % 400 == 0, t23.isDate = (e3) => Object.prototype.toString.call(e3) === "[object Date]" && !isNaN(e3.valueOf()), t23.isArray = (e3) => Object.prototype.toString.call(e3) === "[object Array]", t23.isObject = (e3) => Object.prototype.toString.call(e3) === "[object Object]", t23.isBoolean = (e3) => Object.prototype.toString.call(e3) === "[object Boolean]", t23.zeroPad = (e3, t3 = 2) => (e3 += "").length >= t3 ? e3 : new Array(t3 - e3.length + 1).join("0") + e3, t23.titleCase = (e3) => e3 ? e3[0].toUpperCase() + e3.substr(1) : "", t23.ordinal = (e3) => {
    let t3 = e3 % 10, a23 = e3 % 100;
    return t3 === 1 && a23 !== 11 ? e3 + "st" : t3 === 2 && a23 !== 12 ? e3 + "nd" : t3 === 3 && a23 !== 13 ? e3 + "rd" : e3 + "th";
  }, t23.toCardinal = (e3) => (e3 = (e3 = String(e3)).replace(/([0-9])(st|nd|rd|th)$/i, "$1"), parseInt(e3, 10)), t23.normalize = (e3 = "") => (e3 = (e3 = (e3 = (e3 = e3.toLowerCase().trim()).replace(/ies$/, "y")).replace(/s$/, "")).replace(/-/g, "")) === "day" || e3 === "days" ? "date" : e3 === "min" || e3 === "mins" ? "minute" : e3, t23.getEpoch = (e3) => typeof e3 == "number" ? e3 : t23.isDate(e3) ? e3.getTime() : e3.epoch ? e3.epoch : null, t23.beADate = (e3, a23) => t23.isObject(e3) === false ? a23.clone().set(e3) : e3, t23.formatTimezone = (e3, a23 = "") => {
    const n23 = e3 > 0 ? "+" : "-", r23 = Math.abs(e3);
    return `${n23}${t23.zeroPad(parseInt("" + r23, 10))}${a23}${t23.zeroPad(r23 % 1 * 60)}`;
  };
}(y2 = {exports: {}}, y2.exports), y2.exports);
b.isLeapYear, b.isDate, b.isArray, b.isObject, b.isBoolean, b.zeroPad, b.titleCase, b.ordinal, b.toCardinal, b.normalize, b.getEpoch, b.beADate, b.formatTimezone;
var k = {year: new Date().getFullYear(), month: 0, date: 1};
var w = {parseArray: (e23, t23, a23) => {
  if (t23.length === 0)
    return e23;
  let n23 = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
  for (let r23 = 0; r23 < n23.length; r23++) {
    let o23 = t23[r23] || a23[n23[r23]] || k[n23[r23]] || 0;
    e23 = e23[n23[r23]](o23);
  }
  return e23;
}, parseObject: (e23, t23, a23) => {
  if (Object.keys(t23).length === 0)
    return e23;
  t23 = Object.assign({}, k, a23, t23);
  let n23 = Object.keys(t23);
  for (let r23 = 0; r23 < n23.length; r23++) {
    let o23 = n23[r23];
    if (e23[o23] === void 0 || typeof e23[o23] != "function")
      continue;
    if (t23[o23] === null || t23[o23] === void 0 || t23[o23] === "")
      continue;
    let i23 = t23[o23] || a23[o23] || k[o23] || 0;
    e23 = e23[o23](i23);
  }
  return e23;
}, parseNumber: function(e23, t23) {
  return t23 > 0 && t23 < 25e8 && e23.silent === false && (console.warn("  - Warning: You are setting the date to January 1970."), console.warn("       -   did input seconds instead of milliseconds?")), e23.epoch = t23, e23;
}};
var v = function(e23) {
  return e23.epoch = Date.now(), Object.keys(e23._today || {}).forEach((t23) => {
    typeof e23[t23] == "function" && (e23 = e23[t23](e23._today[t23]));
  }), e23;
};
var z = {now: (e23) => v(e23), today: (e23) => v(e23), tonight: (e23) => e23 = (e23 = v(e23)).hour(18), tomorrow: (e23) => e23 = (e23 = (e23 = v(e23)).add(1, "day")).startOf("day"), yesterday: (e23) => e23 = (e23 = (e23 = v(e23)).subtract(1, "day")).startOf("day"), christmas: (e23) => {
  let t23 = v(e23).year();
  return e23 = e23.set([t23, 11, 25, 18, 0, 0]);
}, "new years": (e23) => {
  let t23 = v(e23).year();
  return e23 = e23.set([t23, 11, 31, 18, 0, 0]);
}};
z["new years eve"] = z["new years"];
var _ = z;
var j = function(e23) {
  return e23 = (e23 = (e23 = (e23 = e23.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "")).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, "")).replace(/ +/g, " ").trim();
};
var O2 = {millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5};
O2.date = O2.day, O2.month = 25488e5, O2.week = 6048e5, O2.year = 3154e7, Object.keys(O2).forEach((e23) => {
  O2[e23 + "s"] = O2[e23];
});
var $ = O2;
var D2 = (e23, t23, a23, n23, r23) => {
  let o23 = e23.d[a23]();
  if (o23 === t23)
    return;
  let i23 = r23 === null ? null : e23.d[r23](), s23 = e23.epoch, u23 = t23 - o23;
  e23.epoch += $[n23] * u23, n23 === "day" && Math.abs(u23) > 28 && t23 < 28 && (e23.epoch += $.hour), r23 !== null && i23 !== e23.d[r23]() && (e23.epoch = s23);
  const l23 = $[n23] / 2;
  for (; e23.d[a23]() < t23; )
    e23.epoch += l23;
  for (; e23.d[a23]() > t23; )
    e23.epoch -= l23;
  r23 !== null && i23 !== e23.d[r23]() && (e23.epoch = s23);
};
var M2 = {year: {valid: (e23) => e23 > -4e3 && e23 < 4e3, walkTo: (e23, t23) => D2(e23, t23, "getFullYear", "year", null)}, month: {valid: (e23) => e23 >= 0 && e23 <= 11, walkTo: (e23, t23) => {
  let a23 = e23.d, n23 = a23.getMonth(), r23 = e23.epoch, o23 = a23.getFullYear();
  if (n23 === t23)
    return;
  let i23 = t23 - n23;
  for (e23.epoch += $.day * (28 * i23), o23 !== e23.d.getFullYear() && (e23.epoch = r23); e23.d.getMonth() < t23; )
    e23.epoch += $.day;
  for (; e23.d.getMonth() > t23; )
    e23.epoch -= $.day;
}}, date: {valid: (e23) => e23 > 0 && e23 <= 31, walkTo: (e23, t23) => D2(e23, t23, "getDate", "day", "getMonth")}, hour: {valid: (e23) => e23 >= 0 && e23 < 24, walkTo: (e23, t23) => D2(e23, t23, "getHours", "hour", "getDate")}, minute: {valid: (e23) => e23 >= 0 && e23 < 60, walkTo: (e23, t23) => D2(e23, t23, "getMinutes", "minute", "getHours")}, second: {valid: (e23) => e23 >= 0 && e23 < 60, walkTo: (e23, t23) => {
  e23.epoch = e23.seconds(t23).epoch;
}}, millisecond: {valid: (e23) => e23 >= 0 && e23 < 1e3, walkTo: (e23, t23) => {
  e23.epoch = e23.milliseconds(t23).epoch;
}}};
var P2 = (e23, t23) => {
  let a23 = Object.keys(M2), n23 = e23.clone();
  for (let r23 = 0; r23 < a23.length; r23++) {
    let o23 = a23[r23], i23 = t23[o23];
    if (i23 === void 0 && (i23 = n23[o23]()), typeof i23 == "string" && (i23 = parseInt(i23, 10)), !M2[o23].valid(i23))
      return e23.epoch = null, void (e23.silent === false && console.warn("invalid " + o23 + ": " + i23));
    M2[o23].walkTo(e23, i23);
  }
};
var q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var S2 = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
var E = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var T2 = () => S2;
var N2 = () => E;
var C = () => function() {
  const e23 = {sep: 8};
  for (let t23 = 0; t23 < S2.length; t23++)
    e23[S2[t23]] = t23;
  for (let t23 = 0; t23 < E.length; t23++)
    e23[E[t23]] = t23;
  return e23;
}();
var I2 = (e23) => {
  S2 = e23.short || S2, E = e23.long || E;
};
var A = (e23, t23) => {
  if (!t23)
    return e23;
  t23 !== "Z" && t23 !== "z" || (t23 = "+0000");
  let a23 = 0;
  /^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t23) && (/:00/.test(t23) === true && (t23 = t23.replace(/:00/, "")), /:30/.test(t23) === true && (t23 = t23.replace(/:30/, ".5"))), /^[\+-]?[0-9]{4}$/.test(t23) && (t23 = t23.replace(/30$/, ".5")), a23 = parseFloat(t23), Math.abs(a23) > 100 && (a23 /= 100), a23 *= -1, a23 >= 0 && (a23 = "+" + a23);
  let n23 = "etc/gmt" + a23;
  return e23.timezones[n23] && (e23.tz = n23), e23;
};
var Y2 = (e23, t23 = "") => {
  let a23 = (t23 = t23.replace(/^\s+/, "").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
  if (a23 !== null) {
    let n23 = Number(a23[1]);
    if (n23 < 0 || n23 > 24)
      return e23.startOf("day");
    let r23 = Number(a23[2]);
    if (a23[2].length < 2 || r23 < 0 || r23 > 59)
      return e23.startOf("day");
    a23[4] > 999 && (a23[4] = parseInt(("" + a23[4]).substring(0, 3), 10)), e23 = (e23 = (e23 = (e23 = e23.hour(n23)).minute(r23)).seconds(a23[3] || 0)).millisecond(a23[4] || 0);
    let o23 = t23.match(/[\b0-9](am|pm)\b/);
    return o23 !== null && o23[1] && (e23 = e23.ampm(o23[1])), e23;
  }
  if (a23 = t23.match(/([0-9]+) ?(am|pm)/), a23 !== null && a23[1]) {
    let t3 = Number(a23[1]);
    return t3 > 12 || t3 < 1 ? e23.startOf("day") : e23 = (e23 = (e23 = e23.hour(a23[1] || 0)).ampm(a23[2])).startOf("hour");
  }
  return e23 = e23.startOf("day");
};
var x = b.isLeapYear;
var L = C();
var F2 = {parseOffset: A, parseTime: Y2, parseYear: (e23 = "", t23) => {
  if (e23 = e23.trim(), /^'[0-9][0-9]$/.test(e23) === true) {
    let t3 = Number(e23.replace(/'/, ""));
    return t3 > 50 ? 1900 + t3 : 2e3 + t3;
  }
  let a23 = parseInt(e23, 10);
  return !a23 && t23 && (a23 = t23.year), a23 = a23 || new Date().getFullYear(), a23;
}, parseMonth: function(e23) {
  return e23 = e23.toLowerCase().trim(), L[e23];
}, validate: (e23) => {
  if (q.hasOwnProperty(e23.month) !== true)
    return false;
  if (e23.month === 1)
    return !!(x(e23.year) && e23.date <= 29) || e23.date <= 28;
  let t23 = q[e23.month] || 0;
  return e23.date <= t23;
}};
var {validate: B2, parseTime: Z2, parseYear: H2, parseMonth: Q, parseOffset: G2} = F2;
var U2 = [{reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i, parse: (e23, t23) => {
  let a23 = {year: t23[1], month: parseInt(t23[2], 10) - 1, date: t23[3]};
  return B2(a23) === false ? (e23.epoch = null, e23) : (G2(e23, t23[5]), P2(e23, a23), e23 = Z2(e23, t23[4]));
}}, {reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e23, t23) => {
  let a23 = {year: t23[1], month: parseInt(t23[2], 10) - 1, date: parseInt(t23[3], 10)};
  return a23.month >= 12 && (a23.date = parseInt(t23[2], 10), a23.month = parseInt(t23[3], 10) - 1), B2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = Z2(e23, t23[4]));
}}, {reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e23, t23) => {
  let a23 = {year: H2(t23[1], e23._today), month: Q(t23[2]), date: b.toCardinal(t23[3] || "")};
  return B2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = Z2(e23, t23[4]));
}}];
var {validate: V2, parseTime: W2, parseYear: J, parseMonth: K} = F2;
var R2 = [{reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e23, t23) => {
  let a23 = parseInt(t23[1], 10) - 1, n23 = parseInt(t23[2], 10);
  (e23.british || a23 >= 12) && (n23 = parseInt(t23[1], 10), a23 = parseInt(t23[2], 10) - 1);
  let r23 = {date: n23, month: a23, year: J(t23[3], e23._today) || new Date().getFullYear()};
  return V2(r23) === false ? (e23.epoch = null, e23) : (P2(e23, r23), e23 = W2(e23, t23[4]));
}}, {reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e23, t23) => {
  let a23 = {year: J(t23[3], e23._today), month: K(t23[1]), date: b.toCardinal(t23[2] || "")};
  return V2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = W2(e23, t23[4]));
}}, {reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i, parse: (e23, t23) => {
  let a23 = {year: J(t23[3], e23._today), month: K(t23[1]), date: b.toCardinal(t23[2] || "")};
  return V2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = W2(e23, t23[4]));
}}, {reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i, parse: (e23, t23) => {
  let a23 = {year: J(t23[5], e23._today), month: K(t23[1]), date: b.toCardinal(t23[2] || "")};
  return V2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = W2(e23, t23[3]));
}}];
var {validate: X2, parseTime: ee2, parseYear: te2, parseMonth: ae2} = F2;
var ne2 = [{reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i, parse: (e23, t23) => {
  let a23 = {year: te2(t23[3], e23._today), month: ae2(t23[2]), date: b.toCardinal(t23[1] || "")};
  return X2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = ee2(e23, t23[4]));
}}, {reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e23, t23) => {
  let a23 = {year: te2(t23[3], e23._today), month: ae2(t23[2]), date: b.toCardinal(t23[1])};
  return a23.month && X2(a23) !== false ? (P2(e23, a23), e23 = ee2(e23, t23[4])) : (e23.epoch = null, e23);
}}, {reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e23, t23) => {
  let a23 = {date: Number(t23[1]), month: ae2(t23[2]), year: Number(t23[3])};
  return X2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = e23.startOf("day"), e23 = ee2(e23, t23[4]));
}}];
var {validate: re2, parseTime: oe2, parseYear: ie2, parseMonth: se2} = F2;
var ue2 = [].concat(U2, R2, ne2, [{reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i, parse: (e23, t23) => {
  let a23 = {year: t23[1], month: parseInt(t23[2], 10) - 1, date: 1};
  return re2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = oe2(e23, t23[4]));
}}, {reg: /^([a-z]+) ([0-9]{4})$/i, parse: (e23, t23) => {
  let a23 = {year: ie2(t23[2], e23._today), month: se2(t23[1]), date: e23._today.date || 1};
  return re2(a23) === false ? (e23.epoch = null, e23) : (P2(e23, a23), e23 = oe2(e23, t23[4]));
}}, {reg: /^(q[0-9])( of)?( [0-9]{4})?/i, parse: (e23, t23) => {
  let a23 = t23[1] || "";
  e23 = e23.quarter(a23);
  let n23 = t23[3] || "";
  return n23 && (n23 = n23.trim(), e23 = e23.year(n23)), e23;
}}, {reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i, parse: (e23, t23) => {
  let a23 = t23[1] || "";
  e23 = e23.season(a23);
  let n23 = t23[3] || "";
  return n23 && (n23 = n23.trim(), e23 = e23.year(n23)), e23;
}}, {reg: /^[0-9,]+ ?b\.?c\.?$/i, parse: (e23, t23) => {
  let a23 = t23[0] || "";
  a23 = a23.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
  let n23 = new Date(), r23 = {year: parseInt(a23.trim(), 10), month: n23.getMonth(), date: n23.getDate()};
  return re2(r23) === false ? (e23.epoch = null, e23) : (P2(e23, r23), e23 = oe2(e23));
}}, {reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i, parse: (e23, t23) => {
  let a23 = t23[0] || "";
  a23 = a23.replace(/,/g, "");
  let n23 = new Date(), r23 = {year: parseInt(a23.trim(), 10), month: n23.getMonth(), date: n23.getDate()};
  return re2(r23) === false ? (e23.epoch = null, e23) : (P2(e23, r23), e23 = oe2(e23));
}}, {reg: /^[0-9]{4}( ?a\.?d\.?)?$/i, parse: (e23, t23) => {
  let a23 = e23._today;
  a23.month && !a23.date && (a23.date = 1);
  let n23 = new Date(), r23 = {year: ie2(t23[0], a23), month: a23.month || n23.getMonth(), date: a23.date || n23.getDate()};
  return re2(r23) === false ? (e23.epoch = null, e23) : (P2(e23, r23), e23 = oe2(e23));
}}]);
var le2 = function(e23, t23, a23) {
  for (let n23 = 0; n23 < ue2.length; n23++) {
    let r23 = t23.match(ue2[n23].reg);
    if (r23) {
      let t3 = ue2[n23].parse(e23, r23, a23);
      if (t3 !== null && t3.isValid())
        return t3;
    }
  }
  return e23.silent === false && console.warn("Warning: couldn't parse date-string: '" + t23 + "'"), e23.epoch = null, e23;
};
var {parseArray: he2, parseObject: ce2, parseNumber: de2} = w;
var me2 = {year: new Date().getFullYear(), month: 0, date: 1};
var pe2 = (e23, t23) => {
  let a23 = e23._today || me2;
  if (typeof t23 == "number")
    return de2(e23, t23);
  if (e23.epoch = Date.now(), e23._today && b.isObject(e23._today) && Object.keys(e23._today).length > 0) {
    let t3 = ce2(e23, a23, me2);
    t3.isValid() && (e23.epoch = t3.epoch);
  }
  return t23 == null || t23 === "" ? e23 : b.isDate(t23) === true ? (e23.epoch = t23.getTime(), e23) : b.isArray(t23) === true ? e23 = he2(e23, t23, a23) : b.isObject(t23) === true ? t23.epoch ? (e23.epoch = t23.epoch, e23.tz = t23.tz, e23) : e23 = ce2(e23, t23, a23) : typeof t23 != "string" ? e23 : (t23 = j(t23), _.hasOwnProperty(t23) === true ? e23 = _[t23](e23) : le2(e23, t23));
};
var fe2 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var ye = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var ge2 = {short: () => fe2, long: () => ye, set: (e23) => {
  fe2 = e23.short || fe2, ye = e23.long || ye;
}, aliases: {mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6, su: 7, tues: 2, weds: 3, wedn: 3, thur: 4, thurs: 4}};
var be2 = true;
var ke2 = () => be2;
var we2 = (e23) => {
  be2 = e23;
};
var ve2 = (e23) => {
  let t23 = e23.timezone().current.offset;
  return t23 ? b.formatTimezone(t23, ":") : "Z";
};
var ze = (e23) => ke2() ? b.titleCase(e23) : e23;
var _e = {day: (e23) => ze(e23.dayName()), "day-short": (e23) => ze(ge2.short()[e23.day()]), "day-number": (e23) => e23.day(), "day-ordinal": (e23) => b.ordinal(e23.day()), "day-pad": (e23) => b.zeroPad(e23.day()), date: (e23) => e23.date(), "date-ordinal": (e23) => b.ordinal(e23.date()), "date-pad": (e23) => b.zeroPad(e23.date()), month: (e23) => ze(e23.monthName()), "month-short": (e23) => ze(T2()[e23.month()]), "month-number": (e23) => e23.month(), "month-ordinal": (e23) => b.ordinal(e23.month()), "month-pad": (e23) => b.zeroPad(e23.month()), "iso-month": (e23) => b.zeroPad(e23.month() + 1), year: (e23) => {
  let t23 = e23.year();
  return t23 > 0 ? t23 : (t23 = Math.abs(t23), t23 + " BC");
}, "year-short": (e23) => {
  let t23 = e23.year();
  return t23 > 0 ? "'" + String(e23.year()).substr(2, 4) : (t23 = Math.abs(t23), t23 + " BC");
}, "iso-year": (e23) => {
  let t23 = e23.year(), a23 = t23 < 0, n23 = b.zeroPad(Math.abs(t23), 4);
  return a23 && (n23 = b.zeroPad(n23, 6), n23 = "-" + n23), n23;
}, time: (e23) => e23.time(), "time-24": (e23) => `${e23.hour24()}:${b.zeroPad(e23.minute())}`, hour: (e23) => e23.hour12(), "hour-pad": (e23) => b.zeroPad(e23.hour12()), "hour-24": (e23) => e23.hour24(), "hour-24-pad": (e23) => b.zeroPad(e23.hour24()), minute: (e23) => e23.minute(), "minute-pad": (e23) => b.zeroPad(e23.minute()), second: (e23) => e23.second(), "second-pad": (e23) => b.zeroPad(e23.second()), ampm: (e23) => e23.ampm(), quarter: (e23) => "Q" + e23.quarter(), season: (e23) => e23.season(), era: (e23) => e23.era(), json: (e23) => e23.json(), timezone: (e23) => e23.timezone().name, offset: (e23) => ve2(e23), numeric: (e23) => `${e23.year()}/${b.zeroPad(e23.month() + 1)}/${b.zeroPad(e23.date())}`, "numeric-us": (e23) => `${b.zeroPad(e23.month() + 1)}/${b.zeroPad(e23.date())}/${e23.year()}`, "numeric-uk": (e23) => `${b.zeroPad(e23.date())}/${b.zeroPad(e23.month() + 1)}/${e23.year()}`, "mm/dd": (e23) => `${b.zeroPad(e23.month() + 1)}/${b.zeroPad(e23.date())}`, iso: (e23) => `${e23.format("iso-year")}-${b.zeroPad(e23.month() + 1)}-${b.zeroPad(e23.date())}T${b.zeroPad(e23.h24())}:${b.zeroPad(e23.minute())}:${b.zeroPad(e23.second())}.${b.zeroPad(e23.millisecond(), 3)}${ve2(e23)}`, "iso-short": (e23) => {
  let t23 = b.zeroPad(e23.month() + 1), a23 = b.zeroPad(e23.date());
  return `${e23.year()}-${t23}-${a23}`;
}, "iso-utc": (e23) => new Date(e23.epoch).toISOString(), nice: (e23) => `${T2()[e23.month()]} ${b.ordinal(e23.date())}, ${e23.time()}`, "nice-24": (e23) => `${T2()[e23.month()]} ${b.ordinal(e23.date())}, ${e23.hour24()}:${b.zeroPad(e23.minute())}`, "nice-year": (e23) => `${T2()[e23.month()]} ${b.ordinal(e23.date())}, ${e23.year()}`, "nice-day": (e23) => `${ge2.short()[e23.day()]} ${ze(T2()[e23.month()])} ${b.ordinal(e23.date())}`, "nice-full": (e23) => `${e23.dayName()} ${ze(e23.monthName())} ${b.ordinal(e23.date())}, ${e23.time()}`, "nice-full-24": (e23) => `${e23.dayName()} ${ze(e23.monthName())} ${b.ordinal(e23.date())}, ${e23.hour24()}:${b.zeroPad(e23.minute())}`};
var je2 = {"day-name": "day", "month-name": "month", "iso 8601": "iso", "time-h24": "time-24", "time-12": "time", "time-h12": "time", tz: "timezone", "day-num": "day-number", "month-num": "month-number", "month-iso": "iso-month", "year-iso": "iso-year", "nice-short": "nice", "nice-short-24": "nice-24", mdy: "numeric-us", dmy: "numeric-uk", ymd: "numeric", "yyyy/mm/dd": "numeric", "mm/dd/yyyy": "numeric-us", "dd/mm/yyyy": "numeric-us", "little-endian": "numeric-uk", "big-endian": "numeric", "day-nice": "nice-day"};
Object.keys(je2).forEach((e23) => _e[e23] = _e[je2[e23]]);
var Oe2 = (e23, t23 = "") => {
  if (e23.isValid() !== true)
    return "";
  if (_e.hasOwnProperty(t23)) {
    let a23 = _e[t23](e23) || "";
    return t23 !== "json" && (a23 = String(a23), t23 !== "ampm" && (a23 = ze(a23))), a23;
  }
  if (t23.indexOf("{") !== -1) {
    let a23 = /\{(.+?)\}/g;
    return t23 = t23.replace(a23, (t3, a3) => {
      if (a3 = a3.toLowerCase().trim(), _e.hasOwnProperty(a3)) {
        let t4 = String(_e[a3](e23));
        return a3 !== "ampm" ? ze(t4) : t4;
      }
      return "";
    });
  }
  return e23.format("iso-short");
};
var $e2 = b.zeroPad;
var De2 = b.formatTimezone;
var Me2 = {G: (e23) => e23.era(), GG: (e23) => e23.era(), GGG: (e23) => e23.era(), GGGG: (e23) => e23.era() === "AD" ? "Anno Domini" : "Before Christ", y: (e23) => e23.year(), yy: (e23) => parseInt(String(e23.year()).substr(2, 4), 10), yyy: (e23) => e23.year(), yyyy: (e23) => e23.year(), yyyyy: (e23) => "0" + e23.year(), Q: (e23) => e23.quarter(), QQ: (e23) => e23.quarter(), QQQ: (e23) => e23.quarter(), QQQQ: (e23) => e23.quarter(), M: (e23) => e23.month() + 1, MM: (e23) => $e2(e23.month() + 1), MMM: (e23) => e23.format("month-short"), MMMM: (e23) => e23.format("month"), w: (e23) => e23.week(), ww: (e23) => $e2(e23.week()), d: (e23) => e23.date(), dd: (e23) => $e2(e23.date()), D: (e23) => e23.dayOfYear(), DD: (e23) => $e2(e23.dayOfYear()), DDD: (e23) => $e2(e23.dayOfYear(), 3), E: (e23) => e23.format("day-short"), EE: (e23) => e23.format("day-short"), EEE: (e23) => e23.format("day-short"), EEEE: (e23) => e23.format("day"), EEEEE: (e23) => e23.format("day")[0], e: (e23) => e23.day(), ee: (e23) => e23.day(), eee: (e23) => e23.format("day-short"), eeee: (e23) => e23.format("day"), eeeee: (e23) => e23.format("day")[0], a: (e23) => e23.ampm().toUpperCase(), aa: (e23) => e23.ampm().toUpperCase(), aaa: (e23) => e23.ampm().toUpperCase(), aaaa: (e23) => e23.ampm().toUpperCase(), h: (e23) => e23.h12(), hh: (e23) => $e2(e23.h12()), H: (e23) => e23.hour(), HH: (e23) => $e2(e23.hour()), m: (e23) => e23.minute(), mm: (e23) => $e2(e23.minute()), s: (e23) => e23.second(), ss: (e23) => $e2(e23.second()), A: (e23) => e23.epoch - e23.startOf("day").epoch, z: (e23) => e23.timezone().name, zz: (e23) => e23.timezone().name, zzz: (e23) => e23.timezone().name, zzzz: (e23) => e23.timezone().name, Z: (e23) => De2(e23.timezone().current.offset), ZZ: (e23) => De2(e23.timezone().current.offset), ZZZ: (e23) => De2(e23.timezone().current.offset), ZZZZ: (e23) => De2(e23.timezone().current.offset, ":")};
var Pe2 = (e23, t23, a23) => {
  let n23 = e23, r23 = t23;
  for (let o23 = 0; o23 < a23; o23 += 1)
    Me2[n23] = Me2[r23], n23 += e23, r23 += t23;
};
Pe2("q", "Q", 4), Pe2("L", "M", 4), Pe2("Y", "y", 4), Pe2("c", "e", 4), Pe2("k", "H", 2), Pe2("K", "h", 2), Pe2("S", "s", 2), Pe2("v", "z", 4), Pe2("V", "Z", 4);
var qe2 = (e23, t23) => {
  let a23 = t23.split("");
  return a23 = function(e3) {
    for (let t3 = 0; t3 < e3.length; t3 += 1)
      if (e3[t3] === "'")
        for (let a3 = t3 + 1; a3 < e3.length; a3 += 1) {
          if (e3[a3] && (e3[t3] += e3[a3]), e3[a3] === "'") {
            e3[a3] = null;
            break;
          }
          e3[a3] = null;
        }
    return e3.filter((e4) => e4);
  }(a23), a23 = function(e3) {
    for (let t3 = 0; t3 < e3.length; t3 += 1) {
      let a3 = e3[t3];
      for (let n23 = t3 + 1; n23 < e3.length && e3[n23] === a3; n23 += 1)
        e3[t3] += e3[n23], e3[n23] = null;
    }
    return (e3 = e3.filter((e4) => e4)).map((e4) => (e4 === "''" && (e4 = "'"), e4));
  }(a23), a23.reduce((t3, a3) => (Me2[a3] !== void 0 ? t3 += Me2[a3](e23) || "" : (/^'.{1,}'$/.test(a3) && (a3 = a3.replace(/'/g, "")), t3 += a3), t3), "");
};
var Se2 = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"];
var Ee2 = function(e23, t23) {
  let a23 = e23.clone().startOf(t23), n23 = e23.clone().endOf(t23).epoch - a23.epoch, r23 = (e23.epoch - a23.epoch) / n23;
  return parseFloat(r23.toFixed(2));
};
var Te2 = (e23, t23) => {
  if (t23)
    return t23 = b.normalize(t23), Ee2(e23, t23);
  let a23 = {};
  return Se2.forEach((t3) => {
    a23[t3] = Ee2(e23, t3);
  }), a23;
};
var Ne2 = (e23, t23) => {
  let a23 = e23.progress();
  return (t23 = b.normalize(t23)) === "quarterhour" && (t23 = "quarterHour"), a23[t23] !== void 0 ? (a23[t23] > 0.5 && (e23 = e23.add(1, t23)), e23 = e23.startOf(t23)) : e23.silent === false && console.warn("no known unit '" + t23 + "'"), e23;
};
var Ce2 = (e23, t23, a23) => {
  let n23 = 0;
  for (e23 = e23.clone(); e23.isBefore(t23); )
    e23 = e23.add(1, a23), n23 += 1;
  return e23.isAfter(t23, a23) && (n23 -= 1), n23;
};
var Ie2 = (e23, t23, a23) => e23.isBefore(t23) ? Ce2(e23, t23, a23) : -1 * Ce2(t23, e23, a23);
var Ae2 = function(e23, t23) {
  let a23 = t23.epoch - e23.epoch, n23 = {milliseconds: a23, seconds: parseInt(a23 / 1e3, 10)};
  n23.minutes = parseInt(n23.seconds / 60, 10), n23.hours = parseInt(n23.minutes / 60, 10);
  let r23 = e23.clone();
  return n23.years = ((e3, t3) => {
    let a3 = t3.year() - e3.year();
    return (e3 = e3.year(t3.year())).isAfter(t3) && (a3 -= 1), a3;
  })(r23, t23), r23 = e23.add(n23.years, "year"), n23.months = 12 * n23.years, r23 = e23.add(n23.months, "month"), n23.months += Ie2(r23, t23, "month"), n23.weeks = 52 * n23.years, r23 = e23.add(n23.weeks, "week"), n23.weeks += Ie2(r23, t23, "week"), n23.days = 7 * n23.weeks, r23 = e23.add(n23.days, "day"), n23.days += Ie2(r23, t23, "day"), n23;
};
var Ye2 = function(e23, t23, a23) {
  t23 = b.beADate(t23, e23);
  let n23 = false;
  if (e23.isAfter(t23)) {
    let a3 = e23;
    e23 = t23, t23 = a3, n23 = true;
  }
  let r23 = Ae2(e23, t23);
  return n23 && (r23 = function(e3) {
    return Object.keys(e3).forEach((t3) => {
      e3[t3] *= -1;
    }), e3;
  }(r23)), a23 ? (a23 = b.normalize(a23), /s$/.test(a23) !== true && (a23 += "s"), a23 === "dates" && (a23 = "days"), r23[a23]) : r23;
};
var xe = {months: {almost: 10, over: 4}, days: {almost: 25, over: 10}, hours: {almost: 20, over: 8}, minutes: {almost: 50, over: 20}, seconds: {almost: 50, over: 20}};
function Le2(e23, t23) {
  return e23 === 1 && (t23 = t23.slice(0, -1)), e23 + " " + t23;
}
var Fe2 = (e23, t23) => {
  const a23 = function(e3, t3) {
    const a3 = e3.isBefore(t3), n3 = a3 ? t3 : e3;
    let r3 = a3 ? e3 : t3;
    r3 = r3.clone();
    const o3 = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
    return Object.keys(o3).forEach((e4) => {
      if (r3.isSame(n3, e4))
        return;
      let t4 = r3.diff(n3, e4);
      r3 = r3.add(t4, e4), o3[e4] = t4;
    }), a3 && Object.keys(o3).forEach((e4) => {
      o3[e4] !== 0 && (o3[e4] *= -1);
    }), o3;
  }(e23, t23 = b.beADate(t23, e23));
  if (Object.keys(a23).every((e3) => !a23[e3]) === true)
    return {diff: a23, rounded: "now", qualified: "now", precise: "now"};
  let n23, r23, o23, i23 = [];
  return Object.keys(a23).forEach((e3, t3, o3) => {
    const s23 = Math.abs(a23[e3]);
    if (s23 === 0)
      return;
    const u23 = Le2(s23, e3);
    if (i23.push(u23), !n23) {
      if (n23 = r23 = u23, t3 > 4)
        return;
      const i32 = o3[t3 + 1], l23 = Math.abs(a23[i32]);
      l23 > xe[i32].almost ? (n23 = Le2(s23 + 1, e3), r23 = "almost " + n23) : l23 > xe[i32].over && (r23 = "over " + u23);
    }
  }), o23 = i23.splice(0, 2).join(", "), e23.isAfter(t23) === true ? (n23 += " ago", r23 += " ago", o23 += " ago") : (n23 = "in " + n23, r23 = "in " + r23, o23 = "in " + o23), {diff: a23, rounded: n23, qualified: r23, precise: o23};
};
var Be2 = {north: [["spring", 2, 1], ["summer", 5, 1], ["fall", 8, 1], ["autumn", 8, 1], ["winter", 11, 1]], south: [["fall", 2, 1], ["autumn", 2, 1], ["winter", 5, 1], ["spring", 8, 1], ["summer", 11, 1]]};
var Ze2 = [null, [0, 1], [3, 1], [6, 1], [9, 1]];
var He2 = {minute: (e23) => (P2(e23, {second: 0, millisecond: 0}), e23), quarterhour: (e23) => {
  let t23 = e23.minutes();
  return e23 = t23 >= 45 ? e23.minutes(45) : t23 >= 30 ? e23.minutes(30) : t23 >= 15 ? e23.minutes(15) : e23.minutes(0), P2(e23, {second: 0, millisecond: 0}), e23;
}, hour: (e23) => (P2(e23, {minute: 0, second: 0, millisecond: 0}), e23), day: (e23) => (P2(e23, {hour: 0, minute: 0, second: 0, millisecond: 0}), e23), week: (e23) => {
  let t23 = e23.clone();
  return (e23 = e23.day(e23._weekStart)).isAfter(t23) && (e23 = e23.subtract(1, "week")), P2(e23, {hour: 0, minute: 0, second: 0, millisecond: 0}), e23;
}, month: (e23) => (P2(e23, {date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}), e23), quarter: (e23) => {
  let t23 = e23.quarter();
  return Ze2[t23] && P2(e23, {month: Ze2[t23][0], date: Ze2[t23][1], hour: 0, minute: 0, second: 0, millisecond: 0}), e23;
}, season: (e23) => {
  let t23 = e23.season(), a23 = "north";
  e23.hemisphere() === "South" && (a23 = "south");
  for (let n23 = 0; n23 < Be2[a23].length; n23++)
    if (Be2[a23][n23][0] === t23) {
      let r23 = e23.year();
      return t23 === "winter" && e23.month() < 3 && (r23 -= 1), P2(e23, {year: r23, month: Be2[a23][n23][1], date: Be2[a23][n23][2], hour: 0, minute: 0, second: 0, millisecond: 0}), e23;
    }
  return e23;
}, year: (e23) => (P2(e23, {month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}), e23), decade: (e23) => {
  let t23 = (e23 = e23.startOf("year")).year(), a23 = 10 * parseInt(t23 / 10, 10);
  return e23 = e23.year(a23);
}, century: (e23) => {
  let t23 = (e23 = e23.startOf("year")).year(), a23 = 100 * parseInt(t23 / 100, 10);
  return e23 = e23.year(a23);
}};
He2.date = He2.day;
var Qe2 = (e23, t23) => {
  let a23 = e23.clone();
  return t23 = b.normalize(t23), He2[t23] ? He2[t23](a23) : t23 === "summer" || t23 === "winter" ? (a23 = a23.season(t23), He2.season(a23)) : a23;
};
var Ge2 = (e23, t23) => {
  let a23 = e23.clone();
  return t23 = b.normalize(t23), He2[t23] ? (a23 = He2[t23](a23), a23 = a23.add(1, t23), a23 = a23.subtract(1, "millisecond"), a23) : a23;
};
var Ue2 = function(e23, t23 = "", a23) {
  if (!t23 || !a23)
    return [];
  if (t23 = b.normalize(t23), a23 = e23.clone().set(a23), e23.isAfter(a23)) {
    let t3 = e23;
    e23 = a23, a23 = t3;
  }
  let n23 = e23.clone();
  !function(e3) {
    return !!ge2.short().find((t3) => t3 === e3) || !!ge2.long().find((t3) => t3 === e3);
  }(t23) ? n23 = n23.next(t23) : (n23 = n23.next(t23), t23 = "week");
  let r23 = [];
  for (; n23.isBefore(a23); )
    r23.push(n23), n23 = n23.add(1, t23);
  return r23;
};
var Ve = (e23) => {
  let a23 = e23.timezones, n23 = e23.tz;
  if (a23.hasOwnProperty(n23) === false && (n23 = g(e23.tz, a23)), n23 === null)
    return e23.silent === false && console.warn("Warn: could not find given or local timezone - '" + e23.tz + "'"), {current: {epochShift: 0}};
  let r23 = a23[n23], o23 = {name: (i23 = n23, i23 = (i23 = (i23 = i23[0].toUpperCase() + i23.substr(1)).replace(/\/gmt/, "/GMT")).replace(/[\/_]([a-z])/gi, (e3) => e3.toUpperCase())), hasDst: Boolean(r23.dst), default_offset: r23.offset, hemisphere: r23.hem === "s" ? "South" : "North", current: {}};
  var i23, s23;
  if (o23.hasDst) {
    let e3 = (s23 = r23.dst) ? s23.split("->") : [];
    o23.change = {start: e3[0], back: e3[1]};
  }
  let u23 = r23.offset, l23 = u23;
  return o23.hasDst === true && (l23 = o23.hemisphere === "North" ? u23 - 1 : r23.offset + 1), o23.hasDst === false ? (o23.current.offset = u23, o23.current.isDST = false) : t(e23.epoch, o23.change.start, o23.change.back, u23, l23) === true ? (o23.current.offset = u23, o23.current.isDST = o23.hemisphere === "North") : (o23.current.offset = l23, o23.current.isDST = o23.hemisphere === "South"), o23;
};
var We = ["century", "decade", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"];
var Je2 = {set: function(e23, t23) {
  let a23 = this.clone();
  return a23 = pe2(a23, e23), t23 && (this.tz = g(t23)), a23;
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
}, format: function(e23) {
  return Oe2(this, e23);
}, unixFmt: function(e23) {
  return qe2(this, e23);
}, startOf: function(e23) {
  return Qe2(this, e23);
}, endOf: function(e23) {
  return Ge2(this, e23);
}, leapYear: function() {
  let e23 = this.year();
  return b.isLeapYear(e23);
}, progress: function(e23) {
  return Te2(this, e23);
}, nearest: function(e23) {
  return Ne2(this, e23);
}, diff: function(e23, t23) {
  return Ye2(this, e23, t23);
}, since: function(e23) {
  return e23 || (e23 = this.clone().set()), Fe2(this, e23);
}, next: function(e23) {
  return this.add(1, e23).startOf(e23);
}, last: function(e23) {
  return this.subtract(1, e23).startOf(e23);
}, isValid: function() {
  return !(!this.epoch && this.epoch !== 0) && !isNaN(this.d.getTime());
}, goto: function(e23) {
  let t23 = this.clone();
  return t23.tz = g(e23, t23.timezones), t23;
}, every: function(e23, t23) {
  if (typeof e23 == "object" && typeof t23 == "string") {
    let a23 = t23;
    t23 = e23, e23 = a23;
  }
  return Ue2(this, e23, t23);
}, isAwake: function() {
  let e23 = this.hour();
  return !(e23 < 8 || e23 > 22);
}, isAsleep: function() {
  return !this.isAwake();
}, log: function() {
  return console.log(""), console.log(Oe2(this, "nice-short")), this;
}, logYear: function() {
  return console.log(""), console.log(Oe2(this, "full-short")), this;
}, json: function() {
  return We.reduce((e23, t23) => (e23[t23] = this[t23](), e23), {});
}, debug: function() {
  let e23 = this.timezone(), t23 = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
  return t23 += "\n     - " + this.format("time"), console.log("\n\n", t23 + "\n     - " + e23.name + " (" + e23.current.offset + ")"), this;
}, from: function(e23) {
  return (e23 = this.clone().set(e23)).since(this);
}, fromNow: function() {
  return this.clone().set(Date.now()).since(this);
}, weekStart: function(e23) {
  if (typeof e23 == "number")
    return this._weekStart = e23, this;
  if (typeof e23 == "string") {
    e23 = e23.toLowerCase().trim();
    let t23 = ge2.short().indexOf(e23);
    t23 === -1 && (t23 = ge2.long().indexOf(e23)), t23 === -1 && (t23 = 1), this._weekStart = t23;
  } else
    console.warn("Spacetime Error: Cannot understand .weekStart() input:", e23);
  return this;
}};
Je2.inDST = Je2.isDST, Je2.round = Je2.nearest, Je2.each = Je2.every;
var Ke2 = Je2;
var Re2 = b.isLeapYear;
var Xe2 = (e23) => (typeof e23 == "string" && (e23 = parseInt(e23, 10)), e23);
var et = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
var tt = (e23, t23, a23) => {
  let n23 = et.indexOf(a23), r23 = et.slice(n23, et.length);
  for (let a3 = 0; a3 < r23.length; a3++) {
    let n3 = t23[r23[a3]]();
    e23[r23[a3]](n3);
  }
  return e23;
};
var at = function(e23, t23, a23, n23) {
  return a23 === true && e23.isBefore(t23) ? e23 = e23.add(1, n23) : a23 === false && e23.isAfter(t23) && (e23 = e23.minus(1, n23)), e23;
};
var nt = (e23, t23) => {
  t23 = Xe2(t23);
  let a23 = e23.millisecond() - t23;
  return e23.epoch - a23;
};
var rt = (e23, t23, a23) => {
  t23 = Xe2(t23);
  let n23 = e23.clone(), r23 = (e23.second() - t23) * $.second;
  return e23.epoch = e23.epoch - r23, (e23 = at(e23, n23, a23, "minute")).epoch;
};
var ot = (e23, t23, a23) => {
  t23 = Xe2(t23);
  let n23 = e23.clone(), r23 = (e23.minute() - t23) * $.minute;
  return e23.epoch -= r23, tt(e23, n23, "second"), (e23 = at(e23, n23, a23, "hour")).epoch;
};
var it = (e23, t23, a23) => {
  (t23 = Xe2(t23)) >= 24 ? t23 = 24 : t23 < 0 && (t23 = 0);
  let n23 = e23.clone(), r23 = e23.hour() - t23, o23 = r23 * $.hour;
  return e23.epoch -= o23, e23.date() !== n23.date() && (e23 = n23.clone(), r23 > 1 && (r23 -= 1), r23 < 1 && (r23 += 1), o23 = r23 * $.hour, e23.epoch -= o23), P2(e23, {hour: t23}), tt(e23, n23, "minute"), (e23 = at(e23, n23, a23, "day")).epoch;
};
var st = (e23, t23, a23) => {
  let n23 = t23.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
  if (!n23) {
    if (n23 = t23.match(/([0-9]{1,2}) ?(am|pm)/), !n23)
      return e23.epoch;
    n23.splice(2, 0, "0"), n23.splice(3, 0, "");
  }
  let r23 = false, o23 = parseInt(n23[1], 10), i23 = parseInt(n23[2], 10);
  i23 >= 60 && (i23 = 59), o23 > 12 && (r23 = true), r23 === false && (n23[4] === "am" && o23 === 12 && (o23 = 0), n23[4] === "pm" && o23 < 12 && (o23 += 12)), n23[3] = n23[3] || "", n23[3] = n23[3].replace(/:/, "");
  let s23 = parseInt(n23[3], 10) || 0, u23 = e23.clone();
  return e23 = (e23 = (e23 = (e23 = e23.hour(o23)).minute(i23)).second(s23)).millisecond(0), (e23 = at(e23, u23, a23, "day")).epoch;
};
var ut = (e23, t23, a23) => {
  if ((t23 = Xe2(t23)) > 28) {
    let a3 = e23.month(), n3 = q[a3];
    a3 === 1 && t23 === 29 && Re2(e23.year()) && (n3 = 29), t23 > n3 && (t23 = n3);
  }
  t23 <= 0 && (t23 = 1);
  let n23 = e23.clone();
  return P2(e23, {date: t23}), (e23 = at(e23, n23, a23, "month")).epoch;
};
var lt = (e23, t23, a23) => {
  typeof t23 == "string" && (t23 = C()[t23.toLowerCase()]), (t23 = Xe2(t23)) >= 12 && (t23 = 11), t23 <= 0 && (t23 = 0);
  let n23 = e23.date();
  n23 > q[t23] && (n23 = q[t23]);
  let r23 = e23.clone();
  return P2(e23, {month: t23, date: n23}), (e23 = at(e23, r23, a23, "year")).epoch;
};
var ht = (e23, t23) => (typeof t23 == "string" && /^'[0-9]{2}$/.test(t23) && (t23 = t23.replace(/'/, "").trim(), t23 = (t23 = Number(t23)) > 30 ? 1900 + t23 : 2e3 + t23), t23 = Xe2(t23), P2(e23, {year: t23}), e23.epoch);
var ct = (e23, t23, a23) => {
  let n23 = e23.clone();
  return t23 = Xe2(t23), (e23 = (e23 = (e23 = e23.month(0)).date(1)).day("monday")).monthName() === "december" && e23.date() >= 28 && (e23 = e23.add(1, "week")), t23 -= 1, e23 = e23.add(t23, "weeks"), (e23 = at(e23, n23, a23, "year")).epoch;
};
var dt = (e23, t23, a23) => {
  t23 = Xe2(t23);
  let n23 = e23.clone();
  return (t23 -= 1) <= 0 ? t23 = 0 : t23 >= 365 && (t23 = 364), e23 = (e23 = e23.startOf("year")).add(t23, "day"), tt(e23, n23, "hour"), (e23 = at(e23, n23, a23, "year")).epoch;
};
var mt = {millisecond: function(e23) {
  if (e23 !== void 0) {
    let t23 = this.clone();
    return t23.epoch = nt(t23, e23), t23;
  }
  return this.d.getMilliseconds();
}, second: function(e23, t23) {
  if (e23 !== void 0) {
    let a23 = this.clone();
    return a23.epoch = rt(a23, e23, t23), a23;
  }
  return this.d.getSeconds();
}, minute: function(e23, t23) {
  if (e23 !== void 0) {
    let a23 = this.clone();
    return a23.epoch = ot(a23, e23, t23), a23;
  }
  return this.d.getMinutes();
}, hour: function(e23, t23) {
  let a23 = this.d;
  if (e23 !== void 0) {
    let a3 = this.clone();
    return a3.epoch = it(a3, e23, t23), a3;
  }
  return a23.getHours();
}, hourFloat: function(e23, t23) {
  if (e23 !== void 0) {
    let a3 = this.clone(), n3 = e23 % 1;
    n3 *= 60;
    let r3 = parseInt(e23, 10);
    return a3.epoch = it(a3, r3, t23), a3.epoch = ot(a3, n3, t23), a3;
  }
  let a23 = this.d, n23 = a23.getHours(), r23 = a23.getMinutes();
  return r23 /= 60, n23 + r23;
}, hour12: function(e23, t23) {
  let a23 = this.d;
  if (e23 !== void 0) {
    let a3 = this.clone(), n3 = (e23 = "" + e23).match(/^([0-9]+)(am|pm)$/);
    if (n3) {
      let e3 = parseInt(n3[1], 10);
      n3[2] === "pm" && (e3 += 12), a3.epoch = it(a3, e3, t23);
    }
    return a3;
  }
  let n23 = a23.getHours();
  return n23 > 12 && (n23 -= 12), n23 === 0 && (n23 = 12), n23;
}, time: function(e23, t23) {
  if (e23 !== void 0) {
    let a23 = this.clone();
    return e23 = e23.toLowerCase().trim(), a23.epoch = st(a23, e23, t23), a23;
  }
  return `${this.h12()}:${b.zeroPad(this.minute())}${this.ampm()}`;
}, ampm: function(e23, t23) {
  let a23 = "am", n23 = this.hour();
  if (n23 >= 12 && (a23 = "pm"), typeof e23 != "string")
    return a23;
  let r23 = this.clone();
  return e23 = e23.toLowerCase().trim(), n23 >= 12 && e23 === "am" ? (n23 -= 12, r23.hour(n23, t23)) : n23 < 12 && e23 === "pm" ? (n23 += 12, r23.hour(n23, t23)) : r23;
}, dayTime: function(e23, t23) {
  if (e23 !== void 0) {
    const a3 = {morning: "7:00am", breakfast: "7:00am", noon: "12:00am", lunch: "12:00pm", afternoon: "2:00pm", evening: "6:00pm", dinner: "6:00pm", night: "11:00pm", midnight: "23:59pm"};
    let n23 = this.clone();
    return e23 = (e23 = e23 || "").toLowerCase(), a3.hasOwnProperty(e23) === true && (n23 = n23.time(a3[e23], t23)), n23;
  }
  let a23 = this.hour();
  return a23 < 6 ? "night" : a23 < 12 ? "morning" : a23 < 17 ? "afternoon" : a23 < 22 ? "evening" : "night";
}, iso: function(e23) {
  return e23 !== void 0 ? this.set(e23) : this.format("iso");
}};
var pt = {date: function(e23, t23) {
  if (e23 !== void 0) {
    let a23 = this.clone();
    return (e23 = parseInt(e23, 10)) && (a23.epoch = ut(a23, e23, t23)), a23;
  }
  return this.d.getDate();
}, day: function(e23, t23) {
  if (e23 === void 0)
    return this.d.getDay();
  let a23 = this.clone(), n23 = e23;
  typeof e23 == "string" && (e23 = e23.toLowerCase(), ge2.aliases.hasOwnProperty(e23) ? n23 = ge2.aliases[e23] : (n23 = ge2.short().indexOf(e23), n23 === -1 && (n23 = ge2.long().indexOf(e23))));
  let r23 = this.d.getDay() - n23;
  t23 === true && r23 > 0 && (r23 -= 7), t23 === false && r23 < 0 && (r23 += 7);
  let o23 = this.subtract(r23, "days");
  return P2(o23, {hour: a23.hour(), minute: a23.minute(), second: a23.second()}), o23;
}, dayName: function(e23, t23) {
  if (e23 === void 0)
    return ge2.long()[this.day()];
  let a23 = this.clone();
  return a23 = a23.day(e23, t23), a23;
}};
var ft = (e23) => e23 = (e23 = (e23 = e23.minute(0)).second(0)).millisecond(1);
var yt = {dayOfYear: function(e23, t23) {
  if (e23 !== void 0) {
    let a3 = this.clone();
    return a3.epoch = dt(a3, e23, t23), a3;
  }
  let a23, n23 = 0, r23 = this.d.getMonth();
  for (let e3 = 1; e3 <= r23; e3++)
    a23 = new Date(), a23.setDate(1), a23.setFullYear(this.d.getFullYear()), a23.setHours(1), a23.setMinutes(1), a23.setMonth(e3), a23.setHours(-2), n23 += a23.getDate();
  return n23 + this.d.getDate();
}, week: function(e23, t23) {
  if (e23 !== void 0) {
    let a3 = this.clone();
    return a3.epoch = ct(this, e23, t23), a3 = ft(a3), a3;
  }
  let a23 = this.clone();
  a23 = a23.month(0), a23 = a23.date(1), a23 = ft(a23), a23 = a23.day("monday"), a23.monthName() === "december" && a23.date() >= 28 && (a23 = a23.add(1, "week"));
  let n23 = 1;
  a23.date() === 1 && (n23 = 0), a23 = a23.minus(1, "second");
  const r23 = this.epoch;
  if (a23.epoch > r23)
    return 1;
  let o23 = 0, i23 = 4 * this.month();
  for (a23.epoch += $.week * i23, o23 += i23; o23 <= 52; o23++) {
    if (a23.epoch > r23)
      return o23 + n23;
    a23 = a23.add(1, "week");
  }
  return 52;
}, month: function(e23, t23) {
  if (e23 !== void 0) {
    let a23 = this.clone();
    return a23.epoch = lt(a23, e23, t23), a23;
  }
  return this.d.getMonth();
}, monthName: function(e23, t23) {
  if (e23 !== void 0) {
    let a23 = this.clone();
    return a23 = a23.month(e23, t23), a23;
  }
  return N2()[this.month()];
}, quarter: function(e23, t23) {
  if (e23 !== void 0 && (typeof e23 == "string" && (e23 = e23.replace(/^q/i, ""), e23 = parseInt(e23, 10)), Ze2[e23])) {
    let a3 = this.clone(), n23 = Ze2[e23][0];
    return a3 = a3.month(n23, t23), a3 = a3.date(1, t23), a3 = a3.startOf("day"), a3;
  }
  let a23 = this.d.getMonth();
  for (let e3 = 1; e3 < Ze2.length; e3++)
    if (a23 < Ze2[e3][0])
      return e3 - 1;
  return 4;
}, season: function(e23, t23) {
  let a23 = "north";
  if (this.hemisphere() === "South" && (a23 = "south"), e23 !== void 0) {
    let n3 = this.clone();
    for (let r23 = 0; r23 < Be2[a23].length; r23++)
      e23 === Be2[a23][r23][0] && (n3 = n3.month(Be2[a23][r23][1], t23), n3 = n3.date(1), n3 = n3.startOf("day"));
    return n3;
  }
  let n23 = this.d.getMonth();
  for (let e3 = 0; e3 < Be2[a23].length - 1; e3++)
    if (n23 >= Be2[a23][e3][1] && n23 < Be2[a23][e3 + 1][1])
      return Be2[a23][e3][0];
  return "winter";
}, year: function(e23) {
  if (e23 !== void 0) {
    let t23 = this.clone();
    return t23.epoch = ht(t23, e23), t23;
  }
  return this.d.getFullYear();
}, era: function(e23) {
  if (e23 !== void 0) {
    let t23 = this.clone();
    e23 = e23.toLowerCase();
    let a23 = t23.d.getFullYear();
    return e23 === "bc" && a23 > 0 && (t23.epoch = ht(t23, -1 * a23)), e23 === "ad" && a23 < 0 && (t23.epoch = ht(t23, -1 * a23)), t23;
  }
  return this.d.getFullYear() < 0 ? "BC" : "AD";
}, decade: function(e23) {
  if (e23 !== void 0) {
    if (!(e23 = (e23 = (e23 = String(e23)).replace(/([0-9])'?s$/, "$1")).replace(/([0-9])(th|rd|st|nd)/, "$1")))
      return console.warn("Spacetime: Invalid decade input"), this;
    e23.length === 2 && /[0-9][0-9]/.test(e23) && (e23 = "19" + e23);
    let t23 = Number(e23);
    return isNaN(t23) ? this : (t23 = 10 * Math.floor(t23 / 10), this.year(t23));
  }
  return this.startOf("decade").year();
}, century: function(e23) {
  if (e23 !== void 0) {
    typeof e23 == "string" && (e23 = (e23 = (e23 = e23.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (e3, t4, a23) => (a23.match(/b\.?c\.?/i) && (t4 = "-" + t4), t4))).replace(/c$/, ""));
    let t3 = Number(e23);
    return isNaN(e23) ? (console.warn("Spacetime: Invalid century input"), this) : (t3 === 0 && (t3 = 1), t3 = t3 >= 0 ? 100 * (t3 - 1) : 100 * (t3 + 1), this.year(t3));
  }
  let t23 = this.startOf("century").year();
  return t23 = Math.floor(t23 / 100), t23 < 0 ? t23 - 1 : t23 + 1;
}, millenium: function(e23) {
  if (e23 !== void 0) {
    if (typeof e23 == "string" && (e23 = e23.replace(/([0-9])(th|rd|st|nd)/, "$1"), e23 = Number(e23), isNaN(e23)))
      return console.warn("Spacetime: Invalid millenium input"), this;
    e23 > 0 && (e23 -= 1);
    let t3 = 1e3 * e23;
    return t3 === 0 && (t3 = 1), this.year(t3);
  }
  let t23 = Math.floor(this.year() / 1e3);
  return t23 >= 0 && (t23 += 1), t23;
}};
var gt = Object.assign({}, mt, pt, yt);
gt.milliseconds = gt.millisecond, gt.seconds = gt.second, gt.minutes = gt.minute, gt.hours = gt.hour, gt.hour24 = gt.hour, gt.h12 = gt.hour12, gt.h24 = gt.hour24, gt.days = gt.day;
var bt = (e23) => {
  Object.keys(gt).forEach((t23) => {
    e23.prototype[t23] = gt[t23];
  });
};
var kt = b.isLeapYear;
var wt = function(e23, t23) {
  return e23 === 1 && kt(t23) ? 29 : q[e23];
};
var vt = (e23, t23) => {
  if (e23.month > 0) {
    let a23 = parseInt(e23.month / 12, 10);
    e23.year = t23.year() + a23, e23.month = e23.month % 12;
  } else if (e23.month < 0) {
    let a23 = Math.floor(Math.abs(e23.month) / 13, 10);
    a23 = Math.abs(a23) + 1, e23.year = t23.year() - a23, e23.month = e23.month % 12, e23.month = e23.month + 12, e23.month === 12 && (e23.month = 0);
  }
  return e23;
};
var zt = (e23, t23, a23) => {
  let n23 = t23.year(), r23 = t23.month(), o23 = wt(r23, n23);
  for (; a23 > o23; )
    a23 -= o23, r23 += 1, r23 >= 12 && (r23 -= 12, n23 += 1), o23 = wt(r23, n23);
  return e23.month = r23, e23.date = a23, e23;
};
var _t = (e23, t23, a23) => {
  e23.year = t23.year(), e23.month = t23.month();
  let n23 = t23.date();
  for (e23.date = n23 - Math.abs(a23); e23.date < 1; ) {
    e23.month -= 1, e23.month < 0 && (e23.month = 11, e23.year -= 1);
    let t3 = wt(e23.month, e23.year);
    e23.date += t3;
  }
  return e23;
};
var jt = ["millisecond", "second", "minute", "hour", "date", "month"];
var Ot = {second: jt.slice(0, 1), minute: jt.slice(0, 2), quarterhour: jt.slice(0, 2), hour: jt.slice(0, 3), date: jt.slice(0, 4), month: jt.slice(0, 4), quarter: jt.slice(0, 4), season: jt.slice(0, 4), year: jt, decade: jt, century: jt};
Ot.week = Ot.hour, Ot.season = Ot.date, Ot.quarter = Ot.date;
var $t = {year: true, quarter: true, season: true, month: true, week: true, day: true};
var Dt = {month: true, quarter: true, season: true, year: true};
var Mt = (e23) => {
  e23.prototype.add = function(e3, t23) {
    let a23 = this.clone();
    if (!t23 || e3 === 0)
      return a23;
    let n23 = this.clone();
    if ((t23 = b.normalize(t23)) === "millisecond")
      return a23.epoch += e3, a23;
    t23 === "fortnight" && (e3 *= 2, t23 = "week"), $[t23] ? a23.epoch += $[t23] * e3 : t23 === "week" || t23 === "weekend" ? a23.epoch += $.day * (7 * e3) : t23 === "quarter" || t23 === "season" ? a23.epoch += $.month * (3 * e3) : t23 === "quarterhour" && (a23.epoch += 15 * $.minute * e3);
    let r23 = {};
    if (Ot[t23] && Ot[t23].forEach((e4) => {
      r23[e4] = n23[e4]();
    }), $t[t23]) {
      const e4 = n23.timezone().current.offset - a23.timezone().current.offset;
      a23.epoch += 3600 * e4 * 1e3;
    }
    if (t23 === "month" && (r23.month = n23.month() + e3, r23 = vt(r23, n23)), t23 === "week") {
      let t3 = n23.date() + 7 * e3;
      t3 <= 28 && t3 > 1 && (r23.date = t3);
    }
    if (t23 === "weekend" && a23.dayName() !== "saturday")
      a23 = a23.day("saturday", true);
    else if (t23 === "date") {
      if (e3 < 0)
        r23 = _t(r23, n23, e3);
      else {
        let t3 = n23.date() + e3;
        r23 = zt(r23, n23, t3);
      }
      e3 !== 0 && n23.isSame(a23, "day") && (r23.date = n23.date() + e3);
    } else if (t23 === "quarter") {
      if (r23.month = n23.month() + 3 * e3, r23.year = n23.year(), r23.month < 0) {
        let e4 = Math.floor(r23.month / 12), t3 = r23.month + 12 * Math.abs(e4);
        r23.month = t3, r23.year += e4;
      } else if (r23.month >= 12) {
        let e4 = Math.floor(r23.month / 12);
        r23.month = r23.month % 12, r23.year += e4;
      }
      r23.date = n23.date();
    } else if (t23 === "year") {
      let t3 = n23.year() + e3, r3 = a23.year();
      (r3 < t3 || r3 > t3) && (a23.epoch += $.day);
    } else
      t23 === "decade" ? r23.year = a23.year() + 10 : t23 === "century" && (r23.year = a23.year() + 100);
    if (Dt[t23]) {
      let e4 = q[r23.month];
      r23.date = n23.date(), r23.date > e4 && (r23.date = e4);
    }
    return Object.keys(r23).length > 1 && P2(a23, r23), a23;
  }, e23.prototype.subtract = function(e3, t23) {
    return this.clone().add(-1 * e3, t23);
  }, e23.prototype.minus = e23.prototype.subtract, e23.prototype.plus = e23.prototype.add;
};
var Pt = {millisecond: (e23) => e23.epoch, second: (e23) => [e23.year(), e23.month(), e23.date(), e23.hour(), e23.minute(), e23.second()].join("-"), minute: (e23) => [e23.year(), e23.month(), e23.date(), e23.hour(), e23.minute()].join("-"), hour: (e23) => [e23.year(), e23.month(), e23.date(), e23.hour()].join("-"), day: (e23) => [e23.year(), e23.month(), e23.date()].join("-"), week: (e23) => [e23.year(), e23.week()].join("-"), month: (e23) => [e23.year(), e23.month()].join("-"), quarter: (e23) => [e23.year(), e23.quarter()].join("-"), year: (e23) => e23.year()};
Pt.date = Pt.day;
var qt = (e23) => {
  e23.prototype.isSame = function(t23, a23, n23 = true) {
    let r23 = this;
    if (!a23)
      return null;
    if (typeof t23 == "string" && typeof a23 == "object") {
      let e3 = t23;
      t23 = a23, a23 = e3;
    }
    return typeof t23 != "string" && typeof t23 != "number" || (t23 = new e23(t23, this.timezone.name)), a23 = a23.replace(/s$/, ""), n23 === true && r23.tz !== t23.tz && ((t23 = t23.clone()).tz = r23.tz), Pt[a23] ? Pt[a23](r23) === Pt[a23](t23) : null;
  };
};
var St = (e23) => {
  const t23 = {isAfter: function(e3) {
    e3 = b.beADate(e3, this);
    let t3 = b.getEpoch(e3);
    return t3 === null ? null : this.epoch > t3;
  }, isBefore: function(e3) {
    e3 = b.beADate(e3, this);
    let t3 = b.getEpoch(e3);
    return t3 === null ? null : this.epoch < t3;
  }, isEqual: function(e3) {
    e3 = b.beADate(e3, this);
    let t3 = b.getEpoch(e3);
    return t3 === null ? null : this.epoch === t3;
  }, isBetween: function(e3, t3, a23 = false) {
    e3 = b.beADate(e3, this), t3 = b.beADate(t3, this);
    let n23 = b.getEpoch(e3);
    if (n23 === null)
      return null;
    let r23 = b.getEpoch(t3);
    return r23 === null ? null : a23 ? this.isBetween(e3, t3) || this.isEqual(e3) || this.isEqual(t3) : n23 < this.epoch && this.epoch < r23;
  }};
  Object.keys(t23).forEach((a23) => {
    e23.prototype[a23] = t23[a23];
  });
};
var Et = (e23) => {
  const t23 = {i18n: (e3) => {
    b.isObject(e3.days) && ge2.set(e3.days), b.isObject(e3.months) && I2(e3.months), b.isBoolean(e3.useTitleCase) && we2(e3.useTitleCase);
  }};
  Object.keys(t23).forEach((a23) => {
    e23.prototype[a23] = t23[a23];
  });
};
var Tt = s;
var Nt = function(e23, t23, n23 = {}) {
  this.epoch = null, this.tz = g(t23, Tt), this.silent = n23.silent || true, this.british = n23.dmy || n23.british, this._weekStart = 1, n23.weekStart !== void 0 && (this._weekStart = n23.weekStart), this._today = {}, n23.today !== void 0 && (this._today = n23.today), Object.defineProperty(this, "d", {get: function() {
    let e3 = a(this), t3 = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e3;
    t3 = 60 * t3 * 1e3;
    let n3 = this.epoch + t3;
    return new Date(n3);
  }}), Object.defineProperty(this, "timezones", {get: () => Tt, set: (e3) => (Tt = e3, e3)});
  let r23 = pe2(this, e23);
  this.epoch = r23.epoch;
};
Object.keys(Ke2).forEach((e23) => {
  Nt.prototype[e23] = Ke2[e23];
}), Nt.prototype.clone = function() {
  return new Nt(this.epoch, this.tz, {silent: this.silent, weekStart: this._weekStart, today: this._today, parsers: this.parsers});
}, Nt.prototype.toLocalDate = function() {
  return new Date(this.epoch);
}, bt(Nt), Mt(Nt), qt(Nt), St(Nt), Et(Nt);
var Ct = Nt;
var It = (e23, t23) => {
  let a23 = new Ct(null), n23 = new Ct(null);
  a23 = a23.time(e23), n23 = t23 ? n23.time(t23) : a23.add(59, "minutes");
  let r23 = a23.hour(), o23 = n23.hour();
  return Object.keys(a23.timezones).filter((e3) => {
    if (e3.indexOf("/") === -1)
      return false;
    let t3 = new Ct(null, e3), i23 = t3.hour();
    return i23 >= r23 && i23 <= o23 && (!(i23 === r23 && t3.minute() < a23.minute()) && !(i23 === o23 && t3.minute() > n23.minute()));
  });
};
var At = (e23, t23, a23) => new Ct(e23, t23, a23);
var Yt = function(e23) {
  let t23 = e23._today || {};
  return Object.keys(t23).forEach((a23) => {
    e23 = e23[a23](t23[a23]);
  }), e23;
};
At.now = (e23, t23) => {
  let a23 = new Ct(new Date().getTime(), e23, t23);
  return a23 = Yt(a23), a23;
}, At.today = (e23, t23) => {
  let a23 = new Ct(new Date().getTime(), e23, t23);
  return a23 = Yt(a23), a23.startOf("day");
}, At.tomorrow = (e23, t23) => {
  let a23 = new Ct(new Date().getTime(), e23, t23);
  return a23 = Yt(a23), a23.add(1, "day").startOf("day");
}, At.yesterday = (e23, t23) => {
  let a23 = new Ct(new Date().getTime(), e23, t23);
  return a23 = Yt(a23), a23.subtract(1, "day").startOf("day");
}, At.extend = function(e23 = {}) {
  return Object.keys(e23).forEach((t23) => {
    Ct.prototype[t23] = e23[t23];
  }), this;
}, At.timezones = function() {
  return new Ct().timezones;
}, At.max = function(e23, t23) {
  let a23 = new Ct(null, e23, t23);
  return a23.epoch = 864e13, a23;
}, At.min = function(e23, t23) {
  let a23 = new Ct(null, e23, t23);
  return a23.epoch = -864e13, a23;
}, At.whereIts = It, At.version = "6.16.0", At.plugin = At.extend;
var xt = At;
var spacetime_default = xt;

// build/snowpack/link/react-timezone-select/dist/index.js
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp2(target, "__esModule", {value: true});
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp2(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp2(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};
var require_react_is_development = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment4 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler2 = REACT_PROFILER_TYPE;
        var StrictMode2 = REACT_STRICT_MODE_TYPE;
        var Suspense2 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment4;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler2;
        exports.StrictMode = StrictMode2;
        exports.Suspense = Suspense2;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});
var require_react_is = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
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
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols2 = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols2) {
          keys = keys.concat(getOwnPropertySymbols2(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i32 = 0; i32 < keys.length; ++i32) {
          var key = keys[i32];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e3) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i32 = 1; i32 < arguments.length; i32++) {
      var source = arguments[i32];
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
  for (var i32 = 0; i32 < document.styleSheets.length; i32++) {
    if (document.styleSheets[i32].ownerNode === tag) {
      return document.styleSheets[i32];
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
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? false : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
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
    if (true) {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e3) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e3);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return {value, root, parent, type, props, children, line, column, length: length2, return: ""};
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, {length: -root.length}, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
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
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i32 = 0, j32 = 0, k22 = 0; i32 < index; ++i32)
    for (var x22 = 0, y32 = substr(value, post + 1, post = abs(j32 = points[i32])), z22 = value; x22 < size; ++x22)
      if (z22 = trim(j32 > 0 ? rule[x22] + " " + y32 : replace(y32, /&\f/g, rule[x22])))
        props[k22++] = z22;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
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
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i32 = 0; i32 < length2; i32++)
    output += callback(children[i32], i32, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i32 = 0; i32 < length2; i32++)
      output += collection[i32](element, index, children, callback) || "";
    return output;
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {value: replace(element.value, "@", "@" + WEBKIT)})], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]})], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, {props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]}),
                    copy(element, {props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]}),
                    copy(element, {props: [replace(value, /:(plac\w+)/, MS + "input-$1")]})
                  ], callback);
              }
              return "";
            });
      }
  }
}
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_browser_esm_default = memoize;
var last = function last2(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
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
  for (var i32 = 0, k22 = 0; i32 < rules.length; i32++) {
    for (var j32 = 0; j32 < parentRules.length; j32++, k22++) {
      element.props[k22] = points[i32] ? rules[i32].replace(/&\f/g, parentRules[j32]) : parentRules[j32] + " " + rules[i32];
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
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
  return function(element, index, children) {
    if (element.type !== "rule")
      return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;
      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
  for (var i32 = index - 1; i32 >= 0; i32--) {
    if (!isImportRule(children[i32])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i32 = 1; i32 < attrib.length; i32++) {
        inserted[attrib[i32]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, true ? function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
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
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var emotion_cache_browser_esm_default = createCache;
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
  var h3 = 0;
  var k22, i32 = 0, len = str.length;
  for (; len >= 4; ++i32, len -= 4) {
    k22 = str.charCodeAt(i32) & 255 | (str.charCodeAt(++i32) & 255) << 8 | (str.charCodeAt(++i32) & 255) << 16 | (str.charCodeAt(++i32) & 255) << 24;
    k22 = (k22 & 65535) * 1540483477 + ((k22 >>> 16) * 59797 << 16);
    k22 ^= k22 >>> 24;
    h3 = (k22 & 65535) * 1540483477 + ((k22 >>> 16) * 59797 << 16) ^ (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h3 ^= (str.charCodeAt(i32 + 2) & 255) << 16;
    case 2:
      h3 ^= (str.charCodeAt(i32 + 1) & 255) << 8;
    case 1:
      h3 ^= str.charCodeAt(i32) & 255;
      h3 = (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
  }
  h3 ^= h3 >>> 13;
  h3 = (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
  return ((h3 ^ h3 >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;
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
var unitless_browser_esm_default = unitlessKeys;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p222) {
          cursor = {
            name: p1,
            styles: p222,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
if (true) {
  contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
    }
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
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles += interpolation.map;
        }
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
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match2, p1, p222) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p222.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
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
    for (var i32 = 0; i32 < obj.length; i32++) {
      string += handleInterpolation(mergedProps, registered, obj[i32]) + ";";
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
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
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
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
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
var sourceMapPattern;
if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
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
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i32 = 1; i32 < args.length; i32++) {
    styles += handleInterpolation(mergedProps, registered, args[i32]);
    if (stringMode) {
      if (strings[i32] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i32];
    }
  }
  var sourceMap;
  if (true) {
    styles = styles.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = hash_browser_esm_default(styles) + identifierName;
  if (true) {
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles,
    next: cursor
  };
};
var hasOwnProperty2 = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ emotion_cache_browser_esm_default({
  key: "css"
}) : null);
if (true) {
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ forwardRef(function(props, ref) {
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ createContext({});
if (true) {
  ThemeContext.displayName = "EmotionThemeContext";
}
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line2) {
  var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
  if (match2) {
    var parts = match2[1].split(".");
    return parts[parts.length - 1];
  }
  match2 = /^([A-Za-z0-9$.]+)@/.exec(line2);
  if (match2)
    return match2[1];
  return void 0;
};
var internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
var sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
  return identifier2.replace(/\$/g, "-");
};
var getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
  if (!stackTrace)
    return void 0;
  var lines = stackTrace.split("\n");
  for (var i32 = 0; i32 < lines.length; i32++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i32]);
    if (!functionName)
      continue;
    if (internalReactFunctionNames.has(functionName))
      break;
    if (/^[A-Z]/.test(functionName))
      return sanitizeIdentifier(functionName);
  }
  return void 0;
};
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  if (typeof props.css === "string" && props.css.indexOf(":") !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label)
      newProps[labelPropName] = label;
  }
  return newProps;
};
var Noop = function Noop2() {
  return null;
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
  var serialized = serializeStyles(registeredStyles, void 0, useContext(ThemeContext));
  if (serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
    }
  }
  var rules = insertStyles(cache, serialized, typeof type === "string");
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = /* @__PURE__ */ createElement(type, newProps);
  var possiblyStyleElement = /* @__PURE__ */ createElement(Noop, null);
  return /* @__PURE__ */ createElement(Fragment, null, possiblyStyleElement, ele);
});
if (true) {
  Emotion.displayName = "EmotionCssPropInternal";
}
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var pkg = {
  name: "@emotion/react",
  version: "11.7.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: false,
  author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/cache": "^11.7.1",
    "@emotion/serialize": "^1.0.2",
    "@emotion/sheet": "^1.1.0",
    "@emotion/utils": "^1.0.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.7.1",
    "@emotion/css-prettifier": "1.0.1",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.6.0",
    "@types/react": "^16.9.11",
    dtslint: "^0.3.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact"
  }
};
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty2.call(props, "css")) {
    return createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i32 = 2; i32 < argsLength; i32++) {
    createElementArgArray[i32] = args[i32];
  }
  return createElement.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles = props.styles;
  var serialized = serializeStyles([styles], void 0, useContext(ThemeContext));
  var sheetRef = useRef();
  useLayoutEffect(function() {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useLayoutEffect(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
if (true) {
  Global.displayName = "EmotionGlobal";
}
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
  var i32 = 0;
  var cls = "";
  for (; i32 < len; i32++) {
    var arg = args[i32];
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
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k22 in arg) {
            if (arg[k22] && k22) {
              toAdd && (toAdd += " ");
              toAdd += k22;
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
function merge(registered, css5, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css5(registeredStyles);
}
var Noop3 = function Noop4() {
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var css5 = function css6() {
    if (hasRendered && true) {
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
    if (hasRendered && true) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css5, classnames(args));
  };
  var content = {
    css: css5,
    cx,
    theme: useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  var possiblyStyleElement = /* @__PURE__ */ createElement(Noop3, null);
  return /* @__PURE__ */ createElement(Fragment, null, possiblyStyleElement, ele);
});
if (true) {
  ClassNames.displayName = "EmotionClassNames";
}
if (true) {
  isBrowser2 = true;
  isJest = typeof jest !== "undefined";
  if (isBrowser2 && !isJest) {
    globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser2 ? window : global;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser2;
var isJest;
var globalContext;
var globalKey;
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
  var key, i32;
  for (i32 = 0; i32 < sourceKeys.length; i32++) {
    key = sourceKeys[i32];
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
  var key, i32;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i32 = 0; i32 < sourceSymbolKeys.length; i32++) {
      key = sourceSymbolKeys[i32];
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i32 = 0; i32 < props.length; i32++) {
    var descriptor = props[i32];
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
function _setPrototypeOf(o3, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p4) {
    o4.__proto__ = p4;
    return o4;
  };
  return _setPrototypeOf(o3, p3);
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i32 = 1; i32 < arguments.length; i32++) {
    var source = arguments[i32] != null ? arguments[i32] : {};
    if (i32 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e3) {
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
var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix2, name) {
  if (!name) {
    return prefix2;
  } else if (name[0] === "-") {
    return prefix2 + name;
  } else {
    return prefix2 + "__" + name;
  }
}
function classNames(prefix2, state, className) {
  var arr = [className];
  if (state && prefix2) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix2, key)));
      }
    }
  }
  return arr.filter(function(i32) {
    return i32;
  }).map(function(i32) {
    return String(i32).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value))
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
  var innerProps = _objectWithoutProperties(props, _excluded$3);
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
  if (style.position === "fixed")
    return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t3, b3, c3, d3) {
  return c3 * ((t3 = t3 / d3 - 1) * t3 * t3 + 1) + b3;
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
  } catch (e3) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e3) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w2 = typeof window !== "undefined" ? window : {};
if (w2.addEventListener && w2.removeEventListener) {
  w2.addEventListener("p", noop, options);
  w2.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
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
var coercePlacement = function coercePlacement2(p3) {
  return p3 === "auto" ? "bottom" : p3;
};
var menuCSS = function menuCSS2(_ref23) {
  var _ref3;
  var placement = _ref23.placement, _ref2$theme = _ref23.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _ref3 = {
    label: "menu"
  }, _defineProperty(_ref3, alignToControl(placement), "100%"), _defineProperty(_ref3, "backgroundColor", colors2.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius2), _defineProperty(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), _defineProperty(_ref3, "marginBottom", spacing2.menuGutter), _defineProperty(_ref3, "marginTop", spacing2.menuGutter), _defineProperty(_ref3, "position", "absolute"), _defineProperty(_ref3, "width", "100%"), _defineProperty(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /* @__PURE__ */ createContext({
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
    _this.context = void 0;
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
}(Component);
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
  var rect = _ref6.rect, offset = _ref6.offset, position2 = _ref6.position;
  return {
    left: rect.left,
    position: position2,
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
      var _this$props2 = this.props, appendTo = _this$props2.appendTo, children = _this$props2.children, className = _this$props2.className, controlElement = _this$props2.controlElement, cx = _this$props2.cx, innerProps = _this$props2.innerProps, menuPlacement = _this$props2.menuPlacement, position2 = _this$props2.menuPosition, getStyles = _this$props2.getStyles;
      var isFixed = position2 === "fixed";
      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }
      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset,
        position: position2,
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
      }, appendTo ? /* @__PURE__ */ createPortal$1(menuWrapper, appendTo) : menuWrapper);
    }
  }]);
  return MenuPortal2;
}(Component);
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
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
var valueContainerCSS = function valueContainerCSS2(_ref23) {
  var spacing2 = _ref23.theme.spacing, isMulti = _ref23.isMulti, hasValue = _ref23.hasValue, controlShouldRenderValue = _ref23.selectProps.controlShouldRenderValue;
  return {
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
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
var _excluded$2 = ["size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 = false ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var Svg = function Svg2(_ref3) {
  var size = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
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
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, false ? "" : ";label:LoadingDot;", false ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
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
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
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
var _excluded$1 = ["data"];
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
var groupHeadingCSS = function groupHeadingCSS2(_ref23) {
  var spacing2 = _ref23.theme.spacing;
  return {
    label: "group",
    color: "#999",
    cursor: "default",
    display: "block",
    fontSize: "75%",
    fontWeight: 500,
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
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", _extends({
    css: getStyles("groupHeading", props),
    className: cx({
      "group-heading": true
    }, className)
  }, innerProps));
};
var _excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    visibility: isDisabled ? "hidden" : "visible",
    color: colors2.neutral80,
    transform: value ? "translateZ(0)" : ""
  }, containerStyle);
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input2(props) {
  var className = props.className, cx = props.cx, getStyles = props.getStyles, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded);
  return jsx("div", {
    className: cx({
      "input-container": true
    }, className),
    css: getStyles("input", props),
    "data-value": value || ""
  }, jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
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
var multiValueLabelCSS = function multiValueLabelCSS2(_ref23) {
  var _ref2$theme = _ref23.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref23.cropWithEllipsis;
  return {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return {
    alignItems: "center",
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
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
  return jsx("div", _extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, className = props.className, components2 = props.components, cx = props.cx, data = props.data, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(ClassNames, null, function(_ref6) {
    var css5 = _ref6.css, emotionCx = _ref6.cx;
    return jsx(Container, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css5(getStyles("multiValue", props)), cx({
          "multi-value": true,
          "multi-value--is-disabled": isDisabled
        }, className))
      }, innerProps),
      selectProps
    }, jsx(Label, {
      data,
      innerProps: {
        className: emotionCx(css5(getStyles("multiValueLabel", props)), cx({
          "multi-value__label": true
        }, className))
      },
      selectProps
    }, children), jsx(Remove, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css5(getStyles("multiValueRemove", props)), cx({
          "multi-value__remove": true
        }, className)),
        "aria-label": "Remove ".concat(children || "option")
      }, removeProps),
      selectProps
    }));
  });
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
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
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
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var placeholderCSS = function placeholderCSS2(_ref3) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "placeholder",
    color: colors2.neutral50,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
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
var css3 = function css4(_ref3) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return {
    label: "singleValue",
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i32) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e22;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i32 && _arr.length === i32)
        break;
    }
  } catch (err) {
    _d = true;
    _e22 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e22;
    }
  }
  return _arr;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i32 = 0, arr2 = new Array(len); i32 < len; i32++) {
    arr2[i32] = arr[i32];
  }
  return arr2;
}
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n3 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n3 === "Object" && o3.constructor)
    n3 = o3.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o3);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o3, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i32) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i32) || _unsupportedIterableToArray(arr, i32) || _nonIterableRest();
}
var _excluded2 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded2);
  var _useState = useState(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = useState(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = useState(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = useCallback(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = useCallback(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = useCallback(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = useCallback(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
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
  for (var i32 = 0; i32 < newInputs.length; i32++) {
    if (!isEqual(newInputs[i32], lastInputs[i32])) {
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
var memoize_one_esm_default = memoizeOne;
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref = false ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
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
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected;
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
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id2 = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = useMemo(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = useMemo(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2({
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = useMemo(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: options2,
        context: focused === focusedOption ? "menu" : "value",
        selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, options2, selectValue]);
  var ariaResults = useMemo(function() {
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
  var ariaGuidance = useMemo(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = jsx(Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  return jsx(Fragment, null, jsx(A11yText, {
    id: id2
  }, isInitialFocus && ScreenReaderText), jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
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
var anyDiacritic = new RegExp("[" + diacritics.map(function(d3) {
  return d3.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (i3 = 0; i3 < diacritics.length; i3++) {
  diacritic = diacritics[i3];
  for (j3 = 0; j3 < diacritic.letters.length; j3++) {
    diacriticToBase[diacritic.letters[j3]] = diacritic.base;
  }
}
var diacritic;
var j3;
var i3;
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoize_one_esm_default(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__)
      return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
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
var _excluded3 = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded3);
  return jsx("input", _extends({
    ref: innerRef
  }, props, {
    css: /* @__PURE__ */ css({
      label: "dummyInput",
      background: 0,
      border: 0,
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      width: 1,
      color: "transparent",
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, false ? "" : ";label:DummyInput;", false ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNNIiwiZmlsZSI6IkR1bW15SW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = useRef(false);
  var isTop = useRef(false);
  var touchStart = useRef(0);
  var scrollTarget = useRef(null);
  var handleEventDelta = useCallback(function(event, delta) {
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
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = useCallback(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = useCallback(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = useCallback(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = useCallback(function(el) {
    if (!el)
      return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = useCallback(function(el) {
    if (!el)
      return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  useEffect(function() {
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
function preventTouchMove(e3) {
  e3.preventDefault();
}
function allowTouchMove(e3) {
  e3.stopPropagation();
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
  var originalStyles = useRef({});
  var scrollTarget = useRef(null);
  var addScrollLock = useCallback(function(touchScrollTarget) {
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
  }, [accountForScrollbars]);
  var removeScrollLock = useCallback(function(touchScrollTarget) {
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
  }, [accountForScrollbars]);
  useEffect(function() {
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
function _EMOTION_STRINGIFIED_CSS_ERROR__2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput2() {
  return document.activeElement && document.activeElement.blur();
};
var _ref22 = false ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9ICgpID0+XG4gIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmOiBSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4gPSAoZWxlbWVudCkgPT4ge1xuICAgIHNldFNjcm9sbENhcHR1cmVUYXJnZXQoZWxlbWVudCk7XG4gICAgc2V0U2Nyb2xsTG9ja1RhcmdldChlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtsb2NrRW5hYmxlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtibHVyU2VsZWN0SW5wdXR9XG4gICAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIHJpZ2h0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW4odGFyZ2V0UmVmKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__2
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
  return jsx(Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref22
  }), children(targetRef));
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
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
  singleValue: css3,
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
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
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
  tabIndex: 0,
  tabSelectsValue: true
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
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
  }).filter(notNullish);
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
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
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
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i32) {
    return getOptionValue2(props, i32) === candidate;
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
      prevWasFocused: false,
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
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
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
        _this.setValue(multiValueAsValue(selectValue.filter(function(i32) {
          return _this.getOptionValue(i32) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
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
      var newValueArray = selectValue.filter(function(i32) {
        return _this.getOptionValue(i32) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
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
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
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
      event.preventDefault();
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
    _this.onTouchStart = function(_ref23) {
      var touches = _ref23.touches;
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
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
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
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
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
              action: "menu-close",
              prevInputValue: inputValue
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
        action: "menu-close",
        prevInputValue: this.props.inputValue
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
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
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
      var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen;
      var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
      var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id2 = inputId || this.getElementId("input");
      var ariaAttributes = _objectSpread2(_objectSpread2({
        "aria-autocomplete": "list",
        "aria-expanded": menuIsOpen,
        "aria-haspopup": true,
        "aria-controls": this.getElementId("listbox"),
        "aria-owns": this.getElementId("listbox"),
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        role: "combobox"
      }, !isSearchable && {
        "aria-readonly": true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
        "aria-describedby": this.getElementId("live-region")
      } : {
        "aria-describedby": this.getElementId("placeholder")
      });
      if (!isSearchable) {
        return /* @__PURE__ */ createElement(DummyInput, _extends({
          id: id2,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex,
          inputMode: "none",
          form,
          value: ""
        }, ariaAttributes));
      }
      return /* @__PURE__ */ createElement(Input3, _extends({}, commonProps, {
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
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ createElement(Placeholder3, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ createElement(MultiValue3, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e3) {
                e3.preventDefault();
                e3.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ createElement(SingleValue3, _extends({}, commonProps, {
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
      return /* @__PURE__ */ createElement(ClearIndicator3, _extends({}, commonProps, {
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
      return /* @__PURE__ */ createElement(LoadingIndicator3, _extends({}, commonProps, {
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
      return /* @__PURE__ */ createElement(IndicatorSeparator3, _extends({}, commonProps, {
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
      return /* @__PURE__ */ createElement(DropdownIndicator3, _extends({}, commonProps, {
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
      var render2 = function render22(props, id2) {
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
        return /* @__PURE__ */ createElement(Option3, _extends({}, commonProps, {
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
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ createElement(Group3, _extends({}, commonProps, {
              key: groupId,
              data: _data,
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
        menuUI = /* @__PURE__ */ createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null)
          return null;
        menuUI = /* @__PURE__ */ createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ createElement(Menu3, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId("listbox")
          },
          isLoading,
          placement
        }), /* @__PURE__ */ createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ createElement(MenuList3, _extends({}, commonProps, {
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
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ createElement(MenuPortal2, _extends({}, commonProps, {
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
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled)
        return;
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return /* @__PURE__ */ createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i32) {
            return /* @__PURE__ */ createElement("input", {
              key: "i-".concat(i32),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ createElement("input", {
            name,
            type: "hidden"
          });
          return /* @__PURE__ */ createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ createElement("input", {
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
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ createElement(LiveRegion, _extends({}, commonProps, {
        id: this.getElementId("live-region"),
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
      return /* @__PURE__ */ createElement(SelectContainer3, _extends({}, commonProps, {
        className,
        innerProps: {
          id: id2,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ createElement(Control3, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ createElement(ValueContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ createElement(IndicatorsContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
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
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(Component);
Select.defaultProps = defaultProps;
var StateManagedSelect = /* @__PURE__ */ forwardRef(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ createElement(Select, _extends({
    ref
  }, baseSelectProps));
});
var react_select_esm_default = StateManagedSelect;
var e2 = (e3, t3, a3) => {
  const [n3, r3] = e3.split("/"), [o3, i32] = r3.split(":");
  return Date.UTC(a3, n3 - 1, o3, i32) - 36e5 * t3;
};
var t2 = (t3, a3, n3, r3, o3) => {
  const i32 = new Date(t3).getUTCFullYear(), s3 = e2(a3, o3, i32), u3 = e2(n3, r3, i32);
  return t3 >= s3 && t3 < u3;
};
var a2 = (e3) => {
  let a3 = e3.timezones[e3.tz];
  if (a3 === void 0)
    return console.warn("Warning: couldn't find timezone " + e3.tz), 0;
  if (a3.dst === void 0)
    return a3.offset;
  let n3 = a3.offset, r3 = a3.offset + 1;
  a3.hem === "n" && (r3 = n3 - 1);
  let o3 = a3.dst.split("->");
  return t2(e3.epoch, o3[0], o3[1], n3, r3) === true ? n3 : r3;
};
var n2;
var r2 = (n2 = Object.freeze({__proto__: null, default: {"9|s": "2/dili,2/jayapura", "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau", "9.5|s|04/04:03->10/03:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna", "9.5|s": "4/darwin,4/north", "8|s|03/08:01->10/04:00": "12/casey", "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west", "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator", "8.75|s": "4/eucla", "7|s": "12/davis,2/jakarta,9/christmas", "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/saigon,2/tomsk,2/vientiane,2/ho_chi_minh", "6|s": "12/vostok", "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu", "6.5|n": "2/rangoon,9/cocos,2/yangon", "5|s": "12/mawson,9/kerguelen", "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/baku,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad", "5.75|n": "2/katmandu,2/kathmandu", "5.5|n": "2/calcutta,2/colombo,2/kolkata", "4|s": "9/reunion", "4|n": "2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius", "4.5|n|03/22:00->09/21:24": "2/tehran", "4.5|n": "2/kabul", "3|s": "12/syowa,9/antananarivo", "3|n|03/28:03->10/31:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia", "3|n|03/28:02->10/31:03": "8/chisinau,8/tiraspol", "3|n|03/28:00->10/30:24": "2/beirut", "3|n|03/27:00->10/30:01": "2/gaza,2/hebron", "3|n|03/26:02->10/31:02": "2/jerusalem,2/tel_aviv", "3|n|03/26:00->10/29:01": "2/amman", "3|n|03/26:00->10/28:24": "2/damascus", "3|n": "0/addis_ababa,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,0/asmara,2/istanbul", "2|s|03/28:02->10/31:02": "12/troll", "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane", "2|n|03/28:02->10/31:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen", "2|n": "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad", "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek", "1|n|04/11:03->05/16:02": "0/casablanca,0/el_aaiun", "1|n|03/28:01->10/31:02": "3/canary,3/faeroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faroe,8/belfast", "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis", "14|n": "11/kiritimati", "13|s|04/04:04->09/26:03": "11/apia", "13|s|01/15:02->11/05:03": "11/tongatapu", "13|n": "11/enderbury,11/fakaofo", "12|s|04/04:03->09/26:02": "12/mcmurdo,11/auckland,12/south_pole", "12|s|01/17:03->11/14:02": "11/fiji", "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis", "12.75|s|04/04:03->09/26:02": "11/chatham", "11|s|04/04:03->10/03:02": "12/macquarie", "11|s": "11/bougainville", "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/ponape,11/pohnpei", "11.5|n|04/04:03->10/03:02": "11/norfolk", "10|s|04/04:03->10/03:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria", "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland", "10|n": "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/truk,11/chuuk,11/yap", "10.5|s|04/04:01->10/03:02": "4/lord_howe,4/lhi", "0|n|03/28:00->10/31:01": "1/scoresbysund,3/azores", "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/gmt-0,13/gmt+0,13/gmt0,13/greenwich,13/uct,13/universal,13/zulu", "-9|n|03/14:02->11/07:02": "1/adak,1/atka,us/aleutian", "-9|n": "11/gambier", "-9.5|n": "11/marquesas", "-8|n|03/14:02->11/07:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska", "-8|n": "11/pitcairn", "-7|n|03/14:02->11/07:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific", "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon", "-7|n": "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona", "-6|s|04/03:22->09/04:22": "11/easter,7/easterisland", "-6|n|04/04:02->10/31:02": "1/chihuahua,1/mazatlan,10/bajasur", "-6|n|03/14:02->11/07:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,us/mountain", "-6|n": "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan", "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre", "-5|n|04/04:02->10/31:02": "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general", "-5|n|03/14:02->11/07:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke", "-5|n|03/12:03->11/05:01": "1/north_dakota", "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan", "-4|s|05/13:23->08/13:01": "12/palmer", "-4|s|04/03:24->09/05:00": "1/santiago,7/continental", "-4|s|03/27:24->10/03:00": "1/asuncion", "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba", "-4|s": "1/la_paz,1/manaus,5/west", "-4|n|03/14:02->11/07:02": "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan", "-4|n|03/14:00->11/07:01": "1/havana", "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky", "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin", "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/comodrivadavia,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/rosario,5/east", "-3|n|03/14:02->11/07:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic", "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem", "-2|n|03/27:22->10/30:23": "1/godthab,1/nuuk", "-2|n|03/14:02->11/07:02": "1/miquelon", "-2|n": "1/noronha,3/south_georgia,5/denoronha", "-2.5|n|03/14:02->11/07:02": "1/st_johns,6/newfoundland", "-1|n": "3/cape_verde", "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa", "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii"}})) && n2.default || n2;
var o2 = ["africa", "america", "asia", "atlantic", "australia", "brazil", "canada", "chile", "europe", "indian", "mexico", "pacific", "antarctica", "etc"];
var i2 = {};
Object.keys(r2).forEach((e3) => {
  let t3 = e3.split("|"), a3 = {offset: Number(t3[0]), hem: t3[1]};
  t3[2] && (a3.dst = t3[2]), r2[e3].split(",").forEach((e4) => {
    e4 = e4.replace(/(^[0-9]+)\//, (e5, t4) => (t4 = Number(t4), o2[t4] + "/")), i2[e4] = a3;
  });
}), i2.utc = {offset: 0, hem: "n"};
for (let e3 = -14; e3 <= 14; e3 += 0.5) {
  let t3 = e3;
  t3 > 0 && (t3 = "+" + t3);
  let a3 = "etc/gmt" + t3;
  i2[a3] = {offset: -1 * e3, hem: "n"}, a3 = "utc/gmt" + t3, i2[a3] = {offset: -1 * e3, hem: "n"};
}
var s2 = /(\-?[0-9]+)h(rs)?/i;
var u2 = /(\-?[0-9]+)/;
var l2 = /utc([\-+]?[0-9]+)/i;
var h2 = /gmt([\-+]?[0-9]+)/i;
var c2 = function(e3) {
  return (e3 = Number(e3)) >= -13 && e3 <= 13 ? "etc/gmt" + (e3 = ((e3 *= -1) > 0 ? "+" : "") + e3) : null;
};
var d2 = i2;
var m2 = function(e3) {
  let t3 = e3.match(s2);
  if (t3 !== null)
    return c2(t3[1]);
  if (t3 = e3.match(l2), t3 !== null)
    return c2(t3[1]);
  if (t3 = e3.match(h2), t3 !== null) {
    let e4 = -1 * Number(t3[1]);
    return c2(e4);
  }
  return t3 = e3.match(u2), t3 !== null ? c2(t3[1]) : null;
};
var p2 = (() => {
  let e3 = (() => {
    if (typeof Intl == "undefined" || Intl.DateTimeFormat === void 0)
      return null;
    let e4 = Intl.DateTimeFormat();
    if (e4 === void 0 || e4.resolvedOptions === void 0)
      return null;
    let t3 = e4.resolvedOptions().timeZone;
    return t3 ? t3.toLowerCase() : null;
  })();
  return e3 === null ? "utc" : e3;
})();
var f2 = Object.keys(d2).reduce((e3, t3) => {
  let a3 = t3.split("/")[1] || "";
  return a3 = a3.replace(/_/g, " "), e3[a3] = t3, e3;
}, {});
var y3;
var g2 = (e3, t3) => {
  if (!e3)
    return p2;
  typeof e3 != "string" && console.error("Timezone must be a string - recieved: '", e3, "'\n");
  let a3 = e3.trim();
  if (a3 = a3.toLowerCase(), t3.hasOwnProperty(a3) === true)
    return a3;
  if (a3 = ((e4) => (e4 = (e4 = (e4 = (e4 = (e4 = e4.replace(/ time/g, "")).replace(/ (standard|daylight|summer)/g, "")).replace(/\b(east|west|north|south)ern/g, "$1")).replace(/\b(africa|america|australia)n/g, "$1")).replace(/\beuropean/g, "europe")).replace(/\islands/g, "island"))(a3), t3.hasOwnProperty(a3) === true)
    return a3;
  if (f2.hasOwnProperty(a3) === true)
    return f2[a3];
  if (/[0-9]/.test(a3) === true) {
    let e4 = m2(a3);
    if (e4)
      return e4;
  }
  throw new Error("Spacetime: Cannot find timezone named: '" + e3 + "'. Please enter an IANA timezone id.");
};
var b2 = (function(e3, t3) {
  t3.isLeapYear = (e4) => e4 % 4 == 0 && e4 % 100 != 0 || e4 % 400 == 0, t3.isDate = (e4) => Object.prototype.toString.call(e4) === "[object Date]" && !isNaN(e4.valueOf()), t3.isArray = (e4) => Object.prototype.toString.call(e4) === "[object Array]", t3.isObject = (e4) => Object.prototype.toString.call(e4) === "[object Object]", t3.isBoolean = (e4) => Object.prototype.toString.call(e4) === "[object Boolean]", t3.zeroPad = (e4, t4 = 2) => (e4 += "").length >= t4 ? e4 : new Array(t4 - e4.length + 1).join("0") + e4, t3.titleCase = (e4) => e4 ? e4[0].toUpperCase() + e4.substr(1) : "", t3.ordinal = (e4) => {
    let t4 = e4 % 10, a3 = e4 % 100;
    return t4 === 1 && a3 !== 11 ? e4 + "st" : t4 === 2 && a3 !== 12 ? e4 + "nd" : t4 === 3 && a3 !== 13 ? e4 + "rd" : e4 + "th";
  }, t3.toCardinal = (e4) => (e4 = (e4 = String(e4)).replace(/([0-9])(st|nd|rd|th)$/i, "$1"), parseInt(e4, 10)), t3.normalize = (e4 = "") => (e4 = (e4 = (e4 = (e4 = e4.toLowerCase().trim()).replace(/ies$/, "y")).replace(/s$/, "")).replace(/-/g, "")) === "day" || e4 === "days" ? "date" : e4 === "min" || e4 === "mins" ? "minute" : e4, t3.getEpoch = (e4) => typeof e4 == "number" ? e4 : t3.isDate(e4) ? e4.getTime() : e4.epoch ? e4.epoch : null, t3.beADate = (e4, a3) => t3.isObject(e4) === false ? a3.clone().set(e4) : e4, t3.formatTimezone = (e4, a3 = "") => {
    const n3 = e4 > 0 ? "+" : "-", r3 = Math.abs(e4);
    return `${n3}${t3.zeroPad(parseInt("" + r3, 10))}${a3}${t3.zeroPad(r3 % 1 * 60)}`;
  };
}(y3 = {exports: {}}, y3.exports), y3.exports);
b2.isLeapYear, b2.isDate, b2.isArray, b2.isObject, b2.isBoolean, b2.zeroPad, b2.titleCase, b2.ordinal, b2.toCardinal, b2.normalize, b2.getEpoch, b2.beADate, b2.formatTimezone;
var k2 = {year: new Date().getFullYear(), month: 0, date: 1};
var w22 = {parseArray: (e3, t3, a3) => {
  if (t3.length === 0)
    return e3;
  let n3 = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
  for (let r3 = 0; r3 < n3.length; r3++) {
    let o3 = t3[r3] || a3[n3[r3]] || k2[n3[r3]] || 0;
    e3 = e3[n3[r3]](o3);
  }
  return e3;
}, parseObject: (e3, t3, a3) => {
  if (Object.keys(t3).length === 0)
    return e3;
  t3 = Object.assign({}, k2, a3, t3);
  let n3 = Object.keys(t3);
  for (let r3 = 0; r3 < n3.length; r3++) {
    let o3 = n3[r3];
    if (e3[o3] === void 0 || typeof e3[o3] != "function")
      continue;
    if (t3[o3] === null || t3[o3] === void 0 || t3[o3] === "")
      continue;
    let i32 = t3[o3] || a3[o3] || k2[o3] || 0;
    e3 = e3[o3](i32);
  }
  return e3;
}, parseNumber: function(e3, t3) {
  return t3 > 0 && t3 < 25e8 && e3.silent === false && (console.warn("  - Warning: You are setting the date to January 1970."), console.warn("       -   did input seconds instead of milliseconds?")), e3.epoch = t3, e3;
}};
var v2 = function(e3) {
  return e3.epoch = Date.now(), Object.keys(e3._today || {}).forEach((t3) => {
    typeof e3[t3] == "function" && (e3 = e3[t3](e3._today[t3]));
  }), e3;
};
var z2 = {now: (e3) => v2(e3), today: (e3) => v2(e3), tonight: (e3) => e3 = (e3 = v2(e3)).hour(18), tomorrow: (e3) => e3 = (e3 = (e3 = v2(e3)).add(1, "day")).startOf("day"), yesterday: (e3) => e3 = (e3 = (e3 = v2(e3)).subtract(1, "day")).startOf("day"), christmas: (e3) => {
  let t3 = v2(e3).year();
  return e3 = e3.set([t3, 11, 25, 18, 0, 0]);
}, "new years": (e3) => {
  let t3 = v2(e3).year();
  return e3 = e3.set([t3, 11, 31, 18, 0, 0]);
}};
z2["new years eve"] = z2["new years"];
var _2 = z2;
var j2 = function(e3) {
  return e3 = (e3 = (e3 = (e3 = e3.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "")).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, "")).replace(/ +/g, " ").trim();
};
var O3 = {millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5};
O3.date = O3.day, O3.month = 25488e5, O3.week = 6048e5, O3.year = 3154e7, Object.keys(O3).forEach((e3) => {
  O3[e3 + "s"] = O3[e3];
});
var $2 = O3;
var D3 = (e3, t3, a3, n3, r3) => {
  let o3 = e3.d[a3]();
  if (o3 === t3)
    return;
  let i32 = r3 === null ? null : e3.d[r3](), s3 = e3.epoch, u3 = t3 - o3;
  e3.epoch += $2[n3] * u3, n3 === "day" && Math.abs(u3) > 28 && t3 < 28 && (e3.epoch += $2.hour), r3 !== null && i32 !== e3.d[r3]() && (e3.epoch = s3);
  const l3 = $2[n3] / 2;
  for (; e3.d[a3]() < t3; )
    e3.epoch += l3;
  for (; e3.d[a3]() > t3; )
    e3.epoch -= l3;
  r3 !== null && i32 !== e3.d[r3]() && (e3.epoch = s3);
};
var M3 = {year: {valid: (e3) => e3 > -4e3 && e3 < 4e3, walkTo: (e3, t3) => D3(e3, t3, "getFullYear", "year", null)}, month: {valid: (e3) => e3 >= 0 && e3 <= 11, walkTo: (e3, t3) => {
  let a3 = e3.d, n3 = a3.getMonth(), r3 = e3.epoch, o3 = a3.getFullYear();
  if (n3 === t3)
    return;
  let i32 = t3 - n3;
  for (e3.epoch += $2.day * (28 * i32), o3 !== e3.d.getFullYear() && (e3.epoch = r3); e3.d.getMonth() < t3; )
    e3.epoch += $2.day;
  for (; e3.d.getMonth() > t3; )
    e3.epoch -= $2.day;
}}, date: {valid: (e3) => e3 > 0 && e3 <= 31, walkTo: (e3, t3) => D3(e3, t3, "getDate", "day", "getMonth")}, hour: {valid: (e3) => e3 >= 0 && e3 < 24, walkTo: (e3, t3) => D3(e3, t3, "getHours", "hour", "getDate")}, minute: {valid: (e3) => e3 >= 0 && e3 < 60, walkTo: (e3, t3) => D3(e3, t3, "getMinutes", "minute", "getHours")}, second: {valid: (e3) => e3 >= 0 && e3 < 60, walkTo: (e3, t3) => {
  e3.epoch = e3.seconds(t3).epoch;
}}, millisecond: {valid: (e3) => e3 >= 0 && e3 < 1e3, walkTo: (e3, t3) => {
  e3.epoch = e3.milliseconds(t3).epoch;
}}};
var P3 = (e3, t3) => {
  let a3 = Object.keys(M3), n3 = e3.clone();
  for (let r3 = 0; r3 < a3.length; r3++) {
    let o3 = a3[r3], i32 = t3[o3];
    if (i32 === void 0 && (i32 = n3[o3]()), typeof i32 == "string" && (i32 = parseInt(i32, 10)), !M3[o3].valid(i32))
      return e3.epoch = null, void (e3.silent === false && console.warn("invalid " + o3 + ": " + i32));
    M3[o3].walkTo(e3, i32);
  }
};
var S3 = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
var q2 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var T3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var E2 = b2;
var N3 = {short: () => S3, long: () => q2, mapping: () => function() {
  const e3 = {sep: 8};
  for (let t3 = 0; t3 < S3.length; t3++)
    e3[S3[t3]] = t3;
  for (let t3 = 0; t3 < q2.length; t3++)
    e3[q2[t3]] = t3;
  return e3;
}(), set: (e3) => {
  S3 = e3.short || S3, q2 = e3.long || q2;
}};
var C2 = (e3, t3) => {
  if (!t3)
    return e3;
  t3 !== "Z" && t3 !== "z" || (t3 = "+0000");
  let a3 = 0;
  /^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t3) && (/:00/.test(t3) === true && (t3 = t3.replace(/:00/, "")), /:30/.test(t3) === true && (t3 = t3.replace(/:30/, ".5"))), /^[\+-]?[0-9]{4}$/.test(t3) && (t3 = t3.replace(/30$/, ".5")), a3 = parseFloat(t3), Math.abs(a3) > 100 && (a3 /= 100), a3 *= -1, a3 >= 0 && (a3 = "+" + a3);
  let n3 = "etc/gmt" + a3;
  return e3.timezones[n3] && (e3.tz = n3), e3;
};
var I3 = (e3, t3 = "") => {
  let a3 = (t3 = t3.replace(/^\s+/, "").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
  if (a3 !== null) {
    let n3 = Number(a3[1]);
    if (n3 < 0 || n3 > 24)
      return e3.startOf("day");
    let r3 = Number(a3[2]);
    if (a3[2].length < 2 || r3 < 0 || r3 > 59)
      return e3.startOf("day");
    a3[4] > 999 && (a3[4] = parseInt(("" + a3[4]).substring(0, 3), 10)), e3 = (e3 = (e3 = (e3 = e3.hour(n3)).minute(r3)).seconds(a3[3] || 0)).millisecond(a3[4] || 0);
    let o3 = t3.match(/[\b0-9] ?(am|pm)\b/);
    return o3 !== null && o3[1] && (e3 = e3.ampm(o3[1])), e3;
  }
  if (a3 = t3.match(/([0-9]+) ?(am|pm)/), a3 !== null && a3[1]) {
    let t4 = Number(a3[1]);
    return t4 > 12 || t4 < 1 ? e3.startOf("day") : e3 = (e3 = (e3 = e3.hour(a3[1] || 0)).ampm(a3[2])).startOf("hour");
  }
  return e3 = e3.startOf("day");
};
var Y3 = E2.isLeapYear;
var A2 = N3.mapping();
var x2 = P3;
var L2 = {parseOffset: C2, parseTime: I3, parseYear: (e3 = "", t3) => {
  if (e3 = e3.trim(), /^'[0-9][0-9]$/.test(e3) === true) {
    let t4 = Number(e3.replace(/'/, ""));
    return t4 > 50 ? 1900 + t4 : 2e3 + t4;
  }
  let a3 = parseInt(e3, 10);
  return !a3 && t3 && (a3 = t3.year), a3 = a3 || new Date().getFullYear(), a3;
}, parseMonth: function(e3) {
  return e3 = e3.toLowerCase().trim(), A2[e3];
}, validate: (e3) => {
  if (T3.hasOwnProperty(e3.month) !== true)
    return false;
  if (e3.month === 1)
    return !!(Y3(e3.year) && e3.date <= 29) || e3.date <= 28;
  let t3 = T3[e3.month] || 0;
  return e3.date <= t3;
}};
var {validate: F3, parseTime: B3, parseYear: Z3, parseMonth: H3, parseOffset: Q2} = L2;
var G3 = [{reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i, parse: (e3, t3) => {
  let a3 = {year: t3[1], month: parseInt(t3[2], 10) - 1, date: t3[3]};
  return F3(a3) === false ? (e3.epoch = null, e3) : (Q2(e3, t3[5]), x2(e3, a3), e3 = B3(e3, t3[4]));
}}, {reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a3 = {year: t3[1], month: parseInt(t3[2], 10) - 1, date: parseInt(t3[3], 10)};
  return a3.month >= 12 && (a3.date = parseInt(t3[2], 10), a3.month = parseInt(t3[3], 10) - 1), F3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = B3(e3, t3[4]));
}}, {reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a3 = {year: Z3(t3[1], e3._today), month: H3(t3[2]), date: E2.toCardinal(t3[3] || "")};
  return F3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = B3(e3, t3[4]));
}}];
var {validate: U3, parseTime: V3, parseYear: W3, parseMonth: J2} = L2;
var K2 = [{reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e3, t3) => {
  let a3 = parseInt(t3[1], 10) - 1, n3 = parseInt(t3[2], 10);
  (e3.british || a3 >= 12) && (n3 = parseInt(t3[1], 10), a3 = parseInt(t3[2], 10) - 1);
  let r3 = {date: n3, month: a3, year: W3(t3[3], e3._today) || new Date().getFullYear()};
  return U3(r3) === false ? (e3.epoch = null, e3) : (x2(e3, r3), e3 = V3(e3, t3[4]));
}}, {reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a3 = {year: W3(t3[3], e3._today), month: J2(t3[1]), date: E2.toCardinal(t3[2] || "")};
  return U3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = V3(e3, t3[4]));
}}, {reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i, parse: (e3, t3) => {
  let a3 = {year: W3(t3[3], e3._today), month: J2(t3[1]), date: E2.toCardinal(t3[2] || "")};
  return U3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = V3(e3, t3[4]));
}}, {reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i, parse: (e3, t3) => {
  let a3 = {year: W3(t3[5], e3._today), month: J2(t3[1]), date: E2.toCardinal(t3[2] || "")};
  return U3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = V3(e3, t3[3]));
}}];
var {validate: R3, parseTime: X3, parseYear: ee3, parseMonth: te3} = L2;
var ae3 = [{reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i, parse: (e3, t3) => {
  let a3 = {year: ee3(t3[3], e3._today), month: te3(t3[2]), date: E2.toCardinal(t3[1] || "")};
  return R3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = X3(e3, t3[4]));
}}, {reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e3, t3) => {
  let a3 = {year: ee3(t3[3], e3._today), month: te3(t3[2]), date: E2.toCardinal(t3[1])};
  return a3.month && R3(a3) !== false ? (x2(e3, a3), e3 = X3(e3, t3[4])) : (e3.epoch = null, e3);
}}, {reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a3 = {date: Number(t3[1]), month: te3(t3[2]), year: Number(t3[3])};
  return R3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = e3.startOf("day"), e3 = X3(e3, t3[4]));
}}];
var {validate: ne3, parseTime: re3, parseYear: oe3, parseMonth: ie3} = L2;
var se3 = [].concat(G3, K2, ae3, [{reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i, parse: (e3, t3) => {
  let a3 = {year: t3[1], month: parseInt(t3[2], 10) - 1, date: 1};
  return ne3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = re3(e3, t3[4]));
}}, {reg: /^([a-z]+) ([0-9]{4})$/i, parse: (e3, t3) => {
  let a3 = {year: oe3(t3[2], e3._today), month: ie3(t3[1]), date: e3._today.date || 1};
  return ne3(a3) === false ? (e3.epoch = null, e3) : (x2(e3, a3), e3 = re3(e3, t3[4]));
}}, {reg: /^(q[0-9])( of)?( [0-9]{4})?/i, parse: (e3, t3) => {
  let a3 = t3[1] || "";
  e3 = e3.quarter(a3);
  let n3 = t3[3] || "";
  return n3 && (n3 = n3.trim(), e3 = e3.year(n3)), e3;
}}, {reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i, parse: (e3, t3) => {
  let a3 = t3[1] || "";
  e3 = e3.season(a3);
  let n3 = t3[3] || "";
  return n3 && (n3 = n3.trim(), e3 = e3.year(n3)), e3;
}}, {reg: /^[0-9,]+ ?b\.?c\.?$/i, parse: (e3, t3) => {
  let a3 = t3[0] || "";
  a3 = a3.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
  let n3 = new Date(), r3 = {year: parseInt(a3.trim(), 10), month: n3.getMonth(), date: n3.getDate()};
  return ne3(r3) === false ? (e3.epoch = null, e3) : (x2(e3, r3), e3 = re3(e3));
}}, {reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i, parse: (e3, t3) => {
  let a3 = t3[0] || "";
  a3 = a3.replace(/,/g, "");
  let n3 = new Date(), r3 = {year: parseInt(a3.trim(), 10), month: n3.getMonth(), date: n3.getDate()};
  return ne3(r3) === false ? (e3.epoch = null, e3) : (x2(e3, r3), e3 = re3(e3));
}}, {reg: /^[0-9]{4}( ?a\.?d\.?)?$/i, parse: (e3, t3) => {
  let a3 = e3._today;
  a3.month && !a3.date && (a3.date = 1);
  let n3 = new Date(), r3 = {year: oe3(t3[0], a3), month: a3.month || n3.getMonth(), date: a3.date || n3.getDate()};
  return ne3(r3) === false ? (e3.epoch = null, e3) : (x2(e3, r3), e3 = re3(e3));
}}]);
var ue3 = w22;
var le3 = _2;
var he3 = j2;
var ce3 = function(e3, t3, a3) {
  for (let n3 = 0; n3 < se3.length; n3++) {
    let r3 = t3.match(se3[n3].reg);
    if (r3) {
      let t4 = se3[n3].parse(e3, r3, a3);
      if (t4 !== null && t4.isValid())
        return t4;
    }
  }
  return e3.silent === false && console.warn("Warning: couldn't parse date-string: '" + t3 + "'"), e3.epoch = null, e3;
};
var {parseArray: de3, parseObject: me3, parseNumber: pe3} = ue3;
var fe3 = {year: new Date().getFullYear(), month: 0, date: 1};
var ye2 = (e3, t3) => {
  let a3 = e3._today || fe3;
  if (typeof t3 == "number")
    return pe3(e3, t3);
  if (e3.epoch = Date.now(), e3._today && E2.isObject(e3._today) && Object.keys(e3._today).length > 0) {
    let t4 = me3(e3, a3, fe3);
    t4.isValid() && (e3.epoch = t4.epoch);
  }
  return t3 == null || t3 === "" ? e3 : E2.isDate(t3) === true ? (e3.epoch = t3.getTime(), e3) : E2.isArray(t3) === true ? e3 = de3(e3, t3, a3) : E2.isObject(t3) === true ? t3.epoch ? (e3.epoch = t3.epoch, e3.tz = t3.tz, e3) : e3 = me3(e3, t3, a3) : typeof t3 != "string" ? e3 : (t3 = he3(t3), le3.hasOwnProperty(t3) === true ? e3 = le3[t3](e3) : ce3(e3, t3));
};
var ge3 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var be3 = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var ke3 = true;
var we3 = {short: () => ge3, long: () => be3, set: (e3) => {
  ge3 = e3.short || ge3, be3 = e3.long || be3;
}, aliases: {mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6, su: 7, tues: 2, weds: 3, wedn: 3, thur: 4, thurs: 4}};
var ve3 = {useTitleCase: () => ke3, set: (e3) => {
  ke3 = e3;
}};
var ze2 = (e3) => {
  let t3 = e3.timezone().current.offset;
  return t3 ? E2.formatTimezone(t3, ":") : "Z";
};
var _e2 = (e3) => ve3.useTitleCase() ? E2.titleCase(e3) : e3;
var je3 = {day: (e3) => _e2(e3.dayName()), "day-short": (e3) => _e2(we3.short()[e3.day()]), "day-number": (e3) => e3.day(), "day-ordinal": (e3) => E2.ordinal(e3.day()), "day-pad": (e3) => E2.zeroPad(e3.day()), date: (e3) => e3.date(), "date-ordinal": (e3) => E2.ordinal(e3.date()), "date-pad": (e3) => E2.zeroPad(e3.date()), month: (e3) => _e2(e3.monthName()), "month-short": (e3) => _e2(N3.short()[e3.month()]), "month-number": (e3) => e3.month(), "month-ordinal": (e3) => E2.ordinal(e3.month()), "month-pad": (e3) => E2.zeroPad(e3.month()), "iso-month": (e3) => E2.zeroPad(e3.month() + 1), year: (e3) => {
  let t3 = e3.year();
  return t3 > 0 ? t3 : (t3 = Math.abs(t3), t3 + " BC");
}, "year-short": (e3) => {
  let t3 = e3.year();
  return t3 > 0 ? "'" + String(e3.year()).substr(2, 4) : (t3 = Math.abs(t3), t3 + " BC");
}, "iso-year": (e3) => {
  let t3 = e3.year(), a3 = t3 < 0, n3 = E2.zeroPad(Math.abs(t3), 4);
  return a3 && (n3 = E2.zeroPad(n3, 6), n3 = "-" + n3), n3;
}, time: (e3) => e3.time(), "time-24": (e3) => `${e3.hour24()}:${E2.zeroPad(e3.minute())}`, hour: (e3) => e3.hour12(), "hour-pad": (e3) => E2.zeroPad(e3.hour12()), "hour-24": (e3) => e3.hour24(), "hour-24-pad": (e3) => E2.zeroPad(e3.hour24()), minute: (e3) => e3.minute(), "minute-pad": (e3) => E2.zeroPad(e3.minute()), second: (e3) => e3.second(), "second-pad": (e3) => E2.zeroPad(e3.second()), millisecond: (e3) => e3.millisecond(), "millisecond-pad": (e3) => E2.zeroPad(e3.millisecond(), 3), ampm: (e3) => e3.ampm(), quarter: (e3) => "Q" + e3.quarter(), season: (e3) => e3.season(), era: (e3) => e3.era(), json: (e3) => e3.json(), timezone: (e3) => e3.timezone().name, offset: (e3) => ze2(e3), numeric: (e3) => `${e3.year()}/${E2.zeroPad(e3.month() + 1)}/${E2.zeroPad(e3.date())}`, "numeric-us": (e3) => `${E2.zeroPad(e3.month() + 1)}/${E2.zeroPad(e3.date())}/${e3.year()}`, "numeric-uk": (e3) => `${E2.zeroPad(e3.date())}/${E2.zeroPad(e3.month() + 1)}/${e3.year()}`, "mm/dd": (e3) => `${E2.zeroPad(e3.month() + 1)}/${E2.zeroPad(e3.date())}`, iso: (e3) => `${e3.format("iso-year")}-${E2.zeroPad(e3.month() + 1)}-${E2.zeroPad(e3.date())}T${E2.zeroPad(e3.h24())}:${E2.zeroPad(e3.minute())}:${E2.zeroPad(e3.second())}.${E2.zeroPad(e3.millisecond(), 3)}${ze2(e3)}`, "iso-short": (e3) => {
  let t3 = E2.zeroPad(e3.month() + 1), a3 = E2.zeroPad(e3.date());
  var n3;
  return `${(n3 = e3.year()) >= 0 ? E2.zeroPad(n3, 4) : (n3 = Math.abs(n3), "-" + E2.zeroPad(n3, 4))}-${t3}-${a3}`;
}, "iso-utc": (e3) => new Date(e3.epoch).toISOString(), nice: (e3) => `${N3.short()[e3.month()]} ${E2.ordinal(e3.date())}, ${e3.time()}`, "nice-24": (e3) => `${N3.short()[e3.month()]} ${E2.ordinal(e3.date())}, ${e3.hour24()}:${E2.zeroPad(e3.minute())}`, "nice-year": (e3) => `${N3.short()[e3.month()]} ${E2.ordinal(e3.date())}, ${e3.year()}`, "nice-day": (e3) => `${we3.short()[e3.day()]} ${_e2(N3.short()[e3.month()])} ${E2.ordinal(e3.date())}`, "nice-full": (e3) => `${e3.dayName()} ${_e2(e3.monthName())} ${E2.ordinal(e3.date())}, ${e3.time()}`, "nice-full-24": (e3) => `${e3.dayName()} ${_e2(e3.monthName())} ${E2.ordinal(e3.date())}, ${e3.hour24()}:${E2.zeroPad(e3.minute())}`};
var Oe3 = {"day-name": "day", "month-name": "month", "iso 8601": "iso", "time-h24": "time-24", "time-12": "time", "time-h12": "time", tz: "timezone", "day-num": "day-number", "month-num": "month-number", "month-iso": "iso-month", "year-iso": "iso-year", "nice-short": "nice", "nice-short-24": "nice-24", mdy: "numeric-us", dmy: "numeric-uk", ymd: "numeric", "yyyy/mm/dd": "numeric", "mm/dd/yyyy": "numeric-us", "dd/mm/yyyy": "numeric-us", "little-endian": "numeric-uk", "big-endian": "numeric", "day-nice": "nice-day"};
Object.keys(Oe3).forEach((e3) => je3[e3] = je3[Oe3[e3]]);
var $e3 = (e3, t3 = "") => {
  if (e3.isValid() !== true)
    return "";
  if (je3.hasOwnProperty(t3)) {
    let a3 = je3[t3](e3) || "";
    return t3 !== "json" && (a3 = String(a3), t3 !== "ampm" && (a3 = _e2(a3))), a3;
  }
  if (t3.indexOf("{") !== -1) {
    let a3 = /\{(.+?)\}/g;
    return t3 = t3.replace(a3, (t4, a4) => {
      if (a4 = a4.toLowerCase().trim(), je3.hasOwnProperty(a4)) {
        let t5 = String(je3[a4](e3));
        return a4 !== "ampm" ? _e2(t5) : t5;
      }
      return "";
    });
  }
  return e3.format("iso-short");
};
var De3 = E2.zeroPad;
var Me3 = E2.formatTimezone;
var Pe3 = {G: (e3) => e3.era(), GG: (e3) => e3.era(), GGG: (e3) => e3.era(), GGGG: (e3) => e3.era() === "AD" ? "Anno Domini" : "Before Christ", y: (e3) => e3.year(), yy: (e3) => parseInt(String(e3.year()).substr(2, 4), 10), yyy: (e3) => e3.year(), yyyy: (e3) => e3.year(), yyyyy: (e3) => "0" + e3.year(), Q: (e3) => e3.quarter(), QQ: (e3) => e3.quarter(), QQQ: (e3) => e3.quarter(), QQQQ: (e3) => e3.quarter(), M: (e3) => e3.month() + 1, MM: (e3) => De3(e3.month() + 1), MMM: (e3) => e3.format("month-short"), MMMM: (e3) => e3.format("month"), w: (e3) => e3.week(), ww: (e3) => De3(e3.week()), d: (e3) => e3.date(), dd: (e3) => De3(e3.date()), D: (e3) => e3.dayOfYear(), DD: (e3) => De3(e3.dayOfYear()), DDD: (e3) => De3(e3.dayOfYear(), 3), E: (e3) => e3.format("day-short"), EE: (e3) => e3.format("day-short"), EEE: (e3) => e3.format("day-short"), EEEE: (e3) => e3.format("day"), EEEEE: (e3) => e3.format("day")[0], e: (e3) => e3.day(), ee: (e3) => e3.day(), eee: (e3) => e3.format("day-short"), eeee: (e3) => e3.format("day"), eeeee: (e3) => e3.format("day")[0], a: (e3) => e3.ampm().toUpperCase(), aa: (e3) => e3.ampm().toUpperCase(), aaa: (e3) => e3.ampm().toUpperCase(), aaaa: (e3) => e3.ampm().toUpperCase(), h: (e3) => e3.h12(), hh: (e3) => De3(e3.h12()), H: (e3) => e3.hour(), HH: (e3) => De3(e3.hour()), m: (e3) => e3.minute(), mm: (e3) => De3(e3.minute()), s: (e3) => e3.second(), ss: (e3) => De3(e3.second()), SSS: (e3) => De3(e3.millisecond(), 3), A: (e3) => e3.epoch - e3.startOf("day").epoch, z: (e3) => e3.timezone().name, zz: (e3) => e3.timezone().name, zzz: (e3) => e3.timezone().name, zzzz: (e3) => e3.timezone().name, Z: (e3) => Me3(e3.timezone().current.offset), ZZ: (e3) => Me3(e3.timezone().current.offset), ZZZ: (e3) => Me3(e3.timezone().current.offset), ZZZZ: (e3) => Me3(e3.timezone().current.offset, ":")};
var Se3 = (e3, t3, a3) => {
  let n3 = e3, r3 = t3;
  for (let o3 = 0; o3 < a3; o3 += 1)
    Pe3[n3] = Pe3[r3], n3 += e3, r3 += t3;
};
Se3("q", "Q", 4), Se3("L", "M", 4), Se3("Y", "y", 4), Se3("c", "e", 4), Se3("k", "H", 2), Se3("K", "h", 2), Se3("S", "s", 2), Se3("v", "z", 4), Se3("V", "Z", 4);
var qe3 = (e3, t3) => {
  let a3 = t3.split("");
  return a3 = function(e4) {
    for (let t4 = 0; t4 < e4.length; t4 += 1)
      if (e4[t4] === "'")
        for (let a4 = t4 + 1; a4 < e4.length; a4 += 1) {
          if (e4[a4] && (e4[t4] += e4[a4]), e4[a4] === "'") {
            e4[a4] = null;
            break;
          }
          e4[a4] = null;
        }
    return e4.filter((e5) => e5);
  }(a3), a3 = function(e4) {
    for (let t4 = 0; t4 < e4.length; t4 += 1) {
      let a4 = e4[t4];
      for (let n3 = t4 + 1; n3 < e4.length && e4[n3] === a4; n3 += 1)
        e4[t4] += e4[n3], e4[n3] = null;
    }
    return (e4 = e4.filter((e5) => e5)).map((e5) => (e5 === "''" && (e5 = "'"), e5));
  }(a3), a3.reduce((t4, a4) => (Pe3[a4] !== void 0 ? t4 += Pe3[a4](e3) || "" : (/^'.{1,}'$/.test(a4) && (a4 = a4.replace(/'/g, "")), t4 += a4), t4), "");
};
var Te3 = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"];
var Ee3 = function(e3, t3) {
  let a3 = e3.clone().startOf(t3), n3 = e3.clone().endOf(t3).epoch - a3.epoch, r3 = (e3.epoch - a3.epoch) / n3;
  return parseFloat(r3.toFixed(2));
};
var Ne3 = (e3, t3) => {
  if (t3)
    return t3 = E2.normalize(t3), Ee3(e3, t3);
  let a3 = {};
  return Te3.forEach((t4) => {
    a3[t4] = Ee3(e3, t4);
  }), a3;
};
var Ce3 = (e3, t3) => {
  let a3 = e3.progress();
  return (t3 = E2.normalize(t3)) === "quarterhour" && (t3 = "quarterHour"), a3[t3] !== void 0 ? (a3[t3] > 0.5 && (e3 = e3.add(1, t3)), e3 = e3.startOf(t3)) : e3.silent === false && console.warn("no known unit '" + t3 + "'"), e3;
};
var Ie3 = (e3, t3, a3) => {
  let n3 = 0;
  for (e3 = e3.clone(); e3.isBefore(t3); )
    e3 = e3.add(1, a3), n3 += 1;
  return e3.isAfter(t3, a3) && (n3 -= 1), n3;
};
var Ye3 = (e3, t3, a3) => e3.isBefore(t3) ? Ie3(e3, t3, a3) : -1 * Ie3(t3, e3, a3);
var Ae3 = function(e3, t3) {
  let a3 = t3.epoch - e3.epoch, n3 = {milliseconds: a3, seconds: parseInt(a3 / 1e3, 10)};
  n3.minutes = parseInt(n3.seconds / 60, 10), n3.hours = parseInt(n3.minutes / 60, 10);
  let r3 = e3.clone();
  return n3.years = ((e4, t4) => {
    let a4 = t4.year() - e4.year();
    return (e4 = e4.year(t4.year())).isAfter(t4) && (a4 -= 1), a4;
  })(r3, t3), r3 = e3.add(n3.years, "year"), n3.months = 12 * n3.years, r3 = e3.add(n3.months, "month"), n3.months += Ye3(r3, t3, "month"), n3.weeks = 52 * n3.years, r3 = e3.add(n3.weeks, "week"), n3.weeks += Ye3(r3, t3, "week"), n3.days = 7 * n3.weeks, r3 = e3.add(n3.days, "day"), n3.days += Ye3(r3, t3, "day"), n3;
};
var xe2 = function(e3, t3, a3) {
  t3 = E2.beADate(t3, e3);
  let n3 = false;
  if (e3.isAfter(t3)) {
    let a4 = e3;
    e3 = t3, t3 = a4, n3 = true;
  }
  let r3 = Ae3(e3, t3);
  return n3 && (r3 = function(e4) {
    return Object.keys(e4).forEach((t4) => {
      e4[t4] *= -1;
    }), e4;
  }(r3)), a3 ? (a3 = E2.normalize(a3), /s$/.test(a3) !== true && (a3 += "s"), a3 === "dates" && (a3 = "days"), r3[a3]) : r3;
};
var Le3 = {months: {almost: 10, over: 4}, days: {almost: 25, over: 10}, hours: {almost: 20, over: 8}, minutes: {almost: 50, over: 20}, seconds: {almost: 50, over: 20}};
function Fe3(e3, t3) {
  return e3 === 1 && (t3 = t3.slice(0, -1)), e3 + " " + t3;
}
var Be3 = (e3, t3) => {
  const a3 = function(e4, t4) {
    const a4 = e4.isBefore(t4), n4 = a4 ? t4 : e4;
    let r4 = a4 ? e4 : t4;
    r4 = r4.clone();
    const o4 = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
    return Object.keys(o4).forEach((e5) => {
      if (r4.isSame(n4, e5))
        return;
      let t5 = r4.diff(n4, e5);
      r4 = r4.add(t5, e5), o4[e5] = t5;
    }), a4 && Object.keys(o4).forEach((e5) => {
      o4[e5] !== 0 && (o4[e5] *= -1);
    }), o4;
  }(e3, t3 = E2.beADate(t3, e3));
  if (Object.keys(a3).every((e4) => !a3[e4]) === true)
    return {diff: a3, rounded: "now", qualified: "now", precise: "now"};
  let n3, r3, o3, i32 = [];
  return Object.keys(a3).forEach((e4, t4, o4) => {
    const s3 = Math.abs(a3[e4]);
    if (s3 === 0)
      return;
    const u3 = Fe3(s3, e4);
    if (i32.push(u3), !n3) {
      if (n3 = r3 = u3, t4 > 4)
        return;
      const i4 = o4[t4 + 1], l3 = Math.abs(a3[i4]);
      l3 > Le3[i4].almost ? (n3 = Fe3(s3 + 1, e4), r3 = "almost " + n3) : l3 > Le3[i4].over && (r3 = "over " + u3);
    }
  }), o3 = i32.splice(0, 2).join(", "), e3.isAfter(t3) === true ? (n3 += " ago", r3 += " ago", o3 += " ago") : (n3 = "in " + n3, r3 = "in " + r3, o3 = "in " + o3), {diff: a3, rounded: n3, qualified: r3, precise: o3};
};
var Ze3 = {north: [["spring", 2, 1], ["summer", 5, 1], ["fall", 8, 1], ["autumn", 8, 1], ["winter", 11, 1]], south: [["fall", 2, 1], ["autumn", 2, 1], ["winter", 5, 1], ["spring", 8, 1], ["summer", 11, 1]]};
var He3 = [null, [0, 1], [3, 1], [6, 1], [9, 1]];
var Qe3 = {minute: (e3) => (x2(e3, {second: 0, millisecond: 0}), e3), quarterhour: (e3) => {
  let t3 = e3.minutes();
  return e3 = t3 >= 45 ? e3.minutes(45) : t3 >= 30 ? e3.minutes(30) : t3 >= 15 ? e3.minutes(15) : e3.minutes(0), x2(e3, {second: 0, millisecond: 0}), e3;
}, hour: (e3) => (x2(e3, {minute: 0, second: 0, millisecond: 0}), e3), day: (e3) => (x2(e3, {hour: 0, minute: 0, second: 0, millisecond: 0}), e3), week: (e3) => {
  let t3 = e3.clone();
  return (e3 = e3.day(e3._weekStart)).isAfter(t3) && (e3 = e3.subtract(1, "week")), x2(e3, {hour: 0, minute: 0, second: 0, millisecond: 0}), e3;
}, month: (e3) => (x2(e3, {date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}), e3), quarter: (e3) => {
  let t3 = e3.quarter();
  return He3[t3] && x2(e3, {month: He3[t3][0], date: He3[t3][1], hour: 0, minute: 0, second: 0, millisecond: 0}), e3;
}, season: (e3) => {
  let t3 = e3.season(), a3 = "north";
  e3.hemisphere() === "South" && (a3 = "south");
  for (let n3 = 0; n3 < Ze3[a3].length; n3++)
    if (Ze3[a3][n3][0] === t3) {
      let r3 = e3.year();
      return t3 === "winter" && e3.month() < 3 && (r3 -= 1), x2(e3, {year: r3, month: Ze3[a3][n3][1], date: Ze3[a3][n3][2], hour: 0, minute: 0, second: 0, millisecond: 0}), e3;
    }
  return e3;
}, year: (e3) => (x2(e3, {month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0}), e3), decade: (e3) => {
  let t3 = (e3 = e3.startOf("year")).year(), a3 = 10 * parseInt(t3 / 10, 10);
  return e3 = e3.year(a3);
}, century: (e3) => {
  let t3 = (e3 = e3.startOf("year")).year(), a3 = 100 * parseInt(t3 / 100, 10);
  return e3 = e3.year(a3);
}};
Qe3.date = Qe3.day;
var Ge3 = g2;
var Ue3 = $e3;
var Ve2 = qe3;
var We2 = Ne3;
var Je3 = Ce3;
var Ke3 = xe2;
var Re3 = Be3;
var Xe3 = {startOf: (e3, t3) => {
  let a3 = e3.clone();
  return t3 = E2.normalize(t3), Qe3[t3] ? Qe3[t3](a3) : t3 === "summer" || t3 === "winter" ? (a3 = a3.season(t3), Qe3.season(a3)) : a3;
}, endOf: (e3, t3) => {
  let a3 = e3.clone();
  return t3 = E2.normalize(t3), Qe3[t3] ? (a3 = Qe3[t3](a3), a3 = a3.add(1, t3), a3 = a3.subtract(1, "millisecond"), a3) : a3;
}};
var et2 = function(e3, t3 = "", a3) {
  if (!t3 || !a3)
    return [];
  if (t3 = E2.normalize(t3), a3 = e3.clone().set(a3), e3.isAfter(a3)) {
    let t4 = e3;
    e3 = a3, a3 = t4;
  }
  let n3 = e3.clone();
  !function(e4) {
    return !!we3.short().find((t4) => t4 === e4) || !!we3.long().find((t4) => t4 === e4);
  }(t3) ? n3 = n3.next(t3) : (n3 = n3.next(t3), t3 = "week");
  let r3 = [];
  for (; n3.isBefore(a3); )
    r3.push(n3), n3 = n3.add(1, t3);
  return r3;
};
var tt2 = (e3) => {
  let a3 = e3.timezones, n3 = e3.tz;
  if (a3.hasOwnProperty(n3) === false && (n3 = Ge3(e3.tz, a3)), n3 === null)
    return e3.silent === false && console.warn("Warn: could not find given or local timezone - '" + e3.tz + "'"), {current: {epochShift: 0}};
  let r3 = a3[n3], o3 = {name: (i32 = n3, i32 = (i32 = (i32 = i32[0].toUpperCase() + i32.substr(1)).replace(/\/gmt/, "/GMT")).replace(/[\/_]([a-z])/gi, (e4) => e4.toUpperCase())), hasDst: Boolean(r3.dst), default_offset: r3.offset, hemisphere: r3.hem === "s" ? "South" : "North", current: {}};
  var i32, s3;
  if (o3.hasDst) {
    let e4 = (s3 = r3.dst) ? s3.split("->") : [];
    o3.change = {start: e4[0], back: e4[1]};
  }
  let u3 = r3.offset, l3 = u3;
  return o3.hasDst === true && (l3 = o3.hemisphere === "North" ? u3 - 1 : r3.offset + 1), o3.hasDst === false ? (o3.current.offset = u3, o3.current.isDST = false) : t2(e3.epoch, o3.change.start, o3.change.back, u3, l3) === true ? (o3.current.offset = u3, o3.current.isDST = o3.hemisphere === "North") : (o3.current.offset = l3, o3.current.isDST = o3.hemisphere === "South"), o3;
};
var at2 = ye2;
var nt2 = ["century", "decade", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"];
var rt2 = {set: function(e3, t3) {
  let a3 = this.clone();
  return a3 = at2(a3, e3, null), t3 && (this.tz = Ge3(t3)), a3;
}, timezone: function() {
  return tt2(this);
}, isDST: function() {
  return tt2(this).current.isDST;
}, hasDST: function() {
  return tt2(this).hasDst;
}, offset: function() {
  return 60 * tt2(this).current.offset;
}, hemisphere: function() {
  return tt2(this).hemisphere;
}, format: function(e3) {
  return Ue3(this, e3);
}, unixFmt: function(e3) {
  return Ve2(this, e3);
}, startOf: function(e3) {
  return Xe3.startOf(this, e3);
}, endOf: function(e3) {
  return Xe3.endOf(this, e3);
}, leapYear: function() {
  let e3 = this.year();
  return E2.isLeapYear(e3);
}, progress: function(e3) {
  return We2(this, e3);
}, nearest: function(e3) {
  return Je3(this, e3);
}, diff: function(e3, t3) {
  return Ke3(this, e3, t3);
}, since: function(e3) {
  return e3 || (e3 = this.clone().set()), Re3(this, e3);
}, next: function(e3) {
  return this.add(1, e3).startOf(e3);
}, last: function(e3) {
  return this.subtract(1, e3).startOf(e3);
}, isValid: function() {
  return !(!this.epoch && this.epoch !== 0) && !isNaN(this.d.getTime());
}, goto: function(e3) {
  let t3 = this.clone();
  return t3.tz = Ge3(e3, t3.timezones), t3;
}, every: function(e3, t3) {
  if (typeof e3 == "object" && typeof t3 == "string") {
    let a3 = t3;
    t3 = e3, e3 = a3;
  }
  return et2(this, e3, t3);
}, isAwake: function() {
  let e3 = this.hour();
  return !(e3 < 8 || e3 > 22);
}, isAsleep: function() {
  return !this.isAwake();
}, daysInMonth: function() {
  switch (this.month()) {
    case 0:
      return 31;
    case 1:
      return this.leapYear() ? 29 : 28;
    case 2:
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 30;
    case 11:
      return 31;
    default:
      throw new Error("Invalid Month state.");
  }
}, log: function() {
  return console.log(""), console.log(Ue3(this, "nice-short")), this;
}, logYear: function() {
  return console.log(""), console.log(Ue3(this, "full-short")), this;
}, json: function() {
  return nt2.reduce((e3, t3) => (e3[t3] = this[t3](), e3), {});
}, debug: function() {
  let e3 = this.timezone(), t3 = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
  return t3 += "\n     - " + this.format("time"), console.log("\n\n", t3 + "\n     - " + e3.name + " (" + e3.current.offset + ")"), this;
}, from: function(e3) {
  return (e3 = this.clone().set(e3)).since(this);
}, fromNow: function() {
  return this.clone().set(Date.now()).since(this);
}, weekStart: function(e3) {
  if (typeof e3 == "number")
    return this._weekStart = e3, this;
  if (typeof e3 == "string") {
    e3 = e3.toLowerCase().trim();
    let t3 = we3.short().indexOf(e3);
    t3 === -1 && (t3 = we3.long().indexOf(e3)), t3 === -1 && (t3 = 1), this._weekStart = t3;
  } else
    console.warn("Spacetime Error: Cannot understand .weekStart() input:", e3);
  return this;
}};
rt2.inDST = rt2.isDST, rt2.round = rt2.nearest, rt2.each = rt2.every;
var ot2 = rt2;
var it2 = E2.isLeapYear;
var st2 = (e3) => (typeof e3 == "string" && (e3 = parseInt(e3, 10)), e3);
var ut2 = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
var lt2 = (e3, t3, a3) => {
  let n3 = ut2.indexOf(a3), r3 = ut2.slice(n3, ut2.length);
  for (let a4 = 0; a4 < r3.length; a4++) {
    let n4 = t3[r3[a4]]();
    e3[r3[a4]](n4);
  }
  return e3;
};
var ht2 = function(e3, t3, a3, n3) {
  return a3 === true && e3.isBefore(t3) ? e3 = e3.add(1, n3) : a3 === false && e3.isAfter(t3) && (e3 = e3.minus(1, n3)), e3;
};
var ct2 = {milliseconds: (e3, t3) => {
  t3 = st2(t3);
  let a3 = e3.millisecond() - t3;
  return e3.epoch - a3;
}, seconds: (e3, t3, a3) => {
  t3 = st2(t3);
  let n3 = e3.clone(), r3 = (e3.second() - t3) * $2.second;
  return e3.epoch = e3.epoch - r3, (e3 = ht2(e3, n3, a3, "minute")).epoch;
}, minutes: (e3, t3, a3) => {
  t3 = st2(t3);
  let n3 = e3.clone(), r3 = (e3.minute() - t3) * $2.minute;
  return e3.epoch -= r3, lt2(e3, n3, "second"), (e3 = ht2(e3, n3, a3, "hour")).epoch;
}, hours: (e3, t3, a3) => {
  (t3 = st2(t3)) >= 24 ? t3 = 24 : t3 < 0 && (t3 = 0);
  let n3 = e3.clone(), r3 = e3.hour() - t3, o3 = r3 * $2.hour;
  return e3.epoch -= o3, e3.date() !== n3.date() && (e3 = n3.clone(), r3 > 1 && (r3 -= 1), r3 < 1 && (r3 += 1), o3 = r3 * $2.hour, e3.epoch -= o3), x2(e3, {hour: t3}), lt2(e3, n3, "minute"), (e3 = ht2(e3, n3, a3, "day")).epoch;
}, time: (e3, t3, a3) => {
  let n3 = t3.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
  if (!n3) {
    if (n3 = t3.match(/([0-9]{1,2}) ?(am|pm)/), !n3)
      return e3.epoch;
    n3.splice(2, 0, "0"), n3.splice(3, 0, "");
  }
  let r3 = false, o3 = parseInt(n3[1], 10), i32 = parseInt(n3[2], 10);
  i32 >= 60 && (i32 = 59), o3 > 12 && (r3 = true), r3 === false && (n3[4] === "am" && o3 === 12 && (o3 = 0), n3[4] === "pm" && o3 < 12 && (o3 += 12)), n3[3] = n3[3] || "", n3[3] = n3[3].replace(/:/, "");
  let s3 = parseInt(n3[3], 10) || 0, u3 = e3.clone();
  return e3 = (e3 = (e3 = (e3 = e3.hour(o3)).minute(i32)).second(s3)).millisecond(0), (e3 = ht2(e3, u3, a3, "day")).epoch;
}, date: (e3, t3, a3) => {
  if ((t3 = st2(t3)) > 28) {
    let a4 = e3.month(), n4 = T3[a4];
    a4 === 1 && t3 === 29 && it2(e3.year()) && (n4 = 29), t3 > n4 && (t3 = n4);
  }
  t3 <= 0 && (t3 = 1);
  let n3 = e3.clone();
  return x2(e3, {date: t3}), (e3 = ht2(e3, n3, a3, "month")).epoch;
}, month: (e3, t3, a3) => {
  typeof t3 == "string" && (t3 = N3.mapping()[t3.toLowerCase()]), (t3 = st2(t3)) >= 12 && (t3 = 11), t3 <= 0 && (t3 = 0);
  let n3 = e3.date();
  n3 > T3[t3] && (n3 = T3[t3]);
  let r3 = e3.clone();
  return x2(e3, {month: t3, date: n3}), (e3 = ht2(e3, r3, a3, "year")).epoch;
}, year: (e3, t3) => (typeof t3 == "string" && /^'[0-9]{2}$/.test(t3) && (t3 = t3.replace(/'/, "").trim(), t3 = (t3 = Number(t3)) > 30 ? 1900 + t3 : 2e3 + t3), t3 = st2(t3), x2(e3, {year: t3}), e3.epoch), week: (e3, t3, a3) => {
  let n3 = e3.clone();
  return t3 = st2(t3), (e3 = (e3 = (e3 = e3.month(0)).date(1)).day("monday")).monthName() === "december" && e3.date() >= 28 && (e3 = e3.add(1, "week")), t3 -= 1, e3 = e3.add(t3, "weeks"), (e3 = ht2(e3, n3, a3, "year")).epoch;
}, dayOfYear: (e3, t3, a3) => {
  t3 = st2(t3);
  let n3 = e3.clone();
  return (t3 -= 1) <= 0 ? t3 = 0 : t3 >= 365 && (t3 = 364), e3 = (e3 = e3.startOf("year")).add(t3, "day"), lt2(e3, n3, "hour"), (e3 = ht2(e3, n3, a3, "year")).epoch;
}};
var dt2 = (e3) => e3 = (e3 = (e3 = e3.minute(0)).second(0)).millisecond(1);
var mt2 = {millisecond: function(e3) {
  if (e3 !== void 0) {
    let t3 = this.clone();
    return t3.epoch = ct2.milliseconds(t3, e3), t3;
  }
  return this.d.getMilliseconds();
}, second: function(e3, t3) {
  if (e3 !== void 0) {
    let a3 = this.clone();
    return a3.epoch = ct2.seconds(a3, e3, t3), a3;
  }
  return this.d.getSeconds();
}, minute: function(e3, t3) {
  if (e3 !== void 0) {
    let a3 = this.clone();
    return a3.epoch = ct2.minutes(a3, e3, t3), a3;
  }
  return this.d.getMinutes();
}, hour: function(e3, t3) {
  let a3 = this.d;
  if (e3 !== void 0) {
    let a4 = this.clone();
    return a4.epoch = ct2.hours(a4, e3, t3), a4;
  }
  return a3.getHours();
}, hourFloat: function(e3, t3) {
  if (e3 !== void 0) {
    let a4 = this.clone(), n4 = e3 % 1;
    n4 *= 60;
    let r4 = parseInt(e3, 10);
    return a4.epoch = ct2.hours(a4, r4, t3), a4.epoch = ct2.minutes(a4, n4, t3), a4;
  }
  let a3 = this.d, n3 = a3.getHours(), r3 = a3.getMinutes();
  return r3 /= 60, n3 + r3;
}, hour12: function(e3, t3) {
  let a3 = this.d;
  if (e3 !== void 0) {
    let a4 = this.clone(), n4 = (e3 = "" + e3).match(/^([0-9]+)(am|pm)$/);
    if (n4) {
      let e4 = parseInt(n4[1], 10);
      n4[2] === "pm" && (e4 += 12), a4.epoch = ct2.hours(a4, e4, t3);
    }
    return a4;
  }
  let n3 = a3.getHours();
  return n3 > 12 && (n3 -= 12), n3 === 0 && (n3 = 12), n3;
}, time: function(e3, t3) {
  if (e3 !== void 0) {
    let a3 = this.clone();
    return e3 = e3.toLowerCase().trim(), a3.epoch = ct2.time(a3, e3, t3), a3;
  }
  return `${this.h12()}:${E2.zeroPad(this.minute())}${this.ampm()}`;
}, ampm: function(e3, t3) {
  let a3 = "am", n3 = this.hour();
  if (n3 >= 12 && (a3 = "pm"), typeof e3 != "string")
    return a3;
  let r3 = this.clone();
  return e3 = e3.toLowerCase().trim(), n3 >= 12 && e3 === "am" ? (n3 -= 12, r3.hour(n3, t3)) : n3 < 12 && e3 === "pm" ? (n3 += 12, r3.hour(n3, t3)) : r3;
}, dayTime: function(e3, t3) {
  if (e3 !== void 0) {
    const a4 = {morning: "7:00am", breakfast: "7:00am", noon: "12:00am", lunch: "12:00pm", afternoon: "2:00pm", evening: "6:00pm", dinner: "6:00pm", night: "11:00pm", midnight: "23:59pm"};
    let n3 = this.clone();
    return e3 = (e3 = e3 || "").toLowerCase(), a4.hasOwnProperty(e3) === true && (n3 = n3.time(a4[e3], t3)), n3;
  }
  let a3 = this.hour();
  return a3 < 6 ? "night" : a3 < 12 ? "morning" : a3 < 17 ? "afternoon" : a3 < 22 ? "evening" : "night";
}, iso: function(e3) {
  return e3 !== void 0 ? this.set(e3) : this.format("iso");
}};
var pt2 = {date: function(e3, t3) {
  if (e3 !== void 0) {
    let a3 = this.clone();
    return (e3 = parseInt(e3, 10)) && (a3.epoch = ct2.date(a3, e3, t3)), a3;
  }
  return this.d.getDate();
}, day: function(e3, t3) {
  if (e3 === void 0)
    return this.d.getDay();
  let a3 = this.clone(), n3 = e3;
  typeof e3 == "string" && (e3 = e3.toLowerCase(), we3.aliases.hasOwnProperty(e3) ? n3 = we3.aliases[e3] : (n3 = we3.short().indexOf(e3), n3 === -1 && (n3 = we3.long().indexOf(e3))));
  let r3 = this.d.getDay() - n3;
  t3 === true && r3 > 0 && (r3 -= 7), t3 === false && r3 < 0 && (r3 += 7);
  let o3 = this.subtract(r3, "days");
  return x2(o3, {hour: a3.hour(), minute: a3.minute(), second: a3.second()}), o3;
}, dayName: function(e3, t3) {
  if (e3 === void 0)
    return we3.long()[this.day()];
  let a3 = this.clone();
  return a3 = a3.day(e3, t3), a3;
}};
var ft2 = {dayOfYear: function(e3, t3) {
  if (e3 !== void 0) {
    let a4 = this.clone();
    return a4.epoch = ct2.dayOfYear(a4, e3, t3), a4;
  }
  let a3, n3 = 0, r3 = this.d.getMonth();
  for (let e4 = 1; e4 <= r3; e4++)
    a3 = new Date(), a3.setDate(1), a3.setFullYear(this.d.getFullYear()), a3.setHours(1), a3.setMinutes(1), a3.setMonth(e4), a3.setHours(-2), n3 += a3.getDate();
  return n3 + this.d.getDate();
}, week: function(e3, t3) {
  if (e3 !== void 0) {
    let a4 = this.clone();
    return a4.epoch = ct2.week(this, e3, t3), a4 = dt2(a4), a4;
  }
  let a3 = this.clone();
  a3 = a3.month(0), a3 = a3.date(1), a3 = dt2(a3), a3 = a3.day("monday"), a3.monthName() === "december" && a3.date() >= 28 && (a3 = a3.add(1, "week"));
  let n3 = 1;
  a3.date() === 1 && (n3 = 0), a3 = a3.minus(1, "second");
  const r3 = this.epoch;
  if (a3.epoch > r3)
    return 1;
  let o3 = 0, i32 = 4 * this.month();
  for (a3.epoch += $2.week * i32, o3 += i32; o3 <= 52; o3++) {
    if (a3.epoch > r3)
      return o3 + n3;
    a3 = a3.add(1, "week");
  }
  return 52;
}, month: function(e3, t3) {
  if (e3 !== void 0) {
    let a3 = this.clone();
    return a3.epoch = ct2.month(a3, e3, t3), a3;
  }
  return this.d.getMonth();
}, monthName: function(e3, t3) {
  if (e3 !== void 0) {
    let a3 = this.clone();
    return a3 = a3.month(e3, t3), a3;
  }
  return N3.long()[this.month()];
}, quarter: function(e3, t3) {
  if (e3 !== void 0 && (typeof e3 == "string" && (e3 = e3.replace(/^q/i, ""), e3 = parseInt(e3, 10)), He3[e3])) {
    let a4 = this.clone(), n3 = He3[e3][0];
    return a4 = a4.month(n3, t3), a4 = a4.date(1, t3), a4 = a4.startOf("day"), a4;
  }
  let a3 = this.d.getMonth();
  for (let e4 = 1; e4 < He3.length; e4++)
    if (a3 < He3[e4][0])
      return e4 - 1;
  return 4;
}, season: function(e3, t3) {
  let a3 = "north";
  if (this.hemisphere() === "South" && (a3 = "south"), e3 !== void 0) {
    let n4 = this.clone();
    for (let r3 = 0; r3 < Ze3[a3].length; r3++)
      e3 === Ze3[a3][r3][0] && (n4 = n4.month(Ze3[a3][r3][1], t3), n4 = n4.date(1), n4 = n4.startOf("day"));
    return n4;
  }
  let n3 = this.d.getMonth();
  for (let e4 = 0; e4 < Ze3[a3].length - 1; e4++)
    if (n3 >= Ze3[a3][e4][1] && n3 < Ze3[a3][e4 + 1][1])
      return Ze3[a3][e4][0];
  return "winter";
}, year: function(e3) {
  if (e3 !== void 0) {
    let t3 = this.clone();
    return t3.epoch = ct2.year(t3, e3), t3;
  }
  return this.d.getFullYear();
}, era: function(e3) {
  if (e3 !== void 0) {
    let t3 = this.clone();
    e3 = e3.toLowerCase();
    let a3 = t3.d.getFullYear();
    return e3 === "bc" && a3 > 0 && (t3.epoch = ct2.year(t3, -1 * a3)), e3 === "ad" && a3 < 0 && (t3.epoch = ct2.year(t3, -1 * a3)), t3;
  }
  return this.d.getFullYear() < 0 ? "BC" : "AD";
}, decade: function(e3) {
  if (e3 !== void 0) {
    if (!(e3 = (e3 = (e3 = String(e3)).replace(/([0-9])'?s$/, "$1")).replace(/([0-9])(th|rd|st|nd)/, "$1")))
      return console.warn("Spacetime: Invalid decade input"), this;
    e3.length === 2 && /[0-9][0-9]/.test(e3) && (e3 = "19" + e3);
    let t3 = Number(e3);
    return isNaN(t3) ? this : (t3 = 10 * Math.floor(t3 / 10), this.year(t3));
  }
  return this.startOf("decade").year();
}, century: function(e3) {
  if (e3 !== void 0) {
    typeof e3 == "string" && (e3 = (e3 = (e3 = e3.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (e4, t5, a3) => (a3.match(/b\.?c\.?/i) && (t5 = "-" + t5), t5))).replace(/c$/, ""));
    let t4 = Number(e3);
    return isNaN(e3) ? (console.warn("Spacetime: Invalid century input"), this) : (t4 === 0 && (t4 = 1), t4 = t4 >= 0 ? 100 * (t4 - 1) : 100 * (t4 + 1), this.year(t4));
  }
  let t3 = this.startOf("century").year();
  return t3 = Math.floor(t3 / 100), t3 < 0 ? t3 - 1 : t3 + 1;
}, millenium: function(e3) {
  if (e3 !== void 0) {
    if (typeof e3 == "string" && (e3 = e3.replace(/([0-9])(th|rd|st|nd)/, "$1"), e3 = Number(e3), isNaN(e3)))
      return console.warn("Spacetime: Invalid millenium input"), this;
    e3 > 0 && (e3 -= 1);
    let t4 = 1e3 * e3;
    return t4 === 0 && (t4 = 1), this.year(t4);
  }
  let t3 = Math.floor(this.year() / 1e3);
  return t3 >= 0 && (t3 += 1), t3;
}};
var yt2 = Object.assign({}, mt2, pt2, ft2);
yt2.milliseconds = yt2.millisecond, yt2.seconds = yt2.second, yt2.minutes = yt2.minute, yt2.hours = yt2.hour, yt2.hour24 = yt2.hour, yt2.h12 = yt2.hour12, yt2.h24 = yt2.hour24, yt2.days = yt2.day;
var gt2 = (e3) => {
  Object.keys(yt2).forEach((t3) => {
    e3.prototype[t3] = yt2[t3];
  });
};
var bt2 = E2.isLeapYear;
var kt2 = function(e3, t3) {
  return e3 === 1 && bt2(t3) ? 29 : T3[e3];
};
var wt2 = {months: (e3, t3) => {
  if (e3.month > 0) {
    let a3 = parseInt(e3.month / 12, 10);
    e3.year = t3.year() + a3, e3.month = e3.month % 12;
  } else if (e3.month < 0) {
    let a3 = Math.floor(Math.abs(e3.month) / 13, 10);
    a3 = Math.abs(a3) + 1, e3.year = t3.year() - a3, e3.month = e3.month % 12, e3.month = e3.month + 12, e3.month === 12 && (e3.month = 0);
  }
  return e3;
}, days: (e3, t3, a3) => {
  let n3 = t3.year(), r3 = t3.month(), o3 = kt2(r3, n3);
  for (; a3 > o3; )
    a3 -= o3, r3 += 1, r3 >= 12 && (r3 -= 12, n3 += 1), o3 = kt2(r3, n3);
  return e3.month = r3, e3.date = a3, e3;
}, daysBack: (e3, t3, a3) => {
  e3.year = t3.year(), e3.month = t3.month();
  let n3 = t3.date();
  for (e3.date = n3 - Math.abs(a3); e3.date < 1; ) {
    e3.month -= 1, e3.month < 0 && (e3.month = 11, e3.year -= 1);
    let t4 = kt2(e3.month, e3.year);
    e3.date += t4;
  }
  return e3;
}};
var vt2 = ["millisecond", "second", "minute", "hour", "date", "month"];
var zt2 = {second: vt2.slice(0, 1), minute: vt2.slice(0, 2), quarterhour: vt2.slice(0, 2), hour: vt2.slice(0, 3), date: vt2.slice(0, 4), month: vt2.slice(0, 4), quarter: vt2.slice(0, 4), season: vt2.slice(0, 4), year: vt2, decade: vt2, century: vt2};
zt2.week = zt2.hour, zt2.season = zt2.date, zt2.quarter = zt2.date;
var _t2 = {year: true, quarter: true, season: true, month: true, week: true, date: true};
var jt2 = {month: true, quarter: true, season: true, year: true};
var Ot2 = (e3) => {
  e3.prototype.add = function(e4, t3) {
    let a3 = this.clone();
    if (!t3 || e4 === 0)
      return a3;
    let n3 = this.clone();
    if ((t3 = E2.normalize(t3)) === "millisecond")
      return a3.epoch += e4, a3;
    t3 === "fortnight" && (e4 *= 2, t3 = "week"), $2[t3] ? a3.epoch += $2[t3] * e4 : t3 === "week" || t3 === "weekend" ? a3.epoch += $2.day * (7 * e4) : t3 === "quarter" || t3 === "season" ? a3.epoch += $2.month * (3 * e4) : t3 === "quarterhour" && (a3.epoch += 15 * $2.minute * e4);
    let r3 = {};
    if (zt2[t3] && zt2[t3].forEach((e5) => {
      r3[e5] = n3[e5]();
    }), _t2[t3]) {
      const e5 = n3.timezone().current.offset - a3.timezone().current.offset;
      a3.epoch += 3600 * e5 * 1e3;
    }
    if (t3 === "month" && (r3.month = n3.month() + e4, r3 = wt2.months(r3, n3)), t3 === "week") {
      let t4 = n3.date() + 7 * e4;
      t4 <= 28 && t4 > 1 && (r3.date = t4);
    }
    if (t3 === "weekend" && a3.dayName() !== "saturday")
      a3 = a3.day("saturday", true);
    else if (t3 === "date") {
      if (e4 < 0)
        r3 = wt2.daysBack(r3, n3, e4);
      else {
        let t4 = n3.date() + e4;
        r3 = wt2.days(r3, n3, t4);
      }
      e4 !== 0 && n3.isSame(a3, "day") && (r3.date = n3.date() + e4);
    } else if (t3 === "quarter") {
      if (r3.month = n3.month() + 3 * e4, r3.year = n3.year(), r3.month < 0) {
        let e5 = Math.floor(r3.month / 12), t4 = r3.month + 12 * Math.abs(e5);
        r3.month = t4, r3.year += e5;
      } else if (r3.month >= 12) {
        let e5 = Math.floor(r3.month / 12);
        r3.month = r3.month % 12, r3.year += e5;
      }
      r3.date = n3.date();
    } else if (t3 === "year") {
      let t4 = n3.year() + e4, r4 = a3.year();
      if (r4 < t4) {
        let t5 = Math.floor(e4 / 4) || 1;
        a3.epoch += Math.abs($2.day * t5);
      } else if (r4 > t4) {
        let t5 = Math.floor(e4 / 4) || 1;
        a3.epoch += $2.day * t5;
      }
    } else
      t3 === "decade" ? r3.year = a3.year() + 10 : t3 === "century" && (r3.year = a3.year() + 100);
    if (jt2[t3]) {
      let e5 = T3[r3.month];
      r3.date = n3.date(), r3.date > e5 && (r3.date = e5);
    }
    return Object.keys(r3).length > 1 && x2(a3, r3), a3;
  }, e3.prototype.subtract = function(e4, t3) {
    return this.clone().add(-1 * e4, t3);
  }, e3.prototype.minus = e3.prototype.subtract, e3.prototype.plus = e3.prototype.add;
};
var $t2 = {millisecond: (e3) => e3.epoch, second: (e3) => [e3.year(), e3.month(), e3.date(), e3.hour(), e3.minute(), e3.second()].join("-"), minute: (e3) => [e3.year(), e3.month(), e3.date(), e3.hour(), e3.minute()].join("-"), hour: (e3) => [e3.year(), e3.month(), e3.date(), e3.hour()].join("-"), day: (e3) => [e3.year(), e3.month(), e3.date()].join("-"), week: (e3) => [e3.year(), e3.week()].join("-"), month: (e3) => [e3.year(), e3.month()].join("-"), quarter: (e3) => [e3.year(), e3.quarter()].join("-"), year: (e3) => e3.year()};
$t2.date = $t2.day;
var Dt2 = (e3) => {
  const t3 = {isAfter: function(e4) {
    e4 = E2.beADate(e4, this);
    let t4 = E2.getEpoch(e4);
    return t4 === null ? null : this.epoch > t4;
  }, isBefore: function(e4) {
    e4 = E2.beADate(e4, this);
    let t4 = E2.getEpoch(e4);
    return t4 === null ? null : this.epoch < t4;
  }, isEqual: function(e4) {
    e4 = E2.beADate(e4, this);
    let t4 = E2.getEpoch(e4);
    return t4 === null ? null : this.epoch === t4;
  }, isBetween: function(e4, t4, a3 = false) {
    e4 = E2.beADate(e4, this), t4 = E2.beADate(t4, this);
    let n3 = E2.getEpoch(e4);
    if (n3 === null)
      return null;
    let r3 = E2.getEpoch(t4);
    return r3 === null ? null : a3 ? this.isBetween(e4, t4) || this.isEqual(e4) || this.isEqual(t4) : n3 < this.epoch && this.epoch < r3;
  }};
  Object.keys(t3).forEach((a3) => {
    e3.prototype[a3] = t3[a3];
  });
};
var Mt2 = (e3) => {
  const t3 = {i18n: (e4) => {
    E2.isObject(e4.days) && we3.set(e4.days), E2.isObject(e4.months) && N3.set(e4.months), E2.isBoolean(e4.useTitleCase) && ve3.set(e4.useTitleCase);
  }};
  Object.keys(t3).forEach((a3) => {
    e3.prototype[a3] = t3[a3];
  });
};
var Pt2 = a2;
var St2 = ot2;
var qt2 = gt2;
var Tt2 = Ot2;
var Et2 = (e3) => {
  e3.prototype.isSame = function(t3, a3, n3 = true) {
    let r3 = this;
    if (!a3)
      return null;
    if (typeof t3 == "string" && typeof a3 == "object") {
      let e4 = t3;
      t3 = a3, a3 = e4;
    }
    return typeof t3 != "string" && typeof t3 != "number" || (t3 = new e3(t3, this.timezone.name)), a3 = a3.replace(/s$/, ""), n3 === true && r3.tz !== t3.tz && ((t3 = t3.clone()).tz = r3.tz), $t2[a3] ? $t2[a3](r3) === $t2[a3](t3) : null;
  };
};
var Nt2 = Dt2;
var Ct2 = Mt2;
var It2 = d2;
var Yt2 = function(e3, t3, a3 = {}) {
  this.epoch = null, this.tz = Ge3(t3, It2), this.silent = a3.silent || true, this.british = a3.dmy || a3.british, this._weekStart = 1, a3.weekStart !== void 0 && (this._weekStart = a3.weekStart), this._today = {}, a3.today !== void 0 && (this._today = a3.today), Object.defineProperty(this, "d", {get: function() {
    let e4 = Pt2(this), t4 = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e4;
    t4 = 60 * t4 * 1e3;
    let a4 = this.epoch + t4;
    return new Date(a4);
  }}), Object.defineProperty(this, "timezones", {get: () => It2, set: (e4) => (It2 = e4, e4)});
  let n3 = at2(this, e3);
  this.epoch = n3.epoch;
};
Object.keys(St2).forEach((e3) => {
  Yt2.prototype[e3] = St2[e3];
}), Yt2.prototype.clone = function() {
  return new Yt2(this.epoch, this.tz, {silent: this.silent, weekStart: this._weekStart, today: this._today, parsers: this.parsers});
}, Yt2.prototype.toLocalDate = function() {
  return this.toNativeDate();
}, Yt2.prototype.toNativeDate = function() {
  return new Date(this.epoch);
}, qt2(Yt2), Tt2(Yt2), Et2(Yt2), Nt2(Yt2), Ct2(Yt2);
var At2 = Yt2;
var xt2 = (e3, t3) => {
  let a3 = new At2(null), n3 = new At2(null);
  a3 = a3.time(e3), n3 = t3 ? n3.time(t3) : a3.add(59, "minutes");
  let r3 = a3.hour(), o3 = n3.hour();
  return Object.keys(a3.timezones).filter((e4) => {
    if (e4.indexOf("/") === -1)
      return false;
    let t4 = new At2(null, e4), i32 = t4.hour();
    return i32 >= r3 && i32 <= o3 && (!(i32 === r3 && t4.minute() < a3.minute()) && !(i32 === o3 && t4.minute() > n3.minute()));
  });
};
var Lt = (e3, t3, a3) => new At2(e3, t3, a3);
var Ft = function(e3) {
  let t3 = e3._today || {};
  return Object.keys(t3).forEach((a3) => {
    e3 = e3[a3](t3[a3]);
  }), e3;
};
Lt.now = (e3, t3) => {
  let a3 = new At2(new Date().getTime(), e3, t3);
  return a3 = Ft(a3), a3;
}, Lt.today = (e3, t3) => {
  let a3 = new At2(new Date().getTime(), e3, t3);
  return a3 = Ft(a3), a3.startOf("day");
}, Lt.tomorrow = (e3, t3) => {
  let a3 = new At2(new Date().getTime(), e3, t3);
  return a3 = Ft(a3), a3.add(1, "day").startOf("day");
}, Lt.yesterday = (e3, t3) => {
  let a3 = new At2(new Date().getTime(), e3, t3);
  return a3 = Ft(a3), a3.subtract(1, "day").startOf("day");
}, Lt.extend = function(e3 = {}) {
  return Object.keys(e3).forEach((t3) => {
    At2.prototype[t3] = e3[t3];
  }), this;
}, Lt.timezones = function() {
  return new At2().timezones;
}, Lt.max = function(e3, t3) {
  let a3 = new At2(null, e3, t3);
  return a3.epoch = 864e13, a3;
}, Lt.min = function(e3, t3) {
  let a3 = new At2(null, e3, t3);
  return a3.epoch = -864e13, a3;
}, Lt.whereIts = xt2, Lt.version = "6.16.3", Lt.plugin = Lt.extend;
var Bt = Lt;
var t22 = function(t3, n3) {
  let e3 = Math.min(t3.length, n3.length);
  for (; e3 > 0; ) {
    const o3 = t3.slice(0, e3);
    if (o3 === n3.slice(0, e3))
      return o3;
    e3 -= 1;
  }
  return "";
};
var n22 = function(t3) {
  t3.sort();
  for (let n3 = 1; n3 < t3.length; n3++)
    t3[n3 - 1] === t3[n3] && t3.splice(n3, 1);
};
var e22 = function() {
  this.counts = {};
};
var o22 = {init: function(t3) {
  this.counts[t3] === void 0 && (this.counts[t3] = 0);
}, add: function(t3, n3) {
  n3 === void 0 && (n3 = 1), this.init(t3), this.counts[t3] += n3;
}, countOf: function(t3) {
  return this.init(t3), this.counts[t3];
}, highest: function(t3) {
  let n3 = [];
  const e3 = Object.keys(this.counts);
  for (let t4 = 0; t4 < e3.length; t4++) {
    const o3 = e3[t4];
    n3.push([o3, this.counts[o3]]);
  }
  return n3.sort(function(t4, n4) {
    return n4[1] - t4[1];
  }), t3 && (n3 = n3.slice(0, t3)), n3;
}};
Object.keys(o22).forEach(function(t3) {
  e22.prototype[t3] = o22[t3];
});
var s22 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var i22 = s22.split("").reduce(function(t3, n3, e3) {
  return t3[n3] = e3, t3;
}, {});
var r22 = function(t3) {
  if (s22[t3] !== void 0)
    return s22[t3];
  let n3 = 1, e3 = 36, o3 = "";
  for (; t3 >= e3; t3 -= e3, n3++, e3 *= 36)
    ;
  for (; n3--; ) {
    const n4 = t3 % 36;
    o3 = String.fromCharCode((n4 < 10 ? 48 : 55) + n4) + o3, t3 = (t3 - n4) / 36;
  }
  return o3;
};
var u22 = function(t3) {
  if (i22[t3] !== void 0)
    return i22[t3];
  let n3 = 0, e3 = 1, o3 = 36, s3 = 1;
  for (; e3 < t3.length; n3 += o3, e3++, o3 *= 36)
    ;
  for (let e4 = t3.length - 1; e4 >= 0; e4--, s3 *= 36) {
    let o4 = t3.charCodeAt(e4) - 48;
    o4 > 10 && (o4 -= 7), n3 += o4 * s3;
  }
  return n3;
};
var c22 = ";";
var h22 = ":";
var f22 = ",";
var l22 = "!";
var d22 = 36;
var p22 = function(t3, n3) {
  let e3 = "", o3 = "";
  t3.isTerminal(n3) && (e3 += l22);
  const s3 = t3.nodeProps(n3);
  for (let i32 = 0; i32 < s3.length; i32++) {
    const u3 = s3[i32];
    if (typeof n3[u3] == "number") {
      e3 += o3 + u3, o3 = f22;
      continue;
    }
    if (t3.syms[n3[u3]._n]) {
      e3 += o3 + u3 + t3.syms[n3[u3]._n], o3 = "";
      continue;
    }
    let c3 = r22(n3._n - n3[u3]._n - 1 + t3.symCount);
    n3[u3]._g && c3.length >= n3[u3]._g.length && n3[n3[u3]._g] === 1 ? (c3 = n3[u3]._g, e3 += o3 + u3 + c3, o3 = f22) : (e3 += o3 + u3 + c3, o3 = "");
  }
  return e3;
};
var g22 = function(t3, n3) {
  if (t3.visited(n3))
    return;
  const e3 = t3.nodeProps(n3, true);
  for (let o3 = 0; o3 < e3.length; o3++) {
    const s3 = e3[o3], i32 = n3._n - n3[s3]._n - 1;
    i32 < d22 && t3.histRel.add(i32), t3.histAbs.add(n3[s3]._n, r22(i32).length - 1), g22(t3, n3[s3]);
  }
};
var a22 = function(t3, n3) {
  if (n3._n !== void 0)
    return;
  const e3 = t3.nodeProps(n3, true);
  for (let o3 = 0; o3 < e3.length; o3++)
    a22(t3, n3[e3[o3]]);
  n3._n = t3.pos++, t3.nodes.unshift(n3);
};
var y22 = function(t3) {
  t3.nodes = [], t3.nodeCount = 0, t3.syms = {}, t3.symCount = 0, t3.pos = 0, t3.optimize(), t3.histAbs = new e22(), t3.histRel = new e22(), a22(t3, t3.root), t3.nodeCount = t3.nodes.length, t3.prepDFS(), g22(t3, t3.root), t3.symCount = function(t4) {
    t4.histAbs = t4.histAbs.highest(d22);
    const n3 = [];
    n3[-1] = 0;
    let e3 = 0, o3 = 0;
    const s3 = 3 + r22(t4.nodeCount).length;
    for (let i32 = 0; i32 < d22 && t4.histAbs[i32] !== void 0; i32++)
      n3[i32] = t4.histAbs[i32][1] - s3 - t4.histRel.countOf(d22 - i32 - 1) + n3[i32 - 1], n3[i32] >= e3 && (e3 = n3[i32], o3 = i32 + 1);
    return o3;
  }(t3);
  for (let n3 = 0; n3 < t3.symCount; n3++)
    t3.syms[t3.histAbs[n3][0]] = r22(n3);
  for (let n3 = 0; n3 < t3.nodeCount; n3++)
    t3.nodes[n3] = p22(t3, t3.nodes[n3]);
  for (let n3 = t3.symCount - 1; n3 >= 0; n3--)
    t3.nodes.unshift(r22(n3) + h22 + r22(t3.nodeCount - t3.histAbs[n3][0] - 1));
  return t3.nodes.join(c22);
};
var m22 = new RegExp("[0-9A-Z,;!:|¦]");
var b22 = {insertWords: function(t3) {
  if (t3 !== void 0) {
    typeof t3 == "string" && (t3 = t3.split(/[^a-zA-Z]+/));
    for (let n3 = 0; n3 < t3.length; n3++)
      t3[n3] = t3[n3].toLowerCase();
    n22(t3);
    for (let n3 = 0; n3 < t3.length; n3++)
      t3[n3].match(m22) === null && this.insert(t3[n3]);
  }
}, insert: function(n3) {
  this._insert(n3, this.root);
  const e3 = this.lastWord;
  this.lastWord = n3;
  if (t22(n3, e3) === e3)
    return;
  const o3 = this.uniqueNode(e3, n3, this.root);
  o3 && this.combineSuffixNode(o3);
}, _insert: function(n3, e3) {
  let o3, s3;
  if (n3.length === 0)
    return;
  const i32 = Object.keys(e3);
  for (let r3 = 0; r3 < i32.length; r3++) {
    const u3 = i32[r3];
    if (o3 = t22(n3, u3), o3.length !== 0) {
      if (u3 === o3 && typeof e3[u3] == "object")
        return void this._insert(n3.slice(o3.length), e3[u3]);
      if (u3 === n3 && typeof e3[u3] == "number")
        return;
      return s3 = {}, s3[u3.slice(o3.length)] = e3[u3], this.addTerminal(s3, n3 = n3.slice(o3.length)), delete e3[u3], e3[o3] = s3, void this.wordCount++;
    }
  }
  this.addTerminal(e3, n3), this.wordCount++;
}, addTerminal: function(t3, n3) {
  if (n3.length <= 1)
    return void (t3[n3] = 1);
  const e3 = {};
  t3[n3[0]] = e3, this.addTerminal(e3, n3.slice(1));
}, nodeProps: function(t3, n3) {
  const e3 = [];
  for (const o3 in t3)
    o3 !== "" && o3[0] !== "_" && (n3 && typeof t3[o3] != "object" || e3.push(o3));
  return e3.sort(), e3;
}, optimize: function() {
  this.combineSuffixNode(this.root), this.prepDFS(), this.countDegree(this.root), this.prepDFS(), this.collapseChains(this.root);
}, combineSuffixNode: function(t3) {
  if (t3._c)
    return t3;
  let n3 = [];
  this.isTerminal(t3) && n3.push("!");
  const e3 = this.nodeProps(t3);
  for (let o4 = 0; o4 < e3.length; o4++) {
    const s3 = e3[o4];
    typeof t3[s3] == "object" ? (t3[s3] = this.combineSuffixNode(t3[s3]), n3.push(s3), n3.push(t3[s3]._c)) : n3.push(s3);
  }
  n3 = n3.join("-");
  const o3 = this.suffixes[n3];
  return o3 || (this.suffixes[n3] = t3, t3._c = this.cNext++, t3);
}, prepDFS: function() {
  this.vCur++;
}, visited: function(t3) {
  return t3._v === this.vCur || (t3._v = this.vCur, false);
}, countDegree: function(t3) {
  if (t3._d === void 0 && (t3._d = 0), t3._d++, this.visited(t3))
    return;
  const n3 = this.nodeProps(t3, true);
  for (let e3 = 0; e3 < n3.length; e3++)
    this.countDegree(t3[n3[e3]]);
}, collapseChains: function(t3) {
  let n3, e3, o3, s3;
  if (!this.visited(t3)) {
    for (e3 = this.nodeProps(t3), s3 = 0; s3 < e3.length; s3++)
      n3 = e3[s3], o3 = t3[n3], typeof o3 == "object" && (this.collapseChains(o3), o3._g === void 0 || o3._d !== 1 && o3._g.length !== 1 || (delete t3[n3], n3 += o3._g, t3[n3] = o3[o3._g]));
    e3.length !== 1 || this.isTerminal(t3) || (t3._g = n3);
  }
}, isTerminal: function(t3) {
  return !!t3[""];
}, uniqueNode: function(t3, n3, e3) {
  const o3 = this.nodeProps(e3, true);
  for (let s3 = 0; s3 < o3.length; s3++) {
    const i32 = o3[s3];
    if (i32 === t3.slice(0, i32.length))
      return i32 !== n3.slice(0, i32.length) ? e3[i32] : this.uniqueNode(t3.slice(i32.length), n3.slice(i32.length), e3[i32]);
  }
}, pack: function() {
  return y22(this);
}};
Object.keys(b22).forEach(function(t3) {
});
var j22 = function(t3, n3, e3) {
  const o3 = u22(n3);
  return o3 < t3.symCount ? t3.syms[o3] : e3 + o3 + 1 - t3.symCount;
};
var A22 = function(t3) {
  const n3 = {nodes: t3.split(";"), syms: [], symCount: 0};
  return t3.match(":") && function(t4) {
    const n4 = new RegExp("([0-9A-Z]+):([0-9A-Z]+)");
    for (let e3 = 0; e3 < t4.nodes.length; e3++) {
      const o3 = n4.exec(t4.nodes[e3]);
      if (!o3) {
        t4.symCount = e3;
        break;
      }
      t4.syms[u22(o3[1])] = u22(o3[2]);
    }
    t4.nodes = t4.nodes.slice(t4.symCount, t4.nodes.length);
  }(n3), function(t4) {
    const n4 = [], e3 = (o3, s3) => {
      let i32 = t4.nodes[o3];
      i32[0] === "!" && (n4.push(s3), i32 = i32.slice(1));
      const r3 = i32.split(/([A-Z0-9,]+)/g);
      for (let i4 = 0; i4 < r3.length; i4 += 2) {
        const u3 = r3[i4], c3 = r3[i4 + 1];
        if (!u3)
          continue;
        const h3 = s3 + u3;
        if (c3 === "," || c3 === void 0) {
          n4.push(h3);
          continue;
        }
        const f3 = j22(t4, c3, o3);
        e3(f3, h3);
      }
    };
    return e3(0, ""), n4;
  }(n3);
};
var O22 = function(t3) {
  const n3 = t3.split("|").reduce((t4, n4) => {
    const e4 = n4.split("¦");
    return t4[e4[0]] = e4[1], t4;
  }, {}), e3 = {};
  return Object.keys(n3).forEach(function(t4) {
    const o3 = A22(n3[t4]);
    t4 === "true" && (t4 = true);
    for (let n4 = 0; n4 < o3.length; n4++) {
      const s3 = o3[n4];
      e3.hasOwnProperty(s3) === true ? Array.isArray(e3[s3]) === false ? e3[s3] = [e3[s3], t4] : e3[s3].push(t4) : e3[s3] = t4;
    }
  }), e3;
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
  let m3 = tz.match(isOffset);
  if (m3 !== null) {
    return toIana(m3[1]);
  }
  m3 = tz.match(utcOffset);
  if (m3 !== null) {
    return toIana(m3[1]);
  }
  m3 = tz.match(gmtOffset);
  if (m3 !== null) {
    let num = Number(m3[1]) * -1;
    return toIana(num);
  }
  m3 = tz.match(isNumber);
  if (m3 !== null) {
    return toIana(m3[1]);
  }
  return null;
};
var lexicon = O22(pckd);
lexicon = Object.assign(lexicon, misc);
Object.keys(lexicon).filter((k22) => {
  let val = lexicon[k22];
  if (typeof val === "string") {
    val = val.toLowerCase();
    if (lexicon[val] === void 0) {
      lexicon[val] = lexicon[k22];
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
var version3 = "1.1.0";
var soft = function(str) {
  let ids = find(str) || [];
  if (typeof ids === "string") {
    ids = [ids];
  }
  ids = ids.map((id2) => display(id2, str));
  return ids;
};
soft.prototype.version = version3;
var timezone_soft_default = soft;
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
var TimezoneSelect = ({
  value,
  onBlur,
  onChange: onChange2,
  labelStyle = "original",
  timezones,
  ...props
}) => {
  if (!timezones)
    timezones = timezone_list_default;
  const getOptions = useMemo(() => {
    return Object.entries(timezones).reduce((selectOptions, zone) => {
      const now = Bt.now(zone[0]);
      const tz = now.timezone();
      const tzStrings = timezone_soft_default(zone[0]);
      let label = "";
      let abbr = now.isDST() ? tzStrings[0].daylight?.abbr : tzStrings[0].standard?.abbr;
      let altName = now.isDST() ? tzStrings[0].daylight?.name : tzStrings[0].standard?.name;
      const min = tz.current.offset * 60;
      const hr = `${min / 60 ^ 0}:` + (min % 60 === 0 ? "00" : Math.abs(min % 60));
      const prefix2 = `(GMT${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`;
      switch (labelStyle) {
        case "original":
          label = prefix2;
          break;
        case "altName":
          label = `${prefix2} ${altName?.length ? `(${altName})` : ""}`;
          break;
        case "abbrev":
          label = `${prefix2} ${abbr?.length < 5 ? `(${abbr})` : ""}`;
          break;
        default:
          label = `${prefix2}`;
      }
      selectOptions.push({
        value: tz.name,
        label,
        offset: tz.current.offset,
        abbrev: abbr,
        altName
      });
      return selectOptions;
    }, []).sort((a3, b3) => a3.offset - b3.offset);
  }, [labelStyle, timezones]);
  const handleChange = (tz) => {
    onChange2 && onChange2(tz);
  };
  const findFuzzyTz = (zone) => {
    let currentTime = Bt.now("GMT");
    try {
      currentTime = Bt.now(zone);
    } catch (err) {
      return;
    }
    return getOptions.filter((tz) => tz.offset === currentTime.timezone().current.offset).map((tz) => {
      let score = 0;
      if (currentTime.timezones[tz.value.toLowerCase()] && !!currentTime.timezones[tz.value.toLowerCase()].dst === currentTime.timezone().hasDst) {
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 8;
        }
        if (tz.label.toLowerCase().indexOf(currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 4;
        }
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substring(0, currentTime.tz.indexOf("/")))) {
          score += 2;
        }
        score += 1;
      } else if (tz.value === "GMT") {
        score += 1;
      }
      return {tz, score};
    }).sort((a3, b3) => b3.score - a3.score).map(({tz}) => tz)[0];
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
  return /* @__PURE__ */ createElement(react_select_esm_default, {
    value: parseTimezone(value),
    onChange: handleChange,
    options: getOptions,
    onBlur,
    ...props
  });
};
var src_default = TimezoneSelect;
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
    value: "ori}ginal",
    defaultChecked: labelStyle === "original"
  }), "original"), /* @__PURE__ */ react.createElement("label", {
    htmlFor: "altName"
  }, /* @__PURE__ */ react.createElement("input", {
    type: "radio",
    id: "altName",
    name: "labelStyle",
    value: "altName"
  }), "altName"), /* @__PURE__ */ react.createElement("label", {
    htmlFor: "abbrev"
  }, /* @__PURE__ */ react.createElement("input", {
    type: "radio",
    id: "abbrev",
    name: "labelStyle",
    value: "abbrev"
  }), "abbrev")), /* @__PURE__ */ react.createElement("div", {
    className: "select-wrapper"
  }, /* @__PURE__ */ react.createElement(src_default, {
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
  }, /* @__PURE__ */ react.createElement("div", null, "Current Date / Time in", " ", typeof selectedTimezone === "string" ? selectedTimezone.split("/")[1] : selectedTimezone.value.split("/")[1], ": ", /* @__PURE__ */ react.createElement("pre", null, datetime.unixFmt("dd.MM.YY HH:mm:ss"))), /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(selectedTimezone, null, 2))));
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
react_dom_default.render(/* @__PURE__ */ react.createElement(App_default, null), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map
