import {NgModule} from '@angular/core';
import {GroupeComponent} from './groupe.component';
import {RouterModule, Routes} from '@angular/router';
import {DepensesComponent} from './depenses/depenses.component';
import {MembresComponent} from './membres/membres.component';
import {RemboursementsComponent} from './remboursements/remboursements.component';
import {RepetitionComponent} from './repetition/repetition.component';

const appRoutes: Routes = [
  {
    path: 'groupe/:id', component: GroupeComponent, children: [
      {path: '', redirectTo: 'depenses', pathMatch: 'full'},
      {path: 'depenses', component: DepensesComponent},
      {path: 'remboursements', component: RemboursementsComponent},
      {path: 'repetition', component: RepetitionComponent},
      {path: 'membres', component: MembresComponent}
    ]
  }
];

@NgModule({
  declarations: [
    GroupeComponent, DepensesComponent, MembresComponent, RemboursementsComponent, RepetitionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [GroupeComponent, DepensesComponent, MembresComponent, RemboursementsComponent, RepetitionComponent]
})
export class GroupeModule {
}
