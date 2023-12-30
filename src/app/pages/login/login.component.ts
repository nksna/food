import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private master:MasterService,private router:Router,private authservice:AuthServiceService ){}
  loginform:any;
  password:any=""
  email:any =""
  loginObj:any={
   email:"",
   password:"" 
  }
  recaptacha:any="";
  emailforgat:any=""
  phonenumber:any =""
  data:any;
  name:any;
  Otp:any="";
  ngOnInit(): void {
    this.master.loginStatus$.subscribe((status) => {
      if (status) {
        const loggingData = localStorage.getItem('token2');
        if (loggingData !== null) {
           this.name = JSON.parse(loggingData);
           this.data = this.name.email;
          }
         this.openQtyModel1()
      }
    });
   
   }
  Loginform(){
      // this.master.getLogin(this.loginObj).subscribe((res:any)=>{
      //   if(res.result){
      //     localStorage.setItem('zamatouser',JSON.stringify(res.data))
      //     this.master.setLoginStatus(true);
      //     this.router.navigateByUrl('/foodcategories')
      //     alert('Login Succussful');
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
      let payload = {
        email:this.email,
        password:this.password
      }
      this.authservice.login(payload);
      this.email="";
      this.password ="";
  }
  register(){
    this.router.navigateByUrl('/register')
  }
  Send(){
       if(this.emailforgat == ""){
        alert("enter email to continue")
       }
       this.authservice.Resetpassword(this.emailforgat)
  }
  openQtyModel1() {
    const model = document.getElementById('myModal1')
    if (model != null) {
      model.style.display = "block";
    }
    this.emailforgat=this.email;
  }
  openQtyModel() {
    const model = document.getElementById('myModal')
    if (model != null) {
      model.style.display = "block";
    }
    this.emailforgat=this.email;
  }
  closeQtyModel() {
    const model = document.getElementById('myModal')
    if (model != null) {
      model.style.display = "none";
    }
  }
  googlelogin(){
    this.authservice.Loginwithgoogle()

    
  }
 

}
