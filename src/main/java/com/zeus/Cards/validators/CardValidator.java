package com.zeus.Cards.validators;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.zeus.Cards.models.Card;

@Component
public class CardValidator {
	
	public Map<String,Object> validate(Card newCard){
		Map<String, Object> msg = new HashMap<String, Object>();
		if(newCard.getTitle().isEmpty()) {
			msg.put("title", "Title is required");
		}
		if(newCard.getDescription().isEmpty()) {
			msg.put("description", "Description is required");
		}
		if(msg.isEmpty()) {
			msg.put("card", newCard);
			msg.put("success", "Success!");
		}
		return msg;
	}

}
