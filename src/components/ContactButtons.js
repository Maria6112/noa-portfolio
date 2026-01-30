import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaVimeo,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import "./ContactButtons.css";

const ContactButtons = () => {
  return (
    <div className="contact-buttons">
      <a
        href="https://wa.me/972515330681"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp"
      >
        <FaWhatsapp className="icon" />
      </a>
      <a
        href="https://t.me/+972515330681"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn telegram"
      >
        <FaTelegramPlane className="icon" />
      </a>
      <a
        href="https://vimeo.com/user247096073"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn vimeo"
      >
        <FaVimeo className="icon" />
      </a>
      <a
        href="https://www.youtube.com/@LIBAFILMS"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn youtube"
      >
        <FaYoutube className="icon" />
      </a>
      <a
        href="https://www.tiktok.com/@liba.films"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn tiktok"
      >
        <FaTiktok className="icon" />
      </a>
    </div>
  );
};

export default ContactButtons;
