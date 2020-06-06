import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-v-vista-cita',
  templateUrl: './v-vista-cita.page.html',
  styleUrls: ['./v-vista-cita.page.scss'],
})
export class VVistaCitaPage implements OnInit {

    dataReturn;

    constructor( public http: HttpClient ) { }

  ngOnInit() {
  }

    enviarCita() {
        // let headers = new HttpHeaders();

        let data = {
            "IDMedico": 4,
            "IDPaciente": 24,
            "Fecha": "2020-06-05T22:00:32.9054058+00:00",
            "Hora": "00:00:00.1234567"
        };

        // enviar datos
        return this.http.post(`${environment.apiUrl}Citas`,
                                data,
                                { headers: new HttpHeaders({ "content-Type": "application/json" }) }
                             )
                            .subscribe(
                                        (response) => {
                                                        this.dataReturn = response;
                                                        console.log('data return: ' + this.dataReturn);
                                                       },
                                        (error) => {
                                                        this.dataReturn = "Ocurrio un error, por favor intente mas tarde";
                                                   }
            

                            );
    }

}
