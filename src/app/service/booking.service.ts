import { Injectable } from '@angular/core';

const URL="http://localhost:8081/rest/booking"

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }
}
