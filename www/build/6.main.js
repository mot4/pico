webpackJsonp([6],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__days__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysPageModule", function() { return DaysPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DaysPageModule = (function () {
    function DaysPageModule() {
    }
    return DaysPageModule;
}());
DaysPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__days__["a" /* DaysPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__days__["a" /* DaysPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__days__["a" /* DaysPage */]
        ]
    })
], DaysPageModule);

//# sourceMappingURL=days.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_record_record__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaysPage; });
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
 * Generated class for the DaysPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DaysPage = (function () {
    function DaysPage(navCtrl, recordProvider) {
        this.navCtrl = navCtrl;
        this.recordProvider = recordProvider;
    }
    DaysPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter days');
        this.recordProvider.loadRecordsForSelectedMonth().then(function (v) {
            _this.records = v;
        });
        // if (this.navParams.get('records') == undefined || this.navParams.get('records') == null) {
        //   this.records = new Array<Record>()
        //   this.recordProvider.loadTimes().then((v) => {
        //     JSON.parse(v).forEach(d => {
        //       if (this.recordProvider.isThisMonth(d.time)) {
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
    DaysPage.prototype.goToRecordPage = function (clickedTime) {
        // var thisDay = Array<Record>()
        // this.records.forEach(record => {
        //   if (this.recordProvider.sameDay(record.time, clickedTime)) {
        //     thisDay.push(record)
        //   }
        // });
        // this.navCtrl.push('RecordPage', { records: thisDay })
        this.recordProvider.setSelectedTime(clickedTime);
        this.navCtrl.push("RecordPage");
    };
    return DaysPage;
}());
DaysPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-days',template:/*ion-inline-start:"/Users/Mota/ionic_apps/pico/src/pages/days/days.html"*/'<!--\n  Generated template for the DaysPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title | date:\'MMMM\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let record of records | unique:\'day\'" (click)="goToRecordPage(record.time)">\n      {{ record.time | date:\'d\' }}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mota/ionic_apps/pico/src/pages/days/days.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_record_record__["a" /* RecordProvider */]])
], DaysPage);

//# sourceMappingURL=days.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map