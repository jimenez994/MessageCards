package com.zeus.Cards.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zeus.Cards.models.Card;
import com.zeus.Cards.services.CardService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/card")
public class CardController {
	
	@Autowired 
	private CardService _cS;
	
	ObjectMapper mapper = new ObjectMapper();
	
	@RequestMapping("/all")
	public List<Card> getCards(){
		return _cS.all();
	}
	@RequestMapping("/{id}")
	public Card getOne(@PathVariable("id") long id) {
		return _cS.getOne(id);
	}
	
	@PostMapping("/newCard")
	public Map<String, Object> createCard(@RequestBody Card newCard) {
		return _cS.create(newCard);
	}
	
//	@PutMapping("/update")
//	public Map<String, Object> update(@RequestBody Card card){
//		return _cS.update(card);
//	}

}
