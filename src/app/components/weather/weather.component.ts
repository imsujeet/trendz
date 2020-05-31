import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { WeatherResponse } from './weatherResponse';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherdata: WeatherResponse;


  constructor(private apiService: APIService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition( location => {
      this.apiService.getWeather(location.coords.latitude, location.coords.longitude).subscribe( response => {
        this.weatherdata = response;
      });
    });
  }

}
