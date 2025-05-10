
// Importando o módulo do Express
const express = require('express');

// Criando uma instância do Express
const app = express();

// Definindo a porta em que o servidor vai rodar
const PORT = 3000;

// Middleware básico para servir arquivos estáticos
app.use(express.static('public'));

// Rota principal (GET)
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Express!');
});

// Rota com parâmetro de URL (dinâmico)
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Olá, ${name}!`);
});

// Rota com consulta de parâmetros (query string)
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Você está procurando por: ${query}`);
});

// Rota para enviar dados via POST
app.use(express.json());  // Middleware para tratar o corpo das requisições como JSON
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Dados recebidos: Nome - ${name}, Email - ${email}`);
});

// Rota com tratamento de erros (404)
app.use((req, res) => {
  res.status(404).send('Página não encontrada!');
});

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
