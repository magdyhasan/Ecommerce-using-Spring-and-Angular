package com.store.ecommerce.controllers;

import java.util.List;
import java.util.Optional;

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

import com.store.ecommerce.models.Seller;
import com.store.ecommerce.repositories.SellerRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/seller/")
public class SellerService {
    @Autowired
    private SellerRepository _sellerRepository;

    @GetMapping(path = "sellers-list")
    public List<Seller> getAllCategoriesFromMongoDB(){
        return _sellerRepository.findAll();
    }
//    
//    @GetMapping(path = "/{seller_id}")
//    public List<Seller> getSeller(@PathVariable("seller_id") String seller_id,Seller seller){
//    	seller.setId(seller_id);  
//        return _sellerRepository.findById(seller_id);
//    }

    @PostMapping(path = "save-seller")
    public void insert(@RequestBody Seller seller) {
    	_sellerRepository.save(seller);
    }
    
    @DeleteMapping("delete-seller/{seller_id}")  
    public void deleteSeller(@PathVariable("seller_id") String seller_id) {  
        _sellerRepository.delete(_sellerRepository.findByAccountId(seller_id));  
    }  

    @PostMapping("update-seller/{seller_id}")  
    public void updateSeller(@RequestBody Seller seller,@PathVariable("seller_id") String seller_id) {  
        seller.setId(seller_id);  
        _sellerRepository.save(seller);  
    }  
}
