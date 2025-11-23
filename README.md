# 🎮 Pokédex Next.js

Uma Pokédex moderna e responsiva construída com **Next.js 15**, **TypeScript** e **Tailwind CSS**, consumindo a [PokéAPI](https://pokeapi.co/).

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)

<img width="1823" height="743" alt="image" src="https://github.com/user-attachments/assets/d2417802-d05a-4838-ad5a-2f7c49b687b0" />

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

## 👨‍💻 Autor

**Paulo Bessa**
- GitHub: [@PauloBessa7](https://github.com/PauloBessa7)
---

