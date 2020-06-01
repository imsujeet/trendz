import { Component } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd} from '@angular/router';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trendz';
  constructor() {  }

}
