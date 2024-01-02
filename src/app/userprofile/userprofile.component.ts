import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { AngularFirestore,AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileForm: FormGroup;
  selectedFile: any; // To store selected profile image
  name:any;
  data:any;
  displayname:any;
  mobileNumber:any;
  Address:any;
  userData:any;
  userIdToFetch:any;
  constructor(private fb: FormBuilder, private master: MasterService,private authservice:AuthServiceService,private firestore:AngularFirestore) {
    this.profileForm = this.fb.group({
      name: [''],
      mobileNumber: [''],
      address: ['']
      // Add more form controls as needed
    });
  }

  ngOnInit(): void {
    this.master.loginStatus$.subscribe((status) => {
      if (status) {

        const loggingData = localStorage.getItem('token2');
       
        if (loggingData !== null ) {
          this.name = JSON.parse(loggingData);
          
        
        }
        
        
        
      }
    });
    if (this.name && this.name.uid) {
      this.userIdToFetch = this.name.uid;

      console.log('Debug - User ID to Fetch:', this.userIdToFetch);

      // Directly fetch the user document using uid with valueChanges()
      this.firestore
  .collection('users')
  .doc(this.userIdToFetch)
  .valueChanges()
  .subscribe(
    (data) => {
      // Handle successful data retrieval
      if (data) {
        this.userData = data;
        console.log('User data for userId1:', this.userData);
      } else {
        console.log('User not found for userId1');
      }
    },
    (error) => {
      // Handle errors
      console.error('Error getting user data:', error);
    });
    }}
  
  
   

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result as string;
      };
      reader.readAsDataURL(file);
    }}
    logout() {
      // Implement logout logic
    }
  
    goToSettings(){
      // Implement navigation to settings page
    }
  
    openQtyModel() {
      const model = document.getElementById('myModal')
      if (model != null) {
        model.style.display = "block";
      }
      
    }
    closeQtyModel() {
      const model = document.getElementById('myModal')
      if (model != null) {
        model.style.display = "none";
      }
    }
    updateprofile(){
      const uid=this.name.uid;
      const user={
        "Address":this.Address,
        "displayName":this.displayname,
        "Mobilenumber":this.mobileNumber,
        "PhotoUrl":this.selectedFile
      }
        this.authservice.updateUser(uid,user)
    }
  // ... (other methods)
}
