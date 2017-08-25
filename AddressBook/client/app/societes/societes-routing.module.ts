import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocietesListComponent } from './societes-list/societes-list.component';
import { SocietesShowComponent } from './societes-show/societes-show.component';

const routes: Routes = [{
  path: 'societes',
  component: SocietesListComponent,
  children: [{
    path: ':id',
    component: SocietesShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietesRoutingModule {
}
