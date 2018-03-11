import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterInitComponent} from './router-init.component';

@NgModule({
  declarations: [
    RouterInitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RouterInitComponent],
  exports: [RouterInitComponent]
})
export class RouterInitModule {
}
