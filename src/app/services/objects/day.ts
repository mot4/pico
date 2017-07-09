import { Record } from '../record';

export class Day {

  private records: Array<Record>

  constructor() {
    
  }
  
  public setRecords(recods : Array<Record>) {
    this.records = recods;
  }

  
  public getRecords() : Array<Record> {
    return this.records;
  }

}