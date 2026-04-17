import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

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
            株式会社SYNC2の運用プラン資料をお送りいたします。</p>
            <p><strong>会社名:</strong> ${company}</p>
            <hr>
            <p>SNSを「資産」に変える第一歩として、ぜひご活用ください。</p>
            <p>ご不明な点がございましたら, お気軽にLINEまたはメールにてお問い合わせください。</p>
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

  // Gemini API Chat Route
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("CRITICAL: GEMINI_API_KEY is missing in environment variables.");
      return res.status(500).json({ error: "Gemini API Key not configured on server" });
    }
    console.log("GEMINI_API_KEY is present, proceeding with request.");

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...(history || []).map((h: any) => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.parts[0].text }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: "あなたはSYNC2 AGENCYのAIコンサルタントです。回答は常に日本語で行い、簡潔に2文以内にまとめてください。回答の最後には必ず、詳細な相談のためにこちらのLINE公式アカウント（https://lin.ee/UwOZ7ho）への登録を促すメッセージを入れてください。",
          maxOutputTokens: 250,
          temperature: 0.7,
        }
      });

      const text = response.text || "申し訳ありません。回答を生成できませんでした。";
      console.log("Gemini response received successfully");

      res.json({ text });
    } catch (error) {
      console.error("Gemini API Error Details:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: "Failed to get response from AI", details: errorMessage });
    }
  });

  // Example Gemini API Proxy (Security: Key stays on server)
  app.post("/api/gemini", async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API Key not configured on server" });
    }
    
    // Here you would implement the call to @google/genai
    // For now, just a placeholder to demonstrate the structure
    res.json({ message: "Gemini API endpoint ready. Implement logic in server.ts" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
