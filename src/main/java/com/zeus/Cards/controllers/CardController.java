package com.zeus.Cards.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
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
	
	@PostMapping("/newCardImg")
	public Map<String, Object> create(@RequestParam("file") MultipartFile file, @RequestParam("card") String card) throws JsonParseException, JsonMappingException, IOException{
		Card newCard = mapper.readValue(card, Card.class);
		if(file.isEmpty()) {
			file = null;
		}
		return _cS.create(newCard, file);
	}
	@PostMapping("/newCard")
	public Map<String, Object> createCard(@RequestBody Card newCard) {
		MultipartFile file = null;
		System.out.println(newCard.getTitle());
		return _cS.create(newCard, file);
	}
	
//	@PutMapping("/update")
//	public Map<String, Object> update(@RequestBody Card card){
//		return _cS.update(card);
//	}

}
