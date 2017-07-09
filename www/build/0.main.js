webpackJsonp([0],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__years__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearsPageModule", function() { return YearsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var YearsPageModule = (function () {
    function YearsPageModule() {
    }
    return YearsPageModule;
}());
YearsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__years__["a" /* YearsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__years__["a" /* YearsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__years__["a" /* YearsPage */]
        ]
    })
], YearsPageModule);

//# sourceMappingURL=years.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_record_record__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearsPage; });
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
 * Generated class for the YearsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var YearsPage = (function () {
    function YearsPage(navCtrl, navParams, recordProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recordProvider = recordProvider;
        console.log('constructor years');
    }
    YearsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter years');
        this.recordProvider.loadTimes().then(function (v) {
            _this.records = JSON.parse(v);
            console.log(_this.records.length);
        });
        // this.records = this.data.loadDummyTimes()
    };
    YearsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad years');
        this.recordProvider.hasRecords().then(function (has) {
            console.log('check hasRecords');
            if (has) {
                _this.navCtrl.insertPages(1, [{ page: "MonthsPage" }, { page: "DaysPage" }, { page: "RecordPage" }]);
            }
        });
    };
    YearsPage.prototype.goToMonthsPage = function (clickedYearTime) {
        // var thisYear = Array<Record>()
        // this.records.forEach(record => {
        //   if (this.recordProvider.sameYear(record.time, clickedYearTime)) {
        //     thisYear.push(record)
        //   }
        // });
        // this.navCtrl.push("MonthsPage", { records: thisYear })
        this.recordProvider.setSelectedTime(clickedYearTime);
        this.navCtrl.push("MonthsPage");
    };
    return YearsPage;
}());
YearsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-years',template:/*ion-inline-start:"/Users/Mota/ionic_apps/pico/src/pages/years/years.html"*/'<!--\n  Generated template for the YearsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Years</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let record of records | unique:\'year\'" (click)="goToMonthsPage(record.time)">\n      {{ record.time | date:\'y\' }}\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/Mota/ionic_apps/pico/src/pages/years/years.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_record_record__["a" /* RecordProvider */]])
], YearsPage);

//# sourceMappingURL=years.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map