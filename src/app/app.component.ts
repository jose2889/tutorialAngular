import { Component } from '@angular/core';
import { ServicioService } from './servicios/servicio.service';
import { cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicioService]
})

export class AppComponent {
  title = 'Servicios e Inyeccion de dependencia';

  lista:cliente[];
  listaId:cliente[];

  constructor(private servicio:ServicioService){
    this.lista = this.servicio.getDatos();
  }

  nombre:string;
  filtraId(){
    this.lista = this.servicio.getDatosId(this.nombre);
  }
 
}
