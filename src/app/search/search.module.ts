import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerService } from './services/owner.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [FormSearchComponent, ListOwnersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule
  ], exports: [
    FormSearchComponent, ListOwnersComponent
  ],
  providers: [OwnerService]
})
export class SearchModule { }
