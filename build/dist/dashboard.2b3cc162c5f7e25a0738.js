(window.webpackJsonp = window.webpackJsonp || []).push([
    [21],
    {
        1813: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(1841),
                i = n.n(o),
                s = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var l = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {animateEnter: !1}), (e.timer = null), e;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    s(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.enableAnimation();
                            }
                        },
                        {
                            key: "resetAnimation",
                            value: function() {
                                this.setState({animateEnter: !1}),
                                    this.enableAnimation();
                            }
                        },
                        {
                            key: "enableAnimation",
                            value: function() {
                                var e = this;
                                this.timer = setTimeout(function() {
                                    e.timer && e.setState({animateEnter: !0});
                                }, 2e3);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                clearTimeout(this.timer), (this.timer = null);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.children
                                    ? r.a.createElement(
                                          i.a,
                                          {
                                              className: this.props.className,
                                              component: this.props.component,
                                              transitionName: this.props
                                                  .transitionName,
                                              transitionEnterTimeout: this.props
                                                  .enterTimeout,
                                              transitionEnter: this.state
                                                  .animateEnter,
                                              transitionLeave: !1
                                          },
                                          this.props.children
                                      )
                                    : r.a.createElement(this.props.component);
                            }
                        }
                    ]),
                    t
                );
            })();
            (l.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = l);
        },
        1820: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(274),
                i = n(17),
                s = n.n(i),
                l = n(1813),
                c = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var u = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var n = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (n.state = {page: 1, pageSize: e.pageSize}), n;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    c(t, [
                        {
                            key: "onChange",
                            value: function(e, t) {
                                this.setState({page: e, pageSize: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.state,
                                    n = t.page,
                                    a = t.pageSize,
                                    i = this.props,
                                    c = i.header,
                                    u = i.rows,
                                    p = i.extraRow,
                                    h = u.length,
                                    m = f(n, a);
                                function f(e, t) {
                                    for (
                                        var n = [], a = (e - 1) * t;
                                        a < Math.min(h, e * t);
                                        a++
                                    )
                                        n.push(u[a]);
                                    return n;
                                }
                                return (
                                    !m.length && h && (m = f(1, a)),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-content",
                                            style: this.props.style
                                        },
                                        r.a.createElement(
                                            "table",
                                            {className: this.props.className},
                                            c
                                                ? r.a.createElement(
                                                      "thead",
                                                      null,
                                                      c
                                                  )
                                                : null,
                                            this.props.withTransition && 1 === n
                                                ? r.a.createElement(
                                                      l.a,
                                                      {
                                                          component: "tbody",
                                                          transitionName:
                                                              "newrow"
                                                      },
                                                      m,
                                                      p
                                                  )
                                                : r.a.createElement(
                                                      "tbody",
                                                      null,
                                                      m,
                                                      p
                                                  )
                                        ),
                                        h > a
                                            ? r.a.createElement(o.a, {
                                                  style: {
                                                      paddingTop: "1rem",
                                                      paddingBottom: "1rem",
                                                      paddingLeft:
                                                          this.props
                                                              .leftPadding ||
                                                          null
                                                  },
                                                  total: h,
                                                  showTotal: function(t) {
                                                      return s.a.translate(
                                                          e.props.label,
                                                          {count: t}
                                                      );
                                                  },
                                                  pageSize: a,
                                                  current: n,
                                                  onChange: this.onChange.bind(
                                                      this
                                                  )
                                              })
                                            : null,
                                        this.props.children
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (u.defaultProps = {
                rows: [],
                pageSize: 15,
                label: "utility.total_x_items",
                className: "table",
                extraRow: null,
                style: {paddingBottom: "1rem"}
            }),
                (t.a = u);
        },
        2117: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(33),
                i = n(42),
                s = n(564),
                l = n(24),
                c = n(21),
                u = n(1814),
                p = n(13),
                h = n(15),
                m = n(255),
                f = n(10),
                d = n(3),
                b = n.n(d),
                g = n(8),
                y = n.n(g),
                v = n(22),
                k = n(1820),
                E = n(38),
                _ = n(36),
                w = n(141),
                S = n(49),
                O = n(85),
                C = n(2105),
                j = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var P = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.statsInterval = null), (e.state = {imgError: !1}), e
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    j(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    h.a.check_market_stats(
                                        e.marketStats,
                                        this.props.marketStats
                                    ) ||
                                    e.base.get("id") !==
                                        this.props.base.get("id") ||
                                    e.quote.get("id") !==
                                        this.props.quote.get("id") ||
                                    t.imgError !== this.state.imgError ||
                                    e.starredMarkets.size !==
                                        this.props.starredMarkets.size
                                );
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._setInterval();
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this._clearInterval();
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                (e.base.get("id") ===
                                    this.props.base.get("id") &&
                                    e.quote.get("id") ===
                                        this.props.quote.get("id")) ||
                                    (this._clearInterval(),
                                    this._setInterval(e));
                            }
                        },
                        {
                            key: "_setInterval",
                            value: function() {
                                var e =
                                        (arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null) || this.props,
                                    t = e.base,
                                    n = e.quote;
                                (this.statsChecked = new Date()),
                                    (this.statsInterval = O.a.getMarketStatsInterval(
                                        35e3,
                                        t,
                                        n
                                    ));
                            }
                        },
                        {
                            key: "_clearInterval",
                            value: function() {
                                this.statsInterval && this.statsInterval();
                            }
                        },
                        {
                            key: "_onError",
                            value: function(e) {
                                this.state.imgError ||
                                    ((this.refs[e.toLowerCase()].src =
                                        "asset-symbols/bts.png"),
                                    this.setState({imgError: !0}));
                            }
                        },
                        {
                            key: "_toggleFavoriteMarket",
                            value: function(e, t) {
                                var n = e + "_" + t;
                                this.props.starredMarkets.has(n)
                                    ? SettingsActions.removeStarMarket(e, t)
                                    : SettingsActions.addStarMarket(e, t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.base,
                                    n = e.quote,
                                    a = e.marketStats,
                                    o = e.isHidden,
                                    i = e.inverted,
                                    s = e.handleHide,
                                    l = e.handleFlip;
                                var c = (function(e) {
                                        var t = e.get("symbol");
                                        if (
                                            "OPEN.BTC" === t ||
                                            "GDEX.BTC" === t ||
                                            "RUDEX.BTC" === t
                                        )
                                            return t;
                                        var n = e.get("symbol").split(".");
                                        return 2 === n.length ? n[1] : n[0];
                                    })(n),
                                    u = a
                                        ? parseFloat(a.change) > 0
                                            ? "change-up"
                                            : parseFloat(a.change) < 0
                                                ? "change-down"
                                                : ""
                                        : "",
                                    p = n.get("symbol") + "_" + t.get("symbol"),
                                    m = this.props.starredMarkets.has(p)
                                        ? "gold-star"
                                        : "grey-star";
                                return r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                onClick: this._toggleFavoriteMarket.bind(
                                                    this,
                                                    n.get("symbol"),
                                                    t.get("symbol")
                                                )
                                            },
                                            r.a.createElement(_.a, {
                                                style: {cursor: "pointer"},
                                                className: m,
                                                name: "fi-star",
                                                title: "icons.fi_star.market"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: {textAlign: "left"}},
                                        r.a.createElement(
                                            C.a,
                                            {
                                                to:
                                                    "/market/" +
                                                    this.props.quote.get(
                                                        "symbol"
                                                    ) +
                                                    "_" +
                                                    this.props.base.get(
                                                        "symbol"
                                                    )
                                            },
                                            r.a.createElement("img", {
                                                ref: c.toLowerCase(),
                                                className: "column-hide-small",
                                                onError: this._onError.bind(
                                                    this,
                                                    c
                                                ),
                                                style: {
                                                    maxWidth: 20,
                                                    marginRight: 10
                                                },
                                                src:
                                                    "/asset-symbols/" +
                                                    c.toLowerCase() +
                                                    ".png"
                                            }),
                                            r.a.createElement(w.a, {
                                                dataPlace: "top",
                                                name: n.get("symbol")
                                            }),
                                            " ",
                                            this.props.isFavorite
                                                ? r.a.createElement(
                                                      "span",
                                                      null,
                                                      ": ",
                                                      r.a.createElement(w.a, {
                                                          dataPlace: "top",
                                                          name: t.get("symbol")
                                                      })
                                                  )
                                                : null
                                        )
                                    ),
                                    this.props.isFavorite
                                        ? null
                                        : r.a.createElement(
                                              "td",
                                              {style: {textAlign: "right"}},
                                              r.a.createElement(w.a, {
                                                  noTip: !0,
                                                  name: t.get("symbol")
                                              })
                                          ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            className: "column-hide-small",
                                            style: {textAlign: "right"}
                                        },
                                        a && a.price
                                            ? h.a.price_text(
                                                  a.price.toReal(!0),
                                                  n,
                                                  t
                                              )
                                            : null
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {textAlign: "right"},
                                            className: y()(u)
                                        },
                                        a ? a.change : null,
                                        "%"
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: {textAlign: "right"}},
                                        a
                                            ? h.a.format_volume(
                                                  a.volumeQuote,
                                                  t.get("precision")
                                              )
                                            : null
                                    ),
                                    null !== i && this.props.isFavorite
                                        ? r.a.createElement(
                                              "td",
                                              {className: "column-hide-small"},
                                              r.a.createElement(
                                                  "a",
                                                  {onClick: l},
                                                  r.a.createElement(_.a, {
                                                      name: "shuffle",
                                                      title: "icons.shuffle"
                                                  })
                                              )
                                          )
                                        : null,
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            "a",
                                            {
                                                style: {marginRight: 0},
                                                className: o
                                                    ? "action-plus"
                                                    : "order-cancel",
                                                onClick: s
                                            },
                                            r.a.createElement(_.a, {
                                                name: o
                                                    ? "plus-circle"
                                                    : "cross-circle",
                                                title: o
                                                    ? "icons.plus_circle.show_market"
                                                    : "icons.cross_circle.hide_market",
                                                className: "icon-14px"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (P.propTypes = {
                quote: E.a.ChainAsset.isRequired,
                base: E.a.ChainAsset.isRequired
            }),
                (P.defaultProps = {tempComponent: "tr"});
            var T = (P = Object(S.a)(P)),
                A =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) &&
                                    (e[a] = n[a]);
                        }
                        return e;
                    },
                N = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var M = (function(e) {
                    function t() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var e = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = {
                                filter: "",
                                showFlip: !1,
                                showHidden: !1,
                                markets: [],
                                sortBy: "volumeQuote",
                                sortDirection: !0
                            }),
                            (e.update = e.update.bind(e)),
                            e
                        );
                    }
                    return (
                        (function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                        typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                t &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, t)
                                        : (e.__proto__ = t));
                        })(t, r.a.Component),
                        N(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    this.update(e);
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this.update(),
                                        f.ChainStore.subscribe(this.update);
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    f.ChainStore.unsubscribe(this.update);
                                }
                            },
                            {
                                key: "_onToggleSort",
                                value: function(e) {
                                    if (e === this.state.sortBy)
                                        return this.setState({
                                            sortDirection: !this.state
                                                .sortDirection
                                        });
                                    this.setState({sortBy: e});
                                }
                            },
                            {
                                key: "update",
                                value: function() {
                                    var e = this,
                                        t =
                                            (arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : null) || this.props,
                                        n = t.forceDirection;
                                    if (t.markets && t.markets.size > 0) {
                                        var a = t.markets
                                            .toArray()
                                            .map(function(n) {
                                                var a = f.ChainStore.getAsset(
                                                    n.quote
                                                );
                                                if (
                                                    !f.ChainStore.getAsset(
                                                        n.base
                                                    ) ||
                                                    !a
                                                )
                                                    return null;
                                                var r = n.base + "_" + n.quote;
                                                return {
                                                    key: r,
                                                    inverted: void 0,
                                                    quote: n.quote,
                                                    base: n.base,
                                                    isHidden: t.hiddenMarkets.includes(
                                                        r
                                                    ),
                                                    isFavorite: t.isFavorite,
                                                    marketStats: t.allMarketStats.get(
                                                        r,
                                                        {}
                                                    ),
                                                    isStarred: e.props.starredMarkets.has(
                                                        r
                                                    )
                                                };
                                            })
                                            .filter(function(e) {
                                                return null !== e;
                                            });
                                        this.setState({
                                            showFlip: n,
                                            markets: a
                                        });
                                    }
                                }
                            },
                            {
                                key: "_toggleShowHidden",
                                value: function(e) {
                                    this.state.showHidden !== e &&
                                        this.setState({showHidden: e});
                                }
                            },
                            {
                                key: "_handleFilterInput",
                                value: function(e) {
                                    e.preventDefault(),
                                        this.setState({
                                            filter: e.target.value.toUpperCase()
                                        });
                                }
                            },
                            {
                                key: "_handleHide",
                                value: function(e, t) {
                                    if (this.props.handleHide)
                                        return this.props.handleHide(e, t);
                                    v.a.hideMarket(e.key, t);
                                }
                            },
                            {
                                key: "_handleFlip",
                                value: function(e, t) {
                                    if (this.props.handleFlip)
                                        return this.props.handleFlip(e, t);
                                    v.a.changeMarketDirection(
                                        (function(e, t, n) {
                                            return (
                                                t in e
                                                    ? Object.defineProperty(
                                                          e,
                                                          t,
                                                          {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          }
                                                      )
                                                    : (e[t] = n),
                                                e
                                            );
                                        })({}, e.key, t)
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.state,
                                        n = t.markets,
                                        a = t.showFlip,
                                        o = t.showHidden,
                                        i = t.filter,
                                        s = n
                                            .filter(function(t) {
                                                return (
                                                    !(!i && !t.isStarred) ||
                                                    (!(
                                                        e.props.onlyLiquid &&
                                                        t.marketStats &&
                                                        "volumeBase" in
                                                            t.marketStats
                                                    ) ||
                                                        !!t.marketStats
                                                            .volumeBase)
                                                );
                                            })
                                            .sort(function(t, n) {
                                                var a = e.state,
                                                    r = a.sortBy,
                                                    o = a.sortDirection;
                                                switch (r) {
                                                    case "price":
                                                        if (
                                                            t.marketStats
                                                                .price &&
                                                            n.marketStats.price
                                                        )
                                                            return o
                                                                ? n.marketStats.price.toReal() -
                                                                      t.marketStats.price.toReal()
                                                                : t.marketStats.price.toReal() -
                                                                      n.marketStats.price.toReal();
                                                        break;
                                                    case "change":
                                                        return o
                                                            ? parseFloat(
                                                                  n.marketStats[
                                                                      r
                                                                  ]
                                                              ) -
                                                                  parseFloat(
                                                                      t
                                                                          .marketStats[
                                                                          r
                                                                      ]
                                                                  )
                                                            : parseFloat(
                                                                  t.marketStats[
                                                                      r
                                                                  ]
                                                              ) -
                                                                  parseFloat(
                                                                      n
                                                                          .marketStats[
                                                                          r
                                                                      ]
                                                                  );
                                                    default:
                                                        return o
                                                            ? n.marketStats[r] -
                                                                  t.marketStats[
                                                                      r
                                                                  ]
                                                            : t.marketStats[r] -
                                                                  n.marketStats[
                                                                      r
                                                                  ];
                                                }
                                            })
                                            .map(function(t) {
                                                var n = !0;
                                                if (
                                                    t.isHidden !==
                                                    e.state.showHidden
                                                )
                                                    n = !1;
                                                else if (i) {
                                                    var a = f.ChainStore.getAsset(
                                                            t.quote
                                                        ),
                                                        o = f.ChainStore.getAsset(
                                                            t.base
                                                        ),
                                                        s = h.a.replaceName(a)
                                                            .isBitAsset,
                                                        l = h.a.replaceName(o)
                                                            .isBitAsset,
                                                        c = t.quote,
                                                        u = t.base;
                                                    if (
                                                        (s && (c = "bit" + c),
                                                        l && (u = "bit" + u),
                                                        i.includes(":"))
                                                    ) {
                                                        var p = i
                                                                .split(":")[0]
                                                                .trim(),
                                                            m = i
                                                                .split(":")[1]
                                                                .trim();
                                                        n =
                                                            c
                                                                .toLowerCase()
                                                                .includes(
                                                                    String(
                                                                        p
                                                                    ).toLowerCase()
                                                                ) &&
                                                            u
                                                                .toLowerCase()
                                                                .includes(
                                                                    String(
                                                                        m
                                                                    ).toLowerCase()
                                                                );
                                                    } else
                                                        n =
                                                            c
                                                                .toLowerCase()
                                                                .includes(
                                                                    String(
                                                                        i
                                                                    ).toLowerCase()
                                                                ) ||
                                                            u
                                                                .toLowerCase()
                                                                .includes(
                                                                    String(
                                                                        i
                                                                    ).toLowerCase()
                                                                );
                                                }
                                                return n
                                                    ? r.a.createElement(
                                                          T,
                                                          A({}, t, {
                                                              handleHide: e._handleHide.bind(
                                                                  e,
                                                                  t,
                                                                  !t.isHidden
                                                              ),
                                                              handleFlip: e._handleFlip.bind(
                                                                  e,
                                                                  t,
                                                                  !t.inverted
                                                              ),
                                                              starredMarkets:
                                                                  e.props
                                                                      .starredMarkets
                                                          })
                                                      )
                                                    : null;
                                            })
                                            .filter(function(e) {
                                                return !!e;
                                            });
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "header-selector mono-bg-light2"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "filter inline-block mono-fliter"
                                                },
                                                r.a.createElement("input", {
                                                    type: "text",
                                                    placeholder: "Filter",
                                                    onChange: this._handleFilterInput.bind(
                                                        this
                                                    )
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "selector inline-block"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: y()(
                                                            "inline-block",
                                                            {inactive: o}
                                                        ),
                                                        onClick: this._toggleShowHidden.bind(
                                                            this,
                                                            !1
                                                        )
                                                    },
                                                    r.a.createElement(b.a, {
                                                        content:
                                                            "account.hide_hidden"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: y()(
                                                            "inline-block",
                                                            {inactive: !o}
                                                        ),
                                                        onClick: this._toggleShowHidden.bind(
                                                            this,
                                                            !0
                                                        )
                                                    },
                                                    r.a.createElement(b.a, {
                                                        content:
                                                            "account.show_hidden"
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {style: {paddingTop: "0.5rem"}},
                                                r.a.createElement(
                                                    "label",
                                                    {
                                                        style: {
                                                            margin: "3px 0 0",
                                                            width: "fit-content"
                                                        }
                                                    },
                                                    r.a.createElement("input", {
                                                        style: {
                                                            position:
                                                                "relative",
                                                            top: 3
                                                        },
                                                        className: "no-margin",
                                                        type: "checkbox",
                                                        checked: this.props
                                                            .onlyLiquid,
                                                        onChange: function() {
                                                            v.a.changeViewSetting(
                                                                {
                                                                    onlyLiquid: !e
                                                                        .props
                                                                        .onlyLiquid
                                                                }
                                                            );
                                                        }
                                                    }),
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            style: {
                                                                paddingLeft:
                                                                    "0.4rem"
                                                            }
                                                        },
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "exchange.show_only_liquid"
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(k.a, {
                                            style: {
                                                paddingLeft: 0,
                                                paddingRight: 0
                                            },
                                            className:
                                                "table dashboard-table table-hover mono-tb-voting",
                                            header: r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement("th", {
                                                    style: {
                                                        textAlign: "left",
                                                        width: "75px"
                                                    }
                                                }),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    r.a.createElement(b.a, {
                                                        component: "span",
                                                        content: "account.asset"
                                                    })
                                                ),
                                                this.props.isFavorite
                                                    ? null
                                                    : r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  content:
                                                                      "account.user_issued_assets.quote_name"
                                                              }
                                                          )
                                                      ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        onClick: this._onToggleSort.bind(
                                                            this,
                                                            "price"
                                                        ),
                                                        className: y()(
                                                            "column-hide-small is-sortable",
                                                            {
                                                                "is-active":
                                                                    "price" ===
                                                                    this.state
                                                                        .sortBy
                                                            }
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(b.a, {
                                                        content:
                                                            "exchange.price"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        onClick: this._onToggleSort.bind(
                                                            this,
                                                            "change"
                                                        ),
                                                        className: y()(
                                                            "is-sortable",
                                                            {
                                                                "is-active":
                                                                    "change" ===
                                                                    this.state
                                                                        .sortBy
                                                            }
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(b.a, {
                                                        content:
                                                            "account.hour_24_short"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        onClick: this._onToggleSort.bind(
                                                            this,
                                                            "volumeQuote"
                                                        ),
                                                        className: y()(
                                                            "is-sortable",
                                                            {
                                                                "is-active":
                                                                    "volumeQuote" ===
                                                                    this.state
                                                                        .sortBy
                                                            }
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(b.a, {
                                                        content:
                                                            "exchange.volume"
                                                    })
                                                ),
                                                a
                                                    ? r.a.createElement(
                                                          "th",
                                                          {
                                                              className:
                                                                  "column-hide-small"
                                                          },
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  content:
                                                                      "exchange.flip"
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                r.a.createElement(
                                                    "th",
                                                    null,
                                                    r.a.createElement(b.a, {
                                                        content: o
                                                            ? "account.perm.show"
                                                            : "exchange.hide"
                                                    })
                                                )
                                            ),
                                            rows: s.length
                                                ? s
                                                : r.a.createElement(
                                                      "tr",
                                                      {
                                                          className:
                                                              "table-empty"
                                                      },
                                                      r.a.createElement(
                                                          "td",
                                                          {colSpan: a ? 7 : 6},
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  content:
                                                                      "dashboard.table_empty"
                                                              }
                                                          )
                                                      )
                                                  ),
                                            pageSize: 25,
                                            label: "utility.total_x_markets",
                                            leftPadding: "1.5rem"
                                        })
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                x = Object(o.connect)(M, {
                    listenTo: function() {
                        return [c.a, m.a];
                    },
                    getProps: function() {
                        var e = c.a.getState();
                        return {
                            marketDirections: e.marketDirections,
                            hiddenMarkets: e.hiddenMarkets,
                            allMarketStats: m.a.getState().allMarketStats,
                            starredMarkets: c.a.getState().starredMarkets,
                            onlyLiquid: c.a
                                .getState()
                                .viewSettings.get("onlyLiquid", !0)
                        };
                    }
                }),
                q = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function F(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function R(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function L(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var B = (function(e) {
                function t() {
                    return (
                        F(this, t),
                        R(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    L(t, r.a.Component),
                    q(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(x, {
                                    markets: this.props.starredMarkets,
                                    forceDirection: !0,
                                    isFavorite: !0
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            B = Object(o.connect)(B, {
                listenTo: function() {
                    return [c.a];
                },
                getProps: function() {
                    return {starredMarkets: c.a.getState().starredMarkets};
                }
            });
            var H = (function(e) {
                function t() {
                    F(this, t);
                    var e = R(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        ),
                        n = p.Apis.instance().chain_id;
                    return (
                        n && (n = n.substr(0, 8)),
                        (e.state = {chainID: n, markets: []}),
                        (e._getMarkets = e._getMarkets.bind(e)),
                        (e.update = e.update.bind(e)),
                        e
                    );
                }
                return (
                    L(t, r.a.Component),
                    q(t, [
                        {
                            key: "_getMarkets",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.state,
                                    t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : this.props;
                                return "4018d784" === e.chainID
                                    ? t.markets
                                    : [
                                          ["TEST", "PEG.FAKEUSD"],
                                          ["TEST", "BTWTY"]
                                      ];
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return !h.a.are_equal_shallow(e, this.props);
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this.update();
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.update(e);
                            }
                        },
                        {
                            key: "update",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props,
                                    t = this._getMarkets(this.state, e);
                                t = t.filter(function(t) {
                                    return e.quotes[0] === t.base;
                                });
                                for (var n = 1; n < e.quotes.length; n++)
                                    t.forEach(function(a) {
                                        var r = {
                                                quote: a.quote,
                                                base: e.quotes[n]
                                            },
                                            o = r.quote + "_" + r.base;
                                        r.quote === r.base ||
                                            t.has(o) ||
                                            (t = t.set(o, r));
                                    });
                                this.setState({markets: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(x, {
                                    markets: this.state.markets,
                                    showFlip: !1,
                                    isFavorite: !1
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            H = Object(o.connect)(H, {
                listenTo: function() {
                    return [m.a, c.a];
                },
                getProps: function() {
                    var e = c.a.getState().userMarkets,
                        t = c.a.getState().defaultMarkets;
                    return (
                        e.size &&
                            e.forEach(function(e, n) {
                                t.has(n) || (t = t.set(n, e));
                            }),
                        {markets: t}
                    );
                }
            });
            !(function(e) {
                function t() {
                    return (
                        F(this, t),
                        R(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                L(t, r.a.Component),
                    q(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(x, {markets: []});
                            }
                        }
                    ]);
            })();
            var D = n(77),
                I = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var z = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    I(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.myActiveAccounts,
                                    n = e.myHiddenAccounts,
                                    a = e.accountsReady,
                                    o = e.passwordAccount,
                                    l = e.preferredBases;
                                return a
                                    ? t.size + n.size + (o ? 1 : 0)
                                        ? r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block page-layout"
                                              },
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block no-padding"
                                                  },
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "grid-content app-tables no-padding",
                                                          ref: "appTables"
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "content-block small-12"
                                                          },
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "tabs-container generic-bordered-box"
                                                              },
                                                              r.a.createElement(
                                                                  u.b,
                                                                  {
                                                                      defaultActiveTab: 1,
                                                                      segmented: !1,
                                                                      setting:
                                                                          "dashboardTab",
                                                                      className:
                                                                          "account-tabs",
                                                                      tabsClass:
                                                                          "account-overview no-padding bordered-header content-block"
                                                                  },
                                                                  r.a.createElement(
                                                                      u.a,
                                                                      {
                                                                          title:
                                                                              "dashboard.starred_markets"
                                                                      },
                                                                      r.a.createElement(
                                                                          B,
                                                                          null
                                                                      )
                                                                  ),
                                                                  l
                                                                      .sort()
                                                                      .map(
                                                                          function(
                                                                              e
                                                                          ) {
                                                                              var t = r.a.createElement(
                                                                                  "span",
                                                                                  null,
                                                                                  r.a.createElement(
                                                                                      "img",
                                                                                      {
                                                                                          className:
                                                                                              "column-hide-small",
                                                                                          style: {
                                                                                              maxWidth: 30,
                                                                                              marginRight: 5
                                                                                          },
                                                                                          src:
                                                                                              "/asset-symbols/" +
                                                                                              e
                                                                                                  .replace(
                                                                                                      /^BTC/,
                                                                                                      "OPEN.BTC"
                                                                                                  )
                                                                                                  .toLowerCase() +
                                                                                              ".png"
                                                                                      }
                                                                                  ),
                                                                                  " ",
                                                                                  e
                                                                              );
                                                                              return r.a.createElement(
                                                                                  u.a,
                                                                                  {
                                                                                      key: e,
                                                                                      title: t
                                                                                  },
                                                                                  r.a.createElement(
                                                                                      H,
                                                                                      {
                                                                                          quotes: [
                                                                                              e
                                                                                          ].concat(
                                                                                              Object(
                                                                                                  D.d
                                                                                              )(
                                                                                                  [
                                                                                                      e
                                                                                                  ]
                                                                                              )
                                                                                          )
                                                                                      }
                                                                                  )
                                                                              );
                                                                          }
                                                                      )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                        : r.a.createElement(s.a, null)
                                    : r.a.createElement(i.a, null);
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = Object(o.connect)(z, {
                listenTo: function() {
                    return [l.a, c.a];
                },
                getProps: function() {
                    var e = l.a.getState(),
                        t = e.myActiveAccounts,
                        n = e.myHiddenAccounts,
                        a = e.passwordAccount,
                        r = e.accountsLoaded,
                        o = e.refsLoaded;
                    return {
                        myActiveAccounts: t,
                        myHiddenAccounts: n,
                        passwordAccount: a,
                        accountsReady: r && o,
                        preferredBases: c.a.getState().preferredBases
                    };
                }
            });
        }
    }
]);
//# sourceMappingURL=dashboard.js.map
