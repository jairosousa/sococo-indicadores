import { NgModule } from '@angular/core';
import { SococoComponent } from './formulario/sococo.component';
import { SococoListaComponent } from './lista/sococo-lista.component';
import { SococoService } from './sococo.service';
import { SococoRoutingModule } from './sococo.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        SococoRoutingModule,
        SharedModule,
    ],
    declarations:[
        SococoComponent,
        SococoListaComponent,
    ],
    providers:[
        SococoService
    ]
})
export class SococoModule {}