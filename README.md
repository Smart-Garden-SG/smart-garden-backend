
# 🌿 Smart-Garden Backend 🌱

Bem-vindo ao **Smart-Garden Backend**! Esta aplicação fornece APIs para gerenciar e monitorar os dispositivos e dados coletados do jardim inteligente. 🪴🚀

---

## 📦 Funcionalidades Principais

- 🔐 **Autenticação**: Gerenciamento seguro de usuários.
- 📊 **Dashboard**: Fornece dados para visualização dos sensores.
- 📋 **Gestão de Dispositivos**: CRUD completo para dispositivos.
- 🚨 **Eventos**: Registro e consulta de eventos.
- 📏 **Medições**: Leitura e armazenamento de dados de sensores.

---

## 🛠️ Tecnologias Utilizadas

- ⚙️ **Node.js & Express**: Para criar as APIs.
- 🐳 **Docker & Docker Compose**: Para containerização.
- 🗄️ **MongoDB**: Banco de dados para armazenar medições e eventos.
- 📡 **Mosquitto MQTT**: Broker MQTT para comunicação com sensores.

---

## 🚀 Como Rodar o Projeto

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Configure o ambiente**:

   Crie um arquivo `.env` na raiz do projeto com suas variáveis de ambiente.

3. **Inicie a aplicação**:

   ```bash
   npm start
   ```

4. **Rodar com Docker**:

   ```bash
   docker-compose up --build
   ```

---

## 📝 Rotas Disponíveis

- **Autenticação**: `/api/auth`
- **Dashboard**: `/api/dashboard`
- **Dispositivos**: `/api/devices`
- **Eventos**: `/api/events`
- **Medições**: `/api/measures`

---

## 🧪 Testes

Rode os testes com:

```bash
npm test
```

---

## 📂 Estrutura do Projeto

```
smart-garden-backend/
│-- controllers/
│-- routes/
│-- models/
│-- scripts/
│-- tests/
│-- index.js
│-- package.json
└-- docker-compose.yml
```

---

## 📝 Licença

Este projeto é licenciado sob a **MIT License**. 📝

---

🌱 **Happy Gardening!** 🌿
