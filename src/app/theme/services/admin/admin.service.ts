import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {


  constructor() { }

  getToken(): string {
    return localStorage.getItem('token');
  }

}
