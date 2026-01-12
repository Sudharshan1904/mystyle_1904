import React from "react";

function Contact() {
  const whatsappNumber = "919080133622";
  const message = "vanakkam da mapla";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h1>Get In Touch</h1>
        

        <div className="contact-item">
          sudharshankumar1904@gmail.com
        </div>

        <div className="contact-item">
            
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
         
        >
          Whatsapp
        </a>
        </div>

        
      </div>
    </div>
  );
}

export default Contact;
