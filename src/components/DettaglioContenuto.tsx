import type { CSSProperties } from "react";
import type { Personaggio } from "../data/personaggi";
import { coloreCategoria, siglaCategoria } from "../lib/categorie-stile";
import { ottieniContenutoCurato } from "../lib/contenuti";
import { renderizzaMarkdown } from "../lib/markdown";

interface DettaglioContenutoProps {
  personaggio: Personaggio;
  onTornaAlMazzo: () => void;
}

export function DettaglioContenuto({
  personaggio,
  onTornaAlMazzo,
}: DettaglioContenutoProps) {
  const markdown = ottieniContenutoCurato(personaggio.categoria, personaggio.id);
  const colore = coloreCategoria[personaggio.categoria];

  return (
    <article className="dettaglio" style={{ "--colore-carta-badge": colore } as CSSProperties}>
      <button type="button" className="bottone bottone-fantasma" onClick={onTornaAlMazzo}>
        ← Torna al mazzo
      </button>

      <header className="dettaglio-intestazione">
        <span className="carta-badge">{siglaCategoria[personaggio.categoria]}</span>
        <h2>{personaggio.nome}</h2>
      </header>

      {markdown ? (
        <div
          className="dettaglio-corpo"
          dangerouslySetInnerHTML={{ __html: renderizzaMarkdown(markdown) }}
        />
      ) : (
        <p className="dettaglio-corpo">
          Contenuto non ancora disponibile per questa voce.
        </p>
      )}
    </article>
  );
}
