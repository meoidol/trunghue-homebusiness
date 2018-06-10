import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesComponent } from './pages.component';
import { PlasticProductsComponent } from './plastic-products/plastic-products.component';
import { HandmadeProductsComponent } from './handmade-products/handmade-products.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    PlasticProductsComponent,
    HandmadeProductsComponent
  ]
})
export class PagesModule { }
