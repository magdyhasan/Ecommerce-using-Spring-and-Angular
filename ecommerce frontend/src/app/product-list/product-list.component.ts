import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 constructor(private productservice:ProductService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  products: Observable<Product[]>;
  product : Product=new Product();
  updProduct: Product=new Product();
  deleteMessage=false;
  productslist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.productservice.getProductList().subscribe(data =>{
    this.products =data;
    this.dtTrigger.next();
    })
  }
  
  deleteProduct(id: string) {
    this.productservice.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.productservice.getProductList().subscribe(data =>{
            this.products =data
            })
        },
        error => console.log(error));
  }

  showProduct(product: Product){
    this.updProduct = product;
    console.log(this.isupdated);
  }


  productupdateform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    description:new FormControl(),
    price:new FormControl(),
    image_URLs:new FormControl(),
    categories:new FormControl(),
    seller:new FormControl(),
  });

  updateProduct(updpro){
   this.product=new Product(); 
   this.product.id=this.ProductId.value;
   this.product.name=this.ProductName.value;
   this.product.description=this.ProductDescription.value;
   this.product.price=this.ProductPrice.value;
   this.product.image_URL=this.ProductImage_URL.value;
   this.product.category=this.ProductCategory.value;
   this.product.seller=this.ProductSeller.value;
   console.log(this.ProductId.value);
   

   this.productservice.updateProduct(this.product.id,this.product).subscribe(
    data => {     
      this.isupdated=true;
      this.productservice.getProductList().subscribe(data =>{
        this.products =data
        })
    },
    error => console.log(error));
  }
  get ProductId(){
    return this.productupdateform.get('id');
  }
  get ProductName(){
    return this.productupdateform.get('name');
  }

  get ProductDescription(){
    return this.productupdateform.get('description');
  }

  get ProductPrice(){
    return this.productupdateform.get('price');
  }

  get ProductImage_URL(){
    return this.productupdateform.get('image_URL');
  }

  get ProductCategory(){
    return this.productupdateform.get('categorys');
  }

  get ProductSeller(){
    return this.productupdateform.get('seller');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
