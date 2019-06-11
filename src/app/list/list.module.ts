import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    ProductsModule
  ]
})
export class ListModule { }
