import { Injectable } from '@angular/core';

const URL="http://localhost:8081/rest/director"

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor() { }
}
