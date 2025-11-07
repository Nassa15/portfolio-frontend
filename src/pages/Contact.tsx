import { useState } from "react";
import "../assets/styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Votre message a été envoyé avec succès ! Je vous répondrai dès que possible." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Une erreur est survenue, veuillez réessayer." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Erreur réseau, impossible d’envoyer le message. Veuillez réessayer plus tard." });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contactez-moi</h2>
          <div className="separator"></div>
          <p>
            Vous avez un projet, une question ou souhaitez simplement échanger ? 
            Remplissez le formulaire et je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer le message</button>

          {status && (
            <p className={status.type === "success" ? "text-success" : "text-error"}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
