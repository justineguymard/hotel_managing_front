import { Injectable } from '@angular/core';

const URL="http://localhost:8081/rest/photo"

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }
}
