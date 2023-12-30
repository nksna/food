import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

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
  constructor(private fb: FormBuilder, private master: MasterService,private authservice:AuthServiceService) {
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

        const loggingData = localStorage.getItem('zamatouser');
        const loggingData1 = localStorage.getItem('helo');
        if (loggingData !== null ) {
          this.name = JSON.parse(loggingData);
          
        
        }
        if (loggingData1 !== null ) {
          this.data = JSON.parse(loggingData1);
          
        
        }
        
      }
    });
   
   }

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
   
  // ... (other methods)
}
