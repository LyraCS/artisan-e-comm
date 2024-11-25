import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <div className="sect1">
        <h1>Contact Us</h1>
        <p>
          If you have any inquiries or need more information, feel free to
          contact us
        </p>
        <p>We look forward to assisting you!</p>
      </div>
      <div className="sect2">
        <div className="contact-info">
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p>Universitas Gundarma Kampus D</p>
          </div>
          <div>
            <i className="fas fa-clock"></i>
            <h3>Operating Time</h3>
            <p>Monday - Friday: 9am - 6 pm</p>
            <p>Weekends: 10:30 am - 6pm</p>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <h3>Our Email</h3>
            <p>artisan@gmail.com</p>
            <p>support.artisan@gmail.com</p>
          </div>
          <div>
            <i className="fas fa-phone"></i>
            <h3>Call Us</h3>
            <p>08123456789</p>
            <p>08987654321</p>
          </div>
        </div>
        <div className="feedback">
          <div className="image-placeholder"></div>
          <div className="form-container">
            <h2>Your Feedback Is Much Appreciated!</h2>
            <p>We will contact you when you complete the following form!</p>
            <form>
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Your Email Address *</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="topic">Topic *</label>
              <input type="text" id="topic" name="topic" required />
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
