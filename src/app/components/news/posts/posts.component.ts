import { Component, OnInit, Input } from '@angular/core';
import { ResponseData } from '../ResponseData';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() data: ResponseData;
  @Input() pointer;

  constructor() { }

  ngOnInit() {

  }

}
