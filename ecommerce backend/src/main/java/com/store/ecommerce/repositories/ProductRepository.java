package com.store.ecommerce.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.ecommerce.models.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
	Product findByName(String name);
}
