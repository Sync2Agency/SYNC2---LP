import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  console.log("--- Initializing Sync2 Server ---");
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());
  console.log("Environment:", process.env.NODE_ENV);
  console.log("Port:", PORT);

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Email Sending Route
  app.post("/api/send-email", async (req, res) => {
    const { name, email, company } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP configuration missing");
      return res.status(500).json({ error: "Email service not configured on server" });
    }

    try {
      console.log(`Attempting to send email to ${email} via ${SMTP_HOST}:${SMTP_PORT}...`);
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
        debug: true,
        logger: true
      });

      const mailOptions = {
        from: SMTP_FROM || SMTP_USER,
        to: email,
        subject: "【SYNC2 AGENCY】資料ダウンロードありがとうございます",
        text: `${name} 様\n\nこの度は資料をダウンロードいただき、誠にありがとうございます。\n株式会社SYNC2の運用プラン資料をお送りいたします。\n\n会社名: ${company}\n\n※このメールは自動送信されています。`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <p>${name} 様</p>
            <p>この度は資料をダウンロードいただき、誠にありがとうございます。<br>
            株式会社SYNC2 運用プラン資料をお送りいたします。</p>
            <p><strong>会社名:</strong> ${company}</p>
            <hr>
            <p>SNSを「資産」に変える第一歩として、ぜひご活用ください。</p>
            <p>ご不明な点がございましたら、お気軽にLINEまたはメールにてお問い合わせください。</p>
            <br>
            <p>SYNC2 AGENCY チーム一同</p>
          </div>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      res.json({ success: true });
    } catch (error) {
      console.error("DETAILED SMTP ERROR:", error);
      res.status(500).json({ error: "Failed to send email", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // Vite middleware for development (dynamic import to avoid production issues)
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started and listening on http://0.0.0.0:${PORT}`);
    console.log("Health check available at /api/health");
  }).on('error', (err) => {
    console.error("FAILED TO START SERVER:", err);
    process.exit(1);
  });
}

startServer().catch(err => {
  console.error("CRITICAL ERROR DURING SERVER STARTUP:", err);
  process.exit(1);
});
