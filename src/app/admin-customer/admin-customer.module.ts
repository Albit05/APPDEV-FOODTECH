import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCustomerPageRoutingModule } from './admin-customer-routing.module';

import { AdminCustomerPage } from './admin-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCustomerPageRoutingModule
  ],
  declarations: [AdminCustomerPage]
})
export class AdminCustomerPageModule {}
