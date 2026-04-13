import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Força o ambiente para produção
process.env.NODE_ENV = 'production';

console.log("--- Iniciando Servidor Sync2 ---");
console.log("Diretório atual:", __dirname);

// Constrói o caminho absoluto para o servidor compilado
const serverPath = pathToFileURL(path.join(__dirname, 'dist', 'server.js')).href;

console.log("Tentando carregar:", serverPath);

import(serverPath).then(() => {
  console.log("Servidor carregado com sucesso.");
}).catch((err) => {
  console.error("Erro crítico ao carregar o servidor:", err);
  process.exit(1);
});
