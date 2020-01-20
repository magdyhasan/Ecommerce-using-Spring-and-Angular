package com.store.ecommerce.models;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categories")				
@TypeAlias(value = "Category")
public class Category implements Serializable {
	@Id
    private String id;
		
    private String name;

    @DBRef(lazy = true)
    private List<Product> productsOfCategory = new ArrayList<>();

    public Category()
    {
    }	

    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Product> getProductsOfCategory() {
		return productsOfCategory;
	}

	public void setProductsOfCategory(List<Product> productsOfCategory) {
		this.productsOfCategory = productsOfCategory;
	}

	public Category(String name)
    {
        this.name = name;
    }
}
