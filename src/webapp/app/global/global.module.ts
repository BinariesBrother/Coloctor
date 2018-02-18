import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {GlobalComponent} from './global.component';
import {HelperModule} from '../helper/helper.module';
import {ServiceModule} from '../services/service.module';
import {VueModule} from '../vues/vue.module';
import {WidgetModule} from '../widget/widget.module';

@NgModule({
  declarations: [
    GlobalComponent,
    HelperModule,
    ServiceModule,
    VueModule,
    WidgetModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GlobalComponent]
})
export class GlobalModule {
}
