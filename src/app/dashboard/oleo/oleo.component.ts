import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
    selector: 'app-chart-oleo',
    templateUrl: 'oleo.component.html'
})

export class OleoComponent implements OnInit {

    constructor(
        private resumoDiarioService: ResumoDiarioService
    ) { }

    ngOnInit() {
        this.oleoChart();
    }

    oleoChart() {

        const labels: string[] = [];
        const series: any[] = [];

        const listaOleoIndustrialETE: number[] = [];
        const listaOleoIndustrialTipoA: number[] = [];
       // const producaoMes: any[] = [];

        const ano = 2018;
        this.resumoDiarioService.getOleoPorAno(ano).subscribe(
            (resp) => {

                const lista = JSON.parse(resp._body);

                lista.mesLancamentoWrappers.forEach(mes => {
                    labels.push(mes.mesLancamento);
                });

                lista.oleoIndustrialETEWrappers.forEach(oleoETE => {
                    listaOleoIndustrialETE.push(parseInt(oleoETE.producaoDiariaOleoIndustrialETE));
                });

                lista.oleoIndustrialTipoAWrapper.forEach(oleoTipoA => {
                      listaOleoIndustrialTipoA.push(parseInt(oleoTipoA.producaoDiariaOleoIndustrialTipoA));
                });

                series.push(listaOleoIndustrialETE);
                series.push(listaOleoIndustrialTipoA);

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

        new Chartist.Line('#oleoChart', dataMonth, options, responsiveOptions);
    }


}