import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingaddComponent } from './bookingadd/bookingadd.component';
import { BookingallComponent } from './bookingall/bookingall.component';
import { BookingupdateComponent } from './bookingupdate/bookingupdate.component';
import { BookingsearchComponent } from './bookingsearch/bookingsearch.component';
import { BookingdeleteComponent } from './bookingdelete/bookingdelete.component';
import { ClientallComponent } from './clientall/clientall.component';
import { ClientaddComponent } from './clientadd/clientadd.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';
import { ClientsearchComponent } from './clientsearch/clientsearch.component';
import { ClientdeleteComponent } from './clientdelete/clientdelete.component';
import { DirectorallComponent } from './directorall/directorall.component';
import { DirectoraddComponent } from './directoradd/directoradd.component';
import { DirectorsearchComponent } from './directorsearch/directorsearch.component';
import { DirectordeleteComponent } from './directordelete/directordelete.component';
import { DirectorupdateComponent } from './directorupdate/directorupdate.component';
import { EmployeeallComponent } from './employeeall/employeeall.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
import { EmployeedeleteComponent } from './employeedelete/employeedelete.component';
import { EquipmentallComponent } from './equipmentall/equipmentall.component';
import { EquipmentaddComponent } from './equipmentadd/equipmentadd.component';
import { EquipmentupdateComponent } from './equipmentupdate/equipmentupdate.component';
import { EquipmentsearchComponent } from './equipmentsearch/equipmentsearch.component';
import { EquipmentdeleteComponent } from './equipmentdelete/equipmentdelete.component';
import { HotelallComponent } from './hotelall/hotelall.component';
import { HoteladdComponent } from './hoteladd/hoteladd.component';
import { HotelupdateComponent } from './hotelupdate/hotelupdate.component';
import { HotelsearchComponent } from './hotelsearch/hotelsearch.component';
import { HoteldeleteComponent } from './hoteldelete/hoteldelete.component';
import { PhotoallComponent } from './photoall/photoall.component';
import { PhotoaddComponent } from './photoadd/photoadd.component';
import { PhotoupdateComponent } from './photoupdate/photoupdate.component';
import { PhotosearchComponent } from './photosearch/photosearch.component';
import { PhotodeleteComponent } from './photodelete/photodelete.component';
import { RoomallComponent } from './roomall/roomall.component';
import { RoomaddComponent } from './roomadd/roomadd.component';
import { RoomupdateComponent } from './roomupdate/roomupdate.component';
import { RoomsearchComponent } from './roomsearch/roomsearch.component';
import { RoomdeleteComponent } from './roomdelete/roomdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingaddComponent,
    BookingallComponent,
    BookingupdateComponent,
    BookingsearchComponent,
    BookingdeleteComponent,
    ClientallComponent,
    ClientaddComponent,
    ClientupdateComponent,
    ClientsearchComponent,
    ClientdeleteComponent,
    DirectorallComponent,
    DirectoraddComponent,
    DirectorsearchComponent,
    DirectordeleteComponent,
    DirectorupdateComponent,
    EmployeeallComponent,
    EmployeeaddComponent,
    EmployeeupdateComponent,
    EmployeesearchComponent,
    EmployeedeleteComponent,
    EquipmentallComponent,
    EquipmentaddComponent,
    EquipmentupdateComponent,
    EquipmentsearchComponent,
    EquipmentdeleteComponent,
    HotelallComponent,
    HoteladdComponent,
    HotelupdateComponent,
    HotelsearchComponent,
    HoteldeleteComponent,
    PhotoallComponent,
    PhotoaddComponent,
    PhotoupdateComponent,
    PhotosearchComponent,
    PhotodeleteComponent,
    RoomallComponent,
    RoomaddComponent,
    RoomupdateComponent,
    RoomsearchComponent,
    RoomdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
