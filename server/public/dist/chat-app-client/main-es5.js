function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/chat-app/chat-app.component */
    "./src/app/pages/chat-app/chat-app.component.ts");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['login']);
    };

    var redirectLoggedInToChat = function redirectLoggedInToChat() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectLoggedInTo"])(['chat']);
    };

    var routes = [{
      path: "",
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectLoggedInToChat
      }
    }, {
      path: "login",
      redirectTo: '/LoginComponent',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectLoggedInToChat
      }
    }, {
      path: "chat",
      component: _pages_chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_3__["ChatAppComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToLogin
      }
    }, {
      path: "**",
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { ChatSectionComponent } from './components/chat-section/chat-section.component';
    // import Contact from './models/ContactInbox';
    // import ContactInfo from './models/ContactInfo';
    // import { ContactSelectedService } from './services/contact-selected.service';


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/user-card/user-card.component */
    "./src/app/components/user-card/user-card.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/chat-section/chat-section.component */
    "./src/app/components/chat-section/chat-section.component.ts");
    /* harmony import */


    var _components_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/chat-bubble/chat-bubble.component */
    "./src/app/components/chat-bubble/chat-bubble.component.ts");
    /* harmony import */


    var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-emoji-picker */
    "./node_modules/ngx-emoji-picker/__ivy_ngcc__/fesm2015/ngx-emoji-picker.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/chat-app/chat-app.component */
    "./src/app/pages/chat-app/chat-app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); //material modules
    //components
    //downloaded
    //firebase
    //import { AngularFirestoreModule } from '@angular/fire/firestore';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_19__["NgxEmojiPickerModule"].forRoot(), _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_23__["AngularFireAnalyticsModule"], //AngularFirestoreModule
      _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_14__["UserCardComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_17__["ChatSectionComponent"], _components_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_18__["ChatBubbleComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _pages_chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_21__["ChatAppComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_19__["NgxEmojiPickerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_23__["AngularFireAnalyticsModule"], //AngularFirestoreModule
        _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_14__["UserCardComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_17__["ChatSectionComponent"], _components_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_18__["ChatBubbleComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _pages_chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_21__["ChatAppComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_19__["NgxEmojiPickerModule"].forRoot(), _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_23__["AngularFireAnalyticsModule"], //AngularFirestoreModule
          _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-bubble/chat-bubble.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/chat-bubble/chat-bubble.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ChatBubbleComponent */

  /***/
  function srcAppComponentsChatBubbleChatBubbleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBubbleComponent", function () {
      return ChatBubbleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function ChatBubbleComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatBubbleComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "message-container-left": a0,
        "message-container-right": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "bubble-left": a0,
        "bubble-right": a1
      };
    };

    var ChatBubbleComponent = /*#__PURE__*/function () {
      function ChatBubbleComponent() {
        _classCallCheck(this, ChatBubbleComponent);
      }

      _createClass(ChatBubbleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatBubbleComponent;
    }();

    ChatBubbleComponent.ɵfac = function ChatBubbleComponent_Factory(t) {
      return new (t || ChatBubbleComponent)();
    };

    ChatBubbleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatBubbleComponent,
      selectors: [["chat-bubble"]],
      inputs: {
        content: "content",
        date: "date",
        type: "type",
        avatar: "avatar"
      },
      decls: 9,
      vars: 15,
      consts: [[1, "message-container", 3, "ngClass"], [4, "ngIf"], [1, "bubble", 3, "ngClass"], [1, "content"], [1, "date"], ["mat-card-avatar", "", 1, "avatar", 3, "src"]],
      template: function ChatBubbleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatBubbleComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatBubbleComponent_div_8_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.type === 0, ctx.type === 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c1, ctx.type === 0, ctx.type === 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, ctx.date, "shortTime"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".message-container[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.message-container-left[_ngcontent-%COMP%]{\r\n    justify-content: flex-start;\r\n}\r\n.message-container-right[_ngcontent-%COMP%]{\r\n    justify-content: flex-end;\r\n}\r\n.bubble[_ngcontent-%COMP%]{\r\n    border-bottom-left-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n    border-top-left-radius: 15px;\r\n\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    margin: 0px 10px 5px 10px;\r\n    color: var(--font1);\r\n    background-color: var(--terciary);\r\n    width:-webkit-fit-content;\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    max-width: 85%;\r\n}\r\n.bubble-left[_ngcontent-%COMP%]{\r\n    border-bottom-left-radius: 0px;\r\n}\r\n.bubble-right[_ngcontent-%COMP%]{\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\r\n.date[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-size: 11px;\r\n    text-align: right;\r\n    color: var(--font2);\r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height:24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWJ1YmJsZS9jaGF0LWJ1YmJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNEJBQTRCOztJQUU1QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMseUJBQWlCO0lBQWpCLHNCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWJ1YmJsZS9jaGF0LWJ1YmJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubWVzc2FnZS1jb250YWluZXItbGVmdHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4ubWVzc2FnZS1jb250YWluZXItcmlnaHR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5idWJibGV7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcmNpYXJ5KTtcclxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgbWF4LXdpZHRoOiA4NSU7XHJcbn1cclxuLmJ1YmJsZS1sZWZ0e1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG59XHJcbi5idWJibGUtcmlnaHR7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZGF0ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udDIpO1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDoyNHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBubbleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'chat-bubble',
          templateUrl: './chat-bubble.component.html',
          styleUrls: ['./chat-bubble.component.css']
        }]
      }], function () {
        return [];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-section/chat-section.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/chat-section/chat-section.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChatSectionComponent */

  /***/
  function srcAppComponentsChatSectionChatSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSectionComponent", function () {
      return ChatSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_ChatMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/ChatMessage */
    "./src/app/models/ChatMessage.ts");
    /* harmony import */


    var src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/ContactInfo */
    "./src/app/models/ContactInfo.ts");
    /* harmony import */


    var _services_contact_selected_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/contact-selected.service */
    "./src/app/services/contact-selected.service.ts");
    /* harmony import */


    var src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/conversations.service */
    "./src/app/services/conversations.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user-card/user-card.component */
    "./src/app/components/user-card/user-card.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-emoji-picker */
    "./node_modules/ngx-emoji-picker/__ivy_ngcc__/fesm2015/ngx-emoji-picker.js");
    /* harmony import */


    var _chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../chat-bubble/chat-bubble.component */
    "./src/app/components/chat-bubble/chat-bubble.component.ts");

    var _c0 = ["messageSection"];

    function ChatSectionComponent_div_12_chat_bubble_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chat-bubble", 17);
      }

      if (rf & 2) {
        var message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", message_r3.content)("date", message_r3.date)("type", message_r3.type)("avatar", ctx_r4.userCard.avatar);
      }
    }

    function ChatSectionComponent_div_12_chat_bubble_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chat-bubble", 17);
      }

      if (rf & 2) {
        var message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", message_r3.content)("date", message_r3.date)("type", message_r3.type)("avatar", ctx_r5.contact.avatar);
      }
    }

    function ChatSectionComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatSectionComponent_div_12_chat_bubble_1_Template, 1, 4, "chat-bubble", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatSectionComponent_div_12_chat_bubble_2_Template, 1, 4, "chat-bubble", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r3.type === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r3.type === 1);
      }
    }

    var ChatSectionComponent = /*#__PURE__*/function () {
      function ChatSectionComponent(_contactSelectedService, _conversationsService, _auth) {
        _classCallCheck(this, ChatSectionComponent);

        this._contactSelectedService = _contactSelectedService;
        this._conversationsService = _conversationsService;
        this._auth = _auth;
        this.toggled = false;
        this.messages = new Array();
        this.messageToSend = '';
        this.inboxMessages = new Array();
      }

      _createClass(ChatSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.firebaseUser = this._auth.getUser();
          this.userCard = new src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_2__["default"]('', this.firebaseUser.displayName, this.firebaseUser.email, '', this.firebaseUser.photoURL);

          this._contactSelectedService.currentContact.subscribe(function (item) {
            _this.contact = item;
          }); //update conversation


          this._conversationsService.currentMessages.subscribe(function (msg) {
            //console.log(msg)
            _this.messages = msg;
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {}
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToTheEnd();
        }
      }, {
        key: "handleSelection",
        value: function handleSelection(event) {
          //console.log(event.char);
          this.messageToSend += event["char"]; //console.log(this.messageToSend);
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit(form) {
          if (this.messageToSend.length && this.contact._id) {
            //console.log('submit');
            this.messages.push(new src_app_models_ChatMessage__WEBPACK_IMPORTED_MODULE_1__["ChatMessage"](this.messageToSend, new Date(), 0)); //console.log('messageSection:',this.messageSection.nativeElement);

            this.scrollToTheEnd();
            form.reset();
            this.messageToSend = '';
          }
        }
      }, {
        key: "scrollToTheEnd",
        value: function scrollToTheEnd() {
          this.messageSection.nativeElement.scrollTop = this.messageSection.nativeElement.scrollHeight;
        }
      }, {
        key: "loadMessages",
        value: function loadMessages() {// this.messages = new Array<ChatMessage>();
          // this.messages.push(new ChatMessage("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
          // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
          // this.messages.push(new ChatMessage("bye 😎😎", new Date(),0));
          // this.messages.push(new ChatMessage("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(),1));
          // this.messages.push(new ChatMessage("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(),1));
          // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
          // this.messages.push(new ChatMessage("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
          // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
          // this.messages.push(new ChatMessage("bye 😎😎", new Date(),0));
          // this.messages.push(new ChatMessage("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(),1));
          // this.messages.push(new ChatMessage("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(),1));
          // this.messages.push(new ChatMessage("helo im ok 😍😍😍", new Date(),1));
        }
      }]);

      return ChatSectionComponent;
    }();

    ChatSectionComponent.ɵfac = function ChatSectionComponent_Factory(t) {
      return new (t || ChatSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_selected_service__WEBPACK_IMPORTED_MODULE_3__["ContactSelectedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_4__["ConversationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    ChatSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatSectionComponent,
      selectors: [["chat-section"]],
      viewQuery: function ChatSectionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageSection = _t.first);
        }
      },
      decls: 25,
      vars: 8,
      consts: [[1, "chat-section-contaner"], [1, "contact-info"], [3, "title", "subtitle", "status", "avatar"], [1, "icon-container"], ["mat-icon-button", "", 1, "icon"], [1, "messages-section", "scroll"], ["messageSection", ""], [4, "ngFor", "ngForOf"], [1, "new-message-section"], ["action", "", 1, "new-message-form"], ["sendMessageForm", "ngForm"], ["mat-icon-button", "", 1, "emoji-picker", "item1", 3, "emojiPickerIf", "emojiPickerDirection", "click", "emojiPickerIfChange", "emojiPickerSelect"], [1, "item2"], ["name", "message", "type", "text", "placeholder", "Escribe un mensaje", "required", "", 1, "new-message-textarea", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "item3"], ["mat-icon-button", "", 1, "send-button", 3, "click"], [3, "content", "date", "type", "avatar", 4, "ngIf"], [3, "content", "date", "type", "avatar"]],
      template: function ChatSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "user-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "videocam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatSectionComponent_div_12_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSectionComponent_Template_button_click_16_listener() {
            return ctx.toggled = !ctx.toggled;
          })("emojiPickerIfChange", function ChatSectionComponent_Template_button_emojiPickerIfChange_16_listener($event) {
            return ctx.toggled = $event;
          })("emojiPickerSelect", function ChatSectionComponent_Template_button_emojiPickerSelect_16_listener($event) {
            return ctx.handleSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "sentiment_satisfied_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatSectionComponent_Template_textarea_ngModelChange_20_listener($event) {
            return ctx.messageToSend = $event;
          })("keyup.enter", function ChatSectionComponent_Template_textarea_keyup_enter_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return ctx.handleSubmit(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSectionComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return ctx.handleSubmit(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.contact.title)("subtitle", ctx.contact.subtitle)("status", ctx.contact.status)("avatar", ctx.contact.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("emojiPickerIf", ctx.toggled)("emojiPickerDirection", "bottom" || false || false || false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageToSend);
        }
      },
      directives: [_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_11__["EmojiPickerApiDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_12__["ChatBubbleComponent"]],
      styles: [".chat-section-contaner[_ngcontent-%COMP%]{\r\n    height: 90%;\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    display: grid;\r\n    grid-template-columns: 1;\r\n    grid-template-rows: 70px auto 100px;\r\n}\r\n.contact-info[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid var(--terciary);\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n.icon-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n    color: var(--font1);\r\n    background-color: var(--terciary);\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-right: 5px;\r\n}\r\n.messages-section[_ngcontent-%COMP%]{\r\n    max-height: 53vh;\r\n}\r\n.scroll[_ngcontent-%COMP%]{\r\n    overflow-x: hidden; \r\n    overflow-y: auto;\r\n}\r\n.new-message-section[_ngcontent-%COMP%]{\r\n    border-top: 1px solid var(--terciary);\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    width: 95%;\r\n    height:95%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.send-button[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    background-color: var(--primary);\r\n    color: var(--terciary);\r\n}\r\n.new-message-textarea[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    padding: 1em 1em 1em 1em;\r\n    font-family: var(--font-family);\r\n    color: var(--font1);\r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n    background-color: var(--terciary);\r\n    border:none;\r\n    outline:none;\r\n}\r\n.new-message-form[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: 10px;\r\n    \r\n    display: grid;\r\n    grid-template-columns:40px auto 40px;\r\n    grid-template-rows: 40px auto;\r\n    -moz-column-gap: 10px;\r\n         column-gap: 10px;\r\n}\r\n.item1[_ngcontent-%COMP%]{\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n}\r\n.item2[_ngcontent-%COMP%]{\r\n    grid-column: 2;\r\n    grid-row: 1 / span 2;\r\n}\r\n.item3[_ngcontent-%COMP%]{\r\n    grid-column: 3;\r\n    grid-row: 1;\r\n}\r\n.emoji-picker[_ngcontent-%COMP%]{\r\n    color:var(--font1);\r\n    cursor: pointer;\r\n    align-items: center;;\r\n}\r\n.emoji-picker[_ngcontent-%COMP%]:hover{\r\n    color:var(--primary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXNlY3Rpb24vY2hhdC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixxQkFBZ0I7U0FBaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXNlY3Rpb24vY2hhdC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1zZWN0aW9uLWNvbnRhbmVye1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggYXV0byAxMDBweDtcclxufVxyXG4uY29udGFjdC1pbmZve1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uaWNvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaWNvbntcclxuICAgIGNvbG9yOiB2YXIoLS1mb250MSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJjaWFyeSk7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzLXNlY3Rpb257XHJcbiAgICBtYXgtaGVpZ2h0OiA1M3ZoO1xyXG59XHJcbi5zY3JvbGx7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ubmV3LW1lc3NhZ2Utc2VjdGlvbntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6OTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlbmQtYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGVyY2lhcnkpO1xyXG59XHJcbi5uZXctbWVzc2FnZS10ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVyY2lhcnkpO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuLm5ldy1tZXNzYWdlLWZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6NDBweCBhdXRvIDQwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggYXV0bztcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbn1cclxuLml0ZW0xe1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMTtcclxufVxyXG4uaXRlbTJ7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG59XHJcbi5pdGVtM3tcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuLmVtb2ppLXBpY2tlcntcclxuICAgIGNvbG9yOnZhcigtLWZvbnQxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7O1xyXG59XHJcbi5lbW9qaS1waWNrZXI6aG92ZXJ7XHJcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5KTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'chat-section',
          templateUrl: './chat-section.component.html',
          styleUrls: ['./chat-section.component.css']
        }]
      }], function () {
        return [{
          type: _services_contact_selected_service__WEBPACK_IMPORTED_MODULE_3__["ContactSelectedService"]
        }, {
          type: src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_4__["ConversationsService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, {
        messageSection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['messageSection']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/ContactInfo */
    "./src/app/models/ContactInfo.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(_auth) {
        _classCallCheck(this, HeaderComponent);

        this._auth = _auth;
        this.userCard = new src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_1__["default"]('', '', '', '', '');
        this.user = undefined;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this._auth.getUserObservable().subscribe(
          //   res=>{
          //     this.user = res;
          //     console.log('user from header: ',this.user);
          //   },err=>{
          //     console.log(err);
          //   })
          this.user = this._auth.getUser();
          this.userCard = new src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_1__["default"]('', this.user.displayName, this.user.email, '', this.user.photoURL); //console.log('user from header!!! ',this.user);
          //this.loadUserInfo();
        }
      }, {
        key: "loadUserInfo",
        value: function loadUserInfo() {
          this.userCard = new src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_1__["default"]('12134', 'Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
        }
      }, {
        key: "logout",
        value: function logout() {
          this._auth.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 22,
      vars: 3,
      consts: [[1, "toolbar"], ["src", "assets/icons/speech-bubble.svg", "width", "24px", "height", "24px"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "matTooltip"], ["mat-card-avatar", "", 1, "avatar", 3, "src"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", "aria-label", "options", 1, "example-icon", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sistema de mensajer\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx.userCard.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userCard.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]],
      styles: [".example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n  img[_ngcontent-%COMP%]{\r\n      margin-right: 10px;\r\n  }\r\n  .toolbar[_ngcontent-%COMP%]{\r\n      background-color:var(--primary);\r\n      border-top-left-radius: 5px;\r\n      border-top-right-radius: 5px;\r\n  }\r\n  .toolbar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%]{\r\n      color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCO0VBQ0E7TUFDSSxrQkFBa0I7RUFDdEI7RUFDQTtNQUNJLCtCQUErQjtNQUMvQiwyQkFBMkI7TUFDM0IsNEJBQTRCO0VBQ2hDO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAudG9vbGJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAudG9vbGJhciA+IHNwYW4sIG1hdC1pY29ue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/conversations.service */
    "./src/app/services/conversations.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user-card/user-card.component */
    "./src/app/components/user-card/user-card.component.ts");

    function SidebarComponent_div_7_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "user-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_7_span_1_Template_user_card_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var contact_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.notify(contact_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", contact_r3.title)("subtitle", contact_r3.subtitle)("status", contact_r3.status)("avatar", contact_r3.avatar);
      }
    }

    function SidebarComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_7_span_1_Template, 2, 4, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.contactsInfo);
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(_conversationsService) {
        _classCallCheck(this, SidebarComponent);

        this._conversationsService = _conversationsService;
        this.contactSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactsInfo = new Array();
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadContacts();
          console.log('contacts from sidebar: ', this.contactsInfo);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log('search form send');
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          this._conversationsService.loadContacts();

          this.contactsInfo = this._conversationsService.getContacts();
          console.log('contacts from server: ', this.contactsInfo);
        }
      }, {
        key: "notify",
        value: function notify(contact) {
          this.contactSelected.emit(contact);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_1__["ConversationsService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["sidebar"]],
      inputs: {
        contactsInfo: "contactsInfo"
      },
      outputs: {
        contactSelected: "contactSelected"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "sidebar-container"], [1, "search-container"], [1, "search-form", 3, "ngSubmit"], ["searchForm", "ngForm"], ["type", "text", "placeholder", "Buscar usuario", 1, "search-input"], [1, "search-button"], ["class", "inbox-container", 4, "ngIf"], [1, "inbox-container"], ["class", "inbox", 4, "ngFor", "ngForOf"], [1, "inbox"], [3, "title", "subtitle", "status", "avatar", "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SidebarComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_div_7_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactsInfo);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"]],
      styles: [".sidebar-container[_ngcontent-%COMP%]{\r\n}\r\n.search-container[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    margin-top: 20px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n.search-input[_ngcontent-%COMP%]{\r\n    min-width: 220px;\r\n    display: block;\r\n    border: none;\r\n    font-size: 16px;\r\n    padding: 10px 10px;\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: var(--terciary);\r\n    padding-left: 20px;\r\n    border-radius: 20px;\r\n    outline: none !important;\r\n    box-sizing: border-box;\r\n    color: var(--font1);\r\n}\r\n.search-input[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 1px 1px 5px 0px lightgrey;\r\n    border: 1px solid lightgrey;   \r\n}\r\n.search-button[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    z-index: 1;\r\n    position: relative;\r\n    top: -25px;\r\n    left: 85%; \r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: var(--font1);\r\n}\r\n.inbox-container[_ngcontent-%COMP%]{\r\n    border-right: 1px solid var(--terciary);\r\n    \r\n    margin-top: 1rem;\r\n    min-height: 68vh;\r\n    height: 68vh;\r\n    max-height: 68vh;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n.inbox[_ngcontent-%COMP%]{\r\n    min-height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWNvbnRhaW5lcntcclxufVxyXG4uc2VhcmNoLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnNlYXJjaC1pbnB1dHtcclxuICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVyY2lhcnkpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udDEpO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5OyAgIFxyXG59XHJcbi5zZWFyY2gtYnV0dG9ue1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBsZWZ0OiA4NSU7IFxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQxKTtcclxufVxyXG4uaW5ib3gtY29udGFpbmVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdGVyY2lhcnkpO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDY4dmg7XHJcbiAgICBoZWlnaHQ6IDY4dmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2OHZoO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uaW5ib3h7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_1__["ConversationsService"]
        }];
      }, {
        contactsInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contactSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-card/user-card.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-card/user-card.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserCardComponent */

  /***/
  function srcAppComponentsUserCardUserCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCardComponent", function () {
      return UserCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "online": a0,
        "offline": a1
      };
    };

    function UserCardComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r2.status === "online", ctx_r2.status === "offline"));
      }
    }

    function UserCardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserCardComponent_div_2_div_2_Template, 1, 4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status === "online" || ctx_r0.status === "offline");
      }
    }

    function UserCardComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r3.status === "online", ctx_r3.status === "offline"));
      }
    }

    function UserCardComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserCardComponent_div_3_div_2_Template, 1, 4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.status === "online" || ctx_r1.status === "offline");
      }
    }

    var UserCardComponent = /*#__PURE__*/function () {
      function UserCardComponent() {
        _classCallCheck(this, UserCardComponent);
      }

      _createClass(UserCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //console.log('contact: ',this.contact);
          this.parsedTitle = this.parseStringByLength(this.title, 20);
          this.parsedSubtitle = this.parseStringByLength(this.subtitle, 23);
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          //console.log(this.contact)
          // if(this.title){
          this.parsedTitle = this.parseStringByLength(this.title, 20); // }
          // if(this.subtitle){

          if (this.title) {
            this.parsedSubtitle = 'online';
          }
        }
        /**
         *
         * @param stringToBeParsed
         * @param lengthOfParsedString
         * @returns if string if less than 17 characters returns the same. If not returns substring+'...'
         */

      }, {
        key: "parseStringByLength",
        value: function parseStringByLength(stringToBeParsed, lengthOfParsedString) {
          var result = null;

          if (stringToBeParsed) {
            if (stringToBeParsed.length < 20) {
              result = stringToBeParsed;
            } else {
              result = stringToBeParsed.substr(0, lengthOfParsedString).concat('...');
            }
          }

          return result;
        }
      }, {
        key: "print",
        value: function print() {//console.log(this.title, this.subtitle, this.status, this.avatar)
        }
      }]);

      return UserCardComponent;
    }();

    UserCardComponent.ɵfac = function UserCardComponent_Factory(t) {
      return new (t || UserCardComponent)();
    };

    UserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserCardComponent,
      selectors: [["user-card"]],
      inputs: {
        avatar: "avatar",
        title: "title",
        subtitle: "subtitle",
        status: "status"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "user-card", 3, "click"], ["mat-card-avatar", "", 4, "ngIf"], ["mat-card-avatar", ""], ["mat-card-avatar", "", 3, "src"], ["class", "badge", 3, "ngClass", 4, "ngIf"], [1, "badge", 3, "ngClass"], ["mat-card-avatar", "", "src", "assets/icons/default-avatar.svg"]],
      template: function UserCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCardComponent_Template_mat_card_click_0_listener() {
            return ctx.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserCardComponent_div_2_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserCardComponent_div_3_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parsedTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parsedSubtitle);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".user-card[_ngcontent-%COMP%]{\r\n    min-width: 240px;\r\n    max-width: 600px;\r\n    box-shadow: none;\r\n    \r\n    height:30px;\r\n    color: var(--font1);\r\n    cursor:pointer;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 1rem;\r\n}\r\n.user-card[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--terciary);\r\n}\r\n.mat-card-subtitle[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n}\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    \r\n    background-size: cover;\r\n    background-color: var(--primary);\r\n    color: white;\r\n    font-size: 22px;\r\n    \r\n}\r\n.text-avatar[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.badge[_ngcontent-%COMP%]{\r\n    height: 10px;\r\n    width: 10px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin-left: -10px;\r\n  }\r\n.online[_ngcontent-%COMP%]{\r\n      background-color: #09b609;\r\n  }\r\n.offline[_ngcontent-%COMP%]{\r\n    background-color: lightgray;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0FBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7QUFDQTtJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY2FyZHtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC8qIHdpZHRoOiAyMzBweDsgKi9cclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQxKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcbi51c2VyLWNhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJjaWFyeSk7XHJcbn1cclxuLm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmF2YXRhcntcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBcclxufVxyXG4udGV4dC1hdmF0YXJ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbiAgLmJhZGdle1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIC5vbmxpbmV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwOWI2MDk7XHJcbiAgfVxyXG4gIC5vZmZsaW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-card',
          templateUrl: './user-card.component.html',
          styleUrls: ['./user-card.component.css']
        }]
      }], function () {
        return [];
      }, {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        status: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/ChatMessage.ts":
  /*!***************************************!*\
    !*** ./src/app/models/ChatMessage.ts ***!
    \***************************************/

  /*! exports provided: ChatMessage */

  /***/
  function srcAppModelsChatMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessage", function () {
      return ChatMessage;
    });

    var ChatMessage = function ChatMessage(content, date, type) {
      _classCallCheck(this, ChatMessage);

      this.content = content;
      this.date = date;
      this.type = type;
    };
    /***/

  },

  /***/
  "./src/app/models/ContactInbox.ts":
  /*!****************************************!*\
    !*** ./src/app/models/ContactInbox.ts ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppModelsContactInboxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return ContactInbox;
    });

    var ContactInbox = function ContactInbox() {
      _classCallCheck(this, ContactInbox);
    };
    /***/

  },

  /***/
  "./src/app/models/ContactInfo.ts":
  /*!***************************************!*\
    !*** ./src/app/models/ContactInfo.ts ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppModelsContactInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return ContactInfo;
    });

    var ContactInfo = function ContactInfo(_id, title, subtitle, status, avatar) {
      _classCallCheck(this, ContactInfo);

      this._id = _id;
      this.title = title;
      this.subtitle = subtitle;
      this.status = status;
      this.avatar = avatar;
    };
    /***/

  },

  /***/
  "./src/app/pages/chat-app/chat-app.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/chat-app/chat-app.component.ts ***!
    \******************************************************/

  /*! exports provided: ChatAppComponent */

  /***/
  function srcAppPagesChatAppChatAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatAppComponent", function () {
      return ChatAppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/ContactInfo */
    "./src/app/models/ContactInfo.ts");
    /* harmony import */


    var src_app_services_contact_selected_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contact-selected.service */
    "./src/app/services/contact-selected.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/chat-section/chat-section.component */
    "./src/app/components/chat-section/chat-section.component.ts");

    var ChatAppComponent = /*#__PURE__*/function () {
      //@ViewChild('chatSection') chatSection:ChatSectionComponent;
      function ChatAppComponent(_contactSelectedService) {
        _classCallCheck(this, ChatAppComponent);

        this._contactSelectedService = _contactSelectedService;
        this.title = 'Sistema de mensajería';
        this.contactSelected = new src_app_models_ContactInfo__WEBPACK_IMPORTED_MODULE_1__["default"]('', '', '', '', 'assets/icons/default-avatar.svg');
        ;
      }

      _createClass(ChatAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this._auth.getUser().subscribe(
          //   res=>{
          //     this.user = res;
          //     console.log('user: ',this.user);
          //   },err=>{
          //     console.log(err);
          //   })
        }
      }, {
        key: "receiveContact",
        value: function receiveContact(contact) {
          //this.chatSection.contact = contact;
          //console.log(contact);
          this._contactSelectedService.updateContactSelected(contact);
        }
      }]);

      return ChatAppComponent;
    }();

    ChatAppComponent.ɵfac = function ChatAppComponent_Factory(t) {
      return new (t || ChatAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_selected_service__WEBPACK_IMPORTED_MODULE_2__["ContactSelectedService"]));
    };

    ChatAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatAppComponent,
      selectors: [["app-chat-app"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"], [1, "item1"], [1, "item2", 3, "contactSelected"], [1, "item3"], ["chatSection", ""]],
      template: function ChatAppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sidebar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contactSelected", function ChatAppComponent_Template_sidebar_contactSelected_2_listener($event) {
            return ctx.receiveContact($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "chat-section", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_5__["ChatSectionComponent"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    height: 90vh;\r\n    border-radius: 5px;\r\n    box-shadow:1px 1px 20px grey;  \r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: 270px auto;\r\n    grid-template-rows: 60px auto;\r\n    max-height: 100%;\r\n}\r\n\r\n.item1[_ngcontent-%COMP%]{\r\n    grid-column: 1 / span 2;\r\n    grid-row: 1;\r\n}\r\n\r\n.item2[_ngcontent-%COMP%]{\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n}\r\n\r\n.item3[_ngcontent-%COMP%]{\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1hcHAvY2hhdC1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0LWFwcC9jaGF0LWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OjFweCAxcHggMjBweCBncmV5OyAgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3MHB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtMXtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi5pdGVtMntcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbn1cclxuLml0ZW0ze1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBncmlkLXJvdzogMjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-app',
          templateUrl: './chat-app.component.html',
          styleUrls: ['./chat-app.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_contact_selected_service__WEBPACK_IMPORTED_MODULE_2__["ContactSelectedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function LoginComponent_mat_spinner_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_router, _auth) {
        _classCallCheck(this, LoginComponent);

        this._router = _router;
        this._auth = _auth;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginClicked = false;
        }
      }, {
        key: "turnOnSpinner",
        value: function turnOnSpinner() {
          this.loginClicked = true;
        }
      }, {
        key: "googleLogIn",
        value: function googleLogIn() {
          this.turnOnSpinner();

          this._auth.loginWithGoogle();
        }
      }, {
        key: "logout",
        value: function logout() {
          this._auth.logout();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])],
      decls: 14,
      vars: 1,
      consts: [[1, "line"], [1, "login-container"], ["alt", "logo", "src", "assets/icons/people.svg", "width", "80px", "height", "80px", 1, "logo"], [1, "google"], ["mat-button", "", 1, "google-button", 3, "click"], ["alt", "google-logo", "id", "google-logo", "width", "24px", "height", "24px", "src", "assets/icons/google-icon.svg"], ["id", "google-title"], ["class", "loader", 4, "ngIf"], [1, "loader"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sistema de mensajer\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() {
            return ctx.googleLogIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Continuar con Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_mat_spinner_13_Template, 1, 0, "mat-spinner", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginClicked);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]],
      styles: ["html[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80%;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    color: var(--font1);\r\n}\r\n.line[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n    background-color: var(--primary);\r\n}\r\n.login-container[_ngcontent-%COMP%]{\r\n    \r\n    width: 400px;\r\n    height:300px;\r\n    \r\n    position: absolute;\r\n\r\n    left: 50%;\r\n    margin-left: -200px;\r\n    top: 50%;\r\n    margin-top: -150px;\r\n    \r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    box-shadow:1px 1px 4px grey;  \r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    background-color: white;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n\r\n    border-color: var(--font1);\r\n}\r\n.google-button[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-bottom: 70px;\r\n    width: 240px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    background-color: #ff4645;\r\n    color: white;\r\n    font-size: 16px;\r\n    \r\n    \r\n    \r\n}\r\n#google-logo[_ngcontent-%COMP%]{\r\n    fill: white;\r\n    \r\n}\r\n#google-title[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n.welcome-image[_ngcontent-%COMP%]{\r\n    color:var(--font1);\r\n}\r\n.loader[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -50px;\r\n    top: 80%;\r\n  }\r\n@-webkit-keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7O0lBRWxCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBOzs7R0FHRztBQUNIO0lBQ0ksZ0JBQWdCOztJQUVoQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlOztJQUVmOzBCQUNzQjtJQUN0QixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0VBQ1Y7QUFFQTtJQUNFLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtFQUNwQztBQUhBO0lBQ0UsS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQxKTtcclxufVxyXG4ubGluZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4ubG9naW4tY29udGFpbmVye1xyXG4gICAgXHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2hhZG93OjFweCAxcHggNHB4IGdyZXk7ICBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIC5nb29nbGV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0gKi9cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZm9udDEpO1xyXG59XHJcbi5nb29nbGUtYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NjQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgXHJcbiAgICAvKiBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG59XHJcbiNnb29nbGUtbG9nb3tcclxuICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xyXG59XHJcbiNnb29nbGUtdGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ud2VsY29tZS1pbWFnZXtcclxuICAgIGNvbG9yOnZhcigtLWZvbnQxKTtcclxufVxyXG4ubG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIHRvcDogODAlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css'],
          providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(auth, _router, _http) {
        _classCallCheck(this, AuthService);

        this.auth = auth;
        this._router = _router;
        this._http = _http;
        this._userSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.user = this._userSource.asObservable();
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api;
      }

      _createClass(AuthService, [{
        key: "loginWithGoogle",
        value: function loginWithGoogle() {
          var _this2 = this;

          this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider()).then(function (res) {
            _this2._userCredentials = res;

            _this2._userSource.next(res.user);

            _this2._router.navigate(["/chat"]);
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "connectToAPI",
        value: function connectToAPI() {
          this._http.get(this.api.url).subscribe(function (res) {}, function (err) {
            console.log('error connecting to API: ', err);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          this.auth.signOut().then(function (res) {
            _this3._router.navigate(["/"]);
          }, function (err) {
            console.log(err);

            _this3._router.navigate(["/"]);
          });
          return true; //tal vez deberia modificar el userSource
        }
      }, {
        key: "getUserObservable",
        value: function getUserObservable() {
          return this.user;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/contact-selected.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/contact-selected.service.ts ***!
    \******************************************************/

  /*! exports provided: ContactSelectedService */

  /***/
  function srcAppServicesContactSelectedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactSelectedService", function () {
      return ContactSelectedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_ContactInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/ContactInfo */
    "./src/app/models/ContactInfo.ts");

    var ContactSelectedService = /*#__PURE__*/function () {
      // public inbox:Array<ContactInbox>;
      function ContactSelectedService() {
        _classCallCheck(this, ContactSelectedService);

        this.contactSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_ContactInfo__WEBPACK_IMPORTED_MODULE_2__["default"]('', '', '', '', 'assets/icons/default-avatar.svg'));
        this.currentContact = this.contactSource.asObservable();
      }

      _createClass(ContactSelectedService, [{
        key: "updateContactSelected",
        value: function updateContactSelected(contact) {
          this.contactSource.next(contact);
        }
      }]);

      return ContactSelectedService;
    }();

    ContactSelectedService.ɵfac = function ContactSelectedService_Factory(t) {
      return new (t || ContactSelectedService)();
    };

    ContactSelectedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactSelectedService,
      factory: ContactSelectedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSelectedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/conversations.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/conversations.service.ts ***!
    \***************************************************/

  /*! exports provided: ConversationsService */

  /***/
  function srcAppServicesConversationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConversationsService", function () {
      return ConversationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/ChatMessage */
    "./src/app/models/ChatMessage.ts");
    /* harmony import */


    var _models_ContactInbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/ContactInbox */
    "./src/app/models/ContactInbox.ts");
    /* harmony import */


    var _models_ContactInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/ContactInfo */
    "./src/app/models/ContactInfo.ts");
    /* harmony import */


    var _contact_selected_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-selected.service */
    "./src/app/services/contact-selected.service.ts");

    var ConversationsService = /*#__PURE__*/function () {
      function ConversationsService(_contactSelectedService) {
        var _this4 = this;

        _classCallCheck(this, ConversationsService);

        this._contactSelectedService = _contactSelectedService;
        this.messagesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.currentMessages = this.messagesSource.asObservable();
        this.inbox = new Array();
        this.messages = new Array();
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("helo im ok 😍😍😍", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("bye 😎😎", new Date(), 0));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("helo im ok 😍😍😍", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.", new Date(), 0));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("helo im ok 😍😍😍", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("bye 😎😎", new Date(), 0));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("Veniam nisi quis duis magna exercitation excepteur amet excepteur occaecat. 🍕🍕🚓🚗🏳‍🌈", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("Commodo culpa fugiat exercitation non amet minim id quis est incididunt aliquip fugiat dolore. Adipisicing laborum occaecat elit duis consequat. Dolore nisi aliqua ea ea minim et. Magna eiusmod deserunt sunt in duis reprehenderit voluptate velit minim pariatur aute. Mollit dolor 💛💚💖", new Date(), 1));
        this.messages.push(new _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]("helo im ok 😍😍😍", new Date(), 1));

        this._contactSelectedService.currentContact.subscribe(function (item) {
          _this4.currentContact = item;

          _this4.updateConversation();
        });
      }

      _createClass(ConversationsService, [{
        key: "updateConversation",
        value: function updateConversation() {
          var _this5 = this;

          if (this.messages.length && this.currentContact._id) {
            var found = this.inbox.find(function (element) {
              return element.contactInfo._id === _this5.currentContact._id;
            });

            if (!found.messages) {
              found.messages = [this.messages.pop(), this.messages.pop()];
            }

            this.messagesSource.next(found.messages);
          } else {
            this.messagesSource.next(new Array());
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          console.log('message send', message);
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          var contactInfo1 = new _models_ContactInfo__WEBPACK_IMPORTED_MODULE_4__["default"]('1', 'Shiba Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
          var contactInfo2 = new _models_ContactInfo__WEBPACK_IMPORTED_MODULE_4__["default"]('2', 'Pancho Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba2.jpg");
          var contactInfo3 = new _models_ContactInfo__WEBPACK_IMPORTED_MODULE_4__["default"]('3', 'David Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
          var contactInfo4 = new _models_ContactInfo__WEBPACK_IMPORTED_MODULE_4__["default"]('4', 'Carlitos Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba2.jpg");
          var contactInfo5 = new _models_ContactInfo__WEBPACK_IMPORTED_MODULE_4__["default"]('5', 'Daniel Inu', 'Dog Breed', 'online', "https://material.angular.io/assets/img/examples/shiba1.jpg");
          var contactInbox1 = new _models_ContactInbox__WEBPACK_IMPORTED_MODULE_3__["default"]();
          contactInbox1.contactInfo = contactInfo1;
          var contactInbox2 = new _models_ContactInbox__WEBPACK_IMPORTED_MODULE_3__["default"]();
          contactInbox2.contactInfo = contactInfo2;
          var contactInbox3 = new _models_ContactInbox__WEBPACK_IMPORTED_MODULE_3__["default"]();
          contactInbox3.contactInfo = contactInfo3;
          var contactInbox4 = new _models_ContactInbox__WEBPACK_IMPORTED_MODULE_3__["default"]();
          contactInbox4.contactInfo = contactInfo4;
          var contactInbox5 = new _models_ContactInbox__WEBPACK_IMPORTED_MODULE_3__["default"]();
          contactInbox5.contactInfo = contactInfo5;
          this.inbox.push(contactInbox1);
          this.inbox.push(contactInbox2);
          this.inbox.push(contactInbox3);
          this.inbox.push(contactInbox4);
          this.inbox.push(contactInbox5);
        }
      }, {
        key: "getContacts",
        value: function getContacts() {
          var contacts = new Array();

          var _iterator = _createForOfIteratorHelper(this.inbox),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              contacts.push(item.contactInfo);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log('contacts in server: ', contacts);
          return contacts;
        }
      }]);

      return ConversationsService;
    }();

    ConversationsService.ɵfac = function ConversationsService_Factory(t) {
      return new (t || ConversationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_contact_selected_service__WEBPACK_IMPORTED_MODULE_5__["ContactSelectedService"]));
    };

    ConversationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConversationsService,
      factory: ConversationsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConversationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _contact_selected_service__WEBPACK_IMPORTED_MODULE_5__["ContactSelectedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyAqNdZSmMQrk3Sw5SZe83e12ipLzgFLl1w",
        authDomain: "chat-app-ac2fe.firebaseapp.com",
        projectId: "chat-app-ac2fe",
        storageBucket: "chat-app-ac2fe.appspot.com",
        messagingSenderId: "380513388976",
        appId: "1:380513388976:web:ee447c53e920915492ae75",
        measurementId: "G-GLPKQJXCWG"
      },
      api: {
        url: 'http://localhost:3000/chat'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\josed\Documents\Portfolio\chat-app\client\chat-app-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map