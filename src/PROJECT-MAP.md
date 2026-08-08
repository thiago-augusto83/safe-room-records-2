# Safe Room Records 2.0 — Mapa atual

## Onde estamos

Estamos na Aula 4 do Safe Room Records 2.0: primeira implementação do Context API.

### Já estudamos
- React Router
- MainLayout
- Sidebar
- Outlet
- Rotas aninhadas
- Página 404
- Prop drilling
- Context API (conceitos)
- Provider
- useContext
- Estado compartilhado

### Estado atual do GameContext

`src/contexts/GameContext/index.jsx` já cria o `GameContext` e possui o início do `GameProvider`.

Ainda falta:
1. adicionar `useState` para `games`;
2. disponibilizar `games` pelo `value`;
3. envolver a aplicação com o `GameProvider`;
4. consumir o contexto em uma página, inicialmente a `Library`.

## Arquitetura atual

App
└── MainLayout
    ├── Sidebar
    └── Outlet
        ├── Dashboard
        ├── Library
        ├── Statistics
        └── Settings

## Próximo passo

Continuar a implementação do `GameProvider`, entendendo cada linha antes de avançar.
