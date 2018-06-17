import { HttpModule } from '@angular/http';
import { UiService } from './../services/ui/ui.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCheckboxModule,
  MatMenuModule,
  MatGridListModule,
  MatTooltipModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesComponent } from './pages.component';
import { PlasticProductsComponent } from './plastic-products/plastic-products.component';
import { HandmadeProductsComponent } from './handmade-products/handmade-products.component';
import { CardComponent } from '../components/card/card.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SlidebarComponent } from '../components/slidebar/slidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { routing } from './pages.routing';
import { WeatherService } from '../services/weather/weather.service';
import { WeatherCardComponent } from '../layouts/weather-card/weather-card.component';
import { AddCardComponent } from '../layouts/add-card/add-card.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppTranslationModule } from '../app.translation.module';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    routing,
    AppTranslationModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTreeModule
  ],
  declarations: [
    PagesComponent,
    PlasticProductsComponent,
    HandmadeProductsComponent,
    CardComponent,
    NavbarComponent,
    SlidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent
  ],
  providers: [
    UiService,
    WeatherService
  ]
})
export class PagesModule { }
