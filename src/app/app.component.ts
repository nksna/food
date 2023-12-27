import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logging=true
  data:any;
  name:any;
  logoff=false
  title = 'nks';
  isNavbarCollapsed: boolean = true;
  constructor(private master:MasterService,private routes:Router){
    
   
  }
 ngOnInit(): void {
  this.master.loginStatus$.subscribe((status) => {
    if (status) {
      const loggingData = localStorage.getItem('zamatouser');
      if (loggingData !== null) {
        this.name = JSON.parse(loggingData);
        this.data = this.name.userName;
        this.logging=false;
        this.logoff = true
      }
    }
  });
 }
  
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  Logout(){
    if(true){
    localStorage.removeItem("zamatouser")
    this.data=''
    this.logging= true;
    this.logoff =false;
    alert("logout successfully")}else{
   alert("unable to Logout")
    }
  }

}
