import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private master:MasterService,private router:Router,private authservice:AuthServiceService){}
  loginform:any
  loginObj:any={
   "userName":"",
   "password":"" ,
   "mobileNo":"",
   "emailId":"",
   "role":"",
   "Adress":""
  }
  username:string ="";
  password:string ="";
  Address:any ="";
  email:string ="";
  mobilenumber:any =""
  Loginform(){

      // this.master.getRegister(this.loginObj).subscribe((res:any)=>{
      //   if(res.result){
          
      //     localStorage.setItem('zamatouser',JSON.stringify(res.data))
      //     localStorage.setItem('helo',JSON.stringify(this.loginObj))
      //     this.master.setLoginStatus(true);
      //     this.router.navigateByUrl('/foodcategories')
      //     alert('Register Succussfully');
      //   }else{
      //     alert(res.message)
      //   }
      // })
      if(this.email == ""){
        alert("please enter email")
      }
      if(this.password == ""){
        alert("please enter email")
      }
      this.authservice.Register(this.email,this.password);
      this.email="";
      this.password ="";
  }
  login(){
    this.router.navigateByUrl('/login')
  }
}
