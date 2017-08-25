import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';

const routes: Routes = [{
  path: 'contacts/list',
  component: ContactsListComponent,
}, {
  path: 'contacts/add',
  component: ContactsAddComponent,
}, {
  path: 'contacts/:id',
  component: ContactsShowComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
