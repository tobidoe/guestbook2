(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/ActionMessage */ "./resources/js/Jetstream/ActionMessage.vue");
/* harmony import */ var _Jetstream_ActionSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/ActionSection */ "./resources/js/Jetstream/ActionSection.vue");
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _Jetstream_DialogModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/DialogModal */ "./resources/js/Jetstream/DialogModal.vue");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.vue");
/* harmony import */ var _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Jetstream/InputError */ "./resources/js/Jetstream/InputError.vue");
/* harmony import */ var _Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Jetstream/SecondaryButton */ "./resources/js/Jetstream/SecondaryButton.vue");
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
  props: ['sessions'],
  components: {
    JetActionMessage: _Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_0__["default"],
    JetActionSection: _Jetstream_ActionSection__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetButton: _Jetstream_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetDialogModal: _Jetstream_DialogModal__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetInput: _Jetstream_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    JetInputError: _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_5__["default"],
    JetSecondaryButton: _Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      confirmingLogout: false,
      form: this.$inertia.form({
        '_method': 'DELETE',
        password: ''
      }, {
        bag: 'logoutOtherBrowserSessions'
      })
    };
  },
  methods: {
    confirmLogout: function confirmLogout() {
      var _this = this;

      this.form.password = '';
      this.confirmingLogout = true;
      setTimeout(function () {
        _this.$refs.password.focus();
      }, 250);
    },
    logoutOtherBrowserSessions: function logoutOtherBrowserSessions() {
      var _this2 = this;

      this.form.post(route('other-browser-sessions.destroy'), {
        preserveScroll: true
      }).then(function (response) {
        if (!_this2.form.hasErrors()) {
          _this2.confirmingLogout = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("jet-action-section", {
    scopedSlots: _vm._u([
      {
        key: "title",
        fn: function() {
          return [_vm._v("\n        Browser Sessions\n    ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n        Manage and logout your active sessions on other browsers and devices.\n    "
            )
          ]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _c("div", { staticClass: "max-w-xl text-sm text-gray-600" }, [
              _vm._v(
                "\n            If necessary, you may logout of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.\n        "
              )
            ]),
            _vm._v(" "),
            _vm.sessions.length > 0
              ? _c(
                  "div",
                  { staticClass: "mt-5 space-y-6" },
                  _vm._l(_vm.sessions, function(session, i) {
                    return _c(
                      "div",
                      { key: i, staticClass: "flex items-center" },
                      [
                        _c("div", [
                          session.agent.is_desktop
                            ? _c(
                                "svg",
                                {
                                  staticClass: "w-8 h-8 text-gray-500",
                                  attrs: {
                                    fill: "none",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    }
                                  })
                                ]
                              )
                            : _c(
                                "svg",
                                {
                                  staticClass: "w-8 h-8 text-gray-500",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "2",
                                    stroke: "currentColor",
                                    fill: "none",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d: "M0 0h24v24H0z",
                                      stroke: "none"
                                    }
                                  }),
                                  _c("rect", {
                                    attrs: {
                                      x: "7",
                                      y: "4",
                                      width: "10",
                                      height: "16",
                                      rx: "1"
                                    }
                                  }),
                                  _c("path", {
                                    attrs: { d: "M11 5h2M12 17v.01" }
                                  })
                                ]
                              )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-3" }, [
                          _c("div", { staticClass: "text-sm text-gray-600" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(session.agent.platform) +
                                " - " +
                                _vm._s(session.agent.browser) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "text-xs text-gray-500" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(session.ip_address) +
                                    ",\n\n                            "
                                ),
                                session.is_current_device
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "text-green-500 font-semibold"
                                      },
                                      [_vm._v("This device")]
                                    )
                                  : _c("span", [
                                      _vm._v(
                                        "Last active " +
                                          _vm._s(session.last_active)
                                      )
                                    ])
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center mt-5" },
              [
                _c(
                  "jet-button",
                  {
                    nativeOn: {
                      click: function($event) {
                        return _vm.confirmLogout($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                Logout Other Browser Sessions\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "jet-action-message",
                  {
                    staticClass: "ml-3",
                    attrs: { on: _vm.form.recentlySuccessful }
                  },
                  [_vm._v("\n                Done.\n            ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("jet-dialog-modal", {
              attrs: { show: _vm.confirmingLogout },
              on: {
                close: function($event) {
                  _vm.confirmingLogout = false
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n                Logout Other Browser Sessions\n            "
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "content",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n                Please enter your password to confirm you would like to logout of your other browser sessions across all of your devices.\n\n                "
                      ),
                      _c(
                        "div",
                        { staticClass: "mt-4" },
                        [
                          _c("jet-input", {
                            ref: "password",
                            staticClass: "mt-1 block w-3/4",
                            attrs: {
                              type: "password",
                              placeholder: "Password"
                            },
                            nativeOn: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.logoutOtherBrowserSessions($event)
                              }
                            },
                            model: {
                              value: _vm.form.password,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "password", $$v)
                              },
                              expression: "form.password"
                            }
                          }),
                          _vm._v(" "),
                          _c("jet-input-error", {
                            staticClass: "mt-2",
                            attrs: { message: _vm.form.error("password") }
                          })
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "footer",
                  fn: function() {
                    return [
                      _c(
                        "jet-secondary-button",
                        {
                          nativeOn: {
                            click: function($event) {
                              _vm.confirmingLogout = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Nevermind\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "jet-button",
                        {
                          staticClass: "ml-2",
                          class: { "opacity-25": _vm.form.processing },
                          attrs: { disabled: _vm.form.processing },
                          nativeOn: {
                            click: function($event) {
                              return _vm.logoutOtherBrowserSessions($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Logout Other Browser Sessions\n                "
                          )
                        ]
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_70af8072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072& */ "./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072&");
/* harmony import */ var _LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_70af8072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_70af8072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_70af8072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=70af8072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_70af8072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_70af8072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);