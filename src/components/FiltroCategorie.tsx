import type { CSSProperties } from "react";
import type { Categoria } from "../data/personaggi";
import type { Filtro } from "../lib/storage";
import { categorie } from "../data/personaggi";
import { coloreCategoria } from "../lib/categorie-stile";

const ETICHETTE: Record<Filtro, string> = {
  Tutte: "Tutte",
  Scienziato: "Scienziati",
  Filosofo: "Filosofi",
  Attivista: "Attivisti",
  Politico: "Politici",
  "Persona attuale": "Persone attuali",
  Azienda: "Aziende",
};

interface FiltroCategorieProps {
  filtro: Filtro;
  onCambia: (filtro: Filtro) => void;
}

export function FiltroCategorie({ filtro, onCambia }: FiltroCategorieProps) {
  const opzioni: Filtro[] = ["Tutte", ...categorie];

  return (
    <div
      className="filtro-categorie"
      role="group"
      aria-label="Filtra per categoria"
    >
      {opzioni.map((opzione) => {
        const attiva = opzione === filtro;
        const colore =
          opzione === "Tutte"
            ? undefined
            : coloreCategoria[opzione as Categoria];
        return (
          <button
            key={opzione}
            type="button"
            className={`chip${attiva ? " chip-attiva" : ""}`}
            style={
              attiva && colore
                ? ({ "--colore-chip": colore } as CSSProperties)
                : undefined
            }
            aria-pressed={attiva}
            onClick={() => onCambia(opzione)}
          >
            {ETICHETTE[opzione]}
          </button>
        );
      })}
    </div>
  );
}
