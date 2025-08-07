import "./Footer.css";
import { FaEnvelope, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="site-footer">
        <h4>Contacts</h4>
        <div className="social-icons">
          <a
            href="https://wa.me/972515330681"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn-whatsapp"
          >
            <FaWhatsapp size={25} />
          </a>
          <a
            href="https://t.me/+972515330681"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn-telegram"
          >
            <FaTelegramPlane size={25} />
          </a>
          <div className="social-icons">
            <a href="mailto: stefanikim2@gmail.com" className="email-link">
              <FaEnvelope className="email-icon" /> yourEmail@gmail.com
            </a>
          </div>
        </div>
        <span className="phone-number">+972-51-5330681</span>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Noa Stefanian. All rights reserved</p>
        <p>Built with React by Maria Fomin</p>
      </div>
    </footer>
  );
};
export default Footer;
