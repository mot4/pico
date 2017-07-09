import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Record } from '../../app/services/record'
import { RecordProvider } from "../../providers/record/record";
import { Moment } from "moment/moment";

/**
 * Generated class for the YearsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-years',
  templateUrl: 'years.html',
})
export class YearsPage {

  records: Array<Record>

  constructor(public navCtrl: NavController, public navParams: NavParams, public recordProvider: RecordProvider) {
    console.log('constructor years')
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter years')
    this.recordProvider.loadTimes().then((v) => {
      this.records = v
    })
    // this.records = this.data.loadDummyTimes()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad years')
    this.recordProvider.hasRecords().then((has) => {

      console.log('check hasRecords -> ' + has)
      if (has) {
        this.navCtrl.insertPages(1, [{ page: "MonthsPage" }, { page: "DaysPage" }, { page: "RecordPage" }])
      }
    })
  }



  goToMonthsPage(clickedYearTime: Moment) {

    // var thisYear = Array<Record>()

    // this.records.forEach(record => {
    //   if (this.recordProvider.sameYear(record.time, clickedYearTime)) {
    //     thisYear.push(record)
    //   }
    // });
    // this.navCtrl.push("MonthsPage", { records: thisYear })
    this.recordProvider.setSelectedTime(clickedYearTime)
    this.navCtrl.push("MonthsPage")
  }

}
