import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {

  }
  private loginStatusSubject = new BehaviorSubject<boolean>(false);
  private RegisterStatusSubject = new BehaviorSubject<boolean>(false);

  // Observable for login status
  loginStatus$ = this.loginStatusSubject.asObservable();
  RegisterStatus$ = this.RegisterStatusSubject.asObservable();

  setLoginStatus(status: boolean) {
    this.loginStatusSubject.next(status);
  }
  setRegister(status: boolean) {
    this.RegisterStatusSubject.next(status);
  }
  getAllfoodcatergories() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory")
  }

  getrestrauntfoodlist(name: string) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId=' + name)
  }
  getLogin(name: string) {
    return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/Login', name)
  }
  getplaceorder(name: any) {
    return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder', name)
  }
  getRegister(name:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/AddNewUser',name)
  }
  
}