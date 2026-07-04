import type { Categoria } from "../data/personaggi";

const CHIAVE_LETTI = "ritratti:letti:v1";
const CHIAVE_FILTRO = "ritratti:filtro:v1";

export type Filtro = Categoria | "Tutte";

export function caricaLetti(): Set<string> {
  try {
    const grezzo = localStorage.getItem(CHIAVE_LETTI);
    if (!grezzo) return new Set();
    const array = JSON.parse(grezzo);
    if (!Array.isArray(array)) return new Set();
    return new Set(array.filter((v) => typeof v === "string"));
  } catch {
    return new Set();
  }
}

export function salvaLetti(letti: Set<string>): void {
  try {
    localStorage.setItem(CHIAVE_LETTI, JSON.stringify(Array.from(letti)));
  } catch {
    // storage non disponibile (es. modalità privata): il progresso resta solo in memoria
  }
}

export function caricaFiltro(): Filtro {
  try {
    const valore = localStorage.getItem(CHIAVE_FILTRO);
    return (valore as Filtro) ?? "Tutte";
  } catch {
    return "Tutte";
  }
}

export function salvaFiltro(filtro: Filtro): void {
  try {
    localStorage.setItem(CHIAVE_FILTRO, filtro);
  } catch {
    // ignorato: preferenza non persistita in questa sessione
  }
}
