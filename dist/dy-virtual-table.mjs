import { defineComponent as Pn, onMounted as Ft, openBlock as hn, createElementBlock as dn, toDisplayString as bv, unref as Je, ref as F, computed as nu, nextTick as ve, watch as Nt, normalizeClass as st, normalizeStyle as ct, createElementVNode as Xn, Fragment as tu, renderList as ru, createVNode as Rr, mergeProps as Lv, pushScopeId as Ev, popScopeId as Cv } from "vue";
const Wv = {
  data: {
    type: Array,
    default: () => []
  },
  // size: any,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
}, Rv = { class: "cell" }, Iv = Pn({
  name: "dyTableColumn"
}), Bv = /* @__PURE__ */ Pn({
  ...Iv,
  props: {
    data: {
      type: [Object, String],
      default() {
        return {};
      }
    },
    column: {
      type: Object || Function,
      default() {
        return {};
      }
    },
    keyProp: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "30px"
    },
    minHeight: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    minWidth: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(_) {
    Ft(() => {
    });
    const V = _;
    let f = V.data[V.keyProp];
    return (E, B) => (hn(), dn("div", Rv, bv(_.keyProp ? Je(f) : _.data), 1));
  }
});
const Dt = (_, V) => {
  const f = _.__vccOpts || _;
  for (const [E, B] of V)
    f[E] = B;
  return f;
}, Pf = /* @__PURE__ */ Dt(Bv, [["__scopeId", "data-v-53b914f8"]]), iu = (_) => (_ === "" || _ !== void 0 && (_ = Number.parseInt(_, 10), Number.isNaN(_) && (_ = "")), _), Hf = (_) => (_ === "" || _ !== void 0 && (_ = iu(_), Number.isNaN(_) && (_ = 80)), _), Ov = (_) => (_ === "" || _ !== void 0 && (_ = Number.parseInt(_, 10), Number.isNaN(_) && (_ = "")), _), Nv = (_, V, f) => {
  let E = {}, B = V, de = 0;
  for (let D = 0; D < _; D++)
    f[D].width ? B = B - f[D].width : de++;
  let $ = Math.floor(B / de);
  for (let D = 0; D < _; D++)
    f[D].width ? E[D] = f[D].width : E[D] = $;
  return E;
}, Fv = (_, V, f, E, B, de = 20) => {
  let $ = {};
  for (let D = 0; D < f.length; D++) {
    let x = de;
    for (let q = 0; q < V; q++)
      if (E[q]) {
        let ie = Dv(_, f[D][E[q].prop], B[q], de);
        ie.needsWrap && (x = ie.totalHeight);
      }
    $[D] = x;
  }
  return $;
}, Dv = (_, V, f, E) => {
  let B = V ? V.split("") : [], de = "", $ = 1, D = E;
  for (let x = 0; x < B.length; x++) {
    let q = de + B[x] + " ";
    _.measureText(q).width > f && x > 0 ? (de = B[x] + " ", D += E, $++) : de = q;
  }
  return { needsWrap: $ > 1, totalHeight: D };
}, Mf = (_, V, f, E, B, de) => {
  for (var $ = V.split(""), D = "", x = 0; x < $.length; x++) {
    var q = D + $[x] + "", ie = _.measureText(q), J = ie.width;
    J > B && x > 0 ? (_.fillText(D, f, E), D = $[x] + "", E += de) : D = q;
  }
  _.fillText(D, f, E);
};
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ir = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ir.exports;
(function(_, V) {
  (function() {
    var f, E = "4.17.21", B = 200, de = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", $ = "Expected a function", D = "Invalid `variable` option passed into `_.template`", x = "__lodash_hash_undefined__", q = 500, ie = "__lodash_placeholder__", J = 1, $e = 2, O = 4, b = 1, ee = 2, ue = 1, xe = 2, un = 4, T = 8, j = 16, z = 32, ae = 64, ne = 128, pe = 256, Le = 512, A = 30, C = "...", L = 800, N = 16, te = 1, me = 2, se = 3, we = 1 / 0, Ee = 9007199254740991, ht = 17976931348623157e292, wn = 0 / 0, We = 4294967295, Mt = We - 1, Pt = We >>> 1, Br = [
      ["ary", ne],
      ["bind", ue],
      ["bindKey", xe],
      ["curry", T],
      ["curryRight", j],
      ["flip", Le],
      ["partial", z],
      ["partialRight", ae],
      ["rearg", pe]
    ], w = "[object Arguments]", M = "[object Array]", P = "[object AsyncFunction]", Z = "[object Boolean]", Ne = "[object Date]", Or = "[object DOMException]", Ht = "[object Error]", Ut = "[object Function]", uu = "[object GeneratorFunction]", ln = "[object Map]", dt = "[object Number]", Gf = "[object Null]", yn = "[object Object]", lu = "[object Promise]", $f = "[object Proxy]", gt = "[object RegExp]", fn = "[object Set]", vt = "[object String]", Gt = "[object Symbol]", Kf = "[object Undefined]", pt = "[object WeakMap]", qf = "[object WeakSet]", _t = "[object ArrayBuffer]", Jn = "[object DataView]", Nr = "[object Float32Array]", Fr = "[object Float64Array]", Dr = "[object Int8Array]", Mr = "[object Int16Array]", Pr = "[object Int32Array]", Hr = "[object Uint8Array]", Ur = "[object Uint8ClampedArray]", Gr = "[object Uint16Array]", $r = "[object Uint32Array]", zf = /\b__p \+= '';/g, Yf = /\b(__p \+=) '' \+/g, Zf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fu = /&(?:amp|lt|gt|quot|#39);/g, au = /[&<>"']/g, Xf = RegExp(fu.source), Jf = RegExp(au.source), Qf = /<%-([\s\S]+?)%>/g, kf = /<%([\s\S]+?)%>/g, ou = /<%=([\s\S]+?)%>/g, Vf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jf = /^\w*$/, ea = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kr = /[\\^$.*+?()[\]{}|]/g, na = RegExp(Kr.source), qr = /^\s+/, ta = /\s/, ra = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ia = /\{\n\/\* \[wrapped with (.+)\] \*/, ua = /,? & /, la = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fa = /[()=,{}\[\]\/\s]/, aa = /\\(\\)?/g, oa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, su = /\w*$/, sa = /^[-+]0x[0-9a-f]+$/i, ca = /^0b[01]+$/i, ha = /^\[object .+?Constructor\]$/, da = /^0o[0-7]+$/i, ga = /^(?:0|[1-9]\d*)$/, va = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $t = /($^)/, pa = /['\n\r\u2028\u2029\\]/g, Kt = "\\ud800-\\udfff", _a = "\\u0300-\\u036f", wa = "\\ufe20-\\ufe2f", ya = "\\u20d0-\\u20ff", cu = _a + wa + ya, hu = "\\u2700-\\u27bf", du = "a-z\\xdf-\\xf6\\xf8-\\xff", xa = "\\xac\\xb1\\xd7\\xf7", ma = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Aa = "\\u2000-\\u206f", Ta = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", gu = "A-Z\\xc0-\\xd6\\xd8-\\xde", vu = "\\ufe0e\\ufe0f", pu = xa + ma + Aa + Ta, zr = "['’]", Sa = "[" + Kt + "]", _u = "[" + pu + "]", qt = "[" + cu + "]", wu = "\\d+", ba = "[" + hu + "]", yu = "[" + du + "]", xu = "[^" + Kt + pu + wu + hu + du + gu + "]", Yr = "\\ud83c[\\udffb-\\udfff]", La = "(?:" + qt + "|" + Yr + ")", mu = "[^" + Kt + "]", Zr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Xr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qn = "[" + gu + "]", Au = "\\u200d", Tu = "(?:" + yu + "|" + xu + ")", Ea = "(?:" + Qn + "|" + xu + ")", Su = "(?:" + zr + "(?:d|ll|m|re|s|t|ve))?", bu = "(?:" + zr + "(?:D|LL|M|RE|S|T|VE))?", Lu = La + "?", Eu = "[" + vu + "]?", Ca = "(?:" + Au + "(?:" + [mu, Zr, Xr].join("|") + ")" + Eu + Lu + ")*", Wa = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ra = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Cu = Eu + Lu + Ca, Ia = "(?:" + [ba, Zr, Xr].join("|") + ")" + Cu, Ba = "(?:" + [mu + qt + "?", qt, Zr, Xr, Sa].join("|") + ")", Oa = RegExp(zr, "g"), Na = RegExp(qt, "g"), Jr = RegExp(Yr + "(?=" + Yr + ")|" + Ba + Cu, "g"), Fa = RegExp([
      Qn + "?" + yu + "+" + Su + "(?=" + [_u, Qn, "$"].join("|") + ")",
      Ea + "+" + bu + "(?=" + [_u, Qn + Tu, "$"].join("|") + ")",
      Qn + "?" + Tu + "+" + Su,
      Qn + "+" + bu,
      Ra,
      Wa,
      wu,
      Ia
    ].join("|"), "g"), Da = RegExp("[" + Au + Kt + cu + vu + "]"), Ma = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pa = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ha = -1, he = {};
    he[Nr] = he[Fr] = he[Dr] = he[Mr] = he[Pr] = he[Hr] = he[Ur] = he[Gr] = he[$r] = !0, he[w] = he[M] = he[_t] = he[Z] = he[Jn] = he[Ne] = he[Ht] = he[Ut] = he[ln] = he[dt] = he[yn] = he[gt] = he[fn] = he[vt] = he[pt] = !1;
    var ce = {};
    ce[w] = ce[M] = ce[_t] = ce[Jn] = ce[Z] = ce[Ne] = ce[Nr] = ce[Fr] = ce[Dr] = ce[Mr] = ce[Pr] = ce[ln] = ce[dt] = ce[yn] = ce[gt] = ce[fn] = ce[vt] = ce[Gt] = ce[Hr] = ce[Ur] = ce[Gr] = ce[$r] = !0, ce[Ht] = ce[Ut] = ce[pt] = !1;
    var Ua = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ga = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, $a = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ka = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, qa = parseFloat, za = parseInt, Wu = typeof Ot == "object" && Ot && Ot.Object === Object && Ot, Ya = typeof self == "object" && self && self.Object === Object && self, Re = Wu || Ya || Function("return this")(), Qr = V && !V.nodeType && V, Hn = Qr && !0 && _ && !_.nodeType && _, Ru = Hn && Hn.exports === Qr, kr = Ru && Wu.process, Qe = function() {
      try {
        var s = Hn && Hn.require && Hn.require("util").types;
        return s || kr && kr.binding && kr.binding("util");
      } catch {
      }
    }(), Iu = Qe && Qe.isArrayBuffer, Bu = Qe && Qe.isDate, Ou = Qe && Qe.isMap, Nu = Qe && Qe.isRegExp, Fu = Qe && Qe.isSet, Du = Qe && Qe.isTypedArray;
    function Ke(s, d, h) {
      switch (h.length) {
        case 0:
          return s.call(d);
        case 1:
          return s.call(d, h[0]);
        case 2:
          return s.call(d, h[0], h[1]);
        case 3:
          return s.call(d, h[0], h[1], h[2]);
      }
      return s.apply(d, h);
    }
    function Za(s, d, h, m) {
      for (var H = -1, re = s == null ? 0 : s.length; ++H < re; ) {
        var Se = s[H];
        d(m, Se, h(Se), s);
      }
      return m;
    }
    function ke(s, d) {
      for (var h = -1, m = s == null ? 0 : s.length; ++h < m && d(s[h], h, s) !== !1; )
        ;
      return s;
    }
    function Xa(s, d) {
      for (var h = s == null ? 0 : s.length; h-- && d(s[h], h, s) !== !1; )
        ;
      return s;
    }
    function Mu(s, d) {
      for (var h = -1, m = s == null ? 0 : s.length; ++h < m; )
        if (!d(s[h], h, s))
          return !1;
      return !0;
    }
    function Wn(s, d) {
      for (var h = -1, m = s == null ? 0 : s.length, H = 0, re = []; ++h < m; ) {
        var Se = s[h];
        d(Se, h, s) && (re[H++] = Se);
      }
      return re;
    }
    function zt(s, d) {
      var h = s == null ? 0 : s.length;
      return !!h && kn(s, d, 0) > -1;
    }
    function Vr(s, d, h) {
      for (var m = -1, H = s == null ? 0 : s.length; ++m < H; )
        if (h(d, s[m]))
          return !0;
      return !1;
    }
    function ge(s, d) {
      for (var h = -1, m = s == null ? 0 : s.length, H = Array(m); ++h < m; )
        H[h] = d(s[h], h, s);
      return H;
    }
    function Rn(s, d) {
      for (var h = -1, m = d.length, H = s.length; ++h < m; )
        s[H + h] = d[h];
      return s;
    }
    function jr(s, d, h, m) {
      var H = -1, re = s == null ? 0 : s.length;
      for (m && re && (h = s[++H]); ++H < re; )
        h = d(h, s[H], H, s);
      return h;
    }
    function Ja(s, d, h, m) {
      var H = s == null ? 0 : s.length;
      for (m && H && (h = s[--H]); H--; )
        h = d(h, s[H], H, s);
      return h;
    }
    function ei(s, d) {
      for (var h = -1, m = s == null ? 0 : s.length; ++h < m; )
        if (d(s[h], h, s))
          return !0;
      return !1;
    }
    var Qa = ni("length");
    function ka(s) {
      return s.split("");
    }
    function Va(s) {
      return s.match(la) || [];
    }
    function Pu(s, d, h) {
      var m;
      return h(s, function(H, re, Se) {
        if (d(H, re, Se))
          return m = re, !1;
      }), m;
    }
    function Yt(s, d, h, m) {
      for (var H = s.length, re = h + (m ? 1 : -1); m ? re-- : ++re < H; )
        if (d(s[re], re, s))
          return re;
      return -1;
    }
    function kn(s, d, h) {
      return d === d ? so(s, d, h) : Yt(s, Hu, h);
    }
    function ja(s, d, h, m) {
      for (var H = h - 1, re = s.length; ++H < re; )
        if (m(s[H], d))
          return H;
      return -1;
    }
    function Hu(s) {
      return s !== s;
    }
    function Uu(s, d) {
      var h = s == null ? 0 : s.length;
      return h ? ri(s, d) / h : wn;
    }
    function ni(s) {
      return function(d) {
        return d == null ? f : d[s];
      };
    }
    function ti(s) {
      return function(d) {
        return s == null ? f : s[d];
      };
    }
    function Gu(s, d, h, m, H) {
      return H(s, function(re, Se, oe) {
        h = m ? (m = !1, re) : d(h, re, Se, oe);
      }), h;
    }
    function eo(s, d) {
      var h = s.length;
      for (s.sort(d); h--; )
        s[h] = s[h].value;
      return s;
    }
    function ri(s, d) {
      for (var h, m = -1, H = s.length; ++m < H; ) {
        var re = d(s[m]);
        re !== f && (h = h === f ? re : h + re);
      }
      return h;
    }
    function ii(s, d) {
      for (var h = -1, m = Array(s); ++h < s; )
        m[h] = d(h);
      return m;
    }
    function no(s, d) {
      return ge(d, function(h) {
        return [h, s[h]];
      });
    }
    function $u(s) {
      return s && s.slice(0, Yu(s) + 1).replace(qr, "");
    }
    function qe(s) {
      return function(d) {
        return s(d);
      };
    }
    function ui(s, d) {
      return ge(d, function(h) {
        return s[h];
      });
    }
    function wt(s, d) {
      return s.has(d);
    }
    function Ku(s, d) {
      for (var h = -1, m = s.length; ++h < m && kn(d, s[h], 0) > -1; )
        ;
      return h;
    }
    function qu(s, d) {
      for (var h = s.length; h-- && kn(d, s[h], 0) > -1; )
        ;
      return h;
    }
    function to(s, d) {
      for (var h = s.length, m = 0; h--; )
        s[h] === d && ++m;
      return m;
    }
    var ro = ti(Ua), io = ti(Ga);
    function uo(s) {
      return "\\" + Ka[s];
    }
    function lo(s, d) {
      return s == null ? f : s[d];
    }
    function Vn(s) {
      return Da.test(s);
    }
    function fo(s) {
      return Ma.test(s);
    }
    function ao(s) {
      for (var d, h = []; !(d = s.next()).done; )
        h.push(d.value);
      return h;
    }
    function li(s) {
      var d = -1, h = Array(s.size);
      return s.forEach(function(m, H) {
        h[++d] = [H, m];
      }), h;
    }
    function zu(s, d) {
      return function(h) {
        return s(d(h));
      };
    }
    function In(s, d) {
      for (var h = -1, m = s.length, H = 0, re = []; ++h < m; ) {
        var Se = s[h];
        (Se === d || Se === ie) && (s[h] = ie, re[H++] = h);
      }
      return re;
    }
    function Zt(s) {
      var d = -1, h = Array(s.size);
      return s.forEach(function(m) {
        h[++d] = m;
      }), h;
    }
    function oo(s) {
      var d = -1, h = Array(s.size);
      return s.forEach(function(m) {
        h[++d] = [m, m];
      }), h;
    }
    function so(s, d, h) {
      for (var m = h - 1, H = s.length; ++m < H; )
        if (s[m] === d)
          return m;
      return -1;
    }
    function co(s, d, h) {
      for (var m = h + 1; m--; )
        if (s[m] === d)
          return m;
      return m;
    }
    function jn(s) {
      return Vn(s) ? go(s) : Qa(s);
    }
    function an(s) {
      return Vn(s) ? vo(s) : ka(s);
    }
    function Yu(s) {
      for (var d = s.length; d-- && ta.test(s.charAt(d)); )
        ;
      return d;
    }
    var ho = ti($a);
    function go(s) {
      for (var d = Jr.lastIndex = 0; Jr.test(s); )
        ++d;
      return d;
    }
    function vo(s) {
      return s.match(Jr) || [];
    }
    function po(s) {
      return s.match(Fa) || [];
    }
    var _o = function s(d) {
      d = d == null ? Re : et.defaults(Re.Object(), d, et.pick(Re, Pa));
      var h = d.Array, m = d.Date, H = d.Error, re = d.Function, Se = d.Math, oe = d.Object, fi = d.RegExp, wo = d.String, Ve = d.TypeError, Xt = h.prototype, yo = re.prototype, nt = oe.prototype, Jt = d["__core-js_shared__"], Qt = yo.toString, fe = nt.hasOwnProperty, xo = 0, Zu = function() {
        var e = /[^.]+$/.exec(Jt && Jt.keys && Jt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), kt = nt.toString, mo = Qt.call(oe), Ao = Re._, To = fi(
        "^" + Qt.call(fe).replace(Kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Vt = Ru ? d.Buffer : f, Bn = d.Symbol, jt = d.Uint8Array, Xu = Vt ? Vt.allocUnsafe : f, er = zu(oe.getPrototypeOf, oe), Ju = oe.create, Qu = nt.propertyIsEnumerable, nr = Xt.splice, ku = Bn ? Bn.isConcatSpreadable : f, yt = Bn ? Bn.iterator : f, Un = Bn ? Bn.toStringTag : f, tr = function() {
        try {
          var e = zn(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), So = d.clearTimeout !== Re.clearTimeout && d.clearTimeout, bo = m && m.now !== Re.Date.now && m.now, Lo = d.setTimeout !== Re.setTimeout && d.setTimeout, rr = Se.ceil, ir = Se.floor, ai = oe.getOwnPropertySymbols, Eo = Vt ? Vt.isBuffer : f, Vu = d.isFinite, Co = Xt.join, Wo = zu(oe.keys, oe), be = Se.max, Be = Se.min, Ro = m.now, Io = d.parseInt, ju = Se.random, Bo = Xt.reverse, oi = zn(d, "DataView"), xt = zn(d, "Map"), si = zn(d, "Promise"), tt = zn(d, "Set"), mt = zn(d, "WeakMap"), At = zn(oe, "create"), ur = mt && new mt(), rt = {}, Oo = Yn(oi), No = Yn(xt), Fo = Yn(si), Do = Yn(tt), Mo = Yn(mt), lr = Bn ? Bn.prototype : f, Tt = lr ? lr.valueOf : f, el = lr ? lr.toString : f;
      function u(e) {
        if (ye(e) && !U(e) && !(e instanceof Q)) {
          if (e instanceof je)
            return e;
          if (fe.call(e, "__wrapped__"))
            return nf(e);
        }
        return new je(e);
      }
      var it = function() {
        function e() {
        }
        return function(n) {
          if (!_e(n))
            return {};
          if (Ju)
            return Ju(n);
          e.prototype = n;
          var t = new e();
          return e.prototype = f, t;
        };
      }();
      function fr() {
      }
      function je(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = f;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qf,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: kf,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ou,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = fr.prototype, u.prototype.constructor = u, je.prototype = it(fr.prototype), je.prototype.constructor = je;
      function Q(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = We, this.__views__ = [];
      }
      function Po() {
        var e = new Q(this.__wrapped__);
        return e.__actions__ = Pe(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Pe(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Pe(this.__views__), e;
      }
      function Ho() {
        if (this.__filtered__) {
          var e = new Q(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Uo() {
        var e = this.__wrapped__.value(), n = this.__dir__, t = U(e), r = n < 0, i = t ? e.length : 0, l = Vs(0, i, this.__views__), a = l.start, o = l.end, c = o - a, g = r ? o : a - 1, v = this.__iteratees__, p = v.length, y = 0, S = Be(c, this.__takeCount__);
        if (!t || !r && i == c && S == c)
          return Sl(e, this.__actions__);
        var R = [];
        e:
          for (; c-- && y < S; ) {
            g += n;
            for (var K = -1, I = e[g]; ++K < p; ) {
              var X = v[K], k = X.iteratee, Ze = X.type, Me = k(I);
              if (Ze == me)
                I = Me;
              else if (!Me) {
                if (Ze == te)
                  continue e;
                break e;
              }
            }
            R[y++] = I;
          }
        return R;
      }
      Q.prototype = it(fr.prototype), Q.prototype.constructor = Q;
      function Gn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function Go() {
        this.__data__ = At ? At(null) : {}, this.size = 0;
      }
      function $o(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Ko(e) {
        var n = this.__data__;
        if (At) {
          var t = n[e];
          return t === x ? f : t;
        }
        return fe.call(n, e) ? n[e] : f;
      }
      function qo(e) {
        var n = this.__data__;
        return At ? n[e] !== f : fe.call(n, e);
      }
      function zo(e, n) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = At && n === f ? x : n, this;
      }
      Gn.prototype.clear = Go, Gn.prototype.delete = $o, Gn.prototype.get = Ko, Gn.prototype.has = qo, Gn.prototype.set = zo;
      function xn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function Yo() {
        this.__data__ = [], this.size = 0;
      }
      function Zo(e) {
        var n = this.__data__, t = ar(n, e);
        if (t < 0)
          return !1;
        var r = n.length - 1;
        return t == r ? n.pop() : nr.call(n, t, 1), --this.size, !0;
      }
      function Xo(e) {
        var n = this.__data__, t = ar(n, e);
        return t < 0 ? f : n[t][1];
      }
      function Jo(e) {
        return ar(this.__data__, e) > -1;
      }
      function Qo(e, n) {
        var t = this.__data__, r = ar(t, e);
        return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
      }
      xn.prototype.clear = Yo, xn.prototype.delete = Zo, xn.prototype.get = Xo, xn.prototype.has = Jo, xn.prototype.set = Qo;
      function mn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function ko() {
        this.size = 0, this.__data__ = {
          hash: new Gn(),
          map: new (xt || xn)(),
          string: new Gn()
        };
      }
      function Vo(e) {
        var n = xr(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function jo(e) {
        return xr(this, e).get(e);
      }
      function es(e) {
        return xr(this, e).has(e);
      }
      function ns(e, n) {
        var t = xr(this, e), r = t.size;
        return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
      }
      mn.prototype.clear = ko, mn.prototype.delete = Vo, mn.prototype.get = jo, mn.prototype.has = es, mn.prototype.set = ns;
      function $n(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.__data__ = new mn(); ++n < t; )
          this.add(e[n]);
      }
      function ts(e) {
        return this.__data__.set(e, x), this;
      }
      function rs(e) {
        return this.__data__.has(e);
      }
      $n.prototype.add = $n.prototype.push = ts, $n.prototype.has = rs;
      function on(e) {
        var n = this.__data__ = new xn(e);
        this.size = n.size;
      }
      function is() {
        this.__data__ = new xn(), this.size = 0;
      }
      function us(e) {
        var n = this.__data__, t = n.delete(e);
        return this.size = n.size, t;
      }
      function ls(e) {
        return this.__data__.get(e);
      }
      function fs(e) {
        return this.__data__.has(e);
      }
      function as(e, n) {
        var t = this.__data__;
        if (t instanceof xn) {
          var r = t.__data__;
          if (!xt || r.length < B - 1)
            return r.push([e, n]), this.size = ++t.size, this;
          t = this.__data__ = new mn(r);
        }
        return t.set(e, n), this.size = t.size, this;
      }
      on.prototype.clear = is, on.prototype.delete = us, on.prototype.get = ls, on.prototype.has = fs, on.prototype.set = as;
      function nl(e, n) {
        var t = U(e), r = !t && Zn(e), i = !t && !r && Mn(e), l = !t && !r && !i && at(e), a = t || r || i || l, o = a ? ii(e.length, wo) : [], c = o.length;
        for (var g in e)
          (n || fe.call(e, g)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
          (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
          bn(g, c))) && o.push(g);
        return o;
      }
      function tl(e) {
        var n = e.length;
        return n ? e[mi(0, n - 1)] : f;
      }
      function os(e, n) {
        return mr(Pe(e), Kn(n, 0, e.length));
      }
      function ss(e) {
        return mr(Pe(e));
      }
      function ci(e, n, t) {
        (t !== f && !sn(e[n], t) || t === f && !(n in e)) && An(e, n, t);
      }
      function St(e, n, t) {
        var r = e[n];
        (!(fe.call(e, n) && sn(r, t)) || t === f && !(n in e)) && An(e, n, t);
      }
      function ar(e, n) {
        for (var t = e.length; t--; )
          if (sn(e[t][0], n))
            return t;
        return -1;
      }
      function cs(e, n, t, r) {
        return On(e, function(i, l, a) {
          n(r, i, t(i), a);
        }), r;
      }
      function rl(e, n) {
        return e && vn(n, Ce(n), e);
      }
      function hs(e, n) {
        return e && vn(n, Ue(n), e);
      }
      function An(e, n, t) {
        n == "__proto__" && tr ? tr(e, n, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : e[n] = t;
      }
      function hi(e, n) {
        for (var t = -1, r = n.length, i = h(r), l = e == null; ++t < r; )
          i[t] = l ? f : Yi(e, n[t]);
        return i;
      }
      function Kn(e, n, t) {
        return e === e && (t !== f && (e = e <= t ? e : t), n !== f && (e = e >= n ? e : n)), e;
      }
      function en(e, n, t, r, i, l) {
        var a, o = n & J, c = n & $e, g = n & O;
        if (t && (a = i ? t(e, r, i, l) : t(e)), a !== f)
          return a;
        if (!_e(e))
          return e;
        var v = U(e);
        if (v) {
          if (a = ec(e), !o)
            return Pe(e, a);
        } else {
          var p = Oe(e), y = p == Ut || p == uu;
          if (Mn(e))
            return El(e, o);
          if (p == yn || p == w || y && !i) {
            if (a = c || y ? {} : Yl(e), !o)
              return c ? Ks(e, hs(a, e)) : $s(e, rl(a, e));
          } else {
            if (!ce[p])
              return i ? e : {};
            a = nc(e, p, o);
          }
        }
        l || (l = new on());
        var S = l.get(e);
        if (S)
          return S;
        l.set(e, a), Af(e) ? e.forEach(function(I) {
          a.add(en(I, n, t, I, e, l));
        }) : xf(e) && e.forEach(function(I, X) {
          a.set(X, en(I, n, t, X, e, l));
        });
        var R = g ? c ? Bi : Ii : c ? Ue : Ce, K = v ? f : R(e);
        return ke(K || e, function(I, X) {
          K && (X = I, I = e[X]), St(a, X, en(I, n, t, X, e, l));
        }), a;
      }
      function ds(e) {
        var n = Ce(e);
        return function(t) {
          return il(t, e, n);
        };
      }
      function il(e, n, t) {
        var r = t.length;
        if (e == null)
          return !r;
        for (e = oe(e); r--; ) {
          var i = t[r], l = n[i], a = e[i];
          if (a === f && !(i in e) || !l(a))
            return !1;
        }
        return !0;
      }
      function ul(e, n, t) {
        if (typeof e != "function")
          throw new Ve($);
        return It(function() {
          e.apply(f, t);
        }, n);
      }
      function bt(e, n, t, r) {
        var i = -1, l = zt, a = !0, o = e.length, c = [], g = n.length;
        if (!o)
          return c;
        t && (n = ge(n, qe(t))), r ? (l = Vr, a = !1) : n.length >= B && (l = wt, a = !1, n = new $n(n));
        e:
          for (; ++i < o; ) {
            var v = e[i], p = t == null ? v : t(v);
            if (v = r || v !== 0 ? v : 0, a && p === p) {
              for (var y = g; y--; )
                if (n[y] === p)
                  continue e;
              c.push(v);
            } else
              l(n, p, r) || c.push(v);
          }
        return c;
      }
      var On = Bl(gn), ll = Bl(gi, !0);
      function gs(e, n) {
        var t = !0;
        return On(e, function(r, i, l) {
          return t = !!n(r, i, l), t;
        }), t;
      }
      function or(e, n, t) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var l = e[r], a = n(l);
          if (a != null && (o === f ? a === a && !Ye(a) : t(a, o)))
            var o = a, c = l;
        }
        return c;
      }
      function vs(e, n, t, r) {
        var i = e.length;
        for (t = G(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === f || r > i ? i : G(r), r < 0 && (r += i), r = t > r ? 0 : Sf(r); t < r; )
          e[t++] = n;
        return e;
      }
      function fl(e, n) {
        var t = [];
        return On(e, function(r, i, l) {
          n(r, i, l) && t.push(r);
        }), t;
      }
      function Ie(e, n, t, r, i) {
        var l = -1, a = e.length;
        for (t || (t = rc), i || (i = []); ++l < a; ) {
          var o = e[l];
          n > 0 && t(o) ? n > 1 ? Ie(o, n - 1, t, r, i) : Rn(i, o) : r || (i[i.length] = o);
        }
        return i;
      }
      var di = Ol(), al = Ol(!0);
      function gn(e, n) {
        return e && di(e, n, Ce);
      }
      function gi(e, n) {
        return e && al(e, n, Ce);
      }
      function sr(e, n) {
        return Wn(n, function(t) {
          return Ln(e[t]);
        });
      }
      function qn(e, n) {
        n = Fn(n, e);
        for (var t = 0, r = n.length; e != null && t < r; )
          e = e[pn(n[t++])];
        return t && t == r ? e : f;
      }
      function ol(e, n, t) {
        var r = n(e);
        return U(e) ? r : Rn(r, t(e));
      }
      function Fe(e) {
        return e == null ? e === f ? Kf : Gf : Un && Un in oe(e) ? ks(e) : sc(e);
      }
      function vi(e, n) {
        return e > n;
      }
      function ps(e, n) {
        return e != null && fe.call(e, n);
      }
      function _s(e, n) {
        return e != null && n in oe(e);
      }
      function ws(e, n, t) {
        return e >= Be(n, t) && e < be(n, t);
      }
      function pi(e, n, t) {
        for (var r = t ? Vr : zt, i = e[0].length, l = e.length, a = l, o = h(l), c = 1 / 0, g = []; a--; ) {
          var v = e[a];
          a && n && (v = ge(v, qe(n))), c = Be(v.length, c), o[a] = !t && (n || i >= 120 && v.length >= 120) ? new $n(a && v) : f;
        }
        v = e[0];
        var p = -1, y = o[0];
        e:
          for (; ++p < i && g.length < c; ) {
            var S = v[p], R = n ? n(S) : S;
            if (S = t || S !== 0 ? S : 0, !(y ? wt(y, R) : r(g, R, t))) {
              for (a = l; --a; ) {
                var K = o[a];
                if (!(K ? wt(K, R) : r(e[a], R, t)))
                  continue e;
              }
              y && y.push(R), g.push(S);
            }
          }
        return g;
      }
      function ys(e, n, t, r) {
        return gn(e, function(i, l, a) {
          n(r, t(i), l, a);
        }), r;
      }
      function Lt(e, n, t) {
        n = Fn(n, e), e = Ql(e, n);
        var r = e == null ? e : e[pn(tn(n))];
        return r == null ? f : Ke(r, e, t);
      }
      function sl(e) {
        return ye(e) && Fe(e) == w;
      }
      function xs(e) {
        return ye(e) && Fe(e) == _t;
      }
      function ms(e) {
        return ye(e) && Fe(e) == Ne;
      }
      function Et(e, n, t, r, i) {
        return e === n ? !0 : e == null || n == null || !ye(e) && !ye(n) ? e !== e && n !== n : As(e, n, t, r, Et, i);
      }
      function As(e, n, t, r, i, l) {
        var a = U(e), o = U(n), c = a ? M : Oe(e), g = o ? M : Oe(n);
        c = c == w ? yn : c, g = g == w ? yn : g;
        var v = c == yn, p = g == yn, y = c == g;
        if (y && Mn(e)) {
          if (!Mn(n))
            return !1;
          a = !0, v = !1;
        }
        if (y && !v)
          return l || (l = new on()), a || at(e) ? Kl(e, n, t, r, i, l) : Js(e, n, c, t, r, i, l);
        if (!(t & b)) {
          var S = v && fe.call(e, "__wrapped__"), R = p && fe.call(n, "__wrapped__");
          if (S || R) {
            var K = S ? e.value() : e, I = R ? n.value() : n;
            return l || (l = new on()), i(K, I, t, r, l);
          }
        }
        return y ? (l || (l = new on()), Qs(e, n, t, r, i, l)) : !1;
      }
      function Ts(e) {
        return ye(e) && Oe(e) == ln;
      }
      function _i(e, n, t, r) {
        var i = t.length, l = i, a = !r;
        if (e == null)
          return !l;
        for (e = oe(e); i--; ) {
          var o = t[i];
          if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
            return !1;
        }
        for (; ++i < l; ) {
          o = t[i];
          var c = o[0], g = e[c], v = o[1];
          if (a && o[2]) {
            if (g === f && !(c in e))
              return !1;
          } else {
            var p = new on();
            if (r)
              var y = r(g, v, c, e, n, p);
            if (!(y === f ? Et(v, g, b | ee, r, p) : y))
              return !1;
          }
        }
        return !0;
      }
      function cl(e) {
        if (!_e(e) || uc(e))
          return !1;
        var n = Ln(e) ? To : ha;
        return n.test(Yn(e));
      }
      function Ss(e) {
        return ye(e) && Fe(e) == gt;
      }
      function bs(e) {
        return ye(e) && Oe(e) == fn;
      }
      function Ls(e) {
        return ye(e) && Er(e.length) && !!he[Fe(e)];
      }
      function hl(e) {
        return typeof e == "function" ? e : e == null ? Ge : typeof e == "object" ? U(e) ? vl(e[0], e[1]) : gl(e) : Ff(e);
      }
      function wi(e) {
        if (!Rt(e))
          return Wo(e);
        var n = [];
        for (var t in oe(e))
          fe.call(e, t) && t != "constructor" && n.push(t);
        return n;
      }
      function Es(e) {
        if (!_e(e))
          return oc(e);
        var n = Rt(e), t = [];
        for (var r in e)
          r == "constructor" && (n || !fe.call(e, r)) || t.push(r);
        return t;
      }
      function yi(e, n) {
        return e < n;
      }
      function dl(e, n) {
        var t = -1, r = He(e) ? h(e.length) : [];
        return On(e, function(i, l, a) {
          r[++t] = n(i, l, a);
        }), r;
      }
      function gl(e) {
        var n = Ni(e);
        return n.length == 1 && n[0][2] ? Xl(n[0][0], n[0][1]) : function(t) {
          return t === e || _i(t, e, n);
        };
      }
      function vl(e, n) {
        return Di(e) && Zl(n) ? Xl(pn(e), n) : function(t) {
          var r = Yi(t, e);
          return r === f && r === n ? Zi(t, e) : Et(n, r, b | ee);
        };
      }
      function cr(e, n, t, r, i) {
        e !== n && di(n, function(l, a) {
          if (i || (i = new on()), _e(l))
            Cs(e, n, a, t, cr, r, i);
          else {
            var o = r ? r(Pi(e, a), l, a + "", e, n, i) : f;
            o === f && (o = l), ci(e, a, o);
          }
        }, Ue);
      }
      function Cs(e, n, t, r, i, l, a) {
        var o = Pi(e, t), c = Pi(n, t), g = a.get(c);
        if (g) {
          ci(e, t, g);
          return;
        }
        var v = l ? l(o, c, t + "", e, n, a) : f, p = v === f;
        if (p) {
          var y = U(c), S = !y && Mn(c), R = !y && !S && at(c);
          v = c, y || S || R ? U(o) ? v = o : Ae(o) ? v = Pe(o) : S ? (p = !1, v = El(c, !0)) : R ? (p = !1, v = Cl(c, !0)) : v = [] : Bt(c) || Zn(c) ? (v = o, Zn(o) ? v = bf(o) : (!_e(o) || Ln(o)) && (v = Yl(c))) : p = !1;
        }
        p && (a.set(c, v), i(v, c, r, l, a), a.delete(c)), ci(e, t, v);
      }
      function pl(e, n) {
        var t = e.length;
        if (t)
          return n += n < 0 ? t : 0, bn(n, t) ? e[n] : f;
      }
      function _l(e, n, t) {
        n.length ? n = ge(n, function(l) {
          return U(l) ? function(a) {
            return qn(a, l.length === 1 ? l[0] : l);
          } : l;
        }) : n = [Ge];
        var r = -1;
        n = ge(n, qe(W()));
        var i = dl(e, function(l, a, o) {
          var c = ge(n, function(g) {
            return g(l);
          });
          return { criteria: c, index: ++r, value: l };
        });
        return eo(i, function(l, a) {
          return Gs(l, a, t);
        });
      }
      function Ws(e, n) {
        return wl(e, n, function(t, r) {
          return Zi(e, r);
        });
      }
      function wl(e, n, t) {
        for (var r = -1, i = n.length, l = {}; ++r < i; ) {
          var a = n[r], o = qn(e, a);
          t(o, a) && Ct(l, Fn(a, e), o);
        }
        return l;
      }
      function Rs(e) {
        return function(n) {
          return qn(n, e);
        };
      }
      function xi(e, n, t, r) {
        var i = r ? ja : kn, l = -1, a = n.length, o = e;
        for (e === n && (n = Pe(n)), t && (o = ge(e, qe(t))); ++l < a; )
          for (var c = 0, g = n[l], v = t ? t(g) : g; (c = i(o, v, c, r)) > -1; )
            o !== e && nr.call(o, c, 1), nr.call(e, c, 1);
        return e;
      }
      function yl(e, n) {
        for (var t = e ? n.length : 0, r = t - 1; t--; ) {
          var i = n[t];
          if (t == r || i !== l) {
            var l = i;
            bn(i) ? nr.call(e, i, 1) : Si(e, i);
          }
        }
        return e;
      }
      function mi(e, n) {
        return e + ir(ju() * (n - e + 1));
      }
      function Is(e, n, t, r) {
        for (var i = -1, l = be(rr((n - e) / (t || 1)), 0), a = h(l); l--; )
          a[r ? l : ++i] = e, e += t;
        return a;
      }
      function Ai(e, n) {
        var t = "";
        if (!e || n < 1 || n > Ee)
          return t;
        do
          n % 2 && (t += e), n = ir(n / 2), n && (e += e);
        while (n);
        return t;
      }
      function Y(e, n) {
        return Hi(Jl(e, n, Ge), e + "");
      }
      function Bs(e) {
        return tl(ot(e));
      }
      function Os(e, n) {
        var t = ot(e);
        return mr(t, Kn(n, 0, t.length));
      }
      function Ct(e, n, t, r) {
        if (!_e(e))
          return e;
        n = Fn(n, e);
        for (var i = -1, l = n.length, a = l - 1, o = e; o != null && ++i < l; ) {
          var c = pn(n[i]), g = t;
          if (c === "__proto__" || c === "constructor" || c === "prototype")
            return e;
          if (i != a) {
            var v = o[c];
            g = r ? r(v, c, o) : f, g === f && (g = _e(v) ? v : bn(n[i + 1]) ? [] : {});
          }
          St(o, c, g), o = o[c];
        }
        return e;
      }
      var xl = ur ? function(e, n) {
        return ur.set(e, n), e;
      } : Ge, Ns = tr ? function(e, n) {
        return tr(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ji(n),
          writable: !0
        });
      } : Ge;
      function Fs(e) {
        return mr(ot(e));
      }
      function nn(e, n, t) {
        var r = -1, i = e.length;
        n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
        for (var l = h(i); ++r < i; )
          l[r] = e[r + n];
        return l;
      }
      function Ds(e, n) {
        var t;
        return On(e, function(r, i, l) {
          return t = n(r, i, l), !t;
        }), !!t;
      }
      function hr(e, n, t) {
        var r = 0, i = e == null ? r : e.length;
        if (typeof n == "number" && n === n && i <= Pt) {
          for (; r < i; ) {
            var l = r + i >>> 1, a = e[l];
            a !== null && !Ye(a) && (t ? a <= n : a < n) ? r = l + 1 : i = l;
          }
          return i;
        }
        return Ti(e, n, Ge, t);
      }
      function Ti(e, n, t, r) {
        var i = 0, l = e == null ? 0 : e.length;
        if (l === 0)
          return 0;
        n = t(n);
        for (var a = n !== n, o = n === null, c = Ye(n), g = n === f; i < l; ) {
          var v = ir((i + l) / 2), p = t(e[v]), y = p !== f, S = p === null, R = p === p, K = Ye(p);
          if (a)
            var I = r || R;
          else
            g ? I = R && (r || y) : o ? I = R && y && (r || !S) : c ? I = R && y && !S && (r || !K) : S || K ? I = !1 : I = r ? p <= n : p < n;
          I ? i = v + 1 : l = v;
        }
        return Be(l, Mt);
      }
      function ml(e, n) {
        for (var t = -1, r = e.length, i = 0, l = []; ++t < r; ) {
          var a = e[t], o = n ? n(a) : a;
          if (!t || !sn(o, c)) {
            var c = o;
            l[i++] = a === 0 ? 0 : a;
          }
        }
        return l;
      }
      function Al(e) {
        return typeof e == "number" ? e : Ye(e) ? wn : +e;
      }
      function ze(e) {
        if (typeof e == "string")
          return e;
        if (U(e))
          return ge(e, ze) + "";
        if (Ye(e))
          return el ? el.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -we ? "-0" : n;
      }
      function Nn(e, n, t) {
        var r = -1, i = zt, l = e.length, a = !0, o = [], c = o;
        if (t)
          a = !1, i = Vr;
        else if (l >= B) {
          var g = n ? null : Zs(e);
          if (g)
            return Zt(g);
          a = !1, i = wt, c = new $n();
        } else
          c = n ? [] : o;
        e:
          for (; ++r < l; ) {
            var v = e[r], p = n ? n(v) : v;
            if (v = t || v !== 0 ? v : 0, a && p === p) {
              for (var y = c.length; y--; )
                if (c[y] === p)
                  continue e;
              n && c.push(p), o.push(v);
            } else
              i(c, p, t) || (c !== o && c.push(p), o.push(v));
          }
        return o;
      }
      function Si(e, n) {
        return n = Fn(n, e), e = Ql(e, n), e == null || delete e[pn(tn(n))];
      }
      function Tl(e, n, t, r) {
        return Ct(e, n, t(qn(e, n)), r);
      }
      function dr(e, n, t, r) {
        for (var i = e.length, l = r ? i : -1; (r ? l-- : ++l < i) && n(e[l], l, e); )
          ;
        return t ? nn(e, r ? 0 : l, r ? l + 1 : i) : nn(e, r ? l + 1 : 0, r ? i : l);
      }
      function Sl(e, n) {
        var t = e;
        return t instanceof Q && (t = t.value()), jr(n, function(r, i) {
          return i.func.apply(i.thisArg, Rn([r], i.args));
        }, t);
      }
      function bi(e, n, t) {
        var r = e.length;
        if (r < 2)
          return r ? Nn(e[0]) : [];
        for (var i = -1, l = h(r); ++i < r; )
          for (var a = e[i], o = -1; ++o < r; )
            o != i && (l[i] = bt(l[i] || a, e[o], n, t));
        return Nn(Ie(l, 1), n, t);
      }
      function bl(e, n, t) {
        for (var r = -1, i = e.length, l = n.length, a = {}; ++r < i; ) {
          var o = r < l ? n[r] : f;
          t(a, e[r], o);
        }
        return a;
      }
      function Li(e) {
        return Ae(e) ? e : [];
      }
      function Ei(e) {
        return typeof e == "function" ? e : Ge;
      }
      function Fn(e, n) {
        return U(e) ? e : Di(e, n) ? [e] : ef(le(e));
      }
      var Ms = Y;
      function Dn(e, n, t) {
        var r = e.length;
        return t = t === f ? r : t, !n && t >= r ? e : nn(e, n, t);
      }
      var Ll = So || function(e) {
        return Re.clearTimeout(e);
      };
      function El(e, n) {
        if (n)
          return e.slice();
        var t = e.length, r = Xu ? Xu(t) : new e.constructor(t);
        return e.copy(r), r;
      }
      function Ci(e) {
        var n = new e.constructor(e.byteLength);
        return new jt(n).set(new jt(e)), n;
      }
      function Ps(e, n) {
        var t = n ? Ci(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.byteLength);
      }
      function Hs(e) {
        var n = new e.constructor(e.source, su.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Us(e) {
        return Tt ? oe(Tt.call(e)) : {};
      }
      function Cl(e, n) {
        var t = n ? Ci(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.length);
      }
      function Wl(e, n) {
        if (e !== n) {
          var t = e !== f, r = e === null, i = e === e, l = Ye(e), a = n !== f, o = n === null, c = n === n, g = Ye(n);
          if (!o && !g && !l && e > n || l && a && c && !o && !g || r && a && c || !t && c || !i)
            return 1;
          if (!r && !l && !g && e < n || g && t && i && !r && !l || o && t && i || !a && i || !c)
            return -1;
        }
        return 0;
      }
      function Gs(e, n, t) {
        for (var r = -1, i = e.criteria, l = n.criteria, a = i.length, o = t.length; ++r < a; ) {
          var c = Wl(i[r], l[r]);
          if (c) {
            if (r >= o)
              return c;
            var g = t[r];
            return c * (g == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Rl(e, n, t, r) {
        for (var i = -1, l = e.length, a = t.length, o = -1, c = n.length, g = be(l - a, 0), v = h(c + g), p = !r; ++o < c; )
          v[o] = n[o];
        for (; ++i < a; )
          (p || i < l) && (v[t[i]] = e[i]);
        for (; g--; )
          v[o++] = e[i++];
        return v;
      }
      function Il(e, n, t, r) {
        for (var i = -1, l = e.length, a = -1, o = t.length, c = -1, g = n.length, v = be(l - o, 0), p = h(v + g), y = !r; ++i < v; )
          p[i] = e[i];
        for (var S = i; ++c < g; )
          p[S + c] = n[c];
        for (; ++a < o; )
          (y || i < l) && (p[S + t[a]] = e[i++]);
        return p;
      }
      function Pe(e, n) {
        var t = -1, r = e.length;
        for (n || (n = h(r)); ++t < r; )
          n[t] = e[t];
        return n;
      }
      function vn(e, n, t, r) {
        var i = !t;
        t || (t = {});
        for (var l = -1, a = n.length; ++l < a; ) {
          var o = n[l], c = r ? r(t[o], e[o], o, t, e) : f;
          c === f && (c = e[o]), i ? An(t, o, c) : St(t, o, c);
        }
        return t;
      }
      function $s(e, n) {
        return vn(e, Fi(e), n);
      }
      function Ks(e, n) {
        return vn(e, ql(e), n);
      }
      function gr(e, n) {
        return function(t, r) {
          var i = U(t) ? Za : cs, l = n ? n() : {};
          return i(t, e, W(r, 2), l);
        };
      }
      function ut(e) {
        return Y(function(n, t) {
          var r = -1, i = t.length, l = i > 1 ? t[i - 1] : f, a = i > 2 ? t[2] : f;
          for (l = e.length > 3 && typeof l == "function" ? (i--, l) : f, a && De(t[0], t[1], a) && (l = i < 3 ? f : l, i = 1), n = oe(n); ++r < i; ) {
            var o = t[r];
            o && e(n, o, r, l);
          }
          return n;
        });
      }
      function Bl(e, n) {
        return function(t, r) {
          if (t == null)
            return t;
          if (!He(t))
            return e(t, r);
          for (var i = t.length, l = n ? i : -1, a = oe(t); (n ? l-- : ++l < i) && r(a[l], l, a) !== !1; )
            ;
          return t;
        };
      }
      function Ol(e) {
        return function(n, t, r) {
          for (var i = -1, l = oe(n), a = r(n), o = a.length; o--; ) {
            var c = a[e ? o : ++i];
            if (t(l[c], c, l) === !1)
              break;
          }
          return n;
        };
      }
      function qs(e, n, t) {
        var r = n & ue, i = Wt(e);
        function l() {
          var a = this && this !== Re && this instanceof l ? i : e;
          return a.apply(r ? t : this, arguments);
        }
        return l;
      }
      function Nl(e) {
        return function(n) {
          n = le(n);
          var t = Vn(n) ? an(n) : f, r = t ? t[0] : n.charAt(0), i = t ? Dn(t, 1).join("") : n.slice(1);
          return r[e]() + i;
        };
      }
      function lt(e) {
        return function(n) {
          return jr(Of(Bf(n).replace(Oa, "")), e, "");
        };
      }
      function Wt(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var t = it(e.prototype), r = e.apply(t, n);
          return _e(r) ? r : t;
        };
      }
      function zs(e, n, t) {
        var r = Wt(e);
        function i() {
          for (var l = arguments.length, a = h(l), o = l, c = ft(i); o--; )
            a[o] = arguments[o];
          var g = l < 3 && a[0] !== c && a[l - 1] !== c ? [] : In(a, c);
          if (l -= g.length, l < t)
            return Hl(
              e,
              n,
              vr,
              i.placeholder,
              f,
              a,
              g,
              f,
              f,
              t - l
            );
          var v = this && this !== Re && this instanceof i ? r : e;
          return Ke(v, this, a);
        }
        return i;
      }
      function Fl(e) {
        return function(n, t, r) {
          var i = oe(n);
          if (!He(n)) {
            var l = W(t, 3);
            n = Ce(n), t = function(o) {
              return l(i[o], o, i);
            };
          }
          var a = e(n, t, r);
          return a > -1 ? i[l ? n[a] : a] : f;
        };
      }
      function Dl(e) {
        return Sn(function(n) {
          var t = n.length, r = t, i = je.prototype.thru;
          for (e && n.reverse(); r--; ) {
            var l = n[r];
            if (typeof l != "function")
              throw new Ve($);
            if (i && !a && yr(l) == "wrapper")
              var a = new je([], !0);
          }
          for (r = a ? r : t; ++r < t; ) {
            l = n[r];
            var o = yr(l), c = o == "wrapper" ? Oi(l) : f;
            c && Mi(c[0]) && c[1] == (ne | T | z | pe) && !c[4].length && c[9] == 1 ? a = a[yr(c[0])].apply(a, c[3]) : a = l.length == 1 && Mi(l) ? a[o]() : a.thru(l);
          }
          return function() {
            var g = arguments, v = g[0];
            if (a && g.length == 1 && U(v))
              return a.plant(v).value();
            for (var p = 0, y = t ? n[p].apply(this, g) : v; ++p < t; )
              y = n[p].call(this, y);
            return y;
          };
        });
      }
      function vr(e, n, t, r, i, l, a, o, c, g) {
        var v = n & ne, p = n & ue, y = n & xe, S = n & (T | j), R = n & Le, K = y ? f : Wt(e);
        function I() {
          for (var X = arguments.length, k = h(X), Ze = X; Ze--; )
            k[Ze] = arguments[Ze];
          if (S)
            var Me = ft(I), Xe = to(k, Me);
          if (r && (k = Rl(k, r, i, S)), l && (k = Il(k, l, a, S)), X -= Xe, S && X < g) {
            var Te = In(k, Me);
            return Hl(
              e,
              n,
              vr,
              I.placeholder,
              t,
              k,
              Te,
              o,
              c,
              g - X
            );
          }
          var cn = p ? t : this, Cn = y ? cn[e] : e;
          return X = k.length, o ? k = cc(k, o) : R && X > 1 && k.reverse(), v && c < X && (k.length = c), this && this !== Re && this instanceof I && (Cn = K || Wt(Cn)), Cn.apply(cn, k);
        }
        return I;
      }
      function Ml(e, n) {
        return function(t, r) {
          return ys(t, e, n(r), {});
        };
      }
      function pr(e, n) {
        return function(t, r) {
          var i;
          if (t === f && r === f)
            return n;
          if (t !== f && (i = t), r !== f) {
            if (i === f)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = ze(t), r = ze(r)) : (t = Al(t), r = Al(r)), i = e(t, r);
          }
          return i;
        };
      }
      function Wi(e) {
        return Sn(function(n) {
          return n = ge(n, qe(W())), Y(function(t) {
            var r = this;
            return e(n, function(i) {
              return Ke(i, r, t);
            });
          });
        });
      }
      function _r(e, n) {
        n = n === f ? " " : ze(n);
        var t = n.length;
        if (t < 2)
          return t ? Ai(n, e) : n;
        var r = Ai(n, rr(e / jn(n)));
        return Vn(n) ? Dn(an(r), 0, e).join("") : r.slice(0, e);
      }
      function Ys(e, n, t, r) {
        var i = n & ue, l = Wt(e);
        function a() {
          for (var o = -1, c = arguments.length, g = -1, v = r.length, p = h(v + c), y = this && this !== Re && this instanceof a ? l : e; ++g < v; )
            p[g] = r[g];
          for (; c--; )
            p[g++] = arguments[++o];
          return Ke(y, i ? t : this, p);
        }
        return a;
      }
      function Pl(e) {
        return function(n, t, r) {
          return r && typeof r != "number" && De(n, t, r) && (t = r = f), n = En(n), t === f ? (t = n, n = 0) : t = En(t), r = r === f ? n < t ? 1 : -1 : En(r), Is(n, t, r, e);
        };
      }
      function wr(e) {
        return function(n, t) {
          return typeof n == "string" && typeof t == "string" || (n = rn(n), t = rn(t)), e(n, t);
        };
      }
      function Hl(e, n, t, r, i, l, a, o, c, g) {
        var v = n & T, p = v ? a : f, y = v ? f : a, S = v ? l : f, R = v ? f : l;
        n |= v ? z : ae, n &= ~(v ? ae : z), n & un || (n &= ~(ue | xe));
        var K = [
          e,
          n,
          i,
          S,
          p,
          R,
          y,
          o,
          c,
          g
        ], I = t.apply(f, K);
        return Mi(e) && kl(I, K), I.placeholder = r, Vl(I, e, n);
      }
      function Ri(e) {
        var n = Se[e];
        return function(t, r) {
          if (t = rn(t), r = r == null ? 0 : Be(G(r), 292), r && Vu(t)) {
            var i = (le(t) + "e").split("e"), l = n(i[0] + "e" + (+i[1] + r));
            return i = (le(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return n(t);
        };
      }
      var Zs = tt && 1 / Zt(new tt([, -0]))[1] == we ? function(e) {
        return new tt(e);
      } : Vi;
      function Ul(e) {
        return function(n) {
          var t = Oe(n);
          return t == ln ? li(n) : t == fn ? oo(n) : no(n, e(n));
        };
      }
      function Tn(e, n, t, r, i, l, a, o) {
        var c = n & xe;
        if (!c && typeof e != "function")
          throw new Ve($);
        var g = r ? r.length : 0;
        if (g || (n &= ~(z | ae), r = i = f), a = a === f ? a : be(G(a), 0), o = o === f ? o : G(o), g -= i ? i.length : 0, n & ae) {
          var v = r, p = i;
          r = i = f;
        }
        var y = c ? f : Oi(e), S = [
          e,
          n,
          t,
          r,
          i,
          v,
          p,
          l,
          a,
          o
        ];
        if (y && ac(S, y), e = S[0], n = S[1], t = S[2], r = S[3], i = S[4], o = S[9] = S[9] === f ? c ? 0 : e.length : be(S[9] - g, 0), !o && n & (T | j) && (n &= ~(T | j)), !n || n == ue)
          var R = qs(e, n, t);
        else
          n == T || n == j ? R = zs(e, n, o) : (n == z || n == (ue | z)) && !i.length ? R = Ys(e, n, t, r) : R = vr.apply(f, S);
        var K = y ? xl : kl;
        return Vl(K(R, S), e, n);
      }
      function Gl(e, n, t, r) {
        return e === f || sn(e, nt[t]) && !fe.call(r, t) ? n : e;
      }
      function $l(e, n, t, r, i, l) {
        return _e(e) && _e(n) && (l.set(n, e), cr(e, n, f, $l, l), l.delete(n)), e;
      }
      function Xs(e) {
        return Bt(e) ? f : e;
      }
      function Kl(e, n, t, r, i, l) {
        var a = t & b, o = e.length, c = n.length;
        if (o != c && !(a && c > o))
          return !1;
        var g = l.get(e), v = l.get(n);
        if (g && v)
          return g == n && v == e;
        var p = -1, y = !0, S = t & ee ? new $n() : f;
        for (l.set(e, n), l.set(n, e); ++p < o; ) {
          var R = e[p], K = n[p];
          if (r)
            var I = a ? r(K, R, p, n, e, l) : r(R, K, p, e, n, l);
          if (I !== f) {
            if (I)
              continue;
            y = !1;
            break;
          }
          if (S) {
            if (!ei(n, function(X, k) {
              if (!wt(S, k) && (R === X || i(R, X, t, r, l)))
                return S.push(k);
            })) {
              y = !1;
              break;
            }
          } else if (!(R === K || i(R, K, t, r, l))) {
            y = !1;
            break;
          }
        }
        return l.delete(e), l.delete(n), y;
      }
      function Js(e, n, t, r, i, l, a) {
        switch (t) {
          case Jn:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case _t:
            return !(e.byteLength != n.byteLength || !l(new jt(e), new jt(n)));
          case Z:
          case Ne:
          case dt:
            return sn(+e, +n);
          case Ht:
            return e.name == n.name && e.message == n.message;
          case gt:
          case vt:
            return e == n + "";
          case ln:
            var o = li;
          case fn:
            var c = r & b;
            if (o || (o = Zt), e.size != n.size && !c)
              return !1;
            var g = a.get(e);
            if (g)
              return g == n;
            r |= ee, a.set(e, n);
            var v = Kl(o(e), o(n), r, i, l, a);
            return a.delete(e), v;
          case Gt:
            if (Tt)
              return Tt.call(e) == Tt.call(n);
        }
        return !1;
      }
      function Qs(e, n, t, r, i, l) {
        var a = t & b, o = Ii(e), c = o.length, g = Ii(n), v = g.length;
        if (c != v && !a)
          return !1;
        for (var p = c; p--; ) {
          var y = o[p];
          if (!(a ? y in n : fe.call(n, y)))
            return !1;
        }
        var S = l.get(e), R = l.get(n);
        if (S && R)
          return S == n && R == e;
        var K = !0;
        l.set(e, n), l.set(n, e);
        for (var I = a; ++p < c; ) {
          y = o[p];
          var X = e[y], k = n[y];
          if (r)
            var Ze = a ? r(k, X, y, n, e, l) : r(X, k, y, e, n, l);
          if (!(Ze === f ? X === k || i(X, k, t, r, l) : Ze)) {
            K = !1;
            break;
          }
          I || (I = y == "constructor");
        }
        if (K && !I) {
          var Me = e.constructor, Xe = n.constructor;
          Me != Xe && "constructor" in e && "constructor" in n && !(typeof Me == "function" && Me instanceof Me && typeof Xe == "function" && Xe instanceof Xe) && (K = !1);
        }
        return l.delete(e), l.delete(n), K;
      }
      function Sn(e) {
        return Hi(Jl(e, f, uf), e + "");
      }
      function Ii(e) {
        return ol(e, Ce, Fi);
      }
      function Bi(e) {
        return ol(e, Ue, ql);
      }
      var Oi = ur ? function(e) {
        return ur.get(e);
      } : Vi;
      function yr(e) {
        for (var n = e.name + "", t = rt[n], r = fe.call(rt, n) ? t.length : 0; r--; ) {
          var i = t[r], l = i.func;
          if (l == null || l == e)
            return i.name;
        }
        return n;
      }
      function ft(e) {
        var n = fe.call(u, "placeholder") ? u : e;
        return n.placeholder;
      }
      function W() {
        var e = u.iteratee || Qi;
        return e = e === Qi ? hl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function xr(e, n) {
        var t = e.__data__;
        return ic(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
      }
      function Ni(e) {
        for (var n = Ce(e), t = n.length; t--; ) {
          var r = n[t], i = e[r];
          n[t] = [r, i, Zl(i)];
        }
        return n;
      }
      function zn(e, n) {
        var t = lo(e, n);
        return cl(t) ? t : f;
      }
      function ks(e) {
        var n = fe.call(e, Un), t = e[Un];
        try {
          e[Un] = f;
          var r = !0;
        } catch {
        }
        var i = kt.call(e);
        return r && (n ? e[Un] = t : delete e[Un]), i;
      }
      var Fi = ai ? function(e) {
        return e == null ? [] : (e = oe(e), Wn(ai(e), function(n) {
          return Qu.call(e, n);
        }));
      } : ji, ql = ai ? function(e) {
        for (var n = []; e; )
          Rn(n, Fi(e)), e = er(e);
        return n;
      } : ji, Oe = Fe;
      (oi && Oe(new oi(new ArrayBuffer(1))) != Jn || xt && Oe(new xt()) != ln || si && Oe(si.resolve()) != lu || tt && Oe(new tt()) != fn || mt && Oe(new mt()) != pt) && (Oe = function(e) {
        var n = Fe(e), t = n == yn ? e.constructor : f, r = t ? Yn(t) : "";
        if (r)
          switch (r) {
            case Oo:
              return Jn;
            case No:
              return ln;
            case Fo:
              return lu;
            case Do:
              return fn;
            case Mo:
              return pt;
          }
        return n;
      });
      function Vs(e, n, t) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var l = t[r], a = l.size;
          switch (l.type) {
            case "drop":
              e += a;
              break;
            case "dropRight":
              n -= a;
              break;
            case "take":
              n = Be(n, e + a);
              break;
            case "takeRight":
              e = be(e, n - a);
              break;
          }
        }
        return { start: e, end: n };
      }
      function js(e) {
        var n = e.match(ia);
        return n ? n[1].split(ua) : [];
      }
      function zl(e, n, t) {
        n = Fn(n, e);
        for (var r = -1, i = n.length, l = !1; ++r < i; ) {
          var a = pn(n[r]);
          if (!(l = e != null && t(e, a)))
            break;
          e = e[a];
        }
        return l || ++r != i ? l : (i = e == null ? 0 : e.length, !!i && Er(i) && bn(a, i) && (U(e) || Zn(e)));
      }
      function ec(e) {
        var n = e.length, t = new e.constructor(n);
        return n && typeof e[0] == "string" && fe.call(e, "index") && (t.index = e.index, t.input = e.input), t;
      }
      function Yl(e) {
        return typeof e.constructor == "function" && !Rt(e) ? it(er(e)) : {};
      }
      function nc(e, n, t) {
        var r = e.constructor;
        switch (n) {
          case _t:
            return Ci(e);
          case Z:
          case Ne:
            return new r(+e);
          case Jn:
            return Ps(e, t);
          case Nr:
          case Fr:
          case Dr:
          case Mr:
          case Pr:
          case Hr:
          case Ur:
          case Gr:
          case $r:
            return Cl(e, t);
          case ln:
            return new r();
          case dt:
          case vt:
            return new r(e);
          case gt:
            return Hs(e);
          case fn:
            return new r();
          case Gt:
            return Us(e);
        }
      }
      function tc(e, n) {
        var t = n.length;
        if (!t)
          return e;
        var r = t - 1;
        return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(ra, `{
/* [wrapped with ` + n + `] */
`);
      }
      function rc(e) {
        return U(e) || Zn(e) || !!(ku && e && e[ku]);
      }
      function bn(e, n) {
        var t = typeof e;
        return n = n ?? Ee, !!n && (t == "number" || t != "symbol" && ga.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function De(e, n, t) {
        if (!_e(t))
          return !1;
        var r = typeof n;
        return (r == "number" ? He(t) && bn(n, t.length) : r == "string" && n in t) ? sn(t[n], e) : !1;
      }
      function Di(e, n) {
        if (U(e))
          return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || Ye(e) ? !0 : jf.test(e) || !Vf.test(e) || n != null && e in oe(n);
      }
      function ic(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Mi(e) {
        var n = yr(e), t = u[n];
        if (typeof t != "function" || !(n in Q.prototype))
          return !1;
        if (e === t)
          return !0;
        var r = Oi(t);
        return !!r && e === r[0];
      }
      function uc(e) {
        return !!Zu && Zu in e;
      }
      var lc = Jt ? Ln : eu;
      function Rt(e) {
        var n = e && e.constructor, t = typeof n == "function" && n.prototype || nt;
        return e === t;
      }
      function Zl(e) {
        return e === e && !_e(e);
      }
      function Xl(e, n) {
        return function(t) {
          return t == null ? !1 : t[e] === n && (n !== f || e in oe(t));
        };
      }
      function fc(e) {
        var n = br(e, function(r) {
          return t.size === q && t.clear(), r;
        }), t = n.cache;
        return n;
      }
      function ac(e, n) {
        var t = e[1], r = n[1], i = t | r, l = i < (ue | xe | ne), a = r == ne && t == T || r == ne && t == pe && e[7].length <= n[8] || r == (ne | pe) && n[7].length <= n[8] && t == T;
        if (!(l || a))
          return e;
        r & ue && (e[2] = n[2], i |= t & ue ? 0 : un);
        var o = n[3];
        if (o) {
          var c = e[3];
          e[3] = c ? Rl(c, o, n[4]) : o, e[4] = c ? In(e[3], ie) : n[4];
        }
        return o = n[5], o && (c = e[5], e[5] = c ? Il(c, o, n[6]) : o, e[6] = c ? In(e[5], ie) : n[6]), o = n[7], o && (e[7] = o), r & ne && (e[8] = e[8] == null ? n[8] : Be(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
      }
      function oc(e) {
        var n = [];
        if (e != null)
          for (var t in oe(e))
            n.push(t);
        return n;
      }
      function sc(e) {
        return kt.call(e);
      }
      function Jl(e, n, t) {
        return n = be(n === f ? e.length - 1 : n, 0), function() {
          for (var r = arguments, i = -1, l = be(r.length - n, 0), a = h(l); ++i < l; )
            a[i] = r[n + i];
          i = -1;
          for (var o = h(n + 1); ++i < n; )
            o[i] = r[i];
          return o[n] = t(a), Ke(e, this, o);
        };
      }
      function Ql(e, n) {
        return n.length < 2 ? e : qn(e, nn(n, 0, -1));
      }
      function cc(e, n) {
        for (var t = e.length, r = Be(n.length, t), i = Pe(e); r--; ) {
          var l = n[r];
          e[r] = bn(l, t) ? i[l] : f;
        }
        return e;
      }
      function Pi(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var kl = jl(xl), It = Lo || function(e, n) {
        return Re.setTimeout(e, n);
      }, Hi = jl(Ns);
      function Vl(e, n, t) {
        var r = n + "";
        return Hi(e, tc(r, hc(js(r), t)));
      }
      function jl(e) {
        var n = 0, t = 0;
        return function() {
          var r = Ro(), i = N - (r - t);
          if (t = r, i > 0) {
            if (++n >= L)
              return arguments[0];
          } else
            n = 0;
          return e.apply(f, arguments);
        };
      }
      function mr(e, n) {
        var t = -1, r = e.length, i = r - 1;
        for (n = n === f ? r : n; ++t < n; ) {
          var l = mi(t, i), a = e[l];
          e[l] = e[t], e[t] = a;
        }
        return e.length = n, e;
      }
      var ef = fc(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(ea, function(t, r, i, l) {
          n.push(i ? l.replace(aa, "$1") : r || t);
        }), n;
      });
      function pn(e) {
        if (typeof e == "string" || Ye(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -we ? "-0" : n;
      }
      function Yn(e) {
        if (e != null) {
          try {
            return Qt.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function hc(e, n) {
        return ke(Br, function(t) {
          var r = "_." + t[0];
          n & t[1] && !zt(e, r) && e.push(r);
        }), e.sort();
      }
      function nf(e) {
        if (e instanceof Q)
          return e.clone();
        var n = new je(e.__wrapped__, e.__chain__);
        return n.__actions__ = Pe(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function dc(e, n, t) {
        (t ? De(e, n, t) : n === f) ? n = 1 : n = be(G(n), 0);
        var r = e == null ? 0 : e.length;
        if (!r || n < 1)
          return [];
        for (var i = 0, l = 0, a = h(rr(r / n)); i < r; )
          a[l++] = nn(e, i, i += n);
        return a;
      }
      function gc(e) {
        for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
          var l = e[n];
          l && (i[r++] = l);
        }
        return i;
      }
      function vc() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = h(e - 1), t = arguments[0], r = e; r--; )
          n[r - 1] = arguments[r];
        return Rn(U(t) ? Pe(t) : [t], Ie(n, 1));
      }
      var pc = Y(function(e, n) {
        return Ae(e) ? bt(e, Ie(n, 1, Ae, !0)) : [];
      }), _c = Y(function(e, n) {
        var t = tn(n);
        return Ae(t) && (t = f), Ae(e) ? bt(e, Ie(n, 1, Ae, !0), W(t, 2)) : [];
      }), wc = Y(function(e, n) {
        var t = tn(n);
        return Ae(t) && (t = f), Ae(e) ? bt(e, Ie(n, 1, Ae, !0), f, t) : [];
      });
      function yc(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (n = t || n === f ? 1 : G(n), nn(e, n < 0 ? 0 : n, r)) : [];
      }
      function xc(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (n = t || n === f ? 1 : G(n), n = r - n, nn(e, 0, n < 0 ? 0 : n)) : [];
      }
      function mc(e, n) {
        return e && e.length ? dr(e, W(n, 3), !0, !0) : [];
      }
      function Ac(e, n) {
        return e && e.length ? dr(e, W(n, 3), !0) : [];
      }
      function Tc(e, n, t, r) {
        var i = e == null ? 0 : e.length;
        return i ? (t && typeof t != "number" && De(e, n, t) && (t = 0, r = i), vs(e, n, t, r)) : [];
      }
      function tf(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : G(t);
        return i < 0 && (i = be(r + i, 0)), Yt(e, W(n, 3), i);
      }
      function rf(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== f && (i = G(t), i = t < 0 ? be(r + i, 0) : Be(i, r - 1)), Yt(e, W(n, 3), i, !0);
      }
      function uf(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ie(e, 1) : [];
      }
      function Sc(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ie(e, we) : [];
      }
      function bc(e, n) {
        var t = e == null ? 0 : e.length;
        return t ? (n = n === f ? 1 : G(n), Ie(e, n)) : [];
      }
      function Lc(e) {
        for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
          var i = e[n];
          r[i[0]] = i[1];
        }
        return r;
      }
      function lf(e) {
        return e && e.length ? e[0] : f;
      }
      function Ec(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : G(t);
        return i < 0 && (i = be(r + i, 0)), kn(e, n, i);
      }
      function Cc(e) {
        var n = e == null ? 0 : e.length;
        return n ? nn(e, 0, -1) : [];
      }
      var Wc = Y(function(e) {
        var n = ge(e, Li);
        return n.length && n[0] === e[0] ? pi(n) : [];
      }), Rc = Y(function(e) {
        var n = tn(e), t = ge(e, Li);
        return n === tn(t) ? n = f : t.pop(), t.length && t[0] === e[0] ? pi(t, W(n, 2)) : [];
      }), Ic = Y(function(e) {
        var n = tn(e), t = ge(e, Li);
        return n = typeof n == "function" ? n : f, n && t.pop(), t.length && t[0] === e[0] ? pi(t, f, n) : [];
      });
      function Bc(e, n) {
        return e == null ? "" : Co.call(e, n);
      }
      function tn(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : f;
      }
      function Oc(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = r;
        return t !== f && (i = G(t), i = i < 0 ? be(r + i, 0) : Be(i, r - 1)), n === n ? co(e, n, i) : Yt(e, Hu, i, !0);
      }
      function Nc(e, n) {
        return e && e.length ? pl(e, G(n)) : f;
      }
      var Fc = Y(ff);
      function ff(e, n) {
        return e && e.length && n && n.length ? xi(e, n) : e;
      }
      function Dc(e, n, t) {
        return e && e.length && n && n.length ? xi(e, n, W(t, 2)) : e;
      }
      function Mc(e, n, t) {
        return e && e.length && n && n.length ? xi(e, n, f, t) : e;
      }
      var Pc = Sn(function(e, n) {
        var t = e == null ? 0 : e.length, r = hi(e, n);
        return yl(e, ge(n, function(i) {
          return bn(i, t) ? +i : i;
        }).sort(Wl)), r;
      });
      function Hc(e, n) {
        var t = [];
        if (!(e && e.length))
          return t;
        var r = -1, i = [], l = e.length;
        for (n = W(n, 3); ++r < l; ) {
          var a = e[r];
          n(a, r, e) && (t.push(a), i.push(r));
        }
        return yl(e, i), t;
      }
      function Ui(e) {
        return e == null ? e : Bo.call(e);
      }
      function Uc(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (t && typeof t != "number" && De(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : G(n), t = t === f ? r : G(t)), nn(e, n, t)) : [];
      }
      function Gc(e, n) {
        return hr(e, n);
      }
      function $c(e, n, t) {
        return Ti(e, n, W(t, 2));
      }
      function Kc(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var r = hr(e, n);
          if (r < t && sn(e[r], n))
            return r;
        }
        return -1;
      }
      function qc(e, n) {
        return hr(e, n, !0);
      }
      function zc(e, n, t) {
        return Ti(e, n, W(t, 2), !0);
      }
      function Yc(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var r = hr(e, n, !0) - 1;
          if (sn(e[r], n))
            return r;
        }
        return -1;
      }
      function Zc(e) {
        return e && e.length ? ml(e) : [];
      }
      function Xc(e, n) {
        return e && e.length ? ml(e, W(n, 2)) : [];
      }
      function Jc(e) {
        var n = e == null ? 0 : e.length;
        return n ? nn(e, 1, n) : [];
      }
      function Qc(e, n, t) {
        return e && e.length ? (n = t || n === f ? 1 : G(n), nn(e, 0, n < 0 ? 0 : n)) : [];
      }
      function kc(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (n = t || n === f ? 1 : G(n), n = r - n, nn(e, n < 0 ? 0 : n, r)) : [];
      }
      function Vc(e, n) {
        return e && e.length ? dr(e, W(n, 3), !1, !0) : [];
      }
      function jc(e, n) {
        return e && e.length ? dr(e, W(n, 3)) : [];
      }
      var eh = Y(function(e) {
        return Nn(Ie(e, 1, Ae, !0));
      }), nh = Y(function(e) {
        var n = tn(e);
        return Ae(n) && (n = f), Nn(Ie(e, 1, Ae, !0), W(n, 2));
      }), th = Y(function(e) {
        var n = tn(e);
        return n = typeof n == "function" ? n : f, Nn(Ie(e, 1, Ae, !0), f, n);
      });
      function rh(e) {
        return e && e.length ? Nn(e) : [];
      }
      function ih(e, n) {
        return e && e.length ? Nn(e, W(n, 2)) : [];
      }
      function uh(e, n) {
        return n = typeof n == "function" ? n : f, e && e.length ? Nn(e, f, n) : [];
      }
      function Gi(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = Wn(e, function(t) {
          if (Ae(t))
            return n = be(t.length, n), !0;
        }), ii(n, function(t) {
          return ge(e, ni(t));
        });
      }
      function af(e, n) {
        if (!(e && e.length))
          return [];
        var t = Gi(e);
        return n == null ? t : ge(t, function(r) {
          return Ke(n, f, r);
        });
      }
      var lh = Y(function(e, n) {
        return Ae(e) ? bt(e, n) : [];
      }), fh = Y(function(e) {
        return bi(Wn(e, Ae));
      }), ah = Y(function(e) {
        var n = tn(e);
        return Ae(n) && (n = f), bi(Wn(e, Ae), W(n, 2));
      }), oh = Y(function(e) {
        var n = tn(e);
        return n = typeof n == "function" ? n : f, bi(Wn(e, Ae), f, n);
      }), sh = Y(Gi);
      function ch(e, n) {
        return bl(e || [], n || [], St);
      }
      function hh(e, n) {
        return bl(e || [], n || [], Ct);
      }
      var dh = Y(function(e) {
        var n = e.length, t = n > 1 ? e[n - 1] : f;
        return t = typeof t == "function" ? (e.pop(), t) : f, af(e, t);
      });
      function of(e) {
        var n = u(e);
        return n.__chain__ = !0, n;
      }
      function gh(e, n) {
        return n(e), e;
      }
      function Ar(e, n) {
        return n(e);
      }
      var vh = Sn(function(e) {
        var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(l) {
          return hi(l, e);
        };
        return n > 1 || this.__actions__.length || !(r instanceof Q) || !bn(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
          func: Ar,
          args: [i],
          thisArg: f
        }), new je(r, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(f), l;
        }));
      });
      function ph() {
        return of(this);
      }
      function _h() {
        return new je(this.value(), this.__chain__);
      }
      function wh() {
        this.__values__ === f && (this.__values__ = Tf(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? f : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function yh() {
        return this;
      }
      function xh(e) {
        for (var n, t = this; t instanceof fr; ) {
          var r = nf(t);
          r.__index__ = 0, r.__values__ = f, n ? i.__wrapped__ = r : n = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = e, n;
      }
      function mh() {
        var e = this.__wrapped__;
        if (e instanceof Q) {
          var n = e;
          return this.__actions__.length && (n = new Q(this)), n = n.reverse(), n.__actions__.push({
            func: Ar,
            args: [Ui],
            thisArg: f
          }), new je(n, this.__chain__);
        }
        return this.thru(Ui);
      }
      function Ah() {
        return Sl(this.__wrapped__, this.__actions__);
      }
      var Th = gr(function(e, n, t) {
        fe.call(e, t) ? ++e[t] : An(e, t, 1);
      });
      function Sh(e, n, t) {
        var r = U(e) ? Mu : gs;
        return t && De(e, n, t) && (n = f), r(e, W(n, 3));
      }
      function bh(e, n) {
        var t = U(e) ? Wn : fl;
        return t(e, W(n, 3));
      }
      var Lh = Fl(tf), Eh = Fl(rf);
      function Ch(e, n) {
        return Ie(Tr(e, n), 1);
      }
      function Wh(e, n) {
        return Ie(Tr(e, n), we);
      }
      function Rh(e, n, t) {
        return t = t === f ? 1 : G(t), Ie(Tr(e, n), t);
      }
      function sf(e, n) {
        var t = U(e) ? ke : On;
        return t(e, W(n, 3));
      }
      function cf(e, n) {
        var t = U(e) ? Xa : ll;
        return t(e, W(n, 3));
      }
      var Ih = gr(function(e, n, t) {
        fe.call(e, t) ? e[t].push(n) : An(e, t, [n]);
      });
      function Bh(e, n, t, r) {
        e = He(e) ? e : ot(e), t = t && !r ? G(t) : 0;
        var i = e.length;
        return t < 0 && (t = be(i + t, 0)), Cr(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && kn(e, n, t) > -1;
      }
      var Oh = Y(function(e, n, t) {
        var r = -1, i = typeof n == "function", l = He(e) ? h(e.length) : [];
        return On(e, function(a) {
          l[++r] = i ? Ke(n, a, t) : Lt(a, n, t);
        }), l;
      }), Nh = gr(function(e, n, t) {
        An(e, t, n);
      });
      function Tr(e, n) {
        var t = U(e) ? ge : dl;
        return t(e, W(n, 3));
      }
      function Fh(e, n, t, r) {
        return e == null ? [] : (U(n) || (n = n == null ? [] : [n]), t = r ? f : t, U(t) || (t = t == null ? [] : [t]), _l(e, n, t));
      }
      var Dh = gr(function(e, n, t) {
        e[t ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Mh(e, n, t) {
        var r = U(e) ? jr : Gu, i = arguments.length < 3;
        return r(e, W(n, 4), t, i, On);
      }
      function Ph(e, n, t) {
        var r = U(e) ? Ja : Gu, i = arguments.length < 3;
        return r(e, W(n, 4), t, i, ll);
      }
      function Hh(e, n) {
        var t = U(e) ? Wn : fl;
        return t(e, Lr(W(n, 3)));
      }
      function Uh(e) {
        var n = U(e) ? tl : Bs;
        return n(e);
      }
      function Gh(e, n, t) {
        (t ? De(e, n, t) : n === f) ? n = 1 : n = G(n);
        var r = U(e) ? os : Os;
        return r(e, n);
      }
      function $h(e) {
        var n = U(e) ? ss : Fs;
        return n(e);
      }
      function Kh(e) {
        if (e == null)
          return 0;
        if (He(e))
          return Cr(e) ? jn(e) : e.length;
        var n = Oe(e);
        return n == ln || n == fn ? e.size : wi(e).length;
      }
      function qh(e, n, t) {
        var r = U(e) ? ei : Ds;
        return t && De(e, n, t) && (n = f), r(e, W(n, 3));
      }
      var zh = Y(function(e, n) {
        if (e == null)
          return [];
        var t = n.length;
        return t > 1 && De(e, n[0], n[1]) ? n = [] : t > 2 && De(n[0], n[1], n[2]) && (n = [n[0]]), _l(e, Ie(n, 1), []);
      }), Sr = bo || function() {
        return Re.Date.now();
      };
      function Yh(e, n) {
        if (typeof n != "function")
          throw new Ve($);
        return e = G(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function hf(e, n, t) {
        return n = t ? f : n, n = e && n == null ? e.length : n, Tn(e, ne, f, f, f, f, n);
      }
      function df(e, n) {
        var t;
        if (typeof n != "function")
          throw new Ve($);
        return e = G(e), function() {
          return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = f), t;
        };
      }
      var $i = Y(function(e, n, t) {
        var r = ue;
        if (t.length) {
          var i = In(t, ft($i));
          r |= z;
        }
        return Tn(e, r, n, t, i);
      }), gf = Y(function(e, n, t) {
        var r = ue | xe;
        if (t.length) {
          var i = In(t, ft(gf));
          r |= z;
        }
        return Tn(n, r, e, t, i);
      });
      function vf(e, n, t) {
        n = t ? f : n;
        var r = Tn(e, T, f, f, f, f, f, n);
        return r.placeholder = vf.placeholder, r;
      }
      function pf(e, n, t) {
        n = t ? f : n;
        var r = Tn(e, j, f, f, f, f, f, n);
        return r.placeholder = pf.placeholder, r;
      }
      function _f(e, n, t) {
        var r, i, l, a, o, c, g = 0, v = !1, p = !1, y = !0;
        if (typeof e != "function")
          throw new Ve($);
        n = rn(n) || 0, _e(t) && (v = !!t.leading, p = "maxWait" in t, l = p ? be(rn(t.maxWait) || 0, n) : l, y = "trailing" in t ? !!t.trailing : y);
        function S(Te) {
          var cn = r, Cn = i;
          return r = i = f, g = Te, a = e.apply(Cn, cn), a;
        }
        function R(Te) {
          return g = Te, o = It(X, n), v ? S(Te) : a;
        }
        function K(Te) {
          var cn = Te - c, Cn = Te - g, Df = n - cn;
          return p ? Be(Df, l - Cn) : Df;
        }
        function I(Te) {
          var cn = Te - c, Cn = Te - g;
          return c === f || cn >= n || cn < 0 || p && Cn >= l;
        }
        function X() {
          var Te = Sr();
          if (I(Te))
            return k(Te);
          o = It(X, K(Te));
        }
        function k(Te) {
          return o = f, y && r ? S(Te) : (r = i = f, a);
        }
        function Ze() {
          o !== f && Ll(o), g = 0, r = c = i = o = f;
        }
        function Me() {
          return o === f ? a : k(Sr());
        }
        function Xe() {
          var Te = Sr(), cn = I(Te);
          if (r = arguments, i = this, c = Te, cn) {
            if (o === f)
              return R(c);
            if (p)
              return Ll(o), o = It(X, n), S(c);
          }
          return o === f && (o = It(X, n)), a;
        }
        return Xe.cancel = Ze, Xe.flush = Me, Xe;
      }
      var Zh = Y(function(e, n) {
        return ul(e, 1, n);
      }), Xh = Y(function(e, n, t) {
        return ul(e, rn(n) || 0, t);
      });
      function Jh(e) {
        return Tn(e, Le);
      }
      function br(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Ve($);
        var t = function() {
          var r = arguments, i = n ? n.apply(this, r) : r[0], l = t.cache;
          if (l.has(i))
            return l.get(i);
          var a = e.apply(this, r);
          return t.cache = l.set(i, a) || l, a;
        };
        return t.cache = new (br.Cache || mn)(), t;
      }
      br.Cache = mn;
      function Lr(e) {
        if (typeof e != "function")
          throw new Ve($);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function Qh(e) {
        return df(2, e);
      }
      var kh = Ms(function(e, n) {
        n = n.length == 1 && U(n[0]) ? ge(n[0], qe(W())) : ge(Ie(n, 1), qe(W()));
        var t = n.length;
        return Y(function(r) {
          for (var i = -1, l = Be(r.length, t); ++i < l; )
            r[i] = n[i].call(this, r[i]);
          return Ke(e, this, r);
        });
      }), Ki = Y(function(e, n) {
        var t = In(n, ft(Ki));
        return Tn(e, z, f, n, t);
      }), wf = Y(function(e, n) {
        var t = In(n, ft(wf));
        return Tn(e, ae, f, n, t);
      }), Vh = Sn(function(e, n) {
        return Tn(e, pe, f, f, f, n);
      });
      function jh(e, n) {
        if (typeof e != "function")
          throw new Ve($);
        return n = n === f ? n : G(n), Y(e, n);
      }
      function ed(e, n) {
        if (typeof e != "function")
          throw new Ve($);
        return n = n == null ? 0 : be(G(n), 0), Y(function(t) {
          var r = t[n], i = Dn(t, 0, n);
          return r && Rn(i, r), Ke(e, this, i);
        });
      }
      function nd(e, n, t) {
        var r = !0, i = !0;
        if (typeof e != "function")
          throw new Ve($);
        return _e(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), _f(e, n, {
          leading: r,
          maxWait: n,
          trailing: i
        });
      }
      function td(e) {
        return hf(e, 1);
      }
      function rd(e, n) {
        return Ki(Ei(n), e);
      }
      function id() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return U(e) ? e : [e];
      }
      function ud(e) {
        return en(e, O);
      }
      function ld(e, n) {
        return n = typeof n == "function" ? n : f, en(e, O, n);
      }
      function fd(e) {
        return en(e, J | O);
      }
      function ad(e, n) {
        return n = typeof n == "function" ? n : f, en(e, J | O, n);
      }
      function od(e, n) {
        return n == null || il(e, n, Ce(n));
      }
      function sn(e, n) {
        return e === n || e !== e && n !== n;
      }
      var sd = wr(vi), cd = wr(function(e, n) {
        return e >= n;
      }), Zn = sl(function() {
        return arguments;
      }()) ? sl : function(e) {
        return ye(e) && fe.call(e, "callee") && !Qu.call(e, "callee");
      }, U = h.isArray, hd = Iu ? qe(Iu) : xs;
      function He(e) {
        return e != null && Er(e.length) && !Ln(e);
      }
      function Ae(e) {
        return ye(e) && He(e);
      }
      function dd(e) {
        return e === !0 || e === !1 || ye(e) && Fe(e) == Z;
      }
      var Mn = Eo || eu, gd = Bu ? qe(Bu) : ms;
      function vd(e) {
        return ye(e) && e.nodeType === 1 && !Bt(e);
      }
      function pd(e) {
        if (e == null)
          return !0;
        if (He(e) && (U(e) || typeof e == "string" || typeof e.splice == "function" || Mn(e) || at(e) || Zn(e)))
          return !e.length;
        var n = Oe(e);
        if (n == ln || n == fn)
          return !e.size;
        if (Rt(e))
          return !wi(e).length;
        for (var t in e)
          if (fe.call(e, t))
            return !1;
        return !0;
      }
      function _d(e, n) {
        return Et(e, n);
      }
      function wd(e, n, t) {
        t = typeof t == "function" ? t : f;
        var r = t ? t(e, n) : f;
        return r === f ? Et(e, n, f, t) : !!r;
      }
      function qi(e) {
        if (!ye(e))
          return !1;
        var n = Fe(e);
        return n == Ht || n == Or || typeof e.message == "string" && typeof e.name == "string" && !Bt(e);
      }
      function yd(e) {
        return typeof e == "number" && Vu(e);
      }
      function Ln(e) {
        if (!_e(e))
          return !1;
        var n = Fe(e);
        return n == Ut || n == uu || n == P || n == $f;
      }
      function yf(e) {
        return typeof e == "number" && e == G(e);
      }
      function Er(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ee;
      }
      function _e(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ye(e) {
        return e != null && typeof e == "object";
      }
      var xf = Ou ? qe(Ou) : Ts;
      function xd(e, n) {
        return e === n || _i(e, n, Ni(n));
      }
      function md(e, n, t) {
        return t = typeof t == "function" ? t : f, _i(e, n, Ni(n), t);
      }
      function Ad(e) {
        return mf(e) && e != +e;
      }
      function Td(e) {
        if (lc(e))
          throw new H(de);
        return cl(e);
      }
      function Sd(e) {
        return e === null;
      }
      function bd(e) {
        return e == null;
      }
      function mf(e) {
        return typeof e == "number" || ye(e) && Fe(e) == dt;
      }
      function Bt(e) {
        if (!ye(e) || Fe(e) != yn)
          return !1;
        var n = er(e);
        if (n === null)
          return !0;
        var t = fe.call(n, "constructor") && n.constructor;
        return typeof t == "function" && t instanceof t && Qt.call(t) == mo;
      }
      var zi = Nu ? qe(Nu) : Ss;
      function Ld(e) {
        return yf(e) && e >= -Ee && e <= Ee;
      }
      var Af = Fu ? qe(Fu) : bs;
      function Cr(e) {
        return typeof e == "string" || !U(e) && ye(e) && Fe(e) == vt;
      }
      function Ye(e) {
        return typeof e == "symbol" || ye(e) && Fe(e) == Gt;
      }
      var at = Du ? qe(Du) : Ls;
      function Ed(e) {
        return e === f;
      }
      function Cd(e) {
        return ye(e) && Oe(e) == pt;
      }
      function Wd(e) {
        return ye(e) && Fe(e) == qf;
      }
      var Rd = wr(yi), Id = wr(function(e, n) {
        return e <= n;
      });
      function Tf(e) {
        if (!e)
          return [];
        if (He(e))
          return Cr(e) ? an(e) : Pe(e);
        if (yt && e[yt])
          return ao(e[yt]());
        var n = Oe(e), t = n == ln ? li : n == fn ? Zt : ot;
        return t(e);
      }
      function En(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = rn(e), e === we || e === -we) {
          var n = e < 0 ? -1 : 1;
          return n * ht;
        }
        return e === e ? e : 0;
      }
      function G(e) {
        var n = En(e), t = n % 1;
        return n === n ? t ? n - t : n : 0;
      }
      function Sf(e) {
        return e ? Kn(G(e), 0, We) : 0;
      }
      function rn(e) {
        if (typeof e == "number")
          return e;
        if (Ye(e))
          return wn;
        if (_e(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = _e(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = $u(e);
        var t = ca.test(e);
        return t || da.test(e) ? za(e.slice(2), t ? 2 : 8) : sa.test(e) ? wn : +e;
      }
      function bf(e) {
        return vn(e, Ue(e));
      }
      function Bd(e) {
        return e ? Kn(G(e), -Ee, Ee) : e === 0 ? e : 0;
      }
      function le(e) {
        return e == null ? "" : ze(e);
      }
      var Od = ut(function(e, n) {
        if (Rt(n) || He(n)) {
          vn(n, Ce(n), e);
          return;
        }
        for (var t in n)
          fe.call(n, t) && St(e, t, n[t]);
      }), Lf = ut(function(e, n) {
        vn(n, Ue(n), e);
      }), Wr = ut(function(e, n, t, r) {
        vn(n, Ue(n), e, r);
      }), Nd = ut(function(e, n, t, r) {
        vn(n, Ce(n), e, r);
      }), Fd = Sn(hi);
      function Dd(e, n) {
        var t = it(e);
        return n == null ? t : rl(t, n);
      }
      var Md = Y(function(e, n) {
        e = oe(e);
        var t = -1, r = n.length, i = r > 2 ? n[2] : f;
        for (i && De(n[0], n[1], i) && (r = 1); ++t < r; )
          for (var l = n[t], a = Ue(l), o = -1, c = a.length; ++o < c; ) {
            var g = a[o], v = e[g];
            (v === f || sn(v, nt[g]) && !fe.call(e, g)) && (e[g] = l[g]);
          }
        return e;
      }), Pd = Y(function(e) {
        return e.push(f, $l), Ke(Ef, f, e);
      });
      function Hd(e, n) {
        return Pu(e, W(n, 3), gn);
      }
      function Ud(e, n) {
        return Pu(e, W(n, 3), gi);
      }
      function Gd(e, n) {
        return e == null ? e : di(e, W(n, 3), Ue);
      }
      function $d(e, n) {
        return e == null ? e : al(e, W(n, 3), Ue);
      }
      function Kd(e, n) {
        return e && gn(e, W(n, 3));
      }
      function qd(e, n) {
        return e && gi(e, W(n, 3));
      }
      function zd(e) {
        return e == null ? [] : sr(e, Ce(e));
      }
      function Yd(e) {
        return e == null ? [] : sr(e, Ue(e));
      }
      function Yi(e, n, t) {
        var r = e == null ? f : qn(e, n);
        return r === f ? t : r;
      }
      function Zd(e, n) {
        return e != null && zl(e, n, ps);
      }
      function Zi(e, n) {
        return e != null && zl(e, n, _s);
      }
      var Xd = Ml(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = kt.call(n)), e[n] = t;
      }, Ji(Ge)), Jd = Ml(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = kt.call(n)), fe.call(e, n) ? e[n].push(t) : e[n] = [t];
      }, W), Qd = Y(Lt);
      function Ce(e) {
        return He(e) ? nl(e) : wi(e);
      }
      function Ue(e) {
        return He(e) ? nl(e, !0) : Es(e);
      }
      function kd(e, n) {
        var t = {};
        return n = W(n, 3), gn(e, function(r, i, l) {
          An(t, n(r, i, l), r);
        }), t;
      }
      function Vd(e, n) {
        var t = {};
        return n = W(n, 3), gn(e, function(r, i, l) {
          An(t, i, n(r, i, l));
        }), t;
      }
      var jd = ut(function(e, n, t) {
        cr(e, n, t);
      }), Ef = ut(function(e, n, t, r) {
        cr(e, n, t, r);
      }), eg = Sn(function(e, n) {
        var t = {};
        if (e == null)
          return t;
        var r = !1;
        n = ge(n, function(l) {
          return l = Fn(l, e), r || (r = l.length > 1), l;
        }), vn(e, Bi(e), t), r && (t = en(t, J | $e | O, Xs));
        for (var i = n.length; i--; )
          Si(t, n[i]);
        return t;
      });
      function ng(e, n) {
        return Cf(e, Lr(W(n)));
      }
      var tg = Sn(function(e, n) {
        return e == null ? {} : Ws(e, n);
      });
      function Cf(e, n) {
        if (e == null)
          return {};
        var t = ge(Bi(e), function(r) {
          return [r];
        });
        return n = W(n), wl(e, t, function(r, i) {
          return n(r, i[0]);
        });
      }
      function rg(e, n, t) {
        n = Fn(n, e);
        var r = -1, i = n.length;
        for (i || (i = 1, e = f); ++r < i; ) {
          var l = e == null ? f : e[pn(n[r])];
          l === f && (r = i, l = t), e = Ln(l) ? l.call(e) : l;
        }
        return e;
      }
      function ig(e, n, t) {
        return e == null ? e : Ct(e, n, t);
      }
      function ug(e, n, t, r) {
        return r = typeof r == "function" ? r : f, e == null ? e : Ct(e, n, t, r);
      }
      var Wf = Ul(Ce), Rf = Ul(Ue);
      function lg(e, n, t) {
        var r = U(e), i = r || Mn(e) || at(e);
        if (n = W(n, 4), t == null) {
          var l = e && e.constructor;
          i ? t = r ? new l() : [] : _e(e) ? t = Ln(l) ? it(er(e)) : {} : t = {};
        }
        return (i ? ke : gn)(e, function(a, o, c) {
          return n(t, a, o, c);
        }), t;
      }
      function fg(e, n) {
        return e == null ? !0 : Si(e, n);
      }
      function ag(e, n, t) {
        return e == null ? e : Tl(e, n, Ei(t));
      }
      function og(e, n, t, r) {
        return r = typeof r == "function" ? r : f, e == null ? e : Tl(e, n, Ei(t), r);
      }
      function ot(e) {
        return e == null ? [] : ui(e, Ce(e));
      }
      function sg(e) {
        return e == null ? [] : ui(e, Ue(e));
      }
      function cg(e, n, t) {
        return t === f && (t = n, n = f), t !== f && (t = rn(t), t = t === t ? t : 0), n !== f && (n = rn(n), n = n === n ? n : 0), Kn(rn(e), n, t);
      }
      function hg(e, n, t) {
        return n = En(n), t === f ? (t = n, n = 0) : t = En(t), e = rn(e), ws(e, n, t);
      }
      function dg(e, n, t) {
        if (t && typeof t != "boolean" && De(e, n, t) && (n = t = f), t === f && (typeof n == "boolean" ? (t = n, n = f) : typeof e == "boolean" && (t = e, e = f)), e === f && n === f ? (e = 0, n = 1) : (e = En(e), n === f ? (n = e, e = 0) : n = En(n)), e > n) {
          var r = e;
          e = n, n = r;
        }
        if (t || e % 1 || n % 1) {
          var i = ju();
          return Be(e + i * (n - e + qa("1e-" + ((i + "").length - 1))), n);
        }
        return mi(e, n);
      }
      var gg = lt(function(e, n, t) {
        return n = n.toLowerCase(), e + (t ? If(n) : n);
      });
      function If(e) {
        return Xi(le(e).toLowerCase());
      }
      function Bf(e) {
        return e = le(e), e && e.replace(va, ro).replace(Na, "");
      }
      function vg(e, n, t) {
        e = le(e), n = ze(n);
        var r = e.length;
        t = t === f ? r : Kn(G(t), 0, r);
        var i = t;
        return t -= n.length, t >= 0 && e.slice(t, i) == n;
      }
      function pg(e) {
        return e = le(e), e && Jf.test(e) ? e.replace(au, io) : e;
      }
      function _g(e) {
        return e = le(e), e && na.test(e) ? e.replace(Kr, "\\$&") : e;
      }
      var wg = lt(function(e, n, t) {
        return e + (t ? "-" : "") + n.toLowerCase();
      }), yg = lt(function(e, n, t) {
        return e + (t ? " " : "") + n.toLowerCase();
      }), xg = Nl("toLowerCase");
      function mg(e, n, t) {
        e = le(e), n = G(n);
        var r = n ? jn(e) : 0;
        if (!n || r >= n)
          return e;
        var i = (n - r) / 2;
        return _r(ir(i), t) + e + _r(rr(i), t);
      }
      function Ag(e, n, t) {
        e = le(e), n = G(n);
        var r = n ? jn(e) : 0;
        return n && r < n ? e + _r(n - r, t) : e;
      }
      function Tg(e, n, t) {
        e = le(e), n = G(n);
        var r = n ? jn(e) : 0;
        return n && r < n ? _r(n - r, t) + e : e;
      }
      function Sg(e, n, t) {
        return t || n == null ? n = 0 : n && (n = +n), Io(le(e).replace(qr, ""), n || 0);
      }
      function bg(e, n, t) {
        return (t ? De(e, n, t) : n === f) ? n = 1 : n = G(n), Ai(le(e), n);
      }
      function Lg() {
        var e = arguments, n = le(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var Eg = lt(function(e, n, t) {
        return e + (t ? "_" : "") + n.toLowerCase();
      });
      function Cg(e, n, t) {
        return t && typeof t != "number" && De(e, n, t) && (n = t = f), t = t === f ? We : t >>> 0, t ? (e = le(e), e && (typeof n == "string" || n != null && !zi(n)) && (n = ze(n), !n && Vn(e)) ? Dn(an(e), 0, t) : e.split(n, t)) : [];
      }
      var Wg = lt(function(e, n, t) {
        return e + (t ? " " : "") + Xi(n);
      });
      function Rg(e, n, t) {
        return e = le(e), t = t == null ? 0 : Kn(G(t), 0, e.length), n = ze(n), e.slice(t, t + n.length) == n;
      }
      function Ig(e, n, t) {
        var r = u.templateSettings;
        t && De(e, n, t) && (n = f), e = le(e), n = Wr({}, n, r, Gl);
        var i = Wr({}, n.imports, r.imports, Gl), l = Ce(i), a = ui(i, l), o, c, g = 0, v = n.interpolate || $t, p = "__p += '", y = fi(
          (n.escape || $t).source + "|" + v.source + "|" + (v === ou ? oa : $t).source + "|" + (n.evaluate || $t).source + "|$",
          "g"
        ), S = "//# sourceURL=" + (fe.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ha + "]") + `
`;
        e.replace(y, function(I, X, k, Ze, Me, Xe) {
          return k || (k = Ze), p += e.slice(g, Xe).replace(pa, uo), X && (o = !0, p += `' +
__e(` + X + `) +
'`), Me && (c = !0, p += `';
` + Me + `;
__p += '`), k && (p += `' +
((__t = (` + k + `)) == null ? '' : __t) +
'`), g = Xe + I.length, I;
        }), p += `';
`;
        var R = fe.call(n, "variable") && n.variable;
        if (!R)
          p = `with (obj) {
` + p + `
}
`;
        else if (fa.test(R))
          throw new H(D);
        p = (c ? p.replace(zf, "") : p).replace(Yf, "$1").replace(Zf, "$1;"), p = "function(" + (R || "obj") + `) {
` + (R ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
        var K = Nf(function() {
          return re(l, S + "return " + p).apply(f, a);
        });
        if (K.source = p, qi(K))
          throw K;
        return K;
      }
      function Bg(e) {
        return le(e).toLowerCase();
      }
      function Og(e) {
        return le(e).toUpperCase();
      }
      function Ng(e, n, t) {
        if (e = le(e), e && (t || n === f))
          return $u(e);
        if (!e || !(n = ze(n)))
          return e;
        var r = an(e), i = an(n), l = Ku(r, i), a = qu(r, i) + 1;
        return Dn(r, l, a).join("");
      }
      function Fg(e, n, t) {
        if (e = le(e), e && (t || n === f))
          return e.slice(0, Yu(e) + 1);
        if (!e || !(n = ze(n)))
          return e;
        var r = an(e), i = qu(r, an(n)) + 1;
        return Dn(r, 0, i).join("");
      }
      function Dg(e, n, t) {
        if (e = le(e), e && (t || n === f))
          return e.replace(qr, "");
        if (!e || !(n = ze(n)))
          return e;
        var r = an(e), i = Ku(r, an(n));
        return Dn(r, i).join("");
      }
      function Mg(e, n) {
        var t = A, r = C;
        if (_e(n)) {
          var i = "separator" in n ? n.separator : i;
          t = "length" in n ? G(n.length) : t, r = "omission" in n ? ze(n.omission) : r;
        }
        e = le(e);
        var l = e.length;
        if (Vn(e)) {
          var a = an(e);
          l = a.length;
        }
        if (t >= l)
          return e;
        var o = t - jn(r);
        if (o < 1)
          return r;
        var c = a ? Dn(a, 0, o).join("") : e.slice(0, o);
        if (i === f)
          return c + r;
        if (a && (o += c.length - o), zi(i)) {
          if (e.slice(o).search(i)) {
            var g, v = c;
            for (i.global || (i = fi(i.source, le(su.exec(i)) + "g")), i.lastIndex = 0; g = i.exec(v); )
              var p = g.index;
            c = c.slice(0, p === f ? o : p);
          }
        } else if (e.indexOf(ze(i), o) != o) {
          var y = c.lastIndexOf(i);
          y > -1 && (c = c.slice(0, y));
        }
        return c + r;
      }
      function Pg(e) {
        return e = le(e), e && Xf.test(e) ? e.replace(fu, ho) : e;
      }
      var Hg = lt(function(e, n, t) {
        return e + (t ? " " : "") + n.toUpperCase();
      }), Xi = Nl("toUpperCase");
      function Of(e, n, t) {
        return e = le(e), n = t ? f : n, n === f ? fo(e) ? po(e) : Va(e) : e.match(n) || [];
      }
      var Nf = Y(function(e, n) {
        try {
          return Ke(e, f, n);
        } catch (t) {
          return qi(t) ? t : new H(t);
        }
      }), Ug = Sn(function(e, n) {
        return ke(n, function(t) {
          t = pn(t), An(e, t, $i(e[t], e));
        }), e;
      });
      function Gg(e) {
        var n = e == null ? 0 : e.length, t = W();
        return e = n ? ge(e, function(r) {
          if (typeof r[1] != "function")
            throw new Ve($);
          return [t(r[0]), r[1]];
        }) : [], Y(function(r) {
          for (var i = -1; ++i < n; ) {
            var l = e[i];
            if (Ke(l[0], this, r))
              return Ke(l[1], this, r);
          }
        });
      }
      function $g(e) {
        return ds(en(e, J));
      }
      function Ji(e) {
        return function() {
          return e;
        };
      }
      function Kg(e, n) {
        return e == null || e !== e ? n : e;
      }
      var qg = Dl(), zg = Dl(!0);
      function Ge(e) {
        return e;
      }
      function Qi(e) {
        return hl(typeof e == "function" ? e : en(e, J));
      }
      function Yg(e) {
        return gl(en(e, J));
      }
      function Zg(e, n) {
        return vl(e, en(n, J));
      }
      var Xg = Y(function(e, n) {
        return function(t) {
          return Lt(t, e, n);
        };
      }), Jg = Y(function(e, n) {
        return function(t) {
          return Lt(e, t, n);
        };
      });
      function ki(e, n, t) {
        var r = Ce(n), i = sr(n, r);
        t == null && !(_e(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = sr(n, Ce(n)));
        var l = !(_e(t) && "chain" in t) || !!t.chain, a = Ln(e);
        return ke(i, function(o) {
          var c = n[o];
          e[o] = c, a && (e.prototype[o] = function() {
            var g = this.__chain__;
            if (l || g) {
              var v = e(this.__wrapped__), p = v.__actions__ = Pe(this.__actions__);
              return p.push({ func: c, args: arguments, thisArg: e }), v.__chain__ = g, v;
            }
            return c.apply(e, Rn([this.value()], arguments));
          });
        }), e;
      }
      function Qg() {
        return Re._ === this && (Re._ = Ao), this;
      }
      function Vi() {
      }
      function kg(e) {
        return e = G(e), Y(function(n) {
          return pl(n, e);
        });
      }
      var Vg = Wi(ge), jg = Wi(Mu), ev = Wi(ei);
      function Ff(e) {
        return Di(e) ? ni(pn(e)) : Rs(e);
      }
      function nv(e) {
        return function(n) {
          return e == null ? f : qn(e, n);
        };
      }
      var tv = Pl(), rv = Pl(!0);
      function ji() {
        return [];
      }
      function eu() {
        return !1;
      }
      function iv() {
        return {};
      }
      function uv() {
        return "";
      }
      function lv() {
        return !0;
      }
      function fv(e, n) {
        if (e = G(e), e < 1 || e > Ee)
          return [];
        var t = We, r = Be(e, We);
        n = W(n), e -= We;
        for (var i = ii(r, n); ++t < e; )
          n(t);
        return i;
      }
      function av(e) {
        return U(e) ? ge(e, pn) : Ye(e) ? [e] : Pe(ef(le(e)));
      }
      function ov(e) {
        var n = ++xo;
        return le(e) + n;
      }
      var sv = pr(function(e, n) {
        return e + n;
      }, 0), cv = Ri("ceil"), hv = pr(function(e, n) {
        return e / n;
      }, 1), dv = Ri("floor");
      function gv(e) {
        return e && e.length ? or(e, Ge, vi) : f;
      }
      function vv(e, n) {
        return e && e.length ? or(e, W(n, 2), vi) : f;
      }
      function pv(e) {
        return Uu(e, Ge);
      }
      function _v(e, n) {
        return Uu(e, W(n, 2));
      }
      function wv(e) {
        return e && e.length ? or(e, Ge, yi) : f;
      }
      function yv(e, n) {
        return e && e.length ? or(e, W(n, 2), yi) : f;
      }
      var xv = pr(function(e, n) {
        return e * n;
      }, 1), mv = Ri("round"), Av = pr(function(e, n) {
        return e - n;
      }, 0);
      function Tv(e) {
        return e && e.length ? ri(e, Ge) : 0;
      }
      function Sv(e, n) {
        return e && e.length ? ri(e, W(n, 2)) : 0;
      }
      return u.after = Yh, u.ary = hf, u.assign = Od, u.assignIn = Lf, u.assignInWith = Wr, u.assignWith = Nd, u.at = Fd, u.before = df, u.bind = $i, u.bindAll = Ug, u.bindKey = gf, u.castArray = id, u.chain = of, u.chunk = dc, u.compact = gc, u.concat = vc, u.cond = Gg, u.conforms = $g, u.constant = Ji, u.countBy = Th, u.create = Dd, u.curry = vf, u.curryRight = pf, u.debounce = _f, u.defaults = Md, u.defaultsDeep = Pd, u.defer = Zh, u.delay = Xh, u.difference = pc, u.differenceBy = _c, u.differenceWith = wc, u.drop = yc, u.dropRight = xc, u.dropRightWhile = mc, u.dropWhile = Ac, u.fill = Tc, u.filter = bh, u.flatMap = Ch, u.flatMapDeep = Wh, u.flatMapDepth = Rh, u.flatten = uf, u.flattenDeep = Sc, u.flattenDepth = bc, u.flip = Jh, u.flow = qg, u.flowRight = zg, u.fromPairs = Lc, u.functions = zd, u.functionsIn = Yd, u.groupBy = Ih, u.initial = Cc, u.intersection = Wc, u.intersectionBy = Rc, u.intersectionWith = Ic, u.invert = Xd, u.invertBy = Jd, u.invokeMap = Oh, u.iteratee = Qi, u.keyBy = Nh, u.keys = Ce, u.keysIn = Ue, u.map = Tr, u.mapKeys = kd, u.mapValues = Vd, u.matches = Yg, u.matchesProperty = Zg, u.memoize = br, u.merge = jd, u.mergeWith = Ef, u.method = Xg, u.methodOf = Jg, u.mixin = ki, u.negate = Lr, u.nthArg = kg, u.omit = eg, u.omitBy = ng, u.once = Qh, u.orderBy = Fh, u.over = Vg, u.overArgs = kh, u.overEvery = jg, u.overSome = ev, u.partial = Ki, u.partialRight = wf, u.partition = Dh, u.pick = tg, u.pickBy = Cf, u.property = Ff, u.propertyOf = nv, u.pull = Fc, u.pullAll = ff, u.pullAllBy = Dc, u.pullAllWith = Mc, u.pullAt = Pc, u.range = tv, u.rangeRight = rv, u.rearg = Vh, u.reject = Hh, u.remove = Hc, u.rest = jh, u.reverse = Ui, u.sampleSize = Gh, u.set = ig, u.setWith = ug, u.shuffle = $h, u.slice = Uc, u.sortBy = zh, u.sortedUniq = Zc, u.sortedUniqBy = Xc, u.split = Cg, u.spread = ed, u.tail = Jc, u.take = Qc, u.takeRight = kc, u.takeRightWhile = Vc, u.takeWhile = jc, u.tap = gh, u.throttle = nd, u.thru = Ar, u.toArray = Tf, u.toPairs = Wf, u.toPairsIn = Rf, u.toPath = av, u.toPlainObject = bf, u.transform = lg, u.unary = td, u.union = eh, u.unionBy = nh, u.unionWith = th, u.uniq = rh, u.uniqBy = ih, u.uniqWith = uh, u.unset = fg, u.unzip = Gi, u.unzipWith = af, u.update = ag, u.updateWith = og, u.values = ot, u.valuesIn = sg, u.without = lh, u.words = Of, u.wrap = rd, u.xor = fh, u.xorBy = ah, u.xorWith = oh, u.zip = sh, u.zipObject = ch, u.zipObjectDeep = hh, u.zipWith = dh, u.entries = Wf, u.entriesIn = Rf, u.extend = Lf, u.extendWith = Wr, ki(u, u), u.add = sv, u.attempt = Nf, u.camelCase = gg, u.capitalize = If, u.ceil = cv, u.clamp = cg, u.clone = ud, u.cloneDeep = fd, u.cloneDeepWith = ad, u.cloneWith = ld, u.conformsTo = od, u.deburr = Bf, u.defaultTo = Kg, u.divide = hv, u.endsWith = vg, u.eq = sn, u.escape = pg, u.escapeRegExp = _g, u.every = Sh, u.find = Lh, u.findIndex = tf, u.findKey = Hd, u.findLast = Eh, u.findLastIndex = rf, u.findLastKey = Ud, u.floor = dv, u.forEach = sf, u.forEachRight = cf, u.forIn = Gd, u.forInRight = $d, u.forOwn = Kd, u.forOwnRight = qd, u.get = Yi, u.gt = sd, u.gte = cd, u.has = Zd, u.hasIn = Zi, u.head = lf, u.identity = Ge, u.includes = Bh, u.indexOf = Ec, u.inRange = hg, u.invoke = Qd, u.isArguments = Zn, u.isArray = U, u.isArrayBuffer = hd, u.isArrayLike = He, u.isArrayLikeObject = Ae, u.isBoolean = dd, u.isBuffer = Mn, u.isDate = gd, u.isElement = vd, u.isEmpty = pd, u.isEqual = _d, u.isEqualWith = wd, u.isError = qi, u.isFinite = yd, u.isFunction = Ln, u.isInteger = yf, u.isLength = Er, u.isMap = xf, u.isMatch = xd, u.isMatchWith = md, u.isNaN = Ad, u.isNative = Td, u.isNil = bd, u.isNull = Sd, u.isNumber = mf, u.isObject = _e, u.isObjectLike = ye, u.isPlainObject = Bt, u.isRegExp = zi, u.isSafeInteger = Ld, u.isSet = Af, u.isString = Cr, u.isSymbol = Ye, u.isTypedArray = at, u.isUndefined = Ed, u.isWeakMap = Cd, u.isWeakSet = Wd, u.join = Bc, u.kebabCase = wg, u.last = tn, u.lastIndexOf = Oc, u.lowerCase = yg, u.lowerFirst = xg, u.lt = Rd, u.lte = Id, u.max = gv, u.maxBy = vv, u.mean = pv, u.meanBy = _v, u.min = wv, u.minBy = yv, u.stubArray = ji, u.stubFalse = eu, u.stubObject = iv, u.stubString = uv, u.stubTrue = lv, u.multiply = xv, u.nth = Nc, u.noConflict = Qg, u.noop = Vi, u.now = Sr, u.pad = mg, u.padEnd = Ag, u.padStart = Tg, u.parseInt = Sg, u.random = dg, u.reduce = Mh, u.reduceRight = Ph, u.repeat = bg, u.replace = Lg, u.result = rg, u.round = mv, u.runInContext = s, u.sample = Uh, u.size = Kh, u.snakeCase = Eg, u.some = qh, u.sortedIndex = Gc, u.sortedIndexBy = $c, u.sortedIndexOf = Kc, u.sortedLastIndex = qc, u.sortedLastIndexBy = zc, u.sortedLastIndexOf = Yc, u.startCase = Wg, u.startsWith = Rg, u.subtract = Av, u.sum = Tv, u.sumBy = Sv, u.template = Ig, u.times = fv, u.toFinite = En, u.toInteger = G, u.toLength = Sf, u.toLower = Bg, u.toNumber = rn, u.toSafeInteger = Bd, u.toString = le, u.toUpper = Og, u.trim = Ng, u.trimEnd = Fg, u.trimStart = Dg, u.truncate = Mg, u.unescape = Pg, u.uniqueId = ov, u.upperCase = Hg, u.upperFirst = Xi, u.each = sf, u.eachRight = cf, u.first = lf, ki(u, function() {
        var e = {};
        return gn(u, function(n, t) {
          fe.call(u.prototype, t) || (e[t] = n);
        }), e;
      }(), { chain: !1 }), u.VERSION = E, ke(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), ke(["drop", "take"], function(e, n) {
        Q.prototype[e] = function(t) {
          t = t === f ? 1 : be(G(t), 0);
          var r = this.__filtered__ && !n ? new Q(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = Be(t, r.__takeCount__) : r.__views__.push({
            size: Be(t, We),
            type: e + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, Q.prototype[e + "Right"] = function(t) {
          return this.reverse()[e](t).reverse();
        };
      }), ke(["filter", "map", "takeWhile"], function(e, n) {
        var t = n + 1, r = t == te || t == se;
        Q.prototype[e] = function(i) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: W(i, 3),
            type: t
          }), l.__filtered__ = l.__filtered__ || r, l;
        };
      }), ke(["head", "last"], function(e, n) {
        var t = "take" + (n ? "Right" : "");
        Q.prototype[e] = function() {
          return this[t](1).value()[0];
        };
      }), ke(["initial", "tail"], function(e, n) {
        var t = "drop" + (n ? "" : "Right");
        Q.prototype[e] = function() {
          return this.__filtered__ ? new Q(this) : this[t](1);
        };
      }), Q.prototype.compact = function() {
        return this.filter(Ge);
      }, Q.prototype.find = function(e) {
        return this.filter(e).head();
      }, Q.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Q.prototype.invokeMap = Y(function(e, n) {
        return typeof e == "function" ? new Q(this) : this.map(function(t) {
          return Lt(t, e, n);
        });
      }), Q.prototype.reject = function(e) {
        return this.filter(Lr(W(e)));
      }, Q.prototype.slice = function(e, n) {
        e = G(e);
        var t = this;
        return t.__filtered__ && (e > 0 || n < 0) ? new Q(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== f && (n = G(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
      }, Q.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Q.prototype.toArray = function() {
        return this.take(We);
      }, gn(Q.prototype, function(e, n) {
        var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = u[r ? "take" + (n == "last" ? "Right" : "") : n], l = r || /^find/.test(n);
        i && (u.prototype[n] = function() {
          var a = this.__wrapped__, o = r ? [1] : arguments, c = a instanceof Q, g = o[0], v = c || U(a), p = function(X) {
            var k = i.apply(u, Rn([X], o));
            return r && y ? k[0] : k;
          };
          v && t && typeof g == "function" && g.length != 1 && (c = v = !1);
          var y = this.__chain__, S = !!this.__actions__.length, R = l && !y, K = c && !S;
          if (!l && v) {
            a = K ? a : new Q(this);
            var I = e.apply(a, o);
            return I.__actions__.push({ func: Ar, args: [p], thisArg: f }), new je(I, y);
          }
          return R && K ? e.apply(this, o) : (I = this.thru(p), R ? r ? I.value()[0] : I.value() : I);
        });
      }), ke(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Xt[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var l = this.value();
            return n.apply(U(l) ? l : [], i);
          }
          return this[t](function(a) {
            return n.apply(U(a) ? a : [], i);
          });
        };
      }), gn(Q.prototype, function(e, n) {
        var t = u[n];
        if (t) {
          var r = t.name + "";
          fe.call(rt, r) || (rt[r] = []), rt[r].push({ name: n, func: t });
        }
      }), rt[vr(f, xe).name] = [{
        name: "wrapper",
        func: f
      }], Q.prototype.clone = Po, Q.prototype.reverse = Ho, Q.prototype.value = Uo, u.prototype.at = vh, u.prototype.chain = ph, u.prototype.commit = _h, u.prototype.next = wh, u.prototype.plant = xh, u.prototype.reverse = mh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Ah, u.prototype.first = u.prototype.head, yt && (u.prototype[yt] = yh), u;
    }, et = _o();
    Hn ? ((Hn.exports = et)._ = et, Qr._ = et) : Re._ = et;
  }).call(Ot);
})(Ir, Ir.exports);
var _n = Ir.exports;
const Mv = /* @__PURE__ */ Pn({
  __name: "index",
  props: {
    maxWidth: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default() {
        return () => [];
      }
    },
    getHeaderCellClass: {
      type: Function,
      default() {
        return () => {
        };
      }
    },
    getHeaderCellStyle: {
      type: Function,
      default() {
        return () => {
        };
      }
    },
    width: {
      type: Number,
      default: 600
    },
    keepScrollLeft: {
      type: Number,
      default: 0
    },
    //边框
    border: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["scrollLeft", "scrollTop", "maxScrollWidth"],
  setup(_, { expose: V, emit: f }) {
    const E = F(), B = _, de = (A) => {
      $();
      const C = F(iu(A.width)), L = F(Hf(A.minWidth));
      return C.value && (A.width = C.value), L.value && (A.minWidth = L.value), !C.value && L.value && (A.width = void 0), A.minWidth, A.realWidth = Number(A.width ? A.width : A.minWidth), A;
    }, $ = () => {
      let A = 0, C = 0;
      if (B.columns.forEach((L) => {
        A += L.width || 0, L.width || C++;
      }), A < B.width) {
        let L = B.width - A, N = Math.floor(L / C);
        B.columns.forEach((te) => {
          te.width || (te.width = N);
        });
      } else {
        let L = 0;
        B.columns.forEach((N) => {
          N.width || (N.width = 100), L += N.width;
        }), D.value = L;
      }
    };
    let D = F(B.width), x = F(2), q = F(1), ie = F(null), J = F(null), $e = F(B.width), O = F([]), b = F({}), ee = nu(() => E.value.offsetWidth);
    const ue = F(0), xe = (A = B.columns, C = O.value) => {
      let L = A.slice(x.value * (q.value - 1), x.value * q.value);
      L.length && C.push(...L), q.value++;
    }, un = (A = B.columns) => {
      let C = A.slice(x.value * (q.value - 5), x.value * (q.value - 4));
      C.length && (O.value = C.concat(O.value)), q.value--;
    }, T = () => {
      xe(), ve(() => {
        let A = J.value.getElementsByTagName("th")[Number(x.value * (q.value - 1)) - 1];
        A && A.offsetLeft + A.offsetWidth < $e.value ? T() : (x.value = O.value.length, q.value = 2, xe(), ve(() => {
          b.value[0] = 0;
          let C = J.value.getElementsByTagName("th")[x.value - 1];
          if (b.value[1] = C.offsetLeft + C.offsetWidth, O.value.length >= x.value * 2) {
            let L = J.value.getElementsByTagName("th")[x.value * 2 - 1];
            b.value[2] = L.offsetLeft + L.offsetWidth, xe(), ve(() => {
              let N = J.value.getElementsByTagName("th")[O.value.length - 1];
              b.value[3] = N.offsetLeft + N.offsetWidth, O.value.length < x.value * 3 && (D.value = N.offsetLeft + N.offsetWidth);
            });
          } else {
            let L = J.value.getElementsByTagName("th")[O.value.length - 1], N = L.offsetLeft + L.offsetWidth;
            D.value = N < B.width ? B.width : N, b.value[2] = L.offsetLeft + L.offsetWidth;
          }
          ie.value.addEventListener("scroll", (L) => ne(L));
        }));
      });
    };
    let j = F(0);
    const z = (A) => {
      let C = J.value.getElementsByTagName("th")[x.value];
      ve(() => {
        if (C.offsetLeft < A) {
          if ((q.value - 1) * x.value > B.columns.length)
            return;
          xe();
          let L = _n.cloneDeep(O.value);
          j.value = b.value[q.value - 4], O.value = L.slice(Number(x.value), O.value.length), J.value.style.paddingLeft = j.value + "px", ve(() => {
            let N = J.value.getElementsByTagName("th")[O.value.length - 1];
            if (b.value[q.value - 1] = N.offsetLeft + N.offsetWidth, ue.value = A, O.value.length < x.value * 3) {
              D.value = b.value[q.value - 1], pe("maxScrollWidth", D.value);
              return;
            }
            z(A);
          });
        }
      });
    }, ae = (A) => {
      ve(() => {
        if (A - j.value < b.value[q.value - 5]) {
          if (q.value <= 3) {
            J.value.style.paddingLeft = "0px";
            return;
          }
          un();
          let C = _n.cloneDeep(O.value);
          j.value = b.value[q.value - 4], O.value = C.slice(0, x.value * 3), J.value.style.paddingLeft = j.value + "px", ve(() => {
            ue.value = j.value, ae(A);
          });
        }
      });
    }, ne = (A) => {
      let C = A.target.scrollLeft;
      pe("scrollLeft", C), C > ue.value && z(C), C < ue.value && ae(C);
    }, pe = f;
    V({
      headerHeight: ee
    }), Ft(() => {
      D.value = B.width;
    }), ve(() => {
      T();
    }), Nt(
      () => B.keepScrollLeft,
      (A, C) => {
        A && A !== C && (ie.value.scrollLeft = B.keepScrollLeft), A || (ie.value.scrollLeft = 0);
      },
      { deep: !0 }
    ), Nt(
      () => B.maxWidth,
      // @ts-ignore
      (A, C) => {
        A && (D.value = A);
      },
      { deep: !0 }
    );
    let Le = ["center", "left", "right"];
    return (A, C) => (hn(), dn("div", {
      ref_key: "tableHeaderWrapper",
      ref: ie,
      class: st(["dy-vl-header", { "dy-vl-header-border": _.border }]),
      style: ct({ width: _.width + "px" })
    }, [
      Xn("table", {
        ref_key: "tableHeader",
        ref: E,
        class: "dy-table-header dy-table--border-header",
        border: 0,
        cellspacing: "0",
        cellpadding: "0",
        style: ct({ width: Je(D) + "px" })
      }, [
        Xn("thead", {
          ref_key: "scrollBody",
          ref: J
        }, [
          Xn("tr", null, [
            (hn(!0), dn(tu, null, ru(Je(O), (L, N) => (hn(), dn("th", {
              key: `${L.prop}-thead`,
              class: st(["dy-table__cell", [
                { "dy-table__cell-border": _.border },
                `dy-table_cell-text-${Je(Le).includes(L.align) ? L.align : "center"}`
              ]]),
              style: ct({ width: de(L).realWidth + "px" })
            }, [
              Rr(Pf, {
                data: L.label,
                index: N
              }, null, 8, ["data", "index"])
            ], 6))), 128))
          ])
        ], 512)
      ], 4)
    ], 6));
  }
});
const Pv = /* @__PURE__ */ Dt(Mv, [["__scopeId", "data-v-c703dba9"]]), Hv = /* @__PURE__ */ Pn({
  __name: "index",
  props: {
    data: {
      type: Array,
      default() {
        return () => [];
      }
    },
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: Number,
      default: 600
    },
    columns: {
      type: Array,
      default() {
        return () => [];
      }
    },
    getCellClass: {
      type: Function,
      default() {
        return () => {
        };
      }
    },
    getCellStyle: {
      type: Function,
      default() {
        return () => {
        };
      }
    },
    keepScrollLeft: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    //边框
    border: {
      type: Boolean,
      default: !0
    },
    //条纹
    stripe: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scrollLeft", "scrollTop", "maxScrollWidth"],
  setup(_, { expose: V, emit: f }) {
    Ft(() => {
    });
    const E = _, B = (w) => {
      de();
      const M = F(iu(w.width)), P = F(Hf(w.minWidth));
      return M.value && (w.width = M.value), P.value && (w.minWidth = P.value), !M.value && P.value && (w.width = void 0), w.minWidth, w.realWidth = Number(w.width ? w.width : w.minWidth), w;
    }, de = () => {
      let w = 0, M = 0;
      if (E.columns.forEach((P) => {
        w += P.width || 0, P.width || M++;
      }), w < E.width) {
        let P = E.width - w, Z = Math.floor(P / M);
        E.columns.forEach((Ne) => {
          Ne.width || (Ne.width = Z);
        });
      } else {
        let P = 0;
        E.columns.forEach((Z) => {
          Z.width || (Z.width = 100), P += Z.width;
        }), ie.value = P;
      }
    };
    let $ = F(null), D = F(null), x = F(null), q = F(200 * E.data.length), ie = F(200 * E.columns.length), J = F(E.height), $e = F(E.width), O = F([]), b = F(2), ee = F(1), ue = F({});
    const xe = F(0), un = () => {
      let w = E.data.slice(b.value * (ee.value - 1), b.value * ee.value);
      w.length && O.value.push(...w), ee.value++;
    }, T = () => {
      let w = E.data.slice(b.value * (ee.value - 5), b.value * (ee.value - 4));
      w.length && (O.value = w.concat(O.value)), ee.value--;
    }, j = () => {
      un(), ve(() => {
        let w = x.value.getElementsByTagName("tr")[Number(b.value * (ee.value - 1)) - 1];
        ie.value = E.width, w && w.offsetTop + w.offsetHeight < J.value ? j() : (b.value = O.value.length, ee.value = 2, un(), ve(() => {
          ue.value[0] = 0;
          let M = x.value.getElementsByTagName("tr")[b.value - 1];
          if (ue.value[1] = M.offsetTop + M.offsetHeight, O.value.length >= 2 * b.value) {
            let P = x.value.getElementsByTagName("tr")[b.value * 2 - 1];
            ue.value[2] = P.offsetTop + P.offsetHeight, un(), ve(() => {
              let Z = x.value.getElementsByTagName("tr")[O.value.length - 1];
              ue.value[3] = Z.offsetTop + Z.offsetHeight, O.value.length < 3 * b.value && (q.value = Z.offsetTop + Z.offsetHeight), L(0, O.value.length);
            });
          } else {
            let P = x.value.getElementsByTagName("tr")[O.value.length - 1];
            ve(() => {
              ue.value[3] = P.offsetTop + P.offsetHeight, q.value = P.offsetTop + P.offsetHeight, L(0, O.value.length);
            });
          }
          $.value.addEventListener("scroll", (P) => pe(P));
        }));
      });
    };
    let z = F(0);
    const ae = (w) => {
      let M = x.value.getElementsByTagName("tr")[b.value];
      xe.value = w, ve(() => {
        if (M.offsetTop < w) {
          if ((ee.value - 1) * b.value > E.data.length)
            return;
          un();
          let P = _n.cloneDeep(O.value);
          z.value = ue.value[ee.value - 4], O.value = P.slice(Number(b.value), O.value.length), ve(() => {
            x.value.style.paddingTop = z.value + "px";
            let Z = x.value.getElementsByTagName("tr")[O.value.length - 1];
            if (ue.value[ee.value - 1] = Z.offsetTop + Z.offsetHeight, xe.value = w, L(
              b.value * (ee.value - 4) + O.value.length - b.value * 3,
              b.value * (ee.value - 4) + O.value.length
            ), O.value.length < b.value * 3) {
              q.value = ue.value[ee.value - 1];
              return;
            }
            _n.debounce(() => ae(z.value), 500);
          });
        }
      });
    }, ne = (w) => {
      xe.value = w, ve(() => {
        if (w - z.value < ue.value[ee.value - 5]) {
          if (ee.value <= 3) {
            x.value.style.paddingTop = "0px";
            return;
          }
          T();
          let M = _n.cloneDeep(O.value);
          z.value = ue.value[ee.value - 4], O.value = M.slice(0, b.value * 3), x.value.style.paddingTop = z.value + "px", xe.value = z.value, _n.debounce(() => ne(z.value), 500);
        }
      });
    }, pe = (w) => {
      let M = w.target.scrollTop, P = w.target.scrollLeft;
      Le(P, M);
    }, Le = (w, M) => {
      A("scrollLeft", w), A("scrollTop", M), M > xe.value && ae(M), M < xe.value && ne(M), w > we.value && Mt(w), w < we.value && Pt(w);
    };
    ve(() => {
      wn(), j();
    });
    const A = f;
    V({}), Nt(
      () => E.keepScrollLeft,
      (w, M) => {
        w !== M && ($.value.scrollLeft = E.keepScrollLeft), w || ($.value.scrollLeft = 0);
      },
      { deep: !0 }
    ), Nt(
      () => E.maxWidth,
      // @ts-ignore
      (w, M) => {
        w && (ie.value = w);
      },
      { deep: !0 }
    );
    const C = F({}), L = (w = 0, M) => {
      let P = x.value.getElementsByTagName("tr");
      ve(() => {
        for (let Z = 0; Z < M - w; Z++)
          C.value[w + Z] = P[Z].offsetHeight;
      });
    };
    let N = F(2), te = F(1), me = F({}), se = F([]);
    const we = F(0), Ee = (w = E.columns, M = se.value) => {
      let P = w.slice(N.value * (te.value - 1), N.value * te.value);
      P.length && M.push(...P), te.value++;
    }, ht = (w = E.columns) => {
      let M = w.slice(N.value * (te.value - 5), N.value * (te.value - 4));
      M.length && (se.value = M.concat(se.value)), te.value--;
    }, wn = () => {
      Ee(), ve(() => {
        let w = x.value.getElementsByTagName("td")[Number(N.value * (te.value - 1)) - 1];
        w && w.offsetLeft + w.offsetWidth < $e.value ? wn() : (N.value = se.value.length, te.value = 2, Ee(), ve(() => {
          me.value[0] = 0;
          let M = x.value.getElementsByTagName("td")[N.value - 1];
          if (me.value[1] = M.offsetLeft + M.offsetWidth, se.value.length >= N.value * 2) {
            let P = x.value.getElementsByTagName("td")[N.value * 2 - 1];
            me.value[2] = P.offsetLeft + P.offsetWidth, Ee(), ve(() => {
              let Z = x.value.getElementsByTagName("td")[se.value.length - 1];
              me.value[3] = Z.offsetLeft + Z.offsetWidth, se.value.length < N.value * 3 && (ie.value = Z.offsetLeft + Z.offsetWidth);
            });
          } else {
            let P = x.value.getElementsByTagName("td")[se.value.length - 1];
            ie.value = P.offsetLeft + P.offsetWidth, me.value[2] = P.offsetLeft + P.offsetWidth;
          }
          console.log("铺满了三屏", se.value.length, N.value, me.value, te.value);
        }));
      });
    };
    let We = F(0);
    const Mt = (w) => {
      we.value = w;
      let M = x.value.getElementsByTagName("td")[N.value];
      ve(() => {
        if (M && M.offsetLeft < w) {
          if ((te.value - 1) * N.value > E.columns.length)
            return;
          Ee();
          let P = _n.cloneDeep(se.value);
          We.value = me.value[te.value - 4], se.value = P.slice(Number(N.value), se.value.length), ve(() => {
            x.value.style.paddingLeft = We.value + "px";
            let Z = x.value.getElementsByTagName("td")[se.value.length - 1];
            if (me.value[te.value - 1] = Z.offsetLeft + Z.offsetWidth, we.value = w, se.value.length < N.value * 3) {
              ie.value = me.value[te.value - 1];
              return;
            }
            _n.debounce(() => Mt(w), 500);
          });
        }
      });
    }, Pt = (w) => {
      we.value = w, ve(() => {
        if (w - We.value < me.value[te.value - 5]) {
          if (te.value <= 3) {
            x.value.style.paddingLeft = "0px";
            return;
          }
          ht();
          let M = _n.cloneDeep(se.value);
          We.value = me.value[te.value - 4], se.value = M.slice(0, N.value * 3), x.value.style.paddingLeft = We.value + "px", ve(() => {
            we.value = We.value, _n.debounce(() => Pt(w), 500);
          });
        }
      });
    };
    let Br = ["center", "left", "right"];
    return (w, M) => (hn(), dn("div", {
      id: "dy-table-scroll-container",
      ref_key: "tableWrapper",
      ref: $,
      class: st(["dy-vt__wrapper_body", {
        "dy-vt__wrapper_body-border": _.border
      }]),
      style: ct({ height: _.height + "px", width: _.width + "px" })
    }, [
      Xn("table", {
        ref_key: "dyTableWrapper",
        ref: D,
        class: st(["dy-table--border-wrapper", [{ "dy-table--striped": _.stripe }]]),
        border: 0,
        cellspacing: "0",
        cellpadding: "0",
        style: ct({ height: Je(q) + "px", width: Je(ie) + "px" })
      }, [
        Xn("tbody", {
          ref_key: "scrollBody",
          ref: x,
          class: "scroll-container"
        }, [
          (hn(!0), dn(tu, null, ru(Je(O), (P, Z) => (hn(), dn("tr", {
            key: `tbody_${Math.random() * Z}`,
            class: "dy-vt-wrapper-tr"
          }, [
            (hn(!0), dn(tu, null, ru(Je(se), (Ne, Or) => (hn(), dn("td", {
              key: `tcolumn_${Ne[Or]}_${Math.random() * Z}`,
              class: st(["dy-table__cell", [
                { "dy-table__cell-border": _.border },
                `dy-table_cell-text-${Je(Br).includes(Ne.align) ? Ne.align : "center"}`
              ]]),
              style: ct({
                width: B(Ne).realWidth + "px",
                // @ts-ignore
                height: C.value[Je(b) * (Je(ee) - 4) + Z] + "px"
              })
            }, [
              Rr(Pf, {
                data: P,
                index: Z,
                column: Ne,
                "key-prop": Ne.prop
              }, null, 8, ["data", "index", "column", "key-prop"])
            ], 6))), 128))
          ]))), 128))
        ], 512)
      ], 6)
    ], 6));
  }
});
const Uv = /* @__PURE__ */ Dt(Hv, [["__scopeId", "data-v-9e6c191d"]]), Gv = (_) => (Ev("data-v-24149a87"), _ = _(), Cv(), _), $v = { class: "dy-vtable" }, Kv = /* @__PURE__ */ Gv(() => /* @__PURE__ */ Xn("tfoot", null, null, -1)), qv = Pn({
  name: "DyVirtualTable"
}), zv = /* @__PURE__ */ Pn({
  ...qv,
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    ...Wv,
    // element table基础传参
    //边框
    border: {
      type: Boolean,
      default: !0
    }
  },
  setup(_) {
    const V = _, f = F(null), E = F(null), B = (b) => (b = Ov(b), b), de = F(), $ = F();
    Ft(() => {
      let b = B(V.height), ee = B(f.value.headerHeight || 0);
      de.value = b - ee, $.value = V.width;
    }), Nt(
      () => E.value,
      (b, ee) => {
      },
      { deep: !0 }
    );
    let D = F(0), x = F(0);
    const q = (b) => {
      x.value = b;
    }, ie = (b) => {
      x.value = b;
    }, J = F(0), $e = (b) => {
      J.value = b;
    }, O = (b) => {
      D.value = b;
    };
    return (b, ee) => (hn(), dn("div", $v, [
      Xn("table", {
        border: 0,
        class: st(["dy-table", {
          "dy-table-border": _.border
        }]),
        cellspacing: "0",
        cellpadding: "0"
      }, [
        Rr(Pv, {
          ref_key: "headerWrapper",
          ref: f,
          "keep-scroll-left": Je(x),
          width: $.value,
          columns: _.columns,
          border: _.border,
          "max-width": J.value,
          onScrollLeft: q,
          onMaxScrollWidth: $e
        }, null, 8, ["keep-scroll-left", "width", "columns", "border", "max-width"]),
        Rr(Uv, Lv({
          ref_key: "bodyWrapper",
          ref: E,
          height: de.value,
          width: $.value,
          columns: _.columns,
          border: _.border,
          data: b.data,
          stripe: b.stripe
        }, b.$attrs, {
          "max-width": J.value,
          "keep-scroll-left": Je(x),
          onScrollLeft: ie,
          onScrollTop: O
        }), null, 16, ["height", "width", "columns", "border", "data", "stripe", "max-width", "keep-scroll-left"]),
        Kv
      ], 2)
    ]));
  }
});
const Yv = /* @__PURE__ */ Dt(zv, [["__scopeId", "data-v-24149a87"]]), Zv = Pn({
  name: "CanvasTable"
}), Xv = /* @__PURE__ */ Pn({
  ...Zv,
  props: {
    data: {
      type: Array,
      default() {
        return () => [];
      }
    },
    height: {
      type: Number,
      default: 300
    },
    width: {
      type: Number,
      default: 600
    },
    columns: {
      type: Array,
      default() {
        return () => [];
      }
    },
    getCellClass: {
      type: Function,
      default() {
        return () => {
        };
      }
    },
    getCellStyle: {
      type: Function,
      default() {
        return () => {
        };
      }
    }
  },
  setup(_) {
    const V = _, f = F();
    let E = null, B = 30, de = 20, $ = 8, D = F(V.data.length), x = F(V.columns.length), q = F(V.data), ie = F(V.columns), J = nu(() => Nv(x.value, V.width, ie.value)), $e = nu(() => Fv(
      f.value.getContext("2d"),
      D.value,
      q.value,
      ie.value,
      J.value,
      de
    ));
    Ft(() => {
      E = f.value.getContext("2d");
      let T = () => {
        let ne = 0;
        for (const pe in J.value)
          ne += J.value[pe];
        return ne;
      }, j = () => {
        let ne = B;
        for (const pe in $e.value)
          ne += $e.value[pe];
        return ne;
      };
      E.canvas.width = T(), E.canvas.height = j();
      let z = T(), ae = j();
      O(E, z, ae), xe(E, z, ae, D.value, x.value, B), b(E, z, ae, D.value, x.value, 0, B), ee(E, z, ae, D.value, x.value, 0, B), ue(E, z, ae, D.value, x.value, 0, B);
    });
    const O = (T, j, z) => {
      T.beginPath(), T.moveTo(0, 0), T.lineTo(j, 0), T.lineTo(j, z), T.moveTo(0, 0), T.lineTo(0, z), T.lineTo(j, z), T.strokeStyle = "#cccccc", T.lineWidth = 1, T.stroke();
    }, b = (T, j, z, ae, ne, pe = 0, Le = 0, A = $e.value) => {
      let C = Le;
      for (let L = 0; L < ae; L++) {
        let N = A[L];
        C += N, T.beginPath(), T.moveTo(0, C), T.lineTo(j, C), T.strokeStyle = "#cccccc", T.lineWidth = 0.5, T.stroke();
      }
    }, ee = (T, j, z, ae, ne, pe = 0, Le = 0) => {
      let A = pe;
      for (let C = 0; C < ne; C++) {
        let L = J.value[C];
        A += L, T.beginPath(), T.moveTo(A, 0), T.lineTo(A, z), T.strokeStyle = "#cccccc", T.lineWidth = 0.5, T.stroke();
      }
    }, ue = (T, j, z, ae, ne, pe = 0, Le = 0) => {
      let A = pe;
      for (let C = 0; C < ne; C++) {
        let L = J.value[C], N = Le;
        for (let te = 0; te < ae; te++) {
          let me = $e.value[te], se = q.value[te][ie.value[C].prop];
          T.moveTo(A, N), T.font = "14px";
          let we = T.measureText(se), Ee = we.width, ht = N + we.actualBoundingBoxAscent - we.actualBoundingBoxDescent, wn = (we.actualBoundingBoxAscent + we.actualBoundingBoxDescent) * 1.5;
          Ee > L ? Mf(T, se, A + $ / 2, 2 * ht - N, L - $, de) : T.fillText(se, Math.floor(L / 2 - Ee / 2) + A, N + wn), N += me;
        }
        A += L;
      }
    }, xe = (T, j, z, ae, ne, pe = 0, Le = 0) => {
      b(T, j, 20, 1, ne, 0, 0, { 0: B }), ee(T, j, B, ae, ne), un(T, j, z, 1, ne);
    }, un = (T, j, z, ae, ne, pe = B) => {
      let Le = 0;
      for (let A = 0; A < ne; A++) {
        let C = J.value[A], L = 0;
        for (let N = 0; N < ae; N++) {
          let te = ie.value[A].label;
          T.moveTo(Le, L), T.font = "18px";
          let me = T.measureText(te), se = me.width, we = L + me.actualBoundingBoxAscent - me.actualBoundingBoxDescent, Ee = (L + pe + me.actualBoundingBoxAscent + me.actualBoundingBoxDescent) / 2;
          se > C ? Mf(T, te, Le + $ / 2, 2 * we - L, C - $, de) : T.fillText(te, Math.floor(C / 2 - se / 2) + Le, L + Ee), L += pe;
        }
        Le += C;
      }
    };
    return (T, j) => (hn(), dn("canvas", {
      ref_key: "dyCanvas",
      ref: f
    }, " 抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持<canvas%gt;元素的浏览器或是禁用了 JavaScript 的浏览器内渲染并展现） ", 512));
  }
});
const Jv = /* @__PURE__ */ Dt(Xv, [["__scopeId", "data-v-41a2a8e6"]]);
let Qv = [Yv, Jv];
const Uf = (_) => {
  Qv.forEach((V) => {
    _.component(V.name, V);
  });
};
typeof window < "u" && window.Vue && Uf(window.Vue);
const Vv = {
  install: Uf
};
export {
  Vv as default
};
