import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { ResumoDiarioService } from '../resumo-diario.service';
import { ResumoDiario } from '../resumo-diario.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-diario.component.html',
  styleUrls: ['./resumo-diario.component.css']
})
export class ResumoDiarioComponent implements OnInit {

  datePipe: any;
  @ViewChild('formulario') public formulario: NgForm;

  constructor(
    private resumoDiarioService: ResumoDiarioService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public confirmarCadastro(): void {

    this.datePipe = new DatePipe('en-US');

    const resumoDiario: ResumoDiario = new ResumoDiario(
      this.formulario.value.dataLancamento = this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      this.formulario.value.cocosDesfibrados,
      this.formulario.value.cocosProcessados,
      this.formulario.value.cri,
      this.formulario.value.flococo,
      this.formulario.value.oleoIndustrialETE,
      this.formulario.value.oleoIndustrialTipoA,
      this.formulario.value.torta,
      this.formulario.value.aguaDeCocoSococo,
      this.formulario.value.aguaDeCocoVerde,
      this.formulario.value.numeroDeFardos,
      this.formulario.value.porcentagemCocoGerminado,
      this.formulario.value.totalDeCacambas,
    );

    console.log(resumoDiario);
    console.log(this.formulario);
    this.resumoDiarioService.adicionar(resumoDiario)
      .subscribe(response => {
        this.router.navigate(['/resumo-diario-lista']);
      });

  }

}
