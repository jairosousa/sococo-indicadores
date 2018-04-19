import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SococoComponent } from "./formulario/sococo.component";
import { SococoListaComponent } from "./lista/sococo-lista.component";
import { SococoService } from "./sococo.service";
import { SococoRoutingModule } from "./sococo.routing";

@NgModule({
    imports:[
        CommonModule,
        SococoRoutingModule
    ],
    declarations:[
        SococoComponent,
        SococoListaComponent
    ],
    providers:[
        SococoService
    ]
})
export class SococoModule {} 