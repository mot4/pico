import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { RecordType } from '../../app/services/record-type';
import { Record } from '../../app/services/record';
import { RecordProvider } from "../../providers/record/record";
import { Moment } from "moment/moment";
import * as moment from 'moment';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    records: Record[]

    messageTimeout: number = 1000

    showEntrada: boolean
    showSalida: boolean
    showSuccess: boolean

    constructor(public navCtrl: NavController, public recordProvider: RecordProvider) {
        this.showEntrada = true
        // recordProvider.reset()
    }

    ionViewDidLoad() {
    }

    ionViewWillEnter() {

        // this.records = this.recordProvider.loadDummyTimes()
        // this.showCorrectButton(this.records)

        this.recordProvider.loadTodayTimes().then((records) => {
            console.log('loaded -> ' + records)
            return this.records = records
        }).then((records) => {
            this.showCorrectButton(records)
        })
    }

    showCorrectButton(records: Array<Record>) {
        console.log('showCorrectButton')
        if (records != undefined && records != null && records.length != 0) {
            var lastRecord = records[records.length - 1]
            if (lastRecord.type == RecordType.ENTRY) {
                this.showEntrada = false
                this.showSalida = true
            } else if (lastRecord.type == RecordType.DEPARTURE) {
                this.showEntrada = true
                this.showSalida = false
            }
        }
    }

    picarEntrada() {
        this.pica(RecordType.ENTRY, moment())

        this.showEntradaMessage()
    }

    picarSalida() {
        this.pica(RecordType.DEPARTURE, moment())

        this.showSalidaMessage()
    }

    showEntradaMessage() {
        this.showEntrada = false
        this.showSuccess = true

        setTimeout(() => {
            this.showSalida = true
            this.showSuccess = false
        }, this.messageTimeout)
    }

    showSalidaMessage() {
        this.showSalida = false
        this.showSuccess = true

        setTimeout(() => {
            this.showEntrada = true
            this.showSuccess = false
        }, this.messageTimeout)
    }

    pica(type: RecordType, time: Moment) {
        this.recordProvider.addTime(time, type)
    }

    now() {
        return new Date()
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
