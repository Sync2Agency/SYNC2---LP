import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

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

  app.listen(PORT, () => {
    console.log(`--- Servidor Ativo ---`);
    console.log(`Porta: ${PORT}`);
    console.log(`Modo: ${process.env.NODE_ENV}`);
    console.log(`Diretório Atual: ${process.cwd()}`);
  }).on('error', (err) => {
    console.error("Erro ao iniciar o listener do Express:", err);
  });
}

startServer().catch(err => {
  console.error("Falha fatal na inicialização do servidor:", err);
});
