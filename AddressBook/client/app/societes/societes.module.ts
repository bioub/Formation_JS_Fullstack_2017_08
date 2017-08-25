import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietesRoutingModule } from './societes-routing.module';
import { SocietesListComponent } from './societes-list/societes-list.component';
import { SocietesShowComponent } from './societes-show/societes-show.component';

@NgModule({
  imports: [
    CommonModule,
    SocietesRoutingModule
  ],
  declarations: [SocietesListComponent, SocietesShowComponent]
})
export class SocietesModule { }
