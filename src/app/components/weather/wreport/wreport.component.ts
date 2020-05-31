import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse } from '../weatherResponse';

@Component({
  selector: 'app-wreport',
  templateUrl: './wreport.component.html',
  styleUrls: ['./wreport.component.css']
})
export class WreportComponent implements OnInit {
  @Input() weatherData: WeatherResponse;


  constructor() { }

  ngOnInit() {
  }

}
