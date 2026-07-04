import type { Categoria } from "../data/personaggi";

export const coloreCategoria: Record<Categoria, string> = {
  Scienziato: "#1f7a8c",
  Filosofo: "#6b4ba1",
  Attivista: "#3f7d52",
  Politico: "#a3324a",
  "Persona attuale": "#c77d1f",
  Azienda: "#3a5a8c",
};

export const siglaCategoria: Record<Categoria, string> = {
  Scienziato: "Scienziato",
  Filosofo: "Filosofo",
  Attivista: "Attivista",
  Politico: "Politico",
  "Persona attuale": "Attuale",
  Azienda: "Azienda",
};
