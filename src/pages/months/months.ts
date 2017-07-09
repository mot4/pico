import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Record } from '../../app/services/record'
import { RecordProvider } from "../../providers/record/record";
import { Moment } from "moment/moment";
import * as moment from 'moment';

/**
 * Generated class for the MonthsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-months',
  templateUrl: 'months.html',
})
export class MonthsPage {

  title: Moment
  records: Array<Record>

  constructor(public navCtrl: NavController, public recordProvider: RecordProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter months')
    this.recordProvider.loadRecordsForSelectedYear().then((v) => {
      this.records = v
    })

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
      this.title = moment()
    } else {
      this.title = this.records[0].time
    }
  }

  goToDaysPage(clickedMonthTime: Moment) {
    // var thisMonth = Array<Record>()

    // this.records.forEach(record => {
    //   if (this.recordProvider.sameMonth(record.time, clickedMonthTime)) {
    //     thisMonth.push(record)
    //   }
    // });

    // this.navCtrl.push("DaysPage", { records: thisMonth })
    this.recordProvider.setSelectedTime(clickedMonthTime)
    this.navCtrl.push("DaysPage")
  }

}
