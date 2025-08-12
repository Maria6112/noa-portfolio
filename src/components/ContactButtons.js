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
        <FaWhatsapp size={30} color="#25D366" />
      </a>
      <a
        href="https://t.me/+972515330681"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn telegram"
      >
        <FaTelegramPlane size={30} color="#0088cc" />
      </a>
    </div>
  );
};

export default ContactButtons;
