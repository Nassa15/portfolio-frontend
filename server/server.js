import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
console.log('Destinataire SMTP_USER:', process.env.SMTP_PASS);

// Route contact
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    // Configuration Nodemailer avec SMTP direct
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });

    const mailOptions = {
  from: `"${name}" <${email}>`, // Expéditeur dynamique (celui qui a rempli le formulaire)
  to: process.env.SMTP_TO,     // Destinataire (toit email recevant)
  subject: `Nouveau message de contact de ${name}`, // Sujet clair et court
  text: `Vous avez reçu un nouveau message de contact depuis votre portfolio.\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  html: `
    <h2>Nouveau message de contact depuis votre portfolio</h2>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
    <hr>
    <p><strong>Message :</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
    <hr>
    <p>Merci de répondre rapidement à ce message.</p>
    <p>Cordialement,<br>Votre site portfolio</p>
  `
};

    await transporter.sendMail(mailOptions);

    res.json({ message: "Email envoyé avec succès !" });
  } catch (err) {
    console.error("Erreur Nodemailer:", err);
    res.status(500).json({ error: "Impossible d’envoyer l’email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
