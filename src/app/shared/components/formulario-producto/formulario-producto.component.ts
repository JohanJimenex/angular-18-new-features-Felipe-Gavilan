import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Laptop, LaptopCreacion } from '../../../laptop.models';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {

  
  @Input({ required: true }) titulo!: string;
  
  @Input() modelo?: Laptop
  
  @Output() posteoFormulario = new EventEmitter<LaptopCreacion>();
  
  private readonly formBuilder = inject(FormBuilder);
  
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    nombre: ['']
  })

  guardarCambios() {
    let laptop = this.form.value as LaptopCreacion;
    this.posteoFormulario.emit(laptop);
  }
}