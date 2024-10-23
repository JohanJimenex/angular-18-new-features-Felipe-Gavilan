import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceProductosComponent } from './indice-productos/indice-productos.component';
import EditarProductoComponent from './editar-producto/editar-producto.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: LandingComponent },
    { path: 'productos', component: IndiceProductosComponent },
    { path: 'productos/crear', component: CrearProductoComponent },
    {
        path: 'productos/editar/:id',
        // component: EditarProductoComponent,
        // loadComponent: () => import('./editar-producto/editar-producto.component').then(c => c.EditarProductoComponent), //carga perezosa 
        loadComponent: () => import('./editar-producto/editar-producto.component'),//carga perezosa colcoando defeault en el componente
    }
];
