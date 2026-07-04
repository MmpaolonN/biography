import { useEffect, useMemo, useState } from "react";
import { personaggi, type Personaggio } from "./data/personaggi";
import { pescaQuattro } from "./lib/estrazione";
import {
  caricaFiltro,
  caricaLetti,
  salvaFiltro,
  salvaLetti,
  type Filtro,
} from "./lib/storage";
import { Intestazione } from "./components/Intestazione";
import { FiltroCategorie } from "./components/FiltroCategorie";
import { CartaPersonaggio } from "./components/CartaPersonaggio";
import { DettaglioContenuto } from "./components/DettaglioContenuto";
import "./App.css";

const ETICHETTA_FILTRO: Record<Filtro, string> = {
  Tutte: "tutte le categorie",
  Scienziato: "Scienziati",
  Filosofo: "Filosofi",
  Attivista: "Attivisti",
  Politico: "Politici",
  "Persona attuale": "Persone attuali",
  Azienda: "Aziende",
};

function App() {
  const [letti, setLetti] = useState<Set<string>>(() => caricaLetti());
  const [filtro, setFiltro] = useState<Filtro>(() => caricaFiltro());
  const [carteAttuali, setCarteAttuali] = useState<Personaggio[]>([]);
  const [dettaglioAttivo, setDettaglioAttivo] = useState<Personaggio | null>(null);

  useEffect(() => {
    salvaLetti(letti);
  }, [letti]);

  useEffect(() => {
    salvaFiltro(filtro);
  }, [filtro]);

  const personaggiFiltrati = useMemo(
    () =>
      filtro === "Tutte"
        ? personaggi
        : personaggi.filter((p) => p.categoria === filtro),
    [filtro],
  );

  const poolDisponibile = useMemo(
    () => personaggiFiltrati.filter((p) => !letti.has(p.id)),
    [personaggiFiltrati, letti],
  );

  const lettiTotali = letti.size;
  const totaleGenerale = personaggi.length;
  const lettiNelFiltro = personaggiFiltrati.length - poolDisponibile.length;

  function pesca() {
    setCarteAttuali(pescaQuattro(poolDisponibile));
  }

  function scegli(personaggio: Personaggio) {
    setLetti((precedenti) => {
      const aggiornati = new Set(precedenti);
      aggiornati.add(personaggio.id);
      return aggiornati;
    });
    setCarteAttuali([]);

    if (personaggio.contenutoCurato) {
      setDettaglioAttivo(personaggio);
    } else {
      window.open(personaggio.url, "_blank", "noopener");
    }
  }

  function cambiaFiltro(nuovoFiltro: Filtro) {
    setFiltro(nuovoFiltro);
    setCarteAttuali([]);
  }

  function reimposta() {
    const conferma = window.confirm(
      "Azzerare tutta la cronologia di lettura? I personaggi già letti torneranno disponibili.",
    );
    if (!conferma) return;
    setLetti(new Set());
    setCarteAttuali([]);
  }

  const categoriaEsaurita = poolDisponibile.length === 0;

  if (dettaglioAttivo) {
    return (
      <div className="app">
        <DettaglioContenuto
          personaggio={dettaglioAttivo}
          onTornaAlMazzo={() => setDettaglioAttivo(null)}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <Intestazione
        letti={lettiTotali}
        totale={totaleGenerale}
        onReimposta={reimposta}
        mostraReimposta={lettiTotali > 0}
      />

      <main className="contenuto">
        <FiltroCategorie filtro={filtro} onCambia={cambiaFiltro} />

        {filtro !== "Tutte" && !categoriaEsaurita && (
          <p className="info-filtro">
            {lettiNelFiltro} / {personaggiFiltrati.length} letti in questa
            categoria
          </p>
        )}

        {categoriaEsaurita ? (
          <div className="pannello-stato" role="status">
            {filtro === "Tutte" ? (
              <>
                <h2>Hai letto tutti i personaggi!</h2>
                <p>
                  Complimenti: hai esplorato tutte e {totaleGenerale} le
                  biografie disponibili in Ritratti.
                </p>
                <button
                  type="button"
                  className="bottone bottone-primario"
                  onClick={reimposta}
                >
                  Ricomincia da capo
                </button>
              </>
            ) : (
              <>
                <h2>Categoria completata</h2>
                <p>
                  Hai letto tutti i personaggi della categoria{" "}
                  {ETICHETTA_FILTRO[filtro]}. Prova un&apos;altra categoria o
                  ricomincia da capo.
                </p>
                <div className="pannello-azioni">
                  <button
                    type="button"
                    className="bottone bottone-primario"
                    onClick={() => cambiaFiltro("Tutte")}
                  >
                    Esplora tutte le categorie
                  </button>
                  <button
                    type="button"
                    className="bottone bottone-fantasma"
                    onClick={reimposta}
                  >
                    Ricomincia da capo
                  </button>
                </div>
              </>
            )}
          </div>
        ) : carteAttuali.length === 0 ? (
          <div className="pannello-stato">
            <h2>{lettiTotali === 0 ? "Pronto a iniziare?" : "Continua a scoprire"}</h2>
            <p>
              Pesca 4 personaggi e scegline uno per leggere la sua biografia:
              su Wikipedia per le categorie storiche, dentro l'app per le
              persone attuali e le aziende.
            </p>
            <button
              type="button"
              className="bottone bottone-primario"
              onClick={pesca}
            >
              {lettiTotali === 0 ? "Pesca 4 personaggi" : "Pesca altri 4"}
            </button>
          </div>
        ) : (
          <div className="griglia-carte">
            {carteAttuali.map((personaggio) => (
              <CartaPersonaggio
                key={personaggio.id}
                personaggio={personaggio}
                onScegli={scegli}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="piede">
        <p>
          Le categorie storiche rimandano a{" "}
          <a href="https://it.wikipedia.org" target="_blank" rel="noopener">
            Wikipedia in italiano
          </a>
          ; persone attuali e aziende hanno una scheda curata dentro l'app.
        </p>
      </footer>
    </div>
  );
}

export default App;
