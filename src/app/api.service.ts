import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from './components/news/ResponseData';
import {WeatherResponse} from './components/weather/weatherResponse';
import { CoronaResponse } from './components/corona/CoronaResponse';



@Injectable({
  providedIn: 'root'
})
export class APIService {
  private url = 'http://hn.algolia.com/api/v1/search?tags=front_page';
  private lat;
  private lon;
  private nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=TVnIB3QOB7pbIRKqhVuISsKxf2mCEAGH76CuJBPL';
  private  weatherApi =
    `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=336b9f498f96bba34dcc054d07d542ed`;

  private covidAPI = 'https://api.thevirustracker.com/free-api?countryTotal=IN';



  constructor(private httpClient: HttpClient) { }

  public getNewsFeed() {
    return this.httpClient.get<ResponseData>(this.url);
  }

  public getImageoftheDay() {
    return this.httpClient.get(this.nasaURL);
  }

  public getWeather(lat, lon) {
    return this.httpClient.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=336b9f498f96bba34dcc054d07d542ed`
    );
  }

  public getCoronaStatus() {
    return this.httpClient.get<CoronaResponse>(this.covidAPI);

  }

}
