import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
    selector: 'agua-coco',
    templateUrl: 'agua-coco.component.html'
})

export class AguaCocoComponent implements OnInit {

    constructor(
        private resumoDiarioService: ResumoDiarioService
    ) { }

    ngOnInit() {
        this.cocoSococoCocoVerdeChart()
    }

    public cocoSococoCocoVerdeChart() {

        const labels: string[] = [];
        const series: any[] = [];

        const listaCocoSococo: number[] = [];
        const listaCocoverde: number[] = [];
        const producaoMesCoco: any[] = [];

        const ano = 2018;
        this.resumoDiarioService.getCocoSococoCocoVerde(ano).subscribe(
            (resp) => {
                console.log(resp);

                console.log(resp._body);

                const lista = JSON.parse(resp._body);

                lista.mesLancamentoWrappers.forEach(mes => {
                    labels.push(mes.mesLancamento);
                });

                lista.aguaCocoSococoWrappers.forEach(cocosococo => {
                    console.log(cocosococo);
                    
                    listaCocoSococo.push(parseInt(cocosococo.producaoDiariaAguaCocoSococo));
                });

                lista.aguaCocoVerdeWrappers.forEach(cocoverde => {
                    console.log(cocoverde);
                    
                    listaCocoverde.push(parseInt(cocoverde.producaoDiariaAguaCocoVerde));
                });

                series.push(listaCocoSococo);
                series.push(listaCocoverde);

            }
        );

        const dataDay = {
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

        new Chartist.Line('#cocoSococoCocoVerdeChart', dataDay, options, responsiveOptions);
    }

}