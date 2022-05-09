import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../interfaces/planet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://swapi.dev/api';

  constructor( private http:HttpClient ) { }

  getAllPlanets():Observable<any>{
    const completeUrl = `${this.url}/planets`;
    return this.http.get(completeUrl); 
  }
}
