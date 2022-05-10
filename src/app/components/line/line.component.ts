import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Planet } from 'src/app/interfaces/planet';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor( private dataService: DataService ) { }

  planets: Planet[] = [];
  planetNames: string[] = [];
  planetDiameter: number[] = [];

  ngOnInit(): void {
    this.dataService
    .getAllPlanets()
      .subscribe(data => {
        this.planets = data.results;
        this.planets.forEach((planet) => {
          this.planetNames.push(planet.name)
          this.planetDiameter.push(planet.diameter)
        })   
        this.lineChartData.labels!.slice(0,9).push(this.planetNames);
      }) 
  }

  public lineChartData: ChartConfiguration['data'] = {
    
    datasets: [
      { data: this.planetDiameter, 
        label: 'Diameters',
        backgroundColor: 'rgba(148,159,177,0.2)',
        pointBorderColor: '#fff',
      }
    ],
    labels: this.planetNames,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    }
  }
  public lineChartType: ChartType = 'line';
}
