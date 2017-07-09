import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from "ionic-angular";
import { RecordProvider } from "../../providers/record/record";
import * as moment from 'moment';

@IonicPage({
  name: 'tabs-page'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myNav') nav: NavController

  tab1Root = 'HomePage';
  tab2Root = 'YearsPage'
  tab3Root = 'ContactPage';

  constructor(public navCtrl: NavController, public recordProvider: RecordProvider) {

  }

  ionViewCanEnter() {
    this.recordProvider.setSelectedTime(moment())
  }


  getTab2Root() {

  }
}
