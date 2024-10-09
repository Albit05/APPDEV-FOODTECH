import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'starting',
    pathMatch: 'full'
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-customer',
    loadChildren: () => import('./admin-customer/admin-customer.module').then( m => m.AdminCustomerPageModule)
  },
  {
    path: 'customer-dashboard',
    loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then( m => m.CustomerDashboardPageModule)
  },
  {
    path: 'starting',
    loadChildren: () => import('./starting/starting.module').then( m => m.StartingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
