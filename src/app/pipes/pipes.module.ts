import { NgModule } from '@angular/core';
import { UniquePipe } from "./unique.pipe";
import { RecordProvider } from "../../providers/record/record";

@NgModule({
  declarations: [
    UniquePipe
  ],
  imports: [
  ],
  exports: [
    UniquePipe
  ]
})
export class PipesModule { }
