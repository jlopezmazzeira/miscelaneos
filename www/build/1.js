webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduccionPageModule", function() { return IntroduccionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduccion__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroduccionPageModule = /** @class */ (function () {
    function IntroduccionPageModule() {
    }
    IntroduccionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__introduccion__["a" /* IntroduccionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__introduccion__["a" /* IntroduccionPage */]),
            ],
        })
    ], IntroduccionPageModule);
    return IntroduccionPageModule;
}());

//# sourceMappingURL=introduccion.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroduccionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ajustes_ajustes__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroduccionPage = /** @class */ (function () {
    function IntroduccionPage(navCtrl, _ajustes) {
        this.navCtrl = navCtrl;
        this._ajustes = _ajustes;
        this.slides = [
            {
                title: "Bienvenido!!!",
                description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "¿Qué es ionic?",
                description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "¿Que hace esta app?",
                description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    IntroduccionPage.prototype.saltar_tutorial = function () {
        this._ajustes.ajustes.mostrar_tutorial = false;
        this._ajustes.guardar_storage();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    IntroduccionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introduccion',template:/*ion-inline-start:"/var/www/html/miscelaneos/src/pages/introduccion/introduccion.html"*/'<ion-content padding>\n\n  <ion-slides pager>\n\n    <!-- Código para crear slides -->\n      <ion-slide *ngFor="let slide of slides">\n        <ion-toolbar>\n\n          <ion-buttons end>\n            <button ion-button color="primary"\n                    (click)="saltar_tutorial()">Saltar</button>\n          </ion-buttons>\n\n        </ion-toolbar>\n\n        <img [src]="slide.image" class="slide-image"/>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n      <!-- Fin del ngFor -->\n\n      <!-- Ultimo Slide -->\n      <ion-slide>\n        <ion-toolbar>\n        </ion-toolbar>\n\n        <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n        <h2 class="slide-title">¿Listo para empezar?</h2>\n\n        <button ion-button large clear icon-right color="primary"\n                (click)="saltar_tutorial()">\n          Continuar\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n\n      </ion-slide>\n      <!-- Fin del último slide -->\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/var/www/html/miscelaneos/src/pages/introduccion/introduccion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_ajustes_ajustes__["a" /* AjustesProvider */]])
    ], IntroduccionPage);
    return IntroduccionPage;
}());

//# sourceMappingURL=introduccion.js.map

/***/ })

});
//# sourceMappingURL=1.js.map