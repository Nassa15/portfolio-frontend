import { useState } from "react";
import { FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../assets/styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Merci pour votre message ! Je vous recontacterai dans les 24 heures." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Une erreur est survenue, veuillez réessayer." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Erreur de connexion. Veuillez vérifier votre connexion Internet et réessayer." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Collaborons Ensemblea</h2>
          <div className="separator"></div>
          <p>
            Vous avez un projet, une question technique ou souhaitez discuter d'une opportunité de collaboration ? 
            Envoyez-moi un message et je vous répondrai rapidement. Je suis toujours intéressé par les projets innovants et les défis techniques.
          </p>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="votre.email@domaine.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Décrivez votre projet ou votre demande..."
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <button type="submit" disabled={isLoading} className={isLoading ? "loading" : ""}>
            {isLoading ? (
              <>
                <FaSpinner className="spinner-icon" /> Envoi en cours...
              </>
            ) : (
              "Envoyer mon message"
            )}
          </button>

          {status && (
            <div className={`status-message ${status.type}`}>
              {status.type === "success" ? (
                <FaCheckCircle className="status-icon" />
              ) : (
                <FaTimesCircle className="status-icon" />
              )}
              <p>{status.message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
