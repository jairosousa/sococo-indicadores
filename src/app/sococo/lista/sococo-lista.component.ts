import { Component, OnInit } from '@angular/core';
import { SococoService } from '../sococo.service';
import { Sococo } from '../sococo.model';

@Component({
  selector: 'app-sococo-lista',
  templateUrl: './sococo-lista.component.html',
  styleUrls: ['./sococo-lista.component.css']
})
export class SococoListaComponent implements OnInit {

  headerRow: string[];
  dataRows: Sococo[];
  constructor(
    private sococoService: SococoService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    this.getLista();
  }

  private getLista(): void {
    this.sococoService.getLista()
      .subscribe((sococo: Sococo[]) => {
        this.dataRows = sococo;
        console.log(this.dataRows);
      });
  }

  public listaHeaderRow(): void {
    this.headerRow = ['ID', 'Data', 'Cocos Desfibrados', 'Cocos Processados', 'CRI', 'Flococo', 'O.I. ETE', 'O. I. Tipo A', 'Torta'];
  }
}
