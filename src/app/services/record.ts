import { RecordType } from './record-type';
import { Moment } from "moment";

export class Record {

  type: RecordType
  time: Moment
  datePickerModel: string

  constructor(type: RecordType, time: Moment) {
    this.type = type
    this.time = time
    this.datePickerModel = time.format()
  }

  // get datePickerModel(): any {
  //   console.log("get datePickerModel")
  //   return this.time.format()
  // }



  // public set type(type: RecordType) {
  //   this._type = type
  // }

  // public get type() {
  //   return this._type;
  // }

  // public set time(time: Date) {
  //   this._time = time
  // }

  // public get time(): Date {
  //   return this._time
  // }

}