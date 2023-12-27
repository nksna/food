import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private master: MasterService, private routes: Router) { }
  categories: any[] = []
  ngOnInit(): void {
    this.loadallfoodcategories()
  }
  loadallfoodcategories() {
    this.master.getAllfoodcatergories().subscribe((res: any) => {

      if (res.data) {
        res.data.forEach((category: any) => {
          if (category.categoryName === "string") {
            category.categoryName = "chicken";
          }
          if (category.photoUrl === "string") {
            category.photoUrl = "./assets/img.jpg";
          }
        });
      }
      this.categories = res.data;
    })

  }
  navigation(items: any, item: any) {
    this.routes.navigate(['/Restaurant-items', items, item])
  }
}