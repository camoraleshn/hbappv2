import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

    constructor(private http: HttpClient) { }

    getMedicos() {
        // return this.http.get('http://13.59.89.86/desarrollospicyrocket/hospben/api/Medicos/?idEspecialidad=4');
        return this.http.get(`${environment.apiUrl}Medicos/?idEspecialidad=4`);
    }
}
