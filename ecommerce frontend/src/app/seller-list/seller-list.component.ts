import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Seller } from '../models/seller';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

 constructor(private sellerservice:SellerService) { }

  sellerArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  sellers: Observable<Seller[]>;
  seller : Seller=new Seller();
  updSeller: Seller=new Seller();
  deleteMessage=false;
  sellerslist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.sellerservice.getSellerList().subscribe(data =>{
    this.sellers =data;
    this.dtTrigger.next();
    })
  }
  
  deleteSeller(id: string) {
    this.sellerservice.deleteSeller(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.sellerservice.getSellerList().subscribe(data =>{
            this.sellers =data
            })
        },
        error => console.log(error));
  }

  showSeller(seller: Seller){
    this.updSeller = seller;
    console.log(this.isupdated);
  }


  sellerupdateform=new FormGroup({
    id:new FormControl(),
    accountId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
  });

  updateSeller(updsel){
   this.seller=new Seller(); 
   this.seller.id=this.SellerId.value;
   this.seller.accountId=this.SellerAccountId.value;
   this.seller.firstName=this.SellerFirstName.value;
   this.seller.lastName=this.SellerLastName.value;
   console.log(this.SellerId.value);
   

   this.sellerservice.updateSeller(this.seller.id,this.seller).subscribe(
    data => {     
      this.isupdated=true;
      this.sellerservice.getSellerList().subscribe(data =>{
        this.sellers =data
        })
    },
    error => console.log(error));
  }
  get SellerId(){
    return this.sellerupdateform.get('id');
  }
  get SellerAccountId(){
    return this.sellerupdateform.get('accountId');
  }

  get SellerFirstName(){
    return this.sellerupdateform.get('firstName');
  }

  get SellerLastName(){
    return this.sellerupdateform.get('lastName');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
