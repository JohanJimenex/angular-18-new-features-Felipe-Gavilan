import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Laptop } from '../../../laptop.models';
import { LaptopService } from '../services/laptop.service';

@Component({
  selector: 'app-indice-productos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, SweetAlert2Module, RouterLink],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {
  laptopService = inject(LaptopService);
  laptops?: Laptop[];
  columnasAMostrar = ['nombre', 'acciones']

  constructor(){
   this.cargarProductos();
  }

  cargarProductos(){
    this.laptopService.obtenerTodos().subscribe(laptops => {
      this.laptops = laptops;
    });
  }

  borrar(id: number){
    this.laptopService.borrar(id).subscribe(() => {

      Swal.fire("Exitoso", "El registro ha sido borrado exitosamente", 'success');

      this.cargarProductos();
    });
  }
}
