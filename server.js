import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import fs from 'fs';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Força o ambiente para produção
process.env.NODE_ENV = 'production';

console.log("--- Iniciando Servidor Sync2 ---");
console.log("Diretório atual:", __dirname);

const compiledServerPath = path.join(__dirname, 'dist', 'server.js');

if (fs.existsSync(compiledServerPath)) {
  console.log("Servidor compilado encontrado. Carregando...");
  const serverUrl = pathToFileURL(compiledServerPath).href;
  import(serverUrl).then(() => {
    console.log("Servidor carregado com sucesso.");
  }).catch((err) => {
    console.error("Erro ao carregar servidor compilado:", err);
    process.exit(1);
  });
} else {
  console.log("AVISO: dist/server.js não encontrado. Tentando rodar via tsx (fallback)...");
  
  const child = spawn('npx', ['tsx', 'server.ts'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env }
  });

  child.on('error', (err) => {
    console.error("Erro ao tentar rodar fallback tsx:", err);
    process.exit(1);
  });
}
