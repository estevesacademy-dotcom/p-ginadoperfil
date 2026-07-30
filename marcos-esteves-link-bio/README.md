# Marcos Esteves - Link da Bio

Projeto estatico pronto para publicacao.

Formato visual: pagina minimalista premium em cards verticais, inspirada em portais de links autorais para Instagram.
Os cards principais usam as identidades da Consultoria HERO e do Check-up de Performance.

## Como editar links

Abra `app.js` e altere as constantes:

- `CONSULTORIA_URL`
- `QUIZ_URL`

## Rastreamento

Os cliques disparam eventos via `dataLayer`, `gtag` e `fbq` quando essas bibliotecas existirem na pagina:

- `click_consultoria_hero`
- `click_quiz_performance`

## Publicacao

Suba o conteudo desta pasta em Netlify, Vercel ou qualquer hospedagem estatica. O arquivo principal e `index.html`.
