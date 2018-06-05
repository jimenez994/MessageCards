package com.zeus.Cards.validators;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.zeus.Cards.models.Card;

@Component
public class CardValidator {
	
	public Map<String,Object> validate(Card newCard){
		Map<String, Object> msg = new HashMap<String, Object>();
		if(newCard.getTitle().isEmpty() || newCard.getTitle() == null) {
			msg.put("title", "Title is required");
		}
		if(newCard.getDescription().isEmpty() || newCard.getDescription() == null) {
			msg.put("description", "Description is required");
		}
		if(msg.isEmpty()) {
			msg.put("card", newCard);
			msg.put("success", "Success!");
		}
		return msg;
	}

}
