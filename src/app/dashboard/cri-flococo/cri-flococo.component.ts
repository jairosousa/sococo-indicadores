import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService } from '../../resumo-diario/resumo-diario.service';
import * as Chartist from 'chartist';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';

@Component({
  selector: 'app-chart-cri-flococo',
  templateUrl: './cri-flococo.component.html',
  styleUrls: ['./cri-flococo.component.css']
})
export class CriFlococoComponent implements OnInit {


  constructor(
    private resumoDiarioService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.selectYear();
  }


  // Quando seleciona o ano
  selectYear() {

    const labels: string[] = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const series: any[] = [];

    const listaCri: number[] = [];
    const listaFlococo: number[] = [];
    // const producaoMesCoco: any[] = [];

    const ano = 2018;

    this.resumoDiarioService.getCriFlococoPorAno(ano).subscribe(
      (resp) => {

        const lista = JSON.parse(resp._body);

        /*lista.mesLancamentoWrappers.forEach(mes => {
           labels.push(mes.mesAnoLancamento);
        }); */

        lista.criWrappers.forEach(cri => {
          listaCri.push(parseInt(cri.producaoDiariaCRI));
        });

        lista.flococoWrappers.forEach(flococo => {
          listaFlococo.push(parseInt(flococo.producaoDiariaFlococo));
        });

        series.push(listaCri);
        series.push(listaFlococo);

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

    new Chartist.Line('#CRIFlococoChart', dataMonth, options, responsiveOptions);
  }

  // Quando seleciona o mês
  selectMonth() {

    const labels: string[] = [];
    const series: any[] = [];

    const listaCri: number[] = [];
    const listaFlococo: number[] = [];
    // const producaoMesCoco: any[] = [];

    const ano = 2018;
    const mes = 5;

    this.resumoDiarioService.getCriFlococoPorMes(ano, mes).subscribe(
      (resp) => {

        const lista = JSON.parse(resp._body);

        lista.mesLancamentoWrappers.forEach(mes => {
          labels.push(mes.mesAnoLancamento);
        });

        lista.criWrappers.forEach(cri => {
          listaCri.push(parseInt(cri.producaoDiariaCRI));
        });

        lista.flococoWrappers.forEach(flococo => {
          listaFlococo.push(parseInt(flococo.producaoDiariaFlococo));
        });

        series.push(listaCri);
        series.push(listaFlococo);

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

    new Chartist.Line('#CRIFlococoChart', dataMonth, options, responsiveOptions);
  }


}
