import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');


    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Value',
              data: [20, 50, 30, 20, 30],
              backgroundColor: "#F9C5D5",
              borderColor: "#DA3A80",
              fill: true,
          },
          {
            label: 'Invested Amount',
            data: [50, 70, 40, 60, 80],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }


}
