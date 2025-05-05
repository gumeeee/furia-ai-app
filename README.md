# Furia AI

![Furia AI](/public/project-image.png)

Furia AI é um chatbot para fornecer noticias e informações tudo somente sobre a FURIA

## ✨ Funcionalidades

- **Landing Page**  
  Landing Page elegante e funcional.
- **Chat bot**  
  Chat bot integrado com API do Deepseek.

## 🛠️ Tecnologias

- **Next.js 15** (App Router, Server Actions, RSC, Route Handler)
- **shadcn/ui** (Componentes UI com Radix + Tailwind CSS)
- **Auth.js** (Autenticação com NextAuth) [Configuração Auth Github e Google](https://next-auth.js.org/getting-started/introduction)
- **TypeScript** (Tipagem estática)

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- [pnpm](https://pnpm.io/installation) (opcional, mas recomendado)

### 📦 Instalação de Dependências
<details> <summary><b>Com pnpm (recomendado)
</b>
</summary>

```bash
pnpm install
```
</details>

<details> <summary><b>Com npm
</b>
</summary>

```bash
npm install
```
</details>

<details> <summary><b>Com yarn
</b>
</summary>

```bash
yarn install
```
</details>

### Clonando Repositório

1. Clone o repositório:
```bash
git clone https://github.com/gumeeee/furia-ai.git
cd furia-ai-app
code .
```

### 🔐 Configuração das variaveis de ambiente

<details> <summary><b>Preencha o .env.local com suas credenciais:
</b>
</summary>

```bash
DEEPSEEK_API_KEY=sua-chave-api-deepseek
AUTH_GOOGLE_ID=sua-chave-publica-google-app
AUTH_GOOGLE_SECRET=sua-chave-google-secreta
AUTH_GITHUB_ID=sua-chave-publica-github-app
AUTH_GITHUB_SECRET=sua-chave-github-secreta
AUTH_SECRET=secret-gerado
```
</details>

<br>

2. Clone o repositório:


### 🖥️ Iniciando o Servidor

<details> <summary><b>
</b>
</summary>

```bash
# Com pnpm
pnpm dev

# Com npm
npm run dev

# Com Yarn
yarn dev
```
</details>
