# Istruzioni: dal codice sul tuo PC a un sito online su GitHub Pages

Questa guida presume che tu non abbia mai usato Git o GitHub prima. Ogni
passaggio spiega prima **a cosa serve** e poi **cosa scrivere/cliccare**. Se
segui i passi nell'ordine, alla fine avrai "Ritratti" pubblicato come sito
web reale, raggiungibile da chiunque con un link, che si aggiorna da solo
ogni volta che modifichi il codice.

---

## 0. I concetti di base (leggi questa parte per prima)

Prima di tutto, quattro parole che sentirai continuamente, spiegate senza
gergo tecnico.

### Git: la "macchina del tempo" del codice

Git è un programma installato sul tuo computer che tiene traccia di come
cambia una cartella di file nel tempo. Ogni volta che gli dici "salva questo
stato", Git fa una specie di fotografia completa di tutti i file in quel
momento e la chiama **commit**. La differenza rispetto a un normale
salvataggio (Ctrl+S) è che Git conserva *tutte* le fotografie precedenti, con
la loro data e una descrizione: puoi sempre tornare indietro a una versione
di ieri, della settimana scorsa o di sei mesi fa, o capire esattamente
*quale* modifica ha introdotto un bug. Questo è utile anche se lavori da
solo: è una rete di sicurezza contro gli errori.

Git funziona **interamente sul tuo computer**, non richiede internet. È già
installato sul tuo PC (l'abbiamo verificato: versione 2.52).

### GitHub: dove Git "vive" online

GitHub è un sito web che ospita copie dei tuoi repository Git, cosicché tu
possa accedervi da qualunque computer, condividerli con altre persone, e
(quello che ci interessa qui) pubblicarli come siti web veri e propri. Git e
GitHub sono due cose diverse: **Git** è lo strumento che gestisce la
cronologia sul tuo PC, **GitHub** è il servizio online dove ne conservi una
copia. Potresti usare Git senza mai toccare GitHub, ma per pubblicare un sito
ti serve GitHub (o un servizio equivalente).

### Repository ("repo"): la cartella tracciata da Git

Un repository è semplicemente una cartella di progetto che Git sta
monitorando. Il tuo progetto "Ritratti" è già un repository: quando abbiamo
lavorato al codice ho eseguito `git init`, il comando che dice a Git "da ora
in poi tieni traccia di questa cartella". Non è stato ancora fatto nessun
commit, quindi la cronologia è vuota: il primo commit lo farai tu tra poco.

### GitHub Pages e GitHub Actions: la pubblicazione automatica

**GitHub Pages** è un servizio gratuito di GitHub che prende i file di un
repository e li serve come sito web pubblico, con un indirizzo del tipo
`https://tuonome.github.io/nome-repository/`.

Il problema: il codice che scriviamo (React, TypeScript) non è direttamente
un sito web visualizzabile da un browser — va prima "compilato" (build) in
HTML/CSS/JavaScript puri con il comando `npm run build`. **GitHub Actions**
è un servizio che esegue automaticamente dei comandi sui server di GitHub
ogni volta che succede un evento scelto da te (nel nostro caso: ogni volta
che invii nuovo codice). Ho già preparato un file,
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), che dice a
GitHub Actions: "ogni volta che ricevi codice nuovo, installa le
dipendenze, esegui la build, e pubblica il risultato su GitHub Pages". Grazie
a questo, dopo la configurazione iniziale non dovrai mai più pubblicare
manualmente: basterà inviare il codice aggiornato.

---

## 1. Configura la tua identità Git

**A cosa serve:** ogni commit (fotografia) registra chi l'ha fatto, un po'
come una firma. Se non imposti nome ed email, Git rifiuta di creare commit.

Apri un terminale (PowerShell) nella cartella del progetto e scrivi,
sostituendo con i tuoi dati:

```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tua-email@esempio.com"
```

`--global` significa "usa questi dati per tutti i repository Git su questo
computer", non solo per questo progetto. Non serve che l'email coincida con
quella del tuo account GitHub, ma è buona pratica usare la stessa.

---

## 2. Crea un account GitHub (se non ce l'hai già)

Vai su [github.com](https://github.com) → "Sign up" → segui la procedura
(email, username, password). È gratuito e basta un account per sito
illimitati pubblici.

---

## 3. Crea un repository vuoto su GitHub

**A cosa serve:** è la "cartella" online che conterrà il tuo progetto.

1. Una volta loggato, clicca sul **+** in alto a destra → **New repository**.
2. **Repository name**: scegli un nome, ad esempio `ritratti`. Questo nome
   diventerà parte dell'indirizzo del tuo sito
   (`tuonome.github.io/ritratti/`), quindi tienilo a mente: ti servirà al
   passo 7.
3. **Public**: lascialo su "Public". GitHub Pages gratuito richiede repository
   pubblici (chiunque può vedere il codice sorgente, ma questo per un
   progetto come questo non è un problema).
4. **Importante**: NON selezionare le caselle "Add a README", "Add
   .gitignore" o "Choose a license". Il progetto sul tuo PC ha già questi
   file: se GitHub ne crea altri per conto suo, otterrai due cronologie
   diverse che non si uniscono in automatico (un fastidio da risolvere in
   più, del tutto evitabile lasciando il repository vuoto).
5. Clicca **Create repository**. Nella pagina successiva GitHub ti mostra un
   indirizzo simile a `https://github.com/tuonome/ritratti.git`: tienilo
   a portata di mano per il passo successivo.

---

## 4. Collega il repository locale a quello su GitHub

**A cosa serve:** finora Git sa solo che esiste una cronologia sulla tua
cartella locale. Un **remote** è un indirizzo che dici a Git: "quando te lo
chiedo, invia (o ricevi) le fotografie da/verso questo posto online".
`origin` è semplicemente il nome convenzionale che si dà al remote
principale.

Nel terminale, dentro la cartella del progetto:

```bash
git remote add origin https://github.com/tuonome/ritratti.git
```

Sostituisci l'indirizzo con quello che ti ha mostrato GitHub al passo 3.

---

## 5. Crea il primo commit

**A cosa serve:** stai per dire a Git "prendi una fotografia di tutti i file
attuali e conservala nella cronologia con questa descrizione".

```bash
git add .
git commit -m "Prima versione di Ritratti"
git branch -M main
```

Cosa fa ciascun comando:

- `git add .` sposta tutti i file modificati nella **staging area**, l'area
  di "preparazione" di ciò che finirà nel prossimo commit. Il punto `.`
  significa "tutti i file in questa cartella e sottocartelle" (i file
  elencati in `.gitignore`, come `node_modules` e `dist`, vengono
  automaticamente esclusi: non servono nella cronologia, si rigenerano da
  soli con `npm install` e `npm run build`).
- `git commit -m "..."` trasforma ciò che è in staging in una fotografia
  permanente della cronologia, con il messaggio che hai scritto.
- `git branch -M main` rinomina il "ramo" (branch, cioè una linea temporale
  di sviluppo) principale in `main`, il nome standard oggi usato da GitHub
  (in passato si chiamava `master`).

---

## 6. Invia il codice su GitHub (push) e autenticati

**A cosa serve:** finora la fotografia esiste solo sul tuo PC. `push`
("spingi") invia la cronologia al repository remoto su GitHub.

```bash
git push -u origin main
```

`-u origin main` dice a Git di ricordare che d'ora in poi `main` locale va
sincronizzato con `main` su `origin`: dopo questa prima volta basterà scrivere
`git push`.

**Punto importante per chi non ha mai usato GitHub da terminale:** da
agosto 2021 GitHub non accetta più la tua password dell'account per
autenticarti da riga di comando. Quando lanci `git push`, si aprirà una
finestra del browser per autenticarti (se hai Git Credential Manager, incluso
di norma nell'installazione Windows di Git) oppure ti verrà chiesta una
credenziale: in quel caso non usare la password del tuo account, ma un
**Personal Access Token (PAT)**, che è come una password usa-e-getta
generata apposta per questo scopo, revocabile in ogni momento senza cambiare
la password principale del tuo account.

Per crearne uno: su GitHub, clicca sulla tua foto profilo in alto a destra →
**Settings** → in fondo al menu a sinistra **Developer settings** →
**Personal access tokens** → **Tokens (classic)** → **Generate new token**.
Dai un nome al token, imposta una scadenza (es. 90 giorni), seleziona la
casella di permesso **repo**, e clicca genera. GitHub ti mostra il token
**una sola volta**: copialo subito. Quando il terminale ti chiede la
password durante il push, incolla quel token al posto della password.

**Alternativa più semplice se preferisci non usare il terminale:**
[GitHub Desktop](https://desktop.github.com/) è un programma gratuito con
un'interfaccia grafica che gestisce login, commit e push con pochi click,
senza dover ricordare comandi. Se il terminale ti mette a disagio, puoi usare
questo per i passi 4-6 (aprire il programma, "Add local repository",
selezionare la cartella, poi "Publish repository").

---

## 7. Imposta il percorso base del sito (`base`)

**A cosa serve:** GitHub Pages pubblica il tuo sito in una sottocartella
dell'indirizzo (`tuonome.github.io/ritratti/`, non alla radice). Se non lo
diciamo a Vite, il sito compilato cerca i propri file CSS/JS a partire dalla
radice del dominio e non li trova: la pagina si carica ma appare vuota o
rotta.

Apri [vite.config.ts](vite.config.ts). Il file, **al completo**, deve
somigliare a questo (solo la riga `base` va aggiunta/modificata, tutto il
resto — `react()`, `VitePWA({...})` — deve restare **esattamente com'era**):

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/ritratti/', // <-- sostituisci con il nome del tuo repository
  plugins: [
    react(),
    VitePWA({
      // ...tutta la configurazione che c'era già, invariata...
    }),
  ],
})
```

> ⚠️ **Errore facile da fare, e che è già successo in questo progetto:**
> se cancelli per sbaglio `react()` e `VitePWA({...})` dall'array
> `plugins`, lasciando solo un commento tipo `// ...`, il progetto smette
> di compilare: `react` e `VitePWA` restano importati in cima al file ma
> "non usati", e TypeScript blocca la build con un errore
> (`'react' is declared but its value is never read`). Prima di salvare,
> controlla che l'array `plugins` contenga ancora `react()` e il blocco
> `VitePWA({ ... })`: **stai solo aggiungendo la riga `base`**, non
> sostituendo il resto del file.

Dopo questa modifica, **verifica sempre in locale prima di inviare il
codice**, lanciando:

```bash
npm run build
```

Se questo comando finisce senza errori (vedrai una riga `✓ built in ...ms`),
puoi procedere. Se invece dà errore, il problema va risolto qui, sul tuo PC:
inviare comunque il codice a GitHub significherebbe far fallire anche la
pubblicazione automatica, esattamente con lo stesso errore.

Solo a build riuscita, ripeti i comandi del passo 5 e 6 (`git add .`,
`git commit -m "Imposta base path per GitHub Pages"`, `git push`) per
inviare la modifica.

---

## 8. Attiva GitHub Pages nel repository

**A cosa serve:** dice esplicitamente a GitHub "pubblica questo repository
come sito, usando il workflow di GitHub Actions che ho già preparato" invece
di un metodo di pubblicazione diverso.

> ⚠️ **Questo passaggio è indipendente dal codice e va fatto una volta sola
> sul sito di GitHub, con un clic — non nel terminale.** Se lo salti, il
> primo `push` fa comunque partire il workflow, ma questo si ferma a metà
> con un errore del tipo "Get Pages site failed" nel passaggio chiamato
> **"Prepara Pages"**: in pratica GitHub prova a pubblicare su un indirizzo
> che non esiste ancora, perché nessuno gli ha detto di crearlo. La build
> del codice può quindi risultare riuscita e il deploy fallire lo stesso: se
> vedi questo errore specifico nei log, il problema è qui, non nel codice.

1. Vai sulla pagina del tuo repository su GitHub.
2. Clicca **Settings** (in alto) → nel menu a sinistra **Pages**.
3. Sotto **Build and deployment → Source**, seleziona **GitHub Actions**
   (non "Deploy from a branch").

Non serve altro: il file `.github/workflows/deploy.yml` già presente nel
progetto si occuperà da qui in avanti di tutto il resto ogni volta che invii
codice nuovo con `git push`. Se avevi già fatto un push prima di completare
questo passaggio, non preoccuparti: non serve rifare il push, basta
rilanciare manualmente l'ultima esecuzione fallita (scheda **Actions** →
apri l'esecuzione fallita → pulsante **Re-run all jobs** in alto a destra).

---

## 9. Verifica che il sito sia online

1. Sulla pagina del repository, clicca la scheda **Actions** in alto.
2. Vedrai un'esecuzione del workflow "Deploy su GitHub Pages" partita subito
   dopo il tuo `push`. Un pallino giallo/arancione significa "in corso", un
   segno di spunta verde "completato con successo", una X rossa "fallito"
   (in quel caso clicca sull'esecuzione per leggere il log ed capire quale
   passaggio ha dato errore).
3. Quando è verde, torna in **Settings → Pages**: in cima alla pagina
   troverai il link pubblico del sito, del tipo
   `https://tuonome.github.io/ritratti/`. Aprilo: è il tuo sito, live.

La prima pubblicazione può richiedere qualche minuto in più delle successive.

---

## 10. Come aggiornare il sito in futuro

Ogni volta che modifichi il codice (anche solo un file), per pubblicare la
nuova versione ti servono solo tre comandi, sempre nello stesso ordine:

```bash
git add .
git commit -m "Descrizione breve di cosa hai cambiato"
git push
```

Il `push` fa scattare automaticamente il workflow di GitHub Actions, che
ricompila il progetto e aggiorna il sito online in un paio di minuti, senza
altri interventi manuali. Questo è il vantaggio concreto di aver collegato
GitHub Actions fin da subito: la pubblicazione smette di essere un passo
separato da ricordare e diventa una conseguenza automatica del salvare il
lavoro.

---

## 11. Installare l'app sul telefono o sul PC una volta online

Una volta che il sito è pubblico, puoi installarlo come app vera (PWA):

- **Android/Chrome:** apri il link → menu (⋮) → "Installa app" / "Aggiungi a
  schermata Home".
- **iPhone/Safari:** apri il link → icona di condivisione → "Aggiungi alla
  schermata Home" (deve essere fatto da Safari, non da Chrome).
- **PC (Chrome/Edge):** apri il link → icona di installazione nella barra
  degli indirizzi → "Installa".

Dopo l'installazione l'app funziona anche offline grazie al service worker
già configurato nel progetto.

---

## Problemi comuni

**`fatal: remote origin already exists`** — hai già eseguito `git remote
add origin` in precedenza. Per correggere l'indirizzo:
`git remote set-url origin https://github.com/tuonome/ritratti.git`.

**Il push chiede username e password e la password viene rifiutata** — stai
usando la password dell'account invece del Personal Access Token: rileggi il
passo 6.

**Il sito si apre ma è bianco/rotto** — quasi sempre è il `base` nel passo 7
non impostato o impostato con un nome diverso da quello reale del
repository. Controlla che corrisponda esattamente, comprese maiuscole/
minuscole.

**Il workflow in Actions fallisce (X rossa)** — clicca sull'esecuzione
fallita, poi sul passaggio con la X per leggere l'errore specifico. I due
casi già osservati su questo progetto sono i seguenti due punti; per
qualunque altro errore, il messaggio nel log del passaggio "Build" descrive
quasi sempre esattamente cosa non va, ed è lo stesso identico errore che
otterresti lanciando `npm run build` sul tuo PC prima di inviare il codice —
motivo in più per lanciare sempre `npm run build` in locale prima di ogni
`git push`.

**Il passaggio "Build" fallisce con un errore di TypeScript tipo `'react' is
declared but its value is never read`** — è successo la prima volta che è
stato modificato `vite.config.ts` per aggiungere il `base` path (passo 7):
l'array `plugins` era rimasto con solo un commento al posto di `react()` e
`VitePWA({...})`, quindi quei due import in cima al file risultavano "mai
usati" e TypeScript blocca la build per sicurezza. La correzione è
ripristinare `plugins: [react(), VitePWA({ ... })]` con la configurazione
PWA completa, lasciando invariata solo l'aggiunta della riga `base`.

**Il passaggio "Build" riesce ma il passaggio "Prepara Pages" fallisce con
un errore tipo `Get Pages site failed`** — significa che il passo 8
(Settings → Pages → Source: GitHub Actions) non è ancora stato completato:
il repository non ha ancora un sito Pages configurato a cui GitHub possa
pubblicare il risultato. Completa il passo 8, poi rilancia l'esecuzione
fallita da Actions con **Re-run all jobs**, senza bisogno di un nuovo
`push`.
