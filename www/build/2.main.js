webpackJsonp([2],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPageModule", function() { return RecordPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecordPageModule = (function () {
    function RecordPageModule() {
    }
    return RecordPageModule;
}());
RecordPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */]
        ]
    })
], RecordPageModule);

//# sourceMappingURL=record.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_record_type__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_record_record__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordPage; });
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
 * Generated class for the RecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RecordPage = (function () {
    function RecordPage(navCtrl, navParams, recordProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recordProvider = recordProvider;
        this.titleFormat = "D MMMM";
        this.records = navParams.get('records');
    }
    RecordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.recordProvider.loadRecordsForSelectedDay().then(function (v) {
            _this.records = v;
        });
        // this.loadRecords()
        this.setTitle();
    };
    RecordPage.prototype.setTitle = function () {
        if (!this.records || this.records.length == 0) {
            this.title = __WEBPACK_IMPORTED_MODULE_4_moment__().format(this.titleFormat);
        }
        else {
            this.title = __WEBPACK_IMPORTED_MODULE_4_moment__(this.records[0].time).format(this.titleFormat);
        }
    };
    RecordPage.prototype.loadRecords = function () {
        var _this = this;
        if (this.navParams.get('records') == undefined || this.navParams.get('records') == null) {
            // no day selected, show today records
            this.recordProvider.loadTodayTimes().then(function (v) {
                _this.records = v;
            });
        }
    };
    RecordPage.prototype.dateChanged = function (record, date) {
        var day = date.day, month = date.month, year = date.year, hour = date.hour, minute = date.minute, second = date.second;
        console.log(date);
        var dateToSave = __WEBPACK_IMPORTED_MODULE_4_moment__().date(day).month(month).year(year).hour(hour).minute(minute).second(second);
        this.records[this.records.indexOf(record)].time = dateToSave; //fixme what wenn moved to another date?
        // console.log(test.toISOString())
        // this.recordProvider.updateRecord(record, t, this.records)
        this.recordProvider.updateRecord(record, date);
        this.slidingItems.closeSlidingItems();
    };
    RecordPage.prototype.getNameForType = function (type) {
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
    return RecordPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* List */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* List */])
], RecordPage.prototype, "slidingItems", void 0);
RecordPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-record',template:/*ion-inline-start:"/Users/Mota/ionic_apps/pico/src/pages/record/record.html"*/'<!--\n  Generated template for the RecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let record of records">\n      <ion-item>\n        <ion-icon name="{{getNameForType(record.type)}}" item-left></ion-icon>\n        {{record.time | date:\'hh:mm:ss\'}}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteRecord(record)">\n          <ion-icon name="trash" class="no-text"></ion-icon>\n        </button>\n        <button ion-button color="light" (click)="datePicker.open()">\n          <ion-icon name="create" class="no-text"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item no-lines hidden="true">\n        <ion-datetime #datePicker text-center (ionChange)="dateChanged(record, $event)" [(ngModel)]="record.datePickerModel" pickerFormat="YY DDD D MMM HH:mm:ss"></ion-datetime>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Mota/ionic_apps/pico/src/pages/record/record.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_record_record__["a" /* RecordProvider */]])
], RecordPage);

//# sourceMappingURL=record.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map