En este proyecto se tocan los siguientes temas:

1. Configurar el HttpClientModule en el app.config.js
    ```ts
    provideHttpClient(withFetch()), //withFetch para usar fetch con server side renderer
    ```
2. Configurar el **withComponentInputBinding** para poder capturar queryPArams con @Input() sin usar el servicio del router.
   ```ts
    provideRouter(routes, withComponentInputBinding()), //
   ```
3. Carga perezosa de componentes standalone
   
    ```ts
    {
        path: 'productos/editar/:id',
        // component: EditarProductoComponent,
        // loadComponent: () => import('./editar-producto/editar-producto.component').then(c => c.EditarProductoComponent), //carga perezosa 
        loadComponent: () => import('./editar-producto/editar-producto.component'),//carga perezosa colcoando defeault en el componente
    }
    ```
1. Cargar ciertos compoentes en los standalone component como RouterLink y RouterLinkActive:

    ```ts
    @Component({
        selector: 'app-menu',
        standalone: true,
        imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
        templateUrl: './menu.component.html',
        styleUrl: './menu.component.css'
    })
    export class MenuComponent {

    }
    ```
1. Importar modulos tradicionales en el app.config.ts:
    ```ts
    importProvidersFrom([SweetAlert2Module.forRoot()]),
    ```