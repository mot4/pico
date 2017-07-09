webpackJsonp([4],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_record_type__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_record_record__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, recordProvider) {
        this.navCtrl = navCtrl;
        this.recordProvider = recordProvider;
        this.messageTimeout = 1000;
        this.showEntrada = true;
        // recordProvider.reset()
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        // this.records = this.recordProvider.loadDummyTimes()
        // this.showCorrectButton(this.records)
        var _this = this;
        this.recordProvider.loadTodayTimes().then(function (records) {
            console.log('loaded -> ' + records);
            return _this.records = records;
        }).then(function (records) {
            _this.showCorrectButton(records);
        });
    };
    HomePage.prototype.showCorrectButton = function (records) {
        console.log('showCorrectButton');
        if (records != undefined && records != null && records.length != 0) {
            var lastRecord = records[records.length - 1];
            if (lastRecord.type == __WEBPACK_IMPORTED_MODULE_2__app_services_record_type__["a" /* RecordType */].ENTRY) {
                this.showEntrada = false;
                this.showSalida = true;
            }
            else if (lastRecord.type == __WEBPACK_IMPORTED_MODULE_2__app_services_record_type__["a" /* RecordType */].DEPARTURE) {
                this.showEntrada = true;
                this.showSalida = false;
            }
        }
    };
    HomePage.prototype.picarEntrada = function () {
        this.pica(__WEBPACK_IMPORTED_MODULE_2__app_services_record_type__["a" /* RecordType */].ENTRY, __WEBPACK_IMPORTED_MODULE_4_moment__());
        this.showEntradaMessage();
    };
    HomePage.prototype.picarSalida = function () {
        this.pica(__WEBPACK_IMPORTED_MODULE_2__app_services_record_type__["a" /* RecordType */].DEPARTURE, __WEBPACK_IMPORTED_MODULE_4_moment__());
        this.showSalidaMessage();
    };
    HomePage.prototype.showEntradaMessage = function () {
        var _this = this;
        this.showEntrada = false;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showSalida = true;
            _this.showSuccess = false;
        }, this.messageTimeout);
    };
    HomePage.prototype.showSalidaMessage = function () {
        var _this = this;
        this.showSalida = false;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showEntrada = true;
            _this.showSuccess = false;
        }, this.messageTimeout);
    };
    HomePage.prototype.pica = function (type, time) {
        this.recordProvider.addTime(time, type);
    };
    HomePage.prototype.now = function () {
        return new Date();
    };
    HomePage.prototype.getNameForType = function (type) {
        var iconName;
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_2__app_services_record_type__["a" /* RecordType */].ENTRY:
                iconName = 'log-in';
                break;
            case __WEBPACK_IMPORTED_MODULE_2__app_services_record_type__["a" /* RecordType */].DEPARTURE:
                iconName = 'log-out';
                break;
            default:
                break;
        }
        return iconName;
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Mota/ionic_apps/pico/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Pico!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <div padding-top *ngIf="showEntrada">\n    <button ion-button round large icon-left (click)="picarEntrada()">\n        <ion-icon name="log-in"></ion-icon>\n        Entrada\n    </button>\n  </div>\n  <div padding-top *ngIf="showSalida">\n    <button ion-button round large icon-left (click)="picarSalida()">\n      <ion-icon name="log-out"></ion-icon>\n      Salida\n    </button>\n  </div>\n\n  <ion-icon *ngIf="showSuccess" name="checkmark-circle" class="record-check" padding-top></ion-icon>\n\n  <ion-list class="block-top">\n    <h1>Today</h1>\n    <ion-item *ngFor="let record of records">\n      <ion-icon name="{{getNameForType(record.type)}}" item-left></ion-icon>\n      {{record.time | date:\'H:mm:ss\'}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Mota/ionic_apps/pico/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_record_record__["a" /* RecordProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_record_record__["a" /* RecordProvider */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map