import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Seller } from '../models/seller';
@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.css']
})
export class AddSellerComponent implements OnInit {

  constructor(private sellerservice:SellerService) { }

  seller : Seller=new Seller();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  sellersaveform=new FormGroup({
    accountId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
  });

  saveSeller(saveSeller){
    this.seller=new Seller();   
    this.seller.accountId=this.SellerAccountId.value;
    this.seller.firstName=this.SellerFirstName.value;
    this.seller.lastName=this.SellerLastName.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.sellerservice.createSeller(this.seller)
      .subscribe(data => console.log(data), error => console.log(error));
    this.seller = new Seller();
  }

  get SellerAccountId(){
    return this.sellersaveform.get('accountId');
  }

  get SellerFirstName(){
    return this.sellersaveform.get('firstName');
  }

  get SellerLastName(){
    return this.sellersaveform.get('lastName');
  }

  addSellerForm(){
    this.submitted=false;
    this.sellersaveform.reset();
  }
}
