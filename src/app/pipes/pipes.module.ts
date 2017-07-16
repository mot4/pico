import { NgModule } from '@angular/core';
import { UniquePipe } from "./unique.pipe";
import { DateFormatPipe } from "./date-format.pipe";

@NgModule({
  declarations: [
    UniquePipe,
    DateFormatPipe
  ],
  imports: [
  ],
  exports: [
    UniquePipe,
    DateFormatPipe
  ]
})
export class PipesModule { }
