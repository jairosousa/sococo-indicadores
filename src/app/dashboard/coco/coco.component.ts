import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
    selector: 'chart-coco',
    templateUrl: 'coco.component.html'
})

export class CocoComponent implements OnInit {

    constructor(
        private resumoDiarioService: ResumoDiarioService
    ) { }

    ngOnInit() {
        this.cocoChart();
    }

    cocoChart() {

        const labels: string[] = [];
        const series: any[] = [];

        const listaCocoDesfibrado: number[] = [];
        const listaCocoProcessado: number[] = [];
        const producaoMesCoco: any[] = [];

        const ano = 2018;
        this.resumoDiarioService.getCocoPorAno(ano).subscribe(
            (resp) => {

                const lista = JSON.parse(resp._body);

                lista.mesLancamentoWrappers.forEach(mes => {
                    labels.push(mes.mesLancamento);
                });

                lista.cocoDesfibradoWrappers.forEach(cocoDesfibrado => {
                    listaCocoDesfibrado.push(parseInt(cocoDesfibrado.producaoDiariaCocoDesfibrado));
                });

                lista.cocoProcessadoWrappers.forEach(cocoProcessado => {
                    listaCocoProcessado.push(parseInt(cocoProcessado.producaoDiariaCocoProcessado));
                });

                series.push(listaCocoDesfibrado);
                series.push(listaCocoProcessado);

            }
        );

        const dataMonth = {
            labels: labels,
            series: series
        };

        const options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                ctPointLabels({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? + value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };

        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 4 === 0 ? + value : null;
                        // return value[0];
                    }
                }
            }]
        ];

        new Chartist.Line('#cocoChart', dataMonth, options, responsiveOptions);
    }

}