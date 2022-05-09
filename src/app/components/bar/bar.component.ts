import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from 'src/app/service/data.service';
import { Planet } from '../../interfaces/planet';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor( private dataService: DataService ) { }

  planets: Planet[] = [];
  planetNames: string[] = [];
  planetDiameter: number[] = [];

  ngOnInit(): void {
    this.onRefresh()
  }

  onRefresh() {
    this.dataService.getAllPlanets()
      .subscribe(data => {
        this.planets = data.results
        for(let planet of this.planets){
          this.planetNames.push(planet.name)
          this.planetDiameter.push(planet.diameter)
        }      
        this.barChartData.labels!.slice(0,9).push(this.planetNames);
      }) 
  }
 
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }  
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.planetNames,
    datasets: [
      { data: this.planetDiameter, label: 'Diameters'}
    ]
  }

}

