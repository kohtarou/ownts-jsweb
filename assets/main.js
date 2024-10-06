function ob(e, t) {
  for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
          for (const o in r)
              if (o !== "default" && !(o in e)) {
                  const a = Object.getOwnPropertyDescriptor(r, o);
                  a && Object.defineProperty(e, o, a.get ? a : {
                      enumerable: !0,
                      get: () => r[o]
                  })
              }
      }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
  }))
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
  new MutationObserver(o => {
      for (const a of o)
          if (a.type === "childList")
              for (const i of a.addedNodes)
                  i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(o) {
      const a = {};
      return o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
      a
  }
  function r(o) {
      if (o.ep)
          return;
      o.ep = !0;
      const a = n(o);
      fetch(o.href, a)
  }
}
)();
var ab = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function eu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Hg = {
  exports: {}
}
, tu = {}
, Ug = {
  exports: {}
}
, pe = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ki = Symbol.for("react.element")
, ib = Symbol.for("react.portal")
, sb = Symbol.for("react.fragment")
, lb = Symbol.for("react.strict_mode")
, ub = Symbol.for("react.profiler")
, cb = Symbol.for("react.provider")
, db = Symbol.for("react.context")
, fb = Symbol.for("react.forward_ref")
, hb = Symbol.for("react.suspense")
, mb = Symbol.for("react.memo")
, pb = Symbol.for("react.lazy")
, Jh = Symbol.iterator;
function gb(e) {
  return e === null || typeof e != "object" ? null : (e = Jh && e[Jh] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var Yg = {
  isMounted: function() {
      return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
, Vg = Object.assign
, Gg = {};
function Oa(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = Gg,
  this.updater = n || Yg
}
Oa.prototype.isReactComponent = {};
Oa.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
;
Oa.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Xg() {}
Xg.prototype = Oa.prototype;
function yf(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = Gg,
  this.updater = n || Yg
}
var wf = yf.prototype = new Xg;
wf.constructor = yf;
Vg(wf, Oa.prototype);
wf.isPureReactComponent = !0;
var em = Array.isArray
, Qg = Object.prototype.hasOwnProperty
, xf = {
  current: null
}
, Kg = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function qg(e, t, n) {
  var r, o = {}, a = null, i = null;
  if (t != null)
      for (r in t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (a = "" + t.key),
      t)
          Qg.call(t, r) && !Kg.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
      o.children = n;
  else if (1 < s) {
      for (var l = Array(s), u = 0; u < s; u++)
          l[u] = arguments[u + 2];
      o.children = l
  }
  if (e && e.defaultProps)
      for (r in s = e.defaultProps,
      s)
          o[r] === void 0 && (o[r] = s[r]);
  return {
      $$typeof: Ki,
      type: e,
      key: a,
      ref: i,
      props: o,
      _owner: xf.current
  }
}
function vb(e, t) {
  return {
      $$typeof: Ki,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
  }
}
function bf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ki
}
function yb(e) {
  var t = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
      return t[n]
  })
}
var tm = /\/+/g;
function Vu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? yb("" + e.key) : t.toString(36)
}
function Xs(e, t, n, r, o) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null)
      i = !0;
  else
      switch (a) {
      case "string":
      case "number":
          i = !0;
          break;
      case "object":
          switch (e.$$typeof) {
          case Ki:
          case ib:
              i = !0
          }
      }
  if (i)
      return i = e,
      o = o(i),
      e = r === "" ? "." + Vu(i, 0) : r,
      em(o) ? (n = "",
      e != null && (n = e.replace(tm, "$&/") + "/"),
      Xs(o, t, n, "", function(u) {
          return u
      })) : o != null && (bf(o) && (o = vb(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(tm, "$&/") + "/") + e)),
      t.push(o)),
      1;
  if (i = 0,
  r = r === "" ? "." : r + ":",
  em(e))
      for (var s = 0; s < e.length; s++) {
          a = e[s];
          var l = r + Vu(a, s);
          i += Xs(a, t, n, l, o)
      }
  else if (l = gb(e),
  typeof l == "function")
      for (e = l.call(e),
      s = 0; !(a = e.next()).done; )
          a = a.value,
          l = r + Vu(a, s++),
          i += Xs(a, t, n, l, o);
  else if (a === "object")
      throw t = String(e),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}
function Ss(e, t, n) {
  if (e == null)
      return e;
  var r = []
    , o = 0;
  return Xs(e, r, "", "", function(a) {
      return t.call(n, a, o++)
  }),
  r
}
function wb(e) {
  if (e._status === -1) {
      var t = e._result;
      t = t(),
      t.then(function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
      e._result = t)
  }
  if (e._status === 1)
      return e._result.default;
  throw e._result
}
var Ct = {
  current: null
}
, Qs = {
  transition: null
}
, xb = {
  ReactCurrentDispatcher: Ct,
  ReactCurrentBatchConfig: Qs,
  ReactCurrentOwner: xf
};
function Zg() {
  throw Error("act(...) is not supported in production builds of React.")
}
pe.Children = {
  map: Ss,
  forEach: function(e, t, n) {
      Ss(e, function() {
          t.apply(this, arguments)
      }, n)
  },
  count: function(e) {
      var t = 0;
      return Ss(e, function() {
          t++
      }),
      t
  },
  toArray: function(e) {
      return Ss(e, function(t) {
          return t
      }) || []
  },
  only: function(e) {
      if (!bf(e))
          throw Error("React.Children.only expected to receive a single React element child.");
      return e
  }
};
pe.Component = Oa;
pe.Fragment = sb;
pe.Profiler = ub;
pe.PureComponent = yf;
pe.StrictMode = lb;
pe.Suspense = hb;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xb;
pe.act = Zg;
pe.cloneElement = function(e, t, n) {
  if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Vg({}, e.props)
    , o = e.key
    , a = e.ref
    , i = e._owner;
  if (t != null) {
      if (t.ref !== void 0 && (a = t.ref,
      i = xf.current),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
          var s = e.type.defaultProps;
      for (l in t)
          Qg.call(t, l) && !Kg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2;
  if (l === 1)
      r.children = n;
  else if (1 < l) {
      s = Array(l);
      for (var u = 0; u < l; u++)
          s[u] = arguments[u + 2];
      r.children = s
  }
  return {
      $$typeof: Ki,
      type: e.type,
      key: o,
      ref: a,
      props: r,
      _owner: i
  }
}
;
pe.createContext = function(e) {
  return e = {
      $$typeof: db,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  },
  e.Provider = {
      $$typeof: cb,
      _context: e
  },
  e.Consumer = e
}
;
pe.createElement = qg;
pe.createFactory = function(e) {
  var t = qg.bind(null, e);
  return t.type = e,
  t
}
;
pe.createRef = function() {
  return {
      current: null
  }
}
;
pe.forwardRef = function(e) {
  return {
      $$typeof: fb,
      render: e
  }
}
;
pe.isValidElement = bf;
pe.lazy = function(e) {
  return {
      $$typeof: pb,
      _payload: {
          _status: -1,
          _result: e
      },
      _init: wb
  }
}
;
pe.memo = function(e, t) {
  return {
      $$typeof: mb,
      type: e,
      compare: t === void 0 ? null : t
  }
}
;
pe.startTransition = function(e) {
  var t = Qs.transition;
  Qs.transition = {};
  try {
      e()
  } finally {
      Qs.transition = t
  }
}
;
pe.unstable_act = Zg;
pe.useCallback = function(e, t) {
  return Ct.current.useCallback(e, t)
}
;
pe.useContext = function(e) {
  return Ct.current.useContext(e)
}
;
pe.useDebugValue = function() {}
;
pe.useDeferredValue = function(e) {
  return Ct.current.useDeferredValue(e)
}
;
pe.useEffect = function(e, t) {
  return Ct.current.useEffect(e, t)
}
;
pe.useId = function() {
  return Ct.current.useId()
}
;
pe.useImperativeHandle = function(e, t, n) {
  return Ct.current.useImperativeHandle(e, t, n)
}
;
pe.useInsertionEffect = function(e, t) {
  return Ct.current.useInsertionEffect(e, t)
}
;
pe.useLayoutEffect = function(e, t) {
  return Ct.current.useLayoutEffect(e, t)
}
;
pe.useMemo = function(e, t) {
  return Ct.current.useMemo(e, t)
}
;
pe.useReducer = function(e, t, n) {
  return Ct.current.useReducer(e, t, n)
}
;
pe.useRef = function(e) {
  return Ct.current.useRef(e)
}
;
pe.useState = function(e) {
  return Ct.current.useState(e)
}
;
pe.useSyncExternalStore = function(e, t, n) {
  return Ct.current.useSyncExternalStore(e, t, n)
}
;
pe.useTransition = function() {
  return Ct.current.useTransition()
}
;
pe.version = "18.3.1";
Ug.exports = pe;
var y = Ug.exports;
const Y = eu(y)
, Jg = ob({
  __proto__: null,
  default: Y
}, [y]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var bb = y
, Sb = Symbol.for("react.element")
, kb = Symbol.for("react.fragment")
, Cb = Object.prototype.hasOwnProperty
, Eb = bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, Pb = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ev(e, t, n) {
  var r, o = {}, a = null, i = null;
  n !== void 0 && (a = "" + n),
  t.key !== void 0 && (a = "" + t.key),
  t.ref !== void 0 && (i = t.ref);
  for (r in t)
      Cb.call(t, r) && !Pb.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps,
      t)
          o[r] === void 0 && (o[r] = t[r]);
  return {
      $$typeof: Sb,
      type: e,
      key: a,
      ref: i,
      props: o,
      _owner: Eb.current
  }
}
tu.Fragment = kb;
tu.jsx = ev;
tu.jsxs = ev;
Hg.exports = tu;
var b = Hg.exports
, tv = {
  exports: {}
}
, Ut = {}
, nv = {
  exports: {}
}
, rv = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(P, T) {
      var A = P.length;
      P.push(T);
      e: for (; 0 < A; ) {
          var B = A - 1 >>> 1
            , K = P[B];
          if (0 < o(K, T))
              P[B] = T,
              P[A] = K,
              A = B;
          else
              break e
      }
  }
  function n(P) {
      return P.length === 0 ? null : P[0]
  }
  function r(P) {
      if (P.length === 0)
          return null;
      var T = P[0]
        , A = P.pop();
      if (A !== T) {
          P[0] = A;
          e: for (var B = 0, K = P.length, oe = K >>> 1; B < oe; ) {
              var ie = 2 * (B + 1) - 1
                , ge = P[ie]
                , fe = ie + 1
                , V = P[fe];
              if (0 > o(ge, A))
                  fe < K && 0 > o(V, ge) ? (P[B] = V,
                  P[fe] = A,
                  B = fe) : (P[B] = ge,
                  P[ie] = A,
                  B = ie);
              else if (fe < K && 0 > o(V, A))
                  P[B] = V,
                  P[fe] = A,
                  B = fe;
              else
                  break e
          }
      }
      return T
  }
  function o(P, T) {
      var A = P.sortIndex - T.sortIndex;
      return A !== 0 ? A : P.id - T.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var a = performance;
      e.unstable_now = function() {
          return a.now()
      }
  } else {
      var i = Date
        , s = i.now();
      e.unstable_now = function() {
          return i.now() - s
      }
  }
  var l = []
    , u = []
    , d = 1
    , c = null
    , f = 3
    , g = !1
    , w = !1
    , v = !1
    , x = typeof setTimeout == "function" ? setTimeout : null
    , p = typeof clearTimeout == "function" ? clearTimeout : null
    , h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
      for (var T = n(u); T !== null; ) {
          if (T.callback === null)
              r(u);
          else if (T.startTime <= P)
              r(u),
              T.sortIndex = T.expirationTime,
              t(l, T);
          else
              break;
          T = n(u)
      }
  }
  function S(P) {
      if (v = !1,
      m(P),
      !w)
          if (n(l) !== null)
              w = !0,
              R(E);
          else {
              var T = n(u);
              T !== null && $(S, T.startTime - P)
          }
  }
  function E(P, T) {
      w = !1,
      v && (v = !1,
      p(k),
      k = -1),
      g = !0;
      var A = f;
      try {
          for (m(T),
          c = n(l); c !== null && (!(c.expirationTime > T) || P && !F()); ) {
              var B = c.callback;
              if (typeof B == "function") {
                  c.callback = null,
                  f = c.priorityLevel;
                  var K = B(c.expirationTime <= T);
                  T = e.unstable_now(),
                  typeof K == "function" ? c.callback = K : c === n(l) && r(l),
                  m(T)
              } else
                  r(l);
              c = n(l)
          }
          if (c !== null)
              var oe = !0;
          else {
              var ie = n(u);
              ie !== null && $(S, ie.startTime - T),
              oe = !1
          }
          return oe
      } finally {
          c = null,
          f = A,
          g = !1
      }
  }
  var N = !1
    , O = null
    , k = -1
    , L = 5
    , _ = -1;
  function F() {
      return !(e.unstable_now() - _ < L)
  }
  function H() {
      if (O !== null) {
          var P = e.unstable_now();
          _ = P;
          var T = !0;
          try {
              T = O(!0, P)
          } finally {
              T ? J() : (N = !1,
              O = null)
          }
      } else
          N = !1
  }
  var J;
  if (typeof h == "function")
      J = function() {
          h(H)
      }
      ;
  else if (typeof MessageChannel < "u") {
      var W = new MessageChannel
        , I = W.port2;
      W.port1.onmessage = H,
      J = function() {
          I.postMessage(null)
      }
  } else
      J = function() {
          x(H, 0)
      }
      ;
  function R(P) {
      O = P,
      N || (N = !0,
      J())
  }
  function $(P, T) {
      k = x(function() {
          P(e.unstable_now())
      }, T)
  }
  e.unstable_IdlePriority = 5,
  e.unstable_ImmediatePriority = 1,
  e.unstable_LowPriority = 4,
  e.unstable_NormalPriority = 3,
  e.unstable_Profiling = null,
  e.unstable_UserBlockingPriority = 2,
  e.unstable_cancelCallback = function(P) {
      P.callback = null
  }
  ,
  e.unstable_continueExecution = function() {
      w || g || (w = !0,
      R(E))
  }
  ,
  e.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < P ? Math.floor(1e3 / P) : 5
  }
  ,
  e.unstable_getCurrentPriorityLevel = function() {
      return f
  }
  ,
  e.unstable_getFirstCallbackNode = function() {
      return n(l)
  }
  ,
  e.unstable_next = function(P) {
      switch (f) {
      case 1:
      case 2:
      case 3:
          var T = 3;
          break;
      default:
          T = f
      }
      var A = f;
      f = T;
      try {
          return P()
      } finally {
          f = A
      }
  }
  ,
  e.unstable_pauseExecution = function() {}
  ,
  e.unstable_requestPaint = function() {}
  ,
  e.unstable_runWithPriority = function(P, T) {
      switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          P = 3
      }
      var A = f;
      f = P;
      try {
          return T()
      } finally {
          f = A
      }
  }
  ,
  e.unstable_scheduleCallback = function(P, T, A) {
      var B = e.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay,
      A = typeof A == "number" && 0 < A ? B + A : B) : A = B,
      P) {
      case 1:
          var K = -1;
          break;
      case 2:
          K = 250;
          break;
      case 5:
          K = 1073741823;
          break;
      case 4:
          K = 1e4;
          break;
      default:
          K = 5e3
      }
      return K = A + K,
      P = {
          id: d++,
          callback: T,
          priorityLevel: P,
          startTime: A,
          expirationTime: K,
          sortIndex: -1
      },
      A > B ? (P.sortIndex = A,
      t(u, P),
      n(l) === null && P === n(u) && (v ? (p(k),
      k = -1) : v = !0,
      $(S, A - B))) : (P.sortIndex = K,
      t(l, P),
      w || g || (w = !0,
      R(E))),
      P
  }
  ,
  e.unstable_shouldYield = F,
  e.unstable_wrapCallback = function(P) {
      var T = f;
      return function() {
          var A = f;
          f = T;
          try {
              return P.apply(this, arguments)
          } finally {
              f = A
          }
      }
  }
}
)(rv);
nv.exports = rv;
var Mb = nv.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nb = y
, Ht = Mb;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ov = new Set
, Si = {};
function No(e, t) {
  pa(e, t),
  pa(e + "Capture", t)
}
function pa(e, t) {
  for (Si[e] = t,
  e = 0; e < t.length; e++)
      ov.add(t[e])
}
var Kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
, $c = Object.prototype.hasOwnProperty
, Ob = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
, nm = {}
, rm = {};
function Db(e) {
  return $c.call(rm, e) ? !0 : $c.call(nm, e) ? !1 : Ob.test(e) ? rm[e] = !0 : (nm[e] = !0,
  !1)
}
function Tb(e, t, n, r) {
  if (n !== null && n.type === 0)
      return !1;
  switch (typeof t) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
      e !== "data-" && e !== "aria-");
  default:
      return !1
  }
}
function Rb(e, t, n, r) {
  if (t === null || typeof t > "u" || Tb(e, t, n, r))
      return !0;
  if (r)
      return !1;
  if (n !== null)
      switch (n.type) {
      case 3:
          return !t;
      case 4:
          return t === !1;
      case 5:
          return isNaN(t);
      case 6:
          return isNaN(t) || 1 > t
      }
  return !1
}
function Et(e, t, n, r, o, a, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
  this.attributeName = r,
  this.attributeNamespace = o,
  this.mustUseProperty = n,
  this.propertyName = e,
  this.type = t,
  this.sanitizeURL = a,
  this.removeEmptyString = i
}
var mt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  mt[e] = new Et(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  mt[t] = new Et(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  mt[e] = new Et(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  mt[e] = new Et(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  mt[e] = new Et(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  mt[e] = new Et(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
  mt[e] = new Et(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  mt[e] = new Et(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
  mt[e] = new Et(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Sf = /[\-:]([a-z])/g;
function kf(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Sf, kf);
  mt[t] = new Et(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Sf, kf);
  mt[t] = new Et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Sf, kf);
  mt[t] = new Et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  mt[e] = new Et(e,1,!1,e.toLowerCase(),null,!1,!1)
});
mt.xlinkHref = new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
  mt[e] = new Et(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Cf(e, t, n, r) {
  var o = mt.hasOwnProperty(t) ? mt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rb(t, n, o, r) && (n = null),
  r || o === null ? Db(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
  r = o.attributeNamespace,
  n === null ? e.removeAttribute(t) : (o = o.type,
  n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ar = Nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
, ks = Symbol.for("react.element")
, Bo = Symbol.for("react.portal")
, Ho = Symbol.for("react.fragment")
, Ef = Symbol.for("react.strict_mode")
, zc = Symbol.for("react.profiler")
, av = Symbol.for("react.provider")
, iv = Symbol.for("react.context")
, Pf = Symbol.for("react.forward_ref")
, Bc = Symbol.for("react.suspense")
, Hc = Symbol.for("react.suspense_list")
, Mf = Symbol.for("react.memo")
, xr = Symbol.for("react.lazy")
, sv = Symbol.for("react.offscreen")
, om = Symbol.iterator;
function $a(e) {
  return e === null || typeof e != "object" ? null : (e = om && e[om] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var Xe = Object.assign, Gu;
function ei(e) {
  if (Gu === void 0)
      try {
          throw Error()
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Gu = t && t[1] || ""
      }
  return `
` + Gu + e
}
var Xu = !1;
function Qu(e, t) {
  if (!e || Xu)
      return "";
  Xu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (t = function() {
              throw Error()
          }
          ,
          Object.defineProperty(t.prototype, "props", {
              set: function() {
                  throw Error()
              }
          }),
          typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(t, [])
              } catch (u) {
                  var r = u
              }
              Reflect.construct(e, [], t)
          } else {
              try {
                  t.call()
              } catch (u) {
                  r = u
              }
              e.call(t.prototype)
          }
      else {
          try {
              throw Error()
          } catch (u) {
              r = u
          }
          e()
      }
  } catch (u) {
      if (u && r && typeof u.stack == "string") {
          for (var o = u.stack.split(`
`), a = r.stack.split(`
`), i = o.length - 1, s = a.length - 1; 1 <= i && 0 <= s && o[i] !== a[s]; )
              s--;
          for (; 1 <= i && 0 <= s; i--,
          s--)
              if (o[i] !== a[s]) {
                  if (i !== 1 || s !== 1)
                      do
                          if (i--,
                          s--,
                          0 > s || o[i] !== a[s]) {
                              var l = `
` + o[i].replace(" at new ", " at ");
                              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                              l
                          }
                      while (1 <= i && 0 <= s);
                  break
              }
      }
  } finally {
      Xu = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? ei(e) : ""
}
function _b(e) {
  switch (e.tag) {
  case 5:
      return ei(e.type);
  case 16:
      return ei("Lazy");
  case 13:
      return ei("Suspense");
  case 19:
      return ei("SuspenseList");
  case 0:
  case 2:
  case 15:
      return e = Qu(e.type, !1),
      e;
  case 11:
      return e = Qu(e.type.render, !1),
      e;
  case 1:
      return e = Qu(e.type, !0),
      e;
  default:
      return ""
  }
}
function Uc(e) {
  if (e == null)
      return null;
  if (typeof e == "function")
      return e.displayName || e.name || null;
  if (typeof e == "string")
      return e;
  switch (e) {
  case Ho:
      return "Fragment";
  case Bo:
      return "Portal";
  case zc:
      return "Profiler";
  case Ef:
      return "StrictMode";
  case Bc:
      return "Suspense";
  case Hc:
      return "SuspenseList"
  }
  if (typeof e == "object")
      switch (e.$$typeof) {
      case iv:
          return (e.displayName || "Context") + ".Consumer";
      case av:
          return (e._context.displayName || "Context") + ".Provider";
      case Pf:
          var t = e.render;
          return e = e.displayName,
          e || (e = t.displayName || t.name || "",
          e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case Mf:
          return t = e.displayName || null,
          t !== null ? t : Uc(e.type) || "Memo";
      case xr:
          t = e._payload,
          e = e._init;
          try {
              return Uc(e(t))
          } catch {}
      }
  return null
}
function Ab(e) {
  var t = e.type;
  switch (e.tag) {
  case 24:
      return "Cache";
  case 9:
      return (t.displayName || "Context") + ".Consumer";
  case 10:
      return (t._context.displayName || "Context") + ".Provider";
  case 18:
      return "DehydratedFragment";
  case 11:
      return e = t.render,
      e = e.displayName || e.name || "",
      t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
  case 7:
      return "Fragment";
  case 5:
      return t;
  case 4:
      return "Portal";
  case 3:
      return "Root";
  case 6:
      return "Text";
  case 16:
      return Uc(t);
  case 8:
      return t === Ef ? "StrictMode" : "Mode";
  case 22:
      return "Offscreen";
  case 12:
      return "Profiler";
  case 21:
      return "Scope";
  case 13:
      return "Suspense";
  case 19:
      return "SuspenseList";
  case 25:
      return "TracingMarker";
  case 1:
  case 0:
  case 17:
  case 2:
  case 14:
  case 15:
      if (typeof t == "function")
          return t.displayName || t.name || null;
      if (typeof t == "string")
          return t
  }
  return null
}
function Lr(e) {
  switch (typeof e) {
  case "boolean":
  case "number":
  case "string":
  case "undefined":
      return e;
  case "object":
      return e;
  default:
      return ""
  }
}
function lv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function jb(e) {
  var t = lv(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get
        , a = n.set;
      return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
              return o.call(this)
          },
          set: function(i) {
              r = "" + i,
              a.call(this, i)
          }
      }),
      Object.defineProperty(e, t, {
          enumerable: n.enumerable
      }),
      {
          getValue: function() {
              return r
          },
          setValue: function(i) {
              r = "" + i
          },
          stopTracking: function() {
              e._valueTracker = null,
              delete e[t]
          }
      }
  }
}
function Cs(e) {
  e._valueTracker || (e._valueTracker = jb(e))
}
function uv(e) {
  if (!e)
      return !1;
  var t = e._valueTracker;
  if (!t)
      return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = lv(e) ? e.checked ? "true" : "false" : e.value),
  e = r,
  e !== n ? (t.setValue(e),
  !0) : !1
}
function ml(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
  typeof e > "u")
      return null;
  try {
      return e.activeElement || e.body
  } catch {
      return e.body
  }
}
function Yc(e, t) {
  var n = t.checked;
  return Xe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
  })
}
function am(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lr(t.value != null ? t.value : n),
  e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}
function cv(e, t) {
  t = t.checked,
  t != null && Cf(e, "checked", t, !1)
}
function Vc(e, t) {
  cv(e, t);
  var n = Lr(t.value)
    , r = t.type;
  if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
  }
  t.hasOwnProperty("value") ? Gc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gc(e, t.type, Lr(t.defaultValue)),
  t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function im(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
          return;
      t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
  n !== "" && (e.name = ""),
  e.defaultChecked = !!e._wrapperState.initialChecked,
  n !== "" && (e.name = n)
}
function Gc(e, t, n) {
  (t !== "number" || ml(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ti = Array.isArray;
function ra(e, t, n, r) {
  if (e = e.options,
  t) {
      t = {};
      for (var o = 0; o < n.length; o++)
          t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
          o = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0)
  } else {
      for (n = "" + Lr(n),
      t = null,
      o = 0; o < e.length; o++) {
          if (e[o].value === n) {
              e[o].selected = !0,
              r && (e[o].defaultSelected = !0);
              return
          }
          t !== null || e[o].disabled || (t = e[o])
      }
      t !== null && (t.selected = !0)
  }
}
function Xc(e, t) {
  if (t.dangerouslySetInnerHTML != null)
      throw Error(z(91));
  return Xe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
  })
}
function sm(e, t) {
  var n = t.value;
  if (n == null) {
      if (n = t.children,
      t = t.defaultValue,
      n != null) {
          if (t != null)
              throw Error(z(92));
          if (ti(n)) {
              if (1 < n.length)
                  throw Error(z(93));
              n = n[0]
          }
          t = n
      }
      t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
      initialValue: Lr(n)
  }
}
function dv(e, t) {
  var n = Lr(t.value)
    , r = Lr(t.defaultValue);
  n != null && (n = "" + n,
  n !== e.value && (e.value = n),
  t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
  r != null && (e.defaultValue = "" + r)
}
function lm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function fv(e) {
  switch (e) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function Qc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Es, hv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, o)
      })
  }
  : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
      e.innerHTML = t;
  else {
      for (Es = Es || document.createElement("div"),
      Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = Es.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
      for (; t.firstChild; )
          e.appendChild(t.firstChild)
  }
});
function ki(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
      }
  }
  e.textContent = t
}
var ui = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
, Ib = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function(e) {
  Ib.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1),
      ui[t] = ui[e]
  })
});
function mv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ui.hasOwnProperty(e) && ui[e] ? ("" + t).trim() : t + "px"
}
function pv(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0
            , o = mv(n, t[n], r);
          n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : e[n] = o
      }
}
var Lb = Xe({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function Kc(e, t) {
  if (t) {
      if (Lb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(z(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
              throw Error(z(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
              throw Error(z(61))
      }
      if (t.style != null && typeof t.style != "object")
          throw Error(z(62))
  }
}
function qc(e, t) {
  if (e.indexOf("-") === -1)
      return typeof t.is == "string";
  switch (e) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
      return !1;
  default:
      return !0
  }
}
var Zc = null;
function Nf(e) {
  return e = e.target || e.srcElement || window,
  e.correspondingUseElement && (e = e.correspondingUseElement),
  e.nodeType === 3 ? e.parentNode : e
}
var Jc = null
, oa = null
, aa = null;
function um(e) {
  if (e = Ji(e)) {
      if (typeof Jc != "function")
          throw Error(z(280));
      var t = e.stateNode;
      t && (t = iu(t),
      Jc(e.stateNode, e.type, t))
  }
}
function gv(e) {
  oa ? aa ? aa.push(e) : aa = [e] : oa = e
}
function vv() {
  if (oa) {
      var e = oa
        , t = aa;
      if (aa = oa = null,
      um(e),
      t)
          for (e = 0; e < t.length; e++)
              um(t[e])
  }
}
function yv(e, t) {
  return e(t)
}
function wv() {}
var Ku = !1;
function xv(e, t, n) {
  if (Ku)
      return e(t, n);
  Ku = !0;
  try {
      return yv(e, t, n)
  } finally {
      Ku = !1,
      (oa !== null || aa !== null) && (wv(),
      vv())
  }
}
function Ci(e, t) {
  var n = e.stateNode;
  if (n === null)
      return null;
  var r = iu(n);
  if (r === null)
      return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type,
      r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
      e = !r;
      break e;
  default:
      e = !1
  }
  if (e)
      return null;
  if (n && typeof n != "function")
      throw Error(z(231, t, typeof n));
  return n
}
var ed = !1;
if (Kn)
  try {
      var za = {};
      Object.defineProperty(za, "passive", {
          get: function() {
              ed = !0
          }
      }),
      window.addEventListener("test", za, za),
      window.removeEventListener("test", za, za)
  } catch {
      ed = !1
  }
function Fb(e, t, n, r, o, a, i, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, u)
  } catch (d) {
      this.onError(d)
  }
}
var ci = !1
, pl = null
, gl = !1
, td = null
, Wb = {
  onError: function(e) {
      ci = !0,
      pl = e
  }
};
function $b(e, t, n, r, o, a, i, s, l) {
  ci = !1,
  pl = null,
  Fb.apply(Wb, arguments)
}
function zb(e, t, n, r, o, a, i, s, l) {
  if ($b.apply(this, arguments),
  ci) {
      if (ci) {
          var u = pl;
          ci = !1,
          pl = null
      } else
          throw Error(z(198));
      gl || (gl = !0,
      td = u)
  }
}
function Oo(e) {
  var t = e
    , n = e;
  if (e.alternate)
      for (; t.return; )
          t = t.return;
  else {
      e = t;
      do
          t = e,
          t.flags & 4098 && (n = t.return),
          e = t.return;
      while (e)
  }
  return t.tag === 3 ? n : null
}
function bv(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
          return t.dehydrated
  }
  return null
}
function cm(e) {
  if (Oo(e) !== e)
      throw Error(z(188))
}
function Bb(e) {
  var t = e.alternate;
  if (!t) {
      if (t = Oo(e),
      t === null)
          throw Error(z(188));
      return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null)
          break;
      var a = o.alternate;
      if (a === null) {
          if (r = o.return,
          r !== null) {
              n = r;
              continue
          }
          break
      }
      if (o.child === a.child) {
          for (a = o.child; a; ) {
              if (a === n)
                  return cm(o),
                  e;
              if (a === r)
                  return cm(o),
                  t;
              a = a.sibling
          }
          throw Error(z(188))
      }
      if (n.return !== r.return)
          n = o,
          r = a;
      else {
          for (var i = !1, s = o.child; s; ) {
              if (s === n) {
                  i = !0,
                  n = o,
                  r = a;
                  break
              }
              if (s === r) {
                  i = !0,
                  r = o,
                  n = a;
                  break
              }
              s = s.sibling
          }
          if (!i) {
              for (s = a.child; s; ) {
                  if (s === n) {
                      i = !0,
                      n = a,
                      r = o;
                      break
                  }
                  if (s === r) {
                      i = !0,
                      r = a,
                      n = o;
                      break
                  }
                  s = s.sibling
              }
              if (!i)
                  throw Error(z(189))
          }
      }
      if (n.alternate !== r)
          throw Error(z(190))
  }
  if (n.tag !== 3)
      throw Error(z(188));
  return n.stateNode.current === n ? e : t
}
function Sv(e) {
  return e = Bb(e),
  e !== null ? kv(e) : null
}
function kv(e) {
  if (e.tag === 5 || e.tag === 6)
      return e;
  for (e = e.child; e !== null; ) {
      var t = kv(e);
      if (t !== null)
          return t;
      e = e.sibling
  }
  return null
}
var Cv = Ht.unstable_scheduleCallback
, dm = Ht.unstable_cancelCallback
, Hb = Ht.unstable_shouldYield
, Ub = Ht.unstable_requestPaint
, Je = Ht.unstable_now
, Yb = Ht.unstable_getCurrentPriorityLevel
, Of = Ht.unstable_ImmediatePriority
, Ev = Ht.unstable_UserBlockingPriority
, vl = Ht.unstable_NormalPriority
, Vb = Ht.unstable_LowPriority
, Pv = Ht.unstable_IdlePriority
, nu = null
, _n = null;
function Gb(e) {
  if (_n && typeof _n.onCommitFiberRoot == "function")
      try {
          _n.onCommitFiberRoot(nu, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
}
var dn = Math.clz32 ? Math.clz32 : Kb
, Xb = Math.log
, Qb = Math.LN2;
function Kb(e) {
  return e >>>= 0,
  e === 0 ? 32 : 31 - (Xb(e) / Qb | 0) | 0
}
var Ps = 64
, Ms = 4194304;
function ni(e) {
  switch (e & -e) {
  case 1:
      return 1;
  case 2:
      return 2;
  case 4:
      return 4;
  case 8:
      return 8;
  case 16:
      return 16;
  case 32:
      return 32;
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return e & 4194240;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return e & 130023424;
  case 134217728:
      return 134217728;
  case 268435456:
      return 268435456;
  case 536870912:
      return 536870912;
  case 1073741824:
      return 1073741824;
  default:
      return e
  }
}
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
      return 0;
  var r = 0
    , o = e.suspendedLanes
    , a = e.pingedLanes
    , i = n & 268435455;
  if (i !== 0) {
      var s = i & ~o;
      s !== 0 ? r = ni(s) : (a &= i,
      a !== 0 && (r = ni(a)))
  } else
      i = n & ~o,
      i !== 0 ? r = ni(i) : a !== 0 && (r = ni(a));
  if (r === 0)
      return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
  a = t & -t,
  o >= a || o === 16 && (a & 4194240) !== 0))
      return t;
  if (r & 4 && (r |= n & 16),
  t = e.entangledLanes,
  t !== 0)
      for (e = e.entanglements,
      t &= r; 0 < t; )
          n = 31 - dn(t),
          o = 1 << n,
          r |= e[n],
          t &= ~o;
  return r
}
function qb(e, t) {
  switch (e) {
  case 1:
  case 2:
  case 4:
      return t + 250;
  case 8:
  case 16:
  case 32:
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return t + 5e3;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return -1;
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
      return -1;
  default:
      return -1
  }
}
function Zb(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var i = 31 - dn(a)
        , s = 1 << i
        , l = o[i];
      l === -1 ? (!(s & n) || s & r) && (o[i] = qb(s, t)) : l <= t && (e.expiredLanes |= s),
      a &= ~s
  }
}
function nd(e) {
  return e = e.pendingLanes & -1073741825,
  e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Mv() {
  var e = Ps;
  return Ps <<= 1,
  !(Ps & 4194240) && (Ps = 64),
  e
}
function qu(e) {
  for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
  return t
}
function qi(e, t, n) {
  e.pendingLanes |= t,
  t !== 536870912 && (e.suspendedLanes = 0,
  e.pingedLanes = 0),
  e = e.eventTimes,
  t = 31 - dn(t),
  e[t] = n
}
function Jb(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
  e.suspendedLanes = 0,
  e.pingedLanes = 0,
  e.expiredLanes &= t,
  e.mutableReadLanes &= t,
  e.entangledLanes &= t,
  t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - dn(n)
        , a = 1 << o;
      t[o] = 0,
      r[o] = -1,
      e[o] = -1,
      n &= ~a
  }
}
function Df(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
      var r = 31 - dn(n)
        , o = 1 << r;
      o & t | e[r] & t && (e[r] |= t),
      n &= ~o
  }
}
var Me = 0;
function Nv(e) {
  return e &= -e,
  1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ov, Tf, Dv, Tv, Rv, rd = !1, Ns = [], Nr = null, Or = null, Dr = null, Ei = new Map, Pi = new Map, Sr = [], eS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fm(e, t) {
  switch (e) {
  case "focusin":
  case "focusout":
      Nr = null;
      break;
  case "dragenter":
  case "dragleave":
      Or = null;
      break;
  case "mouseover":
  case "mouseout":
      Dr = null;
      break;
  case "pointerover":
  case "pointerout":
      Ei.delete(t.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      Pi.delete(t.pointerId)
  }
}
function Ba(e, t, n, r, o, a) {
  return e === null || e.nativeEvent !== a ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: a,
      targetContainers: [o]
  },
  t !== null && (t = Ji(t),
  t !== null && Tf(t)),
  e) : (e.eventSystemFlags |= r,
  t = e.targetContainers,
  o !== null && t.indexOf(o) === -1 && t.push(o),
  e)
}
function tS(e, t, n, r, o) {
  switch (t) {
  case "focusin":
      return Nr = Ba(Nr, e, t, n, r, o),
      !0;
  case "dragenter":
      return Or = Ba(Or, e, t, n, r, o),
      !0;
  case "mouseover":
      return Dr = Ba(Dr, e, t, n, r, o),
      !0;
  case "pointerover":
      var a = o.pointerId;
      return Ei.set(a, Ba(Ei.get(a) || null, e, t, n, r, o)),
      !0;
  case "gotpointercapture":
      return a = o.pointerId,
      Pi.set(a, Ba(Pi.get(a) || null, e, t, n, r, o)),
      !0
  }
  return !1
}
function _v(e) {
  var t = so(e.target);
  if (t !== null) {
      var n = Oo(t);
      if (n !== null) {
          if (t = n.tag,
          t === 13) {
              if (t = bv(n),
              t !== null) {
                  e.blockedOn = t,
                  Rv(e.priority, function() {
                      Dv(n)
                  });
                  return
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  e.blockedOn = null
}
function Ks(e) {
  if (e.blockedOn !== null)
      return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type,n);
          Zc = r,
          n.target.dispatchEvent(r),
          Zc = null
      } else
          return t = Ji(n),
          t !== null && Tf(t),
          e.blockedOn = n,
          !1;
      t.shift()
  }
  return !0
}
function hm(e, t, n) {
  Ks(e) && n.delete(t)
}
function nS() {
  rd = !1,
  Nr !== null && Ks(Nr) && (Nr = null),
  Or !== null && Ks(Or) && (Or = null),
  Dr !== null && Ks(Dr) && (Dr = null),
  Ei.forEach(hm),
  Pi.forEach(hm)
}
function Ha(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
  rd || (rd = !0,
  Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, nS)))
}
function Mi(e) {
  function t(o) {
      return Ha(o, e)
  }
  if (0 < Ns.length) {
      Ha(Ns[0], e);
      for (var n = 1; n < Ns.length; n++) {
          var r = Ns[n];
          r.blockedOn === e && (r.blockedOn = null)
      }
  }
  for (Nr !== null && Ha(Nr, e),
  Or !== null && Ha(Or, e),
  Dr !== null && Ha(Dr, e),
  Ei.forEach(t),
  Pi.forEach(t),
  n = 0; n < Sr.length; n++)
      r = Sr[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Sr.length && (n = Sr[0],
  n.blockedOn === null); )
      _v(n),
      n.blockedOn === null && Sr.shift()
}
var ia = ar.ReactCurrentBatchConfig
, wl = !0;
function rS(e, t, n, r) {
  var o = Me
    , a = ia.transition;
  ia.transition = null;
  try {
      Me = 1,
      Rf(e, t, n, r)
  } finally {
      Me = o,
      ia.transition = a
  }
}
function oS(e, t, n, r) {
  var o = Me
    , a = ia.transition;
  ia.transition = null;
  try {
      Me = 4,
      Rf(e, t, n, r)
  } finally {
      Me = o,
      ia.transition = a
  }
}
function Rf(e, t, n, r) {
  if (wl) {
      var o = od(e, t, n, r);
      if (o === null)
          sc(e, t, r, xl, n),
          fm(e, r);
      else if (tS(o, e, t, n, r))
          r.stopPropagation();
      else if (fm(e, r),
      t & 4 && -1 < eS.indexOf(e)) {
          for (; o !== null; ) {
              var a = Ji(o);
              if (a !== null && Ov(a),
              a = od(e, t, n, r),
              a === null && sc(e, t, r, xl, n),
              a === o)
                  break;
              o = a
          }
          o !== null && r.stopPropagation()
      } else
          sc(e, t, r, null, n)
  }
}
var xl = null;
function od(e, t, n, r) {
  if (xl = null,
  e = Nf(r),
  e = so(e),
  e !== null)
      if (t = Oo(e),
      t === null)
          e = null;
      else if (n = t.tag,
      n === 13) {
          if (e = bv(t),
          e !== null)
              return e;
          e = null
      } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
      } else
          t !== e && (e = null);
  return xl = e,
  null
}
function Av(e) {
  switch (e) {
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
      return 1;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "toggle":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
      return 4;
  case "message":
      switch (Yb()) {
      case Of:
          return 1;
      case Ev:
          return 4;
      case vl:
      case Vb:
          return 16;
      case Pv:
          return 536870912;
      default:
          return 16
      }
  default:
      return 16
  }
}
var Cr = null
, _f = null
, qs = null;
function jv() {
  if (qs)
      return qs;
  var e, t = _f, n = t.length, r, o = "value"in Cr ? Cr.value : Cr.textContent, a = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
      ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[a - r]; r++)
      ;
  return qs = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Zs(e) {
  var t = e.keyCode;
  return "charCode"in e ? (e = e.charCode,
  e === 0 && t === 13 && (e = 13)) : e = t,
  e === 10 && (e = 13),
  32 <= e || e === 13 ? e : 0
}
function Os() {
  return !0
}
function mm() {
  return !1
}
function Yt(e) {
  function t(n, r, o, a, i) {
      this._reactName = n,
      this._targetInst = o,
      this.type = r,
      this.nativeEvent = a,
      this.target = i,
      this.currentTarget = null;
      for (var s in e)
          e.hasOwnProperty(s) && (n = e[s],
          this[s] = n ? n(a) : a[s]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Os : mm,
      this.isPropagationStopped = mm,
      this
  }
  return Xe(t.prototype, {
      preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = Os)
      },
      stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = Os)
      },
      persist: function() {},
      isPersistent: Os
  }),
  t
}
var Da = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(e) {
      return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, Af = Yt(Da), Zi = Xe({}, Da, {
  view: 0,
  detail: 0
}), aS = Yt(Zi), Zu, Ju, Ua, ru = Xe({}, Zi, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: jf,
  button: 0,
  buttons: 0,
  relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function(e) {
      return "movementX"in e ? e.movementX : (e !== Ua && (Ua && e.type === "mousemove" ? (Zu = e.screenX - Ua.screenX,
      Ju = e.screenY - Ua.screenY) : Ju = Zu = 0,
      Ua = e),
      Zu)
  },
  movementY: function(e) {
      return "movementY"in e ? e.movementY : Ju
  }
}), pm = Yt(ru), iS = Xe({}, ru, {
  dataTransfer: 0
}), sS = Yt(iS), lS = Xe({}, Zi, {
  relatedTarget: 0
}), ec = Yt(lS), uS = Xe({}, Da, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), cS = Yt(uS), dS = Xe({}, Da, {
  clipboardData: function(e) {
      return "clipboardData"in e ? e.clipboardData : window.clipboardData
  }
}), fS = Yt(dS), hS = Xe({}, Da, {
  data: 0
}), gm = Yt(hS), mS = {
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
}, pS = {
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
}, gS = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function vS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gS[e]) ? !!t[e] : !1
}
function jf() {
  return vS
}
var yS = Xe({}, Zi, {
  key: function(e) {
      if (e.key) {
          var t = mS[e.key] || e.key;
          if (t !== "Unidentified")
              return t
      }
      return e.type === "keypress" ? (e = Zs(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pS[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: jf,
  charCode: function(e) {
      return e.type === "keypress" ? Zs(e) : 0
  },
  keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function(e) {
      return e.type === "keypress" ? Zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
, wS = Yt(yS)
, xS = Xe({}, ru, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
})
, vm = Yt(xS)
, bS = Xe({}, Zi, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: jf
})
, SS = Yt(bS)
, kS = Xe({}, Da, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
})
, CS = Yt(kS)
, ES = Xe({}, ru, {
  deltaX: function(e) {
      return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
  },
  deltaY: function(e) {
      return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
  },
  deltaZ: 0,
  deltaMode: 0
})
, PS = Yt(ES)
, MS = [9, 13, 27, 32]
, If = Kn && "CompositionEvent"in window
, di = null;
Kn && "documentMode"in document && (di = document.documentMode);
var NS = Kn && "TextEvent"in window && !di
, Iv = Kn && (!If || di && 8 < di && 11 >= di)
, ym = " "
, wm = !1;
function Lv(e, t) {
  switch (e) {
  case "keyup":
      return MS.indexOf(t.keyCode) !== -1;
  case "keydown":
      return t.keyCode !== 229;
  case "keypress":
  case "mousedown":
  case "focusout":
      return !0;
  default:
      return !1
  }
}
function Fv(e) {
  return e = e.detail,
  typeof e == "object" && "data"in e ? e.data : null
}
var Uo = !1;
function OS(e, t) {
  switch (e) {
  case "compositionend":
      return Fv(t);
  case "keypress":
      return t.which !== 32 ? null : (wm = !0,
      ym);
  case "textInput":
      return e = t.data,
      e === ym && wm ? null : e;
  default:
      return null
  }
}
function DS(e, t) {
  if (Uo)
      return e === "compositionend" || !If && Lv(e, t) ? (e = jv(),
      qs = _f = Cr = null,
      Uo = !1,
      e) : null;
  switch (e) {
  case "paste":
      return null;
  case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
              return t.char;
          if (t.which)
              return String.fromCharCode(t.which)
      }
      return null;
  case "compositionend":
      return Iv && t.locale !== "ko" ? null : t.data;
  default:
      return null
  }
}
var TS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function xm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TS[e.type] : t === "textarea"
}
function Wv(e, t, n, r) {
  gv(r),
  t = bl(t, "onChange"),
  0 < t.length && (n = new Af("onChange","change",null,n,r),
  e.push({
      event: n,
      listeners: t
  }))
}
var fi = null
, Ni = null;
function RS(e) {
  Kv(e, 0)
}
function ou(e) {
  var t = Go(e);
  if (uv(t))
      return e
}
function _S(e, t) {
  if (e === "change")
      return t
}
var $v = !1;
if (Kn) {
  var tc;
  if (Kn) {
      var nc = "oninput"in document;
      if (!nc) {
          var bm = document.createElement("div");
          bm.setAttribute("oninput", "return;"),
          nc = typeof bm.oninput == "function"
      }
      tc = nc
  } else
      tc = !1;
  $v = tc && (!document.documentMode || 9 < document.documentMode)
}
function Sm() {
  fi && (fi.detachEvent("onpropertychange", zv),
  Ni = fi = null)
}
function zv(e) {
  if (e.propertyName === "value" && ou(Ni)) {
      var t = [];
      Wv(t, Ni, e, Nf(e)),
      xv(RS, t)
  }
}
function AS(e, t, n) {
  e === "focusin" ? (Sm(),
  fi = t,
  Ni = n,
  fi.attachEvent("onpropertychange", zv)) : e === "focusout" && Sm()
}
function jS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ou(Ni)
}
function IS(e, t) {
  if (e === "click")
      return ou(t)
}
function LS(e, t) {
  if (e === "input" || e === "change")
      return ou(t)
}
function FS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var hn = typeof Object.is == "function" ? Object.is : FS;
function Oi(e, t) {
  if (hn(e, t))
      return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
      return !1;
  for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!$c.call(t, o) || !hn(e[o], t[o]))
          return !1
  }
  return !0
}
function km(e) {
  for (; e && e.firstChild; )
      e = e.firstChild;
  return e
}
function Cm(e, t) {
  var n = km(e);
  e = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (r = e + n.textContent.length,
          e <= t && r >= t)
              return {
                  node: n,
                  offset: t - e
              };
          e = r
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = km(n)
  }
}
function Bv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bv(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Hv() {
  for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = typeof t.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n)
          e = t.contentWindow;
      else
          break;
      t = ml(e.document)
  }
  return t
}
function Lf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function WS(e) {
  var t = Hv()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bv(n.ownerDocument.documentElement, n)) {
      if (r !== null && Lf(n)) {
          if (t = r.start,
          e = r.end,
          e === void 0 && (e = t),
          "selectionStart"in n)
              n.selectionStart = t,
              n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
          e.getSelection) {
              e = e.getSelection();
              var o = n.textContent.length
                , a = Math.min(r.start, o);
              r = r.end === void 0 ? a : Math.min(r.end, o),
              !e.extend && a > r && (o = r,
              r = a,
              a = o),
              o = Cm(n, a);
              var i = Cm(n, r);
              o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
              t.setStart(o.node, o.offset),
              e.removeAllRanges(),
              a > r ? (e.addRange(t),
              e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
              e.addRange(t)))
          }
      }
      for (t = [],
      e = n; e = e.parentNode; )
          e.nodeType === 1 && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
          });
      for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
          e = t[n],
          e.element.scrollLeft = e.left,
          e.element.scrollTop = e.top
  }
}
var $S = Kn && "documentMode"in document && 11 >= document.documentMode
, Yo = null
, ad = null
, hi = null
, id = !1;
function Em(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  id || Yo == null || Yo !== ml(r) || (r = Yo,
  "selectionStart"in r && Lf(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
  r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }),
  hi && Oi(hi, r) || (hi = r,
  r = bl(ad, "onSelect"),
  0 < r.length && (t = new Af("onSelect","select",null,t,n),
  e.push({
      event: t,
      listeners: r
  }),
  t.target = Yo)))
}
function Ds(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
  n["Webkit" + e] = "webkit" + t,
  n["Moz" + e] = "moz" + t,
  n
}
var Vo = {
  animationend: Ds("Animation", "AnimationEnd"),
  animationiteration: Ds("Animation", "AnimationIteration"),
  animationstart: Ds("Animation", "AnimationStart"),
  transitionend: Ds("Transition", "TransitionEnd")
}
, rc = {}
, Uv = {};
Kn && (Uv = document.createElement("div").style,
"AnimationEvent"in window || (delete Vo.animationend.animation,
delete Vo.animationiteration.animation,
delete Vo.animationstart.animation),
"TransitionEvent"in window || delete Vo.transitionend.transition);
function au(e) {
  if (rc[e])
      return rc[e];
  if (!Vo[e])
      return e;
  var t = Vo[e], n;
  for (n in t)
      if (t.hasOwnProperty(n) && n in Uv)
          return rc[e] = t[n];
  return e
}
var Yv = au("animationend")
, Vv = au("animationiteration")
, Gv = au("animationstart")
, Xv = au("transitionend")
, Qv = new Map
, Pm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gr(e, t) {
  Qv.set(e, t),
  No(t, [e])
}
for (var oc = 0; oc < Pm.length; oc++) {
  var ac = Pm[oc]
    , zS = ac.toLowerCase()
    , BS = ac[0].toUpperCase() + ac.slice(1);
  Gr(zS, "on" + BS)
}
Gr(Yv, "onAnimationEnd");
Gr(Vv, "onAnimationIteration");
Gr(Gv, "onAnimationStart");
Gr("dblclick", "onDoubleClick");
Gr("focusin", "onFocus");
Gr("focusout", "onBlur");
Gr(Xv, "onTransitionEnd");
pa("onMouseEnter", ["mouseout", "mouseover"]);
pa("onMouseLeave", ["mouseout", "mouseover"]);
pa("onPointerEnter", ["pointerout", "pointerover"]);
pa("onPointerLeave", ["pointerout", "pointerover"]);
No("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
No("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
No("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
No("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
No("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
No("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
, HS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
function Mm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
  zb(r, t, void 0, e),
  e.currentTarget = null
}
function Kv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n]
        , o = r.event;
      r = r.listeners;
      e: {
          var a = void 0;
          if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i]
                    , l = s.instance
                    , u = s.currentTarget;
                  if (s = s.listener,
                  l !== a && o.isPropagationStopped())
                      break e;
                  Mm(o, s, u),
                  a = l
              }
          else
              for (i = 0; i < r.length; i++) {
                  if (s = r[i],
                  l = s.instance,
                  u = s.currentTarget,
                  s = s.listener,
                  l !== a && o.isPropagationStopped())
                      break e;
                  Mm(o, s, u),
                  a = l
              }
      }
  }
  if (gl)
      throw e = td,
      gl = !1,
      td = null,
      e
}
function Fe(e, t) {
  var n = t[dd];
  n === void 0 && (n = t[dd] = new Set);
  var r = e + "__bubble";
  n.has(r) || (qv(t, e, 2, !1),
  n.add(r))
}
function ic(e, t, n) {
  var r = 0;
  t && (r |= 4),
  qv(n, e, r, t)
}
var Ts = "_reactListening" + Math.random().toString(36).slice(2);
function Di(e) {
  if (!e[Ts]) {
      e[Ts] = !0,
      ov.forEach(function(n) {
          n !== "selectionchange" && (HS.has(n) || ic(n, !1, e),
          ic(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ts] || (t[Ts] = !0,
      ic("selectionchange", !1, t))
  }
}
function qv(e, t, n, r) {
  switch (Av(t)) {
  case 1:
      var o = rS;
      break;
  case 4:
      o = oS;
      break;
  default:
      o = Rf
  }
  n = o.bind(null, t, n, e),
  o = void 0,
  !ed || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
  r ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
  }) : e.addEventListener(t, n, !1)
}
function sc(e, t, n, r, o) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
      e: for (; ; ) {
          if (r === null)
              return;
          var i = r.tag;
          if (i === 3 || i === 4) {
              var s = r.stateNode.containerInfo;
              if (s === o || s.nodeType === 8 && s.parentNode === o)
                  break;
              if (i === 4)
                  for (i = r.return; i !== null; ) {
                      var l = i.tag;
                      if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                      l === o || l.nodeType === 8 && l.parentNode === o))
                          return;
                      i = i.return
                  }
              for (; s !== null; ) {
                  if (i = so(s),
                  i === null)
                      return;
                  if (l = i.tag,
                  l === 5 || l === 6) {
                      r = a = i;
                      continue e
                  }
                  s = s.parentNode
              }
          }
          r = r.return
      }
  xv(function() {
      var u = a
        , d = Nf(n)
        , c = [];
      e: {
          var f = Qv.get(e);
          if (f !== void 0) {
              var g = Af
                , w = e;
              switch (e) {
              case "keypress":
                  if (Zs(n) === 0)
                      break e;
              case "keydown":
              case "keyup":
                  g = wS;
                  break;
              case "focusin":
                  w = "focus",
                  g = ec;
                  break;
              case "focusout":
                  w = "blur",
                  g = ec;
                  break;
              case "beforeblur":
              case "afterblur":
                  g = ec;
                  break;
              case "click":
                  if (n.button === 2)
                      break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  g = pm;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  g = sS;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  g = SS;
                  break;
              case Yv:
              case Vv:
              case Gv:
                  g = cS;
                  break;
              case Xv:
                  g = CS;
                  break;
              case "scroll":
                  g = aS;
                  break;
              case "wheel":
                  g = PS;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  g = fS;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  g = vm
              }
              var v = (t & 4) !== 0
                , x = !v && e === "scroll"
                , p = v ? f !== null ? f + "Capture" : null : f;
              v = [];
              for (var h = u, m; h !== null; ) {
                  m = h;
                  var S = m.stateNode;
                  if (m.tag === 5 && S !== null && (m = S,
                  p !== null && (S = Ci(h, p),
                  S != null && v.push(Ti(h, S, m)))),
                  x)
                      break;
                  h = h.return
              }
              0 < v.length && (f = new g(f,w,null,n,d),
              c.push({
                  event: f,
                  listeners: v
              }))
          }
      }
      if (!(t & 7)) {
          e: {
              if (f = e === "mouseover" || e === "pointerover",
              g = e === "mouseout" || e === "pointerout",
              f && n !== Zc && (w = n.relatedTarget || n.fromElement) && (so(w) || w[qn]))
                  break e;
              if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
              g ? (w = n.relatedTarget || n.toElement,
              g = u,
              w = w ? so(w) : null,
              w !== null && (x = Oo(w),
              w !== x || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null,
              w = u),
              g !== w)) {
                  if (v = pm,
                  S = "onMouseLeave",
                  p = "onMouseEnter",
                  h = "mouse",
                  (e === "pointerout" || e === "pointerover") && (v = vm,
                  S = "onPointerLeave",
                  p = "onPointerEnter",
                  h = "pointer"),
                  x = g == null ? f : Go(g),
                  m = w == null ? f : Go(w),
                  f = new v(S,h + "leave",g,n,d),
                  f.target = x,
                  f.relatedTarget = m,
                  S = null,
                  so(d) === u && (v = new v(p,h + "enter",w,n,d),
                  v.target = m,
                  v.relatedTarget = x,
                  S = v),
                  x = S,
                  g && w)
                      t: {
                          for (v = g,
                          p = w,
                          h = 0,
                          m = v; m; m = jo(m))
                              h++;
                          for (m = 0,
                          S = p; S; S = jo(S))
                              m++;
                          for (; 0 < h - m; )
                              v = jo(v),
                              h--;
                          for (; 0 < m - h; )
                              p = jo(p),
                              m--;
                          for (; h--; ) {
                              if (v === p || p !== null && v === p.alternate)
                                  break t;
                              v = jo(v),
                              p = jo(p)
                          }
                          v = null
                      }
                  else
                      v = null;
                  g !== null && Nm(c, f, g, v, !1),
                  w !== null && x !== null && Nm(c, x, w, v, !0)
              }
          }
          e: {
              if (f = u ? Go(u) : window,
              g = f.nodeName && f.nodeName.toLowerCase(),
              g === "select" || g === "input" && f.type === "file")
                  var E = _S;
              else if (xm(f))
                  if ($v)
                      E = LS;
                  else {
                      E = jS;
                      var N = AS
                  }
              else
                  (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = IS);
              if (E && (E = E(e, u))) {
                  Wv(c, E, n, d);
                  break e
              }
              N && N(e, f, u),
              e === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && Gc(f, "number", f.value)
          }
          switch (N = u ? Go(u) : window,
          e) {
          case "focusin":
              (xm(N) || N.contentEditable === "true") && (Yo = N,
              ad = u,
              hi = null);
              break;
          case "focusout":
              hi = ad = Yo = null;
              break;
          case "mousedown":
              id = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              id = !1,
              Em(c, n, d);
              break;
          case "selectionchange":
              if ($S)
                  break;
          case "keydown":
          case "keyup":
              Em(c, n, d)
          }
          var O;
          if (If)
              e: {
                  switch (e) {
                  case "compositionstart":
                      var k = "onCompositionStart";
                      break e;
                  case "compositionend":
                      k = "onCompositionEnd";
                      break e;
                  case "compositionupdate":
                      k = "onCompositionUpdate";
                      break e
                  }
                  k = void 0
              }
          else
              Uo ? Lv(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
          k && (Iv && n.locale !== "ko" && (Uo || k !== "onCompositionStart" ? k === "onCompositionEnd" && Uo && (O = jv()) : (Cr = d,
          _f = "value"in Cr ? Cr.value : Cr.textContent,
          Uo = !0)),
          N = bl(u, k),
          0 < N.length && (k = new gm(k,e,null,n,d),
          c.push({
              event: k,
              listeners: N
          }),
          O ? k.data = O : (O = Fv(n),
          O !== null && (k.data = O)))),
          (O = NS ? OS(e, n) : DS(e, n)) && (u = bl(u, "onBeforeInput"),
          0 < u.length && (d = new gm("onBeforeInput","beforeinput",null,n,d),
          c.push({
              event: d,
              listeners: u
          }),
          d.data = O))
      }
      Kv(c, t)
  })
}
function Ti(e, t, n) {
  return {
      instance: e,
      listener: t,
      currentTarget: n
  }
}
function bl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e
        , a = o.stateNode;
      o.tag === 5 && a !== null && (o = a,
      a = Ci(e, n),
      a != null && r.unshift(Ti(e, a, o)),
      a = Ci(e, t),
      a != null && r.push(Ti(e, a, o))),
      e = e.return
  }
  return r
}
function jo(e) {
  if (e === null)
      return null;
  do
      e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function Nm(e, t, n, r, o) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n
        , l = s.alternate
        , u = s.stateNode;
      if (l !== null && l === r)
          break;
      s.tag === 5 && u !== null && (s = u,
      o ? (l = Ci(n, a),
      l != null && i.unshift(Ti(n, l, s))) : o || (l = Ci(n, a),
      l != null && i.push(Ti(n, l, s)))),
      n = n.return
  }
  i.length !== 0 && e.push({
      event: t,
      listeners: i
  })
}
var US = /\r\n?/g
, YS = /\u0000|\uFFFD/g;
function Om(e) {
  return (typeof e == "string" ? e : "" + e).replace(US, `
`).replace(YS, "")
}
function Rs(e, t, n) {
  if (t = Om(t),
  Om(e) !== t && n)
      throw Error(z(425))
}
function Sl() {}
var sd = null
, ld = null;
function ud(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var cd = typeof setTimeout == "function" ? setTimeout : void 0
, VS = typeof clearTimeout == "function" ? clearTimeout : void 0
, Dm = typeof Promise == "function" ? Promise : void 0
, GS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dm < "u" ? function(e) {
  return Dm.resolve(null).then(e).catch(XS)
}
: cd;
function XS(e) {
  setTimeout(function() {
      throw e
  })
}
function lc(e, t) {
  var n = t
    , r = 0;
  do {
      var o = n.nextSibling;
      if (e.removeChild(n),
      o && o.nodeType === 8)
          if (n = o.data,
          n === "/$") {
              if (r === 0) {
                  e.removeChild(o),
                  Mi(t);
                  return
              }
              r--
          } else
              n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o
  } while (n);
  Mi(t)
}
function Tr(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
          break;
      if (t === 8) {
          if (t = e.data,
          t === "$" || t === "$!" || t === "$?")
              break;
          if (t === "/$")
              return null
      }
  }
  return e
}
function Tm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0)
                  return e;
              t--
          } else
              n === "/$" && t++
      }
      e = e.previousSibling
  }
  return null
}
var Ta = Math.random().toString(36).slice(2)
, En = "__reactFiber$" + Ta
, Ri = "__reactProps$" + Ta
, qn = "__reactContainer$" + Ta
, dd = "__reactEvents$" + Ta
, QS = "__reactListeners$" + Ta
, KS = "__reactHandles$" + Ta;
function so(e) {
  var t = e[En];
  if (t)
      return t;
  for (var n = e.parentNode; n; ) {
      if (t = n[qn] || n[En]) {
          if (n = t.alternate,
          t.child !== null || n !== null && n.child !== null)
              for (e = Tm(e); e !== null; ) {
                  if (n = e[En])
                      return n;
                  e = Tm(e)
              }
          return t
      }
      e = n,
      n = e.parentNode
  }
  return null
}
function Ji(e) {
  return e = e[En] || e[qn],
  !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Go(e) {
  if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
  throw Error(z(33))
}
function iu(e) {
  return e[Ri] || null
}
var fd = []
, Xo = -1;
function Xr(e) {
  return {
      current: e
  }
}
function We(e) {
  0 > Xo || (e.current = fd[Xo],
  fd[Xo] = null,
  Xo--)
}
function Re(e, t) {
  Xo++,
  fd[Xo] = e.current,
  e.current = t
}
var Fr = {}
, wt = Xr(Fr)
, Dt = Xr(!1)
, yo = Fr;
function ga(e, t) {
  var n = e.type.contextTypes;
  if (!n)
      return Fr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, a;
  for (a in n)
      o[a] = t[a];
  return r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = t,
  e.__reactInternalMemoizedMaskedChildContext = o),
  o
}
function Tt(e) {
  return e = e.childContextTypes,
  e != null
}
function kl() {
  We(Dt),
  We(wt)
}
function Rm(e, t, n) {
  if (wt.current !== Fr)
      throw Error(z(168));
  Re(wt, t),
  Re(Dt, n)
}
function Zv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
  typeof r.getChildContext != "function")
      return n;
  r = r.getChildContext();
  for (var o in r)
      if (!(o in t))
          throw Error(z(108, Ab(e) || "Unknown", o));
  return Xe({}, n, r)
}
function Cl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fr,
  yo = wt.current,
  Re(wt, e),
  Re(Dt, Dt.current),
  !0
}
function _m(e, t, n) {
  var r = e.stateNode;
  if (!r)
      throw Error(z(169));
  n ? (e = Zv(e, t, yo),
  r.__reactInternalMemoizedMergedChildContext = e,
  We(Dt),
  We(wt),
  Re(wt, e)) : We(Dt),
  Re(Dt, n)
}
var Yn = null
, su = !1
, uc = !1;
function Jv(e) {
  Yn === null ? Yn = [e] : Yn.push(e)
}
function qS(e) {
  su = !0,
  Jv(e)
}
function Qr() {
  if (!uc && Yn !== null) {
      uc = !0;
      var e = 0
        , t = Me;
      try {
          var n = Yn;
          for (Me = 1; e < n.length; e++) {
              var r = n[e];
              do
                  r = r(!0);
              while (r !== null)
          }
          Yn = null,
          su = !1
      } catch (o) {
          throw Yn !== null && (Yn = Yn.slice(e + 1)),
          Cv(Of, Qr),
          o
      } finally {
          Me = t,
          uc = !1
      }
  }
  return null
}
var Qo = []
, Ko = 0
, El = null
, Pl = 0
, Xt = []
, Qt = 0
, wo = null
, Vn = 1
, Gn = "";
function to(e, t) {
  Qo[Ko++] = Pl,
  Qo[Ko++] = El,
  El = e,
  Pl = t
}
function ey(e, t, n) {
  Xt[Qt++] = Vn,
  Xt[Qt++] = Gn,
  Xt[Qt++] = wo,
  wo = e;
  var r = Vn;
  e = Gn;
  var o = 32 - dn(r) - 1;
  r &= ~(1 << o),
  n += 1;
  var a = 32 - dn(t) + o;
  if (30 < a) {
      var i = o - o % 5;
      a = (r & (1 << i) - 1).toString(32),
      r >>= i,
      o -= i,
      Vn = 1 << 32 - dn(t) + o | n << o | r,
      Gn = a + e
  } else
      Vn = 1 << a | n << o | r,
      Gn = e
}
function Ff(e) {
  e.return !== null && (to(e, 1),
  ey(e, 1, 0))
}
function Wf(e) {
  for (; e === El; )
      El = Qo[--Ko],
      Qo[Ko] = null,
      Pl = Qo[--Ko],
      Qo[Ko] = null;
  for (; e === wo; )
      wo = Xt[--Qt],
      Xt[Qt] = null,
      Gn = Xt[--Qt],
      Xt[Qt] = null,
      Vn = Xt[--Qt],
      Xt[Qt] = null
}
var Wt = null
, Ft = null
, ze = !1
, ln = null;
function ty(e, t) {
  var n = Kt(5, null, null, 0);
  n.elementType = "DELETED",
  n.stateNode = t,
  n.return = e,
  t = e.deletions,
  t === null ? (e.deletions = [n],
  e.flags |= 16) : t.push(n)
}
function Am(e, t) {
  switch (e.tag) {
  case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
      t !== null ? (e.stateNode = t,
      Wt = e,
      Ft = Tr(t.firstChild),
      !0) : !1;
  case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
      t !== null ? (e.stateNode = t,
      Wt = e,
      Ft = null,
      !0) : !1;
  case 13:
      return t = t.nodeType !== 8 ? null : t,
      t !== null ? (n = wo !== null ? {
          id: Vn,
          overflow: Gn
      } : null,
      e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
      },
      n = Kt(18, null, null, 0),
      n.stateNode = t,
      n.return = e,
      e.child = n,
      Wt = e,
      Ft = null,
      !0) : !1;
  default:
      return !1
  }
}
function hd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function md(e) {
  if (ze) {
      var t = Ft;
      if (t) {
          var n = t;
          if (!Am(e, t)) {
              if (hd(e))
                  throw Error(z(418));
              t = Tr(n.nextSibling);
              var r = Wt;
              t && Am(e, t) ? ty(r, n) : (e.flags = e.flags & -4097 | 2,
              ze = !1,
              Wt = e)
          }
      } else {
          if (hd(e))
              throw Error(z(418));
          e.flags = e.flags & -4097 | 2,
          ze = !1,
          Wt = e
      }
  }
}
function jm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
  Wt = e
}
function _s(e) {
  if (e !== Wt)
      return !1;
  if (!ze)
      return jm(e),
      ze = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
  t = t !== "head" && t !== "body" && !ud(e.type, e.memoizedProps)),
  t && (t = Ft)) {
      if (hd(e))
          throw ny(),
          Error(z(418));
      for (; t; )
          ty(e, t),
          t = Tr(t.nextSibling)
  }
  if (jm(e),
  e.tag === 13) {
      if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
          throw Error(z(317));
      e: {
          for (e = e.nextSibling,
          t = 0; e; ) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          Ft = Tr(e.nextSibling);
                          break e
                      }
                      t--
                  } else
                      n !== "$" && n !== "$!" && n !== "$?" || t++
              }
              e = e.nextSibling
          }
          Ft = null
      }
  } else
      Ft = Wt ? Tr(e.stateNode.nextSibling) : null;
  return !0
}
function ny() {
  for (var e = Ft; e; )
      e = Tr(e.nextSibling)
}
function va() {
  Ft = Wt = null,
  ze = !1
}
function $f(e) {
  ln === null ? ln = [e] : ln.push(e)
}
var ZS = ar.ReactCurrentBatchConfig;
function Ya(e, t, n) {
  if (e = n.ref,
  e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
          if (n = n._owner,
          n) {
              if (n.tag !== 1)
                  throw Error(z(309));
              var r = n.stateNode
          }
          if (!r)
              throw Error(z(147, e));
          var o = r
            , a = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
              var s = o.refs;
              i === null ? delete s[a] : s[a] = i
          }
          ,
          t._stringRef = a,
          t)
      }
      if (typeof e != "string")
          throw Error(z(284));
      if (!n._owner)
          throw Error(z(290, e))
  }
  return e
}
function As(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Im(e) {
  var t = e._init;
  return t(e._payload)
}
function ry(e) {
  function t(p, h) {
      if (e) {
          var m = p.deletions;
          m === null ? (p.deletions = [h],
          p.flags |= 16) : m.push(h)
      }
  }
  function n(p, h) {
      if (!e)
          return null;
      for (; h !== null; )
          t(p, h),
          h = h.sibling;
      return null
  }
  function r(p, h) {
      for (p = new Map; h !== null; )
          h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
          h = h.sibling;
      return p
  }
  function o(p, h) {
      return p = jr(p, h),
      p.index = 0,
      p.sibling = null,
      p
  }
  function a(p, h, m) {
      return p.index = m,
      e ? (m = p.alternate,
      m !== null ? (m = m.index,
      m < h ? (p.flags |= 2,
      h) : m) : (p.flags |= 2,
      h)) : (p.flags |= 1048576,
      h)
  }
  function i(p) {
      return e && p.alternate === null && (p.flags |= 2),
      p
  }
  function s(p, h, m, S) {
      return h === null || h.tag !== 6 ? (h = gc(m, p.mode, S),
      h.return = p,
      h) : (h = o(h, m),
      h.return = p,
      h)
  }
  function l(p, h, m, S) {
      var E = m.type;
      return E === Ho ? d(p, h, m.props.children, S, m.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === xr && Im(E) === h.type) ? (S = o(h, m.props),
      S.ref = Ya(p, h, m),
      S.return = p,
      S) : (S = al(m.type, m.key, m.props, null, p.mode, S),
      S.ref = Ya(p, h, m),
      S.return = p,
      S)
  }
  function u(p, h, m, S) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = vc(m, p.mode, S),
      h.return = p,
      h) : (h = o(h, m.children || []),
      h.return = p,
      h)
  }
  function d(p, h, m, S, E) {
      return h === null || h.tag !== 7 ? (h = ho(m, p.mode, S, E),
      h.return = p,
      h) : (h = o(h, m),
      h.return = p,
      h)
  }
  function c(p, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
          return h = gc("" + h, p.mode, m),
          h.return = p,
          h;
      if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
          case ks:
              return m = al(h.type, h.key, h.props, null, p.mode, m),
              m.ref = Ya(p, null, h),
              m.return = p,
              m;
          case Bo:
              return h = vc(h, p.mode, m),
              h.return = p,
              h;
          case xr:
              var S = h._init;
              return c(p, S(h._payload), m)
          }
          if (ti(h) || $a(h))
              return h = ho(h, p.mode, m, null),
              h.return = p,
              h;
          As(p, h)
      }
      return null
  }
  function f(p, h, m, S) {
      var E = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
          return E !== null ? null : s(p, h, "" + m, S);
      if (typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
          case ks:
              return m.key === E ? l(p, h, m, S) : null;
          case Bo:
              return m.key === E ? u(p, h, m, S) : null;
          case xr:
              return E = m._init,
              f(p, h, E(m._payload), S)
          }
          if (ti(m) || $a(m))
              return E !== null ? null : d(p, h, m, S, null);
          As(p, m)
      }
      return null
  }
  function g(p, h, m, S, E) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
          return p = p.get(m) || null,
          s(h, p, "" + S, E);
      if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
          case ks:
              return p = p.get(S.key === null ? m : S.key) || null,
              l(h, p, S, E);
          case Bo:
              return p = p.get(S.key === null ? m : S.key) || null,
              u(h, p, S, E);
          case xr:
              var N = S._init;
              return g(p, h, m, N(S._payload), E)
          }
          if (ti(S) || $a(S))
              return p = p.get(m) || null,
              d(h, p, S, E, null);
          As(h, S)
      }
      return null
  }
  function w(p, h, m, S) {
      for (var E = null, N = null, O = h, k = h = 0, L = null; O !== null && k < m.length; k++) {
          O.index > k ? (L = O,
          O = null) : L = O.sibling;
          var _ = f(p, O, m[k], S);
          if (_ === null) {
              O === null && (O = L);
              break
          }
          e && O && _.alternate === null && t(p, O),
          h = a(_, h, k),
          N === null ? E = _ : N.sibling = _,
          N = _,
          O = L
      }
      if (k === m.length)
          return n(p, O),
          ze && to(p, k),
          E;
      if (O === null) {
          for (; k < m.length; k++)
              O = c(p, m[k], S),
              O !== null && (h = a(O, h, k),
              N === null ? E = O : N.sibling = O,
              N = O);
          return ze && to(p, k),
          E
      }
      for (O = r(p, O); k < m.length; k++)
          L = g(O, p, k, m[k], S),
          L !== null && (e && L.alternate !== null && O.delete(L.key === null ? k : L.key),
          h = a(L, h, k),
          N === null ? E = L : N.sibling = L,
          N = L);
      return e && O.forEach(function(F) {
          return t(p, F)
      }),
      ze && to(p, k),
      E
  }
  function v(p, h, m, S) {
      var E = $a(m);
      if (typeof E != "function")
          throw Error(z(150));
      if (m = E.call(m),
      m == null)
          throw Error(z(151));
      for (var N = E = null, O = h, k = h = 0, L = null, _ = m.next(); O !== null && !_.done; k++,
      _ = m.next()) {
          O.index > k ? (L = O,
          O = null) : L = O.sibling;
          var F = f(p, O, _.value, S);
          if (F === null) {
              O === null && (O = L);
              break
          }
          e && O && F.alternate === null && t(p, O),
          h = a(F, h, k),
          N === null ? E = F : N.sibling = F,
          N = F,
          O = L
      }
      if (_.done)
          return n(p, O),
          ze && to(p, k),
          E;
      if (O === null) {
          for (; !_.done; k++,
          _ = m.next())
              _ = c(p, _.value, S),
              _ !== null && (h = a(_, h, k),
              N === null ? E = _ : N.sibling = _,
              N = _);
          return ze && to(p, k),
          E
      }
      for (O = r(p, O); !_.done; k++,
      _ = m.next())
          _ = g(O, p, k, _.value, S),
          _ !== null && (e && _.alternate !== null && O.delete(_.key === null ? k : _.key),
          h = a(_, h, k),
          N === null ? E = _ : N.sibling = _,
          N = _);
      return e && O.forEach(function(H) {
          return t(p, H)
      }),
      ze && to(p, k),
      E
  }
  function x(p, h, m, S) {
      if (typeof m == "object" && m !== null && m.type === Ho && m.key === null && (m = m.props.children),
      typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
          case ks:
              e: {
                  for (var E = m.key, N = h; N !== null; ) {
                      if (N.key === E) {
                          if (E = m.type,
                          E === Ho) {
                              if (N.tag === 7) {
                                  n(p, N.sibling),
                                  h = o(N, m.props.children),
                                  h.return = p,
                                  p = h;
                                  break e
                              }
                          } else if (N.elementType === E || typeof E == "object" && E !== null && E.$$typeof === xr && Im(E) === N.type) {
                              n(p, N.sibling),
                              h = o(N, m.props),
                              h.ref = Ya(p, N, m),
                              h.return = p,
                              p = h;
                              break e
                          }
                          n(p, N);
                          break
                      } else
                          t(p, N);
                      N = N.sibling
                  }
                  m.type === Ho ? (h = ho(m.props.children, p.mode, S, m.key),
                  h.return = p,
                  p = h) : (S = al(m.type, m.key, m.props, null, p.mode, S),
                  S.ref = Ya(p, h, m),
                  S.return = p,
                  p = S)
              }
              return i(p);
          case Bo:
              e: {
                  for (N = m.key; h !== null; ) {
                      if (h.key === N)
                          if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                              n(p, h.sibling),
                              h = o(h, m.children || []),
                              h.return = p,
                              p = h;
                              break e
                          } else {
                              n(p, h);
                              break
                          }
                      else
                          t(p, h);
                      h = h.sibling
                  }
                  h = vc(m, p.mode, S),
                  h.return = p,
                  p = h
              }
              return i(p);
          case xr:
              return N = m._init,
              x(p, h, N(m._payload), S)
          }
          if (ti(m))
              return w(p, h, m, S);
          if ($a(m))
              return v(p, h, m, S);
          As(p, m)
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
      h !== null && h.tag === 6 ? (n(p, h.sibling),
      h = o(h, m),
      h.return = p,
      p = h) : (n(p, h),
      h = gc(m, p.mode, S),
      h.return = p,
      p = h),
      i(p)) : n(p, h)
  }
  return x
}
var ya = ry(!0)
, oy = ry(!1)
, Ml = Xr(null)
, Nl = null
, qo = null
, zf = null;
function Bf() {
  zf = qo = Nl = null
}
function Hf(e) {
  var t = Ml.current;
  We(Ml),
  e._currentValue = t
}
function pd(e, t, n) {
  for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
          break;
      e = e.return
  }
}
function sa(e, t) {
  Nl = e,
  zf = qo = null,
  e = e.dependencies,
  e !== null && e.firstContext !== null && (e.lanes & t && (Ot = !0),
  e.firstContext = null)
}
function Zt(e) {
  var t = e._currentValue;
  if (zf !== e)
      if (e = {
          context: e,
          memoizedValue: t,
          next: null
      },
      qo === null) {
          if (Nl === null)
              throw Error(z(308));
          qo = e,
          Nl.dependencies = {
              lanes: 0,
              firstContext: e
          }
      } else
          qo = qo.next = e;
  return t
}
var lo = null;
function Uf(e) {
  lo === null ? lo = [e] : lo.push(e)
}
function ay(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n,
  Uf(t)) : (n.next = o.next,
  o.next = n),
  t.interleaved = n,
  Zn(e, r)
}
function Zn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
  n = e,
  e = e.return; e !== null; )
      e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var br = !1;
function Yf(e) {
  e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
          pending: null,
          interleaved: null,
          lanes: 0
      },
      effects: null
  }
}
function iy(e, t) {
  e = e.updateQueue,
  t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
  })
}
function Qn(e, t) {
  return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}
function Rr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
      return null;
  if (r = r.shared,
  ye & 2) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next,
      o.next = t),
      r.pending = t,
      Zn(e, n)
  }
  return o = r.interleaved,
  o === null ? (t.next = t,
  Uf(r)) : (t.next = o.next,
  o.next = t),
  r.interleaved = t,
  Zn(e, n)
}
function Js(e, t, n) {
  if (t = t.updateQueue,
  t !== null && (t = t.shared,
  (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Df(e, n)
  }
}
function Lm(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
  n === r)) {
      var o = null
        , a = null;
      if (n = n.firstBaseUpdate,
      n !== null) {
          do {
              var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              a === null ? o = a = i : a = a.next = i,
              n = n.next
          } while (n !== null);
          a === null ? o = a = t : a = a.next = t
      } else
          o = a = t;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects
      },
      e.updateQueue = n;
      return
  }
  e = n.lastBaseUpdate,
  e === null ? n.firstBaseUpdate = t : e.next = t,
  n.lastBaseUpdate = t
}
function Ol(e, t, n, r) {
  var o = e.updateQueue;
  br = !1;
  var a = o.firstBaseUpdate
    , i = o.lastBaseUpdate
    , s = o.shared.pending;
  if (s !== null) {
      o.shared.pending = null;
      var l = s
        , u = l.next;
      l.next = null,
      i === null ? a = u : i.next = u,
      i = l;
      var d = e.alternate;
      d !== null && (d = d.updateQueue,
      s = d.lastBaseUpdate,
      s !== i && (s === null ? d.firstBaseUpdate = u : s.next = u,
      d.lastBaseUpdate = l))
  }
  if (a !== null) {
      var c = o.baseState;
      i = 0,
      d = u = l = null,
      s = a;
      do {
          var f = s.lane
            , g = s.eventTime;
          if ((r & f) === f) {
              d !== null && (d = d.next = {
                  eventTime: g,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null
              });
              e: {
                  var w = e
                    , v = s;
                  switch (f = t,
                  g = n,
                  v.tag) {
                  case 1:
                      if (w = v.payload,
                      typeof w == "function") {
                          c = w.call(g, c, f);
                          break e
                      }
                      c = w;
                      break e;
                  case 3:
                      w.flags = w.flags & -65537 | 128;
                  case 0:
                      if (w = v.payload,
                      f = typeof w == "function" ? w.call(g, c, f) : w,
                      f == null)
                          break e;
                      c = Xe({}, c, f);
                      break e;
                  case 2:
                      br = !0
                  }
              }
              s.callback !== null && s.lane !== 0 && (e.flags |= 64,
              f = o.effects,
              f === null ? o.effects = [s] : f.push(s))
          } else
              g = {
                  eventTime: g,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null
              },
              d === null ? (u = d = g,
              l = c) : d = d.next = g,
              i |= f;
          if (s = s.next,
          s === null) {
              if (s = o.shared.pending,
              s === null)
                  break;
              f = s,
              s = f.next,
              f.next = null,
              o.lastBaseUpdate = f,
              o.shared.pending = null
          }
      } while (!0);
      if (d === null && (l = c),
      o.baseState = l,
      o.firstBaseUpdate = u,
      o.lastBaseUpdate = d,
      t = o.shared.interleaved,
      t !== null) {
          o = t;
          do
              i |= o.lane,
              o = o.next;
          while (o !== t)
      } else
          a === null && (o.shared.lanes = 0);
      bo |= i,
      e.lanes = i,
      e.memoizedState = c
  }
}
function Fm(e, t, n) {
  if (e = t.effects,
  t.effects = null,
  e !== null)
      for (t = 0; t < e.length; t++) {
          var r = e[t]
            , o = r.callback;
          if (o !== null) {
              if (r.callback = null,
              r = n,
              typeof o != "function")
                  throw Error(z(191, o));
              o.call(r)
          }
      }
}
var es = {}
, An = Xr(es)
, _i = Xr(es)
, Ai = Xr(es);
function uo(e) {
  if (e === es)
      throw Error(z(174));
  return e
}
function Vf(e, t) {
  switch (Re(Ai, t),
  Re(_i, e),
  Re(An, es),
  e = t.nodeType,
  e) {
  case 9:
  case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qc(null, "");
      break;
  default:
      e = e === 8 ? t.parentNode : t,
      t = e.namespaceURI || null,
      e = e.tagName,
      t = Qc(t, e)
  }
  We(An),
  Re(An, t)
}
function wa() {
  We(An),
  We(_i),
  We(Ai)
}
function sy(e) {
  uo(Ai.current);
  var t = uo(An.current)
    , n = Qc(t, e.type);
  t !== n && (Re(_i, e),
  Re(An, n))
}
function Gf(e) {
  _i.current === e && (We(An),
  We(_i))
}
var Ve = Xr(0);
function Dl(e) {
  for (var t = e; t !== null; ) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated,
          n === null || n.data === "$?" || n.data === "$!"))
              return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128)
              return t
      } else if (t.child !== null) {
          t.child.return = t,
          t = t.child;
          continue
      }
      if (t === e)
          break;
      for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
              return null;
          t = t.return
      }
      t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var cc = [];
function Xf() {
  for (var e = 0; e < cc.length; e++)
      cc[e]._workInProgressVersionPrimary = null;
  cc.length = 0
}
var el = ar.ReactCurrentDispatcher
, dc = ar.ReactCurrentBatchConfig
, xo = 0
, Ge = null
, ot = null
, lt = null
, Tl = !1
, mi = !1
, ji = 0
, JS = 0;
function gt() {
  throw Error(z(321))
}
function Qf(e, t) {
  if (t === null)
      return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
      if (!hn(e[n], t[n]))
          return !1;
  return !0
}
function Kf(e, t, n, r, o, a) {
  if (xo = a,
  Ge = t,
  t.memoizedState = null,
  t.updateQueue = null,
  t.lanes = 0,
  el.current = e === null || e.memoizedState === null ? r2 : o2,
  e = n(r, o),
  mi) {
      a = 0;
      do {
          if (mi = !1,
          ji = 0,
          25 <= a)
              throw Error(z(301));
          a += 1,
          lt = ot = null,
          t.updateQueue = null,
          el.current = a2,
          e = n(r, o)
      } while (mi)
  }
  if (el.current = Rl,
  t = ot !== null && ot.next !== null,
  xo = 0,
  lt = ot = Ge = null,
  Tl = !1,
  t)
      throw Error(z(300));
  return e
}
function qf() {
  var e = ji !== 0;
  return ji = 0,
  e
}
function kn() {
  var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return lt === null ? Ge.memoizedState = lt = e : lt = lt.next = e,
  lt
}
function Jt() {
  if (ot === null) {
      var e = Ge.alternate;
      e = e !== null ? e.memoizedState : null
  } else
      e = ot.next;
  var t = lt === null ? Ge.memoizedState : lt.next;
  if (t !== null)
      lt = t,
      ot = e;
  else {
      if (e === null)
          throw Error(z(310));
      ot = e,
      e = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null
      },
      lt === null ? Ge.memoizedState = lt = e : lt = lt.next = e
  }
  return lt
}
function Ii(e, t) {
  return typeof t == "function" ? t(e) : t
}
function fc(e) {
  var t = Jt()
    , n = t.queue;
  if (n === null)
      throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ot
    , o = r.baseQueue
    , a = n.pending;
  if (a !== null) {
      if (o !== null) {
          var i = o.next;
          o.next = a.next,
          a.next = i
      }
      r.baseQueue = o = a,
      n.pending = null
  }
  if (o !== null) {
      a = o.next,
      r = r.baseState;
      var s = i = null
        , l = null
        , u = a;
      do {
          var d = u.lane;
          if ((xo & d) === d)
              l !== null && (l = l.next = {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
              }),
              r = u.hasEagerState ? u.eagerState : e(r, u.action);
          else {
              var c = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
              };
              l === null ? (s = l = c,
              i = r) : l = l.next = c,
              Ge.lanes |= d,
              bo |= d
          }
          u = u.next
      } while (u !== null && u !== a);
      l === null ? i = r : l.next = s,
      hn(r, t.memoizedState) || (Ot = !0),
      t.memoizedState = r,
      t.baseState = i,
      t.baseQueue = l,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
  e !== null) {
      o = e;
      do
          a = o.lane,
          Ge.lanes |= a,
          bo |= a,
          o = o.next;
      while (o !== e)
  } else
      o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function hc(e) {
  var t = Jt()
    , n = t.queue;
  if (n === null)
      throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , o = n.pending
    , a = t.memoizedState;
  if (o !== null) {
      n.pending = null;
      var i = o = o.next;
      do
          a = e(a, i.action),
          i = i.next;
      while (i !== o);
      hn(a, t.memoizedState) || (Ot = !0),
      t.memoizedState = a,
      t.baseQueue === null && (t.baseState = a),
      n.lastRenderedState = a
  }
  return [a, r]
}
function ly() {}
function uy(e, t) {
  var n = Ge
    , r = Jt()
    , o = t()
    , a = !hn(r.memoizedState, o);
  if (a && (r.memoizedState = o,
  Ot = !0),
  r = r.queue,
  Zf(fy.bind(null, n, r, e), [e]),
  r.getSnapshot !== t || a || lt !== null && lt.memoizedState.tag & 1) {
      if (n.flags |= 2048,
      Li(9, dy.bind(null, n, r, o, t), void 0, null),
      ut === null)
          throw Error(z(349));
      xo & 30 || cy(n, t, o)
  }
  return o
}
function cy(e, t, n) {
  e.flags |= 16384,
  e = {
      getSnapshot: t,
      value: n
  },
  t = Ge.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  Ge.updateQueue = t,
  t.stores = [e]) : (n = t.stores,
  n === null ? t.stores = [e] : n.push(e))
}
function dy(e, t, n, r) {
  t.value = n,
  t.getSnapshot = r,
  hy(t) && my(e)
}
function fy(e, t, n) {
  return n(function() {
      hy(t) && my(e)
  })
}
function hy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !hn(e, n)
  } catch {
      return !0
  }
}
function my(e) {
  var t = Zn(e, 1);
  t !== null && fn(t, e, 1, -1)
}
function Wm(e) {
  var t = kn();
  return typeof e == "function" && (e = e()),
  t.memoizedState = t.baseState = e,
  e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ii,
      lastRenderedState: e
  },
  t.queue = e,
  e = e.dispatch = n2.bind(null, Ge, e),
  [t.memoizedState, e]
}
function Li(e, t, n, r) {
  return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
  },
  t = Ge.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  Ge.updateQueue = t,
  t.lastEffect = e.next = e) : (n = t.lastEffect,
  n === null ? t.lastEffect = e.next = e : (r = n.next,
  n.next = e,
  e.next = r,
  t.lastEffect = e)),
  e
}
function py() {
  return Jt().memoizedState
}
function tl(e, t, n, r) {
  var o = kn();
  Ge.flags |= e,
  o.memoizedState = Li(1 | t, n, void 0, r === void 0 ? null : r)
}
function lu(e, t, n, r) {
  var o = Jt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (ot !== null) {
      var i = ot.memoizedState;
      if (a = i.destroy,
      r !== null && Qf(r, i.deps)) {
          o.memoizedState = Li(t, n, a, r);
          return
      }
  }
  Ge.flags |= e,
  o.memoizedState = Li(1 | t, n, a, r)
}
function $m(e, t) {
  return tl(8390656, 8, e, t)
}
function Zf(e, t) {
  return lu(2048, 8, e, t)
}
function gy(e, t) {
  return lu(4, 2, e, t)
}
function vy(e, t) {
  return lu(4, 4, e, t)
}
function yy(e, t) {
  if (typeof t == "function")
      return e = e(),
      t(e),
      function() {
          t(null)
      }
      ;
  if (t != null)
      return e = e(),
      t.current = e,
      function() {
          t.current = null
      }
}
function wy(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
  lu(4, 4, yy.bind(null, t, e), n)
}
function Jf() {}
function xy(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
  e)
}
function by(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qf(t, r[1]) ? r[0] : (e = e(),
  n.memoizedState = [e, t],
  e)
}
function Sy(e, t, n) {
  return xo & 21 ? (hn(n, t) || (n = Mv(),
  Ge.lanes |= n,
  bo |= n,
  e.baseState = !0),
  t) : (e.baseState && (e.baseState = !1,
  Ot = !0),
  e.memoizedState = n)
}
function e2(e, t) {
  var n = Me;
  Me = n !== 0 && 4 > n ? n : 4,
  e(!0);
  var r = dc.transition;
  dc.transition = {};
  try {
      e(!1),
      t()
  } finally {
      Me = n,
      dc.transition = r
  }
}
function ky() {
  return Jt().memoizedState
}
function t2(e, t, n) {
  var r = Ar(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  },
  Cy(e))
      Ey(t, n);
  else if (n = ay(e, t, n, r),
  n !== null) {
      var o = St();
      fn(n, e, r, o),
      Py(n, t, r)
  }
}
function n2(e, t, n) {
  var r = Ar(e)
    , o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  };
  if (Cy(e))
      Ey(t, o);
  else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
      a !== null))
          try {
              var i = t.lastRenderedState
                , s = a(i, n);
              if (o.hasEagerState = !0,
              o.eagerState = s,
              hn(s, i)) {
                  var l = t.interleaved;
                  l === null ? (o.next = o,
                  Uf(t)) : (o.next = l.next,
                  l.next = o),
                  t.interleaved = o;
                  return
              }
          } catch {} finally {}
      n = ay(e, t, o, r),
      n !== null && (o = St(),
      fn(n, e, r, o),
      Py(n, t, r))
  }
}
function Cy(e) {
  var t = e.alternate;
  return e === Ge || t !== null && t === Ge
}
function Ey(e, t) {
  mi = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
  n.next = t),
  e.pending = t
}
function Py(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Df(e, n)
  }
}
var Rl = {
  readContext: Zt,
  useCallback: gt,
  useContext: gt,
  useEffect: gt,
  useImperativeHandle: gt,
  useInsertionEffect: gt,
  useLayoutEffect: gt,
  useMemo: gt,
  useReducer: gt,
  useRef: gt,
  useState: gt,
  useDebugValue: gt,
  useDeferredValue: gt,
  useTransition: gt,
  useMutableSource: gt,
  useSyncExternalStore: gt,
  useId: gt,
  unstable_isNewReconciler: !1
}
, r2 = {
  readContext: Zt,
  useCallback: function(e, t) {
      return kn().memoizedState = [e, t === void 0 ? null : t],
      e
  },
  useContext: Zt,
  useEffect: $m,
  useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null,
      tl(4194308, 4, yy.bind(null, t, e), n)
  },
  useLayoutEffect: function(e, t) {
      return tl(4194308, 4, e, t)
  },
  useInsertionEffect: function(e, t) {
      return tl(4, 2, e, t)
  },
  useMemo: function(e, t) {
      var n = kn();
      return t = t === void 0 ? null : t,
      e = e(),
      n.memoizedState = [e, t],
      e
  },
  useReducer: function(e, t, n) {
      var r = kn();
      return t = n !== void 0 ? n(t) : t,
      r.memoizedState = r.baseState = t,
      e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
      },
      r.queue = e,
      e = e.dispatch = t2.bind(null, Ge, e),
      [r.memoizedState, e]
  },
  useRef: function(e) {
      var t = kn();
      return e = {
          current: e
      },
      t.memoizedState = e
  },
  useState: Wm,
  useDebugValue: Jf,
  useDeferredValue: function(e) {
      return kn().memoizedState = e
  },
  useTransition: function() {
      var e = Wm(!1)
        , t = e[0];
      return e = e2.bind(null, e[1]),
      kn().memoizedState = e,
      [t, e]
  },
  useMutableSource: function() {},
  useSyncExternalStore: function(e, t, n) {
      var r = Ge
        , o = kn();
      if (ze) {
          if (n === void 0)
              throw Error(z(407));
          n = n()
      } else {
          if (n = t(),
          ut === null)
              throw Error(z(349));
          xo & 30 || cy(r, t, n)
      }
      o.memoizedState = n;
      var a = {
          value: n,
          getSnapshot: t
      };
      return o.queue = a,
      $m(fy.bind(null, r, a, e), [e]),
      r.flags |= 2048,
      Li(9, dy.bind(null, r, a, n, t), void 0, null),
      n
  },
  useId: function() {
      var e = kn()
        , t = ut.identifierPrefix;
      if (ze) {
          var n = Gn
            , r = Vn;
          n = (r & ~(1 << 32 - dn(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = ji++,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
          n = JS++,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
  },
  unstable_isNewReconciler: !1
}
, o2 = {
  readContext: Zt,
  useCallback: xy,
  useContext: Zt,
  useEffect: Zf,
  useImperativeHandle: wy,
  useInsertionEffect: gy,
  useLayoutEffect: vy,
  useMemo: by,
  useReducer: fc,
  useRef: py,
  useState: function() {
      return fc(Ii)
  },
  useDebugValue: Jf,
  useDeferredValue: function(e) {
      var t = Jt();
      return Sy(t, ot.memoizedState, e)
  },
  useTransition: function() {
      var e = fc(Ii)[0]
        , t = Jt().memoizedState;
      return [e, t]
  },
  useMutableSource: ly,
  useSyncExternalStore: uy,
  useId: ky,
  unstable_isNewReconciler: !1
}
, a2 = {
  readContext: Zt,
  useCallback: xy,
  useContext: Zt,
  useEffect: Zf,
  useImperativeHandle: wy,
  useInsertionEffect: gy,
  useLayoutEffect: vy,
  useMemo: by,
  useReducer: hc,
  useRef: py,
  useState: function() {
      return hc(Ii)
  },
  useDebugValue: Jf,
  useDeferredValue: function(e) {
      var t = Jt();
      return ot === null ? t.memoizedState = e : Sy(t, ot.memoizedState, e)
  },
  useTransition: function() {
      var e = hc(Ii)[0]
        , t = Jt().memoizedState;
      return [e, t]
  },
  useMutableSource: ly,
  useSyncExternalStore: uy,
  useId: ky,
  unstable_isNewReconciler: !1
};
function on(e, t) {
  if (e && e.defaultProps) {
      t = Xe({}, t),
      e = e.defaultProps;
      for (var n in e)
          t[n] === void 0 && (t[n] = e[n]);
      return t
  }
  return t
}
function gd(e, t, n, r) {
  t = e.memoizedState,
  n = n(r, t),
  n = n == null ? t : Xe({}, t, n),
  e.memoizedState = n,
  e.lanes === 0 && (e.updateQueue.baseState = n)
}
var uu = {
  isMounted: function(e) {
      return (e = e._reactInternals) ? Oo(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = St()
        , o = Ar(e)
        , a = Qn(r, o);
      a.payload = t,
      n != null && (a.callback = n),
      t = Rr(e, a, o),
      t !== null && (fn(t, e, o, r),
      Js(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = St()
        , o = Ar(e)
        , a = Qn(r, o);
      a.tag = 1,
      a.payload = t,
      n != null && (a.callback = n),
      t = Rr(e, a, o),
      t !== null && (fn(t, e, o, r),
      Js(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = St()
        , r = Ar(e)
        , o = Qn(n, r);
      o.tag = 2,
      t != null && (o.callback = t),
      t = Rr(e, o, r),
      t !== null && (fn(t, e, r, n),
      Js(t, e, r))
  }
};
function zm(e, t, n, r, o, a, i) {
  return e = e.stateNode,
  typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !Oi(n, r) || !Oi(o, a) : !0
}
function My(e, t, n) {
  var r = !1
    , o = Fr
    , a = t.contextType;
  return typeof a == "object" && a !== null ? a = Zt(a) : (o = Tt(t) ? yo : wt.current,
  r = t.contextTypes,
  a = (r = r != null) ? ga(e, o) : Fr),
  t = new t(n,a),
  e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
  t.updater = uu,
  e.stateNode = t,
  t._reactInternals = e,
  r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = o,
  e.__reactInternalMemoizedMaskedChildContext = a),
  t
}
function Bm(e, t, n, r) {
  e = t.state,
  typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
  typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
  t.state !== e && uu.enqueueReplaceState(t, t.state, null)
}
function vd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n,
  o.state = e.memoizedState,
  o.refs = {},
  Yf(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? o.context = Zt(a) : (a = Tt(t) ? yo : wt.current,
  o.context = ga(e, a)),
  o.state = e.memoizedState,
  a = t.getDerivedStateFromProps,
  typeof a == "function" && (gd(e, t, a, n),
  o.state = e.memoizedState),
  typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
  typeof o.componentWillMount == "function" && o.componentWillMount(),
  typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
  t !== o.state && uu.enqueueReplaceState(o, o.state, null),
  Ol(e, n, o, r),
  o.state = e.memoizedState),
  typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function xa(e, t) {
  try {
      var n = ""
        , r = t;
      do
          n += _b(r),
          r = r.return;
      while (r);
      var o = n
  } catch (a) {
      o = `
Error generating stack: ` + a.message + `
` + a.stack
  }
  return {
      value: e,
      source: t,
      stack: o,
      digest: null
  }
}
function mc(e, t, n) {
  return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
  }
}
function yd(e, t) {
  try {
      console.error(t.value)
  } catch (n) {
      setTimeout(function() {
          throw n
      })
  }
}
var i2 = typeof WeakMap == "function" ? WeakMap : Map;
function Ny(e, t, n) {
  n = Qn(-1, n),
  n.tag = 3,
  n.payload = {
      element: null
  };
  var r = t.value;
  return n.callback = function() {
      Al || (Al = !0,
      Nd = r),
      yd(e, t)
  }
  ,
  n
}
function Oy(e, t, n) {
  n = Qn(-1, n),
  n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
          return r(o)
      }
      ,
      n.callback = function() {
          yd(e, t)
      }
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      yd(e, t),
      typeof r != "function" && (_r === null ? _r = new Set([this]) : _r.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : ""
      })
  }
  ),
  n
}
function Hm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new i2;
      var o = new Set;
      r.set(t, o)
  } else
      o = r.get(t),
      o === void 0 && (o = new Set,
      r.set(t, o));
  o.has(n) || (o.add(n),
  e = x2.bind(null, e, t, n),
  t.then(e, e))
}
function Um(e) {
  do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
          return e;
      e = e.return
  } while (e !== null);
  return null
}
function Ym(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536,
  e.lanes = o,
  e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
  n.flags |= 131072,
  n.flags &= -52805,
  n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qn(-1, 1),
  t.tag = 2,
  Rr(n, t, 1))),
  n.lanes |= 1),
  e)
}
var s2 = ar.ReactCurrentOwner
, Ot = !1;
function bt(e, t, n, r) {
  t.child = e === null ? oy(t, null, n, r) : ya(t, e.child, n, r)
}
function Vm(e, t, n, r, o) {
  n = n.render;
  var a = t.ref;
  return sa(t, o),
  r = Kf(e, t, n, r, a, o),
  n = qf(),
  e !== null && !Ot ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~o,
  Jn(e, t, o)) : (ze && n && Ff(t),
  t.flags |= 1,
  bt(e, t, r, o),
  t.child)
}
function Gm(e, t, n, r, o) {
  if (e === null) {
      var a = n.type;
      return typeof a == "function" && !sh(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = a,
      Dy(e, t, a, r, o)) : (e = al(n.type, null, r, t, t.mode, o),
      e.ref = t.ref,
      e.return = t,
      t.child = e)
  }
  if (a = e.child,
  !(e.lanes & o)) {
      var i = a.memoizedProps;
      if (n = n.compare,
      n = n !== null ? n : Oi,
      n(i, r) && e.ref === t.ref)
          return Jn(e, t, o)
  }
  return t.flags |= 1,
  e = jr(a, r),
  e.ref = t.ref,
  e.return = t,
  t.child = e
}
function Dy(e, t, n, r, o) {
  if (e !== null) {
      var a = e.memoizedProps;
      if (Oi(a, r) && e.ref === t.ref)
          if (Ot = !1,
          t.pendingProps = r = a,
          (e.lanes & o) !== 0)
              e.flags & 131072 && (Ot = !0);
          else
              return t.lanes = e.lanes,
              Jn(e, t, o)
  }
  return wd(e, t, n, r, o)
}
function Ty(e, t, n) {
  var r = t.pendingProps
    , o = r.children
    , a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1))
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          Re(Jo, jt),
          jt |= n;
      else {
          if (!(n & 1073741824))
              return e = a !== null ? a.baseLanes | n : n,
              t.lanes = t.childLanes = 1073741824,
              t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null
              },
              t.updateQueue = null,
              Re(Jo, jt),
              jt |= e,
              null;
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          r = a !== null ? a.baseLanes : n,
          Re(Jo, jt),
          jt |= r
      }
  else
      a !== null ? (r = a.baseLanes | n,
      t.memoizedState = null) : r = n,
      Re(Jo, jt),
      jt |= r;
  return bt(e, t, o, n),
  t.child
}
function Ry(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
  t.flags |= 2097152)
}
function wd(e, t, n, r, o) {
  var a = Tt(n) ? yo : wt.current;
  return a = ga(t, a),
  sa(t, o),
  n = Kf(e, t, n, r, a, o),
  r = qf(),
  e !== null && !Ot ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~o,
  Jn(e, t, o)) : (ze && r && Ff(t),
  t.flags |= 1,
  bt(e, t, n, o),
  t.child)
}
function Xm(e, t, n, r, o) {
  if (Tt(n)) {
      var a = !0;
      Cl(t)
  } else
      a = !1;
  if (sa(t, o),
  t.stateNode === null)
      nl(e, t),
      My(t, n, r),
      vd(t, n, r, o),
      r = !0;
  else if (e === null) {
      var i = t.stateNode
        , s = t.memoizedProps;
      i.props = s;
      var l = i.context
        , u = n.contextType;
      typeof u == "object" && u !== null ? u = Zt(u) : (u = Tt(n) ? yo : wt.current,
      u = ga(t, u));
      var d = n.getDerivedStateFromProps
        , c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || l !== u) && Bm(t, i, r, u),
      br = !1;
      var f = t.memoizedState;
      i.state = f,
      Ol(t, r, i, o),
      l = t.memoizedState,
      s !== r || f !== l || Dt.current || br ? (typeof d == "function" && (gd(t, n, d, r),
      l = t.memoizedState),
      (s = br || zm(t, n, s, r, f, l, u)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
      typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
      t.memoizedProps = r,
      t.memoizedState = l),
      i.props = r,
      i.state = l,
      i.context = u,
      r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
      r = !1)
  } else {
      i = t.stateNode,
      iy(e, t),
      s = t.memoizedProps,
      u = t.type === t.elementType ? s : on(t.type, s),
      i.props = u,
      c = t.pendingProps,
      f = i.context,
      l = n.contextType,
      typeof l == "object" && l !== null ? l = Zt(l) : (l = Tt(n) ? yo : wt.current,
      l = ga(t, l));
      var g = n.getDerivedStateFromProps;
      (d = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || f !== l) && Bm(t, i, r, l),
      br = !1,
      f = t.memoizedState,
      i.state = f,
      Ol(t, r, i, o);
      var w = t.memoizedState;
      s !== c || f !== w || Dt.current || br ? (typeof g == "function" && (gd(t, n, g, r),
      w = t.memoizedState),
      (u = br || zm(t, n, u, r, f, w, l) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l),
      typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)),
      typeof i.componentDidUpdate == "function" && (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
      t.memoizedProps = r,
      t.memoizedState = w),
      i.props = r,
      i.state = w,
      i.context = l,
      r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
      r = !1)
  }
  return xd(e, t, n, r, a, o)
}
function xd(e, t, n, r, o, a) {
  Ry(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
      return o && _m(t, n, !1),
      Jn(e, t, a);
  r = t.stateNode,
  s2.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
  e !== null && i ? (t.child = ya(t, e.child, null, a),
  t.child = ya(t, null, s, a)) : bt(e, t, s, a),
  t.memoizedState = r.state,
  o && _m(t, n, !0),
  t.child
}
function _y(e) {
  var t = e.stateNode;
  t.pendingContext ? Rm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rm(e, t.context, !1),
  Vf(e, t.containerInfo)
}
function Qm(e, t, n, r, o) {
  return va(),
  $f(o),
  t.flags |= 256,
  bt(e, t, n, r),
  t.child
}
var bd = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function Sd(e) {
  return {
      baseLanes: e,
      cachePool: null,
      transitions: null
  }
}
function Ay(e, t, n) {
  var r = t.pendingProps, o = Ve.current, a = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
  s ? (a = !0,
  t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
  Re(Ve, o & 1),
  e === null)
      return md(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
      e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (i = r.children,
      e = r.fallback,
      a ? (r = t.mode,
      a = t.child,
      i = {
          mode: "hidden",
          children: i
      },
      !(r & 1) && a !== null ? (a.childLanes = 0,
      a.pendingProps = i) : a = fu(i, r, 0, null),
      e = ho(e, r, n, null),
      a.return = t,
      e.return = t,
      a.sibling = e,
      t.child = a,
      t.child.memoizedState = Sd(n),
      t.memoizedState = bd,
      e) : eh(t, i));
  if (o = e.memoizedState,
  o !== null && (s = o.dehydrated,
  s !== null))
      return l2(e, t, i, r, s, o, n);
  if (a) {
      a = r.fallback,
      i = t.mode,
      o = e.child,
      s = o.sibling;
      var l = {
          mode: "hidden",
          children: r.children
      };
      return !(i & 1) && t.child !== o ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = l,
      t.deletions = null) : (r = jr(o, l),
      r.subtreeFlags = o.subtreeFlags & 14680064),
      s !== null ? a = jr(s, a) : (a = ho(a, i, n, null),
      a.flags |= 2),
      a.return = t,
      r.return = t,
      r.sibling = a,
      t.child = r,
      r = a,
      a = t.child,
      i = e.child.memoizedState,
      i = i === null ? Sd(n) : {
          baseLanes: i.baseLanes | n,
          cachePool: null,
          transitions: i.transitions
      },
      a.memoizedState = i,
      a.childLanes = e.childLanes & ~n,
      t.memoizedState = bd,
      r
  }
  return a = e.child,
  e = a.sibling,
  r = jr(a, {
      mode: "visible",
      children: r.children
  }),
  !(t.mode & 1) && (r.lanes = n),
  r.return = t,
  r.sibling = null,
  e !== null && (n = t.deletions,
  n === null ? (t.deletions = [e],
  t.flags |= 16) : n.push(e)),
  t.child = r,
  t.memoizedState = null,
  r
}
function eh(e, t) {
  return t = fu({
      mode: "visible",
      children: t
  }, e.mode, 0, null),
  t.return = e,
  e.child = t
}
function js(e, t, n, r) {
  return r !== null && $f(r),
  ya(t, e.child, null, n),
  e = eh(t, t.pendingProps.children),
  e.flags |= 2,
  t.memoizedState = null,
  e
}
function l2(e, t, n, r, o, a, i) {
  if (n)
      return t.flags & 256 ? (t.flags &= -257,
      r = mc(Error(z(422))),
      js(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
      t.flags |= 128,
      null) : (a = r.fallback,
      o = t.mode,
      r = fu({
          mode: "visible",
          children: r.children
      }, o, 0, null),
      a = ho(a, o, i, null),
      a.flags |= 2,
      r.return = t,
      a.return = t,
      r.sibling = a,
      t.child = r,
      t.mode & 1 && ya(t, e.child, null, i),
      t.child.memoizedState = Sd(i),
      t.memoizedState = bd,
      a);
  if (!(t.mode & 1))
      return js(e, t, i, null);
  if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset,
      r)
          var s = r.dgst;
      return r = s,
      a = Error(z(419)),
      r = mc(a, r, void 0),
      js(e, t, i, r)
  }
  if (s = (i & e.childLanes) !== 0,
  Ot || s) {
      if (r = ut,
      r !== null) {
          switch (i & -i) {
          case 4:
              o = 2;
              break;
          case 16:
              o = 8;
              break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
              o = 32;
              break;
          case 536870912:
              o = 268435456;
              break;
          default:
              o = 0
          }
          o = o & (r.suspendedLanes | i) ? 0 : o,
          o !== 0 && o !== a.retryLane && (a.retryLane = o,
          Zn(e, o),
          fn(r, e, o, -1))
      }
      return ih(),
      r = mc(Error(z(421))),
      js(e, t, i, r)
  }
  return o.data === "$?" ? (t.flags |= 128,
  t.child = e.child,
  t = b2.bind(null, e),
  o._reactRetry = t,
  null) : (e = a.treeContext,
  Ft = Tr(o.nextSibling),
  Wt = t,
  ze = !0,
  ln = null,
  e !== null && (Xt[Qt++] = Vn,
  Xt[Qt++] = Gn,
  Xt[Qt++] = wo,
  Vn = e.id,
  Gn = e.overflow,
  wo = t),
  t = eh(t, r.children),
  t.flags |= 4096,
  t)
}
function Km(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
  pd(e.return, t, n)
}
function pc(e, t, n, r, o) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: o
  } : (a.isBackwards = t,
  a.rendering = null,
  a.renderingStartTime = 0,
  a.last = r,
  a.tail = n,
  a.tailMode = o)
}
function jy(e, t, n) {
  var r = t.pendingProps
    , o = r.revealOrder
    , a = r.tail;
  if (bt(e, t, r.children, n),
  r = Ve.current,
  r & 2)
      r = r & 1 | 2,
      t.flags |= 128;
  else {
      if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                  e.memoizedState !== null && Km(e, n, t);
              else if (e.tag === 19)
                  Km(e, n, t);
              else if (e.child !== null) {
                  e.child.return = e,
                  e = e.child;
                  continue
              }
              if (e === t)
                  break e;
              for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t)
                      break e;
                  e = e.return
              }
              e.sibling.return = e.return,
              e = e.sibling
          }
      r &= 1
  }
  if (Re(Ve, r),
  !(t.mode & 1))
      t.memoizedState = null;
  else
      switch (o) {
      case "forwards":
          for (n = t.child,
          o = null; n !== null; )
              e = n.alternate,
              e !== null && Dl(e) === null && (o = n),
              n = n.sibling;
          n = o,
          n === null ? (o = t.child,
          t.child = null) : (o = n.sibling,
          n.sibling = null),
          pc(t, !1, o, n, a);
          break;
      case "backwards":
          for (n = null,
          o = t.child,
          t.child = null; o !== null; ) {
              if (e = o.alternate,
              e !== null && Dl(e) === null) {
                  t.child = o;
                  break
              }
              e = o.sibling,
              o.sibling = n,
              n = o,
              o = e
          }
          pc(t, !0, n, null, a);
          break;
      case "together":
          pc(t, !1, null, null, void 0);
          break;
      default:
          t.memoizedState = null
      }
  return t.child
}
function nl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
  t.alternate = null,
  t.flags |= 2)
}
function Jn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
  bo |= t.lanes,
  !(n & t.childLanes))
      return null;
  if (e !== null && t.child !== e.child)
      throw Error(z(153));
  if (t.child !== null) {
      for (e = t.child,
      n = jr(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null; )
          e = e.sibling,
          n = n.sibling = jr(e, e.pendingProps),
          n.return = t;
      n.sibling = null
  }
  return t.child
}
function u2(e, t, n) {
  switch (t.tag) {
  case 3:
      _y(t),
      va();
      break;
  case 5:
      sy(t);
      break;
  case 1:
      Tt(t.type) && Cl(t);
      break;
  case 4:
      Vf(t, t.stateNode.containerInfo);
      break;
  case 10:
      var r = t.type._context
        , o = t.memoizedProps.value;
      Re(Ml, r._currentValue),
      r._currentValue = o;
      break;
  case 13:
      if (r = t.memoizedState,
      r !== null)
          return r.dehydrated !== null ? (Re(Ve, Ve.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? Ay(e, t, n) : (Re(Ve, Ve.current & 1),
          e = Jn(e, t, n),
          e !== null ? e.sibling : null);
      Re(Ve, Ve.current & 1);
      break;
  case 19:
      if (r = (n & t.childLanes) !== 0,
      e.flags & 128) {
          if (r)
              return jy(e, t, n);
          t.flags |= 128
      }
      if (o = t.memoizedState,
      o !== null && (o.rendering = null,
      o.tail = null,
      o.lastEffect = null),
      Re(Ve, Ve.current),
      r)
          break;
      return null;
  case 22:
  case 23:
      return t.lanes = 0,
      Ty(e, t, n)
  }
  return Jn(e, t, n)
}
var Iy, kd, Ly, Fy;
Iy = function(e, t) {
  for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
          e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n,
          n = n.child;
          continue
      }
      if (n === t)
          break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
              return;
          n = n.return
      }
      n.sibling.return = n.return,
      n = n.sibling
  }
}
;
kd = function() {}
;
Ly = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
      e = t.stateNode,
      uo(An.current);
      var a = null;
      switch (n) {
      case "input":
          o = Yc(e, o),
          r = Yc(e, r),
          a = [];
          break;
      case "select":
          o = Xe({}, o, {
              value: void 0
          }),
          r = Xe({}, r, {
              value: void 0
          }),
          a = [];
          break;
      case "textarea":
          o = Xc(e, o),
          r = Xc(e, r),
          a = [];
          break;
      default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sl)
      }
      Kc(n, r);
      var i;
      n = null;
      for (u in o)
          if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
              if (u === "style") {
                  var s = o[u];
                  for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}),
                      n[i] = "")
              } else
                  u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Si.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
      for (u in r) {
          var l = r[u];
          if (s = o != null ? o[u] : void 0,
          r.hasOwnProperty(u) && l !== s && (l != null || s != null))
              if (u === "style")
                  if (s) {
                      for (i in s)
                          !s.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                          n[i] = "");
                      for (i in l)
                          l.hasOwnProperty(i) && s[i] !== l[i] && (n || (n = {}),
                          n[i] = l[i])
                  } else
                      n || (a || (a = []),
                      a.push(u, n)),
                      n = l;
              else
                  u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                  s = s ? s.__html : void 0,
                  l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Si.hasOwnProperty(u) ? (l != null && u === "onScroll" && Fe("scroll", e),
                  a || s === l || (a = [])) : (a = a || []).push(u, l))
      }
      n && (a = a || []).push("style", n);
      var u = a;
      (t.updateQueue = u) && (t.flags |= 4)
  }
}
;
Fy = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
}
;
function Va(e, t) {
  if (!ze)
      switch (e.tailMode) {
      case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
              t.alternate !== null && (n = t),
              t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
      case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
              n.alternate !== null && (r = n),
              n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
      }
}
function vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
      for (var o = e.child; o !== null; )
          n |= o.lanes | o.childLanes,
          r |= o.subtreeFlags & 14680064,
          r |= o.flags & 14680064,
          o.return = e,
          o = o.sibling;
  else
      for (o = e.child; o !== null; )
          n |= o.lanes | o.childLanes,
          r |= o.subtreeFlags,
          r |= o.flags,
          o.return = e,
          o = o.sibling;
  return e.subtreeFlags |= r,
  e.childLanes = n,
  t
}
function c2(e, t, n) {
  var r = t.pendingProps;
  switch (Wf(t),
  t.tag) {
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
      return vt(t),
      null;
  case 1:
      return Tt(t.type) && kl(),
      vt(t),
      null;
  case 3:
      return r = t.stateNode,
      wa(),
      We(Dt),
      We(wt),
      Xf(),
      r.pendingContext && (r.context = r.pendingContext,
      r.pendingContext = null),
      (e === null || e.child === null) && (_s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
      ln !== null && (Td(ln),
      ln = null))),
      kd(e, t),
      vt(t),
      null;
  case 5:
      Gf(t);
      var o = uo(Ai.current);
      if (n = t.type,
      e !== null && t.stateNode != null)
          Ly(e, t, n, r, o),
          e.ref !== t.ref && (t.flags |= 512,
          t.flags |= 2097152);
      else {
          if (!r) {
              if (t.stateNode === null)
                  throw Error(z(166));
              return vt(t),
              null
          }
          if (e = uo(An.current),
          _s(t)) {
              r = t.stateNode,
              n = t.type;
              var a = t.memoizedProps;
              switch (r[En] = t,
              r[Ri] = a,
              e = (t.mode & 1) !== 0,
              n) {
              case "dialog":
                  Fe("cancel", r),
                  Fe("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  Fe("load", r);
                  break;
              case "video":
              case "audio":
                  for (o = 0; o < ri.length; o++)
                      Fe(ri[o], r);
                  break;
              case "source":
                  Fe("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  Fe("error", r),
                  Fe("load", r);
                  break;
              case "details":
                  Fe("toggle", r);
                  break;
              case "input":
                  am(r, a),
                  Fe("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!a.multiple
                  },
                  Fe("invalid", r);
                  break;
              case "textarea":
                  sm(r, a),
                  Fe("invalid", r)
              }
              Kc(n, a),
              o = null;
              for (var i in a)
                  if (a.hasOwnProperty(i)) {
                      var s = a[i];
                      i === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && Rs(r.textContent, s, e),
                      o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && Rs(r.textContent, s, e),
                      o = ["children", "" + s]) : Si.hasOwnProperty(i) && s != null && i === "onScroll" && Fe("scroll", r)
                  }
              switch (n) {
              case "input":
                  Cs(r),
                  im(r, a, !0);
                  break;
              case "textarea":
                  Cs(r),
                  lm(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof a.onClick == "function" && (r.onclick = Sl)
              }
              r = o,
              t.updateQueue = r,
              r !== null && (t.flags |= 4)
          } else {
              i = o.nodeType === 9 ? o : o.ownerDocument,
              e === "http://www.w3.org/1999/xhtml" && (e = fv(n)),
              e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                  is: r.is
              }) : (e = i.createElement(n),
              n === "select" && (i = e,
              r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
              e[En] = t,
              e[Ri] = r,
              Iy(e, t, !1, !1),
              t.stateNode = e;
              e: {
                  switch (i = qc(n, r),
                  n) {
                  case "dialog":
                      Fe("cancel", e),
                      Fe("close", e),
                      o = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      Fe("load", e),
                      o = r;
                      break;
                  case "video":
                  case "audio":
                      for (o = 0; o < ri.length; o++)
                          Fe(ri[o], e);
                      o = r;
                      break;
                  case "source":
                      Fe("error", e),
                      o = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      Fe("error", e),
                      Fe("load", e),
                      o = r;
                      break;
                  case "details":
                      Fe("toggle", e),
                      o = r;
                      break;
                  case "input":
                      am(e, r),
                      o = Yc(e, r),
                      Fe("invalid", e);
                      break;
                  case "option":
                      o = r;
                      break;
                  case "select":
                      e._wrapperState = {
                          wasMultiple: !!r.multiple
                      },
                      o = Xe({}, r, {
                          value: void 0
                      }),
                      Fe("invalid", e);
                      break;
                  case "textarea":
                      sm(e, r),
                      o = Xc(e, r),
                      Fe("invalid", e);
                      break;
                  default:
                      o = r
                  }
                  Kc(n, o),
                  s = o;
                  for (a in s)
                      if (s.hasOwnProperty(a)) {
                          var l = s[a];
                          a === "style" ? pv(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                          l != null && hv(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ki(e, l) : typeof l == "number" && ki(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Si.hasOwnProperty(a) ? l != null && a === "onScroll" && Fe("scroll", e) : l != null && Cf(e, a, l, i))
                      }
                  switch (n) {
                  case "input":
                      Cs(e),
                      im(e, r, !1);
                      break;
                  case "textarea":
                      Cs(e),
                      lm(e);
                      break;
                  case "option":
                      r.value != null && e.setAttribute("value", "" + Lr(r.value));
                      break;
                  case "select":
                      e.multiple = !!r.multiple,
                      a = r.value,
                      a != null ? ra(e, !!r.multiple, a, !1) : r.defaultValue != null && ra(e, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof o.onClick == "function" && (e.onclick = Sl)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return vt(t),
      null;
  case 6:
      if (e && t.stateNode != null)
          Fy(e, t, e.memoizedProps, r);
      else {
          if (typeof r != "string" && t.stateNode === null)
              throw Error(z(166));
          if (n = uo(Ai.current),
          uo(An.current),
          _s(t)) {
              if (r = t.stateNode,
              n = t.memoizedProps,
              r[En] = t,
              (a = r.nodeValue !== n) && (e = Wt,
              e !== null))
                  switch (e.tag) {
                  case 3:
                      Rs(r.nodeValue, n, (e.mode & 1) !== 0);
                      break;
                  case 5:
                      e.memoizedProps.suppressHydrationWarning !== !0 && Rs(r.nodeValue, n, (e.mode & 1) !== 0)
                  }
              a && (t.flags |= 4)
          } else
              r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
              r[En] = t,
              t.stateNode = r
      }
      return vt(t),
      null;
  case 13:
      if (We(Ve),
      r = t.memoizedState,
      e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ze && Ft !== null && t.mode & 1 && !(t.flags & 128))
              ny(),
              va(),
              t.flags |= 98560,
              a = !1;
          else if (a = _s(t),
          r !== null && r.dehydrated !== null) {
              if (e === null) {
                  if (!a)
                      throw Error(z(318));
                  if (a = t.memoizedState,
                  a = a !== null ? a.dehydrated : null,
                  !a)
                      throw Error(z(317));
                  a[En] = t
              } else
                  va(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  t.flags |= 4;
              vt(t),
              a = !1
          } else
              ln !== null && (Td(ln),
              ln = null),
              a = !0;
          if (!a)
              return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
      t) : (r = r !== null,
      r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
      t.mode & 1 && (e === null || Ve.current & 1 ? it === 0 && (it = 3) : ih())),
      t.updateQueue !== null && (t.flags |= 4),
      vt(t),
      null);
  case 4:
      return wa(),
      kd(e, t),
      e === null && Di(t.stateNode.containerInfo),
      vt(t),
      null;
  case 10:
      return Hf(t.type._context),
      vt(t),
      null;
  case 17:
      return Tt(t.type) && kl(),
      vt(t),
      null;
  case 19:
      if (We(Ve),
      a = t.memoizedState,
      a === null)
          return vt(t),
          null;
      if (r = (t.flags & 128) !== 0,
      i = a.rendering,
      i === null)
          if (r)
              Va(a, !1);
          else {
              if (it !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null; ) {
                      if (i = Dl(e),
                      i !== null) {
                          for (t.flags |= 128,
                          Va(a, !1),
                          r = i.updateQueue,
                          r !== null && (t.updateQueue = r,
                          t.flags |= 4),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child; n !== null; )
                              a = n,
                              e = r,
                              a.flags &= 14680066,
                              i = a.alternate,
                              i === null ? (a.childLanes = 0,
                              a.lanes = e,
                              a.child = null,
                              a.subtreeFlags = 0,
                              a.memoizedProps = null,
                              a.memoizedState = null,
                              a.updateQueue = null,
                              a.dependencies = null,
                              a.stateNode = null) : (a.childLanes = i.childLanes,
                              a.lanes = i.lanes,
                              a.child = i.child,
                              a.subtreeFlags = 0,
                              a.deletions = null,
                              a.memoizedProps = i.memoizedProps,
                              a.memoizedState = i.memoizedState,
                              a.updateQueue = i.updateQueue,
                              a.type = i.type,
                              e = i.dependencies,
                              a.dependencies = e === null ? null : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext
                              }),
                              n = n.sibling;
                          return Re(Ve, Ve.current & 1 | 2),
                          t.child
                      }
                      e = e.sibling
                  }
              a.tail !== null && Je() > ba && (t.flags |= 128,
              r = !0,
              Va(a, !1),
              t.lanes = 4194304)
          }
      else {
          if (!r)
              if (e = Dl(i),
              e !== null) {
                  if (t.flags |= 128,
                  r = !0,
                  n = e.updateQueue,
                  n !== null && (t.updateQueue = n,
                  t.flags |= 4),
                  Va(a, !0),
                  a.tail === null && a.tailMode === "hidden" && !i.alternate && !ze)
                      return vt(t),
                      null
              } else
                  2 * Je() - a.renderingStartTime > ba && n !== 1073741824 && (t.flags |= 128,
                  r = !0,
                  Va(a, !1),
                  t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child,
          t.child = i) : (n = a.last,
          n !== null ? n.sibling = i : t.child = i,
          a.last = i)
      }
      return a.tail !== null ? (t = a.tail,
      a.rendering = t,
      a.tail = t.sibling,
      a.renderingStartTime = Je(),
      t.sibling = null,
      n = Ve.current,
      Re(Ve, r ? n & 1 | 2 : n & 1),
      t) : (vt(t),
      null);
  case 22:
  case 23:
      return ah(),
      r = t.memoizedState !== null,
      e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
      r && t.mode & 1 ? jt & 1073741824 && (vt(t),
      t.subtreeFlags & 6 && (t.flags |= 8192)) : vt(t),
      null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(z(156, t.tag))
}
function d2(e, t) {
  switch (Wf(t),
  t.tag) {
  case 1:
      return Tt(t.type) && kl(),
      e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 3:
      return wa(),
      We(Dt),
      We(wt),
      Xf(),
      e = t.flags,
      e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
      t) : null;
  case 5:
      return Gf(t),
      null;
  case 13:
      if (We(Ve),
      e = t.memoizedState,
      e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
              throw Error(z(340));
          va()
      }
      return e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 19:
      return We(Ve),
      null;
  case 4:
      return wa(),
      null;
  case 10:
      return Hf(t.type._context),
      null;
  case 22:
  case 23:
      return ah(),
      null;
  case 24:
      return null;
  default:
      return null
  }
}
var Is = !1
, yt = !1
, f2 = typeof WeakSet == "function" ? WeakSet : Set
, X = null;
function Zo(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null)
          } catch (r) {
              Ze(e, t, r)
          }
      else
          n.current = null
}
function Cd(e, t, n) {
  try {
      n()
  } catch (r) {
      Ze(e, t, r)
  }
}
var qm = !1;
function h2(e, t) {
  if (sd = wl,
  e = Hv(),
  Lf(e)) {
      if ("selectionStart"in e)
          var n = {
              start: e.selectionStart,
              end: e.selectionEnd
          };
      else
          e: {
              n = (n = e.ownerDocument) && n.defaultView || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var o = r.anchorOffset
                    , a = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType,
                      a.nodeType
                  } catch {
                      n = null;
                      break e
                  }
                  var i = 0
                    , s = -1
                    , l = -1
                    , u = 0
                    , d = 0
                    , c = e
                    , f = null;
                  t: for (; ; ) {
                      for (var g; c !== n || o !== 0 && c.nodeType !== 3 || (s = i + o),
                      c !== a || r !== 0 && c.nodeType !== 3 || (l = i + r),
                      c.nodeType === 3 && (i += c.nodeValue.length),
                      (g = c.firstChild) !== null; )
                          f = c,
                          c = g;
                      for (; ; ) {
                          if (c === e)
                              break t;
                          if (f === n && ++u === o && (s = i),
                          f === a && ++d === r && (l = i),
                          (g = c.nextSibling) !== null)
                              break;
                          c = f,
                          f = c.parentNode
                      }
                      c = g
                  }
                  n = s === -1 || l === -1 ? null : {
                      start: s,
                      end: l
                  }
              } else
                  n = null
          }
      n = n || {
          start: 0,
          end: 0
      }
  } else
      n = null;
  for (ld = {
      focusedElem: e,
      selectionRange: n
  },
  wl = !1,
  X = t; X !== null; )
      if (t = X,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t,
          X = e;
      else
          for (; X !== null; ) {
              t = X;
              try {
                  var w = t.alternate;
                  if (t.flags & 1024)
                      switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          break;
                      case 1:
                          if (w !== null) {
                              var v = w.memoizedProps
                                , x = w.memoizedState
                                , p = t.stateNode
                                , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : on(t.type, v), x);
                              p.__reactInternalSnapshotBeforeUpdate = h
                          }
                          break;
                      case 3:
                          var m = t.stateNode.containerInfo;
                          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                          break;
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                          break;
                      default:
                          throw Error(z(163))
                      }
              } catch (S) {
                  Ze(t, t.return, S)
              }
              if (e = t.sibling,
              e !== null) {
                  e.return = t.return,
                  X = e;
                  break
              }
              X = t.return
          }
  return w = qm,
  qm = !1,
  w
}
function pi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
  r !== null) {
      var o = r = r.next;
      do {
          if ((o.tag & e) === e) {
              var a = o.destroy;
              o.destroy = void 0,
              a !== void 0 && Cd(t, n, a)
          }
          o = o.next
      } while (o !== r)
  }
}
function cu(e, t) {
  if (t = t.updateQueue,
  t = t !== null ? t.lastEffect : null,
  t !== null) {
      var n = t = t.next;
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== t)
  }
}
function Ed(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
      case 5:
          e = n;
          break;
      default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
  }
}
function Wy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
  Wy(t)),
  e.child = null,
  e.deletions = null,
  e.sibling = null,
  e.tag === 5 && (t = e.stateNode,
  t !== null && (delete t[En],
  delete t[Ri],
  delete t[dd],
  delete t[QS],
  delete t[KS])),
  e.stateNode = null,
  e.return = null,
  e.dependencies = null,
  e.memoizedProps = null,
  e.memoizedState = null,
  e.pendingProps = null,
  e.stateNode = null,
  e.updateQueue = null
}
function $y(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Zm(e) {
  e: for (; ; ) {
      for (; e.sibling === null; ) {
          if (e.return === null || $y(e.return))
              return null;
          e = e.return
      }
      for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
              continue e;
          e.child.return = e,
          e = e.child
      }
      if (!(e.flags & 2))
          return e.stateNode
  }
}
function Pd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
      t.insertBefore(e, n)) : (t = n,
      t.appendChild(e)),
      n = n._reactRootContainer,
      n != null || t.onclick !== null || (t.onclick = Sl));
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (Pd(e, t, n),
      e = e.sibling; e !== null; )
          Pd(e, t, n),
          e = e.sibling
}
function Md(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (Md(e, t, n),
      e = e.sibling; e !== null; )
          Md(e, t, n),
          e = e.sibling
}
var ft = null
, an = !1;
function fr(e, t, n) {
  for (n = n.child; n !== null; )
      zy(e, t, n),
      n = n.sibling
}
function zy(e, t, n) {
  if (_n && typeof _n.onCommitFiberUnmount == "function")
      try {
          _n.onCommitFiberUnmount(nu, n)
      } catch {}
  switch (n.tag) {
  case 5:
      yt || Zo(n, t);
  case 6:
      var r = ft
        , o = an;
      ft = null,
      fr(e, t, n),
      ft = r,
      an = o,
      ft !== null && (an ? (e = ft,
      n = n.stateNode,
      e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ft.removeChild(n.stateNode));
      break;
  case 18:
      ft !== null && (an ? (e = ft,
      n = n.stateNode,
      e.nodeType === 8 ? lc(e.parentNode, n) : e.nodeType === 1 && lc(e, n),
      Mi(e)) : lc(ft, n.stateNode));
      break;
  case 4:
      r = ft,
      o = an,
      ft = n.stateNode.containerInfo,
      an = !0,
      fr(e, t, n),
      ft = r,
      an = o;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!yt && (r = n.updateQueue,
      r !== null && (r = r.lastEffect,
      r !== null))) {
          o = r = r.next;
          do {
              var a = o
                , i = a.destroy;
              a = a.tag,
              i !== void 0 && (a & 2 || a & 4) && Cd(n, t, i),
              o = o.next
          } while (o !== r)
      }
      fr(e, t, n);
      break;
  case 1:
      if (!yt && (Zo(n, t),
      r = n.stateNode,
      typeof r.componentWillUnmount == "function"))
          try {
              r.props = n.memoizedProps,
              r.state = n.memoizedState,
              r.componentWillUnmount()
          } catch (s) {
              Ze(n, t, s)
          }
      fr(e, t, n);
      break;
  case 21:
      fr(e, t, n);
      break;
  case 22:
      n.mode & 1 ? (yt = (r = yt) || n.memoizedState !== null,
      fr(e, t, n),
      yt = r) : fr(e, t, n);
      break;
  default:
      fr(e, t, n)
  }
}
function Jm(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new f2),
      t.forEach(function(r) {
          var o = S2.bind(null, e, r);
          n.has(r) || (n.add(r),
          r.then(o, o))
      })
  }
}
function nn(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
              var a = e
                , i = t
                , s = i;
              e: for (; s !== null; ) {
                  switch (s.tag) {
                  case 5:
                      ft = s.stateNode,
                      an = !1;
                      break e;
                  case 3:
                      ft = s.stateNode.containerInfo,
                      an = !0;
                      break e;
                  case 4:
                      ft = s.stateNode.containerInfo,
                      an = !0;
                      break e
                  }
                  s = s.return
              }
              if (ft === null)
                  throw Error(z(160));
              zy(a, i, o),
              ft = null,
              an = !1;
              var l = o.alternate;
              l !== null && (l.return = null),
              o.return = null
          } catch (u) {
              Ze(o, t, u)
          }
      }
  if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
          By(t, e),
          t = t.sibling
}
function By(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (nn(t, e),
      Sn(e),
      r & 4) {
          try {
              pi(3, e, e.return),
              cu(3, e)
          } catch (v) {
              Ze(e, e.return, v)
          }
          try {
              pi(5, e, e.return)
          } catch (v) {
              Ze(e, e.return, v)
          }
      }
      break;
  case 1:
      nn(t, e),
      Sn(e),
      r & 512 && n !== null && Zo(n, n.return);
      break;
  case 5:
      if (nn(t, e),
      Sn(e),
      r & 512 && n !== null && Zo(n, n.return),
      e.flags & 32) {
          var o = e.stateNode;
          try {
              ki(o, "")
          } catch (v) {
              Ze(e, e.return, v)
          }
      }
      if (r & 4 && (o = e.stateNode,
      o != null)) {
          var a = e.memoizedProps
            , i = n !== null ? n.memoizedProps : a
            , s = e.type
            , l = e.updateQueue;
          if (e.updateQueue = null,
          l !== null)
              try {
                  s === "input" && a.type === "radio" && a.name != null && cv(o, a),
                  qc(s, i);
                  var u = qc(s, a);
                  for (i = 0; i < l.length; i += 2) {
                      var d = l[i]
                        , c = l[i + 1];
                      d === "style" ? pv(o, c) : d === "dangerouslySetInnerHTML" ? hv(o, c) : d === "children" ? ki(o, c) : Cf(o, d, c, u)
                  }
                  switch (s) {
                  case "input":
                      Vc(o, a);
                      break;
                  case "textarea":
                      dv(o, a);
                      break;
                  case "select":
                      var f = o._wrapperState.wasMultiple;
                      o._wrapperState.wasMultiple = !!a.multiple;
                      var g = a.value;
                      g != null ? ra(o, !!a.multiple, g, !1) : f !== !!a.multiple && (a.defaultValue != null ? ra(o, !!a.multiple, a.defaultValue, !0) : ra(o, !!a.multiple, a.multiple ? [] : "", !1))
                  }
                  o[Ri] = a
              } catch (v) {
                  Ze(e, e.return, v)
              }
      }
      break;
  case 6:
      if (nn(t, e),
      Sn(e),
      r & 4) {
          if (e.stateNode === null)
              throw Error(z(162));
          o = e.stateNode,
          a = e.memoizedProps;
          try {
              o.nodeValue = a
          } catch (v) {
              Ze(e, e.return, v)
          }
      }
      break;
  case 3:
      if (nn(t, e),
      Sn(e),
      r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
              Mi(t.containerInfo)
          } catch (v) {
              Ze(e, e.return, v)
          }
      break;
  case 4:
      nn(t, e),
      Sn(e);
      break;
  case 13:
      nn(t, e),
      Sn(e),
      o = e.child,
      o.flags & 8192 && (a = o.memoizedState !== null,
      o.stateNode.isHidden = a,
      !a || o.alternate !== null && o.alternate.memoizedState !== null || (rh = Je())),
      r & 4 && Jm(e);
      break;
  case 22:
      if (d = n !== null && n.memoizedState !== null,
      e.mode & 1 ? (yt = (u = yt) || d,
      nn(t, e),
      yt = u) : nn(t, e),
      Sn(e),
      r & 8192) {
          if (u = e.memoizedState !== null,
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
              for (X = e,
              d = e.child; d !== null; ) {
                  for (c = X = d; X !== null; ) {
                      switch (f = X,
                      g = f.child,
                      f.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          pi(4, f, f.return);
                          break;
                      case 1:
                          Zo(f, f.return);
                          var w = f.stateNode;
                          if (typeof w.componentWillUnmount == "function") {
                              r = f,
                              n = f.return;
                              try {
                                  t = r,
                                  w.props = t.memoizedProps,
                                  w.state = t.memoizedState,
                                  w.componentWillUnmount()
                              } catch (v) {
                                  Ze(r, n, v)
                              }
                          }
                          break;
                      case 5:
                          Zo(f, f.return);
                          break;
                      case 22:
                          if (f.memoizedState !== null) {
                              tp(c);
                              continue
                          }
                      }
                      g !== null ? (g.return = f,
                      X = g) : tp(c)
                  }
                  d = d.sibling
              }
          e: for (d = null,
          c = e; ; ) {
              if (c.tag === 5) {
                  if (d === null) {
                      d = c;
                      try {
                          o = c.stateNode,
                          u ? (a = o.style,
                          typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = c.stateNode,
                          l = c.memoizedProps.style,
                          i = l != null && l.hasOwnProperty("display") ? l.display : null,
                          s.style.display = mv("display", i))
                      } catch (v) {
                          Ze(e, e.return, v)
                      }
                  }
              } else if (c.tag === 6) {
                  if (d === null)
                      try {
                          c.stateNode.nodeValue = u ? "" : c.memoizedProps
                      } catch (v) {
                          Ze(e, e.return, v)
                      }
              } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                  c.child.return = c,
                  c = c.child;
                  continue
              }
              if (c === e)
                  break e;
              for (; c.sibling === null; ) {
                  if (c.return === null || c.return === e)
                      break e;
                  d === c && (d = null),
                  c = c.return
              }
              d === c && (d = null),
              c.sibling.return = c.return,
              c = c.sibling
          }
      }
      break;
  case 19:
      nn(t, e),
      Sn(e),
      r & 4 && Jm(e);
      break;
  case 21:
      break;
  default:
      nn(t, e),
      Sn(e)
  }
}
function Sn(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null; ) {
                  if ($y(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(z(160))
          }
          switch (r.tag) {
          case 5:
              var o = r.stateNode;
              r.flags & 32 && (ki(o, ""),
              r.flags &= -33);
              var a = Zm(e);
              Md(e, a, o);
              break;
          case 3:
          case 4:
              var i = r.stateNode.containerInfo
                , s = Zm(e);
              Pd(e, s, i);
              break;
          default:
              throw Error(z(161))
          }
      } catch (l) {
          Ze(e, e.return, l)
      }
      e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function m2(e, t, n) {
  X = e,
  Hy(e)
}
function Hy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
      var o = X
        , a = o.child;
      if (o.tag === 22 && r) {
          var i = o.memoizedState !== null || Is;
          if (!i) {
              var s = o.alternate
                , l = s !== null && s.memoizedState !== null || yt;
              s = Is;
              var u = yt;
              if (Is = i,
              (yt = l) && !u)
                  for (X = o; X !== null; )
                      i = X,
                      l = i.child,
                      i.tag === 22 && i.memoizedState !== null ? np(o) : l !== null ? (l.return = i,
                      X = l) : np(o);
              for (; a !== null; )
                  X = a,
                  Hy(a),
                  a = a.sibling;
              X = o,
              Is = s,
              yt = u
          }
          ep(e)
      } else
          o.subtreeFlags & 8772 && a !== null ? (a.return = o,
          X = a) : ep(e)
  }
}
function ep(e) {
  for (; X !== null; ) {
      var t = X;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772)
                  switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                      yt || cu(5, t);
                      break;
                  case 1:
                      var r = t.stateNode;
                      if (t.flags & 4 && !yt)
                          if (n === null)
                              r.componentDidMount();
                          else {
                              var o = t.elementType === t.type ? n.memoizedProps : on(t.type, n.memoizedProps);
                              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                          }
                      var a = t.updateQueue;
                      a !== null && Fm(t, a, r);
                      break;
                  case 3:
                      var i = t.updateQueue;
                      if (i !== null) {
                          if (n = null,
                          t.child !== null)
                              switch (t.child.tag) {
                              case 5:
                                  n = t.child.stateNode;
                                  break;
                              case 1:
                                  n = t.child.stateNode
                              }
                          Fm(t, i, n)
                      }
                      break;
                  case 5:
                      var s = t.stateNode;
                      if (n === null && t.flags & 4) {
                          n = s;
                          var l = t.memoizedProps;
                          switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              l.autoFocus && n.focus();
                              break;
                          case "img":
                              l.src && (n.src = l.src)
                          }
                      }
                      break;
                  case 6:
                      break;
                  case 4:
                      break;
                  case 12:
                      break;
                  case 13:
                      if (t.memoizedState === null) {
                          var u = t.alternate;
                          if (u !== null) {
                              var d = u.memoizedState;
                              if (d !== null) {
                                  var c = d.dehydrated;
                                  c !== null && Mi(c)
                              }
                          }
                      }
                      break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                      break;
                  default:
                      throw Error(z(163))
                  }
              yt || t.flags & 512 && Ed(t)
          } catch (f) {
              Ze(t, t.return, f)
          }
      }
      if (t === e) {
          X = null;
          break
      }
      if (n = t.sibling,
      n !== null) {
          n.return = t.return,
          X = n;
          break
      }
      X = t.return
  }
}
function tp(e) {
  for (; X !== null; ) {
      var t = X;
      if (t === e) {
          X = null;
          break
      }
      var n = t.sibling;
      if (n !== null) {
          n.return = t.return,
          X = n;
          break
      }
      X = t.return
  }
}
function np(e) {
  for (; X !== null; ) {
      var t = X;
      try {
          switch (t.tag) {
          case 0:
          case 11:
          case 15:
              var n = t.return;
              try {
                  cu(4, t)
              } catch (l) {
                  Ze(t, n, l)
              }
              break;
          case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var o = t.return;
                  try {
                      r.componentDidMount()
                  } catch (l) {
                      Ze(t, o, l)
                  }
              }
              var a = t.return;
              try {
                  Ed(t)
              } catch (l) {
                  Ze(t, a, l)
              }
              break;
          case 5:
              var i = t.return;
              try {
                  Ed(t)
              } catch (l) {
                  Ze(t, i, l)
              }
          }
      } catch (l) {
          Ze(t, t.return, l)
      }
      if (t === e) {
          X = null;
          break
      }
      var s = t.sibling;
      if (s !== null) {
          s.return = t.return,
          X = s;
          break
      }
      X = t.return
  }
}
var p2 = Math.ceil
, _l = ar.ReactCurrentDispatcher
, th = ar.ReactCurrentOwner
, qt = ar.ReactCurrentBatchConfig
, ye = 0
, ut = null
, nt = null
, ht = 0
, jt = 0
, Jo = Xr(0)
, it = 0
, Fi = null
, bo = 0
, du = 0
, nh = 0
, gi = null
, Nt = null
, rh = 0
, ba = 1 / 0
, Un = null
, Al = !1
, Nd = null
, _r = null
, Ls = !1
, Er = null
, jl = 0
, vi = 0
, Od = null
, rl = -1
, ol = 0;
function St() {
  return ye & 6 ? Je() : rl !== -1 ? rl : rl = Je()
}
function Ar(e) {
  return e.mode & 1 ? ye & 2 && ht !== 0 ? ht & -ht : ZS.transition !== null ? (ol === 0 && (ol = Mv()),
  ol) : (e = Me,
  e !== 0 || (e = window.event,
  e = e === void 0 ? 16 : Av(e.type)),
  e) : 1
}
function fn(e, t, n, r) {
  if (50 < vi)
      throw vi = 0,
      Od = null,
      Error(z(185));
  qi(e, n, r),
  (!(ye & 2) || e !== ut) && (e === ut && (!(ye & 2) && (du |= n),
  it === 4 && kr(e, ht)),
  Rt(e, r),
  n === 1 && ye === 0 && !(t.mode & 1) && (ba = Je() + 500,
  su && Qr()))
}
function Rt(e, t) {
  var n = e.callbackNode;
  Zb(e, t);
  var r = yl(e, e === ut ? ht : 0);
  if (r === 0)
      n !== null && dm(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
  e.callbackPriority !== t) {
      if (n != null && dm(n),
      t === 1)
          e.tag === 0 ? qS(rp.bind(null, e)) : Jv(rp.bind(null, e)),
          GS(function() {
              !(ye & 6) && Qr()
          }),
          n = null;
      else {
          switch (Nv(r)) {
          case 1:
              n = Of;
              break;
          case 4:
              n = Ev;
              break;
          case 16:
              n = vl;
              break;
          case 536870912:
              n = Pv;
              break;
          default:
              n = vl
          }
          n = qy(n, Uy.bind(null, e))
      }
      e.callbackPriority = t,
      e.callbackNode = n
  }
}
function Uy(e, t) {
  if (rl = -1,
  ol = 0,
  ye & 6)
      throw Error(z(327));
  var n = e.callbackNode;
  if (la() && e.callbackNode !== n)
      return null;
  var r = yl(e, e === ut ? ht : 0);
  if (r === 0)
      return null;
  if (r & 30 || r & e.expiredLanes || t)
      t = Il(e, r);
  else {
      t = r;
      var o = ye;
      ye |= 2;
      var a = Vy();
      (ut !== e || ht !== t) && (Un = null,
      ba = Je() + 500,
      fo(e, t));
      do
          try {
              y2();
              break
          } catch (s) {
              Yy(e, s)
          }
      while (!0);
      Bf(),
      _l.current = a,
      ye = o,
      nt !== null ? t = 0 : (ut = null,
      ht = 0,
      t = it)
  }
  if (t !== 0) {
      if (t === 2 && (o = nd(e),
      o !== 0 && (r = o,
      t = Dd(e, o))),
      t === 1)
          throw n = Fi,
          fo(e, 0),
          kr(e, r),
          Rt(e, Je()),
          n;
      if (t === 6)
          kr(e, r);
      else {
          if (o = e.current.alternate,
          !(r & 30) && !g2(o) && (t = Il(e, r),
          t === 2 && (a = nd(e),
          a !== 0 && (r = a,
          t = Dd(e, a))),
          t === 1))
              throw n = Fi,
              fo(e, 0),
              kr(e, r),
              Rt(e, Je()),
              n;
          switch (e.finishedWork = o,
          e.finishedLanes = r,
          t) {
          case 0:
          case 1:
              throw Error(z(345));
          case 2:
              no(e, Nt, Un);
              break;
          case 3:
              if (kr(e, r),
              (r & 130023424) === r && (t = rh + 500 - Je(),
              10 < t)) {
                  if (yl(e, 0) !== 0)
                      break;
                  if (o = e.suspendedLanes,
                  (o & r) !== r) {
                      St(),
                      e.pingedLanes |= e.suspendedLanes & o;
                      break
                  }
                  e.timeoutHandle = cd(no.bind(null, e, Nt, Un), t);
                  break
              }
              no(e, Nt, Un);
              break;
          case 4:
              if (kr(e, r),
              (r & 4194240) === r)
                  break;
              for (t = e.eventTimes,
              o = -1; 0 < r; ) {
                  var i = 31 - dn(r);
                  a = 1 << i,
                  i = t[i],
                  i > o && (o = i),
                  r &= ~a
              }
              if (r = o,
              r = Je() - r,
              r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * p2(r / 1960)) - r,
              10 < r) {
                  e.timeoutHandle = cd(no.bind(null, e, Nt, Un), r);
                  break
              }
              no(e, Nt, Un);
              break;
          case 5:
              no(e, Nt, Un);
              break;
          default:
              throw Error(z(329))
          }
      }
  }
  return Rt(e, Je()),
  e.callbackNode === n ? Uy.bind(null, e) : null
}
function Dd(e, t) {
  var n = gi;
  return e.current.memoizedState.isDehydrated && (fo(e, t).flags |= 256),
  e = Il(e, t),
  e !== 2 && (t = Nt,
  Nt = n,
  t !== null && Td(t)),
  e
}
function Td(e) {
  Nt === null ? Nt = e : Nt.push.apply(Nt, e)
}
function g2(e) {
  for (var t = e; ; ) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores,
          n !== null))
              for (var r = 0; r < n.length; r++) {
                  var o = n[r]
                    , a = o.getSnapshot;
                  o = o.value;
                  try {
                      if (!hn(a(), o))
                          return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
          n.return = t,
          t = n;
      else {
          if (t === e)
              break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                  return !0;
              t = t.return
          }
          t.sibling.return = t.return,
          t = t.sibling
      }
  }
  return !0
}
function kr(e, t) {
  for (t &= ~nh,
  t &= ~du,
  e.suspendedLanes |= t,
  e.pingedLanes &= ~t,
  e = e.expirationTimes; 0 < t; ) {
      var n = 31 - dn(t)
        , r = 1 << n;
      e[n] = -1,
      t &= ~r
  }
}
function rp(e) {
  if (ye & 6)
      throw Error(z(327));
  la();
  var t = yl(e, 0);
  if (!(t & 1))
      return Rt(e, Je()),
      null;
  var n = Il(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = nd(e);
      r !== 0 && (t = r,
      n = Dd(e, r))
  }
  if (n === 1)
      throw n = Fi,
      fo(e, 0),
      kr(e, t),
      Rt(e, Je()),
      n;
  if (n === 6)
      throw Error(z(345));
  return e.finishedWork = e.current.alternate,
  e.finishedLanes = t,
  no(e, Nt, Un),
  Rt(e, Je()),
  null
}
function oh(e, t) {
  var n = ye;
  ye |= 1;
  try {
      return e(t)
  } finally {
      ye = n,
      ye === 0 && (ba = Je() + 500,
      su && Qr())
  }
}
function So(e) {
  Er !== null && Er.tag === 0 && !(ye & 6) && la();
  var t = ye;
  ye |= 1;
  var n = qt.transition
    , r = Me;
  try {
      if (qt.transition = null,
      Me = 1,
      e)
          return e()
  } finally {
      Me = r,
      qt.transition = n,
      ye = t,
      !(ye & 6) && Qr()
  }
}
function ah() {
  jt = Jo.current,
  We(Jo)
}
function fo(e, t) {
  e.finishedWork = null,
  e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
  VS(n)),
  nt !== null)
      for (n = nt.return; n !== null; ) {
          var r = n;
          switch (Wf(r),
          r.tag) {
          case 1:
              r = r.type.childContextTypes,
              r != null && kl();
              break;
          case 3:
              wa(),
              We(Dt),
              We(wt),
              Xf();
              break;
          case 5:
              Gf(r);
              break;
          case 4:
              wa();
              break;
          case 13:
              We(Ve);
              break;
          case 19:
              We(Ve);
              break;
          case 10:
              Hf(r.type._context);
              break;
          case 22:
          case 23:
              ah()
          }
          n = n.return
      }
  if (ut = e,
  nt = e = jr(e.current, null),
  ht = jt = t,
  it = 0,
  Fi = null,
  nh = du = bo = 0,
  Nt = gi = null,
  lo !== null) {
      for (t = 0; t < lo.length; t++)
          if (n = lo[t],
          r = n.interleaved,
          r !== null) {
              n.interleaved = null;
              var o = r.next
                , a = n.pending;
              if (a !== null) {
                  var i = a.next;
                  a.next = o,
                  r.next = i
              }
              n.pending = r
          }
      lo = null
  }
  return e
}
function Yy(e, t) {
  do {
      var n = nt;
      try {
          if (Bf(),
          el.current = Rl,
          Tl) {
              for (var r = Ge.memoizedState; r !== null; ) {
                  var o = r.queue;
                  o !== null && (o.pending = null),
                  r = r.next
              }
              Tl = !1
          }
          if (xo = 0,
          lt = ot = Ge = null,
          mi = !1,
          ji = 0,
          th.current = null,
          n === null || n.return === null) {
              it = 1,
              Fi = t,
              nt = null;
              break
          }
          e: {
              var a = e
                , i = n.return
                , s = n
                , l = t;
              if (t = ht,
              s.flags |= 32768,
              l !== null && typeof l == "object" && typeof l.then == "function") {
                  var u = l
                    , d = s
                    , c = d.tag;
                  if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                      var f = d.alternate;
                      f ? (d.updateQueue = f.updateQueue,
                      d.memoizedState = f.memoizedState,
                      d.lanes = f.lanes) : (d.updateQueue = null,
                      d.memoizedState = null)
                  }
                  var g = Um(i);
                  if (g !== null) {
                      g.flags &= -257,
                      Ym(g, i, s, a, t),
                      g.mode & 1 && Hm(a, u, t),
                      t = g,
                      l = u;
                      var w = t.updateQueue;
                      if (w === null) {
                          var v = new Set;
                          v.add(l),
                          t.updateQueue = v
                      } else
                          w.add(l);
                      break e
                  } else {
                      if (!(t & 1)) {
                          Hm(a, u, t),
                          ih();
                          break e
                      }
                      l = Error(z(426))
                  }
              } else if (ze && s.mode & 1) {
                  var x = Um(i);
                  if (x !== null) {
                      !(x.flags & 65536) && (x.flags |= 256),
                      Ym(x, i, s, a, t),
                      $f(xa(l, s));
                      break e
                  }
              }
              a = l = xa(l, s),
              it !== 4 && (it = 2),
              gi === null ? gi = [a] : gi.push(a),
              a = i;
              do {
                  switch (a.tag) {
                  case 3:
                      a.flags |= 65536,
                      t &= -t,
                      a.lanes |= t;
                      var p = Ny(a, l, t);
                      Lm(a, p);
                      break e;
                  case 1:
                      s = l;
                      var h = a.type
                        , m = a.stateNode;
                      if (!(a.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (_r === null || !_r.has(m)))) {
                          a.flags |= 65536,
                          t &= -t,
                          a.lanes |= t;
                          var S = Oy(a, s, t);
                          Lm(a, S);
                          break e
                      }
                  }
                  a = a.return
              } while (a !== null)
          }
          Xy(n)
      } catch (E) {
          t = E,
          nt === n && n !== null && (nt = n = n.return);
          continue
      }
      break
  } while (!0)
}
function Vy() {
  var e = _l.current;
  return _l.current = Rl,
  e === null ? Rl : e
}
function ih() {
  (it === 0 || it === 3 || it === 2) && (it = 4),
  ut === null || !(bo & 268435455) && !(du & 268435455) || kr(ut, ht)
}
function Il(e, t) {
  var n = ye;
  ye |= 2;
  var r = Vy();
  (ut !== e || ht !== t) && (Un = null,
  fo(e, t));
  do
      try {
          v2();
          break
      } catch (o) {
          Yy(e, o)
      }
  while (!0);
  if (Bf(),
  ye = n,
  _l.current = r,
  nt !== null)
      throw Error(z(261));
  return ut = null,
  ht = 0,
  it
}
function v2() {
  for (; nt !== null; )
      Gy(nt)
}
function y2() {
  for (; nt !== null && !Hb(); )
      Gy(nt)
}
function Gy(e) {
  var t = Ky(e.alternate, e, jt);
  e.memoizedProps = e.pendingProps,
  t === null ? Xy(e) : nt = t,
  th.current = null
}
function Xy(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (e = t.return,
      t.flags & 32768) {
          if (n = d2(n, t),
          n !== null) {
              n.flags &= 32767,
              nt = n;
              return
          }
          if (e !== null)
              e.flags |= 32768,
              e.subtreeFlags = 0,
              e.deletions = null;
          else {
              it = 6,
              nt = null;
              return
          }
      } else if (n = c2(n, t, jt),
      n !== null) {
          nt = n;
          return
      }
      if (t = t.sibling,
      t !== null) {
          nt = t;
          return
      }
      nt = t = e
  } while (t !== null);
  it === 0 && (it = 5)
}
function no(e, t, n) {
  var r = Me
    , o = qt.transition;
  try {
      qt.transition = null,
      Me = 1,
      w2(e, t, n, r)
  } finally {
      qt.transition = o,
      Me = r
  }
  return null
}
function w2(e, t, n, r) {
  do
      la();
  while (Er !== null);
  if (ye & 6)
      throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
      return null;
  if (e.finishedWork = null,
  e.finishedLanes = 0,
  n === e.current)
      throw Error(z(177));
  e.callbackNode = null,
  e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Jb(e, a),
  e === ut && (nt = ut = null,
  ht = 0),
  !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ls || (Ls = !0,
  qy(vl, function() {
      return la(),
      null
  })),
  a = (n.flags & 15990) !== 0,
  n.subtreeFlags & 15990 || a) {
      a = qt.transition,
      qt.transition = null;
      var i = Me;
      Me = 1;
      var s = ye;
      ye |= 4,
      th.current = null,
      h2(e, n),
      By(n, e),
      WS(ld),
      wl = !!sd,
      ld = sd = null,
      e.current = n,
      m2(n),
      Ub(),
      ye = s,
      Me = i,
      qt.transition = a
  } else
      e.current = n;
  if (Ls && (Ls = !1,
  Er = e,
  jl = o),
  a = e.pendingLanes,
  a === 0 && (_r = null),
  Gb(n.stateNode),
  Rt(e, Je()),
  t !== null)
      for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
          o = t[n],
          r(o.value, {
              componentStack: o.stack,
              digest: o.digest
          });
  if (Al)
      throw Al = !1,
      e = Nd,
      Nd = null,
      e;
  return jl & 1 && e.tag !== 0 && la(),
  a = e.pendingLanes,
  a & 1 ? e === Od ? vi++ : (vi = 0,
  Od = e) : vi = 0,
  Qr(),
  null
}
function la() {
  if (Er !== null) {
      var e = Nv(jl)
        , t = qt.transition
        , n = Me;
      try {
          if (qt.transition = null,
          Me = 16 > e ? 16 : e,
          Er === null)
              var r = !1;
          else {
              if (e = Er,
              Er = null,
              jl = 0,
              ye & 6)
                  throw Error(z(331));
              var o = ye;
              for (ye |= 4,
              X = e.current; X !== null; ) {
                  var a = X
                    , i = a.child;
                  if (X.flags & 16) {
                      var s = a.deletions;
                      if (s !== null) {
                          for (var l = 0; l < s.length; l++) {
                              var u = s[l];
                              for (X = u; X !== null; ) {
                                  var d = X;
                                  switch (d.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      pi(8, d, a)
                                  }
                                  var c = d.child;
                                  if (c !== null)
                                      c.return = d,
                                      X = c;
                                  else
                                      for (; X !== null; ) {
                                          d = X;
                                          var f = d.sibling
                                            , g = d.return;
                                          if (Wy(d),
                                          d === u) {
                                              X = null;
                                              break
                                          }
                                          if (f !== null) {
                                              f.return = g,
                                              X = f;
                                              break
                                          }
                                          X = g
                                      }
                              }
                          }
                          var w = a.alternate;
                          if (w !== null) {
                              var v = w.child;
                              if (v !== null) {
                                  w.child = null;
                                  do {
                                      var x = v.sibling;
                                      v.sibling = null,
                                      v = x
                                  } while (v !== null)
                              }
                          }
                          X = a
                      }
                  }
                  if (a.subtreeFlags & 2064 && i !== null)
                      i.return = a,
                      X = i;
                  else
                      e: for (; X !== null; ) {
                          if (a = X,
                          a.flags & 2048)
                              switch (a.tag) {
                              case 0:
                              case 11:
                              case 15:
                                  pi(9, a, a.return)
                              }
                          var p = a.sibling;
                          if (p !== null) {
                              p.return = a.return,
                              X = p;
                              break e
                          }
                          X = a.return
                      }
              }
              var h = e.current;
              for (X = h; X !== null; ) {
                  i = X;
                  var m = i.child;
                  if (i.subtreeFlags & 2064 && m !== null)
                      m.return = i,
                      X = m;
                  else
                      e: for (i = h; X !== null; ) {
                          if (s = X,
                          s.flags & 2048)
                              try {
                                  switch (s.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      cu(9, s)
                                  }
                              } catch (E) {
                                  Ze(s, s.return, E)
                              }
                          if (s === i) {
                              X = null;
                              break e
                          }
                          var S = s.sibling;
                          if (S !== null) {
                              S.return = s.return,
                              X = S;
                              break e
                          }
                          X = s.return
                      }
              }
              if (ye = o,
              Qr(),
              _n && typeof _n.onPostCommitFiberRoot == "function")
                  try {
                      _n.onPostCommitFiberRoot(nu, e)
                  } catch {}
              r = !0
          }
          return r
      } finally {
          Me = n,
          qt.transition = t
      }
  }
  return !1
}
function op(e, t, n) {
  t = xa(n, t),
  t = Ny(e, t, 1),
  e = Rr(e, t, 1),
  t = St(),
  e !== null && (qi(e, 1, t),
  Rt(e, t))
}
function Ze(e, t, n) {
  if (e.tag === 3)
      op(e, e, n);
  else
      for (; t !== null; ) {
          if (t.tag === 3) {
              op(t, e, n);
              break
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
                  e = xa(n, e),
                  e = Oy(t, e, 1),
                  t = Rr(t, e, 1),
                  e = St(),
                  t !== null && (qi(t, 1, e),
                  Rt(t, e));
                  break
              }
          }
          t = t.return
      }
}
function x2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
  t = St(),
  e.pingedLanes |= e.suspendedLanes & n,
  ut === e && (ht & n) === n && (it === 4 || it === 3 && (ht & 130023424) === ht && 500 > Je() - rh ? fo(e, 0) : nh |= n),
  Rt(e, t)
}
function Qy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ms,
  Ms <<= 1,
  !(Ms & 130023424) && (Ms = 4194304)) : t = 1);
  var n = St();
  e = Zn(e, t),
  e !== null && (qi(e, t, n),
  Rt(e, n))
}
function b2(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
  Qy(e, n)
}
function S2(e, t) {
  var n = 0;
  switch (e.tag) {
  case 13:
      var r = e.stateNode
        , o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
  case 19:
      r = e.stateNode;
      break;
  default:
      throw Error(z(314))
  }
  r !== null && r.delete(t),
  Qy(e, n)
}
var Ky;
Ky = function(e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Dt.current)
          Ot = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128))
              return Ot = !1,
              u2(e, t, n);
          Ot = !!(e.flags & 131072)
      }
  else
      Ot = !1,
      ze && t.flags & 1048576 && ey(t, Pl, t.index);
  switch (t.lanes = 0,
  t.tag) {
  case 2:
      var r = t.type;
      nl(e, t),
      e = t.pendingProps;
      var o = ga(t, wt.current);
      sa(t, n),
      o = Kf(null, t, r, e, o, n);
      var a = qf();
      return t.flags |= 1,
      typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
      t.memoizedState = null,
      t.updateQueue = null,
      Tt(r) ? (a = !0,
      Cl(t)) : a = !1,
      t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
      Yf(t),
      o.updater = uu,
      t.stateNode = o,
      o._reactInternals = t,
      vd(t, r, e, n),
      t = xd(null, t, r, !0, a, n)) : (t.tag = 0,
      ze && a && Ff(t),
      bt(null, t, o, n),
      t = t.child),
      t;
  case 16:
      r = t.elementType;
      e: {
          switch (nl(e, t),
          e = t.pendingProps,
          o = r._init,
          r = o(r._payload),
          t.type = r,
          o = t.tag = C2(r),
          e = on(r, e),
          o) {
          case 0:
              t = wd(null, t, r, e, n);
              break e;
          case 1:
              t = Xm(null, t, r, e, n);
              break e;
          case 11:
              t = Vm(null, t, r, e, n);
              break e;
          case 14:
              t = Gm(null, t, r, on(r.type, e), n);
              break e
          }
          throw Error(z(306, r, ""))
      }
      return t;
  case 0:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : on(r, o),
      wd(e, t, r, o, n);
  case 1:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : on(r, o),
      Xm(e, t, r, o, n);
  case 3:
      e: {
          if (_y(t),
          e === null)
              throw Error(z(387));
          r = t.pendingProps,
          a = t.memoizedState,
          o = a.element,
          iy(e, t),
          Ol(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element,
          a.isDehydrated)
              if (a = {
                  element: r,
                  isDehydrated: !1,
                  cache: i.cache,
                  pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                  transitions: i.transitions
              },
              t.updateQueue.baseState = a,
              t.memoizedState = a,
              t.flags & 256) {
                  o = xa(Error(z(423)), t),
                  t = Qm(e, t, r, n, o);
                  break e
              } else if (r !== o) {
                  o = xa(Error(z(424)), t),
                  t = Qm(e, t, r, n, o);
                  break e
              } else
                  for (Ft = Tr(t.stateNode.containerInfo.firstChild),
                  Wt = t,
                  ze = !0,
                  ln = null,
                  n = oy(t, null, r, n),
                  t.child = n; n; )
                      n.flags = n.flags & -3 | 4096,
                      n = n.sibling;
          else {
              if (va(),
              r === o) {
                  t = Jn(e, t, n);
                  break e
              }
              bt(e, t, r, n)
          }
          t = t.child
      }
      return t;
  case 5:
      return sy(t),
      e === null && md(t),
      r = t.type,
      o = t.pendingProps,
      a = e !== null ? e.memoizedProps : null,
      i = o.children,
      ud(r, o) ? i = null : a !== null && ud(r, a) && (t.flags |= 32),
      Ry(e, t),
      bt(e, t, i, n),
      t.child;
  case 6:
      return e === null && md(t),
      null;
  case 13:
      return Ay(e, t, n);
  case 4:
      return Vf(t, t.stateNode.containerInfo),
      r = t.pendingProps,
      e === null ? t.child = ya(t, null, r, n) : bt(e, t, r, n),
      t.child;
  case 11:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : on(r, o),
      Vm(e, t, r, o, n);
  case 7:
      return bt(e, t, t.pendingProps, n),
      t.child;
  case 8:
      return bt(e, t, t.pendingProps.children, n),
      t.child;
  case 12:
      return bt(e, t, t.pendingProps.children, n),
      t.child;
  case 10:
      e: {
          if (r = t.type._context,
          o = t.pendingProps,
          a = t.memoizedProps,
          i = o.value,
          Re(Ml, r._currentValue),
          r._currentValue = i,
          a !== null)
              if (hn(a.value, i)) {
                  if (a.children === o.children && !Dt.current) {
                      t = Jn(e, t, n);
                      break e
                  }
              } else
                  for (a = t.child,
                  a !== null && (a.return = t); a !== null; ) {
                      var s = a.dependencies;
                      if (s !== null) {
                          i = a.child;
                          for (var l = s.firstContext; l !== null; ) {
                              if (l.context === r) {
                                  if (a.tag === 1) {
                                      l = Qn(-1, n & -n),
                                      l.tag = 2;
                                      var u = a.updateQueue;
                                      if (u !== null) {
                                          u = u.shared;
                                          var d = u.pending;
                                          d === null ? l.next = l : (l.next = d.next,
                                          d.next = l),
                                          u.pending = l
                                      }
                                  }
                                  a.lanes |= n,
                                  l = a.alternate,
                                  l !== null && (l.lanes |= n),
                                  pd(a.return, n, t),
                                  s.lanes |= n;
                                  break
                              }
                              l = l.next
                          }
                      } else if (a.tag === 10)
                          i = a.type === t.type ? null : a.child;
                      else if (a.tag === 18) {
                          if (i = a.return,
                          i === null)
                              throw Error(z(341));
                          i.lanes |= n,
                          s = i.alternate,
                          s !== null && (s.lanes |= n),
                          pd(i, n, t),
                          i = a.sibling
                      } else
                          i = a.child;
                      if (i !== null)
                          i.return = a;
                      else
                          for (i = a; i !== null; ) {
                              if (i === t) {
                                  i = null;
                                  break
                              }
                              if (a = i.sibling,
                              a !== null) {
                                  a.return = i.return,
                                  i = a;
                                  break
                              }
                              i = i.return
                          }
                      a = i
                  }
          bt(e, t, o.children, n),
          t = t.child
      }
      return t;
  case 9:
      return o = t.type,
      r = t.pendingProps.children,
      sa(t, n),
      o = Zt(o),
      r = r(o),
      t.flags |= 1,
      bt(e, t, r, n),
      t.child;
  case 14:
      return r = t.type,
      o = on(r, t.pendingProps),
      o = on(r.type, o),
      Gm(e, t, r, o, n);
  case 15:
      return Dy(e, t, t.type, t.pendingProps, n);
  case 17:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : on(r, o),
      nl(e, t),
      t.tag = 1,
      Tt(r) ? (e = !0,
      Cl(t)) : e = !1,
      sa(t, n),
      My(t, r, o),
      vd(t, r, o, n),
      xd(null, t, r, !0, e, n);
  case 19:
      return jy(e, t, n);
  case 22:
      return Ty(e, t, n)
  }
  throw Error(z(156, t.tag))
}
;
function qy(e, t) {
  return Cv(e, t)
}
function k2(e, t, n, r) {
  this.tag = e,
  this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
  this.index = 0,
  this.ref = null,
  this.pendingProps = t,
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
  this.mode = r,
  this.subtreeFlags = this.flags = 0,
  this.deletions = null,
  this.childLanes = this.lanes = 0,
  this.alternate = null
}
function Kt(e, t, n, r) {
  return new k2(e,t,n,r)
}
function sh(e) {
  return e = e.prototype,
  !(!e || !e.isReactComponent)
}
function C2(e) {
  if (typeof e == "function")
      return sh(e) ? 1 : 0;
  if (e != null) {
      if (e = e.$$typeof,
      e === Pf)
          return 11;
      if (e === Mf)
          return 14
  }
  return 2
}
function jr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Kt(e.tag, t, e.key, e.mode),
  n.elementType = e.elementType,
  n.type = e.type,
  n.stateNode = e.stateNode,
  n.alternate = e,
  e.alternate = n) : (n.pendingProps = t,
  n.type = e.type,
  n.flags = 0,
  n.subtreeFlags = 0,
  n.deletions = null),
  n.flags = e.flags & 14680064,
  n.childLanes = e.childLanes,
  n.lanes = e.lanes,
  n.child = e.child,
  n.memoizedProps = e.memoizedProps,
  n.memoizedState = e.memoizedState,
  n.updateQueue = e.updateQueue,
  t = e.dependencies,
  n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
  },
  n.sibling = e.sibling,
  n.index = e.index,
  n.ref = e.ref,
  n
}
function al(e, t, n, r, o, a) {
  var i = 2;
  if (r = e,
  typeof e == "function")
      sh(e) && (i = 1);
  else if (typeof e == "string")
      i = 5;
  else
      e: switch (e) {
      case Ho:
          return ho(n.children, o, a, t);
      case Ef:
          i = 8,
          o |= 8;
          break;
      case zc:
          return e = Kt(12, n, t, o | 2),
          e.elementType = zc,
          e.lanes = a,
          e;
      case Bc:
          return e = Kt(13, n, t, o),
          e.elementType = Bc,
          e.lanes = a,
          e;
      case Hc:
          return e = Kt(19, n, t, o),
          e.elementType = Hc,
          e.lanes = a,
          e;
      case sv:
          return fu(n, o, a, t);
      default:
          if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
              case av:
                  i = 10;
                  break e;
              case iv:
                  i = 9;
                  break e;
              case Pf:
                  i = 11;
                  break e;
              case Mf:
                  i = 14;
                  break e;
              case xr:
                  i = 16,
                  r = null;
                  break e
              }
          throw Error(z(130, e == null ? e : typeof e, ""))
      }
  return t = Kt(i, n, t, o),
  t.elementType = e,
  t.type = r,
  t.lanes = a,
  t
}
function ho(e, t, n, r) {
  return e = Kt(7, e, r, t),
  e.lanes = n,
  e
}
function fu(e, t, n, r) {
  return e = Kt(22, e, r, t),
  e.elementType = sv,
  e.lanes = n,
  e.stateNode = {
      isHidden: !1
  },
  e
}
function gc(e, t, n) {
  return e = Kt(6, e, null, t),
  e.lanes = n,
  e
}
function vc(e, t, n) {
  return t = Kt(4, e.children !== null ? e.children : [], e.key, t),
  t.lanes = n,
  t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
  },
  t
}
function E2(e, t, n, r, o) {
  this.tag = t,
  this.containerInfo = e,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0,
  this.eventTimes = qu(0),
  this.expirationTimes = qu(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
  this.entanglements = qu(0),
  this.identifierPrefix = r,
  this.onRecoverableError = o,
  this.mutableSourceEagerHydrationData = null
}
function lh(e, t, n, r, o, a, i, s, l) {
  return e = new E2(e,t,n,s,l),
  t === 1 ? (t = 1,
  a === !0 && (t |= 8)) : t = 0,
  a = Kt(3, null, null, t),
  e.current = a,
  a.stateNode = e,
  a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  },
  Yf(a),
  e
}
function P2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: Bo,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
  }
}
function Zy(e) {
  if (!e)
      return Fr;
  e = e._reactInternals;
  e: {
      if (Oo(e) !== e || e.tag !== 1)
          throw Error(z(170));
      var t = e;
      do {
          switch (t.tag) {
          case 3:
              t = t.stateNode.context;
              break e;
          case 1:
              if (Tt(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          t = t.return
      } while (t !== null);
      throw Error(z(171))
  }
  if (e.tag === 1) {
      var n = e.type;
      if (Tt(n))
          return Zv(e, n, t)
  }
  return t
}
function Jy(e, t, n, r, o, a, i, s, l) {
  return e = lh(n, r, !0, e, o, a, i, s, l),
  e.context = Zy(null),
  n = e.current,
  r = St(),
  o = Ar(n),
  a = Qn(r, o),
  a.callback = t ?? null,
  Rr(n, a, o),
  e.current.lanes = o,
  qi(e, o, r),
  Rt(e, r),
  e
}
function hu(e, t, n, r) {
  var o = t.current
    , a = St()
    , i = Ar(o);
  return n = Zy(n),
  t.context === null ? t.context = n : t.pendingContext = n,
  t = Qn(a, i),
  t.payload = {
      element: e
  },
  r = r === void 0 ? null : r,
  r !== null && (t.callback = r),
  e = Rr(o, t, i),
  e !== null && (fn(e, o, i, a),
  Js(e, o, i)),
  i
}
function Ll(e) {
  if (e = e.current,
  !e.child)
      return null;
  switch (e.child.tag) {
  case 5:
      return e.child.stateNode;
  default:
      return e.child.stateNode
  }
}
function ap(e, t) {
  if (e = e.memoizedState,
  e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
  }
}
function uh(e, t) {
  ap(e, t),
  (e = e.alternate) && ap(e, t)
}
function M2() {
  return null
}
var e0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
}
;
function ch(e) {
  this._internalRoot = e
}
mu.prototype.render = ch.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
      throw Error(z(409));
  hu(e, t, null, null)
}
;
mu.prototype.unmount = ch.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      So(function() {
          hu(null, e, null, null)
      }),
      t[qn] = null
  }
}
;
function mu(e) {
  this._internalRoot = e
}
mu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
      var t = Tv();
      e = {
          blockedOn: null,
          target: e,
          priority: t
      };
      for (var n = 0; n < Sr.length && t !== 0 && t < Sr[n].priority; n++)
          ;
      Sr.splice(n, 0, e),
      n === 0 && _v(e)
  }
}
;
function dh(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function pu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ip() {}
function N2(e, t, n, r, o) {
  if (o) {
      if (typeof r == "function") {
          var a = r;
          r = function() {
              var u = Ll(i);
              a.call(u)
          }
      }
      var i = Jy(t, r, e, 0, null, !1, !1, "", ip);
      return e._reactRootContainer = i,
      e[qn] = i.current,
      Di(e.nodeType === 8 ? e.parentNode : e),
      So(),
      i
  }
  for (; o = e.lastChild; )
      e.removeChild(o);
  if (typeof r == "function") {
      var s = r;
      r = function() {
          var u = Ll(l);
          s.call(u)
      }
  }
  var l = lh(e, 0, !1, null, null, !1, !1, "", ip);
  return e._reactRootContainer = l,
  e[qn] = l.current,
  Di(e.nodeType === 8 ? e.parentNode : e),
  So(function() {
      hu(t, l, n, r)
  }),
  l
}
function gu(e, t, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
      var i = a;
      if (typeof o == "function") {
          var s = o;
          o = function() {
              var l = Ll(i);
              s.call(l)
          }
      }
      hu(t, i, e, o)
  } else
      i = N2(n, t, e, o, r);
  return Ll(i)
}
Ov = function(e) {
  switch (e.tag) {
  case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
          var n = ni(t.pendingLanes);
          n !== 0 && (Df(t, n | 1),
          Rt(t, Je()),
          !(ye & 6) && (ba = Je() + 500,
          Qr()))
      }
      break;
  case 13:
      So(function() {
          var r = Zn(e, 1);
          if (r !== null) {
              var o = St();
              fn(r, e, 1, o)
          }
      }),
      uh(e, 1)
  }
}
;
Tf = function(e) {
  if (e.tag === 13) {
      var t = Zn(e, 134217728);
      if (t !== null) {
          var n = St();
          fn(t, e, 134217728, n)
      }
      uh(e, 134217728)
  }
}
;
Dv = function(e) {
  if (e.tag === 13) {
      var t = Ar(e)
        , n = Zn(e, t);
      if (n !== null) {
          var r = St();
          fn(n, e, t, r)
      }
      uh(e, t)
  }
}
;
Tv = function() {
  return Me
}
;
Rv = function(e, t) {
  var n = Me;
  try {
      return Me = e,
      t()
  } finally {
      Me = n
  }
}
;
Jc = function(e, t, n) {
  switch (t) {
  case "input":
      if (Vc(e, n),
      t = n.name,
      n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
              n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                  var o = iu(r);
                  if (!o)
                      throw Error(z(90));
                  uv(r),
                  Vc(r, o)
              }
          }
      }
      break;
  case "textarea":
      dv(e, n);
      break;
  case "select":
      t = n.value,
      t != null && ra(e, !!n.multiple, t, !1)
  }
}
;
yv = oh;
wv = So;
var O2 = {
  usingClientEntryPoint: !1,
  Events: [Ji, Go, iu, gv, vv, oh]
}
, Ga = {
  findFiberByHostInstance: so,
  bundleType: 0,
  version: "18.3.1",
  rendererPackageName: "react-dom"
}
, D2 = {
  bundleType: Ga.bundleType,
  version: Ga.version,
  rendererPackageName: Ga.rendererPackageName,
  rendererConfig: Ga.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ar.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(e) {
      return e = Sv(e),
      e === null ? null : e.stateNode
  },
  findFiberByHostInstance: Ga.findFiberByHostInstance || M2,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fs.isDisabled && Fs.supportsFiber)
      try {
          nu = Fs.inject(D2),
          _n = Fs
      } catch {}
}
Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O2;
Ut.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dh(t))
      throw Error(z(200));
  return P2(e, t, null, n)
}
;
Ut.createRoot = function(e, t) {
  if (!dh(e))
      throw Error(z(299));
  var n = !1
    , r = ""
    , o = e0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
  t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
  t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
  t = lh(e, 1, !1, null, null, n, !1, r, o),
  e[qn] = t.current,
  Di(e.nodeType === 8 ? e.parentNode : e),
  new ch(t)
}
;
Ut.findDOMNode = function(e) {
  if (e == null)
      return null;
  if (e.nodeType === 1)
      return e;
  var t = e._reactInternals;
  if (t === void 0)
      throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","),
      Error(z(268, e)));
  return e = Sv(t),
  e = e === null ? null : e.stateNode,
  e
}
;
Ut.flushSync = function(e) {
  return So(e)
}
;
Ut.hydrate = function(e, t, n) {
  if (!pu(t))
      throw Error(z(200));
  return gu(null, e, t, !0, n)
}
;
Ut.hydrateRoot = function(e, t, n) {
  if (!dh(e))
      throw Error(z(405));
  var r = n != null && n.hydratedSources || null
    , o = !1
    , a = ""
    , i = e0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0),
  n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
  n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
  t = Jy(t, null, e, 1, n ?? null, o, !1, a, i),
  e[qn] = t.current,
  Di(e),
  r)
      for (e = 0; e < r.length; e++)
          n = r[e],
          o = n._getVersion,
          o = o(n._source),
          t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new mu(t)
}
;
Ut.render = function(e, t, n) {
  if (!pu(t))
      throw Error(z(200));
  return gu(null, e, t, !1, n)
}
;
Ut.unmountComponentAtNode = function(e) {
  if (!pu(e))
      throw Error(z(40));
  return e._reactRootContainer ? (So(function() {
      gu(null, null, e, !1, function() {
          e._reactRootContainer = null,
          e[qn] = null
      })
  }),
  !0) : !1
}
;
Ut.unstable_batchedUpdates = oh;
Ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!pu(n))
      throw Error(z(200));
  if (e == null || e._reactInternals === void 0)
      throw Error(z(38));
  return gu(e, t, n, !1, r)
}
;
Ut.version = "18.3.1-next-f1338f8080-20240426";
function t0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t0)
      } catch (e) {
          console.error(e)
      }
}
t0(),
tv.exports = Ut;
var Ra = tv.exports;
const T2 = eu(Ra);
var n0, sp = Ra;
n0 = sp.createRoot,
sp.hydrateRoot;
/**
* @remix-run/router v1.19.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  Ye.apply(this, arguments)
}
var tt;
(function(e) {
  e.Pop = "POP",
  e.Push = "PUSH",
  e.Replace = "REPLACE"
}
)(tt || (tt = {}));
const lp = "popstate";
function R2(e) {
  e === void 0 && (e = {});
  function t(r, o) {
      let {pathname: a, search: i, hash: s} = r.location;
      return Wi("", {
          pathname: a,
          search: i,
          hash: s
      }, o.state && o.state.usr || null, o.state && o.state.key || "default")
  }
  function n(r, o) {
      return typeof o == "string" ? o : ts(o)
  }
  return A2(t, n, null, e)
}
function me(e, t) {
  if (e === !1 || e === null || typeof e > "u")
      throw new Error(t)
}
function Sa(e, t) {
  if (!e) {
      typeof console < "u" && console.warn(t);
      try {
          throw new Error(t)
      } catch {}
  }
}
function _2() {
  return Math.random().toString(36).substr(2, 8)
}
function up(e, t) {
  return {
      usr: e.state,
      key: e.key,
      idx: t
  }
}
function Wi(e, t, n, r) {
  return n === void 0 && (n = null),
  Ye({
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: ""
  }, typeof t == "string" ? Kr(t) : t, {
      state: n,
      key: t && t.key || r || _2()
  })
}
function ts(e) {
  let {pathname: t="/", search: n="", hash: r=""} = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
  r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
  t
}
function Kr(e) {
  let t = {};
  if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substr(n),
      e = e.substr(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substr(r),
      e = e.substr(0, r)),
      e && (t.pathname = e)
  }
  return t
}
function A2(e, t, n, r) {
  r === void 0 && (r = {});
  let {window: o=document.defaultView, v5Compat: a=!1} = r
    , i = o.history
    , s = tt.Pop
    , l = null
    , u = d();
  u == null && (u = 0,
  i.replaceState(Ye({}, i.state, {
      idx: u
  }), ""));
  function d() {
      return (i.state || {
          idx: null
      }).idx
  }
  function c() {
      s = tt.Pop;
      let x = d()
        , p = x == null ? null : x - u;
      u = x,
      l && l({
          action: s,
          location: v.location,
          delta: p
      })
  }
  function f(x, p) {
      s = tt.Push;
      let h = Wi(v.location, x, p);
      u = d() + 1;
      let m = up(h, u)
        , S = v.createHref(h);
      try {
          i.pushState(m, "", S)
      } catch (E) {
          if (E instanceof DOMException && E.name === "DataCloneError")
              throw E;
          o.location.assign(S)
      }
      a && l && l({
          action: s,
          location: v.location,
          delta: 1
      })
  }
  function g(x, p) {
      s = tt.Replace;
      let h = Wi(v.location, x, p);
      u = d();
      let m = up(h, u)
        , S = v.createHref(h);
      i.replaceState(m, "", S),
      a && l && l({
          action: s,
          location: v.location,
          delta: 0
      })
  }
  function w(x) {
      let p = o.location.origin !== "null" ? o.location.origin : o.location.href
        , h = typeof x == "string" ? x : ts(x);
      return h = h.replace(/ $/, "%20"),
      me(p, "No window.location.(origin|href) available to create URL for href: " + h),
      new URL(h,p)
  }
  let v = {
      get action() {
          return s
      },
      get location() {
          return e(o, i)
      },
      listen(x) {
          if (l)
              throw new Error("A history only accepts one active listener");
          return o.addEventListener(lp, c),
          l = x,
          () => {
              o.removeEventListener(lp, c),
              l = null
          }
      },
      createHref(x) {
          return t(o, x)
      },
      createURL: w,
      encodeLocation(x) {
          let p = w(x);
          return {
              pathname: p.pathname,
              search: p.search,
              hash: p.hash
          }
      },
      push: f,
      replace: g,
      go(x) {
          return i.go(x)
      }
  };
  return v
}
var De;
(function(e) {
  e.data = "data",
  e.deferred = "deferred",
  e.redirect = "redirect",
  e.error = "error"
}
)(De || (De = {}));
const j2 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function I2(e) {
  return e.index === !0
}
function $i(e, t, n, r) {
  return n === void 0 && (n = []),
  r === void 0 && (r = {}),
  e.map( (o, a) => {
      let i = [...n, String(a)]
        , s = typeof o.id == "string" ? o.id : i.join("-");
      if (me(o.index !== !0 || !o.children, "Cannot specify children on an index route"),
      me(!r[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`),
      I2(o)) {
          let l = Ye({}, o, t(o), {
              id: s
          });
          return r[s] = l,
          l
      } else {
          let l = Ye({}, o, t(o), {
              id: s,
              children: void 0
          });
          return r[s] = l,
          o.children && (l.children = $i(o.children, t, i, r)),
          l
      }
  }
  )
}
function ao(e, t, n) {
  return n === void 0 && (n = "/"),
  il(e, t, n, !1)
}
function il(e, t, n, r) {
  let o = typeof t == "string" ? Kr(t) : t
    , a = ns(o.pathname || "/", n);
  if (a == null)
      return null;
  let i = r0(e);
  F2(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
      let u = Q2(a);
      s = G2(i[l], u, r)
  }
  return s
}
function L2(e, t) {
  let {route: n, pathname: r, params: o} = e;
  return {
      id: n.id,
      pathname: r,
      params: o,
      data: t[n.id],
      handle: n.handle
  }
}
function r0(e, t, n, r) {
  t === void 0 && (t = []),
  n === void 0 && (n = []),
  r === void 0 && (r = "");
  let o = (a, i, s) => {
      let l = {
          relativePath: s === void 0 ? a.path || "" : s,
          caseSensitive: a.caseSensitive === !0,
          childrenIndex: i,
          route: a
      };
      l.relativePath.startsWith("/") && (me(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
      l.relativePath = l.relativePath.slice(r.length));
      let u = mo([r, l.relativePath])
        , d = n.concat(l);
      a.children && a.children.length > 0 && (me(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
      r0(a.children, t, d, u)),
      !(a.path == null && !a.index) && t.push({
          path: u,
          score: Y2(u, a.index),
          routesMeta: d
      })
  }
  ;
  return e.forEach( (a, i) => {
      var s;
      if (a.path === "" || !((s = a.path) != null && s.includes("?")))
          o(a, i);
      else
          for (let l of o0(a.path))
              o(a, i, l)
  }
  ),
  t
}
function o0(e) {
  let t = e.split("/");
  if (t.length === 0)
      return [];
  let[n,...r] = t
    , o = n.endsWith("?")
    , a = n.replace(/\?$/, "");
  if (r.length === 0)
      return o ? [a, ""] : [a];
  let i = o0(r.join("/"))
    , s = [];
  return s.push(...i.map(l => l === "" ? a : [a, l].join("/"))),
  o && s.push(...i),
  s.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function F2(e) {
  e.sort( (t, n) => t.score !== n.score ? n.score - t.score : V2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const W2 = /^:[\w-]+$/
, $2 = 3
, z2 = 2
, B2 = 1
, H2 = 10
, U2 = -2
, cp = e => e === "*";
function Y2(e, t) {
  let n = e.split("/")
    , r = n.length;
  return n.some(cp) && (r += U2),
  t && (r += z2),
  n.filter(o => !cp(o)).reduce( (o, a) => o + (W2.test(a) ? $2 : a === "" ? B2 : H2), r)
}
function V2(e, t) {
  return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function G2(e, t, n) {
  n === void 0 && (n = !1);
  let {routesMeta: r} = e
    , o = {}
    , a = "/"
    , i = [];
  for (let s = 0; s < r.length; ++s) {
      let l = r[s]
        , u = s === r.length - 1
        , d = a === "/" ? t : t.slice(a.length) || "/"
        , c = dp({
          path: l.relativePath,
          caseSensitive: l.caseSensitive,
          end: u
      }, d)
        , f = l.route;
      if (!c && u && n && !r[r.length - 1].route.index && (c = dp({
          path: l.relativePath,
          caseSensitive: l.caseSensitive,
          end: !1
      }, d)),
      !c)
          return null;
      Object.assign(o, c.params),
      i.push({
          params: o,
          pathname: mo([a, c.pathname]),
          pathnameBase: ek(mo([a, c.pathnameBase])),
          route: f
      }),
      c.pathnameBase !== "/" && (a = mo([a, c.pathnameBase]))
  }
  return i
}
function dp(e, t) {
  typeof e == "string" && (e = {
      path: e,
      caseSensitive: !1,
      end: !0
  });
  let[n,r] = X2(e.path, e.caseSensitive, e.end)
    , o = t.match(n);
  if (!o)
      return null;
  let a = o[0]
    , i = a.replace(/(.)\/+$/, "$1")
    , s = o.slice(1);
  return {
      params: r.reduce( (u, d, c) => {
          let {paramName: f, isOptional: g} = d;
          if (f === "*") {
              let v = s[c] || "";
              i = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1")
          }
          const w = s[c];
          return g && !w ? u[f] = void 0 : u[f] = (w || "").replace(/%2F/g, "/"),
          u
      }
      , {}),
      pathname: a,
      pathnameBase: i,
      pattern: e
  }
}
function X2(e, t, n) {
  t === void 0 && (t = !1),
  n === void 0 && (n = !0),
  Sa(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = []
    , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, s, l) => (r.push({
      paramName: s,
      isOptional: l != null
  }),
  l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
      paramName: "*"
  }),
  o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
  [new RegExp(o,t ? void 0 : "i"), r]
}
function Q2(e) {
  try {
      return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
  } catch (t) {
      return Sa(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
      e
  }
}
function ns(e, t) {
  if (t === "/")
      return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
      return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length
    , r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/"
}
function K2(e, t) {
  t === void 0 && (t = "/");
  let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Kr(e) : e;
  return {
      pathname: n ? n.startsWith("/") ? n : q2(n, t) : t,
      search: tk(r),
      hash: nk(o)
  }
}
function q2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach(o => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
  }
  ),
  n.length > 1 ? n.join("/") : "/"
}
function yc(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function a0(e) {
  return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Z2(e, t) {
  let n = a0(e);
  return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function J2(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string" ? o = Kr(e) : (o = Ye({}, e),
  me(!o.pathname || !o.pathname.includes("?"), yc("?", "pathname", "search", o)),
  me(!o.pathname || !o.pathname.includes("#"), yc("#", "pathname", "hash", o)),
  me(!o.search || !o.search.includes("#"), yc("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "", i = a ? "/" : o.pathname, s;
  if (i == null)
      s = n;
  else {
      let c = t.length - 1;
      if (!r && i.startsWith("..")) {
          let f = i.split("/");
          for (; f[0] === ".."; )
              f.shift(),
              c -= 1;
          o.pathname = f.join("/")
      }
      s = c >= 0 ? t[c] : "/"
  }
  let l = K2(o, s)
    , u = i && i !== "/" && i.endsWith("/")
    , d = (a || i === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
  l
}
const mo = e => e.join("/").replace(/\/\/+/g, "/")
, ek = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
, tk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
, nk = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Fl {
  constructor(t, n, r, o) {
      o === void 0 && (o = !1),
      this.status = t,
      this.statusText = n || "",
      this.internal = o,
      r instanceof Error ? (this.data = r.toString(),
      this.error = r) : this.data = r
  }
}
function vu(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const i0 = ["post", "put", "patch", "delete"]
, rk = new Set(i0)
, ok = ["get", ...i0]
, ak = new Set(ok)
, ik = new Set([301, 302, 303, 307, 308])
, sk = new Set([307, 308])
, wc = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}
, lk = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}
, Xa = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}
, fh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
, uk = e => ({
  hasErrorBoundary: !!e.hasErrorBoundary
})
, s0 = "remix-router-transitions";
function ck(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0
    , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
    , r = !n;
  me(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let o;
  if (e.mapRouteProperties)
      o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
      let C = e.detectErrorBoundary;
      o = M => ({
          hasErrorBoundary: C(M)
      })
  } else
      o = uk;
  let a = {}, i = $i(e.routes, o, void 0, a), s, l = e.basename || "/", u = e.unstable_dataStrategy || gk, d = e.unstable_patchRoutesOnNavigation, c = Ye({
      v7_fetcherPersist: !1,
      v7_normalizeFormMethod: !1,
      v7_partialHydration: !1,
      v7_prependBasename: !1,
      v7_relativeSplatPath: !1,
      v7_skipActionErrorRevalidation: !1
  }, e.future), f = null, g = new Set, w = 1e3, v = new Set, x = null, p = null, h = null, m = e.hydrationData != null, S = ao(i, e.history.location, l), E = null;
  if (S == null && !d) {
      let C = xt(404, {
          pathname: e.history.location.pathname
      })
        , {matches: M, route: D} = xp(i);
      S = M,
      E = {
          [D.id]: C
      }
  }
  S && !e.hydrationData && ur(S, i, e.history.location.pathname).active && (S = null);
  let N;
  if (S)
      if (S.some(C => C.route.lazy))
          N = !1;
      else if (!S.some(C => C.route.loader))
          N = !0;
      else if (c.v7_partialHydration) {
          let C = e.hydrationData ? e.hydrationData.loaderData : null
            , M = e.hydrationData ? e.hydrationData.errors : null
            , D = j => j.route.loader ? typeof j.route.loader == "function" && j.route.loader.hydrate === !0 ? !1 : C && C[j.route.id] !== void 0 || M && M[j.route.id] !== void 0 : !0;
          if (M) {
              let j = S.findIndex(G => M[G.route.id] !== void 0);
              N = S.slice(0, j + 1).every(D)
          } else
              N = S.every(D)
      } else
          N = e.hydrationData != null;
  else if (N = !1,
  S = [],
  c.v7_partialHydration) {
      let C = ur(null, i, e.history.location.pathname);
      C.active && C.matches && (S = C.matches)
  }
  let O, k = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: N,
      navigation: wc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: e.hydrationData && e.hydrationData.loaderData || {},
      actionData: e.hydrationData && e.hydrationData.actionData || null,
      errors: e.hydrationData && e.hydrationData.errors || E,
      fetchers: new Map,
      blockers: new Map
  }, L = tt.Pop, _ = !1, F, H = !1, J = new Map, W = null, I = !1, R = !1, $ = [], P = new Set, T = new Map, A = 0, B = -1, K = new Map, oe = new Set, ie = new Map, ge = new Map, fe = new Set, V = new Map, se = new Map, be = new Map, re;
  function le() {
      if (f = e.history.listen(C => {
          let {action: M, location: D, delta: j} = C;
          if (re) {
              re(),
              re = void 0;
              return
          }
          Sa(se.size === 0 || j != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
          let G = pt({
              currentLocation: k.location,
              nextLocation: D,
              historyAction: M
          });
          if (G && j != null) {
              let ee = new Promise(ae => {
                  re = ae
              }
              );
              e.history.go(j * -1),
              lr(G, {
                  state: "blocked",
                  location: D,
                  proceed() {
                      lr(G, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: D
                      }),
                      ee.then( () => e.history.go(j))
                  },
                  reset() {
                      let ae = new Map(k.blockers);
                      ae.set(G, Xa),
                      Oe({
                          blockers: ae
                      })
                  }
              });
              return
          }
          return en(M, D)
      }
      ),
      n) {
          Tk(t, J);
          let C = () => Rk(t, J);
          t.addEventListener("pagehide", C),
          W = () => t.removeEventListener("pagehide", C)
      }
      return k.initialized || en(tt.Pop, k.location, {
          initialHydration: !0
      }),
      O
  }
  function ue() {
      f && f(),
      W && W(),
      g.clear(),
      F && F.abort(),
      k.fetchers.forEach( (C, M) => To(M)),
      k.blockers.forEach( (C, M) => _o(M))
  }
  function Qe(C) {
      return g.add(C),
      () => g.delete(C)
  }
  function Oe(C, M) {
      M === void 0 && (M = {}),
      k = Ye({}, k, C);
      let D = []
        , j = [];
      c.v7_fetcherPersist && k.fetchers.forEach( (G, ee) => {
          G.state === "idle" && (fe.has(ee) ? j.push(ee) : D.push(ee))
      }
      ),
      [...g].forEach(G => G(k, {
          deletedFetchers: j,
          unstable_viewTransitionOpts: M.viewTransitionOpts,
          unstable_flushSync: M.flushSync === !0
      })),
      c.v7_fetcherPersist && (D.forEach(G => k.fetchers.delete(G)),
      j.forEach(G => To(G)))
  }
  function Pt(C, M, D) {
      var j, G;
      let {flushSync: ee} = D === void 0 ? {} : D, ae = k.actionData != null && k.navigation.formMethod != null && sn(k.navigation.formMethod) && k.navigation.state === "loading" && ((j = C.state) == null ? void 0 : j._isRedirect) !== !0, U;
      M.actionData ? Object.keys(M.actionData).length > 0 ? U = M.actionData : U = null : ae ? U = k.actionData : U = null;
      let te = M.loaderData ? yp(k.loaderData, M.loaderData, M.matches || [], M.errors) : k.loaderData
        , q = k.blockers;
      q.size > 0 && (q = new Map(q),
      q.forEach( (Ce, Ie) => q.set(Ie, Xa)));
      let Z = _ === !0 || k.navigation.formMethod != null && sn(k.navigation.formMethod) && ((G = C.state) == null ? void 0 : G._isRedirect) !== !0;
      s && (i = s,
      s = void 0),
      I || L === tt.Pop || (L === tt.Push ? e.history.push(C, C.state) : L === tt.Replace && e.history.replace(C, C.state));
      let xe;
      if (L === tt.Pop) {
          let Ce = J.get(k.location.pathname);
          Ce && Ce.has(C.pathname) ? xe = {
              currentLocation: k.location,
              nextLocation: C
          } : J.has(C.pathname) && (xe = {
              currentLocation: C,
              nextLocation: k.location
          })
      } else if (H) {
          let Ce = J.get(k.location.pathname);
          Ce ? Ce.add(C.pathname) : (Ce = new Set([C.pathname]),
          J.set(k.location.pathname, Ce)),
          xe = {
              currentLocation: k.location,
              nextLocation: C
          }
      }
      Oe(Ye({}, M, {
          actionData: U,
          loaderData: te,
          historyAction: L,
          location: C,
          initialized: !0,
          navigation: wc,
          revalidation: "idle",
          restoreScrollPosition: vs(C, M.matches || k.matches),
          preventScrollReset: Z,
          blockers: q
      }), {
          viewTransitionOpts: xe,
          flushSync: ee === !0
      }),
      L = tt.Pop,
      _ = !1,
      H = !1,
      I = !1,
      R = !1,
      $ = []
  }
  async function yn(C, M) {
      if (typeof C == "number") {
          e.history.go(C);
          return
      }
      let D = Rd(k.location, k.matches, l, c.v7_prependBasename, C, c.v7_relativeSplatPath, M == null ? void 0 : M.fromRouteId, M == null ? void 0 : M.relative)
        , {path: j, submission: G, error: ee} = fp(c.v7_normalizeFormMethod, !1, D, M)
        , ae = k.location
        , U = Wi(k.location, j, M && M.state);
      U = Ye({}, U, e.history.encodeLocation(U));
      let te = M && M.replace != null ? M.replace : void 0
        , q = tt.Push;
      te === !0 ? q = tt.Replace : te === !1 || G != null && sn(G.formMethod) && G.formAction === k.location.pathname + k.location.search && (q = tt.Replace);
      let Z = M && "preventScrollReset"in M ? M.preventScrollReset === !0 : void 0
        , xe = (M && M.unstable_flushSync) === !0
        , Ce = pt({
          currentLocation: ae,
          nextLocation: U,
          historyAction: q
      });
      if (Ce) {
          lr(Ce, {
              state: "blocked",
              location: U,
              proceed() {
                  lr(Ce, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: U
                  }),
                  yn(C, M)
              },
              reset() {
                  let Ie = new Map(k.blockers);
                  Ie.set(Ce, Xa),
                  Oe({
                      blockers: Ie
                  })
              }
          });
          return
      }
      return await en(q, U, {
          submission: G,
          pendingError: ee,
          preventScrollReset: Z,
          replace: M && M.replace,
          enableViewTransition: M && M.unstable_viewTransition,
          flushSync: xe
      })
  }
  function Fn() {
      if (Fa(),
      Oe({
          revalidation: "loading"
      }),
      k.navigation.state !== "submitting") {
          if (k.navigation.state === "idle") {
              en(k.historyAction, k.location, {
                  startUninterruptedRevalidation: !0
              });
              return
          }
          en(L || k.historyAction, k.navigation.location, {
              overrideNavigation: k.navigation,
              enableViewTransition: H === !0
          })
      }
  }
  async function en(C, M, D) {
      F && F.abort(),
      F = null,
      L = C,
      I = (D && D.startUninterruptedRevalidation) === !0,
      Yu(k.location, k.matches),
      _ = (D && D.preventScrollReset) === !0,
      H = (D && D.enableViewTransition) === !0;
      let j = s || i
        , G = D && D.overrideNavigation
        , ee = ao(j, M, l)
        , ae = (D && D.flushSync) === !0
        , U = ur(ee, j, M.pathname);
      if (U.active && U.matches && (ee = U.matches),
      !ee) {
          let {error: ve, notFoundMatches: st, route: et} = bn(M.pathname);
          Pt(M, {
              matches: st,
              loaderData: {},
              errors: {
                  [et.id]: ve
              }
          }, {
              flushSync: ae
          });
          return
      }
      if (k.initialized && !R && Sk(k.location, M) && !(D && D.submission && sn(D.submission.formMethod))) {
          Pt(M, {
              matches: ee
          }, {
              flushSync: ae
          });
          return
      }
      F = new AbortController;
      let te = Io(e.history, M, F.signal, D && D.submission), q;
      if (D && D.pendingError)
          q = [ea(ee).route.id, {
              type: De.error,
              error: D.pendingError
          }];
      else if (D && D.submission && sn(D.submission.formMethod)) {
          let ve = await sr(te, M, D.submission, ee, U.active, {
              replace: D.replace,
              flushSync: ae
          });
          if (ve.shortCircuited)
              return;
          if (ve.pendingActionResult) {
              let[st,et] = ve.pendingActionResult;
              if (It(et) && vu(et.error) && et.error.status === 404) {
                  F = null,
                  Pt(M, {
                      matches: ve.matches,
                      loaderData: {},
                      errors: {
                          [st]: et.error
                      }
                  });
                  return
              }
          }
          ee = ve.matches || ee,
          q = ve.pendingActionResult,
          G = xc(M, D.submission),
          ae = !1,
          U.active = !1,
          te = Io(e.history, te.url, te.signal)
      }
      let {shortCircuited: Z, matches: xe, loaderData: Ce, errors: Ie} = await $u(te, M, ee, U.active, G, D && D.submission, D && D.fetcherSubmission, D && D.replace, D && D.initialHydration === !0, ae, q);
      Z || (F = null,
      Pt(M, Ye({
          matches: xe || ee
      }, wp(q), {
          loaderData: Ce,
          errors: Ie
      })))
  }
  async function sr(C, M, D, j, G, ee) {
      ee === void 0 && (ee = {}),
      Fa();
      let ae = Ok(M, D);
      if (Oe({
          navigation: ae
      }, {
          flushSync: ee.flushSync === !0
      }),
      G) {
          let q = await cr(j, M.pathname, C.signal);
          if (q.type === "aborted")
              return {
                  shortCircuited: !0
              };
          if (q.type === "error") {
              let {boundaryId: Z, error: xe} = Ue(M.pathname, q);
              return {
                  matches: q.partialMatches,
                  pendingActionResult: [Z, {
                      type: De.error,
                      error: xe
                  }]
              }
          } else if (q.matches)
              j = q.matches;
          else {
              let {notFoundMatches: Z, error: xe, route: Ce} = bn(M.pathname);
              return {
                  matches: Z,
                  pendingActionResult: [Ce.id, {
                      type: De.error,
                      error: xe
                  }]
              }
          }
      }
      let U, te = oi(j, M);
      if (!te.route.action && !te.route.lazy)
          U = {
              type: De.error,
              error: xt(405, {
                  method: C.method,
                  pathname: M.pathname,
                  routeId: te.route.id
              })
          };
      else if (U = (await eo("action", k, C, [te], j, null))[te.route.id],
      C.signal.aborted)
          return {
              shortCircuited: !0
          };
      if (co(U)) {
          let q;
          return ee && ee.replace != null ? q = ee.replace : q = pp(U.response.headers.get("Location"), new URL(C.url), l) === k.location.pathname + k.location.search,
          await Wn(C, U, !0, {
              submission: D,
              replace: q
          }),
          {
              shortCircuited: !0
          }
      }
      if (Pr(U))
          throw xt(400, {
              type: "defer-action"
          });
      if (It(U)) {
          let q = ea(j, te.route.id);
          return (ee && ee.replace) !== !0 && (L = tt.Push),
          {
              matches: j,
              pendingActionResult: [q.route.id, U]
          }
      }
      return {
          matches: j,
          pendingActionResult: [te.route.id, U]
      }
  }
  async function $u(C, M, D, j, G, ee, ae, U, te, q, Z) {
      let xe = G || xc(M, ee)
        , Ce = ee || ae || Sp(xe)
        , Ie = !I && (!c.v7_partialHydration || !te);
      if (j) {
          if (Ie) {
              let Ke = fs(Z);
              Oe(Ye({
                  navigation: xe
              }, Ke !== void 0 ? {
                  actionData: Ke
              } : {}), {
                  flushSync: q
              })
          }
          let de = await cr(D, M.pathname, C.signal);
          if (de.type === "aborted")
              return {
                  shortCircuited: !0
              };
          if (de.type === "error") {
              let {boundaryId: Ke, error: At} = Ue(M.pathname, de);
              return {
                  matches: de.partialMatches,
                  loaderData: {},
                  errors: {
                      [Ke]: At
                  }
              }
          } else if (de.matches)
              D = de.matches;
          else {
              let {error: Ke, notFoundMatches: At, route: qe} = bn(M.pathname);
              return {
                  matches: At,
                  loaderData: {},
                  errors: {
                      [qe.id]: Ke
                  }
              }
          }
      }
      let ve = s || i
        , [st,et] = hp(e.history, k, D, Ce, M, c.v7_partialHydration && te === !0, c.v7_skipActionErrorRevalidation, R, $, P, fe, ie, oe, ve, l, Z);
      if (Mt(de => !(D && D.some(Ke => Ke.route.id === de)) || st && st.some(Ke => Ke.route.id === de)),
      B = ++A,
      st.length === 0 && et.length === 0) {
          let de = rt();
          return Pt(M, Ye({
              matches: D,
              loaderData: {},
              errors: Z && It(Z[1]) ? {
                  [Z[0]]: Z[1].error
              } : null
          }, wp(Z), de ? {
              fetchers: new Map(k.fetchers)
          } : {}), {
              flushSync: q
          }),
          {
              shortCircuited: !0
          }
      }
      if (Ie) {
          let de = {};
          if (!j) {
              de.navigation = xe;
              let Ke = fs(Z);
              Ke !== void 0 && (de.actionData = Ke)
          }
          et.length > 0 && (de.fetchers = zu(et)),
          Oe(de, {
              flushSync: q
          })
      }
      et.forEach(de => {
          T.has(de.key) && xn(de.key),
          de.controller && T.set(de.key, de.controller)
      }
      );
      let Wa = () => et.forEach(de => xn(de.key));
      F && F.signal.addEventListener("abort", Wa);
      let {loaderResults: $n, fetcherResults: Ao} = await ms(k, D, st, et, C);
      if (C.signal.aborted)
          return {
              shortCircuited: !0
          };
      F && F.signal.removeEventListener("abort", Wa),
      et.forEach(de => T.delete(de.key));
      let dr = Ws($n);
      if (dr)
          return await Wn(C, dr.result, !0, {
              replace: U
          }),
          {
              shortCircuited: !0
          };
      if (dr = Ws(Ao),
      dr)
          return oe.add(dr.key),
          await Wn(C, dr.result, !0, {
              replace: U
          }),
          {
              shortCircuited: !0
          };
      let {loaderData: ys, errors: zn} = vp(k, D, st, $n, Z, et, Ao, V);
      V.forEach( (de, Ke) => {
          de.subscribe(At => {
              (At || de.done) && V.delete(Ke)
          }
          )
      }
      ),
      c.v7_partialHydration && te && k.errors && Object.entries(k.errors).filter(de => {
          let[Ke] = de;
          return !st.some(At => At.route.id === Ke)
      }
      ).forEach(de => {
          let[Ke,At] = de;
          zn = Object.assign(zn || {}, {
              [Ke]: At
          })
      }
      );
      let ws = rt()
        , xs = je(B)
        , bs = ws || xs || et.length > 0;
      return Ye({
          matches: D,
          loaderData: ys,
          errors: zn
      }, bs ? {
          fetchers: new Map(k.fetchers)
      } : {})
  }
  function fs(C) {
      if (C && !It(C[1]))
          return {
              [C[0]]: C[1].data
          };
      if (k.actionData)
          return Object.keys(k.actionData).length === 0 ? null : k.actionData
  }
  function zu(C) {
      return C.forEach(M => {
          let D = k.fetchers.get(M.key)
            , j = Qa(void 0, D ? D.data : void 0);
          k.fetchers.set(M.key, j)
      }
      ),
      new Map(k.fetchers)
  }
  function hs(C, M, D, j) {
      if (r)
          throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
      T.has(C) && xn(C);
      let G = (j && j.unstable_flushSync) === !0
        , ee = s || i
        , ae = Rd(k.location, k.matches, l, c.v7_prependBasename, D, c.v7_relativeSplatPath, M, j == null ? void 0 : j.relative)
        , U = ao(ee, ae, l)
        , te = ur(U, ee, ae);
      if (te.active && te.matches && (U = te.matches),
      !U) {
          tn(C, M, xt(404, {
              pathname: ae
          }), {
              flushSync: G
          });
          return
      }
      let {path: q, submission: Z, error: xe} = fp(c.v7_normalizeFormMethod, !0, ae, j);
      if (xe) {
          tn(C, M, xe, {
              flushSync: G
          });
          return
      }
      let Ce = oi(U, q);
      if (_ = (j && j.preventScrollReset) === !0,
      Z && sn(Z.formMethod)) {
          Bu(C, M, q, Ce, U, te.active, G, Z);
          return
      }
      ie.set(C, {
          routeId: M,
          path: q
      }),
      Hu(C, M, q, Ce, U, te.active, G, Z)
  }
  async function Bu(C, M, D, j, G, ee, ae, U) {
      Fa(),
      ie.delete(C);
      function te(qe) {
          if (!qe.route.action && !qe.route.lazy) {
              let Bn = xt(405, {
                  method: U.formMethod,
                  pathname: D,
                  routeId: M
              });
              return tn(C, M, Bn, {
                  flushSync: ae
              }),
              !0
          }
          return !1
      }
      if (!ee && te(j))
          return;
      let q = k.fetchers.get(C);
      wn(C, Dk(U, q), {
          flushSync: ae
      });
      let Z = new AbortController
        , xe = Io(e.history, D, Z.signal, U);
      if (ee) {
          let qe = await cr(G, D, xe.signal);
          if (qe.type === "aborted")
              return;
          if (qe.type === "error") {
              let {error: Bn} = Ue(D, qe);
              tn(C, M, Bn, {
                  flushSync: ae
              });
              return
          } else if (qe.matches) {
              if (G = qe.matches,
              j = oi(G, D),
              te(j))
                  return
          } else {
              tn(C, M, xt(404, {
                  pathname: D
              }), {
                  flushSync: ae
              });
              return
          }
      }
      T.set(C, Z);
      let Ce = A
        , ve = (await eo("action", k, xe, [j], G, C))[j.route.id];
      if (xe.signal.aborted) {
          T.get(C) === Z && T.delete(C);
          return
      }
      if (c.v7_fetcherPersist && fe.has(C)) {
          if (co(ve) || It(ve)) {
              wn(C, yr(void 0));
              return
          }
      } else {
          if (co(ve))
              if (T.delete(C),
              B > Ce) {
                  wn(C, yr(void 0));
                  return
              } else
                  return oe.add(C),
                  wn(C, Qa(U)),
                  Wn(xe, ve, !1, {
                      fetcherSubmission: U
                  });
          if (It(ve)) {
              tn(C, M, ve.error);
              return
          }
      }
      if (Pr(ve))
          throw xt(400, {
              type: "defer-action"
          });
      let st = k.navigation.location || k.location
        , et = Io(e.history, st, Z.signal)
        , Wa = s || i
        , $n = k.navigation.state !== "idle" ? ao(Wa, k.navigation.location, l) : k.matches;
      me($n, "Didn't find any matches after fetcher action");
      let Ao = ++A;
      K.set(C, Ao);
      let dr = Qa(U, ve.data);
      k.fetchers.set(C, dr);
      let[ys,zn] = hp(e.history, k, $n, U, st, !1, c.v7_skipActionErrorRevalidation, R, $, P, fe, ie, oe, Wa, l, [j.route.id, ve]);
      zn.filter(qe => qe.key !== C).forEach(qe => {
          let Bn = qe.key
            , Zh = k.fetchers.get(Bn)
            , rb = Qa(void 0, Zh ? Zh.data : void 0);
          k.fetchers.set(Bn, rb),
          T.has(Bn) && xn(Bn),
          qe.controller && T.set(Bn, qe.controller)
      }
      ),
      Oe({
          fetchers: new Map(k.fetchers)
      });
      let ws = () => zn.forEach(qe => xn(qe.key));
      Z.signal.addEventListener("abort", ws);
      let {loaderResults: xs, fetcherResults: bs} = await ms(k, $n, ys, zn, et);
      if (Z.signal.aborted)
          return;
      Z.signal.removeEventListener("abort", ws),
      K.delete(C),
      T.delete(C),
      zn.forEach(qe => T.delete(qe.key));
      let de = Ws(xs);
      if (de)
          return Wn(et, de.result, !1);
      if (de = Ws(bs),
      de)
          return oe.add(de.key),
          Wn(et, de.result, !1);
      let {loaderData: Ke, errors: At} = vp(k, $n, ys, xs, void 0, zn, bs, V);
      if (k.fetchers.has(C)) {
          let qe = yr(ve.data);
          k.fetchers.set(C, qe)
      }
      je(Ao),
      k.navigation.state === "loading" && Ao > B ? (me(L, "Expected pending action"),
      F && F.abort(),
      Pt(k.navigation.location, {
          matches: $n,
          loaderData: Ke,
          errors: At,
          fetchers: new Map(k.fetchers)
      })) : (Oe({
          errors: At,
          loaderData: yp(k.loaderData, Ke, $n, At),
          fetchers: new Map(k.fetchers)
      }),
      R = !1)
  }
  async function Hu(C, M, D, j, G, ee, ae, U) {
      let te = k.fetchers.get(C);
      wn(C, Qa(U, te ? te.data : void 0), {
          flushSync: ae
      });
      let q = new AbortController
        , Z = Io(e.history, D, q.signal);
      if (ee) {
          let ve = await cr(G, D, Z.signal);
          if (ve.type === "aborted")
              return;
          if (ve.type === "error") {
              let {error: st} = Ue(D, ve);
              tn(C, M, st, {
                  flushSync: ae
              });
              return
          } else if (ve.matches)
              G = ve.matches,
              j = oi(G, D);
          else {
              tn(C, M, xt(404, {
                  pathname: D
              }), {
                  flushSync: ae
              });
              return
          }
      }
      T.set(C, q);
      let xe = A
        , Ie = (await eo("loader", k, Z, [j], G, C))[j.route.id];
      if (Pr(Ie) && (Ie = await hh(Ie, Z.signal, !0) || Ie),
      T.get(C) === q && T.delete(C),
      !Z.signal.aborted) {
          if (fe.has(C)) {
              wn(C, yr(void 0));
              return
          }
          if (co(Ie))
              if (B > xe) {
                  wn(C, yr(void 0));
                  return
              } else {
                  oe.add(C),
                  await Wn(Z, Ie, !1);
                  return
              }
          if (It(Ie)) {
              tn(C, M, Ie.error);
              return
          }
          me(!Pr(Ie), "Unhandled fetcher deferred data"),
          wn(C, yr(Ie.data))
      }
  }
  async function Wn(C, M, D, j) {
      let {submission: G, fetcherSubmission: ee, replace: ae} = j === void 0 ? {} : j;
      M.response.headers.has("X-Remix-Revalidate") && (R = !0);
      let U = M.response.headers.get("Location");
      me(U, "Expected a Location header on the redirect Response"),
      U = pp(U, new URL(C.url), l);
      let te = Wi(k.location, U, {
          _isRedirect: !0
      });
      if (n) {
          let ve = !1;
          if (M.response.headers.has("X-Remix-Reload-Document"))
              ve = !0;
          else if (fh.test(U)) {
              const st = e.history.createURL(U);
              ve = st.origin !== t.location.origin || ns(st.pathname, l) == null
          }
          if (ve) {
              ae ? t.location.replace(U) : t.location.assign(U);
              return
          }
      }
      F = null;
      let q = ae === !0 || M.response.headers.has("X-Remix-Replace") ? tt.Replace : tt.Push
        , {formMethod: Z, formAction: xe, formEncType: Ce} = k.navigation;
      !G && !ee && Z && xe && Ce && (G = Sp(k.navigation));
      let Ie = G || ee;
      if (sk.has(M.response.status) && Ie && sn(Ie.formMethod))
          await en(q, te, {
              submission: Ye({}, Ie, {
                  formAction: U
              }),
              preventScrollReset: _,
              enableViewTransition: D ? H : void 0
          });
      else {
          let ve = xc(te, G);
          await en(q, te, {
              overrideNavigation: ve,
              fetcherSubmission: ee,
              preventScrollReset: _,
              enableViewTransition: D ? H : void 0
          })
      }
  }
  async function eo(C, M, D, j, G, ee) {
      let ae, U = {};
      try {
          ae = await vk(u, C, M, D, j, G, ee, a, o)
      } catch (te) {
          return j.forEach(q => {
              U[q.route.id] = {
                  type: De.error,
                  error: te
              }
          }
          ),
          U
      }
      for (let[te,q] of Object.entries(ae))
          if (Ck(q)) {
              let Z = q.result;
              U[te] = {
                  type: De.redirect,
                  response: xk(Z, D, te, G, l, c.v7_relativeSplatPath)
              }
          } else
              U[te] = await wk(q);
      return U
  }
  async function ms(C, M, D, j, G) {
      let ee = C.matches
        , ae = eo("loader", C, G, D, M, null)
        , U = Promise.all(j.map(async Z => {
          if (Z.matches && Z.match && Z.controller) {
              let Ce = (await eo("loader", C, Io(e.history, Z.path, Z.controller.signal), [Z.match], Z.matches, Z.key))[Z.match.route.id];
              return {
                  [Z.key]: Ce
              }
          } else
              return Promise.resolve({
                  [Z.key]: {
                      type: De.error,
                      error: xt(404, {
                          pathname: Z.path
                      })
                  }
              })
      }
      ))
        , te = await ae
        , q = (await U).reduce( (Z, xe) => Object.assign(Z, xe), {});
      return await Promise.all([Mk(M, te, G.signal, ee, C.loaderData), Nk(M, q, j)]),
      {
          loaderResults: te,
          fetcherResults: q
      }
  }
  function Fa() {
      R = !0,
      $.push(...Mt()),
      ie.forEach( (C, M) => {
          T.has(M) && (P.add(M),
          xn(M))
      }
      )
  }
  function wn(C, M, D) {
      D === void 0 && (D = {}),
      k.fetchers.set(C, M),
      Oe({
          fetchers: new Map(k.fetchers)
      }, {
          flushSync: (D && D.flushSync) === !0
      })
  }
  function tn(C, M, D, j) {
      j === void 0 && (j = {});
      let G = ea(k.matches, M);
      To(C),
      Oe({
          errors: {
              [G.route.id]: D
          },
          fetchers: new Map(k.fetchers)
      }, {
          flushSync: (j && j.flushSync) === !0
      })
  }
  function ps(C) {
      return c.v7_fetcherPersist && (ge.set(C, (ge.get(C) || 0) + 1),
      fe.has(C) && fe.delete(C)),
      k.fetchers.get(C) || lk
  }
  function To(C) {
      let M = k.fetchers.get(C);
      T.has(C) && !(M && M.state === "loading" && K.has(C)) && xn(C),
      ie.delete(C),
      K.delete(C),
      oe.delete(C),
      fe.delete(C),
      P.delete(C),
      k.fetchers.delete(C)
  }
  function Uu(C) {
      if (c.v7_fetcherPersist) {
          let M = (ge.get(C) || 0) - 1;
          M <= 0 ? (ge.delete(C),
          fe.add(C)) : ge.set(C, M)
      } else
          To(C);
      Oe({
          fetchers: new Map(k.fetchers)
      })
  }
  function xn(C) {
      let M = T.get(C);
      me(M, "Expected fetch controller: " + C),
      M.abort(),
      T.delete(C)
  }
  function Se(C) {
      for (let M of C) {
          let D = ps(M)
            , j = yr(D.data);
          k.fetchers.set(M, j)
      }
  }
  function rt() {
      let C = []
        , M = !1;
      for (let D of oe) {
          let j = k.fetchers.get(D);
          me(j, "Expected fetcher: " + D),
          j.state === "loading" && (oe.delete(D),
          C.push(D),
          M = !0)
      }
      return Se(C),
      M
  }
  function je(C) {
      let M = [];
      for (let[D,j] of K)
          if (j < C) {
              let G = k.fetchers.get(D);
              me(G, "Expected fetcher: " + D),
              G.state === "loading" && (xn(D),
              K.delete(D),
              M.push(D))
          }
      return Se(M),
      M.length > 0
  }
  function Ro(C, M) {
      let D = k.blockers.get(C) || Xa;
      return se.get(C) !== M && se.set(C, M),
      D
  }
  function _o(C) {
      k.blockers.delete(C),
      se.delete(C)
  }
  function lr(C, M) {
      let D = k.blockers.get(C) || Xa;
      me(D.state === "unblocked" && M.state === "blocked" || D.state === "blocked" && M.state === "blocked" || D.state === "blocked" && M.state === "proceeding" || D.state === "blocked" && M.state === "unblocked" || D.state === "proceeding" && M.state === "unblocked", "Invalid blocker state transition: " + D.state + " -> " + M.state);
      let j = new Map(k.blockers);
      j.set(C, M),
      Oe({
          blockers: j
      })
  }
  function pt(C) {
      let {currentLocation: M, nextLocation: D, historyAction: j} = C;
      if (se.size === 0)
          return;
      se.size > 1 && Sa(!1, "A router only supports one blocker at a time");
      let G = Array.from(se.entries())
        , [ee,ae] = G[G.length - 1]
        , U = k.blockers.get(ee);
      if (!(U && U.state === "proceeding") && ae({
          currentLocation: M,
          nextLocation: D,
          historyAction: j
      }))
          return ee
  }
  function bn(C) {
      let M = xt(404, {
          pathname: C
      })
        , D = s || i
        , {matches: j, route: G} = xp(D);
      return Mt(),
      {
          notFoundMatches: j,
          route: G,
          error: M
      }
  }
  function Ue(C, M) {
      return {
          boundaryId: ea(M.partialMatches).route.id,
          error: xt(400, {
              type: "route-discovery",
              pathname: C,
              message: M.error != null && "message"in M.error ? M.error : String(M.error)
          })
      }
  }
  function Mt(C) {
      let M = [];
      return V.forEach( (D, j) => {
          (!C || C(j)) && (D.cancel(),
          M.push(j),
          V.delete(j))
      }
      ),
      M
  }
  function ke(C, M, D) {
      if (x = C,
      h = M,
      p = D || null,
      !m && k.navigation === wc) {
          m = !0;
          let j = vs(k.location, k.matches);
          j != null && Oe({
              restoreScrollPosition: j
          })
      }
      return () => {
          x = null,
          h = null,
          p = null
      }
  }
  function gs(C, M) {
      return p && p(C, M.map(j => L2(j, k.loaderData))) || C.key
  }
  function Yu(C, M) {
      if (x && h) {
          let D = gs(C, M);
          x[D] = h()
      }
  }
  function vs(C, M) {
      if (x) {
          let D = gs(C, M)
            , j = x[D];
          if (typeof j == "number")
              return j
      }
      return null
  }
  function ur(C, M, D) {
      if (d) {
          if (v.has(D))
              return {
                  active: !1,
                  matches: C
              };
          if (C) {
              if (Object.keys(C[0].params).length > 0)
                  return {
                      active: !0,
                      matches: il(M, D, l, !0)
                  }
          } else
              return {
                  active: !0,
                  matches: il(M, D, l, !0) || []
              }
      }
      return {
          active: !1,
          matches: null
      }
  }
  async function cr(C, M, D) {
      let j = C;
      for (; ; ) {
          let G = s == null
            , ee = s || i;
          try {
              await mk(d, M, j, ee, a, o, be, D)
          } catch (te) {
              return {
                  type: "error",
                  error: te,
                  partialMatches: j
              }
          } finally {
              G && (i = [...i])
          }
          if (D.aborted)
              return {
                  type: "aborted"
              };
          let ae = ao(ee, M, l);
          if (ae)
              return qh(M, v),
              {
                  type: "success",
                  matches: ae
              };
          let U = il(ee, M, l, !0);
          if (!U || j.length === U.length && j.every( (te, q) => te.route.id === U[q].route.id))
              return qh(M, v),
              {
                  type: "success",
                  matches: null
              };
          j = U
      }
  }
  function qh(C, M) {
      if (M.size >= w) {
          let D = M.values().next().value;
          M.delete(D)
      }
      M.add(C)
  }
  function tb(C) {
      a = {},
      s = $i(C, o, void 0, a)
  }
  function nb(C, M) {
      let D = s == null;
      u0(C, M, s || i, a, o),
      D && (i = [...i],
      Oe({}))
  }
  return O = {
      get basename() {
          return l
      },
      get future() {
          return c
      },
      get state() {
          return k
      },
      get routes() {
          return i
      },
      get window() {
          return t
      },
      initialize: le,
      subscribe: Qe,
      enableScrollRestoration: ke,
      navigate: yn,
      fetch: hs,
      revalidate: Fn,
      createHref: C => e.history.createHref(C),
      encodeLocation: C => e.history.encodeLocation(C),
      getFetcher: ps,
      deleteFetcher: Uu,
      dispose: ue,
      getBlocker: Ro,
      deleteBlocker: _o,
      patchRoutes: nb,
      _internalFetchControllers: T,
      _internalActiveDeferreds: V,
      _internalSetRoutes: tb
  },
  O
}
function dk(e) {
  return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function Rd(e, t, n, r, o, a, i, s) {
  let l, u;
  if (i) {
      l = [];
      for (let c of t)
          if (l.push(c),
          c.route.id === i) {
              u = c;
              break
          }
  } else
      l = t,
      u = t[t.length - 1];
  let d = J2(o || ".", Z2(l, a), ns(e.pathname, n) || e.pathname, s === "path");
  return o == null && (d.search = e.search,
  d.hash = e.hash),
  (o == null || o === "" || o === ".") && u && u.route.index && !mh(d.search) && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
  r && n !== "/" && (d.pathname = d.pathname === "/" ? n : mo([n, d.pathname])),
  ts(d)
}
function fp(e, t, n, r) {
  if (!r || !dk(r))
      return {
          path: n
      };
  if (r.formMethod && !Pk(r.formMethod))
      return {
          path: n,
          error: xt(405, {
              method: r.formMethod
          })
      };
  let o = () => ({
      path: n,
      error: xt(400, {
          type: "invalid-body"
      })
  })
    , a = r.formMethod || "get"
    , i = e ? a.toUpperCase() : a.toLowerCase()
    , s = c0(n);
  if (r.body !== void 0) {
      if (r.formEncType === "text/plain") {
          if (!sn(i))
              return o();
          let f = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (g, w) => {
              let[v,x] = w;
              return "" + g + v + "=" + x + `
`
          }
          , "") : String(r.body);
          return {
              path: n,
              submission: {
                  formMethod: i,
                  formAction: s,
                  formEncType: r.formEncType,
                  formData: void 0,
                  json: void 0,
                  text: f
              }
          }
      } else if (r.formEncType === "application/json") {
          if (!sn(i))
              return o();
          try {
              let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
              return {
                  path: n,
                  submission: {
                      formMethod: i,
                      formAction: s,
                      formEncType: r.formEncType,
                      formData: void 0,
                      json: f,
                      text: void 0
                  }
              }
          } catch {
              return o()
          }
      }
  }
  me(typeof FormData == "function", "FormData is not available in this environment");
  let l, u;
  if (r.formData)
      l = _d(r.formData),
      u = r.formData;
  else if (r.body instanceof FormData)
      l = _d(r.body),
      u = r.body;
  else if (r.body instanceof URLSearchParams)
      l = r.body,
      u = gp(l);
  else if (r.body == null)
      l = new URLSearchParams,
      u = new FormData;
  else
      try {
          l = new URLSearchParams(r.body),
          u = gp(l)
      } catch {
          return o()
      }
  let d = {
      formMethod: i,
      formAction: s,
      formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
      formData: u,
      json: void 0,
      text: void 0
  };
  if (sn(d.formMethod))
      return {
          path: n,
          submission: d
      };
  let c = Kr(n);
  return t && c.search && mh(c.search) && l.append("index", ""),
  c.search = "?" + l,
  {
      path: ts(c),
      submission: d
  }
}
function fk(e, t) {
  let n = e;
  if (t) {
      let r = e.findIndex(o => o.route.id === t);
      r >= 0 && (n = e.slice(0, r))
  }
  return n
}
function hp(e, t, n, r, o, a, i, s, l, u, d, c, f, g, w, v) {
  let x = v ? It(v[1]) ? v[1].error : v[1].data : void 0
    , p = e.createURL(t.location)
    , h = e.createURL(o)
    , m = v && It(v[1]) ? v[0] : void 0
    , S = m ? fk(n, m) : n
    , E = v ? v[1].statusCode : void 0
    , N = i && E && E >= 400
    , O = S.filter( (L, _) => {
      let {route: F} = L;
      if (F.lazy)
          return !0;
      if (F.loader == null)
          return !1;
      if (a)
          return typeof F.loader != "function" || F.loader.hydrate ? !0 : t.loaderData[F.id] === void 0 && (!t.errors || t.errors[F.id] === void 0);
      if (hk(t.loaderData, t.matches[_], L) || l.some(W => W === L.route.id))
          return !0;
      let H = t.matches[_]
        , J = L;
      return mp(L, Ye({
          currentUrl: p,
          currentParams: H.params,
          nextUrl: h,
          nextParams: J.params
      }, r, {
          actionResult: x,
          actionStatus: E,
          defaultShouldRevalidate: N ? !1 : s || p.pathname + p.search === h.pathname + h.search || p.search !== h.search || l0(H, J)
      }))
  }
  )
    , k = [];
  return c.forEach( (L, _) => {
      if (a || !n.some(I => I.route.id === L.routeId) || d.has(_))
          return;
      let F = ao(g, L.path, w);
      if (!F) {
          k.push({
              key: _,
              routeId: L.routeId,
              path: L.path,
              matches: null,
              match: null,
              controller: null
          });
          return
      }
      let H = t.fetchers.get(_)
        , J = oi(F, L.path)
        , W = !1;
      f.has(_) ? W = !1 : u.has(_) ? (u.delete(_),
      W = !0) : H && H.state !== "idle" && H.data === void 0 ? W = s : W = mp(J, Ye({
          currentUrl: p,
          currentParams: t.matches[t.matches.length - 1].params,
          nextUrl: h,
          nextParams: n[n.length - 1].params
      }, r, {
          actionResult: x,
          actionStatus: E,
          defaultShouldRevalidate: N ? !1 : s
      })),
      W && k.push({
          key: _,
          routeId: L.routeId,
          path: L.path,
          matches: F,
          match: J,
          controller: new AbortController
      })
  }
  ),
  [O, k]
}
function hk(e, t, n) {
  let r = !t || n.route.id !== t.route.id
    , o = e[n.route.id] === void 0;
  return r || o
}
function l0(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function mp(e, t) {
  if (e.route.shouldRevalidate) {
      let n = e.route.shouldRevalidate(t);
      if (typeof n == "boolean")
          return n
  }
  return t.defaultShouldRevalidate
}
async function mk(e, t, n, r, o, a, i, s) {
  let l = [t, ...n.map(u => u.route.id)].join("-");
  try {
      let u = i.get(l);
      u || (u = e({
          path: t,
          matches: n,
          patch: (d, c) => {
              s.aborted || u0(d, c, r, o, a)
          }
      }),
      i.set(l, u)),
      u && kk(u) && await u
  } finally {
      i.delete(l)
  }
}
function u0(e, t, n, r, o) {
  if (e) {
      var a;
      let i = r[e];
      me(i, "No route found to patch children into: routeId = " + e);
      let s = $i(t, o, [e, "patch", String(((a = i.children) == null ? void 0 : a.length) || "0")], r);
      i.children ? i.children.push(...s) : i.children = s
  } else {
      let i = $i(t, o, ["patch", String(n.length || "0")], r);
      n.push(...i)
  }
}
async function pk(e, t, n) {
  if (!e.lazy)
      return;
  let r = await e.lazy();
  if (!e.lazy)
      return;
  let o = n[e.id];
  me(o, "No route found in manifest");
  let a = {};
  for (let i in r) {
      let l = o[i] !== void 0 && i !== "hasErrorBoundary";
      Sa(!l, 'Route "' + o.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')),
      !l && !j2.has(i) && (a[i] = r[i])
  }
  Object.assign(o, a),
  Object.assign(o, Ye({}, t(o), {
      lazy: void 0
  }))
}
async function gk(e) {
  let {matches: t} = e
    , n = t.filter(o => o.shouldLoad);
  return (await Promise.all(n.map(o => o.resolve()))).reduce( (o, a, i) => Object.assign(o, {
      [n[i].route.id]: a
  }), {})
}
async function vk(e, t, n, r, o, a, i, s, l, u) {
  let d = a.map(g => g.route.lazy ? pk(g.route, l, s) : void 0)
    , c = a.map( (g, w) => {
      let v = d[w]
        , x = o.some(h => h.route.id === g.route.id);
      return Ye({}, g, {
          shouldLoad: x,
          resolve: async h => (h && r.method === "GET" && (g.route.lazy || g.route.loader) && (x = !0),
          x ? yk(t, r, g, v, h, u) : Promise.resolve({
              type: De.data,
              result: void 0
          }))
      })
  }
  )
    , f = await e({
      matches: c,
      request: r,
      params: a[0].params,
      fetcherKey: i,
      context: u
  });
  try {
      await Promise.all(d)
  } catch {}
  return f
}
async function yk(e, t, n, r, o, a) {
  let i, s, l = u => {
      let d, c = new Promise( (w, v) => d = v);
      s = () => d(),
      t.signal.addEventListener("abort", s);
      let f = w => typeof u != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : u({
          request: t,
          params: n.params,
          context: a
      }, ...w !== void 0 ? [w] : [])
        , g = (async () => {
          try {
              return {
                  type: "data",
                  result: await (o ? o(v => f(v)) : f())
              }
          } catch (w) {
              return {
                  type: "error",
                  result: w
              }
          }
      }
      )();
      return Promise.race([g, c])
  }
  ;
  try {
      let u = n.route[e];
      if (r)
          if (u) {
              let d, [c] = await Promise.all([l(u).catch(f => {
                  d = f
              }
              ), r]);
              if (d !== void 0)
                  throw d;
              i = c
          } else if (await r,
          u = n.route[e],
          u)
              i = await l(u);
          else if (e === "action") {
              let d = new URL(t.url)
                , c = d.pathname + d.search;
              throw xt(405, {
                  method: t.method,
                  pathname: c,
                  routeId: n.route.id
              })
          } else
              return {
                  type: De.data,
                  result: void 0
              };
      else if (u)
          i = await l(u);
      else {
          let d = new URL(t.url)
            , c = d.pathname + d.search;
          throw xt(404, {
              pathname: c
          })
      }
      me(i.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
  } catch (u) {
      return {
          type: De.error,
          result: u
      }
  } finally {
      s && t.signal.removeEventListener("abort", s)
  }
  return i
}
async function wk(e) {
  let {result: t, type: n} = e;
  if (d0(t)) {
      let u;
      try {
          let d = t.headers.get("Content-Type");
          d && /\bapplication\/json\b/.test(d) ? t.body == null ? u = null : u = await t.json() : u = await t.text()
      } catch (d) {
          return {
              type: De.error,
              error: d
          }
      }
      return n === De.error ? {
          type: De.error,
          error: new Fl(t.status,t.statusText,u),
          statusCode: t.status,
          headers: t.headers
      } : {
          type: De.data,
          data: u,
          statusCode: t.status,
          headers: t.headers
      }
  }
  if (n === De.error) {
      if (bp(t)) {
          var r;
          if (t.data instanceof Error) {
              var o;
              return {
                  type: De.error,
                  error: t.data,
                  statusCode: (o = t.init) == null ? void 0 : o.status
              }
          }
          t = new Fl(((r = t.init) == null ? void 0 : r.status) || 500,void 0,t.data)
      }
      return {
          type: De.error,
          error: t,
          statusCode: vu(t) ? t.status : void 0
      }
  }
  if (Ek(t)) {
      var a, i;
      return {
          type: De.deferred,
          deferredData: t,
          statusCode: (a = t.init) == null ? void 0 : a.status,
          headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers)
      }
  }
  if (bp(t)) {
      var s, l;
      return {
          type: De.data,
          data: t.data,
          statusCode: (s = t.init) == null ? void 0 : s.status,
          headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0
      }
  }
  return {
      type: De.data,
      data: t
  }
}
function xk(e, t, n, r, o, a) {
  let i = e.headers.get("Location");
  if (me(i, "Redirects returned/thrown from loaders/actions must have a Location header"),
  !fh.test(i)) {
      let s = r.slice(0, r.findIndex(l => l.route.id === n) + 1);
      i = Rd(new URL(t.url), s, o, !0, i, a),
      e.headers.set("Location", i)
  }
  return e
}
function pp(e, t, n) {
  if (fh.test(e)) {
      let r = e
        , o = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r)
        , a = ns(o.pathname, n) != null;
      if (o.origin === t.origin && a)
          return o.pathname + o.search + o.hash
  }
  return e
}
function Io(e, t, n, r) {
  let o = e.createURL(c0(t)).toString()
    , a = {
      signal: n
  };
  if (r && sn(r.formMethod)) {
      let {formMethod: i, formEncType: s} = r;
      a.method = i.toUpperCase(),
      s === "application/json" ? (a.headers = new Headers({
          "Content-Type": s
      }),
      a.body = JSON.stringify(r.json)) : s === "text/plain" ? a.body = r.text : s === "application/x-www-form-urlencoded" && r.formData ? a.body = _d(r.formData) : a.body = r.formData
  }
  return new Request(o,a)
}
function _d(e) {
  let t = new URLSearchParams;
  for (let[n,r] of e.entries())
      t.append(n, typeof r == "string" ? r : r.name);
  return t
}
function gp(e) {
  let t = new FormData;
  for (let[n,r] of e.entries())
      t.append(n, r);
  return t
}
function bk(e, t, n, r, o) {
  let a = {}, i = null, s, l = !1, u = {}, d = n && It(n[1]) ? n[1].error : void 0;
  return e.forEach(c => {
      if (!(c.route.id in t))
          return;
      let f = c.route.id
        , g = t[f];
      if (me(!co(g), "Cannot handle redirect results in processLoaderData"),
      It(g)) {
          let w = g.error;
          d !== void 0 && (w = d,
          d = void 0),
          i = i || {};
          {
              let v = ea(e, f);
              i[v.route.id] == null && (i[v.route.id] = w)
          }
          a[f] = void 0,
          l || (l = !0,
          s = vu(g.error) ? g.error.status : 500),
          g.headers && (u[f] = g.headers)
      } else
          Pr(g) ? (r.set(f, g.deferredData),
          a[f] = g.deferredData.data,
          g.statusCode != null && g.statusCode !== 200 && !l && (s = g.statusCode),
          g.headers && (u[f] = g.headers)) : (a[f] = g.data,
          g.statusCode && g.statusCode !== 200 && !l && (s = g.statusCode),
          g.headers && (u[f] = g.headers))
  }
  ),
  d !== void 0 && n && (i = {
      [n[0]]: d
  },
  a[n[0]] = void 0),
  {
      loaderData: a,
      errors: i,
      statusCode: s || 200,
      loaderHeaders: u
  }
}
function vp(e, t, n, r, o, a, i, s) {
  let {loaderData: l, errors: u} = bk(t, r, o, s);
  return a.forEach(d => {
      let {key: c, match: f, controller: g} = d
        , w = i[c];
      if (me(w, "Did not find corresponding fetcher result"),
      !(g && g.signal.aborted))
          if (It(w)) {
              let v = ea(e.matches, f == null ? void 0 : f.route.id);
              u && u[v.route.id] || (u = Ye({}, u, {
                  [v.route.id]: w.error
              })),
              e.fetchers.delete(c)
          } else if (co(w))
              me(!1, "Unhandled fetcher revalidation redirect");
          else if (Pr(w))
              me(!1, "Unhandled fetcher deferred data");
          else {
              let v = yr(w.data);
              e.fetchers.set(c, v)
          }
  }
  ),
  {
      loaderData: l,
      errors: u
  }
}
function yp(e, t, n, r) {
  let o = Ye({}, t);
  for (let a of n) {
      let i = a.route.id;
      if (t.hasOwnProperty(i) ? t[i] !== void 0 && (o[i] = t[i]) : e[i] !== void 0 && a.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
          break
  }
  return o
}
function wp(e) {
  return e ? It(e[1]) ? {
      actionData: {}
  } : {
      actionData: {
          [e[0]]: e[1].data
      }
  } : {}
}
function ea(e, t) {
  return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function xp(e) {
  let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
      id: "__shim-error-route__"
  };
  return {
      matches: [{
          params: {},
          pathname: "",
          pathnameBase: "",
          route: t
      }],
      route: t
  }
}
function xt(e, t) {
  let {pathname: n, routeId: r, method: o, type: a, message: i} = t === void 0 ? {} : t
    , s = "Unknown Server Error"
    , l = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request",
  a === "route-discovery" ? l = 'Unable to match URL "' + n + '" - the `unstable_patchRoutesOnNavigation()` ' + (`function threw the following error:
` + i) : o && n && r ? l = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : a === "defer-action" ? l = "defer() is not supported in actions" : a === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden",
  l = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (s = "Not Found",
  l = 'No route matches URL "' + n + '"') : e === 405 && (s = "Method Not Allowed",
  o && n && r ? l = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
  new Fl(e || 500,s,new Error(l),!0)
}
function Ws(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
      let[r,o] = t[n];
      if (co(o))
          return {
              key: r,
              result: o
          }
  }
}
function c0(e) {
  let t = typeof e == "string" ? Kr(e) : e;
  return ts(Ye({}, t, {
      hash: ""
  }))
}
function Sk(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function kk(e) {
  return typeof e == "object" && e != null && "then"in e
}
function Ck(e) {
  return d0(e.result) && ik.has(e.result.status)
}
function Pr(e) {
  return e.type === De.deferred
}
function It(e) {
  return e.type === De.error
}
function co(e) {
  return (e && e.type) === De.redirect
}
function bp(e) {
  return typeof e == "object" && e != null && "type"in e && "data"in e && "init"in e && e.type === "DataWithResponseInit"
}
function Ek(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function d0(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function Pk(e) {
  return ak.has(e.toLowerCase())
}
function sn(e) {
  return rk.has(e.toLowerCase())
}
async function Mk(e, t, n, r, o) {
  let a = Object.entries(t);
  for (let i = 0; i < a.length; i++) {
      let[s,l] = a[i]
        , u = e.find(f => (f == null ? void 0 : f.route.id) === s);
      if (!u)
          continue;
      let d = r.find(f => f.route.id === u.route.id)
        , c = d != null && !l0(d, u) && (o && o[u.route.id]) !== void 0;
      Pr(l) && c && await hh(l, n, !1).then(f => {
          f && (t[s] = f)
      }
      )
  }
}
async function Nk(e, t, n) {
  for (let r = 0; r < n.length; r++) {
      let {key: o, routeId: a, controller: i} = n[r]
        , s = t[o];
      e.find(u => (u == null ? void 0 : u.route.id) === a) && Pr(s) && (me(i, "Expected an AbortController for revalidating fetcher deferred result"),
      await hh(s, i.signal, !0).then(u => {
          u && (t[o] = u)
      }
      ))
  }
}
async function hh(e, t, n) {
  if (n === void 0 && (n = !1),
  !await e.deferredData.resolveData(t)) {
      if (n)
          try {
              return {
                  type: De.data,
                  data: e.deferredData.unwrappedData
              }
          } catch (o) {
              return {
                  type: De.error,
                  error: o
              }
          }
      return {
          type: De.data,
          data: e.deferredData.data
      }
  }
}
function mh(e) {
  return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function oi(e, t) {
  let n = typeof t == "string" ? Kr(t).search : t.search;
  if (e[e.length - 1].route.index && mh(n || ""))
      return e[e.length - 1];
  let r = a0(e);
  return r[r.length - 1]
}
function Sp(e) {
  let {formMethod: t, formAction: n, formEncType: r, text: o, formData: a, json: i} = e;
  if (!(!t || !n || !r)) {
      if (o != null)
          return {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: void 0,
              json: void 0,
              text: o
          };
      if (a != null)
          return {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: a,
              json: void 0,
              text: void 0
          };
      if (i !== void 0)
          return {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: void 0,
              json: i,
              text: void 0
          }
  }
}
function xc(e, t) {
  return t ? {
      state: "loading",
      location: e,
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text
  } : {
      state: "loading",
      location: e,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
  }
}
function Ok(e, t) {
  return {
      state: "submitting",
      location: e,
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text
  }
}
function Qa(e, t) {
  return e ? {
      state: "loading",
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t
  } : {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: t
  }
}
function Dk(e, t) {
  return {
      state: "submitting",
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t ? t.data : void 0
  }
}
function yr(e) {
  return {
      state: "idle",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: e
  }
}
function Tk(e, t) {
  try {
      let n = e.sessionStorage.getItem(s0);
      if (n) {
          let r = JSON.parse(n);
          for (let[o,a] of Object.entries(r || {}))
              a && Array.isArray(a) && t.set(o, new Set(a || []))
      }
  } catch {}
}
function Rk(e, t) {
  if (t.size > 0) {
      let n = {};
      for (let[r,o] of t)
          n[r] = [...o];
      try {
          e.sessionStorage.setItem(s0, JSON.stringify(n))
      } catch (r) {
          Sa(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
      }
  }
}
/**
* React Router v6.26.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ad() {
  return Ad = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  Ad.apply(this, arguments)
}
const f0 = y.createContext(null)
, h0 = y.createContext(null)
, m0 = y.createContext(null)
, ph = y.createContext(null)
, yu = y.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
})
, p0 = y.createContext(null);
function gh() {
  return y.useContext(ph) != null
}
function _k() {
  return gh() || me(!1),
  y.useContext(ph).location
}
function Ak(e, t, n, r) {
  gh() || me(!1);
  let {navigator: o} = y.useContext(m0)
    , {matches: a} = y.useContext(yu)
    , i = a[a.length - 1]
    , s = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let u = _k(), d;
  d = u;
  let c = d.pathname || "/"
    , f = c;
  if (l !== "/") {
      let v = l.replace(/^\//, "").split("/");
      f = "/" + c.replace(/^\//, "").split("/").slice(v.length).join("/")
  }
  let g = ao(e, {
      pathname: f
  });
  return Wk(g && g.map(v => Object.assign({}, v, {
      params: Object.assign({}, s, v.params),
      pathname: mo([l, o.encodeLocation ? o.encodeLocation(v.pathname).pathname : v.pathname]),
      pathnameBase: v.pathnameBase === "/" ? l : mo([l, o.encodeLocation ? o.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
  })), a, n, r)
}
function jk() {
  let e = Hk()
    , t = vu(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
    , n = e instanceof Error ? e.stack : null
    , o = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
      style: {
          fontStyle: "italic"
      }
  }, t), n ? y.createElement("pre", {
      style: o
  }, n) : null, null)
}
const Ik = y.createElement(jk, null);
class Lk extends y.Component {
  constructor(t) {
      super(t),
      this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error
      }
  }
  static getDerivedStateFromError(t) {
      return {
          error: t
      }
  }
  static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
          error: t.error,
          location: t.location,
          revalidation: t.revalidation
      } : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation
      }
  }
  componentDidCatch(t, n) {
      console.error("React Router caught the following error during render", t, n)
  }
  render() {
      return this.state.error !== void 0 ? y.createElement(yu.Provider, {
          value: this.props.routeContext
      }, y.createElement(p0.Provider, {
          value: this.state.error,
          children: this.props.component
      })) : this.props.children
  }
}
function Fk(e) {
  let {routeContext: t, match: n, children: r} = e
    , o = y.useContext(f0);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
  y.createElement(yu.Provider, {
      value: t
  }, r)
}
function Wk(e, t, n, r) {
  var o;
  if (t === void 0 && (t = []),
  n === void 0 && (n = null),
  r === void 0 && (r = null),
  e == null) {
      var a;
      if (!n)
          return null;
      if (n.errors)
          e = n.matches;
      else if ((a = r) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
          e = n.matches;
      else
          return null
  }
  let i = e
    , s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
      let d = i.findIndex(c => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0);
      d >= 0 || me(!1),
      i = i.slice(0, Math.min(i.length, d + 1))
  }
  let l = !1
    , u = -1;
  if (n && r && r.v7_partialHydration)
      for (let d = 0; d < i.length; d++) {
          let c = i[d];
          if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
          c.route.id) {
              let {loaderData: f, errors: g} = n
                , w = c.route.loader && f[c.route.id] === void 0 && (!g || g[c.route.id] === void 0);
              if (c.route.lazy || w) {
                  l = !0,
                  u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                  break
              }
          }
      }
  return i.reduceRight( (d, c, f) => {
      let g, w = !1, v = null, x = null;
      n && (g = s && c.route.id ? s[c.route.id] : void 0,
      v = c.route.errorElement || Ik,
      l && (u < 0 && f === 0 ? (w = !0,
      x = null) : u === f && (w = !0,
      x = c.route.hydrateFallbackElement || null)));
      let p = t.concat(i.slice(0, f + 1))
        , h = () => {
          let m;
          return g ? m = v : w ? m = x : c.route.Component ? m = y.createElement(c.route.Component, null) : c.route.element ? m = c.route.element : m = d,
          y.createElement(Fk, {
              match: c,
              routeContext: {
                  outlet: d,
                  matches: p,
                  isDataRoute: n != null
              },
              children: m
          })
      }
      ;
      return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0) ? y.createElement(Lk, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: h(),
          routeContext: {
              outlet: null,
              matches: p,
              isDataRoute: !0
          }
      }) : h()
  }
  , null)
}
var jd = function(e) {
  return e.UseBlocker = "useBlocker",
  e.UseLoaderData = "useLoaderData",
  e.UseActionData = "useActionData",
  e.UseRouteError = "useRouteError",
  e.UseNavigation = "useNavigation",
  e.UseRouteLoaderData = "useRouteLoaderData",
  e.UseMatches = "useMatches",
  e.UseRevalidator = "useRevalidator",
  e.UseNavigateStable = "useNavigate",
  e.UseRouteId = "useRouteId",
  e
}(jd || {});
function $k(e) {
  let t = y.useContext(h0);
  return t || me(!1),
  t
}
function zk(e) {
  let t = y.useContext(yu);
  return t || me(!1),
  t
}
function Bk(e) {
  let t = zk()
    , n = t.matches[t.matches.length - 1];
  return n.route.id || me(!1),
  n.route.id
}
function Hk() {
  var e;
  let t = y.useContext(p0)
    , n = $k(jd.UseRouteError)
    , r = Bk(jd.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const Uk = "startTransition"
, kp = Jg[Uk];
function Yk(e) {
  let {fallbackElement: t, router: n, future: r} = e
    , [o,a] = y.useState(n.state)
    , {v7_startTransition: i} = r || {}
    , s = y.useCallback(c => {
      i && kp ? kp( () => a(c)) : a(c)
  }
  , [a, i]);
  y.useLayoutEffect( () => n.subscribe(s), [n, s]),
  y.useEffect( () => {}
  , []);
  let l = y.useMemo( () => ({
      createHref: n.createHref,
      encodeLocation: n.encodeLocation,
      go: c => n.navigate(c),
      push: (c, f, g) => n.navigate(c, {
          state: f,
          preventScrollReset: g == null ? void 0 : g.preventScrollReset
      }),
      replace: (c, f, g) => n.navigate(c, {
          replace: !0,
          state: f,
          preventScrollReset: g == null ? void 0 : g.preventScrollReset
      })
  }), [n])
    , u = n.basename || "/"
    , d = y.useMemo( () => ({
      router: n,
      navigator: l,
      static: !1,
      basename: u
  }), [n, l, u]);
  return y.createElement(y.Fragment, null, y.createElement(f0.Provider, {
      value: d
  }, y.createElement(h0.Provider, {
      value: o
  }, y.createElement(Gk, {
      basename: u,
      location: o.location,
      navigationType: o.historyAction,
      navigator: l,
      future: {
          v7_relativeSplatPath: n.future.v7_relativeSplatPath
      }
  }, o.initialized || n.future.v7_partialHydration ? y.createElement(Vk, {
      routes: n.routes,
      future: n.future,
      state: o
  }) : t))), null)
}
function Vk(e) {
  let {routes: t, future: n, state: r} = e;
  return Ak(t, void 0, r, n)
}
function Id(e) {
  me(!1)
}
function Gk(e) {
  let {basename: t="/", children: n=null, location: r, navigationType: o=tt.Pop, navigator: a, static: i=!1, future: s} = e;
  gh() && me(!1);
  let l = t.replace(/^\/*/, "/")
    , u = y.useMemo( () => ({
      basename: l,
      navigator: a,
      static: i,
      future: Ad({
          v7_relativeSplatPath: !1
      }, s)
  }), [l, s, a, i]);
  typeof r == "string" && (r = Kr(r));
  let {pathname: d="/", search: c="", hash: f="", state: g=null, key: w="default"} = r
    , v = y.useMemo( () => {
      let x = ns(d, l);
      return x == null ? null : {
          location: {
              pathname: x,
              search: c,
              hash: f,
              state: g,
              key: w
          },
          navigationType: o
      }
  }
  , [l, d, c, f, g, w, o]);
  return v == null ? null : y.createElement(m0.Provider, {
      value: u
  }, y.createElement(ph.Provider, {
      children: n,
      value: v
  }))
}
new Promise( () => {}
);
function Ld(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r))
          return;
      let a = [...t, o];
      if (r.type === y.Fragment) {
          n.push.apply(n, Ld(r.props.children, a));
          return
      }
      r.type !== Id && me(!1),
      !r.props.index || !r.props.children || me(!1);
      let i = {
          id: r.props.id || a.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy
      };
      r.props.children && (i.children = Ld(r.props.children, a)),
      n.push(i)
  }
  ),
  n
}
function Xk(e) {
  let t = {
      hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && Object.assign(t, {
      element: y.createElement(e.Component),
      Component: void 0
  }),
  e.HydrateFallback && Object.assign(t, {
      hydrateFallbackElement: y.createElement(e.HydrateFallback),
      HydrateFallback: void 0
  }),
  e.ErrorBoundary && Object.assign(t, {
      errorElement: y.createElement(e.ErrorBoundary),
      ErrorBoundary: void 0
  }),
  t
}
/**
* React Router DOM v6.26.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Wl() {
  return Wl = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  Wl.apply(this, arguments)
}
const Qk = "6";
try {
  window.__reactRouterVersion = Qk
} catch {}
function Kk(e, t) {
  return ck({
      basename: t == null ? void 0 : t.basename,
      future: Wl({}, t == null ? void 0 : t.future, {
          v7_prependBasename: !0
      }),
      history: R2({
          window: t == null ? void 0 : t.window
      }),
      hydrationData: (t == null ? void 0 : t.hydrationData) || qk(),
      routes: e,
      mapRouteProperties: Xk,
      unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
      unstable_patchRoutesOnNavigation: t == null ? void 0 : t.unstable_patchRoutesOnNavigation,
      window: t == null ? void 0 : t.window
  }).initialize()
}
function qk() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Wl({}, t, {
      errors: Zk(t.errors)
  })),
  t
}
function Zk(e) {
  if (!e)
      return null;
  let t = Object.entries(e)
    , n = {};
  for (let[r,o] of t)
      if (o && o.__type === "RouteErrorResponse")
          n[r] = new Fl(o.status,o.statusText,o.data,o.internal === !0);
      else if (o && o.__type === "Error") {
          if (o.__subType) {
              let a = window[o.__subType];
              if (typeof a == "function")
                  try {
                      let i = new a(o.message);
                      i.stack = "",
                      n[r] = i
                  } catch {}
          }
          if (n[r] == null) {
              let a = new Error(o.message);
              a.stack = "",
              n[r] = a
          }
      } else
          n[r] = o;
  return n
}
var Cp;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration",
  e.UseSubmit = "useSubmit",
  e.UseSubmitFetcher = "useSubmitFetcher",
  e.UseFetcher = "useFetcher",
  e.useViewTransitionState = "useViewTransitionState"
}
)(Cp || (Cp = {}));
var Ep;
(function(e) {
  e.UseFetcher = "useFetcher",
  e.UseFetchers = "useFetchers",
  e.UseScrollRestoration = "useScrollRestoration"
}
)(Ep || (Ep = {}));
const vh = "-"
, Jk = e => {
  const t = tC(e)
    , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
  return {
      getClassGroupId: i => {
          const s = i.split(vh);
          return s[0] === "" && s.length !== 1 && s.shift(),
          g0(s, t) || eC(i)
      }
      ,
      getConflictingClassGroupIds: (i, s) => {
          const l = n[i] || [];
          return s && r[i] ? [...l, ...r[i]] : l
      }
  }
}
, g0 = (e, t) => {
  var i;
  if (e.length === 0)
      return t.classGroupId;
  const n = e[0]
    , r = t.nextPart.get(n)
    , o = r ? g0(e.slice(1), r) : void 0;
  if (o)
      return o;
  if (t.validators.length === 0)
      return;
  const a = e.join(vh);
  return (i = t.validators.find( ({validator: s}) => s(a))) == null ? void 0 : i.classGroupId
}
, Pp = /^\[(.+)\]$/
, eC = e => {
  if (Pp.test(e)) {
      const t = Pp.exec(e)[1]
        , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n)
          return "arbitrary.." + n
  }
}
, tC = e => {
  const {theme: t, prefix: n} = e
    , r = {
      nextPart: new Map,
      validators: []
  };
  return rC(Object.entries(e.classGroups), n).forEach( ([a,i]) => {
      Fd(i, r, a, t)
  }
  ),
  r
}
, Fd = (e, t, n, r) => {
  e.forEach(o => {
      if (typeof o == "string") {
          const a = o === "" ? t : Mp(t, o);
          a.classGroupId = n;
          return
      }
      if (typeof o == "function") {
          if (nC(o)) {
              Fd(o(r), t, n, r);
              return
          }
          t.validators.push({
              validator: o,
              classGroupId: n
          });
          return
      }
      Object.entries(o).forEach( ([a,i]) => {
          Fd(i, Mp(t, a), n, r)
      }
      )
  }
  )
}
, Mp = (e, t) => {
  let n = e;
  return t.split(vh).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
          nextPart: new Map,
          validators: []
      }),
      n = n.nextPart.get(r)
  }
  ),
  n
}
, nC = e => e.isThemeGetter
, rC = (e, t) => t ? e.map( ([n,r]) => {
  const o = r.map(a => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map( ([i,s]) => [t + i, s])) : a);
  return [n, o]
}
) : e
, oC = e => {
  if (e < 1)
      return {
          get: () => {}
          ,
          set: () => {}
      };
  let t = 0
    , n = new Map
    , r = new Map;
  const o = (a, i) => {
      n.set(a, i),
      t++,
      t > e && (t = 0,
      r = n,
      n = new Map)
  }
  ;
  return {
      get(a) {
          let i = n.get(a);
          if (i !== void 0)
              return i;
          if ((i = r.get(a)) !== void 0)
              return o(a, i),
              i
      },
      set(a, i) {
          n.has(a) ? n.set(a, i) : o(a, i)
      }
  }
}
, v0 = "!"
, aC = e => {
  const {separator: t, experimentalParseClassName: n} = e
    , r = t.length === 1
    , o = t[0]
    , a = t.length
    , i = s => {
      const l = [];
      let u = 0, d = 0, c;
      for (let x = 0; x < s.length; x++) {
          let p = s[x];
          if (u === 0) {
              if (p === o && (r || s.slice(x, x + a) === t)) {
                  l.push(s.slice(d, x)),
                  d = x + a;
                  continue
              }
              if (p === "/") {
                  c = x;
                  continue
              }
          }
          p === "[" ? u++ : p === "]" && u--
      }
      const f = l.length === 0 ? s : s.substring(d)
        , g = f.startsWith(v0)
        , w = g ? f.substring(1) : f
        , v = c && c > d ? c - d : void 0;
      return {
          modifiers: l,
          hasImportantModifier: g,
          baseClassName: w,
          maybePostfixModifierPosition: v
      }
  }
  ;
  return n ? s => n({
      className: s,
      parseClassName: i
  }) : i
}
, iC = e => {
  if (e.length <= 1)
      return e;
  const t = [];
  let n = [];
  return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r),
      n = []) : n.push(r)
  }
  ),
  t.push(...n.sort()),
  t
}
, sC = e => ({
  cache: oC(e.cacheSize),
  parseClassName: aC(e),
  ...Jk(e)
})
, lC = /\s+/
, uC = (e, t) => {
  const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
    , a = []
    , i = e.trim().split(lC);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
      const u = i[l]
        , {modifiers: d, hasImportantModifier: c, baseClassName: f, maybePostfixModifierPosition: g} = n(u);
      let w = !!g
        , v = r(w ? f.substring(0, g) : f);
      if (!v) {
          if (!w) {
              s = u + (s.length > 0 ? " " + s : s);
              continue
          }
          if (v = r(f),
          !v) {
              s = u + (s.length > 0 ? " " + s : s);
              continue
          }
          w = !1
      }
      const x = iC(d).join(":")
        , p = c ? x + v0 : x
        , h = p + v;
      if (a.includes(h))
          continue;
      a.push(h);
      const m = o(v, w);
      for (let S = 0; S < m.length; ++S) {
          const E = m[S];
          a.push(p + E)
      }
      s = u + (s.length > 0 ? " " + s : s)
  }
  return s
}
;
function cC() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
      (t = arguments[e++]) && (n = y0(t)) && (r && (r += " "),
      r += n);
  return r
}
const y0 = e => {
  if (typeof e == "string")
      return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
      e[r] && (t = y0(e[r])) && (n && (n += " "),
      n += t);
  return n
}
;
function dC(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
      const u = t.reduce( (d, c) => c(d), e());
      return n = sC(u),
      r = n.cache.get,
      o = n.cache.set,
      a = s,
      s(l)
  }
  function s(l) {
      const u = r(l);
      if (u)
          return u;
      const d = uC(l, n);
      return o(l, d),
      d
  }
  return function() {
      return a(cC.apply(null, arguments))
  }
}
const Le = e => {
  const t = n => n[e] || [];
  return t.isThemeGetter = !0,
  t
}
, w0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
, fC = /^\d+\/\d+$/
, hC = new Set(["px", "full", "screen"])
, mC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
, pC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
, gC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
, vC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
, yC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
, Hn = e => ua(e) || hC.has(e) || fC.test(e)
, hr = e => _a(e, "length", PC)
, ua = e => !!e && !Number.isNaN(Number(e))
, bc = e => _a(e, "number", ua)
, Ka = e => !!e && Number.isInteger(Number(e))
, wC = e => e.endsWith("%") && ua(e.slice(0, -1))
, ce = e => w0.test(e)
, mr = e => mC.test(e)
, xC = new Set(["length", "size", "percentage"])
, bC = e => _a(e, xC, x0)
, SC = e => _a(e, "position", x0)
, kC = new Set(["image", "url"])
, CC = e => _a(e, kC, NC)
, EC = e => _a(e, "", MC)
, qa = () => !0
, _a = (e, t, n) => {
  const r = w0.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
, PC = e => pC.test(e) && !gC.test(e)
, x0 = () => !1
, MC = e => vC.test(e)
, NC = e => yC.test(e)
, OC = () => {
  const e = Le("colors")
    , t = Le("spacing")
    , n = Le("blur")
    , r = Le("brightness")
    , o = Le("borderColor")
    , a = Le("borderRadius")
    , i = Le("borderSpacing")
    , s = Le("borderWidth")
    , l = Le("contrast")
    , u = Le("grayscale")
    , d = Le("hueRotate")
    , c = Le("invert")
    , f = Le("gap")
    , g = Le("gradientColorStops")
    , w = Le("gradientColorStopPositions")
    , v = Le("inset")
    , x = Le("margin")
    , p = Le("opacity")
    , h = Le("padding")
    , m = Le("saturate")
    , S = Le("scale")
    , E = Le("sepia")
    , N = Le("skew")
    , O = Le("space")
    , k = Le("translate")
    , L = () => ["auto", "contain", "none"]
    , _ = () => ["auto", "hidden", "clip", "visible", "scroll"]
    , F = () => ["auto", ce, t]
    , H = () => [ce, t]
    , J = () => ["", Hn, hr]
    , W = () => ["auto", ua, ce]
    , I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
    , R = () => ["solid", "dashed", "dotted", "double", "none"]
    , $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
    , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
    , T = () => ["", "0", ce]
    , A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
    , B = () => [ua, ce];
  return {
      cacheSize: 500,
      separator: ":",
      theme: {
          colors: [qa],
          spacing: [Hn, hr],
          blur: ["none", "", mr, ce],
          brightness: B(),
          borderColor: [e],
          borderRadius: ["none", "", "full", mr, ce],
          borderSpacing: H(),
          borderWidth: J(),
          contrast: B(),
          grayscale: T(),
          hueRotate: B(),
          invert: T(),
          gap: H(),
          gradientColorStops: [e],
          gradientColorStopPositions: [wC, hr],
          inset: F(),
          margin: F(),
          opacity: B(),
          padding: H(),
          saturate: B(),
          scale: B(),
          sepia: T(),
          skew: B(),
          space: H(),
          translate: H()
      },
      classGroups: {
          aspect: [{
              aspect: ["auto", "square", "video", ce]
          }],
          container: ["container"],
          columns: [{
              columns: [mr]
          }],
          "break-after": [{
              "break-after": A()
          }],
          "break-before": [{
              "break-before": A()
          }],
          "break-inside": [{
              "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          "box-decoration": [{
              "box-decoration": ["slice", "clone"]
          }],
          box: [{
              box: ["border", "content"]
          }],
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          float: [{
              float: ["right", "left", "none", "start", "end"]
          }],
          clear: [{
              clear: ["left", "right", "both", "none", "start", "end"]
          }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [{
              object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          "object-position": [{
              object: [...I(), ce]
          }],
          overflow: [{
              overflow: _()
          }],
          "overflow-x": [{
              "overflow-x": _()
          }],
          "overflow-y": [{
              "overflow-y": _()
          }],
          overscroll: [{
              overscroll: L()
          }],
          "overscroll-x": [{
              "overscroll-x": L()
          }],
          "overscroll-y": [{
              "overscroll-y": L()
          }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{
              inset: [v]
          }],
          "inset-x": [{
              "inset-x": [v]
          }],
          "inset-y": [{
              "inset-y": [v]
          }],
          start: [{
              start: [v]
          }],
          end: [{
              end: [v]
          }],
          top: [{
              top: [v]
          }],
          right: [{
              right: [v]
          }],
          bottom: [{
              bottom: [v]
          }],
          left: [{
              left: [v]
          }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{
              z: ["auto", Ka, ce]
          }],
          basis: [{
              basis: F()
          }],
          "flex-direction": [{
              flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          "flex-wrap": [{
              flex: ["wrap", "wrap-reverse", "nowrap"]
          }],
          flex: [{
              flex: ["1", "auto", "initial", "none", ce]
          }],
          grow: [{
              grow: T()
          }],
          shrink: [{
              shrink: T()
          }],
          order: [{
              order: ["first", "last", "none", Ka, ce]
          }],
          "grid-cols": [{
              "grid-cols": [qa]
          }],
          "col-start-end": [{
              col: ["auto", {
                  span: ["full", Ka, ce]
              }, ce]
          }],
          "col-start": [{
              "col-start": W()
          }],
          "col-end": [{
              "col-end": W()
          }],
          "grid-rows": [{
              "grid-rows": [qa]
          }],
          "row-start-end": [{
              row: ["auto", {
                  span: [Ka, ce]
              }, ce]
          }],
          "row-start": [{
              "row-start": W()
          }],
          "row-end": [{
              "row-end": W()
          }],
          "grid-flow": [{
              "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          "auto-cols": [{
              "auto-cols": ["auto", "min", "max", "fr", ce]
          }],
          "auto-rows": [{
              "auto-rows": ["auto", "min", "max", "fr", ce]
          }],
          gap: [{
              gap: [f]
          }],
          "gap-x": [{
              "gap-x": [f]
          }],
          "gap-y": [{
              "gap-y": [f]
          }],
          "justify-content": [{
              justify: ["normal", ...P()]
          }],
          "justify-items": [{
              "justify-items": ["start", "end", "center", "stretch"]
          }],
          "justify-self": [{
              "justify-self": ["auto", "start", "end", "center", "stretch"]
          }],
          "align-content": [{
              content: ["normal", ...P(), "baseline"]
          }],
          "align-items": [{
              items: ["start", "end", "center", "baseline", "stretch"]
          }],
          "align-self": [{
              self: ["auto", "start", "end", "center", "stretch", "baseline"]
          }],
          "place-content": [{
              "place-content": [...P(), "baseline"]
          }],
          "place-items": [{
              "place-items": ["start", "end", "center", "baseline", "stretch"]
          }],
          "place-self": [{
              "place-self": ["auto", "start", "end", "center", "stretch"]
          }],
          p: [{
              p: [h]
          }],
          px: [{
              px: [h]
          }],
          py: [{
              py: [h]
          }],
          ps: [{
              ps: [h]
          }],
          pe: [{
              pe: [h]
          }],
          pt: [{
              pt: [h]
          }],
          pr: [{
              pr: [h]
          }],
          pb: [{
              pb: [h]
          }],
          pl: [{
              pl: [h]
          }],
          m: [{
              m: [x]
          }],
          mx: [{
              mx: [x]
          }],
          my: [{
              my: [x]
          }],
          ms: [{
              ms: [x]
          }],
          me: [{
              me: [x]
          }],
          mt: [{
              mt: [x]
          }],
          mr: [{
              mr: [x]
          }],
          mb: [{
              mb: [x]
          }],
          ml: [{
              ml: [x]
          }],
          "space-x": [{
              "space-x": [O]
          }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{
              "space-y": [O]
          }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{
              w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t]
          }],
          "min-w": [{
              "min-w": [ce, t, "min", "max", "fit"]
          }],
          "max-w": [{
              "max-w": [ce, t, "none", "full", "min", "max", "fit", "prose", {
                  screen: [mr]
              }, mr]
          }],
          h: [{
              h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          "min-h": [{
              "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          "max-h": [{
              "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          size: [{
              size: [ce, t, "auto", "min", "max", "fit"]
          }],
          "font-size": [{
              text: ["base", mr, hr]
          }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [{
              font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bc]
          }],
          "font-family": [{
              font: [qa]
          }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [{
              tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
          }],
          "line-clamp": [{
              "line-clamp": ["none", ua, bc]
          }],
          leading: [{
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Hn, ce]
          }],
          "list-image": [{
              "list-image": ["none", ce]
          }],
          "list-style-type": [{
              list: ["none", "disc", "decimal", ce]
          }],
          "list-style-position": [{
              list: ["inside", "outside"]
          }],
          "placeholder-color": [{
              placeholder: [e]
          }],
          "placeholder-opacity": [{
              "placeholder-opacity": [p]
          }],
          "text-alignment": [{
              text: ["left", "center", "right", "justify", "start", "end"]
          }],
          "text-color": [{
              text: [e]
          }],
          "text-opacity": [{
              "text-opacity": [p]
          }],
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          "text-decoration-style": [{
              decoration: [...R(), "wavy"]
          }],
          "text-decoration-thickness": [{
              decoration: ["auto", "from-font", Hn, hr]
          }],
          "underline-offset": [{
              "underline-offset": ["auto", Hn, ce]
          }],
          "text-decoration-color": [{
              decoration: [e]
          }],
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{
              text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          indent: [{
              indent: H()
          }],
          "vertical-align": [{
              align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
          }],
          whitespace: [{
              whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          break: [{
              break: ["normal", "words", "all", "keep"]
          }],
          hyphens: [{
              hyphens: ["none", "manual", "auto"]
          }],
          content: [{
              content: ["none", ce]
          }],
          "bg-attachment": [{
              bg: ["fixed", "local", "scroll"]
          }],
          "bg-clip": [{
              "bg-clip": ["border", "padding", "content", "text"]
          }],
          "bg-opacity": [{
              "bg-opacity": [p]
          }],
          "bg-origin": [{
              "bg-origin": ["border", "padding", "content"]
          }],
          "bg-position": [{
              bg: [...I(), SC]
          }],
          "bg-repeat": [{
              bg: ["no-repeat", {
                  repeat: ["", "x", "y", "round", "space"]
              }]
          }],
          "bg-size": [{
              bg: ["auto", "cover", "contain", bC]
          }],
          "bg-image": [{
              bg: ["none", {
                  "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
              }, CC]
          }],
          "bg-color": [{
              bg: [e]
          }],
          "gradient-from-pos": [{
              from: [w]
          }],
          "gradient-via-pos": [{
              via: [w]
          }],
          "gradient-to-pos": [{
              to: [w]
          }],
          "gradient-from": [{
              from: [g]
          }],
          "gradient-via": [{
              via: [g]
          }],
          "gradient-to": [{
              to: [g]
          }],
          rounded: [{
              rounded: [a]
          }],
          "rounded-s": [{
              "rounded-s": [a]
          }],
          "rounded-e": [{
              "rounded-e": [a]
          }],
          "rounded-t": [{
              "rounded-t": [a]
          }],
          "rounded-r": [{
              "rounded-r": [a]
          }],
          "rounded-b": [{
              "rounded-b": [a]
          }],
          "rounded-l": [{
              "rounded-l": [a]
          }],
          "rounded-ss": [{
              "rounded-ss": [a]
          }],
          "rounded-se": [{
              "rounded-se": [a]
          }],
          "rounded-ee": [{
              "rounded-ee": [a]
          }],
          "rounded-es": [{
              "rounded-es": [a]
          }],
          "rounded-tl": [{
              "rounded-tl": [a]
          }],
          "rounded-tr": [{
              "rounded-tr": [a]
          }],
          "rounded-br": [{
              "rounded-br": [a]
          }],
          "rounded-bl": [{
              "rounded-bl": [a]
          }],
          "border-w": [{
              border: [s]
          }],
          "border-w-x": [{
              "border-x": [s]
          }],
          "border-w-y": [{
              "border-y": [s]
          }],
          "border-w-s": [{
              "border-s": [s]
          }],
          "border-w-e": [{
              "border-e": [s]
          }],
          "border-w-t": [{
              "border-t": [s]
          }],
          "border-w-r": [{
              "border-r": [s]
          }],
          "border-w-b": [{
              "border-b": [s]
          }],
          "border-w-l": [{
              "border-l": [s]
          }],
          "border-opacity": [{
              "border-opacity": [p]
          }],
          "border-style": [{
              border: [...R(), "hidden"]
          }],
          "divide-x": [{
              "divide-x": [s]
          }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{
              "divide-y": [s]
          }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{
              "divide-opacity": [p]
          }],
          "divide-style": [{
              divide: R()
          }],
          "border-color": [{
              border: [o]
          }],
          "border-color-x": [{
              "border-x": [o]
          }],
          "border-color-y": [{
              "border-y": [o]
          }],
          "border-color-t": [{
              "border-t": [o]
          }],
          "border-color-r": [{
              "border-r": [o]
          }],
          "border-color-b": [{
              "border-b": [o]
          }],
          "border-color-l": [{
              "border-l": [o]
          }],
          "divide-color": [{
              divide: [o]
          }],
          "outline-style": [{
              outline: ["", ...R()]
          }],
          "outline-offset": [{
              "outline-offset": [Hn, ce]
          }],
          "outline-w": [{
              outline: [Hn, hr]
          }],
          "outline-color": [{
              outline: [e]
          }],
          "ring-w": [{
              ring: J()
          }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{
              ring: [e]
          }],
          "ring-opacity": [{
              "ring-opacity": [p]
          }],
          "ring-offset-w": [{
              "ring-offset": [Hn, hr]
          }],
          "ring-offset-color": [{
              "ring-offset": [e]
          }],
          shadow: [{
              shadow: ["", "inner", "none", mr, EC]
          }],
          "shadow-color": [{
              shadow: [qa]
          }],
          opacity: [{
              opacity: [p]
          }],
          "mix-blend": [{
              "mix-blend": [...$(), "plus-lighter", "plus-darker"]
          }],
          "bg-blend": [{
              "bg-blend": $()
          }],
          filter: [{
              filter: ["", "none"]
          }],
          blur: [{
              blur: [n]
          }],
          brightness: [{
              brightness: [r]
          }],
          contrast: [{
              contrast: [l]
          }],
          "drop-shadow": [{
              "drop-shadow": ["", "none", mr, ce]
          }],
          grayscale: [{
              grayscale: [u]
          }],
          "hue-rotate": [{
              "hue-rotate": [d]
          }],
          invert: [{
              invert: [c]
          }],
          saturate: [{
              saturate: [m]
          }],
          sepia: [{
              sepia: [E]
          }],
          "backdrop-filter": [{
              "backdrop-filter": ["", "none"]
          }],
          "backdrop-blur": [{
              "backdrop-blur": [n]
          }],
          "backdrop-brightness": [{
              "backdrop-brightness": [r]
          }],
          "backdrop-contrast": [{
              "backdrop-contrast": [l]
          }],
          "backdrop-grayscale": [{
              "backdrop-grayscale": [u]
          }],
          "backdrop-hue-rotate": [{
              "backdrop-hue-rotate": [d]
          }],
          "backdrop-invert": [{
              "backdrop-invert": [c]
          }],
          "backdrop-opacity": [{
              "backdrop-opacity": [p]
          }],
          "backdrop-saturate": [{
              "backdrop-saturate": [m]
          }],
          "backdrop-sepia": [{
              "backdrop-sepia": [E]
          }],
          "border-collapse": [{
              border: ["collapse", "separate"]
          }],
          "border-spacing": [{
              "border-spacing": [i]
          }],
          "border-spacing-x": [{
              "border-spacing-x": [i]
          }],
          "border-spacing-y": [{
              "border-spacing-y": [i]
          }],
          "table-layout": [{
              table: ["auto", "fixed"]
          }],
          caption: [{
              caption: ["top", "bottom"]
          }],
          transition: [{
              transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
          }],
          duration: [{
              duration: B()
          }],
          ease: [{
              ease: ["linear", "in", "out", "in-out", ce]
          }],
          delay: [{
              delay: B()
          }],
          animate: [{
              animate: ["none", "spin", "ping", "pulse", "bounce", ce]
          }],
          transform: [{
              transform: ["", "gpu", "none"]
          }],
          scale: [{
              scale: [S]
          }],
          "scale-x": [{
              "scale-x": [S]
          }],
          "scale-y": [{
              "scale-y": [S]
          }],
          rotate: [{
              rotate: [Ka, ce]
          }],
          "translate-x": [{
              "translate-x": [k]
          }],
          "translate-y": [{
              "translate-y": [k]
          }],
          "skew-x": [{
              "skew-x": [N]
          }],
          "skew-y": [{
              "skew-y": [N]
          }],
          "transform-origin": [{
              origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
          }],
          accent: [{
              accent: ["auto", e]
          }],
          appearance: [{
              appearance: ["none", "auto"]
          }],
          cursor: [{
              cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
          }],
          "caret-color": [{
              caret: [e]
          }],
          "pointer-events": [{
              "pointer-events": ["none", "auto"]
          }],
          resize: [{
              resize: ["none", "y", "x", ""]
          }],
          "scroll-behavior": [{
              scroll: ["auto", "smooth"]
          }],
          "scroll-m": [{
              "scroll-m": H()
          }],
          "scroll-mx": [{
              "scroll-mx": H()
          }],
          "scroll-my": [{
              "scroll-my": H()
          }],
          "scroll-ms": [{
              "scroll-ms": H()
          }],
          "scroll-me": [{
              "scroll-me": H()
          }],
          "scroll-mt": [{
              "scroll-mt": H()
          }],
          "scroll-mr": [{
              "scroll-mr": H()
          }],
          "scroll-mb": [{
              "scroll-mb": H()
          }],
          "scroll-ml": [{
              "scroll-ml": H()
          }],
          "scroll-p": [{
              "scroll-p": H()
          }],
          "scroll-px": [{
              "scroll-px": H()
          }],
          "scroll-py": [{
              "scroll-py": H()
          }],
          "scroll-ps": [{
              "scroll-ps": H()
          }],
          "scroll-pe": [{
              "scroll-pe": H()
          }],
          "scroll-pt": [{
              "scroll-pt": H()
          }],
          "scroll-pr": [{
              "scroll-pr": H()
          }],
          "scroll-pb": [{
              "scroll-pb": H()
          }],
          "scroll-pl": [{
              "scroll-pl": H()
          }],
          "snap-align": [{
              snap: ["start", "end", "center", "align-none"]
          }],
          "snap-stop": [{
              snap: ["normal", "always"]
          }],
          "snap-type": [{
              snap: ["none", "x", "y", "both"]
          }],
          "snap-strictness": [{
              snap: ["mandatory", "proximity"]
          }],
          touch: [{
              touch: ["auto", "none", "manipulation"]
          }],
          "touch-x": [{
              "touch-pan": ["x", "left", "right"]
          }],
          "touch-y": [{
              "touch-pan": ["y", "up", "down"]
          }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{
              select: ["none", "text", "all", "auto"]
          }],
          "will-change": [{
              "will-change": ["auto", "scroll", "contents", "transform", ce]
          }],
          fill: [{
              fill: [e, "none"]
          }],
          "stroke-w": [{
              stroke: [Hn, hr, bc]
          }],
          stroke: [{
              stroke: [e, "none"]
          }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{
              "forced-color-adjust": ["auto", "none"]
          }]
      },
      conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
          "font-size": ["leading"]
      }
  }
}
, ka = dC(OC);
var b0 = {
  exports: {}
};
(function(e, t) {
  (function(n, r) {
      e.exports = r()
  }
  )(ab, function() {
      var n = 1e3
        , r = 6e4
        , o = 36e5
        , a = "millisecond"
        , i = "second"
        , s = "minute"
        , l = "hour"
        , u = "day"
        , d = "week"
        , c = "month"
        , f = "quarter"
        , g = "year"
        , w = "date"
        , v = "Invalid Date"
        , x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
        , p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
        , h = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function(W) {
              var I = ["th", "st", "nd", "rd"]
                , R = W % 100;
              return "[" + W + (I[(R - 20) % 10] || I[R] || I[0]) + "]"
          }
      }
        , m = function(W, I, R) {
          var $ = String(W);
          return !$ || $.length >= I ? W : "" + Array(I + 1 - $.length).join(R) + W
      }
        , S = {
          s: m,
          z: function(W) {
              var I = -W.utcOffset()
                , R = Math.abs(I)
                , $ = Math.floor(R / 60)
                , P = R % 60;
              return (I <= 0 ? "+" : "-") + m($, 2, "0") + ":" + m(P, 2, "0")
          },
          m: function W(I, R) {
              if (I.date() < R.date())
                  return -W(R, I);
              var $ = 12 * (R.year() - I.year()) + (R.month() - I.month())
                , P = I.clone().add($, c)
                , T = R - P < 0
                , A = I.clone().add($ + (T ? -1 : 1), c);
              return +(-($ + (R - P) / (T ? P - A : A - P)) || 0)
          },
          a: function(W) {
              return W < 0 ? Math.ceil(W) || 0 : Math.floor(W)
          },
          p: function(W) {
              return {
                  M: c,
                  y: g,
                  w: d,
                  d: u,
                  D: w,
                  h: l,
                  m: s,
                  s: i,
                  ms: a,
                  Q: f
              }[W] || String(W || "").toLowerCase().replace(/s$/, "")
          },
          u: function(W) {
              return W === void 0
          }
      }
        , E = "en"
        , N = {};
      N[E] = h;
      var O = "$isDayjsObject"
        , k = function(W) {
          return W instanceof H || !(!W || !W[O])
      }
        , L = function W(I, R, $) {
          var P;
          if (!I)
              return E;
          if (typeof I == "string") {
              var T = I.toLowerCase();
              N[T] && (P = T),
              R && (N[T] = R,
              P = T);
              var A = I.split("-");
              if (!P && A.length > 1)
                  return W(A[0])
          } else {
              var B = I.name;
              N[B] = I,
              P = B
          }
          return !$ && P && (E = P),
          P || !$ && E
      }
        , _ = function(W, I) {
          if (k(W))
              return W.clone();
          var R = typeof I == "object" ? I : {};
          return R.date = W,
          R.args = arguments,
          new H(R)
      }
        , F = S;
      F.l = L,
      F.i = k,
      F.w = function(W, I) {
          return _(W, {
              locale: I.$L,
              utc: I.$u,
              x: I.$x,
              $offset: I.$offset
          })
      }
      ;
      var H = function() {
          function W(R) {
              this.$L = L(R.locale, null, !0),
              this.parse(R),
              this.$x = this.$x || R.x || {},
              this[O] = !0
          }
          var I = W.prototype;
          return I.parse = function(R) {
              this.$d = function($) {
                  var P = $.date
                    , T = $.utc;
                  if (P === null)
                      return new Date(NaN);
                  if (F.u(P))
                      return new Date;
                  if (P instanceof Date)
                      return new Date(P);
                  if (typeof P == "string" && !/Z$/i.test(P)) {
                      var A = P.match(x);
                      if (A) {
                          var B = A[2] - 1 || 0
                            , K = (A[7] || "0").substring(0, 3);
                          return T ? new Date(Date.UTC(A[1], B, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, K)) : new Date(A[1],B,A[3] || 1,A[4] || 0,A[5] || 0,A[6] || 0,K)
                      }
                  }
                  return new Date(P)
              }(R),
              this.init()
          }
          ,
          I.init = function() {
              var R = this.$d;
              this.$y = R.getFullYear(),
              this.$M = R.getMonth(),
              this.$D = R.getDate(),
              this.$W = R.getDay(),
              this.$H = R.getHours(),
              this.$m = R.getMinutes(),
              this.$s = R.getSeconds(),
              this.$ms = R.getMilliseconds()
          }
          ,
          I.$utils = function() {
              return F
          }
          ,
          I.isValid = function() {
              return this.$d.toString() !== v
          }
          ,
          I.isSame = function(R, $) {
              var P = _(R);
              return this.startOf($) <= P && P <= this.endOf($)
          }
          ,
          I.isAfter = function(R, $) {
              return _(R) < this.startOf($)
          }
          ,
          I.isBefore = function(R, $) {
              return this.endOf($) < _(R)
          }
          ,
          I.$g = function(R, $, P) {
              return F.u(R) ? this[$] : this.set(P, R)
          }
          ,
          I.unix = function() {
              return Math.floor(this.valueOf() / 1e3)
          }
          ,
          I.valueOf = function() {
              return this.$d.getTime()
          }
          ,
          I.startOf = function(R, $) {
              var P = this
                , T = !!F.u($) || $
                , A = F.p(R)
                , B = function(be, re) {
                  var le = F.w(P.$u ? Date.UTC(P.$y, re, be) : new Date(P.$y,re,be), P);
                  return T ? le : le.endOf(u)
              }
                , K = function(be, re) {
                  return F.w(P.toDate()[be].apply(P.toDate("s"), (T ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), P)
              }
                , oe = this.$W
                , ie = this.$M
                , ge = this.$D
                , fe = "set" + (this.$u ? "UTC" : "");
              switch (A) {
              case g:
                  return T ? B(1, 0) : B(31, 11);
              case c:
                  return T ? B(1, ie) : B(0, ie + 1);
              case d:
                  var V = this.$locale().weekStart || 0
                    , se = (oe < V ? oe + 7 : oe) - V;
                  return B(T ? ge - se : ge + (6 - se), ie);
              case u:
              case w:
                  return K(fe + "Hours", 0);
              case l:
                  return K(fe + "Minutes", 1);
              case s:
                  return K(fe + "Seconds", 2);
              case i:
                  return K(fe + "Milliseconds", 3);
              default:
                  return this.clone()
              }
          }
          ,
          I.endOf = function(R) {
              return this.startOf(R, !1)
          }
          ,
          I.$set = function(R, $) {
              var P, T = F.p(R), A = "set" + (this.$u ? "UTC" : ""), B = (P = {},
              P[u] = A + "Date",
              P[w] = A + "Date",
              P[c] = A + "Month",
              P[g] = A + "FullYear",
              P[l] = A + "Hours",
              P[s] = A + "Minutes",
              P[i] = A + "Seconds",
              P[a] = A + "Milliseconds",
              P)[T], K = T === u ? this.$D + ($ - this.$W) : $;
              if (T === c || T === g) {
                  var oe = this.clone().set(w, 1);
                  oe.$d[B](K),
                  oe.init(),
                  this.$d = oe.set(w, Math.min(this.$D, oe.daysInMonth())).$d
              } else
                  B && this.$d[B](K);
              return this.init(),
              this
          }
          ,
          I.set = function(R, $) {
              return this.clone().$set(R, $)
          }
          ,
          I.get = function(R) {
              return this[F.p(R)]()
          }
          ,
          I.add = function(R, $) {
              var P, T = this;
              R = Number(R);
              var A = F.p($)
                , B = function(ie) {
                  var ge = _(T);
                  return F.w(ge.date(ge.date() + Math.round(ie * R)), T)
              };
              if (A === c)
                  return this.set(c, this.$M + R);
              if (A === g)
                  return this.set(g, this.$y + R);
              if (A === u)
                  return B(1);
              if (A === d)
                  return B(7);
              var K = (P = {},
              P[s] = r,
              P[l] = o,
              P[i] = n,
              P)[A] || 1
                , oe = this.$d.getTime() + R * K;
              return F.w(oe, this)
          }
          ,
          I.subtract = function(R, $) {
              return this.add(-1 * R, $)
          }
          ,
          I.format = function(R) {
              var $ = this
                , P = this.$locale();
              if (!this.isValid())
                  return P.invalidDate || v;
              var T = R || "YYYY-MM-DDTHH:mm:ssZ"
                , A = F.z(this)
                , B = this.$H
                , K = this.$m
                , oe = this.$M
                , ie = P.weekdays
                , ge = P.months
                , fe = P.meridiem
                , V = function(re, le, ue, Qe) {
                  return re && (re[le] || re($, T)) || ue[le].slice(0, Qe)
              }
                , se = function(re) {
                  return F.s(B % 12 || 12, re, "0")
              }
                , be = fe || function(re, le, ue) {
                  var Qe = re < 12 ? "AM" : "PM";
                  return ue ? Qe.toLowerCase() : Qe
              }
              ;
              return T.replace(p, function(re, le) {
                  return le || function(ue) {
                      switch (ue) {
                      case "YY":
                          return String($.$y).slice(-2);
                      case "YYYY":
                          return F.s($.$y, 4, "0");
                      case "M":
                          return oe + 1;
                      case "MM":
                          return F.s(oe + 1, 2, "0");
                      case "MMM":
                          return V(P.monthsShort, oe, ge, 3);
                      case "MMMM":
                          return V(ge, oe);
                      case "D":
                          return $.$D;
                      case "DD":
                          return F.s($.$D, 2, "0");
                      case "d":
                          return String($.$W);
                      case "dd":
                          return V(P.weekdaysMin, $.$W, ie, 2);
                      case "ddd":
                          return V(P.weekdaysShort, $.$W, ie, 3);
                      case "dddd":
                          return ie[$.$W];
                      case "H":
                          return String(B);
                      case "HH":
                          return F.s(B, 2, "0");
                      case "h":
                          return se(1);
                      case "hh":
                          return se(2);
                      case "a":
                          return be(B, K, !0);
                      case "A":
                          return be(B, K, !1);
                      case "m":
                          return String(K);
                      case "mm":
                          return F.s(K, 2, "0");
                      case "s":
                          return String($.$s);
                      case "ss":
                          return F.s($.$s, 2, "0");
                      case "SSS":
                          return F.s($.$ms, 3, "0");
                      case "Z":
                          return A
                      }
                      return null
                  }(re) || A.replace(":", "")
              })
          }
          ,
          I.utcOffset = function() {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }
          ,
          I.diff = function(R, $, P) {
              var T, A = this, B = F.p($), K = _(R), oe = (K.utcOffset() - this.utcOffset()) * r, ie = this - K, ge = function() {
                  return F.m(A, K)
              };
              switch (B) {
              case g:
                  T = ge() / 12;
                  break;
              case c:
                  T = ge();
                  break;
              case f:
                  T = ge() / 3;
                  break;
              case d:
                  T = (ie - oe) / 6048e5;
                  break;
              case u:
                  T = (ie - oe) / 864e5;
                  break;
              case l:
                  T = ie / o;
                  break;
              case s:
                  T = ie / r;
                  break;
              case i:
                  T = ie / n;
                  break;
              default:
                  T = ie
              }
              return P ? T : F.a(T)
          }
          ,
          I.daysInMonth = function() {
              return this.endOf(c).$D
          }
          ,
          I.$locale = function() {
              return N[this.$L]
          }
          ,
          I.locale = function(R, $) {
              if (!R)
                  return this.$L;
              var P = this.clone()
                , T = L(R, $, !0);
              return T && (P.$L = T),
              P
          }
          ,
          I.clone = function() {
              return F.w(this.$d, this)
          }
          ,
          I.toDate = function() {
              return new Date(this.valueOf())
          }
          ,
          I.toJSON = function() {
              return this.isValid() ? this.toISOString() : null
          }
          ,
          I.toISOString = function() {
              return this.$d.toISOString()
          }
          ,
          I.toString = function() {
              return this.$d.toUTCString()
          }
          ,
          W
      }()
        , J = H.prototype;
      return _.prototype = J,
      [["$ms", a], ["$s", i], ["$m", s], ["$H", l], ["$W", u], ["$M", c], ["$y", g], ["$D", w]].forEach(function(W) {
          J[W[1]] = function(I) {
              return this.$g(I, W[0], W[1])
          }
      }),
      _.extend = function(W, I) {
          return W.$i || (W(I, H, _),
          W.$i = !0),
          _
      }
      ,
      _.locale = L,
      _.isDayjs = k,
      _.unix = function(W) {
          return _(1e3 * W)
      }
      ,
      _.en = N[E],
      _.Ls = N,
      _.p = {},
      _
  })
}
)(b0);
var DC = b0.exports;
const $l = eu(DC)
, TC = e => {
  const {todo: t, updateTodo: n} = e
    , r = o => {
      const a = {
          ...t,
          isDone: o.target.checked
      };
      n(a)
  }
  ;
  return b.jsxs("div", {
      className: "flex flex-row space-x-2 items-baseline",
      children: [b.jsx("input", {
          id: t.id,
          type: "checkbox",
          checked: t.isDone,
          onChange: r
      }), b.jsx("label", {
          htmlFor: t.id,
          className: ka("", t.isDone && "line-through"),
          children: t.name
      }), b.jsxs("span", {
          className: "text-sm text-gray-500",
          children: ["（優先度: ", t.priority, "）"]
      }), t.deadline && b.jsx("span", {
          className: "text-sm text-gray-500",
          children: $l(t.deadline).format("YYYY/MM/DD HH:mm")
      })]
  })
}
;
var dt = [];
for (var Sc = 0; Sc < 256; ++Sc)
  dt.push((Sc + 256).toString(16).slice(1));
function RC(e, t=0) {
  return (dt[e[t + 0]] + dt[e[t + 1]] + dt[e[t + 2]] + dt[e[t + 3]] + "-" + dt[e[t + 4]] + dt[e[t + 5]] + "-" + dt[e[t + 6]] + dt[e[t + 7]] + "-" + dt[e[t + 8]] + dt[e[t + 9]] + "-" + dt[e[t + 10]] + dt[e[t + 11]] + dt[e[t + 12]] + dt[e[t + 13]] + dt[e[t + 14]] + dt[e[t + 15]]).toLowerCase()
}
var $s, _C = new Uint8Array(16);
function AC() {
  if (!$s && ($s = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
  !$s))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return $s(_C)
}
var jC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Np = {
  randomUUID: jC
};
function un(e, t, n) {
  if (Np.randomUUID && !t && !e)
      return Np.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || AC)();
  return r[6] = r[6] & 15 | 64,
  r[8] = r[8] & 63 | 128,
  RC(r)
}
const IC = e => {
  const {addTodo: t} = e
    , [n,r] = y.useState("")
    , [o,a] = y.useState(3)
    , [i,s] = y.useState(void 0)
    , l = f => {
      f.preventDefault();
      const g = {
          id: un(),
          name: n,
          isDone: !1,
          priority: o,
          deadline: i
      };
      t(g),
      r(""),
      a(3),
      s(void 0)
  }
    , u = f => {
      r(f.target.value)
  }
    , d = f => {
      a(Number(f.target.value))
  }
    , c = f => {
      const g = f.target.value;
      s(g ? new Date(g) : void 0)
  }
  ;
  return b.jsx("div", {
      children: b.jsxs("div", {
          className: "border rounded-md p-3 space-y-3",
          children: [b.jsx("h2", {
              className: "font-bold text-lg",
              children: "Todoの新規作成"
          }), b.jsx("form", {
              children: b.jsxs("div", {
                  className: "space-y-2",
                  children: [b.jsxs("div", {
                      className: "flex items-center gap-x-2",
                      children: [b.jsx("label", {
                          htmlFor: "todoName",
                          className: "font-bold",
                          children: "タイトル"
                      }), b.jsx("input", {
                          id: "todoName",
                          type: "text",
                          value: n,
                          onChange: u,
                          className: "border border-gray-400 rounded-md px-2 py-0.5"
                      })]
                  }), b.jsxs("div", {
                      className: "flex gap-5",
                      children: [b.jsx("div", {
                          className: "font-bold",
                          children: "優先度"
                      }), [1, 2, 3].map(f => b.jsxs("label", {
                          className: "flex items-center space-x-1",
                          children: [b.jsx("input", {
                              id: `priority-${f}`,
                              name: "priorityGroup",
                              type: "radio",
                              value: f,
                              checked: o === f,
                              onChange: d
                          }), b.jsx("span", {
                              children: f
                          })]
                      }, f))]
                  }), b.jsxs("div", {
                      className: "flex items-center gap-x-2",
                      children: [b.jsx("label", {
                          htmlFor: "deadline",
                          className: "font-bold",
                          children: "期限"
                      }), b.jsx("input", {
                          type: "datetime-local",
                          id: "deadline",
                          value: i ? $l(i).format("YYYY-MM-DDTHH:mm") : "",
                          onChange: c,
                          className: "border border-gray-400 rounded-md px-2 py-0.5"
                      })]
                  }), b.jsx("button", {
                      type: "submit",
                      onClick: l,
                      className: "bg-blue-500 text-sm font-bold rounded-md text-white px-2 py-1 hover:bg-blue-700",
                      children: "追加"
                  })]
              })
          })]
      })
  })
}
, LC = [{
  id: un(),
  name: "Reactの勉強 (予習)",
  isDone: !1,
  priority: 3,
  deadline: void 0
}, {
  id: un(),
  name: "TypeScriptの勉強 (復習)",
  isDone: !0,
  priority: 2,
  deadline: void 0
}, {
  id: un(),
  name: "基礎物理学3の宿題",
  isDone: !1,
  priority: 1,
  deadline: new Date(2024,10,11)
}, {
  id: un(),
  name: "解析2の宿題",
  isDone: !1,
  priority: 1,
  deadline: new Date(2024,10,16,17)
}];
function FC() {
  const e = "myTodoApp"
    , [t,n] = y.useState([]);
  y.useEffect( () => {
      const s = localStorage.getItem(e);
      if (s && s !== "[]") {
          const u = JSON.parse(s).map(d => ({
              ...d,
              deadline: d.deadline ? new Date(d.deadline) : void 0
          }));
          n(u)
      } else
          n(LC)
  }
  , []);
  const r = s => {
      const l = t.map(u => u.id === s.id ? s : u);
      n(l)
  }
    , o = s => {
      n([...t, s])
  }
    , a = () => {
      localStorage.setItem(e, JSON.stringify(t))
  }
    , i = () => {
      const s = t.filter(l => !l.isDone);
      n(s)
  }
  ;
  return b.jsxs("main", {
      className: "mx-auto mt-14 w-full max-w-2xl px-5 md:px-0",
      children: [b.jsxs("div", {
          className: "mb-6 space-y-2",
          children: [b.jsx("h1", {
              className: "text-2xl font-bold",
              children: "TodoApp Demo"
          }), b.jsx("div", {
              className: "text-sm text-gray-500 ml-2",
              children: "合格水準ギリギリのサンプル（60点）"
          })]
      }), b.jsxs("div", {
          className: "space-y-4",
          children: [b.jsx("div", {
              children: t.map(s => b.jsx(TC, {
                  todo: s,
                  updateTodo: r
              }, s.id))
          }), b.jsxs("div", {
              className: "space-x-2",
              children: [b.jsx("button", {
                  onClick: i,
                  className: "bg-red-500 text-sm font-bold rounded-md text-white px-2 py-1 hover:bg-red-700",
                  children: "完了済みのTodoを削除"
              }), b.jsx("button", {
                  type: "button",
                  onClick: a,
                  className: "bg-blue-500 text-sm font-bold rounded-md text-white px-2 py-1 hover:bg-blue-700",
                  children: "保存"
              })]
          }), b.jsx(IC, {
              addTodo: o
          })]
      })]
  })
}
function WC(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function S0(...e) {
  return t => e.forEach(n => WC(n, t))
}
function He(...e) {
  return y.useCallback(S0(...e), e)
}
var Wr = y.forwardRef( (e, t) => {
  const {children: n, ...r} = e
    , o = y.Children.toArray(n)
    , a = o.find(zC);
  if (a) {
      const i = a.props.children
        , s = o.map(l => l === a ? y.Children.count(i) > 1 ? y.Children.only(null) : y.isValidElement(i) ? i.props.children : null : l);
      return b.jsx(Wd, {
          ...r,
          ref: t,
          children: y.isValidElement(i) ? y.cloneElement(i, void 0, s) : null
      })
  }
  return b.jsx(Wd, {
      ...r,
      ref: t,
      children: n
  })
}
);
Wr.displayName = "Slot";
var Wd = y.forwardRef( (e, t) => {
  const {children: n, ...r} = e;
  if (y.isValidElement(n)) {
      const o = HC(n);
      return y.cloneElement(n, {
          ...BC(r, n.props),
          ref: t ? S0(t, o) : o
      })
  }
  return y.Children.count(n) > 1 ? y.Children.only(null) : null
}
);
Wd.displayName = "SlotClone";
var $C = ({children: e}) => b.jsx(b.Fragment, {
  children: e
});
function zC(e) {
  return y.isValidElement(e) && e.type === $C
}
function BC(e, t) {
  const n = {
      ...t
  };
  for (const r in t) {
      const o = e[r]
        , a = t[r];
      /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
          a(...s),
          o(...s)
      }
      : o && (n[r] = o) : r === "style" ? n[r] = {
          ...o,
          ...a
      } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "))
  }
  return {
      ...e,
      ...n
  }
}
function HC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
    , n = t && "isReactWarning"in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
  n = t && "isReactWarning"in t && t.isReactWarning,
  n ? e.props.ref : e.props.ref || e.ref)
}
function k0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
      r += e;
  else if (typeof e == "object")
      if (Array.isArray(e))
          for (t = 0; t < e.length; t++)
              e[t] && (n = k0(e[t])) && (r && (r += " "),
              r += n);
      else
          for (t in e)
              e[t] && (r && (r += " "),
              r += t);
  return r
}
function UC() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
      (e = arguments[n++]) && (t = k0(e)) && (r && (r += " "),
      r += t);
  return r
}
const Op = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e
, Dp = UC
, YC = (e, t) => n => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
      return Dp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const {variants: o, defaultVariants: a} = t
    , i = Object.keys(o).map(u => {
      const d = n == null ? void 0 : n[u]
        , c = a == null ? void 0 : a[u];
      if (d === null)
          return null;
      const f = Op(d) || Op(c);
      return o[u][f]
  }
  )
    , s = n && Object.entries(n).reduce( (u, d) => {
      let[c,f] = d;
      return f === void 0 || (u[c] = f),
      u
  }
  , {})
    , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
      let {class: c, className: f, ...g} = d;
      return Object.entries(g).every(w => {
          let[v,x] = w;
          return Array.isArray(x) ? x.includes({
              ...a,
              ...s
          }[v]) : {
              ...a,
              ...s
          }[v] === x
      }
      ) ? [...u, c, f] : u
  }
  , []);
  return Dp(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
function C0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
      r += e;
  else if (typeof e == "object")
      if (Array.isArray(e)) {
          var o = e.length;
          for (t = 0; t < o; t++)
              e[t] && (n = C0(e[t])) && (r && (r += " "),
              r += n)
      } else
          for (n in e)
              e[n] && (r && (r += " "),
              r += n);
  return r
}
function VC() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = C0(e)) && (r && (r += " "),
      r += t);
  return r
}
function _e(...e) {
  return ka(VC(e))
}
const sl = YC("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300", {
  variants: {
      variant: {
          default: "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
          destructive: "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
          outline: "border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          secondary: "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
          ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9"
      }
  },
  defaultVariants: {
      variant: "default",
      size: "default"
  }
})
, cn = y.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, a) => {
  const i = r ? Wr : "button";
  return b.jsx(i, {
      className: _e(sl({
          variant: t,
          size: n,
          className: e
      })),
      ref: a,
      ...o
  })
}
);
cn.displayName = "Button";
function GC(e, t) {
  const n = y.createContext(t)
    , r = a => {
      const {children: i, ...s} = a
        , l = y.useMemo( () => s, Object.values(s));
      return b.jsx(n.Provider, {
          value: l,
          children: i
      })
  }
  ;
  r.displayName = e + "Provider";
  function o(a) {
      const i = y.useContext(n);
      if (i)
          return i;
      if (t !== void 0)
          return t;
      throw new Error(`\`${a}\` must be used within \`${e}\``)
  }
  return [r, o]
}
function wu(e, t=[]) {
  let n = [];
  function r(a, i) {
      const s = y.createContext(i)
        , l = n.length;
      n = [...n, i];
      const u = c => {
          var p;
          const {scope: f, children: g, ...w} = c
            , v = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || s
            , x = y.useMemo( () => w, Object.values(w));
          return b.jsx(v.Provider, {
              value: x,
              children: g
          })
      }
      ;
      u.displayName = a + "Provider";
      function d(c, f) {
          var v;
          const g = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || s
            , w = y.useContext(g);
          if (w)
              return w;
          if (i !== void 0)
              return i;
          throw new Error(`\`${c}\` must be used within \`${a}\``)
      }
      return [u, d]
  }
  const o = () => {
      const a = n.map(i => y.createContext(i));
      return function(s) {
          const l = (s == null ? void 0 : s[e]) || a;
          return y.useMemo( () => ({
              [`__scope${e}`]: {
                  ...s,
                  [e]: l
              }
          }), [s, l])
      }
  }
  ;
  return o.scopeName = e,
  [r, XC(o, ...t)]
}
function XC(...e) {
  const t = e[0];
  if (e.length === 1)
      return t;
  const n = () => {
      const r = e.map(o => ({
          useScope: o(),
          scopeName: o.scopeName
      }));
      return function(a) {
          const i = r.reduce( (s, {useScope: l, scopeName: u}) => {
              const c = l(a)[`__scope${u}`];
              return {
                  ...s,
                  ...c
              }
          }
          , {});
          return y.useMemo( () => ({
              [`__scope${t.scopeName}`]: i
          }), [i])
      }
  }
  ;
  return n.scopeName = t.scopeName,
  n
}
function we(e, t, {checkForDefaultPrevented: n=!0}={}) {
  return function(o) {
      if (e == null || e(o),
      n === !1 || !o.defaultPrevented)
          return t == null ? void 0 : t(o)
  }
}
function er(e) {
  const t = y.useRef(e);
  return y.useEffect( () => {
      t.current = e
  }
  ),
  y.useMemo( () => (...n) => {
      var r;
      return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }
  , [])
}
function zi({prop: e, defaultProp: t, onChange: n= () => {}
}) {
  const [r,o] = QC({
      defaultProp: t,
      onChange: n
  })
    , a = e !== void 0
    , i = a ? e : r
    , s = er(n)
    , l = y.useCallback(u => {
      if (a) {
          const c = typeof u == "function" ? u(e) : u;
          c !== e && s(c)
      } else
          o(u)
  }
  , [a, e, o, s]);
  return [i, l]
}
function QC({defaultProp: e, onChange: t}) {
  const n = y.useState(e)
    , [r] = n
    , o = y.useRef(r)
    , a = er(t);
  return y.useEffect( () => {
      o.current !== r && (a(r),
      o.current = r)
  }
  , [r, o, a]),
  n
}
function E0(e) {
  const t = y.useRef({
      value: e,
      previous: e
  });
  return y.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
  t.current.value = e),
  t.current.previous), [e])
}
var kt = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {}
;
function P0(e) {
  const [t,n] = y.useState(void 0);
  return kt( () => {
      if (e) {
          n({
              width: e.offsetWidth,
              height: e.offsetHeight
          });
          const r = new ResizeObserver(o => {
              if (!Array.isArray(o) || !o.length)
                  return;
              const a = o[0];
              let i, s;
              if ("borderBoxSize"in a) {
                  const l = a.borderBoxSize
                    , u = Array.isArray(l) ? l[0] : l;
                  i = u.inlineSize,
                  s = u.blockSize
              } else
                  i = e.offsetWidth,
                  s = e.offsetHeight;
              n({
                  width: i,
                  height: s
              })
          }
          );
          return r.observe(e, {
              box: "border-box"
          }),
          () => r.unobserve(e)
      } else
          n(void 0)
  }
  , [e]),
  t
}
function KC(e, t) {
  return y.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Do = e => {
  const {present: t, children: n} = e
    , r = qC(t)
    , o = typeof n == "function" ? n({
      present: r.isPresent
  }) : y.Children.only(n)
    , a = He(r.ref, ZC(o));
  return typeof n == "function" || r.isPresent ? y.cloneElement(o, {
      ref: a
  }) : null
}
;
Do.displayName = "Presence";
function qC(e) {
  const [t,n] = y.useState()
    , r = y.useRef({})
    , o = y.useRef(e)
    , a = y.useRef("none")
    , i = e ? "mounted" : "unmounted"
    , [s,l] = KC(i, {
      mounted: {
          UNMOUNT: "unmounted",
          ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
          MOUNT: "mounted",
          ANIMATION_END: "unmounted"
      },
      unmounted: {
          MOUNT: "mounted"
      }
  });
  return y.useEffect( () => {
      const u = zs(r.current);
      a.current = s === "mounted" ? u : "none"
  }
  , [s]),
  kt( () => {
      const u = r.current
        , d = o.current;
      if (d !== e) {
          const f = a.current
            , g = zs(u);
          e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && f !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          o.current = e
      }
  }
  , [e, l]),
  kt( () => {
      if (t) {
          let u;
          const d = t.ownerDocument.defaultView ?? window
            , c = g => {
              const v = zs(r.current).includes(g.animationName);
              if (g.target === t && v && (l("ANIMATION_END"),
              !o.current)) {
                  const x = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards",
                  u = d.setTimeout( () => {
                      t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                  }
                  )
              }
          }
            , f = g => {
              g.target === t && (a.current = zs(r.current))
          }
          ;
          return t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
              d.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c)
          }
      } else
          l("ANIMATION_END")
  }
  , [t, l]),
  {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: y.useCallback(u => {
          u && (r.current = getComputedStyle(u)),
          n(u)
      }
      , [])
  }
}
function zs(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}
function ZC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
    , n = t && "isReactWarning"in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
  n = t && "isReactWarning"in t && t.isReactWarning,
  n ? e.props.ref : e.props.ref || e.ref)
}
var JC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
, Ne = JC.reduce( (e, t) => {
  const n = y.forwardRef( (r, o) => {
      const {asChild: a, ...i} = r
        , s = a ? Wr : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
      b.jsx(s, {
          ...i,
          ref: o
      })
  }
  );
  return n.displayName = `Primitive.${t}`,
  {
      ...e,
      [t]: n
  }
}
, {});
function eE(e, t) {
  e && Ra.flushSync( () => e.dispatchEvent(t))
}
var yh = "Checkbox"
, [tE,G_] = wu(yh)
, [nE,rE] = tE(yh)
, M0 = y.forwardRef( (e, t) => {
  const {__scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: i, disabled: s, value: l="on", onCheckedChange: u, form: d, ...c} = e
    , [f,g] = y.useState(null)
    , w = He(t, S => g(S))
    , v = y.useRef(!1)
    , x = f ? d || !!f.closest("form") : !0
    , [p=!1,h] = zi({
      prop: o,
      defaultProp: a,
      onChange: u
  })
    , m = y.useRef(p);
  return y.useEffect( () => {
      const S = f == null ? void 0 : f.form;
      if (S) {
          const E = () => h(m.current);
          return S.addEventListener("reset", E),
          () => S.removeEventListener("reset", E)
      }
  }
  , [f, h]),
  b.jsxs(nE, {
      scope: n,
      state: p,
      disabled: s,
      children: [b.jsx(Ne.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": Ir(p) ? "mixed" : p,
          "aria-required": i,
          "data-state": D0(p),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...c,
          ref: w,
          onKeyDown: we(e.onKeyDown, S => {
              S.key === "Enter" && S.preventDefault()
          }
          ),
          onClick: we(e.onClick, S => {
              h(E => Ir(E) ? !0 : !E),
              x && (v.current = S.isPropagationStopped(),
              v.current || S.stopPropagation())
          }
          )
      }), x && b.jsx(oE, {
          control: f,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: p,
          required: i,
          disabled: s,
          form: d,
          style: {
              transform: "translateX(-100%)"
          },
          defaultChecked: Ir(a) ? !1 : a
      })]
  })
}
);
M0.displayName = yh;
var N0 = "CheckboxIndicator"
, O0 = y.forwardRef( (e, t) => {
  const {__scopeCheckbox: n, forceMount: r, ...o} = e
    , a = rE(N0, n);
  return b.jsx(Do, {
      present: r || Ir(a.state) || a.state === !0,
      children: b.jsx(Ne.span, {
          "data-state": D0(a.state),
          "data-disabled": a.disabled ? "" : void 0,
          ...o,
          ref: t,
          style: {
              pointerEvents: "none",
              ...e.style
          }
      })
  })
}
);
O0.displayName = N0;
var oE = e => {
  const {control: t, checked: n, bubbles: r=!0, defaultChecked: o, ...a} = e
    , i = y.useRef(null)
    , s = E0(n)
    , l = P0(t);
  y.useEffect( () => {
      const d = i.current
        , c = window.HTMLInputElement.prototype
        , g = Object.getOwnPropertyDescriptor(c, "checked").set;
      if (s !== n && g) {
          const w = new Event("click",{
              bubbles: r
          });
          d.indeterminate = Ir(n),
          g.call(d, Ir(n) ? !1 : n),
          d.dispatchEvent(w)
      }
  }
  , [s, n, r]);
  const u = y.useRef(Ir(n) ? !1 : n);
  return b.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? u.current,
      ...a,
      tabIndex: -1,
      ref: i,
      style: {
          ...e.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
      }
  })
}
;
function Ir(e) {
  return e === "indeterminate"
}
function D0(e) {
  return Ir(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
var T0 = M0
, aE = O0;
function rs(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
      o = r[a],
      !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n
}
var iE = ["color"]
, sE = y.forwardRef(function(e, t) {
  var n = e.color
    , r = n === void 0 ? "currentColor" : n
    , o = rs(e, iE);
  return y.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
  }, o, {
      ref: t
  }), y.createElement("path", {
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
  }))
})
, lE = ["color"]
, R0 = y.forwardRef(function(e, t) {
  var n = e.color
    , r = n === void 0 ? "currentColor" : n
    , o = rs(e, lE);
  return y.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
  }, o, {
      ref: t
  }), y.createElement("path", {
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
  }))
})
, uE = ["color"]
, cE = y.forwardRef(function(e, t) {
  var n = e.color
    , r = n === void 0 ? "currentColor" : n
    , o = rs(e, uE);
  return y.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
  }, o, {
      ref: t
  }), y.createElement("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
  }))
})
, dE = ["color"]
, fE = y.forwardRef(function(e, t) {
  var n = e.color
    , r = n === void 0 ? "currentColor" : n
    , o = rs(e, dE);
  return y.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
  }, o, {
      ref: t
  }), y.createElement("path", {
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
  }))
})
, hE = ["color"]
, mE = y.forwardRef(function(e, t) {
  var n = e.color
    , r = n === void 0 ? "currentColor" : n
    , o = rs(e, hE);
  return y.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
  }, o, {
      ref: t
  }), y.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
  }))
});
const _0 = y.forwardRef( ({className: e, ...t}, n) => b.jsx(T0, {
  ref: n,
  className: _e("peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900", e),
  ...t,
  children: b.jsx(aE, {
      className: _e("flex items-center justify-center text-current"),
      children: b.jsx(R0, {
          className: "h-4 w-4"
      })
  })
}));
_0.displayName = T0.displayName;
const Tp = () => {}
;
let wh = {}
, A0 = {}
, j0 = null
, I0 = {
  mark: Tp,
  measure: Tp
};
try {
  typeof window < "u" && (wh = window),
  typeof document < "u" && (A0 = document),
  typeof MutationObserver < "u" && (j0 = MutationObserver),
  typeof performance < "u" && (I0 = performance)
} catch {}
const {userAgent: Rp=""} = wh.navigator || {}
, $r = wh
, $e = A0
, _p = j0
, Bs = I0;
$r.document;
const ir = !!$e.documentElement && !!$e.head && typeof $e.addEventListener == "function" && typeof $e.createElement == "function"
, L0 = ~Rp.indexOf("MSIE") || ~Rp.indexOf("Trident/");
var Be = "classic"
, F0 = "duotone"
, $t = "sharp"
, zt = "sharp-duotone"
, pE = [Be, F0, $t, zt]
, gE = {
  classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
  },
  sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
  },
  "sharp-duotone": {
      900: "fasds"
  }
}
, Ap = {
  kit: {
      fak: "kit",
      "fa-kit": "kit"
  },
  "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
  }
}
, vE = ["kit"]
, yE = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/
, wE = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
, xE = {
  "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
  },
  "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
  },
  "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
  },
  "Font Awesome 5 Duotone": {
      900: "fad"
  }
}
, bE = {
  "Font Awesome 6 Free": {
      900: "fas",
      400: "far"
  },
  "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
  },
  "Font Awesome 6 Brands": {
      400: "fab",
      normal: "fab"
  },
  "Font Awesome 6 Duotone": {
      900: "fad"
  },
  "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
      900: "fasds"
  }
}
, SE = {
  classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
  },
  sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
  },
  "sharp-duotone": {
      "fa-solid": "fasds"
  }
}
, kE = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}
, CE = {
  classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
  },
  sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
  },
  "sharp-duotone": {
      fasds: "fa-solid"
  }
}
, EE = {
  classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab"
  },
  sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
  },
  "sharp-duotone": {
      solid: "fasds"
  }
}
, W0 = {
  classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands"
  },
  sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
  },
  "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid"
  }
}
, PE = ["solid", "regular", "light", "thin", "duotone", "brands"]
, $0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
, ME = $0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
, ai = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}
, NE = [...Object.keys(kE), ...PE, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ai.GROUP, ai.SWAP_OPACITY, ai.PRIMARY, ai.SECONDARY].concat($0.map(e => "".concat(e, "x"))).concat(ME.map(e => "w-".concat(e)))
, OE = {
  "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
  },
  "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
  }
}
, DE = {
  kit: {
      "fa-kit": "fak"
  },
  "kit-duotone": {
      "fa-kit-duotone": "fakd"
  }
}
, TE = {
  kit: {
      fak: "fa-kit"
  },
  "kit-duotone": {
      fakd: "fa-kit-duotone"
  }
}
, jp = {
  kit: {
      kit: "fak"
  },
  "kit-duotone": {
      "kit-duotone": "fakd"
  }
};
const tr = "___FONT_AWESOME___"
, $d = 16
, z0 = "fa"
, B0 = "svg-inline--fa"
, ko = "data-fa-i2svg"
, zd = "data-fa-pseudo-element"
, RE = "data-fa-pseudo-element-pending"
, xh = "data-prefix"
, bh = "data-icon"
, Ip = "fontawesome-i2svg"
, _E = "async"
, AE = ["HTML", "HEAD", "STYLE", "SCRIPT"]
, H0 = ( () => {
  try {
      return !0
  } catch {
      return !1
  }
}
)()
, U0 = [Be, $t, zt];
function os(e) {
  return new Proxy(e,{
      get(t, n) {
          return n in t ? t[n] : t[Be]
      }
  })
}
const Y0 = {
  ...W0
};
Y0[Be] = {
  ...W0[Be],
  ...Ap.kit,
  ...Ap["kit-duotone"]
};
const po = os(Y0)
, Bd = {
  ...EE
};
Bd[Be] = {
  ...Bd[Be],
  ...jp.kit,
  ...jp["kit-duotone"]
};
const Bi = os(Bd)
, Hd = {
  ...CE
};
Hd[Be] = {
  ...Hd[Be],
  ...TE.kit
};
const go = os(Hd)
, Ud = {
  ...SE
};
Ud[Be] = {
  ...Ud[Be],
  ...DE.kit
};
const jE = os(Ud)
, IE = yE
, V0 = "fa-layers-text"
, LE = wE
, FE = {
  ...gE
};
os(FE);
const WE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
, kc = ai
, Ca = new Set;
Object.keys(Bi[Be]).map(Ca.add.bind(Ca));
Object.keys(Bi[$t]).map(Ca.add.bind(Ca));
Object.keys(Bi[zt]).map(Ca.add.bind(Ca));
const $E = [...vE, ...NE]
, yi = $r.FontAwesomeConfig || {};
function zE(e) {
  var t = $e.querySelector("script[" + e + "]");
  if (t)
      return t.getAttribute(e)
}
function BE(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
$e && typeof $e.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(t => {
  let[n,r] = t;
  const o = BE(zE(n));
  o != null && (yi[r] = o)
}
);
const G0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: z0,
  replacementClass: B0,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
yi.familyPrefix && (yi.cssPrefix = yi.familyPrefix);
const Ea = {
  ...G0,
  ...yi
};
Ea.autoReplaceSvg || (Ea.observeMutations = !1);
const Q = {};
Object.keys(G0).forEach(e => {
  Object.defineProperty(Q, e, {
      enumerable: !0,
      set: function(t) {
          Ea[e] = t,
          wi.forEach(n => n(Q))
      },
      get: function() {
          return Ea[e]
      }
  })
}
);
Object.defineProperty(Q, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
      Ea.cssPrefix = e,
      wi.forEach(t => t(Q))
  },
  get: function() {
      return Ea.cssPrefix
  }
});
$r.FontAwesomeConfig = Q;
const wi = [];
function HE(e) {
  return wi.push(e),
  () => {
      wi.splice(wi.indexOf(e), 1)
  }
}
const pr = $d
, On = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function UE(e) {
  if (!e || !ir)
      return;
  const t = $e.createElement("style");
  t.setAttribute("type", "text/css"),
  t.innerHTML = e;
  const n = $e.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
      const a = n[o]
        , i = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = a)
  }
  return $e.head.insertBefore(t, r),
  e
}
const YE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Hi() {
  let e = 12
    , t = "";
  for (; e-- > 0; )
      t += YE[Math.random() * 62 | 0];
  return t
}
function Aa(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
      t[n] = e[n];
  return t
}
function Sh(e) {
  return e.classList ? Aa(e.classList) : (e.getAttribute("class") || "").split(" ").filter(t => t)
}
function X0(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function VE(e) {
  return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, '="').concat(X0(e[n]), '" '), "").trim()
}
function xu(e) {
  return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "")
}
function kh(e) {
  return e.size !== On.size || e.x !== On.x || e.y !== On.y || e.rotate !== On.rotate || e.flipX || e.flipY
}
function GE(e) {
  let {transform: t, containerWidth: n, iconWidth: r} = e;
  const o = {
      transform: "translate(".concat(n / 2, " 256)")
  }
    , a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
    , i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
    , s = "rotate(".concat(t.rotate, " 0 0)")
    , l = {
      transform: "".concat(a, " ").concat(i, " ").concat(s)
  }
    , u = {
      transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
      outer: o,
      inner: l,
      path: u
  }
}
function XE(e) {
  let {transform: t, width: n=$d, height: r=$d, startCentered: o=!1} = e
    , a = "";
  return o && L0 ? a += "translate(".concat(t.x / pr - n / 2, "em, ").concat(t.y / pr - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / pr, "em), calc(-50% + ").concat(t.y / pr, "em)) ") : a += "translate(".concat(t.x / pr, "em, ").concat(t.y / pr, "em) "),
  a += "scale(".concat(t.size / pr * (t.flipX ? -1 : 1), ", ").concat(t.size / pr * (t.flipY ? -1 : 1), ") "),
  a += "rotate(".concat(t.rotate, "deg) "),
  a
}
var QE = `:root, :host {
--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
--fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
--fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
--fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
--fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
--fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
--fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
--fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
--fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
overflow: visible;
box-sizing: content-box;
}

.svg-inline--fa {
display: var(--fa-display, inline-block);
height: 1em;
overflow: visible;
vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
margin-right: var(--fa-pull-margin, 0.3em);
width: auto;
}
.svg-inline--fa.fa-pull-right {
margin-left: var(--fa-pull-margin, 0.3em);
width: auto;
}
.svg-inline--fa.fa-li {
width: var(--fa-li-width, 2em);
top: 0.25em;
}
.svg-inline--fa.fa-fw {
width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
bottom: 0;
left: 0;
margin: auto;
position: absolute;
right: 0;
top: 0;
}

.fa-layers-counter, .fa-layers-text {
display: inline-block;
position: absolute;
text-align: center;
}

.fa-layers {
display: inline-block;
height: 1em;
position: relative;
text-align: center;
vertical-align: -0.125em;
width: 1em;
}
.fa-layers svg.svg-inline--fa {
transform-origin: center center;
}

.fa-layers-text {
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
transform-origin: center center;
}

.fa-layers-counter {
background-color: var(--fa-counter-background-color, #ff253a);
border-radius: var(--fa-counter-border-radius, 1em);
box-sizing: border-box;
color: var(--fa-inverse, #fff);
line-height: var(--fa-counter-line-height, 1);
max-width: var(--fa-counter-max-width, 5em);
min-width: var(--fa-counter-min-width, 1.5em);
overflow: hidden;
padding: var(--fa-counter-padding, 0.25em 0.5em);
right: var(--fa-right, 0);
text-overflow: ellipsis;
top: var(--fa-top, 0);
transform: scale(var(--fa-counter-scale, 0.25));
transform-origin: top right;
}

.fa-layers-bottom-right {
bottom: var(--fa-bottom, 0);
right: var(--fa-right, 0);
top: auto;
transform: scale(var(--fa-layers-scale, 0.25));
transform-origin: bottom right;
}

.fa-layers-bottom-left {
bottom: var(--fa-bottom, 0);
left: var(--fa-left, 0);
right: auto;
top: auto;
transform: scale(var(--fa-layers-scale, 0.25));
transform-origin: bottom left;
}

.fa-layers-top-right {
top: var(--fa-top, 0);
right: var(--fa-right, 0);
transform: scale(var(--fa-layers-scale, 0.25));
transform-origin: top right;
}

.fa-layers-top-left {
left: var(--fa-left, 0);
right: auto;
top: var(--fa-top, 0);
transform: scale(var(--fa-layers-scale, 0.25));
transform-origin: top left;
}

.fa-1x {
font-size: 1em;
}

.fa-2x {
font-size: 2em;
}

.fa-3x {
font-size: 3em;
}

.fa-4x {
font-size: 4em;
}

.fa-5x {
font-size: 5em;
}

.fa-6x {
font-size: 6em;
}

.fa-7x {
font-size: 7em;
}

.fa-8x {
font-size: 8em;
}

.fa-9x {
font-size: 9em;
}

.fa-10x {
font-size: 10em;
}

.fa-2xs {
font-size: 0.625em;
line-height: 0.1em;
vertical-align: 0.225em;
}

.fa-xs {
font-size: 0.75em;
line-height: 0.0833333337em;
vertical-align: 0.125em;
}

.fa-sm {
font-size: 0.875em;
line-height: 0.0714285718em;
vertical-align: 0.0535714295em;
}

.fa-lg {
font-size: 1.25em;
line-height: 0.05em;
vertical-align: -0.075em;
}

.fa-xl {
font-size: 1.5em;
line-height: 0.0416666682em;
vertical-align: -0.125em;
}

.fa-2xl {
font-size: 2em;
line-height: 0.03125em;
vertical-align: -0.1875em;
}

.fa-fw {
text-align: center;
width: 1.25em;
}

.fa-ul {
list-style-type: none;
margin-left: var(--fa-li-margin, 2.5em);
padding-left: 0;
}
.fa-ul > li {
position: relative;
}

.fa-li {
left: calc(-1 * var(--fa-li-width, 2em));
position: absolute;
text-align: center;
width: var(--fa-li-width, 2em);
line-height: inherit;
}

.fa-border {
border-color: var(--fa-border-color, #eee);
border-radius: var(--fa-border-radius, 0.1em);
border-style: var(--fa-border-style, solid);
border-width: var(--fa-border-width, 0.08em);
padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
float: left;
margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
float: right;
margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
animation-name: fa-beat;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
animation-name: fa-bounce;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
animation-name: fa-fade;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
animation-name: fa-beat-fade;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
animation-name: fa-flip;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
animation-name: fa-shake;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
animation-name: fa-spin;
animation-delay: var(--fa-animation-delay, 0s);
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 2s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
--fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
animation-name: fa-spin;
animation-direction: var(--fa-animation-direction, normal);
animation-duration: var(--fa-animation-duration, 1s);
animation-iteration-count: var(--fa-animation-iteration-count, infinite);
animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
.fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
  animation-delay: -1ms;
  animation-duration: 1ms;
  animation-iteration-count: 1;
  transition-delay: 0s;
  transition-duration: 0s;
}
}
@keyframes fa-beat {
0%, 90% {
  transform: scale(1);
}
45% {
  transform: scale(var(--fa-beat-scale, 1.25));
}
}
@keyframes fa-bounce {
0% {
  transform: scale(1, 1) translateY(0);
}
10% {
  transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
}
30% {
  transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
}
50% {
  transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
}
57% {
  transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
}
64% {
  transform: scale(1, 1) translateY(0);
}
100% {
  transform: scale(1, 1) translateY(0);
}
}
@keyframes fa-fade {
50% {
  opacity: var(--fa-fade-opacity, 0.4);
}
}
@keyframes fa-beat-fade {
0%, 100% {
  opacity: var(--fa-beat-fade-opacity, 0.4);
  transform: scale(1);
}
50% {
  opacity: 1;
  transform: scale(var(--fa-beat-fade-scale, 1.125));
}
}
@keyframes fa-flip {
50% {
  transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
}
}
@keyframes fa-shake {
0% {
  transform: rotate(-15deg);
}
4% {
  transform: rotate(15deg);
}
8%, 24% {
  transform: rotate(-18deg);
}
12%, 28% {
  transform: rotate(18deg);
}
16% {
  transform: rotate(-22deg);
}
20% {
  transform: rotate(22deg);
}
32% {
  transform: rotate(-12deg);
}
36% {
  transform: rotate(12deg);
}
40%, 100% {
  transform: rotate(0deg);
}
}
@keyframes fa-spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
.fa-rotate-90 {
transform: rotate(90deg);
}

.fa-rotate-180 {
transform: rotate(180deg);
}

.fa-rotate-270 {
transform: rotate(270deg);
}

.fa-flip-horizontal {
transform: scale(-1, 1);
}

.fa-flip-vertical {
transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
transform: scale(-1, -1);
}

.fa-rotate-by {
transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
display: inline-block;
vertical-align: middle;
height: 2em;
position: relative;
width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
bottom: 0;
left: 0;
margin: auto;
position: absolute;
right: 0;
top: 0;
z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
height: 1em;
width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
height: 2em;
width: 2.5em;
}

.fa-inverse {
color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

.svg-inline--fa .fa-primary {
fill: var(--fa-primary-color, currentColor);
opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
fill: var(--fa-secondary-color, currentColor);
opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
color: var(--fa-inverse, #fff);
}`;
function Q0() {
  const e = z0
    , t = B0
    , n = Q.cssPrefix
    , r = Q.replacementClass;
  let o = QE;
  if (n !== e || r !== t) {
      const a = new RegExp("\\.".concat(e, "\\-"),"g")
        , i = new RegExp("\\--".concat(e, "\\-"),"g")
        , s = new RegExp("\\.".concat(t),"g");
      o = o.replace(a, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r))
  }
  return o
}
let Lp = !1;
function Cc() {
  Q.autoAddCss && !Lp && (UE(Q0()),
  Lp = !0)
}
var KE = {
  mixout() {
      return {
          dom: {
              css: Q0,
              insertCss: Cc
          }
      }
  },
  hooks() {
      return {
          beforeDOMElementCreation() {
              Cc()
          },
          beforeI2svg() {
              Cc()
          }
      }
  }
};
const nr = $r || {};
nr[tr] || (nr[tr] = {});
nr[tr].styles || (nr[tr].styles = {});
nr[tr].hooks || (nr[tr].hooks = {});
nr[tr].shims || (nr[tr].shims = []);
var Dn = nr[tr];
const K0 = []
, q0 = function() {
  $e.removeEventListener("DOMContentLoaded", q0),
  zl = 1,
  K0.map(e => e())
};
let zl = !1;
ir && (zl = ($e.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test($e.readyState),
zl || $e.addEventListener("DOMContentLoaded", q0));
function qE(e) {
  ir && (zl ? setTimeout(e, 0) : K0.push(e))
}
function as(e) {
  const {tag: t, attributes: n={}, children: r=[]} = e;
  return typeof e == "string" ? X0(e) : "<".concat(t, " ").concat(VE(n), ">").concat(r.map(as).join(""), "</").concat(t, ">")
}
function Fp(e, t, n) {
  if (e && e[t] && e[t][n])
      return {
          prefix: t,
          iconName: n,
          icon: e[t][n]
      }
}
var Ec = function(t, n, r, o) {
  var a = Object.keys(t), i = a.length, s = n, l, u, d;
  for (r === void 0 ? (l = 1,
  d = t[a[0]]) : (l = 0,
  d = r); l < i; l++)
      u = a[l],
      d = s(d, t[u], u, t);
  return d
};
function ZE(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
      const o = e.charCodeAt(n++);
      if (o >= 55296 && o <= 56319 && n < r) {
          const a = e.charCodeAt(n++);
          (a & 64512) == 56320 ? t.push(((o & 1023) << 10) + (a & 1023) + 65536) : (t.push(o),
          n--)
      } else
          t.push(o)
  }
  return t
}
function Yd(e) {
  const t = ZE(e);
  return t.length === 1 ? t[0].toString(16) : null
}
function JE(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1),
  o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r
}
function Wp(e) {
  return Object.keys(e).reduce( (t, n) => {
      const r = e[n];
      return !!r.icon ? t[r.iconName] = r.icon : t[n] = r,
      t
  }
  , {})
}
function Vd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {skipHooks: r=!1} = n
    , o = Wp(t);
  typeof Dn.hooks.addPack == "function" && !r ? Dn.hooks.addPack(e, Wp(t)) : Dn.styles[e] = {
      ...Dn.styles[e] || {},
      ...o
  },
  e === "fas" && Vd("fa", t)
}
const {styles: io, shims: eP} = Dn
, tP = {
  [Be]: Object.values(go[Be]),
  [$t]: Object.values(go[$t]),
  [zt]: Object.values(go[zt])
};
let Ch = null
, Z0 = {}
, J0 = {}
, e1 = {}
, t1 = {}
, n1 = {};
const nP = {
  [Be]: Object.keys(po[Be]),
  [$t]: Object.keys(po[$t]),
  [zt]: Object.keys(po[zt])
};
function rP(e) {
  return ~$E.indexOf(e)
}
function oP(e, t) {
  const n = t.split("-")
    , r = n[0]
    , o = n.slice(1).join("-");
  return r === e && o !== "" && !rP(o) ? o : null
}
const r1 = () => {
  const e = r => Ec(io, (o, a, i) => (o[i] = Ec(a, r, {}),
  o), {});
  Z0 = e( (r, o, a) => (o[3] && (r[o[3]] = a),
  o[2] && o[2].filter(s => typeof s == "number").forEach(s => {
      r[s.toString(16)] = a
  }
  ),
  r)),
  J0 = e( (r, o, a) => (r[a] = a,
  o[2] && o[2].filter(s => typeof s == "string").forEach(s => {
      r[s] = a
  }
  ),
  r)),
  n1 = e( (r, o, a) => {
      const i = o[2];
      return r[a] = a,
      i.forEach(s => {
          r[s] = a
      }
      ),
      r
  }
  );
  const t = "far"in io || Q.autoFetchSvg
    , n = Ec(eP, (r, o) => {
      const a = o[0];
      let i = o[1];
      const s = o[2];
      return i === "far" && !t && (i = "fas"),
      typeof a == "string" && (r.names[a] = {
          prefix: i,
          iconName: s
      }),
      typeof a == "number" && (r.unicodes[a.toString(16)] = {
          prefix: i,
          iconName: s
      }),
      r
  }
  , {
      names: {},
      unicodes: {}
  });
  e1 = n.names,
  t1 = n.unicodes,
  Ch = bu(Q.styleDefault, {
      family: Q.familyDefault
  })
}
;
HE(e => {
  Ch = bu(e.styleDefault, {
      family: Q.familyDefault
  })
}
);
r1();
function Eh(e, t) {
  return (Z0[e] || {})[t]
}
function aP(e, t) {
  return (J0[e] || {})[t]
}
function Mr(e, t) {
  return (n1[e] || {})[t]
}
function o1(e) {
  return e1[e] || {
      prefix: null,
      iconName: null
  }
}
function iP(e) {
  const t = t1[e]
    , n = Eh("fas", e);
  return t || (n ? {
      prefix: "fas",
      iconName: n
  } : null) || {
      prefix: null,
      iconName: null
  }
}
function zr() {
  return Ch
}
const Ph = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function bu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {family: n=Be} = t
    , r = po[n][e]
    , o = Bi[n][e] || Bi[n][r]
    , a = e in Dn.styles ? e : null;
  return o || a || null
}
const sP = {
  [Be]: Object.keys(go[Be]),
  [$t]: Object.keys(go[$t]),
  [zt]: Object.keys(go[zt])
};
function Su(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {skipLookups: n=!1} = t
    , r = {
      [Be]: "".concat(Q.cssPrefix, "-").concat(Be),
      [$t]: "".concat(Q.cssPrefix, "-").concat($t),
      [zt]: "".concat(Q.cssPrefix, "-").concat(zt)
  };
  let o = null
    , a = Be;
  const i = pE.filter(l => l !== F0);
  i.forEach(l => {
      (e.includes(r[l]) || e.some(u => sP[l].includes(u))) && (a = l)
  }
  );
  const s = e.reduce( (l, u) => {
      const d = oP(Q.cssPrefix, u);
      if (io[u] ? (u = tP[a].includes(u) ? jE[a][u] : u,
      o = u,
      l.prefix = u) : nP[a].indexOf(u) > -1 ? (o = u,
      l.prefix = bu(u, {
          family: a
      })) : d ? l.iconName = d : u !== Q.replacementClass && !i.some(c => u === r[c]) && l.rest.push(u),
      !n && l.prefix && l.iconName) {
          const c = o === "fa" ? o1(l.iconName) : {}
            , f = Mr(l.prefix, l.iconName);
          c.prefix && (o = null),
          l.iconName = c.iconName || f || l.iconName,
          l.prefix = c.prefix || l.prefix,
          l.prefix === "far" && !io.far && io.fas && !Q.autoFetchSvg && (l.prefix = "fas")
      }
      return l
  }
  , Ph());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
  (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
  !s.prefix && a === $t && (io.fass || Q.autoFetchSvg) && (s.prefix = "fass",
  s.iconName = Mr(s.prefix, s.iconName) || s.iconName),
  !s.prefix && a === zt && (io.fasds || Q.autoFetchSvg) && (s.prefix = "fasds",
  s.iconName = Mr(s.prefix, s.iconName) || s.iconName),
  (s.prefix === "fa" || o === "fa") && (s.prefix = zr() || "fas"),
  s
}
class lP {
  constructor() {
      this.definitions = {}
  }
  add() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
      const o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(a => {
          this.definitions[a] = {
              ...this.definitions[a] || {},
              ...o[a]
          },
          Vd(a, o[a]);
          const i = go[Be][a];
          i && Vd(i, o[a]),
          r1()
      }
      )
  }
  reset() {
      this.definitions = {}
  }
  _pullDefinitions(t, n) {
      const r = n.prefix && n.iconName && n.icon ? {
          0: n
      } : n;
      return Object.keys(r).map(o => {
          const {prefix: a, iconName: i, icon: s} = r[o]
            , l = s[2];
          t[a] || (t[a] = {}),
          l.length > 0 && l.forEach(u => {
              typeof u == "string" && (t[a][u] = s)
          }
          ),
          t[a][i] = s
      }
      ),
      t
  }
}
let $p = []
, ta = {};
const ca = {}
, uP = Object.keys(ca);
function cP(e, t) {
  let {mixoutsTo: n} = t;
  return $p = e,
  ta = {},
  Object.keys(ca).forEach(r => {
      uP.indexOf(r) === -1 && delete ca[r]
  }
  ),
  $p.forEach(r => {
      const o = r.mixout ? r.mixout() : {};
      if (Object.keys(o).forEach(a => {
          typeof o[a] == "function" && (n[a] = o[a]),
          typeof o[a] == "object" && Object.keys(o[a]).forEach(i => {
              n[a] || (n[a] = {}),
              n[a][i] = o[a][i]
          }
          )
      }
      ),
      r.hooks) {
          const a = r.hooks();
          Object.keys(a).forEach(i => {
              ta[i] || (ta[i] = []),
              ta[i].push(a[i])
          }
          )
      }
      r.provides && r.provides(ca)
  }
  ),
  n
}
function Gd(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o];
  return (ta[e] || []).forEach(i => {
      t = i.apply(null, [t, ...r])
  }
  ),
  t
}
function Co(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r];
  (ta[e] || []).forEach(a => {
      a.apply(null, n)
  }
  )
}
function Br() {
  const e = arguments[0]
    , t = Array.prototype.slice.call(arguments, 1);
  return ca[e] ? ca[e].apply(null, t) : void 0
}
function Xd(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {iconName: t} = e;
  const n = e.prefix || zr();
  if (t)
      return t = Mr(n, t) || t,
      Fp(a1.definitions, n, t) || Fp(Dn.styles, n, t)
}
const a1 = new lP
, dP = () => {
  Q.autoReplaceSvg = !1,
  Q.observeMutations = !1,
  Co("noAuto")
}
, fP = {
  i2svg: function() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ir ? (Co("beforeI2svg", e),
      Br("pseudoElements2svg", e),
      Br("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
  },
  watch: function() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const {autoReplaceSvgRoot: t} = e;
      Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0),
      Q.observeMutations = !0,
      qE( () => {
          mP({
              autoReplaceSvgRoot: t
          }),
          Co("watch", e)
      }
      )
  }
}
, hP = {
  icon: e => {
      if (e === null)
          return null;
      if (typeof e == "object" && e.prefix && e.iconName)
          return {
              prefix: e.prefix,
              iconName: Mr(e.prefix, e.iconName) || e.iconName
          };
      if (Array.isArray(e) && e.length === 2) {
          const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1]
            , n = bu(e[0]);
          return {
              prefix: n,
              iconName: Mr(n, t) || t
          }
      }
      if (typeof e == "string" && (e.indexOf("".concat(Q.cssPrefix, "-")) > -1 || e.match(IE))) {
          const t = Su(e.split(" "), {
              skipLookups: !0
          });
          return {
              prefix: t.prefix || zr(),
              iconName: Mr(t.prefix, t.iconName) || t.iconName
          }
      }
      if (typeof e == "string") {
          const t = zr();
          return {
              prefix: t,
              iconName: Mr(t, e) || e
          }
      }
  }
}
, Vt = {
  noAuto: dP,
  config: Q,
  dom: fP,
  parse: hP,
  library: a1,
  findIconDefinition: Xd,
  toHtml: as
}
, mP = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {autoReplaceSvgRoot: t=$e} = e;
  (Object.keys(Dn.styles).length > 0 || Q.autoFetchSvg) && ir && Q.autoReplaceSvg && Vt.dom.i2svg({
      node: t
  })
};
function ku(e, t) {
  return Object.defineProperty(e, "abstract", {
      get: t
  }),
  Object.defineProperty(e, "html", {
      get: function() {
          return e.abstract.map(n => as(n))
      }
  }),
  Object.defineProperty(e, "node", {
      get: function() {
          if (!ir)
              return;
          const n = $e.createElement("div");
          return n.innerHTML = e.html,
          n.children
      }
  }),
  e
}
function pP(e) {
  let {children: t, main: n, mask: r, attributes: o, styles: a, transform: i} = e;
  if (kh(i) && n.found && !r.found) {
      const {width: s, height: l} = n
        , u = {
          x: s / l / 2,
          y: .5
      };
      o.style = xu({
          ...a,
          "transform-origin": "".concat(u.x + i.x / 16, "em ").concat(u.y + i.y / 16, "em")
      })
  }
  return [{
      tag: "svg",
      attributes: o,
      children: t
  }]
}
function gP(e) {
  let {prefix: t, iconName: n, children: r, attributes: o, symbol: a} = e;
  const i = a === !0 ? "".concat(t, "-").concat(Q.cssPrefix, "-").concat(n) : a;
  return [{
      tag: "svg",
      attributes: {
          style: "display: none;"
      },
      children: [{
          tag: "symbol",
          attributes: {
              ...o,
              id: i
          },
          children: r
      }]
  }]
}
function Mh(e) {
  const {icons: {main: t, mask: n}, prefix: r, iconName: o, transform: a, symbol: i, title: s, maskId: l, titleId: u, extra: d, watchable: c=!1} = e
    , {width: f, height: g} = n.found ? n : t
    , w = r === "fak"
    , v = [Q.replacementClass, o ? "".concat(Q.cssPrefix, "-").concat(o) : ""].filter(E => d.classes.indexOf(E) === -1).filter(E => E !== "" || !!E).concat(d.classes).join(" ");
  let x = {
      children: [],
      attributes: {
          ...d.attributes,
          "data-prefix": r,
          "data-icon": o,
          class: v,
          role: d.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(f, " ").concat(g)
      }
  };
  const p = w && !~d.classes.indexOf("fa-fw") ? {
      width: "".concat(f / g * 16 * .0625, "em")
  } : {};
  c && (x.attributes[ko] = ""),
  s && (x.children.push({
      tag: "title",
      attributes: {
          id: x.attributes["aria-labelledby"] || "title-".concat(u || Hi())
      },
      children: [s]
  }),
  delete x.attributes.title);
  const h = {
      ...x,
      prefix: r,
      iconName: o,
      main: t,
      mask: n,
      maskId: l,
      transform: a,
      symbol: i,
      styles: {
          ...p,
          ...d.styles
      }
  }
    , {children: m, attributes: S} = n.found && t.found ? Br("generateAbstractMask", h) || {
      children: [],
      attributes: {}
  } : Br("generateAbstractIcon", h) || {
      children: [],
      attributes: {}
  };
  return h.children = m,
  h.attributes = S,
  i ? gP(h) : pP(h)
}
function zp(e) {
  const {content: t, width: n, height: r, transform: o, title: a, extra: i, watchable: s=!1} = e
    , l = {
      ...i.attributes,
      ...a ? {
          title: a
      } : {},
      class: i.classes.join(" ")
  };
  s && (l[ko] = "");
  const u = {
      ...i.styles
  };
  kh(o) && (u.transform = XE({
      transform: o,
      startCentered: !0,
      width: n,
      height: r
  }),
  u["-webkit-transform"] = u.transform);
  const d = xu(u);
  d.length > 0 && (l.style = d);
  const c = [];
  return c.push({
      tag: "span",
      attributes: l,
      children: [t]
  }),
  a && c.push({
      tag: "span",
      attributes: {
          class: "sr-only"
      },
      children: [a]
  }),
  c
}
function vP(e) {
  const {content: t, title: n, extra: r} = e
    , o = {
      ...r.attributes,
      ...n ? {
          title: n
      } : {},
      class: r.classes.join(" ")
  }
    , a = xu(r.styles);
  a.length > 0 && (o.style = a);
  const i = [];
  return i.push({
      tag: "span",
      attributes: o,
      children: [t]
  }),
  n && i.push({
      tag: "span",
      attributes: {
          class: "sr-only"
      },
      children: [n]
  }),
  i
}
const {styles: Pc} = Dn;
function Qd(e) {
  const t = e[0]
    , n = e[1]
    , [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
      tag: "g",
      attributes: {
          class: "".concat(Q.cssPrefix, "-").concat(kc.GROUP)
      },
      children: [{
          tag: "path",
          attributes: {
              class: "".concat(Q.cssPrefix, "-").concat(kc.SECONDARY),
              fill: "currentColor",
              d: r[0]
          }
      }, {
          tag: "path",
          attributes: {
              class: "".concat(Q.cssPrefix, "-").concat(kc.PRIMARY),
              fill: "currentColor",
              d: r[1]
          }
      }]
  } : o = {
      tag: "path",
      attributes: {
          fill: "currentColor",
          d: r
      }
  },
  {
      found: !0,
      width: t,
      height: n,
      icon: o
  }
}
const yP = {
  found: !1,
  width: 512,
  height: 512
};
function wP(e, t) {
  !H0 && !Q.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function Kd(e, t) {
  let n = t;
  return t === "fa" && Q.styleDefault !== null && (t = zr()),
  new Promise( (r, o) => {
      if (n === "fa") {
          const a = o1(e) || {};
          e = a.iconName || e,
          t = a.prefix || t
      }
      if (e && t && Pc[t] && Pc[t][e]) {
          const a = Pc[t][e];
          return r(Qd(a))
      }
      wP(e, t),
      r({
          ...yP,
          icon: Q.showMissingIcons && e ? Br("missingIconAbstract") || {} : {}
      })
  }
  )
}
const Bp = () => {}
, qd = Q.measurePerformance && Bs && Bs.mark && Bs.measure ? Bs : {
  mark: Bp,
  measure: Bp
}
, ii = 'FA "6.6.0"'
, xP = e => (qd.mark("".concat(ii, " ").concat(e, " begins")),
() => i1(e))
, i1 = e => {
  qd.mark("".concat(ii, " ").concat(e, " ends")),
  qd.measure("".concat(ii, " ").concat(e), "".concat(ii, " ").concat(e, " begins"), "".concat(ii, " ").concat(e, " ends"))
}
;
var Nh = {
  begin: xP,
  end: i1
};
const ll = () => {}
;
function Hp(e) {
  return typeof (e.getAttribute ? e.getAttribute(ko) : null) == "string"
}
function bP(e) {
  const t = e.getAttribute ? e.getAttribute(xh) : null
    , n = e.getAttribute ? e.getAttribute(bh) : null;
  return t && n
}
function SP(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Q.replacementClass)
}
function kP() {
  return Q.autoReplaceSvg === !0 ? ul.replace : ul[Q.autoReplaceSvg] || ul.replace
}
function CP(e) {
  return $e.createElementNS("http://www.w3.org/2000/svg", e)
}
function EP(e) {
  return $e.createElement(e)
}
function s1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {ceFn: n=e.tag === "svg" ? CP : EP} = t;
  if (typeof e == "string")
      return $e.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
      r.setAttribute(a, e.attributes[a])
  }),
  (e.children || []).forEach(function(a) {
      r.appendChild(s1(a, {
          ceFn: n
      }))
  }),
  r
}
function PP(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "),
  t
}
const ul = {
  replace: function(e) {
      const t = e[0];
      if (t.parentNode)
          if (e[1].forEach(n => {
              t.parentNode.insertBefore(s1(n), t)
          }
          ),
          t.getAttribute(ko) === null && Q.keepOriginalSource) {
              let n = $e.createComment(PP(t));
              t.parentNode.replaceChild(n, t)
          } else
              t.remove()
  },
  nest: function(e) {
      const t = e[0]
        , n = e[1];
      if (~Sh(t).indexOf(Q.replacementClass))
          return ul.replace(e);
      const r = new RegExp("".concat(Q.cssPrefix, "-.*"));
      if (delete n[0].attributes.id,
      n[0].attributes.class) {
          const a = n[0].attributes.class.split(" ").reduce( (i, s) => (s === Q.replacementClass || s.match(r) ? i.toSvg.push(s) : i.toNode.push(s),
          i), {
              toNode: [],
              toSvg: []
          });
          n[0].attributes.class = a.toSvg.join(" "),
          a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "))
      }
      const o = n.map(a => as(a)).join(`
`);
      t.setAttribute(ko, ""),
      t.innerHTML = o
  }
};
function Up(e) {
  e()
}
function l1(e, t) {
  const n = typeof t == "function" ? t : ll;
  if (e.length === 0)
      n();
  else {
      let r = Up;
      Q.mutateApproach === _E && (r = $r.requestAnimationFrame || Up),
      r( () => {
          const o = kP()
            , a = Nh.begin("mutate");
          e.map(o),
          a(),
          n()
      }
      )
  }
}
let Oh = !1;
function u1() {
  Oh = !0
}
function Zd() {
  Oh = !1
}
let Bl = null;
function Yp(e) {
  if (!_p || !Q.observeMutations)
      return;
  const {treeCallback: t=ll, nodeCallback: n=ll, pseudoElementsCallback: r=ll, observeMutationsRoot: o=$e} = e;
  Bl = new _p(a => {
      if (Oh)
          return;
      const i = zr();
      Aa(a).forEach(s => {
          if (s.type === "childList" && s.addedNodes.length > 0 && !Hp(s.addedNodes[0]) && (Q.searchPseudoElements && r(s.target),
          t(s.target)),
          s.type === "attributes" && s.target.parentNode && Q.searchPseudoElements && r(s.target.parentNode),
          s.type === "attributes" && Hp(s.target) && ~WE.indexOf(s.attributeName))
              if (s.attributeName === "class" && bP(s.target)) {
                  const {prefix: l, iconName: u} = Su(Sh(s.target));
                  s.target.setAttribute(xh, l || i),
                  u && s.target.setAttribute(bh, u)
              } else
                  SP(s.target) && n(s.target)
      }
      )
  }
  ),
  ir && Bl.observe(o, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
  })
}
function MP() {
  Bl && Bl.disconnect()
}
function NP(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce( (r, o) => {
      const a = o.split(":")
        , i = a[0]
        , s = a.slice(1);
      return i && s.length > 0 && (r[i] = s.join(":").trim()),
      r
  }
  , {})),
  n
}
function OP(e) {
  const t = e.getAttribute("data-prefix")
    , n = e.getAttribute("data-icon")
    , r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Su(Sh(e));
  return o.prefix || (o.prefix = zr()),
  t && n && (o.prefix = t,
  o.iconName = n),
  o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = aP(o.prefix, e.innerText) || Eh(o.prefix, Yd(e.innerText))),
  !o.iconName && Q.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)),
  o
}
function DP(e) {
  const t = Aa(e.attributes).reduce( (o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value),
  o), {})
    , n = e.getAttribute("title")
    , r = e.getAttribute("data-fa-title-id");
  return Q.autoA11y && (n ? t["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(r || Hi()) : (t["aria-hidden"] = "true",
  t.focusable = "false")),
  t
}
function TP() {
  return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: On,
      symbol: !1,
      mask: {
          iconName: null,
          prefix: null,
          rest: []
      },
      maskId: null,
      extra: {
          classes: [],
          styles: {},
          attributes: {}
      }
  }
}
function Vp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: !0
  };
  const {iconName: n, prefix: r, rest: o} = OP(e)
    , a = DP(e)
    , i = Gd("parseNodeAttributes", {}, e);
  let s = t.styleParser ? NP(e) : [];
  return {
      iconName: n,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: r,
      transform: On,
      mask: {
          iconName: null,
          prefix: null,
          rest: []
      },
      maskId: null,
      symbol: !1,
      extra: {
          classes: o,
          styles: s,
          attributes: a
      },
      ...i
  }
}
const {styles: RP} = Dn;
function c1(e) {
  const t = Q.autoReplaceSvg === "nest" ? Vp(e, {
      styleParser: !1
  }) : Vp(e);
  return ~t.extra.classes.indexOf(V0) ? Br("generateLayersText", e, t) : Br("generateSvgReplacementMutation", e, t)
}
let jn = new Set;
U0.map(e => {
  jn.add("fa-".concat(e))
}
);
Object.keys(po[Be]).map(jn.add.bind(jn));
Object.keys(po[$t]).map(jn.add.bind(jn));
Object.keys(po[zt]).map(jn.add.bind(jn));
jn = [...jn];
function Gp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ir)
      return Promise.resolve();
  const n = $e.documentElement.classList
    , r = d => n.add("".concat(Ip, "-").concat(d))
    , o = d => n.remove("".concat(Ip, "-").concat(d))
    , a = Q.autoFetchSvg ? jn : U0.map(d => "fa-".concat(d)).concat(Object.keys(RP));
  a.includes("fa") || a.push("fa");
  const i = [".".concat(V0, ":not([").concat(ko, "])")].concat(a.map(d => ".".concat(d, ":not([").concat(ko, "])"))).join(", ");
  if (i.length === 0)
      return Promise.resolve();
  let s = [];
  try {
      s = Aa(e.querySelectorAll(i))
  } catch {}
  if (s.length > 0)
      r("pending"),
      o("complete");
  else
      return Promise.resolve();
  const l = Nh.begin("onTree")
    , u = s.reduce( (d, c) => {
      try {
          const f = c1(c);
          f && d.push(f)
      } catch (f) {
          H0 || f.name === "MissingIcon" && console.error(f)
      }
      return d
  }
  , []);
  return new Promise( (d, c) => {
      Promise.all(u).then(f => {
          l1(f, () => {
              r("active"),
              r("complete"),
              o("pending"),
              typeof t == "function" && t(),
              l(),
              d()
          }
          )
      }
      ).catch(f => {
          l(),
          c(f)
      }
      )
  }
  )
}
function _P(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  c1(e).then(n => {
      n && l1([n], t)
  }
  )
}
function AP(e) {
  return function(t) {
      let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const r = (t || {}).icon ? t : Xd(t || {});
      let {mask: o} = n;
      return o && (o = (o || {}).icon ? o : Xd(o || {})),
      e(r, {
          ...n,
          mask: o
      })
  }
}
const jP = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {transform: n=On, symbol: r=!1, mask: o=null, maskId: a=null, title: i=null, titleId: s=null, classes: l=[], attributes: u={}, styles: d={}} = t;
  if (!e)
      return;
  const {prefix: c, iconName: f, icon: g} = e;
  return ku({
      type: "icon",
      ...e
  }, () => (Co("beforeDOMElementCreation", {
      iconDefinition: e,
      params: t
  }),
  Q.autoA11y && (i ? u["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(s || Hi()) : (u["aria-hidden"] = "true",
  u.focusable = "false")),
  Mh({
      icons: {
          main: Qd(g),
          mask: o ? Qd(o.icon) : {
              found: !1,
              width: null,
              height: null,
              icon: {}
          }
      },
      prefix: c,
      iconName: f,
      transform: {
          ...On,
          ...n
      },
      symbol: r,
      title: i,
      maskId: a,
      titleId: s,
      extra: {
          attributes: u,
          styles: d,
          classes: l
      }
  })))
};
var IP = {
  mixout() {
      return {
          icon: AP(jP)
      }
  },
  hooks() {
      return {
          mutationObserverCallbacks(e) {
              return e.treeCallback = Gp,
              e.nodeCallback = _P,
              e
          }
      }
  },
  provides(e) {
      e.i2svg = function(t) {
          const {node: n=$e, callback: r= () => {}
          } = t;
          return Gp(n, r)
      }
      ,
      e.generateSvgReplacementMutation = function(t, n) {
          const {iconName: r, title: o, titleId: a, prefix: i, transform: s, symbol: l, mask: u, maskId: d, extra: c} = n;
          return new Promise( (f, g) => {
              Promise.all([Kd(r, i), u.iconName ? Kd(u.iconName, u.prefix) : Promise.resolve({
                  found: !1,
                  width: 512,
                  height: 512,
                  icon: {}
              })]).then(w => {
                  let[v,x] = w;
                  f([t, Mh({
                      icons: {
                          main: v,
                          mask: x
                      },
                      prefix: i,
                      iconName: r,
                      transform: s,
                      symbol: l,
                      maskId: d,
                      title: o,
                      titleId: a,
                      extra: c,
                      watchable: !0
                  })])
              }
              ).catch(g)
          }
          )
      }
      ,
      e.generateAbstractIcon = function(t) {
          let {children: n, attributes: r, main: o, transform: a, styles: i} = t;
          const s = xu(i);
          s.length > 0 && (r.style = s);
          let l;
          return kh(a) && (l = Br("generateAbstractTransformGrouping", {
              main: o,
              transform: a,
              containerWidth: o.width,
              iconWidth: o.width
          })),
          n.push(l || o.icon),
          {
              children: n,
              attributes: r
          }
      }
  }
}
, LP = {
  mixout() {
      return {
          layer(e) {
              let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              const {classes: n=[]} = t;
              return ku({
                  type: "layer"
              }, () => {
                  Co("beforeDOMElementCreation", {
                      assembler: e,
                      params: t
                  });
                  let r = [];
                  return e(o => {
                      Array.isArray(o) ? o.map(a => {
                          r = r.concat(a.abstract)
                      }
                      ) : r = r.concat(o.abstract)
                  }
                  ),
                  [{
                      tag: "span",
                      attributes: {
                          class: ["".concat(Q.cssPrefix, "-layers"), ...n].join(" ")
                      },
                      children: r
                  }]
              }
              )
          }
      }
  }
}
, FP = {
  mixout() {
      return {
          counter(e) {
              let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              const {title: n=null, classes: r=[], attributes: o={}, styles: a={}} = t;
              return ku({
                  type: "counter",
                  content: e
              }, () => (Co("beforeDOMElementCreation", {
                  content: e,
                  params: t
              }),
              vP({
                  content: e.toString(),
                  title: n,
                  extra: {
                      attributes: o,
                      styles: a,
                      classes: ["".concat(Q.cssPrefix, "-layers-counter"), ...r]
                  }
              })))
          }
      }
  }
}
, WP = {
  mixout() {
      return {
          text(e) {
              let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              const {transform: n=On, title: r=null, classes: o=[], attributes: a={}, styles: i={}} = t;
              return ku({
                  type: "text",
                  content: e
              }, () => (Co("beforeDOMElementCreation", {
                  content: e,
                  params: t
              }),
              zp({
                  content: e,
                  transform: {
                      ...On,
                      ...n
                  },
                  title: r,
                  extra: {
                      attributes: a,
                      styles: i,
                      classes: ["".concat(Q.cssPrefix, "-layers-text"), ...o]
                  }
              })))
          }
      }
  },
  provides(e) {
      e.generateLayersText = function(t, n) {
          const {title: r, transform: o, extra: a} = n;
          let i = null
            , s = null;
          if (L0) {
              const l = parseInt(getComputedStyle(t).fontSize, 10)
                , u = t.getBoundingClientRect();
              i = u.width / l,
              s = u.height / l
          }
          return Q.autoA11y && !r && (a.attributes["aria-hidden"] = "true"),
          Promise.resolve([t, zp({
              content: t.innerHTML,
              width: i,
              height: s,
              transform: o,
              title: r,
              extra: a,
              watchable: !0
          })])
      }
  }
};
const $P = new RegExp('"',"ug")
, Xp = [1105920, 1112319]
, Qp = {
  FontAwesome: {
      normal: "fas",
      400: "fas"
  },
  ...bE,
  ...xE,
  ...OE
}
, Jd = Object.keys(Qp).reduce( (e, t) => (e[t.toLowerCase()] = Qp[t],
e), {})
, zP = Object.keys(Jd).reduce( (e, t) => {
  const n = Jd[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1],
  e
}
, {});
function BP(e) {
  const t = e.replace($P, "")
    , n = JE(t, 0)
    , r = n >= Xp[0] && n <= Xp[1]
    , o = t.length === 2 ? t[0] === t[1] : !1;
  return {
      value: Yd(o ? t[0] : t),
      isSecondary: r || o
  }
}
function HP(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase()
    , r = parseInt(t)
    , o = isNaN(r) ? "normal" : r;
  return (Jd[n] || {})[o] || zP[n]
}
function Kp(e, t) {
  const n = "".concat(RE).concat(t.replace(":", "-"));
  return new Promise( (r, o) => {
      if (e.getAttribute(n) !== null)
          return r();
      const i = Aa(e.children).filter(f => f.getAttribute(zd) === t)[0]
        , s = $r.getComputedStyle(e, t)
        , l = s.getPropertyValue("font-family")
        , u = l.match(LE)
        , d = s.getPropertyValue("font-weight")
        , c = s.getPropertyValue("content");
      if (i && !u)
          return e.removeChild(i),
          r();
      if (u && c !== "none" && c !== "") {
          const f = s.getPropertyValue("content");
          let g = HP(l, d);
          const {value: w, isSecondary: v} = BP(f)
            , x = u[0].startsWith("FontAwesome");
          let p = Eh(g, w)
            , h = p;
          if (x) {
              const m = iP(w);
              m.iconName && m.prefix && (p = m.iconName,
              g = m.prefix)
          }
          if (p && !v && (!i || i.getAttribute(xh) !== g || i.getAttribute(bh) !== h)) {
              e.setAttribute(n, h),
              i && e.removeChild(i);
              const m = TP()
                , {extra: S} = m;
              S.attributes[zd] = t,
              Kd(p, g).then(E => {
                  const N = Mh({
                      ...m,
                      icons: {
                          main: E,
                          mask: Ph()
                      },
                      prefix: g,
                      iconName: h,
                      extra: S,
                      watchable: !0
                  })
                    , O = $e.createElementNS("http://www.w3.org/2000/svg", "svg");
                  t === "::before" ? e.insertBefore(O, e.firstChild) : e.appendChild(O),
                  O.outerHTML = N.map(k => as(k)).join(`
`),
                  e.removeAttribute(n),
                  r()
              }
              ).catch(o)
          } else
              r()
      } else
          r()
  }
  )
}
function UP(e) {
  return Promise.all([Kp(e, "::before"), Kp(e, "::after")])
}
function YP(e) {
  return e.parentNode !== document.head && !~AE.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(zd) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function qp(e) {
  if (ir)
      return new Promise( (t, n) => {
          const r = Aa(e.querySelectorAll("*")).filter(YP).map(UP)
            , o = Nh.begin("searchPseudoElements");
          u1(),
          Promise.all(r).then( () => {
              o(),
              Zd(),
              t()
          }
          ).catch( () => {
              o(),
              Zd(),
              n()
          }
          )
      }
      )
}
var VP = {
  hooks() {
      return {
          mutationObserverCallbacks(e) {
              return e.pseudoElementsCallback = qp,
              e
          }
      }
  },
  provides(e) {
      e.pseudoElements2svg = function(t) {
          const {node: n=$e} = t;
          Q.searchPseudoElements && qp(n)
      }
  }
};
let Zp = !1;
var GP = {
  mixout() {
      return {
          dom: {
              unwatch() {
                  u1(),
                  Zp = !0
              }
          }
      }
  },
  hooks() {
      return {
          bootstrap() {
              Yp(Gd("mutationObserverCallbacks", {}))
          },
          noAuto() {
              MP()
          },
          watch(e) {
              const {observeMutationsRoot: t} = e;
              Zp ? Zd() : Yp(Gd("mutationObserverCallbacks", {
                  observeMutationsRoot: t
              }))
          }
      }
  }
};
const Jp = e => {
  let t = {
      size: 16,
      x: 0,
      y: 0,
      flipX: !1,
      flipY: !1,
      rotate: 0
  };
  return e.toLowerCase().split(" ").reduce( (n, r) => {
      const o = r.toLowerCase().split("-")
        , a = o[0];
      let i = o.slice(1).join("-");
      if (a && i === "h")
          return n.flipX = !0,
          n;
      if (a && i === "v")
          return n.flipY = !0,
          n;
      if (i = parseFloat(i),
      isNaN(i))
          return n;
      switch (a) {
      case "grow":
          n.size = n.size + i;
          break;
      case "shrink":
          n.size = n.size - i;
          break;
      case "left":
          n.x = n.x - i;
          break;
      case "right":
          n.x = n.x + i;
          break;
      case "up":
          n.y = n.y - i;
          break;
      case "down":
          n.y = n.y + i;
          break;
      case "rotate":
          n.rotate = n.rotate + i;
          break
      }
      return n
  }
  , t)
}
;
var XP = {
  mixout() {
      return {
          parse: {
              transform: e => Jp(e)
          }
      }
  },
  hooks() {
      return {
          parseNodeAttributes(e, t) {
              const n = t.getAttribute("data-fa-transform");
              return n && (e.transform = Jp(n)),
              e
          }
      }
  },
  provides(e) {
      e.generateAbstractTransformGrouping = function(t) {
          let {main: n, transform: r, containerWidth: o, iconWidth: a} = t;
          const i = {
              transform: "translate(".concat(o / 2, " 256)")
          }
            , s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") ")
            , l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") ")
            , u = "rotate(".concat(r.rotate, " 0 0)")
            , d = {
              transform: "".concat(s, " ").concat(l, " ").concat(u)
          }
            , c = {
              transform: "translate(".concat(a / 2 * -1, " -256)")
          }
            , f = {
              outer: i,
              inner: d,
              path: c
          };
          return {
              tag: "g",
              attributes: {
                  ...f.outer
              },
              children: [{
                  tag: "g",
                  attributes: {
                      ...f.inner
                  },
                  children: [{
                      tag: n.icon.tag,
                      children: n.icon.children,
                      attributes: {
                          ...n.icon.attributes,
                          ...f.path
                      }
                  }]
              }]
          }
      }
  }
};
const Mc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function eg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
  e
}
function QP(e) {
  return e.tag === "g" ? e.children : [e]
}
var KP = {
  hooks() {
      return {
          parseNodeAttributes(e, t) {
              const n = t.getAttribute("data-fa-mask")
                , r = n ? Su(n.split(" ").map(o => o.trim())) : Ph();
              return r.prefix || (r.prefix = zr()),
              e.mask = r,
              e.maskId = t.getAttribute("data-fa-mask-id"),
              e
          }
      }
  },
  provides(e) {
      e.generateAbstractMask = function(t) {
          let {children: n, attributes: r, main: o, mask: a, maskId: i, transform: s} = t;
          const {width: l, icon: u} = o
            , {width: d, icon: c} = a
            , f = GE({
              transform: s,
              containerWidth: d,
              iconWidth: l
          })
            , g = {
              tag: "rect",
              attributes: {
                  ...Mc,
                  fill: "white"
              }
          }
            , w = u.children ? {
              children: u.children.map(eg)
          } : {}
            , v = {
              tag: "g",
              attributes: {
                  ...f.inner
              },
              children: [eg({
                  tag: u.tag,
                  attributes: {
                      ...u.attributes,
                      ...f.path
                  },
                  ...w
              })]
          }
            , x = {
              tag: "g",
              attributes: {
                  ...f.outer
              },
              children: [v]
          }
            , p = "mask-".concat(i || Hi())
            , h = "clip-".concat(i || Hi())
            , m = {
              tag: "mask",
              attributes: {
                  ...Mc,
                  id: p,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
              },
              children: [g, x]
          }
            , S = {
              tag: "defs",
              children: [{
                  tag: "clipPath",
                  attributes: {
                      id: h
                  },
                  children: QP(c)
              }, m]
          };
          return n.push(S, {
              tag: "rect",
              attributes: {
                  fill: "currentColor",
                  "clip-path": "url(#".concat(h, ")"),
                  mask: "url(#".concat(p, ")"),
                  ...Mc
              }
          }),
          {
              children: n,
              attributes: r
          }
      }
  }
}
, qP = {
  provides(e) {
      let t = !1;
      $r.matchMedia && (t = $r.matchMedia("(prefers-reduced-motion: reduce)").matches),
      e.missingIconAbstract = function() {
          const n = []
            , r = {
              fill: "currentColor"
          }
            , o = {
              attributeType: "XML",
              repeatCount: "indefinite",
              dur: "2s"
          };
          n.push({
              tag: "path",
              attributes: {
                  ...r,
                  d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              }
          });
          const a = {
              ...o,
              attributeName: "opacity"
          }
            , i = {
              tag: "circle",
              attributes: {
                  ...r,
                  cx: "256",
                  cy: "364",
                  r: "28"
              },
              children: []
          };
          return t || i.children.push({
              tag: "animate",
              attributes: {
                  ...o,
                  attributeName: "r",
                  values: "28;14;28;28;14;28;"
              }
          }, {
              tag: "animate",
              attributes: {
                  ...a,
                  values: "1;0;1;1;0;1;"
              }
          }),
          n.push(i),
          n.push({
              tag: "path",
              attributes: {
                  ...r,
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              },
              children: t ? [] : [{
                  tag: "animate",
                  attributes: {
                      ...a,
                      values: "1;0;0;0;0;1;"
                  }
              }]
          }),
          t || n.push({
              tag: "path",
              attributes: {
                  ...r,
                  opacity: "0",
                  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              },
              children: [{
                  tag: "animate",
                  attributes: {
                      ...a,
                      values: "0;0;1;1;0;0;"
                  }
              }]
          }),
          {
              tag: "g",
              attributes: {
                  class: "missing"
              },
              children: n
          }
      }
  }
}
, ZP = {
  hooks() {
      return {
          parseNodeAttributes(e, t) {
              const n = t.getAttribute("data-fa-symbol")
                , r = n === null ? !1 : n === "" ? !0 : n;
              return e.symbol = r,
              e
          }
      }
  }
}
, JP = [KE, IP, LP, FP, WP, VP, GP, XP, KP, qP, ZP];
cP(JP, {
  mixoutsTo: Vt
});
Vt.noAuto;
Vt.config;
Vt.library;
Vt.dom;
const ef = Vt.parse;
Vt.findIconDefinition;
Vt.toHtml;
const eM = Vt.icon;
Vt.layer;
Vt.text;
Vt.counter;
var d1 = {
  exports: {}
}
, tM = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
, nM = tM
, rM = nM;
function f1() {}
function h1() {}
h1.resetWarningCache = f1;
var oM = function() {
  function e(r, o, a, i, s, l) {
      if (l !== rM) {
          var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw u.name = "Invariant Violation",
          u
      }
  }
  e.isRequired = e;
  function t() {
      return e
  }
  var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: h1,
      resetWarningCache: f1
  };
  return n.PropTypes = n,
  n
};
d1.exports = oM();
var aM = d1.exports;
const he = eu(aM);
function tg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? tg(Object(n), !0).forEach(function(r) {
          na(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tg(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}
function Hl(e) {
  "@babel/helpers - typeof";
  return Hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t
  }
  : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }
  ,
  Hl(e)
}
function na(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
function iM(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
      o = r[a],
      !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n
}
function sM(e, t) {
  if (e == null)
      return {};
  var n = iM(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (o = 0; o < a.length; o++)
          r = a[o],
          !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function tf(e) {
  return lM(e) || uM(e) || cM(e) || dM()
}
function lM(e) {
  if (Array.isArray(e))
      return nf(e)
}
function uM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e)
}
function cM(e, t) {
  if (e) {
      if (typeof e == "string")
          return nf(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
          return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return nf(e, t)
  }
}
function nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
      r[n] = e[n];
  return r
}
function dM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function fM(e) {
  var t, n = e.beat, r = e.fade, o = e.beatFade, a = e.bounce, i = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, d = e.spinReverse, c = e.pulse, f = e.fixedWidth, g = e.inverse, w = e.border, v = e.listItem, x = e.flip, p = e.size, h = e.rotation, m = e.pull, S = (t = {
      "fa-beat": n,
      "fa-fade": r,
      "fa-beat-fade": o,
      "fa-bounce": a,
      "fa-shake": i,
      "fa-flash": s,
      "fa-spin": l,
      "fa-spin-reverse": d,
      "fa-spin-pulse": u,
      "fa-pulse": c,
      "fa-fw": f,
      "fa-inverse": g,
      "fa-border": w,
      "fa-li": v,
      "fa-flip": x === !0,
      "fa-flip-horizontal": x === "horizontal" || x === "both",
      "fa-flip-vertical": x === "vertical" || x === "both"
  },
  na(t, "fa-".concat(p), typeof p < "u" && p !== null),
  na(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0),
  na(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
  na(t, "fa-swap-opacity", e.swapOpacity),
  t);
  return Object.keys(S).map(function(E) {
      return S[E] ? E : null
  }).filter(function(E) {
      return E
  })
}
function hM(e) {
  return e = e - 0,
  e === e
}
function m1(e) {
  return hM(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
      return n ? n.toUpperCase() : ""
  }),
  e.substr(0, 1).toLowerCase() + e.substr(1))
}
var mM = ["style"];
function pM(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function gM(e) {
  return e.split(";").map(function(t) {
      return t.trim()
  }).filter(function(t) {
      return t
  }).reduce(function(t, n) {
      var r = n.indexOf(":")
        , o = m1(n.slice(0, r))
        , a = n.slice(r + 1).trim();
      return o.startsWith("webkit") ? t[pM(o)] = a : t[o] = a,
      t
  }, {})
}
function p1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
      return t;
  var r = (t.children || []).map(function(l) {
      return p1(e, l)
  })
    , o = Object.keys(t.attributes || {}).reduce(function(l, u) {
      var d = t.attributes[u];
      switch (u) {
      case "class":
          l.attrs.className = d,
          delete t.attributes.class;
          break;
      case "style":
          l.attrs.style = gM(d);
          break;
      default:
          u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = d : l.attrs[m1(u)] = d
      }
      return l
  }, {
      attrs: {}
  })
    , a = n.style
    , i = a === void 0 ? {} : a
    , s = sM(n, mM);
  return o.attrs.style = Cn(Cn({}, o.attrs.style), i),
  e.apply(void 0, [t.tag, Cn(Cn({}, o.attrs), s)].concat(tf(r)))
}
var g1 = !1;
try {
  g1 = !0
} catch {}
function vM() {
  if (!g1 && console && typeof console.error == "function") {
      var e;
      (e = console).error.apply(e, arguments)
  }
}
function ng(e) {
  if (e && Hl(e) === "object" && e.prefix && e.iconName && e.icon)
      return e;
  if (ef.icon)
      return ef.icon(e);
  if (e === null)
      return null;
  if (e && Hl(e) === "object" && e.prefix && e.iconName)
      return e;
  if (Array.isArray(e) && e.length === 2)
      return {
          prefix: e[0],
          iconName: e[1]
      };
  if (typeof e == "string")
      return {
          prefix: "fas",
          iconName: e
      }
}
function Nc(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? na({}, e, t) : {}
}
var rg = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}
, Xn = Y.forwardRef(function(e, t) {
  var n = Cn(Cn({}, rg), e)
    , r = n.icon
    , o = n.mask
    , a = n.symbol
    , i = n.className
    , s = n.title
    , l = n.titleId
    , u = n.maskId
    , d = ng(r)
    , c = Nc("classes", [].concat(tf(fM(n)), tf((i || "").split(" "))))
    , f = Nc("transform", typeof n.transform == "string" ? ef.transform(n.transform) : n.transform)
    , g = Nc("mask", ng(o))
    , w = eM(d, Cn(Cn(Cn(Cn({}, c), f), g), {}, {
      symbol: a,
      title: s,
      titleId: l,
      maskId: u
  }));
  if (!w)
      return vM("Could not find icon", d),
      null;
  var v = w.abstract
    , x = {
      ref: t
  };
  return Object.keys(n).forEach(function(p) {
      rg.hasOwnProperty(p) || (x[p] = n[p])
  }),
  yM(v[0], x)
});
Xn.displayName = "FontAwesomeIcon";
Xn.propTypes = {
  beat: he.bool,
  border: he.bool,
  beatFade: he.bool,
  bounce: he.bool,
  className: he.string,
  fade: he.bool,
  flash: he.bool,
  mask: he.oneOfType([he.object, he.array, he.string]),
  maskId: he.string,
  fixedWidth: he.bool,
  inverse: he.bool,
  flip: he.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: he.oneOfType([he.object, he.array, he.string]),
  listItem: he.bool,
  pull: he.oneOf(["right", "left"]),
  pulse: he.bool,
  rotation: he.oneOf([0, 90, 180, 270]),
  shake: he.bool,
  size: he.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: he.bool,
  spinPulse: he.bool,
  spinReverse: he.bool,
  symbol: he.oneOfType([he.bool, he.string]),
  title: he.string,
  titleId: he.string,
  transform: he.oneOfType([he.string, he.object]),
  swapOpacity: he.bool
};
var yM = p1.bind(null, Y.createElement);
const wM = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
}
, xM = {
  prefix: "fas",
  iconName: "arrow-right-to-bracket",
  icon: [512, 512, ["sign-in"], "f090", "M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]
}
, og = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}
, bM = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}
, SM = {
  prefix: "fas",
  iconName: "skull",
  icon: [512, 512, [128128], "f54c", "M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1l0 64c0 26.5 21.5 48 48 48l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 48 0c26.5 0 48-21.5 48-48l0-64c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
}
, kM = {
  prefix: "fas",
  iconName: "pen-nib",
  icon: [512, 512, [10001], "f5ad", "M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z"]
}
, v1 = ({num: e, className: t}) => b.jsx("div", {
  className: ka("space-x-0.5 text-orange-400", t),
  children: [...Array(e)].map( (n, r) => b.jsx(Xn, {
      icon: wM
  }, r))
})
, CM = e => {
  const {todo: t, editTodo: n, updateTodo: r} = e
    , o = !t.isDone && t.deadline && t.deadline < new Date
    , a = () => {
      n(t)
  }
    , i = l => {
      const u = {
          ...t,
          isDone: l
      };
      r(u)
  }
  ;
  let s;
  return t.deadline && (s = t.deadline.getHours() === 0 && t.deadline.getMinutes() === 0 ? $l(t.deadline).format("YYYY/MM/DD") : $l(t.deadline).format("YYYY/MM/DD HH:mm")),
  b.jsxs("div", {
      className: "flex justify-between group items-start border px-1 border-white",
      children: [b.jsxs("div", {
          className: "flex justify-start",
          children: [b.jsx("div", {
              className: "mt-0.5 mr-1.5",
              children: b.jsx(_0, {
                  id: t.id,
                  checked: t.isDone,
                  onCheckedChange: i
              })
          }), b.jsxs("div", {
              className: "flex-col",
              children: [b.jsx("div", {
                  children: b.jsx("label", {
                      htmlFor: t.id,
                      className: ka("group-hover:font-bold", t.isDone && "line-through text-gray-500"),
                      children: t.name
                  })
              }), b.jsxs("div", {
                  className: "flex items-center space-x-2 text-sm text-gray-500",
                  children: [b.jsx("span", {
                      className: "mr-0",
                      children: "優先度"
                  }), b.jsx(v1, {
                      num: 4 - t.priority,
                      className: t.isDone ? "text-gray-300" : ""
                  }), s && b.jsxs("span", {
                      className: ka("text-sm text-gray-500", o && "text-red-500 font-bold"),
                      children: [s, o && b.jsx(Xn, {
                          icon: SM,
                          className: "ml-1"
                      })]
                  })]
              })]
          })]
      }), b.jsx("div", {
          className: "flex flex-row space-x-2 items-center peer",
          children: b.jsx("div", {
              children: b.jsxs(cn, {
                  variant: "outline",
                  onClick: a,
                  className: "h-auto px-2 py-1 text-xs",
                  children: [b.jsx(Xn, {
                      icon: kM,
                      className: "mr-1"
                  }), b.jsx("div", {
                      children: "編集"
                  })]
              })
          })
      })]
  })
}
, y1 = y.forwardRef( ({className: e, type: t, ...n}, r) => b.jsx("input", {
  type: t,
  className: _e("flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300", e),
  ref: r,
  ...n
}));
y1.displayName = "Input";
function EM(e, t=globalThis == null ? void 0 : globalThis.document) {
  const n = er(e);
  y.useEffect( () => {
      const r = o => {
          o.key === "Escape" && n(o)
      }
      ;
      return t.addEventListener("keydown", r, {
          capture: !0
      }),
      () => t.removeEventListener("keydown", r, {
          capture: !0
      })
  }
  , [n, t])
}
var PM = "DismissableLayer", rf = "dismissableLayer.update", MM = "dismissableLayer.pointerDownOutside", NM = "dismissableLayer.focusOutside", ag, w1 = y.createContext({
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
}), Cu = y.forwardRef( (e, t) => {
  const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: i, onDismiss: s, ...l} = e
    , u = y.useContext(w1)
    , [d,c] = y.useState(null)
    , f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
    , [,g] = y.useState({})
    , w = He(t, O => c(O))
    , v = Array.from(u.layers)
    , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
    , p = v.indexOf(x)
    , h = d ? v.indexOf(d) : -1
    , m = u.layersWithOutsidePointerEventsDisabled.size > 0
    , S = h >= p
    , E = TM(O => {
      const k = O.target
        , L = [...u.branches].some(_ => _.contains(k));
      !S || L || (o == null || o(O),
      i == null || i(O),
      O.defaultPrevented || s == null || s())
  }
  , f)
    , N = RM(O => {
      const k = O.target;
      [...u.branches].some(_ => _.contains(k)) || (a == null || a(O),
      i == null || i(O),
      O.defaultPrevented || s == null || s())
  }
  , f);
  return EM(O => {
      h === u.layers.size - 1 && (r == null || r(O),
      !O.defaultPrevented && s && (O.preventDefault(),
      s()))
  }
  , f),
  y.useEffect( () => {
      if (d)
          return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ag = f.body.style.pointerEvents,
          f.body.style.pointerEvents = "none"),
          u.layersWithOutsidePointerEventsDisabled.add(d)),
          u.layers.add(d),
          ig(),
          () => {
              n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = ag)
          }
  }
  , [d, f, n, u]),
  y.useEffect( () => () => {
      d && (u.layers.delete(d),
      u.layersWithOutsidePointerEventsDisabled.delete(d),
      ig())
  }
  , [d, u]),
  y.useEffect( () => {
      const O = () => g({});
      return document.addEventListener(rf, O),
      () => document.removeEventListener(rf, O)
  }
  , []),
  b.jsx(Ne.div, {
      ...l,
      ref: w,
      style: {
          pointerEvents: m ? S ? "auto" : "none" : void 0,
          ...e.style
      },
      onFocusCapture: we(e.onFocusCapture, N.onFocusCapture),
      onBlurCapture: we(e.onBlurCapture, N.onBlurCapture),
      onPointerDownCapture: we(e.onPointerDownCapture, E.onPointerDownCapture)
  })
}
);
Cu.displayName = PM;
var OM = "DismissableLayerBranch"
, DM = y.forwardRef( (e, t) => {
  const n = y.useContext(w1)
    , r = y.useRef(null)
    , o = He(t, r);
  return y.useEffect( () => {
      const a = r.current;
      if (a)
          return n.branches.add(a),
          () => {
              n.branches.delete(a)
          }
  }
  , [n.branches]),
  b.jsx(Ne.div, {
      ...e,
      ref: o
  })
}
);
DM.displayName = OM;
function TM(e, t=globalThis == null ? void 0 : globalThis.document) {
  const n = er(e)
    , r = y.useRef(!1)
    , o = y.useRef( () => {}
  );
  return y.useEffect( () => {
      const a = s => {
          if (s.target && !r.current) {
              let l = function() {
                  x1(MM, n, u, {
                      discrete: !0
                  })
              };
              const u = {
                  originalEvent: s
              };
              s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
              o.current = l,
              t.addEventListener("click", o.current, {
                  once: !0
              })) : l()
          } else
              t.removeEventListener("click", o.current);
          r.current = !1
      }
        , i = window.setTimeout( () => {
          t.addEventListener("pointerdown", a)
      }
      , 0);
      return () => {
          window.clearTimeout(i),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", o.current)
      }
  }
  , [t, n]),
  {
      onPointerDownCapture: () => r.current = !0
  }
}
function RM(e, t=globalThis == null ? void 0 : globalThis.document) {
  const n = er(e)
    , r = y.useRef(!1);
  return y.useEffect( () => {
      const o = a => {
          a.target && !r.current && x1(NM, n, {
              originalEvent: a
          }, {
              discrete: !1
          })
      }
      ;
      return t.addEventListener("focusin", o),
      () => t.removeEventListener("focusin", o)
  }
  , [t, n]),
  {
      onFocusCapture: () => r.current = !0,
      onBlurCapture: () => r.current = !1
  }
}
function ig() {
  const e = new CustomEvent(rf);
  document.dispatchEvent(e)
}
function x1(e, t, n, {discrete: r}) {
  const o = n.originalEvent.target
    , a = new CustomEvent(e,{
      bubbles: !1,
      cancelable: !0,
      detail: n
  });
  t && o.addEventListener(e, t, {
      once: !0
  }),
  r ? eE(o, a) : o.dispatchEvent(a)
}
var Oc = 0;
function Dh() {
  y.useEffect( () => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", e[0] ?? sg()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? sg()),
      Oc++,
      () => {
          Oc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
          Oc--
      }
  }
  , [])
}
function sg() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""),
  e.tabIndex = 0,
  e.style.outline = "none",
  e.style.opacity = "0",
  e.style.position = "fixed",
  e.style.pointerEvents = "none",
  e
}
var Dc = "focusScope.autoFocusOnMount"
, Tc = "focusScope.autoFocusOnUnmount"
, lg = {
  bubbles: !1,
  cancelable: !0
}
, _M = "FocusScope"
, Eu = y.forwardRef( (e, t) => {
  const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i} = e
    , [s,l] = y.useState(null)
    , u = er(o)
    , d = er(a)
    , c = y.useRef(null)
    , f = He(t, v => l(v))
    , g = y.useRef({
      paused: !1,
      pause() {
          this.paused = !0
      },
      resume() {
          this.paused = !1
      }
  }).current;
  y.useEffect( () => {
      if (r) {
          let v = function(m) {
              if (g.paused || !s)
                  return;
              const S = m.target;
              s.contains(S) ? c.current = S : wr(c.current, {
                  select: !0
              })
          }
            , x = function(m) {
              if (g.paused || !s)
                  return;
              const S = m.relatedTarget;
              S !== null && (s.contains(S) || wr(c.current, {
                  select: !0
              }))
          }
            , p = function(m) {
              if (document.activeElement === document.body)
                  for (const E of m)
                      E.removedNodes.length > 0 && wr(s)
          };
          document.addEventListener("focusin", v),
          document.addEventListener("focusout", x);
          const h = new MutationObserver(p);
          return s && h.observe(s, {
              childList: !0,
              subtree: !0
          }),
          () => {
              document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", x),
              h.disconnect()
          }
      }
  }
  , [r, s, g.paused]),
  y.useEffect( () => {
      if (s) {
          cg.add(g);
          const v = document.activeElement;
          if (!s.contains(v)) {
              const p = new CustomEvent(Dc,lg);
              s.addEventListener(Dc, u),
              s.dispatchEvent(p),
              p.defaultPrevented || (AM(WM(b1(s)), {
                  select: !0
              }),
              document.activeElement === v && wr(s))
          }
          return () => {
              s.removeEventListener(Dc, u),
              setTimeout( () => {
                  const p = new CustomEvent(Tc,lg);
                  s.addEventListener(Tc, d),
                  s.dispatchEvent(p),
                  p.defaultPrevented || wr(v ?? document.body, {
                      select: !0
                  }),
                  s.removeEventListener(Tc, d),
                  cg.remove(g)
              }
              , 0)
          }
      }
  }
  , [s, u, d, g]);
  const w = y.useCallback(v => {
      if (!n && !r || g.paused)
          return;
      const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey
        , p = document.activeElement;
      if (x && p) {
          const h = v.currentTarget
            , [m,S] = jM(h);
          m && S ? !v.shiftKey && p === S ? (v.preventDefault(),
          n && wr(m, {
              select: !0
          })) : v.shiftKey && p === m && (v.preventDefault(),
          n && wr(S, {
              select: !0
          })) : p === h && v.preventDefault()
      }
  }
  , [n, r, g.paused]);
  return b.jsx(Ne.div, {
      tabIndex: -1,
      ...i,
      ref: f,
      onKeyDown: w
  })
}
);
Eu.displayName = _M;
function AM(e, {select: t=!1}={}) {
  const n = document.activeElement;
  for (const r of e)
      if (wr(r, {
          select: t
      }),
      document.activeElement !== n)
          return
}
function jM(e) {
  const t = b1(e)
    , n = ug(t, e)
    , r = ug(t.reverse(), e);
  return [n, r]
}
function b1(e) {
  const t = []
    , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
          const o = r.tagName === "INPUT" && r.type === "hidden";
          return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
  });
  for (; n.nextNode(); )
      t.push(n.currentNode);
  return t
}
function ug(e, t) {
  for (const n of e)
      if (!IM(n, {
          upTo: t
      }))
          return n
}
function IM(e, {upTo: t}) {
  if (getComputedStyle(e).visibility === "hidden")
      return !0;
  for (; e; ) {
      if (t !== void 0 && e === t)
          return !1;
      if (getComputedStyle(e).display === "none")
          return !0;
      e = e.parentElement
  }
  return !1
}
function LM(e) {
  return e instanceof HTMLInputElement && "select"in e
}
function wr(e, {select: t=!1}={}) {
  if (e && e.focus) {
      const n = document.activeElement;
      e.focus({
          preventScroll: !0
      }),
      e !== n && LM(e) && t && e.select()
  }
}
var cg = FM();
function FM() {
  let e = [];
  return {
      add(t) {
          const n = e[0];
          t !== n && (n == null || n.pause()),
          e = dg(e, t),
          e.unshift(t)
      },
      remove(t) {
          var n;
          e = dg(e, t),
          (n = e[0]) == null || n.resume()
      }
  }
}
function dg(e, t) {
  const n = [...e]
    , r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1),
  n
}
function WM(e) {
  return e.filter(t => t.tagName !== "A")
}
var $M = Jg.useId || ( () => {}
)
, zM = 0;
function vo(e) {
  const [t,n] = y.useState($M());
  return kt( () => {
      n(r => r ?? String(zM++))
  }
  , [e]),
  t ? `radix-${t}` : ""
}
const BM = ["top", "right", "bottom", "left"]
, Hr = Math.min
, Lt = Math.max
, Ul = Math.round
, Hs = Math.floor
, Ur = e => ({
  x: e,
  y: e
})
, HM = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}
, UM = {
  start: "end",
  end: "start"
};
function of(e, t, n) {
  return Lt(e, Hr(t, n))
}
function rr(e, t) {
  return typeof e == "function" ? e(t) : e
}
function or(e) {
  return e.split("-")[0]
}
function ja(e) {
  return e.split("-")[1]
}
function Th(e) {
  return e === "x" ? "y" : "x"
}
function Rh(e) {
  return e === "y" ? "height" : "width"
}
function Yr(e) {
  return ["top", "bottom"].includes(or(e)) ? "y" : "x"
}
function _h(e) {
  return Th(Yr(e))
}
function YM(e, t, n) {
  n === void 0 && (n = !1);
  const r = ja(e)
    , o = _h(e)
    , a = Rh(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Yl(i)),
  [i, Yl(i)]
}
function VM(e) {
  const t = Yl(e);
  return [af(e), t, af(t)]
}
function af(e) {
  return e.replace(/start|end/g, t => UM[t])
}
function GM(e, t, n) {
  const r = ["left", "right"]
    , o = ["right", "left"]
    , a = ["top", "bottom"]
    , i = ["bottom", "top"];
  switch (e) {
  case "top":
  case "bottom":
      return n ? t ? o : r : t ? r : o;
  case "left":
  case "right":
      return t ? a : i;
  default:
      return []
  }
}
function XM(e, t, n, r) {
  const o = ja(e);
  let a = GM(or(e), n === "start", r);
  return o && (a = a.map(i => i + "-" + o),
  t && (a = a.concat(a.map(af)))),
  a
}
function Yl(e) {
  return e.replace(/left|right|bottom|top/g, t => HM[t])
}
function QM(e) {
  return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...e
  }
}
function S1(e) {
  return typeof e != "number" ? QM(e) : {
      top: e,
      right: e,
      bottom: e,
      left: e
  }
}
function Vl(e) {
  const {x: t, y: n, width: r, height: o} = e;
  return {
      width: r,
      height: o,
      top: n,
      left: t,
      right: t + r,
      bottom: n + o,
      x: t,
      y: n
  }
}
function fg(e, t, n) {
  let {reference: r, floating: o} = e;
  const a = Yr(t)
    , i = _h(t)
    , s = Rh(i)
    , l = or(t)
    , u = a === "y"
    , d = r.x + r.width / 2 - o.width / 2
    , c = r.y + r.height / 2 - o.height / 2
    , f = r[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
  case "top":
      g = {
          x: d,
          y: r.y - o.height
      };
      break;
  case "bottom":
      g = {
          x: d,
          y: r.y + r.height
      };
      break;
  case "right":
      g = {
          x: r.x + r.width,
          y: c
      };
      break;
  case "left":
      g = {
          x: r.x - o.width,
          y: c
      };
      break;
  default:
      g = {
          x: r.x,
          y: r.y
      }
  }
  switch (ja(t)) {
  case "start":
      g[i] -= f * (n && u ? -1 : 1);
      break;
  case "end":
      g[i] += f * (n && u ? -1 : 1);
      break
  }
  return g
}
const KM = async (e, t, n) => {
  const {placement: r="bottom", strategy: o="absolute", middleware: a=[], platform: i} = n
    , s = a.filter(Boolean)
    , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
  })
    , {x: d, y: c} = fg(u, r, l)
    , f = r
    , g = {}
    , w = 0;
  for (let v = 0; v < s.length; v++) {
      const {name: x, fn: p} = s[v]
        , {x: h, y: m, data: S, reset: E} = await p({
          x: d,
          y: c,
          initialPlacement: r,
          placement: f,
          strategy: o,
          middlewareData: g,
          rects: u,
          platform: i,
          elements: {
              reference: e,
              floating: t
          }
      });
      d = h ?? d,
      c = m ?? c,
      g = {
          ...g,
          [x]: {
              ...g[x],
              ...S
          }
      },
      E && w <= 50 && (w++,
      typeof E == "object" && (E.placement && (f = E.placement),
      E.rects && (u = E.rects === !0 ? await i.getElementRects({
          reference: e,
          floating: t,
          strategy: o
      }) : E.rects),
      {x: d, y: c} = fg(u, f, l)),
      v = -1)
  }
  return {
      x: d,
      y: c,
      placement: f,
      strategy: o,
      middlewareData: g
  }
}
;
async function Ui(e, t) {
  var n;
  t === void 0 && (t = {});
  const {x: r, y: o, platform: a, rects: i, elements: s, strategy: l} = e
    , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: c="floating", altBoundary: f=!1, padding: g=0} = rr(t, e)
    , w = S1(g)
    , x = s[f ? c === "floating" ? "reference" : "floating" : c]
    , p = Vl(await a.getClippingRect({
      element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
      boundary: u,
      rootBoundary: d,
      strategy: l
  }))
    , h = c === "floating" ? {
      x: r,
      y: o,
      width: i.floating.width,
      height: i.floating.height
  } : i.reference
    , m = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating))
    , S = await (a.isElement == null ? void 0 : a.isElement(m)) ? await (a.getScale == null ? void 0 : a.getScale(m)) || {
      x: 1,
      y: 1
  } : {
      x: 1,
      y: 1
  }
    , E = Vl(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: s,
      rect: h,
      offsetParent: m,
      strategy: l
  }) : h);
  return {
      top: (p.top - E.top + w.top) / S.y,
      bottom: (E.bottom - p.bottom + w.bottom) / S.y,
      left: (p.left - E.left + w.left) / S.x,
      right: (E.right - p.right + w.right) / S.x
  }
}
const qM = e => ({
  name: "arrow",
  options: e,
  async fn(t) {
      const {x: n, y: r, placement: o, rects: a, platform: i, elements: s, middlewareData: l} = t
        , {element: u, padding: d=0} = rr(e, t) || {};
      if (u == null)
          return {};
      const c = S1(d)
        , f = {
          x: n,
          y: r
      }
        , g = _h(o)
        , w = Rh(g)
        , v = await i.getDimensions(u)
        , x = g === "y"
        , p = x ? "top" : "left"
        , h = x ? "bottom" : "right"
        , m = x ? "clientHeight" : "clientWidth"
        , S = a.reference[w] + a.reference[g] - f[g] - a.floating[w]
        , E = f[g] - a.reference[g]
        , N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let O = N ? N[m] : 0;
      (!O || !await (i.isElement == null ? void 0 : i.isElement(N))) && (O = s.floating[m] || a.floating[w]);
      const k = S / 2 - E / 2
        , L = O / 2 - v[w] / 2 - 1
        , _ = Hr(c[p], L)
        , F = Hr(c[h], L)
        , H = _
        , J = O - v[w] - F
        , W = O / 2 - v[w] / 2 + k
        , I = of(H, W, J)
        , R = !l.arrow && ja(o) != null && W !== I && a.reference[w] / 2 - (W < H ? _ : F) - v[w] / 2 < 0
        , $ = R ? W < H ? W - H : W - J : 0;
      return {
          [g]: f[g] + $,
          data: {
              [g]: I,
              centerOffset: W - I - $,
              ...R && {
                  alignmentOffset: $
              }
          },
          reset: R
      }
  }
})
, ZM = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "flip",
      options: e,
      async fn(t) {
          var n, r;
          const {placement: o, middlewareData: a, rects: i, initialPlacement: s, platform: l, elements: u} = t
            , {mainAxis: d=!0, crossAxis: c=!0, fallbackPlacements: f, fallbackStrategy: g="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: v=!0, ...x} = rr(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset)
              return {};
          const p = or(o)
            , h = Yr(s)
            , m = or(s) === s
            , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
            , E = f || (m || !v ? [Yl(s)] : VM(s))
            , N = w !== "none";
          !f && N && E.push(...XM(s, v, w, S));
          const O = [s, ...E]
            , k = await Ui(t, x)
            , L = [];
          let _ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
          if (d && L.push(k[p]),
          c) {
              const W = YM(o, i, S);
              L.push(k[W[0]], k[W[1]])
          }
          if (_ = [..._, {
              placement: o,
              overflows: L
          }],
          !L.every(W => W <= 0)) {
              var F, H;
              const W = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1
                , I = O[W];
              if (I)
                  return {
                      data: {
                          index: W,
                          overflows: _
                      },
                      reset: {
                          placement: I
                      }
                  };
              let R = (H = _.filter($ => $.overflows[0] <= 0).sort( ($, P) => $.overflows[1] - P.overflows[1])[0]) == null ? void 0 : H.placement;
              if (!R)
                  switch (g) {
                  case "bestFit":
                      {
                          var J;
                          const $ = (J = _.filter(P => {
                              if (N) {
                                  const T = Yr(P.placement);
                                  return T === h || T === "y"
                              }
                              return !0
                          }
                          ).map(P => [P.placement, P.overflows.filter(T => T > 0).reduce( (T, A) => T + A, 0)]).sort( (P, T) => P[1] - T[1])[0]) == null ? void 0 : J[0];
                          $ && (R = $);
                          break
                      }
                  case "initialPlacement":
                      R = s;
                      break
                  }
              if (o !== R)
                  return {
                      reset: {
                          placement: R
                      }
                  }
          }
          return {}
      }
  }
};
function hg(e, t) {
  return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width
  }
}
function mg(e) {
  return BM.some(t => e[t] >= 0)
}
const JM = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "hide",
      options: e,
      async fn(t) {
          const {rects: n} = t
            , {strategy: r="referenceHidden", ...o} = rr(e, t);
          switch (r) {
          case "referenceHidden":
              {
                  const a = await Ui(t, {
                      ...o,
                      elementContext: "reference"
                  })
                    , i = hg(a, n.reference);
                  return {
                      data: {
                          referenceHiddenOffsets: i,
                          referenceHidden: mg(i)
                      }
                  }
              }
          case "escaped":
              {
                  const a = await Ui(t, {
                      ...o,
                      altBoundary: !0
                  })
                    , i = hg(a, n.floating);
                  return {
                      data: {
                          escapedOffsets: i,
                          escaped: mg(i)
                      }
                  }
              }
          default:
              return {}
          }
      }
  }
};
async function eN(e, t) {
  const {placement: n, platform: r, elements: o} = e
    , a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
    , i = or(n)
    , s = ja(n)
    , l = Yr(n) === "y"
    , u = ["left", "top"].includes(i) ? -1 : 1
    , d = a && l ? -1 : 1
    , c = rr(t, e);
  let {mainAxis: f, crossAxis: g, alignmentAxis: w} = typeof c == "number" ? {
      mainAxis: c,
      crossAxis: 0,
      alignmentAxis: null
  } : {
      mainAxis: c.mainAxis || 0,
      crossAxis: c.crossAxis || 0,
      alignmentAxis: c.alignmentAxis
  };
  return s && typeof w == "number" && (g = s === "end" ? w * -1 : w),
  l ? {
      x: g * d,
      y: f * u
  } : {
      x: f * u,
      y: g * d
  }
}
const tN = function(e) {
  return e === void 0 && (e = 0),
  {
      name: "offset",
      options: e,
      async fn(t) {
          var n, r;
          const {x: o, y: a, placement: i, middlewareData: s} = t
            , l = await eN(t, e);
          return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
              x: o + l.x,
              y: a + l.y,
              data: {
                  ...l,
                  placement: i
              }
          }
      }
  }
}
, nN = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "shift",
      options: e,
      async fn(t) {
          const {x: n, y: r, placement: o} = t
            , {mainAxis: a=!0, crossAxis: i=!1, limiter: s={
              fn: x => {
                  let {x: p, y: h} = x;
                  return {
                      x: p,
                      y: h
                  }
              }
          }, ...l} = rr(e, t)
            , u = {
              x: n,
              y: r
          }
            , d = await Ui(t, l)
            , c = Yr(or(o))
            , f = Th(c);
          let g = u[f]
            , w = u[c];
          if (a) {
              const x = f === "y" ? "top" : "left"
                , p = f === "y" ? "bottom" : "right"
                , h = g + d[x]
                , m = g - d[p];
              g = of(h, g, m)
          }
          if (i) {
              const x = c === "y" ? "top" : "left"
                , p = c === "y" ? "bottom" : "right"
                , h = w + d[x]
                , m = w - d[p];
              w = of(h, w, m)
          }
          const v = s.fn({
              ...t,
              [f]: g,
              [c]: w
          });
          return {
              ...v,
              data: {
                  x: v.x - n,
                  y: v.y - r,
                  enabled: {
                      [f]: a,
                      [c]: i
                  }
              }
          }
      }
  }
}
, rN = function(e) {
  return e === void 0 && (e = {}),
  {
      options: e,
      fn(t) {
          const {x: n, y: r, placement: o, rects: a, middlewareData: i} = t
            , {offset: s=0, mainAxis: l=!0, crossAxis: u=!0} = rr(e, t)
            , d = {
              x: n,
              y: r
          }
            , c = Yr(o)
            , f = Th(c);
          let g = d[f]
            , w = d[c];
          const v = rr(s, t)
            , x = typeof v == "number" ? {
              mainAxis: v,
              crossAxis: 0
          } : {
              mainAxis: 0,
              crossAxis: 0,
              ...v
          };
          if (l) {
              const m = f === "y" ? "height" : "width"
                , S = a.reference[f] - a.floating[m] + x.mainAxis
                , E = a.reference[f] + a.reference[m] - x.mainAxis;
              g < S ? g = S : g > E && (g = E)
          }
          if (u) {
              var p, h;
              const m = f === "y" ? "width" : "height"
                , S = ["top", "left"].includes(or(o))
                , E = a.reference[c] - a.floating[m] + (S && ((p = i.offset) == null ? void 0 : p[c]) || 0) + (S ? 0 : x.crossAxis)
                , N = a.reference[c] + a.reference[m] + (S ? 0 : ((h = i.offset) == null ? void 0 : h[c]) || 0) - (S ? x.crossAxis : 0);
              w < E ? w = E : w > N && (w = N)
          }
          return {
              [f]: g,
              [c]: w
          }
      }
  }
}
, oN = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "size",
      options: e,
      async fn(t) {
          var n, r;
          const {placement: o, rects: a, platform: i, elements: s} = t
            , {apply: l= () => {}
          , ...u} = rr(e, t)
            , d = await Ui(t, u)
            , c = or(o)
            , f = ja(o)
            , g = Yr(o) === "y"
            , {width: w, height: v} = a.floating;
          let x, p;
          c === "top" || c === "bottom" ? (x = c,
          p = f === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (p = c,
          x = f === "end" ? "top" : "bottom");
          const h = v - d.top - d.bottom
            , m = w - d.left - d.right
            , S = Hr(v - d[x], h)
            , E = Hr(w - d[p], m)
            , N = !t.middlewareData.shift;
          let O = S
            , k = E;
          if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = m),
          (r = t.middlewareData.shift) != null && r.enabled.y && (O = h),
          N && !f) {
              const _ = Lt(d.left, 0)
                , F = Lt(d.right, 0)
                , H = Lt(d.top, 0)
                , J = Lt(d.bottom, 0);
              g ? k = w - 2 * (_ !== 0 || F !== 0 ? _ + F : Lt(d.left, d.right)) : O = v - 2 * (H !== 0 || J !== 0 ? H + J : Lt(d.top, d.bottom))
          }
          await l({
              ...t,
              availableWidth: k,
              availableHeight: O
          });
          const L = await i.getDimensions(s.floating);
          return w !== L.width || v !== L.height ? {
              reset: {
                  rects: !0
              }
          } : {}
      }
  }
};
function Pu() {
  return typeof window < "u"
}
function Ia(e) {
  return k1(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ln(e) {
  var t;
  return (t = (k1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function k1(e) {
  return Pu() ? e instanceof Node || e instanceof Bt(e).Node : !1
}
function mn(e) {
  return Pu() ? e instanceof Element || e instanceof Bt(e).Element : !1
}
function In(e) {
  return Pu() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1
}
function pg(e) {
  return !Pu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot
}
function is(e) {
  const {overflow: t, overflowX: n, overflowY: r, display: o} = pn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function aN(e) {
  return ["table", "td", "th"].includes(Ia(e))
}
function Mu(e) {
  return [":popover-open", ":modal"].some(t => {
      try {
          return e.matches(t)
      } catch {
          return !1
      }
  }
  )
}
function Ah(e) {
  const t = jh()
    , n = mn(e) ? pn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function iN(e) {
  let t = Vr(e);
  for (; In(t) && !Pa(t); ) {
      if (Ah(t))
          return t;
      if (Mu(t))
          return null;
      t = Vr(t)
  }
  return null
}
function jh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Pa(e) {
  return ["html", "body", "#document"].includes(Ia(e))
}
function pn(e) {
  return Bt(e).getComputedStyle(e)
}
function Nu(e) {
  return mn(e) ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
  } : {
      scrollLeft: e.scrollX,
      scrollTop: e.scrollY
  }
}
function Vr(e) {
  if (Ia(e) === "html")
      return e;
  const t = e.assignedSlot || e.parentNode || pg(e) && e.host || Ln(e);
  return pg(t) ? t.host : t
}
function C1(e) {
  const t = Vr(e);
  return Pa(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && is(t) ? t : C1(t)
}
function Yi(e, t, n) {
  var r;
  t === void 0 && (t = []),
  n === void 0 && (n = !0);
  const o = C1(e)
    , a = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
    , i = Bt(o);
  if (a) {
      const s = sf(i);
      return t.concat(i, i.visualViewport || [], is(o) ? o : [], s && n ? Yi(s) : [])
  }
  return t.concat(o, Yi(o, [], n))
}
function sf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function E1(e) {
  const t = pn(e);
  let n = parseFloat(t.width) || 0
    , r = parseFloat(t.height) || 0;
  const o = In(e)
    , a = o ? e.offsetWidth : n
    , i = o ? e.offsetHeight : r
    , s = Ul(n) !== a || Ul(r) !== i;
  return s && (n = a,
  r = i),
  {
      width: n,
      height: r,
      $: s
  }
}
function Ih(e) {
  return mn(e) ? e : e.contextElement
}
function da(e) {
  const t = Ih(e);
  if (!In(t))
      return Ur(1);
  const n = t.getBoundingClientRect()
    , {width: r, height: o, $: a} = E1(t);
  let i = (a ? Ul(n.width) : n.width) / r
    , s = (a ? Ul(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1),
  (!s || !Number.isFinite(s)) && (s = 1),
  {
      x: i,
      y: s
  }
}
const sN = Ur(0);
function P1(e) {
  const t = Bt(e);
  return !jh() || !t.visualViewport ? sN : {
      x: t.visualViewport.offsetLeft,
      y: t.visualViewport.offsetTop
  }
}
function lN(e, t, n) {
  return t === void 0 && (t = !1),
  !n || t && n !== Bt(e) ? !1 : t
}
function Eo(e, t, n, r) {
  t === void 0 && (t = !1),
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect()
    , a = Ih(e);
  let i = Ur(1);
  t && (r ? mn(r) && (i = da(r)) : i = da(e));
  const s = lN(a, n, r) ? P1(a) : Ur(0);
  let l = (o.left + s.x) / i.x
    , u = (o.top + s.y) / i.y
    , d = o.width / i.x
    , c = o.height / i.y;
  if (a) {
      const f = Bt(a)
        , g = r && mn(r) ? Bt(r) : r;
      let w = f
        , v = sf(w);
      for (; v && r && g !== w; ) {
          const x = da(v)
            , p = v.getBoundingClientRect()
            , h = pn(v)
            , m = p.left + (v.clientLeft + parseFloat(h.paddingLeft)) * x.x
            , S = p.top + (v.clientTop + parseFloat(h.paddingTop)) * x.y;
          l *= x.x,
          u *= x.y,
          d *= x.x,
          c *= x.y,
          l += m,
          u += S,
          w = Bt(v),
          v = sf(w)
      }
  }
  return Vl({
      width: d,
      height: c,
      x: l,
      y: u
  })
}
function uN(e) {
  let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
  const a = o === "fixed"
    , i = Ln(r)
    , s = t ? Mu(t.floating) : !1;
  if (r === i || s && a)
      return n;
  let l = {
      scrollLeft: 0,
      scrollTop: 0
  }
    , u = Ur(1);
  const d = Ur(0)
    , c = In(r);
  if ((c || !c && !a) && ((Ia(r) !== "body" || is(i)) && (l = Nu(r)),
  In(r))) {
      const f = Eo(r);
      u = da(r),
      d.x = f.x + r.clientLeft,
      d.y = f.y + r.clientTop
  }
  return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + d.x,
      y: n.y * u.y - l.scrollTop * u.y + d.y
  }
}
function cN(e) {
  return Array.from(e.getClientRects())
}
function lf(e, t) {
  const n = Nu(e).scrollLeft;
  return t ? t.left + n : Eo(Ln(e)).left + n
}
function dN(e) {
  const t = Ln(e)
    , n = Nu(e)
    , r = e.ownerDocument.body
    , o = Lt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
    , a = Lt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + lf(e);
  const s = -n.scrollTop;
  return pn(r).direction === "rtl" && (i += Lt(t.clientWidth, r.clientWidth) - o),
  {
      width: o,
      height: a,
      x: i,
      y: s
  }
}
function fN(e, t) {
  const n = Bt(e)
    , r = Ln(e)
    , o = n.visualViewport;
  let a = r.clientWidth
    , i = r.clientHeight
    , s = 0
    , l = 0;
  if (o) {
      a = o.width,
      i = o.height;
      const u = jh();
      (!u || u && t === "fixed") && (s = o.offsetLeft,
      l = o.offsetTop)
  }
  return {
      width: a,
      height: i,
      x: s,
      y: l
  }
}
function hN(e, t) {
  const n = Eo(e, !0, t === "fixed")
    , r = n.top + e.clientTop
    , o = n.left + e.clientLeft
    , a = In(e) ? da(e) : Ur(1)
    , i = e.clientWidth * a.x
    , s = e.clientHeight * a.y
    , l = o * a.x
    , u = r * a.y;
  return {
      width: i,
      height: s,
      x: l,
      y: u
  }
}
function gg(e, t, n) {
  let r;
  if (t === "viewport")
      r = fN(e, n);
  else if (t === "document")
      r = dN(Ln(e));
  else if (mn(t))
      r = hN(t, n);
  else {
      const o = P1(e);
      r = {
          ...t,
          x: t.x - o.x,
          y: t.y - o.y
      }
  }
  return Vl(r)
}
function M1(e, t) {
  const n = Vr(e);
  return n === t || !mn(n) || Pa(n) ? !1 : pn(n).position === "fixed" || M1(n, t)
}
function mN(e, t) {
  const n = t.get(e);
  if (n)
      return n;
  let r = Yi(e, [], !1).filter(s => mn(s) && Ia(s) !== "body")
    , o = null;
  const a = pn(e).position === "fixed";
  let i = a ? Vr(e) : e;
  for (; mn(i) && !Pa(i); ) {
      const s = pn(i)
        , l = Ah(i);
      !l && s.position === "fixed" && (o = null),
      (a ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || is(i) && !l && M1(e, i)) ? r = r.filter(d => d !== i) : o = s,
      i = Vr(i)
  }
  return t.set(e, r),
  r
}
function pN(e) {
  let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
  const i = [...n === "clippingAncestors" ? Mu(t) ? [] : mN(t, this._c) : [].concat(n), r]
    , s = i[0]
    , l = i.reduce( (u, d) => {
      const c = gg(t, d, o);
      return u.top = Lt(c.top, u.top),
      u.right = Hr(c.right, u.right),
      u.bottom = Hr(c.bottom, u.bottom),
      u.left = Lt(c.left, u.left),
      u
  }
  , gg(t, s, o));
  return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top
  }
}
function gN(e) {
  const {width: t, height: n} = E1(e);
  return {
      width: t,
      height: n
  }
}
function vN(e, t, n) {
  const r = In(t)
    , o = Ln(t)
    , a = n === "fixed"
    , i = Eo(e, !0, a, t);
  let s = {
      scrollLeft: 0,
      scrollTop: 0
  };
  const l = Ur(0);
  if (r || !r && !a)
      if ((Ia(t) !== "body" || is(o)) && (s = Nu(t)),
      r) {
          const g = Eo(t, !0, a, t);
          l.x = g.x + t.clientLeft,
          l.y = g.y + t.clientTop
      } else
          o && (l.x = lf(o));
  let u = 0
    , d = 0;
  if (o && !r && !a) {
      const g = o.getBoundingClientRect();
      d = g.top + s.scrollTop,
      u = g.left + s.scrollLeft - lf(o, g)
  }
  const c = i.left + s.scrollLeft - l.x - u
    , f = i.top + s.scrollTop - l.y - d;
  return {
      x: c,
      y: f,
      width: i.width,
      height: i.height
  }
}
function Rc(e) {
  return pn(e).position === "static"
}
function vg(e, t) {
  if (!In(e) || pn(e).position === "fixed")
      return null;
  if (t)
      return t(e);
  let n = e.offsetParent;
  return Ln(e) === n && (n = n.ownerDocument.body),
  n
}
function N1(e, t) {
  const n = Bt(e);
  if (Mu(e))
      return n;
  if (!In(e)) {
      let o = Vr(e);
      for (; o && !Pa(o); ) {
          if (mn(o) && !Rc(o))
              return o;
          o = Vr(o)
      }
      return n
  }
  let r = vg(e, t);
  for (; r && aN(r) && Rc(r); )
      r = vg(r, t);
  return r && Pa(r) && Rc(r) && !Ah(r) ? n : r || iN(e) || n
}
const yN = async function(e) {
  const t = this.getOffsetParent || N1
    , n = this.getDimensions
    , r = await n(e.floating);
  return {
      reference: vN(e.reference, await t(e.floating), e.strategy),
      floating: {
          x: 0,
          y: 0,
          width: r.width,
          height: r.height
      }
  }
};
function wN(e) {
  return pn(e).direction === "rtl"
}
const xN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uN,
  getDocumentElement: Ln,
  getClippingRect: pN,
  getOffsetParent: N1,
  getElementRects: yN,
  getClientRects: cN,
  getDimensions: gN,
  getScale: da,
  isElement: mn,
  isRTL: wN
};
function bN(e, t) {
  let n = null, r;
  const o = Ln(e);
  function a() {
      var s;
      clearTimeout(r),
      (s = n) == null || s.disconnect(),
      n = null
  }
  function i(s, l) {
      s === void 0 && (s = !1),
      l === void 0 && (l = 1),
      a();
      const {left: u, top: d, width: c, height: f} = e.getBoundingClientRect();
      if (s || t(),
      !c || !f)
          return;
      const g = Hs(d)
        , w = Hs(o.clientWidth - (u + c))
        , v = Hs(o.clientHeight - (d + f))
        , x = Hs(u)
        , h = {
          rootMargin: -g + "px " + -w + "px " + -v + "px " + -x + "px",
          threshold: Lt(0, Hr(1, l)) || 1
      };
      let m = !0;
      function S(E) {
          const N = E[0].intersectionRatio;
          if (N !== l) {
              if (!m)
                  return i();
              N ? i(!1, N) : r = setTimeout( () => {
                  i(!1, 1e-7)
              }
              , 1e3)
          }
          m = !1
      }
      try {
          n = new IntersectionObserver(S,{
              ...h,
              root: o.ownerDocument
          })
      } catch {
          n = new IntersectionObserver(S,h)
      }
      n.observe(e)
  }
  return i(!0),
  a
}
function SN(e, t, n, r) {
  r === void 0 && (r = {});
  const {ancestorScroll: o=!0, ancestorResize: a=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
    , u = Ih(e)
    , d = o || a ? [...u ? Yi(u) : [], ...Yi(t)] : [];
  d.forEach(p => {
      o && p.addEventListener("scroll", n, {
          passive: !0
      }),
      a && p.addEventListener("resize", n)
  }
  );
  const c = u && s ? bN(u, n) : null;
  let f = -1
    , g = null;
  i && (g = new ResizeObserver(p => {
      let[h] = p;
      h && h.target === u && g && (g.unobserve(t),
      cancelAnimationFrame(f),
      f = requestAnimationFrame( () => {
          var m;
          (m = g) == null || m.observe(t)
      }
      )),
      n()
  }
  ),
  u && !l && g.observe(u),
  g.observe(t));
  let w, v = l ? Eo(e) : null;
  l && x();
  function x() {
      const p = Eo(e);
      v && (p.x !== v.x || p.y !== v.y || p.width !== v.width || p.height !== v.height) && n(),
      v = p,
      w = requestAnimationFrame(x)
  }
  return n(),
  () => {
      var p;
      d.forEach(h => {
          o && h.removeEventListener("scroll", n),
          a && h.removeEventListener("resize", n)
      }
      ),
      c == null || c(),
      (p = g) == null || p.disconnect(),
      g = null,
      l && cancelAnimationFrame(w)
  }
}
const kN = tN
, CN = nN
, EN = ZM
, PN = oN
, MN = JM
, yg = qM
, NN = rN
, ON = (e, t, n) => {
  const r = new Map
    , o = {
      platform: xN,
      ...n
  }
    , a = {
      ...o.platform,
      _c: r
  };
  return KM(e, t, {
      ...o,
      platform: a
  })
}
;
var cl = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
function Gl(e, t) {
  if (e === t)
      return !0;
  if (typeof e != typeof t)
      return !1;
  if (typeof e == "function" && e.toString() === t.toString())
      return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
          if (n = e.length,
          n !== t.length)
              return !1;
          for (r = n; r-- !== 0; )
              if (!Gl(e[r], t[r]))
                  return !1;
          return !0
      }
      if (o = Object.keys(e),
      n = o.length,
      n !== Object.keys(t).length)
          return !1;
      for (r = n; r-- !== 0; )
          if (!{}.hasOwnProperty.call(t, o[r]))
              return !1;
      for (r = n; r-- !== 0; ) {
          const a = o[r];
          if (!(a === "_owner" && e.$$typeof) && !Gl(e[a], t[a]))
              return !1
      }
      return !0
  }
  return e !== e && t !== t
}
function O1(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function wg(e, t) {
  const n = O1(e);
  return Math.round(t * n) / n
}
function _c(e) {
  const t = y.useRef(e);
  return cl( () => {
      t.current = e
  }
  ),
  t
}
function DN(e) {
  e === void 0 && (e = {});
  const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: a, floating: i}={}, transform: s=!0, whileElementsMounted: l, open: u} = e
    , [d,c] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1
  })
    , [f,g] = y.useState(r);
  Gl(f, r) || g(r);
  const [w,v] = y.useState(null)
    , [x,p] = y.useState(null)
    , h = y.useCallback(P => {
      P !== N.current && (N.current = P,
      v(P))
  }
  , [])
    , m = y.useCallback(P => {
      P !== O.current && (O.current = P,
      p(P))
  }
  , [])
    , S = a || w
    , E = i || x
    , N = y.useRef(null)
    , O = y.useRef(null)
    , k = y.useRef(d)
    , L = l != null
    , _ = _c(l)
    , F = _c(o)
    , H = _c(u)
    , J = y.useCallback( () => {
      if (!N.current || !O.current)
          return;
      const P = {
          placement: t,
          strategy: n,
          middleware: f
      };
      F.current && (P.platform = F.current),
      ON(N.current, O.current, P).then(T => {
          const A = {
              ...T,
              isPositioned: H.current !== !1
          };
          W.current && !Gl(k.current, A) && (k.current = A,
          Ra.flushSync( () => {
              c(A)
          }
          ))
      }
      )
  }
  , [f, t, n, F, H]);
  cl( () => {
      u === !1 && k.current.isPositioned && (k.current.isPositioned = !1,
      c(P => ({
          ...P,
          isPositioned: !1
      })))
  }
  , [u]);
  const W = y.useRef(!1);
  cl( () => (W.current = !0,
  () => {
      W.current = !1
  }
  ), []),
  cl( () => {
      if (S && (N.current = S),
      E && (O.current = E),
      S && E) {
          if (_.current)
              return _.current(S, E, J);
          J()
      }
  }
  , [S, E, J, _, L]);
  const I = y.useMemo( () => ({
      reference: N,
      floating: O,
      setReference: h,
      setFloating: m
  }), [h, m])
    , R = y.useMemo( () => ({
      reference: S,
      floating: E
  }), [S, E])
    , $ = y.useMemo( () => {
      const P = {
          position: n,
          left: 0,
          top: 0
      };
      if (!R.floating)
          return P;
      const T = wg(R.floating, d.x)
        , A = wg(R.floating, d.y);
      return s ? {
          ...P,
          transform: "translate(" + T + "px, " + A + "px)",
          ...O1(R.floating) >= 1.5 && {
              willChange: "transform"
          }
      } : {
          position: n,
          left: T,
          top: A
      }
  }
  , [n, s, R.floating, d.x, d.y]);
  return y.useMemo( () => ({
      ...d,
      update: J,
      refs: I,
      elements: R,
      floatingStyles: $
  }), [d, J, I, R, $])
}
const TN = e => {
  function t(n) {
      return {}.hasOwnProperty.call(n, "current")
  }
  return {
      name: "arrow",
      options: e,
      fn(n) {
          const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
          return r && t(r) ? r.current != null ? yg({
              element: r.current,
              padding: o
          }).fn(n) : {} : r ? yg({
              element: r,
              padding: o
          }).fn(n) : {}
      }
  }
}
, RN = (e, t) => ({
  ...kN(e),
  options: [e, t]
})
, _N = (e, t) => ({
  ...CN(e),
  options: [e, t]
})
, AN = (e, t) => ({
  ...NN(e),
  options: [e, t]
})
, jN = (e, t) => ({
  ...EN(e),
  options: [e, t]
})
, IN = (e, t) => ({
  ...PN(e),
  options: [e, t]
})
, LN = (e, t) => ({
  ...MN(e),
  options: [e, t]
})
, FN = (e, t) => ({
  ...TN(e),
  options: [e, t]
});
var WN = "Arrow"
, D1 = y.forwardRef( (e, t) => {
  const {children: n, width: r=10, height: o=5, ...a} = e;
  return b.jsx(Ne.svg, {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : b.jsx("polygon", {
          points: "0,0 30,0 15,10"
      })
  })
}
);
D1.displayName = WN;
var $N = D1;
function zN(e, t=[]) {
  let n = [];
  function r(a, i) {
      const s = y.createContext(i)
        , l = n.length;
      n = [...n, i];
      function u(c) {
          const {scope: f, children: g, ...w} = c
            , v = (f == null ? void 0 : f[e][l]) || s
            , x = y.useMemo( () => w, Object.values(w));
          return b.jsx(v.Provider, {
              value: x,
              children: g
          })
      }
      function d(c, f) {
          const g = (f == null ? void 0 : f[e][l]) || s
            , w = y.useContext(g);
          if (w)
              return w;
          if (i !== void 0)
              return i;
          throw new Error(`\`${c}\` must be used within \`${a}\``)
      }
      return u.displayName = a + "Provider",
      [u, d]
  }
  const o = () => {
      const a = n.map(i => y.createContext(i));
      return function(s) {
          const l = (s == null ? void 0 : s[e]) || a;
          return y.useMemo( () => ({
              [`__scope${e}`]: {
                  ...s,
                  [e]: l
              }
          }), [s, l])
      }
  }
  ;
  return o.scopeName = e,
  [r, BN(o, ...t)]
}
function BN(...e) {
  const t = e[0];
  if (e.length === 1)
      return t;
  const n = () => {
      const r = e.map(o => ({
          useScope: o(),
          scopeName: o.scopeName
      }));
      return function(a) {
          const i = r.reduce( (s, {useScope: l, scopeName: u}) => {
              const c = l(a)[`__scope${u}`];
              return {
                  ...s,
                  ...c
              }
          }
          , {});
          return y.useMemo( () => ({
              [`__scope${t.scopeName}`]: i
          }), [i])
      }
  }
  ;
  return n.scopeName = t.scopeName,
  n
}
var Lh = "Popper"
, [T1,Ou] = zN(Lh)
, [HN,R1] = T1(Lh)
, _1 = e => {
  const {__scopePopper: t, children: n} = e
    , [r,o] = y.useState(null);
  return b.jsx(HN, {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      children: n
  })
}
;
_1.displayName = Lh;
var A1 = "PopperAnchor"
, j1 = y.forwardRef( (e, t) => {
  const {__scopePopper: n, virtualRef: r, ...o} = e
    , a = R1(A1, n)
    , i = y.useRef(null)
    , s = He(t, i);
  return y.useEffect( () => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current)
  }
  ),
  r ? null : b.jsx(Ne.div, {
      ...o,
      ref: s
  })
}
);
j1.displayName = A1;
var Fh = "PopperContent"
, [UN,YN] = T1(Fh)
, I1 = y.forwardRef( (e, t) => {
  var V, se, be, re, le, ue;
  const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: a="center", alignOffset: i=0, arrowPadding: s=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: c="partial", hideWhenDetached: f=!1, updatePositionStrategy: g="optimized", onPlaced: w, ...v} = e
    , x = R1(Fh, n)
    , [p,h] = y.useState(null)
    , m = He(t, Qe => h(Qe))
    , [S,E] = y.useState(null)
    , N = P0(S)
    , O = (N == null ? void 0 : N.width) ?? 0
    , k = (N == null ? void 0 : N.height) ?? 0
    , L = r + (a !== "center" ? "-" + a : "")
    , _ = typeof d == "number" ? d : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...d
  }
    , F = Array.isArray(u) ? u : [u]
    , H = F.length > 0
    , J = {
      padding: _,
      boundary: F.filter(GN),
      altBoundary: H
  }
    , {refs: W, floatingStyles: I, placement: R, isPositioned: $, middlewareData: P} = DN({
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...Qe) => SN(...Qe, {
          animationFrame: g === "always"
      }),
      elements: {
          reference: x.anchor
      },
      middleware: [RN({
          mainAxis: o + k,
          alignmentAxis: i
      }), l && _N({
          mainAxis: !0,
          crossAxis: !1,
          limiter: c === "partial" ? AN() : void 0,
          ...J
      }), l && jN({
          ...J
      }), IN({
          ...J,
          apply: ({elements: Qe, rects: Oe, availableWidth: Pt, availableHeight: yn}) => {
              const {width: Fn, height: en} = Oe.reference
                , sr = Qe.floating.style;
              sr.setProperty("--radix-popper-available-width", `${Pt}px`),
              sr.setProperty("--radix-popper-available-height", `${yn}px`),
              sr.setProperty("--radix-popper-anchor-width", `${Fn}px`),
              sr.setProperty("--radix-popper-anchor-height", `${en}px`)
          }
      }), S && FN({
          element: S,
          padding: s
      }), XN({
          arrowWidth: O,
          arrowHeight: k
      }), f && LN({
          strategy: "referenceHidden",
          ...J
      })]
  })
    , [T,A] = W1(R)
    , B = er(w);
  kt( () => {
      $ && (B == null || B())
  }
  , [$, B]);
  const K = (V = P.arrow) == null ? void 0 : V.x
    , oe = (se = P.arrow) == null ? void 0 : se.y
    , ie = ((be = P.arrow) == null ? void 0 : be.centerOffset) !== 0
    , [ge,fe] = y.useState();
  return kt( () => {
      p && fe(window.getComputedStyle(p).zIndex)
  }
  , [p]),
  b.jsx("div", {
      ref: W.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
          ...I,
          transform: $ ? I.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [(re = P.transformOrigin) == null ? void 0 : re.x, (le = P.transformOrigin) == null ? void 0 : le.y].join(" "),
          ...((ue = P.hide) == null ? void 0 : ue.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none"
          }
      },
      dir: e.dir,
      children: b.jsx(UN, {
          scope: n,
          placedSide: T,
          onArrowChange: E,
          arrowX: K,
          arrowY: oe,
          shouldHideArrow: ie,
          children: b.jsx(Ne.div, {
              "data-side": T,
              "data-align": A,
              ...v,
              ref: m,
              style: {
                  ...v.style,
                  animation: $ ? void 0 : "none"
              }
          })
      })
  })
}
);
I1.displayName = Fh;
var L1 = "PopperArrow"
, VN = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}
, F1 = y.forwardRef(function(t, n) {
  const {__scopePopper: r, ...o} = t
    , a = YN(L1, r)
    , i = VN[a.placedSide];
  return b.jsx("span", {
      ref: a.onArrowChange,
      style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
          }[a.placedSide],
          transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
      },
      children: b.jsx($N, {
          ...o,
          ref: n,
          style: {
              ...o.style,
              display: "block"
          }
      })
  })
});
F1.displayName = L1;
function GN(e) {
  return e !== null
}
var XN = e => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
      var x, p, h;
      const {placement: n, rects: r, middlewareData: o} = t
        , i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0
        , s = i ? 0 : e.arrowWidth
        , l = i ? 0 : e.arrowHeight
        , [u,d] = W1(n)
        , c = {
          start: "0%",
          center: "50%",
          end: "100%"
      }[d]
        , f = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + s / 2
        , g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
      let w = ""
        , v = "";
      return u === "bottom" ? (w = i ? c : `${f}px`,
      v = `${-l}px`) : u === "top" ? (w = i ? c : `${f}px`,
      v = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`,
      v = i ? c : `${g}px`) : u === "left" && (w = `${r.floating.width + l}px`,
      v = i ? c : `${g}px`),
      {
          data: {
              x: w,
              y: v
          }
      }
  }
});
function W1(e) {
  const [t,n="center"] = e.split("-");
  return [t, n]
}
var $1 = _1
, Wh = j1
, z1 = I1
, B1 = F1
, QN = "Portal"
, Du = y.forwardRef( (e, t) => {
  var s;
  const {container: n, ...r} = e
    , [o,a] = y.useState(!1);
  kt( () => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? T2.createPortal(b.jsx(Ne.div, {
      ...r,
      ref: t
  }), i) : null
}
);
Du.displayName = QN;
var KN = function(e) {
  if (typeof document > "u")
      return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body
}
, Lo = new WeakMap
, Us = new WeakMap
, Ys = {}
, Ac = 0
, H1 = function(e) {
  return e && (e.host || H1(e.parentNode))
}
, qN = function(e, t) {
  return t.map(function(n) {
      if (e.contains(n))
          return n;
      var r = H1(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
      null)
  }).filter(function(n) {
      return !!n
  })
}
, ZN = function(e, t, n, r) {
  var o = qN(t, Array.isArray(e) ? e : [e]);
  Ys[n] || (Ys[n] = new WeakMap);
  var a = Ys[n]
    , i = []
    , s = new Set
    , l = new Set(o)
    , u = function(c) {
      !c || s.has(c) || (s.add(c),
      u(c.parentNode))
  };
  o.forEach(u);
  var d = function(c) {
      !c || l.has(c) || Array.prototype.forEach.call(c.children, function(f) {
          if (s.has(f))
              d(f);
          else
              try {
                  var g = f.getAttribute(r)
                    , w = g !== null && g !== "false"
                    , v = (Lo.get(f) || 0) + 1
                    , x = (a.get(f) || 0) + 1;
                  Lo.set(f, v),
                  a.set(f, x),
                  i.push(f),
                  v === 1 && w && Us.set(f, !0),
                  x === 1 && f.setAttribute(n, "true"),
                  w || f.setAttribute(r, "true")
              } catch (p) {
                  console.error("aria-hidden: cannot operate on ", f, p)
              }
      })
  };
  return d(t),
  s.clear(),
  Ac++,
  function() {
      i.forEach(function(c) {
          var f = Lo.get(c) - 1
            , g = a.get(c) - 1;
          Lo.set(c, f),
          a.set(c, g),
          f || (Us.has(c) || c.removeAttribute(r),
          Us.delete(c)),
          g || c.removeAttribute(n)
      }),
      Ac--,
      Ac || (Lo = new WeakMap,
      Lo = new WeakMap,
      Us = new WeakMap,
      Ys = {})
  }
}
, $h = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e])
    , o = KN(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
  ZN(r, o, n, "aria-hidden")) : function() {
      return null
  }
}
, Pn = function() {
  return Pn = Object.assign || function(t) {
      for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
      }
      return t
  }
  ,
  Pn.apply(this, arguments)
};
function U1(e, t) {
  var n = {};
  for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
}
function JN(e, t, n) {
  if (n || arguments.length === 2)
      for (var r = 0, o = t.length, a; r < o; r++)
          (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)),
          a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t))
}
var dl = "right-scroll-bar-position"
, fl = "width-before-scroll-bar"
, eO = "with-scroll-bars-hidden"
, tO = "--removed-body-scroll-bar-size";
function jc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t),
  e
}
function nO(e, t) {
  var n = y.useState(function() {
      return {
          value: e,
          callback: t,
          facade: {
              get current() {
                  return n.value
              },
              set current(r) {
                  var o = n.value;
                  o !== r && (n.value = r,
                  n.callback(r, o))
              }
          }
      }
  })[0];
  return n.callback = t,
  n.facade
}
var rO = typeof window < "u" ? y.useLayoutEffect : y.useEffect
, xg = new WeakMap;
function oO(e, t) {
  var n = nO(null, function(r) {
      return e.forEach(function(o) {
          return jc(o, r)
      })
  });
  return rO(function() {
      var r = xg.get(n);
      if (r) {
          var o = new Set(r)
            , a = new Set(e)
            , i = n.current;
          o.forEach(function(s) {
              a.has(s) || jc(s, null)
          }),
          a.forEach(function(s) {
              o.has(s) || jc(s, i)
          })
      }
      xg.set(n, e)
  }, [e]),
  n
}
function aO(e) {
  return e
}
function iO(e, t) {
  t === void 0 && (t = aO);
  var n = []
    , r = !1
    , o = {
      read: function() {
          if (r)
              throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          return n.length ? n[n.length - 1] : e
      },
      useMedium: function(a) {
          var i = t(a, r);
          return n.push(i),
          function() {
              n = n.filter(function(s) {
                  return s !== i
              })
          }
      },
      assignSyncMedium: function(a) {
          for (r = !0; n.length; ) {
              var i = n;
              n = [],
              i.forEach(a)
          }
          n = {
              push: function(s) {
                  return a(s)
              },
              filter: function() {
                  return n
              }
          }
      },
      assignMedium: function(a) {
          r = !0;
          var i = [];
          if (n.length) {
              var s = n;
              n = [],
              s.forEach(a),
              i = n
          }
          var l = function() {
              var d = i;
              i = [],
              d.forEach(a)
          }
            , u = function() {
              return Promise.resolve().then(l)
          };
          u(),
          n = {
              push: function(d) {
                  i.push(d),
                  u()
              },
              filter: function(d) {
                  return i = i.filter(d),
                  n
              }
          }
      }
  };
  return o
}
function sO(e) {
  e === void 0 && (e = {});
  var t = iO(null);
  return t.options = Pn({
      async: !0,
      ssr: !1
  }, e),
  t
}
var Y1 = function(e) {
  var t = e.sideCar
    , n = U1(e, ["sideCar"]);
  if (!t)
      throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
      throw new Error("Sidecar medium not found");
  return y.createElement(r, Pn({}, n))
};
Y1.isSideCarExport = !0;
function lO(e, t) {
  return e.useMedium(t),
  Y1
}
var V1 = sO()
, Ic = function() {}
, Tu = y.forwardRef(function(e, t) {
  var n = y.useRef(null)
    , r = y.useState({
      onScrollCapture: Ic,
      onWheelCapture: Ic,
      onTouchMoveCapture: Ic
  })
    , o = r[0]
    , a = r[1]
    , i = e.forwardProps
    , s = e.children
    , l = e.className
    , u = e.removeScrollBar
    , d = e.enabled
    , c = e.shards
    , f = e.sideCar
    , g = e.noIsolation
    , w = e.inert
    , v = e.allowPinchZoom
    , x = e.as
    , p = x === void 0 ? "div" : x
    , h = e.gapMode
    , m = U1(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
    , S = f
    , E = oO([n, t])
    , N = Pn(Pn({}, m), o);
  return y.createElement(y.Fragment, null, d && y.createElement(S, {
      sideCar: V1,
      removeScrollBar: u,
      shards: c,
      noIsolation: g,
      inert: w,
      setCallbacks: a,
      allowPinchZoom: !!v,
      lockRef: n,
      gapMode: h
  }), i ? y.cloneElement(y.Children.only(s), Pn(Pn({}, N), {
      ref: E
  })) : y.createElement(p, Pn({}, N, {
      className: l,
      ref: E
  }), s))
});
Tu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Tu.classNames = {
  fullWidth: fl,
  zeroRight: dl
};
var uO = function() {
  if (typeof __webpack_nonce__ < "u")
      return __webpack_nonce__
};
function cO() {
  if (!document)
      return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = uO();
  return t && e.setAttribute("nonce", t),
  e
}
function dO(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function fO(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e)
}
var hO = function() {
  var e = 0
    , t = null;
  return {
      add: function(n) {
          e == 0 && (t = cO()) && (dO(t, n),
          fO(t)),
          e++
      },
      remove: function() {
          e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t),
          t = null)
      }
  }
}
, mO = function() {
  var e = hO();
  return function(t, n) {
      y.useEffect(function() {
          return e.add(t),
          function() {
              e.remove()
          }
      }, [t && n])
  }
}
, G1 = function() {
  var e = mO()
    , t = function(n) {
      var r = n.styles
        , o = n.dynamic;
      return e(r, o),
      null
  };
  return t
}
, pO = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}
, Lc = function(e) {
  return parseInt(e || "", 10) || 0
}
, gO = function(e) {
  var t = window.getComputedStyle(document.body)
    , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
    , r = t[e === "padding" ? "paddingTop" : "marginTop"]
    , o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Lc(n), Lc(r), Lc(o)]
}
, vO = function(e) {
  if (e === void 0 && (e = "margin"),
  typeof window > "u")
      return pO;
  var t = gO(e)
    , n = document.documentElement.clientWidth
    , r = window.innerWidth;
  return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
  }
}
, yO = G1()
, fa = "data-scroll-locked"
, wO = function(e, t, n, r) {
  var o = e.left
    , a = e.top
    , i = e.right
    , s = e.gap;
  return n === void 0 && (n = "margin"),
  `
.`.concat(eO, ` {
 overflow: hidden `).concat(r, `;
 padding-right: `).concat(s, "px ").concat(r, `;
}
body[`).concat(fa, `] {
  overflow: hidden `).concat(r, `;
  overscroll-behavior: contain;
  `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
  padding-left: `.concat(o, `px;
  padding-top: `).concat(a, `px;
  padding-right: `).concat(i, `px;
  margin-left:0;
  margin-top:0;
  margin-right: `).concat(s, "px ").concat(r, `;
  `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
}

.`).concat(dl, ` {
  right: `).concat(s, "px ").concat(r, `;
}

.`).concat(fl, ` {
  margin-right: `).concat(s, "px ").concat(r, `;
}

.`).concat(dl, " .").concat(dl, ` {
  right: 0 `).concat(r, `;
}

.`).concat(fl, " .").concat(fl, ` {
  margin-right: 0 `).concat(r, `;
}

body[`).concat(fa, `] {
  `).concat(tO, ": ").concat(s, `px;
}
`)
}
, bg = function() {
  var e = parseInt(document.body.getAttribute(fa) || "0", 10);
  return isFinite(e) ? e : 0
}
, xO = function() {
  y.useEffect(function() {
      return document.body.setAttribute(fa, (bg() + 1).toString()),
      function() {
          var e = bg() - 1;
          e <= 0 ? document.body.removeAttribute(fa) : document.body.setAttribute(fa, e.toString())
      }
  }, [])
}
, bO = function(e) {
  var t = e.noRelative
    , n = e.noImportant
    , r = e.gapMode
    , o = r === void 0 ? "margin" : r;
  xO();
  var a = y.useMemo(function() {
      return vO(o)
  }, [o]);
  return y.createElement(yO, {
      styles: wO(a, !t, o, n ? "" : "!important")
  })
}
, uf = !1;
if (typeof window < "u")
  try {
      var Vs = Object.defineProperty({}, "passive", {
          get: function() {
              return uf = !0,
              !0
          }
      });
      window.addEventListener("test", Vs, Vs),
      window.removeEventListener("test", Vs, Vs)
  } catch {
      uf = !1
  }
var Fo = uf ? {
  passive: !1
} : !1
, SO = function(e) {
  return e.tagName === "TEXTAREA"
}
, X1 = function(e, t) {
  if (!(e instanceof Element))
      return !1;
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !SO(e) && n[t] === "visible")
}
, kO = function(e) {
  return X1(e, "overflowY")
}
, CO = function(e) {
  return X1(e, "overflowX")
}
, Sg = function(e, t) {
  var n = t.ownerDocument
    , r = t;
  do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Q1(e, r);
      if (o) {
          var a = K1(e, r)
            , i = a[1]
            , s = a[2];
          if (i > s)
              return !0
      }
      r = r.parentNode
  } while (r && r !== n.body);
  return !1
}
, EO = function(e) {
  var t = e.scrollTop
    , n = e.scrollHeight
    , r = e.clientHeight;
  return [t, n, r]
}
, PO = function(e) {
  var t = e.scrollLeft
    , n = e.scrollWidth
    , r = e.clientWidth;
  return [t, n, r]
}
, Q1 = function(e, t) {
  return e === "v" ? kO(t) : CO(t)
}
, K1 = function(e, t) {
  return e === "v" ? EO(t) : PO(t)
}
, MO = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1
}
, NO = function(e, t, n, r, o) {
  var a = MO(e, window.getComputedStyle(t).direction)
    , i = a * r
    , s = n.target
    , l = t.contains(s)
    , u = !1
    , d = i > 0
    , c = 0
    , f = 0;
  do {
      var g = K1(e, s)
        , w = g[0]
        , v = g[1]
        , x = g[2]
        , p = v - x - a * w;
      (w || p) && Q1(e, s) && (c += p,
      f += w),
      s instanceof ShadowRoot ? s = s.host : s = s.parentNode
  } while (!l && s !== document.body || l && (t.contains(s) || t === s));
  return (d && (Math.abs(c) < 1 || !o) || !d && (Math.abs(f) < 1 || !o)) && (u = !0),
  u
}
, Gs = function(e) {
  return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
, kg = function(e) {
  return [e.deltaX, e.deltaY]
}
, Cg = function(e) {
  return e && "current"in e ? e.current : e
}
, OO = function(e, t) {
  return e[0] === t[0] && e[1] === t[1]
}
, DO = function(e) {
  return `
.block-interactivity-`.concat(e, ` {pointer-events: none;}
.allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
, TO = 0
, Wo = [];
function RO(e) {
  var t = y.useRef([])
    , n = y.useRef([0, 0])
    , r = y.useRef()
    , o = y.useState(TO++)[0]
    , a = y.useState(G1)[0]
    , i = y.useRef(e);
  y.useEffect(function() {
      i.current = e
  }, [e]),
  y.useEffect(function() {
      if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = JN([e.lockRef.current], (e.shards || []).map(Cg), !0).filter(Boolean);
          return v.forEach(function(x) {
              return x.classList.add("allow-interactivity-".concat(o))
          }),
          function() {
              document.body.classList.remove("block-interactivity-".concat(o)),
              v.forEach(function(x) {
                  return x.classList.remove("allow-interactivity-".concat(o))
              })
          }
      }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = y.useCallback(function(v, x) {
      if ("touches"in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
          return !i.current.allowPinchZoom;
      var p = Gs(v), h = n.current, m = "deltaX"in v ? v.deltaX : h[0] - p[0], S = "deltaY"in v ? v.deltaY : h[1] - p[1], E, N = v.target, O = Math.abs(m) > Math.abs(S) ? "h" : "v";
      if ("touches"in v && O === "h" && N.type === "range")
          return !1;
      var k = Sg(O, N);
      if (!k)
          return !0;
      if (k ? E = O : (E = O === "v" ? "h" : "v",
      k = Sg(O, N)),
      !k)
          return !1;
      if (!r.current && "changedTouches"in v && (m || S) && (r.current = E),
      !E)
          return !0;
      var L = r.current || E;
      return NO(L, x, v, L === "h" ? m : S, !0)
  }, [])
    , l = y.useCallback(function(v) {
      var x = v;
      if (!(!Wo.length || Wo[Wo.length - 1] !== a)) {
          var p = "deltaY"in x ? kg(x) : Gs(x)
            , h = t.current.filter(function(E) {
              return E.name === x.type && (E.target === x.target || x.target === E.shadowParent) && OO(E.delta, p)
          })[0];
          if (h && h.should) {
              x.cancelable && x.preventDefault();
              return
          }
          if (!h) {
              var m = (i.current.shards || []).map(Cg).filter(Boolean).filter(function(E) {
                  return E.contains(x.target)
              })
                , S = m.length > 0 ? s(x, m[0]) : !i.current.noIsolation;
              S && x.cancelable && x.preventDefault()
          }
      }
  }, [])
    , u = y.useCallback(function(v, x, p, h) {
      var m = {
          name: v,
          delta: x,
          target: p,
          should: h,
          shadowParent: _O(p)
      };
      t.current.push(m),
      setTimeout(function() {
          t.current = t.current.filter(function(S) {
              return S !== m
          })
      }, 1)
  }, [])
    , d = y.useCallback(function(v) {
      n.current = Gs(v),
      r.current = void 0
  }, [])
    , c = y.useCallback(function(v) {
      u(v.type, kg(v), v.target, s(v, e.lockRef.current))
  }, [])
    , f = y.useCallback(function(v) {
      u(v.type, Gs(v), v.target, s(v, e.lockRef.current))
  }, []);
  y.useEffect(function() {
      return Wo.push(a),
      e.setCallbacks({
          onScrollCapture: c,
          onWheelCapture: c,
          onTouchMoveCapture: f
      }),
      document.addEventListener("wheel", l, Fo),
      document.addEventListener("touchmove", l, Fo),
      document.addEventListener("touchstart", d, Fo),
      function() {
          Wo = Wo.filter(function(v) {
              return v !== a
          }),
          document.removeEventListener("wheel", l, Fo),
          document.removeEventListener("touchmove", l, Fo),
          document.removeEventListener("touchstart", d, Fo)
      }
  }, []);
  var g = e.removeScrollBar
    , w = e.inert;
  return y.createElement(y.Fragment, null, w ? y.createElement(a, {
      styles: DO(o)
  }) : null, g ? y.createElement(bO, {
      gapMode: e.gapMode
  }) : null)
}
function _O(e) {
  for (var t = null; e !== null; )
      e instanceof ShadowRoot && (t = e.host,
      e = e.host),
      e = e.parentNode;
  return t
}
const AO = lO(V1, RO);
var Ru = y.forwardRef(function(e, t) {
  return y.createElement(Tu, Pn({}, e, {
      ref: t,
      sideCar: AO
  }))
});
Ru.classNames = Tu.classNames;
var zh = "Popover"
, [q1,X_] = wu(zh, [Ou])
, ss = Ou()
, [jO,qr] = q1(zh)
, Z1 = e => {
  const {__scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i=!1} = e
    , s = ss(t)
    , l = y.useRef(null)
    , [u,d] = y.useState(!1)
    , [c=!1,f] = zi({
      prop: r,
      defaultProp: o,
      onChange: a
  });
  return b.jsx($1, {
      ...s,
      children: b.jsx(jO, {
          scope: t,
          contentId: vo(),
          triggerRef: l,
          open: c,
          onOpenChange: f,
          onOpenToggle: y.useCallback( () => f(g => !g), [f]),
          hasCustomAnchor: u,
          onCustomAnchorAdd: y.useCallback( () => d(!0), []),
          onCustomAnchorRemove: y.useCallback( () => d(!1), []),
          modal: i,
          children: n
      })
  })
}
;
Z1.displayName = zh;
var J1 = "PopoverAnchor"
, IO = y.forwardRef( (e, t) => {
  const {__scopePopover: n, ...r} = e
    , o = qr(J1, n)
    , a = ss(n)
    , {onCustomAnchorAdd: i, onCustomAnchorRemove: s} = o;
  return y.useEffect( () => (i(),
  () => s()), [i, s]),
  b.jsx(Wh, {
      ...a,
      ...r,
      ref: t
  })
}
);
IO.displayName = J1;
var ew = "PopoverTrigger"
, tw = y.forwardRef( (e, t) => {
  const {__scopePopover: n, ...r} = e
    , o = qr(ew, n)
    , a = ss(n)
    , i = He(t, o.triggerRef)
    , s = b.jsx(Ne.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": iw(o.open),
      ...r,
      ref: i,
      onClick: we(e.onClick, o.onOpenToggle)
  });
  return o.hasCustomAnchor ? s : b.jsx(Wh, {
      asChild: !0,
      ...a,
      children: s
  })
}
);
tw.displayName = ew;
var Bh = "PopoverPortal"
, [LO,FO] = q1(Bh, {
  forceMount: void 0
})
, nw = e => {
  const {__scopePopover: t, forceMount: n, children: r, container: o} = e
    , a = qr(Bh, t);
  return b.jsx(LO, {
      scope: t,
      forceMount: n,
      children: b.jsx(Do, {
          present: n || a.open,
          children: b.jsx(Du, {
              asChild: !0,
              container: o,
              children: r
          })
      })
  })
}
;
nw.displayName = Bh;
var Ma = "PopoverContent"
, rw = y.forwardRef( (e, t) => {
  const n = FO(Ma, e.__scopePopover)
    , {forceMount: r=n.forceMount, ...o} = e
    , a = qr(Ma, e.__scopePopover);
  return b.jsx(Do, {
      present: r || a.open,
      children: a.modal ? b.jsx(WO, {
          ...o,
          ref: t
      }) : b.jsx($O, {
          ...o,
          ref: t
      })
  })
}
);
rw.displayName = Ma;
var WO = y.forwardRef( (e, t) => {
  const n = qr(Ma, e.__scopePopover)
    , r = y.useRef(null)
    , o = He(t, r)
    , a = y.useRef(!1);
  return y.useEffect( () => {
      const i = r.current;
      if (i)
          return $h(i)
  }
  , []),
  b.jsx(Ru, {
      as: Wr,
      allowPinchZoom: !0,
      children: b.jsx(ow, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: we(e.onCloseAutoFocus, i => {
              var s;
              i.preventDefault(),
              a.current || (s = n.triggerRef.current) == null || s.focus()
          }
          ),
          onPointerDownOutside: we(e.onPointerDownOutside, i => {
              const s = i.detail.originalEvent
                , l = s.button === 0 && s.ctrlKey === !0
                , u = s.button === 2 || l;
              a.current = u
          }
          , {
              checkForDefaultPrevented: !1
          }),
          onFocusOutside: we(e.onFocusOutside, i => i.preventDefault(), {
              checkForDefaultPrevented: !1
          })
      })
  })
}
)
, $O = y.forwardRef( (e, t) => {
  const n = qr(Ma, e.__scopePopover)
    , r = y.useRef(!1)
    , o = y.useRef(!1);
  return b.jsx(ow, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: a => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a),
          a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(),
          a.preventDefault()),
          r.current = !1,
          o.current = !1
      }
      ,
      onInteractOutside: a => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a),
          a.defaultPrevented || (r.current = !0,
          a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(),
          a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault()
      }
  })
}
)
, ow = y.forwardRef( (e, t) => {
  const {__scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: d, ...c} = e
    , f = qr(Ma, n)
    , g = ss(n);
  return Dh(),
  b.jsx(Eu, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: o,
      onUnmountAutoFocus: a,
      children: b.jsx(Cu, {
          asChild: !0,
          disableOutsidePointerEvents: i,
          onInteractOutside: d,
          onEscapeKeyDown: s,
          onPointerDownOutside: l,
          onFocusOutside: u,
          onDismiss: () => f.onOpenChange(!1),
          children: b.jsx(z1, {
              "data-state": iw(f.open),
              role: "dialog",
              id: f.contentId,
              ...g,
              ...c,
              ref: t,
              style: {
                  ...c.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
          })
      })
  })
}
)
, aw = "PopoverClose"
, zO = y.forwardRef( (e, t) => {
  const {__scopePopover: n, ...r} = e
    , o = qr(aw, n);
  return b.jsx(Ne.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: we(e.onClick, () => o.onOpenChange(!1))
  })
}
);
zO.displayName = aw;
var BO = "PopoverArrow"
, HO = y.forwardRef( (e, t) => {
  const {__scopePopover: n, ...r} = e
    , o = ss(n);
  return b.jsx(B1, {
      ...o,
      ...r,
      ref: t
  })
}
);
HO.displayName = BO;
function iw(e) {
  return e ? "open" : "closed"
}
var UO = Z1
, YO = tw
, VO = nw
, sw = rw;
const GO = UO
, XO = YO
, lw = y.forwardRef( ({className: e, align: t="center", sideOffset: n=4, ...r}, o) => b.jsx(VO, {
  children: b.jsx(sw, {
      ref: o,
      align: t,
      sideOffset: n,
      className: _e("z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", e),
      ...r
  })
}));
lw.displayName = sw.displayName;
function _t(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function gn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t)
}
function QO(e, t) {
  const n = _t(e);
  return isNaN(t) ? gn(e, NaN) : (t && n.setDate(n.getDate() + t),
  n)
}
function KO(e, t) {
  const n = _t(e);
  if (isNaN(t))
      return gn(e, NaN);
  if (!t)
      return n;
  const r = n.getDate()
    , o = gn(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r),
  n)
}
function qO(e, t) {
  const {years: n=0, months: r=0, weeks: o=0, days: a=0, hours: i=0, minutes: s=0, seconds: l=0} = t
    , u = _t(e)
    , d = r || n ? KO(u, r + n * 12) : u
    , c = a || o ? QO(d, a + o * 7) : d
    , f = s + i * 60
    , w = (l + f * 60) * 1e3;
  return gn(e, c.getTime() + w)
}
const uw = 6048e5
, ZO = 864e5;
let JO = {};
function _u() {
  return JO
}
function Vi(e, t) {
  var s, l, u, d;
  const n = _u()
    , r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0
    , o = _t(e)
    , a = o.getDay()
    , i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i),
  o.setHours(0, 0, 0, 0),
  o
}
function Xl(e) {
  return Vi(e, {
      weekStartsOn: 1
  })
}
function cw(e) {
  const t = _t(e)
    , n = t.getFullYear()
    , r = gn(e, 0);
  r.setFullYear(n + 1, 0, 4),
  r.setHours(0, 0, 0, 0);
  const o = Xl(r)
    , a = gn(e, 0);
  a.setFullYear(n, 0, 4),
  a.setHours(0, 0, 0, 0);
  const i = Xl(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}
function Eg(e) {
  const t = _t(e);
  return t.setHours(0, 0, 0, 0),
  t
}
function Pg(e) {
  const t = _t(e)
    , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return n.setUTCFullYear(t.getFullYear()),
  +e - +n
}
function eD(e, t) {
  const n = Eg(e)
    , r = Eg(t)
    , o = +n - Pg(n)
    , a = +r - Pg(r);
  return Math.round((o - a) / ZO)
}
function tD(e) {
  const t = cw(e)
    , n = gn(e, 0);
  return n.setFullYear(t, 0, 4),
  n.setHours(0, 0, 0, 0),
  Xl(n)
}
function nD(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function rD(e) {
  if (!nD(e) && typeof e != "number")
      return !1;
  const t = _t(e);
  return !isNaN(Number(t))
}
function oD(e) {
  const t = _t(e)
    , n = gn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1),
  n.setHours(0, 0, 0, 0),
  n
}
const aD = {
  lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
  },
  xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
  },
  xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
  },
  aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
  },
  xHours: {
      one: "1 hour",
      other: "{{count}} hours"
  },
  xDays: {
      one: "1 day",
      other: "{{count}} days"
  },
  aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
  },
  xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
  },
  aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
  },
  xMonths: {
      one: "1 month",
      other: "{{count}} months"
  },
  aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
  },
  xYears: {
      one: "1 year",
      other: "{{count}} years"
  },
  overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
  },
  almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
  }
}
, iD = (e, t, n) => {
  let r;
  const o = aD[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
  n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function Fc(e) {
  return (t={}) => {
      const n = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[n] || e.formats[e.defaultWidth]
  }
}
const sD = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}
, lD = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}
, uD = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}
, cD = {
  date: Fc({
      formats: sD,
      defaultWidth: "full"
  }),
  time: Fc({
      formats: lD,
      defaultWidth: "full"
  }),
  dateTime: Fc({
      formats: uD,
      defaultWidth: "full"
  })
}
, dD = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}
, fD = (e, t, n, r) => dD[e];
function Za(e) {
  return (t, n) => {
      const r = n != null && n.context ? String(n.context) : "standalone";
      let o;
      if (r === "formatting" && e.formattingValues) {
          const i = e.defaultFormattingWidth || e.defaultWidth
            , s = n != null && n.width ? String(n.width) : i;
          o = e.formattingValues[s] || e.formattingValues[i]
      } else {
          const i = e.defaultWidth
            , s = n != null && n.width ? String(n.width) : e.defaultWidth;
          o = e.values[s] || e.values[i]
      }
      const a = e.argumentCallback ? e.argumentCallback(t) : t;
      return o[a]
  }
}
const hD = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}
, mD = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
, pD = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
, gD = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
, vD = {
  narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
  },
  abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
  },
  wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
  }
}
, yD = {
  narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
  },
  abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
  },
  wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
  }
}
, wD = (e, t) => {
  const n = Number(e)
    , r = n % 100;
  if (r > 20 || r < 10)
      switch (r % 10) {
      case 1:
          return n + "st";
      case 2:
          return n + "nd";
      case 3:
          return n + "rd"
      }
  return n + "th"
}
, xD = {
  ordinalNumber: wD,
  era: Za({
      values: hD,
      defaultWidth: "wide"
  }),
  quarter: Za({
      values: mD,
      defaultWidth: "wide",
      argumentCallback: e => e - 1
  }),
  month: Za({
      values: pD,
      defaultWidth: "wide"
  }),
  day: Za({
      values: gD,
      defaultWidth: "wide"
  }),
  dayPeriod: Za({
      values: vD,
      defaultWidth: "wide",
      formattingValues: yD,
      defaultFormattingWidth: "wide"
  })
};
function Ja(e) {
  return (t, n={}) => {
      const r = n.width
        , o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
        , a = t.match(o);
      if (!a)
          return null;
      const i = a[0]
        , s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
        , l = Array.isArray(s) ? SD(s, c => c.test(i)) : bD(s, c => c.test(i));
      let u;
      u = e.valueCallback ? e.valueCallback(l) : l,
      u = n.valueCallback ? n.valueCallback(u) : u;
      const d = t.slice(i.length);
      return {
          value: u,
          rest: d
      }
  }
}
function bD(e, t) {
  for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
          return n
}
function SD(e, t) {
  for (let n = 0; n < e.length; n++)
      if (t(e[n]))
          return n
}
function kD(e) {
  return (t, n={}) => {
      const r = t.match(e.matchPattern);
      if (!r)
          return null;
      const o = r[0]
        , a = t.match(e.parsePattern);
      if (!a)
          return null;
      let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
      i = n.valueCallback ? n.valueCallback(i) : i;
      const s = t.slice(o.length);
      return {
          value: i,
          rest: s
      }
  }
}
const CD = /^(\d+)(th|st|nd|rd)?/i
, ED = /\d+/i
, PD = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}
, MD = {
  any: [/^b/i, /^(a|c)/i]
}
, ND = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}
, OD = {
  any: [/1/i, /2/i, /3/i, /4/i]
}
, DD = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
, TD = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
, RD = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
, _D = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
, AD = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
, jD = {
  any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
  }
}
, ID = {
  ordinalNumber: kD({
      matchPattern: CD,
      parsePattern: ED,
      valueCallback: e => parseInt(e, 10)
  }),
  era: Ja({
      matchPatterns: PD,
      defaultMatchWidth: "wide",
      parsePatterns: MD,
      defaultParseWidth: "any"
  }),
  quarter: Ja({
      matchPatterns: ND,
      defaultMatchWidth: "wide",
      parsePatterns: OD,
      defaultParseWidth: "any",
      valueCallback: e => e + 1
  }),
  month: Ja({
      matchPatterns: DD,
      defaultMatchWidth: "wide",
      parsePatterns: TD,
      defaultParseWidth: "any"
  }),
  day: Ja({
      matchPatterns: RD,
      defaultMatchWidth: "wide",
      parsePatterns: _D,
      defaultParseWidth: "any"
  }),
  dayPeriod: Ja({
      matchPatterns: AD,
      defaultMatchWidth: "any",
      parsePatterns: jD,
      defaultParseWidth: "any"
  })
}
, xi = {
  code: "en-US",
  formatDistance: iD,
  formatLong: cD,
  formatRelative: fD,
  localize: xD,
  match: ID,
  options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
  }
};
function LD(e) {
  const t = _t(e);
  return eD(t, oD(t)) + 1
}
function FD(e) {
  const t = _t(e)
    , n = +Xl(t) - +tD(t);
  return Math.round(n / uw) + 1
}
function dw(e, t) {
  var d, c, f, g;
  const n = _t(e)
    , r = n.getFullYear()
    , o = _u()
    , a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1
    , i = gn(e, 0);
  i.setFullYear(r + 1, 0, a),
  i.setHours(0, 0, 0, 0);
  const s = Vi(i, t)
    , l = gn(e, 0);
  l.setFullYear(r, 0, a),
  l.setHours(0, 0, 0, 0);
  const u = Vi(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1
}
function WD(e, t) {
  var s, l, u, d;
  const n = _u()
    , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
    , o = dw(e, t)
    , a = gn(e, 0);
  return a.setFullYear(o, 0, r),
  a.setHours(0, 0, 0, 0),
  Vi(a, t)
}
function $D(e, t) {
  const n = _t(e)
    , r = +Vi(n, t) - +WD(n, t);
  return Math.round(r / uw) + 1
}
function Ee(e, t) {
  const n = e < 0 ? "-" : ""
    , r = Math.abs(e).toString().padStart(t, "0");
  return n + r
}
const gr = {
  y(e, t) {
      const n = e.getFullYear()
        , r = n > 0 ? n : 1 - n;
      return Ee(t === "yy" ? r % 100 : r, t.length)
  },
  M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : Ee(n + 1, 2)
  },
  d(e, t) {
      return Ee(e.getDate(), t.length)
  },
  a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
      case "a":
      case "aa":
          return n.toUpperCase();
      case "aaa":
          return n;
      case "aaaaa":
          return n[0];
      case "aaaa":
      default:
          return n === "am" ? "a.m." : "p.m."
      }
  },
  h(e, t) {
      return Ee(e.getHours() % 12 || 12, t.length)
  },
  H(e, t) {
      return Ee(e.getHours(), t.length)
  },
  m(e, t) {
      return Ee(e.getMinutes(), t.length)
  },
  s(e, t) {
      return Ee(e.getSeconds(), t.length)
  },
  S(e, t) {
      const n = t.length
        , r = e.getMilliseconds()
        , o = Math.trunc(r * Math.pow(10, n - 3));
      return Ee(o, t.length)
  }
}
, $o = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}
, Mg = {
  G: function(e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
      case "G":
      case "GG":
      case "GGG":
          return n.era(r, {
              width: "abbreviated"
          });
      case "GGGGG":
          return n.era(r, {
              width: "narrow"
          });
      case "GGGG":
      default:
          return n.era(r, {
              width: "wide"
          })
      }
  },
  y: function(e, t, n) {
      if (t === "yo") {
          const r = e.getFullYear()
            , o = r > 0 ? r : 1 - r;
          return n.ordinalNumber(o, {
              unit: "year"
          })
      }
      return gr.y(e, t)
  },
  Y: function(e, t, n, r) {
      const o = dw(e, r)
        , a = o > 0 ? o : 1 - o;
      if (t === "YY") {
          const i = a % 100;
          return Ee(i, 2)
      }
      return t === "Yo" ? n.ordinalNumber(a, {
          unit: "year"
      }) : Ee(a, t.length)
  },
  R: function(e, t) {
      const n = cw(e);
      return Ee(n, t.length)
  },
  u: function(e, t) {
      const n = e.getFullYear();
      return Ee(n, t.length)
  },
  Q: function(e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
      case "Q":
          return String(r);
      case "QQ":
          return Ee(r, 2);
      case "Qo":
          return n.ordinalNumber(r, {
              unit: "quarter"
          });
      case "QQQ":
          return n.quarter(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "QQQQQ":
          return n.quarter(r, {
              width: "narrow",
              context: "formatting"
          });
      case "QQQQ":
      default:
          return n.quarter(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  q: function(e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
      case "q":
          return String(r);
      case "qq":
          return Ee(r, 2);
      case "qo":
          return n.ordinalNumber(r, {
              unit: "quarter"
          });
      case "qqq":
          return n.quarter(r, {
              width: "abbreviated",
              context: "standalone"
          });
      case "qqqqq":
          return n.quarter(r, {
              width: "narrow",
              context: "standalone"
          });
      case "qqqq":
      default:
          return n.quarter(r, {
              width: "wide",
              context: "standalone"
          })
      }
  },
  M: function(e, t, n) {
      const r = e.getMonth();
      switch (t) {
      case "M":
      case "MM":
          return gr.M(e, t);
      case "Mo":
          return n.ordinalNumber(r + 1, {
              unit: "month"
          });
      case "MMM":
          return n.month(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "MMMMM":
          return n.month(r, {
              width: "narrow",
              context: "formatting"
          });
      case "MMMM":
      default:
          return n.month(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  L: function(e, t, n) {
      const r = e.getMonth();
      switch (t) {
      case "L":
          return String(r + 1);
      case "LL":
          return Ee(r + 1, 2);
      case "Lo":
          return n.ordinalNumber(r + 1, {
              unit: "month"
          });
      case "LLL":
          return n.month(r, {
              width: "abbreviated",
              context: "standalone"
          });
      case "LLLLL":
          return n.month(r, {
              width: "narrow",
              context: "standalone"
          });
      case "LLLL":
      default:
          return n.month(r, {
              width: "wide",
              context: "standalone"
          })
      }
  },
  w: function(e, t, n, r) {
      const o = $D(e, r);
      return t === "wo" ? n.ordinalNumber(o, {
          unit: "week"
      }) : Ee(o, t.length)
  },
  I: function(e, t, n) {
      const r = FD(e);
      return t === "Io" ? n.ordinalNumber(r, {
          unit: "week"
      }) : Ee(r, t.length)
  },
  d: function(e, t, n) {
      return t === "do" ? n.ordinalNumber(e.getDate(), {
          unit: "date"
      }) : gr.d(e, t)
  },
  D: function(e, t, n) {
      const r = LD(e);
      return t === "Do" ? n.ordinalNumber(r, {
          unit: "dayOfYear"
      }) : Ee(r, t.length)
  },
  E: function(e, t, n) {
      const r = e.getDay();
      switch (t) {
      case "E":
      case "EE":
      case "EEE":
          return n.day(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "EEEEE":
          return n.day(r, {
              width: "narrow",
              context: "formatting"
          });
      case "EEEEEE":
          return n.day(r, {
              width: "short",
              context: "formatting"
          });
      case "EEEE":
      default:
          return n.day(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  e: function(e, t, n, r) {
      const o = e.getDay()
        , a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
      case "e":
          return String(a);
      case "ee":
          return Ee(a, 2);
      case "eo":
          return n.ordinalNumber(a, {
              unit: "day"
          });
      case "eee":
          return n.day(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "eeeee":
          return n.day(o, {
              width: "narrow",
              context: "formatting"
          });
      case "eeeeee":
          return n.day(o, {
              width: "short",
              context: "formatting"
          });
      case "eeee":
      default:
          return n.day(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  c: function(e, t, n, r) {
      const o = e.getDay()
        , a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
      case "c":
          return String(a);
      case "cc":
          return Ee(a, t.length);
      case "co":
          return n.ordinalNumber(a, {
              unit: "day"
          });
      case "ccc":
          return n.day(o, {
              width: "abbreviated",
              context: "standalone"
          });
      case "ccccc":
          return n.day(o, {
              width: "narrow",
              context: "standalone"
          });
      case "cccccc":
          return n.day(o, {
              width: "short",
              context: "standalone"
          });
      case "cccc":
      default:
          return n.day(o, {
              width: "wide",
              context: "standalone"
          })
      }
  },
  i: function(e, t, n) {
      const r = e.getDay()
        , o = r === 0 ? 7 : r;
      switch (t) {
      case "i":
          return String(o);
      case "ii":
          return Ee(o, t.length);
      case "io":
          return n.ordinalNumber(o, {
              unit: "day"
          });
      case "iii":
          return n.day(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "iiiii":
          return n.day(r, {
              width: "narrow",
              context: "formatting"
          });
      case "iiiiii":
          return n.day(r, {
              width: "short",
              context: "formatting"
          });
      case "iiii":
      default:
          return n.day(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  a: function(e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
      case "a":
      case "aa":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "aaa":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          }).toLowerCase();
      case "aaaaa":
          return n.dayPeriod(o, {
              width: "narrow",
              context: "formatting"
          });
      case "aaaa":
      default:
          return n.dayPeriod(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  b: function(e, t, n) {
      const r = e.getHours();
      let o;
      switch (r === 12 ? o = $o.noon : r === 0 ? o = $o.midnight : o = r / 12 >= 1 ? "pm" : "am",
      t) {
      case "b":
      case "bb":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "bbb":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          }).toLowerCase();
      case "bbbbb":
          return n.dayPeriod(o, {
              width: "narrow",
              context: "formatting"
          });
      case "bbbb":
      default:
          return n.dayPeriod(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  B: function(e, t, n) {
      const r = e.getHours();
      let o;
      switch (r >= 17 ? o = $o.evening : r >= 12 ? o = $o.afternoon : r >= 4 ? o = $o.morning : o = $o.night,
      t) {
      case "B":
      case "BB":
      case "BBB":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "BBBBB":
          return n.dayPeriod(o, {
              width: "narrow",
              context: "formatting"
          });
      case "BBBB":
      default:
          return n.dayPeriod(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  h: function(e, t, n) {
      if (t === "ho") {
          let r = e.getHours() % 12;
          return r === 0 && (r = 12),
          n.ordinalNumber(r, {
              unit: "hour"
          })
      }
      return gr.h(e, t)
  },
  H: function(e, t, n) {
      return t === "Ho" ? n.ordinalNumber(e.getHours(), {
          unit: "hour"
      }) : gr.H(e, t)
  },
  K: function(e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, {
          unit: "hour"
      }) : Ee(r, t.length)
  },
  k: function(e, t, n) {
      let r = e.getHours();
      return r === 0 && (r = 24),
      t === "ko" ? n.ordinalNumber(r, {
          unit: "hour"
      }) : Ee(r, t.length)
  },
  m: function(e, t, n) {
      return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
          unit: "minute"
      }) : gr.m(e, t)
  },
  s: function(e, t, n) {
      return t === "so" ? n.ordinalNumber(e.getSeconds(), {
          unit: "second"
      }) : gr.s(e, t)
  },
  S: function(e, t) {
      return gr.S(e, t)
  },
  X: function(e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0)
          return "Z";
      switch (t) {
      case "X":
          return Og(r);
      case "XXXX":
      case "XX":
          return ro(r);
      case "XXXXX":
      case "XXX":
      default:
          return ro(r, ":")
      }
  },
  x: function(e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
      case "x":
          return Og(r);
      case "xxxx":
      case "xx":
          return ro(r);
      case "xxxxx":
      case "xxx":
      default:
          return ro(r, ":")
      }
  },
  O: function(e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
      case "O":
      case "OO":
      case "OOO":
          return "GMT" + Ng(r, ":");
      case "OOOO":
      default:
          return "GMT" + ro(r, ":")
      }
  },
  z: function(e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
      case "z":
      case "zz":
      case "zzz":
          return "GMT" + Ng(r, ":");
      case "zzzz":
      default:
          return "GMT" + ro(r, ":")
      }
  },
  t: function(e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return Ee(r, t.length)
  },
  T: function(e, t, n) {
      const r = e.getTime();
      return Ee(r, t.length)
  }
};
function Ng(e, t="") {
  const n = e > 0 ? "-" : "+"
    , r = Math.abs(e)
    , o = Math.trunc(r / 60)
    , a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Ee(a, 2)
}
function Og(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ee(Math.abs(e) / 60, 2) : ro(e, t)
}
function ro(e, t="") {
  const n = e > 0 ? "-" : "+"
    , r = Math.abs(e)
    , o = Ee(Math.trunc(r / 60), 2)
    , a = Ee(r % 60, 2);
  return n + o + t + a
}
const Dg = (e, t) => {
  switch (e) {
  case "P":
      return t.date({
          width: "short"
      });
  case "PP":
      return t.date({
          width: "medium"
      });
  case "PPP":
      return t.date({
          width: "long"
      });
  case "PPPP":
  default:
      return t.date({
          width: "full"
      })
  }
}
, fw = (e, t) => {
  switch (e) {
  case "p":
      return t.time({
          width: "short"
      });
  case "pp":
      return t.time({
          width: "medium"
      });
  case "ppp":
      return t.time({
          width: "long"
      });
  case "pppp":
  default:
      return t.time({
          width: "full"
      })
  }
}
, zD = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || []
    , r = n[1]
    , o = n[2];
  if (!o)
      return Dg(e, t);
  let a;
  switch (r) {
  case "P":
      a = t.dateTime({
          width: "short"
      });
      break;
  case "PP":
      a = t.dateTime({
          width: "medium"
      });
      break;
  case "PPP":
      a = t.dateTime({
          width: "long"
      });
      break;
  case "PPPP":
  default:
      a = t.dateTime({
          width: "full"
      });
      break
  }
  return a.replace("{{date}}", Dg(r, t)).replace("{{time}}", fw(o, t))
}
, BD = {
  p: fw,
  P: zD
}
, HD = /^D+$/
, UD = /^Y+$/
, YD = ["D", "DD", "YY", "YYYY"];
function VD(e) {
  return HD.test(e)
}
function GD(e) {
  return UD.test(e)
}
function XD(e, t, n) {
  const r = QD(e, t, n);
  if (console.warn(r),
  YD.includes(e))
      throw new RangeError(r)
}
function QD(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const KD = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
, qD = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
, ZD = /^'([^]*?)'?$/
, JD = /''/g
, eT = /[a-zA-Z]/;
function hw(e, t, n) {
  var d, c, f, g, w, v, x, p;
  const r = _u()
    , o = (n == null ? void 0 : n.locale) ?? r.locale ?? xi
    , a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1
    , i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((p = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : p.weekStartsOn) ?? 0
    , s = _t(e);
  if (!rD(s))
      throw new RangeError("Invalid time value");
  let l = t.match(qD).map(h => {
      const m = h[0];
      if (m === "p" || m === "P") {
          const S = BD[m];
          return S(h, o.formatLong)
      }
      return h
  }
  ).join("").match(KD).map(h => {
      if (h === "''")
          return {
              isToken: !1,
              value: "'"
          };
      const m = h[0];
      if (m === "'")
          return {
              isToken: !1,
              value: tT(h)
          };
      if (Mg[m])
          return {
              isToken: !0,
              value: h
          };
      if (m.match(eT))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + m + "`");
      return {
          isToken: !1,
          value: h
      }
  }
  );
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const u = {
      firstWeekContainsDate: a,
      weekStartsOn: i,
      locale: o
  };
  return l.map(h => {
      if (!h.isToken)
          return h.value;
      const m = h.value;
      (!(n != null && n.useAdditionalWeekYearTokens) && GD(m) || !(n != null && n.useAdditionalDayOfYearTokens) && VD(m)) && XD(m, t, String(e));
      const S = Mg[m[0]];
      return S(s, m, o.localize, u)
  }
  ).join("")
}
function tT(e) {
  const t = e.match(ZD);
  return t ? t[1].replace(JD, "'") : e
}
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nT = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
, mw = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var rT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oT = y.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: a, iconNode: i, ...s}, l) => y.createElement("svg", {
  ref: l,
  ...rT,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: mw("lucide", o),
  ...s
}, [...i.map( ([u,d]) => y.createElement(u, d)), ...Array.isArray(a) ? a : [a]]));
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Au = (e, t) => {
  const n = y.forwardRef( ({className: r, ...o}, a) => y.createElement(oT, {
      ref: a,
      iconNode: t,
      className: mw(`lucide-${nT(e)}`, r),
      ...o
  }));
  return n.displayName = `${e}`,
  n
}
;
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const aT = Au("Calendar", [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}]]);
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const iT = Au("ChevronLeft", [["path", {
  d: "m15 18-6-6 6-6",
  key: "1wnfg3"
}]]);
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sT = Au("ChevronRight", [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]]);
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lT = Au("Clock", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 14",
  key: "68esgv"
}]]);
function Tg(e, [t,n]) {
  return Math.min(n, Math.max(t, e))
}
function uT(e, t=[]) {
  let n = [];
  function r(a, i) {
      const s = y.createContext(i)
        , l = n.length;
      n = [...n, i];
      function u(c) {
          const {scope: f, children: g, ...w} = c
            , v = (f == null ? void 0 : f[e][l]) || s
            , x = y.useMemo( () => w, Object.values(w));
          return b.jsx(v.Provider, {
              value: x,
              children: g
          })
      }
      function d(c, f) {
          const g = (f == null ? void 0 : f[e][l]) || s
            , w = y.useContext(g);
          if (w)
              return w;
          if (i !== void 0)
              return i;
          throw new Error(`\`${c}\` must be used within \`${a}\``)
      }
      return u.displayName = a + "Provider",
      [u, d]
  }
  const o = () => {
      const a = n.map(i => y.createContext(i));
      return function(s) {
          const l = (s == null ? void 0 : s[e]) || a;
          return y.useMemo( () => ({
              [`__scope${e}`]: {
                  ...s,
                  [e]: l
              }
          }), [s, l])
      }
  }
  ;
  return o.scopeName = e,
  [r, cT(o, ...t)]
}
function cT(...e) {
  const t = e[0];
  if (e.length === 1)
      return t;
  const n = () => {
      const r = e.map(o => ({
          useScope: o(),
          scopeName: o.scopeName
      }));
      return function(a) {
          const i = r.reduce( (s, {useScope: l, scopeName: u}) => {
              const c = l(a)[`__scope${u}`];
              return {
                  ...s,
                  ...c
              }
          }
          , {});
          return y.useMemo( () => ({
              [`__scope${t.scopeName}`]: i
          }), [i])
      }
  }
  ;
  return n.scopeName = t.scopeName,
  n
}
function dT(e) {
  const t = e + "CollectionProvider"
    , [n,r] = uT(t)
    , [o,a] = n(t, {
      collectionRef: {
          current: null
      },
      itemMap: new Map
  })
    , i = g => {
      const {scope: w, children: v} = g
        , x = Y.useRef(null)
        , p = Y.useRef(new Map).current;
      return b.jsx(o, {
          scope: w,
          itemMap: p,
          collectionRef: x,
          children: v
      })
  }
  ;
  i.displayName = t;
  const s = e + "CollectionSlot"
    , l = Y.forwardRef( (g, w) => {
      const {scope: v, children: x} = g
        , p = a(s, v)
        , h = He(w, p.collectionRef);
      return b.jsx(Wr, {
          ref: h,
          children: x
      })
  }
  );
  l.displayName = s;
  const u = e + "CollectionItemSlot"
    , d = "data-radix-collection-item"
    , c = Y.forwardRef( (g, w) => {
      const {scope: v, children: x, ...p} = g
        , h = Y.useRef(null)
        , m = He(w, h)
        , S = a(u, v);
      return Y.useEffect( () => (S.itemMap.set(h, {
          ref: h,
          ...p
      }),
      () => void S.itemMap.delete(h))),
      b.jsx(Wr, {
          [d]: "",
          ref: m,
          children: x
      })
  }
  );
  c.displayName = u;
  function f(g) {
      const w = a(e + "CollectionConsumer", g);
      return Y.useCallback( () => {
          const x = w.collectionRef.current;
          if (!x)
              return [];
          const p = Array.from(x.querySelectorAll(`[${d}]`));
          return Array.from(w.itemMap.values()).sort( (S, E) => p.indexOf(S.ref.current) - p.indexOf(E.ref.current))
      }
      , [w.collectionRef, w.itemMap])
  }
  return [{
      Provider: i,
      Slot: l,
      ItemSlot: c
  }, f, r]
}
var fT = y.createContext(void 0);
function hT(e) {
  const t = y.useContext(fT);
  return e || t || "ltr"
}
var mT = "VisuallyHidden"
, pw = y.forwardRef( (e, t) => b.jsx(Ne.span, {
  ...e,
  ref: t,
  style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
  }
}));
pw.displayName = mT;
var pT = [" ", "Enter", "ArrowUp", "ArrowDown"]
, gT = [" ", "Enter"]
, ls = "Select"
, [ju,Iu,vT] = dT(ls)
, [La,Q_] = wu(ls, [vT, Ou])
, Lu = Ou()
, [yT,Zr] = La(ls)
, [wT,xT] = La(ls)
, gw = e => {
  const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: i, defaultValue: s, onValueChange: l, dir: u, name: d, autoComplete: c, disabled: f, required: g, form: w} = e
    , v = Lu(t)
    , [x,p] = y.useState(null)
    , [h,m] = y.useState(null)
    , [S,E] = y.useState(!1)
    , N = hT(u)
    , [O=!1,k] = zi({
      prop: r,
      defaultProp: o,
      onChange: a
  })
    , [L,_] = zi({
      prop: i,
      defaultProp: s,
      onChange: l
  })
    , F = y.useRef(null)
    , H = x ? w || !!x.closest("form") : !0
    , [J,W] = y.useState(new Set)
    , I = Array.from(J).map(R => R.props.value).join(";");
  return b.jsx($1, {
      ...v,
      children: b.jsxs(yT, {
          required: g,
          scope: t,
          trigger: x,
          onTriggerChange: p,
          valueNode: h,
          onValueNodeChange: m,
          valueNodeHasChildren: S,
          onValueNodeHasChildrenChange: E,
          contentId: vo(),
          value: L,
          onValueChange: _,
          open: O,
          onOpenChange: k,
          dir: N,
          triggerPointerDownPosRef: F,
          disabled: f,
          children: [b.jsx(ju.Provider, {
              scope: t,
              children: b.jsx(wT, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: y.useCallback(R => {
                      W($ => new Set($).add(R))
                  }
                  , []),
                  onNativeOptionRemove: y.useCallback(R => {
                      W($ => {
                          const P = new Set($);
                          return P.delete(R),
                          P
                      }
                      )
                  }
                  , []),
                  children: n
              })
          }), H ? b.jsxs(zw, {
              "aria-hidden": !0,
              required: g,
              tabIndex: -1,
              name: d,
              autoComplete: c,
              value: L,
              onChange: R => _(R.target.value),
              disabled: f,
              form: w,
              children: [L === void 0 ? b.jsx("option", {
                  value: ""
              }) : null, Array.from(J)]
          }, I) : null]
      })
  })
}
;
gw.displayName = ls;
var vw = "SelectTrigger"
, yw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, disabled: r=!1, ...o} = e
    , a = Lu(n)
    , i = Zr(vw, n)
    , s = i.disabled || r
    , l = He(t, i.onTriggerChange)
    , u = Iu(n)
    , d = y.useRef("touch")
    , [c,f,g] = Bw(v => {
      const x = u().filter(m => !m.disabled)
        , p = x.find(m => m.value === i.value)
        , h = Hw(x, v, p);
      h !== void 0 && i.onValueChange(h.value)
  }
  )
    , w = v => {
      s || (i.onOpenChange(!0),
      g()),
      v && (i.triggerPointerDownPosRef.current = {
          x: Math.round(v.pageX),
          y: Math.round(v.pageY)
      })
  }
  ;
  return b.jsx(Wh, {
      asChild: !0,
      ...a,
      children: b.jsx(Ne.button, {
          type: "button",
          role: "combobox",
          "aria-controls": i.contentId,
          "aria-expanded": i.open,
          "aria-required": i.required,
          "aria-autocomplete": "none",
          dir: i.dir,
          "data-state": i.open ? "open" : "closed",
          disabled: s,
          "data-disabled": s ? "" : void 0,
          "data-placeholder": $w(i.value) ? "" : void 0,
          ...o,
          ref: l,
          onClick: we(o.onClick, v => {
              v.currentTarget.focus(),
              d.current !== "mouse" && w(v)
          }
          ),
          onPointerDown: we(o.onPointerDown, v => {
              d.current = v.pointerType;
              const x = v.target;
              x.hasPointerCapture(v.pointerId) && x.releasePointerCapture(v.pointerId),
              v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (w(v),
              v.preventDefault())
          }
          ),
          onKeyDown: we(o.onKeyDown, v => {
              const x = c.current !== "";
              !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && f(v.key),
              !(x && v.key === " ") && pT.includes(v.key) && (w(),
              v.preventDefault())
          }
          )
      })
  })
}
);
yw.displayName = vw;
var ww = "SelectValue"
, xw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, className: r, style: o, children: a, placeholder: i="", ...s} = e
    , l = Zr(ww, n)
    , {onValueNodeHasChildrenChange: u} = l
    , d = a !== void 0
    , c = He(t, l.onValueNodeChange);
  return kt( () => {
      u(d)
  }
  , [u, d]),
  b.jsx(Ne.span, {
      ...s,
      ref: c,
      style: {
          pointerEvents: "none"
      },
      children: $w(l.value) ? b.jsx(b.Fragment, {
          children: i
      }) : a
  })
}
);
xw.displayName = ww;
var bT = "SelectIcon"
, bw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, children: r, ...o} = e;
  return b.jsx(Ne.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼"
  })
}
);
bw.displayName = bT;
var ST = "SelectPortal"
, Sw = e => b.jsx(Du, {
  asChild: !0,
  ...e
});
Sw.displayName = ST;
var Po = "SelectContent"
, kw = y.forwardRef( (e, t) => {
  const n = Zr(Po, e.__scopeSelect)
    , [r,o] = y.useState();
  if (kt( () => {
      o(new DocumentFragment)
  }
  , []),
  !n.open) {
      const a = r;
      return a ? Ra.createPortal(b.jsx(Cw, {
          scope: e.__scopeSelect,
          children: b.jsx(ju.Slot, {
              scope: e.__scopeSelect,
              children: b.jsx("div", {
                  children: e.children
              })
          })
      }), a) : null
  }
  return b.jsx(Ew, {
      ...e,
      ref: t
  })
}
);
kw.displayName = Po;
var rn = 10
, [Cw,Jr] = La(Po)
, kT = "SelectContentImpl"
, Ew = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: a, onPointerDownOutside: i, side: s, sideOffset: l, align: u, alignOffset: d, arrowPadding: c, collisionBoundary: f, collisionPadding: g, sticky: w, hideWhenDetached: v, avoidCollisions: x, ...p} = e
    , h = Zr(Po, n)
    , [m,S] = y.useState(null)
    , [E,N] = y.useState(null)
    , O = He(t, V => S(V))
    , [k,L] = y.useState(null)
    , [_,F] = y.useState(null)
    , H = Iu(n)
    , [J,W] = y.useState(!1)
    , I = y.useRef(!1);
  y.useEffect( () => {
      if (m)
          return $h(m)
  }
  , [m]),
  Dh();
  const R = y.useCallback(V => {
      const [se,...be] = H().map(ue => ue.ref.current)
        , [re] = be.slice(-1)
        , le = document.activeElement;
      for (const ue of V)
          if (ue === le || (ue == null || ue.scrollIntoView({
              block: "nearest"
          }),
          ue === se && E && (E.scrollTop = 0),
          ue === re && E && (E.scrollTop = E.scrollHeight),
          ue == null || ue.focus(),
          document.activeElement !== le))
              return
  }
  , [H, E])
    , $ = y.useCallback( () => R([k, m]), [R, k, m]);
  y.useEffect( () => {
      J && $()
  }
  , [J, $]);
  const {onOpenChange: P, triggerPointerDownPosRef: T} = h;
  y.useEffect( () => {
      if (m) {
          let V = {
              x: 0,
              y: 0
          };
          const se = re => {
              var le, ue;
              V = {
                  x: Math.abs(Math.round(re.pageX) - (((le = T.current) == null ? void 0 : le.x) ?? 0)),
                  y: Math.abs(Math.round(re.pageY) - (((ue = T.current) == null ? void 0 : ue.y) ?? 0))
              }
          }
            , be = re => {
              V.x <= 10 && V.y <= 10 ? re.preventDefault() : m.contains(re.target) || P(!1),
              document.removeEventListener("pointermove", se),
              T.current = null
          }
          ;
          return T.current !== null && (document.addEventListener("pointermove", se),
          document.addEventListener("pointerup", be, {
              capture: !0,
              once: !0
          })),
          () => {
              document.removeEventListener("pointermove", se),
              document.removeEventListener("pointerup", be, {
                  capture: !0
              })
          }
      }
  }
  , [m, P, T]),
  y.useEffect( () => {
      const V = () => P(!1);
      return window.addEventListener("blur", V),
      window.addEventListener("resize", V),
      () => {
          window.removeEventListener("blur", V),
          window.removeEventListener("resize", V)
      }
  }
  , [P]);
  const [A,B] = Bw(V => {
      const se = H().filter(le => !le.disabled)
        , be = se.find(le => le.ref.current === document.activeElement)
        , re = Hw(se, V, be);
      re && setTimeout( () => re.ref.current.focus())
  }
  )
    , K = y.useCallback( (V, se, be) => {
      const re = !I.current && !be;
      (h.value !== void 0 && h.value === se || re) && (L(V),
      re && (I.current = !0))
  }
  , [h.value])
    , oe = y.useCallback( () => m == null ? void 0 : m.focus(), [m])
    , ie = y.useCallback( (V, se, be) => {
      const re = !I.current && !be;
      (h.value !== void 0 && h.value === se || re) && F(V)
  }
  , [h.value])
    , ge = r === "popper" ? cf : Pw
    , fe = ge === cf ? {
      side: s,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: c,
      collisionBoundary: f,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: x
  } : {};
  return b.jsx(Cw, {
      scope: n,
      content: m,
      viewport: E,
      onViewportChange: N,
      itemRefCallback: K,
      selectedItem: k,
      onItemLeave: oe,
      itemTextRefCallback: ie,
      focusSelectedItem: $,
      selectedItemText: _,
      position: r,
      isPositioned: J,
      searchRef: A,
      children: b.jsx(Ru, {
          as: Wr,
          allowPinchZoom: !0,
          children: b.jsx(Eu, {
              asChild: !0,
              trapped: h.open,
              onMountAutoFocus: V => {
                  V.preventDefault()
              }
              ,
              onUnmountAutoFocus: we(o, V => {
                  var se;
                  (se = h.trigger) == null || se.focus({
                      preventScroll: !0
                  }),
                  V.preventDefault()
              }
              ),
              children: b.jsx(Cu, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: i,
                  onFocusOutside: V => V.preventDefault(),
                  onDismiss: () => h.onOpenChange(!1),
                  children: b.jsx(ge, {
                      role: "listbox",
                      id: h.contentId,
                      "data-state": h.open ? "open" : "closed",
                      dir: h.dir,
                      onContextMenu: V => V.preventDefault(),
                      ...p,
                      ...fe,
                      onPlaced: () => W(!0),
                      ref: O,
                      style: {
                          display: "flex",
                          flexDirection: "column",
                          outline: "none",
                          ...p.style
                      },
                      onKeyDown: we(p.onKeyDown, V => {
                          const se = V.ctrlKey || V.altKey || V.metaKey;
                          if (V.key === "Tab" && V.preventDefault(),
                          !se && V.key.length === 1 && B(V.key),
                          ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                              let re = H().filter(le => !le.disabled).map(le => le.ref.current);
                              if (["ArrowUp", "End"].includes(V.key) && (re = re.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(V.key)) {
                                  const le = V.target
                                    , ue = re.indexOf(le);
                                  re = re.slice(ue + 1)
                              }
                              setTimeout( () => R(re)),
                              V.preventDefault()
                          }
                      }
                      )
                  })
              })
          })
      })
  })
}
);
Ew.displayName = kT;
var CT = "SelectItemAlignedPosition"
, Pw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, onPlaced: r, ...o} = e
    , a = Zr(Po, n)
    , i = Jr(Po, n)
    , [s,l] = y.useState(null)
    , [u,d] = y.useState(null)
    , c = He(t, O => d(O))
    , f = Iu(n)
    , g = y.useRef(!1)
    , w = y.useRef(!0)
    , {viewport: v, selectedItem: x, selectedItemText: p, focusSelectedItem: h} = i
    , m = y.useCallback( () => {
      if (a.trigger && a.valueNode && s && u && v && x && p) {
          const O = a.trigger.getBoundingClientRect()
            , k = u.getBoundingClientRect()
            , L = a.valueNode.getBoundingClientRect()
            , _ = p.getBoundingClientRect();
          if (a.dir !== "rtl") {
              const le = _.left - k.left
                , ue = L.left - le
                , Qe = O.left - ue
                , Oe = O.width + Qe
                , Pt = Math.max(Oe, k.width)
                , yn = window.innerWidth - rn
                , Fn = Tg(ue, [rn, Math.max(rn, yn - Pt)]);
              s.style.minWidth = Oe + "px",
              s.style.left = Fn + "px"
          } else {
              const le = k.right - _.right
                , ue = window.innerWidth - L.right - le
                , Qe = window.innerWidth - O.right - ue
                , Oe = O.width + Qe
                , Pt = Math.max(Oe, k.width)
                , yn = window.innerWidth - rn
                , Fn = Tg(ue, [rn, Math.max(rn, yn - Pt)]);
              s.style.minWidth = Oe + "px",
              s.style.right = Fn + "px"
          }
          const F = f()
            , H = window.innerHeight - rn * 2
            , J = v.scrollHeight
            , W = window.getComputedStyle(u)
            , I = parseInt(W.borderTopWidth, 10)
            , R = parseInt(W.paddingTop, 10)
            , $ = parseInt(W.borderBottomWidth, 10)
            , P = parseInt(W.paddingBottom, 10)
            , T = I + R + J + P + $
            , A = Math.min(x.offsetHeight * 5, T)
            , B = window.getComputedStyle(v)
            , K = parseInt(B.paddingTop, 10)
            , oe = parseInt(B.paddingBottom, 10)
            , ie = O.top + O.height / 2 - rn
            , ge = H - ie
            , fe = x.offsetHeight / 2
            , V = x.offsetTop + fe
            , se = I + R + V
            , be = T - se;
          if (se <= ie) {
              const le = F.length > 0 && x === F[F.length - 1].ref.current;
              s.style.bottom = "0px";
              const ue = u.clientHeight - v.offsetTop - v.offsetHeight
                , Qe = Math.max(ge, fe + (le ? oe : 0) + ue + $)
                , Oe = se + Qe;
              s.style.height = Oe + "px"
          } else {
              const le = F.length > 0 && x === F[0].ref.current;
              s.style.top = "0px";
              const Qe = Math.max(ie, I + v.offsetTop + (le ? K : 0) + fe) + be;
              s.style.height = Qe + "px",
              v.scrollTop = se - ie + v.offsetTop
          }
          s.style.margin = `${rn}px 0`,
          s.style.minHeight = A + "px",
          s.style.maxHeight = H + "px",
          r == null || r(),
          requestAnimationFrame( () => g.current = !0)
      }
  }
  , [f, a.trigger, a.valueNode, s, u, v, x, p, a.dir, r]);
  kt( () => m(), [m]);
  const [S,E] = y.useState();
  kt( () => {
      u && E(window.getComputedStyle(u).zIndex)
  }
  , [u]);
  const N = y.useCallback(O => {
      O && w.current === !0 && (m(),
      h == null || h(),
      w.current = !1)
  }
  , [m, h]);
  return b.jsx(PT, {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: N,
      children: b.jsx("div", {
          ref: l,
          style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: S
          },
          children: b.jsx(Ne.div, {
              ...o,
              ref: c,
              style: {
                  boxSizing: "border-box",
                  maxHeight: "100%",
                  ...o.style
              }
          })
      })
  })
}
);
Pw.displayName = CT;
var ET = "SelectPopperPosition"
, cf = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, align: r="start", collisionPadding: o=rn, ...a} = e
    , i = Lu(n);
  return b.jsx(z1, {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
          boxSizing: "border-box",
          ...a.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
  })
}
);
cf.displayName = ET;
var [PT,Hh] = La(Po, {})
, df = "SelectViewport"
, Mw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, nonce: r, ...o} = e
    , a = Jr(df, n)
    , i = Hh(df, n)
    , s = He(t, a.onViewportChange)
    , l = y.useRef(0);
  return b.jsxs(b.Fragment, {
      children: [b.jsx("style", {
          dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
      }), b.jsx(ju.Slot, {
          scope: n,
          children: b.jsx(Ne.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: s,
              style: {
                  position: "relative",
                  flex: 1,
                  overflow: "hidden auto",
                  ...o.style
              },
              onScroll: we(o.onScroll, u => {
                  const d = u.currentTarget
                    , {contentWrapper: c, shouldExpandOnScrollRef: f} = i;
                  if (f != null && f.current && c) {
                      const g = Math.abs(l.current - d.scrollTop);
                      if (g > 0) {
                          const w = window.innerHeight - rn * 2
                            , v = parseFloat(c.style.minHeight)
                            , x = parseFloat(c.style.height)
                            , p = Math.max(v, x);
                          if (p < w) {
                              const h = p + g
                                , m = Math.min(w, h)
                                , S = h - m;
                              c.style.height = m + "px",
                              c.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0,
                              c.style.justifyContent = "flex-end")
                          }
                      }
                  }
                  l.current = d.scrollTop
              }
              )
          })
      })]
  })
}
);
Mw.displayName = df;
var Nw = "SelectGroup"
, [MT,NT] = La(Nw)
, OT = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, ...r} = e
    , o = vo();
  return b.jsx(MT, {
      scope: n,
      id: o,
      children: b.jsx(Ne.div, {
          role: "group",
          "aria-labelledby": o,
          ...r,
          ref: t
      })
  })
}
);
OT.displayName = Nw;
var Ow = "SelectLabel"
, Dw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, ...r} = e
    , o = NT(Ow, n);
  return b.jsx(Ne.div, {
      id: o.id,
      ...r,
      ref: t
  })
}
);
Dw.displayName = Ow;
var Ql = "SelectItem"
, [DT,Tw] = La(Ql)
, Rw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, value: r, disabled: o=!1, textValue: a, ...i} = e
    , s = Zr(Ql, n)
    , l = Jr(Ql, n)
    , u = s.value === r
    , [d,c] = y.useState(a ?? "")
    , [f,g] = y.useState(!1)
    , w = He(t, h => {
      var m;
      return (m = l.itemRefCallback) == null ? void 0 : m.call(l, h, r, o)
  }
  )
    , v = vo()
    , x = y.useRef("touch")
    , p = () => {
      o || (s.onValueChange(r),
      s.onOpenChange(!1))
  }
  ;
  if (r === "")
      throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return b.jsx(DT, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: u,
      onItemTextChange: y.useCallback(h => {
          c(m => m || ((h == null ? void 0 : h.textContent) ?? "").trim())
      }
      , []),
      children: b.jsx(ju.ItemSlot, {
          scope: n,
          value: r,
          disabled: o,
          textValue: d,
          children: b.jsx(Ne.div, {
              role: "option",
              "aria-labelledby": v,
              "data-highlighted": f ? "" : void 0,
              "aria-selected": u && f,
              "data-state": u ? "checked" : "unchecked",
              "aria-disabled": o || void 0,
              "data-disabled": o ? "" : void 0,
              tabIndex: o ? void 0 : -1,
              ...i,
              ref: w,
              onFocus: we(i.onFocus, () => g(!0)),
              onBlur: we(i.onBlur, () => g(!1)),
              onClick: we(i.onClick, () => {
                  x.current !== "mouse" && p()
              }
              ),
              onPointerUp: we(i.onPointerUp, () => {
                  x.current === "mouse" && p()
              }
              ),
              onPointerDown: we(i.onPointerDown, h => {
                  x.current = h.pointerType
              }
              ),
              onPointerMove: we(i.onPointerMove, h => {
                  var m;
                  x.current = h.pointerType,
                  o ? (m = l.onItemLeave) == null || m.call(l) : x.current === "mouse" && h.currentTarget.focus({
                      preventScroll: !0
                  })
              }
              ),
              onPointerLeave: we(i.onPointerLeave, h => {
                  var m;
                  h.currentTarget === document.activeElement && ((m = l.onItemLeave) == null || m.call(l))
              }
              ),
              onKeyDown: we(i.onKeyDown, h => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && h.key === " " || (gT.includes(h.key) && p(),
                  h.key === " " && h.preventDefault())
              }
              )
          })
      })
  })
}
);
Rw.displayName = Ql;
var si = "SelectItemText"
, _w = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, className: r, style: o, ...a} = e
    , i = Zr(si, n)
    , s = Jr(si, n)
    , l = Tw(si, n)
    , u = xT(si, n)
    , [d,c] = y.useState(null)
    , f = He(t, p => c(p), l.onItemTextChange, p => {
      var h;
      return (h = s.itemTextRefCallback) == null ? void 0 : h.call(s, p, l.value, l.disabled)
  }
  )
    , g = d == null ? void 0 : d.textContent
    , w = y.useMemo( () => b.jsx("option", {
      value: l.value,
      disabled: l.disabled,
      children: g
  }, l.value), [l.disabled, l.value, g])
    , {onNativeOptionAdd: v, onNativeOptionRemove: x} = u;
  return kt( () => (v(w),
  () => x(w)), [v, x, w]),
  b.jsxs(b.Fragment, {
      children: [b.jsx(Ne.span, {
          id: l.textId,
          ...a,
          ref: f
      }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ra.createPortal(a.children, i.valueNode) : null]
  })
}
);
_w.displayName = si;
var Aw = "SelectItemIndicator"
, jw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, ...r} = e;
  return Tw(Aw, n).isSelected ? b.jsx(Ne.span, {
      "aria-hidden": !0,
      ...r,
      ref: t
  }) : null
}
);
jw.displayName = Aw;
var ff = "SelectScrollUpButton"
, Iw = y.forwardRef( (e, t) => {
  const n = Jr(ff, e.__scopeSelect)
    , r = Hh(ff, e.__scopeSelect)
    , [o,a] = y.useState(!1)
    , i = He(t, r.onScrollButtonChange);
  return kt( () => {
      if (n.viewport && n.isPositioned) {
          let s = function() {
              const u = l.scrollTop > 0;
              a(u)
          };
          const l = n.viewport;
          return s(),
          l.addEventListener("scroll", s),
          () => l.removeEventListener("scroll", s)
      }
  }
  , [n.viewport, n.isPositioned]),
  o ? b.jsx(Fw, {
      ...e,
      ref: i,
      onAutoScroll: () => {
          const {viewport: s, selectedItem: l} = n;
          s && l && (s.scrollTop = s.scrollTop - l.offsetHeight)
      }
  }) : null
}
);
Iw.displayName = ff;
var hf = "SelectScrollDownButton"
, Lw = y.forwardRef( (e, t) => {
  const n = Jr(hf, e.__scopeSelect)
    , r = Hh(hf, e.__scopeSelect)
    , [o,a] = y.useState(!1)
    , i = He(t, r.onScrollButtonChange);
  return kt( () => {
      if (n.viewport && n.isPositioned) {
          let s = function() {
              const u = l.scrollHeight - l.clientHeight
                , d = Math.ceil(l.scrollTop) < u;
              a(d)
          };
          const l = n.viewport;
          return s(),
          l.addEventListener("scroll", s),
          () => l.removeEventListener("scroll", s)
      }
  }
  , [n.viewport, n.isPositioned]),
  o ? b.jsx(Fw, {
      ...e,
      ref: i,
      onAutoScroll: () => {
          const {viewport: s, selectedItem: l} = n;
          s && l && (s.scrollTop = s.scrollTop + l.offsetHeight)
      }
  }) : null
}
);
Lw.displayName = hf;
var Fw = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, onAutoScroll: r, ...o} = e
    , a = Jr("SelectScrollButton", n)
    , i = y.useRef(null)
    , s = Iu(n)
    , l = y.useCallback( () => {
      i.current !== null && (window.clearInterval(i.current),
      i.current = null)
  }
  , []);
  return y.useEffect( () => () => l(), [l]),
  kt( () => {
      var d;
      const u = s().find(c => c.ref.current === document.activeElement);
      (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({
          block: "nearest"
      })
  }
  , [s]),
  b.jsx(Ne.div, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: {
          flexShrink: 0,
          ...o.style
      },
      onPointerDown: we(o.onPointerDown, () => {
          i.current === null && (i.current = window.setInterval(r, 50))
      }
      ),
      onPointerMove: we(o.onPointerMove, () => {
          var u;
          (u = a.onItemLeave) == null || u.call(a),
          i.current === null && (i.current = window.setInterval(r, 50))
      }
      ),
      onPointerLeave: we(o.onPointerLeave, () => {
          l()
      }
      )
  })
}
)
, TT = "SelectSeparator"
, Ww = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, ...r} = e;
  return b.jsx(Ne.div, {
      "aria-hidden": !0,
      ...r,
      ref: t
  })
}
);
Ww.displayName = TT;
var mf = "SelectArrow"
, RT = y.forwardRef( (e, t) => {
  const {__scopeSelect: n, ...r} = e
    , o = Lu(n)
    , a = Zr(mf, n)
    , i = Jr(mf, n);
  return a.open && i.position === "popper" ? b.jsx(B1, {
      ...o,
      ...r,
      ref: t
  }) : null
}
);
RT.displayName = mf;
function $w(e) {
  return e === "" || e === void 0
}
var zw = y.forwardRef( (e, t) => {
  const {value: n, ...r} = e
    , o = y.useRef(null)
    , a = He(t, o)
    , i = E0(n);
  return y.useEffect( () => {
      const s = o.current
        , l = window.HTMLSelectElement.prototype
        , d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== n && d) {
          const c = new Event("change",{
              bubbles: !0
          });
          d.call(s, n),
          s.dispatchEvent(c)
      }
  }
  , [i, n]),
  b.jsx(pw, {
      asChild: !0,
      children: b.jsx("select", {
          ...r,
          ref: a,
          defaultValue: n
      })
  })
}
);
zw.displayName = "BubbleSelect";
function Bw(e) {
  const t = er(e)
    , n = y.useRef("")
    , r = y.useRef(0)
    , o = y.useCallback(i => {
      const s = n.current + i;
      t(s),
      function l(u) {
          n.current = u,
          window.clearTimeout(r.current),
          u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
      }(s)
  }
  , [t])
    , a = y.useCallback( () => {
      n.current = "",
      window.clearTimeout(r.current)
  }
  , []);
  return y.useEffect( () => () => window.clearTimeout(r.current), []),
  [n, o, a]
}
function Hw(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
    , a = n ? e.indexOf(n) : -1;
  let i = _T(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(u => u !== n));
  const l = i.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0
}
function _T(e, t) {
  return e.map( (n, r) => e[(t + r) % e.length])
}
var AT = gw
, Uw = yw
, jT = xw
, IT = bw
, LT = Sw
, Yw = kw
, FT = Mw
, Vw = Dw
, Gw = Rw
, WT = _w
, $T = jw
, Xw = Iw
, Qw = Lw
, Kw = Ww;
const pf = AT
, gf = jT
, Kl = y.forwardRef( ({className: e, children: t, ...n}, r) => b.jsxs(Uw, {
  ref: r,
  className: _e("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300", e),
  ...n,
  children: [t, b.jsx(IT, {
      asChild: !0,
      children: b.jsx(sE, {
          className: "h-4 w-4 opacity-50"
      })
  })]
}));
Kl.displayName = Uw.displayName;
const qw = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Xw, {
  ref: n,
  className: _e("flex cursor-default items-center justify-center py-1", e),
  ...t,
  children: b.jsx(fE, {})
}));
qw.displayName = Xw.displayName;
const Zw = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Qw, {
  ref: n,
  className: _e("flex cursor-default items-center justify-center py-1", e),
  ...t,
  children: b.jsx(cE, {})
}));
Zw.displayName = Qw.displayName;
const ql = y.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => b.jsx(LT, {
  children: b.jsxs(Yw, {
      ref: o,
      className: _e("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
      position: n,
      ...r,
      children: [b.jsx(qw, {}), b.jsx(FT, {
          className: _e("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: t
      }), b.jsx(Zw, {})]
  })
}));
ql.displayName = Yw.displayName;
const zT = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Vw, {
  ref: n,
  className: _e("px-2 py-1.5 text-sm font-semibold", e),
  ...t
}));
zT.displayName = Vw.displayName;
const Gi = y.forwardRef( ({className: e, children: t, ...n}, r) => b.jsxs(Gw, {
  ref: r,
  className: _e("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50", e),
  ...n,
  children: [b.jsx("span", {
      className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
      children: b.jsx($T, {
          children: b.jsx(R0, {
              className: "h-4 w-4"
          })
      })
  }), b.jsx(WT, {
      children: t
  })]
}));
Gi.displayName = Gw.displayName;
const BT = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Kw, {
  ref: n,
  className: _e("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e),
  ...t
}));
BT.displayName = Kw.displayName;
var ne;
(function(e) {
  e.Root = "root",
  e.Chevron = "chevron",
  e.Day = "day",
  e.DayButton = "day_button",
  e.CaptionLabel = "caption_label",
  e.Dropdowns = "dropdowns",
  e.Dropdown = "dropdown",
  e.DropdownRoot = "dropdown_root",
  e.Footer = "footer",
  e.MonthGrid = "month_grid",
  e.MonthCaption = "month_caption",
  e.MonthsDropdown = "months_dropdown",
  e.Month = "month",
  e.Months = "months",
  e.Nav = "nav",
  e.NextMonthButton = "button_next",
  e.PreviousMonthButton = "button_previous",
  e.Week = "week",
  e.Weeks = "weeks",
  e.Weekday = "weekday",
  e.Weekdays = "weekdays",
  e.WeekNumber = "week_number",
  e.WeekNumberHeader = "week_number_header",
  e.YearsDropdown = "years_dropdown"
}
)(ne || (ne = {}));
var Te;
(function(e) {
  e.disabled = "disabled",
  e.hidden = "hidden",
  e.outside = "outside",
  e.focused = "focused",
  e.today = "today"
}
)(Te || (Te = {}));
var at;
(function(e) {
  e.range_end = "range_end",
  e.range_middle = "range_middle",
  e.range_start = "range_start",
  e.selected = "selected"
}
)(at || (at = {}));
function HT(e, t, n={}) {
  return Object.entries(e).filter( ([,o]) => o === !0).reduce( (o, [a]) => (n[a] ? o.push(n[a]) : t[Te[a]] ? o.push(t[Te[a]]) : t[at[a]] && o.push(t[at[a]]),
  o), [t[ne.Day]])
}
function UT(e) {
  return Y.createElement("button", {
      ...e
  })
}
function YT(e) {
  return Y.createElement("span", {
      ...e
  })
}
function VT(e) {
  const {size: t=24, orientation: n="left", className: r} = e;
  return Y.createElement("svg", {
      className: r,
      width: t,
      height: t,
      viewBox: "0 0 24 24"
  }, n === "up" && Y.createElement("polygon", {
      points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"
  }), n === "down" && Y.createElement("polygon", {
      points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"
  }), n === "left" && Y.createElement("polygon", {
      points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"
  }), n === "right" && Y.createElement("polygon", {
      points: "8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"
  }))
}
function GT(e) {
  const {day: t, modifiers: n, ...r} = e;
  return Y.createElement("td", {
      ...r
  })
}
function XT(e) {
  const {day: t, modifiers: n, ...r} = e
    , o = Y.useRef(null);
  return Y.useEffect( () => {
      var a;
      n.focused && ((a = o.current) == null || a.focus())
  }
  , [n.focused]),
  Y.createElement("button", {
      ref: o,
      ...r
  })
}
function QT(e) {
  const {options: t, className: n, components: r, classNames: o, ...a} = e
    , i = [o[ne.Dropdown], n].join(" ")
    , s = t == null ? void 0 : t.find( ({value: l}) => l === a.value);
  return Y.createElement("span", {
      "data-disabled": a.disabled,
      className: o[ne.DropdownRoot]
  }, Y.createElement(r.Select, {
      className: i,
      ...a
  }, t == null ? void 0 : t.map( ({value: l, label: u, disabled: d}) => Y.createElement(r.Option, {
      key: l,
      value: l,
      disabled: d
  }, u))), Y.createElement("span", {
      className: o[ne.CaptionLabel],
      "aria-hidden": !0
  }, s == null ? void 0 : s.label, Y.createElement(r.Chevron, {
      orientation: "down",
      size: 18,
      className: o[ne.Chevron]
  })))
}
function KT(e) {
  return Y.createElement("div", {
      ...e
  })
}
function qT(e) {
  return Y.createElement("div", {
      ...e
  })
}
function ZT(e) {
  const {calendarMonth: t, displayIndex: n, ...r} = e;
  return Y.createElement("div", {
      ...r
  }, e.children)
}
function JT(e) {
  const {calendarMonth: t, displayIndex: n, ...r} = e;
  return Y.createElement("div", {
      ...r
  })
}
function e3(e) {
  return Y.createElement("table", {
      ...e
  })
}
function t3(e) {
  return Y.createElement("div", {
      ...e
  })
}
const Jw = y.createContext(void 0);
function us() {
  const e = y.useContext(Jw);
  if (e === void 0)
      throw new Error("useDayPicker() must be used within a custom component.");
  return e
}
function n3(e) {
  const {components: t} = us();
  return Y.createElement(t.Dropdown, {
      ...e
  })
}
function r3(e) {
  const {onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a} = e
    , {components: i, classNames: s, labels: {labelPrevious: l, labelNext: u}} = us();
  return Y.createElement("nav", {
      ...a
  }, Y.createElement(i.PreviousMonthButton, {
      type: "button",
      className: s[ne.PreviousMonthButton],
      tabIndex: r ? void 0 : -1,
      disabled: r ? void 0 : !0,
      "aria-label": l(r),
      onClick: e.onPreviousClick
  }, Y.createElement(i.Chevron, {
      disabled: r ? void 0 : !0,
      className: s[ne.Chevron],
      orientation: "left"
  })), Y.createElement(i.NextMonthButton, {
      type: "button",
      className: s[ne.NextMonthButton],
      tabIndex: o ? void 0 : -1,
      disabled: o ? void 0 : !0,
      "aria-label": u(o),
      onClick: e.onNextClick
  }, Y.createElement(i.Chevron, {
      disabled: o ? void 0 : !0,
      orientation: "right",
      className: s[ne.Chevron]
  })))
}
function o3(e) {
  const {components: t} = us();
  return Y.createElement(t.Button, {
      ...e
  })
}
function a3(e) {
  return Y.createElement("option", {
      ...e
  })
}
function i3(e) {
  const {components: t} = us();
  return Y.createElement(t.Button, {
      ...e
  })
}
function s3(e) {
  return Y.createElement("div", {
      ...e
  })
}
function l3(e) {
  return Y.createElement("select", {
      ...e
  })
}
function u3(e) {
  const {week: t, ...n} = e;
  return Y.createElement("tr", {
      ...n
  })
}
function c3(e) {
  return Y.createElement("th", {
      ...e
  })
}
function d3(e) {
  return Y.createElement("thead", null, Y.createElement("tr", {
      ...e
  }))
}
function f3(e) {
  const {week: t, ...n} = e;
  return Y.createElement("th", {
      ...n
  })
}
function h3(e) {
  return Y.createElement("th", {
      ...e
  })
}
function m3(e) {
  return Y.createElement("tbody", {
      ...e
  })
}
function p3(e) {
  const {components: t} = us();
  return Y.createElement(t.Dropdown, {
      ...e
  })
}
const g3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  Button: UT,
  CaptionLabel: YT,
  Chevron: VT,
  Day: GT,
  DayButton: XT,
  Dropdown: QT,
  DropdownNav: KT,
  Footer: qT,
  Month: ZT,
  MonthCaption: JT,
  MonthGrid: e3,
  Months: t3,
  MonthsDropdown: n3,
  Nav: r3,
  NextMonthButton: o3,
  Option: a3,
  PreviousMonthButton: i3,
  Root: s3,
  Select: l3,
  Week: u3,
  WeekNumber: f3,
  WeekNumberHeader: h3,
  Weekday: c3,
  Weekdays: d3,
  Weeks: m3,
  YearsDropdown: p3
}, Symbol.toStringTag, {
  value: "Module"
}));
function v3(e) {
  return {
      ...g3,
      ...e
  }
}
function y3(e) {
  const t = {
      "data-mode": e.mode ?? void 0,
      "data-required": "required"in e ? e.required : void 0,
      "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
      "data-week-numbers": e.showWeekNumber || void 0
  };
  return Object.entries(e).forEach( ([n,r]) => {
      n.startsWith("data-") && (t[n] = r)
  }
  ),
  t
}
const ex = 6048e5
, w3 = 864e5
, Rg = Symbol.for("constructDateFrom");
function ct(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Rg in e ? e[Rg](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
}
function Ae(e, t) {
  return ct(t || e, e)
}
function tx(e, t, n) {
  const r = Ae(e, n == null ? void 0 : n.in);
  return isNaN(t) ? ct((n == null ? void 0 : n.in) || e, NaN) : (t && r.setDate(r.getDate() + t),
  r)
}
function nx(e, t, n) {
  const r = Ae(e, n == null ? void 0 : n.in);
  if (isNaN(t))
      return ct((n == null ? void 0 : n.in) || e, NaN);
  if (!t)
      return r;
  const o = r.getDate()
    , a = ct((n == null ? void 0 : n.in) || e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), o),
  r)
}
function x3(e, t, n) {
  return tx(e, t * 7, n)
}
function b3(e, t, n) {
  return nx(e, t * 12, n)
}
function _g(e) {
  const t = Ae(e)
    , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return n.setUTCFullYear(t.getFullYear()),
  +e - +n
}
function cs(e, ...t) {
  const n = ct.bind(null, e || t.find(r => typeof r == "object"));
  return t.map(n)
}
function Xi(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0),
  n
}
function rx(e, t, n) {
  const [r,o] = cs(n == null ? void 0 : n.in, e, t)
    , a = Xi(r)
    , i = Xi(o)
    , s = +a - _g(a)
    , l = +i - _g(i);
  return Math.round((s - l) / w3)
}
function S3(e, t, n) {
  const [r,o] = cs(n == null ? void 0 : n.in, e, t)
    , a = r.getFullYear() - o.getFullYear()
    , i = r.getMonth() - o.getMonth();
  return a * 12 + i
}
let k3 = {};
function ds() {
  return k3
}
function ox(e, t) {
  var s, l, u, d;
  const n = ds()
    , r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0
    , o = Ae(e, t == null ? void 0 : t.in)
    , a = o.getDay()
    , i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i),
  o.setHours(23, 59, 59, 999),
  o
}
function C3(e, t) {
  return ox(e, {
      ...t,
      weekStartsOn: 1
  })
}
function E3(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0),
  n.setHours(23, 59, 59, 999),
  n
}
function P3(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0),
  n.setHours(23, 59, 59, 999),
  n
}
const M3 = {
  lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
  },
  xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
  },
  xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
  },
  aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
  },
  xHours: {
      one: "1 hour",
      other: "{{count}} hours"
  },
  xDays: {
      one: "1 day",
      other: "{{count}} days"
  },
  aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
  },
  xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
  },
  aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
  },
  xMonths: {
      one: "1 month",
      other: "{{count}} months"
  },
  aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
  },
  xYears: {
      one: "1 year",
      other: "{{count}} years"
  },
  overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
  },
  almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
  }
}
, N3 = (e, t, n) => {
  let r;
  const o = M3[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
  n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function ha(e) {
  return (t={}) => {
      const n = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[n] || e.formats[e.defaultWidth]
  }
}
const O3 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}
, D3 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}
, T3 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}
, R3 = {
  date: ha({
      formats: O3,
      defaultWidth: "full"
  }),
  time: ha({
      formats: D3,
      defaultWidth: "full"
  }),
  dateTime: ha({
      formats: T3,
      defaultWidth: "full"
  })
}
, _3 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}
, A3 = (e, t, n, r) => _3[e];
function Mn(e) {
  return (t, n) => {
      const r = n != null && n.context ? String(n.context) : "standalone";
      let o;
      if (r === "formatting" && e.formattingValues) {
          const i = e.defaultFormattingWidth || e.defaultWidth
            , s = n != null && n.width ? String(n.width) : i;
          o = e.formattingValues[s] || e.formattingValues[i]
      } else {
          const i = e.defaultWidth
            , s = n != null && n.width ? String(n.width) : e.defaultWidth;
          o = e.values[s] || e.values[i]
      }
      const a = e.argumentCallback ? e.argumentCallback(t) : t;
      return o[a]
  }
}
const j3 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}
, I3 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
, L3 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
, F3 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
, W3 = {
  narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
  },
  abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
  },
  wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
  }
}
, $3 = {
  narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
  },
  abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
  },
  wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
  }
}
, z3 = (e, t) => {
  const n = Number(e)
    , r = n % 100;
  if (r > 20 || r < 10)
      switch (r % 10) {
      case 1:
          return n + "st";
      case 2:
          return n + "nd";
      case 3:
          return n + "rd"
      }
  return n + "th"
}
, B3 = {
  ordinalNumber: z3,
  era: Mn({
      values: j3,
      defaultWidth: "wide"
  }),
  quarter: Mn({
      values: I3,
      defaultWidth: "wide",
      argumentCallback: e => e - 1
  }),
  month: Mn({
      values: L3,
      defaultWidth: "wide"
  }),
  day: Mn({
      values: F3,
      defaultWidth: "wide"
  }),
  dayPeriod: Mn({
      values: W3,
      defaultWidth: "wide",
      formattingValues: $3,
      defaultFormattingWidth: "wide"
  })
};
function Nn(e) {
  return (t, n={}) => {
      const r = n.width
        , o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
        , a = t.match(o);
      if (!a)
          return null;
      const i = a[0]
        , s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
        , l = Array.isArray(s) ? U3(s, c => c.test(i)) : H3(s, c => c.test(i));
      let u;
      u = e.valueCallback ? e.valueCallback(l) : l,
      u = n.valueCallback ? n.valueCallback(u) : u;
      const d = t.slice(i.length);
      return {
          value: u,
          rest: d
      }
  }
}
function H3(e, t) {
  for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
          return n
}
function U3(e, t) {
  for (let n = 0; n < e.length; n++)
      if (t(e[n]))
          return n
}
function ax(e) {
  return (t, n={}) => {
      const r = t.match(e.matchPattern);
      if (!r)
          return null;
      const o = r[0]
        , a = t.match(e.parsePattern);
      if (!a)
          return null;
      let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
      i = n.valueCallback ? n.valueCallback(i) : i;
      const s = t.slice(o.length);
      return {
          value: i,
          rest: s
      }
  }
}
const Y3 = /^(\d+)(th|st|nd|rd)?/i
, V3 = /\d+/i
, G3 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}
, X3 = {
  any: [/^b/i, /^(a|c)/i]
}
, Q3 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}
, K3 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}
, q3 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
, Z3 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
, J3 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
, e4 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
, t4 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
, n4 = {
  any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
  }
}
, r4 = {
  ordinalNumber: ax({
      matchPattern: Y3,
      parsePattern: V3,
      valueCallback: e => parseInt(e, 10)
  }),
  era: Nn({
      matchPatterns: G3,
      defaultMatchWidth: "wide",
      parsePatterns: X3,
      defaultParseWidth: "any"
  }),
  quarter: Nn({
      matchPatterns: Q3,
      defaultMatchWidth: "wide",
      parsePatterns: K3,
      defaultParseWidth: "any",
      valueCallback: e => e + 1
  }),
  month: Nn({
      matchPatterns: q3,
      defaultMatchWidth: "wide",
      parsePatterns: Z3,
      defaultParseWidth: "any"
  }),
  day: Nn({
      matchPatterns: J3,
      defaultMatchWidth: "wide",
      parsePatterns: e4,
      defaultParseWidth: "any"
  }),
  dayPeriod: Nn({
      matchPatterns: t4,
      defaultMatchWidth: "any",
      parsePatterns: n4,
      defaultParseWidth: "any"
  })
}
, Uh = {
  code: "en-US",
  formatDistance: N3,
  formatLong: R3,
  formatRelative: A3,
  localize: B3,
  match: r4,
  options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
  }
};
function ix(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1),
  n.setHours(0, 0, 0, 0),
  n
}
function o4(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in);
  return rx(n, ix(n)) + 1
}
function Na(e, t) {
  var s, l, u, d;
  const n = ds()
    , r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0
    , o = Ae(e, t == null ? void 0 : t.in)
    , a = o.getDay()
    , i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i),
  o.setHours(0, 0, 0, 0),
  o
}
function Qi(e, t) {
  return Na(e, {
      ...t,
      weekStartsOn: 1
  })
}
function sx(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = n.getFullYear()
    , o = ct(n, 0);
  o.setFullYear(r + 1, 0, 4),
  o.setHours(0, 0, 0, 0);
  const a = Qi(o)
    , i = ct(n, 0);
  i.setFullYear(r, 0, 4),
  i.setHours(0, 0, 0, 0);
  const s = Qi(i);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1
}
function a4(e, t) {
  const n = sx(e, t)
    , r = ct(e, 0);
  return r.setFullYear(n, 0, 4),
  r.setHours(0, 0, 0, 0),
  Qi(r)
}
function lx(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = +Qi(n) - +a4(n);
  return Math.round(r / ex) + 1
}
function ux(e, t) {
  var d, c, f, g;
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = n.getFullYear()
    , o = ds()
    , a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1
    , i = ct((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, a),
  i.setHours(0, 0, 0, 0);
  const s = Na(i, t)
    , l = ct((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a),
  l.setHours(0, 0, 0, 0);
  const u = Na(l, t);
  return +n >= +s ? r + 1 : +n >= +u ? r : r - 1
}
function i4(e, t) {
  var s, l, u, d;
  const n = ds()
    , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
    , o = ux(e, t)
    , a = ct((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r),
  a.setHours(0, 0, 0, 0),
  Na(a, t)
}
function cx(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = +Na(n, t) - +i4(n, t);
  return Math.round(r / ex) + 1
}
function Pe(e, t) {
  const n = e < 0 ? "-" : ""
    , r = Math.abs(e).toString().padStart(t, "0");
  return n + r
}
const vr = {
  y(e, t) {
      const n = e.getFullYear()
        , r = n > 0 ? n : 1 - n;
      return Pe(t === "yy" ? r % 100 : r, t.length)
  },
  M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : Pe(n + 1, 2)
  },
  d(e, t) {
      return Pe(e.getDate(), t.length)
  },
  a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
      case "a":
      case "aa":
          return n.toUpperCase();
      case "aaa":
          return n;
      case "aaaaa":
          return n[0];
      case "aaaa":
      default:
          return n === "am" ? "a.m." : "p.m."
      }
  },
  h(e, t) {
      return Pe(e.getHours() % 12 || 12, t.length)
  },
  H(e, t) {
      return Pe(e.getHours(), t.length)
  },
  m(e, t) {
      return Pe(e.getMinutes(), t.length)
  },
  s(e, t) {
      return Pe(e.getSeconds(), t.length)
  },
  S(e, t) {
      const n = t.length
        , r = e.getMilliseconds()
        , o = Math.trunc(r * Math.pow(10, n - 3));
      return Pe(o, t.length)
  }
}
, zo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}
, Ag = {
  G: function(e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
      case "G":
      case "GG":
      case "GGG":
          return n.era(r, {
              width: "abbreviated"
          });
      case "GGGGG":
          return n.era(r, {
              width: "narrow"
          });
      case "GGGG":
      default:
          return n.era(r, {
              width: "wide"
          })
      }
  },
  y: function(e, t, n) {
      if (t === "yo") {
          const r = e.getFullYear()
            , o = r > 0 ? r : 1 - r;
          return n.ordinalNumber(o, {
              unit: "year"
          })
      }
      return vr.y(e, t)
  },
  Y: function(e, t, n, r) {
      const o = ux(e, r)
        , a = o > 0 ? o : 1 - o;
      if (t === "YY") {
          const i = a % 100;
          return Pe(i, 2)
      }
      return t === "Yo" ? n.ordinalNumber(a, {
          unit: "year"
      }) : Pe(a, t.length)
  },
  R: function(e, t) {
      const n = sx(e);
      return Pe(n, t.length)
  },
  u: function(e, t) {
      const n = e.getFullYear();
      return Pe(n, t.length)
  },
  Q: function(e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
      case "Q":
          return String(r);
      case "QQ":
          return Pe(r, 2);
      case "Qo":
          return n.ordinalNumber(r, {
              unit: "quarter"
          });
      case "QQQ":
          return n.quarter(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "QQQQQ":
          return n.quarter(r, {
              width: "narrow",
              context: "formatting"
          });
      case "QQQQ":
      default:
          return n.quarter(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  q: function(e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
      case "q":
          return String(r);
      case "qq":
          return Pe(r, 2);
      case "qo":
          return n.ordinalNumber(r, {
              unit: "quarter"
          });
      case "qqq":
          return n.quarter(r, {
              width: "abbreviated",
              context: "standalone"
          });
      case "qqqqq":
          return n.quarter(r, {
              width: "narrow",
              context: "standalone"
          });
      case "qqqq":
      default:
          return n.quarter(r, {
              width: "wide",
              context: "standalone"
          })
      }
  },
  M: function(e, t, n) {
      const r = e.getMonth();
      switch (t) {
      case "M":
      case "MM":
          return vr.M(e, t);
      case "Mo":
          return n.ordinalNumber(r + 1, {
              unit: "month"
          });
      case "MMM":
          return n.month(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "MMMMM":
          return n.month(r, {
              width: "narrow",
              context: "formatting"
          });
      case "MMMM":
      default:
          return n.month(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  L: function(e, t, n) {
      const r = e.getMonth();
      switch (t) {
      case "L":
          return String(r + 1);
      case "LL":
          return Pe(r + 1, 2);
      case "Lo":
          return n.ordinalNumber(r + 1, {
              unit: "month"
          });
      case "LLL":
          return n.month(r, {
              width: "abbreviated",
              context: "standalone"
          });
      case "LLLLL":
          return n.month(r, {
              width: "narrow",
              context: "standalone"
          });
      case "LLLL":
      default:
          return n.month(r, {
              width: "wide",
              context: "standalone"
          })
      }
  },
  w: function(e, t, n, r) {
      const o = cx(e, r);
      return t === "wo" ? n.ordinalNumber(o, {
          unit: "week"
      }) : Pe(o, t.length)
  },
  I: function(e, t, n) {
      const r = lx(e);
      return t === "Io" ? n.ordinalNumber(r, {
          unit: "week"
      }) : Pe(r, t.length)
  },
  d: function(e, t, n) {
      return t === "do" ? n.ordinalNumber(e.getDate(), {
          unit: "date"
      }) : vr.d(e, t)
  },
  D: function(e, t, n) {
      const r = o4(e);
      return t === "Do" ? n.ordinalNumber(r, {
          unit: "dayOfYear"
      }) : Pe(r, t.length)
  },
  E: function(e, t, n) {
      const r = e.getDay();
      switch (t) {
      case "E":
      case "EE":
      case "EEE":
          return n.day(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "EEEEE":
          return n.day(r, {
              width: "narrow",
              context: "formatting"
          });
      case "EEEEEE":
          return n.day(r, {
              width: "short",
              context: "formatting"
          });
      case "EEEE":
      default:
          return n.day(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  e: function(e, t, n, r) {
      const o = e.getDay()
        , a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
      case "e":
          return String(a);
      case "ee":
          return Pe(a, 2);
      case "eo":
          return n.ordinalNumber(a, {
              unit: "day"
          });
      case "eee":
          return n.day(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "eeeee":
          return n.day(o, {
              width: "narrow",
              context: "formatting"
          });
      case "eeeeee":
          return n.day(o, {
              width: "short",
              context: "formatting"
          });
      case "eeee":
      default:
          return n.day(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  c: function(e, t, n, r) {
      const o = e.getDay()
        , a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
      case "c":
          return String(a);
      case "cc":
          return Pe(a, t.length);
      case "co":
          return n.ordinalNumber(a, {
              unit: "day"
          });
      case "ccc":
          return n.day(o, {
              width: "abbreviated",
              context: "standalone"
          });
      case "ccccc":
          return n.day(o, {
              width: "narrow",
              context: "standalone"
          });
      case "cccccc":
          return n.day(o, {
              width: "short",
              context: "standalone"
          });
      case "cccc":
      default:
          return n.day(o, {
              width: "wide",
              context: "standalone"
          })
      }
  },
  i: function(e, t, n) {
      const r = e.getDay()
        , o = r === 0 ? 7 : r;
      switch (t) {
      case "i":
          return String(o);
      case "ii":
          return Pe(o, t.length);
      case "io":
          return n.ordinalNumber(o, {
              unit: "day"
          });
      case "iii":
          return n.day(r, {
              width: "abbreviated",
              context: "formatting"
          });
      case "iiiii":
          return n.day(r, {
              width: "narrow",
              context: "formatting"
          });
      case "iiiiii":
          return n.day(r, {
              width: "short",
              context: "formatting"
          });
      case "iiii":
      default:
          return n.day(r, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  a: function(e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
      case "a":
      case "aa":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "aaa":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          }).toLowerCase();
      case "aaaaa":
          return n.dayPeriod(o, {
              width: "narrow",
              context: "formatting"
          });
      case "aaaa":
      default:
          return n.dayPeriod(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  b: function(e, t, n) {
      const r = e.getHours();
      let o;
      switch (r === 12 ? o = zo.noon : r === 0 ? o = zo.midnight : o = r / 12 >= 1 ? "pm" : "am",
      t) {
      case "b":
      case "bb":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "bbb":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          }).toLowerCase();
      case "bbbbb":
          return n.dayPeriod(o, {
              width: "narrow",
              context: "formatting"
          });
      case "bbbb":
      default:
          return n.dayPeriod(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  B: function(e, t, n) {
      const r = e.getHours();
      let o;
      switch (r >= 17 ? o = zo.evening : r >= 12 ? o = zo.afternoon : r >= 4 ? o = zo.morning : o = zo.night,
      t) {
      case "B":
      case "BB":
      case "BBB":
          return n.dayPeriod(o, {
              width: "abbreviated",
              context: "formatting"
          });
      case "BBBBB":
          return n.dayPeriod(o, {
              width: "narrow",
              context: "formatting"
          });
      case "BBBB":
      default:
          return n.dayPeriod(o, {
              width: "wide",
              context: "formatting"
          })
      }
  },
  h: function(e, t, n) {
      if (t === "ho") {
          let r = e.getHours() % 12;
          return r === 0 && (r = 12),
          n.ordinalNumber(r, {
              unit: "hour"
          })
      }
      return vr.h(e, t)
  },
  H: function(e, t, n) {
      return t === "Ho" ? n.ordinalNumber(e.getHours(), {
          unit: "hour"
      }) : vr.H(e, t)
  },
  K: function(e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, {
          unit: "hour"
      }) : Pe(r, t.length)
  },
  k: function(e, t, n) {
      let r = e.getHours();
      return r === 0 && (r = 24),
      t === "ko" ? n.ordinalNumber(r, {
          unit: "hour"
      }) : Pe(r, t.length)
  },
  m: function(e, t, n) {
      return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
          unit: "minute"
      }) : vr.m(e, t)
  },
  s: function(e, t, n) {
      return t === "so" ? n.ordinalNumber(e.getSeconds(), {
          unit: "second"
      }) : vr.s(e, t)
  },
  S: function(e, t) {
      return vr.S(e, t)
  },
  X: function(e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0)
          return "Z";
      switch (t) {
      case "X":
          return Ig(r);
      case "XXXX":
      case "XX":
          return oo(r);
      case "XXXXX":
      case "XXX":
      default:
          return oo(r, ":")
      }
  },
  x: function(e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
      case "x":
          return Ig(r);
      case "xxxx":
      case "xx":
          return oo(r);
      case "xxxxx":
      case "xxx":
      default:
          return oo(r, ":")
      }
  },
  O: function(e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
      case "O":
      case "OO":
      case "OOO":
          return "GMT" + jg(r, ":");
      case "OOOO":
      default:
          return "GMT" + oo(r, ":")
      }
  },
  z: function(e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
      case "z":
      case "zz":
      case "zzz":
          return "GMT" + jg(r, ":");
      case "zzzz":
      default:
          return "GMT" + oo(r, ":")
      }
  },
  t: function(e, t, n) {
      const r = Math.trunc(+e / 1e3);
      return Pe(r, t.length)
  },
  T: function(e, t, n) {
      return Pe(+e, t.length)
  }
};
function jg(e, t="") {
  const n = e > 0 ? "-" : "+"
    , r = Math.abs(e)
    , o = Math.trunc(r / 60)
    , a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Pe(a, 2)
}
function Ig(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Pe(Math.abs(e) / 60, 2) : oo(e, t)
}
function oo(e, t="") {
  const n = e > 0 ? "-" : "+"
    , r = Math.abs(e)
    , o = Pe(Math.trunc(r / 60), 2)
    , a = Pe(r % 60, 2);
  return n + o + t + a
}
const Lg = (e, t) => {
  switch (e) {
  case "P":
      return t.date({
          width: "short"
      });
  case "PP":
      return t.date({
          width: "medium"
      });
  case "PPP":
      return t.date({
          width: "long"
      });
  case "PPPP":
  default:
      return t.date({
          width: "full"
      })
  }
}
, dx = (e, t) => {
  switch (e) {
  case "p":
      return t.time({
          width: "short"
      });
  case "pp":
      return t.time({
          width: "medium"
      });
  case "ppp":
      return t.time({
          width: "long"
      });
  case "pppp":
  default:
      return t.time({
          width: "full"
      })
  }
}
, s4 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || []
    , r = n[1]
    , o = n[2];
  if (!o)
      return Lg(e, t);
  let a;
  switch (r) {
  case "P":
      a = t.dateTime({
          width: "short"
      });
      break;
  case "PP":
      a = t.dateTime({
          width: "medium"
      });
      break;
  case "PPP":
      a = t.dateTime({
          width: "long"
      });
      break;
  case "PPPP":
  default:
      a = t.dateTime({
          width: "full"
      });
      break
  }
  return a.replace("{{date}}", Lg(r, t)).replace("{{time}}", dx(o, t))
}
, l4 = {
  p: dx,
  P: s4
}
, u4 = /^D+$/
, c4 = /^Y+$/
, d4 = ["D", "DD", "YY", "YYYY"];
function f4(e) {
  return u4.test(e)
}
function h4(e) {
  return c4.test(e)
}
function m4(e, t, n) {
  const r = p4(e, t, n);
  if (console.warn(r),
  d4.includes(e))
      throw new RangeError(r)
}
function p4(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
function fx(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function g4(e) {
  return !(!fx(e) && typeof e != "number" || isNaN(+Ae(e)))
}
const v4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
, y4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
, w4 = /^'([^]*?)'?$/
, x4 = /''/g
, b4 = /[a-zA-Z]/;
function S4(e, t, n) {
  var d, c, f, g, w, v, x, p;
  const r = ds()
    , o = (n == null ? void 0 : n.locale) ?? r.locale ?? Uh
    , a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1
    , i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((p = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : p.weekStartsOn) ?? 0
    , s = Ae(e, n == null ? void 0 : n.in);
  if (!g4(s))
      throw new RangeError("Invalid time value");
  let l = t.match(y4).map(h => {
      const m = h[0];
      if (m === "p" || m === "P") {
          const S = l4[m];
          return S(h, o.formatLong)
      }
      return h
  }
  ).join("").match(v4).map(h => {
      if (h === "''")
          return {
              isToken: !1,
              value: "'"
          };
      const m = h[0];
      if (m === "'")
          return {
              isToken: !1,
              value: k4(h)
          };
      if (Ag[m])
          return {
              isToken: !0,
              value: h
          };
      if (m.match(b4))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + m + "`");
      return {
          isToken: !1,
          value: h
      }
  }
  );
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const u = {
      firstWeekContainsDate: a,
      weekStartsOn: i,
      locale: o
  };
  return l.map(h => {
      if (!h.isToken)
          return h.value;
      const m = h.value;
      (!(n != null && n.useAdditionalWeekYearTokens) && h4(m) || !(n != null && n.useAdditionalDayOfYearTokens) && f4(m)) && m4(m, t, String(e));
      const S = Ag[m[0]];
      return S(s, m, o.localize, u)
  }
  ).join("")
}
function k4(e) {
  const t = e.match(w4);
  return t ? t[1].replace(x4, "'") : e
}
function C4(e, t) {
  return +Ae(e) > +Ae(t)
}
function E4(e, t) {
  return +Ae(e) < +Ae(t)
}
function P4(e, t, n) {
  const [r,o] = cs(n == null ? void 0 : n.in, e, t);
  return +Xi(r) == +Xi(o)
}
function M4(e, t, n) {
  const [r,o] = cs(n == null ? void 0 : n.in, e, t);
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth()
}
function N4(e, t, n) {
  const [r,o] = cs(n == null ? void 0 : n.in, e, t);
  return r.getFullYear() === o.getFullYear()
}
function O4(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach(o => {
      !r && typeof o == "object" && (r = ct.bind(null, o));
      const a = Ae(o, r);
      (!n || n < a || isNaN(+a)) && (n = a)
  }
  ),
  ct(r, n || NaN)
}
function D4(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach(o => {
      !r && typeof o == "object" && (r = ct.bind(null, o));
      const a = Ae(o, r);
      (!n || n > a || isNaN(+a)) && (n = a)
  }
  ),
  ct(r, n || NaN)
}
function T4(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in)
    , r = n.getFullYear()
    , o = n.getMonth()
    , a = ct(n, 0);
  return a.setFullYear(r, o + 1, 0),
  a.setHours(0, 0, 0, 0),
  a.getDate()
}
function R4(e, t, n) {
  const r = Ae(e, n == null ? void 0 : n.in)
    , o = r.getFullYear()
    , a = r.getDate()
    , i = ct((n == null ? void 0 : n.in) || e, 0);
  i.setFullYear(o, t, 15),
  i.setHours(0, 0, 0, 0);
  const s = T4(i);
  return r.setMonth(t, Math.min(a, s)),
  r
}
function _4(e, t, n) {
  const r = Ae(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? ct((n == null ? void 0 : n.in) || e, NaN) : (r.setFullYear(t),
  r)
}
function A4(e, t) {
  const n = Ae(e, t == null ? void 0 : t.in);
  return n.setDate(1),
  n.setHours(0, 0, 0, 0),
  n
}
const Gt = {
  addDays: tx,
  addMonths: nx,
  addWeeks: x3,
  addYears: b3,
  differenceInCalendarDays: rx,
  differenceInCalendarMonths: S3,
  endOfISOWeek: C3,
  endOfMonth: E3,
  endOfWeek: ox,
  endOfYear: P3,
  format: S4,
  getISOWeek: lx,
  getWeek: cx,
  isAfter: C4,
  isBefore: E4,
  isDate: fx,
  isSameDay: P4,
  isSameMonth: M4,
  isSameYear: N4,
  max: O4,
  min: D4,
  setMonth: R4,
  setYear: _4,
  startOfDay: Xi,
  startOfISOWeek: Qi,
  startOfMonth: A4,
  startOfWeek: Na,
  startOfYear: ix
};
function j4(e) {
  return {
      ...Gt,
      ...e
  }
}
function I4() {
  const e = {};
  for (const t in ne)
      e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in Te)
      e[Te[t]] = `rdp-${Te[t]}`;
  for (const t in at)
      e[at[t]] = `rdp-${at[t]}`;
  return e
}
const Wc = {}
, li = {};
function bi(e, t) {
  try {
      const r = (Wc[e] || (Wc[e] = new Intl.DateTimeFormat("en-GB",{
          timeZone: e,
          hour: "numeric",
          timeZoneName: "longOffset"
      }).format))(t).split("GMT")[1] || "";
      return r in li ? li[r] : Fg(r, r.split(":"))
  } catch {
      if (e in li)
          return li[e];
      const n = e == null ? void 0 : e.match(L4);
      return n ? Fg(e, n.slice(1)) : NaN
  }
}
const L4 = /([+-]\d\d):?(\d\d)?/;
function Fg(e, t) {
  const n = +t[0]
    , r = +(t[1] || 0);
  return li[e] = n > 0 ? n * 60 + r : n * 60 - r
}
class Tn extends Date {
  constructor(...t) {
      super(),
      t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()),
      this.internal = new Date,
      isNaN(bi(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0]instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)),
      mx(this)) : this.setTime(Date.now()),
      hx(this)
  }
  static tz(t, ...n) {
      return n.length ? new Tn(...n,t) : new Tn(Date.now(),t)
  }
  withTimeZone(t) {
      return new Tn(+this,t)
  }
  getTimezoneOffset() {
      return -bi(this.timeZone, this)
  }
  [Symbol.for("constructDateFrom")](t) {
      return new Tn(+new Date(t),this.timeZone)
  }
}
const Wg = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach(e => {
  if (!Wg.test(e))
      return;
  const t = e.replace(Wg, "$1UTC");
  Tn.prototype[t] && (e.startsWith("get") ? Tn.prototype[e] = function() {
      return this.internal[t]()
  }
  : (Tn.prototype[e] = function() {
      return Date.prototype[t].apply(this.internal, arguments),
      F4(this),
      +this
  }
  ,
  Tn.prototype[t] = function() {
      return Date.prototype[t].apply(this, arguments),
      hx(this),
      +this
  }
  ))
}
);
function hx(e) {
  e.internal.setTime(+e),
  e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset())
}
function F4(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()),
  Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()),
  mx(e)
}
function mx(e) {
  const t = bi(e.timeZone, e)
    , n = new Date(+e);
  n.setUTCHours(n.getUTCHours() - 1);
  const r = -new Date(+e).getTimezoneOffset()
    , o = -new Date(+n).getTimezoneOffset()
    , a = r - o
    , i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const s = r - t;
  s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
  const l = bi(e.timeZone, e)
    , d = -new Date(+e).getTimezoneOffset() - l
    , c = l !== t
    , f = d - s;
  if (c && f) {
      Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + f);
      const g = bi(e.timeZone, e)
        , w = l - g;
      w && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + w),
      Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w))
  }
}
class Rn extends Tn {
  static tz(t, ...n) {
      return n.length ? new Rn(...n,t) : new Rn(Date.now(),t)
  }
  toISOString() {
      const [t,n,r] = this.tzComponents()
        , o = `${t}${n}:${r}`;
      return this.internal.toISOString().slice(0, -1) + o
  }
  toString() {
      return `${this.toDateString()} ${this.toTimeString()}`
  }
  toDateString() {
      const [t,n,r,o] = this.internal.toUTCString().split(" ");
      return `${t == null ? void 0 : t.slice(0, -1)} ${r} ${n} ${o}`
  }
  toTimeString() {
      const t = this.internal.toUTCString().split(" ")[4]
        , [n,r,o] = this.tzComponents();
      return `${t} GMT${n}${r}${o} (${W4(this.timeZone, this)})`
  }
  toLocaleString(t, n) {
      return Date.prototype.toLocaleString.call(this, t, {
          ...n,
          timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
      })
  }
  toLocaleDateString(t, n) {
      return Date.prototype.toLocaleDateString.call(this, t, {
          ...n,
          timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
      })
  }
  toLocaleTimeString(t, n) {
      return Date.prototype.toLocaleTimeString.call(this, t, {
          ...n,
          timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
      })
  }
  tzComponents() {
      const t = this.getTimezoneOffset()
        , n = t > 0 ? "-" : "+"
        , r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0")
        , o = String(Math.abs(t) % 60).padStart(2, "0");
      return [n, r, o]
  }
  withTimeZone(t) {
      return new Rn(+this,t)
  }
  [Symbol.for("constructDateFrom")](t) {
      return new Rn(+new Date(t),this.timeZone)
  }
}
function W4(e, t) {
  return new Intl.DateTimeFormat("en-GB",{
      timeZone: e,
      timeZoneName: "long"
  }).format(t).slice(12)
}
function px(e, t, n=Gt) {
  return n.format(e, "LLLL y", t)
}
const $4 = px;
function z4(e, t, n=Gt) {
  return n.format(e, "d", t)
}
function B4(e, t=Uh) {
  var n;
  return (n = t.localize) == null ? void 0 : n.month(e)
}
function H4(e) {
  return e < 10 ? `0${e.toLocaleString()}` : `${e.toLocaleString()}`
}
function U4() {
  return ""
}
function Y4(e, t, n=Gt) {
  return n.format(e, "cccccc", t)
}
function gx(e) {
  return e.toString()
}
const V4 = gx
, G4 = Object.freeze(Object.defineProperty({
  __proto__: null,
  formatCaption: px,
  formatDay: z4,
  formatMonthCaption: $4,
  formatMonthDropdown: B4,
  formatWeekNumber: H4,
  formatWeekNumberHeader: U4,
  formatWeekdayName: Y4,
  formatYearCaption: V4,
  formatYearDropdown: gx
}, Symbol.toStringTag, {
  value: "Module"
}));
function X4(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption),
  e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption),
  {
      ...G4,
      ...e
  }
}
function Q4(e, t, n, r, o, a) {
  if (!t || !n)
      return;
  const {addMonths: i, startOfMonth: s, isBefore: l} = a
    , u = e.getFullYear()
    , d = [];
  let c = t;
  for (; d.length < 12 && l(c, i(n, 1)); )
      d.push(c.getMonth()),
      c = i(c, 1);
  return d.sort( (w, v) => w - v).map(w => {
      const v = r.formatMonthDropdown(w, o)
        , x = a.Date ? new a.Date(u,w) : new Date(u,w)
        , p = t && x < s(t) || n && x > s(n) || !1;
      return {
          value: w,
          label: v,
          disabled: p
      }
  }
  )
}
function K4(e, t={}, n={}) {
  let r = {
      ...t == null ? void 0 : t[ne.Day]
  };
  return Object.entries(e).filter( ([,o]) => o === !0).forEach( ([o]) => {
      r = {
          ...r,
          ...n == null ? void 0 : n[o]
      }
  }
  ),
  r
}
function q4(e, t, n, r, o=Gt) {
  const a = r ? Rn.tz(r) : o.Date ? new o.Date : new Date
    , i = n ? o.startOfISOWeek(a) : o.startOfWeek(a, {
      locale: e,
      weekStartsOn: t
  })
    , s = [];
  for (let l = 0; l < 7; l++) {
      const u = o.addDays(i, l);
      s.push(u)
  }
  return s
}
function Z4(e, t, n, r, o) {
  if (!t || !n)
      return;
  const {startOfMonth: a, startOfYear: i, endOfYear: s, addYears: l, isBefore: u, isSameYear: d} = o
    , c = e.getMonth()
    , f = i(t)
    , g = s(n)
    , w = [];
  let v = f;
  for (; u(v, g) || d(v, g); )
      w.push(v.getFullYear()),
      v = l(v, 1);
  return w.map(x => {
      const p = o.Date ? new o.Date(x,c) : new Date(x,c)
        , h = t && p < a(t) || c && n && p > a(n) || !1
        , m = r.formatYearDropdown(x);
      return {
          value: x,
          label: m,
          disabled: h
      }
  }
  )
}
function vx(e, t, n=Gt) {
  return n.format(e, "LLLL y", t)
}
const J4 = vx;
function eR(e, t, n, r=Gt) {
  let o = r.format(e, "PPPP", n);
  return t != null && t.today && (o = `Today, ${o}`),
  o
}
function yx(e, t, n, r=Gt) {
  let o = r.format(e, "PPPP", n);
  return t.today && (o = `Today, ${o}`),
  t.selected && (o = `${o}, selected`),
  o
}
const tR = yx;
function nR() {
  return ""
}
function rR(e) {
  return "Choose the Month"
}
function oR(e) {
  return "Go to the Next Month"
}
function aR(e) {
  return "Go to the Previous Month"
}
function iR(e, t, n=Gt) {
  return n.format(e, "cccc", t)
}
function sR(e, t) {
  return `Week ${e}`
}
function lR(e) {
  return "Week Number"
}
function uR(e) {
  return "Choose the Year"
}
const cR = Object.freeze(Object.defineProperty({
  __proto__: null,
  labelCaption: J4,
  labelDay: tR,
  labelDayButton: yx,
  labelGrid: vx,
  labelGridcell: eR,
  labelMonthDropdown: rR,
  labelNav: nR,
  labelNext: oR,
  labelPrevious: aR,
  labelWeekNumber: sR,
  labelWeekNumberHeader: lR,
  labelWeekday: iR,
  labelYearDropdown: uR
}, Symbol.toStringTag, {
  value: "Module"
}))
, dR = 42;
function fR(e, t, n, r) {
  const o = e[0]
    , a = e[e.length - 1]
    , {ISOWeek: i, fixedWeeks: s, locale: l, weekStartsOn: u} = n ?? {}
    , {startOfWeek: d, endOfWeek: c, startOfISOWeek: f, endOfISOWeek: g, addDays: w, differenceInCalendarDays: v, differenceInCalendarMonths: x, isAfter: p, endOfMonth: h} = r
    , m = i ? f(o) : d(o, {
      weekStartsOn: u,
      locale: l
  })
    , S = i ? g(h(a)) : c(h(a), {
      weekStartsOn: u,
      locale: l
  })
    , E = v(S, m)
    , N = x(a, o) + 1
    , O = [];
  for (let L = 0; L <= E; L++) {
      const _ = w(m, L);
      if (t && p(_, t))
          break;
      O.push(_)
  }
  const k = dR * N;
  if (s && O.length < k)
      for (let L = 0; L < 7; L++) {
          const _ = w(O[O.length - 1], 1);
          O.push(_)
      }
  return O
}
function hR(e) {
  const t = [];
  return e.reduce( (n, r) => {
      const o = []
        , a = r.weeks.reduce( (i, s) => [...i, ...s.days], o);
      return [...n, ...a]
  }
  , t)
}
function mR(e, t, n, r) {
  const {numberOfMonths: o=1} = n
    , a = [];
  for (let i = 0; i < o; i++) {
      const s = r.addMonths(e, i);
      if (t && s > t)
          break;
      a.push(s)
  }
  return a
}
function $g(e, t) {
  const {month: n, defaultMonth: r, today: o=e.timeZone ? Rn.tz(e.timeZone) : t.Date ? new t.Date : new Date, numberOfMonths: a=1, endMonth: i, startMonth: s} = e;
  let l = n || r || o;
  const {differenceInCalendarMonths: u, addMonths: d, startOfMonth: c} = t;
  if (i && u(i, l) < 0) {
      const f = -1 * (a - 1);
      l = d(i, f)
  }
  return s && u(l, s) < 0 && (l = s),
  c(l)
}
class wx {
  constructor(t, n, r=Gt) {
      this.date = t,
      this.displayMonth = n,
      this.outside = !!(n && !r.isSameMonth(t, n)),
      this.dateLib = r
  }
  isEqualTo(t) {
      return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth)
  }
}
class pR {
  constructor(t, n) {
      this.date = t,
      this.weeks = n
  }
}
class gR {
  constructor(t, n) {
      this.days = n,
      this.weekNumber = t
  }
}
function vR(e, t, n, r) {
  const {startOfWeek: o, endOfWeek: a, startOfISOWeek: i, endOfISOWeek: s, endOfMonth: l, addDays: u, getWeek: d, getISOWeek: c} = r
    , f = e.reduce( (g, w) => {
      const v = n.ISOWeek ? i(w) : o(w, {
          locale: n.locale,
          weekStartsOn: n.weekStartsOn
      })
        , x = n.ISOWeek ? s(l(w)) : a(l(w), {
          locale: n.locale,
          weekStartsOn: n.weekStartsOn
      })
        , p = t.filter(S => S >= v && S <= x);
      if (n.fixedWeeks && p.length < 42) {
          const S = t.filter(E => E > x && E <= u(x, 7));
          p.push(...S)
      }
      const h = p.reduce( (S, E) => {
          const N = n.ISOWeek ? c(E) : d(E, {
              locale: n.locale,
              weekStartsOn: n.weekStartsOn,
              firstWeekContainsDate: n.firstWeekContainsDate
          })
            , O = S.find(L => L.weekNumber === N)
            , k = new wx(E,w,r);
          return O ? O.days.push(k) : S.push(new gR(N,[k])),
          S
      }
      , [])
        , m = new pR(w,h);
      return g.push(m),
      g
  }
  , []);
  return n.reverseMonths ? f.reverse() : f
}
function yR(e, t) {
  var v;
  let {startMonth: n, endMonth: r} = e;
  const {startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: l, endOfYear: u} = t
    , {fromYear: d, toYear: c, fromMonth: f, toMonth: g} = e;
  !n && f && (n = f),
  !n && d && (n = new Date(d,0,1)),
  !r && g && (r = g),
  !r && c && (r = new Date(c,11,31));
  const w = (v = e.captionLayout) == null ? void 0 : v.startsWith("dropdown");
  if (n)
      n = i(n);
  else if (d)
      n = new Date(d,0,1);
  else if (!n && w) {
      const x = e.today ?? (e.timeZone ? Rn.tz(e.timeZone) : t.Date ? new t.Date : new Date);
      n = o(l(x, -100))
  }
  if (r)
      r = s(r);
  else if (c)
      r = new Date(c,11,31);
  else if (!r && w) {
      const x = e.today ?? (e.timeZone ? Rn.tz(e.timeZone) : t.Date ? new t.Date : new Date);
      r = u(x)
  }
  return [n && a(n), r && a(r)]
}
function wR(e, t, n, r) {
  if (n.disableNavigation)
      return;
  const {pagedNavigation: o, numberOfMonths: a=1} = n
    , {startOfMonth: i, addMonths: s, differenceInCalendarMonths: l} = r
    , u = o ? a : 1
    , d = i(e);
  if (!t)
      return s(d, u);
  if (!(l(t, e) < a))
      return s(d, u)
}
function xR(e, t, n, r) {
  if (n.disableNavigation)
      return;
  const {pagedNavigation: o, numberOfMonths: a} = n
    , {startOfMonth: i, addMonths: s, differenceInCalendarMonths: l} = r
    , u = o ? a ?? 1 : 1
    , d = i(e);
  if (!t)
      return s(d, -u);
  if (!(l(d, t) <= 0))
      return s(d, -u)
}
function bR(e) {
  const t = [];
  return e.reduce( (n, r) => [...n, ...r.weeks], t)
}
function Fu(e, t) {
  const [n,r] = y.useState(e);
  return [t === void 0 ? n : t, r]
}
function SR(e, t) {
  const [n,r] = yR(e, t)
    , {startOfMonth: o, endOfMonth: a} = t
    , i = $g(e, t)
    , [s,l] = Fu(i, e.month ? o(e.month) : void 0);
  y.useEffect( () => {
      const N = $g(e, t);
      l(N)
  }
  , [e.timeZone]);
  const u = mR(s, r, e, t)
    , d = fR(u, e.endMonth ? a(e.endMonth) : void 0, e, t)
    , c = vR(u, d, e, t)
    , f = bR(c)
    , g = hR(c)
    , w = xR(s, n, e, t)
    , v = wR(s, r, e, t)
    , {disableNavigation: x, onMonthChange: p} = e
    , h = N => f.some(O => O.days.some(k => k.isEqualTo(N)))
    , m = N => {
      if (x)
          return;
      let O = o(N);
      n && O < o(n) && (O = o(n)),
      r && O > o(r) && (O = o(r)),
      l(O),
      p == null || p(O)
  }
  ;
  return {
      months: c,
      weeks: f,
      days: g,
      navStart: n,
      navEnd: r,
      previousMonth: w,
      nextMonth: v,
      goToMonth: m,
      goToDay: N => {
          h(N) || m(N.date)
      }
  }
}
function kR(e, t, n, r) {
  let o, a = 0, i = !1;
  for (; a < e.length && !i; ) {
      const s = e[a]
        , l = t(s);
      !l[Te.disabled] && !l[Te.hidden] && !l[Te.outside] && (l[Te.focused] || r != null && r.isEqualTo(s) || n(s.date) || l[Te.today]) && (o = s,
      i = !0),
      a++
  }
  return o || (o = e.find(s => {
      const l = t(s);
      return !l[Te.disabled] && !l[Te.hidden] && !l[Te.outside]
  }
  )),
  o
}
function Yh(e, t, n=!1, r=Gt) {
  let {from: o, to: a} = e;
  const {differenceInCalendarDays: i, isSameDay: s} = r;
  return o && a ? (i(a, o) < 0 && ([o,a] = [a, o]),
  i(t, o) >= (n ? 1 : 0) && i(a, t) >= (n ? 1 : 0)) : !n && a ? s(a, t) : !n && o ? s(o, t) : !1
}
function CR(e) {
  return !!(e && typeof e == "object" && "before"in e && "after"in e)
}
function xx(e) {
  return !!(e && typeof e == "object" && "from"in e)
}
function ER(e) {
  return !!(e && typeof e == "object" && "after"in e)
}
function PR(e) {
  return !!(e && typeof e == "object" && "before"in e)
}
function MR(e) {
  return !!(e && typeof e == "object" && "dayOfWeek"in e)
}
function NR(e, t) {
  return Array.isArray(e) && e.every(t.isDate)
}
function ma(e, t, n=Gt) {
  const r = Array.isArray(t) ? t : [t]
    , {isSameDay: o, differenceInCalendarDays: a, isAfter: i} = n;
  return r.some(s => {
      if (typeof s == "boolean")
          return s;
      if (n.isDate(s))
          return o(e, s);
      if (NR(s, n))
          return s.includes(e);
      if (xx(s))
          return Yh(s, e, !1, n);
      if (MR(s))
          return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
      if (CR(s)) {
          const l = a(s.before, e)
            , u = a(s.after, e)
            , d = l > 0
            , c = u < 0;
          return i(s.before, s.after) ? c && d : d || c
      }
      return ER(s) ? a(e, s.after) > 0 : PR(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1
  }
  )
}
function OR(e, t, n, r, o, a, i) {
  const {weekStartsOn: s, locale: l, ISOWeek: u} = a
    , {addDays: d, addMonths: c, addYears: f, addWeeks: g, startOfISOWeek: w, endOfISOWeek: v, startOfWeek: x, endOfWeek: p, max: h, min: m} = i;
  let E = {
      day: d,
      week: g,
      month: c,
      year: f,
      startOfWeek: N => u ? w(N) : x(N, {
          locale: l,
          weekStartsOn: s
      }),
      endOfWeek: N => u ? v(N) : p(N, {
          locale: l,
          weekStartsOn: s
      })
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = h([r, E]) : t === "after" && o && (E = m([o, E])),
  E
}
function bx(e, t, n, r, o, a, i, s=0) {
  if (s > 365)
      return;
  const l = OR(e, t, n.date, r, o, a, i)
    , u = !!(a.disabled && ma(l, a.disabled, i))
    , d = !!(a.hidden && ma(l, a.hidden, i))
    , c = l
    , f = new wx(l,c,i);
  return !u && !d ? f : bx(e, t, f, r, o, a, i, s + 1)
}
function DR(e, t, n, r, o) {
  const {autoFocus: a} = e
    , [i,s] = y.useState()
    , l = kR(t.days, n, r || ( () => !1), i)
    , [u,d] = y.useState(a ? l : void 0);
  return {
      isFocusTarget: v => !!(l != null && l.isEqualTo(v)),
      setFocused: d,
      focused: u,
      blur: () => {
          s(u),
          d(void 0)
      }
      ,
      moveFocus: (v, x) => {
          if (!u)
              return;
          const p = bx(v, x, u, t.navStart, t.navEnd, e, o);
          p && (t.goToDay(p),
          d(p))
      }
  }
}
function TR(e, t, n) {
  const {disabled: r, hidden: o, modifiers: a, showOutsideDays: i, today: s} = t
    , {isSameDay: l, isSameMonth: u} = n
    , d = {
      [Te.focused]: [],
      [Te.outside]: [],
      [Te.disabled]: [],
      [Te.hidden]: [],
      [Te.today]: []
  }
    , c = {}
    , f = {
      [at.range_end]: [],
      [at.range_middle]: [],
      [at.range_start]: [],
      [at.selected]: []
  };
  for (const g of e) {
      const {date: w, displayMonth: v} = g
        , x = !!(v && !u(w, v))
        , p = !!(r && ma(w, r, n))
        , h = !!(o && ma(w, o, n)) || !i && x
        , m = l(w, s ?? (t.timeZone ? Rn.tz(t.timeZone) : n.Date ? new n.Date : new Date));
      x && d.outside.push(g),
      p && d.disabled.push(g),
      h && d.hidden.push(g),
      m && d.today.push(g),
      a && Object.keys(a).forEach(S => {
          const E = a == null ? void 0 : a[S];
          E && ma(w, E, n) && (c[S] ? c[S].push(g) : c[S] = [g])
      }
      )
  }
  return g => {
      const w = {
          [Te.focused]: !1,
          [Te.disabled]: !1,
          [Te.hidden]: !1,
          [Te.outside]: !1,
          [Te.today]: !1
      }
        , v = {
          [at.range_end]: !1,
          [at.range_middle]: !1,
          [at.range_start]: !1,
          [at.selected]: !1
      }
        , x = {};
      for (const p in d) {
          const h = d[p];
          w[p] = h.some(m => m === g)
      }
      for (const p in f) {
          const h = f[p];
          v[p] = h.some(m => m === g)
      }
      for (const p in c)
          x[p] = c[p].some(h => h === g);
      return {
          ...v,
          ...w,
          ...x
      }
  }
}
function RR(e, t) {
  const {selected: n, required: r, onSelect: o} = e
    , [a,i] = Fu(n, o ? n : void 0)
    , s = o ? n : a
    , {isSameDay: l} = t
    , u = g => (s == null ? void 0 : s.some(w => l(w, g))) ?? !1
    , {min: d, max: c} = e;
  return {
      selected: s,
      select: (g, w, v) => {
          let x = [...s ?? []];
          if (u(g)) {
              if ((s == null ? void 0 : s.length) === d || r && (s == null ? void 0 : s.length) === 1)
                  return;
              x = s == null ? void 0 : s.filter(p => !l(p, g))
          } else
              (s == null ? void 0 : s.length) === c ? x = [g] : x = [...x, g];
          return o || i(x),
          o == null || o(x, g, w, v),
          x
      }
      ,
      isSelected: u
  }
}
function _R(e, t, n=0, r=0, o=!1, a=Gt) {
  const {from: i, to: s} = t || {}
    , {isSameDay: l, isAfter: u, isBefore: d} = a;
  let c;
  if (!i && !s)
      c = {
          from: e,
          to: n > 0 ? void 0 : e
      };
  else if (i && !s)
      l(i, e) ? o ? c = {
          from: i,
          to: void 0
      } : c = void 0 : d(e, i) ? c = {
          from: e,
          to: i
      } : c = {
          from: i,
          to: e
      };
  else if (i && s)
      if (l(i, e) && l(s, e))
          o ? c = {
              from: i,
              to: s
          } : c = void 0;
      else if (l(i, e))
          c = {
              from: i,
              to: n > 0 ? void 0 : e
          };
      else if (l(s, e))
          c = {
              from: e,
              to: n > 0 ? void 0 : e
          };
      else if (d(e, i))
          c = {
              from: e,
              to: s
          };
      else if (u(e, i))
          c = {
              from: i,
              to: e
          };
      else if (u(e, s))
          c = {
              from: i,
              to: e
          };
      else
          throw new Error("Invalid range");
  if (c != null && c.from && (c != null && c.to)) {
      const f = a.differenceInCalendarDays(c.to, c.from);
      r > 0 && f > r ? c = {
          from: e,
          to: void 0
      } : n > 1 && f < n && (c = {
          from: e,
          to: void 0
      })
  }
  return c
}
function AR(e, t) {
  const {disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: i} = e
    , [s,l] = Fu(o, i ? o : void 0)
    , u = i ? o : s;
  return {
      selected: u,
      select: (f, g, w) => {
          const {min: v, max: x} = e
            , p = f ? _R(f, u, v, x, a, t) : void 0;
          if (p != null && p.from && p.to) {
              let h = p.from;
              for (; t.differenceInCalendarDays(p.to, h) > 0; )
                  if (h = t.addDays(h, 1),
                  r && n && ma(h, n, t)) {
                      p.from = f,
                      p.to = void 0;
                      break
                  }
          }
          return i || l(p),
          i == null || i(p, f, g, w),
          p
      }
      ,
      isSelected: f => u && Yh(u, f, !1, t)
  }
}
function jR(e, t) {
  const {selected: n, required: r, onSelect: o} = e
    , [a,i] = Fu(n, o ? n : void 0)
    , s = o ? n : a
    , {isSameDay: l} = t;
  return {
      selected: s,
      select: (c, f, g) => {
          let w = c;
          return !r && s && s && l(c, s) && (w = void 0),
          o || i(w),
          o == null || o(w, c, f, g),
          w
      }
      ,
      isSelected: c => s ? l(s, c) : !1
  }
}
function IR(e, t) {
  const n = jR(e, t)
    , r = RR(e, t)
    , o = AR(e, t);
  switch (e.mode) {
  case "single":
      return n;
  case "multiple":
      return r;
  case "range":
      return o;
  default:
      return
  }
}
function LR(e) {
  const {components: t, formatters: n, labels: r, dateLib: o, locale: a, classNames: i} = y.useMemo( () => ({
      dateLib: j4(e.dateLib),
      components: v3(e.components),
      formatters: X4(e.formatters),
      labels: {
          ...cR,
          ...e.labels
      },
      locale: {
          ...Uh,
          ...e.locale
      },
      classNames: {
          ...I4(),
          ...e.classNames
      }
  }), [e.classNames, e.components, e.dateLib, e.formatters, e.labels, e.locale])
    , {captionLayout: s, firstWeekContainsDate: l, mode: u, onDayBlur: d, onDayClick: c, onDayFocus: f, onDayKeyDown: g, onDayMouseEnter: w, onDayMouseLeave: v, onNextClick: x, onPrevClick: p, showWeekNumber: h, styles: m, useAdditionalDayOfYearTokens: S, useAdditionalWeekYearTokens: E, weekStartsOn: N} = e
    , O = {
      locale: a,
      weekStartsOn: N,
      firstWeekContainsDate: l,
      useAdditionalWeekYearTokens: E,
      useAdditionalDayOfYearTokens: S
  }
    , k = O
    , {formatCaption: L, formatDay: _, formatMonthDropdown: F, formatWeekNumber: H, formatWeekNumberHeader: J, formatWeekdayName: W, formatYearDropdown: I} = n
    , R = SR(e, o)
    , {days: $, months: P, navStart: T, navEnd: A, previousMonth: B, nextMonth: K, goToMonth: oe} = R
    , ie = TR($, e, o)
    , {isSelected: ge, select: fe, selected: V} = IR(e, o) ?? {}
    , {blur: se, focused: be, isFocusTarget: re, moveFocus: le, setFocused: ue} = DR(e, R, ie, ge ?? ( () => !1), o)
    , {labelDayButton: Qe, labelGridcell: Oe, labelGrid: Pt, labelMonthDropdown: yn, labelNav: Fn, labelWeekday: en, labelWeekNumber: sr, labelWeekNumberHeader: $u, labelYearDropdown: fs} = r
    , zu = y.useMemo( () => q4(a, e.weekStartsOn, e.ISOWeek, e.timeZone, o), [o, a, e.ISOWeek, e.timeZone, e.weekStartsOn])
    , hs = u !== void 0 || c !== void 0
    , Bu = y.useCallback( () => {
      B && (oe(B),
      p == null || p(B))
  }
  , [B, oe, p])
    , Hu = y.useCallback( () => {
      K && (oe(K),
      x == null || x(K))
  }
  , [oe, K, x])
    , Wn = y.useCallback( (Se, rt) => je => {
      je.preventDefault(),
      je.stopPropagation(),
      ue(Se),
      fe == null || fe(Se.date, rt, je),
      c == null || c(Se.date, rt, je)
  }
  , [fe, c, ue])
    , eo = y.useCallback( (Se, rt) => je => {
      ue(Se),
      f == null || f(Se.date, rt, je)
  }
  , [f, ue])
    , ms = y.useCallback( (Se, rt) => je => {
      se(),
      d == null || d(Se.date, rt, je)
  }
  , [se, d])
    , Fa = y.useCallback( (Se, rt) => je => {
      const Ro = {
          ArrowLeft: ["day", e.dir === "rtl" ? "after" : "before"],
          ArrowRight: ["day", e.dir === "rtl" ? "before" : "after"],
          ArrowDown: ["week", "after"],
          ArrowUp: ["week", "before"],
          PageUp: [je.shiftKey ? "year" : "month", "before"],
          PageDown: [je.shiftKey ? "year" : "month", "after"],
          Home: ["startOfWeek", "before"],
          End: ["endOfWeek", "after"]
      };
      if (Ro[je.key]) {
          je.preventDefault(),
          je.stopPropagation();
          const [_o,lr] = Ro[je.key];
          le(_o, lr)
      }
      g == null || g(Se.date, rt, je)
  }
  , [le, g, e.dir])
    , wn = y.useCallback( (Se, rt) => je => {
      w == null || w(Se.date, rt, je)
  }
  , [w])
    , tn = y.useCallback( (Se, rt) => je => {
      v == null || v(Se.date, rt, je)
  }
  , [v])
    , {className: ps, style: To} = y.useMemo( () => ({
      className: [i[ne.Root], e.className].filter(Boolean).join(" "),
      style: {
          ...m == null ? void 0 : m[ne.Root],
          ...e.style
      }
  }), [i, e.className, e.style, m])
    , Uu = y3(e)
    , xn = {
      selected: V,
      select: fe,
      isSelected: ge,
      months: P,
      nextMonth: K,
      previousMonth: B,
      goToMonth: oe,
      getModifiers: ie,
      components: t,
      classNames: i,
      styles: m,
      labels: r,
      formatters: n
  };
  return Y.createElement(Jw.Provider, {
      value: xn
  }, Y.createElement(t.Root, {
      className: ps,
      style: To,
      dir: e.dir,
      id: e.id,
      lang: e.lang,
      nonce: e.nonce,
      title: e.title,
      ...Uu
  }, Y.createElement(t.Months, {
      className: i[ne.Months],
      style: m == null ? void 0 : m[ne.Months]
  }, !e.hideNavigation && Y.createElement(t.Nav, {
      className: i[ne.Nav],
      style: m == null ? void 0 : m[ne.Nav],
      "aria-label": Fn(),
      onPreviousClick: Bu,
      onNextClick: Hu,
      previousMonth: B,
      nextMonth: K
  }), P.map( (Se, rt) => {
      const je = pt => {
          const bn = Number(pt.target.value)
            , Ue = o.setMonth(o.startOfMonth(Se.date), bn);
          oe(Ue)
      }
        , Ro = pt => {
          const bn = o.setYear(o.startOfMonth(Se.date), Number(pt.target.value));
          oe(bn)
      }
        , _o = Q4(Se.date, T, A, n, a, o)
        , lr = Z4(P[0].date, T, A, n, o);
      return Y.createElement(t.Month, {
          className: i[ne.Month],
          style: m == null ? void 0 : m[ne.Month],
          key: rt,
          displayIndex: rt,
          calendarMonth: Se
      }, Y.createElement(t.MonthCaption, {
          className: i[ne.MonthCaption],
          style: m == null ? void 0 : m[ne.MonthCaption],
          calendarMonth: Se,
          displayIndex: rt
      }, s != null && s.startsWith("dropdown") ? Y.createElement(t.DropdownNav, {
          className: i[ne.Dropdowns],
          style: m == null ? void 0 : m[ne.Dropdowns]
      }, s === "dropdown" || s === "dropdown-months" ? Y.createElement(t.MonthsDropdown, {
          className: i[ne.MonthsDropdown],
          "aria-label": yn(),
          classNames: i,
          components: t,
          disabled: !!e.disableNavigation,
          onChange: je,
          options: _o,
          style: m == null ? void 0 : m[ne.Dropdown],
          value: Se.date.getMonth()
      }) : Y.createElement("span", {
          role: "status",
          "aria-live": "polite"
      }, F(Se.date.getMonth())), s === "dropdown" || s === "dropdown-years" ? Y.createElement(t.YearsDropdown, {
          className: i[ne.YearsDropdown],
          "aria-label": fs(k),
          classNames: i,
          components: t,
          disabled: !!e.disableNavigation,
          onChange: Ro,
          options: lr,
          style: m == null ? void 0 : m[ne.Dropdown],
          value: Se.date.getFullYear()
      }) : Y.createElement("span", {
          role: "status",
          "aria-live": "polite"
      }, I(Se.date.getFullYear()))) : Y.createElement(t.CaptionLabel, {
          className: i[ne.CaptionLabel],
          role: "status",
          "aria-live": "polite"
      }, L(Se.date, O, o))), Y.createElement(t.MonthGrid, {
          role: "grid",
          "aria-multiselectable": u === "multiple" || u === "range",
          "aria-label": Pt(Se.date, k, o) || void 0,
          className: i[ne.MonthGrid],
          style: m == null ? void 0 : m[ne.MonthGrid]
      }, !e.hideWeekdays && Y.createElement(t.Weekdays, {
          className: i[ne.Weekdays],
          style: m == null ? void 0 : m[ne.Weekdays]
      }, h && Y.createElement(t.WeekNumberHeader, {
          "aria-label": $u(k),
          className: i[ne.WeekNumberHeader],
          style: m == null ? void 0 : m[ne.WeekNumberHeader],
          scope: "col"
      }, J()), zu.map( (pt, bn) => Y.createElement(t.Weekday, {
          "aria-label": en(pt, k, o),
          className: i[ne.Weekday],
          key: bn,
          style: m == null ? void 0 : m[ne.Weekday],
          scope: "col"
      }, W(pt, O, o)))), Y.createElement(t.Weeks, {
          className: i[ne.Weeks],
          style: m == null ? void 0 : m[ne.Weeks]
      }, Se.weeks.map( (pt, bn) => Y.createElement(t.Week, {
          className: i[ne.Week],
          key: pt.weekNumber,
          style: m == null ? void 0 : m[ne.Week],
          week: pt
      }, h && Y.createElement(t.WeekNumber, {
          week: pt,
          style: m == null ? void 0 : m[ne.WeekNumber],
          "aria-label": sr(pt.weekNumber, {
              locale: a
          }),
          className: i[ne.WeekNumber],
          scope: "row"
      }, H(pt.weekNumber)), pt.days.map(Ue => {
          const {date: Mt} = Ue
            , ke = ie(Ue);
          if (ke[Te.focused] = !ke.hidden && !!(be != null && be.isEqualTo(Ue)),
          ke[at.selected] = !ke.disabled && ((ge == null ? void 0 : ge(Mt)) || ke.selected),
          xx(V)) {
              const {from: ur, to: cr} = V;
              ke[at.range_start] = !!(ur && cr && o.isSameDay(Mt, ur)),
              ke[at.range_end] = !!(ur && cr && o.isSameDay(Mt, cr)),
              ke[at.range_middle] = Yh(V, Mt, !0, o)
          }
          const gs = K4(ke, m, e.modifiersStyles)
            , Yu = HT(ke, i, e.modifiersClassNames)
            , vs = hs ? void 0 : Oe(Mt, ke, k, o);
          return Y.createElement(t.Day, {
              key: `${o.format(Mt, "yyyy-MM-dd")}_${o.format(Ue.displayMonth, "yyyy-MM")}`,
              day: Ue,
              modifiers: ke,
              className: Yu.join(" "),
              style: gs,
              "aria-hidden": ke.hidden || void 0,
              "aria-selected": ke.selected || void 0,
              "aria-label": vs,
              "data-day": o.format(Mt, "yyyy-MM-dd"),
              "data-month": Ue.outside ? o.format(Mt, "yyyy-MM") : void 0,
              "data-selected": ke.selected || void 0,
              "data-disabled": ke.disabled || void 0,
              "data-hidden": ke.hidden || void 0,
              "data-outside": Ue.outside || void 0,
              "data-focused": ke.focused || void 0,
              "data-today": ke.today || void 0
          }, hs ? Y.createElement(t.DayButton, {
              className: i[ne.DayButton],
              style: m == null ? void 0 : m[ne.DayButton],
              type: "button",
              day: Ue,
              modifiers: ke,
              disabled: ke.disabled || void 0,
              tabIndex: re(Ue) ? 0 : -1,
              "aria-label": Qe(Mt, ke, k, o),
              onClick: Wn(Ue, ke),
              onBlur: ms(Ue, ke),
              onFocus: eo(Ue, ke),
              onKeyDown: Fa(Ue, ke),
              onMouseEnter: wn(Ue, ke),
              onMouseLeave: tn(Ue, ke)
          }, _(Mt, O, o)) : _(Ue.date, O, o))
      }
      ))))))
  }
  )), e.footer && Y.createElement(t.Footer, {
      className: i[ne.Footer],
      style: m == null ? void 0 : m[ne.Footer],
      role: "status",
      "aria-live": "polite"
  }, e.footer)))
}
function FR(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e)
}
function WR(e) {
  return /^(0[1-9]|1[0-2])$/.test(e)
}
function $R(e) {
  return /^[0-5][0-9]$/.test(e)
}
function Wu(e, {max: t, min: n=0, loop: r=!1}) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (r ? (o > t && (o = n),
  o < n && (o = t)) : (o > t && (o = t),
  o < n && (o = n)),
  o.toString().padStart(2, "0"))
}
function Sx(e) {
  return FR(e) ? e : Wu(e, {
      max: 23
  })
}
function kx(e) {
  return WR(e) ? e : Wu(e, {
      min: 1,
      max: 12
  })
}
function Zl(e) {
  return $R(e) ? e : Wu(e, {
      max: 59
  })
}
function Vh(e, {min: t, max: n, step: r}) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += r,
  Wu(String(o), {
      min: t,
      max: n,
      loop: !0
  }))
}
function zR(e, t) {
  return Vh(e, {
      min: 0,
      max: 23,
      step: t
  })
}
function BR(e, t) {
  return Vh(e, {
      min: 1,
      max: 12,
      step: t
  })
}
function zg(e, t) {
  return Vh(e, {
      min: 0,
      max: 59,
      step: t
  })
}
function HR(e, t) {
  const n = Zl(t);
  return e.setMinutes(parseInt(n, 10)),
  e
}
function UR(e, t) {
  const n = Zl(t);
  return e.setSeconds(parseInt(n, 10)),
  e
}
function YR(e, t) {
  const n = Sx(t);
  return e.setHours(parseInt(n, 10)),
  e
}
function VR(e, t, n) {
  const r = parseInt(kx(t), 10)
    , o = QR(r, n);
  return e.setHours(o),
  e
}
function vf(e, t, n, r) {
  switch (n) {
  case "minutes":
      return HR(e, t);
  case "seconds":
      return UR(e, t);
  case "hours":
      return YR(e, t);
  case "12hours":
      return r ? VR(e, t, r) : e;
  default:
      return e
  }
}
function GR(e, t) {
  if (!e)
      return "00";
  switch (t) {
  case "minutes":
      return Zl(String(e.getMinutes()));
  case "seconds":
      return Zl(String(e.getSeconds()));
  case "hours":
      return Sx(String(e.getHours()));
  case "12hours":
      return kx(String(Cx(e.getHours())));
  default:
      return "00"
  }
}
function XR(e, t, n) {
  switch (n) {
  case "minutes":
      return zg(e, t);
  case "seconds":
      return zg(e, t);
  case "hours":
      return zR(e, t);
  case "12hours":
      return BR(e, t);
  default:
      return "00"
  }
}
function QR(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e
}
function Cx(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`
}
function KR(e) {
  return Array.from({
      length: 12
  }, (t, n) => ({
      value: n,
      label: hw(new Date(2021,n), "MMMM", {
          locale: e
      })
  }))
}
function qR(e=50) {
  const t = new Date;
  return Array.from({
      length: e * 2 + 1
  }, (n, r) => ({
      value: t.getFullYear() - e + r,
      label: (t.getFullYear() - e + r).toString()
  }))
}
function Ex({className: e, classNames: t, showOutsideDays: n=!0, yearRange: r=50, ...o}) {
  const a = y.useMemo( () => {
      let s = xi;
      const {options: l, localize: u, formatLong: d} = o.locale || {};
      return l && u && d && (s = {
          options: l,
          localize: u,
          formatLong: d
      }),
      KR(s)
  }
  , [o.locale])
    , i = y.useMemo( () => qR(r), [r]);
  return b.jsx(LR, {
      showOutsideDays: n,
      className: _e("p-3", e),
      classNames: {
          months: "flex flex-col sm:flex-row space-y-4  sm:space-y-0 justify-center",
          month: "flex flex-col items-center space-y-4",
          month_caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center ",
          button_previous: _e(sl({
              variant: "outline"
          }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5"),
          button_next: _e(sl({
              variant: "outline"
          }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5"),
          month_grid: "w-full border-collapse space-y-1",
          weekdays: _e("flex", o.showWeekNumber && "justify-end"),
          weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          week: "flex w-full mt-2",
          day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
          day_button: _e(sl({
              variant: "ghost"
          }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-l-md rounded-r-md"),
          range_end: "day-range-end",
          selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-l-md rounded-r-md",
          today: "bg-accent text-accent-foreground",
          outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          disabled: "text-muted-foreground opacity-50",
          range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          hidden: "invisible",
          ...t
      },
      components: {
          Chevron: ({...s}) => s.orientation === "left" ? b.jsx(iT, {
              className: "h-4 w-4"
          }) : b.jsx(sT, {
              className: "h-4 w-4"
          }),
          MonthCaption: ({calendarMonth: s}) => b.jsxs("div", {
              className: "inline-flex gap-2",
              children: [b.jsxs(pf, {
                  defaultValue: s.date.getMonth().toString(),
                  onValueChange: l => {
                      var d;
                      const u = new Date(s.date);
                      u.setMonth(Number.parseInt(l, 10)),
                      (d = o.onMonthChange) == null || d.call(o, u)
                  }
                  ,
                  children: [b.jsx(Kl, {
                      className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground",
                      children: b.jsx(gf, {})
                  }), b.jsx(ql, {
                      children: a.map(l => b.jsx(Gi, {
                          value: l.value.toString(),
                          children: l.label
                      }, l.value))
                  })]
              }), b.jsxs(pf, {
                  defaultValue: s.date.getFullYear().toString(),
                  onValueChange: l => {
                      var d;
                      const u = new Date(s.date);
                      u.setFullYear(Number.parseInt(l, 10)),
                      (d = o.onMonthChange) == null || d.call(o, u)
                  }
                  ,
                  children: [b.jsx(Kl, {
                      className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground",
                      children: b.jsx(gf, {})
                  }), b.jsx(ql, {
                      children: i.map(l => b.jsx(Gi, {
                          value: l.value.toString(),
                          children: l.label
                      }, l.value))
                  })]
              })]
          })
      },
      ...o
  })
}
Ex.displayName = "Calendar";
const Px = y.forwardRef( ({period: e, setPeriod: t, date: n, onDateChange: r, onLeftFocus: o, onRightFocus: a}, i) => {
  const s = u => {
      u.key === "ArrowRight" && (a == null || a()),
      u.key === "ArrowLeft" && (o == null || o())
  }
    , l = u => {
      if (t == null || t(u),
      n) {
          const d = new Date(n)
            , c = Cx(n.getHours());
          r == null || r(vf(d, c.toString(), "12hours", e === "AM" ? "PM" : "AM"))
      }
  }
  ;
  return b.jsx("div", {
      className: "flex h-10 items-center",
      children: b.jsxs(pf, {
          defaultValue: e,
          onValueChange: u => l(u),
          children: [b.jsx(Kl, {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: b.jsx(gf, {})
          }), b.jsxs(ql, {
              children: [b.jsx(Gi, {
                  value: "AM",
                  children: "AM"
              }), b.jsx(Gi, {
                  value: "PM",
                  children: "PM"
              })]
          })]
      })
  })
}
);
Px.displayName = "TimePeriodSelect";
const hl = y.forwardRef( ({className: e, type: t="tel", value: n, id: r, name: o, date: a=new Date(new Date().setHours(0, 0, 0, 0)), onDateChange: i, onChange: s, onKeyDown: l, picker: u, period: d, onLeftFocus: c, onRightFocus: f, ...g}, w) => {
  const [v,x] = y.useState(!1)
    , [p,h] = y.useState("0");
  y.useEffect( () => {
      if (v) {
          const N = setTimeout( () => {
              x(!1)
          }
          , 2e3);
          return () => clearTimeout(N)
      }
  }
  , [v]);
  const m = y.useMemo( () => GR(a, u), [a, u])
    , S = N => u === "12hours" && v && m.slice(1, 2) === "1" && p === "0" ? `0${N}` : v ? m.slice(1, 2) + N : `0${N}`
    , E = N => {
      if (N.key !== "Tab") {
          if (N.preventDefault(),
          N.key === "ArrowRight" && (f == null || f()),
          N.key === "ArrowLeft" && (c == null || c()),
          ["ArrowUp", "ArrowDown"].includes(N.key)) {
              const O = N.key === "ArrowUp" ? 1 : -1
                , k = XR(m, O, u);
              v && x(!1);
              const L = a ? new Date(a) : new Date;
              i == null || i(vf(L, k, u, d))
          }
          if (N.key >= "0" && N.key <= "9") {
              u === "12hours" && h(N.key);
              const O = S(N.key);
              v && (f == null || f()),
              x(L => !L);
              const k = a ? new Date(a) : new Date;
              i == null || i(vf(k, O, u, d))
          }
      }
  }
  ;
  return b.jsx(y1, {
      ref: w,
      id: r || u,
      name: o || u,
      className: _e("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none", e),
      value: n || m,
      onChange: N => {
          N.preventDefault(),
          s == null || s(N)
      }
      ,
      type: t,
      inputMode: "decimal",
      onKeyDown: N => {
          l == null || l(N),
          E(N)
      }
      ,
      ...g
  })
}
);
hl.displayName = "TimePickerInput";
const Mx = y.forwardRef( ({date: e, onChange: t, hourCycle: n=24, granularity: r="second"}, o) => {
  const a = y.useRef(null)
    , i = y.useRef(null)
    , s = y.useRef(null)
    , l = y.useRef(null)
    , [u,d] = y.useState(e && e.getHours() >= 12 ? "PM" : "AM");
  return y.useImperativeHandle(o, () => ({
      minuteRef: a.current,
      hourRef: i.current,
      secondRef: s.current,
      periodRef: l.current
  }), [a, i, s]),
  b.jsxs("div", {
      className: "flex items-center justify-center gap-2",
      children: [b.jsx("label", {
          htmlFor: "datetime-picker-hour-input",
          className: "cursor-pointer",
          children: b.jsx(lT, {
              className: "mr-2 h-4 w-4"
          })
      }), b.jsx(hl, {
          picker: n === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: i,
          period: u,
          onRightFocus: () => {
              var c;
              return (c = a == null ? void 0 : a.current) == null ? void 0 : c.focus()
          }
      }), (r === "minute" || r === "second") && b.jsxs(b.Fragment, {
          children: [":", b.jsx(hl, {
              picker: "minutes",
              date: e,
              onDateChange: t,
              ref: a,
              onLeftFocus: () => {
                  var c;
                  return (c = i == null ? void 0 : i.current) == null ? void 0 : c.focus()
              }
              ,
              onRightFocus: () => {
                  var c;
                  return (c = s == null ? void 0 : s.current) == null ? void 0 : c.focus()
              }
          })]
      }), r === "second" && b.jsxs(b.Fragment, {
          children: [":", b.jsx(hl, {
              picker: "seconds",
              date: e,
              onDateChange: t,
              ref: s,
              onLeftFocus: () => {
                  var c;
                  return (c = a == null ? void 0 : a.current) == null ? void 0 : c.focus()
              }
              ,
              onRightFocus: () => {
                  var c;
                  return (c = l == null ? void 0 : l.current) == null ? void 0 : c.focus()
              }
          })]
      }), n === 12 && b.jsx("div", {
          className: "grid gap-1 text-center",
          children: b.jsx(Px, {
              period: u,
              setPeriod: d,
              date: e,
              onDateChange: c => {
                  t == null || t(c),
                  c && (c == null ? void 0 : c.getHours()) >= 12 ? d("PM") : d("AM")
              }
              ,
              ref: l,
              onLeftFocus: () => {
                  var c;
                  return (c = s == null ? void 0 : s.current) == null ? void 0 : c.focus()
              }
          })
      })]
  })
}
);
Mx.displayName = "TimePicker";
const Nx = y.forwardRef( ({locale: e=xi, value: t, onChange: n, hourCycle: r=24, yearRange: o=50, disabled: a=!1, displayFormat: i, granularity: s="second", placeholder: l="Pick a date", className: u, ...d}, c) => {
  const [f,g] = y.useState(t ?? new Date)
    , w = y.useRef(null)
    , v = E => {
      if (!E)
          return;
      if (!t) {
          n == null || n(E),
          g(E);
          return
      }
      const O = (E.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24)
        , k = qO(t, {
          days: Math.ceil(O)
      });
      n == null || n(k),
      g(k)
  }
  ;
  y.useImperativeHandle(c, () => ({
      ...w.current,
      value: t
  }), [t]);
  const x = {
      hour24: (i == null ? void 0 : i.hour24) ?? `PPP HH:mm${!s || s === "second" ? ":ss" : ""}`,
      hour12: (i == null ? void 0 : i.hour12) ?? `PP hh:mm${!s || s === "second" ? ":ss" : ""} b`
  };
  let p = xi;
  const {options: h, localize: m, formatLong: S} = e;
  return h && m && S && (p = {
      ...xi,
      options: h,
      localize: m,
      formatLong: S
  }),
  b.jsxs(GO, {
      children: [b.jsx(XO, {
          asChild: !0,
          disabled: a,
          children: b.jsxs(cn, {
              variant: "outline",
              className: _e("w-full justify-start text-left font-normal", !t && "text-muted-foreground", u),
              ref: w,
              children: [b.jsx(aT, {
                  className: "mr-2 h-4 w-4"
              }), t ? hw(t, r === 24 ? x.hour24 : x.hour12, {
                  locale: p
              }) : b.jsx("span", {
                  children: l
              })]
          })
      }), b.jsxs(lw, {
          className: "w-auto p-0",
          children: [b.jsx(Ex, {
              mode: "single",
              selected: t,
              month: f,
              onSelect: E => v(E),
              onMonthChange: v,
              yearRange: o,
              locale: e,
              ...d
          }), s !== "day" && b.jsx("div", {
              className: "border-t border-border p-3",
              children: b.jsx(Mx, {
                  onChange: n,
                  date: t,
                  hourCycle: r,
                  granularity: s
              })
          })]
      })]
  })
}
);
Nx.displayName = "DateTimePicker";
const ZR = {
  lessThanXSeconds: {
      one: "1秒未満",
      other: "{{count}}秒未満",
      oneWithSuffix: "約1秒",
      otherWithSuffix: "約{{count}}秒"
  },
  xSeconds: {
      one: "1秒",
      other: "{{count}}秒"
  },
  halfAMinute: "30秒",
  lessThanXMinutes: {
      one: "1分未満",
      other: "{{count}}分未満",
      oneWithSuffix: "約1分",
      otherWithSuffix: "約{{count}}分"
  },
  xMinutes: {
      one: "1分",
      other: "{{count}}分"
  },
  aboutXHours: {
      one: "約1時間",
      other: "約{{count}}時間"
  },
  xHours: {
      one: "1時間",
      other: "{{count}}時間"
  },
  xDays: {
      one: "1日",
      other: "{{count}}日"
  },
  aboutXWeeks: {
      one: "約1週間",
      other: "約{{count}}週間"
  },
  xWeeks: {
      one: "1週間",
      other: "{{count}}週間"
  },
  aboutXMonths: {
      one: "約1か月",
      other: "約{{count}}か月"
  },
  xMonths: {
      one: "1か月",
      other: "{{count}}か月"
  },
  aboutXYears: {
      one: "約1年",
      other: "約{{count}}年"
  },
  xYears: {
      one: "1年",
      other: "{{count}}年"
  },
  overXYears: {
      one: "1年以上",
      other: "{{count}}年以上"
  },
  almostXYears: {
      one: "1年近く",
      other: "{{count}}年近く"
  }
}
, JR = (e, t, n) => {
  n = n || {};
  let r;
  const o = ZR[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)),
  n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r
}
, e_ = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}
, t_ = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}
, n_ = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}
, r_ = {
  date: ha({
      formats: e_,
      defaultWidth: "full"
  }),
  time: ha({
      formats: t_,
      defaultWidth: "full"
  }),
  dateTime: ha({
      formats: n_,
      defaultWidth: "full"
  })
}
, o_ = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}
, a_ = (e, t, n, r) => o_[e]
, i_ = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}
, s_ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}
, l_ = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  wide: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
}
, u_ = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}
, c_ = {
  narrow: {
      am: "午前",
      pm: "午後",
      midnight: "深夜",
      noon: "正午",
      morning: "朝",
      afternoon: "午後",
      evening: "夜",
      night: "深夜"
  },
  abbreviated: {
      am: "午前",
      pm: "午後",
      midnight: "深夜",
      noon: "正午",
      morning: "朝",
      afternoon: "午後",
      evening: "夜",
      night: "深夜"
  },
  wide: {
      am: "午前",
      pm: "午後",
      midnight: "深夜",
      noon: "正午",
      morning: "朝",
      afternoon: "午後",
      evening: "夜",
      night: "深夜"
  }
}
, d_ = {
  narrow: {
      am: "午前",
      pm: "午後",
      midnight: "深夜",
      noon: "正午",
      morning: "朝",
      afternoon: "午後",
      evening: "夜",
      night: "深夜"
  },
  abbreviated: {
      am: "午前",
      pm: "午後",
      midnight: "深夜",
      noon: "正午",
      morning: "朝",
      afternoon: "午後",
      evening: "夜",
      night: "深夜"
  },
  wide: {
      am: "午前",
      pm: "午後",
      midnight: "深夜",
      noon: "正午",
      morning: "朝",
      afternoon: "午後",
      evening: "夜",
      night: "深夜"
  }
}
, f_ = (e, t) => {
  const n = Number(e);
  switch (String(t == null ? void 0 : t.unit)) {
  case "year":
      return `${n}年`;
  case "quarter":
      return `第${n}四半期`;
  case "month":
      return `${n}月`;
  case "week":
      return `第${n}週`;
  case "date":
      return `${n}日`;
  case "hour":
      return `${n}時`;
  case "minute":
      return `${n}分`;
  case "second":
      return `${n}秒`;
  default:
      return `${n}`
  }
}
, h_ = {
  ordinalNumber: f_,
  era: Mn({
      values: i_,
      defaultWidth: "wide"
  }),
  quarter: Mn({
      values: s_,
      defaultWidth: "wide",
      argumentCallback: e => Number(e) - 1
  }),
  month: Mn({
      values: l_,
      defaultWidth: "wide"
  }),
  day: Mn({
      values: u_,
      defaultWidth: "wide"
  }),
  dayPeriod: Mn({
      values: c_,
      defaultWidth: "wide",
      formattingValues: d_,
      defaultFormattingWidth: "wide"
  })
}
, m_ = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i
, p_ = /\d+/i
, g_ = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}
, v_ = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}
, y_ = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}
, w_ = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}
, x_ = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}
, b_ = {
  any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
}
, S_ = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}
, k_ = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}
, C_ = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}
, E_ = {
  any: {
      am: /^(A|午前)/i,
      pm: /^(P|午後)/i,
      midnight: /^深夜|真夜中/i,
      noon: /^正午/i,
      morning: /^朝/i,
      afternoon: /^午後/i,
      evening: /^夜/i,
      night: /^深夜/i
  }
}
, P_ = {
  ordinalNumber: ax({
      matchPattern: m_,
      parsePattern: p_,
      valueCallback: function(e) {
          return parseInt(e, 10)
      }
  }),
  era: Nn({
      matchPatterns: g_,
      defaultMatchWidth: "wide",
      parsePatterns: v_,
      defaultParseWidth: "any"
  }),
  quarter: Nn({
      matchPatterns: y_,
      defaultMatchWidth: "wide",
      parsePatterns: w_,
      defaultParseWidth: "any",
      valueCallback: e => e + 1
  }),
  month: Nn({
      matchPatterns: x_,
      defaultMatchWidth: "wide",
      parsePatterns: b_,
      defaultParseWidth: "any"
  }),
  day: Nn({
      matchPatterns: S_,
      defaultMatchWidth: "wide",
      parsePatterns: k_,
      defaultParseWidth: "any"
  }),
  dayPeriod: Nn({
      matchPatterns: C_,
      defaultMatchWidth: "any",
      parsePatterns: E_,
      defaultParseWidth: "any"
  })
}
, M_ = {
  code: "ja",
  formatDistance: JR,
  formatLong: r_,
  formatRelative: a_,
  localize: h_,
  match: P_,
  options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
  }
};
var Gh = "Dialog"
, [Ox,K_] = wu(Gh)
, [N_,vn] = Ox(Gh)
, Dx = e => {
  const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i=!0} = e
    , s = y.useRef(null)
    , l = y.useRef(null)
    , [u=!1,d] = zi({
      prop: r,
      defaultProp: o,
      onChange: a
  });
  return b.jsx(N_, {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: vo(),
      titleId: vo(),
      descriptionId: vo(),
      open: u,
      onOpenChange: d,
      onOpenToggle: y.useCallback( () => d(c => !c), [d]),
      modal: i,
      children: n
  })
}
;
Dx.displayName = Gh;
var Tx = "DialogTrigger"
, O_ = y.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , o = vn(Tx, n)
    , a = He(t, o.triggerRef);
  return b.jsx(Ne.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Kh(o.open),
      ...r,
      ref: a,
      onClick: we(e.onClick, o.onOpenToggle)
  })
}
);
O_.displayName = Tx;
var Xh = "DialogPortal"
, [D_,Rx] = Ox(Xh, {
  forceMount: void 0
})
, _x = e => {
  const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
    , a = vn(Xh, t);
  return b.jsx(D_, {
      scope: t,
      forceMount: n,
      children: y.Children.map(r, i => b.jsx(Do, {
          present: n || a.open,
          children: b.jsx(Du, {
              asChild: !0,
              container: o,
              children: i
          })
      }))
  })
}
;
_x.displayName = Xh;
var Jl = "DialogOverlay"
, Ax = y.forwardRef( (e, t) => {
  const n = Rx(Jl, e.__scopeDialog)
    , {forceMount: r=n.forceMount, ...o} = e
    , a = vn(Jl, e.__scopeDialog);
  return a.modal ? b.jsx(Do, {
      present: r || a.open,
      children: b.jsx(T_, {
          ...o,
          ref: t
      })
  }) : null
}
);
Ax.displayName = Jl;
var T_ = y.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , o = vn(Jl, n);
  return b.jsx(Ru, {
      as: Wr,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: b.jsx(Ne.div, {
          "data-state": Kh(o.open),
          ...r,
          ref: t,
          style: {
              pointerEvents: "auto",
              ...r.style
          }
      })
  })
}
)
, Mo = "DialogContent"
, jx = y.forwardRef( (e, t) => {
  const n = Rx(Mo, e.__scopeDialog)
    , {forceMount: r=n.forceMount, ...o} = e
    , a = vn(Mo, e.__scopeDialog);
  return b.jsx(Do, {
      present: r || a.open,
      children: a.modal ? b.jsx(R_, {
          ...o,
          ref: t
      }) : b.jsx(__, {
          ...o,
          ref: t
      })
  })
}
);
jx.displayName = Mo;
var R_ = y.forwardRef( (e, t) => {
  const n = vn(Mo, e.__scopeDialog)
    , r = y.useRef(null)
    , o = He(t, n.contentRef, r);
  return y.useEffect( () => {
      const a = r.current;
      if (a)
          return $h(a)
  }
  , []),
  b.jsx(Ix, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: we(e.onCloseAutoFocus, a => {
          var i;
          a.preventDefault(),
          (i = n.triggerRef.current) == null || i.focus()
      }
      ),
      onPointerDownOutside: we(e.onPointerDownOutside, a => {
          const i = a.detail.originalEvent
            , s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault()
      }
      ),
      onFocusOutside: we(e.onFocusOutside, a => a.preventDefault())
  })
}
)
, __ = y.forwardRef( (e, t) => {
  const n = vn(Mo, e.__scopeDialog)
    , r = y.useRef(!1)
    , o = y.useRef(!1);
  return b.jsx(Ix, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: a => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a),
          a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(),
          a.preventDefault()),
          r.current = !1,
          o.current = !1
      }
      ,
      onInteractOutside: a => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a),
          a.defaultPrevented || (r.current = !0,
          a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(),
          a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault()
      }
  })
}
)
, Ix = y.forwardRef( (e, t) => {
  const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i} = e
    , s = vn(Mo, n)
    , l = y.useRef(null)
    , u = He(t, l);
  return Dh(),
  b.jsxs(b.Fragment, {
      children: [b.jsx(Eu, {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: b.jsx(Cu, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Kh(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
          })
      }), b.jsxs(b.Fragment, {
          children: [b.jsx(A_, {
              titleId: s.titleId
          }), b.jsx(I_, {
              contentRef: l,
              descriptionId: s.descriptionId
          })]
      })]
  })
}
)
, Qh = "DialogTitle"
, Lx = y.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , o = vn(Qh, n);
  return b.jsx(Ne.h2, {
      id: o.titleId,
      ...r,
      ref: t
  })
}
);
Lx.displayName = Qh;
var Fx = "DialogDescription"
, Wx = y.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , o = vn(Fx, n);
  return b.jsx(Ne.p, {
      id: o.descriptionId,
      ...r,
      ref: t
  })
}
);
Wx.displayName = Fx;
var $x = "DialogClose"
, zx = y.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , o = vn($x, n);
  return b.jsx(Ne.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: we(e.onClick, () => o.onOpenChange(!1))
  })
}
);
zx.displayName = $x;
function Kh(e) {
  return e ? "open" : "closed"
}
var Bx = "DialogTitleWarning"
, [q_,Hx] = GC(Bx, {
  contentName: Mo,
  titleName: Qh,
  docsSlug: "dialog"
})
, A_ = ({titleId: e}) => {
  const t = Hx(Bx)
    , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return y.useEffect( () => {
      e && (document.getElementById(e) || console.error(n))
  }
  , [n, e]),
  null
}
, j_ = "DialogDescriptionWarning"
, I_ = ({contentRef: e, descriptionId: t}) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Hx(j_).contentName}}.`;
  return y.useEffect( () => {
      var a;
      const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
      t && o && (document.getElementById(t) || console.warn(r))
  }
  , [r, e, t]),
  null
}
, L_ = Dx
, F_ = _x
, Ux = Ax
, Yx = jx
, Vx = Lx
, Gx = Wx
, Xx = zx;
const W_ = L_
, $_ = F_
, z_ = Xx
, Qx = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Ux, {
  ref: n,
  className: _e("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
  ...t
}));
Qx.displayName = Ux.displayName;
const Kx = y.forwardRef( ({className: e, children: t, ...n}, r) => b.jsxs($_, {
  children: [b.jsx(Qx, {}), b.jsxs(Yx, {
      ref: r,
      className: _e("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950", e),
      ...n,
      children: [t, b.jsxs(Xx, {
          className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",
          children: [b.jsx(mE, {
              className: "h-4 w-4"
          }), b.jsx("span", {
              className: "sr-only",
              children: "Close"
          })]
      })]
  })]
}));
Kx.displayName = Yx.displayName;
const qx = ({className: e, ...t}) => b.jsx("div", {
  className: _e("flex flex-col space-y-1.5 text-center sm:text-left", e),
  ...t
});
qx.displayName = "DialogHeader";
const Zx = ({className: e, ...t}) => b.jsx("div", {
  className: _e("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
  ...t
});
Zx.displayName = "DialogFooter";
const Jx = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Vx, {
  ref: n,
  className: _e("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
Jx.displayName = Vx.displayName;
const eb = y.forwardRef( ({className: e, ...t}, n) => b.jsx(Gx, {
  ref: n,
  className: _e("text-sm text-slate-500 dark:text-slate-400", e),
  ...t
}));
eb.displayName = Gx.displayName;
const B_ = e => {
  const {addTodo: t, deleteTodo: n, updateTodo: r, isOpen: o, setIsOpen: a} = e
    , [i,s] = y.useState("")
    , [l,u] = y.useState(null)
    , [d,c] = y.useState(3)
    , [f,g] = y.useState(void 0);
  y.useEffect( () => {
      s(e.initValue.name),
      c(e.initValue.priority),
      g(e.initValue.deadline)
  }
  , [e.initValue]),
  y.useEffect( () => {
      i.length <= 2 ? u("（3文字以上を入力してください）") : u(null)
  }
  , [i]);
  const w = m => {
      m.preventDefault(),
      e.initValue.id ? r({
          id: e.initValue.id,
          name: i,
          isDone: e.initValue.isDone,
          priority: d,
          deadline: f
      }) : t({
          id: un(),
          name: i,
          isDone: !1,
          priority: d,
          deadline: f
      }),
      s(""),
      c(3),
      g(void 0),
      a(!1)
  }
    , v = m => {
      m.preventDefault(),
      a(!1)
  }
    , x = m => {
      m.preventDefault(),
      e.initValue.id && (n(e.initValue.id),
      s(""),
      c(3),
      g(void 0),
      a(!1))
  }
    , p = m => {
      s(m.target.value)
  }
    , h = m => {
      c(Number(m.target.value))
  }
  ;
  return b.jsx("div", {
      children: b.jsx(W_, {
          open: o,
          onOpenChange: a,
          children: b.jsxs(Kx, {
              children: [b.jsxs(qx, {
                  children: [b.jsx(Jx, {
                      children: e.initValue.id ? "Todoの編集" : "Todoの新規作成"
                  }), b.jsx(eb, {})]
              }), b.jsxs("form", {
                  children: [b.jsxs("div", {
                      className: "space-y-5 mb-10",
                      children: [b.jsxs("div", {
                          className: "space-y-2",
                          children: [b.jsxs("div", {
                              children: [b.jsx("label", {
                                  htmlFor: "todoName",
                                  className: "font-bold mr-0.5",
                                  children: "タイトル"
                              }), b.jsx("span", {
                                  className: "text-red-500 text-sm",
                                  children: l
                              })]
                          }), b.jsx("input", {
                              id: "todoName",
                              type: "text",
                              value: i,
                              onChange: p,
                              className: "border border-gray-400 rounded-md px-2 py-0.5 w-full"
                          })]
                      }), b.jsxs("div", {
                          className: "space-y-2",
                          children: [b.jsx("div", {
                              className: "font-bold",
                              children: "優先度"
                          }), b.jsx("div", {
                              className: "flex justify-items-center space-x-6",
                              children: [1, 2, 3].map(m => b.jsx("label", {
                                  children: b.jsxs("div", {
                                      className: "flex items-baseline space-x-2",
                                      children: [b.jsx("div", {
                                          children: b.jsx("input", {
                                              id: `priority-${m}`,
                                              name: "priorityGroup",
                                              type: "radio",
                                              value: m,
                                              checked: d === m,
                                              onChange: h
                                          })
                                      }), b.jsx(v1, {
                                          num: 4 - m
                                      })]
                                  })
                              }, m))
                          })]
                      }), b.jsxs("div", {
                          className: "space-y-3",
                          children: [b.jsxs("div", {
                              className: "flex items-center",
                              children: [b.jsx("span", {
                                  className: "font-bold",
                                  children: "期限"
                              }), b.jsx(cn, {
                                  type: "button",
                                  className: "ml-2 text-sm h-auto py-0",
                                  variant: "outline",
                                  onClick: () => g(void 0),
                                  children: "リセット"
                              })]
                          }), b.jsx("div", {
                              className: "w-full",
                              children: b.jsx(Nx, {
                                  hourCycle: 24,
                                  value: f,
                                  onChange: g,
                                  locale: M_,
                                  placeholder: "期限の日時を設定"
                              })
                          })]
                      })]
                  }), b.jsx(Zx, {
                      children: b.jsxs("div", {
                          className: "flex flex-row justify-end gap-3",
                          children: [b.jsx("div", {
                              className: ka(!!l && "cursor-not-allowed"),
                              children: b.jsx(cn, {
                                  type: "submit",
                                  onClick: w,
                                  disabled: !!l,
                                  children: "OK"
                              })
                          }), e.initValue.id && b.jsx(cn, {
                              variant: "secondary",
                              onClick: x,
                              children: "削除"
                          }), b.jsx(z_, {
                              asChild: !0,
                              children: b.jsx(cn, {
                                  type: "button",
                                  variant: "secondary",
                                  onClick: v,
                                  children: "キャンセル"
                              })
                          })]
                      })
                  })]
              })]
          })
      })
  })
}
, Bg = {
  id: void 0,
  name: "",
  isDone: !1,
  priority: 3,
  deadline: void 0
}
, H_ = [{
  id: un(),
  name: "Reactの勉強 (予習)",
  isDone: !1,
  priority: 3,
  deadline: void 0
}, {
  id: un(),
  name: "TypeScriptの勉強 (復習)",
  isDone: !0,
  priority: 2,
  deadline: void 0
}, {
  id: un(),
  name: "基礎物理学3の宿題",
  isDone: !1,
  priority: 1,
  deadline: new Date(2024,10,11)
}, {
  id: un(),
  name: "解析2の宿題",
  isDone: !1,
  priority: 2,
  deadline: new Date(2024,10,16,17)
}, {
  id: un(),
  name: "夏休みの宿題",
  isDone: !1,
  priority: 1,
  deadline: new Date(2024,7,31)
}];
function U_() {
  const e = "myTodoApp"
    , [t,n] = y.useState([])
    , [r,o] = y.useState(Bg)
    , [a,i] = y.useState(!1);
  y.useEffect( () => {
      const x = localStorage.getItem(e);
      if (x && x !== "[]") {
          const h = JSON.parse(x).map(m => ({
              ...m,
              deadline: m.deadline ? new Date(m.deadline) : void 0
          }));
          n(h)
      } else
          n(H_)
  }
  , []);
  const s = x => {
      localStorage.setItem(e, JSON.stringify(x))
  }
    , l = x => {
      const p = t.map(h => h.id === x.id ? x : h);
      n(p),
      s(p)
  }
    , u = x => {
      const p = [...t, x];
      n(p),
      s(p)
  }
    , d = x => {
      const p = t.filter(h => h.id !== x);
      n(p),
      s(p)
  }
    , c = () => {
      const x = t.filter(p => !p.isDone);
      n(x),
      s(x)
  }
    , f = () => {
      o(Bg),
      i(!0)
  }
    , g = x => {
      o(x),
      i(!0)
  }
    , w = () => {
      const x = [...t].sort( (p, h) => p.deadline && h.deadline ? p.deadline.getTime() - h.deadline.getTime() : p.deadline ? -1 : h.deadline ? 1 : 0);
      n(x)
  }
    , v = () => {
      const x = [...t].sort( (p, h) => p.priority - h.priority);
      n(x)
  }
  ;
  return b.jsxs("main", {
      className: "mx-auto mt-14 w-full max-w-xl px-5 md:px-0",
      children: [b.jsxs("div", {
          className: "mb-6 space-y-2 flex justify-between ",
          children: [b.jsxs("div", {
              children: [b.jsx("h1", {
                  className: "text-2xl font-bold",
                  children: "TodoApp Demo"
              }), b.jsx("div", {
                  className: "text-sm text-gray-500 ml-2",
                  children: "最高水準のサンプル（90点）"
              })]
          }), b.jsx("div", {
              children: b.jsxs(cn, {
                  onClick: f,
                  className: "h-auto py-1.5",
                  children: [b.jsx(Xn, {
                      icon: xM,
                      className: "mr-2"
                  }), b.jsx("div", {
                      children: "Todoの追加"
                  })]
              })
          })]
      }), b.jsxs("div", {
          className: "mb-6 flex justify-items-center space-x-2",
          children: [b.jsxs(cn, {
              onClick: w,
              variant: "secondary",
              className: "h-auto py-1.5",
              children: [b.jsx(Xn, {
                  icon: og,
                  className: "mr-2"
              }), b.jsx("div", {
                  children: "期日でソート"
              })]
          }), b.jsxs(cn, {
              onClick: v,
              variant: "secondary",
              className: "h-auto py-1.5",
              children: [b.jsx(Xn, {
                  icon: og,
                  className: "mr-2"
              }), b.jsx("div", {
                  children: "優先度でソート"
              })]
          })]
      }), b.jsxs("div", {
          className: "space-y-4",
          children: [b.jsx("div", {
              className: "space-y-2",
              children: t.map(x => b.jsx(CM, {
                  todo: x,
                  editTodo: g,
                  updateTodo: l
              }, x.id))
          }), b.jsx("div", {
              className: "space-x-2",
              children: b.jsxs(cn, {
                  onClick: c,
                  className: "h-auto py-1.5",
                  children: [b.jsx(Xn, {
                      icon: bM,
                      className: "mr-2"
                  }), b.jsx("div", {
                      children: "完了済みのTodoを削除"
                  })]
              })
          }), b.jsx(B_, {
              addTodo: u,
              deleteTodo: d,
              updateTodo: l,
              initValue: r,
              isOpen: a,
              setIsOpen: i
          })]
      })]
  })
}
const Y_ = Ld(b.jsxs(b.Fragment, {
  children: [b.jsx(Id, {
      path: "/",
      element: b.jsx(FC, {})
  }), b.jsx(Id, {
      path: "/2",
      element: b.jsx(U_, {})
  })]
}))
, V_ = Kk(Y_, {
  basename: "/react-todo-app-demo/"
});
n0(document.getElementById("root")).render(b.jsx(y.StrictMode, {
  children: b.jsx(Yk, {
      router: V_
  })
}));
