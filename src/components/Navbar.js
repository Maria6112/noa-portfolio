import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

// import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
// import { NavLink, Link } from "react-router-dom";
// import logo from '../images/logo.JPG';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(window.location.hash || "#home");
  const observerRef = useRef(null);

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setActive(window.location.hash || "#home");
  //   };
  //   window.addEventListener("hashchange", handleHashChange);
  //   handleHashChange();

  //   return () => window.removeEventListener("hashchange", handleHashChange);
  // }, []);

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#packages", label: t("nav.packages") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];
  // Устанавливаем lang/dir на html
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Обработчик клика по логотипу — скроллим наверх и делаем #home активным
  const handleLogoClick = () => {
    setMenuOpen(false);
    setActive("#home");
    // Плавный скролл наверх
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Обновляем хэш в URL без смещения страницы
    window.history.replaceState(null, "", "#home");
  };

  // Клик по пункту меню — плавный скролл, закрыть меню, установить active
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: прокрутить наверх
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActive(href);
    setMenuOpen(false);
    window.history.replaceState(null, "", href);
  };

  // IntersectionObserver — следим за секциями и ставим active
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const options = {
      root: null,
      // сдвиг, чтобы секция считалась видимой, когда её центр приблизительно в центре экрана
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActive((prev) => {
            if (prev !== id) {
              // обновляем хэш в URL без добавления истории (не вызывает скролл)
              window.history.replaceState(null, "", id);
              return id;
            }
            return prev;
          });
        }
      });
    };

    // создаём один observer и сохраняем в ref для очистки
    observerRef.current = new IntersectionObserver(callback, options);
    sections.forEach((sec) => observerRef.current.observe(sec));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]); // зависимость t чтобы при смене языка пересобрать список секций (если id меняться не будут — ok)

  // useEffect(() => {
  //   document.documentElement.lang = i18n.language;
  //   document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
  // }, [i18n.language]);

  const isHebrew = i18n.language === "he";

  return (
    <nav className={`navbar ${isHebrew ? "rtl" : "ltr"}`}>
      <div
        className="navbar-logo"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
      >
        <img src="images/logo192.png" alt="logo" className="logo-img" />
      </div>
      <div className="burger">
        <button
          className="burger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </button>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            // onClick={() => setMenuOpen(false)}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`nav-link ${active === item.href ? "active-link" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="lang-switch">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
