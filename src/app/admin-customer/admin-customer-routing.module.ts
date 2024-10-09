import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCustomerPage } from './admin-customer.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCustomerPageRoutingModule {}
