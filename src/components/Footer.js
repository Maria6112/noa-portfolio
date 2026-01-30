import "./Footer.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaTiktok,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="site-footer">
        <h4>{t("footer.contacts")}</h4>

        <div className="social">
          {/* ИКОНКИ — ОДНА СТРОКА */}
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@liba.films?_r=1&_t=ZS-92sJE6m4ojp"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-tiktok"
            >
              <FaTiktok size={24} />
            </a>
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
            <a
              href="https://vimeo.com/user247096073"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-vimeo"
            >
              <FaVimeo size={25} />
            </a>
            <a
              href="https://www.youtube.com/@LIBAFILMS"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-youtube"
            >
              <FaYoutube size={25} />
            </a>
          </div>

          {/* EMAIL — ОТДЕЛЬНАЯ СТРОКА */}
          <div className="email-icons">
            <a href="mailto:noaliba10@gmail.com" className="email-link">
              <FaEnvelope /> noaliba10@gmail.com
            </a>
          </div>

          {/* PHONE — ОТДЕЛЬНАЯ СТРОКА */}
          <div className="phone-number">
            <a href="tel:+972515330681" className="phone-link">
              <FaPhone style={{ marginRight: "6px" }} />
              972-51-5330681
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {t("footer.rights")}</p>
        <p>Built with React by Maria Fomin</p>
      </div>
    </footer>
  );
};
export default Footer;
