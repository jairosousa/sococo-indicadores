import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
// import * as Chartist from '../../../node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';
import { ResumoDiarioService } from '../resumo-diario/resumo-diario.service';


declare var $: any;

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
      [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
    ]
  };

  dataDay = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
      '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    series: [
      [542, 434, 568, 610, 756, 895, 543, 520, 680, 653, 753, 326, 230, 293, 380, 480, 503, 553, 600, 664, 698, 710],
      [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795, 553, 600, 664, 698, 610, 756, 895, 543, 322, 442]
    ]
  };

  dataSales = {
    labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
    series: [
      [287, 385, 490, 562, 594, 626, 698, 895, 952],
      [67, 152, 193, 240, 387, 435, 535, 642, 744],
      [23, 113, 67, 108, 190, 239, 307, 410, 410]
    ]
  };




  constructor(private resumoDiarioService: ResumoDiarioService) {

  }



  ngOnInit() {
    // this.criFlococoChart();
    // this.cocoChart();
    // this.oleoChart();
    // this.cocoSococoCocoVerdeChart();
    this.caixaPadraoChart();
    this.cocoGerminadorChart();
    // this.totalDeCacambasChart();
    // this.numeroFardosChart();

    // this.examplePizza();
    // this.exempleLineHours();
    // this.exempleLinesMonth();

  }

  exempleLinesMonth() {
    const options = {
      seriesDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };

    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#chartActivity', this.data, options, responsiveOptions);
  }



  cocoSococoCocoVerdeChart() {
    const oleoOption = {
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

    const responsiveOption: any[] = [
      ['screen and (max-width: 640px)', {
        seriesDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#cocoSococoCocoVerdeChart', this.dataDay, oleoOption, responsiveOption);

  }

  caixaPadraoChart() {
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

    new Chartist.Line('#caixaPadraoChart', this.dataDay, options, responsiveOptions);
  }

  cocoGerminadorChart() {
    const oleoOption = {
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

    const responsiveOption: any[] = [
      ['screen and (max-width: 640px)', {
        seriesDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#cocoGerminadorChart', this.dataDay, oleoOption, responsiveOption);

  }

  totalDeCacambasChart() {
    const oleoOption = {
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

    const responsiveOption: any[] = [
      ['screen and (max-width: 640px)', {
        seriesDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#totalDeCacambasChart', this.dataDay, oleoOption, responsiveOption);

  }

  numeroFardosChart() {
    const oleoOption = {
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

    const responsiveOption: any[] = [
      ['screen and (max-width: 640px)', {
        seriesDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#numeroFardosChart', this.dataDay, oleoOption, responsiveOption);
  }

  examplePizza() {
    const dataPreferences = {
      series: [
        [25, 30, 20, 25]
      ]
    };

    const optionsPreferences = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false
      }
    };

    new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    new Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6]
    });
  }

  exempleLineHours() {
    const optionsSales = {
      low: 0,
      high: 1000,
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: false,
    };

    const responsiveSales: any[] = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#chartHours', this.dataSales, optionsSales, responsiveSales);
  }

}
