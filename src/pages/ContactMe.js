import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import "./Contact.css";

const ContactForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus(t("contact.errors.fillAll"));
      return;
    }
    try {
      await emailjs.send(
        "service_4qbsue1",
        "template_mje15rp",
        form,
        "Scuu1QvAY13jEqBtb"
      );
      setForm({ name: "", email: "", message: "" });
      setStatus(t("contact.success"));
    } catch (err) {
      setStatus(t("contact.errors.sendError"));
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <h2 className="fade-in-title">{t("contact.title")}</h2>
      <label>{t("contact.name")}</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={t("contact.placeholders.name")}
        required
      />

      <label>{t("contact.email")}</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t("contact.placeholders.email")}
        required
      />

      <label>{t("contact.message")}</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t("contact.placeholders.message")}
        rows="5"
        required
      />

      <button type="submit">{t("contact.send")} </button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
};
export default ContactForm;
