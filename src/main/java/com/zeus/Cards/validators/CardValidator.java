package com.zeus.Cards.validators;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.zeus.Cards.models.Card;

@Component
public class CardValidator {
	
	public Map<String,Object> validate(Card newCard, MultipartFile file){
		Map<String, Object> msg = new HashMap<String, Object>();
		if(newCard.getTitle().isEmpty() || newCard.getTitle() == null) {
			msg.put("title", "Title is required");
		}
		if(newCard.getDescription().isEmpty() || newCard.getDescription() == null) {
			msg.put("description", "Description is required");
		}
		if(msg.isEmpty()) {
			if(file != null) {
				System.out.println(file);
				try {
					byte[] bytes = file.getBytes();
					String encodedFile = Base64.getEncoder().encodeToString(bytes);
					newCard.setImg(encodedFile);
				}catch(Exception e) {
					System.out.println("Sorry something went wrong");
				}
			}
			msg.put("card", newCard);
			msg.put("success", "Success!");
		}
		return msg;
	}

}
