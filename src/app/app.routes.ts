import { CrearProductoComponent } from './modules/productos/crear-producto/crear-producto.component';
import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import EditarProductoComponent from './modules/productos/editar-producto/editar-producto.component';
import { IndiceProductosComponent } from './modules/productos/indice-productos/indice-productos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: LandingComponent },
    { path: 'productos', component: IndiceProductosComponent },
    { path: 'productos/crear', component: CrearProductoComponent },
    {
        path: 'productos/editar/:id',
        // component: EditarProductoComponent,
        // loadComponent: () => import('./editar-producto/editar-producto.component').then(c => c.EditarProductoComponent), //carga perezosa 
        loadComponent: () => import('./modules/productos/editar-producto/editar-producto.component'),//carga perezosa colcoando defeault en el componente
    }
];
