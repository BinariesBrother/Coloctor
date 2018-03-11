import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GlobalComponent} from './global.component';
import {HelperModule} from '../helper/helper.module';
import {ServiceModule} from '../services/service.module';
import {VueModule} from '../vues/vue.module';
import {WidgetModule} from '../widget/widget.module';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTabsModule,
  MatMenuModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NgStickyDirective} from 'ng-sticky';
import {DrawerPanelComponent} from './drawer-panel/drawer-panel.component';
import {PanelSettingsComponent} from './panel-settings/panel-settings.component';
import {PanelNavigationComponent} from './panel-navigation/panel-navigation.component';

@NgModule({
  declarations: [
    GlobalComponent,
    NgStickyDirective,
    DrawerPanelComponent,
    PanelSettingsComponent,
    PanelNavigationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    NoopAnimationsModule,
    HelperModule,
    ServiceModule,
    VueModule,
    WidgetModule
  ],
  exports: [
    DrawerPanelComponent
  ],
  providers: [],
  bootstrap: [GlobalComponent]
})
export class GlobalModule {
}
