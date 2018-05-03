import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
    selector: 'app-chart-agua-coco',
    templateUrl: 'agua-coco.component.html'
})

export class AguaCocoComponent implements OnInit {

    constructor(
        private resumoDiarioService: ResumoDiarioService
    ) { }

    ngOnInit() {
        this.aguaCocoChart();
    }

    aguaCocoChart() {

        const labels: string[] = [];
        const series: any[] = [];

        const listaAguaCocoSococo: number[] = [];
        const listaAguaCocoVerde: number[] = [];
        // const producaoMes: any[] = [];

        const ano = 2018;
        this.resumoDiarioService.getAguaCocoPorAno(ano).subscribe(
            (resp) => {

                const lista = JSON.parse(resp._body);

                lista.mesLancamentoWrappers.forEach(mes => {
                    labels.push(mes.mesLancamento);
                });

                lista.aguaCocoSococoWrappers.forEach(aguaSococo => {
                    listaAguaCocoSococo.push(parseInt(aguaSococo.producaoDiariaAguaCocoSococo));
                });

                lista.aguaCocoVerdeWrappers.forEach(aguaCocoVerde => {
                    listaAguaCocoVerde.push(parseInt(aguaCocoVerde.producaoDiariaAguaCocoVerde));
                });

                series.push(listaAguaCocoSococo);
                series.push(listaAguaCocoVerde);

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

        new Chartist.Line('#aguaCocoChart', dataMonth, options, responsiveOptions);
    }

}