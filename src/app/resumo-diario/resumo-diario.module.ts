import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ResumoDiarioRoutingModule } from './resumo-diario.routing';
import { ResumoDiarioService } from './resumo-diario.service';
import { ResumoDiarioComponent } from './formulario/resumo-diario.component';
import { ResumoDiarioListaComponent } from './lista/resumo-diario-lista.component';

@NgModule({
    imports:[
        ResumoDiarioRoutingModule,
        SharedModule,
    ],
    declarations:[
        ResumoDiarioComponent,
        ResumoDiarioListaComponent,
    ],
    providers:[
        ResumoDiarioService
    ]
})
export class ResumoDiarioModule {}
