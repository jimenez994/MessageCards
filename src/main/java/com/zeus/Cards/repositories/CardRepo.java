package com.zeus.Cards.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zeus.Cards.models.Card;

public interface CardRepo extends CrudRepository<Card, Long> {
	@Query(value="SELECT * FROM card ORDER BY created_at DESC;", nativeQuery=true)
	List<Card> findAll();
}
