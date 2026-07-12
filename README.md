# Ritratti

Una PWA in italiano per scoprire biografie di personaggi, persone attuali e
aziende. Pesca 4 voci alla volta (nome + categoria), scegline una per
leggerne la storia in una scheda curata e scritta internamente, mostrata
dentro l'app — e continua finché non le hai lette tutte. Un bottone
"Le tue letture" permette in ogni momento di rivedere l'elenco delle schede
già lette, raggruppate per categoria, e di riaprirle. Nessun account, nessun
backend: tutto gira nel browser e il progresso resta salvato solo sul tuo
dispositivo (`localStorage`).

## Come funziona

- Ad ogni estrazione vengono proposte 4 voci casuali non ancora lette,
  scelte con probabilità uniforme sull'intero pool disponibile (il campo
  `fama` è solo un'indicazione di notorietà, non influenza l'estrazione).
- Scegliendone una, l'app mostra la relativa scheda curata **dentro l'app**,
  scritta a mano (non generata da API esterne a runtime): solo quella voce
  viene segnata come letta, le altre tre tornano nel mazzo.
- Un filtro opzionale per categoria restringe il pool di estrazione.
- Il bottone "Le tue letture" nell'intestazione apre l'elenco di tutte le
  schede già lette, raggruppate per categoria, da cui è possibile riaprirle
  in qualunque momento.
- Quando il pool (globale o filtrato) si esaurisce, l'app mostra uno stato di
  completamento con la possibilità di azzerare la cronologia.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) per manifest e service
  worker (installabile, shell funzionante offline)
- Nessuna dipendenza a runtime oltre React: nessuna chiamata API, nessun
  database. Le schede curate sono file `.md` inclusi nella build tramite
  `import.meta.glob` di Vite e renderizzate con un piccolo parser Markdown
  scritto internamente (niente librerie esterne di markdown/HTML)

## Sviluppo

Richiede [Node.js](https://nodejs.org/) 18 o superiore.

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato in console (di norma `http://localhost:5173`).

## Build di produzione

```bash
npm run build
npm run preview   # per verificare in locale la build statica generata in dist/
```

L'output statico viene generato nella cartella `dist/` insieme al manifest
PWA e al service worker (`sw.js`), pronto per essere pubblicato così com'è su
qualunque hosting statico.

## Deploy su GitHub Pages

1. Imposta `base` in `vite.config.ts` sul nome del repository, es.
   `base: '/ritratti/'` (non necessario se pubblichi su un dominio/utente
   dedicato, es. `<utente>.github.io`).
2. `npm run build`.
3. Pubblica il contenuto di `dist/` sul branch `gh-pages`, ad esempio con
   `npx gh-pages -d dist`, oppure con il workflow incluso in
   [.github/workflows/deploy.yml](.github/workflows/deploy.yml), che esegue
   build e deploy automaticamente a ogni push su `main` tramite GitHub
   Actions verso GitHub Pages.

## Dati

L'elenco delle voci vive in
[src/data/personaggi.ts](src/data/personaggi.ts): 270 voci suddivise in 6
categorie — Scienziato 29,6% (80), Filosofo 14,8% (40), Attivista 14,8%
(40), Politico 14,8% (40), Persona attuale 11,1% (30), Azienda 14,8% (40) —
ciascuna con un livello di `fama` (1 = più nota).

Ogni voce ha `contenutoCurato: true`: la biografia è scritta internamente e
vive come file Markdown in `src/data/contenuti/<categoria-cartella>/<id>.md`
(ad esempio `scienziati/`, `filosofi/`, `attivisti/`, `politici/`,
`persone-attuali/`, `aziende/`), mostrato dentro l'app da
[DettaglioContenuto.tsx](src/components/DettaglioContenuto.tsx). Le 30
persone attuali e le 40 aziende coprono big data applicato a intelligenza
  artificiale, psicologia, genomica e longevità, elaborazione del linguaggio
  naturale e neuroscienze.

Per aggiungere voci basta estendere l'array in `personaggi.ts` (e, per le
categorie curate, aggiungere il relativo file `.md`) nello stesso formato.

## Icone PWA

Le icone in `public/icons/` sono generate proceduralmente (nessuna immagine
esterna) dallo script [scripts/generate-icons.cjs](scripts/generate-icons.cjs):

```bash
node scripts/generate-icons.cjs
```
