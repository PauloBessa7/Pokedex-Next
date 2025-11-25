# 🎮 Pokédex Next.js

Uma Pokédex moderna e responsiva construída com **Next.js 15**, **TypeScript** e **Tailwind CSS**, consumindo a [PokéAPI](https://pokeapi.co/).

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)

## ✨ Funcionalidades

- 📱 **Design Responsivo** - UI moderna com gradientes e animações suaves
- ⚡ **Performance Otimizada** - Carregamento ultra-rápido com cache inteligente
- 🎯 **Paginação Inteligente** - Navegue entre milhares de Pokémons com facilidade
- 🔄 **Loading States** - Estados de carregamento elegantes com skeletons
- 🌓 **Tema Escuro/Claro** - Suporte automático para modo escuro
- 🎨 **Animações Modernas** - Efeitos hover e transições suaves
- 🏗️ **Arquitetura Next.js 15** - Server Components + Client Components
- 📦 **TypeScript** - Totalmente tipado para melhor DX

## 🚀 Começando

### Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/PauloBessa7/Pokedex-Next.git

# Entre na pasta do projeto
cd Pokedex-Next

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Estrutura do Projeto

```
app/
├── components/
│   ├── Pagination/
│   │   └── Pagination.tsx      # Componente de paginação
│   ├── Pokemon/
│   │   ├── CardPokemon.tsx     # Card individual do Pokémon
│   │   └── CardPokemonSkeleton.tsx  # Loading skeleton
│   └── PokemonList.tsx         # Lista de Pokémons (Client Component)
├── Pokemon/
│   └── [name]/
│       └── page.tsx            # Página de detalhes do Pokémon
├── types/
│   └── pokemons.ts             # Definições de tipos TypeScript
├── layout.tsx                  # Layout raiz
├── loading.tsx                 # Estado de loading global
└── page.tsx                    # Página principal (Server Component)
```

## 🛠️ Tecnologias

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PokéAPI](https://pokeapi.co/)** - API RESTful de Pokémon
- **[React 19](https://react.dev/)** - Biblioteca UI com Server Components

## 📝 Recursos Técnicos

### Server Components
- Busca de dados otimizada no servidor
- SEO melhorado
- Menor bundle JavaScript

### Client Components
- Interatividade com `useTransition`
- Estados de loading gerenciados
- Navegação suave

### Performance
- Cache inteligente com `force-cache`
- Sprites otimizadas do CDN oficial
- 1 requisição ao invés de 50+ por página

## 🎨 UI/UX

- Cards com gradientes coloridos
- Efeitos de hover com escala e brilho
- Loading skeletons para melhor UX
- Paginação intuitiva com ícones
- Suporte completo a dark mode

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Paulo Bessa**
- GitHub: [@PauloBessa7](https://github.com/PauloBessa7)

---

Desenvolvido com ❤️ usando Next.js e PokéAPI
