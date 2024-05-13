import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { InicioComponent } from './inicio/inicio.component';
import { TareaComponent } from './tarea/tarea.component';


export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'ejemplito', component: EjemploComponent},
    {path: 'tarea', component: TareaComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }
