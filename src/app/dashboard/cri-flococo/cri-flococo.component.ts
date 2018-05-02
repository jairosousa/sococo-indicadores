import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
  selector: 'cri-flococo',
  templateUrl: './cri-flococo.component.html',
  styleUrls: ['./cri-flococo.component.css']
})
export class CriFlococoComponent implements OnInit {

  constructor(
    private resumoDiarioService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.criFlococoChart()
  }

  criFlococoChart() {

    const labels: string[] = [];
    const series: any[] = [];

    const listaCri: number[] = [];
    const listaFlococo: number[] = [];
    const producaoMesCoco: any[] = [];

    const ano = 2018;

    this.resumoDiarioService.getCriFlococoPorAno(ano).subscribe(
      (resp) => {
        console.log(resp);

        console.log(resp._body);

        const lista = JSON.parse(resp._body);

        lista.mesLancamentoWrappers.forEach(mes => {
          labels.push(mes.mesLancamento);
        });

        lista.criWrappers.forEach(cri => {
          console.log(cri);

          listaCri.push(parseInt(cri.producaoDiariaCRI));
        });

        lista.flococoWrappers.forEach(flococo => {
          console.log(flococo);
          listaFlococo.push(parseInt(flococo.producaoDiariaFlococo));
        });

        series.push(listaCri);
        series.push(listaFlococo);

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
  

    new Chartist.Line('#CRIFlococoChart', dataDay, options, responsiveOptions);
  }

}
