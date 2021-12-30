import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from './components/clients/clients.component';
import {LocationsComponent} from './components/locations/locations.component';
import {AdressesComponent} from './components/adresses/adresses.component';
import {NewclientComponent} from './components/newclient/newclient.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
  {path: "clients", component: ClientsComponent},
  {path: "locations", component: LocationsComponent},
  {path: "adresses", component: AdressesComponent},
  {path:"newClient",component:NewclientComponent},
  {path: "", component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
