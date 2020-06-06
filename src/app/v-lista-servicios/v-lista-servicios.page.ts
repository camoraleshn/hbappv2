import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './../services/servicios.service';

@Component({
  selector: 'app-v-lista-servicios',
  templateUrl: './v-lista-servicios.page.html',
  styleUrls: ['./v-lista-servicios.page.scss'],
})
export class VListaServiciosPage implements OnInit {

    resultServicios: any = [];

    constructor(
        private servicioService: ServiciosService
    ) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.servicioService.getServicios()
            .subscribe(
                (data) => {
                    this.resultServicios = data;
                    console.log(this.resultServicios);
                },
                (error) => {
                    console.log('error: ' + error);
                }
            );
    }

}
