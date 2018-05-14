import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
    selector: 'app-chart-coco-germinado',
    templateUrl: 'coco-germinado.component.html'
})

export class CocoGerminadoComponent implements OnInit {

    constructor(
        private resumoDiarioService: ResumoDiarioService
    ) { }

    ngOnInit() {
        this.selectYear();
    }

    selectYear() {

        const labels: string[] = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        const series: any[] = [];

        const listaCocoGerminado: number[] = [];

        const ano = 2018;
        this.resumoDiarioService.getCocoGerminadoPorAno(ano).subscribe(
            (resp) => {

                const lista = JSON.parse(resp._body);

                /*lista.mesLancamentoWrappers.forEach(mes => {
                    labels.push(mes.mesAnoLancamento);
                });*/

                lista.cocoGerminadoWrapper.forEach(cocoGerminado => {
                    listaCocoGerminado.push(parseInt(cocoGerminado.producaoDiariaCocoGerminado));
                });

                series.push(listaCocoGerminado);

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

        new Chartist.Line('#cocoGerminadoChart', dataMonth, options, responsiveOptions);
    }

    selectMonth() {

        const labels: string[] = [];
        const series: any[] = [];

        const listaCocoGerminado: number[] = [];

        const ano = 2018;
        const mes = 4;
        this.resumoDiarioService.getCocoGerminadoPorMes(ano, mes).subscribe(
            (resp) => {

                const lista = JSON.parse(resp._body);

                lista.mesLancamentoWrappers.forEach(mes => {
                    labels.push(mes.mesAnoLancamento);
                });

                lista.cocoGerminadoWrapper.forEach(cocoGerminado => {
                    listaCocoGerminado.push(parseInt(cocoGerminado.producaoDiariaCocoGerminado));
                });

                series.push(listaCocoGerminado);

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

        new Chartist.Line('#cocoGerminadoChart', dataMonth, options, responsiveOptions);
    }

}