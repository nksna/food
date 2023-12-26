import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private master:MasterService,private router:Router){}
  loginform:any
  loginObj:any={
   "userName":"",
   "password":"" 
  }
  Loginform(){
      this.master.getLogin(this.loginObj).subscribe((res:any)=>{
        if(res.result){
          localStorage.setItem('zamatouser',JSON.stringify(res.data))
          this.router.navigateByUrl('/foodcategories')
        }else{
       alert(res.message)
        }
      })
  }
}
