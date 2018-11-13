webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100%;\r\n  height: 60px;\r\n}\r\n\r\n\r\n.top-container {\r\n  position: relative;\r\n  height: 78px;\r\n}\r\n\r\n\r\n.back {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  width: 100%;\r\n  height: 78px;\r\n}\r\n\r\n\r\n.bot {\r\n  position: absolute;\r\n}\r\n\r\n\r\n.logo {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: block;\r\n  margin: auto;\r\n  background: url(\"/assets/img/Group 4.png\") center center no-repeat ;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"top-container\">\r\n    <div class=\"bot\">\r\n        <img class=\"back\" src=\"assets/img/Group 5.png\">\r\n    </div>\r\n    <div class=\"logo\">\r\n    </div>\r\n</div>\r\n  <app-game></app-game>\r\n<img src=\"/assets/img/Group 5.png\" alt=\"\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_array_service__ = __webpack_require__("./src/app/services/array.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_string_pipe__ = __webpack_require__("./src/app/pipes/string.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_answer_answer_component__ = __webpack_require__("./src/app/components/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_question_question_component__ = __webpack_require__("./src/app/components/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_game_game_component__ = __webpack_require__("./src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_material_my_stepper_stepper_module__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_answer_answer_component__["a" /* AnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_1__pipes_string_pipe__["a" /* FixQuotesPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_material_my_stepper_stepper_module__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatToolbarModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__services_array_service__["a" /* ArrayService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card [ngStyle]=\"calcStyle()\" (click)=\"onClick($event)\">\r\n  <img class=\"tinyimg\" *ngIf=\"result === undefined\" src=\"assets/img/white_blank.png\">\r\n  <img class=\"tinyimg\" *ngIf=\"result !== undefined\" src=\"assets/img/Group{{ result === false ? ' 3' : '' }}.png\">\r\n  {{ text | fixQuotes }}\r\n  <img class=\"tinyimg\" src=\"assets/img/white_blank.png\">\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/answer/answer.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  min-width: 100% !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n\n.mat-card:hover {\n  -webkit-box-shadow: 0 3px 1px 2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;\n          box-shadow: 0 3px 1px 2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important; }\n\n.tinyimg {\n  height: 24px;\n  width: 24px; }\n"

/***/ }),

/***/ "./src/app/components/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnswerComponent = /** @class */ (function () {
    function AnswerComponent() {
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.result = undefined;
        this.isSelected = false;
        this.isSelectable = true;
    }
    AnswerComponent.prototype.ngOnInit = function () { };
    AnswerComponent.prototype.onClick = function (event) {
        this.isSelected = true;
        this.clicked.emit(this.isSelected);
    };
    AnswerComponent.prototype.clearSelection = function () {
        this.isSelected = false;
    };
    AnswerComponent.prototype.calcStyle = function () {
        var style = {
            'padding-right': '24px'
        };
        if (this.isSelected) {
            style['border'] = '3px solid #3f51b5';
        }
        if (!this.isSelectable) {
            style['pointer-events'] = 'none';
        }
        if (this.result === true) {
            style['border'] = '3px solid green';
        }
        else if (this.result === false) {
            style['border'] = '3px solid red';
        }
        return style;
    };
    /**
     * @param correct correct answer string
     */
    AnswerComponent.prototype.processResult = function (correct) {
        this.result = this.text === correct;
        return this.result;
    };
    AnswerComponent.prototype.mute = function (isMuted) {
        this.isSelectable = !isMuted;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], AnswerComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], AnswerComponent.prototype, "num", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], AnswerComponent.prototype, "clicked", void 0);
    AnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-answer',
            template: __webpack_require__("./src/app/components/answer/answer.component.html"),
            styles: [__webpack_require__("./src/app/components/answer/answer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\r\n  <div class=\"col-lg-8 col-md-8\">\r\n    <mat-horizontal-stepper [linear]=\"isStepperLinear\" #stepper>\r\n      <ng-template matStepperIcon=\"done\"> </ng-template>\r\n      <ng-template matStepperIcon=\"edit\"> </ng-template>\r\n      <button mat-raised-button color=\"accent\"></button>\r\n      <mat-step *ngFor=\"let question of questions; let i = index\" editable=\"false\" label=\"\">\r\n        <app-question [question]=\"question\" [num]=\"i\" (next)=\"continueClicked(i)\" (restart)=\"restart()\"></app-question>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/game/game.component.scss":
/***/ (function(module, exports) {

module.exports = "/deep/ .mat-horizontal-stepper-header-container {\n  margin: auto; }\n\n/deep/ .mat-step-header {\n  pointer-events: none !important;\n  height: 30px;\n  padding: 0 24px !important; }\n\n/deep/ .mat-step-icon {\n  color: transparent !important;\n  height: 15px !important;\n  width: 15px !important; }\n\n/deep/ .mat-step-icon-not-touched {\n  color: transparent !important;\n  height: 15px !important;\n  width: 15px !important; }\n\n/deep/ .mat-stepper-horizontal-line {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = /** @class */ (function () {
    function GameComponent(data) {
        this.data = data;
        this.isStepperLinear = true;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getQuestions().subscribe(function (res) {
            _this.questions = res;
        });
    };
    /**
     * @param questionNum of current question.
     */
    GameComponent.prototype.continueClicked = function (questionNum) {
        this.stepper.next();
    };
    GameComponent.prototype.restart = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewChild */])('stepper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatStepper */])
    ], GameComponent.prototype, "stepper", void 0);
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/components/game/game.component.html"),
            styles: [__webpack_require__("./src/app/components/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* DataService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/material/my-stepper/step-header.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-step-header-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\"></div>\r\n<div [class.mat-step-icon]=\"state !== 'number' || selected\"\r\n     [class.mat-step-icon-not-touched]=\"state == 'number' && !selected\"\r\n     [ngSwitch]=\"state\">\r\n\r\n  <span *ngSwitchCase=\"'number'\">{{index + 1}}</span>\r\n\r\n  <ng-container *ngSwitchCase=\"'edit'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.edit)\">\r\n    <ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.edit\"></ng-container>\r\n    <mat-icon *ngSwitchDefault>create</mat-icon>\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"'done'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.done)\">\r\n    <ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.done\"></ng-container>\r\n    <mat-icon *ngSwitchDefault>done</mat-icon>\r\n  </ng-container>\r\n</div>\r\n<div class=\"mat-step-label\"\r\n     [class.mat-step-label-active]=\"active\"\r\n     [class.mat-step-label-selected]=\"selected\">\r\n  <!-- If there is a label template, use it. -->\r\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\r\n  </ng-container>\r\n  <!-- It there is no label template, fall back to the text label. -->\r\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\r\n\r\n  <div class=\"mat-step-optional\" *ngIf=\"optional\">{{_intl.optionalLabel}}</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/material/my-stepper/step-header.scss":
/***/ (function(module, exports) {

module.exports = ".mat-step-header {\n  overflow: hidden;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n.mat-step-optional {\n  font-size: 12px; }\n\n.mat-step-icon,\n.mat-step-icon-not-touched {\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.mat-step-icon .mat-icon {\n  font-size: 16px;\n  height: 16px;\n  width: 16px; }\n\n.mat-step-label {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 50px;\n  vertical-align: middle; }\n\n.mat-step-text-label {\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.mat-step-header-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n"

/***/ }),

/***/ "./src/app/components/material/my-stepper/step-header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatStepHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step_label__ = __webpack_require__("./src/app/components/material/my-stepper/step-label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stepper_intl__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-intl.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatStepHeader = /** @class */ (function () {
    function MatStepHeader(_intl, _focusMonitor, _element, changeDetectorRef) {
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
        this._intlSubscription = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatStepHeader.prototype, "index", {
        /** Index of the given step. */
        get: function () { return this._index; },
        set: function (value) { this._index = Object(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["d" /* coerceNumberProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "selected", {
        /** Whether the given step is selected. */
        get: function () { return this._selected; },
        set: function (value) { this._selected = Object(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "active", {
        /** Whether the given step label is active. */
        get: function () { return this._active; },
        set: function (value) { this._active = Object(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "optional", {
        /** Whether the given step is optional. */
        get: function () { return this._optional; },
        set: function (value) { this._optional = Object(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    MatStepHeader.prototype.ngOnDestroy = function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    /** Returns string label of given step if it is a text label. */
    MatStepHeader.prototype._stringLabel = function () {
        return this.label instanceof __WEBPACK_IMPORTED_MODULE_3__step_label__["a" /* MatStepLabel */] ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    MatStepHeader.prototype._templateLabel = function () {
        return this.label instanceof __WEBPACK_IMPORTED_MODULE_3__step_label__["a" /* MatStepLabel */] ? this.label : null;
    };
    /** Returns the host HTML element. */
    MatStepHeader.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], MatStepHeader.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], MatStepHeader.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], MatStepHeader.prototype, "iconOverrides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MatStepHeader.prototype, "index", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MatStepHeader.prototype, "selected", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MatStepHeader.prototype, "active", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MatStepHeader.prototype, "optional", null);
    MatStepHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            moduleId: module.i,
            // tslint:disable-next-line:component-selector
            selector: 'mat-step-header',
            template: __webpack_require__("./src/app/components/material/my-stepper/step-header.html"),
            styles: [__webpack_require__("./src/app/components/material/my-stepper/step-header.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                'class': 'mat-step-header',
                'role': 'tab',
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewEncapsulation */].None,
            preserveWhitespaces: false,
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__stepper_intl__["a" /* MatStepperIntl */],
            __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["f" /* FocusMonitor */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ChangeDetectorRef */]])
    ], MatStepHeader);
    return MatStepHeader;
}());



/***/ }),

/***/ "./src/app/components/material/my-stepper/step-label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatStepLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__ = __webpack_require__("./node_modules/@angular/cdk/esm5/stepper.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatStepLabel = /** @class */ (function (_super) {
    __extends(MatStepLabel, _super);
    function MatStepLabel(template) {
        return _super.call(this, template) || this;
    }
    MatStepLabel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: '[matStepLabel]',
        })
        // tslint:disable-next-line:directive-class-suffix
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* TemplateRef */]])
    ], MatStepLabel);
    return MatStepLabel;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__["b" /* CdkStepLabel */]));



/***/ }),

/***/ "./src/app/components/material/my-stepper/step.html":
/***/ (function(module, exports) {

module.exports = "<ng-template><ng-content></ng-content></ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matStepperAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Animations used by the Material steppers. */
var matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('stepTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('previous', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('current', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'none', visibility: 'visible' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('next', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
};


/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper-button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatStepperPrevious; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__ = __webpack_require__("./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepper__ = __webpack_require__("./src/app/components/material/my-stepper/stepper.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** Button that moves to the next step in a stepper workflow. */
var MatStepperNext = /** @class */ (function (_super) {
    __extends(MatStepperNext, _super);
    // tslint:disable-next-line:directive-class-suffix
    function MatStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperNext = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: 'button[matStepperNext]',
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(click)': '_stepper.next()',
                '[type]': 'type',
            },
            // tslint:disable-next-line:use-input-property-decorator
            inputs: ['type'],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__["c" /* CdkStepper */], useExisting: __WEBPACK_IMPORTED_MODULE_2__stepper__["c" /* MatStepper */] }]
        })
        // tslint:disable-next-line:directive-class-suffix
    ], MatStepperNext);
    return MatStepperNext;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__["e" /* CdkStepperNext */]));

/** Button that moves to the previous step in a stepper workflow. */
var MatStepperPrevious = /** @class */ (function (_super) {
    __extends(MatStepperPrevious, _super);
    // tslint:disable-next-line:directive-class-suffix
    function MatStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperPrevious = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: 'button[matStepperPrevious]',
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(click)': '_stepper.previous()',
                '[type]': 'type',
            },
            // tslint:disable-next-line:use-input-property-decorator
            inputs: ['type'],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__["c" /* CdkStepper */], useExisting: __WEBPACK_IMPORTED_MODULE_2__stepper__["c" /* MatStepper */] }]
        })
        // tslint:disable-next-line:directive-class-suffix
    ], MatStepperPrevious);
    return MatStepperPrevious;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_stepper__["f" /* CdkStepperPrevious */]));



/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper-horizontal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-horizontal-content-container\">\r\n  <div *ngFor=\"let step of _steps; let i = index\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\r\n    [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\"\r\n    [attr.aria-expanded]=\"selectedIndex === i\">\r\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"mat-horizontal-stepper-header-container\">\r\n  <ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\">\r\n    <mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\"\r\n      [tabIndex]=\"_focusIndex === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\"\r\n      [attr.aria-selected]=\"selectedIndex == i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\"\r\n      [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\"\r\n      [iconOverrides]=\"_iconOverrides\">\r\n    </mat-step-header>\r\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper-icon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatStepperIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Template to be used to override the icons inside the step header.
 */
var MatStepperIcon = /** @class */ (function () {
    function MatStepperIcon(templateRef) {
        this.templateRef = templateRef;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('matStepperIcon'),
        __metadata("design:type", String)
    ], MatStepperIcon.prototype, "name", void 0);
    MatStepperIcon = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: 'ng-template[matStepperIcon]',
        })
        // tslint:disable-next-line:directive-class-suffix
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* TemplateRef */]])
    ], MatStepperIcon);
    return MatStepperIcon;
}());



/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper-intl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatStepperIntl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Stepper data that is required for internationalization. */
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        /** Label that is rendered below optional steps. */
        // tslint:disable-next-line:no-inferrable-types
        this.optionalLabel = 'Optional';
    }
    MatStepperIntl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], MatStepperIntl);
    return MatStepperIntl;
}());



/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatStepperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__ = __webpack_require__("./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__step_header__ = __webpack_require__("./src/app/components/material/my-stepper/step-header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__step_label__ = __webpack_require__("./src/app/components/material/my-stepper/step-label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stepper_button__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stepper_intl__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-intl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stepper_icon__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-icon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stepper__ = __webpack_require__("./src/app/components/material/my-stepper/stepper.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
    MatStepperModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["j" /* MatCommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__["g" /* PortalModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["d" /* CdkStepperModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["s" /* MatRippleModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["j" /* MatCommonModule */],
                __WEBPACK_IMPORTED_MODULE_13__stepper__["a" /* MatHorizontalStepper */],
                __WEBPACK_IMPORTED_MODULE_13__stepper__["b" /* MatStep */],
                __WEBPACK_IMPORTED_MODULE_9__step_label__["a" /* MatStepLabel */],
                __WEBPACK_IMPORTED_MODULE_13__stepper__["c" /* MatStepper */],
                __WEBPACK_IMPORTED_MODULE_10__stepper_button__["a" /* MatStepperNext */],
                __WEBPACK_IMPORTED_MODULE_10__stepper_button__["b" /* MatStepperPrevious */],
                __WEBPACK_IMPORTED_MODULE_8__step_header__["a" /* MatStepHeader */],
                __WEBPACK_IMPORTED_MODULE_12__stepper_icon__["a" /* MatStepperIcon */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__stepper__["a" /* MatHorizontalStepper */],
                __WEBPACK_IMPORTED_MODULE_13__stepper__["b" /* MatStep */],
                __WEBPACK_IMPORTED_MODULE_9__step_label__["a" /* MatStepLabel */],
                __WEBPACK_IMPORTED_MODULE_13__stepper__["c" /* MatStepper */],
                __WEBPACK_IMPORTED_MODULE_10__stepper_button__["a" /* MatStepperNext */],
                __WEBPACK_IMPORTED_MODULE_10__stepper_button__["b" /* MatStepperPrevious */],
                __WEBPACK_IMPORTED_MODULE_8__step_header__["a" /* MatStepHeader */],
                __WEBPACK_IMPORTED_MODULE_12__stepper_icon__["a" /* MatStepperIcon */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__stepper_intl__["a" /* MatStepperIntl */], __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["d" /* ErrorStateMatcher */]],
        })
    ], MatStepperModule);
    return MatStepperModule;
}());



/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper.scss":
/***/ (function(module, exports) {

module.exports = ".mat-stepper-horizontal {\n  display: block; }\n\n.mat-horizontal-stepper-header-container {\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.mat-stepper-horizontal-line {\n  border-top-width: 1px;\n  border-top-style: solid;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  height: 0;\n  margin: 0 -16px;\n  min-width: 32px; }\n\n.mat-horizontal-stepper-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 72px;\n  overflow: hidden;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 24px; }\n\n.mat-horizontal-stepper-header .mat-step-icon,\n  .mat-horizontal-stepper-header .mat-step-icon-not-touched {\n    margin-right: 8px;\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none; }\n\n[dir='rtl'] .mat-horizontal-stepper-header .mat-step-icon, [dir='rtl']\n    .mat-horizontal-stepper-header .mat-step-icon-not-touched {\n      margin-right: 0;\n      margin-left: 8px; }\n\n.mat-horizontal-stepper-content {\n  overflow: hidden; }\n\n.mat-horizontal-stepper-content[aria-expanded='false'] {\n    height: 0; }\n\n.mat-horizontal-content-container {\n  overflow: hidden;\n  padding: 0 24px 24px 24px; }\n"

/***/ }),

/***/ "./src/app/components/material/my-stepper/stepper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _MatStep */
/* unused harmony export _MatStepper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatHorizontalStepper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_stepper__ = __webpack_require__("./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step_header__ = __webpack_require__("./src/app/components/material/my-stepper/step-header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step_label__ = __webpack_require__("./src/app/components/material/my-stepper/step-label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stepper_animations__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stepper_icon__ = __webpack_require__("./src/app/components/material/my-stepper/stepper-icon.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/** Workaround for https://github.com/angular/angular/issues/17849 */
var _MatStep = __WEBPACK_IMPORTED_MODULE_0__angular_cdk_stepper__["a" /* CdkStep */];
var _MatStepper = __WEBPACK_IMPORTED_MODULE_0__angular_cdk_stepper__["c" /* CdkStepper */];
var MatStep = /** @class */ (function (_super) {
    __extends(MatStep, _super);
    function MatStep(stepper, _errorStateMatcher) {
        var _this = _super.call(this, stepper) || this;
        _this._errorStateMatcher = _errorStateMatcher;
        return _this;
    }
    MatStep_1 = MatStep;
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    MatStep.prototype.isErrorState = function (control, form) {
        var originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        var customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_4__step_label__["a" /* MatStepLabel */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__step_label__["a" /* MatStepLabel */])
    ], MatStep.prototype, "stepLabel", void 0);
    MatStep = MatStep_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            moduleId: module.i,
            // tslint:disable-next-line:component-selector
            selector: 'mat-step',
            template: __webpack_require__("./src/app/components/material/my-stepper/step.html"),
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["d" /* ErrorStateMatcher */], useExisting: MatStep_1 }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewEncapsulation */].None,
            exportAs: 'matStep',
            preserveWhitespaces: false,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* forwardRef */])(function () { return MatStepper; }))),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* SkipSelf */])()),
        __metadata("design:paramtypes", [MatStepper,
            __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["d" /* ErrorStateMatcher */]])
    ], MatStep);
    return MatStep;
    var MatStep_1;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_stepper__["a" /* CdkStep */]));

var MatStepper = /** @class */ (function (_super) {
    __extends(MatStepper, _super);
    function MatStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Consumer-specified template-refs to be used to override the header icons. */
        _this._iconOverrides = {};
        return _this;
    }
    MatStepper.prototype.ngAfterContentInit = function () {
        var _this = this;
        var icons = this._icons.toArray();
        var editOverride = icons.find(function (icon) { return icon.name === 'edit'; });
        var doneOverride = icons.find(function (icon) { return icon.name === 'done'; });
        if (editOverride) {
            this._iconOverrides.edit = editOverride.templateRef;
        }
        if (doneOverride) {
            this._iconOverrides.done = doneOverride.templateRef;
        }
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_takeUntil__["a" /* takeUntil */])(this._destroyed)).subscribe(function () { return _this._stateChanged(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__step_header__["a" /* MatStepHeader */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* QueryList */])
    ], MatStepper.prototype, "_stepHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ContentChildren */])(MatStep),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* QueryList */])
    ], MatStepper.prototype, "_steps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_7__stepper_icon__["a" /* MatStepperIcon */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* QueryList */])
    ], MatStepper.prototype, "_icons", void 0);
    MatStepper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: '[matStepper]'
        })
        // tslint:disable-next-line:directive-class-suffix
    ], MatStepper);
    return MatStepper;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_stepper__["c" /* CdkStepper */]));

var MatHorizontalStepper = /** @class */ (function (_super) {
    __extends(MatHorizontalStepper, _super);
    // tslint:disable-next-line:component-class-suffix
    function MatHorizontalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHorizontalStepper_1 = MatHorizontalStepper;
    MatHorizontalStepper = MatHorizontalStepper_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            moduleId: module.i,
            // tslint:disable-next-line:component-selector
            selector: 'mat-horizontal-stepper',
            exportAs: 'matHorizontalStepper',
            template: __webpack_require__("./src/app/components/material/my-stepper/stepper-horizontal.html"),
            styles: [__webpack_require__("./src/app/components/material/my-stepper/stepper.scss")],
            // tslint:disable-next-line:use-input-property-decorator
            inputs: ['selectedIndex'],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                'class': 'mat-stepper-horizontal',
                'aria-orientation': 'horizontal',
                'role': 'tablist',
            },
            animations: [__WEBPACK_IMPORTED_MODULE_6__stepper_animations__["a" /* matStepperAnimations */].horizontalStepTransition],
            providers: [{ provide: MatStepper, useExisting: MatHorizontalStepper_1 }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewEncapsulation */].None,
            preserveWhitespaces: false,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
        })
        // tslint:disable-next-line:component-class-suffix
    ], MatHorizontalStepper);
    return MatHorizontalStepper;
    var MatHorizontalStepper_1;
}(MatStepper));



/***/ }),

/***/ "./src/app/components/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question-container\">\r\n  <div class=\"row justify-content-md-center text-row\">\r\n    <div class=\"col-md-12\">\r\n      <span class=\"highlighted\">Q:{{ num + 1 }} </span>{{ question.question | fixQuotes }}\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <mat-grid-list cols=\"2\" gutterSize=\"10\" rowHeight=\"8em\">\r\n        <mat-grid-tile *ngFor=\"let answer of ans; let i = index\" colspan=\"1\" rowspan=\"1\">\r\n          <app-answer [text]=\"answer\" [num]=\"i\" (clicked)=\"answerClicked($event, i)\"></app-answer>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-md-center button-row\" style=\"margin-top: 10px\">\r\n    <div class=\"col-md-6\">\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!isCheckable\" (click)=\"buttonClicked()\">{{ determineButtonText() }}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/question/question.component.scss":
/***/ (function(module, exports) {

module.exports = ".highlighted {\n  color: #3f51b5;\n  font-size: 120%;\n  font-weight: bolder; }\n\n/deep/ .mat-figure {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.mat-raised-button {\n  background-color: #FF8F48 !important;\n  width: 100%;\n  border-radius: 25px;\n  height: 50px; }\n\n/deep/ .mat-raised-button:hover {\n  background-color: #F68034 !important; }\n\n.center-text {\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: auto; }\n\n/deep/ .mat-horizontal-content-container {\n  min-height: 26rem !important;\n  max-height: 26rem !important; }\n\n.text-row {\n  min-height: 5rem;\n  max-height: 5rem;\n  text-align: center; }\n\n.question-container {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/components/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_array_service__ = __webpack_require__("./src/app/services/array.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_answer_component__ = __webpack_require__("./src/app/components/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(arrays) {
        this.arrays = arrays;
        this.next = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.restart = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.isCheckable = false;
        this.isSubmitted = false;
        this.isCorrect = undefined;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.ans = this.arrays.shuffle([this.question.correct_answer].concat(this.question.incorrect_answers));
    };
    /**
     * @param event
     * @param i number of answer.
     */
    QuestionComponent.prototype.answerClicked = function (event, i) {
        var a = this.answers.toArray();
        for (var j = 0; j < a.length; j++) {
            if (i !== j) {
                a[j].clearSelection();
            }
        }
        this.isCheckable = true;
        this.submittedAnswer = i;
    };
    QuestionComponent.prototype.buttonClicked = function () {
        if (this.isSubmitted) {
            (this.isCorrect ? this.next : this.restart).emit();
        }
        if (this.isCheckable && !this.isSubmitted) {
            this.isSubmitted = true;
            this.answers.forEach(function (a) { return a.mute(true); });
            this.isCorrect = this.checkAnswer();
        }
    };
    QuestionComponent.prototype.checkAnswer = function () {
        return this.answers.toArray()[this.submittedAnswer].processResult(this.question.correct_answer);
    };
    QuestionComponent.prototype.determineButtonText = function () {
        return !this.isSubmitted ? 'OK' : this.isCorrect ? 'CONTINUE' : 'RESTART';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], QuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], QuestionComponent.prototype, "num", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */])
    ], QuestionComponent.prototype, "next", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */])
    ], QuestionComponent.prototype, "restart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__answer_answer_component__["a" /* AnswerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* QueryList */])
    ], QuestionComponent.prototype, "answers", void 0);
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("./src/app/components/question/question.component.html"),
            styles: [__webpack_require__("./src/app/components/question/question.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_array_service__["a" /* ArrayService */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/pipes/string.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixQuotesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixQuotesPipe = /** @class */ (function () {
    function FixQuotesPipe() {
    }
    FixQuotesPipe.prototype.transform = function (value) {
        if (!value || !value.length) {
            return '';
        }
        return value.replace(/&#039;/g, '\'').replace(/&quot;/g, '\"');
    };
    FixQuotesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
            name: 'fixQuotes'
        })
    ], FixQuotesPipe);
    return FixQuotesPipe;
}());



/***/ }),

/***/ "./src/app/services/array.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrayService = /** @class */ (function () {
    function ArrayService() {
    }
    ArrayService.prototype.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    ArrayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ArrayService);
    return ArrayService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getQuestions = function (options) {
        return this.http
            .get("https://opentdb.com/api.php?amount=10&type=multiple")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* retry */])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (data) { return data.results; }));
    };
    DataService.prototype.handleError = function (err) {
        console.error(err);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map