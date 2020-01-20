package com.store.ecommerce.models;



import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sellers")
@TypeAlias(value = "Seller")
public class Seller {
    @Id
    private String id;

    private String accountId;

    private String firstName;
    
    private String lastName;

    public Seller(){
    }

    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Seller(String accountId, String firstName, String lastName){
        this.accountId = accountId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

	@Override
	public String toString() {
		return "Seller [id=" + id + ", accountId=" + accountId + ", firstName=" + firstName + ", lastName=" + lastName
				+ "]";
	}
}
