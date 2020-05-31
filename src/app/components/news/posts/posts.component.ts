import { Component, OnInit, Input } from '@angular/core';
import { Hit } from '../ResponseData';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() data: Hit[] = [];
  @Input() pointer;

  constructor() { }

  ngOnInit() {

  }

}
