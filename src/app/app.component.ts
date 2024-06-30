import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const httpHeaders: HttpHeaders = new HttpHeaders({
  "x-rapidapi-ua": "RapidAPI-Playground",
  "x-rapidapi-key": "61bca9020amsh00bcc3ce07d5f14p11fb60jsn82ec1ab85c92",
  "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
});
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
  weather_data:any = '';
  city:string = '';
  loading:boolean = true;
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.http.get(
      'https://yahoo-weather5.p.rapidapi.com/weather?location=Thane&format=json&u=f',
      {headers: httpHeaders})
      .subscribe(res=> {
        this.loading= false;
        this.weather_data = res
      })
  }

  search(city:any){
    this.loading= true;
    this.http.get(
      'https://yahoo-weather5.p.rapidapi.com/weather?location='+city+'&format=json&u=f',
      {headers: httpHeaders})
      .subscribe(res=> {
        this.loading= false;
        this.weather_data = res
      })
  }

}
