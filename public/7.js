(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _Jetstream_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/FormSection */ "./resources/js/Jetstream/FormSection.vue");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.vue");
/* harmony import */ var _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/InputError */ "./resources/js/Jetstream/InputError.vue");
/* harmony import */ var _Jetstream_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/Label */ "./resources/js/Jetstream/Label.vue");
/* harmony import */ var _Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Jetstream/ActionMessage */ "./resources/js/Jetstream/ActionMessage.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    JetActionMessage: _Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_5__["default"],
    JetButton: _Jetstream_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    JetFormSection: _Jetstream_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetInput: _Jetstream_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetInputError: _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetLabel: _Jetstream_Label__WEBPACK_IMPORTED_MODULE_4__["default"],
    JetSecondaryButton: _Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: ['user'],
  data: function data() {
    return {
      form: this.$inertia.form({
        '_method': 'PUT',
        name: this.user.name,
        email: this.user.email,
        photo: null
      }, {
        bag: 'updateProfileInformation',
        resetOnSuccess: false
      }),
      photoPreview: null
    };
  },
  methods: {
    updateProfileInformation: function updateProfileInformation() {
      if (this.$refs.photo) {
        this.form.photo = this.$refs.photo.files[0];
      }

      this.form.post(route('user-profile-information.update'), {
        preserveScroll: true
      });
    },
    selectNewPhoto: function selectNewPhoto() {
      this.$refs.photo.click();
    },
    updatePhotoPreview: function updatePhotoPreview() {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this.photoPreview = e.target.result;
      };

      reader.readAsDataURL(this.$refs.photo.files[0]);
    },
    deletePhoto: function deletePhoto() {
      var _this2 = this;

      this.$inertia["delete"](route('current-user-photo.destroy'), {
        preserveScroll: true
      }).then(function () {
        _this2.photoPreview = null;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("jet-form-section", {
    on: { submitted: _vm.updateProfileInformation },
    scopedSlots: _vm._u([
      {
        key: "title",
        fn: function() {
          return [_vm._v("\n        Profile Information\n    ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n        Update your account's profile information and email address.\n    "
            )
          ]
        },
        proxy: true
      },
      {
        key: "form",
        fn: function() {
          return [
            _vm.$page.jetstream.managesProfilePhotos
              ? _c(
                  "div",
                  { staticClass: "col-span-6 sm:col-span-4" },
                  [
                    _c("input", {
                      ref: "photo",
                      staticClass: "hidden",
                      attrs: { type: "file" },
                      on: { change: _vm.updatePhotoPreview }
                    }),
                    _vm._v(" "),
                    _c("jet-label", {
                      attrs: { for: "photo", value: "Photo" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.photoPreview,
                            expression: "! photoPreview"
                          }
                        ],
                        staticClass: "mt-2"
                      },
                      [
                        _c("img", {
                          staticClass: "rounded-full h-20 w-20 object-cover",
                          attrs: {
                            src: _vm.user.profile_photo_url,
                            alt: "Current Profile Photo"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.photoPreview,
                            expression: "photoPreview"
                          }
                        ],
                        staticClass: "mt-2"
                      },
                      [
                        _c("span", {
                          staticClass: "block rounded-full w-20 h-20",
                          style:
                            "background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('" +
                            _vm.photoPreview +
                            "');"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "jet-secondary-button",
                      {
                        staticClass: "mt-2 mr-2",
                        attrs: { type: "button" },
                        nativeOn: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.selectNewPhoto($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                Select A New Photo\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.user.profile_photo_path
                      ? _c(
                          "jet-secondary-button",
                          {
                            staticClass: "mt-2",
                            attrs: { type: "button" },
                            nativeOn: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deletePhoto($event)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                Remove Photo\n            "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("jet-input-error", {
                      staticClass: "mt-2",
                      attrs: { message: _vm.form.error("photo") }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4" },
              [
                _c("jet-label", { attrs: { for: "name", value: "Name" } }),
                _vm._v(" "),
                _c("jet-input", {
                  staticClass: "mt-1 block w-full",
                  attrs: { id: "name", type: "text", autocomplete: "name" },
                  model: {
                    value: _vm.form.name,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "name", $$v)
                    },
                    expression: "form.name"
                  }
                }),
                _vm._v(" "),
                _c("jet-input-error", {
                  staticClass: "mt-2",
                  attrs: { message: _vm.form.error("name") }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4" },
              [
                _c("jet-label", { attrs: { for: "email", value: "Email" } }),
                _vm._v(" "),
                _c("jet-input", {
                  staticClass: "mt-1 block w-full",
                  attrs: { id: "email", type: "email" },
                  model: {
                    value: _vm.form.email,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "email", $$v)
                    },
                    expression: "form.email"
                  }
                }),
                _vm._v(" "),
                _c("jet-input-error", {
                  staticClass: "mt-2",
                  attrs: { message: _vm.form.error("email") }
                })
              ],
              1
            )
          ]
        },
        proxy: true
      },
      {
        key: "actions",
        fn: function() {
          return [
            _c(
              "jet-action-message",
              {
                staticClass: "mr-3",
                attrs: { on: _vm.form.recentlySuccessful }
              },
              [_vm._v("\n            Saved.\n        ")]
            ),
            _vm._v(" "),
            _c(
              "jet-button",
              {
                class: { "opacity-25": _vm.form.processing },
                attrs: { disabled: _vm.form.processing }
              },
              [_vm._v("\n            Save\n        ")]
            )
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

/***/ "./resources/js/Pages/Profile/UpdateProfileInformationForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdateProfileInformationForm.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateProfileInformationForm_vue_vue_type_template_id_f38ebb82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82& */ "./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82&");
/* harmony import */ var _UpdateProfileInformationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateProfileInformationForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateProfileInformationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateProfileInformationForm_vue_vue_type_template_id_f38ebb82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateProfileInformationForm_vue_vue_type_template_id_f38ebb82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/UpdateProfileInformationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfileInformationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProfileInformationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfileInformationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfileInformationForm_vue_vue_type_template_id_f38ebb82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/UpdateProfileInformationForm.vue?vue&type=template&id=f38ebb82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfileInformationForm_vue_vue_type_template_id_f38ebb82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfileInformationForm_vue_vue_type_template_id_f38ebb82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);