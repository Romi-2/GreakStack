import './Contact.css';
import { useState } from 'react';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone_icon.png';
import location_icon from '../../assets/location-icon.png';

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "f48ab5fa-fc67-46be-b43b-e5c4dbcc5914");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        setShowThankYou(true);
        setResult("Message sent successfully!");
        event.target.reset();
        
        setTimeout(() => {
          setShowThankYou(false);
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        setTimeout(() => setResult(""), 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error. Please try again.");
      setTimeout(() => setResult(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className='contact'>
        <div className='contact-col'>
          <h3>
            Send us a message
            <img src={msg_icon} alt="" />
          </h3>
          <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              Contact@GreatStack.dev
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +1 123-456-7890
            </li>
            <li>
              <img src={location_icon} alt="" />
              77 Massachusetts Ave, Cambridge
              MA 02139, United States
            </li>
          </ul>
        </div>
        
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />
          
          <label>Your email</label>
          <input type="email" name='email' placeholder='Enter your email Id' required />
          
          <label>Write your messages here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required />
          
          <div className='contact-btn'>
            <button className="button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {result && <span className="result-message">{result}</span>}
        </form>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="thankyou-popup" onClick={() => setShowThankYou(false)}>
          <div className="thankyou-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="thankyou-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <p>We&#39ll get back to you within 24-48 hours.</p>
            <button onClick={() => setShowThankYou(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;