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
	
	public Map<String,Object> validate(Card newCard, MultipartFile file){
		Map<String, Object> msg = new HashMap<String, Object>();
		if(newCard.getTitle().isEmpty()) {
			msg.put("title", "Title is required");
		}
		if(newCard.getDescription().isEmpty()) {
			msg.put("description", "Description is required");
		}
		if(msg.isEmpty()) {
			if(!file.isEmpty()) {
				try {
					byte[] bytes = file.getBytes();
					File dir = new File("src/main/webapp/images/");
					if(!dir.exists())
						dir.mkdir();
					File serverFile = new File(dir.getAbsolutePath()
							+ File.separator + file.getOriginalFilename());
					BufferedOutputStream stream = new BufferedOutputStream(
							new FileOutputStream(serverFile));
					stream.write(bytes);
					stream.close();
				}catch(Exception e) {
					System.out.println("Sorry something went worng");
				}
			}
			msg.put("card", newCard);
			msg.put("success", "Success!");
		}
		return msg;
	}

}
