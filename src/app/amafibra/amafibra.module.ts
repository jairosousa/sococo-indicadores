import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmafibraRoutingModule } from './amafibra-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AmafibraComponent } from './formulario/amafibra.component';
import { AmafibraListaComponent } from './lista/amafibra-lista.component';
import { AmafibraService } from './amafibra.service';

@NgModule({
  imports: [
    SharedModule,
    AmafibraRoutingModule
  ],
  declarations: [
    AmafibraComponent,
    AmafibraListaComponent
  ],
  providers: [AmafibraService]
})
export class AmafibraModule { }
