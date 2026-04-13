/**
 * Hostinger Node.js Entry Point
 */

// Força o ambiente para produção para evitar que o Vite tente iniciar em modo dev
process.env.NODE_ENV = 'production';

console.log("--- Iniciando Servidor Sync2 ---");
console.log("Ambiente:", process.env.NODE_ENV);
console.log("Porta configurada:", process.env.PORT || 3000);

// Carrega o servidor compilado
import('./dist/server.js').then(() => {
  console.log("Servidor carregado com sucesso.");
}).catch((err) => {
  console.error("Erro crítico ao carregar o servidor:", err);
  process.exit(1);
});
