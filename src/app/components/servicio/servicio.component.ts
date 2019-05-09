import { Component, OnInit } from '@angular/core';
import { VillanosService } from 'src/app/services/villanos.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  compania: string;
  sitio: string;
  listavillanos: any[] = [];
  
  constructor(private servicioVillanos: VillanosService) { }

  ngOnInit() {
    this.servicioVillanos.getResponseVillanos().subscribe(
      (data) => {
        this.compania = data.compania;
        this.sitio = data.sitio;
        this.listavillanos = data.ListasVillanos;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
