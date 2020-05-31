import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import {Hit} from './ResponseData';
import {ResponseData} from './ResponseData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent implements OnInit {
  response: any[];



  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getNewsFeed().subscribe (response => {
        this.response = response.hits;
    });
  }

}
