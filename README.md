This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

### Résumé du comportement souhaité de la naviguation quand on scroll
```bash
1. Quand le bas de la section parent sort du haut du viewport 
→ Header fixé en haut de l’écran # fixed top-0

2. Quand le bas de la section parent réapparaît dans le viewport
→ Header fixé en bas de la section parent # absolute bottom-0 
dans la section

3. Quand le bas de la section parent dépasse le bas du viewport
→ Header fixé en bas de l’écran # fixed bottom-0
```