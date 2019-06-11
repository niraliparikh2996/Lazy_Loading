import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'customers',
    loadChildren:'./customers/customers.module#CustomersModule'
  },
  {
    path:'products',
    loadChildren:'./products/products.module#ProductsModule'
  },
  {
    path:'list',
    loadChildren:'./list/list.module#ListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
