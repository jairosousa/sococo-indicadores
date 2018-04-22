import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmafibraComponent } from './formulario/amafibra.component';
import { AmafibraListaComponent } from './lista/amafibra-lista.component';


// rotas para ações amafibra
const routes: Routes = [
    {
        path: 'amafibra',
        component: AmafibraComponent
    },
    {
        path: 'amafibra-lista',
        component: AmafibraListaComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AmafibraRoutingModule { }
