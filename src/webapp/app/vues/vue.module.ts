import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {AcceuilModule} from './acceuil/acceuil.module';

@NgModule({
  declarations: [
    AcceuilModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class VueModule {
}
