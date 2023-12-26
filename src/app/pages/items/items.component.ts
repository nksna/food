import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent{
  restraunt:any[]=[];
  zomato:any;
   constructor(private Activate:ActivatedRoute,private master:MasterService){
     this.Activate.params.subscribe((res:any)=>{
      this.loadrestrauntdatalist(res.categoryId)
      this.zomato=res.categoryName
     })
   }
   
  loadrestrauntdatalist(name:string){
    this.master.getrestrauntfoodlist(name).subscribe((res:any)=>{
      if (name === "27") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      } else if (name === "25") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }else if (name === "23") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }else if (name === "24") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }else if (name === "26") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      } else if (name === "28") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }else if (name === "29") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }else if (name === "30") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }else if (name === "31") {
        this.restraunt = [
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          {
            restaurantID: 0,
            price: 0,
            menuItemName: "Default Chicken Item",
            itemID: 0,
            availability: true,
            description: "Default description",
            photoUrl: "./assets/img.jpg",
            restaurantName: "NksRestraunt"
          },
          // Add more default items as needed
        ];
        
      }
      else {
        // Handle the case when there is no data
        // Set default values or take appropriate action
        this.restraunt = res.data;
      }
    });
}
}