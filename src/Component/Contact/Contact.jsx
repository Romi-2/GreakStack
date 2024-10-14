import './Contact.css';
import  { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Import ReCAPTCHA component
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone_icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white_arrow.png';

function Contact() {
  const [result, setResult] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null); // State for reCAPTCHA token

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!captchaToken) {
      setResult("Please complete the CAPTCHA");
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f48ab5fa-fc67-46be-b43b-e5c4dbcc5914");
    formData.append("g-recaptcha-response", captchaToken); // Append CAPTCHA token to form data

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setCaptchaToken(null); // Reset CAPTCHA token after successful submission
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // Update the token when CAPTCHA is completed
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
          <textarea name='textarea' rows='6' placeholder='Enter your message' required />
          
          {/* reCAPTCHA Component */}
          <ReCAPTCHA
            sitekey="6LdONjAqAAAAAODLRhxRdnE9k3QC82qxWNZTYc1W" // Replace with your actual site key
            onChange={handleCaptchaChange}
          />

          <div className='contact-btn'>
            <button className="button" type="submit">submit<img src={white_arrow} alt="" /></button>
          </div>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
