import type { CSSProperties } from "react";
import type { Categoria, Personaggio } from "../data/personaggi";
import { categorie } from "../data/personaggi";
import { coloreCategoria, siglaCategoria } from "../lib/categorie-stile";

interface ElencoLettiProps {
  personaggiLetti: Personaggio[];
  onApri: (personaggio: Personaggio) => void;
  onChiudi: () => void;
}

export function ElencoLetti({
  personaggiLetti,
  onApri,
  onChiudi,
}: ElencoLettiProps) {
  const gruppi: Array<[Categoria, Personaggio[]]> = categorie
    .map((categoria): [Categoria, Personaggio[]] => [
      categoria,
      personaggiLetti
        .filter((p) => p.categoria === categoria)
        .sort((a, b) => a.nome.localeCompare(b.nome, "it")),
    ])
    .filter(([, elenco]) => elenco.length > 0);

  return (
    <div className="elenco-letti">
      <button type="button" className="bottone bottone-fantasma" onClick={onChiudi}>
        ← Torna al mazzo
      </button>

      <header className="elenco-letti-intestazione">
        <h2>Le tue letture</h2>
        <p>
          {personaggiLetti.length === 0
            ? "Non hai ancora letto nessuna scheda."
            : personaggiLetti.length === 1
              ? "1 scheda letta finora. Tocca il nome per riaprirla."
              : `${personaggiLetti.length} schede lette finora. Tocca un nome per riaprirla.`}
        </p>
      </header>

      {gruppi.map(([categoria, elenco]) => (
        <section key={categoria} className="elenco-letti-gruppo">
          <h3
            className="elenco-letti-titolo-gruppo"
            style={{ color: coloreCategoria[categoria] }}
          >
            {siglaCategoria[categoria]} · {elenco.length}
          </h3>
          <ul className="elenco-letti-lista">
            {elenco.map((personaggio) => (
              <li key={personaggio.id}>
                <button
                  type="button"
                  className="elenco-letti-voce"
                  style={{ "--colore-carta-badge": coloreCategoria[categoria] } as CSSProperties}
                  onClick={() => onApri(personaggio)}
                >
                  {personaggio.nome}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
