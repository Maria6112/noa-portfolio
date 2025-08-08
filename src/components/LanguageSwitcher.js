import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import "./Navbar.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("he");
  const [open, setOpen] = useState(false);
  const switcherRef = useRef();

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setOpen(false);
    document.documentElement.classList.remove("ltr", "rtl");
    document.documentElement.classList.add(lang === "he" ? "rtl" : "ltr");
    window.location.reload();
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "he";
    setCurrentLang(savedLang);
    i18n.changeLanguage(savedLang);
    document.documentElement.classList.remove("ltr", "rtl");
    document.documentElement.classList.add(savedLang === "he" ? "rtl" : "ltr");
  }, [i18n]);

  // Закрытие меню при клике вне
  useEffect(() => {
    function handleClickOutside(event) {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Текст кнопки текущего языка
  const langLabel = currentLang === "he" ? "עב" : "EN";

  // Языки для выбора (кроме текущего)
  const otherLang = currentLang === "he" ? "en" : "he";
  const otherLabel = otherLang === "he" ? "עב" : "EN";

  return (
    <div className="lang-switch" ref={switcherRef}>
      <button className="lang-btn active" onClick={() => setOpen(!open)}>
        {langLabel} <span className={`arrow ${open ? "open" : ""}`}>▼</span>
      </button>

      {/* Выпадающее меню с другим языком */}
      {open && (
        <div className="lang-dropdown">
          <div
            onClick={() => changeLanguage(otherLang)}
            className="lang-option"
          >
            {otherLabel}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
