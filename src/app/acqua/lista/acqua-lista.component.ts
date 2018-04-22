import { Component, OnInit } from '@angular/core';
import { Acqua } from '../acqua.model';
import { AcquaService } from '../acqua.service';

@Component({
  selector: 'app-acqua-lista',
  templateUrl: './acqua-lista.component.html',
  styleUrls: ['./acqua-lista.component.css']
})
export class AcquaListaComponent implements OnInit {

  headerRow: string[];
  dataRows: Acqua[];

  constructor(
    private acquaService: AcquaService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    this.getLista();
  }

  private getLista(): void {
    this.acquaService.getLista()
      .subscribe((acqua: Acqua[]) => {
        this.dataRows = acqua;
        console.log(this.dataRows);
      });
  }

  public listaHeaderRow(): void {
    this.headerRow = ['ID', 'Data', 'Aguá de Cocô Sococo', 'Aguá de Cocô Verde', 'Percentual Cocô Germinado', 'Total de Cacambas'];
  }

}
