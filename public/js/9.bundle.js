webpackJsonp([9],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/product/Product.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__related_vue__ = __webpack_require__("./resources/assets/js/components/product/related.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__related_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__related_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { relatedProducts: __WEBPACK_IMPORTED_MODULE_0__related_vue___default.a },
    props: ['product_id'],
    data: function data() {
        return {
            selectedImage: 0
        };
    },

    computed: {
        configs: function configs() {
            return this.$store.getters.getConfig;
        },
        product: function product() {
            return this.$store.getters['categories/getProduct'](this.product_id);
        }
    },
    methods: {
        show: function show() {
            if (this.product.images[0]) {
                var url = this.product.images[this.selectedImage].url;
                var image = document.createElement('img');
                image.setAttribute('src', url);
                swal({
                    content: image
                });
            } else {
                var content = document.createElement("img");
                $(content).attr('src', '/storage/images/app/no-photo.png');
                content.style.width = '100%';
                swal({ content: content });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/product/related.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['category_id'],
  data: function data() {
    return {
      render: false,
      swiperOption: {
        slidesPerView: null,
        centeredSlides: false,
        spaceBetween: 5,
        /* pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }

    };
  },
  created: function created() {
    if (this.$mq == 'lg') {
      this.swiperOption.slidesPerView = 4;
    } else {
      this.swiperOption.slidesPerView = 1.5;
    }
    this.render = true;
  },

  computed: {
    category: function category() {
      return this.$store.getters['categories/getCategory'](this.category_id);
    },
    products: function products() {
      return this.category.products;
    }
  },
  methods: {
    appendSlide: function appendSlide() {
      this.swiperSlides.push(this.swiperSlides.length + 1);
    },
    prependSlide: function prependSlide() {
      this.swiperSlides.unshift(this.swiperSlides[0] - 1);
    },
    popSlide: function popSlide() {
      this.swiperSlides.pop();
    },
    shiftSlide: function shiftSlide() {
      this.swiperSlides.shift();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0342e368\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fa,.fas{\n    font-size: 1.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b190cc4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/related.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.badge[data-v-3b190cc4]{\n  font-size: 1.2rem;\n}\n.append-buttons[data-v-3b190cc4] {\n  text-align: center;\n  margin-top: 20px;\n}\n.append-buttons a[data-v-3b190cc4] {\n  display: inline-block;\n  margin: 0 10px;\n}\n.container[data-v-3b190cc4]{\n    width: 100vw;\n}\n.card-img-overlay[data-v-3b190cc4]{\n  max-height: 60%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0342e368\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c("div", [
        _c(
          "div",
          {
            staticClass: "row justify-content-center",
            attrs: { itemscope: "", itemtype: "http://schema.org/Product" }
          },
          [
            _c("div", { staticClass: "col-12 col-lg-6 row" }, [
              _c(
                "div",
                { staticClass: "col-12", on: { click: _vm.show } },
                [
                  !_vm.product.images[0]
                    ? _c("v-lazy-image", {
                        attrs: {
                          src: "/storage/images/app/no-photo.png",
                          alt: "sin foto"
                        }
                      })
                    : _c("v-lazy-image", {
                        attrs: {
                          itemprop: "image",
                          src: _vm.product.images[_vm.selectedImage].url,
                          alt: _vm.product.name
                        }
                      })
                ],
                1
              ),
              _vm._v(" "),
              _vm.product.images[1]
                ? _c(
                    "div",
                    { staticClass: "col-12 row" },
                    _vm._l(_vm.product.images.length, function(i) {
                      return i - 1 != _vm.selectedImage
                        ? _c(
                            "div",
                            {
                              key: i,
                              staticClass: "col-4",
                              on: {
                                click: function($event) {
                                  _vm.selectedImage = i - 1
                                }
                              }
                            },
                            [
                              _c("v-lazy-image", {
                                attrs: {
                                  src: _vm.product.images[i - 1].url,
                                  alt: _vm.product.name
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    })
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-6" }, [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-column align-items-start justify-content-around h-100"
                },
                [
                  _c("div", { staticClass: "d-flex flex-column" }, [
                    _c("h2", [
                      _vm._v(
                        " " + _vm._s(_vm._f("ucFirst")(_vm.product.name)) + " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-secondary" }, [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("ucFirst")(_vm.product.category.name)) +
                          " "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c("h2", [_vm._v("  $" + _vm._s(_vm.product.price) + " ")]),
                    _vm._v(" "),
                    _c("h5", [
                      _c("del", { staticClass: "text-secondary ml-2" }, [
                        _vm._v(
                          " $" +
                            _vm._s(_vm._f("price")(_vm.product.price * 1.4)) +
                            " "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.product.description
                    ? _c("div", { staticClass: "d-flex flex-column mt-3" }, [
                        _c("h4", [_vm._v("Sobre el producto:")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "texto" }, [
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm._f("ucFirst")(_vm.product.description)
                              ) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "0.7rem",
                              "font-style": "italic"
                            }
                          },
                          [
                            _vm._v(
                              "* Los diseños estan sujetos a disponibilidad"
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-3" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm.configs
                      ? _c(
                          "div",
                          { staticClass: "col-12 d-flex flex-column" },
                          [
                            _c("span", [
                              _c("i", { staticClass: "fa fa-check" }),
                              _vm._v(
                                " Compra minima en local: $" +
                                  _vm._s(_vm.configs.minbuy)
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _c("i", { staticClass: "fa fa-check" }),
                              _vm._v(
                                " Compra minima para envios: $" +
                                  _vm._s(_vm.configs.minbuy_ship)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(3)
                          ]
                        )
                      : _vm._e()
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("related-products", {
              attrs: { category_id: _vm.product.category_id }
            })
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-lg btn-outline-success",
          attrs: { href: "/cotizador" }
        },
        [
          _c("span", { staticClass: "fa fa-shopping-cart" }),
          _vm._v(" Hacer pedido")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 d-flex align-items-center" }, [
      _c("span", { staticClass: "fa fa-truck mr-2" }),
      _vm._v(" "),
      _c("span", { staticClass: "ml-2" }, [_vm._v("Envio a todo el país")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 d-flex align-items-center" }, [
      _c("i", { staticClass: "fas fa-hand-holding-usd" }),
      _vm._v(" "),
      _c("span", { staticClass: "ml-2" }, [_vm._v("Somos fabricantes!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fa fa-check" }),
      _vm._v(
        " Los despachos se realizaran de 1 a 5 días hábiles a partir del informe y acreditación del pago"
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0342e368", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b190cc4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/product/related.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products.length > 0
    ? _c(
        "div",
        { staticClass: "container w-100" },
        [
          _c("hr"),
          _vm._v(" "),
          _c("h2", { staticClass: "mb-4" }, [_vm._v("Productos relacionados")]),
          _vm._v(" "),
          render
            ? _c(
                "swiper",
                { attrs: { options: _vm.swiperOption } },
                [
                  _vm._l(_vm.products, function(product) {
                    return !product.paused
                      ? _c("swiper-slide", { key: product.id }, [
                          _c(
                            "a",
                            {
                              staticClass: "card",
                              attrs: {
                                href: product.slug,
                                itemscope: "",
                                itemtype: "https://schema.org/Product"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  product.images[0]
                                    ? _c("v-lazy-image", {
                                        staticClass: "card-img card-img-top",
                                        attrs: {
                                          src: product.images[0].url,
                                          title: product.name,
                                          itemprop: "image",
                                          alt: "Card image cap"
                                        }
                                      })
                                    : _c("v-lazy-image", {
                                        attrs: {
                                          src:
                                            "/storage/images/app/no-photo.png",
                                          alt: "no image"
                                        }
                                      }),
                                  _vm._v(" "),
                                  product.offer
                                    ? _c(
                                        "div",
                                        { staticClass: "card-img-overlay" },
                                        [
                                          product.offer
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    " badge bg-focus white-bold"
                                                },
                                                [_vm._v(" Oferta! ")]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body" }, [
                                _c(
                                  "h5",
                                  {
                                    staticClass: "card-title",
                                    staticStyle: { height: "60px" },
                                    attrs: { itemprop: "name" }
                                  },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm._f("ucFirst")(product.name)
                                        ) +
                                        "  "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                !_vm.$store.getters.getConfig.hide_prices
                                  ? _c(
                                      "h4",
                                      { staticClass: "second" },
                                      [
                                        _vm._v(
                                          "  \n                      $" +
                                            _vm._s(
                                              _vm._f("price")(product.price)
                                            ) +
                                            " \n                      "
                                        ),
                                        product.offer &&
                                        !_vm.$store.getters.getConfig
                                          .hide_prices
                                          ? _c(
                                              "strike",
                                              {
                                                staticClass: "text-secondary",
                                                staticStyle: {
                                                  "font-size": "1rem"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  " $" +
                                                    _vm._s(
                                                      _vm._f("price")(
                                                        product.price * 1.67
                                                      )
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-outline-second  white-bold mb-4 mt-1",
                                    staticStyle: { cursor: "pointer" },
                                    attrs: { href: product.slug }
                                  },
                                  [_vm._v(" Ver mas")]
                                ),
                                _vm._v(" "),
                                _c("p")
                              ])
                            ]
                          )
                        ])
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-pagination",
                    attrs: { slot: "pagination" },
                    slot: "pagination"
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-button-prev",
                    attrs: { slot: "button-prev" },
                    slot: "button-prev"
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "swiper-button-next",
                    attrs: { slot: "button-next" },
                    slot: "button-next"
                  })
                ],
                2
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b190cc4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0342e368\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0342e368\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/Product.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("31614edf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0342e368\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0342e368\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b190cc4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/related.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b190cc4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/related.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1483762c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b190cc4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./related.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b190cc4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./related.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./resources/assets/js/components/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0342e368\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/Product.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/product/Product.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0342e368\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/product/Product.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/product/Product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0342e368", Component.options)
  } else {
    hotAPI.reload("data-v-0342e368", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/product/related.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b190cc4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/product/related.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/product/related.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b190cc4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/product/related.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b190cc4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/product/related.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b190cc4", Component.options)
  } else {
    hotAPI.reload("data-v-3b190cc4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});