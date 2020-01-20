package com.store.ecommerce.controllers;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.store.ecommerce.models.Product;
import com.store.ecommerce.repositories.ProductRepository;

@RestController
@RequestMapping(path = "/product")
public class ProductService {
    @Autowired
    private ProductRepository _productRepository;
    
    @GetMapping(path = "/find")
    public Product getSellerFromMongoDB(@RequestParam(value = "name") String name){
        return _productRepository.findByName(name);
    }

    @GetMapping(path = "/findall")
    public List<Product> getAllCategoriesFromMongoDB(){
        return _productRepository.findAll();
    }
    
    @PostMapping
    public void insert(@RequestBody Product product) {
    	_productRepository.save(product);
    }
}
