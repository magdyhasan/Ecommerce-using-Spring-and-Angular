import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerListComponent } from './seller-list/seller-list.component';
import { AddSellerComponent } from './add-seller/add-seller.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-sellers', pathMatch: 'full' },
  { path: 'view-sellers', component: SellerListComponent },
  { path: 'add-seller', component: AddSellerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
