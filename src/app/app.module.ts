import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ItemsComponent } from './pages/items/items.component';
import { CreateorderComponent } from './pages/createorder/createorder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegisterComponent } from './register/register.component';
import {AngularFireModule} from '@angular/fire/compat'

import { Environments } from 'src/environments';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    ItemsComponent,
    CreateorderComponent,
    UserprofileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Environments.firebase),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



