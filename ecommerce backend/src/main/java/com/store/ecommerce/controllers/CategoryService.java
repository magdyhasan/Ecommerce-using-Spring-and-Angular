package com.store.ecommerce.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.store.ecommerce.models.Category;
import com.store.ecommerce.repositories.CategoryRepository;

@RestController
@RequestMapping(path = "/category/")
public class CategoryService {
    @Autowired
    private CategoryRepository _categoryMongoRepository;
    
    @GetMapping(path = "find")
    public Category getCategoryFromMongoDB(@RequestParam(value = "name") String name){
        return _categoryMongoRepository.findByName(name);
    }

    @GetMapping(path = "findall")
    public List<Category> getAllCategoriesFromMongoDB(){
        return _categoryMongoRepository.findAll();
    }
    
    @PostMapping
    public void insert(@RequestBody Category category) {
    	_categoryMongoRepository.save(category);
    }
}
