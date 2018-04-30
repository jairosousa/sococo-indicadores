import { Component, OnInit } from '@angular/core';
import { ResumoDiario } from '../resumo-diario.model';
import { ResumoDiarioService } from '../resumo-diario.service';

@Component({
  selector: 'app-resumo-diario-lista',
  templateUrl: './resumo-diario-lista.component.html',
  styleUrls: ['./resumo-diario-lista.component.css']
})
export class ResumoDiarioListaComponent implements OnInit {

  headerRow: string[];
  dataRows: ResumoDiario[];
  constructor(
    private sococoService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    this.getLista();
  }

  private getLista(): void {
    this.sococoService.getLista()
      .subscribe((resumoDiario: ResumoDiario[]) => {
        this.dataRows = resumoDiario;
        console.log(this.dataRows);
      });
  }

  public listaHeaderRow(): void {
    this.headerRow = ['ID', 'Data', 'Cocos Desfibrados', 'Cocos Processados', 'CRI', 'Flococo', 'O.I. ETE', 'O. I. Tipo A', 'Torta'];
  }
}
