import { Injectable } from '@angular/core';
import {AngularFireAuth, }from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {  GoogleAuthProvider } from '@angular/fire/auth';
import { MasterService } from './service/master.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  recaptacha: any;

  constructor(private fire:AngularFireAuth,private router:Router,private master:MasterService,private firestore:AngularFirestore) { }
  login(payload:any){
    this.fire.signInWithEmailAndPassword(payload.email,payload.password).then((res:any)=>{
      if(res){
        localStorage.setItem('token2',  JSON.stringify(res.user));
        this.master.setLoginStatus(true);
        this.router.navigateByUrl('/foodcategories')
      }
    alert("login successfully")
    
     
    },(err:any) =>{
      alert(err.message)
      this.router.navigateByUrl('/login')
    }
    )
  }
  Register(email: string, password: string): void {
    this.fire.createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        if (res) {
          console.log(res.email, res, "res");
          localStorage.setItem('token', res.user);
          alert("Registration successful");
          this.master.setLoginStatus(true);
          this.router.navigateByUrl('/foodcategories');
        }
      })
      .catch((err:any) => {
        alert(err.message);
        this.router.navigateByUrl('/register');
      });
  }
  
  logout(){
    this.fire.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login')
    },(err:any) =>{
      alert(err.message)}
    )

  
  }
  Resetpassword(Email:any){
    this.fire.sendPasswordResetEmail(Email).then(()=>{
      alert("code Successfully send")
    },(err:any) =>{
      alert(err.message)
    }
    )
  }
  Loginwithgoogle(){
    this.fire.signInWithPopup(new GoogleAuthProvider()).then((res: any) => {
      if (res) {
        console.log(res.email, res, "res");
        localStorage.setItem('token', res.user);
        alert("Registration successful");
        this.master.setLoginStatus(true);
        this.router.navigateByUrl('/foodcategories');
      }
    })
    .catch((err:any) => {
      alert(err.message);
      this.router.navigateByUrl('/register');
    });
  }
  updateUser(uid: any, newData: any): Promise<void> {
    const userDocRef = this.firestore.collection('users').doc(uid);

    return userDocRef.set(newData, { merge: true })
      .then(() => {
        console.log('User data updated successfully');
      })
      .catch(error => {
        console.error(`Error updating user data for UID ${uid}:`, error);
        throw error;
      });
  }
  
  
  
  

 
}
