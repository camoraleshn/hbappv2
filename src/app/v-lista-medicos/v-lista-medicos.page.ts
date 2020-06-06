import { Component, OnInit } from '@angular/core';
import { MedicosService } from './../services/medicos.service';

@Component({
  selector: 'app-v-lista-medicos',
  templateUrl: './v-lista-medicos.page.html',
  styleUrls: ['./v-lista-medicos.page.scss'],
})
export class VListaMedicosPage implements OnInit {

    resultMedicos: any = [];

    constructor(private medicoService: MedicosService) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.medicoService.getMedicos()
            .subscribe(
                (data) => {
                    this.resultMedicos = data;
                    console.log(this.resultMedicos);
                },
                (error) => {
                    console.log('error: ' + error);
                }
            );
    }

}
