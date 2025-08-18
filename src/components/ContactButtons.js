import React from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
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
    </div>
  );
};

export default ContactButtons;
