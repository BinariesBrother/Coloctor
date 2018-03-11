import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterInitModule} from './test/router-init.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterInitModule
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterInitModule]
})
export class WidgetModule {
}
