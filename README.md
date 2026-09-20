# RP Academy

Plataforma web que estou a desenvolver para organizar conteúdos de formação, questões e exercícios dirigidos a comunidades de roleplay.

**Demonstração:** https://rp-academy.vercel.app/

## Objetivo

Quero reunir materiais de aprendizagem e avaliação numa interface fácil de percorrer. O projeto começou pela formação em regras de roleplay e pela estruturação de conteúdos para staff e diferentes corporações.

## Tecnologias

`Next.js 16` · `React 19` · `TypeScript` · `Tailwind CSS` · `Framer Motion`

## Executar localmente

Precisas de uma versão de Node.js compatível com o Next.js 16 e de npm.

```bash
git clone https://github.com/NexysT/RP-Academy.git
cd RP-Academy
npm ci
npm run dev
```

Abre `http://localhost:3000`.

```bash
npm run lint
npm run build
```

Estes comandos estão definidos no `package.json`; a execução local permite verificar o estado do código na tua máquina.

## Estrutura do projeto

| Pasta | Conteúdo |
| :--- | :--- |
| `app/` | Rotas e páginas Next.js. |
| `components/` | Componentes de interface. |
| `data/` | Conteúdo e estruturas de dados. |
| `hooks/` | Lógica reutilizável de React. |
| `lib/` | Funções auxiliares. |
| `types/` | Tipos TypeScript. |
| `public/` | Recursos estáticos. |

## Estado do desenvolvimento

O repositório contém uma implementação em evolução. As funcionalidades apresentadas na demonstração podem mudar; autenticação, API para servidores e gestão administrativa completa não devem ser assumidas como disponíveis sem confirmação no código.

## Próximas etapas

- Consolidar os conteúdos de formação e os exercícios.
- Rever a navegação em telemóvel e por teclado.
- Adicionar testes e documentação dos módulos principais.
- Definir a arquitetura de autenticação e gestão de utilizadores antes de a lançar.

Se detetares um problema reproduzível, abre uma issue com os passos e a página onde ocorreu.
