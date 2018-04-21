import { Component, OnInit, ViewChild } from '@angular/core';
import { AmafibraService } from '../amafibra.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Amafibra } from '../amafibra.model';

@Component({
  selector: 'app-amafibra',
  templateUrl: './amafibra.component.html',
  styleUrls: ['./amafibra.component.css']
})
export class AmafibraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(
    private amafibraService: AmafibraService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public confirmarCadastro(): void {
    let amafibra: Amafibra = new Amafibra(
      this.formulario.value.dataLancamento,
      this.formulario.value.numeroDeFardos,
    )

    this.amafibraService.adicionar(amafibra)
      .subscribe(response => {
        this.router.navigate(['/amafibra-lista']);
      })
  }

}
