import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController } from '@ionic-native/core'
import { EspecialidadesService } from './../services/especialidades.service';
// import { Router } from '@angular/router';
// import { Especialidad } from './../servicio';

// @IonicPage()
@Component({
    selector: 'app-v-lista-especialidades',
    templateUrl: './v-lista-especialidades.page.html',
    styleUrls: ['./v-lista-especialidades.page.scss'],
})
// export class VListaEspecialidadesPage implements OnInit {
export class VListaEspecialidadesPage {

    results: any = [];

    constructor(
        // public navctrl: NavController,
        public especialidadService: EspecialidadesService
    ) { }

    ionViewWillEnter() {
    // ionViewDidLoad() {
        // this.getListEspecialidades();
        this.especialidadService.getEspecialidades()
            .subscribe(
                (data) => { 
                    this.results = data;
                    console.log(this.results);
                },
                (error) => {
                    console.log('error: ' + error);
                }
            );
    }

    /* ngOnInit() {
        this.especialidadService.getEspecialidades().subscribe( result => {
            this.results = result;
        })
    } */

    /*getListEspecialidades() {
        this.especialidadService.getEspecialidades()
            .subscribe(
                (data) => { console.log('data: ' + data); this.results = data; },
                (error) => { console.log('error: ' + error); }
            );
    } */

    /* getListEspecialidades() {
        this.especialidadService.getEspecialidades().then((response) => {
            console.log('response' + response);
            this.results = response;
        }, (error) => {
            console.log('error: ' + error.statusText);
        });
    }*/
    
}
