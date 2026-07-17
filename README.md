# Marcos Esteves - Link da Bio

Projeto estatico pronto para publicacao.

Formato visual: pagina minimalista premium em cards verticais, inspirada em portais de links autorais para Instagram.
Os cards principais usam marcas/identidades dos produtos; a foto de Marcos aparece apenas no bloco final de historia.

## Como editar links

Abra `app.js` e altere as constantes:

- `CONSULTORIA_URL`
- `QUIZ_URL`
- `APEX_URL`

## Rastreamento

Os cliques disparam eventos via `dataLayer`, `gtag` e `fbq` quando essas bibliotecas existirem na pagina:

- `click_consultoria_hero`
- `click_quiz_performance`
- `click_mentoria_apex`
- `click_mentoria_apex_footer`

## Publicacao

Suba o conteudo desta pasta em Netlify, Vercel ou qualquer hospedagem estatica. O arquivo principal e `index.html`.
