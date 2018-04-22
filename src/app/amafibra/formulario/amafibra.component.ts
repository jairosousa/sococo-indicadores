import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { Amafibra } from '../amafibra.model';
import { AmafibraService } from '../amafibra.service';

@Component({
  selector: 'app-amafibra',
  templateUrl: './amafibra.component.html',
  styleUrls: ['./amafibra.component.css']
})
export class AmafibraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;

  constructor(
    private router: Router,
    private amafibraService: AmafibraService
  ) { }

  ngOnInit() {

  }

  public confirmarCadastro(): void {
    const amafibra: Amafibra = new Amafibra(
      this.formulario.value.dataLancamento,
      this.formulario.value.numeroDeFardos
    );
    this.amafibraService
      .adicionar(amafibra)
      .subscribe(response => {
        this.router.navigate(['/amafibra-lista']);
      });
  }

}
