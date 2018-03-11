import {NgModule} from '@angular/core';
import {AcceuilModule} from './acceuil/acceuil.module';
import {RouterModule, Routes} from '@angular/router';
import {GroupeModule} from './groupes/groupe.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/acceuil',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    AcceuilModule,
    GroupeModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true, useHash: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class VueModule {
}

