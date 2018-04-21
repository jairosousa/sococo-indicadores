
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcquaService } from '../acqua.service';
import { Router } from '@angular/router';
import { Acqua } from '../acqua.model';

@Component({
    selector: 'app-acqua',
    templateUrl: './acqua.component.html',
    styleUrls: ['./acqua.component.css']
})
export class AcquaComponent implements OnInit {

    @ViewChild('formulario') public formulario: NgForm;

    constructor(
        private acquaService: AcquaService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    public confirmarCadastro(): void {
        let acqua: Acqua = new Acqua(
            this.formulario.value.dataLancamento,
            this.formulario.value.aguaDeCocoSococo,
            this.formulario.value.aguaDeCocoVerde,
            this.formulario.value.porcentagemCocoGerminado,
            this.formulario.value.totalDeCacambas,
        )

        this.acquaService.adicionar(acqua)
            .subscribe(response => {
                this.router.navigate(['/acqua-lista']);
            })
    }

}