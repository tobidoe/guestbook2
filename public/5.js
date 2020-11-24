(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _DialogModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogModal */ "./resources/js/Jetstream/DialogModal.vue");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./resources/js/Jetstream/Input.vue");
/* harmony import */ var _InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputError */ "./resources/js/Jetstream/InputError.vue");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecondaryButton */ "./resources/js/Jetstream/SecondaryButton.vue");
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
  props: {
    title: {
      "default": 'Confirm Password'
    },
    content: {
      "default": 'For your security, please confirm your password to continue.'
    },
    button: {
      "default": 'Confirm'
    }
  },
  components: {
    JetButton: _Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    JetDialogModal: _DialogModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetInput: _Input__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetInputError: _InputError__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetSecondaryButton: _SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      confirmingPassword: false,
      form: this.$inertia.form({
        password: '',
        error: ''
      }, {
        bag: 'confirmPassword'
      })
    };
  },
  methods: {
    startConfirmingPassword: function startConfirmingPassword() {
      var _this = this;

      this.form.error = '';
      axios.get(route('password.confirmation').url()).then(function (response) {
        if (response.data.confirmed) {
          _this.$emit('confirmed');
        } else {
          _this.confirmingPassword = true;
          _this.form.password = '';
          setTimeout(function () {
            _this.$refs.password.focus();
          }, 250);
        }
      });
    },
    confirmPassword: function confirmPassword() {
      var _this2 = this;

      this.form.processing = true;
      axios.post(route('password.confirm').url(), {
        password: this.form.password
      }).then(function (response) {
        _this2.confirmingPassword = false;
        _this2.form.password = '';
        _this2.form.error = '';
        _this2.form.processing = false;

        _this2.$nextTick(function () {
          return _this2.$emit('confirmed');
        });
      })["catch"](function (error) {
        _this2.form.processing = false;
        _this2.form.error = error.response.data.errors.password[0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/DangerButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/DangerButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      type: String,
      "default": 'button'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jetstream_ActionSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/ActionSection */ "./resources/js/Jetstream/ActionSection.vue");
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _Jetstream_ConfirmsPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/ConfirmsPassword */ "./resources/js/Jetstream/ConfirmsPassword.vue");
/* harmony import */ var _Jetstream_DangerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/DangerButton */ "./resources/js/Jetstream/DangerButton.vue");
/* harmony import */ var _Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/SecondaryButton */ "./resources/js/Jetstream/SecondaryButton.vue");
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
  components: {
    JetActionSection: _Jetstream_ActionSection__WEBPACK_IMPORTED_MODULE_0__["default"],
    JetButton: _Jetstream_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetConfirmsPassword: _Jetstream_ConfirmsPassword__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetDangerButton: _Jetstream_DangerButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetSecondaryButton: _Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      enabling: false,
      disabling: false,
      qrCode: null,
      recoveryCodes: []
    };
  },
  methods: {
    enableTwoFactorAuthentication: function enableTwoFactorAuthentication() {
      var _this = this;

      this.enabling = true;
      this.$inertia.post('/user/two-factor-authentication', {}, {
        preserveScroll: true
      }).then(function () {
        return Promise.all([_this.showQrCode(), _this.showRecoveryCodes()]);
      }).then(function () {
        _this.enabling = false;
      });
    },
    showQrCode: function showQrCode() {
      var _this2 = this;

      return axios.get('/user/two-factor-qr-code').then(function (response) {
        _this2.qrCode = response.data.svg;
      });
    },
    showRecoveryCodes: function showRecoveryCodes() {
      var _this3 = this;

      return axios.get('/user/two-factor-recovery-codes').then(function (response) {
        _this3.recoveryCodes = response.data;
      });
    },
    regenerateRecoveryCodes: function regenerateRecoveryCodes() {
      var _this4 = this;

      axios.post('/user/two-factor-recovery-codes').then(function (response) {
        _this4.showRecoveryCodes();
      });
    },
    disableTwoFactorAuthentication: function disableTwoFactorAuthentication() {
      var _this5 = this;

      this.disabling = true;
      this.$inertia["delete"]('/user/two-factor-authentication', {
        preserveScroll: true
      }).then(function () {
        _this5.disabling = false;
      });
    }
  },
  computed: {
    twoFactorEnabled: function twoFactorEnabled() {
      return !this.enabling && this.$page.user.two_factor_enabled;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=template&id=2befd4a2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=template&id=2befd4a2& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "span",
    [
      _c(
        "span",
        { on: { click: _vm.startConfirmingPassword } },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("jet-dialog-modal", {
        attrs: { show: _vm.confirmingPassword },
        on: {
          close: function($event) {
            _vm.confirmingPassword = false
          }
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function() {
              return [
                _vm._v("\n            " + _vm._s(_vm.title) + "\n        ")
              ]
            },
            proxy: true
          },
          {
            key: "content",
            fn: function() {
              return [
                _vm._v(
                  "\n            " + _vm._s(_vm.content) + "\n\n            "
                ),
                _c(
                  "div",
                  { staticClass: "mt-4" },
                  [
                    _c("jet-input", {
                      ref: "password",
                      staticClass: "mt-1 block w-3/4",
                      attrs: { type: "password", placeholder: "Password" },
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
                          return _vm.confirmPassword($event)
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
                      attrs: { message: _vm.form.error }
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
                        _vm.confirmingPassword = false
                      }
                    }
                  },
                  [_vm._v("\n                Nevermind\n            ")]
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
                        return _vm.confirmPassword($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.button) +
                        "\n            "
                    )
                  ]
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/DangerButton.vue?vue&type=template&id=cdf2462e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/DangerButton.vue?vue&type=template&id=cdf2462e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass:
        "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150",
      attrs: { type: _vm.type }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          return [_vm._v("\n        Two Factor Authentication\n    ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n        Add additional security to your account using two factor authentication.\n    "
            )
          ]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _vm.twoFactorEnabled
              ? _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
                  _vm._v(
                    "\n            You have enabled two factor authentication.\n        "
                  )
                ])
              : _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
                  _vm._v(
                    "\n            You have not enabled two factor authentication.\n        "
                  )
                ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-3 max-w-xl text-sm text-gray-600" }, [
              _c("p", [
                _vm._v(
                  "\n                When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _vm.twoFactorEnabled
              ? _c("div", [
                  _vm.qrCode
                    ? _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "mt-4 max-w-xl text-sm text-gray-600"
                          },
                          [
                            _c("p", { staticClass: "font-semibold" }, [
                              _vm._v(
                                "\n                        Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.\n                    "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "mt-4 dark:p-4 dark:w-56 dark:bg-white",
                          domProps: { innerHTML: _vm._s(_vm.qrCode) }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.recoveryCodes.length > 0
                    ? _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "mt-4 max-w-xl text-sm text-gray-600"
                          },
                          [
                            _c("p", { staticClass: "font-semibold" }, [
                              _vm._v(
                                "\n                        Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.\n                    "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"
                          },
                          _vm._l(_vm.recoveryCodes, function(code) {
                            return _c("div", { key: code }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(code) +
                                  "\n                    "
                              )
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "mt-5" }, [
              !_vm.twoFactorEnabled
                ? _c(
                    "div",
                    [
                      _c(
                        "jet-confirms-password",
                        {
                          on: { confirmed: _vm.enableTwoFactorAuthentication }
                        },
                        [
                          _c(
                            "jet-button",
                            {
                              class: { "opacity-25": _vm.enabling },
                              attrs: { type: "button", disabled: _vm.enabling }
                            },
                            [
                              _vm._v(
                                "\n                        Enable\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    [
                      _c(
                        "jet-confirms-password",
                        { on: { confirmed: _vm.regenerateRecoveryCodes } },
                        [
                          _vm.recoveryCodes.length > 0
                            ? _c(
                                "jet-secondary-button",
                                { staticClass: "mr-3" },
                                [
                                  _vm._v(
                                    "\n                        Regenerate Recovery Codes\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "jet-confirms-password",
                        { on: { confirmed: _vm.showRecoveryCodes } },
                        [
                          _vm.recoveryCodes.length == 0
                            ? _c(
                                "jet-secondary-button",
                                { staticClass: "mr-3" },
                                [
                                  _vm._v(
                                    "\n                        Show Recovery Codes\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "jet-confirms-password",
                        {
                          on: { confirmed: _vm.disableTwoFactorAuthentication }
                        },
                        [
                          _c(
                            "jet-danger-button",
                            {
                              class: { "opacity-25": _vm.disabling },
                              attrs: { disabled: _vm.disabling }
                            },
                            [
                              _vm._v(
                                "\n                        Disable\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
            ])
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

/***/ "./resources/js/Jetstream/ConfirmsPassword.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Jetstream/ConfirmsPassword.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmsPassword_vue_vue_type_template_id_2befd4a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmsPassword.vue?vue&type=template&id=2befd4a2& */ "./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=template&id=2befd4a2&");
/* harmony import */ var _ConfirmsPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmsPassword.vue?vue&type=script&lang=js& */ "./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmsPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmsPassword_vue_vue_type_template_id_2befd4a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmsPassword_vue_vue_type_template_id_2befd4a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Jetstream/ConfirmsPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmsPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmsPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmsPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=template&id=2befd4a2&":
/*!************************************************************************************!*\
  !*** ./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=template&id=2befd4a2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmsPassword_vue_vue_type_template_id_2befd4a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmsPassword.vue?vue&type=template&id=2befd4a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/ConfirmsPassword.vue?vue&type=template&id=2befd4a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmsPassword_vue_vue_type_template_id_2befd4a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmsPassword_vue_vue_type_template_id_2befd4a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Jetstream/DangerButton.vue":
/*!*************************************************!*\
  !*** ./resources/js/Jetstream/DangerButton.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DangerButton_vue_vue_type_template_id_cdf2462e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DangerButton.vue?vue&type=template&id=cdf2462e& */ "./resources/js/Jetstream/DangerButton.vue?vue&type=template&id=cdf2462e&");
/* harmony import */ var _DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DangerButton.vue?vue&type=script&lang=js& */ "./resources/js/Jetstream/DangerButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DangerButton_vue_vue_type_template_id_cdf2462e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DangerButton_vue_vue_type_template_id_cdf2462e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Jetstream/DangerButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Jetstream/DangerButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Jetstream/DangerButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DangerButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/DangerButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Jetstream/DangerButton.vue?vue&type=template&id=cdf2462e&":
/*!********************************************************************************!*\
  !*** ./resources/js/Jetstream/DangerButton.vue?vue&type=template&id=cdf2462e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_template_id_cdf2462e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DangerButton.vue?vue&type=template&id=cdf2462e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/DangerButton.vue?vue&type=template&id=cdf2462e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_template_id_cdf2462e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerButton_vue_vue_type_template_id_cdf2462e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958& */ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&");
/* harmony import */ var _TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);