import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Record } from '../services/record'

@Pipe({
    name: 'unique',
    pure: false
})
export class UniquePipe implements PipeTransform {

    transform(records: Array<Record>, param: string): any {
        if (records !== undefined && records !== null) {
            switch (param) {
                case 'year':
                    return _.uniqWith(records, (val: Record, other: Record) => {
                        return val.time.isSame(other.time, 'year')
                    })

                case 'month':
                    return _.uniqWith(records, (val: Record, other: Record) => {
                        return val.time.isSame(other.time, 'month')
                    })
                case 'day':
                    return _.uniqWith(records, (val: Record, other: Record) => {
                        return val.time.isSame(other.time, 'day')
                    })
                default:
                    break;
            }
        }
        return records;
    }
}