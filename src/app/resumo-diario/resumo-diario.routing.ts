import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumoDiarioComponent } from './formulario/resumo-diario.component';
import { ResumoDiarioListaComponent } from './lista/resumo-diario-lista.component';


// rotas para ações Resumo diario
const routes: Routes = [
    {
        path: 'resumo-diario',
        component: ResumoDiarioComponent
    },
    {
        path: 'resumo-diario-lista',
        component: ResumoDiarioListaComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ResumoDiarioRoutingModule { }
