import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcquaComponent } from './formulario/acqua.component';
import { AcquaListaComponent } from './lista/acqua-lista.component';

const routes: Routes = [
  {
    path: 'acqua',
    component: AcquaComponent
  },
  { path: 'acqua-lista', component: AcquaListaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquaRoutingModule { }
