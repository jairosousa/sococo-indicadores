import { Component, OnInit } from '@angular/core';
import { Amafibra } from '../amafibra.model';
import { AmafibraService } from '../amafibra.service';

@Component({
  selector: 'app-amafibra-lista',
  templateUrl: './amafibra-lista.component.html',
  styleUrls: ['./amafibra-lista.component.css']
})
export class AmafibraListaComponent implements OnInit {

  headerRow: string[];
  dataRows: Amafibra[];

  constructor(
    private amafibraService: AmafibraService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    this.getLista();
  }

  private getLista(): void {
    this.amafibraService.getLista()
      .subscribe((amafibra: Amafibra[]) => {
        this.dataRows = amafibra;
      })
  }

  public listaHeaderRow(): void {
    this.headerRow = ['ID', 'Data', 'Número de Fardos'];
  }

}
