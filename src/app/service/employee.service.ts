import { Injectable } from '@angular/core';


const URL="http://localhost:8081/rest/employee"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
}
