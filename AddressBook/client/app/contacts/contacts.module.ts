import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent, ContactsShowComponent, ContactsAddComponent],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
