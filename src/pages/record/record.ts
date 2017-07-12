import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Record } from '../../app/services/record'
import { RecordType } from "../../app/services/record-type";
import { RecordProvider } from "../../providers/record/record";
import * as moment from 'moment';
import { Moment } from "moment";

/**
 * Generated class for the RecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  @ViewChild(List) slidingItems: List;

  title: Moment
  records: Array<Record>;
  _datePickerModel: any

  constructor(public navCtrl: NavController, public recordProvider: RecordProvider) {
  }

  ionViewWillEnter() {
    this.recordProvider.loadRecordsForSelectedDay().then((v) => {
      return this.records = v;
    }).then((records) => {
      if (records == undefined || records.length == 0) {
        this.title = moment().utc()
      } else {
        this.title = records[0].time
      }
    })
  }

  deleteRecord(record) {
    this.records.splice(this.records.indexOf(record), 1)
    this.recordProvider.deleteRecord(record)
  }

  dateChanged(record: Record, date) {
    const { day, month, year, hour, minute, second } = date
    console.log(date)
    var dateToSave = moment().date(day).month(month).year(year).hour(hour).minute(minute).second(second)

    this.records[this.records.indexOf(record)].time = dateToSave //fixme what wenn moved to another date?
    // console.log(test.toISOString())
    // this.recordProvider.updateRecord(record, t, this.records)
    this.recordProvider.updateRecord(record, date)

    this.slidingItems.closeSlidingItems()
  }

  getNameForType(type: RecordType): string {

    var iconName: string

    switch (type) {
      case RecordType.ENTRY:
        iconName = 'log-in'
        break;
      case RecordType.DEPARTURE:
        iconName = 'log-out'
        break;

      default:
        break;
    }

    return iconName;
  }

}
