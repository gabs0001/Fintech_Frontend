# 💰 Fintech — Gerenciador de Finanças Pessoais (Frontend)

Este projeto implementa a interface de usuário (*client-side*) do Gerenciador de Finanças Pessoais, utilizando uma arquitetura moderna e escalável focada em performance e experiência de usuário (UX).

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework** | **Next.js (React)** | Framework React para renderização do lado do servidor (SSR) e geração de rotas. |
| **Linguagem** | **TypeScript** | Garante a tipagem estática e melhora a manutenibilidade do código. |
| **Estilização** | **Tailwind CSS** | Framework *utility-first* para estilização rápida, responsiva e moderna. |
| **Comunicação**| **Axios / Fetch API** | Cliente HTTP para consumo da API RESTful do *backend* (Java/Spring Boot). |
| **State Mgmt** | **React Context / Outro** | Gerenciamento do estado global da aplicação (Ex: usuário logado, token JWT). |

## 🚀 Como Executar o Projeto

Estes passos guiam você para rodar o ambiente de desenvolvimento do Next.js localmente.

1.  **Pré-requisitos:** Certifique-se de ter o Node.js (versão LTS) e o npm/yarn instalados.
2.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPO_FINTECH_FRONT.git](https://github.com/SEU_USUARIO/SEU_REPO_FINTECH_FRONT.git)
    cd SEU_REPO_FINTECH_FRONT
    ```
3.  **Instalar Dependências:**
    ```bash
    npm install
    # ou yarn install
    ```
4.  **Configurar Variáveis de Ambiente:**
    * Crie um arquivo `.env.local` na raiz do projeto.
    * Defina a URL base da sua API de *backend*:
        ```
        NEXT_PUBLIC_API_URL=http://localhost:8080/api
        ```

5.  **Rodar o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    ```
    * O aplicativo estará acessível em `http://localhost:3000`.

## 🧭 Rotas da Aplicação (Navegação)

As principais rotas da aplicação (páginas) seguem o padrão de navegação:

| Rota | Componente/Página | Descrição | Acesso |
| :--- | :--- | :--- | :--- |
| `/` | `Home.tsx` | Página inicial e de *landing page*. | Público |
| `/login` | Tela de autenticação e login. | Público |
| `/cadastro` Tela de registro de novo usuário. | Público |
| `/dashboard` | Visão geral das finanças do usuário (protegida por autenticação). | Privado |
| `/recebimentos` | Gerenciamento e cadastro de todos os recebimentos. | Privado |
| `/gastos` | Gerenciamento e cadastro de todas as despesas/gastos. | Privado |
| `/investimentos`| Acompanhamento de portfólio de investimentos. | Privado |
| `/objetivos` | Criação e monitoramento de metas financeiras. | Privado |
| `/instituicoes` | Gerenciamento de Instituições Financeiras. | Privado |
