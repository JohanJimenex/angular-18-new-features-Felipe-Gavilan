import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), //Esta linea es para que el cambio de detección de zona sea más eficiente
    //withComponentInputBinding : Para poder capturar paramqtros de la url con @Input() 
    provideRouter(routes, withComponentInputBinding()),
    //Esta línea es para que la aplicación use el modulo de HttpClient y el fetch para hacer peticiones HTTP
    //withFetch() es para poder usar el metodo fetch() cuando se trabaja con server side rendering
    provideHttpClient(withFetch()),
    provideAnimationsAsync(), //Esta línea es para que la aplicación use animaciones de forma asíncrona

    //Esta línea es para que la aplicación use el módulo de Sweet se usa importProvidersFrom para importar el módulos que se van a usar
    importProvidersFrom([SweetAlert2Module.forRoot()]),


  ]
};
