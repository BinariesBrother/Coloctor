import {NgModule} from '@angular/core';
import {AcceuilComponent} from './acceuil.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'acceuil', component: AcceuilComponent}
];

@NgModule({
  declarations: [
    AcceuilComponent

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AcceuilComponent]
})
export class AcceuilModule {
}
