import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

    constructor(private http: HttpClient) { }

    getEspecialidades() {
        // return this.http.get('http://api.hospitalbendana.com/desarrollospicyrocket/hospben/api/especialidades');
        return this.http.get(`${environment.apiUrl}especialidades`);
    }
}
