import type { CSSProperties } from "react";
import type { Personaggio } from "../data/personaggi";
import { coloreCategoria, siglaCategoria } from "../lib/categorie-stile";

interface CartaPersonaggioProps {
  personaggio: Personaggio;
  onScegli: (personaggio: Personaggio) => void;
}

export function CartaPersonaggio({
  personaggio,
  onScegli,
}: CartaPersonaggioProps) {
  const colore = coloreCategoria[personaggio.categoria];

  return (
    <button
      type="button"
      className="carta"
      style={{ "--colore-carta-badge": colore } as CSSProperties}
      onClick={() => onScegli(personaggio)}
    >
      <span className="carta-tacca" aria-hidden="true" />
      <span className="carta-badge">{siglaCategoria[personaggio.categoria]}</span>
      <span className="carta-nome">{personaggio.nome}</span>
      <span className="carta-suggerimento">
        {personaggio.contenutoCurato ? "Leggi la scheda →" : "Apri su Wikipedia →"}
      </span>
    </button>
  );
}
