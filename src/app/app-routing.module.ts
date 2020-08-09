import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingaddComponent } from './bookingadd/bookingadd.component';
import { BookingallComponent } from './bookingall/bookingall.component';
import { BookingupdateComponent } from './bookingupdate/bookingupdate.component';
import { BookingsearchComponent } from './bookingsearch/bookingsearch.component';
import { BookingdeleteComponent } from './bookingdelete/bookingdelete.component';
import { ClientaddComponent } from './clientadd/clientadd.component';
import { ClientallComponent } from './clientall/clientall.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';
import { ClientsearchComponent } from './clientsearch/clientsearch.component';
import { ClientdeleteComponent } from './clientdelete/clientdelete.component';


const routes: Routes = [
  {path: 'bookingadd', component:BookingaddComponent},
  {path: 'bookingall', component:BookingallComponent},
  {path: 'bookingupdate',component:BookingupdateComponent},
  {path: 'bookingsearch', component:BookingsearchComponent},
  {path: 'bookingdelete', component:BookingdeleteComponent},

  {path: 'clientadd', component:ClientaddComponent},
  {path: 'clientall', component:ClientallComponent},
  {path: 'clientupdate', component:ClientupdateComponent},
  {path: 'clientsearch', component:ClientsearchComponent},
  {path: 'clientdelete', component:ClientdeleteComponent},





  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
