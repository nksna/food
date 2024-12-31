import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  intervalId: any;
  constructor(private master: MasterService, private routes: Router) { }
  images: string[] = [
    './assets/img1.jpg',
    './assets/img2.jpg',
    './assets/img3.jpg'
  ];
  currentImageIndex: number = 0;
  ngOnInit(): void {
    this.startImageSlider()
  }
  startImageSlider() {
    this.intervalId= setInterval(() => {
       this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
     }, 5000);
   }
}