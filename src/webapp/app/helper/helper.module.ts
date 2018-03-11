import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderHelperService} from './header-helper.service';
import {UserHelperService} from './user-helper.service';
import {InitDirective} from './NgInit';

@NgModule({
  declarations: [InitDirective],
  imports: [
    BrowserModule
  ],
  providers: [HeaderHelperService, UserHelperService],
  bootstrap: []
})
export class HelperModule {
}
