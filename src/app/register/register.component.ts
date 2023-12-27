import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private master:MasterService,private router:Router){}
  loginform:any
  loginObj:any={
   "userName":"",
   "password":"" ,
   "mobileNo":"",
   "email":"",
   "role":""
  }
  Loginform(){
      this.master.getRegister(this.loginObj).subscribe((res:any)=>{
        if(res.result){
          localStorage.setItem('zamatouser',JSON.stringify(res.data))
          this.master.setLoginStatus(true);
          this.router.navigateByUrl('/foodcategories')
          alert("login Succussfully")
        }else{
       alert(res.message)
        }
      })
  }
}
