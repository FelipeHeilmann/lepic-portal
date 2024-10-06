import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexDataLabels
} from "ng-apexcharts"

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  title: ApexTitleSubtitle
  stroke: ApexStroke
  dataLabels: ApexDataLabels
  colors: string[]
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild("chart") chart!: ChartComponent
  public chartOptions: Partial<ChartOptions>

  public cuttingSeries = [
    {
      name: "My-series",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 100]
    }
  ]

  public suturingSeries = [
    {
      name: "My-series",
      data: [20, 50, 25, 45, 10, 78, 69, 56, ]
    }
  ]

  constructor() {
    this.chartOptions = {
      
      chart: {
        height: 300,
        type: "line",
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: "smooth"
      },
      dataLabels: {
        enabled: true
      },
      title: {
        text: "Precisão por tentativa"
      },
      colors: ["#4169E1"], 
      xaxis: {
        categories: ["Tentativa 1", "Tentativa 2",  "Tentativa 3",  "Tentativa 4",  "Tentativa 5",  "Tentativa 6",  "Tentativa 7",  "Tentativa  8", "Tentativa 9"]
      }
    };
  }
}
