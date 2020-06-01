import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  isLoading;
  constructor() {  }

  ngOnInit() {
    this.isLoading = true;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

  }


}
