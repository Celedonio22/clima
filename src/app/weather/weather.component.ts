import { Component } from '@angular/core';
import {WeatherapiService} from '../weatherapi.service'

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers: [WeatherapiService]
})
export class WeatherComponent {
  constructor(private weatherapiService: WeatherapiService){
    console.log('myService', weatherapiService.getWeather());
}
}
