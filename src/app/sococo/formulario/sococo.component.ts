import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Sococo } from '../sococo.model';
import { SococoService } from '../sococo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sococo',
  templateUrl: './sococo.component.html',
  styleUrls: ['./sococo.component.css']
})
export class SococoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;
  
  constructor(
    private sococoService: SococoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public confirmarCadastro(): void {
    let sococo: Sococo = new Sococo(
      this.formulario.value.dataLancamento,
      this.formulario.value.cocosDesfibrados,
      this.formulario.value.cocosProcessados,
      this.formulario.value.cri,
      this.formulario.value.flococo,
      this.formulario.value.oleoIndustrialETE,
      this.formulario.value.oleoIndustrialTipoA,
      this.formulario.value.torta
    )
    this.sococoService.adicionar(sococo)
      .subscribe(response => {
        console.log(response)
        this.router.navigate(['/sococo-lista']);
      })
  }

}