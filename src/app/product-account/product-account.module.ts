import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAccountPageRoutingModule } from './product-account-routing.module';

import { ProductAccountPage } from './product-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAccountPageRoutingModule
  ],
  declarations: [ProductAccountPage]
})
export class ProductAccountPageModule {}
