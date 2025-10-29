import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
// import logo from "images/logo192.png";
const SECTION_IDS = ["home", "projects", "packages", "about", "contact"];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(window.location.hash || "#home");
  const [scrolled, setScrolled] = useState(false);

  const observerRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  // Текст пунктов меню — зависит от языка
  const navItems = useMemo(
    () => [
      { href: "#home", label: t("nav.home") },
      // { href: "#projects", label: t("nav.projects") },
      // { href: "#packages", label: t("nav.packages") },
      { href: "#about", label: t("nav.about") },
      { href: "#contact", label: t("nav.contact") },
    ],
    [t]
  );

  // Обработчик клика по логотипу — скроллим наверх и делаем #home активным
  const handleLogoClick = () => {
    setMenuOpen(false);
    setActive("#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "#home");
  };

  // Клик по пункту меню — плавный скролл, закрыть меню, установить active
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActive(href);
    setMenuOpen(false);
    window.history.replaceState(null, "", href);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 200); // если проскроллено больше 10px — ставим true
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // IntersectionObserver — следим за секциями и ставим active
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean);

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
      if (observerRef.current) observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutside = (e) => {
      const menuEl = menuRef.current;
      const burgerEl = burgerRef.current;
      if (
        menuEl &&
        burgerEl &&
        !menuEl.contains(e.target) &&
        !burgerEl.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  const isHebrew = i18n.language === "he";

  return (
    <nav
      className={`navbar 
        ${isHebrew ? "rtl" : "ltr"} 
        ${scrolled ? "scrolled" : ""}
        `}
    >
      <div
        className="navbar-logo"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
      >
        <img src="images/libafilms.svg" alt="logo" className="logo-img" />
      </div>
      <div className="burger" ref={burgerRef}>
        <button
          className="burger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </button>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`} ref={menuRef}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
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
