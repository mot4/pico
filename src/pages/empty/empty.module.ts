import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmptyPage } from './empty';

@NgModule({
  declarations: [
    EmptyPage,
  ],
  imports: [
    IonicPageModule.forChild(EmptyPage),
  ],
  exports: [
    EmptyPage
  ]
})
export class EmptyPageModule {}
