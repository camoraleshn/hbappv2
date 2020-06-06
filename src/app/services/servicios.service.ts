import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

    constructor(
        private http: HttpClient
    ) { }

    getServicios() {
        // return this.http.get('http://13.59.89.86/desarrollospicyrocket/hospben/api/Servicios');
        return this.http.get(`${environment.apiUrl}Servicios`);
    }
}
