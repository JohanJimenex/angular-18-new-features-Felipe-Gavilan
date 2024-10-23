import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Laptop, LaptopCreacion } from '../../../laptop.models';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }

  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/laptops';

  public obtenerTodos(): Observable<Laptop[]> {
    // mock data
    return of([
      { id: 1, nombre: 'Dell' },
      { id: 2, nombre: 'HP' },
      { id: 3, nombre: 'Lenovo' }
    ]);



    return this.http.get<Laptop[]>(this.URLbase);
  }

  public obtenerPorId(id: number): Observable<Laptop> {
    console.log('obtenerPorId', id);
    
    // mock data
    return of({ id: 1, nombre: 'Dell' });

    return this.http.get<Laptop>(`${this.URLbase}/${id}`);
  }

  public crear(laptop: LaptopCreacion) {
    return this.http.post(this.URLbase, laptop);
  }

  public actualizar(id: number, laptop: LaptopCreacion) {
    return this.http.put(`${this.URLbase}/${id}`, laptop);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}
