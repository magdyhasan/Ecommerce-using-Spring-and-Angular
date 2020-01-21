import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Product } from '../models/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  product : Product=new Product();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  productsaveform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    description:new FormControl(),
    price:new FormControl(),
    image_URL:new FormControl(),
    category:new FormControl(),
    seller:new FormControl(),
  });

  saveProduct(saveProduct){
    this.product=new Product(); 
    this.product.id=this.ProductId.value;
    this.product.name=this.ProductName.value;
    this.product.description=this.ProductDescription.value;
    this.product.price=this.ProductPrice.value;
    this.product.image_URL=this.ProductImage_URL.value;
    this.product.category=this.ProductCategory.value;
    this.product.seller=this.ProductSeller.value;
    this.submitted = true;
    this.save();
  }

  save() {
    console.log(this.product.category);
    this.productservice.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }
  get ProductId(){
    return this.productsaveform.get('id');
  }
  get ProductName(){
    return this.productsaveform.get('name');
  }

  get ProductDescription(){
    return this.productsaveform.get('description');
  }

  get ProductPrice(){
    return this.productsaveform.get('price');
  }

  get ProductImage_URL(){
    return this.productsaveform.get('image_URL');
  }

  get ProductCategory(){
    return this.productsaveform.get('category');
  }

  get ProductSeller(){
    return this.productsaveform.get('seller');
  }

  addSellerForm(){
    this.submitted=false;
    this.productsaveform.reset();
  }
}
