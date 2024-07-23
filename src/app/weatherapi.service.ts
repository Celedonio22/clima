import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  constructor(private http: HttpClient){
    this.http.get('https://reqres.in/api/users?page=2');
  }
  getWeather() {
    const place="Tampacan";
    const condition="Parcialmente nublado";
    const name = `El estado del tiempo en ${place} es: ${condition}`;
    return name;
  }
}
