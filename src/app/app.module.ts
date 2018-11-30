import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RecreationComponent } from './services/recreation/recreation.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { OutdoorComponent } from './services/outdoor/outdoor.component';
import { SnowComponent } from './services/snow/snow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RecreationComponent,
    CommercialComponent,
    OutdoorComponent,
    SnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
