# 🦸‍♂️ Overwatch Heroes Explorer

Aplicação web desenvolvida em React para listagem e filtragem dos heróis do jogo **Overwatch 2**, consumindo dados em tempo real através da **OverFast API**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📌 Demonstração e Funcionalidades

- **Listagem Completa de Heróis:** Exibição dos personagens com foto, nome e indicação de classe/função (*role*).
- **Filtro por Função:** Seleção dinâmica por categoria — **Tanque** (`tank`), **Dano** (`damage`) e **Suporte** (`support`), além do modo **Todos**.
- **Contador Dinâmico:** Exibição do total de heróis retornados na busca atual.
- **Design Temático e Responsivo:** Layout customizado inspirado nas cores e identidade visual oficial de Overwatch, otimizado para dispositivos móveis, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca para construção da interface baseada em componentes.
- **[Vite](https://vitejs.dev/):** Build tool de alta performance para desenvolvimento web.
- **[OverFast API](https://overfast-api.tekrop.fr/):** API RESTful pública para obtenção dos dados atualizados do Overwatch.
- **CSS3 Puro:** Estilização customizada com Flexbox, CSS Grid e variáveis.

---

## 📁 Estrutura de Pastas

```text
src/
├── assets/         # Imagens, logotipos e favicons
├── components/     # Componentes reutilizáveis da interface
│   ├── Header.jsx      # Cabeçalho com navegação e hero banner
│   ├── HeroCard.jsx    # Card individual de exibição do herói
│   ├── RoleFilter.jsx  # Botões de filtragem por categoria
│   └── Footer.jsx      # Rodapé do projeto
├── services/       # Módulos de integração com APIs externas
│   └── api.js          # Função de consumo da OverFast API
├── App.jsx         # Componente principal e gerenciamento de estado
├── index.css       # Estilos globais e responsividade
└── main.jsx        # Ponto de entrada da aplicação React 
```
## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/vitoria-2005/wsFrontend-Fabrica26.2.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd wsFrontend-Fabrica26.2
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
5. **Acesse a URL indicada no terminal no seu navegador.**

## 📄 Licença e Créditos

- Dados fornecidos publicamente pela OverFast API.
- Todos os direitos de imagens, nomes de heróis e marcas pertencem à Blizzard Entertainment.
- Projeto desenvolvido para fins de estudos no Workshop Front-End na Fabrica de Softwarde do Unipe.
