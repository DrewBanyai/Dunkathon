var TwitchJs = function() {
    "use strict";

    var FULL_LOGGING = false;

    var e = function(t, r) {
        return (e = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) })(t, r)
    };

    function t(t, r) {
        function n() { this.constructor = t }
        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }
    var r = function() {
        return (r = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function n(e, t) { var r = {}; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]) } return r }

    function o(e, t, r, n) {
        return new(r || (r = Promise))((function(o, i) {
            function a(e) { try { u(n.next(e)) } catch (e) { i(e) } }

            function s(e) { try { u(n.throw(e)) } catch (e) { i(e) } }

            function u(e) { e.done ? o(e.value) : new r((function(t) { t(e.value) })).then(a, s) }
            u((n = n.apply(e, t || [])).next())
        }))
    }

    function i(e, t) {
        var r, n, o, i, a = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
        return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, { value: i[1], done: !1 };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) { a = 0; continue }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { a.label = i[1]; break }
                                if (6 === i[0] && a.label < o[1]) { a.label = o[1], o = i; break }
                                if (o && a.label < o[2]) { a.label = o[2], a.ops.push(i); break }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) { i = [6, e], n = 0 } finally { r = o = 0 }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 }
                }([i, s])
            }
        }
    }

    function a() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
            o = 0;
        for (t = 0; t < r; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
        return n
    }
    var s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function u(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }

    function c(e, t) { return e(t = { exports: {} }, t.exports), t.exports }
    var l = c((function(e) {
            var t = Object.prototype.hasOwnProperty,
                r = "~";

            function n() {}

            function o(e, t, r) { this.fn = e, this.context = t, this.once = r || !1 }

            function i(e, t, n, i, a) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var s = new o(n, i || e, a),
                    u = r ? r + t : t;
                return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s, e._eventsCount++), e
            }

            function a(e, t) { 0 == --e._eventsCount ? e._events = new n : delete e._events[t] }

            function s() { this._events = new n, this._eventsCount = 0 }
            Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), s.prototype.eventNames = function() { var e, n, o = []; if (0 === this._eventsCount) return o; for (n in e = this._events) t.call(e, n) && o.push(r ? n.slice(1) : n); return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o }, s.prototype.listeners = function(e) {
                var t = r ? r + e : e,
                    n = this._events[t];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var o = 0, i = n.length, a = new Array(i); o < i; o++) a[o] = n[o].fn;
                return a
            }, s.prototype.listenerCount = function(e) {
                var t = r ? r + e : e,
                    n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }, s.prototype.emit = function(e, t, n, o, i, a) {
                var s = r ? r + e : e;
                if (!this._events[s]) return !1;
                var u, c, l = this._events[s],
                    f = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, n), !0;
                        case 4:
                            return l.fn.call(l.context, t, n, o), !0;
                        case 5:
                            return l.fn.call(l.context, t, n, o, i), !0;
                        case 6:
                            return l.fn.call(l.context, t, n, o, i, a), !0
                    }
                    for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u)
                } else {
                    var h, d = l.length;
                    for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), f) {
                        case 1:
                            l[c].fn.call(l[c].context);
                            break;
                        case 2:
                            l[c].fn.call(l[c].context, t);
                            break;
                        case 3:
                            l[c].fn.call(l[c].context, t, n);
                            break;
                        case 4:
                            l[c].fn.call(l[c].context, t, n, o);
                            break;
                        default:
                            if (!u)
                                for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                            l[c].fn.apply(l[c].context, u)
                    }
                }
                return !0
            }, s.prototype.on = function(e, t, r) { return i(this, e, t, r, !1) }, s.prototype.once = function(e, t, r) { return i(this, e, t, r, !0) }, s.prototype.removeListener = function(e, t, n, o) {
                var i = r ? r + e : e;
                if (!this._events[i]) return this;
                if (!t) return a(this, i), this;
                var s = this._events[i];
                if (s.fn) s.fn !== t || o && !s.once || n && s.context !== n || a(this, i);
                else {
                    for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || o && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                    c.length ? this._events[i] = 1 === c.length ? c[0] : c : a(this, i)
                }
                return this
            }, s.prototype.removeAllListeners = function(e) { var t; return e ? (t = r ? r + e : e, this._events[t] && a(this, t)) : (this._events = new n, this._eventsCount = 0), this }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s
        })),
        f = Array.isArray,
        h = "object" == typeof s && s && s.Object === Object && s,
        d = "object" == typeof self && self && self.Object === Object && self,
        p = h || d || Function("return this")(),
        _ = p.Symbol,
        v = Object.prototype,
        O = v.hasOwnProperty,
        E = v.toString,
        y = _ ? _.toStringTag : void 0;
    var m = function(e) {
            var t = O.call(e, y),
                r = e[y];
            try { e[y] = void 0; var n = !0 } catch (e) {}
            var o = E.call(e);
            return n && (t ? e[y] = r : delete e[y]), o
        },
        b = Object.prototype.toString;
    var S = function(e) { return b.call(e) },
        g = "[object Null]",
        T = "[object Undefined]",
        A = _ ? _.toStringTag : void 0;
    var C = function(e) { return null == e ? void 0 === e ? T : g : A && A in Object(e) ? m(e) : S(e) };
    var N = function(e) { return null != e && "object" == typeof e },
        I = "[object Symbol]";
    var R = function(e) { return "symbol" == typeof e || N(e) && C(e) == I },
        w = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        D = /^\w*$/;
    var P = function(e, t) { if (f(e)) return !1; var r = typeof e; return !("number" != r && "symbol" != r && "boolean" != r && null != e && !R(e)) || (D.test(e) || !w.test(e) || null != t && e in Object(t)) };
    var j = function(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) },
        U = "[object AsyncFunction]",
        L = "[object Function]",
        M = "[object GeneratorFunction]",
        F = "[object Proxy]";
    var x, B = function(e) { if (!j(e)) return !1; var t = C(e); return t == L || t == M || t == U || t == F },
        k = p["__core-js_shared__"],
        H = (x = /[^.]+$/.exec(k && k.keys && k.keys.IE_PROTO || "")) ? "Symbol(src)_1." + x : "";
    var G = function(e) { return !!H && H in e },
        z = Function.prototype.toString;
    var W = function(e) { if (null != e) { try { return z.call(e) } catch (e) {} try { return e + "" } catch (e) {} } return "" },
        V = /^\[object .+?Constructor\]$/,
        Y = Function.prototype,
        q = Object.prototype,
        K = Y.toString,
        $ = q.hasOwnProperty,
        J = RegExp("^" + K.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Z = function(e) { return !(!j(e) || G(e)) && (B(e) ? J : V).test(W(e)) };
    var Q = function(e, t) { return null == e ? void 0 : e[t] };
    var X = function(e, t) { var r = Q(e, t); return Z(r) ? r : void 0 },
        ee = X(Object, "create");
    var te = function() { this.__data__ = ee ? ee(null) : {}, this.size = 0 };
    var re = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t },
        ne = "__lodash_hash_undefined__",
        oe = Object.prototype.hasOwnProperty;
    var ie = function(e) { var t = this.__data__; if (ee) { var r = t[e]; return r === ne ? void 0 : r } return oe.call(t, e) ? t[e] : void 0 },
        ae = Object.prototype.hasOwnProperty;
    var se = function(e) { var t = this.__data__; return ee ? void 0 !== t[e] : ae.call(t, e) },
        ue = "__lodash_hash_undefined__";
    var ce = function(e, t) { var r = this.__data__; return this.size += this.has(e) ? 0 : 1, r[e] = ee && void 0 === t ? ue : t, this };

    function le(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    le.prototype.clear = te, le.prototype.delete = re, le.prototype.get = ie, le.prototype.has = se, le.prototype.set = ce;
    var fe = le;
    var he = function() { this.__data__ = [], this.size = 0 };
    var de = function(e, t) { return e === t || e != e && t != t };
    var pe = function(e, t) {
            for (var r = e.length; r--;)
                if (de(e[r][0], t)) return r;
            return -1
        },
        _e = Array.prototype.splice;
    var ve = function(e) {
        var t = this.__data__,
            r = pe(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : _e.call(t, r, 1), --this.size, !0)
    };
    var Oe = function(e) {
        var t = this.__data__,
            r = pe(t, e);
        return r < 0 ? void 0 : t[r][1]
    };
    var Ee = function(e) { return pe(this.__data__, e) > -1 };
    var ye = function(e, t) {
        var r = this.__data__,
            n = pe(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    };

    function me(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    me.prototype.clear = he, me.prototype.delete = ve, me.prototype.get = Oe, me.prototype.has = Ee, me.prototype.set = ye;
    var be = me,
        Se = X(p, "Map");
    var ge = function() { this.size = 0, this.__data__ = { hash: new fe, map: new(Se || be), string: new fe } };
    var Te = function(e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e };
    var Ae = function(e, t) { var r = e.__data__; return Te(t) ? r["string" == typeof t ? "string" : "hash"] : r.map };
    var Ce = function(e) { var t = Ae(this, e).delete(e); return this.size -= t ? 1 : 0, t };
    var Ne = function(e) { return Ae(this, e).get(e) };
    var Ie = function(e) { return Ae(this, e).has(e) };
    var Re = function(e, t) {
        var r = Ae(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    };

    function we(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    we.prototype.clear = ge, we.prototype.delete = Ce, we.prototype.get = Ne, we.prototype.has = Ie, we.prototype.set = Re;
    var De = we,
        Pe = "Expected a function";

    function je(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(Pe);
        var r = function() {
            var n = arguments,
                o = t ? t.apply(this, n) : n[0],
                i = r.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, n);
            return r.cache = i.set(o, a) || i, a
        };
        return r.cache = new(je.Cache || De), r
    }
    je.Cache = De;
    var Ue = je,
        Le = 500;
    var Me = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Fe = /\\(\\)?/g,
        xe = function(e) {
            var t = Ue(e, (function(e) { return r.size === Le && r.clear(), e })),
                r = t.cache;
            return t
        }((function(e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(Me, (function(e, r, n, o) { t.push(n ? o.replace(Fe, "$1") : r || e) })), t }));
    var Be = function(e, t) { for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e); return o },
        ke = 1 / 0,
        He = _ ? _.prototype : void 0,
        Ge = He ? He.toString : void 0;
    var ze = function e(t) { if ("string" == typeof t) return t; if (f(t)) return Be(t, e) + ""; if (R(t)) return Ge ? Ge.call(t) : ""; var r = t + ""; return "0" == r && 1 / t == -ke ? "-0" : r };
    var We = function(e) { return null == e ? "" : ze(e) };
    var Ve = function(e, t) { return f(e) ? e : P(e, t) ? [e] : xe(We(e)) },
        Ye = 1 / 0;
    var qe = function(e) { if ("string" == typeof e || R(e)) return e; var t = e + ""; return "0" == t && 1 / e == -Ye ? "-0" : t };
    var Ke = function(e, t) { for (var r = 0, n = (t = Ve(t, e)).length; null != e && r < n;) e = e[qe(t[r++])]; return r && r == n ? e : void 0 };
    var $e = function(e, t, r) { var n = null == e ? void 0 : Ke(e, t); return void 0 === n ? r : n };
    var Je = function(e) { return We(e).toLowerCase() },
        Ze = "__lodash_hash_undefined__";
    var Qe = function(e) { return this.__data__.set(e, Ze), this };
    var Xe = function(e) { return this.__data__.has(e) };

    function et(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.__data__ = new De; ++t < r;) this.add(e[t])
    }
    et.prototype.add = et.prototype.push = Qe, et.prototype.has = Xe;
    var tt = et;
    var rt = function(e, t, r, n) {
        for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
            if (t(e[i], i, e)) return i;
        return -1
    };
    var nt = function(e) { return e != e };
    var ot = function(e, t, r) {
        for (var n = r - 1, o = e.length; ++n < o;)
            if (e[n] === t) return n;
        return -1
    };
    var it = function(e, t, r) { return t == t ? ot(e, t, r) : rt(e, nt, r) };
    var at = function(e, t) { return !!(null == e ? 0 : e.length) && it(e, t, 0) > -1 };
    var st = function(e, t, r) {
        for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
            if (r(t, e[n])) return !0;
        return !1
    };
    var ut = function(e, t) { return e.has(t) },
        ct = X(p, "Set");
    var lt = function() {};
    var ft = function(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e) { r[++t] = e })), r
        },
        ht = ct && 1 / ft(new ct([, -0]))[1] == 1 / 0 ? function(e) { return new ct(e) } : lt,
        dt = 200;
    var pt = function(e, t, r) {
        var n = -1,
            o = at,
            i = e.length,
            a = !0,
            s = [],
            u = s;
        if (r) a = !1, o = st;
        else if (i >= dt) {
            var c = t ? null : ht(e);
            if (c) return ft(c);
            a = !1, o = ut, u = new tt
        } else u = t ? [] : s;
        e: for (; ++n < i;) {
            var l = e[n],
                f = t ? t(l) : l;
            if (l = r || 0 !== l ? l : 0, a && f == f) {
                for (var h = u.length; h--;)
                    if (u[h] === f) continue e;
                t && u.push(f), s.push(l)
            } else o(u, f, r) || (u !== s && u.push(f), s.push(l))
        }
        return s
    };
    var _t, vt, Ot, Et, yt, mt, bt, St, gt, Tt, At = function(e) { return e && e.length ? pt(e) : [] };
    ! function(e) { e.Helix = "helix", e.Kraken = "kraken" }(_t || (_t = {})),
    function(e) { e.tags = "twitch.tv/tags", e.commands = "twitch.tv/commands", e.membership = "twitch.tv/membership" }(vt || (vt = {})),
    function(e) { e.JOIN = "JOIN", e.MODE = "MODE", e.PART = "PART", e.NAMES = "353", e.NAMES_END = "366" }(Ot || (Ot = {})),
    function(e) { e.CLEAR_CHAT = "CLEARCHAT", e.GLOBAL_USER_STATE = "GLOBALUSERSTATE", e.PRIVATE_MESSAGE = "PRIVMSG", e.ROOM_STATE = "ROOMSTATE", e.USER_NOTICE = "USERNOTICE", e.USER_STATE = "USERSTATE" }(Et || (Et = {})),
    function(e) { e.WELCOME = "001", e.PING = "PING", e.PONG = "PONG", e.WHISPER = "PRIVMSG #jtv" }(yt || (yt = {})),
    function(e) { e.CLEAR_CHAT = "CLEARCHAT", e.HOST_TARGET = "HOSTTARGET", e.NOTICE = "NOTICE", e.RECONNECT = "RECONNECT", e.ROOM_STATE = "ROOMSTATE", e.USER_NOTICE = "USERNOTICE", e.USER_STATE = "USERSTATE" }(mt || (mt = {})),
    function(e) { e.WELCOME = "001", e.PING = "PING", e.PONG = "PONG", e.RECONNECT = "RECONNECT", e.WHISPER = "PRIVMSG #jtv", e.JOIN = "JOIN", e.MODE = "MODE", e.PART = "PART", e.NAMES = "353", e.NAMES_END = "366", e.CLEAR_CHAT = "CLEARCHAT", e.GLOBAL_USER_STATE = "GLOBALUSERSTATE", e.HOST_TARGET = "HOSTTARGET", e.NOTICE = "NOTICE", e.PRIVATE_MESSAGE = "PRIVMSG", e.ROOM_STATE = "ROOMSTATE", e.USER_NOTICE = "USERNOTICE", e.USER_STATE = "USERSTATE" }(bt || (bt = {})),
    function(e) { e.RAW = "RAW", e.ALL = "*", e.CONNECTED = "CONNECTED", e.DISCONNECTED = "DISCONNECTED", e.RECONNECT = "RECONNECT", e.AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED", e.ERROR_ENCOUNTERED = "ERROR_ENCOUNTERED", e.PARSE_ERROR_ENCOUNTERED = "PARSE_ERROR_ENCOUNTERED", e.ANON_GIFT_PAID_UPGRADE = "ANON_GIFT_PAID_UPGRADE", e.GIFT_PAID_UPGRADE = "GIFT_PAID_UPGRADE", e.RAID = "RAID", e.RESUBSCRIPTION = "RESUBSCRIPTION", e.RITUAL = "RITUAL", e.SUBSCRIPTION = "SUBSCRIPTION", e.SUBSCRIPTION_GIFT = "SUBSCRIPTION_GIFT", e.SUBSCRIPTION_GIFT_COMMUNITY = "SUBSCRIPTION_GIFT_COMMUNITY", e.ROOM_MODS = "ROOM_MODS", e.MOD_GAINED = "MOD_GAINED", e.MOD_LOST = "MOD_LOST", e.USER_BANNED = "USER_BANNED", e.CHEER = "CHEER", e.HOST_ON = "HOST_ON", e.HOST_OFF = "HOST_OFF", e.HOSTED = "HOSTED", e.HOSTED_WITHOUT_VIEWERS = "HOSTED/WITHOUT_VIEWERS", e.HOSTED_WITH_VIEWERS = "HOSTED/WITH_VIEWERS", e.HOSTED_AUTO = "HOSTED/AUTO" }(St || (St = {})),
    function(e) { e.BAN = "ban", e.CLEAR = "clear", e.COLOR = "color", e.COMMERCIAL = "commercial", e.EMOTE_ONLY = "emoteonly", e.EMOTE_ONLY_OFF = "emoteonlyoff", e.FOLLOWERS_ONLY = "followers", e.FOLLOWERS_ONLY_OFF = "followersoff", e.HELP = "help", e.HOST = "host", e.MARKER = "marker", e.ME = "me", e.MOD = "mod", e.MODS = "mods", e.R9K = "r9kbeta", e.R9K_OFF = "r9kbetaoff", e.RAID = "raid", e.SLOW = "slow", e.SLOW_OFF = "slowoff", e.SUBSCRIBERS = "subscribers", e.SUBSCRIBERS_OFF = "subscribersoff", e.TIMEOUT = "timeout", e.UNBAN = "unban", e.UNHOST = "unhost", e.UNMOD = "unmod", e.UNRAID = "unraid" }(gt || (gt = {})),
    function(e) { e.ALREADY_BANNED = "already_banned", e.ALREADY_EMOTE_ONLY_OFF = "already_emote_only_off", e.ALREADY_EMOTE_ONLY_ON = "already_emote_only_on", e.ALREADY_R9K_OFF = "already_r9k_off", e.ALREADY_R9K_ON = "already_r9k_on", e.ALREADY_SUBS_OFF = "already_subs_off", e.ALREADY_SUBS_ON = "already_subs_on", e.BAD_HOST_HOSTING = "bad_host_hosting", e.BAD_MOD_MOD = "bad_mod_mod", e.BAN_SUCCESS = "ban_success", e.BAD_UNBAN_NO_BAN = "bad_unban_no_ban", e.COLOR_CHANGED = "color_changed", e.CMDS_AVAILABLE = "cmds_available", e.COMMERCIAL_SUCCESS = "commercial_success", e.EMOTE_ONLY_OFF = "emote_only_off", e.EMOTE_ONLY_ON = "emote_only_on", e.FOLLOWERS_OFF = "followers_off", e.FOLLOWERS_ON = "followers_on", e.FOLLOWERS_ON_ZERO = "followers_on_zero", e.HOST_OFF = "host_off", e.HOST_ON = "host_on", e.HOSTS_REMAINING = "hosts_remaining", e.MSG_CHANNEL_SUSPENDED = "msg_channel_suspended", e.MOD_SUCCESS = "mod_success", e.R9K_OFF = "r9k_off", e.R9K_ON = "r9k_on", e.ROOM_MODS = "room_mods", e.SLOW_OFF = "slow_off", e.SLOW_ON = "slow_on", e.SUBS_OFF = "subs_off", e.SUBS_ON = "subs_on", e.TIMEOUT_SUCCESS = "timeout_success", e.UNBAN_SUCCESS = "unban_success", e.UNRAID_SUCCESS = "unraid_success", e.UNRECOGNIZED_CMD = "unrecognized_cmd" }(Tt || (Tt = {}));
    var Ct, Nt, It = Object.keys(Tt).reduce((function(e, t) { var n; return r(r({}, e), ((n = {})[t] = t, n[bt.NOTICE + "/" + t] = t, n)) }), {});
    ! function(e) { e.CHEER = "CHEER", e.HOSTED_WITHOUT_VIEWERS = "HOSTED_WITHOUT_VIEWERS", e.HOSTED_WITH_VIEWERS = "HOSTED_WITH_VIEWERS", e.HOSTED_AUTO = "HOSTED_AUTO" }(Ct || (Ct = {})),
    function(e) { e.ANON_GIFT_PAID_UPGRADE = "anongiftpaidupgrade", e.GIFT_PAID_UPGRADE = "giftpaidupgrade", e.RAID = "raid", e.RESUBSCRIPTION = "resub", e.RITUAL = "ritual", e.SUBSCRIPTION = "sub", e.SUBSCRIPTION_GIFT = "subgift", e.SUBSCRIPTION_GIFT_COMMUNITY = "submysterygift" }(Nt || (Nt = {}));
    var Rt, wt, Dt = Object.keys(Nt).reduce((function(e, t) { var n; return r(r({}, e), ((n = {})[t] = t, n[bt.USER_NOTICE + "/" + t] = t, n)) }), {}),
        Pt = r(r(r(r(r(r(r(r({}, Ot), Et), yt), mt), St), It), Ct), Dt);

    function jt(e) { try { return JSON.stringify(e) } catch (e) { return '"[Circular]"' } }! function(e) { e[e.admin = 0] = "admin", e[e.broadcaster = 1] = "broadcaster", e[e.globalMod = 2] = "globalMod", e[e.moderator = 3] = "moderator", e[e.partner = 4] = "partner", e[e.premium = 5] = "premium", e[e.staff = 6] = "staff", e[e.subGifter = 7] = "subGifter", e[e.turbo = 8] = "turbo", e[e.vip = 9] = "vip" }(Rt || (Rt = {})),
    function(e) { e[e.bits = 0] = "bits", e[e.bitsLeader = 1] = "bitsLeader", e[e.subscriber = 2] = "subscriber" }(wt || (wt = {}));
    var Ut = function(e, t, r) {
        var n = r && r.stringify || jt,
            o = 1;
        null === e && (e = t[0], o = 0);
        if ("object" == typeof e && null !== e) {
            var i = t.length + o;
            if (1 === i) return e;
            var a = new Array(i);
            a[0] = n(e);
            for (var s = 1; s < i; s++) a[s] = n(t[s]);
            return a.join(" ")
        }
        var u = t.length;
        if (0 === u) return e;
        for (var c = "", l = "", f = 1 - o, h = 0, d = e && e.length || 0, p = 0; p < d;) {
            if (37 === e.charCodeAt(p) && p + 1 < d) {
                switch (e.charCodeAt(p + 1)) {
                    case 100:
                        if (f >= u) break;
                        if (h < p && (l += e.slice(h, p)), null == t[f]) break;
                        l += Number(t[f]), h = p += 2;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (f >= u) break;
                        if (h < p && (l += e.slice(h, p)), void 0 === t[f]) break;
                        var _ = typeof t[f];
                        if ("string" === _) { l += "'" + t[f] + "'", h = p + 2, p++; break }
                        if ("function" === _) { l += t[f].name || "<anonymous>", h = p + 2, p++; break }
                        l += n(t[f]), h = p + 2, p++;
                        break;
                    case 115:
                        if (f >= u) break;
                        h < p && (l += e.slice(h, p)), l += String(t[f]), h = p + 2, p++;
                        break;
                    case 37:
                        h < p && (l += e.slice(h, p)), l += "%", h = p + 2, p++
                }++f
            }++p
        }
        0 === h ? l = e : h < d && (l += e.slice(h));
        for (; f < u;) c = t[f++], l += null === c || "object" != typeof c ? " " + String(c) : " " + n(c);
        return l
    };
    var Lt = xt,
        Mt = function() {
            function e(e) { return void 0 !== e && e }
            try { return "undefined" != typeof globalThis ? globalThis : (Object.defineProperty(Object.prototype, "globalThis", { get: function() { return delete Object.prototype.globalThis, this.globalThis = this }, configurable: !0 }), globalThis) } catch (t) { return e(self) || e(window) || e(this) || {} }
        }().console || {},
        Ft = { mapHttpRequest: Vt, mapHttpResponse: Vt, wrapRequestSerializer: Yt, wrapResponseSerializer: Yt, wrapErrorSerializer: Yt, req: Vt, res: Vt, err: function(e) { var t = { type: e.constructor.name, msg: e.message, stack: e.stack }; for (var r in e) void 0 === t[r] && (t[r] = e[r]); return t } };

    function xt(e) {
        (e = e || {}).browser = e.browser || {};
        var t = e.browser.transmit;
        if (t && "function" != typeof t.send) throw Error("pino: transmit option must have a send function");
        var r = e.browser.write || Mt;
        e.browser.write && (e.browser.asObject = !0);
        var n = e.serializers || {},
            o = Array.isArray(e.browser.serialize) ? e.browser.serialize.filter((function(e) { return "!stdSerializers.err" !== e })) : !0 === e.browser.serialize && Object.keys(n),
            i = e.browser.serialize;
        Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (i = !1);
        "function" == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === e.enabled && (e.level = "silent");
        var a = e.level || "info",
            s = Object.create(r);
        s.log || (s.log = qt), Object.defineProperty(s, "levelVal", { get: function() { return "silent" === this.level ? 1 / 0 : this.levels.values[this.level] } }), Object.defineProperty(s, "level", {
            get: function() { return this._level },
            set: function(e) {
                if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                this._level = e, Bt(u, s, "error", "log"), Bt(u, s, "fatal", "error"), Bt(u, s, "warn", "error"), Bt(u, s, "info", "log"), Bt(u, s, "debug", "log"), Bt(u, s, "trace", "log")
            }
        });
        var u = { transmit: t, serialize: o, asObject: e.browser.asObject, levels: ["error", "fatal", "warn", "info", "debug", "trace"] };
        return s.levels = xt.levels, s.level = a, s.setMaxListeners = s.getMaxListeners = s.emit = s.addListener = s.on = s.prependListener = s.once = s.prependOnceListener = s.removeListener = s.removeAllListeners = s.listeners = s.listenerCount = s.eventNames = s.write = s.flush = qt, s.serializers = n, s._serialize = o, s._stdErrSerialize = i, s.child = function(r) {
            if (!r) throw new Error("missing bindings for child Pino");
            var i = r.serializers;
            if (o && i) {
                var a = Object.assign({}, n, i),
                    s = !0 === e.browser.serialize ? Object.keys(a) : o;
                delete r.serializers, Ht([r], s, a, this._stdErrSerialize)
            }

            function u(e) { this._childLevel = 1 + (0 | e._childLevel), this.error = Gt(e, r, "error"), this.fatal = Gt(e, r, "fatal"), this.warn = Gt(e, r, "warn"), this.info = Gt(e, r, "info"), this.debug = Gt(e, r, "debug"), this.trace = Gt(e, r, "trace"), a && (this.serializers = a, this._serialize = s), t && (this._logEvent = Wt([].concat(e._logEvent.bindings, r))) }
            return u.prototype = this, new u(this)
        }, t && (s._logEvent = Wt()), s
    }

    function Bt(e, t, r, n) {
        var o = Object.getPrototypeOf(t);
        t[r] = t.levelVal > t.levels.values[r] ? qt : o[r] ? o[r] : Mt[r] || Mt[n] || qt,
            function(e, t, r) {
                if (!e.transmit && t[r] === qt) return;
                t[r] = (n = t[r], function() {
                    for (var o = Date.now(), i = new Array(arguments.length), a = Object.getPrototypeOf && Object.getPrototypeOf(this) === Mt ? Mt : this, s = 0; s < i.length; s++) i[s] = arguments[s];
                    if (e.serialize &&
                        !e.asObject &&
                        Ht(i, this._serialize, this.serializers, this._stdErrSerialize),
                        e.asObject ? n.call(a, kt(this, r, i, o)) : n.apply(a, i), e.transmit) {
                        var u = e.transmit.level || t.level,
                            c = xt.levels.values[u],
                            l = xt.levels.values[r];
                        if (l < c) return;
                        zt(this, { ts: o, methodLevel: r, methodValue: l, transmitLevel: u, transmitValue: xt.levels.values[e.transmit.level || t.level], send: e.transmit.send, val: t.levelVal }, i)
                    }
                });
                var n
            }(e, t, r)
    }

    function kt(e, t, r, n) {
        e._serialize && Ht(r, e._serialize, e.serializers, e._stdErrSerialize);
        var o = r.slice(),
            i = o[0],
            a = { time: n, level: xt.levels.values[t] },
            s = 1 + (0 | e._childLevel);
        if (s < 1 && (s = 1), null !== i && "object" == typeof i) {
            for (; s-- && "object" == typeof o[0];) Object.assign(a, o.shift());
            i = o.length ? Ut(o.shift(), o) : void 0
        } else "string" == typeof i && (i = Ut(o.shift(), o));
        return void 0 !== i && (a.msg = i), a
    }

    function Ht(e, t, r, n) {
        for (var o in e)
            if (n && e[o] instanceof Error) e[o] = xt.stdSerializers.err(e[o]);
            else if ("object" == typeof e[o] && !Array.isArray(e[o]))
            for (var i in e[o]) t && t.indexOf(i) > -1 && i in r && (e[o][i] = r[i](e[o][i]))
    }

    function Gt(e, t, r) {
        return function() {
            var n = new Array(1 + arguments.length);
            n[0] = t;
            for (var o = 1; o < n.length; o++) n[o] = arguments[o - 1];
            return e[r].apply(this, n)
        }
    }

    function zt(e, t, r) {
        var n = t.send,
            o = t.ts,
            i = t.methodLevel,
            a = t.methodValue,
            s = t.val,
            u = e._logEvent.bindings;
        Ht(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = o, e._logEvent.messages = r.filter((function(e) { return -1 === u.indexOf(e) })), e._logEvent.level.label = i, e._logEvent.level.value = a, n(i, e._logEvent, s), e._logEvent = Wt(u)
    }

    function Wt(e) { return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } } }

    function Vt() { return {} }

    function Yt(e) { return e }

    function qt() {}
    xt.LOG_VERSION = 1, xt.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }, xt.stdSerializers = Ft;
    var Kt = function(e) {
            void 0 === e && (e = {});
            var t = e.name,
                o = n(e, ["name"]),
                i = ["TwitchJS"].concat(t || []).join("/"),
                a = Lt(r({ name: i, prettyPrint: !0, level: "info" }, o));
            return a.profile = function(e) {
                var t = Date.now();
                return e && a.info(e), {
                    done: function(e, r) {
                        var n = e + " (" + (Date.now() - t) + "ms)";
                        r ? a.error(n, r) : a.info(n)
                    }
                }
            }, a
        },
        $t = function(e, t) { return new Promise((function(r) { return e.once(t, r) })) },
        Jt = function(e) { return e.reduce((function(e, t) { return e.then(t) }), Promise.resolve()) },
        Zt = function(e, t) { return new Promise((function(r, n) { return setTimeout(n, e, t) })) },
        Qt = "ERROR: connect timed out",
        Xt = "ERROR: join timed out",
        er = new RegExp("^msgParam(\\w+)"),
        tr = /:.+@jtv\.tmi\.twitch\.tv PRIVMSG #?(\w+) :(\w+) is now (?:(auto) )?hosting[A-z ]+(\d+)?/,
        rr = new RegExp("^justinfan(\\d+)$"),
        nr = function(e) { return void 0 !== e && e.command === bt.NOTICE && "" === e.channel && "Login authentication failed" === e.message },
        or = function(e) { return rr.test(e) },
        ir = Object.prototype.hasOwnProperty,
        ar = Array.isArray,
        sr = function() { for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()); return e }(),
        ur = function(e, t) { for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (r[n] = e[n]); return r },
        cr = {
            arrayToObject: ur,
            assign: function(e, t) { return Object.keys(t).reduce((function(e, r) { return e[r] = t[r], e }), e) },
            combine: function(e, t) { return [].concat(e, t) },
            compact: function(e) {
                for (var t = [{ obj: { o: e }, prop: "o" }], r = [], n = 0; n < t.length; ++n)
                    for (var o = t[n], i = o.obj[o.prop], a = Object.keys(i), s = 0; s < a.length; ++s) {
                        var u = a[s],
                            c = i[u];
                        "object" == typeof c && null !== c && -1 === r.indexOf(c) && (t.push({ obj: i, prop: u }), r.push(c))
                    }
                return function(e) {
                    for (; e.length > 1;) {
                        var t = e.pop(),
                            r = t.obj[t.prop];
                        if (ar(r)) {
                            for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                            t.obj[t.prop] = n
                        }
                    }
                }(t), e
            },
            decode: function(e, t, r) { var n = e.replace(/\+/g, " "); if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape); try { return decodeURIComponent(n) } catch (e) { return n } },
            encode: function(e, t, r) {
                if (0 === e.length) return e;
                var n = e;
                if ("symbol" == typeof e ? n = Symbol.prototype.toString.call(e) : "string" != typeof e && (n = String(e)), "iso-8859-1" === r) return escape(n).replace(/%u[0-9a-f]{4}/gi, (function(e) { return "%26%23" + parseInt(e.slice(2), 16) + "%3B" }));
                for (var o = "", i = 0; i < n.length; ++i) {
                    var a = n.charCodeAt(i);
                    45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? o += n.charAt(i) : a < 128 ? o += sr[a] : a < 2048 ? o += sr[192 | a >> 6] + sr[128 | 63 & a] : a < 55296 || a >= 57344 ? o += sr[224 | a >> 12] + sr[128 | a >> 6 & 63] + sr[128 | 63 & a] : (i += 1, a = 65536 + ((1023 & a) << 10 | 1023 & n.charCodeAt(i)), o += sr[240 | a >> 18] + sr[128 | a >> 12 & 63] + sr[128 | a >> 6 & 63] + sr[128 | 63 & a])
                }
                return o
            },
            isBuffer: function(e) { return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)) },
            isRegExp: function(e) { return "[object RegExp]" === Object.prototype.toString.call(e) },
            merge: function e(t, r, n) {
                if (!r) return t;
                if ("object" != typeof r) {
                    if (ar(t)) t.push(r);
                    else {
                        if (!t || "object" != typeof t) return [t, r];
                        (n && (n.plainObjects || n.allowPrototypes) || !ir.call(Object.prototype, r)) && (t[r] = !0)
                    }
                    return t
                }
                if (!t || "object" != typeof t) return [t].concat(r);
                var o = t;
                return ar(t) && !ar(r) && (o = ur(t, n)), ar(t) && ar(r) ? (r.forEach((function(r, o) {
                    if (ir.call(t, o)) {
                        var i = t[o];
                        i && "object" == typeof i && r && "object" == typeof r ? t[o] = e(i, r, n) : t.push(r)
                    } else t[o] = r
                })), t) : Object.keys(r).reduce((function(t, o) { var i = r[o]; return ir.call(t, o) ? t[o] = e(t[o], i, n) : t[o] = i, t }), o)
            }
        },
        lr = String.prototype.replace,
        fr = /%20/g,
        hr = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
        dr = cr.assign({ default: hr.RFC3986, formatters: { RFC1738: function(e) { return lr.call(e, fr, "+") }, RFC3986: function(e) { return String(e) } } }, hr),
        pr = Object.prototype.hasOwnProperty,
        _r = { brackets: function(e) { return e + "[]" }, comma: "comma", indices: function(e, t) { return e + "[" + t + "]" }, repeat: function(e) { return e } },
        vr = Array.isArray,
        Or = Array.prototype.push,
        Er = function(e, t) { Or.apply(e, vr(t) ? t : [t]) },
        yr = Date.prototype.toISOString,
        mr = dr.default,
        br = { addQueryPrefix: !1, allowDots: !1, charset: "utf-8", charsetSentinel: !1, delimiter: "&", encode: !0, encoder: cr.encode, encodeValuesOnly: !1, format: mr, formatter: dr.formatters[mr], indices: !1, serializeDate: function(e) { return yr.call(e) }, skipNulls: !1, strictNullHandling: !1 },
        Sr = function e(t, r, n, o, i, a, s, u, c, l, f, h, d) {
            var p, _ = t;
            if ("function" == typeof s ? _ = s(r, _) : _ instanceof Date ? _ = l(_) : "comma" === n && vr(_) && (_ = _.join(",")), null === _) {
                if (o) return a && !h ? a(r, br.encoder, d, "key") : r;
                _ = ""
            }
            if ("string" == typeof(p = _) || "number" == typeof p || "boolean" == typeof p || "symbol" == typeof p || "bigint" == typeof p || cr.isBuffer(_)) return a ? [f(h ? r : a(r, br.encoder, d, "key")) + "=" + f(a(_, br.encoder, d, "value"))] : [f(r) + "=" + f(String(_))];
            var v, O = [];
            if (void 0 === _) return O;
            if (vr(s)) v = s;
            else {
                var E = Object.keys(_);
                v = u ? E.sort(u) : E
            }
            for (var y = 0; y < v.length; ++y) {
                var m = v[y];
                i && null === _[m] || (vr(_) ? Er(O, e(_[m], "function" == typeof n ? n(r, m) : r, n, o, i, a, s, u, c, l, f, h, d)) : Er(O, e(_[m], r + (c ? "." + m : "[" + m + "]"), n, o, i, a, s, u, c, l, f, h, d)))
            }
            return O
        },
        gr = (Object.prototype.hasOwnProperty, Array.isArray, function(e, t) {
            var r, n = e,
                o = function(e) {
                    if (!e) return br;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                    var t = e.charset || br.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var r = dr.default;
                    if (void 0 !== e.format) {
                        if (!pr.call(dr.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                        r = e.format
                    }
                    var n = dr.formatters[r],
                        o = br.filter;
                    return ("function" == typeof e.filter || vr(e.filter)) && (o = e.filter), { addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : br.addQueryPrefix, allowDots: void 0 === e.allowDots ? br.allowDots : !!e.allowDots, charset: t, charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : br.charsetSentinel, delimiter: void 0 === e.delimiter ? br.delimiter : e.delimiter, encode: "boolean" == typeof e.encode ? e.encode : br.encode, encoder: "function" == typeof e.encoder ? e.encoder : br.encoder, encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : br.encodeValuesOnly, filter: o, formatter: n, serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : br.serializeDate, skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : br.skipNulls, sort: "function" == typeof e.sort ? e.sort : null, strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : br.strictNullHandling }
                }(t);
            "function" == typeof o.filter ? n = (0, o.filter)("", n) : vr(o.filter) && (r = o.filter);
            var i, a = [];
            if ("object" != typeof n || null === n) return "";
            i = t && t.arrayFormat in _r ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
            var s = _r[i];
            r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
            for (var u = 0; u < r.length; ++u) {
                var c = r[u];
                o.skipNulls && null === n[c] || Er(a, Sr(n[c], c, s, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.formatter, o.encodeValuesOnly, o.charset))
            }
            var l = a.join(o.delimiter),
                f = !0 === o.addQueryPrefix ? "?" : "";
            return o.charsetSentinel && ("iso-8859-1" === o.charset ? f += "utf8=%26%2310003%3B&" : f += "utf8=%E2%9C%93&"), l.length > 0 ? f + l : ""
        });
    let Tr;
    "undefined" != typeof WebSocket ? Tr = WebSocket : "undefined" != typeof MozWebSocket ? Tr = MozWebSocket : void 0 !== s ? Tr = s.WebSocket || s.MozWebSocket : "undefined" != typeof window ? Tr = window.WebSocket || window.MozWebSocket : "undefined" != typeof self && (Tr = self.WebSocket || self.MozWebSocket);
    var Ar = Tr;
    class Cr extends Error { constructor(e) { super(e), this.name = "TimeoutError" } }
    const Nr = (e, t, r) => new Promise((n, o) => {
        if ("number" != typeof t || t < 0) throw new TypeError("Expected `milliseconds` to be a positive number");
        if (t === 1 / 0) return void n(e);
        const i = setTimeout(() => { if ("function" == typeof r) { try { n(r()) } catch (e) { o(e) } return } const i = r instanceof Error ? r : new Cr("string" == typeof r ? r : `Promise timed out after ${t} milliseconds`); "function" == typeof e.cancel && e.cancel(), o(i) }, t);
        ((e, t) => (t = t || (() => {}), e.then(e => new Promise(e => { e(t()) }).then(() => e), e => new Promise(e => { e(t()) }).then(() => { throw e }))))(e.then(n, o), () => { clearTimeout(i) })
    });
    var Ir = Nr,
        Rr = Nr,
        wr = Cr;
    Ir.default = Rr, Ir.TimeoutError = wr;
    var Dr = c((function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, r) {
            let n = 0,
                o = e.length;
            for (; o > 0;) {
                const i = o / 2 | 0;
                let a = n + i;
                r(e[a], t) <= 0 ? (n = ++a, o -= i + 1) : o = i
            }
            return n
        }
    }));
    u(Dr);
    var Pr = c((function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = class {
            constructor() { Object.defineProperty(this, "_queue", { enumerable: !0, configurable: !0, writable: !0, value: [] }) }
            enqueue(e, t) {
                const r = { priority: (t = Object.assign({ priority: 0 }, t)).priority, run: e };
                if (this.size && this._queue[this.size - 1].priority >= t.priority) return void this._queue.push(r);
                const n = Dr.default(this._queue, r, (e, t) => t.priority - e.priority);
                this._queue.splice(n, 0, r)
            }
            dequeue() { const e = this._queue.shift(); return e && e.run }
            get size() { return this._queue.length }
        }
    }));
    u(Pr);
    var jr = u(c((function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const r = () => {},
                n = new Ir.TimeoutError;
            t.default = class extends l {
                constructor(e) {
                    if (super(), Object.defineProperty(this, "_carryoverConcurrencyCount", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isIntervalIgnored", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_intervalCount", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_intervalCap", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_interval", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_intervalEnd", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_intervalId", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_timeoutId", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_queue", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_queueClass", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_pendingCount", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_concurrency", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isPaused", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_resolveEmpty", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "_resolveIdle", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "_timeout", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_throwOnTimeout", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !("number" == typeof(e = Object.assign({ carryoverConcurrencyCount: !1, intervalCap: 1 / 0, interval: 0, concurrency: 1 / 0, autoStart: !0, queueClass: Pr.default }, e)).intervalCap && e.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${e.intervalCap}\` (${typeof e.intervalCap})`);
                    if (void 0 === e.interval || !(Number.isFinite(e.interval) && e.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${e.interval}\` (${typeof e.interval})`);
                    this._carryoverConcurrencyCount = e.carryoverConcurrencyCount, this._isIntervalIgnored = e.intervalCap === 1 / 0 || 0 === e.interval, this._intervalCap = e.intervalCap, this._interval = e.interval, this._queue = new e.queueClass, this._queueClass = e.queueClass, this.concurrency = e.concurrency, this._timeout = e.timeout, this._throwOnTimeout = !0 === e.throwOnTimeout, this._isPaused = !1 === e.autoStart
                }
                get _doesIntervalAllowAnother() { return this._isIntervalIgnored || this._intervalCount < this._intervalCap }
                get _doesConcurrentAllowAnother() { return this._pendingCount < this._concurrency }
                _next() { this._pendingCount--, this._tryToStartAnother() }
                _resolvePromises() { this._resolveEmpty(), this._resolveEmpty = r, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = r) }
                _onResumeInterval() { this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0 }
                _isIntervalPaused() {
                    const e = Date.now();
                    if (void 0 === this._intervalId) {
                        const t = this._intervalEnd - e;
                        if (!(t < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(() => { this._onResumeInterval() }, t)), !0;
                        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0
                    }
                    return !1
                }
                _tryToStartAnother() { if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), !1; if (!this._isPaused) { const e = !this._isIntervalPaused(); if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) return this.emit("active"), this._queue.dequeue()(), e && this._initializeIntervalIfNeeded(), !0 } return !1 }
                _initializeIntervalIfNeeded() { this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(() => { this._onInterval() }, this._interval), this._intervalEnd = Date.now() + this._interval) }
                _onInterval() { 0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue() }
                _processQueue() { for (; this._tryToStartAnother();); }
                get concurrency() { return this._concurrency }
                set concurrency(e) {
                    if (!("number" == typeof e && e >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
                    this._concurrency = e, this._processQueue()
                }
                async add(e, t = {}) {
                    return new Promise((r, o) => {
                        this._queue.enqueue(async() => {
                            this._pendingCount++, this._intervalCount++;
                            try {
                                const i = void 0 === this._timeout && void 0 === t.timeout ? e() : Ir.default(Promise.resolve(e()), void 0 === t.timeout ? this._timeout : t.timeout, () => {
                                    (void 0 === t.throwOnTimeout ? this._throwOnTimeout : t.throwOnTimeout) && o(n)
                                });
                                r(await i)
                            } catch (e) { o(e) }
                            this._next()
                        }, t), this._tryToStartAnother()
                    })
                }
                async addAll(e, t) { return Promise.all(e.map(async e => this.add(e, t))) }
                start() { return this._isPaused ? (this._isPaused = !1, this._processQueue(), this) : this }
                pause() { this._isPaused = !0 }
                clear() { this._queue = new this._queueClass }
                async onEmpty() {
                    if (0 !== this._queue.size) return new Promise(e => {
                        const t = this._resolveEmpty;
                        this._resolveEmpty = () => { t(), e() }
                    })
                }
                async onIdle() {
                    if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise(e => {
                        const t = this._resolveIdle;
                        this._resolveIdle = () => { t(), e() }
                    })
                }
                get size() { return this._queue.size }
                get pending() { return this._pendingCount }
                get isPaused() { return this._isPaused }
                set timeout(e) { this._timeout = e }
                get timeout() { return this._timeout }
            }
        }))),
        Ur = function(e) {
            var t = this;
            void 0 === e && (e = {}), this.push = function(e) {
                var r = e.fn,
                    n = e.priority,
                    o = void 0 === n ? 100 : n;
                return t._q.add(r, { priority: o })
            }, this._q = new jr(r({ intervalCap: 20, interval: 3e4, carryoverConcurrencyCount: !0, concurrency: 1 }, e))
        },
        Lr = c((function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            class r extends Error { constructor(e) { super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), Object.defineProperty(this, "name", { value: this.constructor.name }) } }
            t.ParseError = class extends r {};
            t.FormatError = class extends r {}
        }));
    u(Lr);
    Lr.ParseError, Lr.FormatError;
    var Mr = c((function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.shouldEscapeString = function(e) {
            console.log(e);
            for (let t = 0; t < e.length; t += 1) {
                switch (e.charCodeAt(t)) {
                    case 10:
                    case 13:
                    case 32:
                    case 59:
                    case 92:
                        return !0
                }
            }
            return !1
        }, t.escapeString = function(e) {
            if (!e) return "";
            let t = "";
            for (let r = 0; r < e.length; r += 1) {
                let n = e.charCodeAt(r);
                switch (n) {
                    case 10:
                        t += "\\n";
                        break;
                    case 13:
                        t += "\\r";
                        break;
                    case 32:
                        t += "\\s";
                        break;
                    case 59:
                        t += "\\:";
                        break;
                    case 92:
                        t += "\\\\";
                        break;
                    default:
                        t += String.fromCharCode(n)
                }
            }
            return t
        }, t.unescapeString = function(e) {
            if (!e) return "";
            let t;
            if (-1 === (t = e.indexOf("\\"))) return e;
            const r = e.length - 1;
            let n = 0,
                o = "";
            do {
                if (n < t && (o += e.slice(n, t)), (n = t + 1) >= r) break;
                let i = e.charCodeAt(n);
                switch (i) {
                    case 58:
                        i = 59;
                        break;
                    case 110:
                        i = 10;
                        break;
                    case 114:
                        i = 13;
                        break;
                    case 115:
                        i = 32
                }
                n += 1, o += String.fromCharCode(i)
            } while (-1 !== (t = e.indexOf("\\", n)));
            return n <= r && (o += e.slice(n)), o
        }
    }));
    u(Mr);
    Mr.shouldEscapeString, Mr.escapeString, Mr.unescapeString;
    var Fr = c((function(e, t) {
        function r(e) {
            const t = {},
                r = e.split(";"),
                n = r.length;
            for (let e = 0; e < n; e += 1) {
                const [n, o] = r[e].split("=");
                t[n] = void 0 === o || Mr.unescapeString(o)
            }
            return t
        }

        function n(e) { if (!e) return null; let t, r; if (0 === (t = e.indexOf("!"))) return null; if (0 === (r = e.indexOf("@", t + 1))) return null; const n = {}; return t > -1 && r > -1 ? (n.name = e.slice(0, t), n.user = e.slice(t + 1, r), n.host = e.slice(r + 1)) : t > -1 ? (n.name = e.slice(0, t), n.user = e.slice(t + 1)) : r > -1 ? (n.name = e.slice(0, r), n.host = e.slice(r + 1)) : n.name = e, n }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.parseTags = r, t.parsePrefix = n, t.parse = function(e) {
            const t = {};
            Object.defineProperties(t, { middle: { writable: !0, value: [] }, trailing: { writable: !0, value: void 0 }, params: { enumerable: !0, get() { return this.middle.concat(this.trailing || []) } } });
            let o = 0,
                i = 0;
            if (64 === e.charCodeAt(o)) {
                if (-1 === (i = e.indexOf(" "))) throw new Lr.ParseError("Invalid Message");
                t.tags = r(e.slice(o + 1, i)), o = i + 1
            }
            for (; 32 === e.charCodeAt(o);) o += 1;
            if (58 === e.charCodeAt(o)) { if (-1 === (i = e.indexOf(" ", o))) throw new Lr.ParseError("Invalid Message"); const r = n(e.slice(o + 1, i)); for (r && (t.prefix = r), o = i + 1; 32 === e.charCodeAt(o);) o += 1 }
            if (-1 === (i = e.indexOf(" ", o))) { if (e.length > o) return t.command = e.slice(o), t; throw new Lr.ParseError("Invalid Message") }
            for (t.command = e.slice(o, i), o = i + 1; 32 === e.charCodeAt(o);) o += 1;
            for (; o < e.length;) { if (58 === e.charCodeAt(o)) { t.trailing = e.slice(o + 1); break } if (-1 === (i = e.indexOf(" ", o))) { t.middle.push(e.slice(o)); break } for (t.middle.push(e.slice(o, i)), o = i + 1; 32 === e.charCodeAt(o);) o += 1 }
            return t
        }
    }));
    u(Fr);
    Fr.parseTags, Fr.parsePrefix;
    var xr = Fr.parse;
    const Br = e => "object" == typeof e && null !== e,
        kr = e => Br(e) && !(e instanceof RegExp) && !(e instanceof Error) && !(e instanceof Date),
        Hr = (e, t, r, n = new WeakMap) => {
            if (r = { deep: !1, target: {}, ...r }, n.has(e)) return n.get(e);
            n.set(e, r.target);
            const { target: o } = r;
            delete r.target;
            const i = e => e.map(e => kr(e) ? Hr(e, t, r, n) : e);
            if (Array.isArray(e)) return i(e);
            for (const [a, s] of Object.entries(e)) {
                let [u, c] = t(a, s, e);
                r.deep && kr(c) && (c = Array.isArray(c) ? i(c) : Hr(c, t, r, n)), o[u] = c
            }
            return o
        };
    var Gr = (e, t, r) => { if (!Br(e)) throw new TypeError(`Expected an object, got \`${e}\` (${typeof e})`); return Hr(e, t, r) };
    const zr = (e, t) => {
        if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
        t = Object.assign({ pascalCase: !1 }, t);
        return 0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = (e => {
            let t = !1,
                r = !1,
                n = !1;
            for (let o = 0; o < e.length; o++) {
                const i = e[o];
                t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, o) + "-" + e.slice(o), t = !1, n = r, r = !0, o++) : r && n && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1), n = r, r = !1, t = !0) : (t = i.toLowerCase() === i && i.toUpperCase() !== i, n = r, r = i.toUpperCase() === i && i.toLowerCase() !== i)
            }
            return e
        })(e)), (e => t.pascalCase ? e.charAt(0).toUpperCase() + e.slice(1) : e)(e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase()).replace(/\d+(\w|$)/g, e => e.toUpperCase())))
    };
    var Wr = zr,
        Vr = zr;
    Wr.default = Vr;
    const Yr = new class {
            constructor(e = {}) {
                if (!(e.maxSize && e.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
                this.maxSize = e.maxSize, this.cache = new Map, this.oldCache = new Map, this._size = 0
            }
            _set(e, t) { this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this.oldCache = this.cache, this.cache = new Map) }
            get(e) { if (this.cache.has(e)) return this.cache.get(e); if (this.oldCache.has(e)) { const t = this.oldCache.get(e); return this.oldCache.delete(e), this._set(e, t), t } }
            set(e, t) { return this.cache.has(e) ? this.cache.set(e, t) : this._set(e, t), this }
            has(e) { return this.cache.has(e) || this.oldCache.has(e) }
            peek(e) { return this.cache.has(e) ? this.cache.get(e) : this.oldCache.has(e) ? this.oldCache.get(e) : void 0 }
            delete(e) { const t = this.cache.delete(e); return t && this._size--, this.oldCache.delete(e) || t }
            clear() { this.cache.clear(), this.oldCache.clear(), this._size = 0 } * keys() { for (const [e] of this) yield e } * values() { for (const [, e] of this) yield e } * [Symbol.iterator]() {
                for (const e of this.cache) yield e;
                for (const e of this.oldCache) {
                    const [t] = e;
                    this.cache.has(t) || (yield e)
                }
            }
            get size() { let e = 0; for (const t of this.oldCache.keys()) this.cache.has(t) || e++; return this._size + e }
        }({ maxSize: 1e5 }),
        qr = (e, t) => {
            t = { deep: !1, pascalCase: !1, ...t };
            const { exclude: r, pascalCase: n, stopPaths: o, deep: i } = t, a = void 0 === o ? new Set : new Set(o), s = e => (t, o) => {
                const u = void 0 === e ? t : `${e}.${t}`;
                if (i && (e => !("object" != typeof e || null === e || e instanceof RegExp || e instanceof Error || e instanceof Date))(o) && !a.has(u) && (o = Gr(o, s(u))), !r || !((e, t) => e.some(e => "string" == typeof e ? e === t : (e.lastIndex = 0, e.test(t))))(r, t))
                    if (Yr.has(t)) t = Yr.get(t);
                    else {
                        const e = Wr(t, { pascalCase: n });
                        t.length < 100 && Yr.set(t, e), t = e
                    }
                return [t, o]
            };
            return Gr(e, s(void 0))
        };
    var Kr = (e, t) => Array.isArray(e) ? Object.keys(e).map(r => qr(e[r], t)) : qr(e, t);
    var $r = NaN,
        Jr = /^\s+|\s+$/g,
        Zr = /^[-+]0x[0-9a-f]+$/i,
        Qr = /^0b[01]+$/i,
        Xr = /^0o[0-7]+$/i,
        en = parseInt;
    var tn = function(e) {
        if ("number" == typeof e) return e;
        if (R(e)) return $r;
        if (j(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = j(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(Jr, "");
        var r = Qr.test(e);
        return r || Xr.test(e) ? en(e.slice(2), r ? 2 : 8) : Zr.test(e) ? $r : +e
    };
    var rn = function(e) { return function(t, r) { return "string" == typeof t && "string" == typeof r || (t = tn(t), r = tn(r)), e(t, r) } }((function(e, t) { return e > t })),
        nn = Object.prototype;
    var on = function(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || nn) };
    var an = function(e, t) { return function(r) { return e(t(r)) } }(Object.keys, Object),
        sn = Object.prototype.hasOwnProperty;
    var un = function(e) { if (!on(e)) return an(e); var t = []; for (var r in Object(e)) sn.call(e, r) && "constructor" != r && t.push(r); return t },
        cn = X(p, "DataView"),
        ln = X(p, "Promise"),
        fn = X(p, "WeakMap"),
        hn = W(cn),
        dn = W(Se),
        pn = W(ln),
        _n = W(ct),
        vn = W(fn),
        On = C;
    (cn && "[object DataView]" != On(new cn(new ArrayBuffer(1))) || Se && "[object Map]" != On(new Se) || ln && "[object Promise]" != On(ln.resolve()) || ct && "[object Set]" != On(new ct) || fn && "[object WeakMap]" != On(new fn)) && (On = function(e) {
        var t = C(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? W(r) : "";
        if (n) switch (n) {
            case hn:
                return "[object DataView]";
            case dn:
                return "[object Map]";
            case pn:
                return "[object Promise]";
            case _n:
                return "[object Set]";
            case vn:
                return "[object WeakMap]"
        }
        return t
    });
    var En = On,
        yn = "[object Arguments]";
    var mn = function(e) { return N(e) && C(e) == yn },
        bn = Object.prototype,
        Sn = bn.hasOwnProperty,
        gn = bn.propertyIsEnumerable,
        Tn = mn(function() { return arguments }()) ? mn : function(e) { return N(e) && Sn.call(e, "callee") && !gn.call(e, "callee") },
        An = 9007199254740991;
    var Cn = function(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= An };
    var Nn = function(e) { return null != e && Cn(e.length) && !B(e) };
    var In = function() { return !1 },
        Rn = c((function(e, t) {
            var r = t && !t.nodeType && t,
                n = r && e && !e.nodeType && e,
                o = n && n.exports === r ? p.Buffer : void 0,
                i = (o ? o.isBuffer : void 0) || In;
            e.exports = i
        })),
        wn = {};
    wn["[object Float32Array]"] = wn["[object Float64Array]"] = wn["[object Int8Array]"] = wn["[object Int16Array]"] = wn["[object Int32Array]"] = wn["[object Uint8Array]"] = wn["[object Uint8ClampedArray]"] = wn["[object Uint16Array]"] = wn["[object Uint32Array]"] = !0, wn["[object Arguments]"] = wn["[object Array]"] = wn["[object ArrayBuffer]"] = wn["[object Boolean]"] = wn["[object DataView]"] = wn["[object Date]"] = wn["[object Error]"] = wn["[object Function]"] = wn["[object Map]"] = wn["[object Number]"] = wn["[object Object]"] = wn["[object RegExp]"] = wn["[object Set]"] = wn["[object String]"] = wn["[object WeakMap]"] = !1;
    var Dn = function(e) { return N(e) && Cn(e.length) && !!wn[C(e)] };
    var Pn = function(e) { return function(t) { return e(t) } },
        jn = c((function(e, t) {
            var r = t && !t.nodeType && t,
                n = r && e && !e.nodeType && e,
                o = n && n.exports === r && h.process,
                i = function() { try { var e = n && n.require && n.require("util").types; return e || o && o.binding && o.binding("util") } catch (e) {} }();
            e.exports = i
        })),
        Un = jn && jn.isTypedArray,
        Ln = Un ? Pn(Un) : Dn,
        Mn = "[object Map]",
        Fn = "[object Set]",
        xn = Object.prototype.hasOwnProperty;
    var Bn = function(e) {
            if (null == e) return !0;
            if (Nn(e) && (f(e) || "string" == typeof e || "function" == typeof e.splice || Rn(e) || Ln(e) || Tn(e))) return !e.length;
            var t = En(e);
            if (t == Mn || t == Fn) return !e.size;
            if (on(e)) return !un(e).length;
            for (var r in e)
                if (xn.call(e, r)) return !1;
            return !0
        },
        kn = p.isFinite;
    var Hn = function(e) { return "number" == typeof e && kn(e) };
    var Gn = function(e) { return We(e).toUpperCase() };
    var zn = function(e, t, r) {
        var n = -1,
            o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = e[n + t];
        return i
    };
    var Wn = function(e, t, r) { var n = e.length; return r = void 0 === r ? n : r, !t && r >= n ? e : zn(e, t, r) },
        Vn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    var Yn = function(e) { return Vn.test(e) };
    var qn = function(e) { return e.split("") },
        Kn = "[\\ud800-\\udfff]",
        $n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        Jn = "\\ud83c[\\udffb-\\udfff]",
        Zn = "[^\\ud800-\\udfff]",
        Qn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Xn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        eo = "(?:" + $n + "|" + Jn + ")" + "?",
        to = "[\\ufe0e\\ufe0f]?" + eo + ("(?:\\u200d(?:" + [Zn, Qn, Xn].join("|") + ")[\\ufe0e\\ufe0f]?" + eo + ")*"),
        ro = "(?:" + [Zn + $n + "?", $n, Qn, Xn, Kn].join("|") + ")",
        no = RegExp(Jn + "(?=" + Jn + ")|" + ro + to, "g");
    var oo = function(e) { return e.match(no) || [] };
    var io = function(e) { return Yn(e) ? oo(e) : qn(e) };
    var ao = function(e) {
        return function(t) {
            t = We(t);
            var r = Yn(t) ? io(t) : void 0,
                n = r ? r[0] : t.charAt(0),
                o = r ? Wn(r, 1).join("") : t.slice(1);
            return n[e]() + o
        }
    }("toUpperCase");
    var so = function(e) { return ao(We(e).toLowerCase()) };
    var uo = function(e, t, r, n) {
        var o = -1,
            i = null == e ? 0 : e.length;
        for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
        return r
    };
    var co = function(e) { return function(t) { return null == e ? void 0 : e[t] } }({ "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" }),
        lo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        fo = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
    var ho = function(e) { return (e = We(e)) && e.replace(lo, co).replace(fo, "") },
        po = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var _o = function(e) { return e.match(po) || [] },
        vo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var Oo = function(e) { return vo.test(e) },
        Eo = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        yo = "[" + Eo + "]",
        mo = "\\d+",
        bo = "[\\u2700-\\u27bf]",
        So = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        go = "[^\\ud800-\\udfff" + Eo + mo + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        To = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Ao = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Co = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        No = "(?:" + So + "|" + go + ")",
        Io = "(?:" + Co + "|" + go + ")",
        Ro = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
        wo = "[\\ufe0e\\ufe0f]?" + Ro + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", To, Ao].join("|") + ")[\\ufe0e\\ufe0f]?" + Ro + ")*"),
        Do = "(?:" + [bo, To, Ao].join("|") + ")" + wo,
        Po = RegExp([Co + "?" + So + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [yo, Co, "$"].join("|") + ")", Io + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [yo, Co + No, "$"].join("|") + ")", Co + "?" + No + "+(?:['’](?:d|ll|m|re|s|t|ve))?", Co + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", mo, Do].join("|"), "g");
    var jo = function(e) { return e.match(Po) || [] };
    var Uo = function(e, t, r) { return e = We(e), void 0 === (t = r ? void 0 : t) ? Oo(e) ? jo(e) : _o(e) : e.match(t) || [] },
        Lo = RegExp("['’]", "g");
    var Mo = function(e) { return function(t) { return uo(Uo(ho(t).replace(Lo, "")), e, "") } }((function(e, t, r) { return t = t.toLowerCase(), e + (r ? so(t) : t) }));
    var Fo = function() {
            var e = arguments,
                t = We(e[0]);
            return e.length < 3 ? t : t.replace(e[1], e[2])
        },
        xo = function(e) { return "string" == typeof e ? Fo(e, /\\[sn]/g, " ") : void 0 },
        Bo = function(e) { var t = parseInt(e, 10); return Hn(t) ? t : void 0 },
        ko = function(e) { return "1" === e },
        Ho = function(e) { var t = new Date(parseInt(e, 10)); return "Invalid Date" !== t.toString() ? t : new Date },
        Go = function(e) {
            return Object.entries(e).reduce((function(e, t) {
                var n, o, i, a, s, u, c = t[0],
                    l = t[1];
                switch (c) {
                    case "followersOnly":
                        return r(r({}, e), ((n = {})[c] = 0 === (u = parseInt(l, 10)) || u > 0 && u, n));
                    case "broadcasterLang":
                        return r(r({}, e), ((o = {})[c] = xo(l), o));
                    case "slow":
                        return r(r({}, e), ((i = {})[c] = Bo(l), i));
                    case "emoteOnly":
                    case "r9k":
                    case "subsOnly":
                        return r(r({}, e), ((a = {})[c] = ko(l), a));
                    default:
                        return r(r({}, e), ((s = {})[c] = l, s))
                }
            }), {})
        },
        zo = function(e) {
            return r(r({}, e), {
                badges: (i = e.badges, "string" == typeof i ? i.split(",").reduce((function(e, t) {
                    var n, o, i, a = t.split("/"),
                        s = a[0],
                        u = a[1],
                        c = Mo(s);
                    return "boolean" === Rt[c] ? r(r({}, e), ((n = {})[c] = ko(u), n)) : "number" === wt[c] ? r(r({}, e), ((o = {})[c] = parseInt(u, 10), o)) : r(r({}, e), ((i = {})[c] = u, i))
                }), {}) : {}),
                bits: Bo(e.bits),
                color: e.color,
                displayName: e.displayName,
                emotes: (o = e.emotes, "string" != typeof o ? [] : o.split("/").reduce((function(e, t) {
                    var r = t.split(":"),
                        n = r[0],
                        o = r[1];
                    return n ? a(e, o.split(",").map((function(e) {
                        var t = e.split("-"),
                            r = t[0],
                            o = t[1];
                        return { id: n, start: parseInt(r, 10), end: parseInt(o, 10) }
                    }))) : e
                }), [])),
                emoteSets: (n = e.emoteSets, "string" == typeof n ? n.split(",") : []),
                userType: (t = e.userType, "string" == typeof t ? t : void 0),
                username: e.displayName ? Je(e.displayName) : void 0
            });
            var t, n, o, i
        },
        Wo = function(e) { return r(r({}, e), zo(e)) },
        Vo = zo,
        Yo = function(e, t) {
            return e.split(/\r?\n/g).reduce((function(e, r) {
                if (!r.length) return e;
                var n = xr(r),
                    o = n.command,
                    i = n.tags,
                    s = void 0 === i ? {} : i,
                    u = n.prefix,
                    c = void 0 === u ? { name: void 0, user: void 0, host: void 0 } : u,
                    l = c.name,
                    f = c.user,
                    h = c.host,
                    d = n.params,
                    p = d[0],
                    _ = d[1],
                    v = String(s["tmi-sent-ts"]) || Date.now().toString(),
                    O = Bn(s) ? {} : Kr(s),
                    E = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return e.reduce((function(e, t) { return "string" != typeof t ? e : "tmi.twitch.tv" === t ? "tmi.twitch.tv" : Je(t).split(".")[0] }), void 0) }(h, l, f, O.login, O.username, O.displayName);
                return a(e, [{ _raw: r, timestamp: Ho(v), command: o, event: o, channel: "*" !== p ? p : "", username: E, isSelf: "string" == typeof E && Je(t) === E, tags: O, message: _ }])
            }), [])
        },
        qo = function(e) {
            var t = e.tags,
                o = n(e, ["tags"]);
            return r(r({}, o), { command: bt.GLOBAL_USER_STATE, event: bt.GLOBAL_USER_STATE, tags: Wo(t) })
        },
        Ko = function(e) {
            var t = e.tags,
                o = n(e, ["tags"]);
            return r(r({}, o), { command: bt.USER_STATE, event: bt.USER_STATE, tags: zo(t) })
        },
        $o = function(e) {
            var t = bt.USER_NOTICE,
                n = r(r({}, Vo(e.tags)), { systemMsg: xo(e.tags.systemMsg) }),
                o = xo(e.tags.systemMsg),
                i = function(e) {
                    return Object.entries(e).reduce((function(e, t) {
                        var n, o, i = t[0],
                            a = t[1],
                            s = (er.exec(i) || [])[1];
                        switch (s) {
                            case "Months":
                            case "MassGiftCount":
                            case "PromoGiftTotal":
                            case "SenderCount":
                            case "ViewerCount":
                                return r(r({}, e), ((n = {})[Mo(s)] = Bo(a), n));
                            case void 0:
                                return e;
                            default:
                                return r(r({}, e), ((o = {})[Mo(s)] = xo(a), o))
                        }
                    }), {})
                }(n);
            switch (n.msgId) {
                case Nt.ANON_GIFT_PAID_UPGRADE:
                    return r(r({}, e), { command: t, event: St.ANON_GIFT_PAID_UPGRADE, parameters: i, tags: n, systemMessage: o });
                case Nt.GIFT_PAID_UPGRADE:
                    return r(r({}, e), { command: t, event: St.GIFT_PAID_UPGRADE, parameters: i, tags: n, systemMessage: o });
                case Nt.RAID:
                    return r(r({}, e), { command: t, event: St.RAID, parameters: i, tags: n, systemMessage: o });
                case Nt.RESUBSCRIPTION:
                    return r(r({}, e), { command: t, event: St.RESUBSCRIPTION, parameters: i, tags: n, systemMessage: o });
                case Nt.RITUAL:
                    return r(r({}, e), { command: t, event: St.RITUAL, parameters: i, tags: n, systemMessage: o });
                case Nt.SUBSCRIPTION_GIFT_COMMUNITY:
                    return r(r({}, e), { command: t, event: St.SUBSCRIPTION_GIFT_COMMUNITY, parameters: i, tags: n, systemMessage: o });
                case Nt.SUBSCRIPTION_GIFT:
                    return r(r({}, e), { command: t, event: St.SUBSCRIPTION_GIFT, parameters: i, tags: n, systemMessage: o });
                case Nt.SUBSCRIPTION:
                    return r(r({}, e), { command: t, event: St.SUBSCRIPTION, parameters: i, tags: n, systemMessage: o });
                default:
                    return r(r({}, e), { command: t, event: Gn(n.msgId), tags: n, parameters: i, systemMessage: o })
            }
        },
        Jo = function(e, t, r, n, o, i, a, s) {
            if (!e) {
                var u;
                if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [r, n, o, i, a, s],
                        l = 0;
                    (u = new Error(t.replace(/%s/g, (function() { return c[l++] })))).name = "Invariant Violation"
                }
                throw u.framesToPop = 1, u
            }
        };
    var Zo = function(e, t, r) {
        var n = r.length;
        if (null == e) return !n;
        for (e = Object(e); n--;) {
            var o = r[n],
                i = t[o],
                a = e[o];
            if (void 0 === a && !(o in e) || !i(a)) return !1
        }
        return !0
    };
    var Qo = function(e, t) { for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r); return n },
        Xo = 9007199254740991,
        ei = /^(?:0|[1-9]\d*)$/;
    var ti = function(e, t) { var r = typeof e; return !!(t = null == t ? Xo : t) && ("number" == r || "symbol" != r && ei.test(e)) && e > -1 && e % 1 == 0 && e < t },
        ri = Object.prototype.hasOwnProperty;
    var ni = function(e, t) {
        var r = f(e),
            n = !r && Tn(e),
            o = !r && !n && Rn(e),
            i = !r && !n && !o && Ln(e),
            a = r || n || o || i,
            s = a ? Qo(e.length, String) : [],
            u = s.length;
        for (var c in e) !t && !ri.call(e, c) || a && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ti(c, u)) || s.push(c);
        return s
    };
    var oi = function(e) { return Nn(e) ? ni(e) : un(e) };
    var ii = function(e, t) { return null == t || Zo(e, t, oi(t)) };
    var ai = function(e) { return e };
    var si = function(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        },
        ui = Math.max;
    var ci = function(e, t, r) {
        return t = ui(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = ui(n.length - t, 0), a = Array(i); ++o < i;) a[o] = n[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t;) s[o] = n[o];
                return s[t] = r(a), si(e, this, s)
            }
    };
    var li = function(e) { return function() { return e } },
        fi = function() { try { var e = X(Object, "defineProperty"); return e({}, "", {}), e } catch (e) {} }(),
        hi = fi ? function(e, t) { return fi(e, "toString", { configurable: !0, enumerable: !1, value: li(t), writable: !0 }) } : ai,
        di = 800,
        pi = 16,
        _i = Date.now;
    var vi = function(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = _i(),
                o = pi - (n - r);
            if (r = n, o > 0) { if (++t >= di) return arguments[0] } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(hi);
    var Oi = function(e, t) { return vi(ci(e, t, ai), e + "") };
    var Ei = function(e, t, r) { if (!j(r)) return !1; var n = typeof t; return !!("number" == n ? Nn(r) && ti(t, r.length) : "string" == n && t in r) && de(r[t], e) };
    var yi = function(e) {
            var t = [];
            if (null != e)
                for (var r in Object(e)) t.push(r);
            return t
        },
        mi = Object.prototype.hasOwnProperty;
    var bi = function(e) {
        if (!j(e)) return yi(e);
        var t = on(e),
            r = [];
        for (var n in e)("constructor" != n || !t && mi.call(e, n)) && r.push(n);
        return r
    };
    var Si = function(e) { return Nn(e) ? ni(e, !0) : bi(e) },
        gi = Object.prototype,
        Ti = gi.hasOwnProperty,
        Ai = Oi((function(e, t) {
            e = Object(e);
            var r = -1,
                n = t.length,
                o = n > 2 ? t[2] : void 0;
            for (o && Ei(t[0], t[1], o) && (n = 1); ++r < n;)
                for (var i = t[r], a = Si(i), s = -1, u = a.length; ++s < u;) {
                    var c = a[s],
                        l = e[c];
                    (void 0 === l || de(l, gi[c]) && !Ti.call(e, c)) && (e[c] = i[c])
                }
            return e
        })),
        Ci = "[object String]";
    var Ni = function(e) { return "string" == typeof e || !f(e) && N(e) && C(e) == Ci },
        Ii = "[object Boolean]";
    var Ri = function(e) { return !0 === e || !1 === e || N(e) && C(e) == Ii };
    var wi = function(e) { return null == e },
        Di = Math.floor,
        Pi = Math.random;
    var ji = function(e, t) { return e + Di(Pi() * (t - e + 1)) },
        Ui = 1 / 0,
        Li = 17976931348623157e292;
    var Mi = function(e) { return e ? (e = tn(e)) === Ui || e === -Ui ? (e < 0 ? -1 : 1) * Li : e == e ? e : 0 : 0 === e ? e : 0 },
        Fi = parseFloat,
        xi = Math.min,
        Bi = Math.random;
    var ki, Hi, Gi, zi, Wi, Vi = function(e, t, r) {
            if (r && "boolean" != typeof r && Ei(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = Mi(e), void 0 === t ? (t = e, e = 0) : t = Mi(t)), e > t) {
                var n = e;
                e = t, t = n
            }
            if (r || e % 1 || t % 1) { var o = Bi(); return xi(e + o * (t - e + Fi("1e-" + ((o + "").length - 1))), t) }
            return ji(e, t)
        },
        Yi = function(e) { return null == e ? "#" : e.startsWith("#") ? e : Je("#" + e) },
        qi = function(e) { return null == e ? "TWITCHJS" : e.startsWith("oauth:") ? e : "oauth:" + e },
        Ki = function(e) { return Bn(e) || "justinfan" === e ? "justinfan" + Vi(8e4, 81e3) : e },
        $i = function(e) {
            var t = { username: Ni, token: Ni, server: Ni, port: Hn, ssl: Ri, isKnown: Ri, isVerified: Ri },
                n = Ai(r(r({}, e), { username: Ki(e.username), token: qi(e.token) }), { server: "irc-ws.chat.twitch.tv", port: 443, ssl: !0, isKnown: !1, isVerified: !1 });
            return Jo(ii(n, t), "[twitch-js/Chat/Client] options: Expected valid options"), n
        },
        Ji = function(e) {
            function r(t) { var n = e.call(this, t) || this; return n.timestamp = new Date, Object.setPrototypeOf(n, r.prototype), Error.captureStackTrace && Error.captureStackTrace(n, r), n.message = "[TwitchJS] " + t, n }
            return t(r, e), r
        }(Error),
        Zi = function(e) {
            function r(t, n) {
                var o = this,
                    i = t instanceof Error ? t.message : t;
                return o = e.call(this, i + " [Chat]") || this, Object.setPrototypeOf(o, r.prototype), void 0 !== n && "string" != typeof n && (o.command = n.command), o
            }
            return t(r, e), r
        }(Ji),
        Qi = function(e) {
            function r(t, n) { var o = e.call(this, "Authentication error encountered", n) || this; return Object.setPrototypeOf(o, r.prototype), Object.assign(o, t), Object.assign(o, n), o }
            return t(r, e), r
        }(Zi),
        Xi = function(e) {
            function r(t, n) { var o = e.call(this, "Parse error encountered") || this; return Object.setPrototypeOf(o, r.prototype), Object.assign(o, t), o._raw = n, o.command = St.PARSE_ERROR_ENCOUNTERED, o }
            return t(r, e), r
        }(Zi),
        ea = (function(e) {
            function r(t) { void 0 === t && (t = "Error: join"); var n = e.call(this, t) || this; return Object.setPrototypeOf(n, r.prototype), n }
            t(r, e)
        }(Zi), function(e) {
            function r(t) { void 0 === t && (t = "Error: timeout"); var n = e.call(this, t) || this; return Object.setPrototypeOf(n, r.prototype), n }
            return t(r, e), r
        }(Zi)),
        ta = function(e) {
            function n(t) {
                var n = e.call(this) || this;
                n.isReady = function() { return 1 === $e(n, "_ws.readyState") }, n.send = function(e, t) {
                    var r = void 0 === t ? {} : t,
                        a = r.priority,
                        s = void 0 === a ? 1 : a,
                        u = r.isModerator,
                        c = void 0 !== u && u;
                    return o(n, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), t = this._ws.send.bind(this._ws, e), [4, (c ? this._moderatorQueue : this._queue).push({ fn: t, priority: s })];
                                case 1:
                                    return r.sent(), this._log.debug("<", e), [3, 3];
                                case 2:
                                    return r.sent(), this._log.error("<", e), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, n.disconnect = function() { n._handleKeepAliveReset(), n._ws.close() }, n._options = $i(t);
                var a = n._options,
                    s = a.ssl,
                    u = a.server,
                    c = a.port,
                    l = a.log;
                n._log = Kt(r({ name: "Chat/Client" }, l));
                var f = s ? "wss" : "ws";
                return n._ws = new Ar(f + "://" + u + ":" + c), n._ws.onopen = n._handleOpen.bind(n), n._ws.onmessage = n._handleMessage.bind(n), n._ws.onerror = n._handleError.bind(n), n._ws.onclose = n._handleClose.bind(n), n._queue = n._createQueue(n._options), n._moderatorQueue = n._options.isVerified ? n._queue : n._createQueue({ isModerator: !0 }), n
            }
            return t(n, e), n.prototype._createQueue = function(e) {
                var t = e.isModerator,
                    r = void 0 !== t && t,
                    n = e.isVerified,
                    o = void 0 !== n && n,
                    i = e.isKnown,
                    a = void 0 !== i && i;
                return r ? new Ur({ intervalCap: 100 }) : o ? new Ur({ intervalCap: 7500 }) : a ? new Ur({ intervalCap: 50 }) : new Ur
            }, n.prototype._isUserAnonymous = function() { return or($e(this, "_options.username")) }, n.prototype._handleOpen = function() {
                this.send("CAP REQ :" + Object.values(vt).join(" "), { priority: 100 });
                var e = this._options,
                    t = e.token,
                    r = e.username;
                this.send("PASS " + t, { priority: 100 }), this.send("NICK " + r, { priority: 100 })
            }, n.prototype._handleMessage = function(e) {
                var t = this,
                    n = e.data.toString();
                try {
                    this._handleKeepAlive(), Yo(n, this._options.username).forEach((function(e) {
                        var n = e.command || "";
                        t._log.debug("> %s %s", n, JSON.stringify(r(r({}, e), { _raw: void 0 }))), nr(e) ? (t.emit(St.AUTHENTICATION_FAILED, r(r({}, e), { event: St.AUTHENTICATION_FAILED })), t.disconnect()) : (e.command === bt.PING && t.send("PONG :tmi.twitch.tv", { priority: 100 }), t._isUserAnonymous() ? e.command === bt.WELCOME && t.emit(St.CONNECTED, r(r({}, e), { event: St.CONNECTED })) : e.command === bt.GLOBAL_USER_STATE && t.emit(St.CONNECTED, r(r({}, e), { event: St.CONNECTED })), e.command === bt.RECONNECT && t.emit(St.RECONNECT, r(r({}, e), { event: St.RECONNECT }))), t.emit(St.ALL, e)
                    }))
                } catch (e) {
                    var o = gr({ title: "Parsing error encountered", body: n });
                    this._log.error("Parsing error encountered. Please create an issue: %s", "https://github.com/twitch-js/twitch-js/issues/new?" + o, e);
                    var i = new Xi(e, n);
                    throw this.emit(i.command, i), this.emit(St.ALL, i), i
                } finally {
                    var a = { _raw: n, timestamp: new Date };
                    this.emit(St.RAW, a)
                }
            }, n.prototype._handleError = function(e) {
                var t = { timestamp: new Date, event: St.ERROR_ENCOUNTERED, messageEvent: e };
                this.emit(St.ERROR_ENCOUNTERED, t), this.emit(St.ALL, t)
            }, n.prototype._handleClose = function(e) {
                var t = { timestamp: new Date, event: St.DISCONNECTED, messageEvent: e };
                this.emit(St.DISCONNECTED, t), this.emit(St.ALL, t)
            }, n.prototype._handleKeepAlive = function() {
                var e = this;
                this._handleKeepAliveReset(), this.isReady() && (this._pingTimeoutId = setTimeout((function() { return e.send(bt.PING, { priority: 100 }) }), 15e4)), this._reconnectTimeoutId = setTimeout((function() { return e.emit(St.RECONNECT, {}) }), 2e5)
            }, n.prototype._handleKeepAliveReset = function() { clearTimeout(this._pingTimeoutId), clearTimeout(this._reconnectTimeoutId), this._pingTimeoutId = void 0, this._reconnectTimeoutId = void 0 }, n
        }(l),
        ra = function(e) {
            Object.entries(gt).forEach((function(t) {
                var r = t[0],
                    n = t[1];
                e[Mo(r)] = function(t) { for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o]; return e.say.apply(e, a([t, "/" + n], r)) }
            }))
        },
        na = function(e) {
            return function(t, n) {
                var o = (/^\/(.+)/.exec(n) || [])[1],
                    i = Object.entries(Tt).reduce((function(e, t) {
                        var n, o = t[0],
                            i = t[1];
                        return r(r({}, e), ((n = {})[o] = Gn(i), n))
                    }), {});
                switch (o) {
                    case gt.BAN:
                        return [$t(e, i.BAN_SUCCESS + "/" + t), $t(e, i.ALREADY_BANNED + "/" + t)];
                    case gt.CLEAR:
                        return [$t(e, bt.CLEAR_CHAT + "/" + t)];
                    case gt.COLOR:
                        return [$t(e, i.COLOR_CHANGED + "/" + t)];
                    case gt.COMMERCIAL:
                        return [$t(e, i.COMMERCIAL_SUCCESS + "/" + t)];
                    case gt.EMOTE_ONLY:
                        return [$t(e, i.EMOTE_ONLY_ON + "/" + t), $t(e, i.ALREADY_EMOTE_ONLY_ON + "/" + t)];
                    case gt.EMOTE_ONLY_OFF:
                        return [$t(e, i.EMOTE_ONLY_OFF + "/" + t), $t(e, i.ALREADY_EMOTE_ONLY_OFF + "/" + t)];
                    case gt.FOLLOWERS_ONLY:
                        return [$t(e, i.FOLLOWERS_ON_ZERO + "/" + t), $t(e, i.FOLLOWERS_ON + "/" + t)];
                    case gt.FOLLOWERS_ONLY_OFF:
                        return [$t(e, i.FOLLOWERS_OFF + "/" + t)];
                    case gt.HELP:
                        return [$t(e, i.CMDS_AVAILABLE + "/" + t)];
                    case gt.HOST:
                        return [$t(e, i.HOST_ON + "/" + t)];
                    case gt.MARKER:
                        return [Promise.resolve()];
                    case gt.MOD:
                        return [$t(e, i.MOD_SUCCESS + "/" + t), $t(e, i.BAD_MOD_MOD + "/" + t)];
                    case gt.MODS:
                        return [$t(e, i.ROOM_MODS + "/" + t)];
                    case gt.R9K:
                        return [$t(e, i.R9K_ON + "/" + t), $t(e, i.ALREADY_R9K_ON + "/" + t)];
                    case gt.R9K_OFF:
                        return [$t(e, i.R9K_OFF + "/" + t), $t(e, i.ALREADY_R9K_OFF + "/" + t)];
                    case gt.RAID:
                        return [Promise.resolve()];
                    case gt.SLOW:
                        return [$t(e, i.SLOW_ON + "/" + t)];
                    case gt.SLOW_OFF:
                        return [$t(e, i.SLOW_OFF + "/" + t)];
                    case gt.SUBSCRIBERS:
                        return [$t(e, i.SUBS_ON + "/" + t), $t(e, i.ALREADY_SUBS_ON + "/" + t)];
                    case gt.SUBSCRIBERS_OFF:
                        return [$t(e, i.SUBS_OFF + "/" + t), $t(e, i.ALREADY_SUBS_OFF + "/" + t)];
                    case gt.TIMEOUT:
                        return [$t(e, i.TIMEOUT_SUCCESS + "/" + t)];
                    case gt.UNBAN:
                        return [$t(e, i.UNBAN_SUCCESS + "/" + t), $t(e, i.BAD_UNBAN_NO_BAN + "/" + t)];
                    case gt.UNHOST:
                    case gt.UNMOD:
                        return [$t(e, i.HOST_OFF + "/" + t)];
                    case gt.UNRAID:
                        return [$t(e, i.UNRAID_SUCCESS + "/" + t)];
                    default:
                        return [$t(e, bt.USER_STATE + "/" + t)]
                }
            }
        };
    ! function(e) { e[e.NOT_READY = 0] = "NOT_READY", e[e.CONNECTING = 1] = "CONNECTING", e[e.RECONNECTING = 2] = "RECONNECTING", e[e.CONNECTED = 3] = "CONNECTED", e[e.DISCONNECTING = 4] = "DISCONNECTING", e[e.DISCONNECTED = 5] = "DISCONNECTED" }(ki || (ki = {})),
    function(e) { e.ALREADY_BANNED = "NOTICE/ALREADY_BANNED", e.ALREADY_EMOTE_ONLY_OFF = "NOTICE/ALREADY_EMOTE_ONLY_OFF", e.ALREADY_EMOTE_ONLY_ON = "NOTICE/ALREADY_EMOTE_ONLY_ON", e.ALREADY_R9K_OFF = "NOTICE/ALREADY_R9K_OFF", e.ALREADY_R9K_ON = "NOTICE/ALREADY_R9K_ON", e.ALREADY_SUBS_OFF = "NOTICE/ALREADY_SUBS_OFF", e.ALREADY_SUBS_ON = "NOTICE/ALREADY_SUBS_ON", e.BAD_HOST_HOSTING = "NOTICE/BAD_HOST_HOSTING", e.BAD_MOD_MOD = "NOTICE/BAD_MOD_MOD", e.BAN_SUCCESS = "NOTICE/BAN_SUCCESS", e.BAD_UNBAN_NO_BAN = "NOTICE/BAD_UNBAN_NO_BAN", e.COLOR_CHANGED = "NOTICE/COLOR_CHANGED", e.CMDS_AVAILABLE = "NOTICE/CMDS_AVAILABLE", e.COMMERCIAL_SUCCESS = "NOTICE/COMMERCIAL_SUCCESS", e.EMOTE_ONLY_OFF = "NOTICE/EMOTE_ONLY_OFF", e.EMOTE_ONLY_ON = "NOTICE/EMOTE_ONLY_ON", e.FOLLOWERS_OFF = "NOTICE/FOLLOWERS_OFF", e.FOLLOWERS_ON = "NOTICE/FOLLOWERS_ON", e.FOLLOWERS_ON_ZERO = "NOTICE/FOLLOWERS_ON_ZERO", e.HOST_OFF = "NOTICE/HOST_OFF", e.HOST_ON = "NOTICE/HOST_ON", e.HOSTS_REMAINING = "NOTICE/HOSTS_REMAINING", e.MSG_CHANNEL_SUSPENDED = "NOTICE/MSG_CHANNEL_SUSPENDED", e.MOD_SUCCESS = "NOTICE/MOD_SUCCESS", e.R9K_OFF = "NOTICE/R9K_OFF", e.R9K_ON = "NOTICE/R9K_ON", e.ROOM_MODS = "NOTICE/ROOM_MODS", e.SLOW_OFF = "NOTICE/SLOW_OFF", e.SLOW_ON = "NOTICE/SLOW_ON", e.SUBS_OFF = "NOTICE/SUBS_OFF", e.SUBS_ON = "NOTICE/SUBS_ON", e.TIMEOUT_SUCCESS = "NOTICE/TIMEOUT_SUCCESS", e.UNBAN_SUCCESS = "NOTICE/UNBAN_SUCCESS", e.UNRAID_SUCCESS = "NOTICE/UNRAID_SUCCESS", e.UNRECOGNIZED_CMD = "NOTICE/UNRECOGNIZED_CMD" }(Hi || (Hi = {})),
    function(e) { e.CHEER = "PRIVMSG/CHEER", e.HOSTED_WITHOUT_VIEWERS = "PRIVMSG/HOSTED_WITHOUT_VIEWERS", e.HOSTED_WITH_VIEWERS = "PRIVMSG/HOSTED_WITH_VIEWERS", e.HOSTED_AUTO = "PRIVMSG/HOSTED_AUTO" }(Gi || (Gi = {})),
    function(e) { e.ANON_GIFT_PAID_UPGRADE = "USERNOTICE/ANON_GIFT_PAID_UPGRADE", e.GIFT_PAID_UPGRADE = "USERNOTICE/GIFT_PAID_UPGRADE", e.RAID = "USERNOTICE/RAID", e.RESUBSCRIPTION = "USERNOTICE/RESUBSCRIPTION", e.RITUAL = "USERNOTICE/RITUAL", e.SUBSCRIPTION = "USERNOTICE/SUBSCRIPTION", e.SUBSCRIPTION_GIFT = "USERNOTICE/SUBSCRIPTION_GIFT", e.SUBSCRIPTION_GIFT_COMMUNITY = "USERNOTICE/SUBSCRIPTION_GIFT_COMMUNITY" }(zi || (zi = {}));
    var oa = function(e) {
        function s(t) {
            var n = e.call(this) || this;
            return n._readyState = ki.NOT_READY, n._connectionAttempts = 0, n._channelState = {}, n._isDisconnecting = !1, n.connect = function() { return n._isDisconnecting = !1, n._connectionInProgress ? n._connectionInProgress : (n._connectionInProgress = Promise.race([Zt(n.options.connectionTimeout, new ea(Qt)), n._handleConnectionAttempt()]).then(n._handleConnectSuccess.bind(n)).catch(n._handleConnectRetry.bind(n)), n._connectionInProgress) }, n.send = function(e, t) { return n._client.send(e, t) }, n.disconnect = function() { n._isDisconnecting = !0, n._readyState = ki.DISCONNECTING, n._clearChannelState(), n._client.disconnect() }, n.reconnect = function(e) { e && (n.options = r(r({}, n.options), e)), n._connectionInProgress = null, n._readyState = ki.RECONNECTING; var t = n._getChannels(); return n.disconnect(), n.connect().then((function() { return Promise.all(t.map((function(e) { return n.join(e) }))) })) }, n.join = function(e) {
                var t = Yi(e),
                    r = n._log.profile("Joining " + t),
                    o = n.connect(),
                    i = $t(n, bt.ROOM_STATE + "/" + t),
                    a = or(n.options.username) ? Promise.resolve() : $t(n, bt.USER_STATE + "/" + t),
                    s = Promise.all([o, i, a]).then((function(e) {
                        var o = e[1],
                            i = e[2],
                            a = { roomState: o.tags, userState: i ? i.tags : null };
                        return n._setChannelState(o.channel, a), r.done("Joined " + t), a
                    }));
                return n.send(bt.JOIN + " " + t).then((function() { return Promise.race([Zt(n.options.joinTimeout, new ea(Xt)), s]) }))
            }, n.part = function(e) {
                var t = Yi(e);
                n._log.info("Parting " + t), n._removeChannelState(t), n.send(bt.PART + " " + t)
            }, n.say = function(e, t) {
                for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
                var i = Yi(e),
                    s = r.length ? a([""], r).join(" ") : "",
                    u = "PRIVMSG/" + i + " :" + t + s,
                    c = $e(n, ["_channelState", i, "isModerator"]),
                    l = na(n)(i, t),
                    f = function() { return Promise.race(a(l)) };
                return Jt([n._isUserAuthenticated.bind(n), n.send.bind(n, bt.PRIVATE_MESSAGE + " " + i + " :" + t + s, { isModerator: c }), f]).then((function(e) { return n._log.info(u), e })).catch((function(e) { throw n._log.error(u, e), e }))
            }, n.whisper = function(e, t) { return Jt([n._isUserAuthenticated.bind(n), n.send.bind(n, bt.WHISPER + " :/w " + e + " " + t)]) }, n.broadcast = function(e) { return Jt([n._isUserAuthenticated.bind(n), function() { return Promise.all(n._getChannels().map((function(t) { return n.say(t, e) }))) }]) }, n.options = t, n._log = Kt(r({ name: "Chat" }, n.options.log)), Object.assign(n, ra(n)), n
        }
        return t(s, e), Object.defineProperty(s.prototype, "options", {
            get: function() { return this._options },
            set: function(e) {
                this._options = function(e) {
                    var t = { username: Ni, token: function(e) { return wi(e) || Ni(e) }, isKnown: Ri, isVerified: Ri, connectionTimeout: Hn, joinTimeout: Hn, onAuthenticationFailure: B },
                        n = Ai(r(r({}, e), { username: Ki(e.username), token: qi(e.token) }), { isKnown: !1, isVerified: !1, connectionTimeout: 5e3, joinTimeout: 1e3, onAuthenticationFailure: function() { return Promise.reject() } });
                    return Jo(ii(n, t), "[twitch-js/Chat] options: Expected valid options"), n
                }(e)
            },
            enumerable: !0,
            configurable: !0
        }), s.prototype.updateOptions = function(e) {
            var t = this.options,
                n = t.token,
                o = t.username;
            this.options = r(r({}, e), { token: n, username: o })
        }, s.prototype._handleConnectionAttempt = function() {
            var e = this;
            return new Promise((function(t, r) {
                var n = e._log.profile("Connecting ...");
                e._readyState = ki.CONNECTING, e._connectionAttempts += 1, e._client && e._client.removeAllListeners(), e._client = new ta(e.options), e._client.on(Pt.ALL, e._handleMessage, e), e._client.on(Pt.DISCONNECTED, e._handleDisconnect, e), e._client.once(Pt.RECONNECT, (function() { return e.reconnect() })), e._client.once(Pt.AUTHENTICATION_FAILED, r), e._client.once(Pt.CONNECTED, (function(r) { e._handleJoinsAfterConnect(), n.done("Connected"), t(r) }))
            }))
        }, s.prototype._handleConnectSuccess = function(e) { return this._readyState = ki.CONNECTED, this._connectionAttempts = 0, qo(e) }, s.prototype._handleJoinsAfterConnect = function() {
            return o(this, void 0, void 0, (function() {
                var e, t = this;
                return i(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return e = this._getChannels(), [4, Promise.all(e.map((function(e) { return t.join(e) })))];
                        case 1:
                            return r.sent(), [2]
                    }
                }))
            }))
        }, s.prototype._handleConnectRetry = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n;
                return i(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            if (this._connectionInProgress = null, this._isDisconnecting) return [2, Promise.resolve()];
                            if (this._readyState = ki.CONNECTING, this._log.info("Retrying ..."), e.event !== Pt.AUTHENTICATION_FAILED) return [3, 6];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, this.options.onAuthenticationFailure()];
                        case 2:
                            return (t = o.sent()) ? (this.options = r(r({}, this.options), { token: t }), [4, (i = this.options.connectionTimeout, new Promise((function(e) { return setTimeout(e, i) })))]) : [3, 4];
                        case 3:
                            return o.sent(), [2, this.connect()];
                        case 4:
                            return [3, 6];
                        case 5:
                            throw n = o.sent(), this._log.error("Connection failed"), new Qi(n, e);
                        case 6:
                            return [2, this.connect()]
                    }
                    var i
                }))
            }))
        }, s.prototype._isUserAuthenticated = function() { var e = this; return new Promise((function(t, r) { or(e.options.username) ? r(new Error("Not authenticated")) : t() })) }, s.prototype._emit = function(t, r) {
            var n = this;
            if (t) {
                var o = At(t.split("/")),
                    i = $e(r, "tags.displayName") || $e(r, "username") || "",
                    s = $e(r, "message") || "";
                if (FULL_LOGGING) this._log.info("" + o.join("/"), i + (s ? ":" : ""), s)
                o.filter((function(e) { return "#" !== e })).reduce((function(t, o) { var i = a(t, [o]); return i.length > 1 && e.prototype.emit.call(n, o, r), e.prototype.emit.call(n, i.join("/"), r), i }), [])
            }
            e.prototype.emit.call(this, Pt.ALL, r)
        }, s.prototype._getChannels = function() { return Object.keys(this._channelState) }, s.prototype._getChannelState = function(e) { return this._channelState[e] }, s.prototype._setChannelState = function(e, t) { this._channelState[e] = t }, s.prototype._removeChannelState = function(e) {
            this._channelState = Object.entries(this._channelState).reduce((function(t, n) {
                var o, i = n[0],
                    a = n[1];
                return i === e ? t : r(r({}, t), ((o = {})[i] = a, o))
            }), {})
        }, s.prototype._clearChannelState = function() { this._channelState = {} }, s.prototype._handleMessage = function(e) {
            var t = Yi(e.channel),
                o = e,
                i = o.command,
                a = o;
            switch (o.command) {
                case Pt.JOIN:
                    i = (a = function(e) {
                        var t = /:(.+)!(.+)@(.+).tmi.twitch.tv JOIN (#.+)/g.exec(e._raw),
                            n = t[1],
                            o = t[4];
                        return r(r({}, e), { channel: o, command: bt.JOIN, event: bt.JOIN, username: n })
                    }(o)).command + "/" + t;
                    break;
                case Pt.PART:
                    i = (a = function(e) {
                        var t = /:(.+)!(.+)@(.+).tmi.twitch.tv PART (#.+)/g.exec(e._raw),
                            n = t[1],
                            o = t[4];
                        return r(r({}, e), { channel: o, command: bt.PART, event: bt.PART, username: n })
                    }(o)).command + "/" + t;
                    break;
                case Pt.NAMES:
                    i = (a = function(e) {
                        var t = /:(.+).tmi.twitch.tv 353 (.+) = (#.+) :(.+)/g.exec(e._raw),
                            n = t[3],
                            o = t[4].split(" ");
                        return r(r({}, e), { channel: n, command: bt.NAMES, event: bt.NAMES, usernames: o })
                    }(o)).command + "/" + t;
                    break;
                case Pt.NAMES_END:
                    i = (a = function(e) {
                        var t = /:(.+).tmi.twitch.tv 366 (.+) (#.+) :(.+)/g.exec(e._raw),
                            n = t[1],
                            o = t[3];
                        return r(r({}, e), { channel: o, command: bt.NAMES_END, event: bt.NAMES_END, username: n })
                    }(o)).command + "/" + t;
                    break;
                case Pt.CLEAR_CHAT:
                    i = (a = function(e) {
                        var t = e.tags,
                            o = e.message,
                            i = n(e, ["tags", "message"]);
                        return r(r({}, i), void 0 !== o ? { tags: r(r({}, t), { banReason: xo(t.banReason), banDuration: Bo(t.banDuration) }), command: bt.CLEAR_CHAT, event: St.USER_BANNED, username: o } : { command: bt.CLEAR_CHAT, event: bt.CLEAR_CHAT })
                    }(o)).event ? a.command + "/" + a.event + "/" + t : a.command + "/" + t;
                    break;
                case Pt.HOST_TARGET:
                    i = (a = function(e) {
                        var t = /:tmi.twitch.tv HOSTTARGET (#[^\s]+) :([^\s]+)?\s?(\d+)?/g.exec(e._raw),
                            n = t[1],
                            o = t[2],
                            i = t[3],
                            a = "-" === o;
                        return r(r({}, e), { channel: n, username: o, command: bt.HOST_TARGET, event: a ? St.HOST_OFF : St.HOST_ON, numberOfViewers: Hn(tn(i)) ? parseInt(i, 10) : void 0, message: void 0 })
                    }(o)).command + "/" + t;
                    break;
                case Pt.MODE:
                    if (i = (a = function(e) {
                            var t = /:[^\s]+ MODE (#[^\s]+) (-|\+)o ([^\s]+)/g.exec(e._raw),
                                n = t[1],
                                o = t[2],
                                i = t[3],
                                a = "+" === o,
                                s = r(r({}, e), { command: bt.MODE, channel: n, username: i });
                            return r(r({}, s), a ? { event: St.MOD_GAINED, message: "+o", isModerator: !0 } : { event: St.MOD_LOST, message: "-o", isModerator: !1 })
                        }(o)).command + "/" + t, Je(this.options.username) === Je(a.username)) {
                        var s = this._getChannelState(t);
                        this._setChannelState(t, r(r({}, s), { userState: r(r({}, s.userState), { isModerator: a.isModerator }) }))
                    }
                    break;
                case Pt.GLOBAL_USER_STATE:
                    a = qo(o), this._userState = a.tags;
                    break;
                case Pt.USER_STATE:
                    i = (a = Ko(o)).command + "/" + t, this._setChannelState(t, r(r({}, this._getChannelState(t)), { userState: a.tags }));
                    break;
                case Pt.ROOM_STATE:
                    i = (a = function(e) {
                        var t = e.tags,
                            o = n(e, ["tags"]);
                        return r(r({}, o), { command: bt.ROOM_STATE, event: bt.ROOM_STATE, tags: Go(t) })
                    }(o)).command + "/" + t, this._setChannelState(t, r(r({}, this._getChannelState(t)), { roomState: a.roomState }));
                    break;
                case Pt.NOTICE:
                    i = (a = function(e) {
                        var t, o = e.tags,
                            i = n(e, ["tags"]),
                            a = nr(e) ? r(r({}, o), { msgId: Je(Pt.AUTHENTICATION_FAILED) }) : o,
                            s = Gn(a.msgId);
                        switch (a.msgId) {
                            case Tt.ROOM_MODS:
                                return r(r({}, i), { command: bt.NOTICE, event: It.ROOM_MODS, tags: a, mods: (t = i.message, t.split(": ")[1].split(", ")) });
                            default:
                                return r(r({}, i), { command: bt.NOTICE, event: s, tags: a })
                        }
                    }(o)).command + "/" + a.event + "/" + t;
                    break;
                case Pt.USER_NOTICE:
                    i = (a = $o(o)).command + "/" + a.event + "/" + t;
                    break;
                case Pt.PRIVATE_MESSAGE:
                    i = (a = function(e) {
                        var t = e._raw,
                            n = e.tags;
                        if (rn(n.bits, 0)) return r(r({}, Ko(e)), { command: bt.PRIVATE_MESSAGE, event: St.CHEER, bits: Bo(n.bits) });
                        var o = tr.exec(t) || [],
                            i = o[0],
                            a = o[1],
                            s = o[2],
                            u = o[3],
                            c = o[4];
                        return i ? r(r({}, e), u ? { command: bt.PRIVATE_MESSAGE, event: St.HOSTED_AUTO, channel: "#" + a, tags: { displayName: s }, numberOfViewers: Bo(c) } : c ? { command: bt.PRIVATE_MESSAGE, event: St.HOSTED_WITH_VIEWERS, channel: "#" + a, tags: { displayName: s }, numberOfViewers: Bo(c) } : { command: bt.PRIVATE_MESSAGE, event: St.HOSTED_WITHOUT_VIEWERS, channel: "#" + a, tags: { displayName: s } }) : r(r({}, Ko(e)), { command: bt.PRIVATE_MESSAGE, event: bt.PRIVATE_MESSAGE })
                    }(o)).event ? a.command + "/" + a.event + "/" + t : a.command + "/" + t;
                    break;
                default:
                    var u = function(e) { return void 0 !== e ? e.command || e.event : Pt.ALL }(o);
                    i = "#" === t ? u : u + "/" + t
            }
            this._emit(i, a)
        }, s.prototype._handleDisconnect = function() { this._connectionInProgress = null, this._readyState = ki.DISCONNECTED, this._isDisconnecting = !1 }, s.Commands = bt, s.Events = Pt, s.CompoundEvents = ((Wi = {})[Pt.NOTICE] = Hi, Wi[Pt.PRIVATE_MESSAGE] = Gi, Wi[Pt.USER_NOTICE] = zi, Wi), s
    }(l);
    var ia = function(e) {
        var t = Mi(e),
            r = t % 1;
        return t == t ? r ? t - r : t : 0
    };
    var aa = function(e, t) { return Be(t, (function(t) { return e[t] })) };
    var sa = function(e) { return null == e ? [] : aa(e, oi(e)) },
        ua = Math.max;
    var ca = function(e, t, r, n) { e = Nn(e) ? e : sa(e), r = r && !n ? ia(r) : 0; var o = e.length; return r < 0 && (r = ua(o + r, 0)), Ni(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && it(e, t, r) > -1 },
        la = { searchParams: "URLSearchParams" in self, iterable: "Symbol" in self && "iterator" in Symbol, blob: "FileReader" in self && "Blob" in self && function() { try { return new Blob, !0 } catch (e) { return !1 } }(), formData: "FormData" in self, arrayBuffer: "ArrayBuffer" in self };
    if (la.arrayBuffer) var fa = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        ha = ArrayBuffer.isView || function(e) { return e && fa.indexOf(Object.prototype.toString.call(e)) > -1 };

    function da(e) { if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase() }

    function pa(e) { return "string" != typeof e && (e = String(e)), e }

    function _a(e) { var t = { next: function() { var t = e.shift(); return { done: void 0 === t, value: t } } }; return la.iterable && (t[Symbol.iterator] = function() { return t }), t }

    function va(e) { this.map = {}, e instanceof va ? e.forEach((function(e, t) { this.append(t, e) }), this) : Array.isArray(e) ? e.forEach((function(e) { this.append(e[0], e[1]) }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) { this.append(t, e[t]) }), this) }

    function Oa(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }

    function Ea(e) { return new Promise((function(t, r) { e.onload = function() { t(e.result) }, e.onerror = function() { r(e.error) } })) }

    function ya(e) {
        var t = new FileReader,
            r = Ea(t);
        return t.readAsArrayBuffer(e), r
    }

    function ma(e) { if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer }

    function ba() {
        return this.bodyUsed = !1, this._initBody = function(e) {
            var t;
            this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : la.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : la.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : la.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : la.arrayBuffer && la.blob && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = ma(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : la.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || ha(e)) ? this._bodyArrayBuffer = ma(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : la.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, la.blob && (this.blob = function() { var e = Oa(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? Oa(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ya) }), this.text = function() { var e, t, r, n = Oa(this); if (n) return n; if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, r = Ea(t), t.readAsText(e), r; if (this._bodyArrayBuffer) return Promise.resolve(function(e) { for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]); return r.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, la.formData && (this.formData = function() { return this.text().then(Ta) }), this.json = function() { return this.text().then(JSON.parse) }, this
    }
    va.prototype.append = function(e, t) {
        e = da(e), t = pa(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t
    }, va.prototype.delete = function(e) { delete this.map[da(e)] }, va.prototype.get = function(e) { return e = da(e), this.has(e) ? this.map[e] : null }, va.prototype.has = function(e) { return this.map.hasOwnProperty(da(e)) }, va.prototype.set = function(e, t) { this.map[da(e)] = pa(t) }, va.prototype.forEach = function(e, t) { for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this) }, va.prototype.keys = function() { var e = []; return this.forEach((function(t, r) { e.push(r) })), _a(e) }, va.prototype.values = function() { var e = []; return this.forEach((function(t) { e.push(t) })), _a(e) }, va.prototype.entries = function() { var e = []; return this.forEach((function(t, r) { e.push([r, t]) })), _a(e) }, la.iterable && (va.prototype[Symbol.iterator] = va.prototype.entries);
    var Sa = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function ga(e, t) {
        var r, n, o = (t = t || {}).body;
        if (e instanceof ga) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new va(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new va(t.headers)), this.method = (r = t.method || this.method || "GET", n = r.toUpperCase(), Sa.indexOf(n) > -1 ? n : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }

    function Ta(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function(e) {
            if (e) {
                var r = e.split("="),
                    n = r.shift().replace(/\+/g, " "),
                    o = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(o))
            }
        })), t
    }

    function Aa(e, t) { t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new va(t.headers), this.url = t.url || "", this._initBody(e) }
    ga.prototype.clone = function() { return new ga(this, { body: this._bodyInit }) }, ba.call(ga.prototype), ba.call(Aa.prototype), Aa.prototype.clone = function() { return new Aa(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new va(this.headers), url: this.url }) }, Aa.error = function() { var e = new Aa(null, { status: 0, statusText: "" }); return e.type = "error", e };
    var Ca = [301, 302, 303, 307, 308];
    Aa.redirect = function(e, t) { if (-1 === Ca.indexOf(t)) throw new RangeError("Invalid status code"); return new Aa(null, { status: t, headers: { location: e } }) };
    var Na = self.DOMException;
    try { new Na } catch (e) {
        (Na = function(e, t) {
            this.message = e, this.name = t;
            var r = Error(e);
            this.stack = r.stack
        }).prototype = Object.create(Error.prototype), Na.prototype.constructor = Na
    }

    function Ia(e, t) {
        return new Promise((function(r, n) {
            var o = new ga(e, t);
            if (o.signal && o.signal.aborted) return n(new Na("Aborted", "AbortError"));
            var i = new XMLHttpRequest;

            function a() { i.abort() }
            i.onload = function() {
                var e, t, n = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: (e = i.getAllResponseHeaders() || "", t = new va, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                        var r = e.split(":"),
                            n = r.shift().trim();
                        if (n) {
                            var o = r.join(":").trim();
                            t.append(n, o)
                        }
                    })), t)
                };
                n.url = "responseURL" in i ? i.responseURL : n.headers.get("X-Request-URL");
                var o = "response" in i ? i.response : i.responseText;
                r(new Aa(o, n))
            }, i.onerror = function() { n(new TypeError("Network request failed")) }, i.ontimeout = function() { n(new TypeError("Network request failed")) }, i.onabort = function() { n(new Na("Aborted", "AbortError")) }, i.open(o.method, o.url, !0), "include" === o.credentials ? i.withCredentials = !0 : "omit" === o.credentials && (i.withCredentials = !1), "responseType" in i && la.blob && (i.responseType = "blob"), o.headers.forEach((function(e, t) { i.setRequestHeader(t, e) })), o.signal && (o.signal.addEventListener("abort", a), i.onreadystatechange = function() { 4 === i.readyState && o.signal.removeEventListener("abort", a) }), i.send(void 0 === o._bodyInit ? null : o._bodyInit)
        }))
    }
    Ia.polyfill = !0, self.fetch || (self.fetch = Ia, self.Headers = va, self.Request = ga, self.Response = Aa);
    var Ra = window.fetch,
        wa = window.FormData,
        Da = function(e) {
            function r(t, n) { var o = e.call(this, t.url + " " + t.statusText) || this; return Object.setPrototypeOf(o, r.prototype), o.ok = !1, o.status = t.status, o.statusText = t.statusText, o.url = t.url, o.body = n, o }
            return t(r, e), r
        }(Ji),
        Pa = function(e) {
            function r(t, n) { var o = e.call(this, t, n) || this; return Object.setPrototypeOf(o, r.prototype), o }
            return t(r, e), r
        }(Da),
        ja = function(e) {
            return o(void 0, void 0, void 0, (function() {
                var t;
                return i(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, e.json()];
                        case 1:
                            if (t = r.sent(), !e.ok) throw new(401 === e.status ? Pa : Da)(e, t);
                            return [2, Kr(t, { deep: !0 })]
                    }
                }))
            }))
        };
    var Ua, La, Ma = function(e) { return void 0 === e };
    ! function(e) { e[e.NOT_READY = 0] = "NOT_READY", e[e.READY = 1] = "READY", e[e.INITIALIZED = 2] = "INITIALIZED" }(La || (La = {}));
    var Fa = ((Ua = {})[_t.Helix] = { baseUrl: "https://api.twitch.tv/helix", authorizationHeader: "Bearer" }, Ua[_t.Kraken] = { baseUrl: "https://api.twitch.tv/kraken", authorizationHeader: "OAuth" }, Ua),
        xa = function() {
            function e(e) { void 0 === e && (e = {}), this._readyState = La.READY, this.options = e, this._log = Kt(r({ name: "Api" }, this.options.log)) }
            return Object.defineProperty(e.prototype, "options", {
                get: function() { return this._options },
                set: function(e) {
                    this._options = function(e) {
                        var t = { clientId: function(e) { return Ma(e) || Ni(e) }, token: function(e) { return Ma(e) || Ni(e) }, onAuthenticationFailure: B },
                            n = Ai(r({}, e), { clientId: void 0, token: void 0, onAuthenticationFailure: function() { return new Promise((function(e, t) { return t() })) } });
                        return Jo(ii(n, t), "[twitch-js/Api] options: Expected valid options"), n
                    }(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "readyState", { get: function() { return this._readyState }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "status", { get: function() { return this._status }, enumerable: !0, configurable: !0 }), e.prototype.updateOptions = function(e) {
                var t = this.options,
                    n = t.clientId,
                    o = t.token;
                this.options = r(r({}, e), { clientId: n, token: o })
            }, e.prototype.initialize = function(e) {
                return o(this, void 0, void 0, (function() {
                    var t;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return e && (this.options = r(r({}, this.options), e)), e || 2 !== this.readyState ? [4, this.get("", { version: _t.Kraken })] : [2, Promise.resolve()];
                            case 1:
                                return t = n.sent(), this._readyState = La.INITIALIZED, this._status = t, [2, t]
                        }
                    }))
                }))
            }, e.prototype.hasScope = function(e) { var t = this; return new Promise((function(r, n) { return 2 === t.readyState && t.status && ca(t.status.token.authorization.scopes, e) ? r(!0) : n(!1) })) }, e.prototype.get = function(e, t) { return void 0 === e && (e = ""), this._handleFetch(e, t) }, e.prototype.post = function(e, t) { return this._handleFetch(e, r(r({}, t), { method: "post" })) }, e.prototype.put = function(e, t) { return this._handleFetch(e, r(r({}, t), { method: "put" })) }, e.prototype._isVersionHelix = function(e) { return Je(e) === _t.Helix }, e.prototype._getBaseUrl = function(e) { return Fa[e].baseUrl }, e.prototype._getHeaders = function(e) {
                var t = this.options,
                    n = t.clientId,
                    o = t.token,
                    i = this._isVersionHelix(e);
                Jo(!i || !(Bn(n) && Bn(o)), "[twitch-js/Api] To call a Helix endpoint, a `clientId` or `token` must be provided");
                var a = i ? { "Client-ID": n } : { Accept: "application/vnd.twitchtv.v5+json", "Client-ID": n };
                if (o) { var s = Fa[e].authorizationHeader + " " + o; return r(r({}, a), { Authorization: s }) }
                return a
            }, e.prototype._handleFetch = function(e, t) {
                return void 0 === e && (e = ""), void 0 === t && (t = {}), o(this, void 0, void 0, (function() {
                    var a, s, u, c, l, f, h, d, p, _, v = this;
                    return i(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                a = t.version, s = void 0 === a ? _t.Helix : a, u = n(t, ["version"]), c = this._getBaseUrl(s), l = c + "/" + e, f = (Gn(u.method) || "GET") + " " + l, h = this._log.profile(), d = function() {
                                    return function(e, t, n) {
                                        return void 0 === t && (t = {}), o(void 0, void 0, void 0, (function() {
                                            var o, a, s, u, c, l;
                                            return i(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return o = t.body && !(t.body instanceof wa) && "object" == typeof t.body, a = o ? JSON.stringify(t.body) : t.body, s = o ? r(r({}, t.headers), { "Content-Type": "application/json" }) : t.headers, u = "object" == typeof t.search ? "?" + gr(t.search, n) : "", c = r(r({}, t), a ? { method: t.method || "get", headers: s, body: a } : { method: t.method || "get", headers: s }), [4, Ra("" + e + u, c)];
                                                    case 1:
                                                        return l = i.sent(), [2, ja(l)]
                                                }
                                            }))
                                        }))
                                    }(l, r(r({}, u), { headers: r(r({}, u.headers), v._getHeaders(s)) }))
                                }, O.label = 1;
                            case 1:
                                return O.trys.push([1, 3, 9, 10]), [4, d()];
                            case 2:
                                return [2, O.sent()];
                            case 3:
                                return (p = O.sent()) instanceof Pa ? [4, this.options.onAuthenticationFailure()] : [3, 8];
                            case 4:
                                return (_ = O.sent()) ? [4, this.initialize({ token: _ })] : [3, 6];
                            case 5:
                                O.sent(), this._log.info(f + " ... re-initializing with new token"), O.label = 6;
                            case 6:
                                return this._log.info(f + " ... retrying"), [4, d()];
                            case 7:
                                return [2, O.sent()];
                            case 8:
                                throw new Da(p, f);
                            case 9:
                                return h.done(f), [7];
                            case 10:
                                return [2]
                        }
                    }))
                }))
            }, e
        }();
    return function() {
        function e(e) {
            var t = e.token,
                n = e.username,
                o = e.clientId,
                i = e.log,
                a = e.onAuthenticationFailure,
                s = e.chat,
                u = e.api;
            this.chat = new oa(r(r({ log: i }, s), { token: t, username: n, onAuthenticationFailure: a })), this.api = new xa(r(r({ log: i }, u), { token: t, clientId: o, onAuthenticationFailure: a }))
        }
        return e.prototype.updateOptions = function(e) {
            var t = e.chat,
                r = e.api;
            t && this.chat.updateOptions(t), r && this.api.updateOptions(r)
        }, e.Chat = oa, e.Api = xa, e
    }()
}();