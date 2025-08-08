import "./Footer.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="site-footer">
        <h4>{t("footer.contacts")}</h4>
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
        <span className="phone-number">
          <a href="tel:+972515330681" className="phone-link">
            <FaPhone style={{ margin: "6px" }} />
            972-51-5330681
          </a>
        </span>
      </div>

      <div className="footer-bottom">
        <p>© {t("footer.rights")}</p>
        <p>Built with React by Maria Fomin</p>
      </div>
    </footer>
  );
};
export default Footer;
