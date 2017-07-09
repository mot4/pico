import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthsPage } from './months';
import { PipesModule } from "../../app/pipes/pipes.module";

@NgModule({
  declarations: [
    MonthsPage
  ],
  imports: [
    IonicPageModule.forChild(MonthsPage),
    PipesModule
  ],
  exports: [
    MonthsPage
  ]
})
export class MonthsPageModule {}
