(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-content {\r\n    padding-top: 10px;\r\n    width: 75%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@media all and (max-width: 480px) {\r\n    .page-content {\r\n        width: 100%;\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n\r\n.demo-card-wide.mdl-card {\r\n    width: 100%;\r\n  }\r\n\r\n.report-container {\r\n    height: 500px;\r\n    margin: 1em;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdl class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button\">\r\n    <header class=\"mdl-layout__header\">\r\n        <div class=\"mdl-layout__header-row\">\r\n            <span class=\"mdl-layout-title\">ngx-ssrs-reportviewer</span>\r\n        </div>\r\n    </header>\r\n    <main class=\"mdl-layout__content\">\r\n        <div class=\"page-content\">\r\n            <!--<div *ngIf=\"error\" class=\"error mb\">\r\n                {{ error.message | json }}\r\n            </div>-->\r\n            <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\r\n                <div class=\"mdl-card__title\">\r\n                        <h4>Angular 2+ SSRS Reportviewer</h4>\r\n                </div>\r\n                <div class=\"report-container\">\r\n                      <ssrs-reportviewer [reportserver]=\"reportServer\" [reporturl]=\"reportUrl\" [showparameters]=\"showParameters\" [parameters]=\"parameters\" [language]=\"language\" [width]=\"width\" [height]=\"height\" [toolbar]=\"toolbar\" ></ssrs-reportviewer>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.reportServer = 'http://reportserver/reportserver';
        this.reportUrl = 'Departments/General Reports/SampleWithParameters';
        this.showParameters = 'false'; // true, false, collapsed
        this.parameters = {
            'SampleStringParameter': 'String',
            'SampleBooleanParameter': false,
            'SampleDateTimeParameter': '10/1/2017',
            'SampleIntParameter': 12345,
            'SampleFloatParameter': '123.1234',
            'SampleMultipleStringParameter': ['Parameter1', 'Parameter2']
        };
        this.language = 'en-us';
        this.width = 50;
        this.height = 50;
        this.toolbar = 'false';
        this.error = null;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ssrs',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_reportviewer_reportviewer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reportviewer/reportviewer.module */ "./src/app/modules/reportviewer/reportviewer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_reportviewer_reportviewer_module__WEBPACK_IMPORTED_MODULE_3__["SSRSReportViewerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/reportviewer/reportviewer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/reportviewer/reportviewer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ssrs-reportviewer {\r\n  overflow-x:hidden;\r\n  overflow-Y:hidden;\r\n  position: relative;\r\n  left: 0px;\r\n  top: 0px;\r\n}"

/***/ }),

/***/ "./src/app/modules/reportviewer/reportviewer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/reportviewer/reportviewer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <iframe  class=\"ssrs-reportviewer\" #iframe [style.width.%]=\"width\" [style.height.%]=\"height\" scrolling=\"no\"> \r\n"

/***/ }),

/***/ "./src/app/modules/reportviewer/reportviewer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/reportviewer/reportviewer.component.ts ***!
  \****************************************************************/
/*! exports provided: ReportViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportViewerComponent", function() { return ReportViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportViewerComponent = /** @class */ (function () {
    function ReportViewerComponent(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.showparameters = 'false';
        this.language = 'en-us';
        this.width = 100;
        this.height = 100;
        this.toolbar = 'true';
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ReportViewerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.reporturl) {
            this.onError.emit('Src cannot be null');
        }
        if ('reporturl' in changes) {
            // this.source = this.sanitizer.bypassSecurityTrustResourceUrl(this.buildReportUrl());
            this.get(this.buildReportUrl(), null).subscribe(function (data) { return _this.iframe.nativeElement.src = data; });
        }
    };
    ReportViewerComponent.prototype.createAuthorizationHeader = function () {
        var token = sessionStorage.getItem('access_token');
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token)
            .set('X-Origin', 'SomDenWeb').set('Allow-Control-Allow-Origin', '*');
    };
    ReportViewerComponent.prototype.get = function (url, params) {
        return this.http.get(url.replace('{hostname}', window.location.hostname), { params: params, headers: this.createAuthorizationHeader() });
    };
    ReportViewerComponent.prototype.buildParameterString = function () {
        var parameterString = '';
        for (var param in this.parameters) {
            if (param) {
                if (this.parameters[param] instanceof Array === true) {
                    for (var arrayParam in this.parameters[param]) {
                        if (arrayParam) {
                            parameterString += '&' + param + '=' + this.parameters[param][arrayParam];
                        }
                    }
                }
                if (this.parameters[param] != null && this.parameters[param] instanceof Array === false) {
                    parameterString += '&' + param + '=' + this.parameters[param];
                }
                if (this.parameters[param] == null) {
                    parameterString += '&' + param + ':isnull=true';
                }
            }
        }
        return parameterString;
    };
    ReportViewerComponent.prototype.buildReportUrl = function () {
        if (!this.reporturl) {
            return;
        }
        var parameters = this.buildParameterString();
        return this.reportserver + '?/'
            + this.reporturl + '&rs:Embed=true'
            + '&rc:Parameters=' + this.showparameters
            + parameters
            + '&rs:ParameterLanguage=' + this.language + '&rc:Toolbar=' + this.toolbar;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReportViewerComponent.prototype, "iframe", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReportViewerComponent.prototype, "reporturl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReportViewerComponent.prototype, "reportserver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "showparameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "toolbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('error'),
        __metadata("design:type", Object)
    ], ReportViewerComponent.prototype, "onError", void 0);
    ReportViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ssrs-reportviewer',
            template: __webpack_require__(/*! ./reportviewer.component.html */ "./src/app/modules/reportviewer/reportviewer.component.html"),
            styles: [__webpack_require__(/*! ./reportviewer.component.css */ "./src/app/modules/reportviewer/reportviewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportViewerComponent);
    return ReportViewerComponent;
}());



/***/ }),

/***/ "./src/app/modules/reportviewer/reportviewer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/reportviewer/reportviewer.module.ts ***!
  \*************************************************************/
/*! exports provided: SSRSReportViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSRSReportViewerModule", function() { return SSRSReportViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reportviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportviewer.component */ "./src/app/modules/reportviewer/reportviewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SSRSReportViewerModule = /** @class */ (function () {
    function SSRSReportViewerModule() {
    }
    SSRSReportViewerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_reportviewer_component__WEBPACK_IMPORTED_MODULE_2__["ReportViewerComponent"]],
            exports: [
                _reportviewer_component__WEBPACK_IMPORTED_MODULE_2__["ReportViewerComponent"]
            ]
        })
    ], SSRSReportViewerModule);
    return SSRSReportViewerModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\ngx-ssrs-reportviewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map