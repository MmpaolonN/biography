import type { Personaggio } from "../data/personaggi";

function mescola<T>(elementi: T[]): T[] {
  const copia = elementi.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Pesca fino a 4 personaggi distinti a caso dall'intero pool disponibile,
 * ignorando la fascia di fama: ogni estrazione è indipendente dalle
 * precedenti e dal ricaricamento della pagina.
 */
export function pescaQuattro(pool: Personaggio[]): Personaggio[] {
  const numeroDaPescare = Math.min(4, pool.length);
  if (numeroDaPescare === 0) return [];

  return mescola(pool).slice(0, numeroDaPescare);
}
