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
 * Pesca fino a 4 personaggi distinti dal pool, partendo dalla fascia di fama
 * più bassa (più famosi) ancora disponibile e completando con le fasce
 * successive se in quella fascia ce ne sono meno di 4.
 */
export function pescaQuattro(pool: Personaggio[]): Personaggio[] {
  const numeroDaPescare = Math.min(4, pool.length);
  if (numeroDaPescare === 0) return [];

  const fasceDisponibili = Array.from(new Set(pool.map((p) => p.fama))).sort(
    (a, b) => a - b,
  );

  let candidati: Personaggio[] = [];
  for (const fama of fasceDisponibili) {
    candidati = candidati.concat(pool.filter((p) => p.fama === fama));
    if (candidati.length >= numeroDaPescare) break;
  }

  return mescola(candidati).slice(0, numeroDaPescare);
}
