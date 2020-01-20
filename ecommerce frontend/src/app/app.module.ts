import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerService } from './services/seller.service';
import { AddSellerComponent } from './add-seller/add-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    AddSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
