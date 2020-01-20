import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 constructor(private categoryservice:CategoryService) { }

  categoryArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  categorys: Observable<Category[]>;
  category : Category=new Category();
  updCategory: Category=new Category();
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
    this.categoryservice.getCategoryList().subscribe(data =>{
    this.categorys =data;
    this.dtTrigger.next();
    })
  }
  
  deleteCategory(id: string) {
    this.categoryservice.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.categoryservice.getCategoryList().subscribe(data =>{
            this.categorys =data
            })
        },
        error => console.log(error));
  }


  updateCategory(id: string){
    this.categoryservice.getCategory(id)
      .subscribe(
        data => {
          this.sellerslist=data           
        },
        error => console.log(error));
  }

  showCategory(category: Category){
    this.updCategory = category;
    console.log(this.isupdated);
  }


  categoryupdateform=new FormGroup({
    name:new FormControl(),
  });

  updateCat(updcat){
   this.category=new Category(); 
   this.category.name=this.CategoryName.value;
   

   this.categoryservice.updateCategory(this.category.name,this.category).subscribe(
    data => {     
      this.isupdated=true;
      this.categoryservice.getCategoryList().subscribe(data =>{
        this.categorys =data
        })
    },
    error => console.log(error));
  }

  get CategoryName(){
    return this.categoryupdateform.get('name');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
