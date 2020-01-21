package com.store.ecommerce.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.ecommerce.models.Seller;

@Repository
public interface SellerRepository extends MongoRepository<Seller, String>{
    List<Seller> findByFirstName(String firstName);
    Optional<Seller> findById(String id);
}
