import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import {Hit} from './ResponseData';
import {ResponseData} from './ResponseData';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent implements OnInit {
  response: any[];



  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getNewsFeed().subscribe ((response: any) => {
        this.response = response.hits;
    });
  }

}
