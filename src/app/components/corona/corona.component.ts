import { Component, OnInit } from '@angular/core';
import { CoronaResponse } from './CoronaResponse';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  stats: CoronaResponse;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getCoronaStatus().subscribe(response => {
      this.stats = response;
    });
  }

}
