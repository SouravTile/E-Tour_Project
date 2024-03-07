package com.example.services;

import com.example.entity.EmailDetails;

public interface EmailService {

	 // To send a simple email
    String sendSimpleMail(EmailDetails details);
 

    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
}
