import { Injectable } from '@angular/core';
import { cliente } from '../cliente';

@Injectable()
export class ServicioService {

 

  getDatos(): cliente[] {

    let clientes = [
      {id:1, nombre:"jose", telefono:"2345643", direccion:"coro"},
      {id:2, nombre:"maria", telefono:"465456", direccion:"caracas"},
      {id:3, nombre:"carlos", telefono:"76859349", direccion:"maracaibo"},
      {id:4, nombre:"juan", direccion:"punto fijo"},
      {id:5, nombre:"carlos", telefono:"835424"},
      {id:6, nombre:"eduardo", telefono:"8765465", direccion:"valencia"}
    ];

    return clientes;
}
  getDatosId(nombre:string): cliente[]{
    let clientes = this.getDatos();
    
    let cliente = clientes.filter(c => c.nombre == nombre)

    return cliente;
  }
  constructor() { }

}
