import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaysPage } from './days';
import { PipesModule } from "../../app/pipes/pipes.module";

@NgModule({
  declarations: [
    DaysPage,
  ],
  imports: [
    IonicPageModule.forChild(DaysPage),
    PipesModule
  ],
  exports: [
    DaysPage
  ]
})
export class DaysPageModule {}
