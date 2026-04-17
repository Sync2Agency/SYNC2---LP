import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  console.log("--- Initializing SYNC2 Full-Stack Server ---");
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  console.log("Environment:", process.env.NODE_ENV || 'development');
  console.log("Port:", PORT);

  // --- API Routes ---

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // --- Gemini API Proxy (Moved from Backend) ---
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("Gemini API key missing in environment variables.");
        return res.status(500).json({ error: "Gemini API key not configured on server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...(messages || []).map((h) => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "あなたはSYNC2の専属AIコンサルタントです。高級感のある、丁寧で洗練された日本語で回答してください。回答は専門的ですが、要点を絞って簡潔に（シンプルに）まとめてください。読みやすさを重視し、適切な句読点と改行を使用してください。最後には必ず、より深い戦略相談のためにLINE公式アカウント（https://lin.ee/UwOZ7ho）への招待を優雅に添えてください。",
          maxOutputTokens: 500,
          temperature: 0.6,
        }
      });

      const text = response.text || "申し訳ありません。回答を生成できませんでした。";
      res.json({ text });
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      res.status(500).json({ 
        error: "Failed to generate AI response", 
        details: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // --- Email Sending Route ---
  app.post("/api/send-email", async (req, res) => {
    const { name, email, company, pdfData, fileName } = req.body;

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
        subject: "【SYNC2】戦略資料を送付いたしました",
        text: `${name} 様\n\nこの度は資料をご請求いただき、誠にありがとうございます。\nご請求いただいた「B2B SNS戦略ガイド」を添付いたしましたので、ぜひご一読ください。\n\n会社名: ${company}\n\n※本メールは自動送信されています。`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1a1c2e; font-size: 24px;">SYNC2</h1>
            </div>
            
            <p style="font-size: 16px;">${name} 様</p>
            
            <p>この度は戦略資料をご請求いただき、誠にありがとうございます。<br>
            ご請求いただいた<strong>「B2B SNS戦略ガイド」</strong>を本メールに添付いたしました。</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0;"><strong>お申し込み内容:</strong></p>
              <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>お名前: ${name}</li>
                <li>会社名: ${company}</li>
              </ul>
            </div>
            
            <p>SNSを「資産」に変える第一歩として、貴社のマーケティング活動にぜひお役立てください。</p>
            
            <p>ご不明な点や、より具体的な運用についてのご相談がございましたら、お気軽に公式LINEまたは本メールへの返信にてお問い合わせください。</p>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>SYNC2 チーム一同</p>
              <p>URL: <a href="https://sync2.agency" style="color: #8edce0;">sync2.agency</a></p>
            </div>
          </div>
        `,
        attachments: pdfData ? [
          {
            filename: fileName || "SYNC2_Strategy_Guide.pdf",
            content: pdfData.split('base64,')[1],
            encoding: 'base64'
          }
        ] : []
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      res.json({ success: true });
    } catch (error) {
      console.error("DETAILED SMTP ERROR:", error);
      res.status(500).json({ error: "Failed to send email", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // --- Vite Serving ---

  if (process.env.NODE_ENV !== "production") {
    // Dynamic import to only load vite in development
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

  // --- Start Listening ---

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
