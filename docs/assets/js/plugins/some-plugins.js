/*= ================================ 
    Appear Plugin
=================================== */

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */

(function ($) {
  $.fn.appear = function (fn, options) {
    const settings = $.extend(
      { data: undefined, one: !0, accX: 0, accY: 0 },
      options
    );
    return this.each(function () {
      const t = $(this);
      t.appeared = !1;
      if (!fn) {
        t.trigger("appear", settings.data);
        return;
      }
      const w = $(window);
      const check = function () {
        if (!t.is(":visible")) {
          t.appeared = !1;
          return;
        }
        const a = w.scrollLeft();
        const b = w.scrollTop();
        const o = t.offset();
        const x = o.left;
        const y = o.top;
        const ax = settings.accX;
        const ay = settings.accY;
        const th = t.height();
        const wh = w.height();
        const tw = t.width();
        const ww = w.width();
        if (
          y + th + ay >= b &&
          y <= b + wh + ay &&
          x + tw + ax >= a &&
          x <= a + ww + ax
        ) {
          if (!t.appeared) t.trigger("appear", settings.data);
        } else {
          t.appeared = !1;
        }
      };
      const modifiedFn = function () {
        t.appeared = !0;
        if (settings.one) {
          w.unbind("scroll", check);
          const i = $.inArray(check, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        fn.apply(this, arguments);
      };
      if (settings.one) t.one("appear", settings.data, modifiedFn);
      else t.bind("appear", settings.data, modifiedFn);
      w.scroll(check);
      $.fn.appear.checks.push(check);
      check();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll () {
      let {length} = $.fn.appear.checks;
      if (length > 0) while (length--) $.fn.appear.checks[length]();
    },
    run () {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    },
  });
  $.each(
    [
      "append",
      "prepend",
      "after",
      "before",
      "attr",
      "removeAttr",
      "addClass",
      "removeClass",
      "toggleClass",
      "remove",
      "css",
      "show",
      "hide",
    ],
    function (i, n) {
      const old = $.fn[n];
      if (old) {
        $.fn[n] = function () {
          const r = old.apply(this, arguments);
          $.fn.appear.run();
          return r;
        };
      }
    }
  );
})(jQuery);

/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 * */
const _gsScope =
  typeof module !== "undefined" && module.exports && typeof global !== "undefined"
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      const d = function (a) {
          let b;
            const c = [];
            const d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        };
        const e = function (a, b, c) {
          let d;
            let e;
            const f = a.cycle;
          for (d in f)
            (e = f[d]),
              (a[d] = typeof e === "function" ? e(c, b[c], b) : e[c % e.length]);
          delete a.cycle;
        };
        const f = function (a) {
          if (typeof a === "function") return a;
          const b = typeof a === "object" ? a : { each: a };
            const c = b.ease;
            const d = b.from || 0;
            const e = b.base || 0;
            const f = {};
            const g = isNaN(d);
            const h = b.axis;
            const i = { center: 0.5, end: 1 }[d] || 0;
          return function (a, j, k) {
            let l;
              let m;
              let n;
              let o;
              let p;
              let q;
              let r;
              let s;
              let t;
              let u = (k || b).length;
              let v = f[u];
            if (!v) {
              if (((t = b.grid === "auto" ? 0 : (b.grid || [1 / 0])[0]), !t)) {
                for (
                  r = -(1 / 0);
                  r < (r = k[t++].getBoundingClientRect().left) && u > t;

                );
                t--;
              }
              for (
                v = f[u] = [],
                  l = g ? Math.min(t, u) * i - 0.5 : d % t,
                  m = g ? (u * i) / t - 0.5 : (d / t) | 0,
                  r = 0,
                  s = 1 / 0,
                  q = 0;
                u > q;
                q++
              )
                (n = (q % t) - l),
                  (o = m - ((q / t) | 0)),
                  (v[q] = p =
                    h ? Math.abs(h === "y" ? o : n) : Math.sqrt(n * n + o * o)),
                  p > r && (r = p),
                  s > p && (s = p);
              (v.max = r - s),
                (v.min = s),
                (v.v = u =
                  b.amount ||
                  b.each *
                    (t > u
                      ? u
                      : h
                      ? h === "y"
                        ? u / t
                        : t
                      : Math.max(t, u / t)) ||
                  0),
                (v.b = u < 0 ? e - u : e);
            }
            return (
              (u = (v[a] - v.min) / v.max), v.b + (c ? c.getRatio(u) : u) * v.v
            );
          };
        };
        var g = function (a, b, d) {
          c.call(this, a, b, d),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = g.prototype.render);
        };
        const h = 1e-8;
        const i = c._internals;
        const j = i.isSelector;
        const k = i.isArray;
        const l = (g.prototype = c.to({}, 0.1, {}));
        const m = [];
      (g.version = "2.1.2"),
        (l.constructor = g),
        (l.kill()._gc = !1),
        (g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf),
        (g.getTweensOf = c.getTweensOf),
        (g.lagSmoothing = c.lagSmoothing),
        (g.ticker = c.ticker),
        (g.render = c.render),
        (g.distribute = f),
        (l.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            c.prototype.invalidate.call(this)
          );
        }),
        (l.updateTo = function (a, b) {
          let d;
            const e = this;
            const f = e.ratio;
            const g = e.vars.immediateRender || a.immediateRender;
          b &&
            e._startTime < e._timeline._time &&
            ((e._startTime = e._timeline._time),
            e._uncache(!1),
            e._gc
              ? e._enabled(!0, !1)
              : e._timeline.insert(e, e._startTime - e._delay));
          for (d in a) e.vars[d] = a[d];
          if (e._initted || g)
            if (b) (e._initted = !1), g && e.render(0, !0, !0);
            else if (
              (e._gc && e._enabled(!0, !1),
              e._notifyPluginsOfEnabled &&
                e._firstPT &&
                c._onPluginEvent("_onDisable", e),
              e._time / e._duration > 0.998)
            ) {
              const h = e._totalTime;
              e.render(0, !0, !1), (e._initted = !1), e.render(h, !0, !1);
            } else if (((e._initted = !1), e._init(), e._time > 0 || g))
              for (var i, j = 1 / (1 - f), k = e._firstPT; k; )
                (i = k.s + k.c), (k.c *= j), (k.s = i - k.c), (k = k._next);
          return e;
        }),
        (l.render = function (a, b, d) {
          this._initted ||
            (this._duration === 0 && this.vars.repeat && this.invalidate());
          let e;
            let f;
            let g;
            let j;
            let k;
            let l;
            let m;
            let n;
            let o;
            const p = this;
            const q = p._dirty ? p.totalDuration() : p._totalDuration;
            const r = p._time;
            const s = p._totalTime;
            const t = p._cycle;
            const u = p._duration;
            const v = p._rawPrevTime;
          if (
            (a >= q - h && a >= 0
              ? ((p._totalTime = q),
                (p._cycle = p._repeat),
                p._yoyo && (1 & p._cycle) !== 0
                  ? ((p._time = 0),
                    (p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0))
                  : ((p._time = u),
                    (p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1)),
                p._reversed ||
                  ((e = !0),
                  (f = "onComplete"),
                  (d = d || p._timeline.autoRemoveChildren)),
                u === 0 &&
                  (p._initted || !p.vars.lazy || d) &&
                  (p._startTime === p._timeline._duration && (a = 0),
                  (v < 0 ||
                    (a <= 0 && a >= -h) ||
                    (v === h && p.data !== "isPause")) &&
                    v !== a &&
                    ((d = !0), v > h && (f = "onReverseComplete")),
                  (p._rawPrevTime = n = !b || a || v === a ? a : h)))
              : h > a
              ? ((p._totalTime = p._time = p._cycle = 0),
                (p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0),
                (s !== 0 || (u === 0 && v > 0)) &&
                  ((f = "onReverseComplete"), (e = p._reversed)),
                a > -h
                  ? (a = 0)
                  : a < 0 &&
                    ((p._active = !1),
                    u === 0 &&
                      (p._initted || !p.vars.lazy || d) &&
                      (v >= 0 && (d = !0),
                      (p._rawPrevTime = n = !b || a || v === a ? a : h))),
                p._initted || (d = !0))
              : ((p._totalTime = p._time = a),
                p._repeat !== 0 &&
                  ((j = u + p._repeatDelay),
                  (p._cycle = (p._totalTime / j) >> 0),
                  p._cycle !== 0 &&
                    p._cycle === p._totalTime / j &&
                    a >= s &&
                    p._cycle--,
                  (p._time = p._totalTime - p._cycle * j),
                  p._yoyo &&
                    (1 & p._cycle) !== 0 &&
                    ((p._time = u - p._time),
                    (o = p._yoyoEase || p.vars.yoyoEase),
                    o &&
                      (p._yoyoEase ||
                        (o !== !0 || p._initted
                          ? (p._yoyoEase = o =
                              o === !0
                                ? p._ease
                                : o instanceof Ease
                                ? o
                                : Ease.map[o])
                          : ((o = p.vars.ease),
                            (p._yoyoEase = o =
                              o
                                ? o instanceof Ease
                                  ? o
                                  : typeof o === "function"
                                  ? new Ease(o, p.vars.easeParams)
                                  : Ease.map[o] || c.defaultEase
                                : c.defaultEase))),
                      (p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0))),
                  p._time > u ? (p._time = u) : p._time < 0 && (p._time = 0)),
                p._easeType && !o
                  ? ((k = p._time / u),
                    (l = p._easeType),
                    (m = p._easePower),
                    (l === 1 || (l === 3 && k >= 0.5)) && (k = 1 - k),
                    l === 3 && (k *= 2),
                    m === 1
                      ? (k *= k)
                      : m === 2
                      ? (k *= k * k)
                      : m === 3
                      ? (k *= k * k * k)
                      : m === 4 && (k *= k * k * k * k),
                    (p.ratio =
                      l === 1
                        ? 1 - k
                        : l === 2
                        ? k
                        : p._time / u < 0.5
                        ? k / 2
                        : 1 - k / 2))
                  : o || (p.ratio = p._ease.getRatio(p._time / u))),
            r === p._time && !d && t === p._cycle)
          )
            return void (
              s !== p._totalTime &&
              p._onUpdate &&
              (b || p._callback("onUpdate"))
            );
          if (!p._initted) {
            if ((p._init(), !p._initted || p._gc)) return;
            if (
              !d &&
              p._firstPT &&
              ((p.vars.lazy !== !1 && p._duration) ||
                (p.vars.lazy && !p._duration))
            )
              return (
                (p._time = r),
                (p._totalTime = s),
                (p._rawPrevTime = v),
                (p._cycle = t),
                i.lazyTweens.push(p),
                void (p._lazy = [a, b])
              );
            !p._time || e || o
              ? e &&
                this._ease._calcEnd &&
                !o &&
                (p.ratio = p._ease.getRatio(p._time === 0 ? 0 : 1))
              : (p.ratio = p._ease.getRatio(p._time / u));
          }
          for (
            p._lazy !== !1 && (p._lazy = !1),
              p._active ||
                (!p._paused && p._time !== r && a >= 0 && (p._active = !0)),
              s === 0 &&
                (p._initted === 2 && a > 0 && p._init(),
                p._startAt &&
                  (a >= 0
                    ? p._startAt.render(a, !0, d)
                    : f || (f = "_dummyGS")),
                p.vars.onStart &&
                  (p._totalTime !== 0 || u === 0) &&
                  (b || p._callback("onStart"))),
              g = p._firstPT;
            g;

          )
            g.f
              ? g.t[g.p](g.c * p.ratio + g.s)
              : (g.t[g.p] = g.c * p.ratio + g.s),
              (g = g._next);
          p._onUpdate &&
            (a < 0 && p._startAt && p._startTime && p._startAt.render(a, !0, d),
            b || ((p._totalTime !== s || f) && p._callback("onUpdate"))),
            p._cycle !== t &&
              (b || p._gc || (p.vars.onRepeat && p._callback("onRepeat"))),
            f &&
              (!p._gc || d) &&
              (a < 0 &&
                p._startAt &&
                !p._onUpdate &&
                p._startTime &&
                p._startAt.render(a, !0, d),
              e &&
                (p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                (p._active = !1)),
              !b && p.vars[f] && p._callback(f),
              u === 0 &&
                p._rawPrevTime === h &&
                n !== h &&
                (p._rawPrevTime = 0));
        }),
        (g.to = function (a, b, c) {
          return new g(a, b, c);
        }),
        (g.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = c.immediateRender != 0),
            new g(a, b, c)
          );
        }),
        (g.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              d.immediateRender != 0 && c.immediateRender != 0),
            new g(a, b, d)
          );
        }),
        (g.staggerTo = g.allTo =
          function (a, b, h, i, l, n, o) {
            let p;
              let q;
              let r;
              let s;
              const t = [];
              const u = f(h.stagger || i);
              const v = h.cycle;
              let w = (h.startAt || m).cycle;
            for (
              k(a) ||
                (typeof a === "string" && (a = c.selector(a) || a),
                j(a) && (a = d(a))),
                a = a || [],
                p = a.length - 1,
                r = 0;
              p >= r;
              r++
            ) {
              q = {};
              for (s in h) q[s] = h[s];
              if (
                (v &&
                  (e(q, a, r),
                  q.duration != null && ((b = q.duration), delete q.duration)),
                w)
              ) {
                w = q.startAt = {};
                for (s in h.startAt) w[s] = h.startAt[s];
                e(q.startAt, a, r);
              }
              (q.delay = u(r, a[r], a) + (q.delay || 0)),
                r === p &&
                  l &&
                  (q.onComplete = function () {
                    h.onComplete &&
                      h.onComplete.apply(h.onCompleteScope || this, arguments),
                      l.apply(o || h.callbackScope || this, n || m);
                  }),
                (t[r] = new g(a[r], b, q));
            }
            return t;
          }),
        (g.staggerFrom = g.allFrom =
          function (a, b, c, d, e, f, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = c.immediateRender != 0),
              g.staggerTo(a, b, c, d, e, f, h)
            );
          }),
        (g.staggerFromTo = g.allFromTo =
          function (a, b, c, d, e, f, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                d.immediateRender != 0 && c.immediateRender != 0),
              g.staggerTo(a, b, d, e, f, h, i)
            );
          }),
        (g.delayedCall = function (a, b, c, d, e) {
          return new g(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (g.set = function (a, b) {
          return new g(a, 0, b);
        }),
        (g.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0;
        });
      var n = function (a, b) {
          for (var d = [], e = 0, f = a._first; f; )
            f instanceof c
              ? (d[e++] = f)
              : (b && (d[e++] = f), (d = d.concat(n(f, b))), (e = d.length)),
              (f = f._next);
          return d;
        };
        const o = (g.getAllTweens = function (b) {
          return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b));
        });
      (g.killAll = function (a, c, d, e) {
        c == null && (c = !0), d == null && (d = !0);
        let f;
          let g;
          let h;
          const i = o(e != 0);
          const j = i.length;
          const k = c && d && e;
        for (h = 0; j > h; h++)
          (g = i[h]),
            (k ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              (a
                ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                : g._enabled(!1, !1));
      }),
        (g.killChildTweensOf = function (a, b) {
          if (a != null) {
            let e;
              let f;
              let h;
              let l;
              let m;
              const n = i.tweenLookup;
            if (
              (typeof a === "string" && (a = c.selector(a) || a),
              j(a) && (a = d(a)),
              k(a))
            )
              for (l = a.length; --l > -1; ) g.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (h in n)
                for (f = n[h].target.parentNode; f; )
                  f === a && (e = e.concat(n[h].tweens)), (f = f.parentNode);
              for (m = e.length, l = 0; m > l; l++)
                b && e[l].totalTime(e[l].totalDuration()),
                  e[l]._enabled(!1, !1);
            }
          }
        });
      const p = function (a, c, d, e) {
        (c = c !== !1), (d = d !== !1), (e = e !== !1);
        for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1; )
          (g = h[j]),
            (i ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              g.paused(a);
      };
      return (
        (g.pauseAll = function (a, b, c) {
          p(!0, a, b, c);
        }),
        (g.resumeAll = function (a, b, c) {
          p(!1, a, b, c);
        }),
        (g.globalTimeScale = function (b) {
          let d = a._rootTimeline;
            let e = c.ticker.time;
          return arguments.length
            ? ((b = b || h),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d = a._rootFramesTimeline),
              (e = c.ticker.frame),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d._timeScale = a._rootTimeline._timeScale = b),
              b)
            : d._timeScale;
        }),
        (l.progress = function (a, b) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && (1 & this._cycle) !== 0 ? 1 - a : a) +
                  this._cycle * (this._duration + this._repeatDelay),
                b
              )
            : this._time / this.duration();
        }),
        (l.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * a, b)
            : this._totalTime / this.totalDuration();
        }),
        (l.time = function (a, b) {
          if (!arguments.length) return this._time;
          this._dirty && this.totalDuration();
          const c = this._duration;
            const d = this._cycle;
            const e = d * (c + this._repeatDelay);
          return (
            a > c && (a = c),
            this.totalTime(
              this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a,
              b
            )
          );
        }),
        (l.duration = function (b) {
          return arguments.length
            ? a.prototype.duration.call(this, b)
            : this._duration;
        }),
        (l.totalDuration = function (a) {
          return arguments.length
            ? this._repeat === -1
              ? this
              : this.duration(
                  (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  this._repeat === -1
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (l.repeat = function (a) {
          return arguments.length
            ? ((this._repeat = a), this._uncache(!0))
            : this._repeat;
        }),
        (l.repeatDelay = function (a) {
          return arguments.length
            ? ((this._repeatDelay = a), this._uncache(!0))
            : this._repeatDelay;
        }),
        (l.yoyo = function (a) {
          return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
        }),
        g
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        const d = function (a) {
            b.call(this, a);
            let c;
              let d;
              const e = this;
              const f = e.vars;
            (e._labels = {}),
              (e.autoRemoveChildren = !!f.autoRemoveChildren),
              (e.smoothChildTiming = !!f.smoothChildTiming),
              (e._sortChildren = !0),
              (e._onUpdate = f.onUpdate);
            for (d in f)
              (c = f[d]),
                i(c) &&
                  c.join("").indexOf("{self}") !== -1 &&
                  (f[d] = e._swapSelfInParams(c));
            i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
          };
          const e = 1e-8;
          const f = c._internals;
          const g = (d._internals = {});
          const h = f.isSelector;
          var i = f.isArray;
          const j = f.lazyTweens;
          const k = f.lazyRender;
          const l = _gsScope._gsDefine.globals;
          const m = function (a) {
            let b;
              const c = {};
            for (b in a) c[b] = a[b];
            return c;
          };
          const n = function (a, b, c) {
            let d;
              let e;
              const f = a.cycle;
            for (d in f)
              (e = f[d]),
                (a[d] =
                  typeof e === "function" ? e(c, b[c], b) : e[c % e.length]);
            delete a.cycle;
          };
          const o = (g.pauseCallback = function () {});
          const p = function (a) {
            let b;
              const c = [];
              const d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c;
          };
          const q = function (a, b, c, d) {
            const e = "immediateRender";
            return e in b || (b[e] = !((c && c[e] === !1) || d)), b;
          };
          const r = function (a) {
            if (typeof a === "function") return a;
            const b = typeof a === "object" ? a : { each: a };
              const c = b.ease;
              const d = b.from || 0;
              const e = b.base || 0;
              const f = {};
              const g = isNaN(d);
              const h = b.axis;
              const i = { center: 0.5, end: 1 }[d] || 0;
            return function (a, j, k) {
              let l;
                let m;
                let n;
                let o;
                let p;
                let q;
                let r;
                let s;
                let t;
                let u = (k || b).length;
                let v = f[u];
              if (!v) {
                if (
                  ((t = b.grid === "auto" ? 0 : (b.grid || [1 / 0])[0]), !t)
                ) {
                  for (
                    r = -(1 / 0);
                    r < (r = k[t++].getBoundingClientRect().left) && u > t;

                  );
                  t--;
                }
                for (
                  v = f[u] = [],
                    l = g ? Math.min(t, u) * i - 0.5 : d % t,
                    m = g ? (u * i) / t - 0.5 : (d / t) | 0,
                    r = 0,
                    s = 1 / 0,
                    q = 0;
                  u > q;
                  q++
                )
                  (n = (q % t) - l),
                    (o = m - ((q / t) | 0)),
                    (v[q] = p =
                      h
                        ? Math.abs(h === "y" ? o : n)
                        : Math.sqrt(n * n + o * o)),
                    p > r && (r = p),
                    s > p && (s = p);
                (v.max = r - s),
                  (v.min = s),
                  (v.v = u =
                    b.amount ||
                    b.each *
                      (t > u
                        ? u
                        : h
                        ? h === "y"
                          ? u / t
                          : t
                        : Math.max(t, u / t)) ||
                    0),
                  (v.b = u < 0 ? e - u : e);
              }
              return (
                (u = (v[a] - v.min) / v.max),
                v.b + (c ? c.getRatio(u) : u) * v.v
              );
            };
          };
          const s = (d.prototype = new b());
        return (
          (d.version = "2.1.2"),
          (d.distribute = r),
          (s.constructor = d),
          (s.kill()._gc = s._forcingPlayhead = s._hasPause = !1),
          (s.to = function (a, b, d, e) {
            const f = (d.repeat && l.TweenMax) || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
          }),
          (s.from = function (a, b, d, e) {
            return this.add(
              ((d.repeat && l.TweenMax) || c).from(a, b, q(this, d)),
              e
            );
          }),
          (s.fromTo = function (a, b, d, e, f) {
            const g = (e.repeat && l.TweenMax) || c;
            return (
              (e = q(this, e, d)),
              b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
            );
          }),
          (s.staggerTo = function (a, b, e, f, g, i, j, k) {
            let l;
              let o;
              const q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming,
              });
              const s = r(e.stagger || f);
              const t = e.startAt;
              const u = e.cycle;
            for (
              typeof a === "string" && (a = c.selector(a) || a),
                a = a || [],
                h(a) && (a = p(a)),
                o = 0;
              o < a.length;
              o++
            )
              (l = m(e)),
                t && ((l.startAt = m(t)), t.cycle && n(l.startAt, a, o)),
                u &&
                  (n(l, a, o),
                  l.duration != null && ((b = l.duration), delete l.duration)),
                q.to(a[o], b, l, s(o, a[o], a));
            return this.add(q, g);
          }),
          (s.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return (
              (c.runBackwards = !0),
              this.staggerTo(a, b, q(this, c), d, e, f, g, h)
            );
          }),
          (s.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return (
              (d.startAt = c),
              this.staggerTo(a, b, q(this, d, c), e, f, g, h, i)
            );
          }),
          (s.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
          }),
          (s.set = function (a, b, d) {
            return this.add(new c(a, 0, q(this, b, null, !0)), d);
          }),
          (d.exportRoot = function (a, b) {
            (a = a || {}),
              a.smoothChildTiming == null && (a.smoothChildTiming = !0);
            let e;
              let f;
              let g;
              let h;
              const i = new d(a);
              const j = i._timeline;
            for (
              b == null && (b = !0),
                j._remove(i, !0),
                i._startTime = 0,
                i._rawPrevTime = i._time = i._totalTime = j._time,
                g = j._first;
              g;

            )
              (h = g._next),
                (b && g instanceof c && g.target === g.vars.onComplete) ||
                  ((f = g._startTime - g._delay),
                  f < 0 && (e = 1),
                  i.add(g, f)),
                (g = h);
            return j.add(i, 0), e && i.totalDuration(), i;
          }),
          (s.add = function (e, f, g, h) {
            let j;
              let k;
              let l;
              let m;
              let n;
              let o;
              const p = this;
            if (
              (typeof f !== "number" && (f = p._parseTimeOrLabel(f, 0, !0, e)),
              !(e instanceof a))
            ) {
              if (e instanceof Array || (e && e.push && i(e))) {
                for (
                  g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                  k > l;
                  l++
                )
                  i((m = e[l])) && (m = new d({ tweens: m })),
                    p.add(m, j),
                    typeof m !== "string" &&
                      typeof m !== "function" &&
                      (g === "sequence"
                        ? (j = m._startTime + m.totalDuration() / m._timeScale)
                        : g === "start" && (m._startTime -= m.delay())),
                    (j += h);
                return p._uncache(!0);
              }
              if (typeof e === "string") return p.addLabel(e, f);
              if (typeof e !== "function")
                throw (
                  `Cannot add ${ 
                  e 
                  } into the timeline; it is not a tween, timeline, function, or string.`
                );
              e = c.delayedCall(0, e);
            }
            if (
              (b.prototype.add.call(p, e, f),
              (e._time || (!e._duration && e._initted)) &&
                ((j = (p.rawTime() - e._startTime) * e._timeScale),
                (!e._duration ||
                  Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) -
                    e._totalTime >
                    1e-5) &&
                  e.render(j, !1, !1)),
              (p._gc || p._time === p._duration) &&
                !p._paused &&
                p._duration < p.duration())
            )
              for (n = p, o = n.rawTime() > e._startTime; n._timeline; )
                o && n._timeline.smoothChildTiming
                  ? n.totalTime(n._totalTime, !0)
                  : n._gc && n._enabled(!0, !1),
                  (n = n._timeline);
            return p;
          }),
          (s.remove = function (b) {
            if (b instanceof a) {
              this._remove(b, !1);
              const c = (b._timeline = b.vars.useFrames
                ? a._rootFramesTimeline
                : a._rootTimeline);
              return (
                (b._startTime =
                  (b._paused ? b._pauseTime : c._time) -
                  (b._reversed
                    ? b.totalDuration() - b._totalTime
                    : b._totalTime) /
                    b._timeScale),
                this
              );
            }
            if (b instanceof Array || (b && b.push && i(b))) {
              for (let d = b.length; --d > -1; ) this.remove(b[d]);
              return this;
            }
            return typeof b === "string"
              ? this.removeLabel(b)
              : this.kill(null, b);
          }),
          (s._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            const d = this._last;
            return (
              d
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (s.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
          }),
          (s.insert = s.insertMultiple =
            function (a, b, c, d) {
              return this.add(a, b || 0, c, d);
            }),
          (s.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
          }),
          (s.addLabel = function (a, b) {
            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
          }),
          (s.addPause = function (a, b, d, e) {
            const f = c.delayedCall(0, o, d, e || this);
            return (
              (f.vars.onComplete = f.vars.onReverseComplete = b),
              (f.data = "isPause"),
              (this._hasPause = !0),
              this.add(f, a)
            );
          }),
          (s.removeLabel = function (a) {
            return delete this._labels[a], this;
          }),
          (s.getLabelTime = function (a) {
            return this._labels[a] != null ? this._labels[a] : -1;
          }),
          (s._parseTimeOrLabel = function (b, c, d, e) {
            let f; let g;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || (e.push && i(e))))
              for (g = e.length; --g > -1; )
                e[g] instanceof a &&
                  e[g].timeline === this &&
                  this.remove(e[g]);
            if (
              ((f =
                typeof b !== "number" || c
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              typeof c === "string")
            )
              return this._parseTimeOrLabel(
                c,
                d && typeof b === "number" && this._labels[c] == null
                  ? b - f
                  : 0,
                d
              );
            if (
              ((c = c || 0),
              typeof b !== "string" || (!isNaN(b) && this._labels[b] == null))
            )
              b == null && (b = f);
            else {
              if (((g = b.indexOf("=")), g === -1))
                return this._labels[b] == null
                  ? d
                    ? (this._labels[b] = f + c)
                    : c
                  : this._labels[b] + c;
              (c =
                parseInt(`${b.charAt(g - 1)  }1`, 10) * Number(b.substr(g + 1))),
                (b =
                  g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
            }
            return Number(b) + c;
          }),
          (s.seek = function (a, b) {
            return this.totalTime(
              typeof a === "number" ? a : this._parseTimeOrLabel(a),
              b !== !1
            );
          }),
          (s.stop = function () {
            return this.paused(!0);
          }),
          (s.gotoAndPlay = function (a, b) {
            return this.play(a, b);
          }),
          (s.gotoAndStop = function (a, b) {
            return this.pause(a, b);
          }),
          (s.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            let d;
              let f;
              let g;
              let h;
              let i;
              let l;
              let m;
              let n;
              const o = this;
              const p = o._time;
              const q = o._dirty ? o.totalDuration() : o._totalDuration;
              const r = o._startTime;
              const s = o._timeScale;
              const t = o._paused;
            if ((p !== o._time && (a += o._time - p), a >= q - e && a >= 0))
              (o._totalTime = o._time = q),
                o._reversed ||
                  o._hasPausedChild() ||
                  ((f = !0),
                  (h = "onComplete"),
                  (i = !!o._timeline.autoRemoveChildren),
                  o._duration === 0 &&
                    ((a <= 0 && a >= -e) ||
                      o._rawPrevTime < 0 ||
                      o._rawPrevTime === e) &&
                    o._rawPrevTime !== a &&
                    o._first &&
                    ((i = !0),
                    o._rawPrevTime > e && (h = "onReverseComplete"))),
                (o._rawPrevTime =
                  o._duration || !b || a || o._rawPrevTime === a ? a : e),
                (a = q + 1e-4);
            else if (e > a)
              if (
                ((o._totalTime = o._time = 0),
                a > -e && (a = 0),
                (p !== 0 ||
                  (o._duration === 0 &&
                    o._rawPrevTime !== e &&
                    (o._rawPrevTime > 0 || (a < 0 && o._rawPrevTime >= 0)))) &&
                  ((h = "onReverseComplete"), (f = o._reversed)),
                a < 0)
              )
                (o._active = !1),
                  o._timeline.autoRemoveChildren && o._reversed
                    ? ((i = f = !0), (h = "onReverseComplete"))
                    : o._rawPrevTime >= 0 && o._first && (i = !0),
                  (o._rawPrevTime = a);
              else {
                if (
                  ((o._rawPrevTime =
                    o._duration || !b || a || o._rawPrevTime === a ? a : e),
                  a === 0 && f)
                )
                  for (d = o._first; d && d._startTime === 0; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), o._initted || (i = !0);
              }
            else {
              if (o._hasPause && !o._forcingPlayhead && !b) {
                if (a >= p)
                  for (d = o._first; d && d._startTime <= a && !l; )
                    d._duration ||
                      d.data !== "isPause" ||
                      d.ratio ||
                      (d._startTime === 0 && o._rawPrevTime === 0) ||
                      (l = d),
                      (d = d._next);
                else
                  for (d = o._last; d && d._startTime >= a && !l; )
                    d._duration ||
                      (d.data === "isPause" && d._rawPrevTime > 0 && (l = d)),
                      (d = d._prev);
                l &&
                  ((o._time = o._totalTime = a = l._startTime),
                  (n = o._startTime + a / o._timeScale));
              }
              o._totalTime = o._time = o._rawPrevTime = a;
            }
            if ((o._time !== p && o._first) || c || i || l) {
              if (
                (o._initted || (o._initted = !0),
                o._active ||
                  (!o._paused && o._time !== p && a > 0 && (o._active = !0)),
                p === 0 &&
                  o.vars.onStart &&
                  ((o._time === 0 && o._duration) ||
                    b ||
                    o._callback("onStart")),
                (m = o._time),
                m >= p)
              )
                for (
                  d = o._first;
                  d && ((g = d._next), m === o._time && (!o._paused || t));

                )
                  (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                    (l === d && (o.pause(), (o._pauseTime = n)),
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = g);
              else
                for (
                  d = o._last;
                  d && ((g = d._prev), m === o._time && (!o._paused || t));

                ) {
                  if (
                    d._active ||
                    (d._startTime <= p && !d._paused && !d._gc)
                  ) {
                    if (l === d) {
                      for (l = d._prev; l && l.endTime() > o._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (a - l._startTime) * l._timeScale
                            : (a - l._startTime) * l._timeScale,
                          b,
                          c
                        ),
                          (l = l._prev);
                      (l = null), o.pause(), (o._pauseTime = n);
                    }
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c);
                  }
                  d = g;
                }
              o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))),
                h &&
                  (o._gc ||
                    ((r === o._startTime || s !== o._timeScale) &&
                      (o._time === 0 || q >= o.totalDuration()) &&
                      (f &&
                        (j.length && k(),
                        o._timeline.autoRemoveChildren && o._enabled(!1, !1),
                        (o._active = !1)),
                      !b && o.vars[h] && o._callback(h))));
            }
          }),
          (s._hasPausedChild = function () {
            for (let a = this._first; a; ) {
              if (a._paused || (a instanceof d && a._hasPausedChild()))
                return !0;
              a = a._next;
            }
            return !1;
          }),
          (s.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
              g._startTime < e ||
                (g instanceof c
                  ? b !== !1 && (f[h++] = g)
                  : (d !== !1 && (f[h++] = g),
                    a !== !1 &&
                      ((f = f.concat(g.getChildren(!0, b, d))),
                      (h = f.length)))),
                (g = g._next);
            return f;
          }),
          (s.getTweensOf = function (a, b) {
            let d;
              let e;
              const f = this._gc;
              const g = [];
              let h = 0;
            for (
              f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
              --e > -1;

            )
              (d[e].timeline === this || (b && this._contains(d[e]))) &&
                (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
          }),
          (s.recent = function () {
            return this._recent;
          }),
          (s._contains = function (a) {
            for (let b = a.timeline; b; ) {
              if (b === this) return !0;
              b = b.timeline;
            }
            return !1;
          }),
          (s.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
              e._startTime >= c && (e._startTime += a), (e = e._next);
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
          }),
          (s._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (
              var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                d = c.length,
                e = !1;
              --d > -1;

            )
              c[d]._kill(a, b) && (e = !0);
            return e;
          }),
          (s.clear = function (a) {
            const b = this.getChildren(!1, !0, !0);
              let c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
              b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (s.invalidate = function () {
            for (let b = this._first; b; ) b.invalidate(), (b = b._next);
            return a.prototype.invalidate.call(this);
          }),
          (s._enabled = function (a, c) {
            if (a === this._gc)
              for (let d = this._first; d; ) d._enabled(a, !0), (d = d._next);
            return b.prototype._enabled.call(this, a, c);
          }),
          (s.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            const e = a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (s.duration = function (a) {
            return arguments.length
              ? (this.duration() !== 0 &&
                  a !== 0 &&
                  this.timeScale(this._duration / a),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (s.totalDuration = function (a) {
            if (!arguments.length) {
              if (this._dirty) {
                for (
                  var b, c, d = 0, e = this, f = e._last, g = 999999999999;
                  f;

                )
                  (b = f._prev),
                    f._dirty && f.totalDuration(),
                    f._startTime > g &&
                    e._sortChildren &&
                    !f._paused &&
                    !e._calculatingDuration
                      ? ((e._calculatingDuration = 1),
                        e.add(f, f._startTime - f._delay),
                        (e._calculatingDuration = 0))
                      : (g = f._startTime),
                    f._startTime < 0 &&
                      !f._paused &&
                      ((d -= f._startTime),
                      e._timeline.smoothChildTiming &&
                        ((e._startTime += f._startTime / e._timeScale),
                        (e._time -= f._startTime),
                        (e._totalTime -= f._startTime),
                        (e._rawPrevTime -= f._startTime)),
                      e.shiftChildren(-f._startTime, !1, -9999999999),
                      (g = 0)),
                    (c = f._startTime + f._totalDuration / f._timeScale),
                    c > d && (d = c),
                    (f = b);
                (e._duration = e._totalDuration = d), (e._dirty = !1);
              }
              return this._totalDuration;
            }
            return a && this.totalDuration()
              ? this.timeScale(this._totalDuration / a)
              : this;
          }),
          (s.paused = function (b) {
            if (b === !1 && this._paused)
              for (let c = this._first; c; )
                c._startTime === this._time &&
                  c.data === "isPause" &&
                  (c._rawPrevTime = 0),
                  (c = c._next);
            return a.prototype.paused.apply(this, arguments);
          }),
          (s.usesFrames = function () {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
          }),
          (s.rawTime = function (a) {
            return a &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (a, b, c) {
        const d = function (b) {
            a.call(this, b),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !!this.vars.yoyo),
              (this._dirty = !0);
          };
          const e = 1e-8;
          const f = b._internals;
          const g = f.lazyTweens;
          const h = f.lazyRender;
          const i = _gsScope._gsDefine.globals;
          const j = new c(null, null, 1, 0);
          const k = (d.prototype = new a());
        return (
          (k.constructor = d),
          (k.kill()._gc = !1),
          (d.version = "2.1.2"),
          (k.invalidate = function () {
            return (
              (this._yoyo = !!this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              a.prototype.invalidate.call(this)
            );
          }),
          (k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
          }),
          (k.removeCallback = function (a, b) {
            if (a)
              if (b == null) this._kill(null, a);
              else
                for (
                  let c = this.getTweensOf(a, !1),
                    d = c.length,
                    e = this._parseTimeOrLabel(b);
                  --d > -1;

                )
                  c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
          }),
          (k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
          }),
          (k.tweenTo = function (a, c) {
            c = c || {};
            let d;
              let e;
              let f;
              const g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              };
              const h = (c.repeat && i.TweenMax) || b;
            for (e in c) g[e] = c[e];
            return (
              (g.time = this._parseTimeOrLabel(a)),
              (d =
                Math.abs(Number(g.time) - this._time) / this._timeScale ||
                0.001),
              (f = new h(this, d, g)),
              (g.onStart = function () {
                f.target.paused(!0),
                  f.vars.time === f.target.time() ||
                    d !== f.duration() ||
                    f.isFromTo ||
                    f
                      .duration(
                        Math.abs(f.vars.time - f.target.time()) /
                          f.target._timeScale
                      )
                      .render(f.time(), !0, !0),
                  c.onStart &&
                    c.onStart.apply(
                      c.onStartScope || c.callbackScope || f,
                      c.onStartParams || []
                    );
              }),
              f
            );
          }),
          (k.tweenFromTo = function (a, b, c) {
            (c = c || {}),
              (a = this._parseTimeOrLabel(a)),
              (c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this,
              }),
              (c.immediateRender = c.immediateRender !== !1);
            const d = this.tweenTo(b, c);
            return (
              (d.isFromTo = 1),
              d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001)
            );
          }),
          (k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            let d;
              let f;
              let i;
              let j;
              let k;
              let l;
              let m;
              let n;
              let o;
              const p = this;
              let q = p._time;
              const r = p._dirty ? p.totalDuration() : p._totalDuration;
              const s = p._duration;
              const t = p._totalTime;
              const u = p._startTime;
              const v = p._timeScale;
              const w = p._rawPrevTime;
              const x = p._paused;
              const y = p._cycle;
            if ((q !== p._time && (a += p._time - q), a >= r - e && a >= 0))
              p._locked || ((p._totalTime = r), (p._cycle = p._repeat)),
                p._reversed ||
                  p._hasPausedChild() ||
                  ((f = !0),
                  (j = "onComplete"),
                  (k = !!p._timeline.autoRemoveChildren),
                  p._duration === 0 &&
                    ((a <= 0 && a >= -e) || w < 0 || w === e) &&
                    w !== a &&
                    p._first &&
                    ((k = !0), w > e && (j = "onReverseComplete"))),
                (p._rawPrevTime =
                  p._duration || !b || a || p._rawPrevTime === a ? a : e),
                p._yoyo && 1 & p._cycle
                  ? (p._time = a = 0)
                  : ((p._time = s), (a = s + 1e-4));
            else if (e > a)
              if (
                (p._locked || (p._totalTime = p._cycle = 0),
                (p._time = 0),
                a > -e && (a = 0),
                (q !== 0 ||
                  (s === 0 &&
                    w !== e &&
                    (w > 0 || (a < 0 && w >= 0)) &&
                    !p._locked)) &&
                  ((j = "onReverseComplete"), (f = p._reversed)),
                a < 0)
              )
                (p._active = !1),
                  p._timeline.autoRemoveChildren && p._reversed
                    ? ((k = f = !0), (j = "onReverseComplete"))
                    : w >= 0 && p._first && (k = !0),
                  (p._rawPrevTime = a);
              else {
                if (
                  ((p._rawPrevTime =
                    s || !b || a || p._rawPrevTime === a ? a : e),
                  a === 0 && f)
                )
                  for (d = p._first; d && d._startTime === 0; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), p._initted || (k = !0);
              }
            else if (
              (s === 0 && w < 0 && (k = !0),
              (p._time = p._rawPrevTime = a),
              p._locked ||
                ((p._totalTime = a),
                p._repeat !== 0 &&
                  ((l = s + p._repeatDelay),
                  (p._cycle = (p._totalTime / l) >> 0),
                  p._cycle &&
                    p._cycle === p._totalTime / l &&
                    a >= t &&
                    p._cycle--,
                  (p._time = p._totalTime - p._cycle * l),
                  p._yoyo && 1 & p._cycle && (p._time = s - p._time),
                  p._time > s
                    ? ((p._time = s), (a = s + 1e-4))
                    : p._time < 0
                    ? (p._time = a = 0)
                    : (a = p._time))),
              p._hasPause && !p._forcingPlayhead && !b)
            ) {
              if (((a = p._time), a >= q || (p._repeat && y !== p._cycle)))
                for (d = p._first; d && d._startTime <= a && !m; )
                  d._duration ||
                    d.data !== "isPause" ||
                    d.ratio ||
                    (d._startTime === 0 && p._rawPrevTime === 0) ||
                    (m = d),
                    (d = d._next);
              else
                for (d = p._last; d && d._startTime >= a && !m; )
                  d._duration ||
                    (d.data === "isPause" && d._rawPrevTime > 0 && (m = d)),
                    (d = d._prev);
              m &&
                ((o = p._startTime + m._startTime / p._timeScale),
                m._startTime < s &&
                  ((p._time = p._rawPrevTime = a = m._startTime),
                  (p._totalTime =
                    a + p._cycle * (p._totalDuration + p._repeatDelay))));
            }
            if (p._cycle !== y && !p._locked) {
              let z = p._yoyo && (1 & y) !== 0;
                const A = z === (p._yoyo && (1 & p._cycle) !== 0);
                const B = p._totalTime;
                const C = p._cycle;
                const D = p._rawPrevTime;
                const E = p._time;
              if (
                ((p._totalTime = y * s),
                p._cycle < y ? (z = !z) : (p._totalTime += s),
                (p._time = q),
                (p._rawPrevTime = s === 0 ? w - 1e-4 : w),
                (p._cycle = y),
                (p._locked = !0),
                (q = z ? 0 : s),
                p.render(q, b, s === 0),
                b ||
                  p._gc ||
                  (p.vars.onRepeat &&
                    ((p._cycle = C),
                    (p._locked = !1),
                    p._callback("onRepeat"))),
                q !== p._time)
              )
                return;
              if (
                (A &&
                  ((p._cycle = y),
                  (p._locked = !0),
                  (q = z ? s + 1e-4 : -1e-4),
                  p.render(q, !0, !1)),
                (p._locked = !1),
                p._paused && !x)
              )
                return;
              (p._time = E),
                (p._totalTime = B),
                (p._cycle = C),
                (p._rawPrevTime = D);
            }
            if (!((p._time !== q && p._first) || c || k || m))
              return void (
                t !== p._totalTime &&
                p._onUpdate &&
                (b || p._callback("onUpdate"))
              );
            if (
              (p._initted || (p._initted = !0),
              p._active ||
                (!p._paused && p._totalTime !== t && a > 0 && (p._active = !0)),
              t === 0 &&
                p.vars.onStart &&
                ((p._totalTime === 0 && p._totalDuration) ||
                  b ||
                  p._callback("onStart")),
              (n = p._time),
              n >= q)
            )
              for (
                d = p._first;
                d && ((i = d._next), n === p._time && (!p._paused || x));

              )
                (d._active ||
                  (d._startTime <= p._time && !d._paused && !d._gc)) &&
                  (m === d && (p.pause(), (p._pauseTime = o)),
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c)),
                  (d = i);
            else
              for (
                d = p._last;
                d && ((i = d._prev), n === p._time && (!p._paused || x));

              ) {
                if (d._active || (d._startTime <= q && !d._paused && !d._gc)) {
                  if (m === d) {
                    for (m = d._prev; m && m.endTime() > p._time; )
                      m.render(
                        m._reversed
                          ? m.totalDuration() -
                              (a - m._startTime) * m._timeScale
                          : (a - m._startTime) * m._timeScale,
                        b,
                        c
                      ),
                        (m = m._prev);
                    (m = null), p.pause(), (p._pauseTime = o);
                  }
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
              }
            p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))),
              j &&
                (p._locked ||
                  p._gc ||
                  ((u === p._startTime || v !== p._timeScale) &&
                    (p._time === 0 || r >= p.totalDuration()) &&
                    (f &&
                      (g.length && h(),
                      p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                      (p._active = !1)),
                    !b && p.vars[j] && p._callback(j))));
          }),
          (k.getActive = function (a, b, c) {
            let d;
              let e;
              const f = [];
              const g = this.getChildren(a || a == null, b || a == null, !!c);
              let h = 0;
              const i = g.length;
            for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
            return f;
          }),
          (k.getLabelAfter = function (a) {
            a || (a !== 0 && (a = this._time));
            let b;
              const c = this.getLabelsArray();
              const d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
          }),
          (k.getLabelBefore = function (a) {
            a == null && (a = this._time);
            for (let b = this.getLabelsArray(), c = b.length; --c > -1; )
              if (b[c].time < a) return b[c].name;
            return null;
          }),
          (k.getLabelsArray = function () {
            let a;
              const b = [];
              let c = 0;
            for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
            return (
              b.sort(function (a, b) {
                return a.time - b.time;
              }),
              b
            );
          }),
          (k.invalidate = function () {
            return (this._locked = !1), a.prototype.invalidate.call(this);
          }),
          (k.progress = function (a, b) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && (1 & this._cycle) !== 0 ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  b
                )
              : this._time / this.duration() || 0;
          }),
          (k.totalProgress = function (a, b) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, b)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (k.totalDuration = function (b) {
            return arguments.length
              ? this._repeat !== -1 && b
                ? this.timeScale(this.totalDuration() / b)
                : this
              : (this._dirty &&
                  (a.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    this._repeat === -1
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (k.time = function (a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            const c = this._duration;
              const d = this._cycle;
              const e = d * (c + this._repeatDelay);
            return (
              a > c && (a = c),
              this.totalTime(
                this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a,
                b
              )
            );
          }),
          (k.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat;
          }),
          (k.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay;
          }),
          (k.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (k.currentLabel = function (a) {
            return arguments.length
              ? this.seek(a, !0)
              : this.getLabelBefore(this._time + e);
          }),
          d
        );
      },
      !0
    ),
    (function () {
      const a = 180 / Math.PI;
        const b = [];
        const c = [];
        const d = [];
        const e = {};
        const f = _gsScope._gsDefine.globals;
        const g = function (a, b, c, d) {
          c === d && (c = d - (d - b) / 1e6),
            a === b && (b = a + (c - a) / 1e6),
            (this.a = a),
            (this.b = b),
            (this.c = c),
            (this.d = d),
            (this.da = d - a),
            (this.ca = c - a),
            (this.ba = b - a);
        };
        const h =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
        const i = function (a, b, c, d) {
          const e = { a };
            const f = {};
            const g = {};
            const h = { c: d };
            const i = (a + b) / 2;
            const j = (b + c) / 2;
            const k = (c + d) / 2;
            const l = (i + j) / 2;
            const m = (j + k) / 2;
            const n = (m - l) / 8;
          return (
            (e.b = i + (a - i) / 4),
            (f.b = l + n),
            (e.c = f.a = (e.b + f.b) / 2),
            (f.c = g.a = (l + m) / 2),
            (g.b = m - n),
            (h.b = k + (d - k) / 4),
            (g.c = h.a = (g.b + h.b) / 2),
            [e, f, g, h]
          );
        };
        const j = function (a, e, f, g, h) {
          let j;
            let k;
            let l;
            let m;
            let n;
            let o;
            let p;
            let q;
            let r;
            let s;
            let t;
            let u;
            let v;
            const w = a.length - 1;
            let x = 0;
            let y = a[0].a;
          for (j = 0; w > j; j++)
            (n = a[x]),
              (k = n.a),
              (l = n.d),
              (m = a[x + 1].d),
              h
                ? ((t = b[j]),
                  (u = c[j]),
                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                  (o = l - (l - k) * (g ? 0.5 * e : t !== 0 ? v / t : 0)),
                  (p = l + (m - l) * (g ? 0.5 * e : u !== 0 ? v / u : 0)),
                  (q =
                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                : ((o = l - (l - k) * e * 0.5),
                  (p = l + (m - l) * e * 0.5),
                  (q = l - (o + p) / 2)),
              (o += q),
              (p += q),
              (n.c = r = o),
              j !== 0 ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
              (n.da = l - k),
              (n.ca = r - k),
              (n.ba = y - k),
              f
                ? ((s = i(k, y, r, l)),
                  a.splice(x, 1, s[0], s[1], s[2], s[3]),
                  (x += 4))
                : x++,
              (y = p);
          (n = a[x]),
            (n.b = y),
            (n.c = y + 0.4 * (n.d - y)),
            (n.da = n.d - n.a),
            (n.ca = n.c - n.a),
            (n.ba = y - n.a),
            f &&
              ((s = i(n.a, y, n.c, n.d)),
              a.splice(x, 1, s[0], s[1], s[2], s[3]));
        };
        const k = function (a, d, e, f) {
          let h;
            let i;
            let j;
            let k;
            let l;
            let m;
            const n = [];
          if (f)
            for (a = [f].concat(a), i = a.length; --i > -1; )
              typeof (m = a[i][d]) === "string" &&
                m.charAt(1) === "=" &&
                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
          if (((h = a.length - 2), h < 0))
            return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
          for (i = 0; h > i; i++)
            (j = a[i][d]),
              (k = a[i + 1][d]),
              (n[i] = new g(j, 0, 0, k)),
              e &&
                ((l = a[i + 2][d]),
                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
          return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
        };
        const l = function (a, f, g, i, l, m) {
          let n;
            let o;
            let p;
            let q;
            let r;
            let s;
            let t;
            let u;
            const v = {};
            const w = [];
            const x = m || a[0];
          (l = typeof l === "string" ? `,${  l  },` : h), f == null && (f = 1);
          for (o in a[0]) w.push(o);
          if (a.length > 1) {
            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
              if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                t = !1;
                break;
              }
            t &&
              ((a = a.concat()),
              m && a.unshift(m),
              a.push(a[1]),
              (m = a[a.length - 3]));
          }
          for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
            (o = w[n]),
              (e[o] = l.indexOf(`,${  o  },`) !== -1),
              (v[o] = k(a, o, e[o], m));
          for (n = b.length; --n > -1; )
            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
          if (!i) {
            for (n = w.length; --n > -1; )
              if (e[o])
                for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                  (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                    (d[q] = (d[q] || 0) + r * r);
            for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
          }
          for (n = w.length, q = g ? 4 : 1; --n > -1; )
            (o = w[n]),
              (p = v[o]),
              j(p, f, g, i, e[o]),
              t && (p.splice(0, q), p.splice(p.length - q, q));
          return v;
        };
        const m = function (a, b, c) {
          b = b || "soft";
          let d;
            let e;
            let f;
            let h;
            let i;
            let j;
            let k;
            let l;
            let m;
            let n;
            let o;
            const p = {};
            const q = b === "cubic" ? 3 : 2;
            const r = b === "soft";
            const s = [];
          if ((r && c && (a = [c].concat(a)), a == null || a.length < q + 1))
            throw "invalid Bezier data";
          for (m in a[0]) s.push(m);
          for (j = s.length; --j > -1; ) {
            for (
              m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
              l > k;
              k++
            )
              (d =
                c == null
                  ? a[k][m]
                  : typeof (o = a[k][m]) === "string" && o.charAt(1) === "="
                  ? c[m] + Number(o.charAt(0) + o.substr(2))
                  : Number(o)),
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                (i[n++] = d);
            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
              (d = i[k]),
                (e = i[k + 1]),
                (f = i[k + 2]),
                (h = q === 2 ? 0 : i[k + 3]),
                (i[n++] = o =
                  q === 3
                    ? new g(d, e, f, h)
                    : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
            i.length = n;
          }
          return p;
        };
        const n = function (a, b, c) {
          for (
            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
            --p > -1;

          )
            for (
              m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1;
              c >= k;
              k++
            )
              (j = o * k),
                (l = 1 - j),
                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                (n = p * c + k - 1),
                (b[n] = (b[n] || 0) + d * d);
        };
        const o = function (a, b) {
          b = b >> 0 || 6;
          let c;
            let d;
            let e;
            let f;
            const g = [];
            const h = [];
            let i = 0;
            let j = 0;
            const k = b - 1;
            const l = [];
            let m = [];
          for (c in a) n(a[c], g, b);
          for (e = g.length, d = 0; e > d; d++)
            (i += Math.sqrt(g[d])),
              (f = d % b),
              (m[f] = i),
              f === k &&
                ((j += i),
                (f = (d / b) >> 0),
                (l[f] = m),
                (h[f] = j),
                (i = 0),
                (m = []));
          return { length: j, lengths: h, segments: l };
        };
        const p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.8",
          API: 2,
          global: !0,
          init (a, b, c) {
            (this._target = a),
              b instanceof Array && (b = { values: b }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                b.timeResolution == null ? 6 : parseInt(b.timeResolution, 10));
            let d;
              let e;
              let f;
              let g;
              let h;
              const i = b.values || [];
              const j = {};
              const k = i[0];
              let n = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = n
              ? n instanceof Array
                ? n
                : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]
              : null;
            for (d in k) this._props.push(d);
            for (f = this._props.length; --f > -1; )
              (d = this._props[f]),
                this._overwriteProps.push(d),
                (e = this._func[d] = typeof a[d] === "function"),
                (j[d] = e
                  ? a[
                      d.indexOf("set") ||
                      typeof a[`get${  d.substr(3)}`] !== "function"
                        ? d
                        : `get${  d.substr(3)}`
                    ]()
                  : parseFloat(a[d])),
                h || (j[d] !== i[0][d] && (h = j));
            if (
              ((this._beziers =
                b.type !== "cubic" &&
                b.type !== "quadratic" &&
                b.type !== "soft"
                  ? l(
                      i,
                      isNaN(b.curviness) ? 1 : b.curviness,
                      !1,
                      b.type === "thruBasic",
                      b.correlate,
                      h
                    )
                  : m(i, b.type, j)),
              (this._segCount = this._beziers[d].length),
              this._timeRes)
            ) {
              const p = o(this._beziers, this._timeRes);
              (this._length = p.length),
                (this._lengths = p.lengths),
                (this._segments = p.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((n = this._autoRotate))
              for (
                this._initialRotations = [],
                  n[0] instanceof Array || (this._autoRotate = n = [n]),
                  f = n.length;
                --f > -1;

              ) {
                for (g = 0; g < 3; g++)
                  (d = n[f][g]),
                    (this._func[d] =
                      typeof a[d] === "function"
                        ? a[
                            d.indexOf("set") ||
                            typeof a[`get${  d.substr(3)}`] !== "function"
                              ? d
                              : `get${  d.substr(3)}`
                          ]
                        : !1);
                (d = n[f][2]),
                  (this._initialRotations[f] =
                    (this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d]) || 0),
                  this._overwriteProps.push(d);
              }
            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
          },
          set (b) {
            let c;
              let d;
              let e;
              let f;
              let g;
              let h;
              let i;
              let j;
              let k;
              let l;
              const m = this._segCount;
              const n = this._func;
              const o = this._target;
              const p = b !== this._startRatio;
            if (this._timeRes) {
              if (
                ((k = this._lengths),
                (l = this._curSeg),
                (b *= this._length),
                (e = this._li),
                b > this._l2 && m - 1 > e)
              ) {
                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                (this._l1 = k[e - 1]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s2 = l[(this._s1 = this._si = 0)]);
              } else if (b < this._l1 && e > 0) {
                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                e === 0 && b < this._l1 ? (this._l1 = 0) : e++,
                  (this._l2 = k[e]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                  (this._s2 = l[this._si]);
              }
              if (
                ((c = e),
                (b -= this._l1),
                (e = this._si),
                b > this._s2 && e < l.length - 1)
              ) {
                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                (this._s1 = l[e - 1]), (this._si = e);
              } else if (b < this._s1 && e > 0) {
                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                e === 0 && b < this._s1 ? (this._s1 = 0) : e++,
                  (this._s2 = l[e]),
                  (this._si = e);
              }
              h =
                (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else
              (c = b < 0 ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                (h = (b - c * (1 / m)) * m);
            for (d = 1 - h, e = this._props.length; --e > -1; )
              (f = this._props[e]),
                (g = this._beziers[f][c]),
                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                this._mod[f] && (i = this._mod[f](i, o)),
                n[f] ? o[f](i) : (o[f] = i);
            if (this._autoRotate) {
              let q;
                let r;
                let s;
                let t;
                let u;
                let v;
                let w;
                const x = this._autoRotate;
              for (e = x.length; --e > -1; )
                (f = x[e][2]),
                  (v = x[e][3] || 0),
                  (w = x[e][4] === !0 ? 1 : a),
                  (g = this._beziers[x[e][0]]),
                  (q = this._beziers[x[e][1]]),
                  g &&
                    q &&
                    ((g = g[c]),
                    (q = q[c]),
                    (r = g.a + (g.b - g.a) * h),
                    (t = g.b + (g.c - g.b) * h),
                    (r += (t - r) * h),
                    (t += (g.c + (g.d - g.c) * h - t) * h),
                    (s = q.a + (q.b - q.a) * h),
                    (u = q.b + (q.c - q.b) * h),
                    (s += (u - s) * h),
                    (u += (q.c + (q.d - q.c) * h - u) * h),
                    (i = p
                      ? Math.atan2(u - s, t - r) * w + v
                      : this._initialRotations[e]),
                    this._mod[f] && (i = this._mod[f](i, o)),
                    n[f] ? o[f](i) : (o[f] = i));
            }
          },
        });
        const q = p.prototype;
      (p.bezierThrough = l),
        (p.cubicToQuadratic = i),
        (p._autoCSS = !0),
        (p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }),
        (p._cssRegister = function () {
          const a = f.CSSPlugin;
          if (a) {
            const b = a._internals;
              const c = b._parseToProxy;
              const d = b._setPluginRatio;
              const e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser (a, b, f, g, h, i) {
                b instanceof Array && (b = { values: b }), (i = new p());
                let j;
                  let k;
                  let l;
                  const m = b.values;
                  const n = m.length - 1;
                  const o = [];
                  const q = {};
                if (n < 0) return h;
                for (j = 0; n >= j; j++)
                  (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                for (k in b) q[k] = b[k];
                return (
                  (q.values = o),
                  (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                  (h.data = l),
                  (h.plugin = i),
                  (h.setRatio = d),
                  q.autoRotate === 0 && (q.autoRotate = !0),
                  !q.autoRotate ||
                    q.autoRotate instanceof Array ||
                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                    (q.autoRotate =
                      l.end.left != null
                        ? [["left", "top", "rotation", j, !1]]
                        : l.end.x != null
                        ? [["x", "y", "rotation", j, !1]]
                        : !1)),
                  q.autoRotate &&
                    (g._transform || g._enableTransforms(!1),
                    (l.autoRotate = g._target._gsTransform),
                    (l.proxy.rotation = l.autoRotate.rotation || 0),
                    g._overwriteProps.push("rotation")),
                  i._onInitTween(l.proxy, q, g._tween),
                  h
                );
              },
            });
          }
        }),
        (q._mod = function (a) {
          for (var b, c = this._overwriteProps, d = c.length; --d > -1; )
            (b = a[c[d]]), b && typeof b === "function" && (this._mod[c[d]] = b);
        }),
        (q._kill = function (a) {
          let b;
            let c;
            let d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (
                delete this._beziers[b], delete this._func[b], c = d.length;
                --c > -1;

              )
                d[c] === b && d.splice(c, 1);
          if ((d = this._autoRotate))
            for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
          return this._super._kill.call(this, a);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (a, b) {
        let c;
          let d;
          let e;
          let f;
          var g = function () {
            a.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = g.prototype.setRatio);
          };
          const h = _gsScope._gsDefine.globals;
          const i = {};
          let j = (g.prototype = new a("css"));
        (j.constructor = g),
          (g.version = "2.1.0"),
          (g.API = 2),
          (g.defaultTransformPerspective = 0),
          (g.defaultSkewType = "compensated"),
          (g.defaultSmoothOrigin = !0),
          (j = "px"),
          (g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: "",
          });
        let k;
          let l;
          let m;
          let n;
          let o;
          let p;
          let q;
          let r;
          const s = /(?:\-|\.|\b)(\d|\.|e\-)+/g;
          const t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
          const u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi;
          const v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g;
          const w = /(?:\d|\-|\+|=|#|\.)*/g;
          const x = /opacity *= *([^)]*)/i;
          const y = /opacity:([^;]*)/i;
          const z = /alpha\(opacity *=.+?\)/i;
          const A = /^(rgb|hsl)/;
          const B = /([A-Z])/g;
          const C = /-([a-z])/gi;
          const D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi;
          const E = function (a, b) {
            return b.toUpperCase();
          };
          const F = /(?:Left|Right|Width)/i;
          const G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi;
          const H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i;
          const I = /,(?=[^\)]*(?:\(|$))/gi;
          const J = /[\s,\(]/i;
          const K = Math.PI / 180;
          const L = 180 / Math.PI;
          let M = {};
          const N = { style: {} };
          const O = _gsScope.document || {
            createElement () {
              return N;
            },
          };
          const P = function (a, b) {
            return b && O.createElementNS
              ? O.createElementNS(b, a)
              : O.createElement(a);
          };
          const Q = P("div");
          const R = P("img");
          const S = (g._internals = { _specialProps: i });
          const T = (_gsScope.navigator || {}).userAgent || "";
          const U = (function () {
            const a = T.indexOf("Android");
              const b = P("a");
            return (
              (m =
                T.indexOf("Safari") !== -1 &&
                T.indexOf("Chrome") === -1 &&
                (a === -1 || parseFloat(T.substr(a + 8, 2)) > 3)),
              (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
              (n = T.indexOf("Firefox") !== -1),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) &&
                (p = parseFloat(RegExp.$1)),
              b
                ? ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
                : !1
            );
          })();
          const V = function (a) {
            return x.test(
              typeof a === "string"
                ? a
                : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          };
          const W = function (a) {
            _gsScope.console && console.log(a);
          };
          let X = "";
          let Y = "";
          const Z = function (a, b) {
            b = b || Q;
            let c;
              let d;
              const e = b.style;
            if (void 0 !== e[a]) return a;
            for (
              a = a.charAt(0).toUpperCase() + a.substr(1),
                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                d = 5;
              --d > -1 && void 0 === e[c[d] + a];

            );
            return d >= 0
              ? ((Y = d === 3 ? "ms" : c[d]),
                (X = `-${  Y.toLowerCase()  }-`),
                Y + a)
              : null;
          };
          const $ =
            typeof window !== "undefined"
              ? window
              : O.defaultView || { getComputedStyle () {} };
          const _ = function (a) {
            return $.getComputedStyle(a);
          };
          const aa = (g.getStyle = function (a, b, c, d, e) {
            let f;
            return U || b !== "opacity"
              ? (!d && a.style[b]
                  ? (f = a.style[b])
                  : (c = c || _(a))
                  ? (f =
                      c[b] ||
                      c.getPropertyValue(b) ||
                      c.getPropertyValue(b.replace(B, "-$1").toLowerCase()))
                  : a.currentStyle && (f = a.currentStyle[b]),
                e == null ||
                (f && f !== "none" && f !== "auto" && f !== "auto auto")
                  ? f
                  : e)
              : V(a);
          });
          var ba = (S.convertToPixels = function (a, c, d, e, f) {
            if (e === "px" || (!e && c !== "lineHeight")) return d;
            if (e === "auto" || !d) return 0;
            let h;
              let i;
              let j;
              const k = F.test(c);
              let l = a;
              const m = Q.style;
              const n = d < 0;
              const o = d === 1;
            if ((n && (d = -d), o && (d *= 100), c !== "lineHeight" || e))
              if (e === "%" && c.indexOf("border") !== -1)
                h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
              else {
                if (
                  ((m.cssText =
                    `border:0 solid red;position:${ 
                    aa(a, "position") 
                    };line-height:0;`),
                  e !== "%" &&
                    l.appendChild &&
                    e.charAt(0) !== "v" &&
                    e !== "rem")
                )
                  m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                  if (
                    ((l = a.parentNode || O.body),
                    aa(l, "display").indexOf("flex") !== -1 &&
                      (m.position = "absolute"),
                    (i = l._gsCache),
                    (j = b.ticker.frame),
                    i && k && i.time === j)
                  )
                    return (i.width * d) / 100;
                  m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(Q),
                  (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(Q),
                  k &&
                    e === "%" &&
                    g.cacheWidths !== !1 &&
                    ((i = l._gsCache = l._gsCache || {}),
                    (i.time = j),
                    (i.width = (h / d) * 100)),
                  h !== 0 || f || (h = ba(a, c, d, e, !0));
              }
            else
              (i = _(a).lineHeight),
                (a.style.lineHeight = d),
                (h = parseFloat(_(a).lineHeight)),
                (a.style.lineHeight = i);
            return o && (h /= 100), n ? -h : h;
          });
          const ca = (S.calculateOffset = function (a, b, c) {
            if (aa(a, "position", c) !== "absolute") return 0;
            const d = b === "left" ? "Left" : "Top";
              const e = aa(a, `margin${  d}`, c);
            return (
              a[`offset${  d}`] - (ba(a, b, parseFloat(e), e.replace(w, "")) || 0)
            );
          });
          const da = function (a, b) {
            let c;
              let d;
              let e;
              const f = {};
            if ((b = b || _(a, null)))
              if ((c = b.length))
                for (; --c > -1; )
                  (e = b[c]),
                    (e.indexOf("-transform") === -1 || Ea === e) &&
                      (f[e.replace(C, E)] = b.getPropertyValue(e));
              else
                for (c in b)
                  (c.indexOf("Transform") === -1 || Da === c) && (f[c] = b[c]);
            else if ((b = a.currentStyle || a.style))
              for (c in b)
                typeof c === "string" &&
                  void 0 === f[c] &&
                  (f[c.replace(C, E)] = b[c]);
            return (
              U || (f.opacity = V(a)),
              (d = Sa(a, b, !1)),
              (f.rotation = d.rotation),
              (f.skewX = d.skewX),
              (f.scaleX = d.scaleX),
              (f.scaleY = d.scaleY),
              (f.x = d.x),
              (f.y = d.y),
              Ga &&
                ((f.z = d.z),
                (f.rotationX = d.rotationX),
                (f.rotationY = d.rotationY),
                (f.scaleZ = d.scaleZ)),
              f.filters && delete f.filters,
              f
            );
          };
          const ea = function (a, b, c, d, e) {
            let f;
              let g;
              let h;
              const i = {};
              const j = a.style;
            for (g in c)
              g !== "cssText" &&
                g !== "length" &&
                isNaN(g) &&
                (b[g] !== (f = c[g]) || (e && e[g])) &&
                g.indexOf("Origin") === -1 &&
                (typeof f === "number" || typeof f === "string") &&
                ((i[g] =
                  f !== "auto" || (g !== "left" && g !== "top")
                    ? (f !== "" && f !== "auto" && f !== "none") ||
                      typeof b[g] !== "string" ||
                      b[g].replace(v, "") === ""
                      ? f
                      : 0
                    : ca(a, g)),
                void 0 !== j[g] && (h = new ta(j, g, j[g], h)));
            if (d) for (g in d) g !== "className" && (i[g] = d[g]);
            return { difs: i, firstMPT: h };
          };
          const fa = { width: ["Left", "Right"], height: ["Top", "Bottom"] };
          const ga = ["marginLeft", "marginRight", "marginTop", "marginBottom"];
          const ha = function (a, b, c) {
            if ((`${a.nodeName  }`).toLowerCase() === "svg")
              return (c || _(a))[b] || 0;
            if (a.getCTM && Pa(a)) return a.getBBox()[b] || 0;
            let d = parseFloat(b === "width" ? a.offsetWidth : a.offsetHeight);
              const e = fa[b];
              let f = e.length;
            for (c = c || _(a, null); --f > -1; )
              (d -= parseFloat(aa(a, `padding${  e[f]}`, c, !0)) || 0),
                (d -= parseFloat(aa(a, `border${  e[f]  }Width`, c, !0)) || 0);
            return d;
          };
          var ia = function (a, b) {
            if (a === "contain" || a === "auto" || a === "auto auto")
              return `${a  } `;
            (a == null || a === "") && (a = "0 0");
            let c;
              let d = a.split(" ");
              let e =
                a.indexOf("left") !== -1
                  ? "0%"
                  : a.indexOf("right") !== -1
                  ? "100%"
                  : d[0];
              let f =
                a.indexOf("top") !== -1
                  ? "0%"
                  : a.indexOf("bottom") !== -1
                  ? "100%"
                  : d[1];
            if (d.length > 3 && !b) {
              for (
                d = a.split(", ").join(",").split(","), a = [], c = 0;
                c < d.length;
                c++
              )
                a.push(ia(d[c]));
              return a.join(",");
            }
            return (
              f == null
                ? (f = e === "center" ? "50%" : "0")
                : f === "center" && (f = "50%"),
              (e === "center" ||
                (isNaN(parseFloat(e)) && (`${e  }`).indexOf("=") === -1)) &&
                (e = "50%"),
              (a = `${e  } ${  f  }${d.length > 2 ? ` ${  d[2]}` : ""}`),
              b &&
                ((b.oxp = e.indexOf("%") !== -1),
                (b.oyp = f.indexOf("%") !== -1),
                (b.oxr = e.charAt(1) === "="),
                (b.oyr = f.charAt(1) === "="),
                (b.ox = parseFloat(e.replace(v, ""))),
                (b.oy = parseFloat(f.replace(v, ""))),
                (b.v = a)),
              b || a
            );
          };
          const ja = function (a, b) {
            return (
              typeof a === "function" && (a = a(r, q)),
              typeof a === "string" && a.charAt(1) === "="
                ? parseInt(`${a.charAt(0)  }1`, 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b) || 0
            );
          };
          const ka = function (a, b) {
            typeof a === "function" && (a = a(r, q));
            const c = typeof a === "string" && a.charAt(1) === "=";
            return (
              typeof a === "string" &&
                a.charAt(a.length - 2) === "v" &&
                (a =
                  (c ? a.substr(0, 2) : 0) +
                  window[
                    `inner${  a.substr(-2) === "vh" ? "Height" : "Width"}`
                  ] *
                    (parseFloat(c ? a.substr(2) : a) / 100)),
              a == null
                ? b
                : c
                ? parseInt(`${a.charAt(0)  }1`, 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a) || 0
            );
          };
          const la = function (a, b, c, d) {
            let e;
              let f;
              let g;
              let h;
              let i;
              const j = 1e-6;
            return (
              typeof a === "function" && (a = a(r, q)),
              a == null
                ? (h = b)
                : typeof a === "number"
                ? (h = a)
                : ((e = 360),
                  (f = a.split("_")),
                  (i = a.charAt(1) === "="),
                  (g =
                    (i
                      ? parseInt(`${a.charAt(0)  }1`, 10) *
                        parseFloat(f[0].substr(2))
                      : parseFloat(f[0])) *
                      (a.indexOf("rad") === -1 ? 1 : L) -
                    (i ? 0 : b)),
                  f.length &&
                    (d && (d[c] = b + g),
                    a.indexOf("short") !== -1 &&
                      ((g %= e),
                      g !== g % (e / 2) && (g = g < 0 ? g + e : g - e)),
                    a.indexOf("_cw") !== -1 && g < 0
                      ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                      : a.indexOf("ccw") !== -1 &&
                        g > 0 &&
                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                  (h = b + g)),
              j > h && h > -j && (h = 0),
              h
            );
          };
          const ma = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          };
          const na = function (a, b, c) {
            return (
              (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a),
              (255 *
                (6 * a < 1
                  ? b + (c - b) * a * 6
                  : a < 0.5
                  ? c
                  : 3 * a < 2
                  ? b + (c - b) * (2 / 3 - a) * 6
                  : b) +
                0.5) |
                0
            );
          };
          const oa = (g.parseColor = function (a, b) {
            let c; let d; let e; let f; let g; let h; let i; let j; let k; let l; let m;
            if (a)
              if (typeof a === "number") c = [a >> 16, (a >> 8) & 255, 255 & a];
              else {
                if (
                  (a.charAt(a.length - 1) === "," &&
                    (a = a.substr(0, a.length - 1)),
                  ma[a])
                )
                  c = ma[a];
                else if (a.charAt(0) === "#")
                  a.length === 4 &&
                    ((d = a.charAt(1)),
                    (e = a.charAt(2)),
                    (f = a.charAt(3)),
                    (a = `#${  d  }${d  }${e  }${e  }${f  }${f}`)),
                    (a = parseInt(a.substr(1), 16)),
                    (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                else if (a.substr(0, 3) === "hsl")
                  if (((c = m = a.match(s)), b)) {
                    if (a.indexOf("=") !== -1) return a.match(t);
                  } else
                    (g = (Number(c[0]) % 360) / 360),
                      (h = Number(c[1]) / 100),
                      (i = Number(c[2]) / 100),
                      (e = i <= 0.5 ? i * (h + 1) : i + h - i * h),
                      (d = 2 * i - e),
                      c.length > 3 && (c[3] = Number(c[3])),
                      (c[0] = na(g + 1 / 3, d, e)),
                      (c[1] = na(g, d, e)),
                      (c[2] = na(g - 1 / 3, d, e));
                else c = a.match(s) || ma.transparent;
                (c[0] = Number(c[0])),
                  (c[1] = Number(c[1])),
                  (c[2] = Number(c[2])),
                  c.length > 3 && (c[3] = Number(c[3]));
              }
            else c = ma.black;
            return (
              b &&
                !m &&
                ((d = c[0] / 255),
                (e = c[1] / 255),
                (f = c[2] / 255),
                (j = Math.max(d, e, f)),
                (k = Math.min(d, e, f)),
                (i = (j + k) / 2),
                j === k
                  ? (g = h = 0)
                  : ((l = j - k),
                    (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                    (g =
                      j === d
                        ? (e - f) / l + (f > e ? 6 : 0)
                        : j === e
                        ? (f - d) / l + 2
                        : (d - e) / l + 4),
                    (g *= 60)),
                (c[0] = (g + 0.5) | 0),
                (c[1] = (100 * h + 0.5) | 0),
                (c[2] = (100 * i + 0.5) | 0)),
              c
            );
          });
          const pa = function (a, b) {
            let c;
              let d;
              let e;
              const f = a.match(qa) || [];
              let g = 0;
              let h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++)
              (d = f[c]),
                (e = a.substr(g, a.indexOf(d, g) - g)),
                (g += e.length + d.length),
                (d = oa(d, b)),
                d.length === 3 && d.push(1),
                (h +=
                  `${e +
                  (b
                    ? `hsla(${  d[0]  },${  d[1]  }%,${  d[2]  }%,${  d[3]}`
                    : `rgba(${  d.join(",")}`) 
                  })`);
            return h + a.substr(g);
          };
          var qa =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in ma) qa += `|${  j  }\\b`;
        (qa = new RegExp(`${qa  })`, "gi")),
          (g.colorStringFilter = function (a) {
            let b;
              const c = `${a[0]  } ${  a[1]}`;
            qa.test(c) &&
              ((b = c.indexOf("hsl(") !== -1 || c.indexOf("hsla(") !== -1),
              (a[0] = pa(a[0], b)),
              (a[1] = pa(a[1], b))),
              (qa.lastIndex = 0);
          }),
          b.defaultStringFilter ||
            (b.defaultStringFilter = g.colorStringFilter);
        const ra = function (a, b, c, d) {
            if (a == null)
              return function (a) {
                return a;
              };
            let e;
              const f = b ? (a.match(qa) || [""])[0] : "";
              const g = a.split(f).join("").match(u) || [];
              const h = a.substr(0, a.indexOf(g[0]));
              const i = a.charAt(a.length - 1) === ")" ? ")" : "";
              const j = a.indexOf(" ") !== -1 ? " " : ",";
              const k = g.length;
              const l = k > 0 ? g[0].replace(s, "") : "";
            return k
              ? (e = b
                  ? function (a) {
                      let b; let m; let n; let o;
                      if (typeof a === "number") a += l;
                      else if (d && I.test(a)) {
                        for (
                          o = a.replace(I, "|").split("|"), n = 0;
                          n < o.length;
                          n++
                        )
                          o[n] = e(o[n]);
                        return o.join(",");
                      }
                      if (
                        ((b = (a.match(qa) || [f])[0]),
                        (m = a.split(b).join("").match(u) || []),
                        (n = m.length),
                        k > n--)
                      )
                        for (; ++n < k; )
                          m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                      return (
                        h +
                        m.join(j) +
                        j +
                        b +
                        i +
                        (a.indexOf("inset") !== -1 ? " inset" : "")
                      );
                    }
                  : function (a) {
                      let b; let f; let m;
                      if (typeof a === "number") a += l;
                      else if (d && I.test(a)) {
                        for (
                          f = a.replace(I, "|").split("|"), m = 0;
                          m < f.length;
                          m++
                        )
                          f[m] = e(f[m]);
                        return f.join(",");
                      }
                      if (((b = a.match(u) || []), (m = b.length), k > m--))
                        for (; ++m < k; )
                          b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                      return h + b.join(j) + i;
                    })
              : function (a) {
                  return a;
                };
          };
          const sa = function (a) {
            return (
              (a = a.split(",")),
              function (b, c, d, e, f, g, h) {
                let i;
                  const j = (`${c  }`).split(" ");
                for (h = {}, i = 0; i < 4; i++)
                  h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                return e.parse(b, h, f, g);
              }
            );
          };
          var ta =
            ((S._setPluginRatio = function (a) {
              this.plugin.setRatio(a);
              for (
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = this.data,
                  h = g.proxy,
                  i = g.firstMPT,
                  j = 1e-6;
                i;

              )
                (b = h[i.v]),
                  i.r ? (b = i.r(b)) : j > b && b > -j && (b = 0),
                  (i.t[i.p] = b),
                  (i = i._next);
              if (
                (g.autoRotate &&
                  (g.autoRotate.rotation = g.mod
                    ? g.mod.call(this._tween, h.rotation, this.t, this._tween)
                    : h.rotation),
                a === 1 || a === 0)
              )
                for (i = g.firstMPT, f = a === 1 ? "e" : "b"; i; ) {
                  if (((c = i.t), c.type)) {
                    if (c.type === 1) {
                      for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                        e += c[`xn${  d}`] + c[`xs${  d + 1}`];
                      c[f] = e;
                    }
                  } else c[f] = c.s + c.xs0;
                  i = i._next;
                }
            }),
            function (a, b, c, d, e) {
              (this.t = a),
                (this.p = b),
                (this.v = c),
                (this.r = e),
                d && ((d._prev = this), (this._next = d));
            });
          var ua =
            ((S._parseToProxy = function (a, b, c, d, e, f) {
              let g;
                let h;
                let i;
                let j;
                let k;
                const l = d;
                const m = {};
                const n = {};
                const o = c._transform;
                const p = M;
              for (
                c._transform = null,
                  M = b,
                  d = k = c.parse(a, b, d, e),
                  M = p,
                  f &&
                    ((c._transform = o),
                    l && ((l._prev = null), l._prev && (l._prev._next = null)));
                d && d !== l;

              ) {
                if (
                  d.type <= 1 &&
                  ((h = d.p),
                  (n[h] = d.s + d.c),
                  (m[h] = d.s),
                  f || ((j = new ta(d, "s", h, j, d.r)), (d.c = 0)),
                  d.type === 1)
                )
                  for (g = d.l; --g > 0; )
                    (i = `xn${  g}`),
                      (h = `${d.p  }_${  i}`),
                      (n[h] = d.data[i]),
                      (m[h] = d[i]),
                      f || (j = new ta(d, i, h, j, d.rxp[i]));
                d = d._next;
              }
              return { proxy: m, end: n, firstMPT: j, pt: k };
            }),
            (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
              (this.t = a),
                (this.p = b),
                (this.s = d),
                (this.c = e),
                (this.n = i || b),
                a instanceof ua || f.push(this.n),
                (this.r = j ? (typeof j === "function" ? j : Math.round) : j),
                (this.type = h || 0),
                k && ((this.pr = k), (c = !0)),
                (this.b = void 0 === l ? d : l),
                (this.e = void 0 === m ? d + e : m),
                g && ((this._next = g), (g._prev = this));
            }));
          const va = function (a, b, c, d, e, f) {
            const g = new ua(a, b, c, d - c, e, -1, f);
            return (g.b = c), (g.e = g.xs0 = d), g;
          };
          const wa = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            (c = c || f || ""),
              typeof d === "function" && (d = d(r, q)),
              (h = new ua(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
              (d += ""),
              e &&
                qa.test(d + c) &&
                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
            let m;
              let n;
              let o;
              let p;
              let u;
              let v;
              let w;
              let x;
              let y;
              let z;
              let A;
              let B;
              let C;
              let D = c.split(", ").join(",").split(" ");
              let E = d.split(", ").join(",").split(" ");
              let F = D.length;
              const G = k !== !1;
            for (
              (d.indexOf(",") !== -1 || c.indexOf(",") !== -1) &&
                ((d + c).indexOf("rgb") !== -1 || (d + c).indexOf("hsl") !== -1
                  ? ((D = D.join(" ").replace(I, ", ").split(" ")),
                    (E = E.join(" ").replace(I, ", ").split(" ")))
                  : ((D = D.join(" ").split(",").join(", ").split(" ")),
                    (E = E.join(" ").split(",").join(", ").split(" "))),
                (F = D.length)),
                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                h.plugin = j,
                h.setRatio = l,
                qa.lastIndex = 0,
                m = 0;
              F > m;
              m++
            )
              if (
                ((p = D[m]), (u = `${E[m]  }`), (x = parseFloat(p)), x || x === 0)
              )
                h.appendXtra(
                  "",
                  x,
                  ja(u, x),
                  u.replace(t, ""),
                  G && u.indexOf("px") !== -1 ? Math.round : !1,
                  !0
                );
              else if (e && qa.test(p))
                (B = u.indexOf(")") + 1),
                  (B = `)${  B ? u.substr(B) : ""}`),
                  (C = u.indexOf("hsl") !== -1 && U),
                  (z = u),
                  (p = oa(p, C)),
                  (u = oa(u, C)),
                  (y = p.length + u.length > 6),
                  y && !U && u[3] === 0
                    ? ((h[`xs${  h.l}`] += h.l ? " transparent" : "transparent"),
                      (h.e = h.e.split(E[m]).join("transparent")))
                    : (U || (y = !1),
                      C
                        ? h
                            .appendXtra(
                              z.substr(0, z.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              p[0],
                              ja(u[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], ja(u[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              ja(u[2], p[2]),
                              y ? "%," : `%${  B}`,
                              !1
                            )
                        : h
                            .appendXtra(
                              z.substr(0, z.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              p[0],
                              u[0] - p[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", p[1], u[1] - p[1], ",", Math.round)
                            .appendXtra(
                              "",
                              p[2],
                              u[2] - p[2],
                              y ? "," : B,
                              Math.round
                            ),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        h.appendXtra(
                          "",
                          p,
                          (u.length < 4 ? 1 : u[3]) - p,
                          B,
                          !1
                        ))),
                  (qa.lastIndex = 0);
              else if ((v = p.match(s))) {
                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                for (o = 0, n = 0; n < v.length; n++)
                  (A = v[n]),
                    (z = p.indexOf(A, o)),
                    h.appendXtra(
                      p.substr(o, z - o),
                      Number(A),
                      ja(w[n], A),
                      "",
                      G && p.substr(z + A.length, 2) === "px" ? Math.round : !1,
                      n === 0
                    ),
                    (o = z + A.length);
                h[`xs${  h.l}`] += p.substr(o);
              } else h[`xs${  h.l}`] += h.l || h[`xs${  h.l}`] ? ` ${  u}` : u;
            if (d.indexOf("=") !== -1 && h.data) {
              for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                B += h[`xs${  m}`] + h.data[`xn${  m}`];
              h.e = B + h[`xs${  m}`];
            }
            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
          });
          let xa = 9;
        for (j = ua.prototype, j.l = j.pr = 0; --xa > 0; )
          (j[`xn${  xa}`] = 0), (j[`xs${  xa}`] = "");
        (j.xs0 = ""),
          (j._next =
            j._prev =
            j.xfirst =
            j.data =
            j.plugin =
            j.setRatio =
            j.rxp =
              null),
          (j.appendXtra = function (a, b, c, d, e, f) {
            const g = this;
              const h = g.l;
            return (
              (g[`xs${  h}`] += f && (h || g[`xs${  h}`]) ? ` ${  a}` : a || ""),
              c || h === 0 || g.plugin
                ? (g.l++,
                  (g.type = g.setRatio ? 2 : 1),
                  (g[`xs${  g.l}`] = d || ""),
                  h > 0
                    ? ((g.data[`xn${  h}`] = b + c),
                      (g.rxp[`xn${  h}`] = e),
                      (g[`xn${  h}`] = b),
                      g.plugin ||
                        ((g.xfirst = new ua(
                          g,
                          `xn${  h}`,
                          b,
                          c,
                          g.xfirst || g,
                          0,
                          g.n,
                          e,
                          g.pr
                        )),
                        (g.xfirst.xs0 = 0)),
                      g)
                    : ((g.data = { s: b + c }),
                      (g.rxp = {}),
                      (g.s = b),
                      (g.c = c),
                      (g.r = e),
                      g))
                : ((g[`xs${  h}`] += b + (d || "")), g)
            );
          });
        const ya = function (a, b) {
            (b = b || {}),
              (this.p = b.prefix ? Z(a) || a : a),
              (i[a] = i[this.p] = this),
              (this.format =
                b.formatter ||
                ra(b.defaultValue, b.color, b.collapsible, b.multi)),
              b.parser && (this.parse = b.parser),
              (this.clrs = b.color),
              (this.multi = b.multi),
              (this.keyword = b.keyword),
              (this.dflt = b.defaultValue),
              (this.allowFunc = b.allowFunc),
              (this.pr = b.priority || 0);
          };
          const za = (S._registerComplexSpecialProp = function (a, b, c) {
            typeof b !== "object" && (b = { parser: c });
            let d;
              let e;
              const f = a.split(",");
              const g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++)
              (b.prefix = d === 0 && b.prefix),
                (b.defaultValue = c[d] || g),
                (e = new ya(f[d], b));
          });
          const Aa = (S._registerPluginProp = function (a) {
            if (!i[a]) {
              const b = `${a.charAt(0).toUpperCase() + a.substr(1)  }Plugin`;
              za(a, {
                parser (a, c, d, e, f, g, j) {
                  const k = h.com.greensock.plugins[b];
                  return k
                    ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                    : (W(`Error: ${  b  } js file not loaded.`), f);
                },
              });
            }
          });
        (j = ya.prototype),
          (j.parseComplex = function (a, b, c, d, e, f) {
            let g;
              let h;
              let i;
              let j;
              let k;
              let l;
              const m = this.keyword;
            if (
              (this.multi &&
                (I.test(c) || I.test(b)
                  ? ((h = b.replace(I, "|").split("|")),
                    (i = c.replace(I, "|").split("|")))
                  : m && ((h = [b]), (i = [c]))),
              i)
            ) {
              for (
                j = i.length > h.length ? i.length : h.length, g = 0;
                j > g;
                g++
              )
                (b = h[g] = h[g] || this.dflt),
                  (c = i[g] = i[g] || this.dflt),
                  m &&
                    ((k = b.indexOf(m)),
                    (l = c.indexOf(m)),
                    k !== l &&
                      (l === -1
                        ? (h[g] = h[g].split(m).join(""))
                        : k === -1 && (h[g] += ` ${  m}`)));
              (b = h.join(", ")), (c = i.join(", "));
            }
            return wa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
          }),
          (j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(
              a.style,
              this.format(aa(a, this.p, e, !1, this.dflt)),
              this.format(b),
              f,
              g
            );
          }),
          (g.registerSpecialProp = function (a, b, c) {
            za(a, {
              parser (a, d, e, f, g, h, i) {
                const j = new ua(a, e, 0, 0, g, 2, e, !1, c);
                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
              },
              priority: c,
            });
          }),
          (g.useSVGTransformAttr = !0);
        let Ba;
          const Ca =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            );
          var Da = Z("transform");
          var Ea = `${X  }transform`;
          const Fa = Z("transformOrigin");
          var Ga = Z("perspective") !== null;
          const Ha = (S.Transform = function () {
            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
              (this.force3D =
                g.defaultForce3D !== !1 && Ga
                  ? g.defaultForce3D || "auto"
                  : !1);
          });
          const Ia = _gsScope.SVGElement;
          const Ja = function (a, b, c) {
            let d;
              const e = O.createElementNS("http://www.w3.org/2000/svg", a);
              const f = /([a-z])([A-Z])/g;
            for (d in c)
              e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
          };
          const Ka = O.documentElement || {};
          const La = (function () {
            let a;
              let b;
              let c;
              let d = p || (/Android/i.test(T) && !_gsScope.chrome);
            return (
              O.createElementNS &&
                !d &&
                ((a = Ja("svg", Ka)),
                (b = Ja("rect", a, { width: 100, height: 50, x: 100 })),
                (c = b.getBoundingClientRect().width),
                (b.style[Fa] = "50% 50%"),
                (b.style[Da] = "scaleX(0.5)"),
                (d = c === b.getBoundingClientRect().width && !(n && Ga)),
                Ka.removeChild(a)),
              d
            );
          })();
          const Ma = function (a, b, c, d, e, f) {
            let h;
              let i;
              let j;
              let k;
              let l;
              let m;
              let n;
              let o;
              let p;
              let q;
              let r;
              let s;
              let t;
              let u;
              let v = a._gsTransform;
              const w = Ra(a, !0);
            v && ((t = v.xOrigin), (u = v.yOrigin)),
              (!d || (h = d.split(" ")).length < 2) &&
                ((n = a.getBBox()),
                n.x === 0 &&
                  n.y === 0 &&
                  n.width + n.height === 0 &&
                  (n = {
                    x:
                      parseFloat(
                        a.hasAttribute("x")
                          ? a.getAttribute("x")
                          : a.hasAttribute("cx")
                          ? a.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        a.hasAttribute("y")
                          ? a.getAttribute("y")
                          : a.hasAttribute("cy")
                          ? a.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (b = ia(b).split(" ")),
                (h = [
                  (b[0].indexOf("%") !== -1
                    ? (parseFloat(b[0]) / 100) * n.width
                    : parseFloat(b[0])) + n.x,
                  (b[1].indexOf("%") !== -1
                    ? (parseFloat(b[1]) / 100) * n.height
                    : parseFloat(b[1])) + n.y,
                ])),
              (c.xOrigin = k = parseFloat(h[0])),
              (c.yOrigin = l = parseFloat(h[1])),
              d &&
                w !== Qa &&
                ((m = w[0]),
                (n = w[1]),
                (o = w[2]),
                (p = w[3]),
                (q = w[4]),
                (r = w[5]),
                (s = m * p - n * o),
                s &&
                  ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                  (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                  (k = c.xOrigin = h[0] = i),
                  (l = c.yOrigin = h[1] = j))),
              v &&
                (f &&
                  ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                  ? ((i = k - t),
                    (j = l - u),
                    (v.xOffset += i * w[0] + j * w[2] - i),
                    (v.yOffset += i * w[1] + j * w[3] - j))
                  : (v.xOffset = v.yOffset = 0)),
              f || a.setAttribute("data-svg-origin", h.join(" "));
          };
          var Na = function (a) {
            let b;
              const c = P(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              );
              const d = this.parentNode;
              const e = this.nextSibling;
              const f = this.style.cssText;
            if (
              (Ka.appendChild(c),
              c.appendChild(this),
              (this.style.display = "block"),
              a)
            )
              try {
                (b = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Na);
              } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return (
              e ? d.insertBefore(this, e) : d.appendChild(this),
              Ka.removeChild(c),
              (this.style.cssText = f),
              b
            );
          };
          const Oa = function (a) {
            try {
              return a.getBBox();
            } catch (b) {
              return Na.call(a, !0);
            }
          };
          var Pa = function (a) {
            return !(
              !Ia ||
              !a.getCTM ||
              (a.parentNode && !a.ownerSVGElement) ||
              !Oa(a)
            );
          };
          var Qa = [1, 0, 0, 1, 0, 0];
          var Ra = function (a, b) {
            let c;
              let d;
              let e;
              let f;
              let g;
              let h;
              let i;
              const j = a._gsTransform || new Ha();
              const k = 1e5;
              const l = a.style;
            if (
              (Da
                ? (d = aa(a, Ea, null, !0))
                : a.currentStyle &&
                  ((d = a.currentStyle.filter.match(G)),
                  (d =
                    d && d.length === 4
                      ? [
                          d[0].substr(4),
                          Number(d[2].substr(4)),
                          Number(d[1].substr(4)),
                          d[3].substr(4),
                          j.x || 0,
                          j.y || 0,
                        ].join(",")
                      : "")),
              (c = !d || d === "none" || d === "matrix(1, 0, 0, 1, 0, 0)"),
              Da &&
                c &&
                !a.offsetParent &&
                ((f = l.display),
                (l.display = "block"),
                (i = a.parentNode),
                (i && a.offsetParent) ||
                  ((g = 1), (h = a.nextSibling), Ka.appendChild(a)),
                (d = aa(a, Ea, null, !0)),
                (c = !d || d === "none" || d === "matrix(1, 0, 0, 1, 0, 0)"),
                f ? (l.display = f) : Wa(l, "display"),
                g &&
                  (h
                    ? i.insertBefore(a, h)
                    : i
                    ? i.appendChild(a)
                    : Ka.removeChild(a))),
              (j.svg || (a.getCTM && Pa(a))) &&
                (c &&
                  (`${l[Da]  }`).indexOf("matrix") !== -1 &&
                  ((d = l[Da]), (c = 0)),
                (e = a.getAttribute("transform")),
                c &&
                  e &&
                  ((e = a.transform.baseVal.consolidate().matrix),
                  (d =
                    `matrix(${ 
                    e.a 
                    },${ 
                    e.b 
                    },${ 
                    e.c 
                    },${ 
                    e.d 
                    },${ 
                    e.e 
                    },${ 
                    e.f 
                    })`),
                  (c = 0))),
              c)
            )
              return Qa;
            for (e = (d || "").match(s) || [], xa = e.length; --xa > -1; )
              (f = Number(e[xa])),
                (e[xa] = (g = f - (f |= 0))
                  ? ((g * k + (g < 0 ? -0.5 : 0.5)) | 0) / k + f
                  : f);
            return b && e.length > 6
              ? [e[0], e[1], e[4], e[5], e[12], e[13]]
              : e;
          };
          var Sa = (S.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            let f;
              let h;
              let i;
              let j;
              let k;
              let l;
              const m = d ? a._gsTransform || new Ha() : new Ha();
              const n = m.scaleX < 0;
              const o = 2e-5;
              const p = 1e5;
              const q = Ga
                ? parseFloat(aa(a, Fa, c, !1, "0 0 0").split(" ")[2]) ||
                  m.zOrigin ||
                  0
                : 0;
              const r = parseFloat(g.defaultTransformPerspective) || 0;
            if (
              ((m.svg = !(!a.getCTM || !Pa(a))),
              m.svg &&
                (Ma(
                  a,
                  `${aa(a, Fa, c, !1, "50% 50%")  }`,
                  m,
                  a.getAttribute("data-svg-origin")
                ),
                (Ba = g.useSVGTransformAttr || La)),
              (f = Ra(a)),
              f !== Qa)
            ) {
              if (f.length === 16) {
                let s;
                  let t;
                  let u;
                  let v;
                  let w;
                  let x = f[0];
                  let y = f[1];
                  let z = f[2];
                  const A = f[3];
                  let B = f[4];
                  let C = f[5];
                  let D = f[6];
                  const E = f[7];
                  let F = f[8];
                  let G = f[9];
                  let H = f[10];
                  let I = f[12];
                  let J = f[13];
                  let K = f[14];
                  let M = f[11];
                  let N = Math.atan2(D, H);
                m.zOrigin &&
                  ((K = -m.zOrigin),
                  (I = F * K - f[12]),
                  (J = G * K - f[13]),
                  (K = H * K + m.zOrigin - f[14])),
                  (m.rotationX = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = B * v + F * w),
                    (t = C * v + G * w),
                    (u = D * v + H * w),
                    (F = B * -w + F * v),
                    (G = C * -w + G * v),
                    (H = D * -w + H * v),
                    (M = E * -w + M * v),
                    (B = s),
                    (C = t),
                    (D = u)),
                  (N = Math.atan2(-z, H)),
                  (m.rotationY = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = x * v - F * w),
                    (t = y * v - G * w),
                    (u = z * v - H * w),
                    (G = y * w + G * v),
                    (H = z * w + H * v),
                    (M = A * w + M * v),
                    (x = s),
                    (y = t),
                    (z = u)),
                  (N = Math.atan2(y, x)),
                  (m.rotation = N * L),
                  N &&
                    ((v = Math.cos(N)),
                    (w = Math.sin(N)),
                    (s = x * v + y * w),
                    (t = B * v + C * w),
                    (u = F * v + G * w),
                    (y = y * v - x * w),
                    (C = C * v - B * w),
                    (G = G * v - F * w),
                    (x = s),
                    (B = t),
                    (F = u)),
                  m.rotationX &&
                    Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                    ((m.rotationX = m.rotation = 0),
                    (m.rotationY = 180 - m.rotationY)),
                  (N = Math.atan2(B, C)),
                  (m.scaleX =
                    ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                  (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                  (m.scaleZ =
                    ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                  (x /= m.scaleX),
                  (B /= m.scaleY),
                  (y /= m.scaleX),
                  (C /= m.scaleY),
                  Math.abs(N) > o
                    ? ((m.skewX = N * L),
                      (B = 0),
                      m.skewType !== "simple" && (m.scaleY *= 1 / Math.cos(N)))
                    : (m.skewX = 0),
                  (m.perspective = M ? 1 / (M < 0 ? -M : M) : 0),
                  (m.x = I),
                  (m.y = J),
                  (m.z = K),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                    (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
              } else if (
                !Ga ||
                e ||
                !f.length ||
                m.x !== f[4] ||
                m.y !== f[5] ||
                (!m.rotationX && !m.rotationY)
              ) {
                const O = f.length >= 6;
                  const P = O ? f[0] : 1;
                  const Q = f[1] || 0;
                  const R = f[2] || 0;
                  const S = O ? f[3] : 1;
                (m.x = f[4] || 0),
                  (m.y = f[5] || 0),
                  (i = Math.sqrt(P * P + Q * Q)),
                  (j = Math.sqrt(S * S + R * R)),
                  (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                  (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                  (m.scaleX = i),
                  (m.scaleY = j),
                  (m.rotation = k),
                  (m.skewX = l),
                  Ga &&
                    ((m.rotationX = m.rotationY = m.z = 0),
                    (m.perspective = r),
                    (m.scaleZ = 1)),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                    (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
              }
              Math.abs(m.skewX) > 90 &&
                Math.abs(m.skewX) < 270 &&
                (n
                  ? ((m.scaleX *= -1),
                    (m.skewX += m.rotation <= 0 ? 180 : -180),
                    (m.rotation += m.rotation <= 0 ? 180 : -180))
                  : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                (m.zOrigin = q);
              for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return (
              d &&
                ((a._gsTransform = m),
                m.svg &&
                  (Ba && a.style[Da]
                    ? b.delayedCall(0.001, function () {
                        Wa(a.style, Da);
                      })
                    : !Ba &&
                      a.getAttribute("transform") &&
                      b.delayedCall(0.001, function () {
                        a.removeAttribute("transform");
                      }))),
              m
            );
          });
          const Ta = function (a) {
            let b;
              let c;
              const d = this.data;
              const e = -d.rotation * K;
              const f = e + d.skewX * K;
              const g = 1e5;
              const h = ((Math.cos(e) * d.scaleX * g) | 0) / g;
              let i = ((Math.sin(e) * d.scaleX * g) | 0) / g;
              let j = ((Math.sin(f) * -d.scaleY * g) | 0) / g;
              const k = ((Math.cos(f) * d.scaleY * g) | 0) / g;
              const l = this.t.style;
              const m = this.t.currentStyle;
            if (m) {
              (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
              let n;
                let o;
                const q = this.t.offsetWidth;
                const r = this.t.offsetHeight;
                const s = m.position !== "absolute";
                let t =
                  `progid:DXImageTransform.Microsoft.Matrix(M11=${ 
                  h 
                  }, M12=${ 
                  i 
                  }, M21=${ 
                  j 
                  }, M22=${ 
                  k}`;
                let u = d.x + (q * d.xPercent) / 100;
                let v = d.y + (r * d.yPercent) / 100;
              if (
                (d.ox != null &&
                  ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                  (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                  (u += n - (n * h + o * i)),
                  (v += o - (n * j + o * k))),
                s
                  ? ((n = q / 2),
                    (o = r / 2),
                    (t +=
                      `, Dx=${ 
                      n - (n * h + o * i) + u 
                      }, Dy=${ 
                      o - (n * j + o * k) + v 
                      })`))
                  : (t += ", sizingMethod='auto expand')"),
                b.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1
                  ? (l.filter = b.replace(H, t))
                  : (l.filter = `${t  } ${  b}`),
                (a === 0 || a === 1) &&
                  h === 1 &&
                  i === 0 &&
                  j === 0 &&
                  k === 1 &&
                  ((s && t.indexOf("Dx=0, Dy=0") === -1) ||
                    (x.test(b) && parseFloat(RegExp.$1) !== 100) ||
                    (b.indexOf(b.indexOf("Alpha")) === -1 &&
                      l.removeAttribute("filter"))),
                !s)
              ) {
                let y;
                  let z;
                  let A;
                  const B = p < 8 ? 1 : -1;
                for (
                  n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round(
                      (q - ((h < 0 ? -h : h) * q + (i < 0 ? -i : i) * r)) / 2 +
                        u
                    ),
                    d.ieOffsetY = Math.round(
                      (r - ((k < 0 ? -k : k) * r + (j < 0 ? -j : j) * q)) / 2 +
                        v
                    ),
                    xa = 0;
                  xa < 4;
                  xa++
                )
                  (z = ga[xa]),
                    (y = m[z]),
                    (c =
                      y.indexOf("px") !== -1
                        ? parseFloat(y)
                        : ba(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                    (A =
                      c !== d[z]
                        ? xa < 2
                          ? -d.ieOffsetX
                          : -d.ieOffsetY
                        : xa < 2
                        ? n - d.ieOffsetX
                        : o - d.ieOffsetY),
                    (l[z] =
                      `${d[z] = Math.round(
                        c - A * (xa === 0 || xa === 2 ? 1 : B)
                      )  }px`);
              }
            }
          };
          const Ua =
            (S.set3DTransformRatio =
            S.setTransformRatio =
              function (a) {
                let b;
                  let c;
                  let d;
                  let e;
                  let f;
                  let g;
                  let h;
                  let i;
                  let j;
                  let k;
                  let l;
                  let m;
                  let o;
                  let p;
                  let q;
                  let r;
                  let s;
                  let t;
                  let u;
                  let v;
                  let w;
                  let x;
                  let y;
                  const z = this.data;
                  const A = this.t.style;
                  let B = z.rotation;
                  const C = z.rotationX;
                  const D = z.rotationY;
                  let E = z.scaleX;
                  let F = z.scaleY;
                  let G = z.scaleZ;
                  let H = z.x;
                  let I = z.y;
                  let J = z.z;
                  const L = z.svg;
                  let M = z.perspective;
                  const N = z.force3D;
                  const O = z.skewY;
                  let P = z.skewX;
                if (
                  (O && ((P += O), (B += O)),
                  ((((a === 1 || a === 0) &&
                    N === "auto" &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !N) &&
                    !J &&
                    !M &&
                    !D &&
                    !C &&
                    G === 1) ||
                    (Ba && L) ||
                    !Ga)
                )
                  return void (B || P || L
                    ? ((B *= K),
                      (x = P * K),
                      (y = 1e5),
                      (c = Math.cos(B) * E),
                      (f = Math.sin(B) * E),
                      (d = Math.sin(B - x) * -F),
                      (g = Math.cos(B - x) * F),
                      x &&
                        z.skewType === "simple" &&
                        ((b = Math.tan(x - O * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (d *= b),
                        (g *= b),
                        O &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b))),
                      L &&
                        ((H +=
                          z.xOrigin -
                          (z.xOrigin * c + z.yOrigin * d) +
                          z.xOffset),
                        (I +=
                          z.yOrigin -
                          (z.xOrigin * f + z.yOrigin * g) +
                          z.yOffset),
                        Ba &&
                          (z.xPercent || z.yPercent) &&
                          ((q = this.t.getBBox()),
                          (H += 0.01 * z.xPercent * q.width),
                          (I += 0.01 * z.yPercent * q.height)),
                        (q = 1e-6),
                        q > H && H > -q && (H = 0),
                        q > I && I > -q && (I = 0)),
                      (u =
                        `${((c * y) | 0) / y 
                        },${ 
                        ((f * y) | 0) / y 
                        },${ 
                        ((d * y) | 0) / y 
                        },${ 
                        ((g * y) | 0) / y 
                        },${ 
                        H 
                        },${ 
                        I 
                        })`),
                      L && Ba
                        ? this.t.setAttribute("transform", `matrix(${  u}`)
                        : (A[Da] =
                            (z.xPercent || z.yPercent
                              ? `translate(${ 
                                z.xPercent 
                                }%,${ 
                                z.yPercent 
                                }%) matrix(`
                              : "matrix(") + u))
                    : (A[Da] =
                        `${(z.xPercent || z.yPercent
                          ? `translate(${ 
                            z.xPercent 
                            }%,${ 
                            z.yPercent 
                            }%) matrix(`
                          : "matrix(") +
                        E 
                        },0,0,${ 
                        F 
                        },${ 
                        H 
                        },${ 
                        I 
                        })`));
                if (
                  (n &&
                    ((q = 1e-4),
                    q > E && E > -q && (E = G = 2e-5),
                    q > F && F > -q && (F = G = 2e-5),
                    !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                  B || P)
                )
                  (B *= K),
                    (r = c = Math.cos(B)),
                    (s = f = Math.sin(B)),
                    P &&
                      ((B -= P * K),
                      (r = Math.cos(B)),
                      (s = Math.sin(B)),
                      z.skewType === "simple" &&
                        ((b = Math.tan((P - O) * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (r *= b),
                        (s *= b),
                        z.skewY &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b)))),
                    (d = -s),
                    (g = r);
                else {
                  if (!(D || C || G !== 1 || M || L))
                    return void (A[Da] =
                      `${(z.xPercent || z.yPercent
                        ? `translate(${ 
                          z.xPercent 
                          }%,${ 
                          z.yPercent 
                          }%) translate3d(`
                        : "translate3d(") +
                      H 
                      }px,${ 
                      I 
                      }px,${ 
                      J 
                      }px)${ 
                      E !== 1 || F !== 1
                        ? ` scale(${  E  },${  F  })`
                        : ""}`);
                  (c = g = 1), (d = f = 0);
                }
                (k = 1),
                  (e = h = i = j = l = m = 0),
                  (o = M ? -1 / M : 0),
                  (p = z.zOrigin),
                  (q = 1e-6),
                  (v = ","),
                  (w = "0"),
                  (B = D * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (i = -s),
                    (l = o * -s),
                    (e = c * s),
                    (h = f * s),
                    (k = r),
                    (o *= r),
                    (c *= r),
                    (f *= r)),
                  (B = C * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (b = d * r + e * s),
                    (t = g * r + h * s),
                    (j = k * s),
                    (m = o * s),
                    (e = d * -s + e * r),
                    (h = g * -s + h * r),
                    (k *= r),
                    (o *= r),
                    (d = b),
                    (g = t)),
                  G !== 1 && ((e *= G), (h *= G), (k *= G), (o *= G)),
                  F !== 1 && ((d *= F), (g *= F), (j *= F), (m *= F)),
                  E !== 1 && ((c *= E), (f *= E), (i *= E), (l *= E)),
                  (p || L) &&
                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                    L &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset)),
                    q > H && H > -q && (H = w),
                    q > I && I > -q && (I = w),
                    q > J && J > -q && (J = 0)),
                  (u =
                    z.xPercent || z.yPercent
                      ? `translate(${ 
                        z.xPercent 
                        }%,${ 
                        z.yPercent 
                        }%) matrix3d(`
                      : "matrix3d("),
                  (u +=
                    (q > c && c > -q ? w : c) +
                    v +
                    (q > f && f > -q ? w : f) +
                    v +
                    (q > i && i > -q ? w : i)),
                  (u +=
                    v +
                    (q > l && l > -q ? w : l) +
                    v +
                    (q > d && d > -q ? w : d) +
                    v +
                    (q > g && g > -q ? w : g)),
                  C || D || G !== 1
                    ? ((u +=
                        v +
                        (q > j && j > -q ? w : j) +
                        v +
                        (q > m && m > -q ? w : m) +
                        v +
                        (q > e && e > -q ? w : e)),
                      (u +=
                        v +
                        (q > h && h > -q ? w : h) +
                        v +
                        (q > k && k > -q ? w : k) +
                        v +
                        (q > o && o > -q ? w : o) +
                        v))
                    : (u += ",0,0,0,0,1,0,"),
                  (u += `${H + v + I + v + J + v + (M ? 1 + -J / M : 1)  })`),
                  (A[Da] = u);
              });
        (j = Ha.prototype),
          (j.x =
            j.y =
            j.z =
            j.skewX =
            j.skewY =
            j.rotation =
            j.rotationX =
            j.rotationY =
            j.zOrigin =
            j.xPercent =
            j.yPercent =
            j.xOffset =
            j.yOffset =
              0),
          (j.scaleX = j.scaleY = j.scaleZ = 1),
          za(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                const j = i.scale && typeof i.scale === "function" ? i.scale : 0;
                j && (i.scale = j(r, a));
                let k;
                  let l;
                  let m;
                  let n;
                  let o;
                  let p;
                  let s;
                  let t;
                  let u;
                  const v = a._gsTransform;
                  const w = a.style;
                  const x = 1e-6;
                  let y = Ca.length;
                  const z = i;
                  const A = {};
                  const B = "transformOrigin";
                  const C = Sa(a, e, !0, z.parseTransform);
                  let D =
                    z.transform &&
                    (typeof z.transform === "function"
                      ? z.transform(r, q)
                      : z.transform);
                if (
                  ((C.skewType = z.skewType || C.skewType || g.defaultSkewType),
                  (d._transform = C),
                  "rotationZ" in z && (z.rotation = z.rotationZ),
                  D && typeof D === "string" && Da)
                )
                  (l = Q.style),
                    (l[Da] = D),
                    (l.display = "block"),
                    (l.position = "absolute"),
                    D.indexOf("%") !== -1 &&
                      ((l.width = aa(a, "width")),
                      (l.height = aa(a, "height"))),
                    O.body.appendChild(Q),
                    (k = Sa(Q, null, !1)),
                    C.skewType === "simple" &&
                      (k.scaleY *= Math.cos(k.skewX * K)),
                    C.svg &&
                      ((p = C.xOrigin),
                      (s = C.yOrigin),
                      (k.x -= C.xOffset),
                      (k.y -= C.yOffset),
                      (z.transformOrigin || z.svgOrigin) &&
                        ((D = {}),
                        Ma(
                          a,
                          ia(z.transformOrigin),
                          D,
                          z.svgOrigin,
                          z.smoothOrigin,
                          !0
                        ),
                        (p = D.xOrigin),
                        (s = D.yOrigin),
                        (k.x -= D.xOffset - C.xOffset),
                        (k.y -= D.yOffset - C.yOffset)),
                      (p || s) &&
                        ((t = Ra(Q, !0)),
                        (k.x -= p - (p * t[0] + s * t[2])),
                        (k.y -= s - (p * t[1] + s * t[3])))),
                    O.body.removeChild(Q),
                    k.perspective || (k.perspective = C.perspective),
                    z.xPercent != null &&
                      (k.xPercent = ka(z.xPercent, C.xPercent)),
                    z.yPercent != null &&
                      (k.yPercent = ka(z.yPercent, C.yPercent));
                else if (typeof z === "object") {
                  if (
                    ((k = {
                      scaleX: ka(
                        z.scaleX != null ? z.scaleX : z.scale,
                        C.scaleX
                      ),
                      scaleY: ka(
                        z.scaleY != null ? z.scaleY : z.scale,
                        C.scaleY
                      ),
                      scaleZ: ka(z.scaleZ, C.scaleZ),
                      x: ka(z.x, C.x),
                      y: ka(z.y, C.y),
                      z: ka(z.z, C.z),
                      xPercent: ka(z.xPercent, C.xPercent),
                      yPercent: ka(z.yPercent, C.yPercent),
                      perspective: ka(z.transformPerspective, C.perspective),
                    }),
                    (o = z.directionalRotation),
                    o != null)
                  )
                    if (typeof o === "object") for (l in o) z[l] = o[l];
                    else z.rotation = o;
                  typeof z.x === "string" &&
                    z.x.indexOf("%") !== -1 &&
                    ((k.x = 0), (k.xPercent = ka(z.x, C.xPercent))),
                    typeof z.y === "string" &&
                      z.y.indexOf("%") !== -1 &&
                      ((k.y = 0), (k.yPercent = ka(z.y, C.yPercent))),
                    (k.rotation = la(
                      "rotation" in z
                        ? z.rotation
                        : "shortRotation" in z
                        ? `${z.shortRotation  }_short`
                        : C.rotation,
                      C.rotation,
                      "rotation",
                      A
                    )),
                    Ga &&
                      ((k.rotationX = la(
                        "rotationX" in z
                          ? z.rotationX
                          : "shortRotationX" in z
                          ? `${z.shortRotationX  }_short`
                          : C.rotationX || 0,
                        C.rotationX,
                        "rotationX",
                        A
                      )),
                      (k.rotationY = la(
                        "rotationY" in z
                          ? z.rotationY
                          : "shortRotationY" in z
                          ? `${z.shortRotationY  }_short`
                          : C.rotationY || 0,
                        C.rotationY,
                        "rotationY",
                        A
                      ))),
                    (k.skewX = la(z.skewX, C.skewX)),
                    (k.skewY = la(z.skewY, C.skewY));
                }
                for (
                  Ga &&
                    z.force3D != null &&
                    ((C.force3D = z.force3D), (n = !0)),
                    m =
                      C.force3D ||
                      C.z ||
                      C.rotationX ||
                      C.rotationY ||
                      k.z ||
                      k.rotationX ||
                      k.rotationY ||
                      k.perspective,
                    m || z.scale == null || (k.scaleZ = 1);
                  --y > -1;

                )
                  (u = Ca[y]),
                    (D = k[u] - C[u]),
                    (D > x || -x > D || z[u] != null || M[u] != null) &&
                      ((n = !0),
                      (f = new ua(C, u, C[u], D, f)),
                      u in A && (f.e = A[u]),
                      (f.xs0 = 0),
                      (f.plugin = h),
                      d._overwriteProps.push(f.n));
                return (
                  (D =
                    typeof z.transformOrigin === "function"
                      ? z.transformOrigin(r, q)
                      : z.transformOrigin),
                  C.svg &&
                    (D || z.svgOrigin) &&
                    ((p = C.xOffset),
                    (s = C.yOffset),
                    Ma(a, ia(D), k, z.svgOrigin, z.smoothOrigin),
                    (f = va(
                      C,
                      "xOrigin",
                      (v ? C : k).xOrigin,
                      k.xOrigin,
                      f,
                      B
                    )),
                    (f = va(
                      C,
                      "yOrigin",
                      (v ? C : k).yOrigin,
                      k.yOrigin,
                      f,
                      B
                    )),
                    (p !== C.xOffset || s !== C.yOffset) &&
                      ((f = va(
                        C,
                        "xOffset",
                        v ? p : C.xOffset,
                        C.xOffset,
                        f,
                        B
                      )),
                      (f = va(
                        C,
                        "yOffset",
                        v ? s : C.yOffset,
                        C.yOffset,
                        f,
                        B
                      ))),
                    (D = "0px 0px")),
                  (D || (Ga && m && C.zOrigin)) &&
                    (Da
                      ? ((n = !0),
                        (u = Fa),
                        D ||
                          ((D = (`${aa(a, u, e, !1, "50% 50%")  }`).split(" ")),
                          (D = `${D[0]  } ${  D[1]  } ${  C.zOrigin  }px`)),
                        (D += ""),
                        (f = new ua(w, u, 0, 0, f, -1, B)),
                        (f.b = w[u]),
                        (f.plugin = h),
                        Ga
                          ? ((l = C.zOrigin),
                            (D = D.split(" ")),
                            (C.zOrigin =
                              (D.length > 2 ? parseFloat(D[2]) : l) || 0),
                            (f.xs0 = f.e =
                              `${D[0]  } ${  D[1] || "50%"  } 0px`),
                            (f = new ua(C, "zOrigin", 0, 0, f, -1, f.n)),
                            (f.b = l),
                            (f.xs0 = f.e = C.zOrigin))
                          : (f.xs0 = f.e = D))
                      : ia(`${D  }`, C)),
                  n &&
                    (d._transformType =
                      (C.svg && Ba) || (!m && this._transformType !== 3)
                        ? 2
                        : 3),
                  j && (i.scale = j),
                  f
                );
              },
              allowFunc: !0,
              prefix: !0,
            }
          ),
          za("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          za("clipPath", {
            defaultValue: "inset(0px)",
            prefix: !0,
            multi: !0,
            formatter: ra("inset(0px 0px 0px 0px)", !1, !0),
          }),
          za("borderRadius", {
            defaultValue: "0px",
            parser (a, b, c, f, g, h) {
              b = this.format(b);
              let i;
                let j;
                let k;
                let l;
                let m;
                let n;
                let o;
                let p;
                let q;
                let r;
                let s;
                let t;
                let u;
                let v;
                let w;
                let x;
                const y = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ];
                const z = a.style;
              for (
                q = parseFloat(a.offsetWidth),
                  r = parseFloat(a.offsetHeight),
                  i = b.split(" "),
                  j = 0;
                j < y.length;
                j++
              )
                this.p.indexOf("border") && (y[j] = Z(y[j])),
                  (m = l = aa(a, y[j], e, !1, "0px")),
                  m.indexOf(" ") !== -1 &&
                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                  (n = k = i[j]),
                  (o = parseFloat(m)),
                  (t = m.substr((`${o  }`).length)),
                  (u = n.charAt(1) === "="),
                  u
                    ? ((p = parseInt(`${n.charAt(0)  }1`, 10)),
                      (n = n.substr(2)),
                      (p *= parseFloat(n)),
                      (s = n.substr((`${p  }`).length - (p < 0 ? 1 : 0)) || ""))
                    : ((p = parseFloat(n)), (s = n.substr((`${p  }`).length))),
                  s === "" && (s = d[c] || t),
                  s !== t &&
                    ((v = ba(a, "borderLeft", o, t)),
                    (w = ba(a, "borderTop", o, t)),
                    s === "%"
                      ? ((m = `${(v / q) * 100  }%`), (l = `${(w / r) * 100  }%`))
                      : s === "em"
                      ? ((x = ba(a, "borderLeft", 1, "em")),
                        (m = `${v / x  }em`),
                        (l = `${w / x  }em`))
                      : ((m = `${v  }px`), (l = `${w  }px`)),
                    u &&
                      ((n = parseFloat(m) + p + s),
                      (k = parseFloat(l) + p + s))),
                  (g = wa(z, y[j], `${m  } ${  l}`, `${n  } ${  k}`, !1, "0px", g));
              return g;
            },
            prefix: !0,
            formatter: ra("0px 0px 0px 0px", !1, !0),
          }),
          za(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser (a, b, c, d, f, g) {
                return wa(
                  a.style,
                  c,
                  this.format(aa(a, c, e, !1, "0px 0px")),
                  this.format(b),
                  !1,
                  "0px",
                  f
                );
              },
              prefix: !0,
              formatter: ra("0px 0px", !1, !0),
            }
          ),
          za("backgroundPosition", {
            defaultValue: "0 0",
            parser (a, b, c, d, f, g) {
              let h;
                let i;
                let j;
                let k;
                let l;
                let m;
                const n = "background-position";
                const o = e || _(a, null);
                let q = this.format(
                  (o
                    ? p
                      ? `${o.getPropertyValue(`${n  }-x`) 
                        } ${ 
                        o.getPropertyValue(`${n  }-y`)}`
                      : o.getPropertyValue(n)
                    : `${a.currentStyle.backgroundPositionX 
                      } ${ 
                      a.currentStyle.backgroundPositionY}`) || "0 0"
                );
                const r = this.format(b);
              if (
                (q.indexOf("%") !== -1) != (r.indexOf("%") !== -1) &&
                r.split(",").length < 2 &&
                ((m = aa(a, "backgroundImage").replace(D, "")),
                m && m !== "none")
              ) {
                for (
                  h = q.split(" "),
                    i = r.split(" "),
                    R.setAttribute("src", m),
                    j = 2;
                  --j > -1;

                )
                  (q = h[j]),
                    (k = q.indexOf("%") !== -1),
                    k !== (i[j].indexOf("%") !== -1) &&
                      ((l =
                        j === 0
                          ? a.offsetWidth - R.width
                          : a.offsetHeight - R.height),
                      (h[j] = k
                        ? `${(parseFloat(q) / 100) * l  }px`
                        : `${(parseFloat(q) / l) * 100  }%`));
                q = h.join(" ");
              }
              return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ia,
          }),
          za("backgroundSize", {
            defaultValue: "0 0",
            formatter (a) {
              return (
                (a += ""),
                a.substr(0, 2) === "co"
                  ? a
                  : ia(a.indexOf(" ") === -1 ? `${a  } ${  a}` : a)
              );
            },
          }),
          za("perspective", { defaultValue: "0px", prefix: !0 }),
          za("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          za("transformStyle", { prefix: !0 }),
          za("backfaceVisibility", { prefix: !0 }),
          za("userSelect", { prefix: !0 }),
          za("margin", {
            parser: sa("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          za("padding", {
            parser: sa("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          za("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser (a, b, c, d, f, g) {
              let h; let i; let j;
              return (
                p < 9
                  ? ((i = a.currentStyle),
                    (j = p < 8 ? " " : ","),
                    (h =
                      `rect(${ 
                      i.clipTop 
                      }${j 
                      }${i.clipRight 
                      }${j 
                      }${i.clipBottom 
                      }${j 
                      }${i.clipLeft 
                      })`),
                    (b = this.format(b).split(",").join(j)))
                  : ((h = this.format(aa(a, this.p, e, !1, this.dflt))),
                    (b = this.format(b))),
                this.parseComplex(a.style, h, b, f, g)
              );
            },
          }),
          za("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          za("autoRound,strictUnits", {
            parser (a, b, c, d, e) {
              return e;
            },
          }),
          za("border", {
            defaultValue: "0px solid #000",
            parser (a, b, c, d, f, g) {
              let h = aa(a, "borderTopWidth", e, !1, "0px");
                const i = this.format(b).split(" ");
                const j = i[0].replace(w, "");
              return (
                j !== "px" &&
                  (h = parseFloat(h) / ba(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(
                  a.style,
                  this.format(
                    `${h 
                      } ${ 
                      aa(a, "borderTopStyle", e, !1, "solid") 
                      } ${ 
                      aa(a, "borderTopColor", e, !1, "#000")}`
                  ),
                  i.join(" "),
                  f,
                  g
                )
              );
            },
            color: !0,
            formatter (a) {
              const b = a.split(" ");
              return (
                `${b[0] 
                } ${ 
                b[1] || "solid" 
                } ${ 
                (a.match(qa) || ["#000"])[0]}`
              );
            },
          }),
          za("borderWidth", {
            parser: sa(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          za("float,cssFloat,styleFloat", {
            parser (a, b, c, d, e, f) {
              const g = a.style;
                const h = "cssFloat" in g ? "cssFloat" : "styleFloat";
              return new ua(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            },
          });
        const Va = function (a) {
          let b;
            const c = this.t;
            let d = c.filter || aa(this.data, "filter") || "";
            const e = (this.s + this.c * a) | 0;
          e === 100 &&
            (d.indexOf("atrix(") === -1 &&
            d.indexOf("radient(") === -1 &&
            d.indexOf("oader(") === -1
              ? (c.removeAttribute("filter"), (b = !aa(this.data, "filter")))
              : ((c.filter = d.replace(z, "")), (b = !0))),
            b ||
              (this.xn1 && (c.filter = d = d || `alpha(opacity=${  e  })`),
              d.indexOf("pacity") === -1
                ? (e === 0 && this.xn1) ||
                  (c.filter = `${d  } alpha(opacity=${  e  })`)
                : (c.filter = d.replace(x, `opacity=${  e}`)));
        };
        za("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser (a, b, c, d, f, g) {
            let h = parseFloat(aa(a, "opacity", e, !1, "1"));
              const i = a.style;
              const j = c === "autoAlpha";
            return (
              typeof b === "string" &&
                b.charAt(1) === "=" &&
                (b =
                  (b.charAt(0) === "-" ? -1 : 1) * parseFloat(b.substr(2)) + h),
              j &&
                h === 1 &&
                aa(a, "visibility", e) === "hidden" &&
                b !== 0 &&
                (h = 0),
              U
                ? (f = new ua(i, "opacity", h, b - h, f))
                : ((f = new ua(i, "opacity", 100 * h, 100 * (b - h), f)),
                  (f.xn1 = j ? 1 : 0),
                  (i.zoom = 1),
                  (f.type = 2),
                  (f.b = `alpha(opacity=${  f.s  })`),
                  (f.e = `alpha(opacity=${  f.s + f.c  })`),
                  (f.data = a),
                  (f.plugin = g),
                  (f.setRatio = Va)),
              j &&
                ((f = new ua(
                  i,
                  "visibility",
                  0,
                  0,
                  f,
                  -1,
                  null,
                  !1,
                  0,
                  h !== 0 ? "inherit" : "hidden",
                  b === 0 ? "hidden" : "inherit"
                )),
                (f.xs0 = "inherit"),
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
              f
            );
          },
        });
        var Wa = function (a, b) {
            b &&
              (a.removeProperty
                ? ((b.substr(0, 2) === "ms" || b.substr(0, 6) === "webkit") &&
                    (b = `-${  b}`),
                  a.removeProperty(b.replace(B, "-$1").toLowerCase()))
                : a.removeAttribute(b));
          };
          const Xa = function (a) {
            if (((this.t._gsClassPT = this), a === 1 || a === 0)) {
              this.t.setAttribute("class", a === 0 ? this.b : this.e);
              for (let b = this.data, c = this.t.style; b; )
                b.v ? (c[b.p] = b.v) : Wa(c, b.p), (b = b._next);
              a === 1 &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        za("className", {
          parser (a, b, d, f, g, h, i) {
            let j;
              let k;
              let l;
              let m;
              let n;
              const o = a.getAttribute("class") || "";
              const p = a.style.cssText;
            if (
              ((g = f._classNamePT = new ua(a, d, 0, 0, g, 2)),
              (g.setRatio = Xa),
              (g.pr = -11),
              (c = !0),
              (g.b = o),
              (k = da(a, e)),
              (l = a._gsClassPT))
            ) {
              for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
              l.setRatio(1);
            }
            return (
              (a._gsClassPT = g),
              (g.e =
                b.charAt(1) !== "="
                  ? b
                  : o.replace(
                      new RegExp(`(?:\\s|^)${  b.substr(2)  }(?![\\w-])`),
                      ""
                    ) + (b.charAt(0) === "+" ? ` ${  b.substr(2)}` : "")),
              a.setAttribute("class", g.e),
              (j = ea(a, k, da(a), i, m)),
              a.setAttribute("class", o),
              (g.data = j.firstMPT),
              (a.style.cssText = p),
              (g = g.xfirst = f.parse(a, j.difs, g, h))
            );
          },
        });
        const Ya = function (a) {
          if (
            (a === 1 || a === 0) &&
            this.data._totalTime === this.data._totalDuration &&
            this.data.data !== "isFromStart"
          ) {
            let b;
              let c;
              let d;
              let e;
              let f;
              const g = this.t.style;
              const h = i.transform.parse;
            if (this.e === "all") (g.cssText = ""), (e = !0);
            else
              for (
                b = this.e.split(" ").join("").split(","), d = b.length;
                --d > -1;

              )
                (c = b[d]),
                  i[c] &&
                    (i[c].parse === h
                      ? (e = !0)
                      : (c = c === "transformOrigin" ? Fa : i[c].p)),
                  Wa(g, c);
            e &&
              (Wa(g, Da),
              (f = this.t._gsTransform),
              f &&
                (f.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          za("clearProps", {
            parser (a, b, d, e, f) {
              return (
                (f = new ua(a, d, 0, 0, f, 2)),
                (f.setRatio = Ya),
                (f.e = b),
                (f.pr = -10),
                (f.data = e._tween),
                (c = !0),
                f
              );
            },
          }),
            j = "bezier,throwProps,physicsProps,physics2D".split(","),
            xa = j.length;
          xa--;

        )
          Aa(j[xa]);
        (j = g.prototype),
          (j._firstPT = j._lastParsedTransform = j._transform = null),
          (j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            (this._target = q = a),
              (this._tween = h),
              (this._vars = b),
              (r = j),
              (k = b.autoRound),
              (c = !1),
              (d = b.suffixMap || g.suffixMap),
              (e = _(a, "")),
              (f = this._overwriteProps);
            let n;
              let p;
              let s;
              let t;
              let u;
              let v;
              let w;
              let x;
              let z;
              const A = a.style;
            if (
              (l &&
                A.zIndex === "" &&
                ((n = aa(a, "zIndex", e)),
                (n === "auto" || n === "") && this._addLazySet(A, "zIndex", 0)),
              typeof b === "string" &&
                ((t = A.cssText),
                (n = da(a, e)),
                (A.cssText = `${t  };${  b}`),
                (n = ea(a, n, da(a)).difs),
                !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                (b = n),
                (A.cssText = t)),
              b.className
                ? (this._firstPT = p =
                    i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                : (this._firstPT = p = this.parse(a, b, null)),
              this._transformType)
            ) {
              for (
                z = this._transformType === 3,
                  Da
                    ? m &&
                      ((l = !0),
                      A.zIndex === "" &&
                        ((w = aa(a, "zIndex", e)),
                        (w === "auto" || w === "") &&
                          this._addLazySet(A, "zIndex", 0)),
                      o &&
                        this._addLazySet(
                          A,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (z ? "visible" : "hidden")
                        ))
                    : (A.zoom = 1),
                  s = p;
                s && s._next;

              )
                s = s._next;
              (x = new ua(a, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, s),
                (x.setRatio = Da ? Ua : Ta),
                (x.data = this._transform || Sa(a, e, !0)),
                (x.tween = h),
                (x.pr = -1),
                f.pop();
            }
            if (c) {
              for (; p; ) {
                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                  (p._next = s) ? (s._prev = p) : (u = p),
                  (p = v);
              }
              this._firstPT = t;
            }
            return !0;
          }),
          (j.parse = function (a, b, c, f) {
            let g;
              let h;
              let j;
              let l;
              let m;
              let n;
              let o;
              let p;
              let s;
              let t;
              const u = a.style;
            for (g in b) {
              if (
                ((n = b[g]),
                (h = i[g]),
                typeof n !== "function" || (h && h.allowFunc) || (n = n(r, q)),
                h)
              )
                c = h.parse(a, n, g, this, c, f, b);
              else {
                if (g.substr(0, 2) === "--") {
                  this._tween._propLookup[g] = this._addTween.call(
                    this._tween,
                    a.style,
                    "setProperty",
                    `${_(a).getPropertyValue(g)  }`,
                    `${n  }`,
                    g,
                    !1,
                    g
                  );
                  continue;
                }
                (m = `${aa(a, g, e)  }`),
                  (s = typeof n === "string"),
                  g === "color" ||
                  g === "fill" ||
                  g === "stroke" ||
                  g.indexOf("Color") !== -1 ||
                  (s && A.test(n))
                    ? (s ||
                        ((n = oa(n)),
                        (n =
                          `${(n.length > 3 ? "rgba(" : "rgb(") +
                          n.join(",") 
                          })`)),
                      (c = wa(u, g, m, n, !0, "transparent", c, 0, f)))
                    : s && J.test(n)
                    ? (c = wa(u, g, m, n, !0, null, c, 0, f))
                    : ((j = parseFloat(m)),
                      (o = j || j === 0 ? m.substr((`${j  }`).length) : ""),
                      (m === "" || m === "auto") &&
                        (g === "width" || g === "height"
                          ? ((j = ha(a, g, e)), (o = "px"))
                          : g === "left" || g === "top"
                          ? ((j = ca(a, g, e)), (o = "px"))
                          : ((j = g !== "opacity" ? 0 : 1), (o = ""))),
                      (t = s && n.charAt(1) === "="),
                      t
                        ? ((l = parseInt(`${n.charAt(0)  }1`, 10)),
                          (n = n.substr(2)),
                          (l *= parseFloat(n)),
                          (p = n.replace(w, "")))
                        : ((l = parseFloat(n)),
                          (p = s ? n.replace(w, "") : "")),
                      p === "" && (p = g in d ? d[g] : o),
                      (n = l || l === 0 ? (t ? l + j : l) + p : b[g]),
                      o !== p &&
                        (p !== "" || g === "lineHeight") &&
                        (l || l === 0) &&
                        j &&
                        ((j = ba(a, g, j, o)),
                        p === "%"
                          ? ((j /= ba(a, g, 100, "%") / 100),
                            b.strictUnits !== !0 && (m = `${j  }%`))
                          : p === "em" ||
                            p === "rem" ||
                            p === "vw" ||
                            p === "vh"
                          ? (j /= ba(a, g, 1, p))
                          : p !== "px" && ((l = ba(a, g, l, p)), (p = "px")),
                        t && (l || l === 0) && (n = l + j + p)),
                      t && (l += j),
                      (!j && j !== 0) || (!l && l !== 0)
                        ? void 0 !== u[g] &&
                          (n || (`${n  }` != "NaN" && n != null))
                          ? ((c = new ua(
                              u,
                              g,
                              l || j || 0,
                              0,
                              c,
                              -1,
                              g,
                              !1,
                              0,
                              m,
                              n
                            )),
                            (c.xs0 =
                              n !== "none" ||
                              (g !== "display" && g.indexOf("Style") === -1)
                                ? n
                                : m))
                          : W(`invalid ${  g  } tween value: ${  b[g]}`)
                        : ((c = new ua(
                            u,
                            g,
                            j,
                            l - j,
                            c,
                            0,
                            g,
                            k !== !1 && (p === "px" || g === "zIndex"),
                            0,
                            m,
                            n
                          )),
                          (c.xs0 = p)));
              }
              f && c && !c.plugin && (c.plugin = f);
            }
            return c;
          }),
          (j.setRatio = function (a) {
            let b;
              let c;
              let d;
              let e = this._firstPT;
              const f = 1e-6;
            if (
              a !== 1 ||
              (this._tween._time !== this._tween._duration &&
                this._tween._time !== 0)
            )
              if (
                a ||
                (this._tween._time !== this._tween._duration &&
                  this._tween._time !== 0) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; e; ) {
                  if (
                    ((b = e.c * a + e.s),
                    e.r ? (b = e.r(b)) : f > b && b > -f && (b = 0),
                    e.type)
                  )
                    if (e.type === 1)
                      if (((d = e.l), d === 2))
                        e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                      else if (d === 3)
                        e.t[e.p] =
                          e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                      else if (d === 4)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4;
                      else if (d === 5)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4 +
                          e.xn4 +
                          e.xs5;
                      else {
                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                          c += e[`xn${  d}`] + e[`xs${  d + 1}`];
                        e.t[e.p] = c;
                      }
                    else
                      e.type === -1
                        ? (e.t[e.p] = e.xs0)
                        : e.setRatio && e.setRatio(a);
                  else e.t[e.p] = b + e.xs0;
                  e = e._next;
                }
              else
                for (; e; )
                  e.type !== 2 ? (e.t[e.p] = e.b) : e.setRatio(a),
                    (e = e._next);
            else
              for (; e; ) {
                if (e.type !== 2)
                  if (e.r && e.type !== -1)
                    if (((b = e.r(e.s + e.c)), e.type)) {
                      if (e.type === 1) {
                        for (
                          d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                          d < e.l;
                          d++
                        )
                          c += e[`xn${  d}`] + e[`xs${  d + 1}`];
                        e.t[e.p] = c;
                      }
                    } else e.t[e.p] = b + e.xs0;
                  else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next;
              }
          }),
          (j._enableTransforms = function (a) {
            (this._transform = this._transform || Sa(this._target, e, !0)),
              (this._transformType =
                (this._transform.svg && Ba) || (!a && this._transformType !== 3)
                  ? 2
                  : 3);
          });
        const Za = function (a) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (j._addLazySet = function (a, b, c) {
          const d = (this._firstPT = new ua(a, b, 0, 0, this._firstPT, 2));
          (d.e = c), (d.setRatio = Za), (d.data = this);
        }),
          (j._linkCSSP = function (a, b, c, d) {
            return (
              a &&
                (b && (b._prev = a),
                a._next && (a._next._prev = a._prev),
                a._prev
                  ? (a._prev._next = a._next)
                  : this._firstPT === a &&
                    ((this._firstPT = a._next), (d = !0)),
                c
                  ? (c._next = a)
                  : d || this._firstPT !== null || (this._firstPT = a),
                (a._next = b),
                (a._prev = c)),
              a
            );
          }),
          (j._mod = function (a) {
            for (let b = this._firstPT; b; )
              typeof a[b.p] === "function" && (b.r = a[b.p]), (b = b._next);
          }),
          (j._kill = function (b) {
            let c;
              let d;
              let e;
              let f = b;
            if (b.autoAlpha || b.alpha) {
              f = {};
              for (d in b) f[d] = b[d];
              (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
            }
            for (
              b.className &&
                (c = this._classNamePT) &&
                ((e = c.xfirst),
                e && e._prev
                  ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                  : e === this._firstPT && (this._firstPT = c._next),
                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                (this._classNamePT = null)),
                c = this._firstPT;
              c;

            )
              c.plugin &&
                c.plugin !== d &&
                c.plugin._kill &&
                (c.plugin._kill(b), (d = c.plugin)),
                (c = c._next);
            return a.prototype._kill.call(this, f);
          });
        var $a = function (a, b, c) {
          let d; let e; let f; let g;
          if (a.slice) for (e = a.length; --e > -1; ) $a(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1; )
              (f = d[e]),
                (g = f.type),
                f.style && (b.push(da(f)), c && c.push(f)),
                (g !== 1 && g !== 9 && g !== 11) ||
                  !f.childNodes.length ||
                  $a(f, b, c);
        };
        return (
          (g.cascadeTo = function (a, c, d) {
            let e;
              let f;
              let g;
              let h;
              const i = b.to(a, c, d);
              const j = [i];
              const k = [];
              const l = [];
              const m = [];
              const n = b._internals.reservedProps;
            for (
              a = i._targets || i.target,
                $a(a, k, m),
                i.render(c, !0, !0),
                $a(a, l),
                i.render(0, !0, !0),
                i._enabled(!0),
                e = m.length;
              --e > -1;

            )
              if (((f = ea(m[e], k[e], l[e])), f.firstMPT)) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
              }
            return j;
          }),
          a.activate([g]),
          g
        );
      },
      !0
    ),
    (function () {
      const a = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.7.0",
          priority: -1,
          API: 2,
          init (a, b, c) {
            return (this._tween = c), !0;
          },
        });
        const b = function (a) {
          const b = a < 1 ? Math.pow(10, (`${a  }`).length - 2) : 1;
          return function (c) {
            return ((Math.round(c / a) * a * b) | 0) / b;
          };
        };
        const c = function (a, b) {
          for (; a; ) a.f || a.blob || (a.m = b || Math.round), (a = a._next);
        };
        const d = a.prototype;
      (d._onInitAllProps = function () {
        let a;
          let d;
          let e;
          let f;
          const g = this._tween;
          let h = g.vars.roundProps;
          const i = {};
          const j = g._propLookup.roundProps;
        if (typeof h !== "object" || h.push)
          for (
            typeof h === "string" && (h = h.split(",")), e = h.length;
            --e > -1;

          )
            i[h[e]] = Math.round;
        else for (f in h) i[f] = b(h[f]);
        for (f in i)
          for (a = g._firstPT; a; )
            (d = a._next),
              a.pg
                ? a.t._mod(i)
                : a.n === f &&
                  (a.f === 2 && a.t
                    ? c(a.t._firstPT, i[f])
                    : (this._add(a.t, f, a.s, a.c, i[f]),
                      d && (d._prev = a._prev),
                      a._prev
                        ? (a._prev._next = d)
                        : g._firstPT === a && (g._firstPT = d),
                      (a._next = a._prev = null),
                      (g._propLookup[f] = j))),
              (a = d);
        return !1;
      }),
        (d._add = function (a, b, c, d, e) {
          this._addTween(a, b, c, c + d, b, e || Math.round),
            this._overwriteProps.push(b);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init (a, b, c, d) {
          let e; let f;
          if (typeof a.setAttribute !== "function") return !1;
          for (e in b)
            (f = b[e]),
              typeof f === "function" && (f = f(d, a)),
              this._addTween(
                a,
                "setAttribute",
                `${a.getAttribute(e)  }`,
                `${f  }`,
                e,
                !1,
                e
              ),
              this._overwriteProps.push(e);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init (a, b, c, d) {
        typeof b !== "object" && (b = { rotation: b }), (this.finals = {});
        let e;
          let f;
          let g;
          let h;
          let i;
          let j;
          const k = b.useRadians === !0 ? 2 * Math.PI : 360;
          const l = 1e-6;
        for (e in b)
          e !== "useRadians" &&
            ((h = b[e]),
            typeof h === "function" && (h = h(d, a)),
            (j = (`${h  }`).split("_")),
            (f = j[0]),
            (g = parseFloat(
              typeof a[e] !== "function"
                ? a[e]
                : a[
                    e.indexOf("set") ||
                    typeof a[`get${  e.substr(3)}`] !== "function"
                      ? e
                      : `get${  e.substr(3)}`
                  ]()
            )),
            (h = this.finals[e] =
              typeof f === "string" && f.charAt(1) === "="
                ? g + parseInt(`${f.charAt(0)  }1`, 10) * Number(f.substr(2))
                : Number(f) || 0),
            (i = h - g),
            j.length &&
              ((f = j.join("_")),
              f.indexOf("short") !== -1 &&
                ((i %= k), i !== i % (k / 2) && (i = i < 0 ? i + k : i - k)),
              f.indexOf("_cw") !== -1 && i < 0
                ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k)
                : f.indexOf("ccw") !== -1 &&
                  i > 0 &&
                  (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
            (i > l || -l > i) &&
              (this._addTween(a, e, g, g + i, e),
              this._overwriteProps.push(e)));
        return !0;
      },
      set (a) {
        let b;
        if (a !== 1) this._super.setRatio.call(this, a);
        else
          for (b = this._firstPT; b; )
            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
              (b = b._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (a) {
        let b;
          let c;
          let d;
          let e;
          const f = _gsScope.GreenSockGlobals || _gsScope;
          const g = f.com.greensock;
          const h = 2 * Math.PI;
          const i = Math.PI / 2;
          const j = g._class;
          const k = function (b, c) {
            const d = j(`easing.${  b}`, function () {}, !0);
              const e = (d.prototype = new a());
            return (e.constructor = d), (e.getRatio = c), d;
          };
          const l = a.register || function () {};
          const m = function (a, b, c, d, e) {
            const f = j(
              `easing.${  a}`,
              { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
              !0
            );
            return l(f, a), f;
          };
          const n = function (a, b, c) {
            (this.t = a),
              (this.v = b),
              c &&
                ((this.next = c),
                (c.prev = this),
                (this.c = c.v - b),
                (this.gap = c.t - a));
          };
          const o = function (b, c) {
            const d = j(
                `easing.${  b}`,
                function (a) {
                  (this._p1 = a || a === 0 ? a : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              );
              const e = (d.prototype = new a());
            return (
              (e.constructor = d),
              (e.getRatio = c),
              (e.config = function (a) {
                return new d(a);
              }),
              d
            );
          };
          const p = m(
            "Back",
            o("BackOut", function (a) {
              return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
            }),
            o("BackIn", function (a) {
              return a * a * ((this._p1 + 1) * a - this._p1);
            }),
            o("BackInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
            })
          );
          const q = j(
            "easing.SlowMo",
            function (a, b, c) {
              (b = b || b === 0 ? b : 0.7),
                a == null ? (a = 0.7) : a > 1 && (a = 1),
                (this._p = a !== 1 ? b : 0),
                (this._p1 = (1 - a) / 2),
                (this._p2 = a),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = c === !0);
            },
            !0
          );
          let r = (q.prototype = new a());
        return (
          (r.constructor = q),
          (r.getRatio = function (a) {
            const b = a + (0.5 - a) * this._p;
            return a < this._p1
              ? this._calcEnd
                ? 1 - (a = 1 - a / this._p1) * a
                : b - (a = 1 - a / this._p1) * a * a * a * b
              : a > this._p3
              ? this._calcEnd
                ? a === 1
                  ? 0
                  : 1 - (a = (a - this._p3) / this._p1) * a
                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
              : this._calcEnd
              ? 1
              : b;
          }),
          (q.ease = new q(0.7, 0.7)),
          (r.config = q.config =
            function (a, b, c) {
              return new q(a, b, c);
            }),
          (b = j(
            "easing.SteppedEase",
            function (a, b) {
              (a = a || 1),
                (this._p1 = 1 / a),
                (this._p2 = a + (b ? 0 : 1)),
                (this._p3 = b ? 1 : 0);
            },
            !0
          )),
          (r = b.prototype = new a()),
          (r.constructor = b),
          (r.getRatio = function (a) {
            return (
              a < 0 ? (a = 0) : a >= 1 && (a = 0.999999999),
              (((this._p2 * a) | 0) + this._p3) * this._p1
            );
          }),
          (r.config = b.config =
            function (a, c) {
              return new b(a, c);
            }),
          (c = j(
            "easing.ExpoScaleEase",
            function (a, b, c) {
              (this._p1 = Math.log(b / a)),
                (this._p2 = b - a),
                (this._p3 = a),
                (this._ease = c);
            },
            !0
          )),
          (r = c.prototype = new a()),
          (r.constructor = c),
          (r.getRatio = function (a) {
            return (
              this._ease && (a = this._ease.getRatio(a)),
              (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
            );
          }),
          (r.config = c.config =
            function (a, b, d) {
              return new c(a, b, d);
            }),
          (d = j(
            "easing.RoughEase",
            function (b) {
              b = b || {};
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = b.taper || "none",
                  j = [],
                  k = 0,
                  l = 0 | (b.points || 20),
                  m = l,
                  o = b.randomize !== !1,
                  p = b.clamp === !0,
                  q = b.template instanceof a ? b.template : null,
                  r = typeof b.strength === "number" ? 0.4 * b.strength : 0.4;
                --m > -1;

              )
                (c = o ? Math.random() : (1 / l) * m),
                  (d = q ? q.getRatio(c) : c),
                  i === "none"
                    ? (e = r)
                    : i === "out"
                    ? ((f = 1 - c), (e = f * f * r))
                    : i === "in"
                    ? (e = c * c * r)
                    : c < 0.5
                    ? ((f = 2 * c), (e = f * f * 0.5 * r))
                    : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                  o
                    ? (d += Math.random() * e - 0.5 * e)
                    : m % 2
                    ? (d += 0.5 * e)
                    : (d -= 0.5 * e),
                  p && (d > 1 ? (d = 1) : d < 0 && (d = 0)),
                  (j[k++] = { x: c, y: d });
              for (
                j.sort(function (a, b) {
                  return a.x - b.x;
                }),
                  h = new n(1, 1, null),
                  m = l;
                --m > -1;

              )
                (g = j[m]), (h = new n(g.x, g.y, h));
              this._prev = new n(0, 0, h.t !== 0 ? h : h.next);
            },
            !0
          )),
          (r = d.prototype = new a()),
          (r.constructor = d),
          (r.getRatio = function (a) {
            let b = this._prev;
            if (a > b.t) {
              for (; b.next && a >= b.t; ) b = b.next;
              b = b.prev;
            } else for (; b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
          }),
          (r.config = function (a) {
            return new d(a);
          }),
          (d.ease = new d()),
          m(
            "Bounce",
            k("BounceOut", function (a) {
              return 1 / 2.75 > a
                ? 7.5625 * a * a
                : 2 / 2.75 > a
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : 2.5 / 2.75 > a
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }),
            k("BounceIn", function (a) {
              return (a = 1 - a) < 1 / 2.75
                ? 1 - 7.5625 * a * a
                : 2 / 2.75 > a
                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                : 2.5 / 2.75 > a
                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
            }),
            k("BounceInOut", function (a) {
              const b = a < 0.5;
              return (
                (a = b ? 1 - 2 * a : 2 * a - 1),
                (a =
                  1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
              );
            })
          ),
          m(
            "Circ",
            k("CircOut", function (a) {
              return Math.sqrt(1 - (a -= 1) * a);
            }),
            k("CircIn", function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }),
            k("CircInOut", function (a) {
              return (a *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            })
          ),
          (e = function (b, c, d) {
            const e = j(
                `easing.${  b}`,
                function (a, b) {
                  (this._p1 = a >= 1 ? a : 1),
                    (this._p2 = (b || d) / (a < 1 ? a : 1)),
                    (this._p3 =
                      (this._p2 / h) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = h / this._p2);
                },
                !0
              );
              const f = (e.prototype = new a());
            return (
              (f.constructor = e),
              (f.getRatio = c),
              (f.config = function (a, b) {
                return new e(a, b);
              }),
              e
            );
          }),
          m(
            "Elastic",
            e(
              "ElasticOut",
              function (a) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * a) *
                    Math.sin((a - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            e(
              "ElasticIn",
              function (a) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin((a - this._p3) * this._p2)
                );
              },
              0.3
            ),
            e(
              "ElasticInOut",
              function (a) {
                return (a *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          m(
            "Expo",
            k("ExpoOut", function (a) {
              return 1 - Math.pow(2, -10 * a);
            }),
            k("ExpoIn", function (a) {
              return Math.pow(2, 10 * (a - 1)) - 0.001;
            }),
            k("ExpoInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (a - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
            })
          ),
          m(
            "Sine",
            k("SineOut", function (a) {
              return Math.sin(a * i);
            }),
            k("SineIn", function (a) {
              return -Math.cos(a * i) + 1;
            }),
            k("SineInOut", function (a) {
              return -0.5 * (Math.cos(Math.PI * a) - 1);
            })
          ),
          j(
            "easing.EaseLookup",
            {
              find (b) {
                return a.map[b];
              },
            },
            !0
          ),
          l(f.SlowMo, "SlowMo", "ease,"),
          l(d, "RoughEase", "ease,"),
          l(b, "SteppedEase", "ease,"),
          p
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    
    const c = {};
      let d = a.document;
      const e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
      const f = e[b];
    if (f)
      return (
        typeof module !== "undefined" && module.exports && (module.exports = f),
        f
      );
    let g;
      let h;
      let i;
      let j;
      let k;
      const l = function (a) {
        let b;
          const c = a.split(".");
          let d = e;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d;
      };
      const m = l("com.greensock");
      const n = 1e-8;
      const o = function (a) {
        let b;
          const c = [];
          const d = a.length;
        for (b = 0; b !== d; c.push(a[b++]));
        return c;
      };
      const p = function () {};
      const q = (function () {
        const a = Object.prototype.toString;
          const b = a.call([]);
        return function (c) {
          return (
            c != null &&
            (c instanceof Array ||
              (typeof c === "object" && !!c.push && a.call(c) === b))
          );
        };
      })();
      const r = {};
      var s = function (d, f, g, h) {
        (this.sc = r[d] ? r[d].sc : []),
          (r[d] = this),
          (this.gsClass = null),
          (this.func = g);
        const i = [];
        (this.check = function (j) {
          for (var k, m, n, o, p = f.length, q = p; --p > -1; )
            (k = r[f[p]] || new s(f[p], [])).gsClass
              ? ((i[p] = k.gsClass), q--)
              : j && k.sc.push(this);
          if (q === 0 && g) {
            if (
              ((m = (`com.greensock.${  d}`).split(".")),
              (n = m.pop()),
              (o = l(m.join("."))[n] = this.gsClass = g.apply(g, i)),
              h)
            )
              if (
                ((e[n] = c[n] = o),
                typeof module !== "undefined" && module.exports)
              )
                if (d === b) {
                  module.exports = c[b] = o;
                  for (p in c) o[p] = c[p];
                } else c[b] && (c[b][n] = o);
              else
                typeof define === "function" &&
                  define.amd &&
                  define(
                    (a.GreenSockAMDPath ? `${a.GreenSockAMDPath  }/` : "") +
                      d.split(".").pop(),
                    [],
                    function () {
                      return o;
                    }
                  );
            for (p = 0; p < this.sc.length; p++) this.sc[p].check();
          }
        }),
          this.check(!0);
      };
      const t = (a._gsDefine = function (a, b, c, d) {
        return new s(a, b, c, d);
      });
      const u = (m._class = function (a, b, c) {
        return (
          (b = b || function () {}),
          t(
            a,
            [],
            function () {
              return b;
            },
            c
          ),
          b
        );
      });
    t.globals = e;
    const v = [0, 0, 1, 1];
      const w = u(
        "easing.Ease",
        function (a, b, c, d) {
          (this._func = a),
            (this._type = c || 0),
            (this._power = d || 0),
            (this._params = b ? v.concat(b) : v);
        },
        !0
      );
      const x = (w.map = {});
      const y = (w.register = function (a, b, c, d) {
        for (
          var e,
            f,
            g,
            h,
            i = b.split(","),
            j = i.length,
            k = (c || "easeIn,easeOut,easeInOut").split(",");
          --j > -1;

        )
          for (
            f = i[j],
              e = d ? u(`easing.${  f}`, null, !0) : m.easing[f] || {},
              g = k.length;
            --g > -1;

          )
            (h = k[g]),
              (x[`${f  }.${  h}`] =
                x[h + f] =
                e[h] =
                  a.getRatio ? a : a[h] || new a());
      });
    for (
      i = w.prototype,
        i._calcEnd = !1,
        i.getRatio = function (a) {
          if (this._func)
            return (this._params[0] = a), this._func.apply(null, this._params);
          const b = this._type;
            const c = this._power;
            let d = b === 1 ? 1 - a : b === 2 ? a : a < 0.5 ? 2 * a : 2 * (1 - a);
          return (
            c === 1
              ? (d *= d)
              : c === 2
              ? (d *= d * d)
              : c === 3
              ? (d *= d * d * d)
              : c === 4 && (d *= d * d * d * d),
            b === 1 ? 1 - d : b === 2 ? d : a < 0.5 ? d / 2 : 1 - d / 2
          );
        },
        g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        h = g.length;
      --h > -1;

    )
      (i = `${g[h]  },Power${  h}`),
        y(new w(null, null, 1, h), i, "easeOut", !0),
        y(new w(null, null, 2, h), i, `easeIn${  h === 0 ? ",easeNone" : ""}`),
        y(new w(null, null, 3, h), i, "easeInOut");
    (x.linear = m.easing.Linear.easeIn), (x.swing = m.easing.Quad.easeInOut);
    const z = u("events.EventDispatcher", function (a) {
      (this._listeners = {}), (this._eventTarget = a || this);
    });
    (i = z.prototype),
      (i.addEventListener = function (a, b, c, d, e) {
        e = e || 0;
        let f;
          let g;
          let h = this._listeners[a];
          let i = 0;
        for (
          this !== j || k || j.wake(),
            h == null && (this._listeners[a] = h = []),
            g = h.length;
          --g > -1;

        )
          (f = h[g]),
            f.c === b && f.s === c
              ? h.splice(g, 1)
              : i === 0 && f.pr < e && (i = g + 1);
        h.splice(i, 0, { c: b, s: c, up: d, pr: e });
      }),
      (i.removeEventListener = function (a, b) {
        let c;
          const d = this._listeners[a];
        if (d)
          for (c = d.length; --c > -1; )
            if (d[c].c === b) return void d.splice(c, 1);
      }),
      (i.dispatchEvent = function (a) {
        let b;
          let c;
          let d;
          let e = this._listeners[a];
        if (e)
          for (
            b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
            --b > -1;

          )
            (d = e[b]),
              d &&
                (d.up
                  ? d.c.call(d.s || c, { type: a, target: c })
                  : d.c.call(d.s || c));
      });
    let A = a.requestAnimationFrame;
      let B = a.cancelAnimationFrame;
      const C =
        Date.now ||
        function () {
          return new Date().getTime();
        };
      let D = C();
    for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A; )
      (A = a[`${g[h]  }RequestAnimationFrame`]),
        (B =
          a[`${g[h]  }CancelAnimationFrame`] ||
          a[`${g[h]  }CancelRequestAnimationFrame`]);
    u("Ticker", function (a, b) {
      let c;
        let e;
        let f;
        let g;
        let h;
        const i = this;
        let l = C();
        let m = b !== !1 && A ? "auto" : !1;
        let o = 500;
        let q = 33;
        const r = "tick";
        var s = function (a) {
          let b;
            let d;
            const j = C() - D;
          j > o && (l += j - q),
            (D += j),
            (i.time = (D - l) / 1e3),
            (b = i.time - h),
            (!c || b > 0 || a === !0) &&
              (i.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
            a !== !0 && (f = e(s)),
            d && i.dispatchEvent(r);
        };
      z.call(i),
        (i.time = i.frame = 0),
        (i.tick = function () {
          s(!0);
        }),
        (i.lagSmoothing = function (a, b) {
          return arguments.length
            ? ((o = a || 1 / n), void (q = Math.min(b, o, 0)))
            : 1 / n > o;
        }),
        (i.sleep = function () {
          f != null &&
            (m && B ? B(f) : clearTimeout(f),
            (e = p),
            (f = null),
            i === j && (k = !1));
        }),
        (i.wake = function (a) {
          f !== null
            ? i.sleep()
            : a
            ? (l += -D + (D = C()))
            : i.frame > 10 && (D = C() - o + 5),
            (e =
              c === 0
                ? p
                : m && A
                ? A
                : function (a) {
                    return setTimeout(a, (1e3 * (h - i.time) + 1) | 0);
                  }),
            i === j && (k = !0),
            s(2);
        }),
        (i.fps = function (a) {
          return arguments.length
            ? ((c = a), (g = 1 / (c || 60)), (h = this.time + g), void i.wake())
            : c;
        }),
        (i.useRAF = function (a) {
          return arguments.length ? (i.sleep(), (m = a), void i.fps(c)) : m;
        }),
        i.fps(a),
        setTimeout(function () {
          m === "auto" &&
            i.frame < 5 &&
            (d || {}).visibilityState !== "hidden" &&
            i.useRAF(!1);
        }, 1500);
    }),
      (i = m.Ticker.prototype = new m.events.EventDispatcher()),
      (i.constructor = m.Ticker);
    const E = u("core.Animation", function (a, b) {
      if (
        ((this.vars = b = b || {}),
        (this._duration = this._totalDuration = a || 0),
        (this._delay = Number(b.delay) || 0),
        (this._timeScale = 1),
        (this._active = !!b.immediateRender),
        (this.data = b.data),
        (this._reversed = !!b.reversed),
        Z)
      ) {
        k || j.wake();
        const c = this.vars.useFrames ? Y : Z;
        c.add(this, c._time), this.vars.paused && this.paused(!0);
      }
    });
    (j = E.ticker = new m.Ticker()),
      (i = E.prototype),
      (i._dirty = i._gc = i._initted = i._paused = !1),
      (i._totalTime = i._time = 0),
      (i._rawPrevTime = -1),
      (i._next = i._last = i._onUpdate = i._timeline = i.timeline = null),
      (i._paused = !1);
    var F = function () {
      k &&
        C() - D > 2e3 &&
        ((d || {}).visibilityState !== "hidden" || !j.lagSmoothing()) &&
        j.wake();
      const a = setTimeout(F, 2e3);
      a.unref && a.unref();
    };
    F(),
      (i.play = function (a, b) {
        return a != null && this.seek(a, b), this.reversed(!1).paused(!1);
      }),
      (i.pause = function (a, b) {
        return a != null && this.seek(a, b), this.paused(!0);
      }),
      (i.resume = function (a, b) {
        return a != null && this.seek(a, b), this.paused(!1);
      }),
      (i.seek = function (a, b) {
        return this.totalTime(Number(a), b !== !1);
      }),
      (i.restart = function (a, b) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(a ? -this._delay : 0, b !== !1, !0);
      }),
      (i.reverse = function (a, b) {
        return (
          a != null && this.seek(a || this.totalDuration(), b),
          this.reversed(!0).paused(!1)
        );
      }),
      (i.render = function (a, b, c) {}),
      (i.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (this._gc || !this.timeline) && this._enabled(!0),
          this
        );
      }),
      (i.isActive = function () {
        let a;
          const b = this._timeline;
          const c = this._startTime;
        return (
          !b ||
          (!this._gc &&
            !this._paused &&
            b.isActive() &&
            (a = b.rawTime(!0)) >= c &&
            a < c + this.totalDuration() / this._timeScale - n)
        );
      }),
      (i._enabled = function (a, b) {
        return (
          k || j.wake(),
          (this._gc = !a),
          (this._active = this.isActive()),
          b !== !0 &&
            (a && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !a && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (i._kill = function (a, b) {
        return this._enabled(!1, !1);
      }),
      (i.kill = function (a, b) {
        return this._kill(a, b), this;
      }),
      (i._uncache = function (a) {
        for (let b = a ? this : this.timeline; b; )
          (b._dirty = !0), (b = b.timeline);
        return this;
      }),
      (i._swapSelfInParams = function (a) {
        for (var b = a.length, c = a.concat(); --b > -1; )
          a[b] === "{self}" && (c[b] = this);
        return c;
      }),
      (i._callback = function (a) {
        const b = this.vars;
          const c = b[a];
          const d = b[`${a  }Params`];
          const e = b[`${a  }Scope`] || b.callbackScope || this;
          const f = d ? d.length : 0;
        switch (f) {
          case 0:
            c.call(e);
            break;
          case 1:
            c.call(e, d[0]);
            break;
          case 2:
            c.call(e, d[0], d[1]);
            break;
          default:
            c.apply(e, d);
        }
      }),
      (i.eventCallback = function (a, b, c, d) {
        if ((a || "").substr(0, 2) === "on") {
          const e = this.vars;
          if (arguments.length === 1) return e[a];
          b == null
            ? delete e[a]
            : ((e[a] = b),
              (e[`${a  }Params`] =
                q(c) && c.join("").indexOf("{self}") !== -1
                  ? this._swapSelfInParams(c)
                  : c),
              (e[`${a  }Scope`] = d)),
            a === "onUpdate" && (this._onUpdate = b);
        }
        return this;
      }),
      (i.delay = function (a) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + a - this._delay),
            (this._delay = a),
            this)
          : this._delay;
      }),
      (i.duration = function (a) {
        return arguments.length
          ? ((this._duration = this._totalDuration = a),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              this._time > 0 &&
              this._time < this._duration &&
              a !== 0 &&
              this.totalTime(this._totalTime * (a / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (i.totalDuration = function (a) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(a) : this._totalDuration
        );
      }),
      (i.time = function (a, b) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b))
          : this._time;
      }),
      (i.totalTime = function (a, b, c) {
        if ((k || j.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (a < 0 && !c && (a += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            const d = this._totalDuration;
              let e = this._timeline;
            if (
              (a > d && !c && (a = d),
              (this._startTime =
                (this._paused ? this._pauseTime : e._time) -
                (this._reversed ? d - a : a) / this._timeScale),
              e._dirty || this._uncache(!1),
              e._timeline)
            )
              for (; e._timeline; )
                e._timeline._time !==
                  (e._startTime + e._totalTime) / e._timeScale &&
                  e.totalTime(e._totalTime, !0),
                  (e = e._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime !== a || this._duration === 0) &&
              (K.length && _(), this.render(a, b, !1), K.length && _());
        }
        return this;
      }),
      (i.progress = i.totalProgress =
        function (a, b) {
          const c = this.duration();
          return arguments.length
            ? this.totalTime(c * a, b)
            : c
            ? this._time / c
            : this.ratio;
        }),
      (i.startTime = function (a) {
        return arguments.length
          ? (a !== this._startTime &&
              ((this._startTime = a),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, a - this._delay)),
            this)
          : this._startTime;
      }),
      (i.endTime = function (a) {
        return (
          this._startTime +
          (a != 0 ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (i.timeScale = function (a) {
        if (!arguments.length) return this._timeScale;
        let b; let c;
        for (
          a = a || n,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((b = this._pauseTime),
              (c = b || b === 0 ? b : this._timeline.totalTime()),
              (this._startTime =
                c - ((c - this._startTime) * this._timeScale) / a)),
            this._timeScale = a,
            c = this.timeline;
          c && c.timeline;

        )
          (c._dirty = !0), c.totalDuration(), (c = c.timeline);
        return this;
      }),
      (i.reversed = function (a) {
        return arguments.length
          ? (a != this._reversed &&
              ((this._reversed = a),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (i.paused = function (a) {
        if (!arguments.length) return this._paused;
        let b;
          let c;
          const d = this._timeline;
        return (
          a != this._paused &&
            d &&
            (k || a || j.wake(),
            (b = d.rawTime()),
            (c = b - this._pauseTime),
            !a &&
              d.smoothChildTiming &&
              ((this._startTime += c), this._uncache(!1)),
            (this._pauseTime = a ? b : null),
            (this._paused = a),
            (this._active = this.isActive()),
            !a &&
              c !== 0 &&
              this._initted &&
              this.duration() &&
              ((b = d.smoothChildTiming
                ? this._totalTime
                : (b - this._startTime) / this._timeScale),
              this.render(b, b === this._totalTime, !0))),
          this._gc && !a && this._enabled(!0, !1),
          this
        );
      });
    const G = u("core.SimpleTimeline", function (a) {
      E.call(this, 0, a),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    (i = G.prototype = new E()),
      (i.constructor = G),
      (i.kill()._gc = !1),
      (i._first = i._last = i._recent = null),
      (i._sortChildren = !1),
      (i.add = i.insert =
        function (a, b, c, d) {
          let e; let f;
          if (
            ((a._startTime = Number(b || 0) + a._delay),
            a._paused &&
              this !== a._timeline &&
              (a._pauseTime =
                this.rawTime() - (a._timeline.rawTime() - a._pauseTime)),
            a.timeline && a.timeline._remove(a, !0),
            (a.timeline = a._timeline = this),
            a._gc && a._enabled(!0, !0),
            (e = this._last),
            this._sortChildren)
          )
            for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
          return (
            e
              ? ((a._next = e._next), (e._next = a))
              : ((a._next = this._first), (this._first = a)),
            a._next ? (a._next._prev = a) : (this._last = a),
            (a._prev = e),
            (this._recent = a),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (i._remove = function (a, b) {
        return (
          a.timeline === this &&
            (b || a._enabled(!1, !0),
            a._prev
              ? (a._prev._next = a._next)
              : this._first === a && (this._first = a._next),
            a._next
              ? (a._next._prev = a._prev)
              : this._last === a && (this._last = a._prev),
            (a._next = a._prev = a.timeline = null),
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (i.render = function (a, b, c) {
        let d;
          let e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e; )
          (d = e._next),
            (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
              (e._reversed
                ? e.render(
                    (e._dirty ? e.totalDuration() : e._totalDuration) -
                      (a - e._startTime) * e._timeScale,
                    b,
                    c
                  )
                : e.render((a - e._startTime) * e._timeScale, b, c)),
            (e = d);
      }),
      (i.rawTime = function () {
        return k || j.wake(), this._totalTime;
      });
    var H = u(
        "TweenLite",
        function (b, c, d) {
          if (
            (E.call(this, c, d), (this.render = H.prototype.render), b == null)
          )
            throw "Cannot tween a null target.";
          this.target = b = typeof b !== "string" ? b : H.selector(b) || b;
          let e;
            let f;
            let g;
            const h =
              b.jquery ||
              (b.length &&
                b !== a &&
                b[0] &&
                (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType)));
            let i = this.vars.overwrite;
          if (
            ((this._overwrite = i =
              i == null
                ? X[H.defaultOverwrite]
                : typeof i === "number"
                ? i >> 0
                : X[i]),
            (h || b instanceof Array || (b.push && q(b))) &&
              typeof b[0] !== "number")
          )
            for (
              this._targets = g = o(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0;
              e < g.length;
              e++
            )
              (f = g[e]),
                f
                  ? typeof f !== "string"
                    ? f.length &&
                      f !== a &&
                      f[0] &&
                      (f[0] === a ||
                        (f[0].nodeType && f[0].style && !f.nodeType))
                      ? (g.splice(e--, 1), (this._targets = g = g.concat(o(f))))
                      : ((this._siblings[e] = aa(f, this, !1)),
                        i === 1 &&
                          this._siblings[e].length > 1 &&
                          ca(f, this, null, 1, this._siblings[e]))
                    : ((f = g[e--] = H.selector(f)),
                      typeof f === "string" && g.splice(e + 1, 1))
                  : g.splice(e--, 1);
          else
            (this._propLookup = {}),
              (this._siblings = aa(b, this, !1)),
              i === 1 &&
                this._siblings.length > 1 &&
                ca(b, this, null, 1, this._siblings);
          (this.vars.immediateRender ||
            (c === 0 &&
              this._delay === 0 &&
              this.vars.immediateRender !== !1)) &&
            ((this._time = -n), this.render(Math.min(0, -this._delay)));
        },
        !0
      );
      const I = function (b) {
        return (
          b &&
          b.length &&
          b !== a &&
          b[0] &&
          (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
        );
      };
      const J = function (a, b) {
        let c;
          const d = {};
        for (c in a)
          W[c] ||
            (c in b &&
              c !== "transform" &&
              c !== "x" &&
              c !== "y" &&
              c !== "width" &&
              c !== "height" &&
              c !== "className" &&
              c !== "border") ||
            !(!T[c] || (T[c] && T[c]._autoCSS)) ||
            ((d[c] = a[c]), delete a[c]);
        a.css = d;
      };
    (i = H.prototype = new E()),
      (i.constructor = H),
      (i.kill()._gc = !1),
      (i.ratio = 0),
      (i._firstPT = i._targets = i._overwrittenProps = i._startAt = null),
      (i._notifyPluginsOfEnabled = i._lazy = !1),
      (H.version = "2.1.2"),
      (H.defaultEase = i._ease = new w(null, null, 1, 1)),
      (H.defaultOverwrite = "auto"),
      (H.ticker = j),
      (H.autoSleep = 120),
      (H.lagSmoothing = function (a, b) {
        j.lagSmoothing(a, b);
      }),
      (H.selector =
        a.$ ||
        a.jQuery ||
        function (b) {
          const c = a.$ || a.jQuery;
          return c
            ? ((H.selector = c), c(b))
            : (d || (d = a.document),
              d
                ? d.querySelectorAll
                  ? d.querySelectorAll(b)
                  : d.getElementById(b.charAt(0) === "#" ? b.substr(1) : b)
                : b);
        });
    var K = [];
      let L = {};
      const M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
      const N = /[\+-]=-?[\.\d]/;
      const O = function (a) {
        for (var b, c = this._firstPT, d = 1e-6; c; )
          (b = c.blob
            ? a === 1 && this.end != null
              ? this.end
              : a
              ? this.join("")
              : this.start
            : c.c * a + c.s),
            c.m
              ? (b = c.m.call(this._tween, b, this._target || c.t, this._tween))
              : d > b && b > -d && !c.blob && (b = 0),
            c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
            (c = c._next);
      };
      const P = function (a) {
        return `${((1e3 * a) | 0) / 1e3  }`;
      };
      const Q = function (a, b, c, d) {
        let e;
          let f;
          let g;
          let h;
          let i;
          let j;
          let k;
          const l = [];
          let m = 0;
          let n = "";
          let o = 0;
        for (
          l.start = a,
            l.end = b,
            a = l[0] = `${a  }`,
            b = l[1] = `${b  }`,
            c && (c(l), (a = l[0]), (b = l[1])),
            l.length = 0,
            e = a.match(M) || [],
            f = b.match(M) || [],
            d &&
              ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
            i = f.length,
            h = 0;
          i > h;
          h++
        )
          (k = f[h]),
            (j = b.substr(m, b.indexOf(k, m) - m)),
            (n += j || !h ? j : ","),
            (m += j.length),
            o ? (o = (o + 1) % 5) : j.substr(-5) === "rgba(" && (o = 1),
            k === e[h] || e.length <= h
              ? (n += k)
              : (n && (l.push(n), (n = "")),
                (g = parseFloat(e[h])),
                l.push(g),
                (l._firstPT = {
                  _next: l._firstPT,
                  t: l,
                  p: l.length - 1,
                  s: g,
                  c:
                    (k.charAt(1) === "="
                      ? parseInt(`${k.charAt(0)  }1`, 10) *
                        parseFloat(k.substr(2))
                      : parseFloat(k) - g) || 0,
                  f: 0,
                  m: o && o < 4 ? Math.round : P,
                })),
            (m += k.length);
        return (
          (n += b.substr(m)),
          n && l.push(n),
          (l.setRatio = O),
          N.test(b) && (l.end = null),
          l
        );
      };
      const R = function (a, b, c, d, e, f, g, h, i) {
        typeof d === "function" && (d = d(i || 0, a));
        let j;
          const k = typeof a[b];
          const l =
            k !== "function"
              ? ""
              : b.indexOf("set") || typeof a[`get${  b.substr(3)}`] !== "function"
              ? b
              : `get${  b.substr(3)}`;
          const m = c !== "get" ? c : l ? (g ? a[l](g) : a[l]()) : a[b];
          const n = typeof d === "string" && d.charAt(1) === "=";
          let o = {
            t: a,
            p: b,
            s: m,
            f: k === "function",
            pg: 0,
            n: e || b,
            m: f ? (typeof f === "function" ? f : Math.round) : 0,
            pr: 0,
            c: n
              ? parseInt(`${d.charAt(0)  }1`, 10) * parseFloat(d.substr(2))
              : parseFloat(d) - m || 0,
          };
        return (
          (typeof m !== "number" || (typeof d !== "number" && !n)) &&
            (g ||
            isNaN(m) ||
            (!n && isNaN(d)) ||
            typeof m === "boolean" ||
            typeof d === "boolean"
              ? ((o.fp = g),
                (j = Q(
                  m,
                  n
                    ? parseFloat(o.s) +
                        o.c +
                        (`${o.s  }`).replace(/[0-9\-\.]/g, "")
                    : d,
                  h || H.defaultStringFilter,
                  o
                )),
                (o = {
                  t: j,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: e || b,
                  pr: 0,
                  m: 0,
                }))
              : ((o.s = parseFloat(m)), n || (o.c = parseFloat(d) - o.s || 0))),
          o.c
            ? ((o._next = this._firstPT) && (o._next._prev = o),
              (this._firstPT = o),
              o)
            : void 0
        );
      };
      const S = (H._internals = {
        isArray: q,
        isSelector: I,
        lazyTweens: K,
        blobDif: Q,
      });
      var T = (H._plugins = {});
      const U = (S.tweenLookup = {});
      let V = 0;
      var W = (S.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1,
      });
      var X = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      };
      var Y = (E._rootFramesTimeline = new G());
      var Z = (E._rootTimeline = new G());
      let $ = 30;
      var _ = (S.lazyRender = function () {
        let a;
          let b;
          const c = K.length;
        for (L = {}, a = 0; c > a; a++)
          (b = K[a]),
            b &&
              b._lazy !== !1 &&
              (b.render(b._lazy[0], b._lazy[1], !0), (b._lazy = !1));
        K.length = 0;
      });
    (Z._startTime = j.time),
      (Y._startTime = j.frame),
      (Z._active = Y._active = !0),
      setTimeout(_, 1),
      (E._updateRoot = H.render =
        function () {
          let a; let b; let c;
          if (
            (K.length && _(),
            Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1),
            Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1),
            K.length && _(),
            j.frame >= $)
          ) {
            $ = j.frame + (parseInt(H.autoSleep, 10) || 120);
            for (c in U) {
              for (b = U[c].tweens, a = b.length; --a > -1; )
                b[a]._gc && b.splice(a, 1);
              b.length === 0 && delete U[c];
            }
            if (
              ((c = Z._first),
              (!c || c._paused) &&
                H.autoSleep &&
                !Y._first &&
                j._listeners.tick.length === 1)
            ) {
              for (; c && c._paused; ) c = c._next;
              c || j.sleep();
            }
          }
        }),
      j.addEventListener("tick", E._updateRoot);
    var aa = function (a, b, c) {
        let d;
          let e;
          let f = a._gsTweenID;
        if (
          (U[f || (a._gsTweenID = f = `t${  V++}`)] ||
            (U[f] = { target: a, tweens: [] }),
          b && ((d = U[f].tweens), (d[(e = d.length)] = b), c))
        )
          for (; --e > -1; ) d[e] === b && d.splice(e, 1);
        return U[f].tweens;
      };
      const ba = function (a, b, c, d) {
        let e;
          let f;
          let g = a.vars.onOverwrite;
        return (
          g && (e = g(a, b, c, d)),
          (g = H.onOverwrite),
          g && (f = g(a, b, c, d)),
          e !== !1 && f !== !1
        );
      };
      var ca = function (a, b, c, d, e) {
        let f; let g; let h; let i;
        if (d === 1 || d >= 4) {
          for (i = e.length, f = 0; i > f; f++)
            if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
            else if (d === 5) break;
          return g;
        }
        let j;
          const k = b._startTime + n;
          const l = [];
          let m = 0;
          const o = b._duration === 0;
        for (f = e.length; --f > -1; )
          (h = e[f]) === b ||
            h._gc ||
            h._paused ||
            (h._timeline !== b._timeline
              ? ((j = j || da(b, 0, o)), da(h, j, o) === 0 && (l[m++] = h))
              : h._startTime <= k &&
                h._startTime + h.totalDuration() / h._timeScale > k &&
                (((o || !h._initted) && k - h._startTime <= 2 * n) ||
                  (l[m++] = h)));
        for (f = m; --f > -1; )
          if (
            ((h = l[f]),
            (i = h._firstPT),
            d === 2 && h._kill(c, a, b) && (g = !0),
            d !== 2 || (!h._firstPT && h._initted && i))
          ) {
            if (d !== 2 && !ba(h, b)) continue;
            h._enabled(!1, !1) && (g = !0);
          }
        return g;
      };
      var da = function (a, b, c) {
        for (
          var d = a._timeline, e = d._timeScale, f = a._startTime;
          d._timeline;

        ) {
          if (((f += d._startTime), (e *= d._timeScale), d._paused))
            return -100;
          d = d._timeline;
        }
        return (
          (f /= e),
          f > b
            ? f - b
            : (c && f === b) || (!a._initted && 2 * n > f - b)
            ? n
            : (f += a.totalDuration() / a._timeScale / e) > b + n
            ? 0
            : f - b - n
        );
      };
    (i._init = function () {
      let a;
        let b;
        let c;
        let d;
        let e;
        let f;
        const g = this.vars;
        const h = this._overwrittenProps;
        const i = this._duration;
        let j = !!g.immediateRender;
        let k = g.ease;
        const l = this._startAt;
      if (g.startAt) {
        l && (l.render(-1, !0), l.kill()), (e = {});
        for (d in g.startAt) e[d] = g.startAt[d];
        if (
          ((e.data = "isStart"),
          (e.overwrite = !1),
          (e.immediateRender = !0),
          (e.lazy = j && g.lazy !== !1),
          (e.startAt = e.delay = null),
          (e.onUpdate = g.onUpdate),
          (e.onUpdateParams = g.onUpdateParams),
          (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
          (this._startAt = H.to(this.target || {}, 0, e)),
          j)
        )
          if (this._time > 0) this._startAt = null;
          else if (i !== 0) return;
      } else if (g.runBackwards && i !== 0)
        if (l) l.render(-1, !0), l.kill(), (this._startAt = null);
        else {
          this._time !== 0 && (j = !1), (c = {});
          for (d in g) (W[d] && d !== "autoCSS") || (c[d] = g[d]);
          if (
            ((c.overwrite = 0),
            (c.data = "isFromStart"),
            (c.lazy = j && g.lazy !== !1),
            (c.immediateRender = j),
            (this._startAt = H.to(this.target, 0, c)),
            j)
          ) {
            if (this._time === 0) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = k =
          k
            ? k instanceof w
              ? k
              : typeof k === "function"
              ? new w(k, g.easeParams)
              : x[k] || H.defaultEase
            : H.defaultEase),
        g.easeParams instanceof Array &&
          k.config &&
          (this._ease = k.config.apply(k, g.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (f = this._targets.length, a = 0; f > a; a++)
          this._initProps(
            this._targets[a],
            (this._propLookup[a] = {}),
            this._siblings[a],
            h ? h[a] : null,
            a
          ) && (b = !0);
      else
        b = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          h,
          0
        );
      if (
        (b && H._onPluginEvent("_onInitAllProps", this),
        h &&
          (this._firstPT ||
            (typeof this.target !== "function" && this._enabled(!1, !1))),
        g.runBackwards)
      )
        for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next);
      (this._onUpdate = g.onUpdate), (this._initted = !0);
    }),
      (i._initProps = function (b, c, d, e, f) {
        let g; let h; let i; let j; let k; let l;
        if (b == null) return !1;
        L[b._gsTweenID] && _(),
          this.vars.css ||
            (b.style &&
              b !== a &&
              b.nodeType &&
              T.css &&
              this.vars.autoCSS !== !1 &&
              J(this.vars, b));
        for (g in this.vars)
          if (((l = this.vars[g]), W[g]))
            l &&
              (l instanceof Array || (l.push && q(l))) &&
              l.join("").indexOf("{self}") !== -1 &&
              (this.vars[g] = l = this._swapSelfInParams(l, this));
          else if (
            T[g] &&
            (j = new T[g]())._onInitTween(b, this.vars[g], this, f)
          ) {
            for (
              this._firstPT = k =
                {
                  _next: this._firstPT,
                  t: j,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: g,
                  pg: 1,
                  pr: j._priority,
                  m: 0,
                },
                h = j._overwriteProps.length;
              --h > -1;

            )
              c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0),
              (j._onDisable || j._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              k._next && (k._next._prev = k);
          } else
            c[g] = R.call(
              this,
              b,
              g,
              "get",
              l,
              g,
              0,
              null,
              this.vars.stringFilter,
              f
            );
        return e && this._kill(e, b)
          ? this._initProps(b, c, d, e, f)
          : this._overwrite > 1 &&
            this._firstPT &&
            d.length > 1 &&
            ca(b, this, c, this._overwrite, d)
          ? (this._kill(c, b), this._initProps(b, c, d, e, f))
          : (this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (L[b._gsTweenID] = !0),
            i);
      }),
      (i.render = function (a, b, c) {
        let d;
          let e;
          let f;
          let g;
          const h = this;
          const i = h._time;
          const j = h._duration;
          const k = h._rawPrevTime;
        if (a >= j - n && a >= 0)
          (h._totalTime = h._time = j),
            (h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1),
            h._reversed ||
              ((d = !0),
              (e = "onComplete"),
              (c = c || h._timeline.autoRemoveChildren)),
            j === 0 &&
              (h._initted || !h.vars.lazy || c) &&
              (h._startTime === h._timeline._duration && (a = 0),
              (k < 0 ||
                (a <= 0 && a >= -n) ||
                (k === n && h.data !== "isPause")) &&
                k !== a &&
                ((c = !0), k > n && (e = "onReverseComplete")),
              (h._rawPrevTime = g = !b || a || k === a ? a : n));
        else if (n > a)
          (h._totalTime = h._time = 0),
            (h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0),
            (i !== 0 || (j === 0 && k > 0)) &&
              ((e = "onReverseComplete"), (d = h._reversed)),
            a > -n
              ? (a = 0)
              : a < 0 &&
                ((h._active = !1),
                j === 0 &&
                  (h._initted || !h.vars.lazy || c) &&
                  (k >= 0 && (k !== n || h.data !== "isPause") && (c = !0),
                  (h._rawPrevTime = g = !b || a || k === a ? a : n))),
            (!h._initted || (h._startAt && h._startAt.progress())) && (c = !0);
        else if (((h._totalTime = h._time = a), h._easeType)) {
          let l = a / j;
            const m = h._easeType;
            const o = h._easePower;
          (m === 1 || (m === 3 && l >= 0.5)) && (l = 1 - l),
            m === 3 && (l *= 2),
            o === 1
              ? (l *= l)
              : o === 2
              ? (l *= l * l)
              : o === 3
              ? (l *= l * l * l)
              : o === 4 && (l *= l * l * l * l),
            (h.ratio =
              m === 1 ? 1 - l : m === 2 ? l : a / j < 0.5 ? l / 2 : 1 - l / 2);
        } else h.ratio = h._ease.getRatio(a / j);
        if (h._time !== i || c) {
          if (!h._initted) {
            if ((h._init(), !h._initted || h._gc)) return;
            if (
              !c &&
              h._firstPT &&
              ((h.vars.lazy !== !1 && h._duration) ||
                (h.vars.lazy && !h._duration))
            )
              return (
                (h._time = h._totalTime = i),
                (h._rawPrevTime = k),
                K.push(h),
                void (h._lazy = [a, b])
              );
            h._time && !d
              ? (h.ratio = h._ease.getRatio(h._time / j))
              : d &&
                h._ease._calcEnd &&
                (h.ratio = h._ease.getRatio(h._time === 0 ? 0 : 1));
          }
          for (
            h._lazy !== !1 && (h._lazy = !1),
              h._active ||
                (!h._paused && h._time !== i && a >= 0 && (h._active = !0)),
              i === 0 &&
                (h._startAt &&
                  (a >= 0
                    ? h._startAt.render(a, !0, c)
                    : e || (e = "_dummyGS")),
                h.vars.onStart &&
                  (h._time !== 0 || j === 0) &&
                  (b || h._callback("onStart"))),
              f = h._firstPT;
            f;

          )
            f.f
              ? f.t[f.p](f.c * h.ratio + f.s)
              : (f.t[f.p] = f.c * h.ratio + f.s),
              (f = f._next);
          h._onUpdate &&
            (a < 0 && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c),
            b || ((h._time !== i || d || c) && h._callback("onUpdate"))),
            e &&
              (!h._gc || c) &&
              (a < 0 &&
                h._startAt &&
                !h._onUpdate &&
                a !== -1e-4 &&
                h._startAt.render(a, !0, c),
              d &&
                (h._timeline.autoRemoveChildren && h._enabled(!1, !1),
                (h._active = !1)),
              !b && h.vars[e] && h._callback(e),
              j === 0 &&
                h._rawPrevTime === n &&
                g !== n &&
                (h._rawPrevTime = 0));
        }
      }),
      (i._kill = function (a, b, c) {
        if (
          (a === "all" && (a = null),
          a == null && (b == null || b === this.target))
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        b =
          typeof b !== "string"
            ? b || this._targets || this.target
            : H.selector(b) || b;
        let d;
          let e;
          let f;
          let g;
          let h;
          let i;
          let j;
          let k;
          let l;
          const m =
            c &&
            this._time &&
            c._startTime === this._startTime &&
            this._timeline === c._timeline;
          const n = this._firstPT;
        if ((q(b) || I(b)) && typeof b[0] !== "number")
          for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
        else {
          if (this._targets) {
            for (d = this._targets.length; --d > -1; )
              if (b === this._targets[d]) {
                (h = this._propLookup[d] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (e = this._overwrittenProps[d] =
                    a ? this._overwrittenProps[d] || {} : "all");
                break;
              }
          } else {
            if (b !== this.target) return !1;
            (h = this._propLookup),
              (e = this._overwrittenProps =
                a ? this._overwrittenProps || {} : "all");
          }
          if (h) {
            if (
              ((j = a || h),
              (k =
                a !== e &&
                e !== "all" &&
                a !== h &&
                (typeof a !== "object" || !a._tempKill)),
              c && (H.onOverwrite || this.vars.onOverwrite))
            ) {
              for (f in j) h[f] && (l || (l = []), l.push(f));
              if ((l || !a) && !ba(this, c, b, l)) return !1;
            }
            for (f in j)
              (g = h[f]) &&
                (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                g.pg && g.t._kill(j) && (i = !0),
                (g.pg && g.t._overwriteProps.length !== 0) ||
                  (g._prev
                    ? (g._prev._next = g._next)
                    : g === this._firstPT && (this._firstPT = g._next),
                  g._next && (g._next._prev = g._prev),
                  (g._next = g._prev = null)),
                delete h[f]),
                k && (e[f] = 1);
            !this._firstPT && this._initted && n && this._enabled(!1, !1);
          }
        }
        return i;
      }),
      (i.invalidate = function () {
        this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
        const a = this._time;
        return (
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          E.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -n), this.render(a, !1, this.vars.lazy !== !1)),
          this
        );
      }),
      (i._enabled = function (a, b) {
        if ((k || j.wake(), a && this._gc)) {
          let c;
            const d = this._targets;
          if (d)
            for (c = d.length; --c > -1; )
              this._siblings[c] = aa(d[c], this, !0);
          else this._siblings = aa(this.target, this, !0);
        }
        return (
          E.prototype._enabled.call(this, a, b),
          this._notifyPluginsOfEnabled && this._firstPT
            ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
            : !1
        );
      }),
      (H.to = function (a, b, c) {
        return new H(a, b, c);
      }),
      (H.from = function (a, b, c) {
        return (
          (c.runBackwards = !0),
          (c.immediateRender = c.immediateRender != 0),
          new H(a, b, c)
        );
      }),
      (H.fromTo = function (a, b, c, d) {
        return (
          (d.startAt = c),
          (d.immediateRender =
            d.immediateRender != 0 && c.immediateRender != 0),
          new H(a, b, d)
        );
      }),
      (H.delayedCall = function (a, b, c, d, e) {
        return new H(b, 0, {
          delay: a,
          onComplete: b,
          onCompleteParams: c,
          callbackScope: d,
          onReverseComplete: b,
          onReverseCompleteParams: c,
          immediateRender: !1,
          lazy: !1,
          useFrames: e,
          overwrite: 0,
        });
      }),
      (H.set = function (a, b) {
        return new H(a, 0, b);
      }),
      (H.getTweensOf = function (a, b) {
        if (a == null) return [];
        a = typeof a !== "string" ? a : H.selector(a) || a;
        let c; let d; let e; let f;
        if ((q(a) || I(a)) && typeof a[0] !== "number") {
          for (c = a.length, d = []; --c > -1; )
            d = d.concat(H.getTweensOf(a[c], b));
          for (c = d.length; --c > -1; )
            for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
        } else if (a._gsTweenID)
          for (d = aa(a).concat(), c = d.length; --c > -1; )
            (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
        return d || [];
      }),
      (H.killTweensOf = H.killDelayedCallsTo =
        function (a, b, c) {
          typeof b === "object" && ((c = b), (b = !1));
          for (let d = H.getTweensOf(a, b), e = d.length; --e > -1; )
            d[e]._kill(c, a);
        });
    var ea = u(
      "plugins.TweenPlugin",
      function (a, b) {
        (this._overwriteProps = (a || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = b || 0),
          (this._super = ea.prototype);
      },
      !0
    );
    if (
      ((i = ea.prototype),
      (ea.version = "1.19.0"),
      (ea.API = 2),
      (i._firstPT = null),
      (i._addTween = R),
      (i.setRatio = O),
      (i._kill = function (a) {
        let b;
          const c = this._overwriteProps;
          let d = this._firstPT;
        if (a[this._propName] != null) this._overwriteProps = [];
        else for (b = c.length; --b > -1; ) a[c[b]] != null && c.splice(b, 1);
        for (; d; )
          a[d.n] != null &&
            (d._next && (d._next._prev = d._prev),
            d._prev
              ? ((d._prev._next = d._next), (d._prev = null))
              : this._firstPT === d && (this._firstPT = d._next)),
            (d = d._next);
        return !1;
      }),
      (i._mod = i._roundProps =
        function (a) {
          for (var b, c = this._firstPT; c; )
            (b =
              a[this._propName] ||
              (c.n != null && a[c.n.split(`${this._propName  }_`).join("")])),
              b &&
                typeof b === "function" &&
                (c.f === 2 ? (c.t._applyPT.m = b) : (c.m = b)),
              (c = c._next);
        }),
      (H._onPluginEvent = function (a, b) {
        let c;
          let d;
          let e;
          let f;
          let g;
          let h = b._firstPT;
        if (a === "_onInitAllProps") {
          for (; h; ) {
            for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
            (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
              (h._next = d) ? (d._prev = h) : (f = h),
              (h = g);
          }
          h = b._firstPT = e;
        }
        for (; h; )
          h.pg && typeof h.t[a] === "function" && h.t[a]() && (c = !0),
            (h = h._next);
        return c;
      }),
      (ea.activate = function (a) {
        for (let b = a.length; --b > -1; )
          a[b].API === ea.API && (T[new a[b]()._propName] = a[b]);
        return !0;
      }),
      (t.plugin = function (a) {
        if (!(a && a.propName && a.init && a.API))
          throw "illegal plugin definition.";
        let b;
          const c = a.propName;
          const d = a.priority || 0;
          const e = a.overwriteProps;
          const f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          };
          const g = u(
            `plugins.${  c.charAt(0).toUpperCase()  }${c.substr(1)  }Plugin`,
            function () {
              ea.call(this, c, d), (this._overwriteProps = e || []);
            },
            a.global === !0
          );
          const h = (g.prototype = new ea(c));
        (h.constructor = g), (g.API = a.API);
        for (b in f) typeof a[b] === "function" && (h[f[b]] = a[b]);
        return (g.version = a.version), ea.activate([g]), g;
      }),
      (g = a._gsQueue))
    ) {
      for (h = 0; h < g.length; h++) g[h]();
      for (i in r)
        r[i].func || a.console.log(`GSAP encountered missing dependency: ${  i}`);
    }
    k = !1;
  })(
    typeof module !== "undefined" &&
      module.exports &&
      typeof global !== "undefined"
      ? global
      : this || window,
    "TweenMax"
  );

/*= ===================================
    Smooth Scroll
====================================== */

/*!
 * Smooth Scroll - v1.4.13 - 2013-11-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function (t) {
  function e(t) {
    return t.replace(/(:|\.)/g, "\\$1");
  }
  const l = "1.4.13";
    const o = {};
    const s = {
      exclude: [],
      excludeWithin: [],
      offset: 0,
      direction: "top",
      scrollElement: null,
      scrollTarget: null,
      beforeScroll () {},
      afterScroll () {},
      easing: "swing",
      speed: 400,
      autoCoefficent: 2,
      preventDefault: !0,
    };
    const n = function (e) {
      let l = [];
        let o = !1;
        const s = e.dir && e.dir == "left" ? "scrollLeft" : "scrollTop";
      return (
        this.each(function () {
          if (this != document && this != window) {
            const e = t(this);
            e[s]() > 0
              ? l.push(this)
              : (e[s](1), (o = e[s]() > 0), o && l.push(this), e[s](0));
          }
        }),
        l.length ||
          this.each(function () {
            this.nodeName === "BODY" && (l = [this]);
          }),
        e.el === "first" && l.length > 1 && (l = [l[0]]),
        l
      );
    };
  t.fn.extend({
    scrollable (t) {
      const e = n.call(this, { dir: t });
      return this.pushStack(e);
    },
    firstScrollable (t) {
      const e = n.call(this, { el: "first", dir: t });
      return this.pushStack(e);
    },
    smoothScroll (l, o) {
      if (((l = l || {}), l === "options"))
        return o
          ? this.each(function () {
              const e = t(this);
                const l = t.extend(e.data("ssOpts") || {}, o);
              t(this).data("ssOpts", l);
            })
          : this.first().data("ssOpts");
      const s = t.extend({}, t.fn.smoothScroll.defaults, l);
        const n = t.smoothScroll.filterPath(location.pathname);
      return (
        this.unbind("click.smoothscroll").bind(
          "click.smoothscroll",
          function (l) {
            const o = this;
              const r = t(this);
              const i = t.extend({}, s, r.data("ssOpts") || {});
              const c = s.exclude;
              const a = i.excludeWithin;
              let f = 0;
              let h = 0;
              let u = !0;
              const d = {};
              const p = location.hostname === o.hostname || !o.hostname;
              const m =
                i.scrollTarget ||
                (t.smoothScroll.filterPath(o.pathname) || n) === n;
              const S = e(o.hash);
            if (i.scrollTarget || (p && m && S)) {
              for (; u && c.length > f; ) r.is(e(c[f++])) && (u = !1);
              for (; u && a.length > h; ) r.closest(a[h++]).length && (u = !1);
            } else u = !1;
            u &&
              (i.preventDefault && l.preventDefault(),
              t.extend(d, i, { scrollTarget: i.scrollTarget || S, link: o }),
              t.smoothScroll(d));
          }
        ),
        this
      );
    },
  }),
    (t.smoothScroll = function (e, l) {
      if (e === "options" && typeof l === "object") return t.extend(o, l);
      let s;
        let n;
        let r;
        let i;
        let c = 0;
        let a = "offset";
        let f = "scrollTop";
        const h = {};
        let u = {};
      typeof e === "number"
        ? ((s = t.extend({ link: null }, t.fn.smoothScroll.defaults, o)),
          (r = e))
        : ((s = t.extend(
            { link: null },
            t.fn.smoothScroll.defaults,
            e || {},
            o
          )),
          s.scrollElement &&
            ((a = "position"),
            s.scrollElement.css("position") == "static" &&
              s.scrollElement.css("position", "relative"))),
        (f = s.direction == "left" ? "scrollLeft" : f),
        s.scrollElement
          ? ((n = s.scrollElement),
            /^(?:HTML|BODY)$/.test(n[0].nodeName) || (c = n[f]()))
          : (n = t("html, body").firstScrollable(s.direction)),
        s.beforeScroll.call(n, s),
        (r =
          typeof e === "number"
            ? e
            : l ||
              (t(s.scrollTarget)[a]() && t(s.scrollTarget)[a]()[s.direction]) ||
              0),
        (h[f] = r + c + s.offset),
        (i = s.speed),
        i === "auto" && ((i = h[f] || n.scrollTop()), (i /= s.autoCoefficent)),
        (u = {
          duration: i,
          easing: s.easing,
          complete () {
            s.afterScroll.call(s.link, s);
          },
        }),
        s.step && (u.step = s.step),
        n.length ? n.stop().animate(h, u) : s.afterScroll.call(s.link, s);
    }),
    (t.smoothScroll.version = l),
    (t.smoothScroll.filterPath = function (t) {
      return t
        .replace(/^\//, "")
        .replace(/(?:index|default).[a-zA-Z]{3,4}$/, "")
        .replace(/\/$/, "");
    }),
    (t.fn.smoothScroll.defaults = s);
})(jQuery);

/*= ===================================
    One Page Nav
====================================== */

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
!(function (t, i, n, s) {
  const e = function (s, e) {
    (this.elem = s),
      (this.$elem = t(s)),
      (this.options = e),
      (this.metadata = this.$elem.data("plugin-options")),
      (this.$win = t(i)),
      (this.sections = {}),
      (this.didScroll = !1),
      (this.$doc = t(n)),
      (this.docHeight = this.$doc.height());
  };
  (e.prototype = {
    defaults: {
      navItems: "a",
      currentClass: "current",
      changeHash: !1,
      easing: "swing",
      filter: "",
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      begin: !1,
      end: !1,
      scrollChange: !1,
    },
    init () {
      return (
        (this.config = t.extend(
          {},
          this.defaults,
          this.options,
          this.metadata
        )),
        (this.$nav = this.$elem.find(this.config.navItems)),
        this.config.filter !== "" &&
          (this.$nav = this.$nav.filter(this.config.filter)),
        this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)),
        this.getPositions(),
        this.bindInterval(),
        this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)),
        this
      );
    },
    adjustNav (t, i) {
      t.$elem
        .find(`.${  t.config.currentClass}`)
        .removeClass(t.config.currentClass),
        i.addClass(t.config.currentClass);
    },
    bindInterval () {
      let t;
        const i = this;
      i.$win.on("scroll.onePageNav", function () {
        i.didScroll = !0;
      }),
        (i.t = setInterval(function () {
          (t = i.$doc.height()),
            i.didScroll && ((i.didScroll = !1), i.scrollChange()),
            t !== i.docHeight && ((i.docHeight = t), i.getPositions());
        }, 250));
    },
    getHash (t) {
      return t.attr("href").split("#")[1];
    },
    getPositions () {
      let i;
        let n;
        let s;
        const e = this;
      e.$nav.each(function () {
        (i = e.getHash(t(this))),
          (s = t(`#${  i}`)),
          s.length && ((n = s.offset().top), (e.sections[i] = Math.round(n)));
      });
    },
    getSection (t) {
      let i = null;
        const n = Math.round(this.$win.height() * this.config.scrollThreshold);
      for (const s in this.sections) this.sections[s] - n < t && (i = s);
      return i;
    },
    handleClick (n) {
      const s = this;
        const e = t(n.currentTarget);
        const o = e.parent();
        const a = `#${  s.getHash(e)}`;
      o.hasClass(s.config.currentClass) ||
        (s.config.begin && s.config.begin(),
        s.adjustNav(s, o),
        s.unbindInterval(),
        s.scrollTo(a, function () {
          s.config.changeHash && (i.location.hash = a),
            s.bindInterval(),
            s.config.end && s.config.end();
        })),
        n.preventDefault();
    },
    scrollChange () {
      let t;
        const i = this.$win.scrollTop();
        const n = this.getSection(i);
      n !== null &&
        ((t = this.$elem.find(`a[href$="#${  n  }"]`).parent()),
        t.hasClass(this.config.currentClass) ||
          (this.adjustNav(this, t),
          this.config.scrollChange && this.config.scrollChange(t)));
    },
    scrollTo (i, n) {
      const s = t(i).offset().top;
      t("html, body").animate(
        { scrollTop: s - this.config.scrollOffset },
        this.config.scrollSpeed,
        this.config.easing,
        n
      );
    },
    unbindInterval () {
      clearInterval(this.t), this.$win.unbind("scroll.onePageNav");
    },
  }),
    (e.defaults = e.prototype.defaults),
    (t.fn.onePageNav = function (t) {
      return this.each(function () {
        new e(this, t).init();
      });
    });
})(jQuery, window, document);

/*= ===================================
    instafeed
====================================== */
// Generated by CoffeeScript 1.9.3
(function () {
  let e;
  (e = (function () {
    function e(e, t) {
      let n; let r;
      this.options = {
        target: "instafeed",
        get: "popular",
        resolution: "thumbnail",
        sortBy: "none",
        links: !0,
        mock: !1,
        useHttp: !1,
      };
      if (typeof e === "object") for (n in e) (r = e[n]), (this.options[n] = r);
      (this.context = t != null ? t : this), (this.unique = this._genKey());
    }
    return (
      (e.prototype.hasNext = function () {
        return (
          typeof this.context.nextUrl === "string" &&
          this.context.nextUrl.length > 0
        );
      }),
      (e.prototype.next = function () {
        return this.hasNext() ? this.run(this.context.nextUrl) : !1;
      }),
      (e.prototype.run = function (t) {
        let n; let r; let i;
        if (
          typeof this.options.clientId !== "string" &&
          typeof this.options.accessToken !== "string"
        )
          throw new Error("Missing clientId or accessToken.");
        if (
          typeof this.options.accessToken !== "string" &&
          typeof this.options.clientId !== "string"
        )
          throw new Error("Missing clientId or accessToken.");
        return (
          this.options.before != null &&
            typeof this.options.before === "function" &&
            this.options.before.call(this),
          typeof document !== "undefined" &&
            document !== null &&
            ((i = document.createElement("script")),
            (i.id = "instafeed-fetcher"),
            (i.src = t || this._buildUrl()),
            (n = document.getElementsByTagName("head")),
            n[0].appendChild(i),
            (r = `instafeedCache${  this.unique}`),
            (window[r] = new e(this.options, this)),
            (window[r].unique = this.unique)),
          !0
        );
      }),
      (e.prototype.parse = function (e) {
        let t;
          let n;
          let r;
          let i;
          let s;
          let o;
          let u;
          let a;
          let f;
          let l;
          let c;
          let h;
          let p;
          let d;
          let v;
          let m;
          let g;
          let y;
          let b;
          let w;
          let E;
          let S;
          let x;
          let T;
          let N;
          let C;
          let k;
          let L;
          let A;
          let O;
          let M;
          let _;
          let D;
        if (typeof e !== "object") {
          if (
            this.options.error != null &&
            typeof this.options.error === "function"
          )
            return this.options.error.call(this, "Invalid JSON data"), !1;
          throw new Error("Invalid JSON response");
        }
        if (e.meta.code !== 200) {
          if (
            this.options.error != null &&
            typeof this.options.error === "function"
          )
            return this.options.error.call(this, e.meta.error_message), !1;
          throw new Error(`Error from Instagram: ${  e.meta.error_message}`);
        }
        if (e.data.length === 0) {
          if (
            this.options.error != null &&
            typeof this.options.error === "function"
          )
            return (
              this.options.error.call(
                this,
                "No images were returned from Instagram"
              ),
              !1
            );
          throw new Error("No images were returned from Instagram");
        }
        this.options.success != null &&
          typeof this.options.success === "function" &&
          this.options.success.call(this, e),
          (this.context.nextUrl = ""),
          e.pagination != null &&
            (this.context.nextUrl = e.pagination.next_url);
        if (this.options.sortBy !== "none") {
          this.options.sortBy === "random"
            ? (M = ["", "random"])
            : (M = this.options.sortBy.split("-")),
            (O = M[0] === "least" ? !0 : !1);
          switch (M[1]) {
            case "random":
              e.data.sort(function () {
                return 0.5 - Math.random();
              });
              break;
            case "recent":
              e.data = this._sortBy(e.data, "created_time", O);
              break;
            case "liked":
              e.data = this._sortBy(e.data, "likes.count", O);
              break;
            case "commented":
              e.data = this._sortBy(e.data, "comments.count", O);
              break;
            default:
              throw new Error(
                `Invalid option for sortBy: '${  this.options.sortBy  }'.`
              );
          }
        }
        if (
          typeof document !== "undefined" &&
          document !== null &&
          this.options.mock === !1
        ) {
          (m = e.data),
            (A = parseInt(this.options.limit, 10)),
            this.options.limit != null && m.length > A && (m = m.slice(0, A)),
            (u = document.createDocumentFragment()),
            this.options.filter != null &&
              typeof this.options.filter === "function" &&
              (m = this._filter(m, this.options.filter));
          if (
            this.options.template != null &&
            typeof this.options.template === "string"
          ) {
            (f = ""), (d = ""), (w = ""), (D = document.createElement("div"));
            for (c = 0, N = m.length; c < N; c++) {
              (h = m[c]), (p = h.images[this.options.resolution]);
              if (typeof p !== "object")
                throw (
                  ((o =
                    `No image found for resolution: ${ 
                    this.options.resolution 
                    }.`),
                  new Error(o))
                );
              (E = p.width),
                (y = p.height),
                (b = "square"),
                E > y && (b = "landscape"),
                E < y && (b = "portrait"),
                (v = p.url),
                (l = window.location.protocol.indexOf("http") >= 0),
                l &&
                  !this.options.useHttp &&
                  (v = v.replace(/https?:\/\//, "//")),
                (d = this._makeTemplate(this.options.template, {
                  model: h,
                  id: h.id,
                  link: h.link,
                  type: h.type,
                  image: v,
                  width: E,
                  height: y,
                  orientation: b,
                  caption: this._getObjectProperty(h, "caption.text"),
                  likes: h.likes.count,
                  comments: h.comments.count,
                  location: this._getObjectProperty(h, "location.name"),
                })),
                (f += d);
            }
            (D.innerHTML = f), (i = []), (r = 0), (n = D.childNodes.length);
            while (r < n) i.push(D.childNodes[r]), (r += 1);
            for (x = 0, C = i.length; x < C; x++) (L = i[x]), u.appendChild(L);
          } else
            for (T = 0, k = m.length; T < k; T++) {
              (h = m[T]),
                (g = document.createElement("img")),
                (p = h.images[this.options.resolution]);
              if (typeof p !== "object")
                throw (
                  ((o =
                    `No image found for resolution: ${ 
                    this.options.resolution 
                    }.`),
                  new Error(o))
                );
              (v = p.url),
                (l = window.location.protocol.indexOf("http") >= 0),
                l &&
                  !this.options.useHttp &&
                  (v = v.replace(/https?:\/\//, "//")),
                (g.src = v),
                this.options.links === !0
                  ? ((t = document.createElement("a")),
                    (t.href = h.link),
                    t.appendChild(g),
                    u.appendChild(t))
                  : u.appendChild(g);
            }
          (_ = this.options.target),
            typeof _ === "string" && (_ = document.getElementById(_));
          if (_ == null)
            throw (
              ((o =
                `No element with id="${  this.options.target  }" on page.`),
              new Error(o))
            );
          _.appendChild(u),
            (a = document.getElementsByTagName("head")[0]),
            a.removeChild(document.getElementById("instafeed-fetcher")),
            (S = `instafeedCache${  this.unique}`),
            (window[S] = void 0);
          try {
            delete window[S];
          } catch (P) {
            s = P;
          }
        }
        return (
          this.options.after != null &&
            typeof this.options.after === "function" &&
            this.options.after.call(this),
          !0
        );
      }),
      (e.prototype._buildUrl = function () {
        let e; let t; let n;
        e = "https://api.instagram.com/v1";
        switch (this.options.get) {
          case "popular":
            t = "media/popular";
            break;
          case "tagged":
            if (!this.options.tagName)
              throw new Error(
                "No tag name specified. Use the 'tagName' option."
              );
            t = `tags/${  this.options.tagName  }/media/recent`;
            break;
          case "location":
            if (!this.options.locationId)
              throw new Error(
                "No location specified. Use the 'locationId' option."
              );
            t = `locations/${  this.options.locationId  }/media/recent`;
            break;
          case "user":
            if (!this.options.userId)
              throw new Error("No user specified. Use the 'userId' option.");
            t = `users/${  this.options.userId  }/media/recent`;
            break;
          default:
            throw new Error(
              `Invalid option for get: '${  this.options.get  }'.`
            );
        }
        return (
          (n = `${e  }/${  t}`),
          this.options.accessToken != null
            ? (n += `?access_token=${  this.options.accessToken}`)
            : (n += `?client_id=${  this.options.clientId}`),
          this.options.limit != null && (n += `&count=${  this.options.limit}`),
          (n += `&callback=instafeedCache${  this.unique  }.parse`),
          n
        );
      }),
      (e.prototype._genKey = function () {
        let e;
        return (
          (e = function () {
            return (((1 + Math.random()) * 65536) | 0)
              .toString(16)
              .substring(1);
          }),
          `${  e()  }${e()  }${e()  }${e()}`
        );
      }),
      (e.prototype._makeTemplate = function (e, t) {
        let n; let r; let i; let s; let o;
        (r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/), (n = e);
        while (r.test(n))
          (s = n.match(r)[1]),
            (o = (i = this._getObjectProperty(t, s)) != null ? i : ""),
            (n = n.replace(r, function () {
              return `${  o}`;
            }));
        return n;
      }),
      (e.prototype._getObjectProperty = function (e, t) {
        let n; let r;
        (t = t.replace(/\[(\w+)\]/g, ".$1")), (r = t.split("."));
        while (r.length) {
          n = r.shift();
          if (!(e != null && n in e)) return null;
          e = e[n];
        }
        return e;
      }),
      (e.prototype._sortBy = function (e, t, n) {
        let r;
        return (
          (r = function (e, r) {
            let i; let s;
            return (
              (i = this._getObjectProperty(e, t)),
              (s = this._getObjectProperty(r, t)),
              n ? (i > s ? 1 : -1) : i < s ? 1 : -1
            );
          }),
          e.sort(r.bind(this)),
          e
        );
      }),
      (e.prototype._filter = function (e, t) {
        let n; let r; let i; let s; let o;
        (n = []),
          (r = function (e) {
            if (t(e)) return n.push(e);
          });
        for (i = 0, o = e.length; i < o; i++) (s = e[i]), r(s);
        return n;
      }),
      e
    );
  })()),
    (function (e, t) {
      return typeof define === "function" && define.amd
        ? define([], t)
        : typeof module === "object" && module.exports
        ? (module.exports = t())
        : (e.Instafeed = t());
    })(this, function () {
      return e;
    });
}.call(this));

/*= ================================ 
    jQuery Scrollie Plugin
=================================== */

/*!
 * jQuery Scrollie Plugin v1.0.1
 * https://github.com/Funsella/jquery-scrollie
 *
 * Copyright 2013 JP Nothard
 * Released under the MIT license
 */
!(function (e, l) {
  
  function t(l, t) {
    (this.element = l),
      (this.settings = e.extend({}, i, t)),
      (this._defaults = i),
      (this._name = s),
      this.init();
  }
  var s = "scrollie";
    var i = {
      direction: "both",
      scrollOffset: 0,
      speed: 2,
      scrollingInView: null,
      ScrollingToTheTop: null,
      ScrollingOutOfView: null,
      scrolledOutOfView: null,
    };
  (t.prototype = {
    init () {
      this._defineElements(), this._scrollEvent();
    },
    _defineElements () {
      const l = this;
      (l.$scrollElement = e(l.element)),
        (l.$elemHeight = l.$scrollElement.outerHeight()),
        (l.$elemPosTop = l.$scrollElement.offset().top),
        (l.$scrollOffset =
          l.$scrollElement.data("scrollie-offset") ||
          l.$scrollElement.data("scrollie-offset") == "0"
            ? l.$scrollElement.data("scrollie-offset")
            : l.settings.scrollOffset),
        (l.$scrollSpeed =
          l.$scrollElement.data("scrollie-speed") ||
          l.$scrollElement.data("scrollie-speed") == "0"
            ? l.$scrollElement.data("scrollie-speed")
            : l.settings.speed);
    },
    _inMotion (e, l, t, s) {
      const i = this;
        const n = -1 * (-1 * (e - t) - l);
        const o = (-1 * (e - t)) / i.$scrollSpeed;
        const c = n < l + i.$elemHeight;
        const r = n > 0 - i.$scrollOffset;
        const f = r && l > n;
        const u = r && c;
        const h = n > l - i.$scrollOffset && c;
      f &&
        jQuery.isFunction(i.settings.ScrollingToTheTop) &&
        i.settings.ScrollingToTheTop.call(
          this,
          this.$scrollElement,
          i.$scrollOffset,
          s,
          n,
          o,
          t,
          e
        ),
        u &&
          jQuery.isFunction(i.settings.scrollingInView) &&
          i.settings.scrollingInView.call(
            this,
            this.$scrollElement,
            i.$scrollOffset,
            s,
            n,
            o,
            t,
            e
          ),
        h &&
          jQuery.isFunction(i.settings.ScrollingOutOfView) &&
          i.settings.ScrollingOutOfView.call(
            this,
            this.$scrollElement,
            i.$scrollOffset,
            s,
            n,
            o,
            t,
            e
          ),
        c ||
          (jQuery.isFunction(i.settings.scrolledOutOfView) &&
            i.settings.scrolledOutOfView.call(
              this,
              this.$scrollElement,
              i.$scrollOffset,
              s,
              n,
              o,
              t,
              e
            ));
    },
    _scrollEvent () {
      const t = this;
        const s = t.settings.direction;
        let i = 0;
        let n = !0;
      setInterval(function () {
        n = !0;
      }, 66),
        e(l).on("scroll", function () {
          const l = e(this).scrollTop();
            const o = e(this).height();
            const c = l > i ? "up" : "down";
          c === s && n === !0
            ? ((n = !1), t._inMotion(l, o, t.$elemPosTop, c))
            : s === "both" &&
              n === !0 &&
              ((n = !1), t._inMotion(l, o, t.$elemPosTop, c)),
            (i = l);
        });
    },
  }),
    (e.fn[s] = function (l) {
      return this.each(function () {
        e.data(this, `plugin_${  s}`) ||
          e.data(this, `plugin_${  s}`, new t(this, l));
      });
    });
})(jQuery, window, document);

/*= ================================ 
    particles js Plugin
=================================== */
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  const a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
  return a.indexOf(e) > -1;
}
const pJS = function (e, a) {
  const t = document.querySelector(`#${  e  } > .particles-js-canvas-el`);
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  const i = this.pJS;
  a && Object.deepExtend(i, a),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance,
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, a, t) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs *= Math.random())),
        (this.x = t ? t.x : Math.random() * i.canvas.w),
        (this.y = t ? t.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x -= this.radius)
          : this.x < 2 * this.radius && (this.x += this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y -= this.radius)
          : this.y < 2 * this.radius && (this.y += this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        typeof e.value === "object")
      )
        if (e.value instanceof Array) {
          const s =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          void 0 != e.value.r &&
            void 0 != e.value.g &&
            void 0 != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            void 0 != e.value.h &&
              void 0 != e.value.s &&
              void 0 != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        e.value == "random"
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : typeof e.value === "string" &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo *= Math.random()));
      let n = {};
      switch (i.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          i.particles.move.random &&
            ((this.vx *= Math.random()),
            (this.vy *= Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      const r = i.particles.shape.type;
      if (typeof r === "object") {
        if (r instanceof Array) {
          const c = r[Math.floor(Math.random() * r.length)];
          this.shape = c;
        }
      } else this.shape = r;
      if (this.shape == "image") {
        const o = i.particles.shape;
        (this.img = {
          src: o.image.src,
          ratio: o.image.width / o.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          i.tmp.img_type == "svg" &&
            void 0 != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      function e() {
        i.canvas.ctx.drawImage(
          r,
          a.x - t,
          a.y - t,
          2 * t,
          (2 * t) / a.img.ratio
        );
      }
      var a = this;
      if (void 0 != a.radius_bubble) var t = a.radius_bubble;
      else var t = a.radius;
      if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
      else var s = a.opacity;
      if (a.color.rgb)
        var n =
          `rgba(${ 
          a.color.rgb.r 
          },${ 
          a.color.rgb.g 
          },${ 
          a.color.rgb.b 
          },${ 
          s 
          })`;
      else
        var n =
          `hsla(${ 
          a.color.hsl.h 
          },${ 
          a.color.hsl.s 
          }%,${ 
          a.color.hsl.l 
          }%,${ 
          s 
          })`;
      switch (
        ((i.canvas.ctx.fillStyle = n), i.canvas.ctx.beginPath(), a.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t,
            a.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            a.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            a.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if (i.tmp.img_type == "svg") var r = a.img.obj;
          else var r = i.tmp.img_obj;
          r && e();
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (let e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value)
        );
    }),
    (i.fn.particlesUpdate = function () {
      for (let e = 0; e < i.particles.array.length; e++) {
        const a = i.particles.array[e];
        if (i.particles.move.enable) {
          const t = i.particles.move.speed / 2;
          (a.x += a.vx * t), (a.y += a.vy * t);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (a.opacity_status == 1
              ? (a.opacity >= i.particles.opacity.value &&
                  (a.opacity_status = !1),
                (a.opacity += a.vo))
              : (a.opacity <= i.particles.opacity.anim.opacity_min &&
                  (a.opacity_status = !0),
                (a.opacity -= a.vo)),
            a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable &&
            (a.size_status == 1
              ? (a.radius >= i.particles.size.value && (a.size_status = !1),
                (a.radius += a.vs))
              : (a.radius <= i.particles.size.anim.size_min &&
                  (a.size_status = !0),
                (a.radius -= a.vs)),
            a.radius < 0 && (a.radius = 0)),
          i.particles.move.out_mode == "bounce")
        )
          var s = {
            x_left: a.radius,
            x_right: i.canvas.w,
            y_top: a.radius,
            y_bottom: i.canvas.h,
          };
        else
          var s = {
            x_left: -a.radius,
            x_right: i.canvas.w + a.radius,
            y_top: -a.radius,
            y_bottom: i.canvas.h + a.radius,
          };
        switch (
          (a.x - a.radius > i.canvas.w
            ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h))
            : a.x + a.radius < 0 &&
              ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
          a.y - a.radius > i.canvas.h
            ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w))
            : a.y + a.radius < 0 &&
              ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            a.x + a.radius > i.canvas.w
              ? (a.vx = -a.vx)
              : a.x - a.radius < 0 && (a.vx = -a.vx),
              a.y + a.radius > i.canvas.h
                ? (a.vy = -a.vy)
                : a.y - a.radius < 0 && (a.vy = -a.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(a),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(a),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (let n = e + 1; n < i.particles.array.length; n++) {
            const r = i.particles.array[n];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(a, r),
              i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (let e = 0; e < i.particles.array.length; e++) {
        const a = i.particles.array[e];
        a.draw();
      }
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, a) {
      const t = e.x - a.x;
        const s = e.y - a.y;
        const n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        const r =
          i.particles.line_linked.opacity -
          n /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (r > 0) {
          const c = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            `rgba(${  c.r  },${  c.g  },${  c.b  },${  r  })`),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(a.x, a.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, a) {
      const t = e.x - a.x;
        const s = e.y - a.y;
        const n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        const r = t / (1e3 * i.particles.move.attract.rotateX);
          const c = s / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= r), (e.vy -= c), (a.vx += r), (a.vy += c);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, a) {
      const t = e.x - a.x;
        const i = e.y - a.y;
        const s = Math.sqrt(t * t + i * i);
        const n = e.radius + a.radius;
      n >= s &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
    }),
    (i.fn.modes.pushParticles = function (e, a) {
      i.tmp.pushing = !0;
      for (let t = 0; e > t; t++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h,
          })
        ),
          t == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function a() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function t(a, t, s, n, c) {
        if (a != t)
          if (i.tmp.bubble_duration_end) {
            if (void 0 != s) {
              const o = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
                const l = a - o;
              (d = a + l),
                c == "size" && (e.radius_bubble = d),
                c == "opacity" && (e.opacity_bubble = d);
            }
          } else if (r <= i.interactivity.modes.bubble.distance) {
            if (void 0 != s) var v = s;
            else var v = n;
            if (v != a) {
              var d = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
              c == "size" && (e.radius_bubble = d),
                c == "opacity" && (e.opacity_bubble = d);
            }
          } else
            c == "size" && (e.radius_bubble = void 0),
              c == "opacity" && (e.opacity_bubble = void 0);
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var s = e.x - i.interactivity.mouse.pos_x;
          var n = e.y - i.interactivity.mouse.pos_y;
          var r = Math.sqrt(s * s + n * n);
          const c = 1 - r / i.interactivity.modes.bubble.distance;
        if (r <= i.interactivity.modes.bubble.distance) {
          if (c >= 0 && i.interactivity.status == "mousemove") {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                var o = e.radius + i.interactivity.modes.bubble.size * c;
                o >= 0 && (e.radius_bubble = o);
              } else {
                const l = e.radius - i.interactivity.modes.bubble.size;
                  var o = e.radius - l * c;
                o > 0 ? (e.radius_bubble = o) : (e.radius_bubble = 0);
              }
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              ) {
                var v = i.interactivity.modes.bubble.opacity * c;
                v > e.opacity &&
                  v <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              } else {
                var v =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    c;
                v < e.opacity &&
                  v >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              }
          }
        } else a();
        i.interactivity.status == "mouseleave" && a();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          var s = e.x - i.interactivity.mouse.click_pos_x;
            var n = e.y - i.interactivity.mouse.click_pos_y;
            var r = Math.sqrt(s * s + n * n);
            var p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          p > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            p > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking &&
          (t(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          t(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      function a() {
        const a = Math.atan2(d, p);
        if (
          ((e.vx = u * Math.cos(a)),
          (e.vy = u * Math.sin(a)),
          i.particles.move.out_mode == "bounce")
        ) {
          const t = { x: e.x + e.vx, y: e.y + e.vy };
          t.x + e.radius > i.canvas.w
            ? (e.vx = -e.vx)
            : t.x - e.radius < 0 && (e.vx = -e.vx),
            t.y + e.radius > i.canvas.h
              ? (e.vy = -e.vy)
              : t.y - e.radius < 0 && (e.vy = -e.vy);
        }
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        i.interactivity.status == "mousemove"
      ) {
        const t = e.x - i.interactivity.mouse.pos_x;
          const s = e.y - i.interactivity.mouse.pos_y;
          const n = Math.sqrt(t * t + s * s);
          const r = { x: t / n, y: s / n };
          var c = i.interactivity.modes.repulse.distance;
          const o = 100;
          const l = clamp((1 / c) * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50);
          const v = { x: e.x + r.x * l, y: e.y + r.y * l };
        i.particles.move.out_mode == "bounce"
          ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x),
            v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y))
          : ((e.x = v.x), (e.y = v.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3);
            var p = i.interactivity.mouse.click_pos_x - e.x;
            var d = i.interactivity.mouse.click_pos_y - e.y;
            const m = p * p + d * d;
            var u = (-c / m) * 1;
          c >= m && a();
        } else
          i.tmp.repulse_clicking == 0 && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        i.interactivity.status == "mousemove"
      ) {
        const a = e.x - i.interactivity.mouse.pos_x;
          const t = e.y - i.interactivity.mouse.pos_y;
          const s = Math.sqrt(a * a + t * t);
        if (s <= i.interactivity.modes.grab.distance) {
          const n =
            i.interactivity.modes.grab.line_linked.opacity -
            s /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (n > 0) {
            const r = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              `rgba(${  r.r  },${  r.g  },${  r.b  },${  n  })`),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(
                i.interactivity.mouse.pos_x,
                i.interactivity.mouse.pos_y
              ),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      i.interactivity.detect_on == "window"
        ? (i.interactivity.el = window)
        : (i.interactivity.el = i.canvas.el),
        (i.interactivity.events.onhover.enable ||
          i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)
              var a = e.clientX,
                t = e.clientY;
            else
              var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            (i.interactivity.mouse.pos_x = a),
              (i.interactivity.mouse.pos_y = t),
              i.tmp.retina &&
                ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = "mousemove");
          }),
          i.interactivity.el.addEventListener("mouseleave", function (e) {
            (i.interactivity.mouse.pos_x = null),
              (i.interactivity.mouse.pos_y = null),
              (i.interactivity.status = "mouseleave");
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener("click", function () {
            if (
              ((i.interactivity.mouse.click_pos_x =
                i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case "push":
                  i.particles.move.enable
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : i.interactivity.modes.push.particles_nb == 1
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : i.interactivity.modes.push.particles_nb > 1 &&
                      i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  i.fn.modes.removeParticles(
                    i.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        let e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        const a =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area;
          const t = i.particles.array.length - a;
        t < 0
          ? i.fn.modes.pushParticles(Math.abs(t))
          : i.fn.modes.removeParticles(t);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, a) {
      for (let t = 0; t < i.particles.array.length; t++) {
        const s = i.particles.array[t];
          const n = e.x - s.x;
          const r = e.y - s.y;
          const c = Math.sqrt(n * n + r * r);
        c <= e.radius + s.radius &&
          ((e.x = a ? a.x : Math.random() * i.canvas.w),
          (e.y = a ? a.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      const a = i.tmp.source_svg;
        const t = /#([0-9A-F]{3,6})/gi;
        const s = a.replace(t, function (a, t, i, s) {
          if (e.color.rgb)
            var n =
              `rgba(${ 
              e.color.rgb.r 
              },${ 
              e.color.rgb.g 
              },${ 
              e.color.rgb.b 
              },${ 
              e.opacity 
              })`;
          else
            var n =
              `hsla(${ 
              e.color.hsl.h 
              },${ 
              e.color.hsl.s 
              }%,${ 
              e.color.hsl.l 
              }%,${ 
              e.opacity 
              })`;
          return n;
        });
        const n = new Blob([s], { type: "image/svg+xml;charset=utf-8" });
        const r = window.URL || window.webkitURL || window;
        const c = r.createObjectURL(n);
        const o = new Image();
      o.addEventListener("load", function () {
        (e.img.obj = o),
          (e.img.loaded = !0),
          r.revokeObjectURL(c),
          i.tmp.count_svg++;
      }),
        (o.src = c);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
      const r = s * n;
        const c = s / n;
        const o = (180 * (c - 2)) / c;
        const l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
      for (let v = 0; r > v; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), i.particles.shape.image.src != ""))
        if (e == "svg") {
          const a = new XMLHttpRequest();
          a.open("GET", i.particles.shape.image.src),
            (a.onreadystatechange = function (e) {
              a.readyState == 4 &&
                (a.status == 200
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            a.send();
        } else {
          const t = new Image();
          t.addEventListener("load", function () {
            (i.tmp.img_obj = t), i.fn.vendors.checkBeforeDraw();
          }),
            (t.src = i.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      i.particles.shape.type == "image"
        ? i.tmp.img_type == "svg"
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : void 0 != i.tmp.img_obj
          ? (i.fn.particlesDraw(),
            i.particles.move.enable
              ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
              : cancelRequestAnimFrame(i.fn.drawAnimFrame))
          : i.tmp.img_error ||
            (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(),
          i.particles.move.enable
            ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      i.particles.shape.type == "image"
        ? i.tmp.img_type == "svg" && void 0 == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
            i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        (i.particles.line_linked.color_rgb_line = hexToRgb(
          i.particles.line_linked.color
        ));
    }),
    (i.fn.vendors.start = function () {
      isInArray("image", i.particles.shape.type)
        ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
            i.particles.shape.image.src.length - 3
          )),
          i.fn.vendors.loadImg(i.tmp.img_type))
        : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
(Object.deepExtend = function (e, a) {
  for (const t in a)
    a[t] && a[t].constructor && a[t].constructor === Object
      ? ((e[t] = e[t] || {}), arguments.callee(e[t], a[t]))
      : (e[t] = a[t]);
  return e;
}),
  (window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }
    );
  })()),
  (window.cancelRequestAnimFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout
    );
  })()),
  (window.pJSDom = []),
  (window.particlesJS = function (e, a) {
    typeof e !== "string" && ((a = e), (e = "particles-js")),
      e || (e = "particles-js");
    const t = document.getElementById(e);
      const i = "particles-js-canvas-el";
      const s = t.getElementsByClassName(i);
    if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
    const n = document.createElement("canvas");
    (n.className = i), (n.style.width = "100%"), (n.style.height = "100%");
    const r = document.getElementById(e).appendChild(n);
    r != null && pJSDom.push(new pJS(e, a));
  }),
  (window.particlesJS.load = function (e, a, t) {
    const i = new XMLHttpRequest();
    i.open("GET", a),
      (i.onreadystatechange = function (a) {
        if (i.readyState == 4)
          if (i.status == 200) {
            const s = JSON.parse(a.currentTarget.response);
            window.particlesJS(e, s), t && t();
          } else
            console.log(`Error pJS - XMLHttpRequest status: ${  i.status}`),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  });

/*= ===================================
    Time circles JS
====================================== */

/**
 * Basic structure: TC_Class is the public class that is returned upon being called
 *
 * So, if you do
 *      var tc = $(".timer").TimeCircles();
 *
 * tc will contain an instance of the public TimeCircles class. It is important to
 * note that TimeCircles is not chained in the conventional way, check the
 * documentation for more info on how TimeCircles can be chained.
 *
 * After being called/created, the public TimerCircles class will then- for each element
 * within it's collection, either fetch or create an instance of the private class.
 * Each function called upon the public class will be forwarded to each instance
 * of the private classes within the relevant element collection
 * */
(function ($) {
  let useWindow = window;

  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  if (!Object.keys) {
    Object.keys = (function () {
      
      const {hasOwnProperty} = Object.prototype;
        const hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
        const dontEnums = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor",
        ];
        const dontEnumsLength = dontEnums.length;

      return function (obj) {
        if (
          typeof obj !== "object" &&
          (typeof obj !== "function" || obj === null)
        ) {
          throw new TypeError("Object.keys called on non-object");
        }

        const result = [];
          let prop;
          let i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    })();
  }

  // Used to disable some features on IE8
  let limited_mode = false;
  const tick_duration = 200; // in ms

  const debug = location.hash === "#debug";
  function debug_log(msg) {
    if (debug) {
      console.log(msg);
    }
  }

  const allUnits = ["Days", "Hours", "Minutes", "Seconds"];
  const nextUnits = {
    Seconds: "Minutes",
    Minutes: "Hours",
    Hours: "Days",
    Days: "Years",
  };
  const secondsIn = {
    Seconds: 1,
    Minutes: 60,
    Hours: 3600,
    Days: 86400,
    Months: 2678400,
    Years: 31536000,
  };

  /**
   * Converts hex color code into object containing integer values for the r,g,b use
   * This function (hexToRgb) originates from:
   * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param {string} hex color code
   */
  function hexToRgb(hex) {
    // Verify already RGB (e.g. "rgb(0,0,0)") or RGBA (e.g. "rgba(0,0,0,0.5)")
    const rgba = /^rgba?\(([\d]+),([\d]+),([\d]+)(,([\d\.]+))?\)$/;
    if (rgba.test(hex)) {
      var result = rgba.exec(hex);
      return {
        r: parseInt(result[1]),
        g: parseInt(result[2]),
        b: parseInt(result[3]),
        a: parseInt(result[5] ? result[5] : 1),
      };
    }

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  function isCanvasSupported() {
    const elem = document.createElement("canvas");
    return !!(elem.getContext && elem.getContext("2d"));
  }

  /**
   * Function s4() and guid() originate from:
   * http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
   */
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  /**
   * Creates a unique id
   * @returns {String}
   */
  function guid() {
    return (
      `${s4() +
      s4() 
      }-${ 
      s4() 
      }-${ 
      s4() 
      }-${ 
      s4() 
      }-${ 
      s4() 
      }${s4() 
      }${s4()}`
    );
  }

  /**
   * Array.prototype.indexOf fallback for IE8
   * @param {Mixed} mixed
   * @returns {Number}
   */
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /* , from */) {
      const len = this.length >>> 0;

      let from = Number(arguments[1]) || 0;
      from = from < 0 ? Math.ceil(from) : Math.floor(from);
      if (from < 0) from += len;

      for (; from < len; from++) {
        if (from in this && this[from] === elt) return from;
      }
      return -1;
    };
  }

  function parse_date(str) {
    const match = str.match(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/
    );
    if (match !== null && match.length > 0) {
      const parts = str.split(" ");
      const date = parts[0].split("-");
      const time = parts[1].split(":");
      return new Date(date[0], date[1] - 1, date[2], time[0], time[1], time[2]);
    }
    // Fallback for different date formats
    let d = Date.parse(str);
    if (!isNaN(d)) return d;
    d = Date.parse(str.replace(/-/g, "/").replace("T", " "));
    if (!isNaN(d)) return d;
    // Cant find anything
    return new Date();
  }

  function parse_times(diff, old_diff, total_duration, units, floor) {
    const raw_time = {};
    const raw_old_time = {};
    const time = {};
    const pct = {};
    const old_pct = {};
    const old_time = {};

    let greater_unit = null;
    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      var maxUnits;

      if (greater_unit === null) {
        maxUnits = total_duration / secondsIn[unit];
      } else {
        maxUnits = secondsIn[greater_unit] / secondsIn[unit];
      }

      let curUnits = diff / secondsIn[unit];
      let oldUnits = old_diff / secondsIn[unit];

      if (floor) {
        if (curUnits > 0) curUnits = Math.floor(curUnits);
        else curUnits = Math.ceil(curUnits);
        if (oldUnits > 0) oldUnits = Math.floor(oldUnits);
        else oldUnits = Math.ceil(oldUnits);
      }

      if (unit !== "Days") {
        curUnits %= maxUnits;
        oldUnits %= maxUnits;
      }

      raw_time[unit] = curUnits;
      time[unit] = Math.abs(curUnits);
      raw_old_time[unit] = oldUnits;
      old_time[unit] = Math.abs(oldUnits);
      pct[unit] = Math.abs(curUnits) / maxUnits;
      old_pct[unit] = Math.abs(oldUnits) / maxUnits;

      greater_unit = unit;
    }

    return {
      raw_time,
      raw_old_time,
      time,
      old_time,
      pct,
      old_pct,
    };
  }

  let TC_Instance_List = {};
  function updateUsedWindow() {
    if (typeof useWindow.TC_Instance_List !== "undefined") {
      TC_Instance_List = useWindow.TC_Instance_List;
    } else {
      useWindow.TC_Instance_List = TC_Instance_List;
    }
    initializeAnimationFrameHandler(useWindow);
  }

  function initializeAnimationFrameHandler(w) {
    const vendors = ["webkit", "moz"];
    for (let x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {
      w.requestAnimationFrame = w[`${vendors[x]  }RequestAnimationFrame`];
      w.cancelAnimationFrame = w[`${vendors[x]  }CancelAnimationFrame`];
    }

    if (!w.requestAnimationFrame || !w.cancelAnimationFrame) {
      w.requestAnimationFrame = function (callback, element, instance) {
        if (typeof instance === "undefined")
          instance = { data: { last_frame: 0 } };
        const currTime = new Date().getTime();
        const timeToCall = Math.max(
          0,
          16 - (currTime - instance.data.last_frame)
        );
        const id = w.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        instance.data.last_frame = currTime + timeToCall;
        return id;
      };
      w.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }
  }

  const TC_Instance = function (element, options) {
    this.element = element;
    this.container;
    this.listeners = null;
    this.data = {
      paused: false,
      last_frame: 0,
      animation_frame: null,
      interval_fallback: null,
      timer: false,
      total_duration: null,
      prev_time: null,
      drawn_units: [],
      text_elements: {
        Days: null,
        Hours: null,
        Minutes: null,
        Seconds: null,
      },
      attributes: {
        canvas: null,
        context: null,
        item_size: null,
        line_width: null,
        radius: null,
        outer_radius: null,
      },
      state: {
        fading: {
          Days: false,
          Hours: false,
          Minutes: false,
          Seconds: false,
        },
      },
    };

    this.config = null;
    this.setOptions(options);
    this.initialize();
  };

  TC_Instance.prototype.clearListeners = function () {
    this.listeners = { all: [], visible: [] };
  };

  TC_Instance.prototype.addTime = function (seconds_to_add) {
    if (this.data.attributes.ref_date instanceof Date) {
      const d = this.data.attributes.ref_date;
      d.setSeconds(d.getSeconds() + seconds_to_add);
    } else if (!isNaN(this.data.attributes.ref_date)) {
      this.data.attributes.ref_date += seconds_to_add * 1000;
    }
  };

  TC_Instance.prototype.initialize = function (clear_listeners) {
    // Initialize drawn units
    this.data.drawn_units = [];
    for (var i = 0; i < Object.keys(this.config.time).length; i++) {
      const unit = Object.keys(this.config.time)[i];
      if (this.config.time[unit].show) {
        this.data.drawn_units.push(unit);
      }
    }

    // Avoid stacking
    $(this.element).children("div.time_circles").remove();

    if (typeof clear_listeners === "undefined") clear_listeners = true;
    if (clear_listeners || this.listeners === null) {
      this.clearListeners();
    }
    this.container = $("<div>");
    this.container.addClass("time_circles");
    this.container.appendTo(this.element);

    // Determine the needed width and height of TimeCircles
    let height = this.element.offsetHeight;
    let width = this.element.offsetWidth;
    if (height === 0) height = $(this.element).height();
    if (width === 0) width = $(this.element).width();

    if (height === 0 && width > 0)
      height = width / this.data.drawn_units.length;
    else if (width === 0 && height > 0)
      width = height * this.data.drawn_units.length;

    // Create our canvas and set it to the appropriate size
    const canvasElement = document.createElement("canvas");
    canvasElement.width = width;
    canvasElement.height = height;

    // Add canvas elements
    this.data.attributes.canvas = $(canvasElement);
    this.data.attributes.canvas.appendTo(this.container);

    // Check if the browser has browser support
    let canvasSupported = isCanvasSupported();
    // If the browser doesn't have browser support, check if explorer canvas is loaded
    // (A javascript library that adds canvas support to browsers that don't have it)
    if (!canvasSupported && typeof G_vmlCanvasManager !== "undefined") {
      G_vmlCanvasManager.initElement(canvasElement);
      limited_mode = true;
      canvasSupported = true;
    }
    if (canvasSupported) {
      this.data.attributes.context = canvasElement.getContext("2d");
    }

    this.data.attributes.item_size = Math.min(
      width / this.data.drawn_units.length,
      height
    );
    this.data.attributes.line_width =
      this.data.attributes.item_size * this.config.fg_width;
    this.data.attributes.radius =
      (this.data.attributes.item_size * 0.8 - this.data.attributes.line_width) /
      2;
    this.data.attributes.outer_radius =
      this.data.attributes.radius +
      0.5 *
        Math.max(
          this.data.attributes.line_width,
          this.data.attributes.line_width * this.config.bg_width
        );

    // Prepare Time Elements
    var i = 0;
    for (const key in this.data.text_elements) {
      if (!this.config.time[key].show) continue;

      const textElement = $("<div>");
      textElement.addClass(`textDiv_${  key}`);
      textElement.css("top", Math.round(0.35 * this.data.attributes.item_size));
      textElement.css("left", Math.round(i++ * this.data.attributes.item_size));
      textElement.css("width", this.data.attributes.item_size);
      textElement.appendTo(this.container);

      const headerElement = $("<h4>");
      headerElement.text(this.config.time[key].text); // Options
      headerElement.css(
        "font-size",
        Math.round(this.config.text_size * this.data.attributes.item_size)
      );
      headerElement.appendTo(textElement);

      const numberElement = $("<span>");
      numberElement.css(
        "font-size",
        Math.round(this.config.number_size * this.data.attributes.item_size)
      );
      numberElement.appendTo(textElement);

      this.data.text_elements[key] = numberElement;
    }

    this.start();
    if (!this.config.start) {
      this.data.paused = true;
    }

    // Set up interval fallback
    const _this = this;
    this.data.interval_fallback = useWindow.setInterval(function () {
      _this.update.call(_this, true);
    }, 100);
  };

  TC_Instance.prototype.update = function (nodraw) {
    if (typeof nodraw === "undefined") {
      nodraw = false;
    } else if (nodraw && this.data.paused) {
      return;
    }

    if (limited_mode) {
      // Per unit clearing doesn't work in IE8 using explorer canvas, so do it in one time. The downside is that radial fade cant be used
      this.data.attributes.context.clearRect(
        0,
        0,
        this.data.attributes.canvas[0].width,
        this.data.attributes.canvas[0].hright
      );
    }
    let diff; let old_diff;

    let prevDate = this.data.prev_time;
    const curDate = new Date();
    this.data.prev_time = curDate;

    if (prevDate === null) prevDate = curDate;

    // If not counting past zero, and time < 0, then simply draw the zero point once, and call stop
    if (!this.config.count_past_zero) {
      if (curDate > this.data.attributes.ref_date) {
        for (var i = 0; i < this.data.drawn_units.length; i++) {
          var key = this.data.drawn_units[i];

          // Set the text value
          this.data.text_elements[key].text("0");
          var x =
            i * this.data.attributes.item_size +
            this.data.attributes.item_size / 2;
          var y = this.data.attributes.item_size / 2;
          var {color} = this.config.time[key];
          this.drawArc(x, y, color, 0);
        }
        this.stop();
        return;
      }
    }

    // Compare current time with reference
    diff = (this.data.attributes.ref_date - curDate) / 1000;
    old_diff = (this.data.attributes.ref_date - prevDate) / 1000;

    const floor = this.config.animation !== "smooth";

    const visible_times = parse_times(
      diff,
      old_diff,
      this.data.total_duration,
      this.data.drawn_units,
      floor
    );
    const all_times = parse_times(
      diff,
      old_diff,
      secondsIn.Years,
      allUnits,
      floor
    );

    var i = 0;
    let j = 0;
    let lastKey = null;

    const cur_shown = this.data.drawn_units.slice();
    for (var i in allUnits) {
      var key = allUnits[i];

      // Notify (all) listeners
      if (
        Math.floor(all_times.raw_time[key]) !==
        Math.floor(all_times.raw_old_time[key])
      ) {
        this.notifyListeners(
          key,
          Math.floor(all_times.time[key]),
          Math.floor(diff),
          "all"
        );
      }

      if (cur_shown.indexOf(key) < 0) continue;

      // Notify (visible) listeners
      if (
        Math.floor(visible_times.raw_time[key]) !==
        Math.floor(visible_times.raw_old_time[key])
      ) {
        this.notifyListeners(
          key,
          Math.floor(visible_times.time[key]),
          Math.floor(diff),
          "visible"
        );
      }

      if (!nodraw) {
        // Set the text value
        this.data.text_elements[key].text(
          Math.floor(Math.abs(visible_times.time[key]))
        );

        var x =
          j * this.data.attributes.item_size +
          this.data.attributes.item_size / 2;
        var y = this.data.attributes.item_size / 2;
        var {color} = this.config.time[key];

        if (this.config.animation === "smooth") {
          if (lastKey !== null && !limited_mode) {
            if (
              Math.floor(visible_times.time[lastKey]) >
              Math.floor(visible_times.old_time[lastKey])
            ) {
              this.radialFade(x, y, color, 1, key);
              this.data.state.fading[key] = true;
            } else if (
              Math.floor(visible_times.time[lastKey]) <
              Math.floor(visible_times.old_time[lastKey])
            ) {
              this.radialFade(x, y, color, 0, key);
              this.data.state.fading[key] = true;
            }
          }
          if (!this.data.state.fading[key]) {
            this.drawArc(x, y, color, visible_times.pct[key]);
          }
        } else {
          this.animateArc(
            x,
            y,
            color,
            visible_times.pct[key],
            visible_times.old_pct[key],
            new Date().getTime() + tick_duration
          );
        }
      }
      lastKey = key;
      j++;
    }

    // Dont request another update if we should be paused
    if (this.data.paused || nodraw) {
      return;
    }

    // We need this for our next frame either way
    const _this = this;
    const update = function () {
      _this.update.call(_this);
    };

    // Either call next update immediately, or in a second
    if (this.config.animation === "smooth") {
      // Smooth animation, Queue up the next frame
      this.data.animation_frame = useWindow.requestAnimationFrame(
        update,
        _this.element,
        _this
      );
    } else {
      // Tick animation, Don't queue until very slightly after the next second happens
      let delay = (diff % 1) * 1000;
      if (delay < 0) delay = 1000 + delay;
      delay += 50;

      _this.data.animation_frame = useWindow.setTimeout(function () {
        _this.data.animation_frame = useWindow.requestAnimationFrame(
          update,
          _this.element,
          _this
        );
      }, delay);
    }
  };

  TC_Instance.prototype.animateArc = function (
    x,
    y,
    color,
    target_pct,
    cur_pct,
    animation_end
  ) {
    if (this.data.attributes.context === null) return;

    const diff = cur_pct - target_pct;
    if (Math.abs(diff) > 0.5) {
      if (target_pct === 0) {
        this.radialFade(x, y, color, 1);
      } else {
        this.radialFade(x, y, color, 0);
      }
    } else {
      let progress =
        (tick_duration - (animation_end - new Date().getTime())) /
        tick_duration;
      if (progress > 1) progress = 1;

      const pct = cur_pct * (1 - progress) + target_pct * progress;
      this.drawArc(x, y, color, pct);

      // var show_pct =
      if (progress >= 1) return;
      const _this = this;
      useWindow.requestAnimationFrame(function () {
        _this.animateArc(x, y, color, target_pct, cur_pct, animation_end);
      }, this.element);
    }
  };

  TC_Instance.prototype.drawArc = function (x, y, color, pct) {
    if (this.data.attributes.context === null) return;

    const clear_radius = Math.max(
      this.data.attributes.outer_radius,
      this.data.attributes.item_size / 2
    );
    if (!limited_mode) {
      this.data.attributes.context.clearRect(
        x - clear_radius,
        y - clear_radius,
        clear_radius * 2,
        clear_radius * 2
      );
    }

    if (this.config.use_background) {
      this.data.attributes.context.beginPath();
      this.data.attributes.context.arc(
        x,
        y,
        this.data.attributes.radius,
        0,
        2 * Math.PI,
        false
      );
      this.data.attributes.context.lineWidth =
        this.data.attributes.line_width * this.config.bg_width;

      // line color
      this.data.attributes.context.strokeStyle = this.config.circle_bg_color;
      this.data.attributes.context.stroke();
    }

    // Direction
    let startAngle; let endAngle; let counterClockwise;
    const defaultOffset = -0.5 * Math.PI;
    const fullCircle = 2 * Math.PI;
    startAngle = defaultOffset + (this.config.start_angle / 360) * fullCircle;
    const offset = 2 * pct * Math.PI;

    if (this.config.direction === "Both") {
      counterClockwise = false;
      startAngle -= offset / 2;
      endAngle = startAngle + offset;
    } else if (this.config.direction === "Clockwise") {
        counterClockwise = false;
        endAngle = startAngle + offset;
      } else {
        counterClockwise = true;
        endAngle = startAngle - offset;
      }

    this.data.attributes.context.beginPath();
    this.data.attributes.context.arc(
      x,
      y,
      this.data.attributes.radius,
      startAngle,
      endAngle,
      counterClockwise
    );
    this.data.attributes.context.lineWidth = this.data.attributes.line_width;

    // line color
    this.data.attributes.context.strokeStyle = color;
    this.data.attributes.context.stroke();
  };

  TC_Instance.prototype.radialFade = function (x, y, color, from, key) {
    // TODO: Make fade_time option
    const rgb = hexToRgb(color);
    const _this = this; // We have a few inner scopes here that will need access to our instance

    const step = 0.2 * (from === 1 ? -1 : 1);
    let i;
    for (i = 0; from <= 1 && from >= 0; i++) {
      // Create inner scope so our variables are not changed by the time the Timeout triggers
      (function () {
        const delay = 50 * i;
        const rgba =
          `rgba(${ 
          rgb.r 
          }, ${ 
          rgb.g 
          }, ${ 
          rgb.b 
          }, ${ 
          Math.round(from * 10) / 10 
          })`;
        useWindow.setTimeout(function () {
          _this.drawArc(x, y, rgba, 1);
        }, delay);
      })();
      from += step;
    }
    if (typeof key !== undefined) {
      useWindow.setTimeout(function () {
        _this.data.state.fading[key] = false;
      }, 50 * i);
    }
  };

  TC_Instance.prototype.timeLeft = function () {
    if (this.data.paused && typeof this.data.timer === "number") {
      return this.data.timer;
    }
    const now = new Date();
    return (this.data.attributes.ref_date - now) / 1000;
  };

  TC_Instance.prototype.start = function () {
    useWindow.cancelAnimationFrame(this.data.animation_frame);
    useWindow.clearTimeout(this.data.animation_frame);

    // Check if a date was passed in html attribute or jquery data
    let attr_data_date = $(this.element).data("date");
    if (typeof attr_data_date === "undefined") {
      attr_data_date = $(this.element).attr("data-date");
    }
    if (typeof attr_data_date === "string") {
      this.data.attributes.ref_date = parse_date(attr_data_date);
    }
    // Check if this is an unpause of a timer
    else if (typeof this.data.timer === "number") {
      if (this.data.paused) {
        this.data.attributes.ref_date =
          new Date().getTime() + this.data.timer * 1000;
      }
    } else {
      // Try to get data-timer
      let attr_data_timer = $(this.element).data("timer");
      if (typeof attr_data_timer === "undefined") {
        attr_data_timer = $(this.element).attr("data-timer");
      }
      if (typeof attr_data_timer === "string") {
        attr_data_timer = parseFloat(attr_data_timer);
      }
      if (typeof attr_data_timer === "number") {
        this.data.timer = attr_data_timer;
        this.data.attributes.ref_date =
          new Date().getTime() + attr_data_timer * 1000;
      } else {
        // data-timer and data-date were both not set
        // use config date
        this.data.attributes.ref_date = this.config.ref_date;
      }
    }

    // Start running
    this.data.paused = false;
    this.update.call(this);
  };

  TC_Instance.prototype.restart = function () {
    this.data.timer = false;
    this.start();
  };

  TC_Instance.prototype.stop = function () {
    if (typeof this.data.timer === "number") {
      this.data.timer = this.timeLeft(this);
    }
    // Stop running
    this.data.paused = true;
    useWindow.cancelAnimationFrame(this.data.animation_frame);
  };

  TC_Instance.prototype.destroy = function () {
    this.clearListeners();
    this.stop();
    useWindow.clearInterval(this.data.interval_fallback);
    this.data.interval_fallback = null;

    this.container.remove();
    $(this.element).removeAttr("data-tc-id");
    $(this.element).removeData("tc-id");
  };

  TC_Instance.prototype.setOptions = function (options) {
    if (this.config === null) {
      this.default_options.ref_date = new Date();
      this.config = $.extend(true, {}, this.default_options);
    }
    $.extend(true, this.config, options);

    // Use window.top if use_top_frame is true
    if (this.config.use_top_frame) {
      useWindow = window.top;
    } else {
      useWindow = window;
    }
    updateUsedWindow();

    this.data.total_duration = this.config.total_duration;
    if (typeof this.data.total_duration === "string") {
      if (typeof secondsIn[this.data.total_duration] !== "undefined") {
        // If set to Years, Months, Days, Hours or Minutes, fetch the secondsIn value for that
        this.data.total_duration = secondsIn[this.data.total_duration];
      } else if (this.data.total_duration === "Auto") {
        // If set to auto, total_duration is the size of 1 unit, of the unit type bigger than the largest shown
        for (let i = 0; i < Object.keys(this.config.time).length; i++) {
          const unit = Object.keys(this.config.time)[i];
          if (this.config.time[unit].show) {
            this.data.total_duration = secondsIn[nextUnits[unit]];
            break;
          }
        }
      } else {
        // If it's a string, but neither of the above, user screwed up.
        this.data.total_duration = secondsIn.Years;
        console.error(
          "Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto"
        );
      }
    }
  };

  TC_Instance.prototype.addListener = function (f, context, type) {
    if (typeof f !== "function") return;
    if (typeof type === "undefined") type = "visible";
    this.listeners[type].push({ func: f, scope: context });
  };

  TC_Instance.prototype.notifyListeners = function (unit, value, total, type) {
    for (let i = 0; i < this.listeners[type].length; i++) {
      const listener = this.listeners[type][i];
      listener.func.apply(listener.scope, [unit, value, total]);
    }
  };

  TC_Instance.prototype.default_options = {
    ref_date: new Date(),
    start: true,
    animation: "smooth",
    count_past_zero: true,
    circle_bg_color: "#60686F",
    use_background: true,
    fg_width: 0.1,
    bg_width: 1.2,
    text_size: 0.07,
    number_size: 0.28,
    total_duration: "Auto",
    direction: "Clockwise",
    use_top_frame: false,
    start_angle: 0,
    time: {
      Days: {
        show: true,
        text: "Days",
        color: "#FC6",
      },
      Hours: {
        show: true,
        text: "Hours",
        color: "#9CF",
      },
      Minutes: {
        show: true,
        text: "Minutes",
        color: "#BFB",
      },
      Seconds: {
        show: true,
        text: "Seconds",
        color: "#F99",
      },
    },
  };

  // Time circle class
  const TC_Class = function (elements, options) {
    this.elements = elements;
    this.options = options;
    this.foreach();
  };

  TC_Class.prototype.getInstance = function (element) {
    let instance;

    let cur_id = $(element).data("tc-id");
    if (typeof cur_id === "undefined") {
      cur_id = guid();
      $(element).attr("data-tc-id", cur_id);
    }
    if (typeof TC_Instance_List[cur_id] === "undefined") {
      let {options} = this;
      let element_options = $(element).data("options");
      if (typeof element_options === "string") {
        element_options = JSON.parse(element_options);
      }
      if (typeof element_options === "object") {
        options = $.extend(true, {}, this.options, element_options);
      }
      instance = new TC_Instance(element, options);
      TC_Instance_List[cur_id] = instance;
    } else {
      instance = TC_Instance_List[cur_id];
      if (typeof this.options !== "undefined") {
        instance.setOptions(this.options);
      }
    }
    return instance;
  };

  TC_Class.prototype.addTime = function (seconds_to_add) {
    this.foreach(function (instance) {
      instance.addTime(seconds_to_add);
    });
  };

  TC_Class.prototype.foreach = function (callback) {
    const _this = this;
    this.elements.each(function () {
      const instance = _this.getInstance(this);
      if (typeof callback === "function") {
        callback(instance);
      }
    });
    return this;
  };

  TC_Class.prototype.start = function () {
    this.foreach(function (instance) {
      instance.start();
    });
    return this;
  };

  TC_Class.prototype.stop = function () {
    this.foreach(function (instance) {
      instance.stop();
    });
    return this;
  };

  TC_Class.prototype.restart = function () {
    this.foreach(function (instance) {
      instance.restart();
    });
    return this;
  };

  TC_Class.prototype.rebuild = function () {
    this.foreach(function (instance) {
      instance.initialize(false);
    });
    return this;
  };

  TC_Class.prototype.getTime = function () {
    return this.getInstance(this.elements[0]).timeLeft();
  };

  TC_Class.prototype.addListener = function (f, type) {
    if (typeof type === "undefined") type = "visible";
    const _this = this;
    this.foreach(function (instance) {
      instance.addListener(f, _this.elements, type);
    });
    return this;
  };

  TC_Class.prototype.destroy = function () {
    this.foreach(function (instance) {
      instance.destroy();
    });
    return this;
  };

  TC_Class.prototype.end = function () {
    return this.elements;
  };

  $.fn.TimeCircles = function (options) {
    return new TC_Class(this, options);
  };
})(jQuery);

/*= ===================================
    Ajax Mail js
====================================== */

$(function () {
  // Get the form.
  const form = $("#contact-form");

  // Get the messages div.
  const formMessages = $(".form-messege");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    const formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });
});
