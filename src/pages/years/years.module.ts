import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YearsPage } from './years';
import { PipesModule } from "../../app/pipes/pipes.module";

@NgModule({
  declarations: [
    YearsPage
  ],
  imports: [
    IonicPageModule.forChild(YearsPage),
    PipesModule
  ],
  exports: [
    YearsPage
  ]
})
export class YearsPageModule {}
