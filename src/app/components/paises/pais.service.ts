import { Injectable } from '@angular/core';
import { HttpService } from '../../common/services/http.services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends HttpService {
  constructor(public http: HttpClient) {
    super(http);
  }
}

