import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  imageData: any[];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getImageoftheDay().subscribe((response: any) => {
      this.imageData = response;
    });
  }

}
