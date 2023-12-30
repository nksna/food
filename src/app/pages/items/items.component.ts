import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  address: any;
  restraunt: any[] = [];
  quantity: number = 0;
  zomato: any;
  selectedFoodItem: any;
  orderObj: any;
  constructor(private Activate: ActivatedRoute, private master: MasterService) {
    this.Activate.params.subscribe((res: any) => {
      this.loadrestrauntdatalist(res.categoryId)
      this.zomato = res.categoryName
    })
    const LoggingData = localStorage.getItem('zamatouser');
    if (LoggingData != null) {
      const data = JSON.parse(LoggingData)
      this.orderObj = data.userId
    }
  }



  openQtyModel(item: any) {
    const model = document.getElementById('myModal')
    if (model != null) {
      model.style.display = "block";
    }
    this.selectedFoodItem = item;
  }
  closeQtyModel() {
    const model = document.getElementById('myModal')
    if (model != null) {
      model.style.display = "none";
    }
  }
  placeorder() {
    const items = {

      "userId": this.orderObj,
      "totalAmount": this.selectedFoodItem.price,
      "restaurantId": this.selectedFoodItem.restaurantID,
      "deliveryAddress": this.address,

    };


    this.master.getplaceorder(items).subscribe((res: any) => {
      if (res.result) {
        alert('Order Placed')
        this.closeQtyModel();
      } else {
        res.message="Login to continue"
        alert(res.message)
      }
      if(this.orderObj === 0){
        alert('Login to continue')
      }
    }
    )
  }
  loadrestrauntdatalist(name: string) {
    this.master.getrestrauntfoodlist(name).subscribe((res: any) => {
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

      } else if (name === "23") {
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

      } else if (name === "24") {
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

      } else if (name === "26") {
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

      } else if (name === "29") {
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

      } else if (name === "30") {
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

      } else if (name === "31") {
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