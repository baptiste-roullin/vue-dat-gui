import { defineComponent as q, mergeModels as rt, computed as D, useModel as nt, createElementBlock as P, openBlock as A, normalizeClass as Z, createElementVNode as _, toDisplayString as ce, onMounted as ui, nextTick as Ln, watch as Ie, getCurrentInstance as ci, unref as yt, getCurrentScope as Is, onScopeDispose as Hs, ref as V, readonly as Ds, shallowRef as Bs, reactive as Ae, createVNode as $e, inject as fi, provide as Ls, normalizeStyle as ne, Fragment as Ve, renderList as _t, createCommentVNode as G, renderSlot as Nn, resolveComponent as J, createBlock as ee, withDirectives as Fe, vShow as Ct, createTextVNode as di, pushScopeId as Pt, popScopeId as jt, withCtx as Pa, resolveDynamicComponent as ja, mergeProps as Ia, Teleport as Ns, withKeys as Ha, withModifiers as Da, vModelSelect as Vs, vModelText as Fs } from "vue";
const zs = { ref: "label" }, Ws = { class: "label-text" }, Gs = { class: "control" }, Ks = ["checked", "disabled"], Us = /* @__PURE__ */ q({
  __name: "DatBoolean",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = D(() => t.disabled), n = nt(e, "modelValue"), a = () => {
      n.value = !n.value;
    };
    return (o, l) => (A(), P("li", {
      class: Z(["control-item boolean", { disabled: r.value }])
    }, [
      _("label", zs, [
        _("span", Ws, ce(o.label), 1),
        _("div", Gs, [
          _("input", {
            type: "checkbox",
            checked: n.value,
            onChange: a,
            disabled: r.value
          }, null, 40, Ks)
        ])
      ], 512)
    ], 2));
  }
}), qs = /* @__PURE__ */ q({
  __name: "DatButton",
  props: {
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, n = D(() => r.disabled), a = t, o = (l) => {
      n.value || a("click", l);
    };
    return (l, i) => (A(), P("li", {
      class: Z(["control-item button", { disabled: n.value }])
    }, [
      _("label", {
        tabindex: "0",
        role: "button",
        class: "w-100",
        ref: "label",
        onClick: o
      }, ce(l.label), 513)
    ], 2));
  }
});
function Ys(e) {
  return Is() ? (Hs(e), !0) : !1;
}
function nr(e) {
  return typeof e == "function" ? e() : yt(e);
}
const pi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Xs = Object.prototype.toString, Js = (e) => Xs.call(e) === "[object Object]", bt = () => {
}, Zs = /* @__PURE__ */ Qs();
function Qs() {
  var e, t;
  return pi && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function hi(e, t) {
  function r(...n) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(a).catch(o);
    });
  }
  return r;
}
const vi = (e) => e();
function el(e, t = {}) {
  let r, n, a = bt;
  const o = (i) => {
    clearTimeout(i), a(), a = bt;
  };
  return (i) => {
    const s = nr(e), c = nr(t.maxWait);
    return r && o(r), s <= 0 || c !== void 0 && c <= 0 ? (n && (o(n), n = null), Promise.resolve(i())) : new Promise((u, f) => {
      a = t.rejectOnCancel ? f : u, c && !n && (n = setTimeout(() => {
        r && o(r), n = null, u(i());
      }, c)), r = setTimeout(() => {
        n && o(n), n = null, u(i());
      }, s);
    });
  };
}
function tl(e = vi) {
  const t = V(!0);
  function r() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const a = (...o) => {
    t.value && e(...o);
  };
  return { isActive: Ds(t), pause: r, resume: n, eventFilter: a };
}
function rl(e) {
  return ci();
}
function Je(e, t = 200, r = {}) {
  return hi(
    el(t, r),
    e
  );
}
function nl(e, t, r = {}) {
  const {
    eventFilter: n = vi,
    ...a
  } = r;
  return Ie(
    e,
    hi(
      n,
      t
    ),
    a
  );
}
function al(e, t, r = {}) {
  const {
    eventFilter: n,
    ...a
  } = r, { eventFilter: o, pause: l, resume: i, isActive: s } = tl(n);
  return { stop: nl(
    e,
    t,
    {
      ...a,
      eventFilter: o
    }
  ), pause: l, resume: i, isActive: s };
}
function at(e, t = !0, r) {
  rl() ? ui(e, r) : t ? e() : Ln(e);
}
function ie(e, t, r) {
  return Ie(
    e,
    (n, a, o) => {
      n && t(n, a, o);
    },
    r
  );
}
function Ut(e) {
  var t;
  const r = nr(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const ar = pi ? window : void 0;
function Xt(...e) {
  let t, r, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, a] = e, t = ar) : [t, r, n, a] = e, !t)
    return bt;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], l = () => {
    o.forEach((u) => u()), o.length = 0;
  }, i = (u, f, p, d) => (u.addEventListener(f, p, d), () => u.removeEventListener(f, p, d)), s = Ie(
    () => [Ut(t), nr(a)],
    ([u, f]) => {
      if (l(), !u)
        return;
      const p = Js(f) ? { ...f } : f;
      o.push(
        ...r.flatMap((d) => n.map((h) => i(u, d, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), l();
  };
  return Ys(c), c;
}
let Ba = !1;
function ol(e, t, r = {}) {
  const { window: n = ar, ignore: a = [], capture: o = !0, detectIframe: l = !1 } = r;
  if (!n)
    return bt;
  Zs && !Ba && (Ba = !0, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", bt)), n.document.documentElement.addEventListener("click", bt));
  let i = !0;
  const s = (p) => a.some((d) => {
    if (typeof d == "string")
      return Array.from(n.document.querySelectorAll(d)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Ut(d);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), u = [
    Xt(n, "click", (p) => {
      const d = Ut(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (i = !s(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: o }),
    Xt(n, "pointerdown", (p) => {
      const d = Ut(e);
      i = !s(p) && !!(d && !p.composedPath().includes(d));
    }, { passive: !0 }),
    l && Xt(n, "blur", (p) => {
      setTimeout(() => {
        var d;
        const h = Ut(e);
        ((d = n.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(h != null && h.contains(n.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((p) => p());
}
const gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yr = "__vueuse_ssr_handlers__", il = /* @__PURE__ */ sl();
function sl() {
  return yr in gr || (gr[yr] = gr[yr] || {}), gr[yr];
}
function ll(e, t) {
  return il[e] || t;
}
function ul(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const cl = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, La = "vueuse-storage";
function fl(e, t, r, n = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: s = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = ar,
    eventFilter: p,
    onError: d = (b) => {
      console.error(b);
    },
    initOnMounted: h
  } = n, g = (u ? Bs : V)(typeof t == "function" ? t() : t);
  if (!r)
    try {
      r = ll("getDefaultStorage", () => {
        var b;
        return (b = ar) == null ? void 0 : b.localStorage;
      })();
    } catch (b) {
      d(b);
    }
  if (!r)
    return g;
  const v = nr(t), y = ul(v), C = (a = n.serializer) != null ? a : cl[y], { pause: O, resume: S } = al(
    g,
    () => E(g.value),
    { flush: o, deep: l, eventFilter: p }
  );
  return f && i && at(() => {
    Xt(f, "storage", H), Xt(f, La, M), h && H();
  }), h || H(), g;
  function E(b) {
    try {
      if (b == null)
        r.removeItem(e);
      else {
        const x = C.write(b), m = r.getItem(e);
        m !== x && (r.setItem(e, x), f && f.dispatchEvent(new CustomEvent(La, {
          detail: {
            key: e,
            oldValue: m,
            newValue: x,
            storageArea: r
          }
        })));
      }
    } catch (x) {
      d(x);
    }
  }
  function k(b) {
    const x = b ? b.newValue : r.getItem(e);
    if (x == null)
      return s && v != null && r.setItem(e, C.write(v)), v;
    if (!b && c) {
      const m = C.read(x);
      return typeof c == "function" ? c(m, v) : y === "object" && !Array.isArray(m) ? { ...v, ...m } : m;
    } else return typeof x != "string" ? x : C.read(x);
  }
  function M(b) {
    H(b.detail);
  }
  function H(b) {
    if (!(b && b.storageArea !== r)) {
      if (b && b.key == null) {
        g.value = v;
        return;
      }
      if (!(b && b.key !== e)) {
        O();
        try {
          (b == null ? void 0 : b.newValue) !== C.write(g.value) && (g.value = k(b));
        } catch (x) {
          d(x);
        } finally {
          b ? Ln(S) : S();
        }
      }
    }
  }
}
function Vn(e, t, r = {}) {
  const { window: n = ar } = r;
  return fl(e, t, n == null ? void 0 : n.localStorage, r);
}
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
var dl = /^\s+/, pl = /\s+$/;
function w(e, t) {
  if (e = e || "", t = t || {}, e instanceof w)
    return e;
  if (!(this instanceof w))
    return new w(e, t);
  var r = hl(e);
  this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r.ok;
}
w.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function() {
    var t = this.toRgb(), r, n, a, o, l, i;
    return r = t.r / 255, n = t.g / 255, a = t.b / 255, r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? l = n / 12.92 : l = Math.pow((n + 0.055) / 1.055, 2.4), a <= 0.03928 ? i = a / 12.92 : i = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * l + 0.0722 * i;
  },
  setAlpha: function(t) {
    return this._a = gi(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = Va(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = Va(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + a + "%)" : "hsva(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Na(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Na(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + a + "%)" : "hsla(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Fa(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return bl(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function(t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(W(this._r, 255) * 100) + "%",
      g: Math.round(W(this._g, 255) * 100) + "%",
      b: Math.round(W(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(W(this._r, 255) * 100) + "%, " + Math.round(W(this._g, 255) * 100) + "%, " + Math.round(W(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(W(this._r, 255) * 100) + "%, " + Math.round(W(this._g, 255) * 100) + "%, " + Math.round(W(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Tl[Fa(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var r = "#" + za(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var o = w(t);
      n = "#" + za(o._r, o._g, o._b, o._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
  },
  toString: function(t) {
    var r = !!t;
    t = t || this._format;
    var n = !1, a = this._a < 1 && this._a >= 0, o = !r && a && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return o ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  },
  clone: function() {
    return w(this.toString());
  },
  _applyModification: function(t, r) {
    var n = t.apply(null, [this].concat([].slice.call(r)));
    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
  },
  lighten: function() {
    return this._applyModification(wl, arguments);
  },
  brighten: function() {
    return this._applyModification(Sl, arguments);
  },
  darken: function() {
    return this._applyModification(xl, arguments);
  },
  desaturate: function() {
    return this._applyModification(ml, arguments);
  },
  saturate: function() {
    return this._applyModification(_l, arguments);
  },
  greyscale: function() {
    return this._applyModification(Cl, arguments);
  },
  spin: function() {
    return this._applyModification(Ol, arguments);
  },
  _applyCombination: function(t, r) {
    return t.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination($l, arguments);
  },
  complement: function() {
    return this._applyCombination(Al, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(El, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(kl, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Wa, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Wa, [4]);
  }
};
w.fromRatio = function(e, t) {
  if (Or(e) == "object") {
    var r = {};
    for (var n in e)
      e.hasOwnProperty(n) && (n === "a" ? r[n] = e[n] : r[n] = qt(e[n]));
    e = r;
  }
  return w(e, t);
};
function hl(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, n = null, a = null, o = null, l = !1, i = !1;
  return typeof e == "string" && (e = jl(e)), Or(e) == "object" && (Me(e.r) && Me(e.g) && Me(e.b) ? (t = vl(e.r, e.g, e.b), l = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Me(e.h) && Me(e.s) && Me(e.v) ? (n = qt(e.s), a = qt(e.v), t = yl(e.h, n, a), l = !0, i = "hsv") : Me(e.h) && Me(e.s) && Me(e.l) && (n = qt(e.s), o = qt(e.l), t = gl(e.h, n, o), l = !0, i = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = gi(r), {
    ok: l,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
function vl(e, t, r) {
  return {
    r: W(e, 255) * 255,
    g: W(t, 255) * 255,
    b: W(r, 255) * 255
  };
}
function Na(e, t, r) {
  e = W(e, 255), t = W(t, 255), r = W(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o, l, i = (n + a) / 2;
  if (n == a)
    o = l = 0;
  else {
    var s = n - a;
    switch (l = i > 0.5 ? s / (2 - n - a) : s / (n + a), n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: l,
    l: i
  };
}
function gl(e, t, r) {
  var n, a, o;
  e = W(e, 360), t = W(t, 100), r = W(r, 100);
  function l(c, u, f) {
    return f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? c + (u - c) * 6 * f : f < 1 / 2 ? u : f < 2 / 3 ? c + (u - c) * (2 / 3 - f) * 6 : c;
  }
  if (t === 0)
    n = a = o = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = l(s, i, e + 1 / 3), a = l(s, i, e), o = l(s, i, e - 1 / 3);
  }
  return {
    r: n * 255,
    g: a * 255,
    b: o * 255
  };
}
function Va(e, t, r) {
  e = W(e, 255), t = W(t, 255), r = W(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o, l, i = n, s = n - a;
  if (l = n === 0 ? 0 : s / n, n == a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: l,
    v: i
  };
}
function yl(e, t, r) {
  e = W(e, 360) * 6, t = W(t, 100), r = W(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), l = r * (1 - a * t), i = r * (1 - (1 - a) * t), s = n % 6, c = [r, l, o, o, i, r][s], u = [i, r, r, l, o, o][s], f = [o, o, i, r, r, l][s];
  return {
    r: c * 255,
    g: u * 255,
    b: f * 255
  };
}
function Fa(e, t, r, n) {
  var a = [Oe(Math.round(e).toString(16)), Oe(Math.round(t).toString(16)), Oe(Math.round(r).toString(16))];
  return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function bl(e, t, r, n, a) {
  var o = [Oe(Math.round(e).toString(16)), Oe(Math.round(t).toString(16)), Oe(Math.round(r).toString(16)), Oe(yi(n))];
  return a && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function za(e, t, r, n) {
  var a = [Oe(yi(n)), Oe(Math.round(e).toString(16)), Oe(Math.round(t).toString(16)), Oe(Math.round(r).toString(16))];
  return a.join("");
}
w.equals = function(e, t) {
  return !e || !t ? !1 : w(e).toRgbString() == w(t).toRgbString();
};
w.random = function() {
  return w.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function ml(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s -= t / 100, r.s = Nr(r.s), w(r);
}
function _l(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s += t / 100, r.s = Nr(r.s), w(r);
}
function Cl(e) {
  return w(e).desaturate(100);
}
function wl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l += t / 100, r.l = Nr(r.l), w(r);
}
function Sl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), w(r);
}
function xl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l -= t / 100, r.l = Nr(r.l), w(r);
}
function Ol(e, t) {
  var r = w(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, w(r);
}
function Al(e) {
  var t = w(e).toHsl();
  return t.h = (t.h + 180) % 360, w(t);
}
function Wa(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var r = w(e).toHsl(), n = [w(e)], a = 360 / t, o = 1; o < t; o++)
    n.push(w({
      h: (r.h + o * a) % 360,
      s: r.s,
      l: r.l
    }));
  return n;
}
function kl(e) {
  var t = w(e).toHsl(), r = t.h;
  return [w(e), w({
    h: (r + 72) % 360,
    s: t.s,
    l: t.l
  }), w({
    h: (r + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function $l(e, t, r) {
  t = t || 6, r = r || 30;
  var n = w(e).toHsl(), a = 360 / r, o = [w(e)];
  for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
    n.h = (n.h + a) % 360, o.push(w(n));
  return o;
}
function El(e, t) {
  t = t || 6;
  for (var r = w(e).toHsv(), n = r.h, a = r.s, o = r.v, l = [], i = 1 / t; t--; )
    l.push(w({
      h: n,
      s: a,
      v: o
    })), o = (o + i) % 1;
  return l;
}
w.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = w(e).toRgb(), a = w(t).toRgb(), o = r / 100, l = {
    r: (a.r - n.r) * o + n.r,
    g: (a.g - n.g) * o + n.g,
    b: (a.b - n.b) * o + n.b,
    a: (a.a - n.a) * o + n.a
  };
  return w(l);
};
w.readability = function(e, t) {
  var r = w(e), n = w(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
w.isReadable = function(e, t, r) {
  var n = w.readability(e, t), a, o;
  switch (o = !1, a = Il(r), a.level + a.size) {
    case "AAsmall":
    case "AAAlarge":
      o = n >= 4.5;
      break;
    case "AAlarge":
      o = n >= 3;
      break;
    case "AAAsmall":
      o = n >= 7;
      break;
  }
  return o;
};
w.mostReadable = function(e, t, r) {
  var n = null, a = 0, o, l, i, s;
  r = r || {}, l = r.includeFallbackColors, i = r.level, s = r.size;
  for (var c = 0; c < t.length; c++)
    o = w.readability(e, t[c]), o > a && (a = o, n = w(t[c]));
  return w.isReadable(e, n, {
    level: i,
    size: s
  }) || !l ? n : (r.includeFallbackColors = !1, w.mostReadable(e, ["#fff", "#000"], r));
};
var Sn = w.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, Tl = w.hexNames = Rl(Sn);
function Rl(e) {
  var t = {};
  for (var r in e)
    e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function gi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function W(e, t) {
  Ml(e) && (e = "100%");
  var r = Pl(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function Nr(e) {
  return Math.min(1, Math.max(0, e));
}
function he(e) {
  return parseInt(e, 16);
}
function Ml(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Pl(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function Oe(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function qt(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function yi(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ga(e) {
  return he(e) / 255;
}
var xe = function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + t + ")|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(r),
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + a),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + a),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + a),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function Me(e) {
  return !!xe.CSS_UNIT.exec(e);
}
function jl(e) {
  e = e.replace(dl, "").replace(pl, "").toLowerCase();
  var t = !1;
  if (Sn[e])
    e = Sn[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var r;
  return (r = xe.rgb.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3]
  } : (r = xe.rgba.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3],
    a: r[4]
  } : (r = xe.hsl.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3]
  } : (r = xe.hsla.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3],
    a: r[4]
  } : (r = xe.hsv.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3]
  } : (r = xe.hsva.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3],
    a: r[4]
  } : (r = xe.hex8.exec(e)) ? {
    r: he(r[1]),
    g: he(r[2]),
    b: he(r[3]),
    a: Ga(r[4]),
    format: t ? "name" : "hex8"
  } : (r = xe.hex6.exec(e)) ? {
    r: he(r[1]),
    g: he(r[2]),
    b: he(r[3]),
    format: t ? "name" : "hex"
  } : (r = xe.hex4.exec(e)) ? {
    r: he(r[1] + "" + r[1]),
    g: he(r[2] + "" + r[2]),
    b: he(r[3] + "" + r[3]),
    a: Ga(r[4] + "" + r[4]),
    format: t ? "name" : "hex8"
  } : (r = xe.hex3.exec(e)) ? {
    r: he(r[1] + "" + r[1]),
    g: he(r[2] + "" + r[2]),
    b: he(r[3] + "" + r[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function Il(e) {
  var t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), {
    level: t,
    size: r
  };
}
var br = {}, Ka;
function Hl() {
  if (Ka) return br;
  Ka = 1;
  var e = e || {};
  e.stringify = /* @__PURE__ */ function() {
    var t = {
      "visit_linear-gradient": function(r) {
        return t.visit_gradient(r);
      },
      "visit_repeating-linear-gradient": function(r) {
        return t.visit_gradient(r);
      },
      "visit_radial-gradient": function(r) {
        return t.visit_gradient(r);
      },
      "visit_repeating-radial-gradient": function(r) {
        return t.visit_gradient(r);
      },
      visit_gradient: function(r) {
        var n = t.visit(r.orientation);
        return n && (n += ", "), r.type + "(" + n + t.visit(r.colorStops) + ")";
      },
      visit_shape: function(r) {
        var n = r.value, a = t.visit(r.at), o = t.visit(r.style);
        return o && (n += " " + o), a && (n += " at " + a), n;
      },
      "visit_default-radial": function(r) {
        var n = "", a = t.visit(r.at);
        return a && (n += a), n;
      },
      "visit_extent-keyword": function(r) {
        var n = r.value, a = t.visit(r.at);
        return a && (n += " at " + a), n;
      },
      "visit_position-keyword": function(r) {
        return r.value;
      },
      visit_position: function(r) {
        return t.visit(r.value.x) + " " + t.visit(r.value.y);
      },
      "visit_%": function(r) {
        return r.value + "%";
      },
      visit_em: function(r) {
        return r.value + "em";
      },
      visit_px: function(r) {
        return r.value + "px";
      },
      visit_literal: function(r) {
        return t.visit_color(r.value, r);
      },
      visit_hex: function(r) {
        return t.visit_color("#" + r.value, r);
      },
      visit_rgb: function(r) {
        return t.visit_color("rgb(" + r.value.join(", ") + ")", r);
      },
      visit_rgba: function(r) {
        return t.visit_color("rgba(" + r.value.join(", ") + ")", r);
      },
      visit_color: function(r, n) {
        var a = r, o = t.visit(n.length);
        return o && (a += " " + o), a;
      },
      visit_angular: function(r) {
        return r.value + "deg";
      },
      visit_directional: function(r) {
        return "to " + r.value;
      },
      visit_array: function(r) {
        var n = "", a = r.length;
        return r.forEach(function(o, l) {
          n += t.visit(o), l < a - 1 && (n += ", ");
        }), n;
      },
      visit: function(r) {
        if (!r)
          return "";
        var n = "";
        if (r instanceof Array)
          return t.visit_array(r, n);
        if (r.type) {
          var a = t["visit_" + r.type];
          if (a)
            return a(r);
          throw Error("Missing visitor visit_" + r.type);
        } else
          throw Error("Invalid node.");
      }
    };
    return function(r) {
      return t.visit(r);
    };
  }();
  var e = e || {};
  return e.parse = /* @__PURE__ */ function() {
    var t = {
      linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
      repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
      radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
      repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
      sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
      extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
      positionKeywords: /^(left|center|right|top|bottom)/i,
      pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
      percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
      emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
      angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
      startCall: /^\(/,
      endCall: /^\)/,
      comma: /^,/,
      hexColor: /^\#([0-9a-fA-F]+)/,
      literalColor: /^([a-zA-Z]+)/,
      rgbColor: /^rgb/i,
      rgbaColor: /^rgba/i,
      number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
    }, r = "";
    function n($) {
      var I = new Error(r + ": " + $);
      throw I.source = r, I;
    }
    function a() {
      var $ = o();
      return r.length > 0 && n("Invalid input not EOF"), $;
    }
    function o() {
      return S(l);
    }
    function l() {
      return i(
        "linear-gradient",
        t.linearGradient,
        c
      ) || i(
        "repeating-linear-gradient",
        t.repeatingLinearGradient,
        c
      ) || i(
        "radial-gradient",
        t.radialGradient,
        p
      ) || i(
        "repeating-radial-gradient",
        t.repeatingRadialGradient,
        p
      );
    }
    function i($, I, B) {
      return s(I, function(fe) {
        var ke = B();
        return ke && (z(t.comma) || n("Missing comma before color stops")), {
          type: $,
          orientation: ke,
          colorStops: S(E)
        };
      });
    }
    function s($, I) {
      var B = z($);
      if (B) {
        z(t.startCall) || n("Missing (");
        var fe = I(B);
        return z(t.endCall) || n("Missing )"), fe;
      }
    }
    function c() {
      return u() || f();
    }
    function u() {
      return K("directional", t.sideOrCorner, 1);
    }
    function f() {
      return K("angular", t.angleValue, 1);
    }
    function p() {
      var $, I = d(), B;
      return I && ($ = [], $.push(I), B = r, z(t.comma) && (I = d(), I ? $.push(I) : r = B)), $;
    }
    function d() {
      var $ = h() || g();
      if ($)
        $.at = y();
      else {
        var I = v();
        if (I) {
          $ = I;
          var B = y();
          B && ($.at = B);
        } else {
          var fe = C();
          fe && ($ = {
            type: "default-radial",
            at: fe
          });
        }
      }
      return $;
    }
    function h() {
      var $ = K("shape", /^(circle)/i, 0);
      return $ && ($.style = L() || v()), $;
    }
    function g() {
      var $ = K("shape", /^(ellipse)/i, 0);
      return $ && ($.style = j() || v()), $;
    }
    function v() {
      return K("extent-keyword", t.extentKeywords, 1);
    }
    function y() {
      if (K("position", /^at/, 0)) {
        var $ = C();
        return $ || n("Missing positioning value"), $;
      }
    }
    function C() {
      var $ = O();
      if ($.x || $.y)
        return {
          type: "position",
          value: $
        };
    }
    function O() {
      return {
        x: j(),
        y: j()
      };
    }
    function S($) {
      var I = $(), B = [];
      if (I)
        for (B.push(I); z(t.comma); )
          I = $(), I ? B.push(I) : n("One extra comma");
      return B;
    }
    function E() {
      var $ = k();
      return $ || n("Expected color definition"), $.length = j(), $;
    }
    function k() {
      return H() || x() || b() || M();
    }
    function M() {
      return K("literal", t.literalColor, 0);
    }
    function H() {
      return K("hex", t.hexColor, 1);
    }
    function b() {
      return s(t.rgbColor, function() {
        return {
          type: "rgb",
          value: S(m)
        };
      });
    }
    function x() {
      return s(t.rgbaColor, function() {
        return {
          type: "rgba",
          value: S(m)
        };
      });
    }
    function m() {
      return z(t.number)[1];
    }
    function j() {
      return K("%", t.percentageValue, 1) || T() || L();
    }
    function T() {
      return K("position-keyword", t.positionKeywords, 1);
    }
    function L() {
      return K("px", t.pixelValue, 1) || K("em", t.emValue, 1);
    }
    function K($, I, B) {
      var fe = z(I);
      if (fe)
        return {
          type: $,
          value: fe[B]
        };
    }
    function z($) {
      var I, B;
      return B = /^[\n\r\t\s]+/.exec(r), B && ae(B[0].length), I = $.exec(r), I && ae(I[0].length), I;
    }
    function ae($) {
      r = r.substr($);
    }
    return function($) {
      return r = $.toString(), a();
    };
  }(), br.parse = e.parse, br.stringify = e.stringify, br;
}
var Ua = Hl(), de = "top", Ce = "bottom", we = "right", pe = "left", Fn = "auto", ur = [de, Ce, we, pe], wt = "start", or = "end", Dl = "clippingParents", bi = "viewport", Ft = "popper", Bl = "reference", qa = /* @__PURE__ */ ur.reduce(function(e, t) {
  return e.concat([t + "-" + wt, t + "-" + or]);
}, []), mi = /* @__PURE__ */ [].concat(ur, [Fn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wt, t + "-" + or]);
}, []), Ll = "beforeRead", Nl = "read", Vl = "afterRead", Fl = "beforeMain", zl = "main", Wl = "afterMain", Gl = "beforeWrite", Kl = "write", Ul = "afterWrite", ql = [Ll, Nl, Vl, Fl, zl, Wl, Gl, Kl, Ul];
function Re(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ge(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ze(e) {
  var t = ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function me(e) {
  var t = ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Yl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, o = t.elements[r];
    !me(o) || !Re(o) || (Object.assign(o.style, n), Object.keys(a).forEach(function(l) {
      var i = a[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Xl(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], o = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = l.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !me(a) || !Re(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(s) {
        a.removeAttribute(s);
      }));
    });
  };
}
const Jl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Yl,
  effect: Xl,
  requires: ["computeStyles"]
};
function Ee(e) {
  return e.split("-")[0];
}
var Xe = Math.max, Ar = Math.min, St = Math.round;
function xn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _i() {
  return !/^((?!chrome|android).)*safari/i.test(xn());
}
function xt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  t && me(e) && (a = e.offsetWidth > 0 && St(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && St(n.height) / e.offsetHeight || 1);
  var l = Ze(e) ? ge(e) : window, i = l.visualViewport, s = !_i() && r, c = (n.left + (s && i ? i.offsetLeft : 0)) / a, u = (n.top + (s && i ? i.offsetTop : 0)) / o, f = n.width / a, p = n.height / o;
  return {
    width: f,
    height: p,
    top: u,
    right: c + f,
    bottom: u + p,
    left: c,
    x: c,
    y: u
  };
}
function Wn(e) {
  var t = xt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ci(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && zn(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function He(e) {
  return ge(e).getComputedStyle(e);
}
function Zl(e) {
  return ["table", "td", "th"].indexOf(Re(e)) >= 0;
}
function Ke(e) {
  return ((Ze(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Vr(e) {
  return Re(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (zn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ke(e)
  );
}
function Ya(e) {
  return !me(e) || // https://github.com/popperjs/popper-core/issues/837
  He(e).position === "fixed" ? null : e.offsetParent;
}
function Ql(e) {
  var t = /firefox/i.test(xn()), r = /Trident/i.test(xn());
  if (r && me(e)) {
    var n = He(e);
    if (n.position === "fixed")
      return null;
  }
  var a = Vr(e);
  for (zn(a) && (a = a.host); me(a) && ["html", "body"].indexOf(Re(a)) < 0; ) {
    var o = He(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function cr(e) {
  for (var t = ge(e), r = Ya(e); r && Zl(r) && He(r).position === "static"; )
    r = Ya(r);
  return r && (Re(r) === "html" || Re(r) === "body" && He(r).position === "static") ? t : r || Ql(e) || t;
}
function Gn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jt(e, t, r) {
  return Xe(e, Ar(t, r));
}
function eu(e, t, r) {
  var n = Jt(e, t, r);
  return n > r ? r : n;
}
function wi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Si(e) {
  return Object.assign({}, wi(), e);
}
function xi(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var tu = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Si(typeof t != "number" ? t : xi(t, ur));
};
function ru(e) {
  var t, r = e.state, n = e.name, a = e.options, o = r.elements.arrow, l = r.modifiersData.popperOffsets, i = Ee(r.placement), s = Gn(i), c = [pe, we].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!o || !l)) {
    var f = tu(a.padding, r), p = Wn(o), d = s === "y" ? de : pe, h = s === "y" ? Ce : we, g = r.rects.reference[u] + r.rects.reference[s] - l[s] - r.rects.popper[u], v = l[s] - r.rects.reference[s], y = cr(o), C = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, O = g / 2 - v / 2, S = f[d], E = C - p[u] - f[h], k = C / 2 - p[u] / 2 + O, M = Jt(S, k, E), H = s;
    r.modifiersData[n] = (t = {}, t[H] = M, t.centerOffset = M - k, t);
  }
}
function nu(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Ci(t.elements.popper, a) && (t.elements.arrow = a));
}
const au = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ru,
  effect: nu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ot(e) {
  return e.split("-")[1];
}
var ou = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function iu(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return {
    x: St(r * a) / a || 0,
    y: St(n * a) / a || 0
  };
}
function Xa(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = l.x, d = p === void 0 ? 0 : p, h = l.y, g = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = v.x, g = v.y;
  var y = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), O = pe, S = de, E = window;
  if (c) {
    var k = cr(r), M = "clientHeight", H = "clientWidth";
    if (k === ge(r) && (k = Ke(r), He(k).position !== "static" && i === "absolute" && (M = "scrollHeight", H = "scrollWidth")), k = k, a === de || (a === pe || a === we) && o === or) {
      S = Ce;
      var b = f && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[M]
      );
      g -= b - n.height, g *= s ? 1 : -1;
    }
    if (a === pe || (a === de || a === Ce) && o === or) {
      O = we;
      var x = f && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[H]
      );
      d -= x - n.width, d *= s ? 1 : -1;
    }
  }
  var m = Object.assign({
    position: i
  }, c && ou), j = u === !0 ? iu({
    x: d,
    y: g
  }, ge(r)) : {
    x: d,
    y: g
  };
  if (d = j.x, g = j.y, s) {
    var T;
    return Object.assign({}, m, (T = {}, T[S] = C ? "0" : "", T[O] = y ? "0" : "", T.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", T));
  }
  return Object.assign({}, m, (t = {}, t[S] = C ? g + "px" : "", t[O] = y ? d + "px" : "", t.transform = "", t));
}
function su(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i, c = {
    placement: Ee(t.placement),
    variation: Ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xa(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xa(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const lu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: su,
  data: {}
};
var mr = {
  passive: !0
};
function uu(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, o = a === void 0 ? !0 : a, l = n.resize, i = l === void 0 ? !0 : l, s = ge(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, mr);
  }), i && s.addEventListener("resize", r.update, mr), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, mr);
    }), i && s.removeEventListener("resize", r.update, mr);
  };
}
const cu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: uu,
  data: {}
};
var fu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Sr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return fu[t];
  });
}
var du = {
  start: "end",
  end: "start"
};
function Ja(e) {
  return e.replace(/start|end/g, function(t) {
    return du[t];
  });
}
function Kn(e) {
  var t = ge(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Un(e) {
  return xt(Ke(e)).left + Kn(e).scrollLeft;
}
function pu(e, t) {
  var r = ge(e), n = Ke(e), a = r.visualViewport, o = n.clientWidth, l = n.clientHeight, i = 0, s = 0;
  if (a) {
    o = a.width, l = a.height;
    var c = _i();
    (c || !c && t === "fixed") && (i = a.offsetLeft, s = a.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Un(e),
    y: s
  };
}
function hu(e) {
  var t, r = Ke(e), n = Kn(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Xe(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Xe(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -n.scrollLeft + Un(e), s = -n.scrollTop;
  return He(a || r).direction === "rtl" && (i += Xe(r.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function qn(e) {
  var t = He(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Oi(e) {
  return ["html", "body", "#document"].indexOf(Re(e)) >= 0 ? e.ownerDocument.body : me(e) && qn(e) ? e : Oi(Vr(e));
}
function Zt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Oi(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ge(n), l = a ? [o].concat(o.visualViewport || [], qn(n) ? n : []) : n, i = t.concat(l);
  return a ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Zt(Vr(l)))
  );
}
function On(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vu(e, t) {
  var r = xt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Za(e, t, r) {
  return t === bi ? On(pu(e, r)) : Ze(t) ? vu(t, r) : On(hu(Ke(e)));
}
function gu(e) {
  var t = Zt(Vr(e)), r = ["absolute", "fixed"].indexOf(He(e).position) >= 0, n = r && me(e) ? cr(e) : e;
  return Ze(n) ? t.filter(function(a) {
    return Ze(a) && Ci(a, n) && Re(a) !== "body";
  }) : [];
}
function yu(e, t, r, n) {
  var a = t === "clippingParents" ? gu(e) : [].concat(t), o = [].concat(a, [r]), l = o[0], i = o.reduce(function(s, c) {
    var u = Za(e, c, n);
    return s.top = Xe(u.top, s.top), s.right = Ar(u.right, s.right), s.bottom = Ar(u.bottom, s.bottom), s.left = Xe(u.left, s.left), s;
  }, Za(e, l, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ai(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? Ee(n) : null, o = n ? Ot(n) : null, l = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, s;
  switch (a) {
    case de:
      s = {
        x: l,
        y: t.y - r.height
      };
      break;
    case Ce:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case we:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case pe:
      s = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var c = a ? Gn(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case wt:
        s[c] = s[c] - (t[u] / 2 - r[u] / 2);
        break;
      case or:
        s[c] = s[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function ir(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Dl : i, c = r.rootBoundary, u = c === void 0 ? bi : c, f = r.elementContext, p = f === void 0 ? Ft : f, d = r.altBoundary, h = d === void 0 ? !1 : d, g = r.padding, v = g === void 0 ? 0 : g, y = Si(typeof v != "number" ? v : xi(v, ur)), C = p === Ft ? Bl : Ft, O = e.rects.popper, S = e.elements[h ? C : p], E = yu(Ze(S) ? S : S.contextElement || Ke(e.elements.popper), s, u, l), k = xt(e.elements.reference), M = Ai({
    reference: k,
    element: O,
    placement: a
  }), H = On(Object.assign({}, O, M)), b = p === Ft ? H : k, x = {
    top: E.top - b.top + y.top,
    bottom: b.bottom - E.bottom + y.bottom,
    left: E.left - b.left + y.left,
    right: b.right - E.right + y.right
  }, m = e.modifiersData.offset;
  if (p === Ft && m) {
    var j = m[a];
    Object.keys(x).forEach(function(T) {
      var L = [we, Ce].indexOf(T) >= 0 ? 1 : -1, K = [de, Ce].indexOf(T) >= 0 ? "y" : "x";
      x[T] += j[K] * L;
    });
  }
  return x;
}
function bu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? mi : s, u = Ot(n), f = u ? i ? qa : qa.filter(function(h) {
    return Ot(h) === u;
  }) : ur, p = f.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  p.length === 0 && (p = f);
  var d = p.reduce(function(h, g) {
    return h[g] = ir(e, {
      placement: g,
      boundary: a,
      rootBoundary: o,
      padding: l
    })[Ee(g)], h;
  }, {});
  return Object.keys(d).sort(function(h, g) {
    return d[h] - d[g];
  });
}
function mu(e) {
  if (Ee(e) === Fn)
    return [];
  var t = Sr(e);
  return [Ja(e), t, Ja(t)];
}
function _u(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? !0 : a, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, v = t.options.placement, y = Ee(v), C = y === v, O = s || (C || !h ? [Sr(v)] : mu(v)), S = [v].concat(O).reduce(function(ct, Ne) {
      return ct.concat(Ee(Ne) === Fn ? bu(t, {
        placement: Ne,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : Ne);
    }, []), E = t.rects.reference, k = t.rects.popper, M = /* @__PURE__ */ new Map(), H = !0, b = S[0], x = 0; x < S.length; x++) {
      var m = S[x], j = Ee(m), T = Ot(m) === wt, L = [de, Ce].indexOf(j) >= 0, K = L ? "width" : "height", z = ir(t, {
        placement: m,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: c
      }), ae = L ? T ? we : pe : T ? Ce : de;
      E[K] > k[K] && (ae = Sr(ae));
      var $ = Sr(ae), I = [];
      if (o && I.push(z[j] <= 0), i && I.push(z[ae] <= 0, z[$] <= 0), I.every(function(ct) {
        return ct;
      })) {
        b = m, H = !1;
        break;
      }
      M.set(m, I);
    }
    if (H)
      for (var B = h ? 3 : 1, fe = function(Ne) {
        var Vt = S.find(function(hr) {
          var Ue = M.get(hr);
          if (Ue)
            return Ue.slice(0, Ne).every(function(Qr) {
              return Qr;
            });
        });
        if (Vt)
          return b = Vt, "break";
      }, ke = B; ke > 0; ke--) {
        var ut = fe(ke);
        if (ut === "break") break;
      }
    t.placement !== b && (t.modifiersData[n]._skip = !0, t.placement = b, t.reset = !0);
  }
}
const Cu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _u,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qa(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function eo(e) {
  return [de, we, Ce, pe].some(function(t) {
    return e[t] >= 0;
  });
}
function wu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, l = ir(t, {
    elementContext: "reference"
  }), i = ir(t, {
    altBoundary: !0
  }), s = Qa(l, n), c = Qa(i, a, o), u = eo(s), f = eo(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const Su = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wu
};
function xu(e, t, r) {
  var n = Ee(e), a = [pe, de].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * a, [pe, we].indexOf(n) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Ou(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, l = mi.reduce(function(u, f) {
    return u[f] = xu(f, t.rects, o), u;
  }, {}), i = l[t.placement], s = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = l;
}
const Au = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ou
};
function ku(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ai({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const $u = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ku,
  data: {}
};
function Eu(e) {
  return e === "x" ? "y" : "x";
}
function Tu(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, o = a === void 0 ? !0 : a, l = r.altAxis, i = l === void 0 ? !1 : l, s = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, h = r.tetherOffset, g = h === void 0 ? 0 : h, v = ir(t, {
    boundary: s,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), y = Ee(t.placement), C = Ot(t.placement), O = !C, S = Gn(y), E = Eu(S), k = t.modifiersData.popperOffsets, M = t.rects.reference, H = t.rects.popper, b = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, x = typeof b == "number" ? {
    mainAxis: b,
    altAxis: b
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, b), m = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (k) {
    if (o) {
      var T, L = S === "y" ? de : pe, K = S === "y" ? Ce : we, z = S === "y" ? "height" : "width", ae = k[S], $ = ae + v[L], I = ae - v[K], B = d ? -H[z] / 2 : 0, fe = C === wt ? M[z] : H[z], ke = C === wt ? -H[z] : -M[z], ut = t.elements.arrow, ct = d && ut ? Wn(ut) : {
        width: 0,
        height: 0
      }, Ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wi(), Vt = Ne[L], hr = Ne[K], Ue = Jt(0, M[z], ct[z]), Qr = O ? M[z] / 2 - B - Ue - Vt - x.mainAxis : fe - Ue - Vt - x.mainAxis, Es = O ? -M[z] / 2 + B + Ue + hr + x.mainAxis : ke + Ue + hr + x.mainAxis, en = t.elements.arrow && cr(t.elements.arrow), Ts = en ? S === "y" ? en.clientTop || 0 : en.clientLeft || 0 : 0, xa = (T = m == null ? void 0 : m[S]) != null ? T : 0, Rs = ae + Qr - xa - Ts, Ms = ae + Es - xa, Oa = Jt(d ? Ar($, Rs) : $, ae, d ? Xe(I, Ms) : I);
      k[S] = Oa, j[S] = Oa - ae;
    }
    if (i) {
      var Aa, Ps = S === "x" ? de : pe, js = S === "x" ? Ce : we, qe = k[E], vr = E === "y" ? "height" : "width", ka = qe + v[Ps], $a = qe - v[js], tn = [de, pe].indexOf(y) !== -1, Ea = (Aa = m == null ? void 0 : m[E]) != null ? Aa : 0, Ta = tn ? ka : qe - M[vr] - H[vr] - Ea + x.altAxis, Ra = tn ? qe + M[vr] + H[vr] - Ea - x.altAxis : $a, Ma = d && tn ? eu(Ta, qe, Ra) : Jt(d ? Ta : ka, qe, d ? Ra : $a);
      k[E] = Ma, j[E] = Ma - qe;
    }
    t.modifiersData[n] = j;
  }
}
const Ru = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Tu,
  requiresIfExists: ["offset"]
};
function Mu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pu(e) {
  return e === ge(e) || !me(e) ? Kn(e) : Mu(e);
}
function ju(e) {
  var t = e.getBoundingClientRect(), r = St(t.width) / e.offsetWidth || 1, n = St(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Iu(e, t, r) {
  r === void 0 && (r = !1);
  var n = me(t), a = me(t) && ju(t), o = Ke(t), l = xt(e, a, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Re(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qn(o)) && (i = Pu(t)), me(t) ? (s = xt(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : o && (s.x = Un(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Hu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = t.get(i);
        s && a(s);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function Du(e) {
  var t = Hu(e);
  return ql.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Bu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Lu(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var to = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ro() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Nu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? to : a;
  return function(i, s, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, to, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: u,
      setOptions: function(y) {
        var C = typeof y == "function" ? y(u.options) : y;
        g(), u.options = Object.assign({}, o, u.options, C), u.scrollParents = {
          reference: Ze(i) ? Zt(i) : i.contextElement ? Zt(i.contextElement) : [],
          popper: Zt(s)
        };
        var O = Du(Lu([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = O.filter(function(S) {
          return S.enabled;
        }), h(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = u.elements, C = y.reference, O = y.popper;
          if (ro(C, O)) {
            u.rects = {
              reference: Iu(C, cr(O), u.options.strategy === "fixed"),
              popper: Wn(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
              return u.modifiersData[x.name] = Object.assign({}, x.data);
            });
            for (var S = 0; S < u.orderedModifiers.length; S++) {
              if (u.reset === !0) {
                u.reset = !1, S = -1;
                continue;
              }
              var E = u.orderedModifiers[S], k = E.fn, M = E.options, H = M === void 0 ? {} : M, b = E.name;
              typeof k == "function" && (u = k({
                state: u,
                options: H,
                name: b,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Bu(function() {
        return new Promise(function(v) {
          d.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!ro(i, s))
      return d;
    d.setOptions(c).then(function(v) {
      !p && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function h() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, C = v.options, O = C === void 0 ? {} : C, S = v.effect;
        if (typeof S == "function") {
          var E = S({
            state: u,
            name: y,
            instance: d,
            options: O
          }), k = function() {
          };
          f.push(E || k);
        }
      });
    }
    function g() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return d;
  };
}
var Vu = [cu, $u, lu, Jl, Au, Cu, Ru, au, Su], Fu = /* @__PURE__ */ Nu({
  defaultModifiers: Vu
});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function no(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zu(e) {
  var t, r;
  return no(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(no(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
function ki(e, t) {
  if (e == null) return {};
  var r, n, a = {}, o = Object.keys(e);
  for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (a[r] = e[r]);
  return a;
}
const Wu = { silent: !1, logLevel: "warn" }, Gu = ["validator"], $i = Object.prototype, Ei = $i.toString, Ku = $i.hasOwnProperty, Ti = /^\s*function (\w+)/;
function ao(e) {
  var t;
  const r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    const n = r.toString().match(Ti);
    return n ? n[1] : "";
  }
  return "";
}
const Qe = zu, Uu = (e) => e;
let se = Uu;
const At = (e, t) => Ku.call(e, t), qu = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, kt = Array.isArray || function(e) {
  return Ei.call(e) === "[object Array]";
}, $t = (e) => Ei.call(e) === "[object Function]", kr = (e) => Qe(e) && At(e, "_vueTypes_name"), Ri = (e) => Qe(e) && (At(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t) => At(e, t)));
function Yn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function ot(e, t, r = !1) {
  let n, a = !0, o = "";
  n = Qe(e) ? e : { type: e };
  const l = kr(n) ? n._vueTypes_name + " - " : "";
  if (Ri(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && t === void 0) return a;
    kt(n.type) ? (a = n.type.some((i) => ot(i, t, !0) === !0), o = n.type.map((i) => ao(i)).join(" or ")) : (o = ao(n), a = o === "Array" ? kt(t) : o === "Object" ? Qe(t) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(i) {
      if (i == null) return "";
      const s = i.constructor.toString().match(Ti);
      return s ? s[1] : "";
    }(t) === o : t instanceof n.type);
  }
  if (!a) {
    const i = `${l}value "${t}" should be of type "${o}"`;
    return r === !1 ? (se(i), !1) : i;
  }
  if (At(n, "validator") && $t(n.validator)) {
    const i = se, s = [];
    if (se = (c) => {
      s.push(c);
    }, a = n.validator(t), se = i, !a) {
      const c = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, r === !1 ? (se(c), a) : c;
    }
  }
  return a;
}
function ve(e, t) {
  const r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get() {
    return this.required = !0, this;
  } }, def: { value(a) {
    return a === void 0 ? (At(this, "default") && delete this.default, this) : $t(a) || ot(this, a, !0) === !0 ? (this.default = kt(a) ? () => [...a] : Qe(a) ? () => Object.assign({}, a) : a, this) : (se(`${this._vueTypes_name} - invalid default value: "${a}"`), this);
  } } }), { validator: n } = r;
  return $t(n) && (r.validator = Yn(n, r)), r;
}
function Te(e, t) {
  const r = ve(e, t);
  return Object.defineProperty(r, "validate", { value(n) {
    return $t(this.validator) && se(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = Yn(n, this), this;
  } });
}
function oo(e, t, r) {
  const n = function(s) {
    const c = {};
    return Object.getOwnPropertyNames(s).forEach((u) => {
      c[u] = Object.getOwnPropertyDescriptor(s, u);
    }), Object.defineProperties({}, c);
  }(t);
  if (n._vueTypes_name = e, !Qe(r)) return n;
  const { validator: a } = r, o = ki(r, Gu);
  if ($t(a)) {
    let { validator: s } = n;
    s && (s = (i = (l = s).__original) !== null && i !== void 0 ? i : l), n.validator = Yn(s ? function(c) {
      return s.call(this, c) && a.call(this, c);
    } : a, n);
  }
  var l, i;
  return Object.assign(n, o);
}
function Fr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const Yu = () => Te("any", {}), Xu = () => Te("function", { type: Function }), Ju = () => Te("boolean", { type: Boolean }), Zu = () => Te("string", { type: String }), Qu = () => Te("number", { type: Number }), ec = () => Te("array", { type: Array }), tc = () => Te("object", { type: Object }), rc = () => ve("integer", { type: Number, validator: (e) => qu(e) }), nc = () => ve("symbol", { validator: (e) => typeof e == "symbol" });
function ac(e, t = "custom validation failed") {
  if (typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return ve(e.name || "<<anonymous function>>", { type: null, validator(r) {
    const n = e(r);
    return n || se(`${this._vueTypes_name} - ${t}`), n;
  } });
}
function oc(e) {
  if (!kt(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t = `oneOf - value should be one of "${e.join('", "')}".`, r = e.reduce((n, a) => {
    if (a != null) {
      const o = a.constructor;
      n.indexOf(o) === -1 && n.push(o);
    }
    return n;
  }, []);
  return ve("oneOf", { type: r.length > 0 ? r : void 0, validator(n) {
    const a = e.indexOf(n) !== -1;
    return a || se(t), a;
  } });
}
function ic(e) {
  if (!kt(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t = !1, r = [];
  for (let a = 0; a < e.length; a += 1) {
    const o = e[a];
    if (Ri(o)) {
      if (kr(o) && o._vueTypes_name === "oneOf" && o.type) {
        r = r.concat(o.type);
        continue;
      }
      if ($t(o.validator) && (t = !0), o.type === !0 || !o.type) {
        se('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r = r.concat(o.type);
    } else r.push(o);
  }
  r = r.filter((a, o) => r.indexOf(a) === o);
  const n = r.length > 0 ? r : null;
  return ve("oneOfType", t ? { type: n, validator(a) {
    const o = [], l = e.some((i) => {
      const s = ot(kr(i) && i._vueTypes_name === "oneOf" ? i.type || null : i, a, !0);
      return typeof s == "string" && o.push(s), s === !0;
    });
    return l || se(`oneOfType - provided value does not match any of the ${o.length} passed-in validators:
${Fr(o.join(`
`))}`), l;
  } } : { type: n });
}
function sc(e) {
  return ve("arrayOf", { type: Array, validator(t) {
    let r = "";
    const n = t.every((a) => (r = ot(e, a, !0), r === !0));
    return n || se(`arrayOf - value validation error:
${Fr(r)}`), n;
  } });
}
function lc(e) {
  return ve("instanceOf", { type: e });
}
function uc(e) {
  return ve("objectOf", { type: Object, validator(t) {
    let r = "";
    const n = Object.keys(t).every((a) => (r = ot(e, t[a], !0), r === !0));
    return n || se(`objectOf - value validation error:
${Fr(r)}`), n;
  } });
}
function cc(e) {
  const t = Object.keys(e), r = t.filter((a) => {
    var o;
    return !((o = e[a]) === null || o === void 0 || !o.required);
  }), n = ve("shape", { type: Object, validator(a) {
    if (!Qe(a)) return !1;
    const o = Object.keys(a);
    if (r.length > 0 && r.some((l) => o.indexOf(l) === -1)) {
      const l = r.filter((i) => o.indexOf(i) === -1);
      return se(l.length === 1 ? `shape - required property "${l[0]}" is not defined.` : `shape - required properties "${l.join('", "')}" are not defined.`), !1;
    }
    return o.every((l) => {
      if (t.indexOf(l) === -1) return this._vueTypes_isLoose === !0 || (se(`shape - shape definition does not include a "${l}" property. Allowed keys: "${t.join('", "')}".`), !1);
      const i = ot(e[l], a[l], !0);
      return typeof i == "string" && se(`shape - "${l}" property validation error:
 ${Fr(i)}`), i === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
const fc = ["name", "validate", "getter"], dc = /* @__PURE__ */ (() => {
  var e;
  return (e = class {
    static get any() {
      return Yu();
    }
    static get func() {
      return Xu().def(this.defaults.func);
    }
    static get bool() {
      return Ju().def(this.defaults.bool);
    }
    static get string() {
      return Zu().def(this.defaults.string);
    }
    static get number() {
      return Qu().def(this.defaults.number);
    }
    static get array() {
      return ec().def(this.defaults.array);
    }
    static get object() {
      return tc().def(this.defaults.object);
    }
    static get integer() {
      return rc().def(this.defaults.integer);
    }
    static get symbol() {
      return nc();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(t) {
      if (kt(t)) return t.forEach((s) => this.extend(s)), this;
      const { name: r, validate: n = !1, getter: a = !1 } = t, o = ki(t, fc);
      if (At(this, r)) throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);
      const { type: l } = o;
      if (kr(l)) return delete o.type, Object.defineProperty(this, r, a ? { get: () => oo(r, l, o) } : { value(...s) {
        const c = oo(r, l, o);
        return c.validator && (c.validator = c.validator.bind(c, ...s)), c;
      } });
      let i;
      return i = a ? { get() {
        const s = Object.assign({}, o);
        return n ? Te(r, s) : ve(r, s);
      }, enumerable: !0 } : { value(...s) {
        const c = Object.assign({}, o);
        let u;
        return u = n ? Te(r, c) : ve(r, c), c.validator && (u.validator = c.validator.bind(u, ...s)), u;
      }, enumerable: !0 }, Object.defineProperty(this, r, i);
    }
  }).defaults = {}, e.sensibleDefaults = void 0, e.config = Wu, e.custom = ac, e.oneOf = oc, e.instanceOf = lc, e.oneOfType = ic, e.arrayOf = sc, e.objectOf = uc, e.shape = cc, e.utils = { validate: (t, r) => ot(r, t, !0) === !0, toType: (t, r, n = !1) => n ? Te(t, r) : ve(t, r) }, e;
})();
function pc(e = { func: () => {
}, bool: !0, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var t;
  return (t = class extends dc {
    static get sensibleDefaults() {
      return Qt({}, this.defaults);
    }
    static set sensibleDefaults(r) {
      this.defaults = r !== !1 ? Qt({}, r !== !0 ? r : e) : {};
    }
  }).defaults = Qt({}, e), t;
}
let R = class extends pc() {
};
var io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xn(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var _r = function(e) {
  return e && e.Math == Math && e;
}, te = _r(typeof globalThis == "object" && globalThis) || _r(typeof window == "object" && window) || _r(typeof self == "object" && self) || _r(typeof io == "object" && io) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), F = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, be = !F(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), so = {}.propertyIsEnumerable, lo = Object.getOwnPropertyDescriptor, hc = { f: lo && !so.call({ 1: 2 }, 1) ? function(e) {
  var t = lo(this, e);
  return !!t && t.enumerable;
} : so }, zr = function(e, t) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
}, vc = {}.toString, je = function(e) {
  return vc.call(e).slice(8, -1);
}, gc = "".split, Wr = F(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e) {
  return je(e) == "String" ? gc.call(e, "") : Object(e);
} : Object, ze = function(e) {
  if (e == null) throw TypeError("Can't call method on " + e);
  return e;
}, It = function(e) {
  return Wr(ze(e));
}, re = function(e) {
  return typeof e == "object" ? e !== null : typeof e == "function";
}, Jn = function(e, t) {
  if (!re(e)) return e;
  var r, n;
  if (t && typeof (r = e.toString) == "function" && !re(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !re(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !re(n = r.call(e))) return n;
  throw TypeError("Can't convert object to primitive value");
}, yc = {}.hasOwnProperty, Q = function(e, t) {
  return yc.call(e, t);
}, An = te.document, bc = re(An) && re(An.createElement), Mi = function(e) {
  return bc ? An.createElement(e) : {};
}, Pi = !be && !F(function() {
  return Object.defineProperty(Mi("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), uo = Object.getOwnPropertyDescriptor, Zn = { f: be ? uo : function(e, t) {
  if (e = It(e), t = Jn(t, !0), Pi) try {
    return uo(e, t);
  } catch {
  }
  if (Q(e, t)) return zr(!hc.f.call(e, t), e[t]);
} }, ue = function(e) {
  if (!re(e)) throw TypeError(String(e) + " is not an object");
  return e;
}, co = Object.defineProperty, De = { f: be ? co : function(e, t, r) {
  if (ue(e), t = Jn(t, !0), ue(r), Pi) try {
    return co(e, t, r);
  } catch {
  }
  if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
} }, _e = be ? function(e, t, r) {
  return De.f(e, t, zr(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, Qn = function(e, t) {
  try {
    _e(te, e, t);
  } catch {
    te[e] = t;
  }
  return t;
}, et = te["__core-js_shared__"] || Qn("__core-js_shared__", {}), mc = Function.toString;
typeof et.inspectSource != "function" && (et.inspectSource = function(e) {
  return mc.call(e);
});
var $r, er, Er, ji = et.inspectSource, fo = te.WeakMap, _c = typeof fo == "function" && /native code/.test(ji(fo)), Ii = Xn(function(e) {
  (e.exports = function(t, r) {
    return et[t] || (et[t] = r !== void 0 ? r : {});
  })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
}), Cc = 0, wc = Math.random(), ea = function(e) {
  return "Symbol(" + String(e === void 0 ? "" : e) + ")_" + (++Cc + wc).toString(36);
}, po = Ii("keys"), ta = function(e) {
  return po[e] || (po[e] = ea(e));
}, Gr = {}, Sc = te.WeakMap;
if (_c) {
  var ft = et.state || (et.state = new Sc()), xc = ft.get, Oc = ft.has, Ac = ft.set;
  $r = function(e, t) {
    return t.facade = e, Ac.call(ft, e, t), t;
  }, er = function(e) {
    return xc.call(ft, e) || {};
  }, Er = function(e) {
    return Oc.call(ft, e);
  };
} else {
  var zt = ta("state");
  Gr[zt] = !0, $r = function(e, t) {
    return t.facade = e, _e(e, zt, t), t;
  }, er = function(e) {
    return Q(e, zt) ? e[zt] : {};
  }, Er = function(e) {
    return Q(e, zt);
  };
}
var We = { set: $r, get: er, has: Er, enforce: function(e) {
  return Er(e) ? er(e) : $r(e, {});
}, getterFor: function(e) {
  return function(t) {
    var r;
    if (!re(t) || (r = er(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
    return r;
  };
} }, Ge = Xn(function(e) {
  var t = We.get, r = We.enforce, n = String(String).split("String");
  (e.exports = function(a, o, l, i) {
    var s, c = !!i && !!i.unsafe, u = !!i && !!i.enumerable, f = !!i && !!i.noTargetGet;
    typeof l == "function" && (typeof o != "string" || Q(l, "name") || _e(l, "name", o), (s = r(l)).source || (s.source = n.join(typeof o == "string" ? o : ""))), a !== te ? (c ? !f && a[o] && (u = !0) : delete a[o], u ? a[o] = l : _e(a, o, l)) : u ? a[o] = l : Qn(o, l);
  })(Function.prototype, "toString", function() {
    return typeof this == "function" && t(this).source || ji(this);
  });
}), rn = te, ho = function(e) {
  return typeof e == "function" ? e : void 0;
}, Kr = function(e, t) {
  return arguments.length < 2 ? ho(rn[e]) || ho(te[e]) : rn[e] && rn[e][t] || te[e] && te[e][t];
}, kc = Math.ceil, $c = Math.floor, Ht = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? $c : kc)(e);
}, Ec = Math.min, ye = function(e) {
  return e > 0 ? Ec(Ht(e), 9007199254740991) : 0;
}, Tc = Math.max, Rc = Math.min, Tr = function(e, t) {
  var r = Ht(e);
  return r < 0 ? Tc(r + t, 0) : Rc(r, t);
}, Mc = function(e) {
  return function(t, r, n) {
    var a, o = It(t), l = ye(o.length), i = Tr(n, l);
    if (e && r != r) {
      for (; l > i; ) if ((a = o[i++]) != a) return !0;
    } else for (; l > i; i++) if ((e || i in o) && o[i] === r) return e || i || 0;
    return !e && -1;
  };
}, Hi = { indexOf: Mc(!1) }, Pc = Hi.indexOf, Di = function(e, t) {
  var r, n = It(e), a = 0, o = [];
  for (r in n) !Q(Gr, r) && Q(n, r) && o.push(r);
  for (; t.length > a; ) Q(n, r = t[a++]) && (~Pc(o, r) || o.push(r));
  return o;
}, Rr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], jc = Rr.concat("length", "prototype"), Ic = { f: Object.getOwnPropertyNames || function(e) {
  return Di(e, jc);
} }, Hc = { f: Object.getOwnPropertySymbols }, Dc = Kr("Reflect", "ownKeys") || function(e) {
  var t = Ic.f(ue(e)), r = Hc.f;
  return r ? t.concat(r(e)) : t;
}, Bc = function(e, t) {
  for (var r = Dc(t), n = De.f, a = Zn.f, o = 0; o < r.length; o++) {
    var l = r[o];
    Q(e, l) || n(e, l, a(t, l));
  }
}, Lc = /#|\.prototype\./, fr = function(e, t) {
  var r = Vc[Nc(e)];
  return r == zc || r != Fc && (typeof t == "function" ? F(t) : !!t);
}, Nc = fr.normalize = function(e) {
  return String(e).replace(Lc, ".").toLowerCase();
}, Vc = fr.data = {}, Fc = fr.NATIVE = "N", zc = fr.POLYFILL = "P", kn = fr, Wc = Zn.f, le = function(e, t) {
  var r, n, a, o, l, i = e.target, s = e.global, c = e.stat;
  if (r = s ? te : c ? te[i] || Qn(i, {}) : (te[i] || {}).prototype) for (n in t) {
    if (o = t[n], a = e.noTargetGet ? (l = Wc(r, n)) && l.value : r[n], !kn(s ? n : i + (c ? "." : "#") + n, e.forced) && a !== void 0) {
      if (typeof o == typeof a) continue;
      Bc(o, a);
    }
    (e.sham || a && a.sham) && _e(o, "sham", !0), Ge(r, n, o, e);
  }
}, ra = function(e, t) {
  var r = [][e];
  return !!r && F(function() {
    r.call(null, t || function() {
      throw 1;
    }, 1);
  });
}, Gc = Object.defineProperty, nn = {}, vo = function(e) {
  throw e;
}, Dt = function(e, t) {
  if (Q(nn, e)) return nn[e];
  t || (t = {});
  var r = [][e], n = !!Q(t, "ACCESSORS") && t.ACCESSORS, a = Q(t, 0) ? t[0] : vo, o = Q(t, 1) ? t[1] : void 0;
  return nn[e] = !!r && !F(function() {
    if (n && !be) return !0;
    var l = { length: -1 };
    n ? Gc(l, 1, { enumerable: !0, get: vo }) : l[1] = 1, r.call(l, a, o);
  });
}, Kc = Hi.indexOf, Bi = [].indexOf, go = !!Bi && 1 / [1].indexOf(1, -0) < 0, Uc = ra("indexOf"), qc = Dt("indexOf", { ACCESSORS: !0, 1: 0 });
function it(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Yc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function st(e, t, r) {
  return r && Yc(e, r), e;
}
le({ target: "Array", proto: !0, forced: go || !Uc || !qc }, { indexOf: function(e) {
  return go ? Bi.apply(this, arguments) || 0 : Kc(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
(function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "isInBrowser", value: function() {
    return typeof window < "u";
  } }, { key: "isServer", value: function() {
    return typeof window > "u";
  } }, { key: "getUA", value: function() {
    return e.isInBrowser() ? window.navigator.userAgent.toLowerCase() : "";
  } }, { key: "isMobile", value: function() {
    return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  } }, { key: "isOpera", value: function() {
    return navigator.userAgent.indexOf("Opera") !== -1;
  } }, { key: "isIE", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("msie") > 0;
  } }, { key: "isIE9", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("msie 9.0") > 0;
  } }, { key: "isEdge", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("edge/") > 0;
  } }, { key: "isChrome", value: function() {
    var t = e.getUA();
    return t !== "" && /chrome\/\d+/.test(t) && !e.isEdge();
  } }, { key: "isPhantomJS", value: function() {
    var t = e.getUA();
    return t !== "" && /phantomjs/.test(t);
  } }, { key: "isFirefox", value: function() {
    var t = e.getUA();
    return t !== "" && /firefox/.test(t);
  } }]), e;
})();
var Xc = [].join, Jc = Wr != Object, Zc = ra("join", ",");
le({ target: "Array", proto: !0, forced: Jc || !Zc }, { join: function(e) {
  return Xc.call(It(this), e === void 0 ? "," : e);
} });
var dt, Mr, Be = function(e) {
  return Object(ze(e));
}, Et = Array.isArray || function(e) {
  return je(e) == "Array";
}, Li = !!Object.getOwnPropertySymbols && !F(function() {
  return !String(Symbol());
}), Qc = Li && !Symbol.sham && typeof Symbol.iterator == "symbol", Cr = Ii("wks"), tr = te.Symbol, ef = Qc ? tr : tr && tr.withoutSetter || ea, Y = function(e) {
  return Q(Cr, e) || (Li && Q(tr, e) ? Cr[e] = tr[e] : Cr[e] = ef("Symbol." + e)), Cr[e];
}, tf = Y("species"), Ur = function(e, t) {
  var r;
  return Et(e) && (typeof (r = e.constructor) != "function" || r !== Array && !Et(r.prototype) ? re(r) && (r = r[tf]) === null && (r = void 0) : r = void 0), new (r === void 0 ? Array : r)(t === 0 ? 0 : t);
}, Tt = function(e, t, r) {
  var n = Jn(t);
  n in e ? De.f(e, n, zr(0, r)) : e[n] = r;
}, an = Kr("navigator", "userAgent") || "", yo = te.process, bo = yo && yo.versions, mo = bo && bo.v8;
mo ? Mr = (dt = mo.split("."))[0] + dt[1] : an && (!(dt = an.match(/Edge\/(\d+)/)) || dt[1] >= 74) && (dt = an.match(/Chrome\/(\d+)/)) && (Mr = dt[1]);
var Pr = Mr && +Mr, rf = Y("species"), na = function(e) {
  return Pr >= 51 || !F(function() {
    var t = [];
    return (t.constructor = {})[rf] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  });
}, nf = na("splice"), af = Dt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), of = Math.max, sf = Math.min;
le({ target: "Array", proto: !0, forced: !nf || !af }, { splice: function(e, t) {
  var r, n, a, o, l, i, s = Be(this), c = ye(s.length), u = Tr(e, c), f = arguments.length;
  if (f === 0 ? r = n = 0 : f === 1 ? (r = 0, n = c - u) : (r = f - 2, n = sf(of(Ht(t), 0), c - u)), c + r - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
  for (a = Ur(s, n), o = 0; o < n; o++) (l = u + o) in s && Tt(a, o, s[l]);
  if (a.length = n, r < n) {
    for (o = u; o < c - n; o++) i = o + r, (l = o + n) in s ? s[i] = s[l] : delete s[i];
    for (o = c; o > c - n + r; o--) delete s[o - 1];
  } else if (r > n) for (o = c - n; o > u; o--) i = o + r - 1, (l = o + n - 1) in s ? s[i] = s[l] : delete s[i];
  for (o = 0; o < r; o++) s[o + u] = arguments[o + 2];
  return s.length = c - n + r, a;
} });
var Ni = {};
Ni[Y("toStringTag")] = "z";
var aa = String(Ni) === "[object z]", lf = Y("toStringTag"), uf = je(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", Vi = aa ? je : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = function(a, o) {
    try {
      return a[o];
    } catch {
    }
  }(t = Object(e), lf)) == "string" ? r : uf ? je(t) : (n = je(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, cf = aa ? {}.toString : function() {
  return "[object " + Vi(this) + "]";
};
aa || Ge(Object.prototype, "toString", cf, { unsafe: !0 });
var Fi = function() {
  var e = ue(this), t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};
function _o(e, t) {
  return RegExp(e, t);
}
var on, sn, Co = { UNSUPPORTED_Y: F(function() {
  var e = _o("a", "y");
  return e.lastIndex = 2, e.exec("abcd") != null;
}), BROKEN_CARET: F(function() {
  var e = _o("^r", "gy");
  return e.lastIndex = 2, e.exec("str") != null;
}) }, jr = RegExp.prototype.exec, ff = String.prototype.replace, zi = jr, ln = (on = /a/, sn = /b*/g, jr.call(on, "a"), jr.call(sn, "a"), on.lastIndex !== 0 || sn.lastIndex !== 0), wo = Co.UNSUPPORTED_Y || Co.BROKEN_CARET, un = /()??/.exec("")[1] !== void 0;
(ln || un || wo) && (zi = function(e) {
  var t, r, n, a, o = this, l = wo && o.sticky, i = Fi.call(o), s = o.source, c = 0, u = e;
  return l && ((i = i.replace("y", "")).indexOf("g") === -1 && (i += "g"), u = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && e[o.lastIndex - 1] !== `
`) && (s = "(?: " + s + ")", u = " " + u, c++), r = new RegExp("^(?:" + s + ")", i)), un && (r = new RegExp("^" + s + "$(?!\\s)", i)), ln && (t = o.lastIndex), n = jr.call(l ? r : o, u), l ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = o.lastIndex, o.lastIndex += n[0].length) : o.lastIndex = 0 : ln && n && (o.lastIndex = o.global ? n.index + n[0].length : t), un && n && n.length > 1 && ff.call(n[0], r, function() {
    for (a = 1; a < arguments.length - 2; a++) arguments[a] === void 0 && (n[a] = void 0);
  }), n;
});
var sr = zi;
le({ target: "RegExp", proto: !0, forced: /./.exec !== sr }, { exec: sr });
var Wi = RegExp.prototype, Gi = Wi.toString, df = F(function() {
  return Gi.call({ source: "a", flags: "b" }) != "/a/b";
}), pf = Gi.name != "toString";
(df || pf) && Ge(RegExp.prototype, "toString", function() {
  var e = ue(this), t = String(e.source), r = e.flags;
  return "/" + t + "/" + String(r === void 0 && e instanceof RegExp && !("flags" in Wi) ? Fi.call(e) : r);
}, { unsafe: !0 });
var hf = Y("species"), vf = !F(function() {
  var e = /./;
  return e.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(e, "$<a>") !== "7";
}), So = "a".replace(/./, "$0") === "$0", xo = Y("replace"), Oo = !!/./[xo] && /./[xo]("a", "$0") === "", gf = !F(function() {
  var e = /(?:)/, t = e.exec;
  e.exec = function() {
    return t.apply(this, arguments);
  };
  var r = "ab".split(e);
  return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
}), Ki = function(e, t, r, n) {
  var a = Y(e), o = !F(function() {
    var f = {};
    return f[a] = function() {
      return 7;
    }, ""[e](f) != 7;
  }), l = o && !F(function() {
    var f = !1, p = /a/;
    return e === "split" && ((p = {}).constructor = {}, p.constructor[hf] = function() {
      return p;
    }, p.flags = "", p[a] = /./[a]), p.exec = function() {
      return f = !0, null;
    }, p[a](""), !f;
  });
  if (!o || !l || e === "replace" && (!vf || !So || Oo) || e === "split" && !gf) {
    var i = /./[a], s = r(a, ""[e], function(f, p, d, h, g) {
      return p.exec === sr ? o && !g ? { done: !0, value: i.call(p, d, h) } : { done: !0, value: f.call(d, p, h) } : { done: !1 };
    }, { REPLACE_KEEPS_$0: So, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Oo }), c = s[0], u = s[1];
    Ge(String.prototype, e, c), Ge(RegExp.prototype, a, function(f, p) {
      return u.call(f, this, p);
    });
  }
  n && _e(RegExp.prototype[a], "sham", !0);
}, yf = Y("match"), Ui = function(e) {
  var t;
  return re(e) && ((t = e[yf]) !== void 0 ? !!t : je(e) == "RegExp");
}, oa = function(e) {
  if (typeof e != "function") throw TypeError(String(e) + " is not a function");
  return e;
}, bf = Y("species"), mf = function(e) {
  return function(t, r) {
    var n, a, o = String(ze(t)), l = Ht(r), i = o.length;
    return l < 0 || l >= i ? e ? "" : void 0 : (n = o.charCodeAt(l)) < 55296 || n > 56319 || l + 1 === i || (a = o.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? o.charAt(l) : n : e ? o.slice(l, l + 2) : a - 56320 + (n - 55296 << 10) + 65536;
  };
}, qi = { charAt: mf(!0) }, _f = qi.charAt, Yi = function(e, t, r) {
  return t + (r ? _f(e, t).length : 1);
}, $n = function(e, t) {
  var r = e.exec;
  if (typeof r == "function") {
    var n = r.call(e, t);
    if (typeof n != "object") throw TypeError("RegExp exec method returned something other than an Object or null");
    return n;
  }
  if (je(e) !== "RegExp") throw TypeError("RegExp#exec called on incompatible receiver");
  return sr.call(e, t);
}, Cf = [].push, wf = Math.min, pt = !F(function() {
  return !RegExp(4294967295, "y");
});
Ki("split", 2, function(e, t, r) {
  var n;
  return n = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(a, o) {
    var l = String(ze(this)), i = o === void 0 ? 4294967295 : o >>> 0;
    if (i === 0) return [];
    if (a === void 0) return [l];
    if (!Ui(a)) return t.call(l, a, i);
    for (var s, c, u, f = [], p = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (a.sticky ? "y" : ""), d = 0, h = new RegExp(a.source, p + "g"); (s = sr.call(h, l)) && !((c = h.lastIndex) > d && (f.push(l.slice(d, s.index)), s.length > 1 && s.index < l.length && Cf.apply(f, s.slice(1)), u = s[0].length, d = c, f.length >= i)); ) h.lastIndex === s.index && h.lastIndex++;
    return d === l.length ? !u && h.test("") || f.push("") : f.push(l.slice(d)), f.length > i ? f.slice(0, i) : f;
  } : "0".split(void 0, 0).length ? function(a, o) {
    return a === void 0 && o === 0 ? [] : t.call(this, a, o);
  } : t, [function(a, o) {
    var l = ze(this), i = a == null ? void 0 : a[e];
    return i !== void 0 ? i.call(a, l, o) : n.call(String(l), a, o);
  }, function(a, o) {
    var l = r(n, a, this, o, n !== t);
    if (l.done) return l.value;
    var i = ue(a), s = String(this), c = function(S, E) {
      var k, M = ue(S).constructor;
      return M === void 0 || (k = ue(M)[bf]) == null ? E : oa(k);
    }(i, RegExp), u = i.unicode, f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (pt ? "y" : "g"), p = new c(pt ? i : "^(?:" + i.source + ")", f), d = o === void 0 ? 4294967295 : o >>> 0;
    if (d === 0) return [];
    if (s.length === 0) return $n(p, s) === null ? [s] : [];
    for (var h = 0, g = 0, v = []; g < s.length; ) {
      p.lastIndex = pt ? g : 0;
      var y, C = $n(p, pt ? s : s.slice(g));
      if (C === null || (y = wf(ye(p.lastIndex + (pt ? 0 : g)), s.length)) === h) g = Yi(s, g, u);
      else {
        if (v.push(s.slice(h, g)), v.length === d) return v;
        for (var O = 1; O <= C.length - 1; O++) if (v.push(C[O]), v.length === d) return v;
        g = h = y;
      }
    }
    return v.push(s.slice(h)), v;
  }];
}, !pt);
var En = `	
\v\f\r                　\u2028\u2029\uFEFF`, Ir = "[" + En + "]", Sf = RegExp("^" + Ir + Ir + "*"), xf = RegExp(Ir + Ir + "*$"), Of = function(e) {
  return function(t) {
    var r = String(ze(t));
    return 1 & e && (r = r.replace(Sf, "")), 2 & e && (r = r.replace(xf, "")), r;
  };
}, Af = { trim: Of(3) }, kf = Af.trim;
le({ target: "String", proto: !0, forced: function(e) {
  return F(function() {
    return !!En[e]() || "​᠎"[e]() != "​᠎" || En[e].name !== e;
  });
}("trim") }, { trim: function() {
  return kf(this);
} });
var $f = na("slice"), Ef = Dt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), Tf = Y("species"), Rf = [].slice, Mf = Math.max;
le({ target: "Array", proto: !0, forced: !$f || !Ef }, { slice: function(e, t) {
  var r, n, a, o = It(this), l = ye(o.length), i = Tr(e, l), s = Tr(t === void 0 ? l : t, l);
  if (Et(o) && (typeof (r = o.constructor) != "function" || r !== Array && !Et(r.prototype) ? re(r) && (r = r[Tf]) === null && (r = void 0) : r = void 0, r === Array || r === void 0)) return Rf.call(o, i, s);
  for (n = new (r === void 0 ? Array : r)(Mf(s - i, 0)), a = 0; i < s; i++, a++) i in o && Tt(n, a, o[i]);
  return n.length = a, n;
} });
var ia = Object.keys || function(e) {
  return Di(e, Rr);
}, Pf = F(function() {
  ia(1);
});
le({ target: "Object", stat: !0, forced: Pf }, { keys: function(e) {
  return ia(Be(e));
} });
var cn, jf = function(e) {
  if (Ui(e)) throw TypeError("The method doesn't accept regular expressions");
  return e;
}, If = Y("match"), Hf = Zn.f, Ao = "".startsWith, Df = Math.min, Xi = function(e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch {
    try {
      return t[If] = !1, "/./"[e](t);
    } catch {
    }
  }
  return !1;
}("startsWith"), Bf = !(Xi || (cn = Hf(String.prototype, "startsWith"), !cn || cn.writable));
function Ji(e) {
  return (Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
le({ target: "String", proto: !0, forced: !Bf && !Xi }, { startsWith: function(e) {
  var t = String(ze(this));
  jf(e);
  var r = ye(Df(arguments.length > 1 ? arguments[1] : void 0, t.length)), n = String(e);
  return Ao ? Ao.call(t, n, r) : t.slice(r, r + n.length) === n;
} });
var ht = function(e) {
  return typeof e == "string";
}, vt = function(e) {
  return e !== null && Ji(e) === "object";
}, Rt = function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "isWindow", value: function(t) {
    return t === window;
  } }, { key: "addEventListener", value: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.addEventListener(r, n, a);
  } }, { key: "removeEventListener", value: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.removeEventListener(r, n, a);
  } }, { key: "triggerDragEvent", value: function(t, r) {
    var n = !1, a = function(l) {
      var i;
      (i = r.drag) === null || i === void 0 || i.call(r, l);
    }, o = function l(i) {
      var s;
      e.removeEventListener(document, "mousemove", a), e.removeEventListener(document, "mouseup", l), document.onselectstart = null, document.ondragstart = null, n = !1, (s = r.end) === null || s === void 0 || s.call(r, i);
    };
    e.addEventListener(t, "mousedown", function(l) {
      var i;
      n || (document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      }, e.addEventListener(document, "mousemove", a), e.addEventListener(document, "mouseup", o), n = !0, (i = r.start) === null || i === void 0 || i.call(r, l));
    });
  } }, { key: "getBoundingClientRect", value: function(t) {
    return t && vt(t) && t.nodeType === 1 ? t.getBoundingClientRect() : null;
  } }, { key: "hasClass", value: function(t, r) {
    return !!(t && vt(t) && ht(r) && t.nodeType === 1) && t.classList.contains(r.trim());
  } }, { key: "addClass", value: function(t, r) {
    if (t && vt(t) && ht(r) && t.nodeType === 1 && (r = r.trim(), !e.hasClass(t, r))) {
      var n = t.className;
      t.className = n ? n + " " + r : r;
    }
  } }, { key: "removeClass", value: function(t, r) {
    if (t && vt(t) && ht(r) && t.nodeType === 1 && typeof t.className == "string") {
      r = r.trim();
      for (var n = t.className.trim().split(" "), a = n.length - 1; a >= 0; a--) n[a] = n[a].trim(), n[a] && n[a] !== r || n.splice(a, 1);
      t.className = n.join(" ");
    }
  } }, { key: "toggleClass", value: function(t, r, n) {
    t && vt(t) && ht(r) && t.nodeType === 1 && t.classList.toggle(r, n);
  } }, { key: "replaceClass", value: function(t, r, n) {
    t && vt(t) && ht(r) && ht(n) && t.nodeType === 1 && (r = r.trim(), n = n.trim(), e.removeClass(t, r), e.addClass(t, n));
  } }, { key: "getScrollTop", value: function(t) {
    var r = "scrollTop" in t ? t.scrollTop : t.pageYOffset;
    return Math.max(r, 0);
  } }, { key: "setScrollTop", value: function(t, r) {
    "scrollTop" in t ? t.scrollTop = r : t.scrollTo(t.scrollX, r);
  } }, { key: "getRootScrollTop", value: function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  } }, { key: "setRootScrollTop", value: function(t) {
    e.setScrollTop(window, t), e.setScrollTop(document.body, t);
  } }, { key: "getElementTop", value: function(t, r) {
    if (e.isWindow(t)) return 0;
    var n = r ? e.getScrollTop(r) : e.getRootScrollTop();
    return t.getBoundingClientRect().top + n;
  } }, { key: "getVisibleHeight", value: function(t) {
    return e.isWindow(t) ? t.innerHeight : t.getBoundingClientRect().height;
  } }, { key: "isHidden", value: function(t) {
    if (!t) return !1;
    var r = window.getComputedStyle(t), n = r.display === "none", a = t.offsetParent === null && r.position !== "fixed";
    return n || a;
  } }, { key: "triggerEvent", value: function(t, r) {
    if ("createEvent" in document) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(r, !1, !0), t.dispatchEvent(n);
    }
  } }, { key: "calcAngle", value: function(t, r) {
    var n = t.getBoundingClientRect(), a = n.left + n.width / 2, o = n.top + n.height / 2, l = Math.abs(a - r.clientX), i = Math.abs(o - r.clientY), s = i / Math.sqrt(Math.pow(l, 2) + Math.pow(i, 2)), c = Math.acos(s), u = Math.floor(180 / (Math.PI / c));
    return r.clientX > a && r.clientY > o && (u = 180 - u), r.clientX == a && r.clientY > o && (u = 180), r.clientX > a && r.clientY == o && (u = 90), r.clientX < a && r.clientY > o && (u = 180 + u), r.clientX < a && r.clientY == o && (u = 270), r.clientX < a && r.clientY < o && (u = 360 - u), u;
  } }, { key: "querySelector", value: function(t, r) {
    return r ? r.querySelector(t) : document.querySelector(t);
  } }, { key: "createElement", value: function(t) {
    for (var r = document.createElement(t), n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    for (var l = 0; l < a.length; l++) a[l] && r.classList.add(a[l]);
    return r;
  } }, { key: "appendChild", value: function(t) {
    for (var r = 0; r < (arguments.length <= 1 ? 0 : arguments.length - 1); r++) t.appendChild(r + 1 < 1 || arguments.length <= r + 1 ? void 0 : arguments[r + 1]);
  } }, { key: "getWindow", value: function(t) {
    if (t.toString() !== "[object Window]") {
      var r = t.ownerDocument;
      return r && r.defaultView || window;
    }
    return t;
  } }, { key: "isElement", value: function(t) {
    return t instanceof this.getWindow(t).Element || t instanceof Element;
  } }, { key: "isHTMLElement", value: function(t) {
    return t instanceof this.getWindow(t).HTMLElement || t instanceof HTMLElement;
  } }, { key: "isShadowRoot", value: function(t) {
    return typeof ShadowRoot < "u" && (t instanceof this.getWindow(t).ShadowRoot || t instanceof ShadowRoot);
  } }, { key: "getWindowScroll", value: function(t) {
    var r = this.getWindow(t);
    return { scrollLeft: r.pageXOffset || 0, scrollTop: r.pageYOffset || 0 };
  } }]), e;
}(), Lf = Math.floor, Nf = "".replace, Vf = /\$([$&'`]|\d\d?|<[^>]*>)/g, Ff = /\$([$&'`]|\d\d?)/g, zf = function(e, t, r, n, a, o) {
  var l = r + e.length, i = n.length, s = Ff;
  return a !== void 0 && (a = Be(a), s = Vf), Nf.call(o, s, function(c, u) {
    var f;
    switch (u.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return t.slice(0, r);
      case "'":
        return t.slice(l);
      case "<":
        f = a[u.slice(1, -1)];
        break;
      default:
        var p = +u;
        if (p === 0) return c;
        if (p > i) {
          var d = Lf(p / 10);
          return d === 0 ? c : d <= i ? n[d - 1] === void 0 ? u.charAt(1) : n[d - 1] + u.charAt(1) : c;
        }
        f = n[p - 1];
    }
    return f === void 0 ? "" : f;
  });
}, Wf = Math.max, Gf = Math.min;
Ki("replace", 2, function(e, t, r, n) {
  var a = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, o = n.REPLACE_KEEPS_$0, l = a ? "$" : "$0";
  return [function(i, s) {
    var c = ze(this), u = i == null ? void 0 : i[e];
    return u !== void 0 ? u.call(i, c, s) : t.call(String(c), i, s);
  }, function(i, s) {
    if (!a && o || typeof s == "string" && s.indexOf(l) === -1) {
      var c = r(t, i, this, s);
      if (c.done) return c.value;
    }
    var u = ue(i), f = String(this), p = typeof s == "function";
    p || (s = String(s));
    var d = u.global;
    if (d) {
      var h = u.unicode;
      u.lastIndex = 0;
    }
    for (var g = []; ; ) {
      var v = $n(u, f);
      if (v === null || (g.push(v), !d)) break;
      String(v[0]) === "" && (u.lastIndex = Yi(f, ye(u.lastIndex), h));
    }
    for (var y, C = "", O = 0, S = 0; S < g.length; S++) {
      v = g[S];
      for (var E = String(v[0]), k = Wf(Gf(Ht(v.index), f.length), 0), M = [], H = 1; H < v.length; H++) M.push((y = v[H]) === void 0 ? y : String(y));
      var b = v.groups;
      if (p) {
        var x = [E].concat(M, k, f);
        b !== void 0 && x.push(b);
        var m = String(s.apply(void 0, x));
      } else m = zf(E, f, k, M, b, s);
      k >= O && (C += f.slice(O, k) + m, O = k + E.length);
    }
    return C + f.slice(O);
  }];
});
(function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "camelize", value: function(t) {
    return t.replace(/-(\w)/g, function(r, n) {
      return n ? n.toUpperCase() : "";
    });
  } }, { key: "capitalize", value: function(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  } }]), e;
})();
(function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "_clone", value: function() {
  } }]), e;
})();
var Zi = Y("isConcatSpreadable"), Kf = Pr >= 51 || !F(function() {
  var e = [];
  return e[Zi] = !1, e.concat()[0] !== e;
}), Uf = na("concat"), qf = function(e) {
  if (!re(e)) return !1;
  var t = e[Zi];
  return t !== void 0 ? !!t : Et(e);
};
le({ target: "Array", proto: !0, forced: !Kf || !Uf }, { concat: function(e) {
  var t, r, n, a, o, l = Be(this), i = Ur(l, 0), s = 0;
  for (t = -1, n = arguments.length; t < n; t++) if (qf(o = t === -1 ? l : arguments[t])) {
    if (s + (a = ye(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    for (r = 0; r < a; r++, s++) r in o && Tt(i, s, o[r]);
  } else {
    if (s >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    Tt(i, s++, o);
  }
  return i.length = s, i;
} });
var fn, dr = function(e, t, r) {
  if (oa(e), t === void 0) return e;
  switch (r) {
    case 0:
      return function() {
        return e.call(t);
      };
    case 1:
      return function(n) {
        return e.call(t, n);
      };
    case 2:
      return function(n, a) {
        return e.call(t, n, a);
      };
    case 3:
      return function(n, a, o) {
        return e.call(t, n, a, o);
      };
  }
  return function() {
    return e.apply(t, arguments);
  };
}, ko = [].push, $o = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, a = e == 4, o = e == 6, l = e == 7, i = e == 5 || o;
  return function(s, c, u, f) {
    for (var p, d, h = Be(s), g = Wr(h), v = dr(c, u, 3), y = ye(g.length), C = 0, O = f || Ur, S = t ? O(s, y) : r || l ? O(s, 0) : void 0; y > C; C++) if ((i || C in g) && (d = v(p = g[C], C, h), e)) if (t) S[C] = d;
    else if (d) switch (e) {
      case 3:
        return !0;
      case 5:
        return p;
      case 6:
        return C;
      case 2:
        ko.call(S, p);
    }
    else switch (e) {
      case 4:
        return !1;
      case 7:
        ko.call(S, p);
    }
    return o ? -1 : n || a ? a : S;
  };
}, Qi = { find: $o(5), findIndex: $o(6) }, Yf = be ? Object.defineProperties : function(e, t) {
  ue(e);
  for (var r, n = ia(t), a = n.length, o = 0; a > o; ) De.f(e, r = n[o++], t[r]);
  return e;
}, Xf = Kr("document", "documentElement"), es = ta("IE_PROTO"), dn = function() {
}, Eo = function(e) {
  return "<script>" + e + "<\/script>";
}, xr = function() {
  try {
    fn = document.domain && new ActiveXObject("htmlfile");
  } catch {
  }
  var e, t;
  xr = fn ? function(n) {
    n.write(Eo("")), n.close();
    var a = n.parentWindow.Object;
    return n = null, a;
  }(fn) : ((t = Mi("iframe")).style.display = "none", Xf.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write(Eo("document.F=Object")), e.close(), e.F);
  for (var r = Rr.length; r--; ) delete xr.prototype[Rr[r]];
  return xr();
};
Gr[es] = !0;
var sa = Object.create || function(e, t) {
  var r;
  return e !== null ? (dn.prototype = ue(e), r = new dn(), dn.prototype = null, r[es] = e) : r = xr(), t === void 0 ? r : Yf(r, t);
}, Tn = Y("unscopables"), Rn = Array.prototype;
Rn[Tn] == null && De.f(Rn, Tn, { configurable: !0, value: sa(null) });
var mt = function(e) {
  Rn[Tn][e] = !0;
}, Jf = Qi.find, To = !0, Zf = Dt("find");
"find" in [] && Array(1).find(function() {
  To = !1;
}), le({ target: "Array", proto: !0, forced: To || !Zf }, { find: function(e) {
  return Jf(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), mt("find");
var Qf = Qi.findIndex, Ro = !0, ed = Dt("findIndex");
"findIndex" in [] && Array(1).findIndex(function() {
  Ro = !1;
}), le({ target: "Array", proto: !0, forced: Ro || !ed }, { findIndex: function(e) {
  return Qf(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), mt("findIndex");
var ts = function(e, t, r, n, a, o, l, i) {
  for (var s, c = a, u = 0, f = !!l && dr(l, i, 3); u < n; ) {
    if (u in r) {
      if (s = f ? f(r[u], u, t) : r[u], o > 0 && Et(s)) c = ts(e, t, s, ye(s.length), c, o - 1) - 1;
      else {
        if (c >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
        e[c] = s;
      }
      c++;
    }
    u++;
  }
  return c;
}, td = ts;
le({ target: "Array", proto: !0 }, { flat: function() {
  var e = arguments.length ? arguments[0] : void 0, t = Be(this), r = ye(t.length), n = Ur(t, 0);
  return n.length = td(n, t, t, r, 0, e === void 0 ? 1 : Ht(e)), n;
} });
var Mn = function(e) {
  var t = e.return;
  if (t !== void 0) return ue(t.call(e)).value;
}, rd = function(e, t, r, n) {
  try {
    return n ? t(ue(r)[0], r[1]) : t(r);
  } catch (a) {
    throw Mn(e), a;
  }
}, Mt = {}, nd = Y("iterator"), ad = Array.prototype, rs = function(e) {
  return e !== void 0 && (Mt.Array === e || ad[nd] === e);
}, od = Y("iterator"), ns = function(e) {
  if (e != null) return e[od] || e["@@iterator"] || Mt[Vi(e)];
}, as = Y("iterator"), os = !1;
try {
  var id = 0, Mo = { next: function() {
    return { done: !!id++ };
  }, return: function() {
    os = !0;
  } };
  Mo[as] = function() {
    return this;
  }, Array.from(Mo, function() {
    throw 2;
  });
} catch {
}
var is = function(e, t) {
  if (!os) return !1;
  var r = !1;
  try {
    var n = {};
    n[as] = function() {
      return { next: function() {
        return { done: r = !0 };
      } };
    }, e(n);
  } catch {
  }
  return r;
}, sd = !is(function(e) {
  Array.from(e);
});
le({ target: "Array", stat: !0, forced: sd }, { from: function(e) {
  var t, r, n, a, o, l, i = Be(e), s = typeof this == "function" ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, f = u !== void 0, p = ns(i), d = 0;
  if (f && (u = dr(u, c > 2 ? arguments[2] : void 0, 2)), p == null || s == Array && rs(p)) for (r = new s(t = ye(i.length)); t > d; d++) l = f ? u(i[d], d) : i[d], Tt(r, d, l);
  else for (o = (a = p.call(i)).next, r = new s(); !(n = o.call(a)).done; d++) l = f ? rd(a, u, [n.value, d], !0) : n.value, Tt(r, d, l);
  return r.length = d, r;
} });
var ld = function(e) {
  return function(t, r, n, a) {
    oa(r);
    var o = Be(t), l = Wr(o), i = ye(o.length), s = e ? i - 1 : 0, c = e ? -1 : 1;
    if (n < 2) for (; ; ) {
      if (s in l) {
        a = l[s], s += c;
        break;
      }
      if (s += c, e ? s < 0 : i <= s) throw TypeError("Reduce of empty array with no initial value");
    }
    for (; e ? s >= 0 : i > s; s += c) s in l && (a = r(a, l[s], s, o));
    return a;
  };
}, ud = { left: ld(!1) }, cd = je(te.process) == "process", fd = ud.left, dd = ra("reduce"), pd = Dt("reduce", { 1: 0 });
le({ target: "Array", proto: !0, forced: !dd || !pd || !cd && Pr > 79 && Pr < 83 }, { reduce: function(e) {
  return fd(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} }), mt("flat");
var Ye, Po, jo, hd = !F(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), ss = Xn(function(e) {
  var t = De.f, r = ea("meta"), n = 0, a = Object.isExtensible || function() {
    return !0;
  }, o = function(i) {
    t(i, r, { value: { objectID: "O" + ++n, weakData: {} } });
  }, l = e.exports = { REQUIRED: !1, fastKey: function(i, s) {
    if (!re(i)) return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
    if (!Q(i, r)) {
      if (!a(i)) return "F";
      if (!s) return "E";
      o(i);
    }
    return i[r].objectID;
  }, getWeakData: function(i, s) {
    if (!Q(i, r)) {
      if (!a(i)) return !0;
      if (!s) return !1;
      o(i);
    }
    return i[r].weakData;
  }, onFreeze: function(i) {
    return hd && l.REQUIRED && a(i) && !Q(i, r) && o(i), i;
  } };
  Gr[r] = !0;
}), Wt = function(e, t) {
  this.stopped = e, this.result = t;
}, Io = function(e, t, r) {
  var n, a, o, l, i, s, c, u = r && r.that, f = !(!r || !r.AS_ENTRIES), p = !(!r || !r.IS_ITERATOR), d = !(!r || !r.INTERRUPTED), h = dr(t, u, 1 + f + d), g = function(y) {
    return n && Mn(n), new Wt(!0, y);
  }, v = function(y) {
    return f ? (ue(y), d ? h(y[0], y[1], g) : h(y[0], y[1])) : d ? h(y, g) : h(y);
  };
  if (p) n = e;
  else {
    if (typeof (a = ns(e)) != "function") throw TypeError("Target is not iterable");
    if (rs(a)) {
      for (o = 0, l = ye(e.length); l > o; o++) if ((i = v(e[o])) && i instanceof Wt) return i;
      return new Wt(!1);
    }
    n = a.call(e);
  }
  for (s = n.next; !(c = s.call(n)).done; ) {
    try {
      i = v(c.value);
    } catch (y) {
      throw Mn(n), y;
    }
    if (typeof i == "object" && i && i instanceof Wt) return i;
  }
  return new Wt(!1);
}, Ho = function(e, t, r) {
  if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
  return e;
}, vd = De.f, Do = Y("toStringTag"), Pn = function(e, t, r) {
  e && !Q(e = r ? e : e.prototype, Do) && vd(e, Do, { configurable: !0, value: t });
}, Hr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, t = !1, r = {};
  try {
    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array;
  } catch {
  }
  return function(n, a) {
    return ue(n), function(o) {
      if (!re(o) && o !== null) throw TypeError("Can't set " + String(o) + " as a prototype");
    }(a), t ? e.call(n, a) : n.__proto__ = a, n;
  };
}() : void 0), Bo = function(e, t, r) {
  for (var n in t) Ge(e, n, t[n], r);
  return e;
}, gd = !F(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Lo = ta("IE_PROTO"), yd = Object.prototype, Dr = gd ? Object.getPrototypeOf : function(e) {
  return e = Be(e), Q(e, Lo) ? e[Lo] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? yd : null;
}, pn = Y("iterator"), ls = !1;
[].keys && ("next" in (jo = [].keys()) ? (Po = Dr(Dr(jo))) !== Object.prototype && (Ye = Po) : ls = !0), (Ye == null || F(function() {
  var e = {};
  return Ye[pn].call(e) !== e;
})) && (Ye = {}), Q(Ye, pn) || _e(Ye, pn, function() {
  return this;
});
var la = { IteratorPrototype: Ye, BUGGY_SAFARI_ITERATORS: ls }, bd = la.IteratorPrototype, md = function() {
  return this;
}, hn = la.IteratorPrototype, wr = la.BUGGY_SAFARI_ITERATORS, Gt = Y("iterator"), _d = function() {
  return this;
}, ua = function(e, t, r, n, a, o, l) {
  (function(y, C, O) {
    var S = C + " Iterator";
    y.prototype = sa(bd, { next: zr(1, O) }), Pn(y, S, !1), Mt[S] = md;
  })(r, t, n);
  var i, s, c, u = function(y) {
    if (y === a && g) return g;
    if (!wr && y in d) return d[y];
    switch (y) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new r(this, y);
        };
    }
    return function() {
      return new r(this);
    };
  }, f = t + " Iterator", p = !1, d = e.prototype, h = d[Gt] || d["@@iterator"] || a && d[a], g = !wr && h || u(a), v = t == "Array" && d.entries || h;
  if (v && (i = Dr(v.call(new e())), hn !== Object.prototype && i.next && (Dr(i) !== hn && (Hr ? Hr(i, hn) : typeof i[Gt] != "function" && _e(i, Gt, _d)), Pn(i, f, !0))), a == "values" && h && h.name !== "values" && (p = !0, g = function() {
    return h.call(this);
  }), d[Gt] !== g && _e(d, Gt, g), Mt[t] = g, a) if (s = { values: u("values"), keys: o ? g : u("keys"), entries: u("entries") }, l) for (c in s) (wr || p || !(c in d)) && Ge(d, c, s[c]);
  else le({ target: t, proto: !0, forced: wr || p }, s);
  return s;
}, No = Y("species"), Cd = De.f, Vo = ss.fastKey, Fo = We.set, vn = We.getterFor;
(function(e, t, r) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, o = n ? "set" : "add", l = te[e], i = l && l.prototype, s = l, c = {}, u = function(v) {
    var y = i[v];
    Ge(i, v, v == "add" ? function(C) {
      return y.call(this, C === 0 ? 0 : C), this;
    } : v == "delete" ? function(C) {
      return !(a && !re(C)) && y.call(this, C === 0 ? 0 : C);
    } : v == "get" ? function(C) {
      return a && !re(C) ? void 0 : y.call(this, C === 0 ? 0 : C);
    } : v == "has" ? function(C) {
      return !(a && !re(C)) && y.call(this, C === 0 ? 0 : C);
    } : function(C, O) {
      return y.call(this, C === 0 ? 0 : C, O), this;
    });
  };
  if (kn(e, typeof l != "function" || !(a || i.forEach && !F(function() {
    new l().entries().next();
  })))) s = r.getConstructor(t, e, n, o), ss.REQUIRED = !0;
  else if (kn(e, !0)) {
    var f = new s(), p = f[o](a ? {} : -0, 1) != f, d = F(function() {
      f.has(1);
    }), h = is(function(v) {
      new l(v);
    }), g = !a && F(function() {
      for (var v = new l(), y = 5; y--; ) v[o](y, y);
      return !v.has(-0);
    });
    h || ((s = t(function(v, y) {
      Ho(v, s, e);
      var C = function(O, S, E) {
        var k, M;
        return Hr && typeof (k = S.constructor) == "function" && k !== E && re(M = k.prototype) && M !== E.prototype && Hr(O, M), O;
      }(new l(), v, s);
      return y != null && Io(y, C[o], { that: C, AS_ENTRIES: n }), C;
    })).prototype = i, i.constructor = s), (d || g) && (u("delete"), u("has"), n && u("get")), (g || p) && u(o), a && i.clear && delete i.clear;
  }
  c[e] = s, le({ global: !0, forced: s != l }, c), Pn(s, e), a || r.setStrong(s, e, n);
})("Set", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, { getConstructor: function(e, t, r, n) {
  var a = e(function(s, c) {
    Ho(s, a, t), Fo(s, { type: t, index: sa(null), first: void 0, last: void 0, size: 0 }), be || (s.size = 0), c != null && Io(c, s[n], { that: s, AS_ENTRIES: r });
  }), o = vn(t), l = function(s, c, u) {
    var f, p, d = o(s), h = i(s, c);
    return h ? h.value = u : (d.last = h = { index: p = Vo(c, !0), key: c, value: u, previous: f = d.last, next: void 0, removed: !1 }, d.first || (d.first = h), f && (f.next = h), be ? d.size++ : s.size++, p !== "F" && (d.index[p] = h)), s;
  }, i = function(s, c) {
    var u, f = o(s), p = Vo(c);
    if (p !== "F") return f.index[p];
    for (u = f.first; u; u = u.next) if (u.key == c) return u;
  };
  return Bo(a.prototype, { clear: function() {
    for (var s = o(this), c = s.index, u = s.first; u; ) u.removed = !0, u.previous && (u.previous = u.previous.next = void 0), delete c[u.index], u = u.next;
    s.first = s.last = void 0, be ? s.size = 0 : this.size = 0;
  }, delete: function(s) {
    var c = this, u = o(c), f = i(c, s);
    if (f) {
      var p = f.next, d = f.previous;
      delete u.index[f.index], f.removed = !0, d && (d.next = p), p && (p.previous = d), u.first == f && (u.first = p), u.last == f && (u.last = d), be ? u.size-- : c.size--;
    }
    return !!f;
  }, forEach: function(s) {
    for (var c, u = o(this), f = dr(s, arguments.length > 1 ? arguments[1] : void 0, 3); c = c ? c.next : u.first; ) for (f(c.value, c.key, this); c && c.removed; ) c = c.previous;
  }, has: function(s) {
    return !!i(this, s);
  } }), Bo(a.prototype, r ? { get: function(s) {
    var c = i(this, s);
    return c && c.value;
  }, set: function(s, c) {
    return l(this, s === 0 ? 0 : s, c);
  } } : { add: function(s) {
    return l(this, s = s === 0 ? 0 : s, s);
  } }), be && Cd(a.prototype, "size", { get: function() {
    return o(this).size;
  } }), a;
}, setStrong: function(e, t, r) {
  var n = t + " Iterator", a = vn(t), o = vn(n);
  ua(e, t, function(l, i) {
    Fo(this, { type: n, target: l, state: a(l), kind: i, last: void 0 });
  }, function() {
    for (var l = o(this), i = l.kind, s = l.last; s && s.removed; ) s = s.previous;
    return l.target && (l.last = s = s ? s.next : l.state.first) ? i == "keys" ? { value: s.key, done: !1 } : i == "values" ? { value: s.value, done: !1 } : { value: [s.key, s.value], done: !1 } : (l.target = void 0, { value: void 0, done: !0 });
  }, r ? "entries" : "values", !r, !0), function(l) {
    var i = Kr(l), s = De.f;
    be && i && !i[No] && s(i, No, { configurable: !0, get: function() {
      return this;
    } });
  }(t);
} });
var wd = qi.charAt, Sd = We.set, xd = We.getterFor("String Iterator");
ua(String, "String", function(e) {
  Sd(this, { type: "String Iterator", string: String(e), index: 0 });
}, function() {
  var e, t = xd(this), r = t.string, n = t.index;
  return n >= r.length ? { value: void 0, done: !0 } : (e = wd(r, n), t.index += e.length, { value: e, done: !1 });
});
var zo = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, Od = We.set, Ad = We.getterFor("Array Iterator"), Yt = ua(Array, "Array", function(e, t) {
  Od(this, { type: "Array Iterator", target: It(e), index: 0, kind: t });
}, function() {
  var e = Ad(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : r == "keys" ? { value: n, done: !1 } : r == "values" ? { value: t[n], done: !1 } : { value: [n, t[n]], done: !1 };
}, "values");
Mt.Arguments = Mt.Array, mt("keys"), mt("values"), mt("entries");
var gn = Y("iterator"), Wo = Y("toStringTag"), yn = Yt.values;
for (var bn in zo) {
  var Go = te[bn], Pe = Go && Go.prototype;
  if (Pe) {
    if (Pe[gn] !== yn) try {
      _e(Pe, gn, yn);
    } catch {
      Pe[gn] = yn;
    }
    if (Pe[Wo] || _e(Pe, Wo, bn), zo[bn]) {
      for (var gt in Yt) if (Pe[gt] !== Yt[gt]) try {
        _e(Pe, gt, Yt[gt]);
      } catch {
        Pe[gt] = Yt[gt];
      }
    }
  }
}
(function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "deduplicate", value: function(t) {
    return Array.from(new Set(t));
  } }, { key: "flat", value: function(t) {
    return t.reduce(function(r, n) {
      var a = Array.isArray(n) ? e.flat(n) : n;
      return r.concat(a);
    }, []);
  } }, { key: "find", value: function(t, r) {
    return t.find(r);
  } }, { key: "findIndex", value: function(t, r) {
    return t.findIndex(r);
  } }]), e;
})();
(function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "today", value: function() {
    return /* @__PURE__ */ new Date();
  } }]), e;
})();
(function() {
  function e() {
    it(this, e);
  }
  return st(e, null, [{ key: "range", value: function(t, r, n) {
    return Math.min(Math.max(t, r), n);
  } }, { key: "clamp", value: function(t, r, n) {
    return r < n ? t < r ? r : t > n ? n : t : t < n ? n : t > r ? r : t;
  } }]), e;
})();
var us = typeof global == "object" && global && global.Object === Object && global, kd = typeof self == "object" && self && self.Object === Object && self, Bt = us || kd || Function("return this")(), Br = Bt.Symbol, cs = Object.prototype, $d = cs.hasOwnProperty, Ed = cs.toString, Kt = Br ? Br.toStringTag : void 0;
function Td(e) {
  var t = $d.call(e, Kt), r = e[Kt];
  try {
    e[Kt] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ed.call(e);
  return n && (t ? e[Kt] = r : delete e[Kt]), a;
}
var Rd = Object.prototype, Md = Rd.toString;
function Pd(e) {
  return Md.call(e);
}
var jd = "[object Null]", Id = "[object Undefined]", Ko = Br ? Br.toStringTag : void 0;
function qr(e) {
  return e == null ? e === void 0 ? Id : jd : Ko && Ko in Object(e) ? Td(e) : Pd(e);
}
function pr(e) {
  return e != null && typeof e == "object";
}
var jn = Array.isArray;
function lt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function fs(e) {
  return e;
}
var Hd = "[object AsyncFunction]", Dd = "[object Function]", Bd = "[object GeneratorFunction]", Ld = "[object Proxy]";
function ca(e) {
  if (!lt(e))
    return !1;
  var t = qr(e);
  return t == Dd || t == Bd || t == Hd || t == Ld;
}
var mn = Bt["__core-js_shared__"], Uo = function() {
  var e = /[^.]+$/.exec(mn && mn.keys && mn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nd(e) {
  return !!Uo && Uo in e;
}
var Vd = Function.prototype, Fd = Vd.toString;
function zd(e) {
  if (e != null) {
    try {
      return Fd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wd = /[\\^$.*+?()[\]{}|]/g, Gd = /^\[object .+?Constructor\]$/, Kd = Function.prototype, Ud = Object.prototype, qd = Kd.toString, Yd = Ud.hasOwnProperty, Xd = RegExp(
  "^" + qd.call(Yd).replace(Wd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jd(e) {
  if (!lt(e) || Nd(e))
    return !1;
  var t = ca(e) ? Xd : Gd;
  return t.test(zd(e));
}
function Zd(e, t) {
  return e == null ? void 0 : e[t];
}
function fa(e, t) {
  var r = Zd(e, t);
  return Jd(r) ? r : void 0;
}
var qo = Object.create, Qd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!lt(t))
      return {};
    if (qo)
      return qo(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function ep(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function tp(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var rp = 800, np = 16, ap = Date.now;
function op(e) {
  var t = 0, r = 0;
  return function() {
    var n = ap(), a = np - (n - r);
    if (r = n, a > 0) {
      if (++t >= rp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ip(e) {
  return function() {
    return e;
  };
}
var Lr = function() {
  try {
    var e = fa(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), sp = Lr ? function(e, t) {
  return Lr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ip(t),
    writable: !0
  });
} : fs, lp = op(sp), up = 9007199254740991, cp = /^(?:0|[1-9]\d*)$/;
function ds(e, t) {
  var r = typeof e;
  return t = t ?? up, !!t && (r == "number" || r != "symbol" && cp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function da(e, t, r) {
  t == "__proto__" && Lr ? Lr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Yr(e, t) {
  return e === t || e !== e && t !== t;
}
var fp = Object.prototype, dp = fp.hasOwnProperty;
function pp(e, t, r) {
  var n = e[t];
  (!(dp.call(e, t) && Yr(n, r)) || r === void 0 && !(t in e)) && da(e, t, r);
}
function hp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var i = t[o], s = void 0;
    s === void 0 && (s = e[i]), a ? da(r, i, s) : pp(r, i, s);
  }
  return r;
}
var Yo = Math.max;
function vp(e, t, r) {
  return t = Yo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = Yo(n.length - t, 0), l = Array(o); ++a < o; )
      l[a] = n[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = n[a];
    return i[t] = r(l), ep(e, this, i);
  };
}
function gp(e, t) {
  return lp(vp(e, t, fs), e + "");
}
var yp = 9007199254740991;
function ps(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yp;
}
function pa(e) {
  return e != null && ps(e.length) && !ca(e);
}
function bp(e, t, r) {
  if (!lt(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? pa(r) && ds(t, r.length) : n == "string" && t in r) ? Yr(r[t], e) : !1;
}
function mp(e) {
  return gp(function(t, r) {
    var n = -1, a = r.length, o = a > 1 ? r[a - 1] : void 0, l = a > 2 ? r[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && bp(r[0], r[1], l) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++n < a; ) {
      var i = r[n];
      i && e(t, i, n, o);
    }
    return t;
  });
}
var _p = Object.prototype;
function hs(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _p;
  return e === r;
}
function Cp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var wp = "[object Arguments]";
function Xo(e) {
  return pr(e) && qr(e) == wp;
}
var vs = Object.prototype, Sp = vs.hasOwnProperty, xp = vs.propertyIsEnumerable, In = Xo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xo : function(e) {
  return pr(e) && Sp.call(e, "callee") && !xp.call(e, "callee");
};
function Op() {
  return !1;
}
var gs = typeof exports == "object" && exports && !exports.nodeType && exports, Jo = gs && typeof module == "object" && module && !module.nodeType && module, Ap = Jo && Jo.exports === gs, Zo = Ap ? Bt.Buffer : void 0, kp = Zo ? Zo.isBuffer : void 0, ys = kp || Op, $p = "[object Arguments]", Ep = "[object Array]", Tp = "[object Boolean]", Rp = "[object Date]", Mp = "[object Error]", Pp = "[object Function]", jp = "[object Map]", Ip = "[object Number]", Hp = "[object Object]", Dp = "[object RegExp]", Bp = "[object Set]", Lp = "[object String]", Np = "[object WeakMap]", Vp = "[object ArrayBuffer]", Fp = "[object DataView]", zp = "[object Float32Array]", Wp = "[object Float64Array]", Gp = "[object Int8Array]", Kp = "[object Int16Array]", Up = "[object Int32Array]", qp = "[object Uint8Array]", Yp = "[object Uint8ClampedArray]", Xp = "[object Uint16Array]", Jp = "[object Uint32Array]", N = {};
N[zp] = N[Wp] = N[Gp] = N[Kp] = N[Up] = N[qp] = N[Yp] = N[Xp] = N[Jp] = !0;
N[$p] = N[Ep] = N[Vp] = N[Tp] = N[Fp] = N[Rp] = N[Mp] = N[Pp] = N[jp] = N[Ip] = N[Hp] = N[Dp] = N[Bp] = N[Lp] = N[Np] = !1;
function Zp(e) {
  return pr(e) && ps(e.length) && !!N[qr(e)];
}
function Qp(e) {
  return function(t) {
    return e(t);
  };
}
var bs = typeof exports == "object" && exports && !exports.nodeType && exports, rr = bs && typeof module == "object" && module && !module.nodeType && module, eh = rr && rr.exports === bs, _n = eh && us.process, Qo = function() {
  try {
    var e = rr && rr.require && rr.require("util").types;
    return e || _n && _n.binding && _n.binding("util");
  } catch {
  }
}(), ei = Qo && Qo.isTypedArray, ms = ei ? Qp(ei) : Zp;
function th(e, t) {
  var r = jn(e), n = !r && In(e), a = !r && !n && ys(e), o = !r && !n && !a && ms(e), l = r || n || a || o, i = l ? Cp(e.length, String) : [], s = i.length;
  for (var c in e)
    l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ds(c, s)) || i.push(c);
  return i;
}
function rh(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function nh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ah = Object.prototype, oh = ah.hasOwnProperty;
function ih(e) {
  if (!lt(e))
    return nh(e);
  var t = hs(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !oh.call(e, n)) || r.push(n);
  return r;
}
function _s(e) {
  return pa(e) ? th(e) : ih(e);
}
var lr = fa(Object, "create");
function sh() {
  this.__data__ = lr ? lr(null) : {}, this.size = 0;
}
function lh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var uh = "__lodash_hash_undefined__", ch = Object.prototype, fh = ch.hasOwnProperty;
function dh(e) {
  var t = this.__data__;
  if (lr) {
    var r = t[e];
    return r === uh ? void 0 : r;
  }
  return fh.call(t, e) ? t[e] : void 0;
}
var ph = Object.prototype, hh = ph.hasOwnProperty;
function vh(e) {
  var t = this.__data__;
  return lr ? t[e] !== void 0 : hh.call(t, e);
}
var gh = "__lodash_hash_undefined__";
function yh(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lr && t === void 0 ? gh : t, this;
}
function tt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
tt.prototype.clear = sh;
tt.prototype.delete = lh;
tt.prototype.get = dh;
tt.prototype.has = vh;
tt.prototype.set = yh;
function bh() {
  this.__data__ = [], this.size = 0;
}
function Xr(e, t) {
  for (var r = e.length; r--; )
    if (Yr(e[r][0], t))
      return r;
  return -1;
}
var mh = Array.prototype, _h = mh.splice;
function Ch(e) {
  var t = this.__data__, r = Xr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : _h.call(t, r, 1), --this.size, !0;
}
function wh(e) {
  var t = this.__data__, r = Xr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Sh(e) {
  return Xr(this.__data__, e) > -1;
}
function xh(e, t) {
  var r = this.__data__, n = Xr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Le.prototype.clear = bh;
Le.prototype.delete = Ch;
Le.prototype.get = wh;
Le.prototype.has = Sh;
Le.prototype.set = xh;
var Cs = fa(Bt, "Map");
function Oh() {
  this.size = 0, this.__data__ = {
    hash: new tt(),
    map: new (Cs || Le)(),
    string: new tt()
  };
}
function Ah(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Jr(e, t) {
  var r = e.__data__;
  return Ah(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function kh(e) {
  var t = Jr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function $h(e) {
  return Jr(this, e).get(e);
}
function Eh(e) {
  return Jr(this, e).has(e);
}
function Th(e, t) {
  var r = Jr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Lt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Lt.prototype.clear = Oh;
Lt.prototype.delete = kh;
Lt.prototype.get = $h;
Lt.prototype.has = Eh;
Lt.prototype.set = Th;
var ws = rh(Object.getPrototypeOf, Object), Rh = "[object Object]", Mh = Function.prototype, Ph = Object.prototype, Ss = Mh.toString, jh = Ph.hasOwnProperty, Ih = Ss.call(Object);
function Hh(e) {
  if (!pr(e) || qr(e) != Rh)
    return !1;
  var t = ws(e);
  if (t === null)
    return !0;
  var r = jh.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ss.call(r) == Ih;
}
function Dh() {
  this.__data__ = new Le(), this.size = 0;
}
function Bh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Lh(e) {
  return this.__data__.get(e);
}
function Nh(e) {
  return this.__data__.has(e);
}
var Vh = 200;
function Fh(e, t) {
  var r = this.__data__;
  if (r instanceof Le) {
    var n = r.__data__;
    if (!Cs || n.length < Vh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Lt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Nt(e) {
  var t = this.__data__ = new Le(e);
  this.size = t.size;
}
Nt.prototype.clear = Dh;
Nt.prototype.delete = Bh;
Nt.prototype.get = Lh;
Nt.prototype.has = Nh;
Nt.prototype.set = Fh;
var xs = typeof exports == "object" && exports && !exports.nodeType && exports, ti = xs && typeof module == "object" && module && !module.nodeType && module, zh = ti && ti.exports === xs, ri = zh ? Bt.Buffer : void 0;
ri && ri.allocUnsafe;
function Wh(e, t) {
  return e.slice();
}
var ni = Bt.Uint8Array;
function Gh(e) {
  var t = new e.constructor(e.byteLength);
  return new ni(t).set(new ni(e)), t;
}
function Kh(e, t) {
  var r = Gh(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Uh(e) {
  return typeof e.constructor == "function" && !hs(e) ? Qd(ws(e)) : {};
}
function qh(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), l = n(t), i = l.length; i--; ) {
      var s = l[++a];
      if (r(o[s], s, o) === !1)
        break;
    }
    return t;
  };
}
var Yh = qh();
function Hn(e, t, r) {
  (r !== void 0 && !Yr(e[t], r) || r === void 0 && !(t in e)) && da(e, t, r);
}
function Xh(e) {
  return pr(e) && pa(e);
}
function Dn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Jh(e) {
  return hp(e, _s(e));
}
function Zh(e, t, r, n, a, o, l) {
  var i = Dn(e, r), s = Dn(t, r), c = l.get(s);
  if (c) {
    Hn(e, r, c);
    return;
  }
  var u = o ? o(i, s, r + "", e, t, l) : void 0, f = u === void 0;
  if (f) {
    var p = jn(s), d = !p && ys(s), h = !p && !d && ms(s);
    u = s, p || d || h ? jn(i) ? u = i : Xh(i) ? u = tp(i) : d ? (f = !1, u = Wh(s)) : h ? (f = !1, u = Kh(s)) : u = [] : Hh(s) || In(s) ? (u = i, In(i) ? u = Jh(i) : (!lt(i) || ca(i)) && (u = Uh(s))) : f = !1;
  }
  f && (l.set(s, u), a(u, s, n, o, l), l.delete(s)), Hn(e, r, u);
}
function Os(e, t, r, n, a) {
  e !== t && Yh(t, function(o, l) {
    if (a || (a = new Nt()), lt(o))
      Zh(e, t, l, r, Os, n, a);
    else {
      var i = n ? n(Dn(e, l), o, l + "", e, t, a) : void 0;
      i === void 0 && (i = o), Hn(e, l, i);
    }
  }, _s);
}
var Zr = mp(function(e, t, r) {
  Os(e, t, r);
}), Qh = Object.defineProperty, ev = (e, t, r) => t in e ? Qh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, oe = (e, t, r) => (ev(e, typeof t != "symbol" ? t + "" : t, r), r);
const X = (e) => Math.round(e * 100) / 100;
class U {
  constructor(t) {
    oe(this, "instance"), oe(this, "alphaValue", 0), oe(this, "redValue", 0), oe(this, "greenValue", 0), oe(this, "blueValue", 0), oe(this, "hueValue", 0), oe(this, "saturationValue", 0), oe(this, "brightnessValue", 0), oe(this, "hslSaturationValue", 0), oe(this, "lightnessValue", 0), oe(this, "initAlpha", () => {
      const r = this.instance.getAlpha();
      this.alphaValue = Math.min(1, r) * 100;
    }), oe(this, "initLightness", () => {
      const { s: r, l: n } = this.instance.toHsl();
      this.hslSaturationValue = X(r), this.lightnessValue = X(n);
    }), oe(this, "initRgb", () => {
      const { r, g: n, b: a } = this.instance.toRgb();
      this.redValue = X(r), this.greenValue = X(n), this.blueValue = X(a);
    }), oe(this, "initHsb", () => {
      const { h: r, s: n, v: a } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(r)), this.saturationValue = X(n), this.brightnessValue = X(a);
    }), oe(this, "toHexString", () => this.instance.toHexString()), oe(this, "toRgbString", () => this.instance.toRgbString()), this.instance = w(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
  }
  toString(t) {
    return this.instance.toString(t);
  }
  get hex() {
    return this.instance.toHex();
  }
  set hex(t) {
    this.instance = w(t), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
  }
  // 色调
  set hue(t) {
    this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = w({
      h: X(t),
      s: this.saturation,
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.hueValue = X(t);
  }
  get hue() {
    return this.hueValue;
  }
  // 饱和度
  set saturation(t) {
    this.instance = w({
      h: this.hue,
      s: X(t),
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.saturationValue = X(t);
  }
  get saturation() {
    return this.saturationValue;
  }
  // 明度
  set brightness(t) {
    this.instance = w({
      h: this.hue,
      s: this.saturation,
      v: X(t),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.brightnessValue = X(t);
  }
  get brightness() {
    return this.brightnessValue;
  }
  // 亮度
  set lightness(t) {
    this.instance = w({
      h: this.hue,
      s: this.hslSaturationValue,
      l: X(t),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initHsb(), this.lightnessValue = X(t);
  }
  get lightness() {
    return this.lightnessValue;
  }
  // red
  set red(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      r: X(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.redValue = X(t);
  }
  get red() {
    return this.redValue;
  }
  // green
  set green(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      g: X(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.greenValue = X(t);
  }
  get green() {
    return this.greenValue;
  }
  // blue
  set blue(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      b: X(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.blueValue = X(t);
  }
  get blue() {
    return this.blueValue;
  }
  // alpha
  set alpha(t) {
    this.instance.setAlpha(t / 100), this.alphaValue = t;
  }
  get alpha() {
    return this.alphaValue;
  }
  get RGB() {
    return [this.red, this.green, this.blue, this.alpha / 100];
  }
  get HSB() {
    return [this.hue, this.saturation, this.brightness, this.alpha / 100];
  }
  get HSL() {
    return [this.hue, this.hslSaturationValue, this.lightness, this.alpha / 100];
  }
}
function ai(e, t, r, n) {
  return `rgba(${[e, t, r, n / 100].join(",")})`;
}
const Cn = (e, t, r) => t < r ? e < t ? t : e > r ? r : e : e < r ? r : e > t ? t : e, ha = "color-history", va = 8, Se = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, tv = q({
  name: "Alpha",
  props: {
    color: R.instanceOf(U),
    size: R.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = V(null), n = V(null);
    let a = e.color || new U();
    const o = Ae({
      red: a.red,
      green: a.green,
      blue: a.blue,
      alpha: a.alpha
    });
    Ie(
      () => e.color,
      (f) => {
        f && (a = f, Zr(o, {
          red: f.red,
          green: f.green,
          blue: f.blue,
          alpha: f.alpha
        }));
      },
      { deep: !0 }
    );
    const l = D(() => {
      const f = ai(o.red, o.green, o.blue, 0), p = ai(o.red, o.green, o.blue, 100);
      return {
        background: `linear-gradient(to right, ${f} , ${p})`
      };
    }), i = () => {
      if (r.value && n.value) {
        const f = o.alpha / 100, p = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
        return Math.round(f * (p.width - d) + d / 2);
      }
      return 0;
    }, s = D(() => ({
      left: i() + "px",
      top: 0
    })), c = (f) => {
      f.target !== r.value && u(f);
    }, u = (f) => {
      if (f.stopPropagation(), r.value && n.value) {
        const p = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
        let h = f.clientX - p.left;
        h = Math.max(d / 2, h), h = Math.min(h, p.width - d / 2);
        const g = Math.round((h - d / 2) / (p.width - d) * 100);
        a.alpha = g, o.alpha = g, t("change", g);
      }
    };
    return at(() => {
      const f = {
        drag: (p) => {
          u(p);
        },
        end: (p) => {
          u(p);
        }
      };
      r.value && n.value && Rt.triggerDragEvent(r.value, f);
    }), { barElement: r, cursorElement: n, getCursorStyle: s, getBackgroundStyle: l, onClickSider: c };
  }
}), rv = (e) => (Pt("data-v-18925ba6"), e = e(), jt(), e), nv = /* @__PURE__ */ rv(() => /* @__PURE__ */ _("div", { class: "vc-alpha-slider__bar-handle" }, null, -1)), av = [
  nv
];
function ov(e, t, r, n, a, o) {
  return A(), P("div", {
    class: Z(["vc-alpha-slider", "transparent", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: ne(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: Z(["vc-alpha-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: ne(e.getCursorStyle)
      }, av, 6)
    ], 4)
  ], 2);
}
const ga = /* @__PURE__ */ Se(tv, [["render", ov], ["__scopeId", "data-v-18925ba6"]]), iv = [
  // 第一行
  [
    "#fcc02e",
    "#f67c01",
    "#e64a19",
    "#d81b43",
    "#8e24aa",
    "#512da7",
    "#1f87e8",
    "#008781",
    "#05a045"
  ],
  // 第二行
  [
    "#fed835",
    "#fb8c00",
    "#f5511e",
    "#eb1d4e",
    "#9c28b1",
    "#5d35b0",
    "#2097f3",
    "#029688",
    "#4cb050"
  ],
  // 第三行
  [
    "#ffeb3c",
    "#ffa727",
    "#fe5722",
    "#eb4165",
    "#aa47bc",
    "#673bb7",
    "#42a5f6",
    "#26a59a",
    "#83c683"
  ],
  // 第四行
  [
    "#fff176",
    "#ffb74e",
    "#ff8a66",
    "#f1627e",
    "#b968c7",
    "#7986cc",
    "#64b5f6",
    "#80cbc4",
    "#a5d6a7"
  ],
  // 第五行
  [
    "#fff59c",
    "#ffcc80",
    "#ffab91",
    "#fb879e",
    "#cf93d9",
    "#9ea8db",
    "#90caf8",
    "#b2dfdc",
    "#c8e6ca"
  ],
  // 最后一行
  [
    "transparent",
    "#ffffff",
    "#dedede",
    "#a9a9a9",
    "#4b4b4b",
    "#353535",
    "#212121",
    "#000000",
    "advance"
  ]
], sv = q({
  name: "Palette",
  emits: ["change"],
  setup(e, { emit: t }) {
    return { palettes: iv, computedBgStyle: (r) => r === "transparent" ? r : r === "advance" ? {} : { background: w(r).toRgbString() }, onColorChange: (r) => {
      t("change", r);
    } };
  }
}), lv = { class: "vc-compact" }, uv = ["onClick"];
function cv(e, t, r, n, a, o) {
  return A(), P("div", lv, [
    (A(!0), P(Ve, null, _t(e.palettes, (l, i) => (A(), P("div", {
      key: i,
      class: "vc-compact__row"
    }, [
      (A(!0), P(Ve, null, _t(l, (s, c) => (A(), P("div", {
        key: c,
        class: "vc-compact__color-cube--wrap",
        onClick: (u) => e.onColorChange(s)
      }, [
        _("div", {
          class: Z([
            "vc-compact__color_cube",
            {
              advance: s === "advance",
              transparent: s === "transparent"
            }
          ]),
          style: ne(e.computedBgStyle(s))
        }, null, 6)
      ], 8, uv))), 128))
    ]))), 128))
  ]);
}
const As = /* @__PURE__ */ Se(sv, [["render", cv], ["__scopeId", "data-v-b969fd48"]]), fv = q({
  name: "Board",
  props: {
    color: R.instanceOf(U),
    round: R.bool.def(!1),
    hide: R.bool.def(!0)
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    var r, n, a;
    const o = ci(), l = {
      h: ((r = e.color) == null ? void 0 : r.hue) || 0,
      s: 1,
      v: 1
    }, i = new U(l).toHexString(), s = Ae({
      hueColor: i,
      saturation: ((n = e.color) == null ? void 0 : n.saturation) || 0,
      brightness: ((a = e.color) == null ? void 0 : a.brightness) || 0
    }), c = V(0), u = V(0), f = V(), p = V(), d = D(() => ({
      top: c.value + "px",
      left: u.value + "px"
    })), h = () => {
      if (o) {
        const y = o.vnode.el;
        u.value = s.saturation * (y == null ? void 0 : y.clientWidth), c.value = (1 - s.brightness) * (y == null ? void 0 : y.clientHeight);
      }
    }, g = (y) => {
      y.target !== p.value && v(y);
    }, v = (y) => {
      if (o) {
        const C = o.vnode.el, O = C == null ? void 0 : C.getBoundingClientRect();
        let S = y.clientX - O.left, E = y.clientY - O.top;
        S = Cn(S, 0, O.width), E = Cn(E, 0, O.height);
        const k = S / O.width, M = Cn(-(E / O.height) + 1, 0, 1);
        u.value = S, c.value = E, s.saturation = k, s.brightness = M, t("change", k, M);
      }
    };
    return at(() => {
      o && o.vnode.el && f.value && (Rt.triggerDragEvent(f.value, {
        drag: (y) => {
          v(y);
        },
        end: (y) => {
          v(y);
        }
      }), Ln(() => {
        h();
      }));
    }), ie(
      () => e.color,
      (y) => {
        Zr(s, {
          hueColor: new U({ h: y.hue, s: 1, v: 1 }).toHexString(),
          saturation: y.saturation,
          brightness: y.brightness
        }), h();
      },
      { deep: !0 }
    ), { state: s, cursorElement: f, getCursorStyle: d, onClickBoard: g };
  }
}), ya = (e) => (Pt("data-v-058e5db2"), e = e(), jt(), e), dv = /* @__PURE__ */ ya(() => /* @__PURE__ */ _("div", { class: "vc-saturation__white" }, null, -1)), pv = /* @__PURE__ */ ya(() => /* @__PURE__ */ _("div", { class: "vc-saturation__black" }, null, -1)), hv = /* @__PURE__ */ ya(() => /* @__PURE__ */ _("div", null, null, -1)), vv = [
  hv
];
function gv(e, t, r, n, a, o) {
  return A(), P("div", {
    ref: "boardElement",
    class: Z(["vc-saturation", { "vc-saturation__chrome": e.round, "vc-saturation__hidden": e.hide }]),
    style: ne({ backgroundColor: e.state.hueColor }),
    onClick: t[0] || (t[0] = (...l) => e.onClickBoard && e.onClickBoard(...l))
  }, [
    dv,
    pv,
    _("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: ne(e.getCursorStyle)
    }, vv, 4)
  ], 6);
}
const ba = /* @__PURE__ */ Se(fv, [["render", gv], ["__scopeId", "data-v-058e5db2"]]), yv = q({
  name: "Hue",
  props: {
    color: R.instanceOf(U),
    size: R.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = V(null), n = V(null);
    let a = e.color || new U();
    const o = Ae({
      hue: a.hue || 0
    });
    Ie(
      () => e.color,
      (u) => {
        u && (a = u, Zr(o, { hue: a.hue }));
      },
      { deep: !0 }
    );
    const l = () => {
      if (r.value && n.value) {
        const u = r.value.getBoundingClientRect(), f = n.value.offsetWidth;
        return o.hue === 360 ? u.width - f / 2 : o.hue % 360 * (u.width - f) / 360 + f / 2;
      }
      return 0;
    }, i = D(() => ({
      left: l() + "px",
      top: 0
    })), s = (u) => {
      u.target !== r.value && c(u);
    }, c = (u) => {
      if (u.stopPropagation(), r.value && n.value) {
        const f = r.value.getBoundingClientRect(), p = n.value.offsetWidth;
        let d = u.clientX - f.left;
        d = Math.min(d, f.width - p / 2), d = Math.max(p / 2, d);
        const h = Math.round((d - p / 2) / (f.width - p) * 360);
        a.hue = h, o.hue = h, t("change", h);
      }
    };
    return at(() => {
      const u = {
        drag: (f) => {
          c(f);
        },
        end: (f) => {
          c(f);
        }
      };
      r.value && n.value && Rt.triggerDragEvent(r.value, u);
    }), { barElement: r, cursorElement: n, getCursorStyle: i, onClickSider: s };
  }
}), bv = (e) => (Pt("data-v-e1a08576"), e = e(), jt(), e), mv = /* @__PURE__ */ bv(() => /* @__PURE__ */ _("div", { class: "vc-hue-slider__bar-handle" }, null, -1)), _v = [
  mv
];
function Cv(e, t, r, n, a, o) {
  return A(), P("div", {
    class: Z(["vc-hue-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: Z(["vc-hue-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: ne(e.getCursorStyle)
      }, _v, 6)
    ], 512)
  ], 2);
}
const ma = /* @__PURE__ */ Se(yv, [["render", Cv], ["__scopeId", "data-v-e1a08576"]]), wv = q({
  name: "Lightness",
  props: {
    color: R.instanceOf(U),
    size: R.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = V(null), n = V(null);
    let a = e.color || new U();
    const [o, l, i] = a.HSL, s = Ae({
      hue: o,
      saturation: l,
      lightness: i
    });
    Ie(
      () => e.color,
      (h) => {
        if (h) {
          a = h;
          const [g, v, y] = a.HSL;
          Zr(s, {
            hue: g,
            saturation: v,
            lightness: y
          });
        }
      },
      { deep: !0 }
    );
    const c = D(() => {
      const h = w({
        h: s.hue,
        s: s.saturation,
        l: 0.8
      }).toPercentageRgbString(), g = w({
        h: s.hue,
        s: s.saturation,
        l: 0.6
      }).toPercentageRgbString(), v = w({
        h: s.hue,
        s: s.saturation,
        l: 0.4
      }).toPercentageRgbString(), y = w({
        h: s.hue,
        s: s.saturation,
        l: 0.2
      }).toPercentageRgbString();
      return {
        background: [
          `linear-gradient(to right, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`,
          `-webkit-linear-gradient(left, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`,
          `-moz-linear-gradient(left, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`,
          `-ms-linear-gradient(left, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`
        ]
      };
    }), u = () => {
      if (r.value && n.value) {
        const h = s.lightness, g = r.value.getBoundingClientRect(), v = n.value.offsetWidth;
        return (1 - h) * (g.width - v) + v / 2;
      }
      return 0;
    }, f = D(() => ({
      left: u() + "px",
      top: 0
    })), p = (h) => {
      h.target !== r.value && d(h);
    }, d = (h) => {
      if (h.stopPropagation(), r.value && n.value) {
        const g = r.value.getBoundingClientRect(), v = n.value.offsetWidth;
        let y = h.clientX - g.left;
        y = Math.max(v / 2, y), y = Math.min(y, g.width - v / 2);
        const C = 1 - (y - v / 2) / (g.width - v);
        a.lightness = C, t("change", C);
      }
    };
    return at(() => {
      const h = {
        drag: (g) => {
          d(g);
        },
        end: (g) => {
          d(g);
        }
      };
      r.value && n.value && Rt.triggerDragEvent(r.value, h);
    }), { barElement: r, cursorElement: n, getCursorStyle: f, getBackgroundStyle: c, onClickSider: p };
  }
}), Sv = (e) => (Pt("data-v-94a50a9e"), e = e(), jt(), e), xv = /* @__PURE__ */ Sv(() => /* @__PURE__ */ _("div", { class: "vc-lightness-slider__bar-handle" }, null, -1)), Ov = [
  xv
];
function Av(e, t, r, n, a, o) {
  return A(), P("div", {
    class: Z(["vc-lightness-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: ne(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: Z(["vc-lightness-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: ne(e.getCursorStyle)
      }, Ov, 6)
    ], 4)
  ], 2);
}
const ks = /* @__PURE__ */ Se(wv, [["render", Av], ["__scopeId", "data-v-94a50a9e"]]), kv = q({
  name: "History",
  props: {
    colors: R.arrayOf(String).def(() => []),
    round: R.bool.def(!1)
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    return { onColorSelect: (r) => {
      t("change", r);
    } };
  }
}), $v = {
  key: 0,
  class: "vc-colorPicker__record"
}, Ev = { class: "color-list" }, Tv = ["onClick"];
function Rv(e, t, r, n, a, o) {
  return e.colors && e.colors.length > 0 ? (A(), P("div", $v, [
    _("div", Ev, [
      (A(!0), P(Ve, null, _t(e.colors, (l, i) => (A(), P("div", {
        key: i,
        class: Z(["color-item", "transparent", { "color-item__round": e.round }]),
        onClick: (s) => e.onColorSelect(l)
      }, [
        _("div", {
          class: "color-item__display",
          style: ne({ backgroundColor: l })
        }, null, 4)
      ], 10, Tv))), 128))
    ])
  ])) : G("", !0);
}
const _a = /* @__PURE__ */ Se(kv, [["render", Rv], ["__scopeId", "data-v-0f657238"]]), Mv = q({
  name: "Display",
  props: {
    color: R.instanceOf(U),
    disableAlpha: R.bool.def(!1)
  },
  emits: ["update:color", "change"],
  setup(e, { emit: t }) {
    var r, n, a, o;
    const l = V("hex"), i = Ae({
      color: e.color,
      hex: (r = e.color) == null ? void 0 : r.hex,
      alpha: Math.floor(((n = e.color) == null ? void 0 : n.alpha) || 100) + "%",
      rgba: (a = e.color) == null ? void 0 : a.RGB,
      previewBgColor: (o = e.color) == null ? void 0 : o.toRgbString()
    }), s = D(() => ({
      background: i.previewBgColor
    })), c = () => {
      l.value = l.value === "rgba" ? "hex" : "rgba";
    }, u = Je((p) => {
      if (!p.target.value)
        return;
      let d = parseInt(p.target.value.replace("%", ""));
      d > 100 && (p.target.value = "100%", d = 100), d < 0 && (p.target.value = "0%", d = 0), isNaN(d) && (p.target.value = "100%", d = 100), !isNaN(d) && i.color && (i.color.alpha = d), t("update:color", i.color), t("change", i.color);
    }, 300), f = Je((p, d) => {
      if (p.target.value) {
        if (l.value === "hex") {
          const h = p.target.value.replace("#", "");
          w(h).isValid() && i.color && (i.color.hex = h);
        } else if (d !== void 0 && i.rgba && i.color) {
          p.target.value < 0 && (p.target.value = 0), d === 3 && p.target.value > 1 && (p.target.value = 1), d < 3 && p.target.value > 255 && (p.target.value = 255), i.rgba[d] = Number(p.target.value);
          const [h, g, v, y] = i.rgba;
          i.color.hex = w({ r: h, g, b: v }).toHex(), i.color.alpha = Math.floor(y * 100);
        }
        t("update:color", i.color), t("change", i.color);
      }
    }, 300);
    return ie(
      () => e.color,
      (p) => {
        p && (i.color = p, i.alpha = Math.floor(i.color.alpha) + "%", i.hex = i.color.hex, i.rgba = i.color.RGB);
      },
      { deep: !0 }
    ), ie(
      () => i.color,
      () => {
        i.color && (i.previewBgColor = i.color.toRgbString());
      },
      { deep: !0 }
    ), { state: i, getBgColorStyle: s, inputType: l, onInputTypeChange: c, onAlphaBlur: u, onInputChange: f };
  }
}), Pv = { class: "vc-display" }, jv = { class: "vc-current-color vc-transparent" }, Iv = {
  key: 0,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Hv = { class: "vc-color-input" }, Dv = ["value"], Bv = {
  key: 0,
  class: "vc-alpha-input"
}, Lv = ["value"], Nv = {
  key: 1,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Vv = ["value", "onInput"];
function Fv(e, t, r, n, a, o) {
  return A(), P("div", Pv, [
    _("div", jv, [
      _("div", {
        class: "color-cube",
        style: ne(e.getBgColorStyle)
      }, null, 4)
    ]),
    e.inputType === "hex" ? (A(), P("div", Iv, [
      _("div", Hv, [
        _("input", {
          value: e.state.hex,
          onInput: t[0] || (t[0] = (...l) => e.onInputChange && e.onInputChange(...l))
        }, null, 40, Dv)
      ]),
      e.disableAlpha ? G("", !0) : (A(), P("div", Bv, [
        _("input", {
          class: "vc-alpha-input__inner",
          value: e.state.alpha,
          onInput: t[1] || (t[1] = (...l) => e.onAlphaBlur && e.onAlphaBlur(...l))
        }, null, 40, Lv)
      ]))
    ])) : e.state.rgba ? (A(), P("div", Nv, [
      (A(!0), P(Ve, null, _t(e.state.rgba, (l, i) => (A(), P("div", {
        class: "vc-color-input",
        key: i
      }, [
        _("input", {
          value: l,
          onInput: (s) => e.onInputChange(s, i)
        }, null, 40, Vv)
      ]))), 128))
    ])) : G("", !0),
    _("div", {
      class: "vc-input-toggle",
      onClick: t[2] || (t[2] = (...l) => e.onInputTypeChange && e.onInputTypeChange(...l))
    }, ce(e.inputType), 1)
  ]);
}
const Ca = /* @__PURE__ */ Se(Mv, [["render", Fv], ["__scopeId", "data-v-80d589ba"]]), zv = q({
  name: "FkColorPicker",
  components: { Display: Ca, Alpha: ga, Palette: As, Board: ba, Hue: ma, Lightness: ks, History: _a },
  props: {
    color: R.instanceOf(U),
    disableHistory: R.bool.def(!1),
    roundHistory: R.bool.def(!1),
    disableAlpha: R.bool.def(!1)
  },
  emits: ["update:color", "change", "advanceChange"],
  setup(e, { emit: t }) {
    const r = e.color || new U(), n = Ae({
      color: r,
      hex: r.toHexString(),
      rgb: r.toRgbString()
    }), a = V(!1), o = D(() => ({ background: n.rgb })), l = () => {
      a.value = !1, t("advanceChange", !1);
    }, i = Vn(ha, [], {}), s = Je(() => {
      if (e.disableHistory)
        return;
      const g = n.color.toRgbString();
      if (i.value = i.value.filter((v) => !w.equals(v, g)), !i.value.includes(g)) {
        for (; i.value.length > va; )
          i.value.pop();
        i.value.unshift(g);
      }
    }, 500), c = (g) => {
      g === "advance" ? (a.value = !0, t("advanceChange", !0)) : (n.color.hex = g, t("advanceChange", !1));
    }, u = (g) => {
      n.color.alpha = g;
    }, f = (g) => {
      n.color.hue = g;
    }, p = (g, v) => {
      n.color.saturation = g, n.color.brightness = v;
    }, d = (g) => {
      n.color.lightness = g;
    }, h = (g) => {
      const v = g.target.value.replace("#", "");
      w(v).isValid() && (n.color.hex = v);
    };
    return ie(
      () => e.color,
      (g) => {
        g && (n.color = g);
      },
      { deep: !0 }
    ), ie(
      () => n.color,
      () => {
        n.hex = n.color.hex, n.rgb = n.color.toRgbString(), s(), t("update:color", n.color), t("change", n.color);
      },
      { deep: !0 }
    ), {
      state: n,
      advancePanelShow: a,
      onBack: l,
      onCompactChange: c,
      onAlphaChange: u,
      onHueChange: f,
      onBoardChange: p,
      onLightChange: d,
      onInputChange: h,
      previewStyle: o,
      historyColors: i
    };
  }
}), Wv = (e) => (Pt("data-v-0d5bef46"), e = e(), jt(), e), Gv = { class: "vc-fk-colorPicker" }, Kv = { class: "vc-fk-colorPicker__inner" }, Uv = { class: "vc-fk-colorPicker__header" }, qv = /* @__PURE__ */ Wv(() => /* @__PURE__ */ _("div", { class: "back" }, null, -1)), Yv = [
  qv
];
function Xv(e, t, r, n, a, o) {
  const l = J("Palette"), i = J("Board"), s = J("Hue"), c = J("Lightness"), u = J("Alpha"), f = J("Display"), p = J("History");
  return A(), P("div", Gv, [
    _("div", Kv, [
      _("div", Uv, [
        e.advancePanelShow ? (A(), P("span", {
          key: 0,
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...d) => e.onBack && e.onBack(...d))
        }, Yv)) : G("", !0)
      ]),
      e.advancePanelShow ? G("", !0) : (A(), ee(l, {
        key: 0,
        onChange: e.onCompactChange
      }, null, 8, ["onChange"])),
      e.advancePanelShow ? (A(), ee(i, {
        key: 1,
        color: e.state.color,
        onChange: e.onBoardChange
      }, null, 8, ["color", "onChange"])) : G("", !0),
      e.advancePanelShow ? (A(), ee(s, {
        key: 2,
        color: e.state.color,
        onChange: e.onHueChange
      }, null, 8, ["color", "onChange"])) : G("", !0),
      e.advancePanelShow ? G("", !0) : (A(), ee(c, {
        key: 3,
        color: e.state.color,
        onChange: e.onLightChange
      }, null, 8, ["color", "onChange"])),
      e.disableAlpha ? G("", !0) : (A(), ee(u, {
        key: 4,
        color: e.state.color,
        onChange: e.onAlphaChange
      }, null, 8, ["color", "onChange"])),
      $e(f, {
        color: e.state.color,
        "disable-alpha": e.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e.disableHistory ? G("", !0) : (A(), ee(p, {
        key: 5,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const oi = /* @__PURE__ */ Se(zv, [["render", Xv], ["__scopeId", "data-v-0d5bef46"]]), Jv = q({
  name: "ChromeColorPicker",
  components: { Display: Ca, Alpha: ga, Board: ba, Hue: ma, History: _a },
  props: {
    color: R.instanceOf(U),
    disableHistory: R.bool.def(!1),
    roundHistory: R.bool.def(!1),
    disableAlpha: R.bool.def(!1)
  },
  emits: ["update:color", "change"],
  setup(e, { emit: t }) {
    const r = e.color || new U(), n = Ae({
      color: r,
      hex: r.toHexString(),
      rgb: r.toRgbString()
    }), a = D(() => ({ background: n.rgb })), o = Vn(ha, [], {}), l = Je(() => {
      if (e.disableHistory)
        return;
      const f = n.color.toRgbString();
      if (o.value = o.value.filter((p) => !w.equals(p, f)), !o.value.includes(f)) {
        for (; o.value.length > va; )
          o.value.pop();
        o.value.unshift(f);
      }
    }, 500), i = (f) => {
      n.color.alpha = f;
    }, s = (f) => {
      n.color.hue = f;
    }, c = (f, p) => {
      n.color.saturation = f, n.color.brightness = p;
    }, u = (f) => {
      f !== "advance" && (n.color.hex = f);
    };
    return ie(
      () => e.color,
      (f) => {
        f && (n.color = f);
      },
      { deep: !0 }
    ), ie(
      () => n.color,
      () => {
        n.hex = n.color.hex, n.rgb = n.color.toRgbString(), l(), t("update:color", n.color), t("change", n.color);
      },
      { deep: !0 }
    ), {
      state: n,
      previewStyle: a,
      historyColors: o,
      onAlphaChange: i,
      onHueChange: s,
      onBoardChange: c,
      onCompactChange: u
    };
  }
}), Zv = { class: "vc-chrome-colorPicker" }, Qv = { class: "vc-chrome-colorPicker-body" }, eg = { class: "chrome-controls" }, tg = { class: "chrome-sliders" };
function rg(e, t, r, n, a, o) {
  const l = J("Board"), i = J("Hue"), s = J("Alpha"), c = J("Display"), u = J("History");
  return A(), P("div", Zv, [
    $e(l, {
      round: !0,
      hide: !1,
      color: e.state.color,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"]),
    _("div", Qv, [
      _("div", eg, [
        _("div", tg, [
          $e(i, {
            size: "small",
            color: e.state.color,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"]),
          e.disableAlpha ? G("", !0) : (A(), ee(s, {
            key: 0,
            size: "small",
            color: e.state.color,
            onChange: e.onAlphaChange
          }, null, 8, ["color", "onChange"]))
        ])
      ]),
      $e(c, {
        color: e.state.color,
        "disable-alpha": e.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e.disableHistory ? G("", !0) : (A(), ee(u, {
        key: 0,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const ii = /* @__PURE__ */ Se(Jv, [["render", rg], ["__scopeId", "data-v-33636434"]]), wa = "Vue3ColorPickerProvider", ng = (e, t) => {
  const r = e.getBoundingClientRect(), n = r.left + r.width / 2, a = r.top + r.height / 2, o = Math.abs(n - t.clientX), l = Math.abs(a - t.clientY), i = Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2)), s = l / i, c = Math.acos(s);
  let u = Math.floor(180 / (Math.PI / c));
  return t.clientX > n && t.clientY > a && (u = 180 - u), t.clientX == n && t.clientY > a && (u = 180), t.clientX > n && t.clientY == a && (u = 90), t.clientX < n && t.clientY > a && (u = 180 + u), t.clientX < n && t.clientY == a && (u = 270), t.clientX < n && t.clientY < a && (u = 360 - u), u;
};
let wn = !1;
const ag = (e, t) => {
  const r = function(a) {
    var o;
    (o = t.drag) == null || o.call(t, a);
  }, n = function(a) {
    var o;
    document.removeEventListener("mousemove", r, !1), document.removeEventListener("mouseup", n, !1), document.onselectstart = null, document.ondragstart = null, wn = !1, (o = t.end) == null || o.call(t, a);
  };
  e && e.addEventListener("mousedown", (a) => {
    var o;
    wn || (document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", n, !1), wn = !0, (o = t.start) == null || o.call(t, a));
  });
}, og = {
  angle: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 16,
    validator: (e) => e >= 16
  },
  borderWidth: {
    type: Number,
    default: 1,
    validator: (e) => e >= 1
  },
  borderColor: {
    type: String,
    default: "#666"
  }
}, ig = q({
  name: "Angle",
  props: og,
  emits: ["update:angle", "change"],
  setup(e, {
    emit: t
  }) {
    const r = V(null), n = V(0);
    Ie(() => e.angle, (i) => {
      n.value = i;
    });
    const a = () => {
      let i = Number(n.value);
      isNaN(i) || (i = i > 360 || i < 0 ? e.angle : i, n.value = i === 360 ? 0 : i, t("update:angle", n.value), t("change", n.value));
    }, o = D(() => ({
      width: e.size + "px",
      height: e.size + "px",
      borderWidth: e.borderWidth + "px",
      borderColor: e.borderColor,
      transform: `rotate(${n.value}deg)`
    })), l = (i) => {
      r.value && (n.value = ng(r.value, i) % 360, a());
    };
    return ui(() => {
      const i = {
        drag: (s) => {
          l(s);
        },
        end: (s) => {
          l(s);
        }
      };
      r.value && ag(r.value, i);
    }), () => $e("div", {
      class: "bee-angle"
    }, [$e("div", {
      class: "bee-angle__round",
      ref: r,
      style: o.value
    }, null)]);
  }
}), sg = q({
  name: "GradientColorPicker",
  components: { Angle: ig, Display: Ca, Alpha: ga, Palette: As, Board: ba, Hue: ma, Lightness: ks, History: _a },
  props: {
    startColor: R.instanceOf(U).isRequired,
    endColor: R.instanceOf(U).isRequired,
    startColorStop: R.number.def(0),
    endColorStop: R.number.def(100),
    angle: R.number.def(0),
    type: R.oneOf(["linear", "radial"]).def("linear"),
    disableHistory: R.bool.def(!1),
    roundHistory: R.bool.def(!1),
    disableAlpha: R.bool.def(!1),
    pickerType: R.oneOf(["fk", "chrome"]).def("fk")
  },
  emits: [
    "update:startColor",
    "update:endColor",
    "update:angle",
    "update:startColorStop",
    "update:endColorStop",
    "startColorChange",
    "endColorChange",
    "advanceChange",
    "angleChange",
    "startColorStopChange",
    "endColorStopChange",
    "typeChange"
  ],
  setup(e, { emit: t }) {
    const r = Ae({
      startActive: !0,
      startColor: e.startColor,
      endColor: e.endColor,
      startColorStop: e.startColorStop,
      endColorStop: e.endColorStop,
      angle: e.angle,
      type: e.type,
      // rgba
      startColorRgba: e.startColor.toRgbString(),
      endColorRgba: e.endColor.toRgbString()
    }), n = fi(wa), a = V(e.pickerType === "chrome"), o = V(), l = V(), i = V();
    Ie(
      () => [e.startColor, e.endColor, e.angle],
      (m) => {
        r.startColor = m[0], r.endColor = m[1], r.angle = m[2];
      }
    ), Ie(
      () => e.type,
      (m) => {
        r.type = m;
      }
    );
    const s = D({
      get: () => r.startActive ? r.startColor : r.endColor,
      set: (m) => {
        if (r.startActive) {
          r.startColor = m;
          return;
        }
        r.endColor = m;
      }
    }), c = D(() => {
      if (i.value && o.value) {
        const m = r.startColorStop / 100, j = i.value.getBoundingClientRect(), T = o.value.offsetWidth;
        return Math.round(m * (j.width - T) + T / 2);
      }
      return 0;
    }), u = D(() => {
      if (i.value && l.value) {
        const m = r.endColorStop / 100, j = i.value.getBoundingClientRect(), T = l.value.offsetWidth;
        return Math.round(m * (j.width - T) + T / 2);
      }
      return 0;
    }), f = D(() => {
      let m = `background: linear-gradient(${r.angle}deg, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`;
      return r.type === "radial" && (m = `background: radial-gradient(circle, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`), m;
    }), p = (m) => {
      var j;
      if (r.startActive = !0, i.value && o.value) {
        const T = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let L = m.clientX - T.left;
        L = Math.max(o.value.offsetWidth / 2, L), L = Math.min(L, T.width - o.value.offsetWidth / 2), r.startColorStop = Math.round(
          (L - o.value.offsetWidth / 2) / (T.width - o.value.offsetWidth) * 100
        ), t("update:startColorStop", r.startColorStop), t("startColorStopChange", r.startColorStop);
      }
    }, d = (m) => {
      var j;
      if (r.startActive = !1, i.value && l.value) {
        const T = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let L = m.clientX - T.left;
        L = Math.max(l.value.offsetWidth / 2, L), L = Math.min(L, T.width - l.value.offsetWidth / 2), r.endColorStop = Math.round(
          (L - l.value.offsetWidth / 2) / (T.width - l.value.offsetWidth) * 100
        ), t("update:endColorStop", r.endColorStop), t("endColorStopChange", r.endColorStop);
      }
    }, h = (m) => {
      const j = m.target, T = parseInt(j.value.replace("°", ""));
      isNaN(T) || (r.angle = T % 360), t("update:angle", r.angle), t("angleChange", r.angle);
    }, g = (m) => {
      r.angle = m, t("update:angle", r.angle), t("angleChange", r.angle);
    }, v = (m) => {
      m === "advance" ? (a.value = !0, t("advanceChange", !0)) : (s.value.hex = m, t("advanceChange", !1)), k();
    }, y = (m) => {
      s.value.alpha = m, k();
    }, C = (m) => {
      s.value.hue = m, k();
    }, O = (m, j) => {
      s.value.saturation = m, s.value.brightness = j, k();
    }, S = (m) => {
      s.value.lightness = m, k();
    }, E = () => {
      k();
    }, k = () => {
      r.startActive ? (t("update:startColor", r.startColor), t("startColorChange", r.startColor)) : (t("update:endColor", r.endColor), t("endColorChange", r.endColor));
    }, M = () => {
      a.value = !1, t("advanceChange", !1);
    }, H = () => {
      r.type = r.type === "linear" ? "radial" : "linear", t("typeChange", r.type);
    }, b = Vn(ha, [], {}), x = Je(() => {
      if (e.disableHistory)
        return;
      const m = s.value.toRgbString();
      if (b.value = b.value.filter((j) => !w.equals(j, m)), !b.value.includes(m)) {
        for (; b.value.length > va; )
          b.value.pop();
        b.value.unshift(m);
      }
    }, 500);
    return at(() => {
      l.value && o.value && (Rt.triggerDragEvent(l.value, {
        drag: (m) => {
          d(m);
        },
        end: (m) => {
          d(m);
        }
      }), Rt.triggerDragEvent(o.value, {
        drag: (m) => {
          p(m);
        },
        end: (m) => {
          p(m);
        }
      }));
    }), ie(
      () => r.startColor,
      (m) => {
        r.startColorRgba = m.toRgbString();
      },
      { deep: !0 }
    ), ie(
      () => r.endColor,
      (m) => {
        r.endColorRgba = m.toRgbString();
      },
      { deep: !0 }
    ), ie(
      () => s.value,
      () => {
        x();
      },
      { deep: !0 }
    ), {
      startGradientRef: o,
      stopGradientRef: l,
      colorRangeRef: i,
      state: r,
      currentColor: s,
      getStartColorLeft: c,
      getEndColorLeft: u,
      gradientBg: f,
      advancePanelShow: a,
      onDegreeBlur: h,
      onCompactChange: v,
      onAlphaChange: y,
      onHueChange: C,
      onBoardChange: O,
      onLightChange: S,
      historyColors: b,
      onBack: M,
      onDegreeChange: g,
      onDisplayChange: E,
      onTypeChange: H,
      lang: n == null ? void 0 : n.lang
    };
  }
}), $s = (e) => (Pt("data-v-431cadee"), e = e(), jt(), e), lg = { class: "vc-gradient-picker" }, ug = { class: "vc-gradient-picker__header" }, cg = { class: "vc-gradient__types" }, fg = { class: "vc-gradient-wrap__types" }, dg = { class: "vc-picker-degree-input vc-degree-input" }, pg = { class: "vc-degree-input__control" }, hg = ["value"], vg = { class: "vc-degree-input__panel" }, gg = { class: "vc-degree-input__disk" }, yg = { class: "vc-gradient-picker__body" }, bg = {
  class: "vc-color-range",
  ref: "colorRangeRef"
}, mg = { class: "vc-color-range__container" }, _g = { class: "vc-gradient__stop__container" }, Cg = ["title"], wg = /* @__PURE__ */ $s(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), Sg = [
  wg
], xg = ["title"], Og = /* @__PURE__ */ $s(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), Ag = [
  Og
];
function kg(e, t, r, n, a, o) {
  var l, i;
  const s = J("Angle"), c = J("Board"), u = J("Hue"), f = J("Palette"), p = J("Lightness"), d = J("Alpha"), h = J("Display"), g = J("History");
  return A(), P("div", lg, [
    _("div", ug, [
      _("div", null, [
        Fe(_("div", {
          class: "back",
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...v) => e.onBack && e.onBack(...v))
        }, null, 512), [
          [Ct, e.pickerType === "fk" && e.advancePanelShow]
        ])
      ]),
      _("div", cg, [
        _("div", fg, [
          (A(), P(Ve, null, _t(["linear", "radial"], (v) => _("div", {
            class: Z(["vc-gradient__type", { active: e.state.type === v }]),
            key: v,
            onClick: t[1] || (t[1] = (...y) => e.onTypeChange && e.onTypeChange(...y))
          }, ce(e.lang ? e.lang[v] : v), 3)), 64))
        ]),
        Fe(_("div", dg, [
          _("div", pg, [
            _("input", {
              value: e.state.angle,
              onBlur: t[2] || (t[2] = (...v) => e.onDegreeBlur && e.onDegreeBlur(...v))
            }, null, 40, hg),
            di("deg ")
          ]),
          _("div", vg, [
            _("div", gg, [
              $e(s, {
                angle: e.state.angle,
                "onUpdate:angle": t[3] || (t[3] = (v) => e.state.angle = v),
                size: 40,
                onChange: e.onDegreeChange
              }, null, 8, ["angle", "onChange"])
            ])
          ])
        ], 512), [
          [Ct, e.state.type === "linear"]
        ])
      ])
    ]),
    _("div", yg, [
      _("div", bg, [
        _("div", mg, [
          _("div", {
            class: "vc-background",
            style: ne(e.gradientBg)
          }, null, 4),
          _("div", _g, [
            _("div", {
              class: Z(["vc-gradient__stop", {
                "vc-gradient__stop--current": e.state.startActive
              }]),
              ref: "startGradientRef",
              title: (l = e.lang) == null ? void 0 : l.start,
              style: ne({ left: e.getStartColorLeft + "px", backgroundColor: e.state.startColorRgba })
            }, Sg, 14, Cg),
            _("div", {
              class: Z(["vc-gradient__stop", {
                "vc-gradient__stop--current": !e.state.startActive
              }]),
              ref: "stopGradientRef",
              title: (i = e.lang) == null ? void 0 : i.end,
              style: ne({ left: e.getEndColorLeft + "px", backgroundColor: e.state.endColorRgba })
            }, Ag, 14, xg)
          ])
        ])
      ], 512)
    ]),
    e.advancePanelShow ? (A(), ee(c, {
      key: 0,
      color: e.currentColor,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"])) : G("", !0),
    e.advancePanelShow ? (A(), ee(u, {
      key: 1,
      color: e.currentColor,
      onChange: e.onHueChange
    }, null, 8, ["color", "onChange"])) : G("", !0),
    e.advancePanelShow ? G("", !0) : (A(), ee(f, {
      key: 2,
      onChange: e.onCompactChange
    }, null, 8, ["onChange"])),
    e.advancePanelShow ? G("", !0) : (A(), ee(p, {
      key: 3,
      color: e.currentColor,
      onChange: e.onLightChange
    }, null, 8, ["color", "onChange"])),
    e.disableAlpha ? G("", !0) : (A(), ee(d, {
      key: 4,
      color: e.currentColor,
      onChange: e.onAlphaChange
    }, null, 8, ["color", "onChange"])),
    $e(h, {
      color: e.currentColor,
      "disable-alpha": e.disableAlpha,
      onChange: e.onDisplayChange
    }, null, 8, ["color", "disable-alpha", "onChange"]),
    e.disableHistory ? G("", !0) : (A(), ee(g, {
      key: 5,
      round: e.roundHistory,
      colors: e.historyColors,
      onChange: e.onCompactChange
    }, null, 8, ["round", "colors", "onChange"]))
  ]);
}
const si = /* @__PURE__ */ Se(sg, [["render", kg], ["__scopeId", "data-v-431cadee"]]), $g = q({
  name: "WrapContainer",
  props: {
    theme: R.oneOf(["white", "black"]).def("white"),
    showTab: R.bool.def(!1),
    activeKey: R.oneOf(["pure", "gradient"]).def("pure")
  },
  emits: ["update:activeKey", "change"],
  setup(e, { emit: t }) {
    const r = Ae({
      activeKey: e.activeKey
    }), n = fi(wa), a = (o) => {
      r.activeKey = o, t("update:activeKey", o), t("change", o);
    };
    return ie(
      () => e.activeKey,
      (o) => {
        r.activeKey = o;
      }
    ), { state: r, onActiveKeyChange: a, lang: n == null ? void 0 : n.lang };
  }
}), Eg = { class: "vc-colorpicker--container" }, Tg = {
  key: 0,
  class: "vc-colorpicker--tabs"
}, Rg = { class: "vc-colorpicker--tabs__inner" }, Mg = { class: "vc-btn__content" }, Pg = { class: "vc-btn__content" };
function jg(e, t, r, n, a, o) {
  var l, i;
  return A(), P("div", {
    class: Z(["vc-colorpicker", e.theme])
  }, [
    _("div", Eg, [
      e.showTab ? (A(), P("div", Tg, [
        _("div", Rg, [
          _("div", {
            class: Z([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "pure"
              }
            ]),
            onClick: t[0] || (t[0] = (s) => e.onActiveKeyChange("pure"))
          }, [
            _("button", null, [
              _("div", Mg, ce((l = e.lang) == null ? void 0 : l.pure), 1)
            ])
          ], 2),
          _("div", {
            class: Z([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "gradient"
              }
            ]),
            onClick: t[1] || (t[1] = (s) => e.onActiveKeyChange("gradient"))
          }, [
            _("button", null, [
              _("div", Pg, ce((i = e.lang) == null ? void 0 : i.gradient), 1)
            ])
          ], 2),
          _("div", {
            class: "vc-colorpicker--tabs__bg",
            style: ne({
              width: "50%",
              left: `calc(${e.state.activeKey === "gradient" ? 50 : 0}%)`
            })
          }, null, 4)
        ])
      ])) : G("", !0),
      Nn(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const Ig = /* @__PURE__ */ Se($g, [["render", jg], ["__scopeId", "data-v-0492277d"]]), Hg = {
  start: "Start",
  end: "End",
  pure: "Pure",
  gradient: "Gradient",
  linear: "linear",
  radial: "radial"
}, Dg = {
  start: "开始",
  end: "结束",
  pure: "纯色",
  gradient: "渐变",
  linear: "线性",
  radial: "径向"
}, Bg = {
  En: Hg,
  "ZH-cn": Dg
}, Lg = {
  isWidget: R.bool.def(!1),
  pickerType: R.oneOf(["fk", "chrome"]).def("fk"),
  shape: R.oneOf(["circle", "square"]).def("square"),
  pureColor: {
    type: [String, Object],
    default: "#000000"
  },
  gradientColor: R.string.def(
    "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"
  ),
  format: {
    type: String,
    default: "rgb"
  },
  disableAlpha: R.bool.def(!1),
  disableHistory: R.bool.def(!1),
  roundHistory: R.bool.def(!1),
  useType: R.oneOf(["pure", "gradient", "both"]).def("pure"),
  activeKey: R.oneOf(["pure", "gradient"]).def("pure"),
  lang: {
    type: String,
    default: "ZH-cn"
  },
  zIndex: R.number.def(9999),
  pickerContainer: {
    type: [String, HTMLElement],
    default: "body"
  },
  debounce: R.number.def(100),
  theme: R.oneOf(["white", "black"]).def("white")
}, Ng = q({
  name: "ColorPicker",
  components: { FkColorPicker: oi, ChromeColorPicker: ii, GradientColorPicker: si, WrapContainer: Ig },
  inheritAttrs: !1,
  props: Lg,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(e, { emit: t }) {
    Ls(wa, {
      lang: D(() => Bg[e.lang || "ZH-cn"])
    });
    const r = Ae({
      pureColor: e.pureColor || "",
      activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
      //  "pure" | "gradient"
      isAdvanceMode: !1
    }), n = new U("#000"), a = new U("#000"), o = new U(r.pureColor), l = Ae({
      startColor: n,
      endColor: a,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      type: "linear",
      gradientColor: e.gradientColor
    }), i = V(o), s = V(!1), c = V(null), u = V(null);
    let f = null;
    const p = D(() => ({
      background: r.activeKey !== "gradient" ? w(r.pureColor).toRgbString() : l.gradientColor
    })), d = D(() => r.activeKey === "gradient" ? si.name : e.pickerType === "fk" ? oi.name : ii.name), h = (b) => {
      r.isAdvanceMode = b;
    }, g = D(() => {
      const b = {
        disableAlpha: e.disableAlpha,
        disableHistory: e.disableHistory,
        roundHistory: e.roundHistory,
        pickerType: e.pickerType
      };
      return r.activeKey === "gradient" ? {
        ...b,
        startColor: l.startColor,
        endColor: l.endColor,
        angle: l.angle,
        type: l.type,
        startColorStop: l.startColorStop,
        endColorStop: l.endColorStop,
        onStartColorChange: (x) => {
          l.startColor = x, O();
        },
        onEndColorChange: (x) => {
          l.endColor = x, O();
        },
        onStartColorStopChange: (x) => {
          l.startColorStop = x, O();
        },
        onEndColorStopChange: (x) => {
          l.endColorStop = x, O();
        },
        onAngleChange: (x) => {
          l.angle = x, O();
        },
        onTypeChange: (x) => {
          l.type = x, O();
        },
        onAdvanceChange: h
      } : {
        ...b,
        disableAlpha: e.disableAlpha,
        disableHistory: e.disableHistory,
        roundHistory: e.roundHistory,
        color: i.value,
        onChange: k,
        onAdvanceChange: h
      };
    }), v = () => {
      s.value = !0, f ? f.update() : E();
    }, y = () => {
      s.value = !1;
    }, C = () => {
      var b, x, m, j;
      try {
        const [T] = Ua.parse(l.gradientColor);
        if (T && T.type.includes("gradient") && T.colorStops.length >= 2) {
          const L = T.colorStops[0], K = T.colorStops[1];
          l.startColorStop = Number((b = L.length) == null ? void 0 : b.value) || 0, l.endColorStop = Number((x = K.length) == null ? void 0 : x.value) || 0, T.type === "linear-gradient" && ((m = T.orientation) == null ? void 0 : m.type) === "angular" && (l.angle = Number((j = T.orientation) == null ? void 0 : j.value) || 0), l.type = T.type.split("-")[0];
          const [z, ae, $, I] = L.value, [B, fe, ke, ut] = K.value;
          l.startColor = new U({
            r: Number(z),
            g: Number(ae),
            b: Number($),
            a: Number(I)
          }), l.endColor = new U({
            r: Number(B),
            g: Number(fe),
            b: Number(ke),
            a: Number(ut)
          });
        }
      } catch (T) {
        console.log(`[Parse Color]: ${T}`);
      }
    }, O = Je(() => {
      const b = S();
      try {
        l.gradientColor = Ua.stringify(b), t("update:gradientColor", l.gradientColor), t("gradientColorChange", l.gradientColor);
      } catch (x) {
        console.log(x);
      }
    }, e.debounce), S = () => {
      const b = [], x = l.startColor.RGB.map((T) => T.toString()), m = l.endColor.RGB.map((T) => T.toString()), j = [
        {
          type: "rgba",
          value: [x[0], x[1], x[2], x[3]],
          length: { value: l.startColorStop + "", type: "%" }
        },
        {
          type: "rgba",
          value: [m[0], m[1], m[2], m[3]],
          length: { value: l.endColorStop + "", type: "%" }
        }
      ];
      return l.type === "linear" ? b.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: l.angle + "" },
        colorStops: j
      }) : l.type === "radial" && b.push({
        type: "radial-gradient",
        orientation: [{ type: "shape", value: "circle" }],
        colorStops: j
      }), b;
    }, E = () => {
      c.value && u.value && (f = Fu(c.value, u.value, {
        placement: "auto",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          },
          {
            name: "flip",
            options: {
              allowedAutoPlacements: ["top", "bottom", "left", "right"],
              rootBoundary: "viewport"
            }
          }
        ]
      }));
    }, k = (b) => {
      i.value = b, r.pureColor = b.toString(e.format), M();
    }, M = Je(() => {
      t("update:pureColor", r.pureColor), t("pureColorChange", r.pureColor);
    }, e.debounce);
    ol(u, () => {
      y();
    });
    const H = (b) => {
      r.activeKey = b, t("update:activeKey", b), t("activeKeyChange", b);
    };
    return at(() => {
      C();
    }), ie(
      () => e.gradientColor,
      (b) => {
        b != l.gradientColor && (l.gradientColor = b);
      }
    ), ie(
      () => l.gradientColor,
      () => {
        C();
      }
    ), ie(
      () => e.activeKey,
      (b) => {
        r.activeKey = b;
      }
    ), ie(
      () => e.useType,
      (b) => {
        r.activeKey !== "gradient" && b === "gradient" ? r.activeKey = "gradient" : r.activeKey = "pure";
      }
    ), ie(
      () => e.pureColor,
      (b) => {
        w.equals(b, r.pureColor) || (r.pureColor = b, i.value = new U(b));
      },
      { deep: !0 }
    ), {
      colorCubeRef: c,
      pickerRef: u,
      showPicker: s,
      colorInstance: i,
      getBgColorStyle: p,
      onColorChange: k,
      onShowPicker: v,
      onActiveKeyChange: H,
      getComponentName: d,
      getBindArgs: g,
      state: r
    };
  }
});
function Vg(e, t, r, n, a, o) {
  const l = J("WrapContainer");
  return A(), P(Ve, null, [
    e.isWidget ? (A(), ee(l, {
      key: 0,
      "active-key": e.state.activeKey,
      "onUpdate:activeKey": t[0] || (t[0] = (i) => e.state.activeKey = i),
      "show-tab": e.useType === "both",
      onChange: e.onActiveKeyChange,
      style: ne({ zIndex: e.zIndex }),
      theme: e.theme
    }, {
      default: Pa(() => [
        (A(), ee(ja(e.getComponentName), Ia({ key: e.getComponentName }, e.getBindArgs), null, 16))
      ]),
      _: 1
    }, 8, ["active-key", "show-tab", "onChange", "style", "theme"])) : G("", !0),
    e.isWidget ? G("", !0) : (A(), P(Ve, { key: 1 }, [
      _("div", {
        class: Z(["vc-color-wrap transparent", { round: e.shape === "circle" }]),
        ref: "colorCubeRef"
      }, [
        _("div", {
          class: "current-color",
          style: ne(e.getBgColorStyle),
          onClick: t[1] || (t[1] = (...i) => e.onShowPicker && e.onShowPicker(...i))
        }, null, 4)
      ], 2),
      (A(), ee(Ns, { to: e.pickerContainer }, [
        Fe(_("div", {
          ref: "pickerRef",
          style: ne({ zIndex: e.zIndex })
        }, [
          e.showPicker ? (A(), ee(l, {
            key: 0,
            "show-tab": e.useType === "both" && !e.state.isAdvanceMode,
            "active-key": e.state.activeKey,
            "onUpdate:activeKey": t[2] || (t[2] = (i) => e.state.activeKey = i),
            onChange: e.onActiveKeyChange,
            theme: e.theme
          }, {
            default: Pa(() => [
              (A(), ee(ja(e.getComponentName), Ia({ key: e.getComponentName }, e.getBindArgs), null, 16))
            ]),
            _: 1
          }, 8, ["show-tab", "active-key", "onChange", "theme"])) : G("", !0)
        ], 4), [
          [Ct, e.showPicker]
        ])
      ], 8, ["to"]))
    ], 64))
  ], 64);
}
const Fg = /* @__PURE__ */ Se(Ng, [["render", Vg], ["__scopeId", "data-v-3ba84123"]]), zg = { class: "control-item color" }, Wg = { class: "label-text" }, Gg = { class: "control" }, Kg = /* @__PURE__ */ q({
  __name: "DatColor",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: String, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (r, n) => (A(), P("li", zg, [
      _("label", null, [
        _("span", Wg, ce(r.label), 1),
        _("div", Gg, [
          $e(yt(Fg), {
            pureColor: t.value,
            "onUpdate:pureColor": n[0] || (n[0] = (a) => t.value = a),
            showPicker: "false",
            pickerType: "chrome",
            "!isWidget": "",
            "disable-history": ""
          }, null, 8, ["pureColor"])
        ])
      ])
    ]));
  }
}), Ug = { class: "folder" }, qg = {
  ref: "label",
  class: "group"
}, Yg = { class: "text--inner w-100" }, Xg = { class: "symbol" }, Jg = /* @__PURE__ */ q({
  __name: "DatFolder",
  props: /* @__PURE__ */ rt({
    label: { default: "" }
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = nt(e, "open"), r = () => {
      t.value = !t.value;
    };
    return (n, a) => (A(), P("li", Ug, [
      _("div", qg, [
        _("div", {
          class: "text",
          onClick: r
        }, [
          _("div", Yg, [
            _("span", Xg, ce(t.value ? "▼" : "►"), 1),
            di(" " + ce(n.label), 1)
          ])
        ]),
        Fe(_("ul", null, [
          Nn(n.$slots, "default", {}, void 0, !0)
        ], 512), [
          [Ct, t.value]
        ])
      ], 512)
    ]));
  }
}), Sa = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Zg = /* @__PURE__ */ Sa(Jg, [["__scopeId", "data-v-bd32d018"]]), Qg = { class: "vue-dat-gui" }, ey = { class: "group group--main" }, ty = ["onKeydown"], ry = ["onKeydown"], ny = /* @__PURE__ */ q({
  __name: "DatGui",
  props: /* @__PURE__ */ rt({
    openText: { default: "Open Controls" },
    closeText: { default: "Close Controls" },
    closePosition: { default: "bottom" }
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = e, r = nt(e, "open"), n = D(
      () => r.value ? t.closeText : t.openText
    ), a = () => {
      r.value = r.value !== !0;
    };
    return (o, l) => (A(), P("div", Qg, [
      _("div", ey, [
        o.closePosition === "top" ? (A(), P("div", {
          key: 0,
          class: "toggle-button",
          role: "button",
          tabindex: "0",
          onClick: a,
          onKeydown: Ha(Da(a, ["prevent"]), ["space", "enter"])
        }, ce(n.value), 41, ty)) : G("", !0),
        Fe(_("ul", null, [
          Nn(o.$slots, "default")
        ], 512), [
          [Ct, r.value]
        ]),
        o.closePosition === "bottom" ? (A(), P("div", {
          key: 1,
          class: "toggle-button",
          role: "button",
          tabindex: "0",
          onClick: a,
          onKeydown: Ha(Da(a, ["prevent"]), ["space", "enter"])
        }, ce(n.value), 41, ry)) : G("", !0)
      ])
    ]));
  }
}), Bn = (e, t, r) => Math.min(Math.max(e, t), r), ay = /* @__PURE__ */ q({
  __name: "NumberSlider",
  props: {
    value: {},
    min: {},
    max: {}
  },
  emits: ["updateState"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = V(null), o = D(
      () => Bn((r.value - r.min) * 100 / (r.max - r.min), 0, 100)
    ), l = (u) => {
      if (a.value) {
        const f = a.value.getBoundingClientRect(), p = u - f.left, d = f.right - f.left, h = r.min + Bn(p / d, 0, 1) * (r.max - r.min);
        n("updateState", h);
      }
    }, i = (u) => {
      l(u.pageX);
    }, s = (u) => {
      l(u.pageX), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", s);
    }, c = (u) => {
      l(u.pageX), window.addEventListener("mousemove", i), window.addEventListener("mouseup", s);
    };
    return (u, f) => (A(), P("span", {
      ref_key: "slider",
      ref: a,
      class: "slider",
      style: ne({ "background-size": `${o.value}% 100%` }),
      onMousedown: c
    }, null, 36));
  }
}), oy = /* @__PURE__ */ Sa(ay, [["__scopeId", "data-v-af9bdb8d"]]), iy = { ref: "label" }, sy = { class: "label-text" }, ly = { class: "control" }, uy = ["min", "max", "step", "value", "disabled"], cy = /* @__PURE__ */ q({
  __name: "DatNumber",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    showSlider: { type: Boolean, default: !0 },
    min: {},
    max: {},
    step: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = D(() => t.disabled), n = nt(e, "modelValue");
    let a = typeof t.min == "number" ? t.min : Number.NEGATIVE_INFINITY, o = typeof t.max == "number" ? t.max : Number.POSITIVE_INFINITY;
    a > o && ([a, o] = [o, a]);
    const l = D(
      () => t.showSlider && Number.isFinite(a) && Number.isFinite(o)
    ), i = D(() => {
      if (t.step)
        return t.step;
      const u = o - a;
      return 10 ** Math.floor(Math.log(Math.abs(u)) / Math.LN10) / 10;
    }), s = (u) => {
      let f = Bn(u, a, o);
      i.value !== 0 && Number.isFinite(i.value) && (f = Math.round(f / i.value) * i.value), n.value = f;
    }, c = (u) => {
      s(Number(u.target.value));
    };
    return (u, f) => (A(), P("li", {
      class: Z(["control-item number", { disabled: r.value }])
    }, [
      _("label", iy, [
        _("span", sy, ce(u.label), 1),
        _("div", ly, [
          Fe($e(oy, {
            min: yt(a),
            max: yt(o),
            value: n.value,
            onUpdateState: s
          }, null, 8, ["min", "max", "value"]), [
            [Ct, l.value]
          ]),
          _("input", {
            type: "number",
            ref: "input",
            class: "input",
            min: yt(a),
            max: yt(o),
            step: i.value,
            value: n.value,
            onInput: c,
            disabled: r.value
          }, null, 40, uy)
        ])
      ], 512)
    ], 2));
  }
}), fy = /* @__PURE__ */ Sa(cy, [["__scopeId", "data-v-148da278"]]), dy = { ref: "label" }, py = { class: "label-text" }, hy = { class: "control" }, vy = ["disabled"], gy = ["value"], yy = /* @__PURE__ */ q({
  __name: "DatSelect",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = D(() => t.disabled), n = nt(e, "modelValue"), a = D(
      () => t.items.map(
        (o) => typeof o == "object" ? o : { name: (o || "").toString(), value: o }
      )
    );
    return (o, l) => (A(), P("li", {
      class: Z(["control-item select", { disabled: r.value }])
    }, [
      _("label", dy, [
        _("span", py, ce(o.label), 1),
        _("div", hy, [
          Fe(_("select", {
            "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i),
            class: "w-100",
            disabled: r.value
          }, [
            (A(!0), P(Ve, null, _t(a.value, (i) => (A(), P("option", {
              key: i.value,
              value: i.value
            }, ce(i.name), 9, gy))), 128))
          ], 8, vy), [
            [Vs, n.value]
          ])
        ])
      ], 512)
    ], 2));
  }
}), by = { ref: "label" }, my = { class: "label-text" }, _y = { class: "control" }, Cy = ["disabled"], wy = /* @__PURE__ */ q({
  __name: "DatString",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = D(() => t.disabled), n = nt(e, "modelValue");
    return (a, o) => (A(), P("li", {
      class: Z(["control-item string", { disabled: r.value }])
    }, [
      _("label", by, [
        _("span", my, ce(a.label), 1),
        _("div", _y, [
          Fe(_("input", {
            type: "text",
            "onUpdate:modelValue": o[0] || (o[0] = (l) => n.value = l),
            disabled: r.value
          }, null, 8, Cy), [
            [Fs, n.value]
          ])
        ])
      ], 512)
    ], 2));
  }
}), li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatBoolean: Us,
  DatButton: qs,
  DatColor: Kg,
  DatFolder: Zg,
  DatGui: ny,
  DatNumber: fy,
  DatSelect: yy,
  DatString: wy
}, Symbol.toStringTag, { value: "Module" })), Sy = (e) => {
  for (const t in li)
    e.component(t, li[t]);
}, Ay = { install: Sy };
export {
  Us as DatBoolean,
  qs as DatButton,
  Kg as DatColor,
  Zg as DatFolder,
  ny as DatGui,
  fy as DatNumber,
  yy as DatSelect,
  wy as DatString,
  Ay as default
};
