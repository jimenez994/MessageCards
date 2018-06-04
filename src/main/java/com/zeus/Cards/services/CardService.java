package com.zeus.Cards.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zeus.Cards.models.Card;
import com.zeus.Cards.repositories.CardRepo;
import com.zeus.Cards.validators.CardValidator;

@Service
public class CardService {
	
	@Autowired
	private CardRepo _cR;
	
	@Autowired
	private CardValidator Cvalidator;
	
    ObjectMapper oMapper = new ObjectMapper();
	
	public Map<String, Object> create(Card newCard) {
		Map<String, Object> res = Cvalidator.validate(newCard);
		if(res.containsKey("success")) {
			_cR.save((Card)res.get("card"));
		}
		return res;
	}
	
	public Card getOne(Long id) {
		return _cR.findOne(id);
	}
	
	public List<Card> all(){
		return _cR.findAll();
	}
//	public Map<String, Object> update(Card card, ) {
//		Map<String, Object> res = Cvalidator.validate(Card card);
//		if(res.containsKey("success")) {
//			_cR.save((Card)res.get("card"));
//		}
//		return res;
//	}
	public Map<String, String> delete(Long id){
		Map<String, String> msg = new HashMap<String, String>();
		msg.put("success", "Card delete");
		_cR.delete(id);
		return msg;
	}

}
