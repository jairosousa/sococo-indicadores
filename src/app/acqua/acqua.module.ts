import { NgModule } from '@angular/core';

import { AcquaRoutingModule } from './acqua.routing';
import { AcquaListaComponent } from './lista/acqua-lista.component';
import { AcquaComponent } from './formulario/acqua.component';
import { AcquaService } from './acqua.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AcquaRoutingModule,
    SharedModule
  ],
  declarations: [
    AcquaListaComponent,
    AcquaComponent
  ],
  providers:[AcquaService]
})
export class AcquaModule { }
