package com.store.ecommerce.controllers;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.store.ecommerce.models.Product;
import com.store.ecommerce.models.Seller;
import com.store.ecommerce.repositories.ProductRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/product/")
public class ProductService {
    @Autowired
    private ProductRepository _productRepository;


    @GetMapping(path = "products-list")
    public List<Product> getAllCategoriesFromMongoDB(){
        return _productRepository.findAll();
    }
    
    @PostMapping(path = "save-product")
    public void insert(@RequestBody Product product) {
    	_productRepository.save(product);
    }
    
    @DeleteMapping("delete-product/{product_id}")  
    public void deleteSeller(@PathVariable("product_id") String product_id) {  
    	_productRepository.deleteById(product_id);  
    }  
    
    @GetMapping(path = "/{seller_id}")
    public Product getProduct(@PathVariable("product_id") String product_id){
    	Product product = _productRepository.findById(product_id).orElse(new Product()); 
        return product;
    }
    
    @PostMapping("update-product/{product_id}")  
    public void updateSeller(@RequestBody Product product,@PathVariable("product_id") String product_id) {  
        product.setId(product_id);  
        _productRepository.save(product);  
    }  
}
