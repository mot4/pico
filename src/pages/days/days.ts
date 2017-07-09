import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Record } from '../../app/services/record'
import { RecordProvider } from "../../providers/record/record";
import { Moment } from "moment/moment";
import * as moment from 'moment';

/**
 * Generated class for the DaysPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-days',
  templateUrl: 'days.html',
})
export class DaysPage {

  title: Moment
  records: Array<Record>

  constructor(public navCtrl: NavController, public recordProvider: RecordProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter days')
    this.recordProvider.loadRecordsForSelectedMonth().then((v) => {
      return this.records = v
    }).then((records) => {
      if (records == undefined || records.length == 0) {
        this.title = moment()
      } else {
        this.title = records[0].time
      }
    })
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
  }

  goToRecordPage(clickedTime: Moment) {

    // var thisDay = Array<Record>()

    // this.records.forEach(record => {
    //   if (this.recordProvider.sameDay(record.time, clickedTime)) {
    //     thisDay.push(record)
    //   }
    // });

    // this.navCtrl.push('RecordPage', { records: thisDay })
    this.recordProvider.setSelectedTime(clickedTime)
    this.navCtrl.push("RecordPage")
  }

}
