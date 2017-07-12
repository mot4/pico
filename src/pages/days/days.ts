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
        this.title = moment().utc()
      } else {
        this.title = records[0].time
      }
    })
  }

  goToRecordPage(clickedTime: Moment) {
    this.recordProvider.setSelectedTime(clickedTime)
    this.navCtrl.push("RecordPage")
  }

}
