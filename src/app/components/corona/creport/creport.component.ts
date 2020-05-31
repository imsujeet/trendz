import { Component, OnInit, Input } from '@angular/core';
import { CoronaResponse } from '../CoronaResponse';

@Component({
  selector: 'app-creport',
  templateUrl: './creport.component.html',
  styleUrls: ['./creport.component.css']
})
export class CreportComponent implements OnInit {
  @Input() stats: CoronaResponse;

  constructor() { }

  ngOnInit() {
  }

}
