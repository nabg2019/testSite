window.Modernizr = function(a, b, c) {
        function u(a) {
            j.cssText = a
        }

        function v(a, b) {
            return u(prefixes.join(a + ";") + (b || ""))
        }

        function w(a, b) {
            return typeof a === b
        }

        function x(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function y(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }
        var d = "2.8.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = {},
            n = {},
            o = {},
            p = [],
            q = p.slice,
            r, s = {}.hasOwnProperty,
            t;
        !w(s, "undefined") && !w(s.call, "undefined") ? t = function(a, b) {
            return s.call(a, b)
        } : t = function(a, b) {
            return b in a && w(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = q.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(q.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(q.call(arguments)))
                };
            return e
        });
        for (var z in m) t(m, z) && (r = z.toLowerCase(), e[r] = m[z](), p.push((e[r] ? "" : "no-") + r));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) t(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, u(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + p.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
(function() {
    "use strict";
    var toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty;

    function addClass(elem, klass) {
        if (!hasClass(elem, klass)) elem.className += " " + klass
    }

    function hasClass(elem, klass) {
        return (" " + elem.className + " ").indexOf(" " + klass + " ") !== -1
    }

    function toggleClass(elem, klass) {
        if (hasClass(elem, klass)) removeClass(elem, klass);
        else addClass(elem, klass)
    }

    function removeClass(elem, klass) {
        if (hasClass(elem, klass)) elem.className = trim((" " + elem.className + " ").replace(" " + klass, ""))
    }

    function $(id) {
        return document.getElementById(id)
    }

    function is(o, t) {
        return toString.call(o).toLowerCase() == "[object " + t + "]"
    }

    function trim(s) {
        return s.replace(/^\s+|\s+$/g, "")
    }

    function parseData(data, sep) {
        data = data.split(/\r\n|\n/g);
        sep = sep || ":";
        var R = {},
            i, l = data.length,
            item, line, options = {};
        for (var i = 0; i < l; i++) {
            line = trim(data[i]);
            if (!line) continue;
            item = data[i].split(sep);
            if (line.charAt(0) === "#") {
                var key = trim(item[0] || item[1] || "").slice(1);
                options[key] = trim(item[1] || "")
            } else {
                R[trim(item[1] || item[0] || "")] = trim(item[0] || "")
            }
        }
        return {
            list: R,
            options: options
        }
    }

    function bind(fn, context) {
        return function() {
            return fn.apply(context, arguments)
        }
    }

    function bindAll(context) {
        var methods = [].slice.call(arguments, 1);
        for (var i = 0; i < methods.length; i++) {
            context[methods[i]] = bind(context[methods[i]], context)
        }
    }

    function values(obj) {
        var R = [],
            i;
        for (i in obj)
            if (obj.hasOwnProperty(i)) R.push(obj[i]);
        return R
    }

    function inverse(obj) {
        var R = {},
            i;
        for (i in obj)
            if (obj.hasOwnProperty(i)) R[obj[i].replace(" ", "")] = i;
        return R
    }

    function cloneBoard(obj) {
        var clon = [];
        for (var attr in obj) {
            if (!obj.hasOwnProperty(attr)) continue;
            if (is(obj[attr], "array")) clon.push(cloneBoard(obj[attr]));
            else if (attr !== "width" && attr !== "height") clon.push(!obj[attr] ? 0 : {
                "char": ""
            })
        }
        return clon
    }

    function applyStyle(ctx, style) {
        for (var attr in style) {
            if (style.hasOwnProperty(attr)) ctx[attr] = style[attr]
        }
    }
    var rMarks = /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\u0483-\u0489\u0591-\u05BD]/;

    function stringLength(string) {
        var length = string.length,
            count = length,
            i;
        for (i = 0; i < length; i++) {
            if (rMarks.test(string.charAt(i))) {
                count--
            }
        }
        return count
    }

    function splitString(string) {
        var length = string.length,
            chars = [],
            i;
        for (i = 0; i < length; i++) {
            if (rMarks.test(string.charAt(i))) {
                chars[chars.length - 1] += string.charAt(i)
            } else {
                chars.push(string.charAt(i))
            }
        }
        return chars
    }

    function parseQueryString() {
        if (location.query) {
            return
        }
        var parts = location.search.replace(/^[?]/, "").split("&"),
            i = 0,
            l = parts.length,
            part, GET = {};
        for (; i < l; i++) {
            if (!parts[i]) {
                continue
            }
            part = parts[i].split("=");
            GET[unescape(part[0])] = decodeURI(part[1])
        }
        return GET
    }

    function format(t) {
        if (typeof t !== "number") return "--:--";
        t = ~~(t / 1e3);
        var s = t % 60,
            m = ~~(t / 60),
            h = ~~(m / 60);
        m %= 60;
        return (h ? (h > 9 ? h : "0" + h) + ":" : "") + (m > 9 ? m : "0" + m % 60) + ":" + (s > 9 ? s : "0" + s)
    }

    function merge(left, right, key) {
        var result = [],
            i = 0,
            j = 0;
        while (left.length || right.length) {
            if (left.length && key(left[0]) >= key(right[0]) || !right.length) result.push(left.shift());
            else result.push(right.shift())
        }
        return result
    }

    function identity(a) {
        return a
    }

    function mergeSort(array, key) {
        if (array.length < 2) {
            return array
        }
        key = key || identity;
        var mid = Math.ceil(array.length / 2),
            left = mergeSort(array.slice(0, mid), key),
            right = mergeSort(array.slice(mid), key);
        return merge(left, right, key)
    }
    window.game = window.game || {};
    game.$ = {
        $: $,
        trim: trim,
        applyStyle: applyStyle,
        cloneBoard: cloneBoard,
        parseData: parseData,
        values: values,
        bind: bind,
        bindAll: bindAll,
        inverse: inverse,
        addClass: addClass,
        format: format,
        is: is,
        sort: mergeSort,
        removeClass: removeClass,
        toggleClass: toggleClass,
        hasClass: hasClass,
        stringLength: stringLength,
        splitString: splitString,
        parseQueryString: parseQueryString
    }
})();
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define([], factory)
    } else {
        this.PointerTracker = this.PointerTracker || {};
        this.PointerTracker.utils = factory()
    }
})(this, function() {
    "use strict";
    var undefined, eventsMap = {
        click: "touchstart",
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    };

    function normalizeEvent(e) {
        e = e || event;
        if (!e.preventDefault) e.preventDefault = function() {
            this.returnValue = false
        };
        if (!e.stopPropagation) e.stopPropagation = function() {
            this.cancelBubble = true
        };
        return e
    }
    var addEvent = function() {
        if (document.addEventListener) {
            return function F(elem, type, callback) {
                if (!elem) {
                    return
                }
                elem = typeof elem === "string" ? $(elem) : elem;
                callback = touchEventHandler(callback, type, elem);
                if (eventsMap[type]) elem.addEventListener(eventsMap[type], callback, true);
                elem.addEventListener(type, callback, true)
            }
        } else {
            return function F(elem, type, callback) {
                if (!elem) return;
                elem = typeof elem === "string" ? $(elem) : elem;
                elem.attachEvent("on" + type, function(e) {
                    e = normalizeEvent(e);
                    return callback.call(e.target || e.srcElement, e)
                })
            }
        }
    }();
    var alreadyHandledByTouchEvent;

    function touchEventHandler(callback, type, elem) {
        var touchevent = eventsMap[type];
        if (!touchevent) return callback;
        return function(event) {
            var isTouchEvent = event.type === touchevent;
            if (alreadyHandledByTouchEvent && !isTouchEvent) {
                return alreadyHandledByTouchEvent = false
            }
            alreadyHandledByTouchEvent = isTouchEvent;
            return callback.call(this, event)
        }
    }

    function getRaf() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, rate) {
            window.setTimeout(callback, rate || 1e3 / 60)
        }
    }
    return {
        on: addEvent,
        getRaf: getRaf
    }
});
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define([], factory)
    } else {
        this.PointerTracker = this.PointerTracker || {};
        this.PointerTracker.EventEmitter = factory()
    }
})(this, function() {
    "use strict";
    var hasOwnProperty = {}.hasOwnProperty,
        slice = [].slice;

    function EventEmitter() {}
    EventEmitter.mixin = function(obj) {
        var proto = EventEmitter.prototype;
        for (var attr in EventEmitter.prototype) {
            if (hasOwnProperty.call(proto, attr)) {
                obj[attr] = proto[attr]
            }
        }
    };
    EventEmitter.prototype = {
        on: function(eventType, listener) {
            this._events = this._events || {};
            this._events[eventType] = this._events[eventType] || [];
            this._events[eventType].push(listener)
        },
        once: function(eventType, listener) {
            var self = this;

            function wrap() {
                listener.apply(null, arguments);
                self.off(eventType, listener)
            }
            wrap.fn = listener;
            return this.on(eventType, listener)
        },
        off: function(eventType, listener) {
            this._events = this._events || {};
            if (!listener) {
                delete this._events[eventType];
                return
            } else if (!this._events[eventType]) {
                return
            }
            var listeners = this._events[eventType],
                i, l;
            for (i = 0, l = listeners.length; i < l; i++) {
                if (listener === listeners[i] || listener === listeners[i].fn) {
                    return !!listeners.splice(i, 1)
                }
            }
        },
        emit: function(eventType) {
            if (!this._events || !this._events[eventType]) {
                return
            }
            var listeners = this._events[eventType],
                args = slice.call(arguments, 1),
                i, l;
            for (i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(null, args)
            }
        }
    };
    return EventEmitter
});
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory(require("./utils", require("./eventEmmiter")))
    } else if (typeof define === "function" && define.amd) {
        define(["./utils", "./eventEmitter"], factory)
    } else {
        var utils = this.PointerTracker.utils,
            EventEmitter = this.PointerTracker.EventEmitter;
        root.MobileKeyboardEvents = factory(utils, EventEmitter);
        delete this.PointerTracker
    }
})(this, function($, EventEmitter) {
    var requestAnimationFrame = $.getRaf(),
        currentTicket = 0,
        lastInputLength = 0,
        isTracking, hash = "   " + (new Date).getTime(),
        uuid = 0,
        instances = {};

    function MobileKeyboardEvents(element) {
        if (element[hash]) {
            return instances[element[hash]]
        }
        var self = this;
        element[hash] = ++uuid;
        instances[uuid] = this;
        var input = this.input = document.createElement("textarea");
        this.input.onfocus = function() {
            if (!isTracking) this.blur()
        };
        this.input.onblur = function() {
            stopTracker(self)
        };
        element.appendChild(input);
        applyStyle(input, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            zIndex: 500,
            outline: "none",
            cursor: "default"
        })
    }

    function applyStyle(elem, style) {
        for (var attr in style)
            if (style.hasOwnProperty(attr)) elem.style[attr] = style[attr]
    }
    EventEmitter.mixin(MobileKeyboardEvents.prototype);
    MobileKeyboardEvents.prototype.open = function(text) {
        this._text = text || "";
        trackKeyEvents(this);
        this.input.focus();
        moveCursorToEnd(this.input)
    };
    MobileKeyboardEvents.prototype.close = function() {
        this.input.blur();
        stopTracker(this)
    };
    MobileKeyboardEvents.prototype.isOpen = function() {
        return !!isTracking
    };
    MobileKeyboardEvents.prototype.setText = function(text) {
        this.input.value = text;
        this.lastString = text;
        moveCursorToEnd(this.input)
    };

    function trackKeyEvents(self) {
        var thisTicket = ++currentTicket,
            event = {};
        isTracking = true;
        var input = self.input;
        input.value = self._text;
        lastInputLength = self._text.length;
        self.lastString = input.value;
        requestAnimationFrame(function F() {
            self.currentString = input.value;
            if (self.lastString !== self.currentString) {
                var currentString = self.currentString;
                var currentLength = game.$.stringLength(currentString);
                setDefaultEventValues(event);
                event.BACKSPACE = currentLength < game.$.stringLength(self.lastString);
                event.string = currentString;
                event.char = currentString.charAt(currentLength - 1);
                self.lastString = currentString;
                self.emit("key", event)
            }
            if (thisTicket === currentTicket) requestAnimationFrame(F)
        })
    }

    function moveCursorToEnd(el) {
        if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = game.$.stringLength(el.value)
        } else if (typeof el.createTextRange != "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select()
        }
    }

    function setDefaultEventValues(event) {
        event.char = null;
        event.string = "";
        event.deleted = "";
        event.BACKSPACE = false
    }

    function stopTracker(self) {
        isTracking = false;
        currentTicket++;
        self.emit("close")
    }
    return MobileKeyboardEvents
});
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define([], factory)
    } else {
        var game = this.game || {};
        game.EventEmitter = factory()
    }
})(this, function() {
    "use strict";
    var hasOwnProperty = {}.hasOwnProperty;

    function EventEmitter() {}
    EventEmitter.mixin = function(obj) {
        var proto = EventEmitter.prototype;
        for (var attr in EventEmitter.prototype) {
            if (hasOwnProperty.call(proto, attr)) {
                obj[attr] = proto[attr]
            }
        }
    };
    EventEmitter.prototype = {
        on: function(eventType, listener) {
            this._events = this._events || {};
            this._events[eventType] = this._events[eventType] || [];
            this._events[eventType].push(listener)
        },
        once: function(eventType, listener) {
            var self = this;

            function wrap() {
                listener.apply(null, arguments);
                self.off(eventType, listener)
            }
            wrap.fn = listener;
            return this.on(eventType, listener)
        },
        off: function(eventType, listener) {
            this._events = this._events || {};
            if (!listener) {
                delete this._events[eventType];
                return
            } else if (!this._events[eventType]) {
                return
            }
            var listeners = this._events[eventType],
                i, l;
            for (i = 0, l = listeners.length; i < l; i++) {
                if (listener === listeners[i] || listener === listeners[i].fn) {
                    return !!listeners.splice(i, 1)
                }
            }
        },
        emit: function(eventType) {
            if (!this._events || !this._events[eventType]) {
                return
            }
            var listeners = this._events[eventType],
                args = [].slice.call(arguments, 1),
                i, l;
            for (i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(null, args)
            }
        }
    };
    return EventEmitter
});
! function(a, b) {
    typeof module != "undefined" ? module.exports = b() : typeof define == "function" && define.amd ? define(a, b) : this[a] = b()
}("reqwest", function() {
    function handleReadyState(a, b, c) {
        return function() {
            a && a[readyState] == 4 && (twoHundo.test(a.status) ? b(a) : c(a))
        }
    }

    function setHeaders(a, b) {
        var c = b.headers || {},
            d;
        c.Accept = c.Accept || defaultHeaders.accept[b.type] || defaultHeaders.accept["*"], !b.crossOrigin && !c[requestedWith] && (c[requestedWith] = defaultHeaders.requestedWith), c[contentType] || (c[contentType] = b.contentType || defaultHeaders.contentType);
        for (d in c) c.hasOwnProperty(d) && a.setRequestHeader(d, c[d])
    }

    function generalCallback(a) {
        lastValue = a
    }

    function urlappend(a, b) {
        return a + (/\?/.test(a) ? "&" : "?") + b
    }

    function handleJsonp(a, b, c, d) {
        var e = uniqid++,
            f = a.jsonpCallback || "callback",
            g = a.jsonpCallbackName || "reqwest_" + e,
            h = new RegExp("((^|\\?|&)" + f + ")=([^&]+)"),
            i = d.match(h),
            j = doc.createElement("script"),
            k = 0;
        i ? i[3] === "?" ? d = d.replace(h, "$1=" + g) : g = i[3] : d = urlappend(d, f + "=" + g), win[g] = generalCallback, j.type = "text/javascript", j.src = d, j.async = !0, typeof j.onreadystatechange != "undefined" && (j.event = "onclick", j.htmlFor = j.id = "_reqwest_" + e), j.onload = j.onreadystatechange = function() {
            if (j[readyState] && j[readyState] !== "complete" && j[readyState] !== "loaded" || k) return !1;
            j.onload = j.onreadystatechange = null, j.onclick && j.onclick(), a.success && a.success(lastValue), lastValue = undefined, head.removeChild(j), k = 1
        }, head.appendChild(j)
    }

    function getRequest(a, b, c) {
        var d = (a.method || "GET").toUpperCase(),
            e = typeof a == "string" ? a : a.url,
            f = a.processData !== !1 && a.data && typeof a.data != "string" ? reqwest.toQueryString(a.data) : a.data || null,
            g;
        return (a.type == "jsonp" || d == "GET") && f && (e = urlappend(e, f), f = null), a.type == "jsonp" ? handleJsonp(a, b, c, e) : (g = xhr(), g.open(d, e, !0), setHeaders(g, a), g.onreadystatechange = handleReadyState(g, b, c), a.before && a.before(g), g.send(f), g)
    }

    function Reqwest(a, b) {
        this.o = a, this.fn = b, init.apply(this, arguments)
    }

    function setType(a) {
        var b = a.match(/\.(json|jsonp|html|xml)(\?|$)/);
        return b ? b[1] : "js"
    }

    function init(o, fn) {
        function complete(a) {
            o.timeout && clearTimeout(self.timeout), self.timeout = null, o.complete && o.complete(a)
        }

        function success(resp) {
            var r = resp.responseText;
            if (r) switch (type) {
                case "json":
                    try {
                        resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
                    } catch (err) {
                        return error(resp, "Could not parse JSON in response", err)
                    }
                    break;
                case "js":
                    resp = eval(r);
                    break;
                case "html":
                    resp = r
            }
            fn(resp), o.success && o.success(resp), complete(resp)
        }

        function error(a, b, c) {
            o.error && o.error(a, b, c), complete(a)
        }
        this.url = typeof o == "string" ? o : o.url, this.timeout = null;
        var type = o.type || setType(this.url),
            self = this;
        fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
            self.abort()
        }, o.timeout)), this.request = getRequest(o, success, error)
    }

    function reqwest(a, b) {
        return new Reqwest(a, b)
    }

    function normalize(a) {
        return a ? a.replace(/\r?\n/g, "\r\n") : ""
    }

    function serial(a, b) {
        var c = a.name,
            d = a.tagName.toLowerCase(),
            e = function(a) {
                a && !a.disabled && b(c, normalize(a.attributes.value && a.attributes.value.specified ? a.value : a.text))
            };
        if (a.disabled || !c) return;
        switch (d) {
            case "input":
                if (!/reset|button|image|file/i.test(a.type)) {
                    var f = /checkbox/i.test(a.type),
                        g = /radio/i.test(a.type),
                        h = a.value;
                    (!f && !g || a.checked) && b(c, normalize(f && h === "" ? "on" : h))
                }
                break;
            case "textarea":
                b(c, normalize(a.value));
                break;
            case "select":
                if (a.type.toLowerCase() === "select-one") e(a.selectedIndex >= 0 ? a.options[a.selectedIndex] : null);
                else
                    for (var i = 0; a.length && i < a.length; i++) a.options[i].selected && e(a.options[i])
        }
    }

    function eachFormElement() {
        var a = this,
            b, c, d, e = function(b, c) {
                for (var e = 0; e < c.length; e++) {
                    var f = b[byTag](c[e]);
                    for (d = 0; d < f.length; d++) serial(f[d], a)
                }
            };
        for (c = 0; c < arguments.length; c++) b = arguments[c], /input|select|textarea/i.test(b.tagName) && serial(b, a), e(b, ["input", "select", "textarea"])
    }

    function serializeQueryString() {
        return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
    }

    function serializeHash() {
        var a = {};
        return eachFormElement.apply(function(b, c) {
            b in a ? (a[b] && !isArray(a[b]) && (a[b] = [a[b]]), a[b].push(c)) : a[b] = c
        }, arguments), a
    }
    var win = window,
        doc = document,
        twoHundo = /^20\d$/,
        byTag = "getElementsByTagName",
        readyState = "readyState",
        contentType = "Content-Type",
        requestedWith = "X-Requested-With",
        head = doc[byTag]("head")[0],
        uniqid = 0,
        lastValue, xmlHttpRequest = "XMLHttpRequest",
        isArray = typeof Array.isArray == "function" ? Array.isArray : function(a) {
            return a instanceof Array
        },
        defaultHeaders = {
            contentType: "application/x-www-form-urlencoded",
            accept: {
                "*": "text/javascript, text/html, application/xml, text/xml, */*",
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                js: "application/javascript, text/javascript"
            },
            requestedWith: xmlHttpRequest
        },
        xhr = win[xmlHttpRequest] ? function() {
            return new XMLHttpRequest
        } : function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        };
    return Reqwest.prototype = {
        abort: function() {
            this.request.abort()
        },
        retry: function() {
            init.call(this, this.o, this.fn)
        }
    }, reqwest.serializeArray = function() {
        var a = [];
        return eachFormElement.apply(function(b, c) {
            a.push({
                name: b,
                value: c
            })
        }, arguments), a
    }, reqwest.serialize = function() {
        if (arguments.length === 0) return "";
        var a, b, c = Array.prototype.slice.call(arguments, 0);
        return a = c.pop(), a && a.nodeType && c.push(a) && (a = null), a && (a = a.type), a == "map" ? b = serializeHash : a == "array" ? b = reqwest.serializeArray : b = serializeQueryString, b.apply(null, c)
    }, reqwest.toQueryString = function(a) {
        var b = "",
            c, d = encodeURIComponent,
            e = function(a, c) {
                b += d(a) + "=" + d(c) + "&"
            };
        if (isArray(a))
            for (c = 0; a && c < a.length; c++) e(a[c].name, a[c].value);
        else
            for (var f in a) {
                if (!Object.hasOwnProperty.call(a, f)) continue;
                var g = a[f];
                if (isArray(g))
                    for (c = 0; c < g.length; c++) e(f, g[c]);
                else e(f, a[f])
            }
        return b.replace(/&$/, "").replace(/%20/g, "+")
    }, reqwest.compat = function(a, b) {
        return a && (a.type && (a.method = a.type) && delete a.type, a.dataType && (a.type = a.dataType), a.jsonpCallback && (a.jsonpCallbackName = a.jsonpCallback) && delete a.jsonpCallback, a.jsonp && (a.jsonpCallback = a.jsonp)), new Reqwest(a, b)
    }, reqwest
});
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define([], factory)
    } else {
        this.PointerTracker = this.PointerTracker || {};
        this.PointerTracker.utils = factory()
    }
})(this, function() {
    "use strict";
    var undefined, eventsMap = {
        click: "touchstart",
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    };

    function normalizeEvent(e) {
        e = e || event;
        if (!e.preventDefault) e.preventDefault = function() {
            this.returnValue = false
        };
        if (!e.stopPropagation) e.stopPropagation = function() {
            this.cancelBubble = true
        };
        return e
    }
    var addEvent = function() {
        if (document.addEventListener) {
            return function F(elem, type, callback) {
                if (!elem) {
                    return
                }
                elem = typeof elem === "string" ? $(elem) : elem;
                callback = touchEventHandler(callback, type, elem);
                if (eventsMap[type]) elem.addEventListener(eventsMap[type], callback, true);
                elem.addEventListener(type, callback, true)
            }
        } else {
            return function F(elem, type, callback) {
                if (!elem) return;
                elem = typeof elem === "string" ? $(elem) : elem;
                elem.attachEvent("on" + type, function(e) {
                    e = normalizeEvent(e);
                    return callback.call(e.target || e.srcElement, e)
                })
            }
        }
    }();
    var alreadyHandledByTouchEvent;

    function touchEventHandler(callback, type, elem) {
        var touchevent = eventsMap[type];
        if (!touchevent) return callback;
        return function(event) {
            var isTouchEvent = event.type === touchevent;
            if (alreadyHandledByTouchEvent && !isTouchEvent) {
                return alreadyHandledByTouchEvent = false
            }
            alreadyHandledByTouchEvent = isTouchEvent;
            return callback.call(this, event)
        }
    }

    function getRaf() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, rate) {
            window.setTimeout(callback, rate || 1e3 / 60)
        }
    }
    return {
        on: addEvent,
        getRaf: getRaf
    }
});
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define([], factory)
    } else {
        this.PointerTracker = this.PointerTracker || {};
        this.PointerTracker.EventEmmiter = factory()
    }
})(this, function() {
    "use strict";
    var hasOwnProperty = {}.hasOwnProperty,
        slice = [].slice;

    function EventEmmiter() {}
    EventEmmiter.mixin = function(obj) {
        var proto = EventEmmiter.prototype;
        for (var attr in EventEmmiter.prototype) {
            if (hasOwnProperty.call(proto, attr)) {
                obj[attr] = proto[attr]
            }
        }
    };
    EventEmmiter.prototype = {
        on: function(eventType, listener) {
            this._events = this._events || {};
            this._events[eventType] = this._events[eventType] || [];
            this._events[eventType].push(listener)
        },
        once: function(eventType, listener) {
            var self = this;

            function wrap() {
                listener.apply(null, arguments);
                self.off(eventType, listener)
            }
            wrap.fn = listener;
            return this.on(eventType, listener)
        },
        off: function(eventType, listener) {
            this._events = this._events || {};
            if (!listener) {
                delete this._events[eventType];
                return
            } else if (!this._events[eventType]) {
                return
            }
            var listeners = this._events[eventType],
                i, l;
            for (i = 0, l = listeners.length; i < l; i++) {
                if (listener === listeners[i] || listener === listeners[i].fn) {
                    return !!listeners.splice(i, 1)
                }
            }
        },
        emit: function(eventType) {
            if (!this._events || !this._events[eventType]) {
                return
            }
            var listeners = this._events[eventType],
                args = slice.call(arguments, 1),
                i, l;
            for (i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(null, args)
            }
        }
    };
    return EventEmmiter
});
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory(require("./utils", require("./eventEmmiter")))
    } else if (typeof define === "function" && define.amd) {
        define(["./utils", "./eventEmitter"], factory)
    } else {
        var utils = this.PointerTracker.utils,
            EventEmmiter = this.PointerTracker.EventEmmiter;
        this.PointerTracker = factory(utils, EventEmmiter)
    }
})(this, function($, EventEmmiter) {
    "use strict";
    var MIN_SQR_DIST = 4,
        isMobil = /mobil|android|ios/gi.test(navigator.userAgent),
        ticked = 0,
        IS_ANDROID_2_3 = /android 2\.\d/i.test(navigator.userAgent);

    function PointerTracker(elem, element) {
        this._element = element;
        this._elem = elem;
        this._points = {};
        this.lastClick = 0;
        this._loop = bind(moveLoop, this);
        $.on(element, "mousedown", bind(onmousedown, this));
        $.on(element, "mousemove", bind(onmousemove, this));
        $.on(element, "mouseup", bind(onmouseup, this));
        $.on(element, "mouseout", bind(onmouseup, this))
    }
    EventEmmiter.mixin(PointerTracker.prototype);
    PointerTracker.prototype.translate = function(x, y) {
        this.tx = -x;
        this.ty = -y
    };

    function onmousedown(event) {
        if (IS_ANDROID_2_3 && (new Date).getTime() - this.lastClick < 300) {
            this.lastClick = (new Date).getTime();
            return
        }
        var isTouch = event.type === "touchstart";
        stopAndPrevent(event);
        event = getCorrectEvent(event);
        this._isMousedown = true;
        this._pos = getElementPosition(this._elem);
        var start = getPointerPosition(this, event);
        this._points = {
            start: start,
            last: start,
            current: start,
            isTouch: isTouch
        };
        this.emit("down", this._points)
    }

    function onmouseup(event) {
        stopAndPrevent(event);
        ticked++;
        this._isMousedown = false;
        if (!this.mousemove && event.type === "touchend") this.emit("tap", this._points);
        event = getCorrectEvent(event);
        if (this.mousemove) this.emit("stop", this._points);
        this.emit("up", this._points);
        this.mousemove = false
    }

    function onmousemove(event) {
        stopAndPrevent(event);
        if (!this._isMousedown) {
            if (this.__ticked === ticked) ticked++;
            return
        }
        event = getCorrectEvent(event);
        this._points.current = getPointerPosition(this, event);
        if (this.mousemove || distanceSqr(this._points.start, this._points.current) > MIN_SQR_DIST) {
            if (!this.mousemove) {
                this.emit("start", this._points);
                this._points.last = this._points.start
            }
            this.mousemove = true;
            if (this.__ticked !== ticked) {
                this.__ticked = ticked;
                this._loop()
            }
        }
    }

    function moveLoop() {
        if (this.__ticked === ticked) {
            requestAnimationFrame(this._loop);
            this.emit("move", this._points);
            this._points.last = this._points.current
        }
    }
    var requestAnimationFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, rate) {
            window.setTimeout(callback, rate || 1e3 / 60)
        }
    }();

    function getPointerPosition(element, event) {
        var position = {};
        position.x = event.pageX - element._pos.x || event.offsetX || 0;
        position.y = event.pageY - element._pos.y || event.offsetY || 0;
        position.x += element.tx || 0;
        position.y += element.ty || 0;
        return position
    }

    function getCorrectEvent(event) {
        return event.touches && event.touches.length ? event.touches[0] : event
    }

    function stopAndPrevent(event) {
        event.stopPropagation();
        if (!IS_ANDROID_2_3) event.preventDefault()
    }

    function bind(fn, context) {
        return function() {
            fn.apply(context, arguments)
        }
    }

    function distanceSqr(p1, p2) {
        var x = p1.x - p2.x,
            y = p1.y - p2.y;
        return x * x + y * y
    }

    function getOffsetSum(element) {
        var curleft = 0,
            curtop = 0;
        if (element.offsetParent) {
            do {
                curleft += element.offsetLeft;
                curtop += element.offsetTop;
                alert(element.tagName + ", " + element.offsetLeft + ", " + element.offsetTop)
            } while (element = element.offsetParent)
        }
        return {
            x: curleft,
            y: curtop
        }
    }

    function getOffsetRect(elem) {
        var box = elem.getBoundingClientRect(),
            body = document.body,
            docElem = document.documentElement,
            scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
            scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + scrollTop - clientTop,
            left = box.left + scrollLeft - clientLeft;
        return {
            x: ~~left,
            y: ~~top
        }
    }

    function getElementPosition(elem) {
        if (elem.getBoundingClientRect) return getOffsetRect(elem);
        else return getOffsetSum(elem)
    }
    return PointerTracker
});
(function() {
    "use strict";
    var SPACES = /\s|\r\n|\n/,
        HORIZONTAL = 0,
        $ = game.$,
        VERTICAL = 1,
        H = 0,
        V = 0,
        min = Math.min,
        max = Math.max;

    function Board(options) {
        this.options = options;
        this.callback = options.callback;
        this.board = [];
        this._words = [];
        this.chars = {};
        this.size = options.size;
        V = 0;
        H = 0;
        for (var i = 0; i < this.size; i++) {
            this.board.push({})
        }
        var w = [];
        for (var i = 0; i < options.words.length; i++) {
            w.push(options.words[i].replace(" ", ""))
        }
        options.words = w.join(" ");
        this.addWords(options.words);
        this.fillBoard()
    }
    var proto = Board.prototype;
    proto.addWords = function(words) {
        var freq = {};
        this.words = [];
        var _words = words.split(" ");
        for (var i = 0; i < words.length; i++) {
            freq[words[i]] = (freq[words[i]] || 0) + 1
        }
        for (var i in freq) {
            this.chars[i] = []
        }
        var score = 0,
            words = words.split(SPACES),
            curW, word;
        for (var i = 0; i < words.length; i++) {
            curW = $.splitString($.trim(words[i]));
            for (var j = 0; j < words.length; j++) {
                if (words[j] === words[i]) continue;
                word = $.splitString($.trim(words[j]));
                for (var ii = 0; ii < curW.length; ii++)
                    if (curW[ii] === word[0]) {
                        score += 1;
                        break
                    }
            }
            curW.score = score;
            this.words.push(curW);
            score = 0
        }
        this.words = game.$.sort(this.words, function(a) {
            return a ? a.length : -1
        })
    };
    proto.fillBoard = function() {
        var bestScore = 0,
            bestIndex = -1,
            bestRatio = 0,
            words = this.words.slice(0),
            bestRound = words.length,
            index = 0,
            word, self = this;
        (function f() {
            self.putFirstWord(words.splice(index++, 1)[0]);
            while (words.length) {
                for (var i = 0; i < words.length; i++) {
                    var score = self.getBestScore(words[i]);
                    if (score > bestScore) {
                        bestScore = score;
                        bestIndex = i
                    }
                }
                if (bestIndex != -1) {
                    word = words.splice(bestIndex, 1)[0];
                    self.insertWord(word, word.x, word.y, word.direction)
                } else {
                    break
                }
                bestScore = 0;
                bestIndex = -1
            }
            var width = self.board.endx - self.board.inix;
            var height = self.board.endy - self.board.iniy;
            var ratio = min(width, height) / max(width, height);
            if (words.length < bestRound) {
                bestRatio = ratio;
                self.bestBoard = self.board;
                self.bestWords = self._words;
                bestRound = words.length
            }
            if (index >= self.words.length) {
                self.makeGrid();
                return
            }
            self.board = [];
            self._words = [];
            self.chars = {};
            for (var i = 0; i < self.size; i++) {
                self.board.push({})
            }
            words = self.words.slice(0);
            setTimeout(f, 1)
        })()
    };
    proto.getBestScore = function(word) {
        var bestScore = 0;
        for (var i = 0; i < word.length; i++) {
            var char = word[i];
            if (!this.chars[char]) continue;
            for (var j = 0; j < this.chars[char].length; j += 2) {
                var score = this.calcScore(word, i, this.chars[char][j], this.chars[char][j + 1]);
                if (score > bestScore) {
                    bestScore = score
                }
            }
        }
        return bestScore
    };
    var lst = VERTICAL;
    proto.calcScore = function(word, at, x, y) {
        var hScore = this.horizontalScore(word, at, x, y);
        var vScore = this.verticalScore(word, at, x, y);
        if (vScore && vScore > hScore) {
            word.x = x;
            word.y = y - at;
            word.direction = VERTICAL;
            return vScore
        } else if (hScore) {
            word.x = x - at;
            word.y = y;
            word.direction = HORIZONTAL;
            return hScore
        }
        return 0
    };
    proto.horizontalScore = function(word, at, x, y) {
        var ini = x - at,
            end = x + word.length - 1 - at,
            score = 0,
            board = this.board;
        if (ini < 0 || end >= this.size) return 0;
        if (board[ini - 1] && board[ini - 1][y] || board[end + 1] && board[end + 1][y]) {
            return 0
        }
        var i, length = word.length;
        for (i = 0; i < length; i++) {
            if (board[ini + i][y] && board[ini + i][y] === word[i]) score++;
            else if (board[ini + i][y] && board[ini + i][y] != word[i]) return 0;
            else if (!board[ini + i][y] && (board[ini + i][y + 1] || board[ini + i][y - 1])) return 0
        }
        var width = max(board.endx, end) - min(board.inix, ini),
            height = max(board.endy, y) - min(board.iniy, y);
        return score + word.score
    };
    proto.verticalScore = function(word, at, x, y) {
        var ini = y - at,
            end = y + word.length - at - 1,
            score = 0,
            board = this.board;
        if (ini < 0 || end >= this.size) return 0;
        if (board[x][ini - 1] || board[x][end + 1]) return 0;
        var i, length = word.length;
        for (i = 0; i < length; i++) {
            if (board[x][ini + i] && board[x][ini + i] === word[i]) score++;
            else if (board[x][ini + i] && board[x][ini + i] != word[i]) return 0;
            else if (!board[x][ini + i] && (board[x - 1] && board[x - 1][ini + i] || board[x + 1] && board[x + 1][ini + i])) return 0
        }
        var width = max(board.endx, x) - min(board.inix, x),
            height = max(board.endy, end) - min(board.iniy, ini);
        return score + word.score
    };
    proto.putFirstWord = function(word) {
        this.board.inix = this.board.iniy = this.size;
        this.board.endx = this.board.endy = 0;
        this.insertWord(word, 2, 0, VERTICAL)
    };
    proto.insertWord = function(word, x, y, direction) {
        var length = word.length,
            board = this.board,
            chars = this.chars,
            i;
        this._words.push({
            word: word.join(""),
            x: x,
            y: y,
            dir: direction
        });
        board.inix = min(board.inix, x);
        board.iniy = min(board.iniy, y);
        if (direction == HORIZONTAL) {
            board.endx = max(board.endx, x + length);
            board.endy = max(board.endy, y);
            for (i = 0; i < length; i++) {
                board[x + i][y] = word[i];
                (chars[word[i]] || (chars[word[i]] = [])).push(x + i, y)
            }
            H++
        } else {
            board.endx = max(board.endx, x);
            board.endy = max(board.endy, y + length);
            for (i = 0; i < length; i++) {
                board[x][y + i] = word[i];
                (chars[word[i]] || (chars[word[i]] = [])).push(x, y + i)
            }
            V++
        }
    };
    proto.makeGrid = function() {
        var grid = [],
            board = this.bestBoard;
        for (var i = board.iniy; i < board.endy; i++) {
            var row = [];
            for (var j = board.inix; j < board.endx; j++) {
                if (board[j][i]) {
                    row.push(createCell(board[j][i]))
                } else {
                    row.push(0)
                }
            }
            grid.push(row)
        }
        grid.width = board.endx;
        grid.height = board.endy;
        for (var i = 0; i < this.bestWords.length; i++) {
            this.bestWords[i].x -= board.inix;
            this.bestWords[i].y -= board.iniy
        }
        this.callback(grid, this.bestWords)
    };

    function createCell(char) {
        return {
            "char": char
        }
    }
    window.game = window.game || {};
    game.Board = Board
})();
(function() {
    var game = window.game || {},
        uuid = 0,
        APPNAME = "html5-crossword";

    function template(id) {
        var tmpl = ["", '<article id="{APPNAME}-topbar-{id}">', '    <p id="{APPNAME}-clue-{id}"><b>Select one cell to start</b></p>', '    <button data-cevent="toggle-options">options</button>', "</article>", '<div id="{APPNAME}-board-{id}" class="{APPNAME}-board">', '<div id="{APPNAME}-clue2-{id}" class="{APPNAME}-clue2 hide"></div>', "<canvas></canvas>", '    <div class="{APPNAME}-overlay" data-cevent="toggle-options"></div>', '    <div class="{APPNAME}-options">', "    <ul>", '        <li><button data-cevent="download">Download</button></li>', '        <li><button data-cevent="confirm">Solve</button></li>', '        <li class="{APPNAME}-confirm">', '        <button class="{APPNAME}-no"data-cevent="confirm">No</button>', '        <button class="{APPNAME}-yes" data-cevent="solve">Yes</button></li>', '        <li><button data-cevent="toggle-options">Close</button></li>', "    </ul>", '<div class="{APPNAME}-modal" id="{APPNAME}-modal-{id}"></div>', "    </div>", "</div>"].join("\n");
        return tmpl.replace(/\{APPNAME\}/g, APPNAME).replace(/\{id\}/g, id)
    }
    var modalTemplate = ["<h3>{title}</h3>", "<p>{message}</p>"].join("\n");

    function UI(container) {
        this.id = ++uuid;
        this.container = container;
        container.className = APPNAME;
        container.innerHTML = template(this.id);
        this.canvas = container.getElementsByTagName("canvas")[0];
        this.clueE = this.getElement("clue");
        this.clue2 = this.getElement("clue2");
        this.board = this.getElement("board");
        var toggleOptions = game.$.bind(this.toggleOptions, this);
        this.on("toggle-options", toggleOptions);
        this.on("solve", toggleOptions);
        var self = this;
        this.on("confirm", function(event) {
            game.$.toggleClass(self.board, "confirm")
        });
        initEvents(this)
    }
    game.EventEmitter.mixin(UI.prototype);
    UI.prototype.getElement = function(partialId) {
        return game.$.$("html5-crossword-" + partialId + "-" + this.id)
    };
    UI.prototype.getCanvas = function() {
        return this.canvas
    };
    UI.prototype.changeClue = function(clue) {
        this.clueE.innerHTML = clue;
        this.clue2.innerHTML = clue;
        if (game.IS_MOBILE) {
            var self = this;
            setTimeout(function() {
                game.$.removeClass(self.clue2, "hide")
            }, 1e3)
        }
    };
    UI.prototype.hideClue = function() {
        game.$.addClass(this.clue2, "hide")
    };
    UI.prototype.toggleOptions = function() {
        var self = this;
        game.$.toggleClass(this.board, "show-options");
        if (game.$.hasClass(this.board, "show-modal")) setTimeout(function() {
            game.$.removeClass(self.board, "show-modal")
        }, 1e3);
        setTimeout(function() {
            game.$.removeClass(self.board, "confirm")
        }, 600)
    };
    UI.prototype.getBoard = function() {
        return this.board
    };
    UI.prototype.setSize = function(size) {
        this.canvas.width = size;
        this.canvas.height = size;
        this.board.style.width = size + "px";
        this.board.style.height = size + "px";
        this.container.style.width = size + "px"
    };
    UI.prototype.showModal = function(options) {
        var tag, text = modalTemplate;
        for (var tag in options) {
            if (options.hasOwnProperty(tag)) text = text.replace("{" + tag + "}", options[tag])
        }
        this.getElement("modal").innerHTML = text;
        this.toggleOptions();
        game.$.addClass(this.board, "show-modal")
    };

    function initEvents(self) {
        self.container.addEventListener("click", function(event) {
            var customEvent = event.target.getAttribute("data-cevent");
            if (customEvent) {
                event.preventDefault();
                self.emit(customEvent)
            }
        })
    }
    game.UI = UI
})();
(function() {
    "use strict";
    var game = window.game || {},
        PADDING = 10,
        HORIZONTAL = 0,
        VERTICAL = 1,
        DEFAULT_CELL_SIZE = 20,
        BACKWARD = -1,
        FORWARD = 1,
        isMobile = /android|ios/i.test(navigator.userAgent),
        IS_ANDROID = /android/i.test(navigator.userAgent),
        IS_STOCK = !/firefox|chrome|opera/i.test(navigator.userAgent),
        IS_ROMAN = /^(es|en)/.test(navigator.language),
        cellStyle = {
            fillStyle: "white",
            shadowColor: "#333",
            shadowOffsetX: 3,
            shadowOffsetY: Modernizr.shadowBlurBug ? -3 : 3,
            shadowBlur: 4
        },
        borderStyle = {
            fillStyle: "black",
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0
        },
        fontStyle = {
            fillStyle: "black",
            textBaseline: "middle",
            textAlign: "center"
        };

    function Crossword(options) {
        this.options = options;
        this.ui = new game.UI(options.container);
        this.keyboard = new MobileKeyboardEvents(this.ui.getBoard());
        this.pointer = new PointerTracker(this.ui.canvas, this.keyboard.input);
        this.options.congratMsg = options.container.getAttribute("msg") || "You solved it in {time}";
        this.keyboard.on("close", game.$.bind(function() {
            this.ui.hideClue();
            this.keyboard.input.style.paddingTop = 0;
            this.clearLastSelection();
            drawBoard.call(this)
        }, this));
        game.$.bindAll(this, "pointerHandler", "keyboarHandler", "keydownHandler", "solve");
        this.pointer.on("down", this.pointerHandler);
        this.keyboard.on("key", this.keyboarHandler);
        this.keyboard.input.addEventListener("keydown", this.keydownHandler);
        window.addEventListener("resize", this.resize);
        this.ui.on("solve", this.solve);
        var self = this;
        this.ui.on("download", function() {
            var base = self.options.baseURL.split("/").slice(0, -1).join("") || ".";
            if (!self.form) {
                self.form = document.createElement("form"), self.textarea = document.createElement("textarea");
                self.form.action = base + "/download/index.php";
                self.textarea.name = "data";
                self.form.method = "post";
                self.form.appendChild(self.textarea);
                self.form.style.display = "none";
                document.body.appendChild(self.form)
            }
            var json = JSON.stringify({
                board: self.solution,
                clues: self.clues,
                title: self.options.title || "Crossword"
            });
            if (IS_ANDROID && IS_STOCK) {
                location.href = base + "/download/index.php?data=" + encodeURI(json)
            } else {
                self.textarea.value = json;
                self.form.submit()
            }
        });
        if (options.board) {
            this.board = options.board;
            return
        }
        this.createBoard(options.words)
    }
    Crossword.prototype.createBoard = function(words) {
        var self = this;
        new game.Board({
            words: game.$.values(words),
            size: this.options.size,
            callback: function(board, words) {
                self.solution = board;
                self.board = game.$.cloneBoard(board);
                self.clues = self.getClues(words);
                self.width = board.width || self.options.size;
                self.height = board.height || self.options.size;
                resize.call(self)
            }
        })
    };
    Crossword.prototype.keydownHandler = function(event) {
        var keyCode = event.keyCode,
            vx = 0,
            vy = 0,
            self = this;
        if (keyCode === 37) vx = -1;
        else if (keyCode === 39) vx = 1;
        else if (keyCode === 38) vy = -1;
        else if (keyCode === 40) vy = 1;
        else return;
        if (!this.cellExists(this.col + vx, this.row + vy)) return;
        setTimeout(function() {
            self.startTracking(self.col + vx, self.row + vy)
        })
    };
    Crossword.prototype.pointerHandler = function(points) {
        game.IS_MOBILE = isMobile = points.isTouch;
        var start = points.start,
            ty = this.getTranslation(),
            col = (start.x - PADDING) / this.CELL_SIZE | 0,
            row = (start.y - PADDING + ty) / this.CELL_SIZE | 0;
        if (!this.cellExists(col, row)) {
            return this.keyboard.close()
        }
        if (this.__finish) {
            this.col = col;
            this.row = row;
            this.highlightSelection();
            drawBoard.call(this);
            return
        }
        this.keyboard.open();
        if (game.IS_MOBILE) {
            window.scrollTo(this.pointer._pos.x, this.pointer._pos.y - 60);
            this.keyboard.input.style.paddingTop = this.getTranslation() + "px"
        }
        this.startTracking(col, row)
    };
    Crossword.prototype.keyboarHandler = function(event) {
        if (this.__finish) return;
        var chars = game.$.splitString((event.string || "").toUpperCase()),
            len = chars.length,
            text = [];
        this.clearText();
        text = this.insertChars(chars);
        if (IS_ROMAN && event.BACKSPACE && len > text.length) {
            this.getCurrentCell().char = "";
            this.keyboard.setText(text.join(""))
        }
        this.highlightSelection(true);
        drawBoard.call(this);
        if (this.isSolved()) {
            this.ui.hideClue();
            this.ui.showModal({
                title: "Congratulations",
                message: this.options.congratMsg.replace("{time}", game.$.format((new Date).getTime() - this.__start))
            });
            this.__finish = true
        }
    };
    Crossword.prototype.startTracking = function(col, row) {
        this.col = col;
        this.row = row;
        this.highlightSelection();
        this.showClue();
        this.keyboard.setText(this.getText());
        drawBoard.call(this)
    };
    Crossword.prototype.clearText = function() {
        this.setVelocity(BACKWARD);
        while (this.canGetNextCell()) {
            this.getCurrentCell().char = " ";
            this.advanceToNextCell()
        }
    };
    Crossword.prototype.insertChars = function(chars) {
        var text = [],
            char;
        this.setVelocity(1);
        while (chars.length) {
            char = chars.shift() || "";
            this.getCurrentCell().char = char;
            if (this.canGetNextCell()) {
                text.push(char);
                this.advanceToNextCell()
            }
        }
        return text
    };
    Crossword.prototype.advanceToNextCell = function() {
        this.col += this.vx;
        this.row += this.vy
    };

    function resize() {
        this.CELL_SIZE = this.options.cellStyle || DEFAULT_CELL_SIZE;
        var width = Math.max(this.width, this.height, 14);
        var size = width * this.CELL_SIZE + PADDING * 2;
        if (size > window.innerWidth) {
            var cell_size = (window.innerWidth - PADDING * 2) / width;
            size = width * cell_size + PADDING * 2;
            this.CELL_SIZE = ~~cell_size
        }
        this.fontSize = this.CELL_SIZE * .9 | 0;
        this.fontFamily = this.ui.canvas.style.fontFamily || "Arial";
        this.ui.setSize(~~size);
        drawBoard.call(this)
    }
    Crossword.prototype.getText = function() {
        var text = [];
        this.savePosition();
        this.setVelocity(BACKWARD);
        while (this.getCurrentCell()) {
            text.push(this.getCurrentCell().char || " ");
            this.advanceToNextCell()
        }
        this.restorePosition();
        return text.reverse().slice(0, -1).join("")
    };
    Crossword.prototype.setVelocity = function(v) {
        this.vx = this.curDir == HORIZONTAL ? v : 0;
        this.vy = this.curDir == VERTICAL ? v : 0
    };
    Crossword.prototype.savePosition = function() {
        this._col = this.col;
        this._row = this.row
    };
    Crossword.prototype.restorePosition = function() {
        this.col = this._col;
        this.row = this._row
    };
    Crossword.prototype.getClues = function(wordsUsed) {
        var clues = game.$.inverse(this.options.words),
            cluesUsed = {};
        for (var i = 0; i < wordsUsed.length; i++) {
            var w = wordsUsed[i];
            cluesUsed[w.x + "," + w.y + "," + w.dir] = clues[w.word]
        }
        return cluesUsed
    };
    Crossword.prototype.solve = function() {
        var attr, attr2, char;
        this.__finish = true;
        for (attr in this.board) {
            for (attr2 in this.board[attr]) {
                if (!this.solution[attr][attr2]) continue;
                char = this.solution[attr][attr2].char.toUpperCase();
                this.board[attr][attr2].char = char
            }
        }
        drawBoard.call(this)
    };
    Crossword.prototype.isIntersection = function() {
        return this.isAcross() && this.isDown()
    };
    Crossword.prototype.isAcross = function() {
        return !!(this.getCell(this.col + 1, this.row) || this.getCell(this.col - 1, this.row))
    };
    Crossword.prototype.isDown = function() {
        return !!(this.getCell(this.col, this.row + 1) || this.getCell(this.col, this.row - 1))
    };
    Crossword.prototype.canGetNextCell = function() {
        return this.getCell(this.col + this.vx, this.row + this.vy)
    };
    Crossword.prototype.cellExists = function(col, row) {
        return !!this.getCell(col, row)
    };
    Crossword.prototype.getCell = function(col, row) {
        return this.board[row] && this.board[row][col] ? this.board[row][col] : null
    };
    Crossword.prototype.getCurrentCell = function() {
        return this.getCell(this.col, this.row)
    };
    Crossword.prototype.getTranslation = function() {
        if (!isMobile || !this.keyboard.isOpen()) {
            return 0
        }
        return ~~(this.row * this.CELL_SIZE - this.CELL_SIZE * 7);
        return 0
    };
    Crossword.prototype.showClue = function() {
        var index;
        this.savePosition();
        this.setVelocity(BACKWARD);
        while (this.canGetNextCell()) {
            this.advanceToNextCell()
        }
        index = this.col + "," + this.row + "," + this.curDir;
        this.restorePosition();
        if (!this.__start) {
            this.__start = (new Date).getTime()
        }
        this.ui.changeClue(this.clues[index])
    };
    Crossword.prototype.isSolved = function() {
        var row, col, char1, char2;
        for (row in this.board) {
            if (!this.board[row]) continue;
            for (col in this.board[row]) {
                if (!this.board[row][col]) continue;
                char1 = this.board[row][col].char.toLowerCase(), char2 = this.solution[row][col].char.toLowerCase();
                if (char1 !== char2) {
                    return false
                }
            }
        }
        return true
    };
    Crossword.prototype.highlightSelection = function(isW) {
        if (!isW) this.setDirection();
        var vx = this.curDir == HORIZONTAL ? 1 : 0,
            vy = this.curDir == VERTICAL ? 1 : 0,
            currentCell = this.getCurrentCell();
        this.clearLastSelection();
        this.changeCellsColor(this.col, this.row, vx, vy, "orange");
        if (currentCell) currentCell.color = "aqua";
        this.saveState(vx, vy)
    };
    Crossword.prototype.saveState = function(vx, vy) {
        this.lastCol = this.col;
        this.lastRow = this.row;
        this._lastSelection = {
            vx: vx,
            vy: vy,
            col: this.col,
            row: this.row
        }
    };
    Crossword.prototype.clearLastSelection = function() {
        if (!this._lastSelection) return;
        var ls = this._lastSelection;
        this.changeCellsColor(ls.col, ls.row, ls.vx, ls.vy, "")
    };
    Crossword.prototype.setDirection = function() {
        var isSameCell = this.lastCol == this.col && this.lastRow == this.row;
        if (isSameCell && this.isIntersection()) {
            this.curDir = this.curDir === VERTICAL ? HORIZONTAL : VERTICAL
        } else if (this.curDir === VERTICAL) {
            this.curDir = this.isDown() ? VERTICAL : HORIZONTAL
        } else {
            this.curDir = this.isAcross() ? HORIZONTAL : VERTICAL
        }
    };
    Crossword.prototype.changeCellsColor = function(col, row, vx, vy, color) {
        if (vx > 0 || vy > 0) this.changeCellsColor(col, row, -vx, -vy, color);
        var cell;
        while (this.cellExists(col, row)) {
            this.getCell(col, row).color = color;
            col += vx;
            row += vy
        }
    };

    function drawBoard(ctx) {
        var width = this.width,
            height = this.height,
            board = this.board,
            ctx = this.ui.canvas.getContext("2d"),
            CELL_SIZE = this.CELL_SIZE,
            cell, y, x, posX, posY;
        ctx.canvas.width = ctx.canvas.width;
        ctx.font = this.fontSize + "px " + this.fontFamily;
        if (this.getTranslation()) ctx.translate(0, -this.getTranslation());
        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                if (!(board[y] && board[y][x])) continue;
                posX = PADDING + x * CELL_SIZE | 0;
                posY = PADDING + y * CELL_SIZE | 0;
                cell = board[y][x];
                drawCell.call(this, ctx, posX, posY, cell)
            }
        }
    }

    function drawCell(ctx, col, row, cell) {
        game.$.applyStyle(ctx, cellStyle);
        ctx.fillStyle = cell.color || ctx.fillStyle;
        ctx.fillRect(col, row, this.CELL_SIZE, this.CELL_SIZE);
        game.$.applyStyle(ctx, borderStyle);
        game.$.applyStyle(ctx, fontStyle);
        ctx.fillText(cell.char, col + ~~(this.fontSize * .6), row + ~~(this.fontSize * .6) + 1);
        ctx.strokeRect(col, row, this.CELL_SIZE, this.CELL_SIZE)
    }
    game.Crossword = Crossword
})();
(function() {
    Modernizr.addTest("shadowBlurBug", function() {
        var ctx = document.createElement("canvas").getContext("2d");
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "red";
        ctx.fillRect(100, 100, 30, 30);
        var data = ctx.getImageData(107, 96, 1, 1).data;
        return data[3] !== 0
    });
    var baseURL = function() {
        var scripts = document.getElementsByTagName("script");
        var src = scripts[scripts.length - 1].getAttribute("src");
        return src.split("/").slice(0, -1).join("/")
    }();

    function initialize(e) {
        var crosswords = document.getElementsByTagName("crossword"),
            GET = game.$.parseQueryString(),
            crossword, url;
        for (var i = 0; i < crosswords.length; i++) {
            crossword = crosswords[i];
            if (GET.puzzle) url = "lists/" + GET.puzzle + ".txt";
            else url = crossword.getAttribute("src");
            getCluesFromURL(crossword, url)
        }
    }

    function getCluesFromURL(crossword, url) {
        reqwest({
            url: url + "?" + (new Date).getTime(),
            type: "text",
            success: function(crossword) {
                return function(req) {
                    var data = game.$.parseData(req.response || req.responseText);
                    var cross = new game.Crossword({
                        size: 17,
                        words: data.list,
                        baseURL: baseURL,
                        title: data.options.title,
                        container: crossword
                    })
                }
            }(crossword),
            error: function() {
                throw new Error("Can't load")
            }
        })
    }
    initialize()
})();