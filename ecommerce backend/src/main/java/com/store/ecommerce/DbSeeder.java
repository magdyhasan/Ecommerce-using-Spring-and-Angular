package com.store.ecommerce;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import com.mongodb.MongoClient;
import com.store.ecommerce.models.Product;
import com.store.ecommerce.models.Seller;
import com.store.ecommerce.repositories.ProductRepository;
import com.store.ecommerce.repositories.SellerRepository;

import java.util.ArrayList;

@Component
public class DbSeeder implements CommandLineRunner{
    @Autowired
    private ProductRepository _productReposirory;
    @Autowired
    private SellerRepository _sellerRepository;


    @Override
    public void run(String... strings) throws Exception {
        _sellerRepository.deleteAll();
        _productReposirory.deleteAll();
        
        Seller seller1 = new Seller("1e5", "magdY", "hasan");
        Seller seller2 = new Seller("1e7", "temp", "test");
        Seller seller3 = new Seller("1e8", "total", "new");
        _sellerRepository.save(seller1);
        _sellerRepository.save(seller2);
        _sellerRepository.save(seller3);

        Product product1 = new Product("p1", "p1 is an ",125,"","",seller1);
        Product product2 = new Product("p2", "p2 awsome ",50,"","",seller2);
        Product product3 = new Product("p2", "p3 amazing",76,"","",seller3);
        _productReposirory.save(product1);
        _productReposirory.save(product2);
        _productReposirory.save(product3);

        System.out.println("___________________________________");
        System.out.println("Test MongoDB repository");
        System.out.println("Find seller(s) by first name");
        _sellerRepository.findByFirstName("magdY").forEach(System.out::println);
        System.out.println("___________________________________");
    }
}
