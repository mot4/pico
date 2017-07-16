import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Record } from '../../app/services/record'
import { RecordType } from '../../app/services/record-type'
import * as moment from 'moment';
import { Moment } from "moment";
import { LoadType } from "./load-type";

/*
  Generated class for the RecordProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecordProvider {

  records: Array<Record>;
  storageKey: string = "times"
  selectedTime: Moment // default value "today" set in tabs.ts

  constructor(private storage: Storage) {
    console.log('Hello RecordProvider Provider');
    this.records = new Array<Record>()
  }



  /* -- new idea -- 

  getSelectedTime {
    if selectedTime == undefined selectedTime = today

    return selectedTime
  }

  no params -> load today -> set this.selectedTime

  go back to days <- --> getSelectedTime.getMonth

  go back to months <- --> getSelectedTime.getYear

  go back to years <- --> get all (load times)

  go forward ->> getSelectedTime.setYear / month / day

  ionwillenterview: loadTimesOfSelectedTime load each time? is so sloooow!!

*/
  getSelectedTime(): Moment {
    if (this.selectedTime == undefined) return moment().utc()

    return this.selectedTime
  }

  setSelectedTime(time: Moment) {
    this.selectedTime = time
  }

  loadRecordsForSelectedYear(): Promise<Array<Record>> {
    return this.loadRecordsForSelected(LoadType.YEAR)
  }

  loadRecordsForSelectedMonth(): Promise<Array<Record>> {
    return this.loadRecordsForSelected(LoadType.MONTH)
  }

  loadRecordsForSelectedDay(): Promise<Array<Record>> {
    return this.loadRecordsForSelected(LoadType.DAY)
  }

  private loadRecordsForSelected(loadType: LoadType): Promise<Array<Record>> {
    return this.loadTimes().then((val: any) => {
      var items = []
      if (val != undefined && val != null) {
        switch (loadType) {
          case LoadType.YEAR:
            val.forEach(record => {
              if (this.sameYear(record.time, this.selectedTime)) {
                items.push(record)
              }
            });
            break;
          case LoadType.MONTH:
            val.forEach(record => {
              if (this.sameMonth(record.time, this.selectedTime)) {
                items.push(record)
              }
            });
            break;
          case LoadType.DAY:
            val.forEach(record => {
              if (this.sameDay(record.time, this.selectedTime)) {
                items.push(record)
              }
            });
            break;
          default:
            throw "loadType not found!!"
        }
      }
      return items
    })
  }

  loadDummyTimes() {

    var records = new Array<Record>()

    for (var month = 1; month <= 5; month++) {
      for (var day = 1; day <= 29; day++) {
        var t = moment().utc().year(2017).month(month).date(day).hour(month).minute(month).second(day)
        records.push(new Record(RecordType.ENTRY, t))
        records.push(new Record(RecordType.DEPARTURE, t.month(t.month() + 5)))
      }
    }
    return records
  }

  loadTodayTimes(): Promise<Array<Record>> {
    // this.saveRecords(this.loadDummyTimes())

    return this.loadTimes().then((val: any) => {
      var items = []
      if (val != undefined && val != null) {
        val.forEach(record => {
          if (this.isToday(record.time)) items.push(record)
        });
      }
      return items
    })
  }

  addTime(time: Moment, type: RecordType) {
    this.records.push(new Record(type, time))
    this.saveRecords(this.records)
  }

  private saveRecords(records: Array<Record>) {
    this.storage.set(this.storageKey, this.serialize(records))
  }

  loadTimes(): Promise<any> {
    return new Promise((resolve, reject) => {

      // to load dummy data
      // resolve(this.loadDummyTimes())

      this.storage.get(this.storageKey).then((times) => {
        if (times != null) {
          this.records = this.deserialize(times)
        }
        resolve(this.records)
      }).catch((c) => {
        reject(c)
      })

    })
  }


  serialize(collection) {
    const RE_ISO_DATE = /\d{4}-[01]\d-[0-3]\dT?[0-2]\d:[0-5]\d(?::[0-5]\d(?:.\d{1,6})?)?(?:([+-])([0-2]\d):?([0-5]\d)|Z)/

    return JSON.stringify(collection, function (k, v) {
      if (typeof v === 'string' && v.match(RE_ISO_DATE)) {
        return 'moment:' + moment.utc(v).valueOf()
      }
      return v
    })
  }
  deserialize(serializedData) {
    return JSON.parse(serializedData, function (k, v) {
      if (typeof v === 'string' && v.includes('moment:')) {
        return moment.utc(parseInt(v.split(':')[1], 10))
      }
      return v
    })
  }

  deleteRecord(record: Record): Array<Record> {
    this.records.splice(this.records.indexOf(record), 1)
    this.saveRecords(this.records)
    return this.records
  }

  updateRecord(record: Record, date: Moment) {
    this.records[this.records.indexOf(record)].time = date
    this.saveRecords(this.records)
  }

  // TODO: loadTimes or this.records??
  hasRecords(): Promise<boolean> {
    return this.loadTimes().then((times) => {
      console.log('hasRecords')
      if (times != undefined && times != null && times.lenght != 0) {
        return true
      }
      return false
    })
  }

  reset() {
    this.storage.clear()
    this.storage.set(this.storageKey, null)
  }

  isToday(time: Moment): boolean {
    return this.sameDay(time, moment().utc())
  }

  isThisMonth(time: Moment): boolean {
    return this.sameMonth(time, moment().utc())
  }

  isThisYear(time: Moment): boolean {
    return this.sameYear(time, moment().utc())
  }

  sameDay(time: Moment, time2: Moment): boolean {
    var isSameDay = time.isSame(time2, "day")
    return isSameDay
  }

  sameMonth(time: Moment, time2: Moment): boolean {
    var isSameMonth = time.isSame(time2, "month")
    return isSameMonth
  }

  sameYear(time: Moment, time2: Moment): boolean {
    var isSameYear = time.isSame(time2, "year")
    return isSameYear
  }

}
