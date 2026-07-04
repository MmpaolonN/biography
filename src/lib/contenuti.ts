import type { Categoria } from "../data/personaggi";

const CARTELLA_PER_CATEGORIA: Partial<Record<Categoria, string>> = {
  "Persona attuale": "persone-attuali",
  Azienda: "aziende",
};

const file = import.meta.glob("../data/contenuti/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/** Restituisce il markdown curato per un personaggio con contenuto interno, se esiste. */
export function ottieniContenutoCurato(
  categoria: Categoria,
  id: string,
): string | undefined {
  const cartella = CARTELLA_PER_CATEGORIA[categoria];
  if (!cartella) return undefined;

  const chiave = Object.keys(file).find((percorso) =>
    percorso.endsWith(`/contenuti/${cartella}/${id}.md`),
  );
  return chiave ? file[chiave] : undefined;
}
