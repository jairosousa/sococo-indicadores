import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SococoComponent } from './formulario/sococo.component';
import { SococoListaComponent } from './lista/sococo-lista.component';


// rotas para ações Sococo
const routes: Routes = [
    {
        path: 'sococo',
        component: SococoComponent
    },
    {
        path: 'sococo-lista',
        component: SococoListaComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SococoRoutingModule { }