import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
    CommonModule,
    PanelMenuModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
