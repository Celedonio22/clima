import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

interface Location {
  name: string, country: string
}

interface Condition {
  text: string
}

interface Current {
  temp_c: number, temp_f: number, condition:Condition
}

interface ApiResponse {
  location: Location,
  current: Current;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  
  constructor(private http: HttpClient){
  }
  getWeather(place: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`https://api.weatherapi.com/v1/current.json?q=${place}&lang=ES&key=your-apikey-here`);
  }

}
