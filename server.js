import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.NODE_ENV = 'production';

console.log("--- Iniciando Servidor Sync2 ---");

const compiledServerPath = path.join(__dirname, 'dist', 'server.js');

async function start() {
  if (!fs.existsSync(compiledServerPath)) {
    console.error("ERRO: A pasta 'dist' não foi encontrada.");
    console.log("Tentando iniciar via tsx como emergência...");
    try {
      const { spawn } = await import('child_process');
      spawn('npx', ['tsx', 'server.ts'], { stdio: 'inherit', shell: true });
    } catch (e) {
      console.error("Não foi possível iniciar o modo de emergência.");
    }
    return;
  }

  const serverUrl = pathToFileURL(compiledServerPath).href;
  console.log("Carregando servidor de:", serverUrl);
  
  try {
    await import(serverUrl);
    console.log("Servidor carregado com sucesso.");
  } catch (err) {
    console.error("Erro ao carregar o servidor:", err);
  }
}

start();
