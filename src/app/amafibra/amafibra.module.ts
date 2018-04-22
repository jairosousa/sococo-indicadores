import { NgModule } from '@angular/core';
import { AmafibraComponent } from './formulario/amafibra.component';
import { AmafibraListaComponent } from './lista/amafibra-lista.component';
import { AmafibraService } from './amafibra.service';
import { AmafibraRoutingModule } from './amafibra.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        AmafibraRoutingModule,
        SharedModule,
    ],
    declarations:[
        AmafibraComponent,
        AmafibraListaComponent,
    ],
    providers:[
        AmafibraService
    ]
})
export class AmafibraModule { }
