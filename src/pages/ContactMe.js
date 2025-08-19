import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Contact.css";

const ContactForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePhoneChange = (phone) => {
    console.log("Phone changed:", phone, "Length:", phone.length);

    setForm((prev) => ({ ...prev, phone }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length <= 10) {
      setStatus({
        message: t("contact.errors.incorrectNumber"),
        type: "error",
      });
      return;
    }

    if (!form.name || !form.phone || !form.email || !form.message) {
      setStatus({ message: t("contact.errors.fillAll"), type: "error" });
      return;
    }

    try {
      await fetch(
        "https://hook.eu2.make.com/d8rrpx48kudbjw3ahc4a4x7stwns46cn",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            message: form.message,
          }),
        }
      );
      console.log(form);
      setForm({ name: "", phone: "", email: "", message: "" });
      setStatus({ message: t("contact.success"), type: "success" });
    } catch (err) {
      console.error(err);

      setStatus({ message: t("contact.errors.sendError"), type: "error" });
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <h2 className="contact-title">{t("contact.title")}</h2>
      <label>{t("contact.name")}</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={t("contact.placeholders.name")}
        required
      />
      <label>{t("contact.phone")}</label>
      <PhoneInput
        country={"il"}
        value={form.phone}
        onChange={handlePhoneChange}
        enableSearch={true}
        inputStyle={{ width: "100%" }}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: false,
        }}
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

      {status.message && (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      )}
    </form>
  );
};
export default ContactForm;
