import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Record } from '../../app/services/record'
import { RecordType } from "../../app/services/record-type";
import { RecordProvider } from "../../providers/record/record";
import * as moment from 'moment';

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

  titleFormat = "D MMMM"
  title: String
  records: Array<Record>;
  _datePickerModel: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public recordProvider: RecordProvider) {
    this.records = navParams.get('records')
  }

  ionViewWillEnter() {
    this.recordProvider.loadRecordsForSelectedDay().then((v) => {
      this.records = v;
    })
    // this.loadRecords()

    this.setTitle()

  }

  setTitle() {
    if (!this.records || this.records.length == 0) {
      this.title = moment().format(this.titleFormat)
    } else {
      this.title = moment(this.records[0].time).format(this.titleFormat)
    }
  }

  loadRecords() {
    if (this.navParams.get('records') == undefined || this.navParams.get('records') == null) {
      // no day selected, show today records
      this.recordProvider.loadTodayTimes().then((v) => {
        this.records = v
      })
    }
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
