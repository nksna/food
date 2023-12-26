import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {

   }
   getAllfoodcatergories(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory")
   }

   getrestrauntfoodlist(name:string){
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId='+name)
  }
  getLogin(name:string){
    return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/Login',name)
  }
  getplaceorder(name:any){
      return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder',name)
  }
}