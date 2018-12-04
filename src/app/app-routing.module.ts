import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SnowComponent } from './services/snow/snow.component';
import { ResidentialComponent } from './services/residential/residential.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { OutdoorComponent } from './services/outdoor/outdoor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'snow', component: SnowComponent},
  {path: 'residential', component: ResidentialComponent},
  {path: 'commercial', component: CommercialComponent},
  {path: 'outdoor', component: OutdoorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
