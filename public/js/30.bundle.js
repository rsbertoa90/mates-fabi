webpackJsonp([30],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/regalos/Regalos.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fotos__ = __webpack_require__("./resources/assets/js/components/regalos/fotos.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fotos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fotos__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_vue__ = __webpack_require__("./resources/assets/js/components/regalos/form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form_vue__);
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
    components: {
        regalosForm: __WEBPACK_IMPORTED_MODULE_1__form_vue___default.a,
        regalosFotos: __WEBPACK_IMPORTED_MODULE_0__fotos___default.a
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/regalos/form.vue":
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            csrf: window.csrf,
            file: null,
            formData: {
                name: '',
                email: '',
                phone: '',
                products: '',
                qty: 0,
                date: null
            }

        };
    },

    methods: {
        submit: function submit() {
            var vm = this;
            if (this.formValid()) {
                swal('Mensaje enviado', 'Nos comuicaremos con usted a la brevedad', 'success').then(function (response) {
                    $(vm.$refs.form).submit();
                });
            }
        },
        formValid: function formValid() {
            var fd = this.formData;
            if (fd.name && fd.email && fd.products && fd.qty && fd.date) {
                return true;
            } else {
                swal('No pudimos enviar tu pedido', 'Por favor completa todos los campos', 'error');
                return false;
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18f1f550\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/Regalos.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7a9f07\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/form.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01bb0abc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/regalos/fotos.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row mb-4" }, [
    _c(
      "div",
      { staticClass: "col-12 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos07.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos08.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos09.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos10.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos05.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos06.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos01.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos02.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos03.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-6 p-2" },
      [
        _c("v-lazy-image", {
          attrs: {
            src: "/storage/images/app/regalos04.png",
            alt: "muestra de regalo"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01bb0abc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18f1f550\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/regalos/Regalos.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("¿Buscas un Regalo Empresarial original?")]),
      _vm._v(" "),
      _c("p", { staticStyle: { "text-align": "left" } }, [
        _vm._v(
          " Impacta con un regalo empresarial fabricado por Mates Fabi. Somos especialistas en brindar soluciones a medida. Ofrecemos productos personalizados que se adaptan a las necesidades de nuestro cliente. "
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("regalos-fotos"),
      _vm._v(" "),
      _c("h2", [
        _vm._v("¿Qué productos podes personalizar con tu logo en Mates Fabi?")
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h2", [_vm._v("Quiero un presupuesto.")]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("regalos-form"),
      _vm._v(" "),
      _c("p", { attrs: { dir: "ltr" } }),
      _vm._v(" "),
      _c("h2", [
        _vm._v("¿Porque Mates o Equipos Materos como Regalo Empresarial?")
      ]),
      _vm._v(" "),
      _c("p", { attrs: { dir: "ltr" } }, [
        _vm._v(
          "Son variadas las opciones en el mercado al momento de un regalo empresarial. Pero estamos en Argentina y que mejor que un mate, equipo matero o bombilla. Uno de los tantos objetivos que se persigue a la hora de estos regalos es poder capturar la atención nuestros clientes y qué mejor que un elemento que además de lindo sea útil. Impacto visual más utilidad  En nuestro país la cultura del Mate es indiscutible, es casi un ícono nacional. Es mucho más que un simple tomar algo, es un rito social, un compartir constante: cuando nos levantamos, estudiamos, planificamos, estamos de ocio ,juntamos con amigos o cuando necesitamos un momento de soledad...tantas situaciones diversas con el Mate como lazo. El Mate es parte de nuestra vida cotidiana, una oportunidad excelente para que tu regalo empresarial sea una experiencia."
        )
      ]),
      _vm._v(" "),
      _c("h2", { staticStyle: { "text-align": "left" } }, [
        _vm._v("3 motivos para realizar un regalo empresarial")
      ]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Hay muchos más motivos pero básicamente un regalo Empresarial bien orientado puede mejorar la imagen de tu empresa.  Mates Fabi puede ayudarte ya que somos fabricantes y referentes en el Rubro."
        )
      ]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _c("p", { staticStyle: { "text-align": "left" } }),
      _vm._v(" "),
      _vm._m(7)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticStyle: { "text-align": "left" }, attrs: { dir: "ltr" } },
      [
        _c("span", [
          _vm._v(
            "Trabajamos para que quedes satisfecho y puedas lograr tus objetivos de marketing. Nos interesa que tus clientes queden felices y gratamente sorprendidos. Tenemos un equipo especializado que sabe cómo hacerlo."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticStyle: { "text-align": "left" }, attrs: { dir: "ltr" } },
      [_c("span", [_vm._v("Mira algunos de nuestros trabajos.")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("h2", [
          _c("span", {
            staticClass: "fa fa-check",
            staticStyle: { "font-size": "1.5rem" }
          }),
          _vm._v(" Mates  ")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("h2", [
          _c("span", {
            staticClass: "fa fa-check",
            staticStyle: { "font-size": "1.5rem" }
          }),
          _vm._v(" Portatermos")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("h2", [
          _c("span", {
            staticClass: "fa fa-check",
            staticStyle: { "font-size": "1.5rem" }
          }),
          _vm._v(" Equipos Materos completos")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("h2", [
          _c("span", {
            staticClass: "fa fa-check",
            staticStyle: { "font-size": "1.5rem" }
          }),
          _vm._v(" Bombillas con dome")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { attrs: { dir: "ltr" } }, [
      _c("span", [
        _vm._v(
          "Necesitamos que completes el siguiente formulario para poder hacerlo. Te dejamos nuestro numero de contacto por si tenes alguna duda más: "
        ),
        _c("span", { staticClass: "text-info font-weight-bold" }, [
          _vm._v(" 11 3008 5414  ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("span", { staticClass: "fa fa-star" }),
          _vm._v(
            " Como agradecimiento. Es un detalle sumamente oportuno luego de un cierre de contrato o evento de importancia similar. El mate personifica la solidaridad y la cultura Argentina, es un símbolo oportuno para transmitir ese mensaje."
          )
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("span", { staticClass: "fa fa-star" }),
          _vm._v(
            " Lograr empatía con tu cliente. Es una forma de lograr recordación de marca. Un regalo empresarial que pueda utilizarse cotidianamente cumple con este objetivo. Es una forma de publicidad que genera familiarización y propagación de marca."
          )
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("span", { staticClass: "fa fa-star" }),
          _vm._v(
            " Incentivo al personal de la empresa. El regalo empresarial apuntado al propio personal de la empresa es una excelente estrategia . Una manera de que se sientan incentivados, muchas veces estos tipos de detalles son los que marcan una gran diferencia entre una empresa y otra."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticStyle: { "text-align": "left" } }, [_c("span")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _c("span", {
        attrs: { id: "docs-internal-guid-d1438626-7fff-ea70-8260-38ce35683edf" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("br"), _c("br")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-18f1f550", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3e7a9f07\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/regalos/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        ref: "form",
        attrs: {
          id: "form",
          enctype: "multipart/form-data",
          method: "post",
          action: "/regalos-empresariales"
        }
      },
      [
        _c("input", {
          attrs: { type: "hidden", name: "_token" },
          domProps: { value: _vm.csrf }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4" }, [_vm._v("Nombre")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.name,
                expression: "formData.name"
              }
            ],
            staticClass: " form-control col-12 col-lg-8",
            attrs: { required: "", type: "text", name: "name" },
            domProps: { value: _vm.formData.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4", attrs: { for: "" } }, [
            _vm._v("Email")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.email,
                expression: "formData.email"
              }
            ],
            staticClass: " form-control col-12 col-lg-8",
            attrs: { name: "email", required: "", type: "text" },
            domProps: { value: _vm.formData.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "email", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4", attrs: { for: "" } }, [
            _vm._v("Telefono")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.phone,
                expression: "formData.phone"
              }
            ],
            staticClass: " form-control col-12 col-lg-8",
            attrs: { name: "phone", type: "text" },
            domProps: { value: _vm.formData.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "phone", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4", attrs: { for: "" } }, [
            _vm._v("¿Que productos te interesa personalizar?")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.products,
                expression: "formData.products"
              }
            ],
            staticClass: " form-control col-12 col-lg-8",
            attrs: { name: "products", required: "", type: "text" },
            domProps: { value: _vm.formData.products },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "products", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4", attrs: { for: "" } }, [
            _vm._v("Cantidad")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.qty,
                expression: "formData.qty"
              }
            ],
            staticClass: " form-control col-12 col-lg-8",
            attrs: { name: "qty", required: "", type: "number", min: "0" },
            domProps: { value: _vm.formData.qty },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "qty", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4", attrs: { for: "" } }, [
            _vm._v("¿Para cuando lo necesitas?")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.date,
                expression: "formData.date"
              }
            ],
            staticClass: " form-control col-12 col-lg-8",
            attrs: { name: "date", required: "", type: "date" },
            domProps: { value: _vm.formData.date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "date", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-12 col-lg-4" }, [
            _vm._v("Mandanos tu diseño")
          ]),
          _vm._v(" "),
          _c("label", { staticClass: "btn btn-lg btn-outline-info  col-4" }, [
            _vm._v("\n                Subir archivo "),
            _c("input", {
              staticStyle: { display: "none" },
              attrs: { name: "image", type: "file" },
              on: {
                change: function($event) {
                  _vm.file = true
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm.file
            ? _c("span", { staticClass: "text-warning mt-2 col-4" }, [
                _vm._v("Archivo subido")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "col-12 col-lg-4 offset-lg-4 btn btn-outline-success btn-lg",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [_vm._v("Enviar")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e7a9f07", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18f1f550\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/Regalos.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18f1f550\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/Regalos.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1cff4e88", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18f1f550\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Regalos.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18f1f550\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Regalos.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7a9f07\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/form.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7a9f07\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/form.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("a880e82a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7a9f07\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7a9f07\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/regalos/Regalos.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18f1f550\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/Regalos.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/regalos/Regalos.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18f1f550\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/regalos/Regalos.vue")
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
Component.options.__file = "resources/assets/js/components/regalos/Regalos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18f1f550", Component.options)
  } else {
    hotAPI.reload("data-v-18f1f550", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/regalos/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7a9f07\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/regalos/form.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/regalos/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3e7a9f07\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/regalos/form.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e7a9f07"
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
Component.options.__file = "resources/assets/js/components/regalos/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e7a9f07", Component.options)
  } else {
    hotAPI.reload("data-v-3e7a9f07", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/regalos/fotos.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01bb0abc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/regalos/fotos.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/regalos/fotos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01bb0abc", Component.options)
  } else {
    hotAPI.reload("data-v-01bb0abc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});