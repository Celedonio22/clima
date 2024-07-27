import { Component } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers: [WeatherapiService]
})
export class WeatherComponent{
  temp="";
  tempC="";
  tempF="";
  locationName="";
  weatherCondition="";
  searchTerm: string = '';
  isCelsius:boolean= true;
  constructor(private weatherapiService: WeatherapiService) { }
  onSearch() {
    this.weatherapiService.getWeather(this.searchTerm).subscribe(data => {
      this.temp=`${data.current.temp_c} °C`;
      this.locationName=data.location.name;
      this.weatherCondition=data.current.condition.text
      this.tempC=`${data.current.temp_c} °C`;
      this.tempF=`${data.current.temp_f} °F`;
    }, error => {
      console.error('Error:', error);
    });
  }
  switchUnit() {
      if (this.isCelsius) {
        this.isCelsius=false;
        this.temp=this.tempF;
      } else {
        this.isCelsius=true;
        this.temp=this.tempC;
      }
  }
}
