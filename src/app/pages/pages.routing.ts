import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent
    // children: [
    // {
    //   path: 'lot-management',
    //   loadChildren: 'app/pages/lot-management/lot-management.module#LotManagementModule'
    // },
    // {
    //   path: 'order-management',
    //   loadChildren: 'app/pages/order-management/order-management.module#OrderManagementModule'
    // },
    // {
    //   path: 'my-store',
    //   loadChildren: 'app/pages/my-store/my-store.module#MyStoreModule'
    // },
    // { path: 'my-store', redirectTo: 'lot-management', pathMatch: 'full' }
    // ]
  },
  { path: 'details/:city', component: DetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
