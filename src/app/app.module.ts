import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { VolunteerService } from './volunteer.service';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    AdminComponent,
    VolunteerFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [VolunteerService],
  bootstrap: [AppComponent],
  entryComponents : []
})
export class AppModule { }
