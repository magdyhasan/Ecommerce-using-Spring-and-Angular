package com.store.ecommerce.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.ecommerce.models.Category;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String>{
	Category findByName(String categoryName);
}
