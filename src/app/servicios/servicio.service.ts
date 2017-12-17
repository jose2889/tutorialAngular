import { Injectable } from '@angular/core';
import { cliente } from '../cliente';

@Injectable()
export class ServicioService {

 

  getDatos(): cliente[] {

    let clientes = [
      {id:1, nombre:"jose", telefono:"2345643", direccion:"coro"},
      {id:2, nombre:"maria", telefono:"465456", direccion:"caracas"},
      {id:3, nombre:"juan", direccion:"punto fijo"},
      {id:4, nombre:"carlos", telefono:"835424"},
      {id:5, nombre:"eduardo", telefono:"8765465", direccion:"valencia"}
    ];

    return clientes;
}
  getDatosId(id:number): cliente[]{
    let clientes = this.getDatos();
    
    let cliente = clientes.filter(c => c.id == id)

    return cliente;
  }
  constructor() { }

}
