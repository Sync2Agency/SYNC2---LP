import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Hostinger Node.js Startup Wrapper
 */

console.log("Iniciando servidor via wrapper Hostinger...");

// Caminho direto para o binário do tsx para evitar problemas de PATH
const tsxPath = path.join(__dirname, "node_modules", ".bin", "tsx");

const child = spawn(tsxPath, ["server.ts"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: "production",
  },
});

child.on("close", (code) => {
  console.log(`Processo do servidor encerrado com código ${code}`);
  process.exit(code);
});

child.on("error", (err) => {
  console.error("Erro ao iniciar o processo do servidor:", err);
  process.exit(1);
});
