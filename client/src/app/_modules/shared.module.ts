import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    ModalModule,
    BsDropdownModule
  ]
})
export class SharedModule { }
