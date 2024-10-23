import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Laptop, LaptopCreacion } from '../../../laptop.models';
import { Router } from '@angular/router';
import { FormularioProductoComponent } from '../../../shared/components/formulario-producto/formulario-producto.component';
import { LaptopService } from '../services/laptop.service';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormularioProductoComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export default class EditarProductoComponent implements OnInit {

  @Input({ transform: numberAttribute }) id!: number //este id  se captura automatico desde la url con la confguracion previa en app.config.ts

  laptopService = inject(LaptopService);
  router = inject(Router);
  modelo?: Laptop;

  ngOnInit(): void {
    this.laptopService.obtenerPorId(this.id).subscribe(laptop => {
      this.modelo = laptop;
    });
  }

  guardarCambios(laptop: LaptopCreacion) {
    this.laptopService.actualizar(this.id, laptop).subscribe(() => {
      this.router.navigate(['/productos']);
    })
  }
}
