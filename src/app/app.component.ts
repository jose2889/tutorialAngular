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

  }

  cargarDatos(){
    this.lista = this.servicio.getDatos();
    
  }

  filtraId(id:number){
    console.log("valor de id: "+id)
    var id = 1;
    this.listaId = this.servicio.getDatosId(1);

    console.log(this.listaId)
  }
 
}
