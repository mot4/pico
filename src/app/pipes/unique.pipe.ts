import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Record } from '../services/record'
import * as moment from 'moment';

@Pipe({
    name: 'unique',
    pure: false
})
export class UniquePipe implements PipeTransform {

    transform(records: Array<Record>, param: string): any {
        if (records !== undefined && records !== null) {
            switch (param) {
                case 'year':
                    return _.uniqWith(records, function (val: Record, other: Record) {
                        return moment(val.time).year() == moment(other.time).year()
                    })

                case 'month':
                    return _.uniqWith(records, function (val: Record, other: Record) {
                        return moment(val.time).month() == moment(other.time).month()
                    })
                case 'day':
                    return _.uniqWith(records, function (val: Record, other: Record) {
                        return moment(val.time).day() == moment(other.time).day()
                    })
                default:
                    break;
            }
        }
        return records;
    }
}