webpackJsonp([3],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__months__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthsPageModule", function() { return MonthsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MonthsPageModule = (function () {
    function MonthsPageModule() {
    }
    return MonthsPageModule;
}());
MonthsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__months__["a" /* MonthsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__months__["a" /* MonthsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__months__["a" /* MonthsPage */]
        ]
    })
], MonthsPageModule);

//# sourceMappingURL=months.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_record_record__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthsPage; });
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
 * Generated class for the MonthsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MonthsPage = (function () {
    function MonthsPage(navCtrl, recordProvider) {
        this.navCtrl = navCtrl;
        this.recordProvider = recordProvider;
    }
    MonthsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter months');
        this.recordProvider.loadRecordsForSelectedYear().then(function (v) {
            _this.records = v;
        });
        // if (this.navParams.get('records') == undefined || this.navParams.get('records') == null) {
        //   this.records = new Array<Record>()
        //   this.recordProvider.loadTimes().then((v) => {
        //     JSON.parse(v).forEach(d => {
        //       if (this.recordProvider.isThisYear(d.time)) {
        //         this.records.push(d)
        //       }
        //     });
        //   })
        // }
        if (this.records == undefined || this.records.length == 0) {
            this.title = __WEBPACK_IMPORTED_MODULE_3_moment__();
        }
        else {
            this.title = this.records[0].time;
        }
    };
    MonthsPage.prototype.goToDaysPage = function (clickedMonthTime) {
        // var thisMonth = Array<Record>()
        // this.records.forEach(record => {
        //   if (this.recordProvider.sameMonth(record.time, clickedMonthTime)) {
        //     thisMonth.push(record)
        //   }
        // });
        // this.navCtrl.push("DaysPage", { records: thisMonth })
        this.recordProvider.setSelectedTime(clickedMonthTime);
        this.navCtrl.push("DaysPage");
    };
    return MonthsPage;
}());
MonthsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-months',template:/*ion-inline-start:"/Users/Mota/ionic_apps/pico/src/pages/months/months.html"*/'<!--\n  Generated template for the MonthsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title | date:\'y\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let record of records | unique:\'month\'" (click)="goToDaysPage(record.time)">\n      {{ record.time | date:\'MMMM\' }}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mota/ionic_apps/pico/src/pages/months/months.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_record_record__["a" /* RecordProvider */]])
], MonthsPage);

//# sourceMappingURL=months.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map