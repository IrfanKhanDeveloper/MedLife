import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'medicine' , component:MedicineComponent},
  {path:'top-deals-by-category' , component:TopDealsByCategoryComponent},
  {path:'view-product-details/:drugCode' , component:ViewProductDetailsComponent},
  {path:'',pathMatch:'full' , redirectTo:'/home'},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
