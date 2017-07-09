import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordPage } from './record';
import { PipesModule } from "../../app/pipes/pipes.module";

@NgModule({
  declarations: [
    RecordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordPage),
    PipesModule
  ],
  exports: [
    RecordPage
  ]
})
export class RecordPageModule { }
