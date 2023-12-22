import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ItemsComponent } from './pages/items/items.component';
import { CreateorderComponent } from './pages/createorder/createorder.component';

const routes: Routes = [
  {
    path:'',
    component:CategoriesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'foodcategories',
    component:CategoriesComponent
  },
  {
    path:'Restaurant-items/:categoryId',
    component:ItemsComponent
  },
  {
    path:'create-order',
    component:CreateorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
